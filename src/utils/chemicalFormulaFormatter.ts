function renderChemArrow(condition: string, isEquilibrium = false): string {
  const cond = (condition || '').trim();
  const arrowChar = isEquilibrium ? '⇌' : '⟶';
  if (!cond) return ` &nbsp;${arrowChar}&nbsp; `;
  return `<span class="inline-flex flex-col items-center align-middle mx-1.5 leading-none -translate-y-0.5 select-none"><span class="text-[10px] font-bold text-slate-500 mb-0.5 tracking-tight">${cond}</span><span class="text-base leading-none text-slate-800">${arrowChar}</span></span>`;
}

/**
 * TIỆN ÍCH CHUẨN HÓA & HIỂN THỊ CÔNG THỨC HÓA HỌC / TOÁN HỌC (GDPT 2018)
 * 
 * Chuyển đổi toàn diện:
 * - Ký hiệu LaTeX thô (\mathrm, \rightleftharpoons, \Delta, \circ, _{...}, ^{...})
 * - Biểu thức hằng số cân bằng Kc = (tử) / (mẫu) thành phân số phân tầng chuẩn sư phạm (vertical fraction)
 * - Nồng độ mol [H2], [I2] thành [H2], [I2]
 * - Chuẩn hóa định dạng HTML (<sub>, <sup>, ⇌, →, ΔrH°298) sắc nét, chuyên nghiệp.
 */

function cleanTerm(t: string): string {
  let s = (t || '').trim();
  while (s.startsWith('(') && s.endsWith(')')) {
    let depth = 0;
    let outer = true;
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '(') depth++;
      else if (s[i] === ')') depth--;
      if (depth === 0) { outer = false; break; }
    }
    if (outer) s = s.substring(1, s.length - 1).trim();
    else break;
  }
  s = s.replace(/\s*&times;\s*/g, ' · ');
  s = s.replace(/\s*×\s*/g, ' · ');
  s = s.replace(/\]\s*\[/g, '] · [');
  return s;
}

