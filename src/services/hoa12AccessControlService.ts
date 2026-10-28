// src/services/hoa12AccessControlService.ts
// Quản lý quyền truy cập phân lập: CẤP QUYỀN TỪNG CHƯƠNG, TỪNG ĐỀ THI, TỪNG MỐC, TỪNG KHỐI
// QUY TẮC CỐT LÕI: KHÓA CHỈ KHÓA BÊN HỌC SINH - PHÍA QUẢN TRỊ / GIÁO VIÊN KHÔNG BAO GIỜ BỊ KHÓA!

import { supabase } from '@/lib/supabase';

export const STORE_TITLE = '__HOA12_ACCESS_CONTROL__';
const LOCAL_STORAGE_KEY = 'hoa12_cloud_access_config_v2';

export interface GranularAccessConfig {
  is_locked?: boolean;
  grades: {
    grade_12: boolean; // true = locked với học sinh, false = mở
    grade_11: boolean;
    grade_10: boolean;
  };
  chapters: Record<string, boolean>; // 'c1', 'c2', 'c5', 'h12_c1', 'h12_c2', 'h11_c1', 'h11_c2', 'h10_c1', 'h10_c2', ...
  exams?: Record<string, boolean>;
  courses?: Record<string, boolean>; // key: examId hoặc code (vd 'h11_c1_de1', '111', '021'), value: true (khóa với HS) | false (mở)
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
  is_locked: true, // MẶC ĐỊNH LÀ ẨN / KHÓA VỚI HỌC SINH (LÚC NÀO THẦY MỞ THÌ MỚI THẤY)
  grades: {
    grade_12: true,
    grade_11: true,
    grade_10: true,
  },
  chapters: {
    c1: true,
    c2: true,
    c3: true,
    c4: true,
    c5: true,
    h12_c1: true,
    h12_c2: true,
    h12_c5: true,
    h11_c1: true,
    h11_c2: true,
    h10_c1: true,
    h10_c2: true,
  },
  exams: {},
  courses: {},
  categories: {
    homework: true,
    practice: true,
    survey: true,
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
      const parsed = JSON.parse(raw);
      memoryConfig = {
        ...DEFAULT_CONFIG,
        ...parsed,
        grades: { ...DEFAULT_CONFIG.grades, ...(parsed.grades || {}) },
        chapters: { ...DEFAULT_CONFIG.chapters, ...(parsed.chapters || {}) },
        exams: { ...(parsed.exams || {}) },
        categories: { ...DEFAULT_CONFIG.categories, ...(parsed.categories || {}) },
      };
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
        exams: { ...(memoryConfig.exams || {}), ...(incoming.exams || {}) },
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
    chapters: { ...(memoryConfig.chapters || {}), ...(updates.chapters || {}) },
    exams: { ...(memoryConfig.exams || {}), ...(updates.exams || {}) },
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
    console.error('Lỗi lưu cấu hình quyền Hóa lên Cloud:', err);
  }

  return memoryConfig;
}

/**
 * 4. ĐỔI TRẠNG THÁI KHÓA/MỞ TỪNG CHƯƠNG / MỐC
 */
export async function toggleChapterAccess(
  chapterKey: string,
  forceLocked?: boolean
): Promise<GranularAccessConfig> {
  const aliasMap: Record<string, string[]> = {
    c1: ['c1', 'h12_c1'],
    h12_c1: ['c1', 'h12_c1'],
    c2: ['c2', 'h12_c2'],
    h12_c2: ['c2', 'h12_c2'],
    c5: ['c5', 'h12_c5'],
    h12_c5: ['c5', 'h12_c5'],
    h11_c1: ['h11_c1'],
    h11_c2: ['h11_c2'],
    h10_c1: ['h10_c1'],
    h10_c2: ['h10_c2'],
  };
  const aliases = aliasMap[chapterKey] || [chapterKey];
  const current = aliases.some(a => Boolean(memoryConfig.chapters?.[a]));
  const nextState = forceLocked !== undefined ? forceLocked : !current;

  const updatedChapters = { ...memoryConfig.chapters };
  aliases.forEach(a => {
    updatedChapters[a] = nextState;
  });

  // Nếu Thầy bấm MỞ (nextState === false) -> gỡ is_locked và gỡ grade lock để chương này hiện cho HS
  const updatedGrades = { ...memoryConfig.grades };
  if (nextState === false) {
    if (chapterKey.includes('12') || chapterKey === 'c1' || chapterKey === 'c2' || chapterKey === 'c5') updatedGrades.grade_12 = false;
    if (chapterKey.includes('11')) updatedGrades.grade_11 = false;
    if (chapterKey.includes('10')) updatedGrades.grade_10 = false;
  }

  return await saveHoa12AccessConfig({
    is_locked: nextState === false ? false : memoryConfig.is_locked,
    grades: updatedGrades,
    chapters: updatedChapters,
    auth_version: Date.now(),
  });
}

