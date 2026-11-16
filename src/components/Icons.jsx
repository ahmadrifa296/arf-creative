import React from 'react';

export const IconGithub = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const IconInstagram = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const IconWhatsapp = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export const IconMail = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const SparkleStar = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

export const HalftoneFlower = ({ className = "w-24 h-24" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <g transform="translate(50,50)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          <circle cx="0" cy="11" r="3" />
          <circle cx="0" cy="19" r="4" />
          <circle cx="0" cy="28" r="5" />
          <circle cx="0" cy="38" r="6" />
        </g>
      ))}
      <circle cx="0" cy="0" r="6" />
    </g>
  </svg>
);

export const ArfLogo = ({ className = "w-8 h-8", withSubtext = false }) => (
  <div className="flex items-center gap-2">
    <div className={`relative flex items-center justify-center rounded-xl bg-[#0B1528] border border-white/10 ${className}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="14" y="74" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="36" letterSpacing="1">ARF</text>
        {/* Creative rays */}
        <line x1="88" y1="40" x2="98" y2="30" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        <line x1="92" y1="48" x2="105" y2="45" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
        <line x1="90" y1="56" x2="101" y2="62" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
    {withSubtext && (
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
            ARF
          </span>
          <span className="text-xs font-bold tracking-wider text-[#38BDF8] uppercase">
            Creative
          </span>
        </div>
        <span className="text-[10px] text-[#94A3B8] font-medium tracking-wide">
          @arf_.creative
        </span>
      </div>
    )}
  </div>
);

/* =========================================================================
   3D VOLUMETRIC VECTOR ICONS (GLOSS, BEVEL, SPECULAR LIGHTING & DEPTH)
   ========================================================================= */

// 1. 3D Modern Development (Stacked Isometric Glass Layers)
export const Icon3DModernDev = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="mdTop" x1="16" y1="12" x2="48" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="mdLeft" x1="12" y1="26" x2="32" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0369A1" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="mdRight" x1="32" y1="26" x2="52" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#0369A1" />
      </linearGradient>
      <linearGradient id="mdGlow" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7DD3FC" stopOpacity="0.8" />
        <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
      </linearGradient>
      <filter id="mdShadow" x="4" y="8" width="56" height="52" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0284C7" floodOpacity="0.45" />
      </filter>
    </defs>
    {/* Bottom Layer */}
    <g opacity="0.6">
      <path d="M32 44L14 34L32 24L50 34L32 44Z" fill="#0C4A6E" />
      <path d="M14 34L32 44V49L14 39V34Z" fill="#082F49" />
      <path d="M32 44L50 34V39L32 49V44Z" fill="#075985" />
    </g>
    {/* Middle Layer */}
    <g opacity="0.85">
      <path d="M32 35L14 25L32 15L50 25L32 35Z" fill="url(#mdRight)" />
      <path d="M14 25L32 35V40L14 30V25Z" fill="url(#mdLeft)" />
      <path d="M32 35L50 25V30L32 40V35Z" fill="#0284C7" />
    </g>
    {/* Top Floating Glass Layer with 3D Shadow */}
    <g filter="url(#mdShadow)">
      <path d="M32 24L14 14L32 4L50 14L32 24Z" fill="url(#mdTop)" />
      <path d="M14 14L32 24V28L14 18V14Z" fill="url(#mdLeft)" />
      <path d="M32 24L50 14V18L32 28V24Z" fill="url(#mdRight)" />
      {/* Specular Highlight Sheen */}
      <path d="M32 5L47 13.5L32 21.5L17 13.5L32 5Z" stroke="#BAE6FD" strokeWidth="1.2" strokeOpacity="0.75" />
      <circle cx="32" cy="14" r="3.5" fill="#FFFFFF" />
      <circle cx="32" cy="14" r="2" fill="#38BDF8" />
    </g>
  </svg>
);

// 2. 3D Project Focused (Isometric Bullseye Target with Depth & Specular Core)
export const Icon3DProjectFocused = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="pfOuter" x1="12" y1="8" x2="52" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="pfInner" x1="20" y1="16" x2="44" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
      <linearGradient id="pfCore" x1="26" y1="22" x2="38" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.4" stopColor="#93C5FD" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
      <filter id="pfShadow" x="6" y="6" width="52" height="52" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#2563EB" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#pfShadow)">
      {/* Outer 3D Disc Rim */}
      <ellipse cx="32" cy="35" rx="24" ry="18" fill="#1E3A8A" />
      <ellipse cx="32" cy="31" rx="24" ry="18" fill="url(#pfOuter)" />
      <ellipse cx="32" cy="30" rx="23" ry="17" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.6" />
      {/* Mid Ring */}
      <ellipse cx="32" cy="33" rx="17" ry="12.5" fill="#172554" />
      <ellipse cx="32" cy="30" rx="17" ry="12.5" fill="url(#pfInner)" />
      {/* Inner Ring */}
      <ellipse cx="32" cy="31" rx="10" ry="7.5" fill="#1E3A8A" />
      <ellipse cx="32" cy="29" rx="10" ry="7.5" fill="#1E40AF" />
      {/* 3D Sphere Bullseye Core */}
      <ellipse cx="32" cy="28" rx="6" ry="5" fill="url(#pfCore)" />
      <circle cx="30.5" cy="26" r="1.5" fill="#FFFFFF" />
      {/* 3D Dart/Crosshair Ray */}
      <path d="M48 10L35 24L37 26L50 12Z" fill="#FBBF24" />
      <polygon points="50,12 55,7 48,10" fill="#F59E0B" />
      <polygon points="50,12 45,17 48,10" fill="#D97706" />
      <circle cx="34" cy="25" r="2.5" fill="#F59E0B" />
      <circle cx="33.5" cy="24.5" r="1" fill="#FFFFFF" />
    </g>
  </svg>
);

// 3. 3D Responsive Design (Volumetric Curved Smartphone & Laptop Display)
export const Icon3DResponsive = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="rpLaptopScreen" x1="12" y1="14" x2="44" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4338CA" />
        <stop offset="1" stopColor="#1E1B4B" />
      </linearGradient>
      <linearGradient id="rpPhoneBody" x1="34" y1="20" x2="56" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#818CF8" />
        <stop offset="1" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="rpPhoneScreen" x1="36" y1="24" x2="54" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <filter id="rpShadow" x="6" y="8" width="52" height="52" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#4F46E5" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#rpShadow)">
      {/* Laptop Screen Frame in Background */}
      <rect x="10" y="14" width="34" height="23" rx="3" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1.2" />
      <rect x="12" y="16" width="30" height="19" rx="1.5" fill="url(#rpLaptopScreen)" />
      {/* Laptop Display Content Lines */}
      <rect x="15" y="19" width="12" height="2" rx="1" fill="#A5B4FC" opacity="0.9" />
      <rect x="15" y="23" width="20" height="1.5" rx="0.75" fill="#818CF8" opacity="0.6" />
      <rect x="15" y="26" width="16" height="1.5" rx="0.75" fill="#818CF8" opacity="0.6" />
      {/* Laptop Base */}
      <path d="M6 37L10 37H44L48 37C49 37 50 38 49 39L46 41H8L5 39C4 38 5 37 6 37Z" fill="#312E81" stroke="#4338CA" strokeWidth="0.8" />
      
      {/* Floating 3D Curved Smartphone in Foreground */}
      <g transform="translate(4, 2)">
        <rect x="33" y="19" width="18" height="32" rx="4" fill="#0F172A" stroke="#818CF8" strokeWidth="1.5" />
        <rect x="34.5" y="21" width="15" height="28" rx="2.5" fill="url(#rpPhoneScreen)" />
        {/* Phone Glass Specular Highlight */}
        <path d="M35 22L48 35V23C48 22.4 47.6 22 47 22H35Z" fill="#FFFFFF" fillOpacity="0.25" />
        {/* Notch / Speaker */}
        <circle cx="42" cy="23" r="0.8" fill="#FFFFFF" opacity="0.8" />
        {/* Home Bar */}
        <rect x="39" y="46.5" width="6" height="1" rx="0.5" fill="#FFFFFF" opacity="0.9" />
      </g>
    </g>
  </svg>
);

// 4. 3D Technical Support (Cybernetic Metallic Gear & Glowing Chrome Wrench)
export const Icon3DTechSupport = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="tsGear" x1="14" y1="12" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#6B21A8" />
      </linearGradient>
      <linearGradient id="tsWrench" x1="20" y1="16" x2="52" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5D0FE" />
        <stop offset="0.3" stopColor="#C084FC" />
        <stop offset="1" stopColor="#7E22CE" />
      </linearGradient>
      <filter id="tsShadow" x="6" y="6" width="52" height="52" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#9333EA" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#tsShadow)">
      {/* 3D Gear */}
      <g transform="translate(2, 2)">
        <circle cx="28" cy="28" r="16" fill="url(#tsGear)" />
        {/* Gear Teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
          <rect
            key={i}
            x="25.5"
            y="9"
            width="5"
            height="5"
            rx="1"
            fill="#C084FC"
            transform={`rotate(${ang} 28 28)`}
          />
        ))}
        <circle cx="28" cy="28" r="9" fill="#3B0764" />
        <circle cx="28" cy="28" r="8" fill="#581C87" />
        <circle cx="28" cy="28" r="5" fill="#2E1065" />
      </g>
      {/* 3D Diagonal Wrench with Chrome Highlights */}
      <g transform="rotate(-15 32 32)">
        <path
          d="M38 12C35 12 33 14 33 17C33 18.2 33.4 19.3 34.1 20.2L20.5 33.8C19.7 33.3 18.7 33 17.5 33C14.5 33 12 35.5 12 38.5C12 41.5 14.5 44 17.5 44C20.5 44 23 41.5 23 38.5C23 37.3 22.7 36.3 22.2 35.5L35.8 21.9C36.7 22.6 37.8 23 39 23C42 23 44.5 20.5 44.5 17.5C44.5 15.5 43.5 13.8 42 12.8L39 16.5L36 14.5L38 12Z"
          fill="url(#tsWrench)"
          stroke="#FAF5FF"
          strokeWidth="0.8"
        />
        <circle cx="17.5" cy="38.5" r="2.2" fill="#3B0764" />
        {/* Specular Glint */}
        <circle cx="36" cy="18" r="1.5" fill="#FFFFFF" />
      </g>
    </g>
  </svg>
);

// 5. 3D WhatsApp Icon (Volumetric Glossy Emerald Squircle)
export const Icon3DWhatsapp = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="waBody" x1="12" y1="8" x2="52" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34D399" />
        <stop offset="0.4" stopColor="#10B981" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="waBevel" x1="14" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A7F3D0" />
        <stop offset="1" stopColor="#065F46" />
      </linearGradient>
      <filter id="waShadow" x="4" y="6" width="56" height="56" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#10B981" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#waShadow)">
      {/* 3D Base Squircle */}
      <rect x="8" y="10" width="48" height="48" rx="16" fill="#064E3B" />
      <rect x="8" y="8" width="48" height="48" rx="16" fill="url(#waBody)" />
      {/* Inner Rim Highlight */}
      <rect x="9.5" y="9.5" width="45" height="45" rx="14.5" stroke="url(#waBevel)" strokeWidth="1.2" strokeOpacity="0.8" />
      {/* Glass Top Curve Sheen */}
      <path d="M12 20C12 14.5 16.5 10 22 10H42C47.5 10 52 14.5 52 20C40 28 24 28 12 20Z" fill="#FFFFFF" fillOpacity="0.3" />
      {/* 3D Chat Bubble & Phone */}
      <g transform="translate(17, 17)">
        {/* Bubble Tail */}
        <path d="M6 25L7.5 19C4.5 16 3.5 11.5 5.5 7.5C7.5 3.5 12 1.5 16.5 2C22 2.5 26.5 7 26.5 12.5C26.5 18 22 22.5 16.5 22.5C14.5 22.5 12.5 22 11 21L6 25Z" fill="#047857" opacity="0.3" transform="translate(0, 1.5)" />
        <path d="M6 25L7.5 19C4.5 16 3.5 11.5 5.5 7.5C7.5 3.5 12 1.5 16.5 2C22 2.5 26.5 7 26.5 12.5C26.5 18 22 22.5 16.5 22.5C14.5 22.5 12.5 22 11 21L6 25Z" fill="#FFFFFF" />
        {/* Green Phone Glyph Inside */}
        <path d="M11 9C10.5 8 11.5 7 12.5 7C13 7 13.5 7.5 14 8.5C14.3 9.2 13.7 10 13.5 10.5C14 11.5 15 12.5 16 13C16.5 12.8 17.3 12.2 18 12.5C19 13 19.5 13.5 19.5 14C19.5 15 18.5 16 17.5 15.5C15 15 12.5 12.5 12 10C11.8 9.5 11.2 9.5 11 9Z" fill="#059669" />
      </g>
    </g>
  </svg>
);

// 6. 3D Instagram Icon (Sunset Gradient Squircle with Glossy Camera Lens)
export const Icon3DInstagram = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="igBody" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="0.25" stopColor="#F43F5E" />
        <stop offset="0.65" stopColor="#D946EF" />
        <stop offset="1" stopColor="#4F46E5" />
      </linearGradient>
      <filter id="igShadow" x="4" y="6" width="56" height="56" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#E11D48" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#igShadow)">
      {/* 3D Base Squircle */}
      <rect x="8" y="10" width="48" height="48" rx="16" fill="#4C0519" />
      <rect x="8" y="8" width="48" height="48" rx="16" fill="url(#igBody)" />
      {/* Top Glass Curve */}
      <path d="M12 20C12 14.5 16.5 10 22 10H42C47.5 10 52 14.5 52 20C40 28 24 28 12 20Z" fill="#FFFFFF" fillOpacity="0.32" />
      {/* Inner Camera Outline */}
      <rect x="18" y="18" width="28" height="28" rx="8" stroke="#FFFFFF" strokeWidth="3" />
      {/* 3D Lens Ring */}
      <circle cx="32" cy="32" r="7" stroke="#FFFFFF" strokeWidth="3" />
      <circle cx="32" cy="32" r="3.5" fill="#FFFFFF" fillOpacity="0.3" />
      {/* Flash Dot */}
      <circle cx="39.5" cy="24.5" r="2" fill="#FFFFFF" />
    </g>
  </svg>
);

// 7. 3D GitHub Icon (Obsidian Titanium Squircle with Chrome Rim Lighting)
export const Icon3DGithub = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ghBody" x1="12" y1="8" x2="52" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#334155" />
        <stop offset="0.5" stopColor="#1E293B" />
        <stop offset="1" stopColor="#0F172A" />
      </linearGradient>
      <filter id="ghShadow" x="4" y="6" width="56" height="56" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.7" />
      </filter>
    </defs>
    <g filter="url(#ghShadow)">
      {/* 3D Dark Squircle */}
      <rect x="8" y="10" width="48" height="48" rx="16" fill="#020617" />
      <rect x="8" y="8" width="48" height="48" rx="16" fill="url(#ghBody)" />
      {/* Bevel Rim */}
      <rect x="9.5" y="9.5" width="45" height="45" rx="14.5" stroke="#64748B" strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Top Glass Curve */}
      <path d="M12 20C12 14.5 16.5 10 22 10H42C47.5 10 52 14.5 52 20C40 28 24 28 12 20Z" fill="#FFFFFF" fillOpacity="0.2" />
      {/* Chrome Octocat Silhouette */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 18C23.7 18 17 24.7 17 33C17 39.6 21.3 45.2 27.2 47.2C28 47.3 28.3 46.8 28.3 46.4C28.3 46 28.3 44.7 28.3 43.2C24.1 44.1 23.2 41.2 23.2 41.2C22.5 39.5 21.6 39 21.6 39C20.3 38.1 21.7 38.1 21.7 38.1C23.2 38.2 24 39.6 24 39.6C25.3 41.8 27.4 41.2 28.2 40.8C28.3 39.9 28.7 39.2 29.1 38.8C25.8 38.4 22.3 37.1 22.3 31.4C22.3 29.8 22.9 28.5 23.8 27.4C23.7 27 23.2 25.4 24 23.4C24 23.4 25.3 23 28.2 25C29.4 24.7 30.7 24.5 32 24.5C33.3 24.5 34.6 24.7 35.8 25C38.7 23 40 23.4 40 23.4C40.8 25.4 40.3 27 40.2 27.4C41.1 28.5 41.7 29.8 41.7 31.4C41.7 37.2 38.2 38.4 34.9 38.8C35.4 39.3 35.9 40.2 35.9 41.6C35.9 43.6 35.9 45.2 35.9 45.7C35.9 46.1 36.2 46.6 37 46.4C42.9 44.4 47.2 38.8 47.2 32.2C47 24.7 40.3 18 32 18Z"
        fill="#F8FAFC"
      />
    </g>
  </svg>
);

// 8. 3D Email / Message Icon (Volumetric Floating Envelope with Cyan/Gold Sheen)
export const Icon3DMail = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="mlBody" x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="0.5" stopColor="#D97706" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
      <filter id="mlShadow" x="4" y="6" width="56" height="56" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#D97706" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#mlShadow)">
      {/* 3D Squircle Base */}
      <rect x="8" y="10" width="48" height="48" rx="16" fill="#78350F" />
      <rect x="8" y="8" width="48" height="48" rx="16" fill="url(#mlBody)" />
      {/* Top Glass Curve */}
      <path d="M12 20C12 14.5 16.5 10 22 10H42C47.5 10 52 14.5 52 20C40 28 24 28 12 20Z" fill="#FFFFFF" fillOpacity="0.3" />
      {/* Floating 3D Envelope */}
      <g transform="translate(16, 20)">
        <rect x="0" y="3" width="32" height="20" rx="3" fill="#FFFBEB" />
        {/* Envelope Flap Lines */}
        <path d="M1 4L16 15L31 4" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1 21L12 11" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 21L20 11" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
        {/* Floating Notification Dot */}
        <circle cx="28" cy="4" r="3.5" fill="#EF4444" />
        <circle cx="27.5" cy="3.5" r="1" fill="#FFFFFF" />
      </g>
    </g>
  </svg>
);


