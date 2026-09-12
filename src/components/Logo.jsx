import React from 'react';

const Logo = ({ className = "w-10 h-10", showText = false }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <defs>
        {/* Background Radial & Linear Gradients for Smoky Plum / Mauve Aura */}
        <radialGradient id="nsBgRadial" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A46888" />
          <stop offset="45%" stopColor="#7E4765" />
          <stop offset="80%" stopColor="#582943" />
          <stop offset="100%" stopColor="#3C162D" />
        </radialGradient>

        <linearGradient id="nsSmokeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#582643" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#9C6281" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#B37896" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4A1D36" stopOpacity="0.7" />
        </linearGradient>

        {/* Metallic Rose Gold Gradient */}
        <linearGradient id="nsRoseGold" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#FFF2EA" />
          <stop offset="20%" stopColor="#E8BCA4" />
          <stop offset="45%" stopColor="#C98664" />
          <stop offset="65%" stopColor="#E5B79F" />
          <stop offset="85%" stopColor="#B67351" />
          <stop offset="100%" stopColor="#E2A98D" />
        </linearGradient>

        {/* Rose Gold Shadow Gradient for 3D bevel depth */}
        <linearGradient id="nsBevelShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8C4D31" />
          <stop offset="50%" stopColor="#B87352" />
          <stop offset="100%" stopColor="#6E3821" />
        </linearGradient>

        {/* Shimmer Sparkle Filter */}
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Circular Background */}
      <circle cx="100" cy="100" r="96" fill="url(#nsBgRadial)" />

      {/* Soft Smoky Cloud Textures inside Circle */}
      <circle cx="100" cy="100" r="96" fill="url(#nsSmokeGrad)" />
      <ellipse cx="65" cy="110" rx="45" ry="30" fill="#9C6281" opacity="0.25" filter="url(#goldGlow)" />
      <ellipse cx="130" cy="85" rx="40" ry="35" fill="#B37998" opacity="0.2" filter="url(#goldGlow)" />

      {/* Delicate Outer Rim Highlight */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke="url(#nsRoseGold)"
        strokeWidth="1.2"
        opacity="0.4"
      />

      {/* ========================================================
          MONOGRAM GROUP (N + WOMAN'S PROFILE SILHOUETTE + S)
      ========================================================= */}
      <g filter="url(#goldGlow)">
        
        {/* --- LEFT STEM OF 'N' --- */}
        {/* Serif bottom foot */}
        <path
          d="M38 135 H54 M46 135 V58 M39 58 H49"
          stroke="url(#nsRoseGold)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Beveled Main Left Pillar of N */}
        <path
          d="M44 58 L52 58 L52 134 L44 134 Z"
          fill="url(#nsRoseGold)"
        />
        <path
          d="M44 58 L46 58 L46 134 L44 134 Z"
          fill="#FFF2EA"
          opacity="0.7"
        />
        {/* Bottom serif bracket */}
        <path
          d="M36 134 C41 134 44 134 44 130 L44 62 C44 58 41 58 36 58"
          stroke="url(#nsRoseGold)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* --- DIAGONAL OF 'N' with chiseled light/dark sides --- */}
        {/* Light upper facet of diagonal */}
        <polygon
          points="46,58 92,135 84,135 44,66"
          fill="url(#nsRoseGold)"
        />
        {/* Dark lower facet of diagonal for 3D depth */}
        <polygon
          points="51,58 96,134 91,135 46,62"
          fill="url(#nsBevelShadow)"
          opacity="0.8"
        />

        {/* --- RIGHT STEM OF 'N' & CENTRAL PROFILE MERGE --- */}
        <path
          d="M93 54 L98 54 L98 134 L93 134 Z"
          fill="url(#nsRoseGold)"
        />
        {/* Top serif of right stem */}
        <path
          d="M84 54 H106"
          stroke="url(#nsRoseGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* --- WOMAN'S FACE SILHOUETTE (Facing Left towards N diagonal) --- */}
        {/* Forehead, nose, lips, chin, jawline & neck */}
        <path
          d="M89 74
             C84 76, 80 80, 80 83
             C79 84, 76 86, 75 87
             L75 88.5
             C77 89, 78 90, 77 91.5
             C76 92.5, 78 93.5, 79 93.5
             C80 94, 78 96, 76 97
             C75 97.5, 78 100, 83 100
             C88 100, 91 103, 93 107"
          fill="none"
          stroke="url(#nsRoseGold)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* --- FLOWING HAIR STRANDS (Weaving delicately across S) --- */}
        {/* Strand 1 - Crown over face */}
        <path
          d="M72 73 C78 69, 87 63, 102 61 C115 59, 126 62, 134 67"
          fill="none"
          stroke="url(#nsRoseGold)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Strand 2 - Sweeping mid lock */}
        <path
          d="M70 78 C80 75, 93 72, 107 72 C120 72, 128 77, 136 84"
          fill="none"
          stroke="url(#nsRoseGold)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Strand 3 - Flowing wave under chin into the S body */}
        <path
          d="M82 99 C90 102, 97 106, 108 106 C124 106, 135 116, 143 118"
          fill="none"
          stroke="url(#nsRoseGold)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Strand 4 - Lower wisps */}
        <path
          d="M89 105 C96 110, 104 113, 114 113 C124 113, 131 121, 138 122"
          fill="none"
          stroke="url(#nsRoseGold)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* --- LETTER 'S' (Grand Sweeping Curves) --- */}
        {/* Upper serif head */}
        <path
          d="M140 54 H154 L154 74"
          stroke="url(#nsRoseGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Main 3D curved spine of 'S' */}
        <path
          d="M152 56
             C136 52, 114 56, 106 72
             C98 87, 115 97, 133 103
             C155 111, 160 126, 148 138
             C136 148, 112 147, 102 135"
          fill="none"
          stroke="url(#nsRoseGold)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Beveled Highlight on S */}
        <path
          d="M150 58
             C136 54, 115 58, 108 73
             C101 87, 117 96, 134 102
             C154 109, 158 124, 147 136
             C136 145, 113 145, 104 135"
          fill="none"
          stroke="#FFF2EA"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.75"
        />
        {/* Tail serif of 'S' */}
        <path
          d="M102 134 L102 124"
          stroke="url(#nsRoseGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* --- SPARKLE FLARES --- */}
        {/* Flare 1: Top left apex of N */}
        <g transform="translate(42, 56)">
          <path d="M0 -7 L0 7 M-7 0 L7 0" stroke="#FFF7F2" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
        </g>
        {/* Flare 2: Right arc of S */}
        <g transform="translate(153, 115)">
          <path d="M0 -6 L0 6 M-6 0 L6 0" stroke="#FFF7F2" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
        </g>
      </g>

      {/* ========================================================
          CURVED TEXT: "DERMATOLOGIST"
      ========================================================= */}
      <path
        id="textPathArc"
        d="M32 148 A80 80 0 0 0 168 148"
        fill="none"
      />
      <text
        fill="url(#nsRoseGold)"
        fontSize="12.5"
        fontFamily="'Plus Jakarta Sans', 'Cinzel', 'Playfair Display', Georgia, serif"
        fontWeight="700"
        letterSpacing="4.8"
      >
        <textPath href="#textPathArc" startOffset="50%" textAnchor="middle">
          DERMATOLOGIST
        </textPath>
      </text>
    </svg>
  );
};

export default Logo;
