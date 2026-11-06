import React from 'react';

// ============================================================================
// 1. Vertical Hanging Marigold & Jasmine Floral Garland (బంతి & మల్లెపూల లత)
// ============================================================================
export const VerticalFloralGarland = ({ className = "h-96 w-8 text-gold" }) => (
  <svg
    viewBox="0 0 32 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    {/* Central Golden Thread */}
    <line x1="16" y1="0" x2="16" y2="330" stroke="#B69A62" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
    
    {/* Alternating Flowers along the thread */}
    {[
      { y: 25, type: 'marigold', r: 7 },
      { y: 55, type: 'jasmine', r: 5 },
      { y: 80, type: 'leaf', r: 10 },
      { y: 110, type: 'marigold', r: 7 },
      { y: 140, type: 'jasmine', r: 5 },
      { y: 165, type: 'leaf', r: -10 },
      { y: 195, type: 'marigold', r: 7 },
      { y: 225, type: 'jasmine', r: 5 },
      { y: 250, type: 'leaf', r: 10 },
      { y: 280, type: 'marigold', r: 7 },
      { y: 310, type: 'jasmine', r: 5 },
    ].map((item, idx) => (
      <g key={idx}>
        {item.type === 'marigold' && (
          <g transform={`translate(16, ${item.y})`}>
            {/* 8-Petal Marigold Blossom */}
            <circle cx="0" cy="0" r={item.r} fill="#E9B642" stroke="#8B1E2B" strokeWidth="0.8" />
            <circle cx="0" cy="0" r={item.r - 2.5} fill="#D97706" />
            <circle cx="0" cy="0" r="2" fill="#8B1E2B" />
          </g>
        )}
        {item.type === 'jasmine' && (
          <g transform={`translate(16, ${item.y})`}>
            {/* Star Jasmine Flower */}
            <circle cx="0" cy="0" r={item.r} fill="#FFFDF9" stroke="#B69A62" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="1.5" fill="#E9B642" />
          </g>
        )}
        {item.type === 'leaf' && (
          <g transform={`translate(16, ${item.y}) rotate(${item.r})`}>
            {/* Mango Leaf */}
            <path
              d="M0 0 C5 6, 6 14, 0 20 C-6 14, -5 6, 0 0 Z"
              fill="#3B6E47"
              fillOpacity="0.85"
              stroke="#274C30"
              strokeWidth="0.6"
            />
          </g>
        )}
      </g>
    ))}

    {/* Hanging Auspicious Temple Bell (గజ్జెల ఘంట) at the bottom */}
    <g transform="translate(16, 330)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#B69A62" strokeWidth="1.2" />
      <path d="M-6 8 H6 L7 18 C7 21 4 22 0 22 C-4 22 -7 21 -7 18 Z" fill="#B69A62" fillOpacity="0.4" stroke="#B69A62" strokeWidth="1.2" />
      <circle cx="0" cy="24" r="2" fill="#8B1E2B" />
      {/* Clapper drop */}
      <circle cx="0" cy="28" r="1.2" fill="#E9B642" />
    </g>
  </svg>
);

