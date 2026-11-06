import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { GoldFiligreeDivider, CornerFlourish, KalyanaMandapamIcon } from './DecorativeMotifs';
import { SectionFlankOrnaments } from './WeddingSideOrnaments';

export const Schedule = () => {

  const events = [
    {
      id: "pellikoduku",
      title: "Pellikoduku & Pellikuthuru",
      teluguTitle: "పెళ్లికొడుకు & పెళ్లికూతురు / మంగళస్నానం",
      subtitle: "Sacred Mangalasnanam & Nalugu Rituals",
      date: "Friday, November 13, 2026",
      time: "09:30 AM – 12:30 PM",
      venue: "Respective Residences • Visakhapatnam & Rajahmundry",
      locationDesc: "Traditional nalugu with fragrant turmeric, sandalwood paste & rose water showers",
      description:
        "The beloved ceremonial sanctification where elders and family anoint the bride and groom with auspicious haldi, aromatic oils, and Vedic blessings to prepare them for the sacred wedding day.",
      theme: {
        cardBg: "bg-gradient-to-br from-[#FFFDF0] via-[#FFFBE6] to-[#FFF9DB]",
        border: "border-2 border-[#D89A1D]/60 hover:border-[#D89A1D]",
        badge: "bg-[#D89A1D] text-ivory",
        titleColor: "text-[#4A3206]",
        accent: "text-[#B87A08]",
      },
      attire: "Traditional Yellow / Mustard Cotton & Kanjeevaram Silks",
      palette: [
        { name: "Turmeric Gold", hex: "#E9B642" },
        { name: "Sandal Cream", hex: "#EADCC3" },
        { name: "Kumkum Red", hex: "#9B2323" },
        { name: "Pure Ivory", hex: "#FAF7F0" },
      ],
      calendarDetails: {
        title: "Pellikoduku / Haldi: Gowtham & Sai Sunanda Devi",
        start: "20261113T040000Z",
        end: "20261113T070000Z",
        location: "Visakhapatnam, Andhra Pradesh",
      },
    },
    {
      id: "reception",
      title: "Reception & Dinner (విందు)",
      teluguTitle: "శుభ విందు & ఆశీర్వచనములు",
      subtitle: "Welcoming Family & Friends with a Royal Feast",
      date: "Saturday, November 14, 2026",
      time: "07:00 PM Onwards",
      venue: "BHEL Kalyana Mandapam (BHPV), Gajuwaka",
      locationDesc: "Kalyana Vedika, Visakhapatnam",
      description:
        "Join Sri Boni Kondala Rao & Smt. Kondamma and Sri Elipe Suryanarayana & Smt. Kumari as we greet all honored guests with joyous traditional Nadaswaram, congratulatory blessings, and an authentic royal Andhra wedding feast.",
      theme: {
        cardBg: "bg-gradient-to-br from-[#F4F8FA] via-[#EBF3F7] to-[#E3EEF4]",
        border: "border-2 border-[#1E4D63]/50 hover:border-[#1E4D63]",
        badge: "bg-[#1E4D63] text-ivory",
        titleColor: "text-[#102C3A]",
        accent: "text-[#1E4D63]",
      },
      attire: "Grand Traditional Pattu Sarees, Sherwanis & Festive Kurta-Pyjamas",
      palette: [
        { name: "Peacock Blue", hex: "#1A4956" },
        { name: "Royal Maroon", hex: "#6E1B24" },
        { name: "Zari Gold", hex: "#B69A62" },
        { name: "Golden Sandal", hex: "#DFCEB3" },
      ],
      calendarDetails: {
        title: "Wedding Reception & Dinner (విందు): Gowtham & Sai Sunanda Devi",
        start: "20261114T133000Z",
        end: "20261114T170000Z",
        location: "BHEL Kalyana Mandapam (BHPV), Gajuwaka, Visakhapatnam",
      },
    },
    {
      id: "sumuhurtham",
      title: "Sumuhurtham (శుభ సుముహూర్తం)",
      teluguTitle: "కర్కాటక లగ్న పుష్కరాంశ సుముహూర్తం",
      subtitle: "Jeelakarra-Bellam & Mangalya Dharana",
      date: "Saturday, November 14, 2026",
      time: "Exactly at 10:12 PM ('Karkataka Lagnam')",
      venue: "BHEL Kalyana Mandapam (BHPV), Gajuwaka",
      locationDesc: "Kalyana Vedika • Visakhapatnam",
      description:
        "The sacred celestial union: స్వస్తిశ్రీ చాంద్రమాన పరాభవ నామ సంవత్సర కార్తీక మాస శుద్ధ పంచమి శనివారం రాత్రి గం॥ 10:12 ని॥లకు ఉత్తరాషాఢ నక్షత్రయుక్త కర్కాటక లగ్న పుష్కరాంశ శుభ సుముహూర్తమున. Gowtham and Sunanda place Jeelakarra-Bellam, followed by the tying of the Mangalasutra.",
      theme: {
        cardBg: "bg-gradient-to-br from-[#FFF5F6] via-[#FDF0F2] to-[#FCE7EB]",
        border: "border-2 border-[#8B1E2B] shadow-gold-glow ring-2 ring-gold/40",
        badge: "bg-gradient-to-r from-[#8B1E2B] to-[#B32738] text-ivory font-bold shadow-md",
        titleColor: "text-[#4A0A12]",
        accent: "text-[#8B1E2B]",
      },
      attire: "Dharmavaram / Kanchi Pattu Silk Dhotis & Traditional Bridal Pattu Sarees",
      palette: [
        { name: "Sacred Kumkum", hex: "#8B2323" },
        { name: "Haldi Gold", hex: "#E9B642" },
        { name: "Antique Zari", hex: "#B69A62" },
        { name: "Pure Silk Ivory", hex: "#FAF7F0" },
      ],
      calendarDetails: {
        title: "Sumuhurtham: Gowtham & Sai Sunanda Devi Vivaham",
        start: "20261114T164200Z",
        end: "20261114T200000Z",
        location: "BHEL Kalyana Mandapam (BHPV), Gajuwaka, Visakhapatnam",
      },
    },
    {
      id: "talambralu",
      title: "Talambralu & Saptapadi",
      teluguTitle: "తలంబ్రాలు & సప్తపది",
      subtitle: "Joyous Sacred Pearls, Rice & Seven Vows",
      date: "Sunday, November 15, 2026",
      time: "Following the Sumuhurtham (Midnight – Dawn)",
      venue: "BHEL Kalyana Mandapam (BHPV), Gajuwaka",
      locationDesc: "Sacred Mandapam Stage",
      description:
        "The delightful shower of turmeric-infused talambralu pearls and rice, the sacred seven steps (Saptapadi) around the Agni fire, the Darshanam of Arundhati Nakshatram, and family blessings from elders.",
      theme: {
        cardBg: "bg-gradient-to-br from-[#FAF8F5] via-[#F5EFEB] to-[#EFE7DE]",
        border: "border-2 border-[#9E7B3B]/50 hover:border-[#9E7B3B]",
        badge: "bg-[#7A5B20] text-ivory",
        titleColor: "text-[#3D2C17]",
        accent: "text-[#825E1D]",
      },
      attire: "Comfortable Traditional Ethnic Attire",
      palette: [
        { name: "Pearl White", hex: "#FDFBF7" },
        { name: "Golden Yellow", hex: "#F3C969" },
        { name: "Blush Rose", hex: "#C99B94" },
        { name: "Sandal", hex: "#EADCC3" },
      ],
      calendarDetails: {
        title: "Talambralu & Saptapadi: Gowtham & Sai Sunanda Devi",
        start: "20261114T183000Z",
        end: "20261114T213000Z",
        location: "BHEL Kalyana Mandapam (BHPV), Gajuwaka, Visakhapatnam",
      },
    },
  ];

  const getGoogleCalendarUrl = (event) => {
    const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const text = `&text=${encodeURIComponent(event.calendarDetails.title)}`;
    const dates = `&dates=${event.calendarDetails.start}/${event.calendarDetails.end}`;
    const details = `&details=${encodeURIComponent(event.description)}`;
    const location = `&location=${encodeURIComponent(event.calendarDetails.location)}`;
    return `${base}${text}${dates}${details}${location}`;
  };

  return (
    <section id="schedule" className="py-16 sm:py-24 px-3 sm:px-6 relative paper-texture bg-[#FAF7F0] overflow-hidden">
      {/* Traditional Auspicious Wedding Flank Ornaments (Kalyana Agni & Talambralu Basin) */}
      <SectionFlankOrnaments variant="schedule" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Bold Contrast */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-[#8B1E2B] font-bold block mb-1">
            Auspicious Muhurtham &amp; Events
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#241A15] font-bold">
            The Wedding Itinerary
          </h2>
          <span className="font-telugu text-[#8B1E2B] text-base sm:text-lg font-bold block mt-1">
            శుభ సుముహూర్తము మరియు విందు వివరములు
          </span>
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#605047] mt-2 sm:mt-3 max-w-xl mx-auto px-2 font-medium">
            "We request the pleasure of your company to celebrate these sacred ceremonies and shower your affectionate blessings."
          </p>
          <GoldFiligreeDivider className="mt-4 sm:mt-6" variant="lotus" />
        </div>

        {/* 2x2 Grid of Distinctly Themed Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className={`relative rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl flex flex-col justify-between transition-all duration-300 ${event.theme.cardBg} ${event.theme.border}`}
            >
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-gold/60 w-6 h-6">
                <CornerFlourish position="top-left" />
              </div>
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-gold/60 w-6 h-6">
                <CornerFlourish position="top-right" />
              </div>

              <div>
                {/* Event Badge Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className={`font-sans text-[10px] sm:text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-sm ${event.theme.badge}`}>
                    {event.id === 'sumuhurtham' ? '★ Main Sumuhurtham (ముహూర్తం)' : `Event 0${index + 1}`}
                  </span>
                  <span className="font-serif italic text-xs font-semibold text-[#8B1E2B]">
                    {event.subtitle}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className={`font-serif text-2xl sm:text-3xl font-bold mb-1 ${event.theme.titleColor}`}>
                  {event.title}
                </h3>
                <span className="font-telugu text-xs sm:text-sm font-semibold text-[#8B1E2B] block mb-3">
                  {event.teluguTitle}
                </span>

                {/* Event Logistics with High-Contrast Chips */}
                <div className="space-y-2 my-3 sm:my-4 py-3 border-y border-black/10 text-xs sm:text-sm text-[#30251F]">
                  <div className="flex items-center gap-2.5">
                    <Calendar className={`w-4 h-4 flex-shrink-0 ${event.theme.accent}`} />
                    <span className="font-bold text-[#241A15]">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className={`w-4 h-4 flex-shrink-0 ${event.theme.accent}`} />
                    <span className={`font-bold ${event.id === 'sumuhurtham' ? 'text-[#8B1E2B] text-sm' : 'text-[#241A15]'}`}>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className={`w-4 h-4 flex-shrink-0 mt-0.5 ${event.theme.accent}`} />
                    <div>
                      <span className="font-bold text-[#241A15] block">{event.venue}</span>
                      <span className="text-[11px] text-[#605047]">{event.locationDesc}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#4A3C34] leading-relaxed my-3 sm:my-4 font-normal">
                  {event.description}
                </p>

            
              </div>

              {/* Actions: Add to Google Calendar */}
              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-black/10 flex items-center justify-center">
                <a
                  href={getGoogleCalendarUrl(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF7F0] border-2 border-gold/70 hover:border-[#8B1E2B] text-[#241A15] hover:text-[#8B1E2B] text-xs font-serif font-bold tracking-wider shadow-sm transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#8B1E2B]" />
                  <span>Add to Google Calendar</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