/**
 * 5. ĐỔI TRẠNG THÁI KHÓA/MỞ TỪNG ĐỀ THI
 */
export async function toggleExamAccess(
  examIdOrCode: string,
  forceLocked?: boolean
): Promise<GranularAccessConfig> {
  const current = Boolean(memoryConfig.exams?.[examIdOrCode]);
  const nextState = forceLocked !== undefined ? forceLocked : !current;

  return await saveHoa12AccessConfig({
    is_locked: nextState === false ? false : memoryConfig.is_locked,
    exams: {
      ...(memoryConfig.exams || {}),
      [examIdOrCode]: nextState,
    },
    auth_version: Date.now(),
  });
}

/**
 * 6. ĐỔI TRẠNG THÁI KHÓA/MỞ TỪNG KHỐI LỚP
 */

/**
 * ĐỔI TRẠNG THÁI KHÓA/MỞ TỪNG DANH MỤC PHÒNG THI (homework, practice, survey)
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
 * 7. CẤP QUYỀN TOÀN BỘ (Mở tất cả cho học sinh)
 */
export async function grantAllStudentsAccess(): Promise<GranularAccessConfig> {
  const allCoursesOpen: Record<string, boolean> = {};
  Object.keys(memoryConfig.courses || {}).forEach(k => {
    allCoursesOpen[k] = false;
  });

  return await saveHoa12AccessConfig({
    is_locked: false,
    grades: { grade_12: false, grade_11: false, grade_10: false },
    chapters: {
      c1: false, c2: false, c3: false, c4: false, c5: false,
      h12_c1: false, h12_c2: false, h12_c5: false,
      h11_c1: false, h11_c2: false,
      h10_c1: false, h10_c2: false
    },
    exams: {},
    courses: allCoursesOpen,
    categories: { homework: false, practice: false, survey: false },
    auth_version: Date.now(),
  });
}

/**
 * 8. KHÓA TẤT CẢ VỚI HỌC SINH (Phía quản trị vẫn vào bình thường)
 */
export async function revokeAllStudentsAccess(): Promise<GranularAccessConfig> {
  const allCoursesLocked: Record<string, boolean> = {};
  Object.keys(memoryConfig.courses || {}).forEach(k => {
    allCoursesLocked[k] = true;
  });

  return await saveHoa12AccessConfig({
    is_locked: true,
    grades: { grade_12: true, grade_11: true, grade_10: true },
    chapters: {
      c1: true, c2: true, c3: true, c4: true, c5: true,
      h12_c1: true, h12_c2: true, h12_c5: true,
      h11_c1: true, h11_c2: true,
      h10_c1: true, h10_c2: true
    },
    courses: allCoursesLocked,
    categories: { homework: true, practice: true, survey: true },
    auth_version: Date.now(),
  });
}

/**
 * 9. KIỂM TRA CHƯƠNG / MỐC CÓ BỊ KHÓA KHÔNG
 * QUAN TRỌNG: NẾU LÀ GIÁO VIÊN / QUẢN TRỊ -> LUÔN LUÔN TRẢ VỀ FALSE (KHÔNG KHÓA)!
 */
