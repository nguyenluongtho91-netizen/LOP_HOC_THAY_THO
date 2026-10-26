/**
 * Tab Detection Service - Phát hiện và xử lý chuyển tab/cửa sổ
 * 
 * Features:
 * - Theo dõi khi học sinh chuyển tab/window
 * - Phát âm thanh cảnh báo bíp bíp / còi hú to rõ ngay khi chuyển tab
 * - Cảnh báo 3 lần, quá 3 lần tự động nộp bài
 * - Block F12/DevTools/Chuột phải
 */

export type TabSwitchCallback = (switchCount: number, warnings: Date[]) => void;
export type AutoSubmitCallback = () => void;

/**
 * Phát âm thanh cảnh báo bằng Web Audio API (chạy mượt trên mọi trình duyệt/thiết bị)
 */
export function playTabAlertSound(type: 'warning' | 'danger' = 'warning') {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }
    const now = ctx.currentTime;

    if (type === 'danger') {
      // Còi báo động dồn dập (siren) 4 nhịp cao thấp khi bị thu bài / vi phạm nghiêm trọng
      for (let i = 0; i < 4; i++) {
        const start = now + i * 0.16;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(i % 2 === 0 ? 987.77 : 659.25, start);
        gain.gain.setValueAtTime(0.5, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.14);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.15);
      }
    } else {
      // 3 tiếng bíp cảnh báo to rõ, dứt khoát
      for (let i = 0; i < 3; i++) {
        const start = now + i * 0.14;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, start); // Nốt La cao (A5)
        gain.gain.setValueAtTime(0.45, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.11);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.12);
      }
    }
  } catch (err) {
    console.warn('[TabDetection] Audio playback error:', err);
  }
}

/**
 * Mở khóa AudioContext khi người dùng tương tác với trang lần đầu
 */
export function unlockAudio() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      const resume = () => {
        void ctx.resume();
        window.removeEventListener('click', resume);
        window.removeEventListener('keydown', resume);
        window.removeEventListener('touchstart', resume);
      };
      window.addEventListener('click', resume, { once: true });
      window.addEventListener('keydown', resume, { once: true });
      window.addEventListener('touchstart', resume, { once: true });
    }
  } catch {
    // ignore
  }
}

export class TabDetectionService {
  private switchCount: number = 0;
  private warnings: Date[] = [];
  private isActive: boolean = false;
  private maxAllowedSwitches: number = 3;
  private lastSwitchTime: number = 0;
  
  private onTabSwitch?: TabSwitchCallback;
  private onAutoSubmit?: AutoSubmitCallback;
  
  constructor() {
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  /**
   * Khởi động service theo dõi
   */
  start(callbacks: {
    onTabSwitch?: TabSwitchCallback;
    onAutoSubmit?: AutoSubmitCallback;
    maxSwitches?: number;
  }) {
    if (this.isActive) return;
    
    this.onTabSwitch = callbacks.onTabSwitch;
    this.onAutoSubmit = callbacks.onAutoSubmit;
    this.maxAllowedSwitches = callbacks.maxSwitches ?? 3;
    this.isActive = true;

    unlockAudio();

    // Theo dõi visibility change
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    
    // Theo dõi window blur
    window.addEventListener('blur', this.handleBlur);
    
    // Block phím tắt nguy hiểm
    document.addEventListener('keydown', this.handleKeyDown);
    
    // Block right click
    document.addEventListener('contextmenu', this.handleContextMenu);

    console.log('🔒 Tab Detection Service started - Max switches allowed:', this.maxAllowedSwitches);
  }

  /**
   * Dừng service
   */
  stop() {
    if (!this.isActive) return;
    
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    window.removeEventListener('blur', this.handleBlur);
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    
    this.isActive = false;
    console.log('🔓 Tab Detection Service stopped');
  }

  /**
   * Xử lý khi tab bị ẩn hoặc hiện lại
   */
  private handleVisibilityChange() {
    if (document.hidden) {
      this.recordSwitch();
    } else {
      // Khi học sinh quay lại tab, phát lại âm thanh cảnh báo nếu vừa vi phạm
      if (this.switchCount > 0 && Date.now() - this.lastSwitchTime < 3000) {
        playTabAlertSound(this.switchCount > this.maxAllowedSwitches ? 'danger' : 'warning');
      }
    }
  }

  private isPaused: boolean = false;

  /**
   * Tạm dừng giám sát tạm thời (ví dụ: khi mở camera / chọn file ảnh tự luận)
   */
  pause(durationMs: number = 60000) {
    this.isPaused = true;
    setTimeout(() => {
      this.isPaused = false;
    }, durationMs);
  }

  resume() {
    this.isPaused = false;
  }

  /**
   * Xử lý khi window mất focus (chuyển sang cửa sổ khác, chia đôi màn hình...)
   */
  private handleBlur() {
    setTimeout(() => {
      if (!this.isActive || this.isPaused) return;
      // Bắt cả trường hợp chuyển tab (document.hidden) lẫn click sang app khác (!document.hasFocus())
      if (document.hidden || !document.hasFocus()) {
        this.recordSwitch();
      }
    }, 500);
  }

  /**
   * Block các phím tắt nguy hiểm
   */
  private handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
  }

  /**
   * Block right click
   */
  private handleContextMenu(e: MouseEvent) {
    e.preventDefault();
    return false;
  }

  /**
   * Ghi nhận một lần chuyển tab
   */
  private recordSwitch() {
    if (!this.isActive) return;

    const nowMs = Date.now();
    // Chống đếm đúp khi visibilitychange và blur cùng kích hoạt trong 1.5 giây
    if (nowMs - this.lastSwitchTime < 1500) {
      return;
    }
    this.lastSwitchTime = nowMs;

    this.switchCount++;
    const now = new Date();
    this.warnings.push(now);

    console.warn(`⚠️ Tab switch detected! Count: ${this.switchCount}/${this.maxAllowedSwitches}`);

    const isOverLimit = this.switchCount > this.maxAllowedSwitches;

    // Phát âm thanh cảnh báo ngay lập tức
    playTabAlertSound(isOverLimit ? 'danger' : 'warning');

    // Callback hiển thị thông báo
    if (this.onTabSwitch) {
      this.onTabSwitch(this.switchCount, [...this.warnings]);
    }

    // Quá 3 lần -> Tự động nộp bài luôn
    if (isOverLimit) {
      console.error(`🚨 AUTO SUBMIT - Tab switch count exceeded limit (${this.switchCount} > ${this.maxAllowedSwitches})!`);
      if (this.onAutoSubmit) {
        this.onAutoSubmit();
      }
    }
  }

  /**
   * Lấy thông tin hiện tại
   */
  getStats() {
    return {
      switchCount: this.switchCount,
      warnings: [...this.warnings],
      isActive: this.isActive,
      maxAllowedSwitches: this.maxAllowedSwitches
    };
  }

  /**
   * Reset counter (chỉ dùng khi test)
   */
  reset() {
    this.switchCount = 0;
    this.warnings = [];
    this.lastSwitchTime = 0;
  }
}

// Singleton instance
let instance: TabDetectionService | null = null;

export const getTabDetectionService = (): TabDetectionService => {
  if (!instance) {
    instance = new TabDetectionService();
  }
  return instance;
};
