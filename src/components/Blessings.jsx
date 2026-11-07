import React from 'react';
import { motion } from 'framer-motion';
import { BalajiIcon, KalyanaMandapamIcon, GoldFiligreeDivider, CornerFlourish } from './DecorativeMotifs';
import { SectionFlankOrnaments } from './WeddingSideOrnaments';
import { Sparkles, Heart } from 'lucide-react';

export const Blessings = () => {
  return (
    <section id="blessings" className="py-16 sm:py-24 px-3 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#F5EEE4] to-[#FAF7F0] text-[#30251F]">
      {/* Background Sacred Glows & Mandala */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gold/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-champagne-light/70 rounded-full blur-[100px] pointer-events-none" />

      {/* Traditional Auspicious Wedding Flank Ornaments (Shehnai Melam & Shankha Chakra) */}
      <SectionFlankOrnaments variant="blessings" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* ==================================================================== */}
        {/* Sacred Sri Sita Rama Kalyana Mandapam Sanctum (The Masterpiece WOW Section) */}
        {/* ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative w-full max-w-4xl mx-auto mb-14 sm:mb-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EA] to-[#FFFDF9] rounded-[28px] sm:rounded-[36px] border-2 border-gold/80 shadow-2xl p-4 sm:p-7 md:p-9 overflow-hidden"
        >
          {/* Inner Decorative Dashed Gold Border */}
          <div className="absolute inset-2 sm:inset-3 border border-dashed border-[#BEA477]/35 rounded-[22px] sm:rounded-[30px] pointer-events-none" />

          {/* Four Corner Flourishes in Antique Gold */}
          <div className="absolute top-3 left-3 text-[#8B1E2B] w-6 h-6 pointer-events-none">
            <CornerFlourish position="top-left" />
          </div>
          <div className="absolute top-3 right-3 text-[#8B1E2B] w-6 h-6 pointer-events-none">
            <CornerFlourish position="top-right" />
          </div>
          <div className="absolute bottom-3 left-3 text-[#8B1E2B] w-6 h-6 pointer-events-none">
            <CornerFlourish position="bottom-left" />
          </div>
          <div className="absolute bottom-3 right-3 text-[#8B1E2B] w-6 h-6 pointer-events-none">
            <CornerFlourish position="bottom-right" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Sacred Invocations Header */}
            <div className="flex items-center justify-center gap-2 text-[#8B1E2B] mb-1">
              <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#BEA477]" />
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.22em] font-bold text-[#8B1E2B]">
                శ్రీ సీతారామ వైవాహిక సన్నిధి
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#BEA477]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#241A15] font-bold tracking-wide mt-0.5">
              శ్రీ సీతారామ వైవాహిక మంగళ శ్లోకం
            </h3>

            <p className="font-serif italic text-xs sm:text-sm text-[#754E44] max-w-lg mx-auto mt-1 mb-4 sm:mb-5 font-medium">
              "Invoking the supreme celestial union of Sri Rama &amp; Ma Janaki for lifelong harmony and auspicious grace."
            </p>

            {/* Complete, Uncut, Luminous Sacred Kalamkari Artwork */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gold/70 shadow-xl bg-[#FAF5EE] group mb-5 sm:mb-7">
              {/* Subtle inner golden glow */}
              <div className="absolute inset-0 border border-gold/30 rounded-2xl sm:rounded-3xl pointer-events-none z-10" />

              <img
                src="/images/sitarama.png"
                alt="Sri Sita Rama Kalyanam Kalamkari Traditional Painting"
                className="w-full h-auto block select-none filter contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Graceful Bottom Caption Strip on Photo */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-6 pb-2 sm:pb-3 px-3">
                <span className="font-telugu text-xs sm:text-sm text-ivory font-bold drop-shadow-md block">
                  శ్రీ సీతారామ కళ్యాణ వైభోగం • పరమ పవిత్ర దాంపత్య దీవెనలు
                </span>
              </div>
            </div>

            {/* Sacred Vedic Sloka Inscription Scroll */}
            <div className="w-full max-w-3xl bg-white/95 border-2 border-gold/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 shadow-lg relative overflow-hidden">
              <div className="absolute top-2 left-2 text-gold/40 w-4 h-4 pointer-events-none">
                <CornerFlourish position="top-left" />
              </div>
              <div className="absolute top-2 right-2 text-gold/40 w-4 h-4 pointer-events-none">
                <CornerFlourish position="top-right" />
              </div>
              <div className="absolute bottom-2 left-2 text-gold/40 w-4 h-4 pointer-events-none">
                <CornerFlourish position="bottom-left" />
              </div>
              <div className="absolute bottom-2 right-2 text-gold/40 w-4 h-4 pointer-events-none">
                <CornerFlourish position="bottom-right" />
              </div>

              {/* The 4-Line Sacred Sloka */}
              <p className="font-telugu text-[#8B1E2B] text-sm sm:text-base md:text-lg leading-[2.2] sm:leading-[2.4] font-bold break-words px-1 sm:px-4 tracking-wide drop-shadow-xs">
                శ్లో॥ జానక్యాః కమలామలాంజలి పుటేయాః పద్మరాగాయితాః<br />
                న్యస్తా రాఘవ మస్తకేచ విలసత్కుంద ప్రసూనాయితాః<br />
                స్రస్తాః శ్యామల కాయకాంతి కలితాః యా ఇంద్రనీలాయితాః<br />
                ముక్తాస్తాః శుభదాభవంతు భవతాం శ్రీరామ వైవాహికాః ॥
              </p>

              <GoldFiligreeDivider className="my-3 sm:my-4 max-w-xs" variant="lotus" />

              {/* English Meaning */}
              <p className="font-serif italic text-xs sm:text-sm text-[#4A3C34] max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 font-medium">
                "May the sacred pearls showered during the divine marriage of Sri Rama and Janaki—gleaming like radiant rubies in Sita's hands, pure white jasmines upon Raghava's crown, and luminous sapphires against his dark complexion—shower eternal joy, harmony, and prosperity upon Gowtham &amp; Sai Sunanda Devi."
              </p>
            </div>

            {/* Sacred Benediction Footnote */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="font-telugu text-xs sm:text-sm text-[#8B1E2B] font-bold">
                సీతారాముల కల్యాణ వైభోగం వలె మీ దాంపత్యం కలకాలం వర్ధిల్లాలి
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold" />
            </div>

          </div>
        </motion.div>

        {/* The Formal Boni Family Shubhalekha Card (High-Contrast Ivory & Maroon) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative bg-[#FFFDF9] text-[#30251F] rounded-3xl p-5 sm:p-10 md:p-14 shadow-2xl border-2 border-gold"
        >
          {/* Deckle Edge Corner Accents */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[#8B1E2B] w-6 h-6">
            <CornerFlourish position="top-left" />
          </div>
          <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-[#8B1E2B] w-6 h-6">
            <CornerFlourish position="top-right" />
          </div>
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[#8B1E2B] w-6 h-6">
            <CornerFlourish position="bottom-left" />
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-[#8B1E2B] w-6 h-6">
            <CornerFlourish position="bottom-right" />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            
            {/* Grandparents' Sacred Blessings */}
            <div className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gold/30">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold block mb-2">
                With the Eternal Blessings of Our Beloved Grandparents
              </span>
              <p className="font-telugu text-xs sm:text-sm md:text-base text-[#30251F] font-semibold leading-relaxed px-1">
                శ్రీ బోని సింహాద్రి - శ్రీమతి బోని ఎర్రమ్మ (లేటు) (తాతయ్య - నానమ్మ) మరియు<br />
                శ్రీ బొట్టా భాస్కరరావు (లేటు) - శ్రీమతి బొట్టా రామలక్ష్మి (తాతయ్య - అమ్మమ్మ) గార్ల ఆశీస్సులతో
              </p>
              <p className="font-serif italic text-xs text-[#605047] mt-1.5 px-1 font-medium">
                Late Sri Boni Simhadri &amp; Smt. Boni Yerramma (Paternal) • Late Sri Botta Bhaskara Rao &amp; Smt. Botta Ramalakshmi (Maternal)
              </p>
            </div>

            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-super-luxury text-[#8B1E2B] font-bold block">
              The Parents Cordially Solicit Your Presence
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#241A15] mt-1 sm:mt-2 mb-1 font-bold">
              Boni Vari Vivaha Mahotsavam
            </h2>
            <span className="font-telugu text-[#8B1E2B] text-base sm:text-lg font-bold block">
              బోని వారి వివాహ మహోత్సవ ఆహ్వాన శుభ పత్రిక
            </span>

            <GoldFiligreeDivider className="my-4 sm:my-6" variant="lotus" />

            {/* Families Lineage Grid with Rich Warm Ivory Backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8 pt-2">
              
              {/* Groom's Side */}
              <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E8] border-2 border-gold/40 shadow-sm">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gold shadow-md mb-2.5 p-0.5 bg-white">
                  <img
                    src="/images/groom.jpg"
                    alt="Chi. Gowtham"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80";
                    }}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold mb-1">
                  Elder Son of (వరుడు)
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#241A15] font-bold">
                  Sri Boni Kondala Rao &amp; Smt. Kondamma
                </h4>
                <p className="font-telugu text-sm sm:text-base text-[#8B1E2B] font-semibold mt-1">
                  శ్రీ బోని కొండలరావు &amp; శ్రీమతి కొండమ్మ
                </p>
                <div className="mt-2 text-xs text-[#605047] font-sans font-medium">
                  Gajuwaka, Visakhapatnam
                </div>
              </div>

              {/* Bride's Side */}
              <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E8] border-2 border-gold/40 shadow-sm">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gold shadow-md mb-2.5 p-0.5 bg-white">
                  <img
                    src="/images/bride.jpg"
                    alt="Chi. La. Sow. Sai Sunanda Devi"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80";
                    }}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold mb-1">
                  Beloved Daughter of (వధువు)
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#241A15] font-bold">
                  Sri Elipe Suryanarayana &amp; Smt. Kumari
                </h4>
                <p className="font-telugu text-sm sm:text-base text-[#8B1E2B] font-semibold mt-1">
                  శ్రీ ఎలిపే సూర్యనారాయణ &amp; శ్రీమతి కుమారి
                </p>
                <div className="mt-2 text-xs text-[#605047] font-sans font-medium">
                  Padmavathi Nagar, Rajavolu Road, Rajahmundry
                </div>
              </div>

            </div>

            {/* Sacred Telugu Invitation Verse */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FDF9F0] via-[#FAF3E8] to-[#FDF9F0] border-2 border-gold/40 my-6 text-center shadow-sm">
              <p className="font-telugu text-xs sm:text-sm md:text-base text-[#241A15] font-semibold leading-relaxed px-1">
                "వివాహం జరిపించుటకు దైవజ్ఞులు నిశ్చయించినారు. కావున తామెల్లరు సకుటుంబ సపరివార సమేతముగా విచ్చేసి, నూతన వధూవరులను ఆశీర్వదించి, మా ఆతిథ్యము స్వీకరించి మమ్మానందింపజేయ కోరుచున్నాము."
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-[#754E44] mt-2.5 sm:mt-3 leading-relaxed px-1 font-medium">
                "We warmly solicit your gracious presence with family &amp; friends to shower your blessings upon the newly wedded couple and grace our hospitality."
              </p>
            </div>

            {/* Compliments from Near & Dear */}
            <div className="pt-6 border-t border-gold/30">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold block mb-1">
                Aagamanabhilashulu
              </span>
              <h5 className="font-serif text-lg sm:text-xl text-[#241A15] font-bold">
                Sri Boni Kondala Rao - Smt. Kondamma
              </h5>
              <p className="font-telugu text-xs sm:text-sm text-[#4A3C34] font-medium mt-1.5 leading-relaxed px-2">
                తాతయ్యలు, నానమ్మలు, అమ్మమ్మలు, పెద్దనాన్నలు, పెద్దమ్మలు, మామయ్యలు, అత్తయ్యలు, బాబాయిలు, పిన్నిలు, అక్కలు, బావలు, అన్నయ్యలు, వదినలు, చెల్లెళ్లు, తమ్ముళ్ళు మరియు బంధుమిత్రుల అభినందనలతో.
              </p>
              <div className="font-script text-3xl sm:text-4xl text-[#8B1E2B] mt-4 font-normal">
                With Best Compliments from Near &amp; Dear
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
