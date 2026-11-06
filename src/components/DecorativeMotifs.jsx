import React from 'react';

// Sacred Tirumala Balaji / Venkateswara Swamy Tirunamam & Temple Arch Motif
export const BalajiIcon = ({ className = "w-12 h-12 text-gold" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Temple Mandapam Vimana / Arch */}
    <path d="M50 8L76 26V34H24V26L50 8Z" fill="currentColor" fillOpacity="0.12" />
    <path d="M50 4V8" strokeWidth="2" />
    <circle cx="50" cy="4" r="2" fill="currentColor" />
    
    {/* Arch Pillars */}
    <path d="M28 34V84M72 34V84" strokeWidth="1.8" />
    <path d="M22 84H78" strokeWidth="2.5" />
    <path d="M18 90H82" strokeWidth="2" />

    {/* Sacred Tirunamam (Namam with Tilak) in the center */}
    <path d="M38 42V60C38 66 43 71 50 71C57 71 62 66 62 60V42" strokeWidth="1.6" />
    <path d="M44 42V56C44 59 47 62 50 62C53 62 56 59 56 56V42" fill="currentColor" fillOpacity="0.2" />
    {/* Central Vermilion Tilak (Kasturi Tilakam) */}
    <path d="M50 40V68" stroke="#B33C33" strokeWidth="2.6" />
    <circle cx="50" cy="72" r="1.5" fill="#B33C33" />
  </svg>
);

// Auspicious Hindu Wedding Kalyana Silhouette Motif (Bride & Groom in Vivaha Mandapam)
export const KalyanaMandapamIcon = ({ className = "w-16 h-16 text-gold" }) => (
  <svg
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Mandapam Canopy Arch */}
    <path d="M15 40 Q60 10 105 40" strokeWidth="1.8" />
    <path d="M20 40 Q60 16 100 40" strokeDasharray="2 3" opacity="0.7" />
    
    {/* Kalasam on top */}
    <path d="M60 14V6" strokeWidth="1.8" />
    <circle cx="60" cy="5" r="2" fill="currentColor" />

    {/* Pillars */}
    <line x1="22" y1="40" x2="22" y2="86" strokeWidth="1.6" />
    <line x1="98" y1="40" x2="98" y2="86" strokeWidth="1.6" />
    <line x1="12" y1="86" x2="108" y2="86" strokeWidth="2" />

    {/* Sacred Homa Kunda / Agni (Sacred Fire) in Center */}
    <path d="M52 86 L54 75 H66 L68 86 Z" fill="currentColor" fillOpacity="0.25" strokeWidth="1.2" />
    <path d="M60 74 C58 70 60 66 60 64 C62 67 63 69 60 74 Z" fill="#E9B642" stroke="#E9B642" strokeWidth="1" />

    {/* Groom (Left) with Pelli Tepa / Turban holding hand */}
    <circle cx="44" cy="54" r="5" fill="currentColor" fillOpacity="0.3" />
    <path d="M37 68 C37 60 41 59 44 59 C47 59 51 60 51 68 V86 H37 Z" fill="currentColor" fillOpacity="0.15" />

    {/* Bride (Right) with Saree Pallu & Kanya blessing */}
    <circle cx="76" cy="56" r="4.5" fill="currentColor" fillOpacity="0.3" />
    <path d="M69 70 C69 62 73 61 76 61 C79 61 83 62 83 70 V86 H69 Z" fill="currentColor" fillOpacity="0.15" />

    {/* Garland / Varmala joining them */}
    <path d="M47 66 Q60 72 73 67" strokeWidth="1.2" strokeDasharray="1.5 2" />
  </svg>
);

// Ornate Royal Monogram with Crest and Filigree
export const RoyalMonogram = ({ initials = "G & S", className = "w-32 h-32" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 200 200" className="w-full h-full text-gold" fill="none" stroke="currentColor">
      {/* Outer scalloped ring */}
      <circle cx="100" cy="100" r="92" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="100" cy="100" r="85" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="80" strokeWidth="0.5" opacity="0.8" />
      
      {/* 8 Ornamental Petal Crests */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 8 C96 14, 96 18, 100 22 C104 18, 104 14, 100 8 Z"
            fill="currentColor"
            fillOpacity="0.2"
            strokeWidth="0.75"
          />
          <circle cx="100" cy="15" r="1.5" fill="currentColor" />
        </g>
      ))}

      {/* Royal Crown / Top crest */}
      <path
        d="M90 35 L100 24 L110 35 L106 38 L100 34 L94 38 Z"
        fill="currentColor"
        fillOpacity="0.3"
        strokeWidth="0.75"
      />
      <circle cx="100" cy="27" r="1.5" fill="currentColor" />
      <circle cx="92" cy="34" r="1" fill="currentColor" />
      <circle cx="108" cy="34" r="1" fill="currentColor" />

      {/* Botanical Laurel Branches */}
      <path
        d="M50 100 C50 130 70 155 100 155 C130 155 150 130 150 100"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Small leaves along the laurel */}
      {[
        { cx: 58, cy: 125, r: 15 },
        { cx: 74, cy: 145, r: 40 },
        { cx: 126, cy: 145, r: -40 },
        { cx: 142, cy: 125, r: -15 },
      ].map((leaf, idx) => (
        <ellipse
          key={idx}
          cx={leaf.cx}
          cy={leaf.cy}
          rx="3.5"
          ry="1.8"
          transform={`rotate(${leaf.r} ${leaf.cx} ${leaf.cy})`}
          fill="currentColor"
          fillOpacity="0.3"
        />
      ))}
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <span className="font-serif italic text-base sm:text-lg md:text-xl text-espresso font-semibold tracking-wider pt-0.5">
        {initials}
      </span>
      <span className="font-sans text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-gold-dark mt-0.5">
        Boni &amp; Elipe
      </span>
    </div>
  </div>
);

