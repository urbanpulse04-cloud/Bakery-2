/* ============================================================
   BLISSFUL BITEE — cake-illustrations.js
   Inline SVG illustrations per cake. Colours from CSS vars.
   ============================================================ */

'use strict';

// Common building blocks
function plate() {
  return `
    <ellipse cx="200" cy="285" rx="155" ry="12" fill="#000" opacity=".08"/>
    <ellipse cx="200" cy="280" rx="150" ry="14" fill="#fffcfa" stroke="#e8d5a3" stroke-width="2"/>
    <ellipse cx="200" cy="275" rx="135" ry="9" fill="#fdf6ee"/>`;
}

function decorations(emoji, count = 5) {
  let s = '';
  for (let i = 0; i < count; i++) {
    const x = 130 + (i * 35);
    const y = 90 - (i % 2) * 6;
    s += `<text x="${x}" y="${y}" font-size="22" text-anchor="middle">${emoji}</text>`;
  }
  return s;
}

// Each illustration: cake on plate, distinct colour story + decoration
const ILLUSTRATIONS = {
  'red-velvet': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Red Velvet Cake illustration">
  <defs>
    <linearGradient id="rv1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#b8202b"/><stop offset="1" stop-color="#7a0d18"/>
    </linearGradient>
    <linearGradient id="rv2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fff7ee"/><stop offset="1" stop-color="#f5e8d2"/>
    </linearGradient>
  </defs>
  ${plate()}
  <!-- Cake body -->
  <rect x="90" y="180" width="220" height="95" rx="4" fill="url(#rv1)"/>
  <rect x="90" y="160" width="220" height="22" fill="url(#rv2)"/>
  <rect x="90" y="135" width="220" height="28" fill="url(#rv1)"/>
  <rect x="90" y="115" width="220" height="22" fill="url(#rv2)"/>
  <rect x="90" y="90" width="220" height="28" fill="url(#rv1)"/>
  <!-- Top frosting -->
  <path d="M90 90 Q200 60 310 90 L310 95 L90 95 Z" fill="url(#rv2)"/>
  <!-- Roses on top -->
  <circle cx="135" cy="78" r="14" fill="#fff7ee"/>
  <circle cx="135" cy="78" r="8" fill="#f5d6da"/>
  <circle cx="135" cy="78" r="4" fill="#e8a4ab"/>
  <circle cx="200" cy="68" r="16" fill="#fff7ee"/>
  <circle cx="200" cy="68" r="10" fill="#f5d6da"/>
  <circle cx="200" cy="68" r="5" fill="#e8a4ab"/>
  <circle cx="265" cy="78" r="14" fill="#fff7ee"/>
  <circle cx="265" cy="78" r="8" fill="#f5d6da"/>
  <circle cx="265" cy="78" r="4" fill="#e8a4ab"/>
  <!-- Cake crumbs -->
  <circle cx="170" cy="92" r="2" fill="#7a0d18"/>
  <circle cx="230" cy="94" r="2" fill="#7a0d18"/>
  <!-- Sparkles -->
  <text x="60" y="60" font-size="20" fill="#c9a55a">✦</text>
  <text x="340" y="50" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="200" font-size="14" fill="#e8a4ab">♡</text>
</svg>`,

  'chocolate-fudge': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Chocolate Fudge Cake illustration">
  <defs>
    <linearGradient id="cf1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#5a2810"/><stop offset="1" stop-color="#2d1002"/>
    </linearGradient>
    <linearGradient id="cf2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#7b3f1c"/><stop offset="1" stop-color="#3d1f0a"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="95" y="170" width="210" height="105" rx="3" fill="url(#cf2)"/>
  <rect x="95" y="155" width="210" height="20" fill="url(#cf1)"/>
  <rect x="95" y="125" width="210" height="32" fill="url(#cf2)"/>
  <rect x="95" y="110" width="210" height="20" fill="url(#cf1)"/>
  <rect x="95" y="85" width="210" height="28" fill="url(#cf2)"/>
  <!-- Drippy ganache top -->
  <path d="M95 85 Q100 70 110 78 Q120 65 135 76 Q150 65 165 78 Q180 65 200 75 Q220 65 235 78 Q250 65 265 76 Q280 65 290 78 Q300 70 305 85 L305 100 Q295 110 285 100 Q270 115 255 100 Q240 115 220 100 Q200 115 180 100 Q160 115 145 100 Q130 115 115 100 Q105 110 95 100 Z" fill="#3d1f0a"/>
  <!-- Chocolate curls -->
  <ellipse cx="160" cy="80" rx="8" ry="4" fill="#a07c35"/>
  <ellipse cx="200" cy="74" rx="10" ry="5" fill="#a07c35"/>
  <ellipse cx="240" cy="80" rx="8" ry="4" fill="#a07c35"/>
  <!-- Cherry -->
  <circle cx="200" cy="63" r="9" fill="#b8202b"/>
  <circle cx="197" cy="60" r="3" fill="#e8a4ab" opacity=".5"/>
  <path d="M200 54 Q205 48 210 50" stroke="#4a8b3a" stroke-width="2" fill="none"/>
  <!-- Sparkles -->
  <text x="60" y="70" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="55" font-size="20" fill="#c9a55a">✦</text>
</svg>`,

  'lotus': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Lotus Biscoff Cake illustration">
  <defs>
    <linearGradient id="lt1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#e8c98a"/><stop offset="1" stop-color="#c9a55a"/>
    </linearGradient>
    <linearGradient id="lt2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fff8e8"/><stop offset="1" stop-color="#f5ead8"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#lt1)"/>
  <rect x="90" y="155" width="220" height="22" fill="url(#lt2)"/>
  <rect x="90" y="125" width="220" height="32" fill="url(#lt1)"/>
  <rect x="90" y="105" width="220" height="22" fill="url(#lt2)"/>
  <rect x="90" y="80" width="220" height="28" fill="url(#lt1)"/>
  <!-- Caramel drip -->
  <path d="M90 80 Q105 70 120 78 Q140 65 160 75 Q180 65 200 78 Q220 65 240 75 Q260 65 280 78 Q295 70 310 80 L310 100 Q300 110 290 100 Q275 115 255 100 Q235 115 215 100 Q195 115 175 100 Q155 115 135 100 Q120 110 105 100 Q95 110 90 100 Z" fill="#a07c35"/>
  <!-- Lotus biscoff cookies on top -->
  <rect x="130" y="62" width="34" height="22" rx="3" fill="#a07c35"/>
  <rect x="135" y="65" width="24" height="3" fill="#7a5c5a" opacity=".4"/>
  <rect x="135" y="71" width="20" height="3" fill="#7a5c5a" opacity=".4"/>
  <rect x="135" y="77" width="22" height="3" fill="#7a5c5a" opacity=".4"/>
  <rect x="183" y="58" width="34" height="22" rx="3" fill="#a07c35"/>
  <rect x="188" y="61" width="24" height="3" fill="#7a5c5a" opacity=".4"/>
  <rect x="188" y="67" width="20" height="3" fill="#7a5c5a" opacity=".4"/>
  <rect x="188" y="73" width="22" height="3" fill="#7a5c5a" opacity=".4"/>
  <rect x="236" y="62" width="34" height="22" rx="3" fill="#a07c35"/>
  <rect x="241" y="65" width="24" height="3" fill="#7a5c5a" opacity=".4"/>
  <rect x="241" y="71" width="20" height="3" fill="#7a5c5a" opacity=".4"/>
  <rect x="241" y="77" width="22" height="3" fill="#7a5c5a" opacity=".4"/>
  <!-- Crumbs -->
  <circle cx="170" cy="100" r="1.5" fill="#a07c35"/>
  <circle cx="220" cy="100" r="1.5" fill="#a07c35"/>
  <text x="55" y="65" font-size="18" fill="#c9a55a">✦</text>
  <text x="345" y="50" font-size="22" fill="#c9a55a">✨</text>
</svg>`,

  'three-milk': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Three Milk Cake illustration">
  <defs>
    <linearGradient id="tm1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#f5ead8"/>
    </linearGradient>
    <linearGradient id="tm2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fff8e8"/><stop offset="1" stop-color="#e8d5a3"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#tm1)"/>
  <rect x="90" y="155" width="220" height="22" fill="url(#tm2)"/>
  <rect x="90" y="125" width="220" height="32" fill="url(#tm1)"/>
  <rect x="90" y="105" width="220" height="22" fill="url(#tm2)"/>
  <rect x="90" y="80" width="220" height="28" fill="url(#tm1)"/>
  <!-- Whipped cream top -->
  <path d="M90 80 Q100 45 130 65 Q160 30 200 60 Q240 30 270 65 Q300 45 310 80 Z" fill="#fffcfa"/>
  <!-- Cinnamon dust dots -->
  <circle cx="120" cy="65" r="1.5" fill="#a07c35"/>
  <circle cx="155" cy="55" r="1.5" fill="#a07c35"/>
  <circle cx="180" cy="48" r="1.5" fill="#a07c35"/>
  <circle cx="215" cy="50" r="1.5" fill="#a07c35"/>
  <circle cx="245" cy="58" r="1.5" fill="#a07c35"/>
  <circle cx="275" cy="65" r="1.5" fill="#a07c35"/>
  <circle cx="200" cy="40" r="2" fill="#a07c35"/>
  <!-- Milk drops on side -->
  <ellipse cx="100" cy="220" rx="8" ry="14" fill="#fffcfa" opacity=".7"/>
  <ellipse cx="300" cy="240" rx="8" ry="14" fill="#fffcfa" opacity=".7"/>
  <text x="55" y="60" font-size="18" fill="#c9a55a">✦</text>
  <text x="345" y="55" font-size="20" fill="#c9a55a">✦</text>
  <text x="345" y="200" font-size="14" fill="#c9a55a">~</text>
</svg>`,

  'chocolate-cream': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Chocolate Cream Cake illustration">
  <defs>
    <linearGradient id="cc1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#7b3f1c"/><stop offset="1" stop-color="#4a2010"/>
    </linearGradient>
    <linearGradient id="cc2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#f5ead8"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#cc1)"/>
  <rect x="90" y="150" width="220" height="28" fill="url(#cc2)"/>
  <rect x="90" y="120" width="220" height="32" fill="url(#cc1)"/>
  <rect x="90" y="95" width="220" height="28" fill="url(#cc2)"/>
  <!-- Whipped cream swirl top -->
  <path d="M90 95 Q140 65 200 80 Q260 65 310 95 L310 100 L90 100 Z" fill="#fffcfa"/>
  <circle cx="140" cy="78" r="12" fill="#fffcfa"/>
  <circle cx="200" cy="68" r="14" fill="#fffcfa"/>
  <circle cx="260" cy="78" r="12" fill="#fffcfa"/>
  <!-- Chocolate drizzle -->
  <path d="M125 75 Q145 85 165 75" stroke="#3d1f0a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M185 65 Q205 75 225 65" stroke="#3d1f0a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M245 75 Q265 85 285 75" stroke="#3d1f0a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="60" y="65" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="55" font-size="18" fill="#c9a55a">✦</text>
</svg>`,

  'caramel': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Caramel Cake illustration">
  <defs>
    <linearGradient id="cr1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#d4a45a"/><stop offset="1" stop-color="#a07c35"/>
    </linearGradient>
    <linearGradient id="cr2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#f9ead6"/><stop offset="1" stop-color="#e8c98a"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#cr1)"/>
  <rect x="90" y="155" width="220" height="22" fill="url(#cr2)"/>
  <rect x="90" y="125" width="220" height="32" fill="url(#cr1)"/>
  <rect x="90" y="105" width="220" height="22" fill="url(#cr2)"/>
  <rect x="90" y="80" width="220" height="28" fill="url(#cr1)"/>
  <!-- Caramel drip top -->
  <path d="M90 80 Q105 65 120 75 Q140 60 160 73 Q180 60 200 75 Q220 60 240 73 Q260 60 280 75 Q295 65 310 80 L310 105 Q300 115 290 105 Q275 120 255 105 Q235 120 215 105 Q195 120 175 105 Q155 120 135 105 Q120 115 105 105 Q95 115 90 105 Z" fill="#7a5c2a"/>
  <!-- Salt flakes -->
  <rect x="155" y="68" width="4" height="4" fill="#fffcfa"/>
  <rect x="200" y="62" width="5" height="5" fill="#fffcfa"/>
  <rect x="240" y="68" width="4" height="4" fill="#fffcfa"/>
  <!-- Caramel pool on plate -->
  <ellipse cx="200" cy="290" rx="40" ry="4" fill="#a07c35" opacity=".4"/>
  <text x="60" y="60" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="55" font-size="18" fill="#c9a55a">✦</text>
</svg>`,

  'butterscotch': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Butterscotch Cake illustration">
  <defs>
    <linearGradient id="bs1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#e8c98a"/><stop offset="1" stop-color="#b89556"/>
    </linearGradient>
    <linearGradient id="bs2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fff8e0"/><stop offset="1" stop-color="#f9ead6"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#bs1)"/>
  <rect x="90" y="150" width="220" height="28" fill="url(#bs2)"/>
  <rect x="90" y="120" width="220" height="32" fill="url(#bs1)"/>
  <rect x="90" y="95" width="220" height="28" fill="url(#bs2)"/>
  <!-- Cream top -->
  <path d="M90 95 Q140 70 200 88 Q260 70 310 95 L310 100 L90 100 Z" fill="#fffcfa"/>
  <!-- Butterscotch shards -->
  <polygon points="135,75 150,55 155,80" fill="#a07c35"/>
  <polygon points="190,68 205,48 215,72" fill="#a07c35"/>
  <polygon points="245,75 260,55 265,80" fill="#a07c35"/>
  <!-- Crunchy bits -->
  <circle cx="120" cy="82" r="2" fill="#7a5c2a"/>
  <circle cx="170" cy="82" r="2" fill="#7a5c2a"/>
  <circle cx="230" cy="82" r="2" fill="#7a5c2a"/>
  <circle cx="280" cy="82" r="2" fill="#7a5c2a"/>
  <text x="60" y="60" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="55" font-size="18" fill="#c9a55a">✦</text>
</svg>`,

  'coffee': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Coffee Cake illustration">
  <defs>
    <linearGradient id="cf1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#5a3a20"/><stop offset="1" stop-color="#3d1f0a"/>
    </linearGradient>
    <linearGradient id="cf2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#d4b896"/><stop offset="1" stop-color="#a07c35"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#cf1)"/>
  <rect x="90" y="155" width="220" height="22" fill="url(#cf2)"/>
  <rect x="90" y="125" width="220" height="32" fill="url(#cf1)"/>
  <rect x="90" y="105" width="220" height="22" fill="url(#cf2)"/>
  <rect x="90" y="80" width="220" height="28" fill="url(#cf1)"/>
  <!-- Mascarpone cream top -->
  <path d="M90 80 Q120 55 150 72 Q180 50 200 70 Q220 50 250 72 Q280 55 310 80 L310 100 L90 100 Z" fill="#f5ead8"/>
  <!-- Coffee beans -->
  <ellipse cx="150" cy="68" rx="6" ry="9" fill="#3d1f0a" transform="rotate(-20 150 68)"/>
  <path d="M150 60 L150 76" stroke="#5a3a20" stroke-width="1"/>
  <ellipse cx="200" cy="58" rx="7" ry="10" fill="#3d1f0a" transform="rotate(15 200 58)"/>
  <path d="M200 49 L200 67" stroke="#5a3a20" stroke-width="1"/>
  <ellipse cx="250" cy="68" rx="6" ry="9" fill="#3d1f0a" transform="rotate(20 250 68)"/>
  <path d="M250 60 L250 76" stroke="#5a3a20" stroke-width="1"/>
  <!-- Cocoa dust -->
  <circle cx="125" cy="78" r="1.5" fill="#5a3a20"/>
  <circle cx="275" cy="78" r="1.5" fill="#5a3a20"/>
  <text x="55" y="60" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="55" font-size="18" fill="#c9a55a">✦</text>
</svg>`,

  'vanilla-pineapple': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Vanilla Pineapple Cake illustration">
  <defs>
    <linearGradient id="vp1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fff8e8"/><stop offset="1" stop-color="#f5ead8"/>
    </linearGradient>
    <linearGradient id="vp2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#e8c98a"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#vp1)"/>
  <rect x="90" y="155" width="220" height="22" fill="url(#vp2)"/>
  <rect x="90" y="125" width="220" height="32" fill="url(#vp1)"/>
  <rect x="90" y="105" width="220" height="22" fill="url(#vp2)"/>
  <rect x="90" y="80" width="220" height="28" fill="url(#vp1)"/>
  <!-- Cream top -->
  <path d="M90 80 Q150 55 200 75 Q250 55 310 80 L310 95 L90 95 Z" fill="#fffcfa"/>
  <!-- Pineapple ring -->
  <circle cx="200" cy="65" r="22" fill="#e8c98a"/>
  <circle cx="200" cy="65" r="14" fill="#fff8e8"/>
  <circle cx="200" cy="65" r="6" fill="#c9a55a"/>
  <path d="M178 65 L222 65 M200 43 L200 87 M184 49 L216 81 M216 49 L184 81" stroke="#a07c35" stroke-width="1" opacity=".5"/>
  <!-- Pineapple chunks -->
  <rect x="135" y="72" width="10" height="10" rx="2" fill="#ffe9a0"/>
  <rect x="255" y="72" width="10" height="10" rx="2" fill="#ffe9a0"/>
  <text x="55" y="55" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="55" font-size="18" fill="#c9a55a">✦</text>
</svg>`,

  'strawberry': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Strawberry Cake illustration">
  <defs>
    <linearGradient id="sb1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fdd6d8"/><stop offset="1" stop-color="#f5c6cb"/>
    </linearGradient>
    <linearGradient id="sb2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#f9ead6"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#sb1)"/>
  <rect x="90" y="155" width="220" height="22" fill="url(#sb2)"/>
  <rect x="90" y="125" width="220" height="32" fill="url(#sb1)"/>
  <rect x="90" y="105" width="220" height="22" fill="url(#sb2)"/>
  <rect x="90" y="80" width="220" height="28" fill="url(#sb1)"/>
  <!-- Cream top -->
  <path d="M90 80 Q120 60 150 72 Q180 50 200 70 Q220 50 250 72 Q280 60 310 80 L310 100 L90 100 Z" fill="#fffcfa"/>
  <!-- Strawberries -->
  <g transform="translate(140 55)">
    <path d="M0 5 Q-10 5 -8 18 Q0 28 8 18 Q10 5 0 5 Z" fill="#c0404a"/>
    <path d="M-8 5 L-2 0 L2 3 L8 0 L10 5 Z" fill="#4a8b3a"/>
    <circle cx="-3" cy="12" r=".8" fill="#fffcfa"/>
    <circle cx="3" cy="15" r=".8" fill="#fffcfa"/>
    <circle cx="0" cy="20" r=".8" fill="#fffcfa"/>
  </g>
  <g transform="translate(200 45)">
    <path d="M0 5 Q-12 5 -10 22 Q0 34 10 22 Q12 5 0 5 Z" fill="#c0404a"/>
    <path d="M-10 5 L-3 0 L3 3 L10 0 L12 5 Z" fill="#4a8b3a"/>
    <circle cx="-3" cy="14" r="1" fill="#fffcfa"/>
    <circle cx="4" cy="17" r="1" fill="#fffcfa"/>
    <circle cx="0" cy="24" r="1" fill="#fffcfa"/>
  </g>
  <g transform="translate(260 55)">
    <path d="M0 5 Q-10 5 -8 18 Q0 28 8 18 Q10 5 0 5 Z" fill="#c0404a"/>
    <path d="M-8 5 L-2 0 L2 3 L8 0 L10 5 Z" fill="#4a8b3a"/>
    <circle cx="-3" cy="12" r=".8" fill="#fffcfa"/>
    <circle cx="3" cy="15" r=".8" fill="#fffcfa"/>
  </g>
  <text x="55" y="60" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="55" font-size="18" fill="#c9a55a">✦</text>
</svg>`,

  'vanilla': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Vanilla Cake illustration">
  <defs>
    <linearGradient id="vn1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fff8e0"/><stop offset="1" stop-color="#f5ead8"/>
    </linearGradient>
    <linearGradient id="vn2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fffcfa"/><stop offset="1" stop-color="#fff8e0"/>
    </linearGradient>
  </defs>
  ${plate()}
  <rect x="90" y="175" width="220" height="100" rx="4" fill="url(#vn1)"/>
  <rect x="90" y="155" width="220" height="22" fill="url(#vn2)"/>
  <rect x="90" y="125" width="220" height="32" fill="url(#vn1)"/>
  <rect x="90" y="105" width="220" height="22" fill="url(#vn2)"/>
  <rect x="90" y="80" width="220" height="28" fill="url(#vn1)"/>
  <!-- Cream rosettes top -->
  <path d="M90 80 Q150 55 200 75 Q250 55 310 80 L310 100 L90 100 Z" fill="#fffcfa"/>
  <circle cx="135" cy="72" r="11" fill="#fffcfa" stroke="#f5ead8" stroke-width="1"/>
  <circle cx="135" cy="72" r="6" fill="#fff8e0"/>
  <circle cx="200" cy="64" r="13" fill="#fffcfa" stroke="#f5ead8" stroke-width="1"/>
  <circle cx="200" cy="64" r="7" fill="#fff8e0"/>
  <circle cx="265" cy="72" r="11" fill="#fffcfa" stroke="#f5ead8" stroke-width="1"/>
  <circle cx="265" cy="72" r="6" fill="#fff8e0"/>
  <!-- Gold dust -->
  <circle cx="170" cy="78" r="1.5" fill="#c9a55a"/>
  <circle cx="230" cy="78" r="1.5" fill="#c9a55a"/>
  <text x="55" y="55" font-size="20" fill="#c9a55a">✦</text>
  <text x="340" y="50" font-size="22" fill="#c9a55a">✨</text>
  <text x="55" y="200" font-size="14" fill="#e8a4ab">♡</text>
</svg>`,

  'bento': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Bento Cake illustration">
  <defs>
    <linearGradient id="bn1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fdd6d8"/><stop offset="1" stop-color="#f5c6cb"/>
    </linearGradient>
  </defs>
  ${plate()}
  <!-- Bento box -->
  <rect x="135" y="180" width="130" height="20" rx="3" fill="#a07c35"/>
  <rect x="130" y="190" width="140" height="80" rx="6" fill="#3d1f0a"/>
  <rect x="135" y="195" width="130" height="70" rx="4" fill="#5a3a20"/>
  <!-- Mini cake inside -->
  <rect x="148" y="140" width="104" height="55" rx="3" fill="url(#bn1)"/>
  <rect x="148" y="125" width="104" height="20" fill="#fffcfa"/>
  <rect x="148" y="105" width="104" height="22" fill="url(#bn1)"/>
  <!-- Top cream + decoration -->
  <path d="M148 105 Q170 90 200 100 Q230 90 252 105 L252 115 L148 115 Z" fill="#fffcfa"/>
  <!-- Heart writing -->
  <path d="M195 90 Q190 82 200 80 Q210 82 205 90 L200 95 Z" fill="#c0404a"/>
  <!-- Sprinkles -->
  <rect x="160" y="98" width="3" height="6" rx="1" fill="#c0404a" transform="rotate(20 160 98)"/>
  <rect x="180" y="93" width="3" height="6" rx="1" fill="#c9a55a" transform="rotate(-15 180 93)"/>
  <rect x="220" y="93" width="3" height="6" rx="1" fill="#e8a4ab" transform="rotate(25 220 93)"/>
  <rect x="240" y="98" width="3" height="6" rx="1" fill="#c9a55a" transform="rotate(-20 240 98)"/>
  <!-- Ribbon -->
  <path d="M125 220 L200 215 L275 220 L275 230 L200 225 L125 230 Z" fill="#c9a55a"/>
  <circle cx="200" cy="222" r="6" fill="#a07c35"/>
  <text x="50" y="70" font-size="16" fill="#c9a55a">✦</text>
  <text x="345" y="55" font-size="18" fill="#c9a55a">✦</text>
  <text x="60" y="180" font-size="14" fill="#e8a4ab">♡</text>
</svg>`,

  'cupcakes': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Cupcakes illustration">
  <defs>
    <linearGradient id="cp1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fdd6d8"/><stop offset="1" stop-color="#f48fb1"/>
    </linearGradient>
  </defs>
  ${plate()}
  <!-- Three cupcakes -->
  <g transform="translate(120 0)">
    <path d="M-25 280 L-30 200 L30 200 L25 280 Z" fill="#a07c35"/>
    <path d="M-30 198 L-30 195 Q-30 192 -27 192 L27 192 Q30 192 30 195 L30 198 Z" fill="#7a5c2a"/>
    <path d="M-26 200 L-22 205 M-18 200 L-14 205 M-10 200 L-6 205 M-2 200 L2 205 M6 200 L10 205 M14 200 L18 205 M22 200 L26 205" stroke="#3d1f0a" stroke-width="1" opacity=".5"/>
    <!-- Frosting swirl -->
    <path d="M-30 195 Q-30 165 -15 165 Q-15 145 0 145 Q15 145 15 165 Q30 165 30 195 Z" fill="url(#cp1)"/>
    <path d="M-20 175 Q0 165 20 175" stroke="#fffcfa" stroke-width="2" fill="none" opacity=".5"/>
    <!-- Cherry -->
    <circle cx="0" cy="142" r="5" fill="#c0404a"/>
  </g>
  <g transform="translate(200 -10)">
    <path d="M-25 290 L-30 210 L30 210 L25 290 Z" fill="#a07c35"/>
    <path d="M-30 208 L-30 205 Q-30 202 -27 202 L27 202 Q30 202 30 205 L30 208 Z" fill="#7a5c2a"/>
    <path d="M-26 210 L-22 215 M-18 210 L-14 215 M-10 210 L-6 215 M-2 210 L2 215 M6 210 L10 215 M14 210 L18 215 M22 210 L26 215" stroke="#3d1f0a" stroke-width="1" opacity=".5"/>
    <path d="M-30 205 Q-30 165 -15 165 Q-15 140 0 140 Q15 140 15 165 Q30 165 30 205 Z" fill="#fffcfa"/>
    <path d="M-20 175 Q0 165 20 175" stroke="#f5c6cb" stroke-width="2" fill="none" opacity=".7"/>
    <circle cx="0" cy="137" r="6" fill="#c0404a"/>
  </g>
  <g transform="translate(280 0)">
    <path d="M-25 280 L-30 200 L30 200 L25 280 Z" fill="#a07c35"/>
    <path d="M-30 198 L-30 195 Q-30 192 -27 192 L27 192 Q30 192 30 195 L30 198 Z" fill="#7a5c2a"/>
    <path d="M-26 200 L-22 205 M-18 200 L-14 205 M-10 200 L-6 205 M-2 200 L2 205 M6 200 L10 205 M14 200 L18 205 M22 200 L26 205" stroke="#3d1f0a" stroke-width="1" opacity=".5"/>
    <path d="M-30 195 Q-30 165 -15 165 Q-15 145 0 145 Q15 145 15 165 Q30 165 30 195 Z" fill="#c9a55a"/>
    <path d="M-20 175 Q0 165 20 175" stroke="#fffcfa" stroke-width="2" fill="none" opacity=".5"/>
    <circle cx="0" cy="142" r="5" fill="#3d1f0a"/>
  </g>
  <text x="60" y="60" font-size="18" fill="#c9a55a">✦</text>
  <text x="340" y="50" font-size="18" fill="#c9a55a">✦</text>
</svg>`,

  'custom': () => `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Custom Cake illustration">
  <defs>
    <linearGradient id="ct1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fdd6d8"/><stop offset="1" stop-color="#f5c6cb"/>
    </linearGradient>
    <linearGradient id="ct2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fff8e0"/><stop offset="1" stop-color="#e8d5a3"/>
    </linearGradient>
  </defs>
  ${plate()}
  <!-- Three-tier cake -->
  <rect x="105" y="220" width="190" height="55" rx="4" fill="url(#ct1)"/>
  <rect x="125" y="175" width="150" height="48" rx="4" fill="url(#ct2)"/>
  <rect x="145" y="135" width="110" height="42" rx="4" fill="url(#ct1)"/>
  <!-- Top tier decoration -->
  <path d="M145 135 Q155 120 170 130 Q185 115 200 128 Q215 115 230 130 Q245 120 255 135 L255 145 L145 145 Z" fill="#fffcfa"/>
  <!-- Middle tier roses -->
  <circle cx="155" cy="195" r="8" fill="#e8a4ab"/>
  <circle cx="155" cy="195" r="4" fill="#fffcfa"/>
  <circle cx="200" cy="195" r="10" fill="#e8a4ab"/>
  <circle cx="200" cy="195" r="5" fill="#fffcfa"/>
  <circle cx="245" cy="195" r="8" fill="#e8a4ab"/>
  <circle cx="245" cy="195" r="4" fill="#fffcfa"/>
  <!-- Bottom tier garland -->
  <path d="M115 245 Q140 235 165 245 Q190 235 215 245 Q240 235 265 245 Q285 235 285 250" stroke="#c9a55a" stroke-width="2" fill="none"/>
  <circle cx="140" cy="241" r="3" fill="#c9a55a"/>
  <circle cx="190" cy="241" r="3" fill="#c9a55a"/>
  <circle cx="240" cy="241" r="3" fill="#c9a55a"/>
  <!-- Topper -->
  <text x="200" y="125" font-size="20" text-anchor="middle">🎀</text>
  <!-- Sparkles -->
  <text x="50" y="50" font-size="22" fill="#c9a55a">✨</text>
  <text x="345" y="40" font-size="24" fill="#c9a55a">✨</text>
  <text x="50" y="160" font-size="16" fill="#e8a4ab">♡</text>
  <text x="345" y="170" font-size="16" fill="#e8a4ab">♡</text>
</svg>`,
};

function getCakeSvg(slug) {
  if (ILLUSTRATIONS[slug]) return ILLUSTRATIONS[slug]();
  // Fallback: gradient circle with emoji
  return `<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">${plate()}
    <text x="200" y="180" font-size="120" text-anchor="middle">🎂</text></svg>`;
}

window.getCakeSvg = getCakeSvg;
