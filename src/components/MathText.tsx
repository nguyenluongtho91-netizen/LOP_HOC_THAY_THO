import React, { useEffect, useRef, memo } from 'react';

/**
 * MathText - Component render LaTeX và chuẩn hóa số mũ toán học
 * 
 * - Tự động nhận diện và chuyển đổi mọi dạng số mũ thô: a^m, a^(m - n), x^2, 3³...
 *   sang thẻ số mũ <sup> hoặc công thức Toán học MathJax chuẩn
 * - Giữ nguyên output MathJax không bị ghi đè khi parent re-render
 */

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: (elements?: HTMLElement[]) => Promise<void>;
      typesetClear?: (elements?: HTMLElement[]) => void;
    };
  }
}

interface MathTextProps {
  html: string;
  className?: string;
  block?: boolean;
}

/**
 * Hàm chuẩn hóa số mũ toán học thông minh
 */
function normalizeMathAndExponents(rawText: string): string {
  if (!rawText) return '';
  let str = rawText.replace(/&lt;br\s*\/?&gt;/gi, '<br/>');

  // Bản đồ ký tự số mũ unicode sang số/chữ tương ứng
  const supMap: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    'ˣ': 'x', 'ⁿ': 'n', 'ᵐ': 'm', 'ᵃ': 'a', 'ᵇ': 'b'
  };

  // 1. Chuyển đổi các ký tự unicode mũ: ² -> <sup>2</sup>, ³ -> <sup>3</sup>, ˣ -> <sup>x</sup>...
  for (const [uni, normal] of Object.entries(supMap)) {
    if (str.includes(uni)) {
      str = str.split(uni).join(`<sup>${normal}</sup>`);
    }
  }

  // 2. Chuyển đổi biểu thức số mũ có ngoặc: a^(m - n) -> a<sup>m - n</sup>, (x - 1)^(2) -> (x - 1)<sup>2</sup>
  str = str.replace(/([a-zA-Z0-9\(\)]+)\^([a-zA-Z0-9\(\)\s\-\+]+)(?=[^$]*(\$|$))/g, (match, base, exp) => {
    // Nếu exp có ngoặc đơn bao bọc: (m - n) -> gỡ ngoặc khi lên số mũ
    const cleanExp = exp.replace(/^\((.*)\)$/, '$1');
    return `${base}<sup>${cleanExp}</sup>`;
  });

  return str;
}

const MathText: React.FC<MathTextProps> = ({ html, className = '', block = false }) => {
  const ref = useRef<HTMLElement>(null);
  const initialized = useRef(false);
  const contentHash = useRef('');

  useEffect(() => {
    if (!ref.current) return;
    
    // Chuẩn hóa toàn bộ số mũ trước khi đưa vào DOM
    const processedHtml = normalizeMathAndExponents(html || '');
    
    if (initialized.current && contentHash.current === processedHtml) {
      return; // Đã render rồi, skip để giữ MathJax output
    }
    
    // Set innerHTML trực tiếp qua ref (KHÔNG dùng dangerouslySetInnerHTML)
    ref.current.innerHTML = processedHtml;
    contentHash.current = processedHtml;
    
    // Typeset MathJax
    const timer = setTimeout(() => {
      if (ref.current && window.MathJax?.typesetPromise) {
        // Clear trước để tránh duplicate
        window.MathJax.typesetClear?.([ref.current]);
        
        window.MathJax.typesetPromise([ref.current])
          .then(() => {
            initialized.current = true;
          })
          .catch(err => console.error('MathText typeset error:', err));
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [html]);

  // Render element TRỐNG - content được set qua ref
  const Tag = block ? 'div' : 'span';
  return <Tag ref={ref as any} className={className} />;
};

export default memo(MathText);
