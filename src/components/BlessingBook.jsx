import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, Sparkles, MessageCircle } from 'lucide-react';
import { GoldFiligreeDivider, CornerFlourish } from './DecorativeMotifs';

export const BlessingBook = () => {
  const [wishes, setWishes] = useState([
    {
      name: "Srikanth & Swathi",
      relation: "Cousins • Visakhapatnam",
      text: "Heartfelt congratulations to our dearest brother Gowtham! Sunanda Vadina, a warm and loving welcome to the Boni family. Looking forward to celebrating on Nov 14th at BHEL Mandapam!",
      date: "Nov 2, 2026",
    },
    {
      name: "Subba Rao & Padmavathi Garu",
      relation: "Family Friends • Rajahmundry",
      text: "May Lord Venkateswara Swamy and Goddess Padmavathi shower divine blessings upon Gowtham & Sai Sunanda Devi. Wishing both families immense happiness on this sacred union.",
      date: "Oct 29, 2026",
    },
    {
      name: "Ramesh & Haritha Boni",
      relation: "Uncle & Aunt • Hyderabad",
      text: "Kondala Rao Annaya and Kondamma Vadina, congratulations on Gowtham's wedding! Looking forward to the grand feast and Sumuhurtham in Karkataka Lagnam.",
      date: "Oct 25, 2026",
    },
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newText, setNewText] = useState('');
  const [hasPosted, setHasPosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newWish = {
      name: newAuthor.trim(),
      relation: newCity.trim() ? `Guest • ${newCity.trim()}` : "Near & Dear",
      text: newText.trim(),
      date: "Just now",
    };

    setWishes([newWish, ...wishes]);
    setNewAuthor('');
    setNewCity('');
    setNewText('');
    setHasPosted(true);
    setTimeout(() => setHasPosted(false), 4000);
  };

  return (
    <section className="py-16 sm:py-24 px-3 sm:px-6 relative paper-texture">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-super-luxury text-gold font-medium block">
            With Best Compliments from Near &amp; Dear
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-espresso mt-1.5 sm:mt-2 font-normal">
            The Kalyana Blessing Wall
          </h2>
          <span className="font-telugu text-gold-dark text-xs sm:text-base font-normal block mt-1">
            బంధుమిత్రుల శుభాకాంక్షలు &amp; ఆశీస్సులు
          </span>
          <p className="font-serif italic text-xs sm:text-base md:text-lg text-espresso-light/80 mt-2 sm:mt-3 max-w-xl mx-auto px-2">
            "Your affectionate blessings and presence are the greatest treasures as Gowtham &amp; Sai Sunanda Devi begin their sacred life together."
          </p>
          <GoldFiligreeDivider className="mt-4 sm:mt-6" variant="lotus" />
        </div>

        {/* 2 Column: Add Wish on Left, Feed on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Post a Blessing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-ivory rounded-3xl p-5 sm:p-7 md:p-8 border border-gold/30 shadow-royal relative"
          >
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-gold/40 w-5 h-5 sm:w-6 sm:h-6">
              <CornerFlourish position="top-right" />
            </div>

            <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-gold-dark font-semibold block mb-1">
              Inscribe Your Blessing
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-espresso mb-3 sm:mb-4 font-normal">
              Send Warm Wishes
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Prasad &amp; Family"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-gold text-xs min-h-[42px]"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1">
                  City / Relation
                </label>
                <input
                  type="text"
                  placeholder="e.g. Visakhapatnam / Rajahmundry"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-gold text-xs min-h-[42px]"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1">
                  Your Blessing for the Couple *
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="May Lord Venkateswara bless Gowtham &amp; Sunanda with..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-gold text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gold hover:bg-gold-dark text-ivory font-serif text-xs tracking-widest uppercase shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Publish Blessing</span>
              </button>

              {hasPosted && (
                <p className="text-center font-serif italic text-xs text-emerald-700 animate-fade-in">
                  Thank you! Your blessing has been lovingly recorded.
                </p>
              )}
            </form>
          </motion.div>

          {/* Blessings Feed */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {wishes.map((wish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-ivory/95 rounded-2xl p-4 sm:p-6 border border-gold/25 shadow-sm hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg text-espresso font-medium">
                      {wish.name}
                    </h4>
                    <span className="font-sans text-[10px] text-gold-dark tracking-wider">
                      {wish.relation}
                    </span>
                  </div>
                  <span className="font-sans text-[10px] text-espresso-soft/60">
                    {wish.date}
                  </span>
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-espresso-light leading-relaxed mt-1 sm:mt-2">
                  "{wish.text}"
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
