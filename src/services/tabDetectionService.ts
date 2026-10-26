/**
 * Tab Detection Service - Phát hiện và xử lý chuyển tab/cửa sổ
 * 
 * Features:
 * - Theo dõi khi học sinh chuyển tab/window hoặc chia đôi màn hình
 * - Phát âm thanh cảnh báo to rõ kết hợp Web Audio API + HTML5 Data URI (chạy 100% trên cả iPhone/Android/PC)
 * - Cảnh báo 3 lần, quá 3 lần tự động nộp bài
 * - Block F12/DevTools/Chuột phải
 */

export type TabSwitchCallback = (switchCount: number, warnings: Date[]) => void;
export type AutoSubmitCallback = () => void;

// Tạo chuỗi WAV Data URI để đảm bảo phát được âm thanh ngay cả khi AudioContext bị chặn
function createBeepWav(freq: number = 880, durationMs: number = 300): string {
  const sampleRate = 22050;
  const numSamples = Math.floor(sampleRate * (durationMs / 1000));
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  view.setUint32(0, 0x52494646, false); // "RIFF"
  view.setUint32(4, 36 + numSamples * 2, true);
  view.setUint32(8, 0x57415645, false); // "WAVE"
  view.setUint32(12, 0x666d7420, false); // "fmt "
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  view.setUint32(36, 0x64617461, false); // "data"
  view.setUint32(40, numSamples * 2, true);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const fade = 1 - (i / numSamples);
    const sample = Math.sin(2 * Math.PI * freq * t) * 0.75 * fade;
    view.setInt16(44 + i * 2, sample < 0 ? sample * 32768 : sample * 32767, true);
  }

  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return 'data:audio/wav;base64,' + btoa(binary);
}

const BEEP_WAV = createBeepWav(880, 300);
const DANGER_WAV = createBeepWav(520, 450);

// AudioContext Singleton được mở khóa sẵn từ lần chạm đầu tiên
let globalAudioCtx: AudioContext | null = null;

function getGlobalAudioContext(): AudioContext | null {
  try {
    if (typeof window === 'undefined') return null;
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return null;
    if (!globalAudioCtx) {
      globalAudioCtx = new AudioCtx();
    }
    if (globalAudioCtx.state === 'suspended') {
      void globalAudioCtx.resume();
    }
    return globalAudioCtx;
  } catch {
    return null;
  }
}

/**
 * Mở khóa âm thanh trình duyệt ngay khi người dùng click/chạm vào màn hình
 */
export function unlockAudio() {
  try {
    const ctx = getGlobalAudioContext();
    if (ctx && ctx.state === 'suspended') {
      void ctx.resume();
    }
  } catch {}
}

// Tự động lắng nghe sự kiện tương tác đầu tiên để mở khóa âm thanh
if (typeof window !== 'undefined') {
  const triggerUnlock = () => {
    unlockAudio();
    window.removeEventListener('click', triggerUnlock);
    window.removeEventListener('touchstart', triggerUnlock);
    window.removeEventListener('keydown', triggerUnlock);
  };
  window.addEventListener('click', triggerUnlock, { once: true, passive: true });
  window.addEventListener('touchstart', triggerUnlock, { once: true, passive: true });
  window.addEventListener('keydown', triggerUnlock, { once: true, passive: true });
}

/**
 * Phát âm thanh cảnh báo bằng cả Web Audio API và HTML5 Audio Data URI (Dual Mode)
 */
export function playTabAlertSound(type: 'warning' | 'danger' = 'warning') {
  // 1. Cách 1: Phát qua HTML5 Audio element với Data URI (không phụ thuộc AudioContext)
  try {
    const snd = new Audio(type === 'danger' ? DANGER_WAV : BEEP_WAV);
    snd.volume = 1.0;
    const playPromise = snd.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Trình duyệt chặn autoplay khi tab ẩn, sẽ được phát nhắc lại khi tab hiện lại
      });
    }
  } catch (e) {
    // ignore
  }

  // 2. Cách 2: Phát qua Web Audio API (âm thanh đa tần số đanh thép)
  try {
    const ctx = getGlobalAudioContext();
    if (ctx && ctx.state !== 'suspended') {
      const now = ctx.currentTime;
      if (type === 'danger') {
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
        for (let i = 0; i < 3; i++) {
          const start = now + i * 0.14;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(880, start);
          gain.gain.setValueAtTime(0.45, start);
          gain.gain.exponentialRampToValueAtTime(0.01, start + 0.11);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.12);
        }
      }
    }
  } catch (err) {
    console.warn('[TabDetection] AudioContext playback note:', err);
  }
}

export class TabDetectionService {
  private switchCount: number = 0;
  private warnings: Date[] = [];
  private isActive: boolean = false;
  private maxAllowedSwitches: number = 3;
  private lastSwitchTime: number = 0;
  private isPaused: boolean = false;
  
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
    // Luôn cập nhật callback mới nhất khi start được gọi
    this.onTabSwitch = callbacks.onTabSwitch;
    this.onAutoSubmit = callbacks.onAutoSubmit;
    this.maxAllowedSwitches = callbacks.maxSwitches ?? 3;
    this.switchCount = 0;
    this.warnings = [];
    this.lastSwitchTime = 0;
    this.isPaused = false;

    unlockAudio();

    if (this.isActive) return;
    this.isActive = true;

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
   * Xử lý khi tab bị ẩn hoặc hiện lại
   */
  private handleVisibilityChange() {
    if (!this.isActive || this.isPaused) return;

    if (document.hidden) {
      this.recordSwitch();
    } else {
      // Khi học sinh quay lại tab, phát âm thanh cảnh báo nhắc lại ngay lập tức
      unlockAudio();
      if (this.switchCount > 0) {
        playTabAlertSound(this.switchCount > this.maxAllowedSwitches ? 'danger' : 'warning');
      }
    }
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
    }, 400);
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
    if (!this.isActive || this.isPaused) return;

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
