import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight } from 'lucide-react';

// ============================================================================
// Delicate Traditional Telugu Jasmine & Lotus Corner Motif (మల్లె & కమలం)
// Handcrafted line-art in Antique Gold (#BEA477)
// ============================================================================
const TraditionalFloralCorner = ({ position = "top-left" }) => {
  const rotation = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  }[position];

  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      stroke="currentColor"
      className="w-7 h-7 sm:w-8 sm:h-8 text-[#BEA477] pointer-events-none select-none"
      style={{ transform: rotation }}
    >
      {/* Outer Fine Temple Corner Filigree */}
      <path d="M2 48 V10 C2 5.58 5.58 2 10 2 H48" strokeWidth="1" strokeLinecap="round" />
      <path d="M6 44 V14 C6 9.58 9.58 6 14 6 H44" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.6" />
      
      {/* Delicate Jasmine Flower (మల్లెపూవు) */}
      <g transform="translate(16, 16)">
        <circle cx="0" cy="0" r="2" fill="#BEA477" fillOpacity="0.4" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-5"
            rx="1.6"
            ry="3.2"
            transform={`rotate(${angle} 0 0)`}
            fill="#FFFCF6"
            stroke="#BEA477"
            strokeWidth="0.6"
          />
        ))}
        <circle cx="0" cy="0" r="1.2" fill="#874B50" />
      </g>

      {/* Trailing Jasmine Buds & Leaves */}
      <circle cx="28" cy="6" r="1.5" fill="#C99A91" stroke="#BEA477" strokeWidth="0.5" />
      <circle cx="6" cy="28" r="1.5" fill="#C99A91" stroke="#BEA477" strokeWidth="0.5" />
      <path d="M10 2 C18 10 28 6 28 6" stroke="#BEA477" strokeWidth="0.6" opacity="0.5" />
      <path d="M2 10 C10 18 6 28 6 28" stroke="#BEA477" strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
};

