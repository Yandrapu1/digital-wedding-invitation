import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { RoyalMonogram, GoldFiligreeDivider, CornerFlourish, RoyalMandalaWatermark, BalajiIcon, KalyanaMandapamIcon, KalyanaToranamMotif } from './DecorativeMotifs';
import { SectionFlankOrnaments } from './WeddingSideOrnaments';

export const Hero = () => {
  // Local couple photo path: public/images/couple.jpg
  // Place your image at: wedding-invitation/public/images/couple.jpg
  const [imgSrc, setImgSrc] = useState('/images/couple.jpg');

  const handleImageError = () => {
    // Beautiful royal Indian wedding portrait fallback if local photo is not yet placed
    setImgSrc('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80');
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-10 px-3 sm:px-6 overflow-hidden bg-[#FAF7F0]">
      {/* Background Decorative Watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <RoyalMandalaWatermark className="w-[340px] sm:w-[600px] md:w-[900px] h-[340px] sm:h-[600px] md:h-[900px] opacity-[0.05] animate-spin-slow text-[#8B1E2B]" />
      </div>

      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-champagne-light/60 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      {/* Traditional Auspicious Wedding Flank Ornaments (Elephant & Peacock on wide screens) */}
      <SectionFlankOrnaments variant="hero" />

      {/* 50 / 50 Royal Folio Invitation Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[96%] sm:w-[94%] md:w-[92%] lg:w-full max-w-5xl xl:max-w-6xl mx-auto my-auto py-5 sm:py-7 lg:py-8 px-4 sm:px-6 lg:px-8 shadow-royal bg-white/95 rounded-[24px] sm:rounded-[36px]"
      >
        {/* Scalloped Double Frame */}
        <div className="absolute inset-0 border-2 border-gold/70 rounded-[24px] sm:rounded-[36px] pointer-events-none" />
        <div className="absolute inset-1.5 sm:inset-2.5 border border-[#8B1E2B]/30 rounded-[20px] sm:rounded-[32px] pointer-events-none" />
        <div className="absolute inset-2.5 sm:inset-3.5 border border-dashed border-gold/40 rounded-[17px] sm:rounded-[29px] pointer-events-none" />

        {/* 4 Corner Flourishes */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[#8B1E2B] w-5 h-5 sm:w-7 sm:h-7 pointer-events-none">
          <CornerFlourish position="top-left" />
        </div>
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[#8B1E2B] w-5 h-5 sm:w-7 sm:h-7 pointer-events-none">
          <CornerFlourish position="top-right" />
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[#8B1E2B] w-5 h-5 sm:w-7 sm:h-7 pointer-events-none">
          <CornerFlourish position="bottom-left" />
        </div>
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-[#8B1E2B] w-5 h-5 sm:w-7 sm:h-7 pointer-events-none">
          <CornerFlourish position="bottom-right" />
        </div>

        {/* Vertical Center Spine Divider (Desktop 50/50 split separator) */}
        <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-x-1/2 pointer-events-none" />

        {/* 50 / 50 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10">
          
          {/* ======================================================== */}
          {/* LEFT 50%: Traditional Arched Royal Couple Portrait Frame */}
          {/* ======================================================== */}
          <div className="w-full flex flex-col items-center justify-start py-1 sm:py-2 lg:pr-4">
            
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[390px]">
              
              {/* Traditional Sacred Wedding Toranam & Purna Kumbham Header */}
              <div className="flex flex-col items-center text-center mb-2 w-full">
                {/* Sacred Mango Leaf & Marigold Toranam with Purna Kumbham & Deepams */}
                <div className="w-full max-w-[310px] sm:max-w-[340px] px-1 drop-shadow-sm">
                  <KalyanaToranamMotif className="w-full h-auto text-gold" />
                </div>

                {/* Auspicious Vedic Marriage Inscription */}
                <div className="mt-1 flex flex-col items-center">
                  <span className="font-telugu text-[11px] sm:text-xs text-[#8B1E2B] font-bold tracking-wide">
                    మాంగల్యం తంతునానేనా లోకరక్షక హేతునా
                  </span>
                  <div className="flex items-center gap-2 text-gold my-0.5">
                    <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-gold" />
                    <span className="text-gold text-[10px]">✦</span>
                    <span className="font-serif italic text-xs tracking-widest text-[#8B1E2B] font-bold uppercase">
                      Kalyana Dampathulu
                    </span>
                    <span className="text-gold text-[10px]">✦</span>
                    <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-gold" />
                  </div>
                  <span className="font-telugu text-[10px] sm:text-[11px] text-[#605047] font-semibold">
                    కళ్యాణ దాంపత్యం • నిత్య మంగళం
                  </span>
                </div>
              </div>

              {/* The Royal Jharokha / Palace Arched Photo Frame */}
              <div className="relative rounded-t-[130px] sm:rounded-t-[160px] rounded-b-2xl overflow-hidden border-2 border-gold/80 shadow-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#F5EFEB] p-2 sm:p-2.5 group">
                
                {/* Inner Dashed Gold Border */}
                <div className="relative rounded-t-[122px] sm:rounded-t-[152px] rounded-b-xl overflow-hidden border border-dashed border-gold/60 bg-[#F4ECE1]">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={imgSrc}
                      alt="Chi. Gowtham & Chi. La. Sow. Sai Sunanda Devi"
                      onError={handleImageError}
                      className="w-full h-full object-cover object-top scale-110 -translate-y-4 sm:-translate-y-6 filter contrast-[1.03] transition-transform duration-700 group-hover:scale-115 group-hover:-translate-y-4 sm:group-hover:-translate-y-6"
                    />

                    {/* Palace Warm Golden Vignette & Shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241A15]/80 via-transparent to-black/10 pointer-events-none" />

                    {/* Corner Flourishes on the image base */}
                    <div className="absolute bottom-2 left-2 text-gold w-5 h-5 pointer-events-none">
                      <CornerFlourish position="bottom-left" />
                    </div>
                    <div className="absolute bottom-2 right-2 text-gold w-5 h-5 pointer-events-none">
                      <CornerFlourish position="bottom-right" />
                    </div>

                    {/* Romantic Calligraphic Signature Overlay */}
                    <div className="absolute bottom-3 left-0 right-0 text-center px-3 z-10">
                      <span className="font-script text-2xl sm:text-3xl text-ivory drop-shadow-md block font-normal leading-tight">
                        Gowtham &amp; Sunanda 
                      </span>
                      <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-gold-light font-semibold block mt-0.5 drop-shadow">
                        14th November 2026 
                      </span>
                    </div>
                  </div>

                </div>

                {/* Blessing Inscription Underneath Portrait */}
                <div className="pt-2 pb-1 text-center">
                  <span className="font-telugu text-xs text-[#8B1E2B] font-bold block">
                    చి॥ గౌతమ్ &amp; చి॥ల॥సౌ॥ సాయి సునంద దేవి
                  </span>
                  <span className="font-serif italic text-[11px] text-[#605047] block mt-0.5 font-medium">
                    "Two souls bound by sacred Vedic rites &amp; eternal love"
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT 50%: The Royal Wedding Invitation Shubhapatrika   */}
          {/* ======================================================== */}
          <div className="w-full flex flex-col items-center text-center py-2 sm:py-3 lg:pl-4">
            
            {/* Top Sacred Auspicious Invocations */}
            <div className="w-full max-w-md mx-auto flex items-start justify-between px-1 sm:px-2 mb-1 sm:mb-2">
              {/* Left Column: Srirasthu & Balaji */}
              <div className="flex flex-col items-center text-center flex-1">
                <span className="font-serif italic text-xs sm:text-sm font-bold text-[#8B1E2B] tracking-wide leading-tight">
                  Srirasthu
                </span>
                <span className="font-telugu text-[10px] sm:text-xs text-[#8B1E2B] font-bold leading-tight">
                  శ్రీరస్తు
                </span>
                <BalajiIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#8B1E2B] mt-1" />
              </div>

              {/* Center Column: Shubhamasthu & Royal Wedding Logo */}
              <div className="flex flex-col items-center text-center flex-1 px-1">
                <span className="font-serif italic text-xs sm:text-sm font-bold text-[#8B1E2B] tracking-wide leading-tight">
                  Shubhamasthu
                </span>
                <span className="font-telugu text-[10px] sm:text-xs text-[#8B1E2B] font-bold leading-tight">
                  శుభమస్తు
                </span>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gold shadow-md mt-1 bg-[#FAF7F0] flex items-center justify-center group hover:scale-105 transition-transform">
                  <img
                    src="/images/wedding-logo.jpg"
                    alt="Sunanda & Gowtham Wedding Logo"
                    className="w-full h-full object-cover object-[center_40%] scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Avighnamasthu & Kalyana Mandapam */}
              <div className="flex flex-col items-center text-center flex-1">
                <span className="font-serif italic text-xs sm:text-sm font-bold text-[#8B1E2B] tracking-wide leading-tight">
                  Avighnamasthu
                </span>
                <span className="font-telugu text-[10px] sm:text-xs text-[#8B1E2B] font-bold leading-tight">
                  అవిఘ్నమస్తు
                </span>
                <KalyanaMandapamIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#8B1E2B] mt-1" />
              </div>
            </div>

            {/* Small Elegant Heading */}
            <div className="text-center mt-0.5 sm:mt-1">
              <h2 className="font-serif italic text-[#8B1E2B] text-lg sm:text-xl md:text-2xl tracking-wider font-bold leading-tight">
                Boni's Wedding Invitation
              </h2>
              <span className="font-telugu text-[#8B1E2B] text-[11px] sm:text-xs tracking-wide block font-bold leading-tight mt-0.5">
                బోని వారి వివాహ మహోత్సవ ఆహ్వాన శుభ పత్రిక
              </span>
            </div>

            <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-[#4A3C34] font-semibold mt-1 max-w-sm mx-auto px-2 leading-relaxed">
              We solicit your gracious presence with family &amp; friends on the auspicious occasion of the marriage of our elder son
            </p>

            {/* Grand Couple Names - Prominent in Cormorant Serif */}
            <div className="flex flex-col items-center justify-center my-1.5 sm:my-2 w-full">
              {/* Groom */}
              <div className="text-center w-full">
                <span className="font-telugu text-[11px] sm:text-xs text-[#8B1E2B] block font-bold leading-tight">చి॥</span>
                <h1 className="font-serif text-1xl sm:text-4xl lg:text-[44px] text-[#241A15] tracking-tight leading-[1.08] font-bold break-words px-2 drop-shadow-sm">
                  Gowtham
                </h1>
                <span className="font-telugu text-sm sm:text-base text-[#8B1E2B] font-bold mt-0.5 block leading-tight">గౌతమ్</span>
              </div>

              {/* With connector */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-4 my-1">
                <span className="h-[1.5px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#8B1E2B] to-[#8B1E2B]" />
                <span className="font-script text-xl sm:text-2xl text-[#8B1E2B] font-normal px-1 italic">
                  with
                </span>
                <span className="h-[1.5px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#8B1E2B] to-[#8B1E2B]" />
              </div>

              {/* Bride */}
              <div className="text-center w-full">
                <span className="font-telugu text-[11px] sm:text-xs text-[#8B1E2B] block font-bold leading-tight">చి॥ల॥సౌ॥</span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#241A15] tracking-tight leading-[1.08] font-bold break-words px-2 drop-shadow-sm">
                  Sai Sunanda Devi
                </h1>
                <span className="font-telugu text-sm sm:text-base text-[#8B1E2B] font-bold mt-0.5 block leading-tight">సాయి సునంద దేవి</span>
              </div>
            </div>

            {/* Bride Lineage Mention */}
            <div className="text-center mt-0.5">
              <p className="font-serif italic text-[11px] sm:text-xs text-[#4A3C34] max-w-sm mx-auto px-2 font-medium leading-tight">
                (D/o. Sri Elipe Suryanarayana - Smt. Kumari, R/o. Rajahmundry)
              </p>
              <p className="font-telugu text-[10px] sm:text-[11px] text-[#8B1E2B] mt-0.5 px-2 font-semibold leading-tight">
                (శ్రీ ఎలిపే సూర్యనారాయణ - శ్రీమతి కుమారి దంపతుల సుపుత్రిక, రాజమండ్రి)
              </p>
            </div>

            {/* Subtle Divider */}
            <GoldFiligreeDivider className="my-1.5 max-w-[180px]" variant="lotus" />

            {/* Muhurtham Information */}
            <div className="w-full max-w-sm mx-auto text-center my-1">
              <div className="flex items-center justify-center gap-1.5 leading-tight">
                <span className="font-serif italic text-[#8B1E2B] text-sm sm:text-base md:text-lg font-bold tracking-wide">
                  Sumuhurtham
                </span>
                <span className="text-gold text-xs">•</span>
                <span className="font-telugu text-[#8B1E2B] text-xs sm:text-sm font-bold">
                  శుభ సుముహూర్తం
                </span>
              </div>

              <p className="font-serif text-xs sm:text-sm text-[#241A15] font-bold mt-0.5 leading-snug">
                On Saturday, 14th November 2026 at 10:12 p.m.
              </p>
              <p className="font-serif italic text-[11px] sm:text-xs text-[#8B1E2B] font-bold leading-tight">
                "Karkataka Lagnam"
              </p>
              <p className="font-telugu text-[10px] sm:text-[11px] text-[#605047] font-medium leading-tight mt-0.5">
                ఉత్తరాషాఢ నక్షత్రయుక్త కర్కాటక లగ్న పుష్కరాంశ శుభ సుముహూర్తమున
              </p>
            </div>

            <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-1" />

            {/* Venue & Reception in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-4 text-center sm:text-left px-2 w-full max-w-md mx-auto">
              <div className="sm:text-left">
                <span className="font-serif italic text-[#8B1E2B] text-xs sm:text-sm font-bold block leading-tight">
                  Venue <span className="font-telugu text-[10px] font-normal">(కళ్యాణ వేదిక)</span>
                </span>
                <p className="font-serif text-xs text-[#241A15] font-bold mt-0.5 leading-snug">
                  BHEL Kalyana Mandapam (BHPV)
                </p>
                <p className="font-sans text-[10px] text-[#605047] font-medium leading-tight">
                  Gajuwaka, Visakhapatnam.
                </p>
              </div>

              <div className="sm:text-right">
                <span className="font-serif italic text-[#8B1E2B] text-xs sm:text-sm font-bold block leading-tight">
                  Reception &amp; Dinner <span className="font-telugu text-[10px] font-normal">(విందు)</span>
                </span>
                <p className="font-serif text-xs text-[#241A15] font-bold mt-0.5 leading-snug">
                  7:00 p.m. onwards..
                </p>
                <p className="font-sans text-[10px] text-[#605047] font-medium leading-tight">
                  Kalyana Vedika • Visakhapatnam
                </p>
              </div>
            </div>

            {/* Family Details */}
            <div className="mt-2 pt-1.5 border-t border-gold/30 text-center w-full max-w-md mx-auto">
              <span className="font-serif italic text-[10px] text-[#605047] block leading-tight">
                Invited by / ఆగమనాభిలాషులు:
              </span>
              <span className="font-serif text-xs sm:text-sm text-[#8B1E2B] font-bold block mt-0.5 leading-tight">
                Sri Boni Kondala Rao - Smt. Kondamma
              </span>
              <span className="font-telugu text-[10px] text-[#8B1E2B] font-bold block leading-tight">
                శ్రీ బోని కొండలరావు - శ్రీమతి కొండమ్మ దంపతులు
              </span>
              <span className="font-serif italic text-[10px] text-[#605047] block mt-0.5 leading-tight">
                With best compliments from: Near &amp; Dear
              </span>
            </div>

  

          </div>

        </div>
      </motion.div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex flex-col items-center text-center mt-2 sm:mt-3 z-10"
      >
        <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8B1E2B] font-bold mb-0.5">
          Scroll to view family blessings &amp; itinerary
        </span>
        <a
          href="#blessings"
          aria-label="Scroll to blessings"
          className="text-[#8B1E2B] hover:text-gold transition-colors animate-bounce p-0.5"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};
