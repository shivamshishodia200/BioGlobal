import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  HeartHandshake,
  Coins,
  Award,
  FlaskConical,
  Palette,
  Headphones,
  Microscope,
  TrendingUp,
  ShieldCheck,
  Check,
} from 'lucide-react';

import cosmeticLabImg from '../../assets/capabilities/cosmetic_lab_rd.jpg';

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const LEFT_FEATURES: FeatureItem[] = [
  {
    id: 'l1',
    title: 'More Than Manufacturing',
    desc: "We don't just produce bottles; we build lasting beauty brand equity through creative active formulations, technical guidance, and reliable execution.",
    icon: HeartHandshake,
    tag: 'Strategic Partner',
  },
  {
    id: 'l2',
    title: 'Custom Solutions for Every Budget',
    desc: 'From clinical dermatological cosmeceuticals to affordable mass-retail lines, we formulate precisely to your target margins and unit economics.',
    icon: Coins,
    tag: 'Flexible Economics',
  },
  {
    id: 'l3',
    title: '14+ Years Compounding Mastery',
    desc: 'Our veteran cosmetic chemists bring over a decade of cosmetic formulation expertise and luxury finish to every formula, bottle, and carton.',
    icon: Award,
    tag: 'Veteran Chemists',
  },
  {
    id: 'l4',
    title: 'Cutting-Edge Cleanroom Tech',
    desc: 'Automated vacuum homogenizers, micro-dosing dispensers, and sterile cleanrooms ensure batch-to-batch consistency and zero contamination.',
    icon: FlaskConical,
    tag: 'Automated Precision',
  },
];

const RIGHT_FEATURES: FeatureItem[] = [
  {
    id: 'r1',
    title: 'Tailored for Your Brand',
    desc: 'Your brand is unique. We craft distinct skin feel, bespoke botanical aromatics, and proprietary active blends that stand out in crowded markets.',
    icon: Palette,
    tag: 'Signature Textures',
  },
  {
    id: 'r2',
    title: 'Dedicated Client Service',
    desc: 'Dedicated B2B formulation managers ensure lightning-fast communication, rapid pilot sampling turnaround, and transparent logistics tracking.',
    icon: Headphones,
    tag: 'Direct Lab Access',
  },
  {
    id: 'r3',
    title: 'In-House Analytical R&D',
    desc: 'Our dedicated analytical laboratory conducts accelerated stability testing, challenge tests, viscosity checks, and raw ingredient assay testing.',
    icon: Microscope,
    tag: 'Analytical Testing',
  },
  {
    id: 'r4',
    title: 'Turnkey Regulatory & Compliance',
    desc: 'We provide comprehensive COA documentation, MSDS sheets, global export compliance dossiers, and formulation registration guidance.',
    icon: TrendingUp,
    tag: 'Export Ready',
  },
];

export const UniqueFeaturesSection: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  const bottomStats = [
    { label: 'Formulation Experience', value: '14+ Years' },
    { label: 'Facility Area', value: '60,000 Sq. Ft.' },
    { label: 'Approved Formulations', value: '1,200+' },
    { label: 'Quality Verification', value: '100% Batch Tested' },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-14 lg:mb-18 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>The BioGlobal Competitive Edge</span>
          </div>

          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
            What Makes Us Unique from Others in the Industry
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Our relentless pursuit of quality, breakthrough formulation stability, and custom compounding led by veteran cosmetic chemists defines our unparalleled standards.
          </p>
        </motion.div>

        {/* 3-Column Infographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column Features */}
          <div className="lg:col-span-4 space-y-4">
            {LEFT_FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              const isHovered = activeHighlight === feat.id;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.45 }}
                  onMouseEnter={() => setActiveHighlight(feat.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 border cursor-pointer select-none ${
                    isHovered
                      ? 'bg-white border-[#708E50] shadow-xl translate-x-1 lg:-translate-x-1'
                      : 'bg-[#FAF9F5] hover:bg-white border-stone-200/80 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isHovered ? 'bg-[#1D3C34] text-white' : 'bg-[#E4EEE3] text-[#1D3C34]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif font-medium text-base text-stone-900 leading-snug">
                          {feat.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-stone-200 text-[#708E50] flex-shrink-0">
                          {feat.tag}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column: Portrait Lab Formulation Showcase with Radar Beacons */}
          <div className="lg:col-span-4 flex justify-center py-4 relative">
            {/* Ambient Halos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#708E50]/20 rounded-full blur-3xl pointer-events-none -z-0" />

            {/* Pulsing Animated Radar Rings */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.5, 0.15, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-4 rounded-3xl border-2 border-[#708E50]/30 pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1, 1.45, 1],
                opacity: [0.35, 0.05, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute inset-0 rounded-3xl border border-[#86A55B]/25 pointer-events-none"
            />

            {/* Main Visual Image Card */}
            <div className="relative w-full max-w-[360px] aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 group bg-stone-900">
              <img
                src={cosmeticLabImg}
                alt="Cosmetic chemist compounding active skincare serum in cleanroom laboratory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-stone-900 shadow-lg border border-stone-200/90 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#708E50] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-wide uppercase text-[#1D3C34]">
                    Active R&D Cleanrooms
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E4EEE3] text-[#1D3C34]">
                  ISO 22716
                </span>
              </div>

              {/* Center Floating Lab Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-stone-900 shadow-xl border border-stone-200/90 space-y-1">
                <div className="flex items-center gap-1.5 text-[#708E50]">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">
                    Quality Controlled Compounding
                  </span>
                </div>
                <p className="font-serif font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                  Continuous Active Assay & Formulation Stability Testing
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Features */}
          <div className="lg:col-span-4 space-y-4">
            {RIGHT_FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              const isHovered = activeHighlight === feat.id;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.45 }}
                  onMouseEnter={() => setActiveHighlight(feat.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 border cursor-pointer select-none ${
                    isHovered
                      ? 'bg-white border-[#708E50] shadow-xl translate-x-1'
                      : 'bg-[#FAF9F5] hover:bg-white border-stone-200/80 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isHovered ? 'bg-[#1D3C34] text-white' : 'bg-[#E4EEE3] text-[#1D3C34]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif font-medium text-base text-stone-900 leading-snug">
                          {feat.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-stone-200 text-[#708E50] flex-shrink-0">
                          {feat.tag}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Facility & Quality Credentials Bar */}
        <div className="mt-14 pt-8 border-t border-stone-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {bottomStats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#FAF9F5] border border-stone-200/80 text-center space-y-0.5 shadow-2xs hover:bg-[#F2F7F0] transition-colors"
              >
                <p className="text-xs text-stone-500 uppercase font-semibold">{stat.label}</p>
                <p className="font-serif font-bold text-lg sm:text-xl text-[#1D3C34]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
