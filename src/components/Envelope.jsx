import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight } from 'lucide-react';

// ============================================================================
// Traditional South Indian Wedding Flank Motifs & Sacred Mudras (Line Art)
// Color Palette: Antique Gold (#BEA477), Muted Maroon (#874B50), Warm Ivory
// ============================================================================

// 1. పూర్ణకుంభం (Sacred Kalasam with Coconut & Mango Leaves)
const KalasamMotif = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 40 44" fill="none" className={className} stroke="#BEA477">
    <path d="M20 4 C16 9 15 13 20 16 C25 13 24 9 20 4 Z" fill="#EFE5D5" strokeWidth="1" />
    <path d="M14 13 C11 9 7 9 5 10 C9 12 13 15 14 16" strokeWidth="0.9" />
    <path d="M26 13 C29 9 33 9 35 10 C31 12 27 15 26 16" strokeWidth="0.9" />
    <path d="M11 16 C8 14 5 15 3 17 C7 18 11 18 13 18" strokeWidth="0.8" />
    <path d="M29 16 C32 14 35 15 37 17 C33 18 29 18 27 18" strokeWidth="0.8" />
    <ellipse cx="20" cy="18" rx="7" ry="2" fill="#F8F3E9" strokeWidth="1" />
    <path d="M15 19 C10 23 11 32 15 36 C18 39 22 39 25 36 C29 32 30 23 25 19" fill="#FFFDF9" strokeWidth="1.1" />
    <path d="M16 38 H24" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="20" cy="28" r="1.5" fill="#874B50" stroke="none" />
    <line x1="20" y1="25" x2="20" y2="31" stroke="#874B50" strokeWidth="0.7" />
    <line x1="17" y1="28" x2="23" y2="28" stroke="#874B50" strokeWidth="0.7" />
  </svg>
);

// 2. పాణిగ్రహణం / హస్తమేళాపం (Sacred Marriage Union Mudra - Groom & Bride Joining Hands)
const HastaMelapamMudra = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} stroke="#BEA477">
    {/* Auspicious Betel Leaf (తమలపాకు) */}
    <path
      d="M24 16 C17 19 14 26 18 33 C21 38 24 41 24 41 C24 41 27 38 30 33 C34 26 31 19 24 16 Z"
      fill="#EFE5D5"
      fillOpacity="0.5"
      strokeWidth="0.9"
    />
    <path d="M24 20 V38" stroke="#BEA477" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
    {/* Groom's Hand supporting from below */}
    <path
      d="M10 32 C14 30 18 29 22 30 C26 31 30 29 33 26"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M11 36 C16 34 20 33 24 33 C28 33 32 31 34 29"
      strokeWidth="0.9"
      strokeLinecap="round"
      opacity="0.8"
    />
    {/* Bride's Hand tenderly resting on top */}
    <path
      d="M38 18 C34 20 29 22 25 22 C22 22 18 24 16 26"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Bride's Auspicious Bangles (గాజులు) */}
    <line x1="34" y1="17" x2="36" y2="21" stroke="#874B50" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="37" y1="16" x2="39" y2="20" stroke="#BEA477" strokeWidth="1.2" strokeLinecap="round" />
    {/* Golden Akshatalu (తలంబ్రాలు) */}
    <circle cx="23" cy="24" r="1.2" fill="#BEA477" stroke="none" />
    <circle cx="25" cy="27" r="1.3" fill="#874B50" stroke="none" />
    <circle cx="21" cy="28" r="1" fill="#BEA477" stroke="none" />
  </svg>
);

// 3. సన్నాయి & మంగళ వాద్యం (Nadaswaram Wedding Music Wind Instrument)
const NadaswaramMotif = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className} stroke="#BEA477">
    <g transform="rotate(-30 22 22)">
      <path d="M21 6 H23 L24 28 L27 36 H17 L20 28 Z" fill="#FFFDF9" strokeWidth="1" />
      <ellipse cx="22" cy="36" rx="5" ry="1.5" fill="#EFE5D5" strokeWidth="0.9" />
      <circle cx="22" cy="14" r="0.8" fill="#874B50" stroke="none" />
      <circle cx="22" cy="19" r="0.8" fill="#874B50" stroke="none" />
      <circle cx="22" cy="24" r="0.8" fill="#874B50" stroke="none" />
    </g>
    <g transform="rotate(30 22 22)">
      <path d="M21 6 H23 L24 28 L27 36 H17 L20 28 Z" fill="#FFFDF9" strokeWidth="1" />
      <ellipse cx="22" cy="36" rx="5" ry="1.5" fill="#EFE5D5" strokeWidth="0.9" />
      <circle cx="22" cy="14" r="0.8" fill="#874B50" stroke="none" />
      <circle cx="22" cy="19" r="0.8" fill="#874B50" stroke="none" />
      <circle cx="22" cy="24" r="0.8" fill="#874B50" stroke="none" />
    </g>
    <circle cx="22" cy="22" r="4.5" fill="#FFFDF9" stroke="#874B50" strokeWidth="1" />
    <circle cx="22" cy="22" r="2" fill="#BEA477" stroke="none" />
  </svg>
);