function formatFractionSlash(text: string): string {
  // Tìm dấu gạch chéo chia (không phải thẻ đóng HTML </...>)
  const slashIdx = text.search(/(?<!<)\//);
  if (slashIdx === -1) return text;

  let contentBefore = text.substring(0, slashIdx).trim();
  let contentAfter = text.substring(slashIdx + 1).trim();

  let prefix = '';
  const prefixMatch = contentBefore.match(/^(\s*(?:K<sub>[Cc]<\/sub>|K[Cc])\s*=\s*)(.*)$/i);
  if (prefixMatch) {
    prefix = 'K<sub>c</sub> = ';
    contentBefore = prefixMatch[2].trim();
  } else if (!contentBefore.includes('[') && !contentBefore.match(/^\d+$/)) {
    return text;
  }

  let trailing = '';
  const trailMatch = contentAfter.match(/([\.,;]?<br\s*\/?>[\s\S]*|[\.,;]$)/);
  if (trailMatch) {
    trailing = trailMatch[0];
    contentAfter = contentAfter.substring(0, contentAfter.length - trailing.length).trim();
  }

  const num = cleanTerm(contentBefore);
  const den = cleanTerm(contentAfter);

  return `<span class="inline-flex items-center gap-1.5 align-middle font-medium">${prefix ? `<span>${prefix}</span>` : ''}<span class="inline-flex flex-col text-center align-middle mx-1 text-[0.95em] leading-tight"><span class="border-b border-current px-1 pb-0.5">${num}</span><span class="px-1 pt-0.5">${den}</span></span></span>${trailing}`;
}

export function formatChemicalText(raw: string | undefined | null): string {
  if (!raw || typeof raw !== 'string') return raw || '';

  let s = raw;

  // 0.1 Spacing between electron subshells: 1s22s2 -> 1s2 2s2, 1s²2s² -> 1s² 2s²
  s = s.replace(/(<sup>\d{1,2}<\/sup>|\b[1-7][spdf]\d{1,2}|[\u00B2\u00B3\u00B9\u2070-\u2079]+)(?=[1-7][spdf])/g, '$1 ');

  // 0.2 Separate stuck numbered items (e.g. 1s²(2) 1s² -> 1s²<br/>(2) 1s²)
  s = s.replace(/([^\s,;]+)\s*(\([1-9]\d?\))/g, (match, prefix, numTag, offset, fullStr) => {
    const before = fullStr.slice(Math.max(0, offset - 15), offset).trim();
    if (/[,;\-–—]|\b(và|hoặc|đến|tới|từ|ở|vào|chất|phản ứng|cân bằng|thí nghiệm)$/i.test(before)) {
      return match;
    }
    if (/<\/sup>|[spdf]\d*|[0-9]|\)|\./i.test(prefix)) {
      return prefix + '<br/>' + numTag;
    }
    return match;
  });

  // 0.3 Word / MathType corrupted symbols, enthalpy & arrows
  s = s.replace(/\bor298HD\s*=\s*–?/gi, 'Δ<sub>r</sub>H°<sub>298</sub> = –');
  s = s.replace(/\bor298HD\s*([><=])/gi, 'Δ<sub>r</sub>H°<sub>298</sub> $1');
  s = s.replace(/\bor298HD\b/gi, 'Δ<sub>r</sub>H°<sub>298</sub>');
  s = s.replace(/oxt,t,p\s*⇌/g, '⎯⎯(xt, t°, p)→ ⇌');
  s = s.replace(/o400600 C, 200 bar, Fe-\s*⇌/g, '⎯⎯(400 - 600°C, 200 bar, Fe)→ ⇌');
  // 0. Word / MathType corrupted symbols & arrows with real condition above
  s = s.replace(/⎯⎯\s*t°\s*→|⎯⎯t°→|ot[¾¾]+®?|ot³\/2\/¼°?|o[¾¾]+®?/g, () => renderChemArrow('t°'));
  s = s.replace(/[¾¾]{2,}®?\s*oPt,t/g, () => renderChemArrow('Pt, t°'));
  s = s.replace(/[¾¾]{2,}®?\s*ot/g, () => renderChemArrow('t°'));
  s = s.replace(/⎯⎯\s*\(([^)]+)\)\s*→/g, (_m, cond) => renderChemArrow(cond));
  s = s.replace(/⎯⎯\s*\(([^)]+)\)\s*⇌/g, (_m, cond) => renderChemArrow(cond, true));
  s = s.replace(/[¾¾]{2,}®?|¬®/g, ' &nbsp;→&nbsp; ');
  s = s.replace(/ˆˆ†‡ˆˆ|ˆ+[\s†‡]*ˆ*|[\s]*[]+[\s]*|\s+ƒ\s+/g, ' ⇌ ');
  s = s.replace(/\+4NH/g, 'NH<sub>4</sub><sup>+</sup>');
  s = s.replace(/2XY-/g, 'XY<sub>2</sub><sup>-</sup>');
  
  // Isotopes like 2613X, 5526Y, 2612Z
  s = s.replace(/(26)(13)(X)/g, '<sup>26</sup><sub>13</sub>X');
  s = s.replace(/(55)(26)(Y)/g, '<sup>55</sup><sub>26</sub>Y');
  s = s.replace(/(26)(12)(Z)/g, '<sup>26</sup><sub>12</sub>Z');
  s = s.replace(/(56)(26)(X|Fe)/g, '<sup>56</sup><sub>26</sub>');
  s = s.replace(/(40)(18)(X|Ar)/g, '<sup>40</sup><sub>18</sub>');
  s = s.replace(/(40)(19)(Y|K)/g, '<sup>40</sup><sub>19</sub>');
  s = s.replace(/(28)(14)(X|Si)/g, '<sup>28</sup><sub>14</sub>');
  s = s.replace(/(29)(14)(Y|Si)/g, '<sup>29</sup><sub>14</sub>');
  s = s.replace(/(27)(13)(X|Al)/g, '<sup>27</sup><sub>13</sub>');
  s = s.replace(/(28)(15)(X|P)/g, '<sup>28</sup><sub>15</sub>');
  s = s.replace(/(40)(20)(Ca|X)/g, '<sup>40</sup><sub>20</sub>');
  s = s.replace(/(23)(11)(Na|X)/g, '<sup>23</sup><sub>11</sub>');
  s = s.replace(/(60)(27)(Co|X)/g, '<sup>60</sup><sub>27</sub>');
  s = s.replace(/(59)(27)(Co|X)/g, '<sup>59</sup><sub>27</sub>');
  s = s.replace(/(58)(27)(Co|X)/g, '<sup>58</sup><sub>27</sub>');
  s = s.replace(/(79)(35)(Br|X)/g, '<sup>79</sup><sub>35</sub>');
  s = s.replace(/(81)(35)(Br|Y)/g, '<sup>81</sup><sub>35</sub>');
  s = s.replace(/(63)(29)(Cu)/g, '<sup>63</sup><sub>29</sub>Cu');
  s = s.replace(/(65)(29)(Cu)/g, '<sup>65</sup><sub>29</sub>Cu');

  // Common un-subscripted chemical formulas
  s = s.replace(/2KClO3/g, '2KClO<sub>3</sub>');
  s = s.replace(/KClO3/g, 'KClO<sub>3</sub>');
  s = s.replace(/CH4/g, 'CH<sub>4</sub>');
  s = s.replace(/CO2/g, 'CO<sub>2</sub>');
  s = s.replace(/H2O/g, 'H<sub>2</sub>O');
  s = s.replace(/FeCl2/g, 'FeCl<sub>2</sub>');
  s = s.replace(/N2\((g|l|s|aq)\)/g, 'N<sub>2</sub>()');
  s = s.replace(/O2\((g|l|s|aq)\)/g, 'O<sub>2</sub>()');
  s = s.replace(/H2\((g|l|s|aq)\)/g, 'H<sub>2</sub>()');
  s = s.replace(/2NO\((g|l|s|aq)\)/g, '2NO()');
  s = s.replace(/N2O4/g, 'N<sub>2</sub>O<sub>4</sub>');


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

  // 5. Phân số \frac{a}{b} -> HTML fraction hiển thị thanh ngang chuẩn toán học
  for (let i = 0; i < 3; i++) {
    s = s.replace(/\\*frac\{([^{}]+)\}\{([^{}]+)\}/g, (_match, num, den) => {
      return `<span class="inline-flex flex-col text-center align-middle mx-1 text-[0.95em] leading-tight"><span class="border-b border-current px-1 pb-0.5">${num.trim()}</span><span class="px-1 pt-0.5">${den.trim()}</span></span>`;
    });
  }

  // Tự động chuyển đổi các phân số số học viết dạng a/b (như 1/2, 3/4, 636/10, 17/60) thành phân số phân tầng
  s = s.replace(/(?<=[=≈\+·×\s(])(\d{1,5})\s*\/\s*(\d{1,5})(?!\/\d)(?=[,\.;\)\s]|$|mol|kg|gam|g|L|M)/g, (_match, num, den) => {
    return `<span class="inline-flex flex-col text-center align-middle mx-1 text-[0.95em] leading-tight"><span class="border-b border-current px-1 pb-0.5">${num}</span><span class="px-1 pt-0.5">${den}</span></span>`;
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

  // 11. Chuẩn hóa nồng độ mol trong ngoặc vuông: [H2] -> [H2], [I2] -> [I2], [NH3] -> [NH3]
  s = s.replace(/\[([A-Z][a-z]?)(\d+)\]/g, '[$1<sub>$2</sub>]');
  s = s.replace(/\[NH3\]/g, '[NH<sub>3</sub>]');
  s = s.replace(/\[CO2\]/g, '[CO<sub>2</sub>]');
  s = s.replace(/\[H2O\]/g, '[H<sub>2</sub>O]');
  s = s.replace(/\[SO2\]/g, '[SO<sub>2</sub>]');
  s = s.replace(/\[SO3\]/g, '[SO<sub>3</sub>]');
  s = s.replace(/\[NO2\]/g, '[NO<sub>2</sub>]');
  s = s.replace(/\[N2O4\]/g, '[N<sub>2</sub>O<sub>4</sub>]');

  // 12. Chuẩn hóa ký hiệu hằng số cân bằng Kc
  s = s.replace(/\(K[Cc]\)/g, '(K<sub>c</sub>)');
  s = s.replace(/\(K<sub>[Cc]<\/sub>\)/g, '(K<sub>c</sub>)');
  s = s.replace(/\bK[Cc]\b(?!\s*<sub>)/g, 'K<sub>c</sub>');
  s = s.replace(/K<sub>C<\/sub>/g, 'K<sub>c</sub>');

  // 13. Chuẩn hóa ký hiệu biến thiên Enthalpy chuẩn theo SGK mới:
  s = s.replace(/Δ\s*<sub>\s*r\s*<\/sub>\s*H\s*<sub>\s*298\s*<\/sub>\s*<sup>\s*[°o0]\s*<\/sup>/gi, 'Δ<sub>r</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*r\s*<\/sub>\s*H\s*<sup>\s*[°o0]\s*<\/sup>\s*<sub>\s*298\s*<\/sub>/gi, 'Δ<sub>r</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*r\s*<\/sub>\s*H\s*<sup>\s*[°o0]\s*<\/sup>/gi, 'Δ<sub>r</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*f\s*<\/sub>\s*H\s*<sub>\s*298\s*<\/sub>\s*<sup>\s*[°o0]\s*<\/sup>/gi, 'Δ<sub>f</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*f\s*<\/sub>\s*H\s*<sup>\s*[°o0]\s*<\/sup>\s*<sub>\s*298\s*<\/sub>/gi, 'Δ<sub>f</sub>H°<sub>298</sub>');
  s = s.replace(/Δ\s*<sub>\s*f\s*<\/sub>\s*H\s*<sup>\s*[°o0]\s*<\/sup>/gi, 'Δ<sub>f</sub>H°<sub>298</sub>');

  // 14. Sửa lỗi Enthalpy bị lỗi font scanner docx: r298H0°D> -> ΔrH°298 > 0
  s = s.replace(/r298H0°D\s*>/g, 'Δ<sub>r</sub>H°<sub>298</sub> > 0');
  s = s.replace(/r298H0°D\s*</g, 'Δ<sub>r</sub>H°<sub>298</sub> < 0');
  s = s.replace(/r298H°D\s*=\s*–?/g, 'Δ<sub>r</sub>H°<sub>298</sub> = –');

  // 15. Sửa lỗi phép nhân bị biến dạng ký tự như · ⇌ (t°) 10^-1 -> · 10^-1
  s = s.replace(/·\s*⇌\s*\(t°\)/g, '·');

  // 16. Dọn sạch các gạch chéo ngược đơn lẻ còn sót lại trước chữ cái
  s = s.replace(/\\([a-zA-Z]+)/g, '$1');

  // 17. Khoảng cách chuẩn cho mũi tên và dấu bằng
  s = s.replace(/\s*⇌\s*/g, ' ⇌ ');
  s = s.replace(/\s*→\s*/g, ' → ');
  s = s.replace(/\s*←\s*/g, ' ← ');

  // 18. Khoảng cách trước ký hiệu Enthalpy
  s = s.replace(/([^\s>])\s*(Δ<sub>[rf]<\/sub>H°<sub>298<\/sub>)/g, '$1 &nbsp; $2');

  // 19. Phân số Kc = (tử) / (mẫu) hiển thị dạng phân số phân tầng chuẩn sư phạm
  if (s.includes('/') && (s.includes('K<sub>c</sub>') || s.includes('['))) {
    s = formatFractionSlash(s);
  }

  // 20. Format nicely for lines starting with (1), (2), (3)...
  if (s.includes('(') && s.includes('<br')) {
    s = s.split(/<br\s*\/?>/gi).map((line) => {
      const trimmed = line.trim();
      const m = trimmed.match(/^(\([1-9]\d?\))\s*(.*)$/);
      if (m) {
        return `<span class="inline-block pl-3 py-0.5"><strong class="text-indigo-600 font-bold">${m[1]}</strong> ${m[2]}</span>`;
      }
      return line;
    }).join('<br/>');
  }

  return s;
}

export default formatChemicalText;