// ============================================================================
// 2. Royal Wedding Elephant (గజరాజు / Gajam)
// ============================================================================
export const RoyalElephantMotif = ({ className = "w-28 h-28 text-gold", facing = "right" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${facing === 'left' ? 'scale-x-[-1]' : ''}`}
    stroke="currentColor"
  >
    {/* Elephant Body */}
    <path
      d="M30 75 C25 65 28 50 42 42 C55 35 75 35 88 45 C95 50 100 58 100 68 C100 78 98 85 96 95 H82 L84 75 C80 75 75 75 70 75 L70 95 H56 L58 75 C52 75 48 76 44 78 L42 95 H30 L32 78 C30 78 30 76 30 75 Z"
      fill="currentColor"
      fillOpacity="0.12"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    
    {/* Trunk Raised holding Lotus (శుభ సూచికం) */}
    <path
      d="M95 52 C104 55 110 48 108 40 C106 32 98 32 96 38 C94 42 96 46 95 52 Z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    
    {/* Sacred Lotus in Trunk */}
    <g transform="translate(100, 30)">
      <path d="M0 0 C-4 -6 -2 -12 0 -14 C2 -12 4 -6 0 0 Z" fill="#8B1E2B" fillOpacity="0.7" stroke="#8B1E2B" strokeWidth="0.8" />
      <path d="M-2 -3 C-8 -6 -8 -10 -5 -12 C-3 -10 0 -6 -2 -3 Z" fill="#E9B642" stroke="#B69A62" strokeWidth="0.6" />
      <path d="M2 -3 C8 -6 8 -10 5 -12 C3 -10 0 -6 2 -3 Z" fill="#E9B642" stroke="#B69A62" strokeWidth="0.6" />
    </g>

    {/* Royal Howdah / Ambari on back */}
    <path d="M50 38 L65 24 L80 38 H50 Z" fill="#8B1E2B" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
    <path d="M65 24 V16 M62 16 H68" stroke="#B69A62" strokeWidth="1.4" />
    <circle cx="65" cy="14" r="2" fill="#E9B642" />

    {/* Ornate Blanket / Jhool with gold tassels */}
    <path d="M48 46 H82 C80 62 76 68 65 68 C54 68 50 62 48 46 Z" fill="#8B1E2B" fillOpacity="0.25" stroke="#B69A62" strokeWidth="1.2" />
    <path d="M52 68 L50 72 M58 68 L57 72 M65 68 L65 72 M72 68 L73 72 M78 68 L80 72" stroke="#E9B642" strokeWidth="1" />

    {/* Head Ornament / Nettipattam */}
    <path d="M85 45 C87 40 92 42 93 46" stroke="#E9B642" strokeWidth="1.5" />
    <circle cx="88" cy="46" r="1.5" fill="#8B1E2B" />

    {/* Eye */}
    <circle cx="86" cy="48" r="1.2" fill="currentColor" />
  </svg>
);

// ============================================================================
// 3. Royal Auspicious Peacock (మయూరం / Mayuram)
// ============================================================================
export const RoyalPeacockMotif = ({ className = "w-28 h-28 text-gold", facing = "left" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${facing === 'left' ? '' : 'scale-x-[-1]'}`}
    stroke="currentColor"
  >
    {/* Peacock Body & Slender Neck */}
    <path
      d="M72 45 C75 35 68 25 58 24 C52 23 48 27 50 34 C52 42 62 52 64 68 C65 78 58 88 48 95"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M58 24 C64 26 72 32 74 42 C76 52 70 65 64 68 Z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.2"
    />

    {/* Beak & Eye */}
    <path d="M50 28 L42 30 L49 32" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="53" cy="28" r="1.2" fill="#8B1E2B" />

    {/* Royal Feather Crown / Kalgi */}
    <line x1="56" y1="23" x2="52" y2="15" stroke="currentColor" strokeWidth="1" />
    <line x1="58" y1="23" x2="58" y2="14" stroke="currentColor" strokeWidth="1" />
    <line x1="60" y1="23" x2="64" y2="15" stroke="currentColor" strokeWidth="1" />
    <circle cx="52" cy="14" r="1.5" fill="#E9B642" />
    <circle cx="58" cy="13" r="1.5" fill="#E9B642" />
    <circle cx="64" cy="14" r="1.5" fill="#E9B642" />

    {/* Ornate Tail Feather Plumes (పింఛం) */}
    {[
      { x: 35, y: 55, r: -35 },
      { x: 28, y: 70, r: -20 },
      { x: 30, y: 88, r: 0 },
      { x: 42, y: 102, r: 25 },
    ].map((plume, i) => (
      <g key={i} transform={`translate(${plume.x}, ${plume.y}) rotate(${plume.r})`}>
        <path d="M0 0 C-10 -8 -15 -18 -8 -25 C0 -30 10 -20 0 0 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1" />
        <circle cx="-2" cy="-18" r="4" fill="#3B6E47" fillOpacity="0.6" stroke="#B69A62" strokeWidth="0.8" />
        <circle cx="-2" cy="-18" r="2" fill="#8B1E2B" />
      </g>
    ))}

    {/* Lotus Perch Base */}
    <path d="M40 98 Q60 92 80 98 C75 106 45 106 40 98 Z" fill="#8B1E2B" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

// ============================================================================
// 4. Sacred Nadaswaram & Shehnai with Melam (సన్నాయి & మంగళ వాయిద్యాలు)
// ============================================================================
export const ShehnaiMelamMotif = ({ className = "w-28 h-28 text-gold" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    {/* Crossed Shehnai / Nadaswaram Horns */}
    <g transform="translate(60, 60)">
      {/* Pipe 1 */}
      <g transform="rotate(-35)">
        <path d="M-3 -40 H3 L5 25 L10 38 H-10 L-5 25 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="0" cy="38" rx="10" ry="3" fill="#8B1E2B" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
        {/* Finger Holes */}
        <circle cx="0" cy="-15" r="1.2" fill="#8B1E2B" />
        <circle cx="0" cy="-5" r="1.2" fill="#8B1E2B" />
        <circle cx="0" cy="5" r="1.2" fill="#8B1E2B" />
        <circle cx="0" cy="15" r="1.2" fill="#8B1E2B" />
      </g>

      {/* Pipe 2 */}
      <g transform="rotate(35)">
        <path d="M-3 -40 H3 L5 25 L10 38 H-10 L-5 25 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="0" cy="38" rx="10" ry="3" fill="#8B1E2B" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
        {/* Finger Holes */}
        <circle cx="0" cy="-15" r="1.2" fill="#8B1E2B" />
        <circle cx="0" cy="-5" r="1.2" fill="#8B1E2B" />
        <circle cx="0" cy="5" r="1.2" fill="#8B1E2B" />
        <circle cx="0" cy="15" r="1.2" fill="#8B1E2B" />
      </g>

      {/* Marigold Garland Wreath wrapped in center */}
      <circle cx="0" cy="0" r="14" stroke="#E9B642" strokeWidth="2.5" strokeDasharray="2 3" />
      <circle cx="0" cy="0" r="14" fill="#8B1E2B" fillOpacity="0.15" />
    </g>

    {/* Hanging Musical Tassels */}
    <path d="M48 95 C45 105 48 110 48 112" stroke="#B69A62" strokeWidth="1" />
    <path d="M72 95 C75 105 72 110 72 112" stroke="#B69A62" strokeWidth="1" />
    <circle cx="48" cy="113" r="1.5" fill="#8B1E2B" />
    <circle cx="72" cy="113" r="1.5" fill="#8B1E2B" />
  </svg>
);

// ============================================================================
// 5. Sacred Shankha & Sudarshana Chakra Motif (శంఖ చక్రాలు)
// ============================================================================
export const ShankhaChakraMotif = ({ className = "w-28 h-28 text-gold" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    {/* Sacred Shankha (Left) */}
    <g transform="translate(38, 55)">
      <path
        d="M-4 -20 C6 -24 16 -12 16 0 C16 14 6 22 -4 24 C-10 20 -14 12 -14 0 C-14 -12 -8 -20 -4 -20 Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Shankha Spiral */}
      <path d="M-4 -20 C-2 -10 2 0 6 12" stroke="currentColor" strokeWidth="1" />
      <path d="M2 -16 C6 -8 8 4 10 16" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      {/* Top Flame / Tilak */}
      <path d="M0 -22 C-2 -28 0 -32 0 -34 C0 -32 2 -28 0 -22 Z" fill="#E9B642" stroke="#8B1E2B" strokeWidth="0.8" />
    </g>

    {/* Sudarshana Chakra (Right) */}
    <g transform="translate(82, 55)">
      <circle cx="0" cy="0" r="18" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="0" cy="0" r="4" fill="#8B1E2B" />
      {/* 8 Flame Spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <line
          key={i}
          x1="0"
          y1="0"
          x2="0"
          y2="-18"
          transform={`rotate(${a})`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      {/* Top Flame / Tilak */}
      <path d="M0 -18 C-2 -26 0 -32 0 -34 C0 -32 2 -26 0 -18 Z" fill="#E9B642" stroke="#8B1E2B" strokeWidth="0.8" />
    </g>

    {/* Sacred Tirunamam in Center */}
    <g transform="translate(60, 52)">
      <path d="M-3 -8 V8 C-3 12 3 12 3 8 V-8" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="-10" x2="0" y2="10" stroke="#8B1E2B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="0" cy="14" r="1.5" fill="#8B1E2B" />
    </g>
  </svg>
);

// ============================================================================
// 6. Traditional Royal Bridal Doli / Palki (రాజ పల్లకి)
// ============================================================================
export const BridalDoliMotif = ({ className = "w-28 h-28 text-gold" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    {/* Arched Doli Pole spanning across */}
    <path d="M15 50 Q60 30 105 50" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    {/* Pole finials */}
    <circle cx="15" cy="50" r="2.5" fill="#E9B642" />
    <circle cx="105" cy="50" r="2.5" fill="#E9B642" />

    {/* Doli Carriage Dome / Roof */}
    <path
      d="M36 52 C36 42 46 38 60 38 C74 38 84 42 84 52 Z"
      fill="#8B1E2B"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path d="M60 38 V32 M57 32 H63" stroke="#B69A62" strokeWidth="1.4" />
    <circle cx="60" cy="30" r="1.5" fill="#E9B642" />

    {/* Carriage Body & Curtains */}
    <rect x="38" y="52" width="44" height="26" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
    
    {/* Scalloped Window / Curtain Opening */}
    <path d="M46 52 V68 Q60 76 74 68 V52" fill="#FAF7F0" fillOpacity="0.4" stroke="#8B1E2B" strokeWidth="1" />
    {/* Tassels */}
    <line x1="42" y1="78" x2="42" y2="84" stroke="#E9B642" strokeWidth="1.2" />
    <line x1="51" y1="78" x2="51" y2="84" stroke="#E9B642" strokeWidth="1.2" />
    <line x1="60" y1="78" x2="60" y2="84" stroke="#E9B642" strokeWidth="1.2" />
    <line x1="69" y1="78" x2="69" y2="84" stroke="#E9B642" strokeWidth="1.2" />
    <line x1="78" y1="78" x2="78" y2="84" stroke="#E9B642" strokeWidth="1.2" />
  </svg>
);

// ============================================================================
// 7. Sacred Kalyana Homa Agni Kunda (హోమ గుండం / పవిత్ర అగ్ని)
// ============================================================================
export const KalyanaAgniMotif = ({ className = "w-28 h-28 text-gold" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    {/* Stepped Altar / Homa Kunda Base */}
    <path d="M25 90 H95 L90 82 H30 Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M30 82 H90 L85 74 H35 Z" fill="#8B1E2B" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.2" />
    <path d="M35 74 H85 L80 66 H40 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />

    {/* Sacred Fire / Agni Flames */}
    <path
      d="M50 66 C42 54 48 44 54 40 C56 46 60 48 60 42 C62 34 58 26 60 22 C64 28 68 36 66 45 C72 40 76 46 72 54 C70 58 68 62 70 66 Z"
      fill="#E9B642"
      fillOpacity="0.75"
      stroke="#D97706"
      strokeWidth="1"
    />
    {/* Inner Core Flame */}
    <path
      d="M56 66 C52 58 56 50 60 46 C62 52 64 54 62 50 C63 46 62 42 63 38 C65 44 67 48 65 54 C68 52 69 56 66 62 C65 64 64 65 64 66 Z"
      fill="#8B1E2B"
      stroke="#A32333"
      strokeWidth="0.8"
    />
  </svg>
);

// ============================================================================
// 8. Auspicious Talambralu & Tamboolam Basin (తలంబ్రాల పాత్ర)
// ============================================================================
export const TalambraluBasinMotif = ({ className = "w-28 h-28 text-gold" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    {/* Auspicious Silver / Brass Basin */}
    <ellipse cx="60" cy="74" rx="36" ry="12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M24 74 C24 88 40 96 60 96 C80 96 96 88 96 74" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" />
    
    {/* Sacred Pearls & Yellow Turmeric Talambralu Akshintalu */}
    {[
      { cx: 42, cy: 72, r: 2.5, c: '#E9B642' },
      { cx: 50, cy: 70, r: 3, c: '#FFFDF9' },
      { cx: 60, cy: 68, r: 3.5, c: '#E9B642' },
      { cx: 70, cy: 70, r: 3, c: '#FFFDF9' },
      { cx: 78, cy: 72, r: 2.5, c: '#E9B642' },
      { cx: 46, cy: 76, r: 2.5, c: '#FFFDF9' },
      { cx: 56, cy: 74, r: 3, c: '#E9B642' },
      { cx: 66, cy: 74, r: 3, c: '#8B1E2B' },
      { cx: 74, cy: 76, r: 2.5, c: '#FFFDF9' },
    ].map((pearl, i) => (
      <circle key={i} cx={pearl.cx} cy={pearl.cy} r={pearl.r} fill={pearl.c} stroke="#B69A62" strokeWidth="0.6" />
    ))}

    {/* Sacred Coconut & Betel Leaves (తాంబూలం) nestled in the center */}
    <path d="M52 64 C48 52 54 44 60 42 C66 44 72 52 68 64 Z" fill="#8C6541" stroke="#5E4025" strokeWidth="1" />
    <circle cx="60" cy="52" r="1.8" fill="#8B1E2B" />
    {/* Betel Leaves */}
    <path d="M40 66 C36 58 42 54 48 58 C46 62 44 65 40 66 Z" fill="#3B6E47" stroke="#274C30" strokeWidth="0.8" />
    <path d="M80 66 C84 58 78 54 72 58 C74 62 76 65 80 66 Z" fill="#3B6E47" stroke="#274C30" strokeWidth="0.8" />
  </svg>
);

// ============================================================================
// 9. Master Flanking Ornaments Component for Any Section
// ============================================================================
export const SectionFlankOrnaments = ({ variant = "hero" }) => {
  const getMotifs = () => {
    switch (variant) {
      case "hero":
        return {
          left: <RoyalElephantMotif facing="right" className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
          right: <RoyalPeacockMotif facing="left" className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
        };
      case "blessings":
        return {
          left: <ShehnaiMelamMotif className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
          right: <ShankhaChakraMotif className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
        };
      case "story":
        return {
          left: <BridalDoliMotif className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
          right: <RoyalElephantMotif facing="left" className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
        };
      case "schedule":
        return {
          left: <KalyanaAgniMotif className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
          right: <TalambraluBasinMotif className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
        };
      case "countdown":
        return {
          left: <ShehnaiMelamMotif className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
          right: <TalambraluBasinMotif className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
        };
      case "venue":
        return {
          left: <RoyalElephantMotif facing="right" className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
          right: <ShankhaChakraMotif className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
        };
      default:
        return {
          left: <RoyalElephantMotif facing="right" className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
          right: <RoyalPeacockMotif facing="left" className="w-10 h-10 xl:w-11 xl:h-11 text-gold" />,
        };
    }
  };

  const { left, right } = getMotifs();

  return (
    <>
      {/* ======================================================== */}
      {/* LEFT FLANK ORNAMENT (Delicate, Compact & Floating)       */}
      {/* ======================================================== */}
      <div className="hidden xl:flex absolute left-2 2xl:left-6 top-1/2 -translate-y-1/2 flex-col items-center pointer-events-none z-10 opacity-70 hover:opacity-100 transition-opacity">
        {/* Slender Hanging Floral Garland */}
        <VerticalFloralGarland className="h-28 xl:h-36 w-3.5 text-gold/60" />
        
        {/* Floating Traditional Auspicious Wedding Motif (No bulky circle!) */}
        <div className="mt-1 flex items-center justify-center filter drop-shadow-sm">
          {left}
        </div>
      </div>

      {/* ======================================================== */}
      {/* RIGHT FLANK ORNAMENT (Delicate, Compact & Floating)      */}
      {/* ======================================================== */}
      <div className="hidden xl:flex absolute right-2 2xl:right-6 top-1/2 -translate-y-1/2 flex-col items-center pointer-events-none z-10 opacity-70 hover:opacity-100 transition-opacity">
        {/* Slender Hanging Floral Garland */}
        <VerticalFloralGarland className="h-28 xl:h-36 w-3.5 text-gold/60" />
        
        {/* Floating Traditional Auspicious Wedding Motif (No bulky circle!) */}
        <div className="mt-1 flex items-center justify-center filter drop-shadow-sm">
          {right}
        </div>
      </div>
    </>
  );
};
