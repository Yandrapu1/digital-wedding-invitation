import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import { GoldFiligreeDivider, CornerFlourish } from './DecorativeMotifs';
import { SectionFlankOrnaments } from './WeddingSideOrnaments';

export const Countdown = () => {
  // Target: November 14, 2026, 22:12:00 IST (10:12 PM Indian Standard Time - exact Sumuhurtham)
  const targetDate = new Date('2026-11-14T22:12:00+05:30').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', telugu: 'రోజులు', value: timeLeft.days },
    { label: 'Hours', telugu: 'గంటలు', value: timeLeft.hours },
    { label: 'Minutes', telugu: 'నిమిషాలు', value: timeLeft.minutes },
    { label: 'Seconds', telugu: 'సెకన్లు', value: timeLeft.seconds },
  ];

  return (
    <section className="py-10 sm:py-16 px-3 sm:px-6 relative bg-gradient-to-b from-[#FAF7F0] via-[#F5EEE4] to-[#FAF7F0] text-[#30251F] overflow-hidden">
      {/* Traditional Auspicious Wedding Flank Ornaments (Shehnai & Talambralu) */}
      <SectionFlankOrnaments variant="countdown" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/95 rounded-3xl p-5 sm:p-8 md:p-9 border-2 border-gold/70 shadow-royal text-center"
        >
          {/* Corner flourishes */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[#8B1E2B] w-5 h-5 sm:w-6 sm:h-6">
            <CornerFlourish position="top-left" />
          </div>
          <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-[#8B1E2B] w-5 h-5 sm:w-6 sm:h-6">
            <CornerFlourish position="top-right" />
          </div>
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[#8B1E2B] w-5 h-5 sm:w-6 sm:h-6">
            <CornerFlourish position="bottom-left" />
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-[#8B1E2B] w-5 h-5 sm:w-6 sm:h-6">
            <CornerFlourish position="bottom-right" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-center gap-2 text-[#8B1E2B] mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest font-bold text-[#8B1E2B]">
              The Auspicious Sumuhurtham Approaches
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold" />
          </div>

          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#241A15] font-bold mt-0.5">
            Counting Down to 10:12 PM
          </h3>
          <span className="font-telugu text-[#8B1E2B] text-xs sm:text-sm font-bold block mt-0.5">
            కర్కాటక లగ్న పుష్కరాంశ శుభ సుముహూర్తం
          </span>
          <p className="font-serif italic text-xs sm:text-sm text-[#605047] max-w-md mx-auto mt-1.5 px-2 font-medium">
            "Until Gowtham &amp; Sai Sunanda Devi unite under the sacred blessings of elders and the divine."
          </p>

          <GoldFiligreeDivider className="my-4 sm:my-5 max-w-xs" variant="simple" />

          {/* 4 Luminous Warm Ivory & Maroon Countdown Units */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-xl mx-auto my-3 sm:my-5">
            {timeUnits.map((unit, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-[#FFFDF9] to-[#F5EFEB] border-2 border-gold/60 rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm flex flex-col items-center justify-center group hover:border-[#8B1E2B] transition-colors"
              >
                <span className=" text-3xl sm:text-4xl md:text-4xl text-[#8B1E2B] font-bold tracking-tight drop-shadow-sm">
                  {String(unit.value).padStart(2, '0')}
                </span>
                
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#30251F] font-bold mt-1.5">
                  {unit.label}
                </span>
                <span className="font-telugu text-[10px] text-[#8B1E2B] font-semibold">
                  {unit.telugu}
                </span>

                <div className="absolute inset-1.5 border border-gold/20 rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>

          <p className="font-sans text-[10px] sm:text-[11px] text-[#605047] mt-3 tracking-wider px-2 font-medium">
            Saturday, 14th November 2026 • 10:12 PM IST • BHEL Kalyana Mandapam, Gajuwaka, Visakhapatnam
          </p>
        </motion.div>
      </div>
    </section>
  );
};
