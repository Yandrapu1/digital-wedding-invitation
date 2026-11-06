import React, { useState } from 'react';
import { Heart, Copy, Check, MessageSquare, RefreshCw } from 'lucide-react';
import { RoyalMonogram, GoldFiligreeDivider, CornerFlourish } from './DecorativeMotifs';

export const Footer = ({ onReplayEnvelope }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const shareText = encodeURIComponent(
    "You are cordially invited to Boni's Wedding: Chi. Gowtham with Chi. La. Sow. Sai Sunanda Devi on Saturday, 14th November 2026 at BHEL Kalyana Mandapam (BHPV), Gajuwaka, Visakhapatnam! View the digital invitation here: " + window.location.href
  );

  return (
    <footer className="relative pt-14 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F0] via-[#F4ECE1] to-[#EAE0D0] text-[#30251F] border-t-2 border-gold/40 overflow-hidden">
      <div className="max-w-5xl xl:max-w-6xl mx-auto relative z-10">
        
        {/* Side-by-Side 2-Column Grid on Desktop & Tablet (md+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Monogram, Headline, Couple & Hashtags     */}
          {/* ======================================================== */}
          <div className="flex flex-col items-center text-center w-full max-w-lg mx-auto">
            
            {/* Royal Monogram Medallion */}
            <div className="mb-3 sm:mb-4">
              <div className="p-2 rounded-full bg-white border-2 border-gold shadow-md inline-block">
                <RoyalMonogram initials="G & S" className="w-16 h-16 sm:w-20 sm:h-20 text-[#8B1E2B]" />
              </div>
            </div>

            {/* Sacred Invocations */}
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold block mb-1">
              శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#241A15] font-bold leading-tight">
              Boni's Wedding Invitation
            </h2>
            <span className="font-telugu text-[#8B1E2B] text-sm sm:text-base font-bold block mt-0.5">
              బోని వారి వివాహ మహోత్సవ ఆహ్వాన శుభ పత్రిక
            </span>
            
            <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#605047] leading-relaxed max-w-md mx-auto mt-2.5 sm:mt-3 px-2 font-medium">
              "We solicit your gracious presence with family &amp; friends to bless the young couple on the auspicious occasion of the marriage of our elder son."
            </p>

            {/* Couple Signature in Maroon Script */}
            <div className="font-script text-3xl sm:text-5xl text-[#8B1E2B] my-3 sm:my-4 drop-shadow-sm">
              Gowtham &amp; Sai Sunanda Devi
            </div>

            {/* Wedding Hashtags */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-serif italic text-[#8B1E2B] mt-1 font-bold">
              <span>#GowthamWedsSunanda</span>
              <span className="text-gold">•</span>
              <span>#BoniFamilyWedding2026</span>
              <span className="text-gold">•</span>
              <span>#VizagKalyanam</span>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Formal Family Shubhalekha Card & Actions */}
          {/* ======================================================== */}
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            
            <div className="relative bg-white/95 rounded-3xl p-5 sm:p-7 md:p-8 border-2 border-gold/60 w-full max-w-lg shadow-xl text-center overflow-hidden">
              {/* Corner Flourishes */}
              <div className="absolute top-2.5 left-2.5 text-gold w-5 h-5 pointer-events-none">
                <CornerFlourish position="top-left" />
              </div>
              <div className="absolute top-2.5 right-2.5 text-gold w-5 h-5 pointer-events-none">
                <CornerFlourish position="top-right" />
              </div>
              <div className="absolute bottom-2.5 left-2.5 text-gold w-5 h-5 pointer-events-none">
                <CornerFlourish position="bottom-left" />
              </div>
              <div className="absolute bottom-2.5 right-2.5 text-gold w-5 h-5 pointer-events-none">
                <CornerFlourish position="bottom-right" />
              </div>

              {/* Header */}
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold block mb-1">
                INVITED BY / ఆగమనాభిలాషులు
              </span>
              
              <h3 className="font-serif text-lg sm:text-2xl text-[#241A15] font-bold mt-1">
                Sri Boni Kondala Rao - Smt. Kondamma
              </h3>
              <span className="font-telugu text-xs sm:text-sm text-[#8B1E2B] font-bold block mt-0.5">
                శ్రీ బోని కొండలరావు - శ్రీమతి కొండమ్మ దంపతులు
              </span>

              <div className="w-20 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-3" />

              {/* Family Compliments */}
              <p className="font-telugu text-xs sm:text-[13px] text-[#605047] leading-relaxed font-semibold px-2">
                తాతయ్యలు, నానమ్మలు, అమ్మమ్మలు, పెద్దనాన్నలు, పెద్దమ్మలు, మామయ్యలు, అత్తయ్యలు, బాబాయిలు, పిన్నిలు, అక్కలు, బావలు, అన్నయ్యలు, వదినలు, చెల్లెళ్లు, తమ్ముళ్ళు మరియు బంధుమిత్రుల అభినందనలతో.
              </p>
              
              <p className="font-serif italic text-xs sm:text-sm text-[#8B1E2B] mt-3 font-bold">
                With best compliments from: Near &amp; Dear
              </p>

              {/* Share & Action Buttons inside the card */}
              <div className="mt-5 pt-4 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full">
                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-ivory text-xs font-serif font-bold tracking-wider shadow-md transition-all whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>Share on WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#8B1E2B] hover:bg-[#751622] text-ivory text-xs font-serif font-bold tracking-wider shadow-md transition-all border border-gold/40 whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gold-light" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                {onReplayEnvelope && (
                  <button
                    onClick={onReplayEnvelope}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-[#FAF7F0] border-2 border-gold/60 text-[#241A15] hover:text-[#8B1E2B] text-xs font-serif font-bold tracking-wider shadow-sm transition-all whitespace-nowrap"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-[#8B1E2B]" />
                    <span>Reopen</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Full-Width Footer Bar */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-gold/30 text-[11px] font-sans text-[#605047] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Saturday, 14th November 2026 • Visakhapatnam</span>
          <span className="flex items-center gap-1 font-serif italic text-[#8B1E2B] font-bold">
            Designed with <Heart className="w-3.5 h-3.5 text-[#8B1E2B] fill-current" /> for Gowtham &amp; Sai Sunanda Devi
          </span>
        </div>

      </div>
    </footer>
  );
};
