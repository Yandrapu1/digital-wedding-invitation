import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const PetalsCanvas = () => {
  const canvasRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const PARTICLE_COUNT = window.innerWidth < 640 ? 20 : 32;
    const particles = [];

    const colors = [
      { r: 201, g: 155, b: 148, a: 0.65 }, // Muted rose
      { r: 233, g: 220, b: 197, a: 0.7 },  // Champagne
      { r: 182, g: 154, b: 98, a: 0.8 },   // Antique gold
      { r: 224, g: 180, b: 110, a: 0.75 }, // Marigold shimmer
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 7 + 3.5,
        speedY: Math.random() * 0.7 + 0.3,
        speedX: Math.random() * 0.4 - 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        oscillationDistance: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.4 ? 'petal' : 'dust',
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.01;

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(angle * p.oscillationSpeed) * p.oscillationDistance + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.type === 'petal') {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(p.size, -p.size, p.size * 1.5, p.size, 0, p.size * 1.8);
          ctx.bezierCurveTo(-p.size * 1.5, p.size, -p.size, -p.size, 0, 0);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.color.a})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.color.a * 0.9})`;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <>
      {isActive && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
        />
      )}
      
      {/* Floating Petals Toggle Button on Bottom-Right */}
      <button
        onClick={() => setIsActive(!isActive)}
        title={isActive ? "Disable floating petals" : "Enable floating petals"}
        aria-label="Toggle floating petals"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 bg-ivory/95 hover:bg-champagne/40 backdrop-blur-md border border-gold/40 text-espresso/70 hover:text-espresso px-3 py-2 sm:px-3.5 sm:py-2 rounded-full shadow-royal transition-all duration-300 text-xs flex items-center gap-1.5 group"
      >
        <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-gold' : 'text-espresso/40'} transition-colors`} />
        <span className="hidden sm:inline font-serif text-[11px] tracking-wider text-espresso/80">
          {isActive ? 'Petals On' : 'Petals Off'}
        </span>
      </button>
    </>
  );
};
