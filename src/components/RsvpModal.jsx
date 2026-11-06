import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, CheckCircle, Heart, Music, Utensils, Users, Sparkles, Download, Calendar, Mail, Phone, User } from 'lucide-react';
import { RoyalMonogram, GoldFiligreeDivider, CornerFlourish, KalyanaMandapamIcon } from './DecorativeMotifs';

export const RsvpModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'attending',
    guestCount: '2',
    events: ['reception', 'sumuhurtham'],
    dietary: 'Traditional Andhra Vegetarian Bhojanam',
    songRequest: '',
    message: '',
  });

  const [guestPassCode, setGuestPassCode] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('boni_wedding_rsvp');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
        setGuestPassCode(parsed.passCode || 'VIZAG-2026-GS' + Math.floor(1000 + Math.random() * 9000));
        setSubmitted(true);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleEventToggle = (eventId) => {
    setFormData((prev) => {
      const exists = prev.events.includes(eventId);
      const updated = exists
        ? prev.events.filter((id) => id !== eventId)
        : [...prev.events, eventId];
      return { ...prev, events: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passCode = 'VIZAG-2026-GS' + Math.floor(1000 + Math.random() * 9000);
    setGuestPassCode(passCode);

    const payload = { ...formData, passCode, timestamp: new Date().toISOString() };
    localStorage.setItem('boni_wedding_rsvp', JSON.stringify(payload));

    confetti({
      particleCount: window.innerWidth < 640 ? 60 : 90,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#B69A62', '#E9B642', '#8B2323', '#FAF7F0', '#E9DCC5'],
      ticks: 250,
      gravity: 0.9,
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    localStorage.removeItem('boni_wedding_rsvp');
    setSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-espresso-dark/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl max-h-[92dvh] overflow-y-auto bg-ivory rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl border border-gold/40 my-auto paper-texture"
      >
        {/* Close Button with generous touch target */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 sm:p-2.5 rounded-full bg-champagne-light/70 hover:bg-champagne border border-gold/30 text-espresso/70 hover:text-espresso transition-colors z-20 touch-manipulation"
          aria-label="Close RSVP Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-gold/40 w-5 h-5 sm:w-6 sm:h-6 pointer-events-none">
          <CornerFlourish position="top-left" />
        </div>
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-gold/40 w-5 h-5 sm:w-6 sm:h-6 pointer-events-none">
          <CornerFlourish position="top-right" />
        </div>

        {!submitted ? (
          <div>
            <div className="text-center mb-6 sm:mb-8 pt-2 sm:pt-0">
              <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-super-luxury text-gold-dark font-medium block">
                Boni's Wedding RSVP
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-espresso mt-1 font-normal">
                Join Gowtham &amp; Sunanda's Vivaham
              </h3>
              <span className="font-telugu text-gold-dark text-xs sm:text-sm block mt-0.5">
                శ్రీ బోని కొండలరావు &amp; శ్రీమతి కొండమ్మ దంపతుల ఆహ్వానం
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-espresso-light mt-1">
                Please grace us with your response by October 25, 2026.
              </p>
              <GoldFiligreeDivider className="my-3 sm:my-4 max-w-xs" variant="lotus" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              
              {/* Attendance Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                  className={`py-3 px-4 rounded-xl text-center font-serif text-xs sm:text-base tracking-wider transition-all border min-h-[44px] ${
                    formData.attendance === 'attending'
                      ? 'bg-gold text-ivory border-gold shadow-sm font-semibold'
                      : 'bg-ivory border-gold/30 text-espresso hover:bg-champagne/40'
                  }`}
                >
                  Accept with Joy &amp; Blessings
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'regret' })}
                  className={`py-3 px-4 rounded-xl text-center font-serif text-xs sm:text-base tracking-wider transition-all border min-h-[44px] ${
                    formData.attendance === 'regret'
                      ? 'bg-espresso text-ivory border-espresso shadow-sm font-semibold'
                      : 'bg-ivory border-gold/30 text-espresso hover:bg-champagne/40'
                  }`}
                >
                  Regretfully Decline
                </button>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold" />
                    Full Name(s) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Srikanth &amp; Family"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-gold text-xs sm:text-sm min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-gold" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-gold text-xs sm:text-sm min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98480 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-gold text-xs sm:text-sm min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold" />
                    Number of Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso focus:outline-none focus:border-gold text-xs sm:text-sm min-h-[44px]"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests (Couple)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests (Family)</option>
                    <option value="5+">5+ Guests (Entire Family)</option>
                  </select>
                </div>
              </div>

              {/* Event Attendance Checkboxes */}
              {formData.attendance === 'attending' && (
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    Ceremonies You Will Attend
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: 'reception', label: 'Reception & Feast (Nov 14, 7 PM)' },
                      { id: 'sumuhurtham', label: 'Sumuhurtham (Nov 14, 10:12 PM)' },
                      { id: 'pellikoduku', label: 'Pellikoduku / Haldi (Nov 13, Morning)' },
                      { id: 'talambralu', label: 'Talambralu (Nov 15, Post-Muhurtham)' },
                    ].map((evt) => (
                      <label
                        key={evt.id}
                        onClick={() => handleEventToggle(evt.id)}
                        className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border cursor-pointer text-xs transition-colors select-none min-h-[44px] ${
                          formData.events.includes(evt.id)
                            ? 'bg-champagne-light border-gold text-espresso font-medium'
                            : 'bg-ivory border-gold/25 text-espresso-soft hover:bg-champagne/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.events.includes(evt.id)}
                          onChange={() => {}}
                          className="rounded text-gold focus:ring-gold accent-gold w-4 h-4"
                        />
                        <span>{evt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Dietary Preferences */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-gold" />
                  Cuisine &amp; Dining Preference
                </label>
                <select
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso focus:outline-none focus:border-gold text-xs sm:text-sm min-h-[44px]"
                >
                  <option value="Traditional Andhra Vegetarian Bhojanam">Traditional Andhra Vegetarian Bhojanam (విందు భోజనం)</option>
                  <option value="Strict Jain Vegetarian">Strict Jain Vegetarian (No root vegetables/onion/garlic)</option>
                  <option value="Andhra Non-Vegetarian Delicacies">Andhra Non-Vegetarian Delicacies</option>
                  <option value="Kids / Mild Spices">Mild Spices (For Children / Elders)</option>
                </select>
              </div>

              {/* Message / Blessing */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-espresso font-medium mb-1 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose" />
                  Blessing for Gowtham &amp; Sai Sunanda Devi
                </label>
                <textarea
                  rows="3"
                  placeholder="Share your warm blessings and wishes for the couple..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-gold/40 text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-gold text-xs sm:text-sm resize-none"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gold hover:bg-gold-dark text-ivory font-serif text-sm sm:text-base tracking-widest uppercase shadow-royal transition-all duration-300 font-medium min-h-[48px]"
                >
                  Send RSVP to Boni Family
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation & Personalized Digital Guest Pass */
          <div className="text-center py-2 sm:py-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-champagne-light border border-gold flex items-center justify-center text-gold mx-auto mb-3 sm:mb-4">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
            </div>

            <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-gold-dark font-medium block">
              RSVP Confirmed
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-espresso mt-1 font-normal px-2">
              {formData.attendance === 'attending'
                ? 'We Look Forward to Your Gracious Presence!'
                : 'Thank You for Your Affectionate Wishes'}
            </h3>

            <p className="font-serif italic text-xs sm:text-base text-espresso-light mt-1.5 sm:mt-2 max-w-md mx-auto px-2">
              {formData.attendance === 'attending'
                ? `Dearest ${formData.name || 'Honored Guest'}, your presence at BHEL Kalyana Mandapam will bring immense happiness to the Boni & Elipe families.`
                : `Dearest ${formData.name || 'Honored Guest'}, you will be truly missed. Your affectionate blessings remain in our hearts.`}
            </p>

            {formData.attendance === 'attending' && (
              <div className="mt-5 sm:mt-8 bg-ivory rounded-2xl p-4 sm:p-6 border-2 border-gold/50 shadow-royal max-w-md mx-auto text-left relative overflow-hidden">
                <div className="absolute top-2 right-2 text-gold/40 w-5 h-5 pointer-events-none">
                  <CornerFlourish position="top-right" />
                </div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-gold/25">
                  <div>
                    <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-gold-dark font-semibold block">
                      Boni's Vivaham Guest Pass
                    </span>
                    <span className="font-serif text-base sm:text-lg text-espresso font-medium">
                      Gowtham &amp; Sai Sunanda Devi
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-espresso-soft block">
                      Pass Number
                    </span>
                    <span className="font-mono text-xs font-bold text-gold-dark">
                      {guestPassCode}
                    </span>
                  </div>
                </div>

                <div className="py-3 sm:py-4 space-y-1.5 sm:space-y-2 text-xs text-espresso-light">
                  <div className="flex justify-between">
                    <span className="text-espresso-soft">Guest Name:</span>
                    <span className="font-semibold text-espresso">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-espresso-soft">Guests Attending:</span>
                    <span className="font-medium">{formData.guestCount} Guest(s)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-espresso-soft">Cuisine:</span>
                    <span className="font-medium">{formData.dietary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-espresso-soft">Venue:</span>
                    <span className="font-medium text-gold-dark">BHEL Mandapam, Gajuwaka</span>
                  </div>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-gold/25 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] text-espresso-soft gap-1">
                  <span>Saturday, 14th Nov 2026</span>
                  <span>Sumuhurtham: 10:12 PM</span>
                </div>
              </div>
            )}

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={handleReset}
                className="text-xs text-espresso-soft hover:text-espresso underline font-sans py-1"
              >
                Edit My Response
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold hover:bg-gold-dark text-ivory font-serif text-xs tracking-widest uppercase transition-colors"
              >
                Close Pass
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
