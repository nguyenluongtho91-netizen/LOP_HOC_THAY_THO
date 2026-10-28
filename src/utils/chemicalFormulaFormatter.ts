/**
 * TIỆN ÍCH CHUẨN HÓA & HIỂN THỊ CÔNG THỨC HÓA HỌC / TOÁN HỌC (GDPT 2018)
 * 
 * Chuyển đổi toàn diện các ký hiệu LaTeX thô (\mathrm, \rightleftharpoons, \Delta, \circ, _{...}, ^{...})
 * thành định dạng HTML chuẩn (<sub>, <sup>, ⇌, →, ΔrH°298) sắc nét, chuẩn mực sư phạm.
 */

export function formatChemicalText(raw: string | undefined | null): string {
  if (!raw || typeof raw !== 'string') return raw || '';

  let s = raw;

  // 1. Ký hiệu mũi tên cân bằng hóa học (PHẢI THAY TRƯỚC \left / \right ĐỂ TRÁNH BỊ CẮT TỪ)
  s = s.replace(/\\rightleftharpoons|\\leftrightharpoons|\\b(?:left)?(?:right)?harpoons\\b|leftharpoons|leftharpoons|rightharpoons/gi, ' ⇌ ');
  s = s.replace(/\\longrightarrow|\\rightarrow|\\to/gi, ' → ');
  s = s.replace(/\\longleftarrow|\\leftarrow/gi, ' ← ');
  s = s.replace(/\\Rightarrow|\\implies/gi, ' ⇒ ');

  // 2. Ký hiệu toán học & chữ cái Hy Lạp
  s = s.replace(/\\Delta/g, 'Δ');
  s = s.replace(/\\circ/g, '°');
  s = s.replace(/\\alpha/g, 'α');
  s = s.replace(/\\beta/g, 'β');
  s = s.replace(/\\gamma/g, 'γ');
  s = s.replace(/\\lambda/g, 'λ');
  s = s.replace(/\\pi/g, 'π');
  s = s.replace(/\\sigma/g, 'σ');
  s = s.replace(/\\mu/g, 'μ');
  s = s.replace(/\\omega/g, 'ω');
  s = s.replace(/\\Omega/g, 'Ω');
  s = s.replace(/\\infty/g, '∞');
  s = s.replace(/\\approx/g, '≈');
  s = s.replace(/\\neq/g, '≠');
  s = s.replace(/\\leq/g, '≤');
  s = s.replace(/\\geq/g, '≥');
  s = s.replace(/\\pm/g, '±');
  s = s.replace(/\\times/g, '×');
  s = s.replace(/\\cdot|\\cd/g, '·');
  s = s.replace(/\\ldots/g, '...');
  s = s.replace(/\\quad|\\qquad/g, ' &nbsp; ');

  // 3. Gỡ các wrapper LaTeX: \left, \right
  s = s.replace(/\\left|\\right/g, '');

  // 4. Gỡ các wrapper font: \mathrm{...}, \operatorname{...}, \mathbf{...}, \text{...}
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\(?:mathrm|operatorname|mathbf|mathit|text|textbf|textit)\{([^{}]*)\}/g, '$1');
  }

  // 5. Phân số \frac{a}{b} -> HTML fraction hiển thị thanh ngang đẹp mắt
  s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, (_match, num, den) => {
    return `<span class="inline-flex flex-col text-center align-middle mx-1 text-[0.9em] leading-tight"><span class="border-b border-current px-1 pb-0.5">${num}</span><span class="px-1 pt-0.5">${den}</span></span>`;
  });

  // 6. Chỉ số dưới (subscript) có ngoặc _{...}
  s = s.replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>');

  // 7. Chỉ số trên (superscript) có ngoặc ^{...}
  s = s.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>');

  // 8. Chỉ số dưới và trên dạng đơn ký tự (_2, ^0, ^+, ^-)
  s = s.replace(/_([0-9a-zA-Z\+\-])/g, '<sub>$1</sub>');
  s = s.replace(/\^([0-9a-zA-Z\+\-\*°])/g, '<sup>$1</sup>');

  // 9. Khoảng cách và dấu ngoặc cho trạng thái chất (g, s, l, aq)
  s = s.replace(/\(\s*([gsl]|aq)\s*\)/gi, '($1)');

  // 10. Khắc phục dấu cách tách rời công thức: H_2 O -> H2O, Ca CO3 -> CaCO3
  s = s.replace(/<sub>(\d+)<\/sub>\s+([A-Z])/g, '<sub>$1</sub>$2');
  s = s.replace(/H<sub>2<\/sub>\s+O/g, 'H<sub>2</sub>O');
  s = s.replace(/Ca\s+CO<sub>3<\/sub>/g, 'CaCO<sub>3</sub>');
  s = s.replace(/Ca\s+O/g, 'CaO');

  // 11. Chuẩn hóa ký hiệu biến thiên Enthalpy chuẩn theo SGK mới:
  s = s.replace(/Δ\s*<sub>\s*r\s*<\/sub>\s*H\s*<sub>\s*298\s*<\/sub>\s*<sup>\s*[°o0]\s*<\/sup>/gi, 'Δ<sub>r</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*r\s*<\/sub>\s*H\s*<sup>\s*[°o0]\s*<\/sup>\s*<sub>\s*298\s*<\/sub>/gi, 'Δ<sub>r</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*r\s*<\/sub>\s*H\s*<sup>\s*[°o0]\s*<\/sup>/gi, 'Δ<sub>r</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*f\s*<\/sub>\s*H\s*<sub>\s*298\s*<\/sub>\s*<sup>\s*[°o0]\s*<\/sup>/gi, 'Δ<sub>f</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*f\s*<\/sub>\s*H\s*<sup>\s*[°o0]\s*<\/sup>\s*<sub>\s*298\s*<\/sub>/gi, 'Δ<sub>f</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*f\s*<\/sub>\s*H\s*<sup>\s*[°o0]\s*<\/sup>/gi, 'Δ<sub>f</sub>H°<sub>298</sub>');

  // 12. Sửa lỗi Enthalpy bị lỗi font scanner docx: r298H0°D> -> ΔrH°298 > 0
  s = s.replace(/r298H0°D\s*>/g, 'Δ<sub>r</sub>H°<sub>298</sub> > 0');
  s = s.replace(/r298H0°D\s*</g, 'Δ<sub>r</sub>H°<sub>298</sub> < 0');
  s = s.replace(/r298H°D\s*=\s*–?/g, 'Δ<sub>r</sub>H°<sub>298</sub> = –');

  // 13. Sửa lỗi phép nhân bị biến dạng ký tự như · ⇌ (t°) 10^-1 -> · 10^-1
  s = s.replace(/·\s*⇌\s*\(t°\)/g, '·');

  // 14. Dọn sạch các gạch chéo ngược đơn lẻ còn sót lại trước chữ cái
  s = s.replace(/\\([a-zA-Z]+)/g, '$1');

  // 15. Khoảng cách chuẩn cho mũi tên và dấu bằng
  s = s.replace(/\s*⇌\s*/g, ' ⇌ ');
  s = s.replace(/\s*→\s*/g, ' → ');
  s = s.replace(/\s*←\s*/g, ' ← ');

  // 16. Khoảng cách trước ký hiệu Enthalpy
  s = s.replace(/([^\s>])\s*(Δ<sub>[rf]<\/sub>H°<sub>298<\/sub>)/g, '$1 &nbsp; $2');

  return s;
}

export default formatChemicalText;
