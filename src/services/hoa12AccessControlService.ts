// src/services/hoa12AccessControlService.ts
// Quản lý quyền truy cập học liệu Hóa 12 & Khóa bảo mật đồng bộ đám mây Supabase

import { supabase } from '@/lib/supabase';

export const STORE_TITLE = '__HOA12_ACCESS_CONTROL__';
const LOCAL_STORAGE_KEY = 'hoa12_cloud_access_config_v1';

export interface Hoa12AccessConfig {
  is_locked: boolean;
  passcode: string;
  auth_version: number;
  teacher_pin?: string;
  updated_at: string;
}

const DEFAULT_CONFIG: Hoa12AccessConfig = {
  is_locked: true,
  passcode: 'THAYTHO2026',
  auth_version: 1,
  teacher_pin: 'THAYTHO',
  updated_at: new Date().toISOString(),
};

let memoryConfig: Hoa12AccessConfig = { ...DEFAULT_CONFIG };

// Khởi tạo từ LocalStorage nếu có
try {
  if (typeof window !== 'undefined') {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      memoryConfig = { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
    }
  }
} catch (e) {
  console.warn('Lỗi đọc local access config:', e);
}

/**
 * 1. Đọc cấu hình đồng bộ (không chờ mạng)
 */
export function getHoa12AccessConfigSync(): Hoa12AccessConfig {
  return memoryConfig;
}

/**
 * 2. Tải cấu hình mới nhất từ Supabase Cloud
 */
export async function fetchHoa12AccessConfig(): Promise<Hoa12AccessConfig> {
  try {
    const { data, error } = await supabase
      .from('exams')
      .select('data')
      .eq('title', STORE_TITLE)
      .maybeSingle();

    if (!error && data?.data) {
      memoryConfig = { ...DEFAULT_CONFIG, ...data.data };
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memoryConfig));
        // Đồng bộ các key tương thích cũ
        localStorage.setItem('hoa12_lock_status', memoryConfig.is_locked ? 'locked' : 'open');
        localStorage.setItem('hoa12_c5_lock_status', memoryConfig.is_locked ? 'locked' : 'open');
        localStorage.setItem('hoa12_passcode', memoryConfig.passcode);
        localStorage.setItem('hoa12_c5_passcode', memoryConfig.passcode);
      }
    }
  } catch (err) {
    console.warn('Lỗi đồng bộ cấu hình quyền Hóa 12 từ Cloud:', err);
  }
  return memoryConfig;
}

/**
 * 3. Lưu cấu hình mới lên Cloud và LocalStorage
 */
export async function saveHoa12AccessConfig(
  updates: Partial<Hoa12AccessConfig>
): Promise<Hoa12AccessConfig> {
  memoryConfig = {
    ...memoryConfig,
    ...updates,
    updated_at: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memoryConfig));
    localStorage.setItem('hoa12_lock_status', memoryConfig.is_locked ? 'locked' : 'open');
    localStorage.setItem('hoa12_c5_lock_status', memoryConfig.is_locked ? 'locked' : 'open');
    if (memoryConfig.passcode) {
      localStorage.setItem('hoa12_passcode', memoryConfig.passcode);
      localStorage.setItem('hoa12_c5_passcode', memoryConfig.passcode);
    }
  }

  try {
    await supabase.from('exams').upsert({
      title: STORE_TITLE,
      data: memoryConfig,
    }, { onConflict: 'title' });
  } catch (err) {
    console.error('Lỗi lưu cấu hình quyền Hóa 12 lên Cloud:', err);
  }

  return memoryConfig;
}

/**
 * 4. ĐẶC QUYỀN THẦY GIÁO: CẤM QUYỀN TOÀN BỘ HỌC SINH (Khóa tức thì trên toàn bộ thiết bị)
 */
export async function revokeAllStudentsAccess(): Promise<Hoa12AccessConfig> {
  const newVersion = Date.now();
  const updated = await saveHoa12AccessConfig({
    is_locked: true,
    auth_version: newVersion,
  });

  if (typeof window !== 'undefined') {
    localStorage.removeItem('hoa12_student_authorized');
    localStorage.removeItem('hoa12_student_auth_version');
  }

  return updated;
}

/**
 * 5. Kiểm tra học sinh có được phép vào bài học hay không
 */
export function checkIsStudentAuthorized(isTeacher: boolean, config: Hoa12AccessConfig = memoryConfig): boolean {
  if (isTeacher) return true; // Thầy giáo luôn được phép

  // Nếu Thầy chọn chế độ MỞ TỰ DO
  if (!config.is_locked) return true;

  if (typeof window === 'undefined') return false;

  // Nếu đang khóa, học sinh phải có cờ ủy quyền VÀ phiên bản cấp quyền phải >= phiên bản của Thầy
  const isAuthorized = localStorage.getItem('hoa12_student_authorized') === 'true';
  const myVersion = Number(localStorage.getItem('hoa12_student_auth_version') || 0);

  if (isAuthorized && myVersion >= (config.auth_version || 1)) {
    return true;
  }

  return false;
}

/**
 * 6. Học sinh nhập mã cấp quyền để mở khóa
 */
export function tryAuthorizeStudentWithPasscode(
  inputCode: string,
  config: Hoa12AccessConfig = memoryConfig
): { success: boolean; message: string } {
  if (!inputCode || !inputCode.trim()) {
    return { success: false, message: 'Vui lòng nhập mã cấp quyền do Thầy Thọ cấp!' };
  }

  const cleanInput = inputCode.trim().toUpperCase();
  const validCode = (config.passcode || 'THAYTHO2026').trim().toUpperCase();

  if (cleanInput === validCode) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('hoa12_student_authorized', 'true');
      localStorage.setItem('hoa12_student_auth_version', String(config.auth_version || 1));
    }
    return { success: true, message: 'Mở khóa thành công! Chúc em học tập thật tốt.' };
  }

  return {
    success: false,
    message: 'Mã cấp quyền không chính xác. Em vui lòng liên hệ Thầy Thọ để nhận mã nhé!',
  };
}

/**
 * 7. Xác thực mã PIN Quản trị Thầy giáo (dành cho Thầy vào nhanh khi chưa đăng nhập)
 */
export function verifyTeacherAdminPin(pinInput: string): boolean {
  if (!pinInput) return false;
  const clean = pinInput.trim().toUpperCase();
  const validPins = ['THAYTHO', 'THAYTHO2026', 'ADMIN2026', '2026', 'THAYTHOVIP'];
  if (validPins.includes(clean)) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('hoa12_teacher_authenticated', 'true');
      localStorage.setItem('is_teacher_mode', 'true');
    }
    return true;
  }
  return false;
}