// High-end Antique Gold Filigree Divider
export const GoldFiligreeDivider = ({ className = "my-6", variant = "lotus" }) => (
  <div className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/60 to-gold" />
    
    {variant === "lotus" ? (
      <svg className="w-8 h-8 text-gold flex-shrink-0" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 8 C17 16 14 24 20 28 C26 24 23 16 20 8 Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M20 28 C12 26 8 20 10 14 C15 16 18 22 20 28 Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M20 28 C28 26 32 20 30 14 C25 16 22 22 20 28 Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <circle cx="20" cy="20" r="1.5" fill="currentColor" />
        <circle cx="14" cy="22" r="1" fill="currentColor" />
        <circle cx="26" cy="22" r="1" fill="currentColor" />
      </svg>
    ) : (
      <div className="flex items-center gap-1.5 text-gold">
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rotate-45 border border-gold" />
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
      </div>
    )}

    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold/60 to-gold" />
  </div>
);

// Intricate Corner Flourish SVG
export const CornerFlourish = ({ position = "top-left", className = "w-7 h-7" }) => {
  const rotation = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  }[position];

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={`${className} transform`}
      style={{ transform: rotation }}
    >
      <path d="M2 38 V8 C2 4.686 4.686 2 8 2 H38" strokeLinecap="round" />
      <path d="M6 34 V12 C6 8.686 8.686 6 12 6 H34" strokeWidth="0.75" opacity="0.6" />
      <circle cx="14" cy="14" r="2" fill="currentColor" fillOpacity="0.4" />
      <path d="M2 18 C8 18 18 8 18 2" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
};

