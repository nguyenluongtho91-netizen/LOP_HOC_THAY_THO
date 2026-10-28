// src/services/hoa12AccessControlService.ts
// Quản lý quyền truy cập phân lập: CẤP QUYỀN TỪNG CHƯƠNG, TỪNG KHỐI, TỪNG DANH MỤC THI (ĐỘC QUYỀN THẦY THỌ)

import { supabase } from '@/lib/supabase';

export const STORE_TITLE = '__HOA12_ACCESS_CONTROL__';
const LOCAL_STORAGE_KEY = 'hoa12_cloud_access_config_v2';

export interface GranularAccessConfig {
  is_locked?: boolean;
  grades: {
    grade_12: boolean; // true = locked, false = open
    grade_11: boolean;
    grade_10: boolean;
  };
  chapters: {
    c1: boolean; // true = locked, false = open
    c2: boolean;
    c3: boolean;
    c4: boolean;
    c5: boolean;
  };
  categories: {
    homework: boolean;
    practice: boolean;
    survey: boolean;
  };
  passcode?: string;
  auth_version: number;
  updated_at: string;
}

export type Hoa12AccessConfig = GranularAccessConfig;

const DEFAULT_CONFIG: GranularAccessConfig = {
  is_locked: false,
  grades: {
    grade_12: false,
    grade_11: false,
    grade_10: false,
  },
  chapters: {
    c1: false,
    c2: false,
    c3: true,
    c4: true,
    c5: false,
  },
  categories: {
    homework: false,
    practice: false,
    survey: false,
  },
  passcode: 'THAYTHO2026',
  auth_version: 1,
  updated_at: new Date().toISOString(),
};

let memoryConfig: GranularAccessConfig = { ...DEFAULT_CONFIG };

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
export function getHoa12AccessConfigSync(): GranularAccessConfig {
  return memoryConfig;
}

/**
 * 2. Tải cấu hình mới nhất từ Supabase Cloud
 */
export async function fetchHoa12AccessConfig(): Promise<GranularAccessConfig> {
  try {
    const { data, error } = await supabase
      .from('exams')
      .select('data')
      .eq('title', STORE_TITLE)
      .maybeSingle();

    if (!error && data?.data) {
      const incoming = data.data;
      memoryConfig = {
        ...DEFAULT_CONFIG,
        ...incoming,
        grades: { ...DEFAULT_CONFIG.grades, ...(incoming.grades || {}) },
        chapters: { ...DEFAULT_CONFIG.chapters, ...(incoming.chapters || {}) },
        categories: { ...DEFAULT_CONFIG.categories, ...(incoming.categories || {}) },
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memoryConfig));
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
  updates: Partial<GranularAccessConfig>
): Promise<GranularAccessConfig> {
  memoryConfig = {
    ...memoryConfig,
    ...updates,
    updated_at: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memoryConfig));
  }

  try {
    const { data: existing } = await supabase
      .from('exams')
      .select('id')
      .eq('title', STORE_TITLE)
      .maybeSingle();

    if (existing?.id) {
      const { error: updErr } = await supabase
        .from('exams')
        .update({ data: memoryConfig })
        .eq('id', existing.id);
      if (updErr) console.error('Lỗi update config lên Cloud:', updErr);
    } else {
      const { error: insErr } = await supabase
        .from('exams')
        .insert({ title: STORE_TITLE, data: memoryConfig });
      if (insErr) console.error('Lỗi insert config lên Cloud:', insErr);
    }
  } catch (err) {
    console.error('Lỗi lưu cấu hình quyền Hóa 12 lên Cloud:', err);
  }

  return memoryConfig;
}

/**
 * 4. ĐỔI TRẠNG THÁI KHÓA/MỞ TỪNG CHƯƠNG (c1, c2, c3, c4, c5)
 */
export async function toggleChapterAccess(
  chapterKey: 'c1' | 'c2' | 'c3' | 'c4' | 'c5',
  forceLocked?: boolean
): Promise<GranularAccessConfig> {
  const current = memoryConfig.chapters[chapterKey];
  const nextState = forceLocked !== undefined ? forceLocked : !current;
  
  return await saveHoa12AccessConfig({
    chapters: {
      ...memoryConfig.chapters,
      [chapterKey]: nextState,
    },
    auth_version: Date.now(),
  });
}

/**
 * 5. ĐỔI TRẠNG THÁI KHÓA/MỞ TỪNG KHỐI LỚP (grade_12, grade_11, grade_10)
 */