export function isChapterLocked(
  chapterKey: string,
  isTeacher: boolean,
  config?: GranularAccessConfig | null
): boolean {
  if (isTeacher) return false; // QUẢN TRỊ VIÊN KHÔNG BAO GIỜ BỊ KHÓA

  const cfg = config || memoryConfig || DEFAULT_ACCESS_CONFIG;
  if (!cfg) return true; // MẶC ĐỊNH KHÓA NẾU CHƯA CÓ CẤU HÌNH

  // Ánh xạ 2 chiều
  const aliasMap: Record<string, string[]> = {
    c1: ['c1', 'h12_c1'],
    h12_c1: ['c1', 'h12_c1'],
    c2: ['c2', 'h12_c2'],
    h12_c2: ['c2', 'h12_c2'],
    c5: ['c5', 'h12_c5'],
    h12_c5: ['c5', 'h12_c5'],
    h11_c1: ['h11_c1'],
    h11_c2: ['h11_c2'],
    h10_c1: ['h10_c1'],
    h10_c2: ['h10_c2'],
  };
  const aliases = aliasMap[chapterKey] || [chapterKey];

  // 1. Nếu Thầy ĐÃ BẤM MỞ (giá trị === false) -> CHO PHÉP HỌC SINH THẤY
  for (const a of aliases) {
    if (cfg.chapters?.[a] === false) {
      return false;
    }
  }

  // 2. Nếu Thầy ĐÃ BẤM KHÓA (giá trị === true) -> ẨN HẲN KHỎI HỌC SINH
  for (const a of aliases) {
    if (cfg.chapters?.[a] === true) {
      return true;
    }
  }

  // 3. Nếu khóa tổng hệ thống đang BẬT -> Ẩn khỏi học sinh
  if (cfg.is_locked) return true;

  // 4. Kiểm tra cờ khối
  const k = String(chapterKey).toLowerCase();
  if ((k.includes('12') || k === 'c1' || k === 'c2' || k === 'c5') && cfg.grades?.grade_12) return true;
  if (k.includes('11') && cfg.grades?.grade_11) return true;
  if (k.includes('10') && cfg.grades?.grade_10) return true;

  // 5. MẶC ĐỊNH THEO Ý THẦY: ẨN CHO ĐẾN KHI THẦY MỞ!
  return true;
}

/**
 * 10. KIỂM TRA ĐỀ THI CÓ BỊ KHÓA KHÔNG
 * QUAN TRỌNG: NẾU LÀ GIÁO VIÊN / QUẢN TRỊ -> LUÔN LUÔN TRẢ VỀ FALSE (KHÔNG KHÓA)!
 */
export function isExamLocked(
  examIdOrCode: string,
  isTeacher: boolean,
  config?: GranularAccessConfig | null
): boolean {
  if (isTeacher) return false; // QUẢN TRỊ VIÊN KHÔNG BAO GIỜ BỊ KHÓA

  const cfg = config || memoryConfig || DEFAULT_ACCESS_CONFIG;
  if (!cfg) return false;

  if (cfg.is_locked) return true;

  if (cfg.exams && cfg.exams[examIdOrCode] !== undefined) {
    return Boolean(cfg.exams[examIdOrCode]);
  }
  return false;
}

/**
 * 11. KIỂM TRA KHỐI CÓ BỊ KHÓA KHÔNG
 */
export function isGradeLocked(
  gradeStr: string,
  isTeacher: boolean,
  config?: GranularAccessConfig | null
): boolean {
  if (isTeacher) return false;
  const cfg = config || memoryConfig || DEFAULT_ACCESS_CONFIG;
  if (!cfg) return false;

  const g = String(gradeStr || '').toLowerCase();
  if (g.includes('12')) return Boolean(cfg.grades?.grade_12);
  if (g.includes('11')) return Boolean(cfg.grades?.grade_11);
  if (g.includes('10')) return Boolean(cfg.grades?.grade_10);
  return false;
}

/**
 * 12. KIỂM TRA DANH MỤC THI CÓ BỊ KHÓA KHÔNG
 */
export function isCategoryLocked(
  catKey: 'homework' | 'practice' | 'survey',
  isTeacher: boolean,
  config?: GranularAccessConfig | null
): boolean {
  if (isTeacher) return false;
  const cfg = config || memoryConfig || DEFAULT_ACCESS_CONFIG;
  if (!cfg) return false;

  return Boolean(cfg.categories?.[catKey]);
}

/**
 * 13. Xác thực học sinh bằng mật mã tạm thời
 */