// 4. కుత్తువిళక్కు / దీప లక్ష్మి (Traditional South Indian Temple Brass Lamp)
const KuthuVilakkuMotif = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 36 44" fill="none" className={className} stroke="#BEA477">
    <circle cx="18" cy="5" r="1.5" fill="#BEA477" stroke="none" />
    <path d="M17 7 H19 V10 H17 Z" fill="#BEA477" />
    <path d="M18 10 C16 12 16 14 18 16 C20 14 20 12 18 10 Z" fill="#874B50" stroke="none" />
    <path d="M12 17 C12 19 14 20 18 20 C22 20 24 19 24 17 H12 Z" fill="#FFFDF9" strokeWidth="1" />
    <circle cx="13" cy="16.5" r="1" fill="#874B50" stroke="none" />
    <circle cx="23" cy="16.5" r="1" fill="#874B50" stroke="none" />
    <line x1="18" y1="20" x2="18" y2="38" strokeWidth="1.4" strokeLinecap="round" />
    <ellipse cx="18" cy="25" rx="3.5" ry="1.5" fill="#EFE5D5" strokeWidth="0.9" />
    <ellipse cx="18" cy="31" rx="4" ry="1.8" fill="#EFE5D5" strokeWidth="0.9" />
    <path d="M10 40 H26 L24 38 H12 L10 40 Z" fill="#FFFDF9" strokeWidth="1" />
    <line x1="8" y1="41" x2="28" y2="41" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// 5. హంస మిథునం (Sacred Swans Symbol of Eternal Companionship)
const HamsaMotif = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className} stroke="#BEA477">
    <path
      d="M28 15 C26 11 22 11 20 14 C18 17 21 21 23 25 C25 29 23 33 17 34 C13 34 10 31 11 27 C12 24 15 22 18 22"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M20 14 C18 15 15 15 14 16 L12 15" strokeWidth="1" strokeLinecap="round" />
    <circle cx="18.5" cy="14" r="0.8" fill="#874B50" stroke="none" />
    <path d="M23 25 C27 23 33 22 35 25 C37 28 34 32 29 33" fill="#FFFDF9" strokeWidth="1" />
    <path d="M26 27 C29 26 32 26 33 28" strokeWidth="0.7" opacity="0.7" />
    <path d="M14 36 C18 34 26 34 30 36 C28 39 16 39 14 36 Z" fill="#EFE5D5" strokeWidth="0.9" />
  </svg>
);

// 6. గజరాజు (Auspicious Temple Elephant with Lotus in Trunk)
const ElephantMotif = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className} stroke="#BEA477">
    <path
      d="M12 28 C10 24 11 18 16 15 C21 12 29 12 34 16 C37 18 39 22 39 26 L38 34 H33 L34 28 C32 28 30 28 28 28 L28 34 H22 L23 28 C20 28 18 28 17 29 L16 34 H12 Z"
      fill="#FFFDF9"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path d="M37 20 C40 21 42 18 41 15 C40 12 37 13 36 15" strokeWidth="1.1" strokeLinecap="round" />
    <circle cx="41" cy="13" r="1.5" fill="#874B50" stroke="none" />
    <circle cx="34" cy="18" r="0.8" fill="#874B50" stroke="none" />
    <path d="M32 16 C34 14 36 15 36 17" stroke="#BEA477" strokeWidth="0.8" />
    <path d="M20 20 H30 C29 25 27 27 25 27 C23 27 21 25 20 20 Z" fill="#EFE5D5" strokeWidth="0.9" />
  </svg>
);

// Slender Garland Thread Connector
const SideGarlandThread = () => (
  <div className="flex flex-col items-center py-1 opacity-60">
    <div className="w-[1px] h-3 bg-gradient-to-b from-transparent via-[#BEA477] to-[#BEA477]" />
    <div className="w-1.5 h-1.5 rounded-full bg-[#BEA477]/40 border border-[#BEA477]" />
    <div className="w-[1px] h-3 bg-gradient-to-b from-[#BEA477] to-transparent" />
  </div>
);

