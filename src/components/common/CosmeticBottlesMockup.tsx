import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, CheckCircle2, FlaskConical } from 'lucide-react';

export const CosmeticBottlesMockup: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeBottle, setActiveBottle] = useState<string | null>(null);

  const floatingBadges = [
    {
      icon: Sparkles,
      title: 'Low MOQ: 1,000 Pcs',
      desc: 'Flexible batch scales',
      color: 'bg-white/95 text-stone-900 border-stone-200 shadow-md',
      position: 'top-2 -left-4 sm:-left-8',
      delay: 0,
    },
    {
      icon: ShieldCheck,
      title: 'WHO-GMP & ISO 9001',
      desc: 'Certified cleanroom facility',
      color: 'bg-white/95 text-stone-900 border-stone-200 shadow-md',
      position: 'bottom-20 -left-2 sm:-left-6',
      delay: 0.6,
    },
    {
      icon: FlaskConical,
      title: 'In-House R&D Lab',
      desc: '2,000+ benchmark formulas',
      color: 'bg-white/95 text-stone-900 border-stone-200 shadow-md',
      position: 'top-10 -right-2 sm:-right-6',
      delay: 0.3,
    },
    {
      icon: CheckCircle2,
      title: 'Eco-Friendly Pack',
      desc: 'Airless, PCR & Glass',
      color: 'bg-white/95 text-stone-900 border-stone-200 shadow-md',
      position: 'bottom-6 -right-3 sm:-right-6',
      delay: 0.9,
    },
  ];

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Soft Glow with pulsating breathing effect */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-tr from-[#86A55B]/25 via-[#E4EEE3]/40 to-amber-100/25 rounded-full blur-3xl pointer-events-none -z-0"
      />

      {/* Floating Interactive Badges around Mockup */}
      {floatingBadges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-6, 6, -6],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 + badge.delay },
              scale: { duration: 0.6, delay: 0.2 + badge.delay },
              y: {
                duration: 4 + idx * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: badge.delay,
              },
            }}
            whileHover={{ scale: 1.08, zIndex: 30 }}
            className={`absolute ${badge.position} z-20 hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-xl border backdrop-blur-md transition-shadow ${badge.color}`}
          >
            <div className="w-7 h-7 rounded-lg bg-[#E4EEE3] flex items-center justify-center text-[#1D3C34] flex-shrink-0">
              <Icon className="w-4 h-4 text-[#708E50]" />
            </div>
            <div className="text-left">
              <p className="text-[11px] font-bold leading-tight text-stone-900">{badge.title}</p>
              <p className="text-[9px] text-stone-500 font-medium leading-none mt-0.5">{badge.desc}</p>
            </div>
          </motion.div>
        );
      })}

      {/* Floating 3D Packaging Mockup */}
      <motion.div
        animate={{
          y: [-7, 7, -7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        className="w-full relative z-10"
      >
        <svg
          viewBox="0 0 540 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[500px] drop-shadow-2xl"
        >
          <defs>
            {/* Gold metallic cap gradients */}
            <linearGradient id="goldCap" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C99E5C" />
              <stop offset="25%" stopColor="#EAD29C" />
              <stop offset="50%" stopColor="#FFF2D6" />
              <stop offset="75%" stopColor="#DFBD89" />
              <stop offset="100%" stopColor="#B0833F" />
            </linearGradient>

            {/* Luxury ivory bottle body gradient with soft 3D curvature */}
            <linearGradient id="ivoryBottle" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E8E1D3" />
              <stop offset="15%" stopColor="#F5F0E6" />
              <stop offset="45%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#FAF7F0" />
              <stop offset="100%" stopColor="#E2DAD0" />
            </linearGradient>

            {/* Amber Glass Gradient for luxury serum dropper */}
            <linearGradient id="amberBottle" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6E3A1A" />
              <stop offset="25%" stopColor="#B3622A" />
              <stop offset="50%" stopColor="#D98236" />
              <stop offset="75%" stopColor="#9C4E1E" />
              <stop offset="100%" stopColor="#572B11" />
            </linearGradient>

            {/* Frosted clear glass gradient */}
            <linearGradient id="frostedGlass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E6EDED" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#F4F8F8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#D8E5E5" stopOpacity="0.85" />
            </linearGradient>

            {/* Drop shadow filter */}
            <filter id="bottleShadow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#0F2B28" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* Ground Floor Shadow */}
          <ellipse cx="270" cy="460" rx="230" ry="16" fill="#1C3835" opacity="0.12" />

          {/* 1. Tall Center-Left Bottle with Gold Pump (Body Lotion) */}
          <g filter="url(#bottleShadow)" className="cursor-pointer group" onMouseEnter={() => setActiveBottle('Body Lotion')}>
            <path
              d="M170 230 C170 195 190 180 220 180 L230 180 C260 180 280 195 280 230 L280 435 C280 445 272 450 260 450 L190 450 C178 450 170 445 170 435 Z"
              fill="url(#ivoryBottle)"
            />
            {/* Specular sheen line */}
            <path
              d="M190 220 L190 435"
              stroke="#FFFFFF"
              strokeWidth="4"
              opacity="0.65"
              strokeLinecap="round"
            />
            {/* Gold Neck Collar */}
            <rect x="210" y="158" width="30" height="22" rx="2" fill="url(#goldCap)" />
            {/* Gold Pump Head */}
            <path d="M225 158 V135 H200 C195 135 190 140 190 148 H185 V130 H235 V158 Z" fill="url(#goldCap)" />
            {/* "YOUR BRAND'S HERE" Label */}
            <text x="225" y="275" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="10.5" letterSpacing="0.08em">YOUR BRAND'S</text>
            <text x="225" y="290" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="10.5" letterSpacing="0.08em">HERE</text>
            <text x="225" y="315" textAnchor="middle" fill="#4CA6A8" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="7" letterSpacing="0.12em">BODY LOTION</text>
          </g>

          {/* 2. Left Medium Pump Bottle (Cleanser / Wash) */}
          <g filter="url(#bottleShadow)" className="cursor-pointer group" onMouseEnter={() => setActiveBottle('Face Cleanser')}>
            <path
              d="M90 280 C90 250 102 240 125 240 L135 240 C158 240 170 250 170 280 L170 430 C170 440 162 445 150 445 L110 445 C98 445 90 440 90 430 Z"
              fill="url(#ivoryBottle)"
            />
            <rect x="118" y="222" width="24" height="18" rx="2" fill="url(#goldCap)" />
            <path d="M130 222 V200 H105 C100 200 95 205 95 212 H90 V195 H138 V222 Z" fill="url(#goldCap)" />
            <text x="130" y="325" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.06em">YOUR BRAND'S</text>
            <text x="130" y="338" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.06em">HERE</text>
            <text x="130" y="358" textAnchor="middle" fill="#4CA6A8" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.1em">CLEANSER</text>
          </g>

          {/* 3. Tall Center-Right Airless Acrylic Cylinder */}
          <g filter="url(#bottleShadow)" className="cursor-pointer group" onMouseEnter={() => setActiveBottle('Airless Serum')}>
            <rect x="290" y="190" width="95" height="255" rx="14" fill="url(#ivoryBottle)" />
            {/* Clear transparent cap top */}
            <path d="M292 190 C292 150 300 140 337 140 C374 140 383 150 383 190 Z" fill="url(#frostedGlass)" stroke="#D0DEDF" strokeWidth="1" />
            {/* Inner gold pump mechanism visible inside clear cap */}
            <rect x="325" y="165" width="24" height="25" rx="3" fill="url(#goldCap)" />
            <rect x="290" y="190" width="95" height="10" fill="url(#goldCap)" />
            <text x="337" y="260" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="10.5" letterSpacing="0.08em">YOUR BRAND'S</text>
            <text x="337" y="275" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="10.5" letterSpacing="0.08em">HERE</text>
            <text x="337" y="298" textAnchor="middle" fill="#4CA6A8" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="7" letterSpacing="0.12em">DERMA ESSENCE</text>
          </g>

          {/* 4. Front Pipette Dropper Bottle (Amber Face Serum) */}
          <g filter="url(#bottleShadow)" className="cursor-pointer group" onMouseEnter={() => setActiveBottle('Vitamin C Serum')}>
            <rect x="150" y="350" width="64" height="102" rx="12" fill="url(#amberBottle)" />
            {/* Gold Collar */}
            <rect x="169" y="330" width="26" height="20" rx="3" fill="url(#goldCap)" />
            {/* Rubber dropper bulb */}
            <path d="M174 330 C174 316 180 308 182 308 C184 308 190 316 190 330 Z" fill="#FFFFFF" stroke="#DFD5C8" strokeWidth="1.2" />
            <text x="182" y="398" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.06em">YOUR BRAND'S</text>
            <text x="182" y="410" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.06em">HERE</text>
            <text x="182" y="428" textAnchor="middle" fill="#FDE68A" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="6" letterSpacing="0.1em">FACE SERUM</text>
          </g>

          {/* 5. Front Small Cream Jar with Gold Cap */}
          <g filter="url(#bottleShadow)" className="cursor-pointer group" onMouseEnter={() => setActiveBottle('Peptide Cream Jar')}>
            <rect x="225" y="380" width="70" height="72" rx="8" fill="url(#ivoryBottle)" />
            <rect x="233" y="348" width="54" height="32" rx="4" fill="url(#goldCap)" />
            <text x="260" y="415" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.06em">YOUR BRAND'S</text>
            <text x="260" y="427" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.06em">HERE</text>
            <text x="260" y="442" textAnchor="middle" fill="#4CA6A8" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.1em">CREAM JAR</text>
          </g>

          {/* 6. Far-Right Slender Eye/Face Cosmetic Squeeze Tube */}
          <g filter="url(#bottleShadow)" className="cursor-pointer group" onMouseEnter={() => setActiveBottle('Squeeze Tube')}>
            <path
              d="M395 240 L440 240 L430 420 L405 420 Z"
              fill="url(#ivoryBottle)"
            />
            <rect x="402" y="420" width="31" height="30" rx="3" fill="url(#goldCap)" />
            <text x="417" y="300" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.05em">YOUR BRAND'S</text>
            <text x="417" y="312" textAnchor="middle" fill="#1C1917" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.05em">HERE</text>
            <text x="417" y="332" textAnchor="middle" fill="#4CA6A8" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="5.5" letterSpacing="0.1em">TUBE 100ML</text>
          </g>
        </svg>

        {/* Active Bottle Quick Inspector Note */}
        {activeBottle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-stone-900/90 backdrop-blur-md text-white text-xs font-medium shadow-lg"
          >
            Customizable Packaging: <span className="text-[#86A55B] font-bold">{activeBottle}</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