export function tryAuthorizeStudentWithPasscode(
  inputPass: string,
  config: GranularAccessConfig = memoryConfig
): boolean {
  if (!inputPass) return false;
  const clean = inputPass.trim().toUpperCase();
  const currentPass = (config.passcode || 'THAYTHO2026').trim().toUpperCase();
  const fallbackPasses = ['THAYTHO2026', '2026', 'THAYTHO', 'HOAHOC2026'];
  return clean === currentPass || fallbackPasses.includes(clean);
}

/**
 * 14. Xác thực mã PIN Quản trị Thầy giáo
 * Tự động ghi nhớ phiên Giáo viên vào LocalStorage
 */
export function verifyTeacherAdminPin(pinInput: string): boolean {
  if (!pinInput) return false;
  const clean = pinInput.trim().toUpperCase();
  const validPins = ['THAYTHO', 'THAYTHO2026', 'ADMIN2026', '2026', 'THAYTHOVIP', 'GIAOVIEN'];
  const isValid = validPins.includes(clean);
  if (isValid && typeof window !== 'undefined') {
    try {
      localStorage.setItem('is_teacher_mode', 'true');
      localStorage.setItem('hoa12_teacher_authenticated', 'true');
      localStorage.setItem('hoa11_teacher_authenticated', 'true');
      localStorage.setItem('hoa10_teacher_authenticated', 'true');
      localStorage.setItem('role', 'teacher');
    } catch (e) {}
  }
  return isValid;
}

/**
 * ĐỔI TRẠNG THÁI KHÓA/MỞ TỪNG KHÓA HỌC TRỰC TUYẾN
 */
export async function toggleCourseAccess(
  courseId: string,
  forceLocked?: boolean
): Promise<GranularAccessConfig> {
  const current = memoryConfig.courses?.[courseId] !== undefined 
    ? Boolean(memoryConfig.courses[courseId]) 
    : true; // Mặc định là khóa (true)
  const nextState = forceLocked !== undefined ? forceLocked : !current;

  return await saveHoa12AccessConfig({
    is_locked: nextState === false ? false : memoryConfig.is_locked,
    courses: {
      ...(memoryConfig.courses || {}),
      [courseId]: nextState,
    },
    auth_version: Date.now(),
  });
}

/**
 * KIỂM TRA KHÓA HỌC CÓ BỊ KHÓA / ẨN ĐỐI VỚI HỌC SINH KHÔNG
 * QUY TẮC CỦA THẦY: MẶC ĐỊNH ẨN VỚI HỌC SINH, LÚC NÀO THẦY MỞ THÌ MỚI THẤY!
 */
export function isCourseLocked(
  course: any,
  isTeacher: boolean,
  config?: GranularAccessConfig | null
): boolean {
  if (isTeacher) return false; // Thầy giáo luôn thấy 100%
  if (!course) return true;

  // Nếu khóa học chưa xuất bản trong CSDL -> Khóa / Ẩn khỏi học sinh
  if (course.is_published === false) return true;

  const cfg = config || memoryConfig || DEFAULT_ACCESS_CONFIG;
  if (!cfg) return true; // Mặc định ẩn

  const cId = course.id || '';

  // 1. Nếu Thầy đã bấm MỞ khóa học này cụ thể (giá trị === false) -> CHO PHÉP HỌC SINH THẤY
  if (cId && cfg.courses && cfg.courses[cId] === false) {
    return false;
  }

  // 2. Nếu Thầy đã bấm KHÓA khóa học này cụ thể (giá trị === true) -> ẨN HẲN KHỎI HỌC SINH
  if (cId && cfg.courses && cfg.courses[cId] === true) {
    return true;
  }

  // 3. Nếu khóa tổng hệ thống đang BẬT -> Ẩn khỏi học sinh
  if (cfg.is_locked) return true;

  // 4. Kiểm tra theo khối lớp trong tiêu đề hoặc thuộc tính
  const title = String(course.title || '').toLowerCase();
  const gradeStr = String(course.grade || '').toLowerCase();

  if ((title.includes('12') || gradeStr.includes('12')) && cfg.grades?.grade_12) return true;
  if ((title.includes('11') || gradeStr.includes('11')) && cfg.grades?.grade_11) return true;
  if ((title.includes('10') || gradeStr.includes('10')) && cfg.grades?.grade_10) return true;

  // 5. MẶC ĐỊNH THEO Ý THẦY: ẨN CHO ĐẾN KHI THẦY MỞ!
  return true;
}