export async function toggleGradeAccess(
  gradeKey: 'grade_12' | 'grade_11' | 'grade_10',
  forceLocked?: boolean
): Promise<GranularAccessConfig> {
  const current = memoryConfig.grades[gradeKey];
  const nextState = forceLocked !== undefined ? forceLocked : !current;

  return await saveHoa12AccessConfig({
    grades: {
      ...memoryConfig.grades,
      [gradeKey]: nextState,
    },
    auth_version: Date.now(),
  });
}

/**
 * 6. ĐỔI TRẠNG THÁI KHÓA/MỞ TỪNG DANH MỤC PHÒNG THI (homework, practice, survey)
 */
export async function toggleCategoryAccess(
  catKey: 'homework' | 'practice' | 'survey',
  forceLocked?: boolean
): Promise<GranularAccessConfig> {
  const current = memoryConfig.categories[catKey];
  const nextState = forceLocked !== undefined ? forceLocked : !current;

  return await saveHoa12AccessConfig({
    categories: {
      ...memoryConfig.categories,
      [catKey]: nextState,
    },
    auth_version: Date.now(),
  });
}

/**
 * 7. CẤP QUYỀN TOÀN BỘ (Mở tất cả)
 */
export async function grantAllStudentsAccess(): Promise<GranularAccessConfig> {
  return await saveHoa12AccessConfig({
    is_locked: false,
    grades: { grade_12: false, grade_11: false, grade_10: false },
    chapters: { c1: false, c2: false, c3: false, c4: false, c5: false },
    categories: { homework: false, practice: false, survey: false },
    auth_version: Date.now(),
  });
}

/**
 * 8. CẤM QUYỀN TOÀN BỘ (Khóa tất cả)
 */
export async function revokeAllStudentsAccess(): Promise<GranularAccessConfig> {
  return await saveHoa12AccessConfig({
    is_locked: true,
    grades: { grade_12: true, grade_11: true, grade_10: true },
    chapters: { c1: true, c2: false, c3: true, c4: true, c5: true },
    categories: { homework: true, practice: true, survey: true },
    auth_version: Date.now(),
  });
}

/**
 * 9. KIỂM TRA CHƯƠNG CÓ BỊ KHÓA KHÔNG
 */
export function isChapterLocked(
  chapterKey: 'c1' | 'c2' | 'c3' | 'c4' | 'c5',
  isTeacher: boolean,
  config: GranularAccessConfig = memoryConfig
): boolean {
  if (isTeacher) return false;
  // Kiểm tra cờ khối 12 trước
  if (config.grades?.grade_12) return true;
  // Kiểm tra cờ từng chương
  return Boolean(config.chapters?.[chapterKey]);
}

/**
 * 10. KIỂM TRA KHỐI CÓ BỊ KHÓA KHÔNG
 */
export function isGradeLocked(
  gradeStr: string,
  isTeacher: boolean,
  config: GranularAccessConfig = memoryConfig
): boolean {
  if (isTeacher) return false;
  const g = String(gradeStr || '').toLowerCase();
  if (g.includes('12')) return Boolean(config.grades?.grade_12);
  if (g.includes('11')) return Boolean(config.grades?.grade_11);
  if (g.includes('10')) return Boolean(config.grades?.grade_10);
  return false;
}

/**
 * 11. KIỂM TRA DANH MỤC THI CÓ BỊ KHÓA KHÔNG
 */
export function isCategoryLocked(
  catKey: 'homework' | 'practice' | 'survey',
  isTeacher: boolean,
  config: GranularAccessConfig = memoryConfig
): boolean {
  if (isTeacher) return false;
  return Boolean(config.categories?.[catKey]);
}

/**
 * 12. Hàm tương thích cũ
 */
export function checkIsStudentAuthorized(
  isTeacher: boolean,
  config: GranularAccessConfig = memoryConfig
): boolean {
  if (isTeacher) return true;
  return !Boolean(config.is_locked);
}

/**
 * 13. Xác thực mã PIN Quản trị Thầy giáo
 */
export function verifyTeacherAdminPin(pinInput: string): boolean {
  if (!pinInput) return false;
  const clean = pinInput.trim().toUpperCase();
  const validPins = ['THAYTHO', 'THAYTHO2026', 'ADMIN2026', '2026', 'THAYTHOVIP'];
  return validPins.includes(clean);
}