// Delicate Corner Motif
const CornerFloral = ({ position = "top-left" }) => {
  const rotation = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  }[position];

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6 text-[#BEA477] pointer-events-none select-none"
      style={{ transform: rotation }}
    >
      <path d="M2 38 V8 C2 4.6 4.6 2 8 2 H38" strokeWidth="1" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="#BEA477" />
      <circle cx="12" cy="12" r="1" fill="#874B50" stroke="none" />
    </svg>
  );
};

export const Envelope = ({ onOpenComplete, onStartMusic }) => {
  const [stage, setStage] = useState('sealed');

  // Prevent background scrollbar flickering / page shaking while modal is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const handleBreakSeal = () => {
    if (stage !== 'sealed') return;
    setStage('opening');

    if (onStartMusic) {
      onStartMusic();
    }

    confetti({
      particleCount: window.innerWidth < 640 ? 40 : 65,
      spread: 70,
      origin: { y: 0.52 },
      colors: ['#FFFCF6', '#BEA477', '#C99A91', '#874B50', '#EFE5D5'],
      ticks: 260,
      gravity: 0.6,
      scalar: 1.1,
      shapes: ['circle'],
    });

    setTimeout(() => {
      setStage('revealing');
    }, 600);

    setTimeout(() => {
      setStage('exiting');
    }, 2400);

    setTimeout(() => {
      onOpenComplete();
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        stage === 'exiting'
          ? { opacity: 0, scale: 1.02 }
          : { opacity: 1, scale: 1 }
      }
      transition={{
        duration: stage === 'exiting' ? 0.65 : 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-hidden select-none"
      style={{
        background: 'radial-gradient(circle at 50% 45%, #FFFDF9 0%, #F8F3E9 60%, #EFE5D5 100%)',
      }}
    >
      {/* ======================================================== */}
      {/* LEFT FLANK: Traditional Wedding Motifs & Mudra           */}
      {/* ======================================================== */}
      <div className="hidden md:flex absolute left-3 lg:left-8 xl:left-14 top-1/2 -translate-y-1/2 flex-col items-center pointer-events-none select-none z-10 opacity-75 hover:opacity-100 transition-opacity">
        <KalasamMotif className="w-8 h-8 lg:w-9 lg:h-9 text-[#BEA477]" />
        <span className="font-telugu text-[9px] text-[#874B50] font-bold mt-0.5 tracking-wider">పూర్ణకుంభం</span>
        <SideGarlandThread />
        <HastaMelapamMudra className="w-9 h-9 lg:w-10 lg:h-10 text-[#BEA477]" />
        <span className="font-telugu text-[9px] text-[#874B50] font-bold mt-0.5 tracking-wider">పాణిగ్రహణం</span>
        <SideGarlandThread />
        <NadaswaramMotif className="w-8 h-8 lg:w-9 lg:h-9 text-[#BEA477]" />
        <span className="font-telugu text-[9px] text-[#874B50] font-bold mt-0.5 tracking-wider">మంగళ వాద్యం</span>
      </div>

      {/* ======================================================== */}
      {/* RIGHT FLANK: Traditional Wedding Motifs & Mudra          */}
      {/* ======================================================== */}
      <div className="hidden md:flex absolute right-3 lg:right-8 xl:right-14 top-1/2 -translate-y-1/2 flex-col items-center pointer-events-none select-none z-10 opacity-75 hover:opacity-100 transition-opacity">
        <KuthuVilakkuMotif className="w-8 h-8 lg:w-9 lg:h-9 text-[#BEA477]" />
        <span className="font-telugu text-[9px] text-[#874B50] font-bold mt-0.5 tracking-wider">దీప లక్ష్మి</span>
        <SideGarlandThread />
        <HamsaMotif className="w-9 h-9 lg:w-10 lg:h-10 text-[#BEA477]" />
        <span className="font-telugu text-[9px] text-[#874B50] font-bold mt-0.5 tracking-wider">హంస మిథునం</span>
        <SideGarlandThread />
        <ElephantMotif className="w-9 h-9 lg:w-10 lg:h-10 text-[#BEA477]" />
        <span className="font-telugu text-[9px] text-[#874B50] font-bold mt-0.5 tracking-wider">గజరాజు</span>
      </div>

      {/* Main Centered Stack - Proportioned to comfortably fit any viewport without scrollbar */}
      <div className="relative w-full max-w-xl flex flex-col items-center z-20">
        
        {/* Top Sacred Inscription */}
        <div className="text-center mb-2 sm:mb-3 px-2">
          <div className="flex items-center justify-center gap-2 text-[#874B50] text-xs sm:text-[13px] font-serif tracking-widest font-semibold">
            <span>Srirasthu</span>
            <span className="text-[#BEA477] text-[10px]">✦</span>
            <span className="text-[#874B50] font-bold">Shubhamasthu</span>
            <span className="text-[#BEA477] text-[10px]">✦</span>
            <span>Avighnamasthu</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#57463D] font-bold tracking-wide mt-0.5 leading-tight">
            Boni's Wedding Invitation
          </h2>
          <span className="font-telugu text-xs sm:text-sm text-[#874B50] font-bold block">
            బోని వారి వివాహ మహోత్సవ ఆహ్వాన శుభ పత్రిక
          </span>
          <p className="font-sans text-[10px] sm:text-[11px] text-[#7A665A] mt-0.5 tracking-widest uppercase font-medium">
            Chi. Gowtham &amp; Chi. La. Sow. Sai Sunanda Devi • Visakhapatnam
          </p>
        </div>

        {/* Handcrafted Ivory Envelope Container */}
        <motion.div
          animate={
            stage === 'revealing' || stage === 'exiting'
              ? { y: 25, opacity: 0.96 }
              : { y: 0, opacity: 1 }
          }
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-[330px] sm:h-[360px] md:h-[380px] bg-[#FFFCF6] rounded-2xl shadow-[0_15px_40px_-10px_rgba(87,70,61,0.12),0_0_1px_1px_rgba(190,164,119,0.25)] border border-[#BEA477]/60 flex flex-col justify-end p-4 sm:p-6 overflow-hidden"
          style={{ perspective: '1000px' }}
        >
          {/* Paper Texture */}
          <div className="absolute inset-0 paper-texture opacity-70 pointer-events-none" />

          {/* Double Fine Borders */}
          <div className="absolute inset-2 border border-[#BEA477]/40 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 border border-dashed border-[#BEA477]/25 rounded-lg pointer-events-none" />

          {/* Four Corner Accents */}
          <div className="absolute top-2 left-2 z-10"><CornerFloral position="top-left" /></div>
          <div className="absolute top-2 right-2 z-10"><CornerFloral position="top-right" /></div>
          <div className="absolute bottom-2 left-2 z-10"><CornerFloral position="bottom-left" /></div>
          <div className="absolute bottom-2 right-2 z-10"><CornerFloral position="bottom-right" /></div>

          {/* 3D Realistic Folded Paper Flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 origin-top z-30 pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
            animate={
              stage !== 'sealed'
                ? { rotateX: -180, opacity: 0 }
                : { rotateX: 0, opacity: 1 }
            }
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              viewBox="0 0 600 240"
              preserveAspectRatio="none"
              className="w-full h-full drop-shadow-[0_6px_10px_rgba(87,70,61,0.08)]"
            >
              <defs>
                <linearGradient id="flapPaperGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5ECE1" />
                  <stop offset="60%" stopColor="#FCF8F2" />
                  <stop offset="100%" stopColor="#FFFDF9" />
                </linearGradient>
              </defs>
              <polygon
                points="0,0 600,0 300,235"
                fill="url(#flapPaperGrad)"
                stroke="#BEA477"
                strokeWidth="1.2"
              />
              <polygon
                points="16,4 584,4 300,222"
                fill="none"
                stroke="#BEA477"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                opacity="0.6"
              />
            </svg>
            <div className="absolute top-3 sm:top-5 inset-x-0 text-center">
              <span className="font-telugu text-[11px] sm:text-xs text-[#874B50] font-bold tracking-wider">
                శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు
              </span>
            </div>
          </motion.div>

          {/* Raw Silk Ribbon Sash */}
          <motion.div
            animate={
              stage !== 'sealed'
                ? { opacity: 0, scaleY: 0 }
                : { opacity: 0.95, scaleY: 1 }
            }
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-7 sm:h-8 bg-gradient-to-r from-[#EFE5D5] via-[#FAF4EA] to-[#EFE5D5] border-y border-[#BEA477]/40 shadow-sm z-25 pointer-events-none"
          />

          {/* Lower Safe Zone (Uncut details below seal) */}
          <div className="relative z-10 text-center pb-1 sm:pb-2">
            <p className="font-serif text-xs sm:text-sm text-[#57463D] font-semibold tracking-wide">
              Saturday, 14th November 2026 • Visakhapatnam
            </p>
            <p className="font-sans text-[9px] sm:text-[10px] tracking-wider uppercase text-[#874B50] font-bold mt-0.5">
              Invited by Sri Boni Kondala Rao - Smt. Kondamma
            </p>
            <p className="font-telugu text-[10px] sm:text-[11px] text-[#7A665A] font-semibold mt-0.5">
              శ్రీ బోని కొండలరావు - శ్రీమతి కొండమ్మ దంపతులు
            </p>
          </div>

          {/* Handcrafted G&S Wax Seal in Muted Maroon */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer touch-manipulation group"
            animate={
              stage !== 'sealed'
                ? { scale: [1, 1.15, 0], opacity: 0, rotate: 10 }
                : { scale: 1 }
            }
            transition={
              stage !== 'sealed'
                ? { duration: 0.45, ease: 'easeOut' }
                : { duration: 0.2 }
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBreakSeal}
          >
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-full bg-gradient-to-br from-[#9E5D63] via-[#874B50] to-[#6A383D] p-2 flex items-center justify-center shadow-[0_6px_20px_rgba(135,75,80,0.32),0_0_10px_rgba(190,164,119,0.35)] border-2 border-[#BEA477]/80">
              <div className="absolute inset-1 rounded-full border border-[#BEA477]/35 pointer-events-none" />
              <div className="absolute inset-2 rounded-full border border-dashed border-[#BEA477]/45 pointer-events-none" />

              <div className="flex flex-col items-center justify-center text-center select-none">
                <span className="text-[#FFF9EF] text-sm sm:text-base font-serif italic font-bold tracking-widest drop-shadow-sm">
                  G &amp; S
                </span>
                <span className="text-[#EFE5D5] text-[7px] uppercase tracking-[0.22em] font-sans font-bold mt-0.5">
                  14 • XI • 26
                </span>
              </div>
            </div>

            {/* Tap Hint Badge */}
            {stage === 'sealed' && (
              <div className="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FFFCF6]/95 px-2.5 py-0.5 rounded-full border border-[#BEA477]/50 shadow-sm transition-colors group-hover:bg-[#FFFDF9]">
                <span className="font-serif text-[10px] text-[#874B50] font-bold flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#BEA477]" />
                  Tap seal to open
                </span>
              </div>
            )}
          </motion.div>

          {/* Revealed Shubhalekha Card */}
          <AnimatePresence>
            {(stage === 'revealing' || stage === 'exiting') && (
              <motion.div
                initial={{ y: 25, opacity: 0, scale: 0.96 }}
                animate={{ y: -115, opacity: 1, scale: 1.02 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-3 sm:inset-x-5 top-6 min-h-[230px] sm:min-h-[250px] bg-gradient-to-b from-[#FFFDF9] via-[#FFFCF6] to-[#FAF5EC] rounded-2xl shadow-[0_15px_35px_-10px_rgba(87,70,61,0.22)] border-2 border-[#BEA477] p-4 sm:p-6 z-20 flex flex-col items-center justify-center text-center overflow-hidden"
              >
                <div className="absolute top-2 left-2"><CornerFloral position="top-left" /></div>
                <div className="absolute top-2 right-2"><CornerFloral position="top-right" /></div>
                <div className="absolute bottom-2 left-2"><CornerFloral position="bottom-left" /></div>
                <div className="absolute bottom-2 right-2"><CornerFloral position="bottom-right" /></div>

                <KalasamMotif className="w-6 h-6 text-[#BEA477] mb-1" />

                <span className="font-telugu text-xs text-[#874B50] font-bold tracking-wide block">
                  శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు
                </span>
                
                <h3 className="font-serif text-base sm:text-xl text-[#57463D] font-bold mt-0.5">
                  Boni's Wedding Invitation
                </h3>

                <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#BEA477] to-transparent my-1.5" />

                <span className="font-script text-2xl sm:text-3xl text-[#874B50] block leading-tight font-normal">
                  Gowtham &amp; Sai Sunanda Devi
                </span>
                <span className="font-telugu text-xs sm:text-sm text-[#874B50] font-bold block mt-0.5">
                  చి॥ గౌతమ్ మరియు చి॥ల॥సౌ॥ సాయి సునంద దేవి
                </span>

                <span className="font-sans text-[10px] text-[#7A665A] font-semibold mt-1.5 uppercase tracking-wider">
                  Saturday, 14th November 2026 • Visakhapatnam
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quick Direct Link */}
        <div className="mt-2.5 sm:mt-3 flex items-center justify-center">
          <button
            onClick={onOpenComplete}
            className="text-[#7A665A] hover:text-[#57463D] font-sans text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline py-1 font-medium"
          >
            Direct Access to Wedding Details
            <ArrowRight className="w-3.5 h-3.5 text-[#BEA477]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Envelope;