// ============================================================================
// Auspicious Temple Kalasam Icon (కలశం) in Antique Gold (#BEA477)
// ============================================================================
const SubtleKalasamIcon = ({ className = "w-6 h-6 text-[#BEA477]" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    {/* Coconut on top */}
    <path d="M20 6 C17 11 16 14 20 17 C24 14 23 11 20 6 Z" fill="#C99A91" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.9" />
    {/* Mango Leaves */}
    <path d="M14 14 C12 10 9 9 7 9 C10 12 14 16 15 17" stroke="currentColor" strokeWidth="0.8" />
    <path d="M26 14 C28 10 31 9 33 9 C30 12 26 16 25 17" stroke="currentColor" strokeWidth="0.8" />
    {/* Pot rim & body */}
    <ellipse cx="20" cy="18" rx="6" ry="1.8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.9" />
    <path d="M14 19 C10 23 11 31 15 34 C18 36 22 36 25 34 C29 31 30 23 26 19" fill="#FFFCF6" stroke="currentColor" strokeWidth="1" />
    <path d="M16 34 H24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    {/* Vermilion Tilak */}
    <circle cx="20" cy="26" r="1.2" fill="#874B50" />
  </svg>
);

export const Envelope = ({ onOpenComplete, onStartMusic }) => {
  // Stages: 'sealed' -> 'opening' -> 'revealing' -> 'exiting'
  const [stage, setStage] = useState('sealed');

  const handleBreakSeal = () => {
    if (stage !== 'sealed') return;
    setStage('opening');

    if (onStartMusic) {
      onStartMusic();
    }

    // Slow, poetic shower of traditional South Indian floral petals:
    // Jasmine white (#FFFCF6), antique gold (#BEA477), dusty rose (#C99A91), muted maroon (#874B50)
    confetti({
      particleCount: window.innerWidth < 640 ? 45 : 70,
      spread: 75,
      origin: { y: 0.52 },
      colors: ['#FFFCF6', '#BEA477', '#C99A91', '#874B50', '#EFE5D5'],
      ticks: 280,
      gravity: 0.55,
      scalar: 1.15,
      shapes: ['circle'],
    });

    // Step 2: The Shubhalekha Card gracefully slides up out of the envelope
    setTimeout(() => {
      setStage('revealing');
    }, 600);

    // Step 3: Dissolve smoothly into the wedding website
    setTimeout(() => {
      setStage('exiting');
    }, 2500);

    // Step 4: Callback complete
    setTimeout(() => {
      onOpenComplete();
    }, 3100);
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
        duration: stage === 'exiting' ? 0.75 : 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-6 py-6 overflow-y-auto"
      style={{
        background: 'radial-gradient(circle at 50% 38%, #FFFDF9 0%, #F8F3E9 55%, #EFE5D5 100%)',
      }}
    >
      {/* Ambient warm candlelight & temple glow */}
      <div className="absolute w-[450px] sm:w-[750px] h-[450px] sm:h-[750px] rounded-full bg-[#BEA477]/10 blur-[130px] pointer-events-none" />
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#C99A91]/12 blur-[100px] pointer-events-none -top-10 -right-10" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl flex flex-col items-center my-auto"
      >
        {/* ======================================================== */}
        {/* Top Sacred Inscription (Above Envelope)                  */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-3 sm:mb-4 px-2"
        >
          {/* Sanskrit & Telugu Invocations */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#874B50] text-xs sm:text-[13px] font-serif tracking-widest mb-1 font-semibold">
            <span>Srirasthu</span>
            <span className="text-[#BEA477] text-xs">✦</span>
            <span className="text-[#874B50] font-bold">Shubhamasthu</span>
            <span className="text-[#BEA477] text-xs">✦</span>
            <span>Avighnamasthu</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#57463D] font-bold tracking-wide mt-1">
            Boni's Wedding Invitation
          </h2>
          <span className="font-telugu text-xs sm:text-sm text-[#874B50] font-bold block mt-0.5">
            బోని వారి వివాహ మహోత్సవ ఆహ్వాన శుభ పత్రిక
          </span>

          <p className="font-sans text-[10px] sm:text-[11px] text-[#7A665A] mt-1 tracking-widest uppercase font-medium">
            Chi. Gowtham &amp; Chi. La. Sow. Sai Sunanda Devi • Visakhapatnam
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* The Handcrafted Ivory Envelope Body                      */}
        {/* ======================================================== */}
        <motion.div
          animate={
            stage === 'revealing' || stage === 'exiting'
              ? { y: 35, opacity: 0.96 }
              : { y: 0, opacity: 1 }
          }
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xl min-h-[400px] sm:min-h-[440px] md:min-h-[460px] bg-[#FFFCF6] rounded-2xl shadow-[0_20px_50px_-10px_rgba(87,70,61,0.12),0_0_1px_1px_rgba(190,164,119,0.25)] border border-[#BEA477]/60 p-5 sm:p-7 md:p-8 flex flex-col justify-end overflow-hidden"
          style={{ perspective: '1200px' }}
        >
          {/* Authentic Handmade Paper Texture */}
          <div className="absolute inset-0 paper-texture opacity-75 pointer-events-none" />

          {/* Double Fine Ornamental Antique-Gold Borders */}
          <div className="absolute inset-2 sm:inset-3 border border-[#BEA477]/45 rounded-xl pointer-events-none" />
          <div className="absolute inset-3.5 sm:inset-[18px] border border-dashed border-[#BEA477]/25 rounded-lg pointer-events-none" />

          {/* Four Corner Jasmine & Lotus Motifs */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
            <TraditionalFloralCorner position="top-left" />
          </div>
          <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
            <TraditionalFloralCorner position="top-right" />
          </div>
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10">
            <TraditionalFloralCorner position="bottom-left" />
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10">
            <TraditionalFloralCorner position="bottom-right" />
          </div>

          {/* ======================================================== */}
          {/* 3D Realistic Handcrafted Flap with Gold Filigree V-Fold  */}
          {/* ======================================================== */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[52%] origin-top z-30 pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
            animate={
              stage !== 'sealed'
                ? { rotateX: -180, opacity: 0 }
                : { rotateX: 0, opacity: 1 }
            }
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Triangular Paper Flap Surface */}
            <svg
              viewBox="0 0 600 300"
              preserveAspectRatio="none"
              className="w-full h-full drop-shadow-[0_8px_14px_rgba(87,70,61,0.08)]"
            >
              <defs>
                <linearGradient id="flapPaperGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5ECE1" />
                  <stop offset="50%" stopColor="#FCF8F2" />
                  <stop offset="100%" stopColor="#FFFDF9" />
                </linearGradient>
              </defs>

              {/* Main Folded Paper Triangle */}
              <polygon
                points="0,0 600,0 300,285"
                fill="url(#flapPaperGrad)"
                stroke="#BEA477"
                strokeWidth="1.2"
              />

              {/* Inner Decorative Dashed Gold Border */}
              <polygon
                points="16,4 584,4 300,270"
                fill="none"
                stroke="#BEA477"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Subtle Jasmine Motif at Flap Top Center */}
              <circle cx="300" cy="55" r="2.5" fill="#874B50" />
              <circle cx="288" cy="55" r="1.5" fill="#BEA477" opacity="0.6" />
              <circle cx="312" cy="55" r="1.5" fill="#BEA477" opacity="0.6" />
              <path d="M275 55 Q 300 45 325 55" stroke="#BEA477" strokeWidth="0.7" fill="none" opacity="0.5" />
            </svg>

            {/* Sacred Telugu Inscription on the Flap */}
            <div className="absolute top-4 sm:top-6 inset-x-0 text-center">
              <span className="font-telugu text-[11px] sm:text-xs text-[#874B50] font-bold tracking-wider opacity-90">
                శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు
              </span>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* Raw Silk Ribbon Sash (Champagne & Antique Gold Trim)      */}
          {/* ======================================================== */}
          <motion.div
            animate={
              stage !== 'sealed'
                ? { opacity: 0, scaleY: 0 }
                : { opacity: 0.95, scaleY: 1 }
            }
            transition={{ duration: 0.45 }}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 sm:h-9 bg-gradient-to-r from-[#EFE5D5] via-[#FAF4EA] to-[#EFE5D5] border-y border-[#BEA477]/40 shadow-sm z-25 pointer-events-none"
          />

          {/* ======================================================== */}
          {/* BOTTOM SECTION (Below Ribbon & Seal) - Clear & Uncut     */}
          {/* ======================================================== */}
          <div className="relative z-10 text-center pb-2 sm:pb-3 pt-6">
            <p className="font-serif text-xs sm:text-sm text-[#57463D] font-semibold tracking-wide">
              Saturday, 14th November 2026 • Visakhapatnam
            </p>
            <p className="font-sans text-[9px] sm:text-[10px] tracking-wider uppercase text-[#874B50] font-bold mt-1">
              Invited by Sri Boni Kondala Rao - Smt. Kondamma
            </p>
            <p className="font-telugu text-[10px] sm:text-[11px] text-[#7A665A] font-semibold mt-0.5">
              శ్రీ బోని కొండలరావు - శ్రీమతి కొండమ్మ దంపతులు
            </p>
          </div>

          {/* ======================================================== */}
          {/* THE G&S MONOGRAM SEAL (Muted Maroon & Antique Gold)       */}
          {/* ======================================================== */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer touch-manipulation group"
            animate={
              stage !== 'sealed'
                ? { scale: [1, 1.15, 0], opacity: [1, 0.9, 0], rotate: 10 }
                : { scale: [1, 1.025, 1] }
            }
            transition={
              stage !== 'sealed'
                ? { duration: 0.5, ease: 'easeOut' }
                : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
            }
            onClick={handleBreakSeal}
          >
            {/* Handcrafted Wax Seal in Muted Maroon (#874B50) */}
            <div className="relative w-20 h-20 sm:w-[88px] sm:h-[88px] md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#9E5D63] via-[#874B50] to-[#6A383D] p-2 flex items-center justify-center shadow-[0_8px_24px_rgba(135,75,80,0.3),0_0_12px_rgba(190,164,119,0.35)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95 border-2 border-[#BEA477]/80">
              {/* Inner Hand-Pressed Beveled Rings */}
              <div className="absolute inset-1 rounded-full border border-[#BEA477]/35 pointer-events-none" />
              <div className="absolute inset-2 sm:inset-2.5 rounded-full border border-dashed border-[#BEA477]/45 pointer-events-none" />

              <div className="flex flex-col items-center justify-center text-center select-none">
                <span className="text-[#FFF9EF] text-base sm:text-lg font-serif italic font-bold tracking-widest drop-shadow-sm">
                  G &amp; S
                </span>
                <span className="text-[#EFE5D5] text-[7px] sm:text-[8px] uppercase tracking-[0.25em] font-sans font-bold mt-0.5">
                  14 • XI • 26
                </span>
              </div>

              {/* Gentle artisan wax sheen */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/12 to-transparent pointer-events-none" />
            </div>

            {/* Tap Hint Badge - Soft, Traditional & Non-Intrusive */}
            {stage === 'sealed' && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FFFCF6]/95 px-3 py-1 rounded-full border border-[#BEA477]/50 shadow-sm group-hover:bg-[#FFFDF9] transition-colors"
              >
                <span className="font-serif text-[10px] sm:text-[11px] text-[#874B50] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#BEA477]" />
                  Tap seal to open
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* ======================================================== */}
          {/* THE ROYAL REVELATION: Shubhalekha Card Sliding Upward     */}
          {/* ======================================================== */}
          <AnimatePresence>
            {(stage === 'revealing' || stage === 'exiting') && (
              <motion.div
                initial={{ y: 25, opacity: 0, scale: 0.96 }}
                animate={{ y: -135, opacity: 1, scale: 1.02 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-3 sm:inset-x-6 top-8 min-h-[240px] sm:min-h-[270px] bg-gradient-to-b from-[#FFFDF9] via-[#FFFCF6] to-[#FAF5EC] rounded-2xl shadow-[0_20px_45px_-10px_rgba(87,70,61,0.22)] border-2 border-[#BEA477] p-5 sm:p-7 z-20 flex flex-col items-center justify-center text-center overflow-hidden"
              >
                {/* Traditional Card Corner Accents */}
                <div className="absolute top-2 left-2">
                  <TraditionalFloralCorner position="top-left" />
                </div>
                <div className="absolute top-2 right-2">
                  <TraditionalFloralCorner position="top-right" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <TraditionalFloralCorner position="bottom-left" />
                </div>
                <div className="absolute bottom-2 right-2">
                  <TraditionalFloralCorner position="bottom-right" />
                </div>

                {/* Auspicious Kalasam Motifs */}
                <div className="mb-1">
                  <SubtleKalasamIcon className="w-7 h-7 text-[#BEA477]" />
                </div>

                <span className="font-telugu text-xs sm:text-[13px] text-[#874B50] font-bold tracking-wide block">
                  శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు
                </span>
                
                <h3 className="font-serif text-lg sm:text-2xl text-[#57463D] font-bold mt-1">
                  Boni's Wedding Invitation
                </h3>

                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#BEA477] to-transparent my-2" />

                {/* The Couple Names - Crown Focus */}
                <span className="font-script text-2xl sm:text-3xl md:text-[34px] text-[#874B50] block leading-tight font-normal">
                  Gowtham &amp; Sai Sunanda Devi
                </span>
                <span className="font-telugu text-xs sm:text-sm text-[#874B50] font-bold block mt-0.5">
                  చి॥ గౌతమ్ మరియు చి॥ల॥సౌ॥ సాయి సునంద దేవి
                </span>

                <span className="font-sans text-[10px] sm:text-[11px] text-[#7A665A] font-semibold mt-2 uppercase tracking-wider">
                  Saturday, 14th November 2026 • Visakhapatnam
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ======================================================== */}
        {/* Quick Direct Link (Warm, Elegant & Understated)          */}
        {/* ======================================================== */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center">
          <button
            onClick={onOpenComplete}
            className="text-[#7A665A] hover:text-[#57463D] font-sans text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline py-2 font-medium"
          >
            Direct Access to Wedding Details
            <ArrowRight className="w-3.5 h-3.5 text-[#BEA477]" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Envelope;
