import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Train, Car, PhoneCall, ExternalLink } from 'lucide-react';
import { GoldFiligreeDivider } from './DecorativeMotifs';
import { SectionFlankOrnaments } from './WeddingSideOrnaments';

export const Venue = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=BHEL+Kalyana+Mandapam+BHPV+Gajuwaka+Visakhapatnam";

  return (
    <section id="venue" className="py-16 sm:py-24 px-3 sm:px-6 relative bg-gradient-to-b from-[#FAF7F0] via-[#F4ECE1] to-[#FAF7F0] overflow-hidden">
      {/* Traditional Auspicious Wedding Flank Ornaments (Royal Gajam & Shankha Chakra) */}
      <SectionFlankOrnaments variant="venue" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold block mb-1">
            Kalyana Vedika &amp; Destination
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#241A15] font-bold">
            BHEL Kalyana Mandapam (BHPV)
          </h2>
          <span className="font-telugu text-[#8B1E2B] text-base sm:text-lg font-bold block mt-1">
            బి.హెచ్.ఇ.ఎల్. కళ్యాణ మండపము (బి.హెచ్.పి.వి.), గాజువాక, విశాఖపట్నం
          </span>
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#605047] mt-2 sm:mt-3 max-w-xl mx-auto px-2 font-medium">
            "Situated in the scenic coastal City of Destiny, welcoming family and friends to share in our auspicious celebration."
          </p>
          <GoldFiligreeDivider className="mt-4 sm:mt-6" variant="lotus" />
        </div>

        {/* Venue Details & Interactive Map Showcase (Unified, No Extra White Void) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-7 md:p-8 border-2 border-gold/40 shadow-xl mb-8 sm:mb-12"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold">
              Google Maps Location
            </span>
            <span className="font-serif italic text-xs text-[#605047] font-semibold">
              Gajuwaka, Visakhapatnam
            </span>
          </div>

          {/* Embedded Google Map */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border-2 border-gold/40 shadow-inner bg-champagne-light">
            <iframe
              title="BHEL Kalyana Mandapam Gajuwaka Location"
              src="https://maps.google.com/maps?q=BHEL+Kalyana+Mandapam+Gajuwaka+Visakhapatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address & Direct Map Action */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-b border-black/10 pb-4">
            <div className="flex items-start gap-2 text-xs sm:text-sm text-[#241A15] font-semibold">
              <MapPin className="w-4 h-4 text-[#8B1E2B] flex-shrink-0 mt-0.5" />
              <span className="break-words">
                BHEL Kalyana Mandapam (BHPV), Gajuwaka, Visakhapatnam, Andhra Pradesh 530012
              </span>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#8B1E2B] hover:bg-[#6E1521] text-ivory font-serif text-xs font-bold tracking-wider transition-colors shadow-md flex-shrink-0"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Travel Logistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FAF7F0] border border-gold/30">
              <Plane className="w-5 h-5 text-[#8B1E2B] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-xs sm:text-sm text-[#241A15] font-bold block">Vizag Airport (VTZ)</span>
                <span className="font-sans text-[10px] sm:text-[11px] text-[#605047] font-medium">~12 km / 20 mins drive via NH16</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FAF7F0] border border-gold/30">
              <Train className="w-5 h-5 text-[#8B1E2B] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-xs sm:text-sm text-[#241A15] font-bold block">Railway Stations</span>
                <span className="font-sans text-[10px] sm:text-[11px] text-[#605047] font-medium">Duvvada (DVD) 6 km • Vizag Jn 16 km</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FAF7F0] border border-gold/30">
              <Car className="w-5 h-5 text-[#8B1E2B] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-xs sm:text-sm text-[#241A15] font-bold block">Accessibility</span>
                <span className="font-sans text-[10px] sm:text-[11px] text-[#605047] font-medium">Direct NH16 access, Gajuwaka</span>
              </div>
            </div>
          </div>

          <div className="mt-3 text-center sm:text-left">
            <span className="font-sans text-xs text-[#605047] font-medium">
              Landmark: BHPV Township
            </span>
          </div>
        </motion.div>

        {/* Family Hospitality & Travel Desk */}
        <div className="bg-gradient-to-r from-[#FFFDF9] via-white to-[#FFFDF9] border-2 border-[#8B1E2B]/30 rounded-2xl p-5 sm:p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-md max-w-4xl mx-auto">
          <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-full bg-[#8B1E2B] border-2 border-gold flex items-center justify-center text-ivory flex-shrink-0 shadow-md">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#241A15] font-bold">
                Family Reception &amp; Guest Assistance
              </h4>
              <p className="font-sans text-xs text-[#605047] mt-0.5 font-medium">
                Boni family hospitality team is available to assist outstation guests traveling from Rajahmundry, Hyderabad, and elsewhere.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full md:w-auto">
            <a
              href="tel:+919848012345"
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF7F0] border-2 border-gold/70 text-[#241A15] text-xs font-serif font-bold tracking-wider shadow-sm transition-all"
            >
              Contact: Boni Family Desk
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full bg-[#8B1E2B] hover:bg-[#6E1521] text-ivory text-xs font-serif font-bold tracking-wider shadow-md transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Venue;
