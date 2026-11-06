import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Blessings', href: '#blessings' },
    { label: 'Our Story', href: '#story' },
    { label: 'Sumuhurtham', href: '#schedule' },
    { label: 'Kalyana Vedika', href: '#venue' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md border-b-2 border-gold/40 shadow-royal py-2.5'
          : 'bg-[#FAF7F0]/80 backdrop-blur-sm border-b border-gold/20 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left Monogram / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B1E2B] to-[#5C101A] border-2 border-gold flex items-center justify-center shadow-md">
            <span className="font-serif italic text-base font-bold text-ivory tracking-widest">
              G&amp;S
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-sm sm:text-base font-bold text-[#30251F] group-hover:text-[#8B1E2B] transition-colors leading-none tracking-wide">
              Gowtham &amp; Sunanda
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] text-[#8B1E2B] font-semibold leading-tight mt-0.5 tracking-wide">
              14 November 2026 • Visakhapatnam
            </span>
          </div>
        </a>

        {/* Desktop Nav Items - Clean, Bold, High-Contrast (No Telugu in brackets) */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-full text-[#241A15] hover:text-[#8B1E2B] hover:bg-gold/15 font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-champagne-light/70 border border-gold/40 text-[#30251F] hover:bg-champagne transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#8B1E2B]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Clean, Bold, without Telugu in brackets and without RSVP) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F0] border-b-2 border-gold/40 px-6 py-4 space-y-2 shadow-2xl backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-xl hover:bg-gold/15 font-sans font-bold text-sm tracking-wide text-[#241A15] hover:text-[#8B1E2B] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
