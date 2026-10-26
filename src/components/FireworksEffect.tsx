import React, { useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';

interface FireworksEffectProps {
  active: boolean;
  onClose: () => void;
  title?: string;
  durationSeconds?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  radius: number;
  decay: number;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  trail: { x: number; y: number }[];
}

export const FireworksEffect: React.FC<FireworksEffectProps> = ({
  active,
  onClose,
  title = 'Chúc mừng em đã đạt điểm 10 tuyệt đối! 🎆',
  durationSeconds = 8
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      '#ef4444', // red
      '#f59e0b', // amber
      '#10b981', // emerald
      '#3b82f6', // blue
      '#8b5cf6', // purple
      '#ec4899', // pink
      '#f97316', // orange
      '#eab308', // yellow gold
      '#06b6d4', // cyan
      '#ffffff'  // white sparkle
    ];

    let rockets: Rocket[] = [];
    let particles: Particle[] = [];
    let animId: number;
    let spawnTimer: any;

    const createExplosion = (x: number, y: number, color?: string) => {
      const baseColor = color || colors[Math.floor(Math.random() * colors.length)];
      const count = 70 + Math.floor(Math.random() * 40);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.2;
        const speed = Math.random() * 5 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: Math.random() > 0.3 ? baseColor : colors[Math.floor(Math.random() * colors.length)],
          radius: Math.random() * 2.2 + 1.2,
          decay: Math.random() * 0.015 + 0.008
        });
      }
    };

    const launchRocket = (startX?: number, targetHeight?: number) => {
      const x = startX ?? width * 0.15 + Math.random() * (width * 0.7);
      const targetY = targetHeight ?? height * 0.15 + Math.random() * (height * 0.35);
      rockets.push({
        x,
        y: height,
        targetY,
        vy: -(Math.random() * 3 + 8),
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: []
      });
    };

    // Bắn đợt mở màn lập tức
    launchRocket(width * 0.3, height * 0.25);
    launchRocket(width * 0.7, height * 0.28);
    setTimeout(() => launchRocket(width * 0.5, height * 0.2), 300);
    setTimeout(() => launchRocket(width * 0.2, height * 0.35), 700);
    setTimeout(() => launchRocket(width * 0.8, height * 0.32), 1000);

    // Chu kỳ phóng đạn liên tục
    spawnTimer = setInterval(() => {
      launchRocket();
      if (Math.random() > 0.4) {
        setTimeout(() => launchRocket(), 250);
      }
    }, 700);

    // Cho phép người dùng click vào màn hình để tự tạo pháo hoa
    const handleCanvasClick = (e: MouseEvent) => {
      createExplosion(e.clientX, e.clientY);
    };
    canvas.addEventListener('click', handleCanvasClick);

    // Vòng lặp render mượt mà
    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Cập nhật và vẽ rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 5) r.trail.shift();

        r.y += r.vy;

        // Vẽ vệt khói/tia sáng của rocket
        ctx.beginPath();
        ctx.moveTo(r.trail[0].x, r.trail[0].y);
        for (let j = 1; j < r.trail.length; j++) {
          ctx.lineTo(r.trail[j].x, r.trail[j].y);
        }
        ctx.strokeStyle = r.color;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Điểm đầu rocket
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Nổ khi chạm độ cao mục tiêu
        if (r.y <= r.targetY || r.vy >= 0) {
          createExplosion(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      // Cập nhật và vẽ particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // trọng lực nhẹ
        p.vx *= 0.985; // ma sát không khí
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    // Hẹn giờ tự động kết thúc
    const autoCloseTimer = setTimeout(() => {
      onClose();
    }, durationSeconds * 1000);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(spawnTimer);
      clearTimeout(autoCloseTimer);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('click', handleCanvasClick);
      }
    };
  }, [active, durationSeconds, onClose]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden bg-black/25 backdrop-blur-[1px] animate-fadeIn">
      {/* Canvas pháo hoa */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto cursor-crosshair"
      />

      {/* Banner thông báo chúc mừng */}
      <div className="relative z-10 pointer-events-auto mt-4 sm:mt-8 max-w-lg w-full bg-white/95 backdrop-blur-md border border-amber-300 shadow-2xl rounded-2xl p-4 sm:p-5 text-center transform transition-all duration-300">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black mb-2 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '4s' }} />
          <span>ĐẠT ĐIỂM 10 TUYỆT ĐỐI</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '4s' }} />
        </div>
        <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-600 mt-1 font-medium">
          Em làm bài rất cẩn thận và chính xác toàn bộ. Nhấp vào màn hình để bắn thêm pháo hoa nhé!
        </p>

        <div className="mt-3.5 flex items-center justify-center gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Đóng pháo hoa</span>
          </button>
        </div>
      </div>

      {/* Gợi ý tương tác */}
      <div className="relative z-10 text-[11px] font-medium text-white/90 bg-slate-900/60 px-3 py-1 rounded-full mb-3 pointer-events-none">
        🎆 Nhấp chuột bất kỳ đâu trên màn hình để bắn pháo hoa
      </div>
    </div>
  );
};