// Royal Mandala Background Watermark
export const RoyalMandalaWatermark = ({ className = "w-96 h-96 opacity-5" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    className={`pointer-events-none select-none text-gold ${className}`}
  >
    <circle cx="100" cy="100" r="95" strokeWidth="0.5" strokeDasharray="2 2" />
    <circle cx="100" cy="100" r="80" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="60" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="40" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="20" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="5" fill="currentColor" />

    {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 100 100)`}>
        <line x1="100" y1="20" x2="100" y2="40" strokeWidth="0.6" />
        <line x1="100" y1="60" x2="100" y2="80" strokeWidth="0.6" />
        <ellipse cx="100" cy="30" rx="3" ry="6" strokeWidth="0.5" fill="currentColor" fillOpacity="0.08" />
        <circle cx="100" cy="85" r="1.5" fill="currentColor" />
        <path d="M96 50 Q100 45 104 50" strokeWidth="0.6" />
      </g>
    ))}
  </svg>
);

// Traditional Telugu / Hindu Wedding Kalyana Toranam & Purna Kumbham (మామిడి తోరణం, పూర్ణకుంభం & దీపాలు)
export const KalyanaToranamMotif = ({ className = "w-full max-w-sm text-gold" }) => (
  <svg
    viewBox="0 0 360 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    {/* Upper decorative garland string */}
    <path d="M10 20 Q95 42 180 28 Q265 42 350 20" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
    <path d="M10 24 Q95 48 180 32 Q265 48 350 24" stroke="currentColor" strokeWidth="1.4" />

    {/* Mango Leaves (మామిడి ఆకులు) hanging along the toranam */}
    {[
      { x: 30, y: 26, r: 8 },
      { x: 60, y: 32, r: 14 },
      { x: 95, y: 36, r: 18 },
      { x: 130, y: 34, r: 10 },
      { x: 230, y: 34, r: -10 },
      { x: 265, y: 36, r: -18 },
      { x: 300, y: 32, r: -14 },
      { x: 330, y: 26, r: -8 },
    ].map((leaf, i) => (
      <g key={`leaf-${i}`} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.r})`}>
        {/* Leaf Shape */}
        <path
          d="M0 0 C4 8, 5 18, 0 26 C-5 18, -4 8, 0 0 Z"
          fill="#3B6E47"
          fillOpacity="0.85"
          stroke="#274C30"
          strokeWidth="0.8"
        />
        {/* Leaf Center Vein */}
        <path d="M0 2 V24" stroke="#D4C097" strokeWidth="0.6" opacity="0.7" />
        {/* Marigold Flower on top of leaf */}
        <circle cx="0" cy="0" r="3.5" fill="#E9B642" stroke="#8B1E2B" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="1.5" fill="#A32333" />
      </g>
    ))}

    {/* Hanging Temple Bells (ఘంటలు) */}
    {[
      { x: 15, y: 22 },
      { x: 112, y: 37 },
      { x: 248, y: 37 },
      { x: 345, y: 22 },
    ].map((bell, i) => (
      <g key={`bell-${i}`} transform={`translate(${bell.x}, ${bell.y})`}>
        <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
        <path d="M-4 10 H4 L5 16 C5 18 3 19 0 19 C-3 19 -5 18 -5 16 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="21" r="1.2" fill="#8B1E2B" />
      </g>
    ))}

    {/* Hanging Pearl Strands (ముత్యాల తోరణం) */}
    <path d="M40 28 Q95 56 150 36" stroke="#B69A62" strokeWidth="0.8" strokeDasharray="1.5 2.5" />
    <path d="M210 36 Q265 56 320 28" stroke="#B69A62" strokeWidth="0.8" strokeDasharray="1.5 2.5" />

    {/* Left Sacred Brass Deepam (దీపం) */}
    <g transform="translate(75, 42)">
      {/* Flame */}
      <path d="M0 -12 C-3 -6 -3 0 0 2 C3 0 3 -6 0 -12 Z" fill="#E9B642" stroke="#A32333" strokeWidth="0.8" />
      <circle cx="0" cy="-4" r="1.5" fill="#8B1E2B" />
      {/* Lamp Bowl */}
      <path d="M-6 2 Q0 6 6 2 L5 5 H-5 Z" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />
      {/* Lamp Stand */}
      <path d="M-1 5 V16 M-5 16 H5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* Right Sacred Brass Deepam (దీపం) */}
    <g transform="translate(285, 42)">
      {/* Flame */}
      <path d="M0 -12 C-3 -6 -3 0 0 2 C3 0 3 -6 0 -12 Z" fill="#E9B642" stroke="#A32333" strokeWidth="0.8" />
      <circle cx="0" cy="-4" r="1.5" fill="#8B1E2B" />
      {/* Lamp Bowl */}
      <path d="M-6 2 Q0 6 6 2 L5 5 H-5 Z" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />
      {/* Lamp Stand */}
      <path d="M-1 5 V16 M-5 16 H5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* Center Sacred Purna Kumbham (పూర్ణకుంభం / కలశం) */}
    <g transform="translate(180, 2)">
      {/* Sacred Halo / Glow */}
      <circle cx="0" cy="38" r="32" fill="#B69A62" fillOpacity="0.08" />
      <circle cx="0" cy="38" r="26" stroke="#B69A62" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.5" />

      {/* Mango Leaves from Kalasam Neck */}
      {/* Center Leaf */}
      <path d="M0 26 C2 16 3 8 0 0 C-3 8 -2 16 0 26 Z" fill="#3B6E47" stroke="#274C30" strokeWidth="0.8" />
      {/* Left Leaves */}
      <path d="M-2 27 C-10 20 -16 14 -18 6 C-13 10 -6 19 -2 27 Z" fill="#3B6E47" stroke="#274C30" strokeWidth="0.8" />
      <path d="M-4 30 C-14 28 -24 24 -26 18 C-20 20 -10 26 -4 30 Z" fill="#335E3D" stroke="#274C30" strokeWidth="0.8" />
      {/* Right Leaves */}
      <path d="M2 27 C10 20 16 14 18 6 C13 10 6 19 2 27 Z" fill="#3B6E47" stroke="#274C30" strokeWidth="0.8" />
      <path d="M4 30 C14 28 24 24 26 18 C20 20 10 26 4 30 Z" fill="#335E3D" stroke="#274C30" strokeWidth="0.8" />

      {/* Sacred Coconut (శ్రీఫలం) */}
      <path d="M-8 27 C-9 16 0 9 0 7 C0 9 9 16 8 27 Z" fill="#8C6541" stroke="#5E4025" strokeWidth="1" />
      <line x1="0" y1="7" x2="0" y2="4" stroke="#5E4025" strokeWidth="1.2" />

      {/* Vermilion Tilakam on Coconut */}
      <circle cx="0" cy="20" r="2" fill="#8B1E2B" />

      {/* Kalasam Urn (కలశ పాత్ర) */}
      {/* Rim / Mouth */}
      <ellipse cx="0" cy="31" rx="10" ry="2.5" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.2" />
      {/* Pot Body */}
      <path
        d="M-8 32 C-16 36 -17 48 -11 55 C-6 59 6 59 11 55 C17 48 16 36 8 32 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Swastika / Auspicious Symbol on Pot */}
      <path d="M0 40 V50 M-5 45 H5 M-5 40 H-1 M5 50 H1 M-5 50 V46 M5 40 V44" stroke="#8B1E2B" strokeWidth="1" strokeLinecap="round" />
      {/* Base */}
      <path d="M-7 56 H7 L5 60 H-5 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
    </g>
  </svg>
);
