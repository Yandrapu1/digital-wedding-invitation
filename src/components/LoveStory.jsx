import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { GoldFiligreeDivider, CornerFlourish } from './DecorativeMotifs';
import { SectionFlankOrnaments } from './WeddingSideOrnaments';

export const LoveStory = () => {
  const chapters = [
    {
      year: "1 July 2026",
      chapter: "Chapter I",
      roman: "I",
      telugu: "ప్రథమ దర్శనం: పెళ్లి చూపులు",
      title: "Serendipity by the Godavari Ghats",
      description:
        "A sacred beginning in the cultural capital of Rajahmundry. What started as an auspicious family introduction amidst temple bells and fragrant jasmine blossomed into conversations that felt as timeless as the holy river Godavari.",
      quote: "Two kindred souls, brought together by divine destiny and the blessings of elders.",
      tag: "The First Glimpse",
    },
    {
      year: " 22 August 2026",
      chapter: "Chapter II",
      roman: "II",
      telugu: "పరిణయ తీరం",
      title: "Shared Horizons along the Vizag Coast",
      description:
        "From tranquil sunset walks at Rushikonda Beach to quiet viewings of the starlit Bay of Bengal from Kailasagiri, Gowtham and Sunanda discovered a shared rhythm of dreams, mutual reverence, and deep laughter.",
      quote: "In the gentle breeze of the City of Destiny, two paths irrevocably intertwined.",
      tag: "Growing Closer",
    },
    {
      year: "4 September 2026",
      chapter: "Chapter III",
      roman: "III",
      telugu: "శుభ నిశ్చితార్థం",
      title: "The Auspicious Nishchitartham",
      description:
        "Surrounded by grandparents, parents, aunts, uncles, and siblings, the traditional engagement rituals solemnized the promise of marriage with the sacred exchange of tamboolam and golden rings.",
      quote: "With the unconditional love of our near and dear, forever found its foundation.",
      tag: "The Sacred Promise",
    },
    {
      year: "November 14 2026",
      chapter: "Chapter IV",
      roman: "IV",
      telugu: "కళ్యాణ మహోత్సవం",
      title: "The Sumuhurtham at Karkataka Lagnam",
      description:
        "At 10:12 p.m. under the auspicious Uttarashadha Nakshatra, before the sacred homa fire and the presence of family and friends, Gowtham and Sai Sunanda Devi place Jeelakarra-Bellam and tie the sacred Mangalsutra.",
      quote: "A sacred union sanctified by the heavens and blessed by every generation.",
      tag: "Sacred Union",
    },
  ];

  return (
    <section id="story" className="py-16 sm:py-24 px-3 sm:px-6 relative bg-[#FAF7F0] overflow-hidden">
      {/* Traditional Auspicious Wedding Flank Ornaments (Bridal Doli & Royal Gajam) */}
      <SectionFlankOrnaments variant="story" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header with Bold Contrast */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold block mb-1">
            Our Journey of Love &amp; Destiny
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#241A15] font-bold">
            Gowtham &amp; Sai Sunanda Devi
          </h2>
          <span className="font-telugu text-[#8B1E2B] text-base sm:text-lg font-bold block mt-1">
            చి॥ గౌతమ్ మరియు చి॥ల॥సౌ॥ సాయి సునంద దేవి
          </span>
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#605047] mt-2 sm:mt-3 max-w-xl mx-auto px-2 font-medium">
            "From the peaceful ghats of the holy Godavari to the rolling waves of Visakhapatnam, our lives unite under the divine shelter of family blessings."
          </p>
          <GoldFiligreeDivider className="mt-4 sm:mt-6" variant="lotus" />
        </div>

        {/* Editorial Couple Profiles Showcase with Individual Portraits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/95 rounded-3xl p-5 sm:p-7 md:p-8 shadow-xl border-2 border-gold/50 flex flex-col justify-between overflow-hidden group hover:border-[#8B1E2B] transition-colors"
          >
            <div className="absolute top-2.5 right-2.5 text-gold w-6 h-6">
              <CornerFlourish position="top-right" />
            </div>

            <div>
              {/* Arched Royal Portrait of Groom */}
              <div className="relative w-full max-w-[220px] sm:max-w-[250px] mx-auto mb-5">
                <div className="relative rounded-t-[100px] rounded-b-2xl overflow-hidden border-2 border-gold/70 shadow-lg bg-[#FAF7F0] p-1.5">
                  <div className="relative rounded-t-[92px] rounded-b-xl overflow-hidden border border-dashed border-gold/40 aspect-[4/5] bg-[#F5EFEB]">
                    <img
                      src="/images/groom.jpg"
                      alt="Chi. Gowtham"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80";
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-0 right-0 text-center font-script text-xl text-ivory drop-shadow-md">
                      Chi. Gowtham
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold bg-[#8B1E2B]/10 px-3 py-1 rounded-full inline-block mb-2">
                  The Groom (వరుడు)
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#241A15] font-bold mt-1">Chi. Gowtham</h3>
                <p className="font-telugu text-[#8B1E2B] text-sm sm:text-base font-bold mt-0.5">చి॥ గౌతమ్</p>
                <p className="font-sans text-xs text-[#754E44] tracking-wider mt-1 font-semibold">
                  Elder Son of Sri Boni Kondala Rao &amp; Smt. Kondamma
                </p>
                <p className="font-serif italic text-[#4A3C34] text-xs sm:text-base leading-relaxed mt-3 sm:mt-4 font-normal">
                  "Sunanda's warmth, devotion, and radiant smile bring immense grace and peace into my world. I feel truly blessed to walk this sacred journey of life with her."
                </p>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-black/10 flex flex-wrap items-center justify-between text-xs text-[#605047] gap-2 font-medium">
              <span>Hometown: Visakhapatnam</span>
              <span className="text-[#8B1E2B] font-bold">Boni Dynasty</span>
            </div>
          </motion.div>

          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/95 rounded-3xl p-5 sm:p-7 md:p-8 shadow-xl border-2 border-gold/50 flex flex-col justify-between overflow-hidden group hover:border-[#8B1E2B] transition-colors"
          >
            <div className="absolute top-2.5 right-2.5 text-gold w-6 h-6">
              <CornerFlourish position="top-right" />
            </div>

            <div>
              {/* Arched Royal Portrait of Bride */}
              <div className="relative w-full max-w-[220px] sm:max-w-[250px] mx-auto mb-5">
                <div className="relative rounded-t-[100px] rounded-b-2xl overflow-hidden border-2 border-gold/70 shadow-lg bg-[#FAF7F0] p-1.5">
                  <div className="relative rounded-t-[92px] rounded-b-xl overflow-hidden border border-dashed border-gold/40 aspect-[4/5] bg-[#F5EFEB]">
                    <img
                      src="/images/bride.jpg"
                      alt="Chi. La. Sow. Sai Sunanda Devi"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-0 right-0 text-center font-script text-xl text-ivory drop-shadow-md">
                      Sai Sunanda Devi
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold bg-[#8B1E2B]/10 px-3 py-1 rounded-full inline-block mb-2">
                  The Bride (వధువు)
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#241A15] font-bold mt-1">Chi. La. Sow. Sai Sunanda Devi</h3>
                <p className="font-telugu text-[#8B1E2B] text-sm sm:text-base font-bold mt-0.5">చి॥ల॥సౌ॥ సాయి సునంద దేవి</p>
                <p className="font-sans text-xs text-[#754E44] tracking-wider mt-1 font-semibold">
                  Daughter of Sri Elipe Suryanarayana &amp; Smt. Kumari
                </p>
                <p className="font-serif italic text-[#4A3C34] text-xs sm:text-base leading-relaxed mt-3 sm:mt-4 font-normal">
                  "Gowtham's kindness, respect for family, and steadfast nature inspire me every day. In his companionship, every moment feels auspicious and secure."
                </p>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-black/10 flex flex-wrap items-center justify-between text-xs text-[#605047] gap-2 font-medium">
              <span>Hometown: Rajahmundry</span>
              <span className="text-[#8B1E2B] font-bold">Elipe Dynasty</span>
            </div>
          </motion.div>

        </div>

        {/* ==================================================================== */}
        {/* Creative "Golden Sacred Vine of Destiny" Timeline Track              */}
        {/* ==================================================================== */}
        <div className="relative ml-3 sm:ml-8 md:ml-16 pl-6 sm:pl-9 pr-1 sm:pr-3 space-y-10 sm:space-y-14 mb-16 sm:mb-24">
          
          {/* Creative Golden Vine Vertical Spine */}
          <div className="absolute left-0 top-3 bottom-4 w-[3px] pointer-events-none">
            {/* Luminous Gold & Deep Maroon Gradient Core */}
            <div className="w-full h-full bg-gradient-to-b from-[#8B1E2B] via-gold to-[#8B1E2B] rounded-full shadow-sm" />
            
            {/* Parallel Delicate Dashed Gold Filigree Track */}
            <div className="absolute top-1 bottom-1 -left-[3px] w-[9px] border-l border-dashed border-gold/60" />

            {/* Glowing Golden Beads / Pearls at key intervals */}
            <div className="absolute top-[12%] -left-[3.5px] w-2.5 h-2.5 rounded-full bg-gold border border-[#8B1E2B] shadow-sm animate-pulse" />
            <div className="absolute top-[38%] -left-[3.5px] w-2.5 h-2.5 rounded-full bg-gold border border-[#8B1E2B] shadow-sm" />
            <div className="absolute top-[64%] -left-[3.5px] w-2.5 h-2.5 rounded-full bg-gold border border-[#8B1E2B] shadow-sm" />
            <div className="absolute top-[88%] -left-[3.5px] w-2.5 h-2.5 rounded-full bg-gold border border-[#8B1E2B] shadow-sm animate-pulse" />

            {/* Top Finial - Sacred Golden Kalasam / Auspicious Star */}
            <div className="absolute -top-7 -left-[14.5px] flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFFDF9] to-[#FAF3E8] border-2 border-gold shadow-md flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gold fill-gold/30" />
              </div>
              <span className="w-[1.5px] h-2 bg-gradient-to-b from-gold to-[#8B1E2B]" />
            </div>

            {/* Bottom Finial - Sacred Golden Lotus Knot */}
            <div className="absolute -bottom-8 -left-[14.5px] flex flex-col items-center">
              <span className="w-[1.5px] h-2 bg-gradient-to-b from-[#8B1E2B] to-gold" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFFDF9] to-[#FAF3E8] border-2 border-gold shadow-md flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#8B1E2B] fill-[#8B1E2B]/20" />
              </div>
            </div>
          </div>

          {chapters.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="relative group w-full"
            >
              {/* Creative Royal Temple Wax Seal / Medallion Node */}
              <div className="absolute -left-[37px] sm:-left-[49px] top-4 z-20">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#8B1E2B] via-[#A32333] to-[#5C101A] border-2 border-gold shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-gold-glow">
                  {/* Outer 8-point rotating dashed starburst */}
                  <div className="absolute -inset-1 rounded-full border border-dashed border-gold/60 pointer-events-none group-hover:rotate-45 transition-transform duration-700" />
                  
                  {/* Roman Numeral */}
                  <span className="font-serif italic text-xs sm:text-sm font-bold text-ivory tracking-wider select-none drop-shadow-sm">
                    {item.roman}
                  </span>
                </div>
              </div>

              {/* Delicate Horizontal Connector Branch from Node to Card */}
              <div className="hidden sm:block absolute -left-[14px] top-8 w-6 h-[1.5px] bg-gradient-to-r from-gold via-[#8B1E2B]/40 to-transparent pointer-events-none" />

              {/* Chapter Badge Row */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className="font-sans text-[10px] sm:text-xs  tracking-wider text-ivory font-bold px-2.5 sm:px-3 py-0.5 rounded-full bg-gradient-to-r from-[#8B1E2B] to-[#A32333] shadow-sm border border-gold/40">
                  {item.year}
                </span>
                <span className="font-serif italic text-xs font-bold text-[#8B1E2B]">
                  {item.chapter}
                </span>
                <span className="text-gold text-xs">•</span>
                <span className="font-telugu text-[11px] font-bold text-[#8B1E2B]">
                  {item.telugu}
                </span>
              </div>

              {/* The Story Card - Fully Responsive, Wrapped & Protected */}
              <div className="w-full max-w-full bg-white/95 border-2 border-gold/50 rounded-2xl p-4 sm:p-6 md:p-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#8B1E2B] hover:shadow-xl relative overflow-hidden group-hover:-translate-y-0.5">
                <div className="absolute top-2 right-2 text-gold/40 group-hover:text-gold transition-colors w-5 h-5 pointer-events-none">
                  <CornerFlourish position="top-right" />
                </div>

                <h4 className="font-serif text-lg sm:text-2xl md:text-3xl text-[#241A15] font-bold mb-2 break-words leading-snug">
                  {item.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#4A3C34] leading-relaxed mb-3 break-words">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-gold/20 flex items-start gap-2 text-[#8B1E2B]">
                  <Feather className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#8B1E2B]" />
                  <p className="font-serif italic text-xs sm:text-sm text-[#754E44] font-medium break-words">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================================================================== */}
        {/* The Grand "Melody of Love" Centerpiece (Placed AFTER Timeline)        */}
        {/* ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative w-full max-w-5xl mx-auto bg-white/95 rounded-[28px] sm:rounded-[36px] p-3 sm:p-5 md:p-6 border-2 border-gold/70 shadow-2xl overflow-hidden"
        >
          {/* Scalloped Inner Border & Corner Flourishes */}
          <div className="absolute inset-1.5 sm:inset-2.5 border border-[#8B1E2B]/20 rounded-[24px] sm:rounded-[32px] pointer-events-none" />
          <div className="absolute top-3 left-3 text-gold w-6 h-6 pointer-events-none">
            <CornerFlourish position="top-left" />
          </div>
          <div className="absolute top-3 right-3 text-gold w-6 h-6 pointer-events-none">
            <CornerFlourish position="top-right" />
          </div>
          <div className="absolute bottom-3 left-3 text-gold w-6 h-6 pointer-events-none">
            <CornerFlourish position="bottom-left" />
          </div>
          <div className="absolute bottom-3 right-3 text-gold w-6 h-6 pointer-events-none">
            <CornerFlourish position="bottom-right" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Auspicious Veena Inscription Header */}
            <div className="flex items-center justify-center gap-2 text-gold mb-1">
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
              <Sparkles className="w-4 h-4 text-[#8B1E2B]" />
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8B1E2B] font-bold">
                The Sacred Harmony of Hearts
              </span>
              <Sparkles className="w-4 h-4 text-[#8B1E2B]" />
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#241A15] font-bold">
              సంగీత నాదం • దాంపత్య వేదం
            </h3>
            
            <p className="font-serif italic text-xs sm:text-sm text-[#754E44] max-w-lg mx-auto mt-1 mb-4 sm:mb-5 font-medium">
              "Like strings upon a sacred Veena tuned to divine grace, two lives unite in melody, resonance, and eternal companionship."
            </p>

            {/* The Horizontal Veena Photo in Royal Frame - Full Uncut Framing */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gold/60 shadow-xl bg-[#FAF5EE] group">
              <div className="relative w-full">
                <img
                  src="/images/veena.jpg"
                  alt="Chi. Gowtham & Chi. La. Sow. Sai Sunanda Devi with Sacred Veena"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80";
                  }}
                  className="w-full h-auto block filter contrast-[1.02]"
                />

                {/* Soft Vignette Overlay at bottom for caption legibility */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#241A15]/85 via-[#241A15]/40 to-transparent pointer-events-none" />

                {/* Overlay Caption on Photo */}
                <div className="absolute bottom-2.5 sm:bottom-4 left-0 right-0 text-center px-3 z-10">
                  <span className="font-script text-2xl sm:text-3xl md:text-4xl text-ivory drop-shadow-lg block font-normal leading-tight">
                    Gowtham &amp; Sunanda 
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-gold-light font-bold block mt-0.5 sm:mt-1 drop-shadow">
                    నాద బ్రహ్మ స్వరూపం 
                  </span>
                </div>
              </div>
            </div>

            {/* Cultural Footnote */}
            <div className="mt-3.5 sm:mt-4 text-center">
              <span className="font-telugu text-xs sm:text-sm text-[#8B1E2B] font-bold block">
                స్వర రాగాల సంగమమే దాంపత్యం • పరమేశ్వరుని ఆశీస్సులతో నూతన ప్రయాణం
              </span>
              <span className="font-serif italic text-[11px] sm:text-xs text-[#605047] block mt-0.5">
                "Blessed by Goddess Saraswati and elders, embarking upon a lifetime of harmony and joy."
              </span>
            </div>

            <GoldFiligreeDivider className="mt-3 sm:mt-4 max-w-xs" variant="lotus" />

          </div>
        </motion.div>

      </div>
    </section>
  );
};
