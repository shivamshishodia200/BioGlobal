import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  Handshake,
  Wallet,
  Award,
  Settings,
  Fingerprint,
  Headset,
  FlaskConical,
  FileCheck,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { UniqueFeature } from '../../types';
import cosmeticLabImg from '../../assets/capabilities/cosmetic_lab_rd.jpg';

// Left Features (Pillars 1 to 4)
const LEFT_FEATURES: UniqueFeature[] = [
  {
    id: 'strategic-partnership',
    title: 'A Manufacturing Partner Invested in Your Growth',
    shortTitle: 'Strategic Manufacturing Partnership',
    description:
      'We believe successful manufacturing relationships extend beyond production. Our collaborative approach supports beauty businesses through product planning, formulation discussions, manufacturing coordination, and technical guidance, helping brands make informed decisions at every stage.',
    highlight: 'Beyond Production. Focused on Partnership.',
    iconName: 'Handshake',
  },
  {
    id: 'cost-conscious-solutions',
    title: 'Manufacturing Solutions Designed Around Your Budget',
    shortTitle: 'Solutions for Every Budget',
    description:
      'Every beauty business has unique commercial requirements. We help clients explore practical ingredient, formulation, packaging, and production options aligned with their target market, product positioning, and cost objectives while maintaining agreed quality requirements.',
    highlight: 'Smart Product Planning. Practical Manufacturing.',
    iconName: 'Wallet',
  },
  {
    id: 'manufacturing-experience',
    title: 'Experience That Supports Confident Product Development',
    shortTitle: '20+ Years of Manufacturing Expertise',
    description:
      'With over two decades of experience represented in our company profile, The BioGlobal brings valuable manufacturing and product development knowledge to beauty and personal care projects. Our experience supports collaboration across different product categories, formulation concepts, and production requirements.',
    highlight: 'Experience. Knowledge. Consistency.',
    iconName: 'Award',
  },
  {
    id: 'manufacturing-capabilities',
    title: 'Manufacturing Capabilities Built for Product Consistency',
    shortTitle: 'Quality-Focused Manufacturing',
    description:
      'Our manufacturing approach emphasizes controlled production planning, process coordination, material handling, and quality-related checks. We work to support consistent execution from approved product specifications through filling, packaging, and finished product preparation.',
    highlight: 'Structured Processes. Reliable Execution.',
    iconName: 'Settings',
  },
];

// Right Features (Pillars 5 to 8)
const RIGHT_FEATURES: UniqueFeature[] = [
  {
    id: 'brand-customization',
    title: 'Distinctive Products Designed Around Your Brand',
    shortTitle: 'Brand-Specific Customization',
    description:
      'Your beauty brand deserves products that reflect its identity and customer expectations. We support customization across formulation concepts, ingredient selections, textures, fragrance profiles, and packaging preferences to help create differentiated product collections.',
    highlight: 'Your Identity. Your Product Experience.',
    iconName: 'Fingerprint',
  },
  {
    id: 'client-service',
    title: 'Dedicated Support Throughout Your Manufacturing Journey',
    shortTitle: 'Collaborative Client Support',
    description:
      'Clear communication is essential to a successful manufacturing partnership. Our client-focused approach supports discussions around product specifications, samples, production schedules, packaging coordination, and project requirements so businesses can plan with greater confidence.',
    highlight: 'Clear Communication. Coordinated Support.',
    iconName: 'Headset',
  },
  {
    id: 'formulation-research',
    title: 'Formulation Development Guided by Technical Expertise',
    shortTitle: 'Formulation & R&D Expertise',
    description:
      "Our formulation support helps businesses explore ingredient combinations, product textures, fragrance preferences, and suitable cosmetic product concepts. Through prototype development, sample evaluation, and formulation refinement, we support the creation of products aligned with your brand's requirements.",
    highlight: 'Thoughtful Formulation. Continuous Refinement.',
    iconName: 'FlaskConical',
  },
  {
    id: 'regulatory-documentation',
    title: 'Practical Guidance for Product Documentation',
    shortTitle: 'Documentation & Quality Support',
    description:
      'Product documentation plays an important role in beauty manufacturing. We help clients understand available technical information, product specifications, ingredient records, and applicable quality-related documentation, with support based on product requirements and the destination market.',
    highlight: 'Better Information. More Confident Decisions.',
    iconName: 'FileCheck',
  },
];

// Helper to resolve icon component
const getFeatureIcon = (name: string) => {
  switch (name) {
    case 'Handshake':
      return Handshake;
    case 'Wallet':
      return Wallet;
    case 'Award':
      return Award;
    case 'Settings':
      return Settings;
    case 'Fingerprint':
      return Fingerprint;
    case 'Headset':
      return Headset;
    case 'FlaskConical':
      return FlaskConical;
    case 'FileCheck':
      return FileCheck;
    default:
      return Sparkles;
  }
};

export const UniqueFeaturesSection: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  // Active feature details if selected
  const allFeatures = [...LEFT_FEATURES, ...RIGHT_FEATURES];
  const activeFeature = allFeatures.find((f) => f.id === activeHighlight);

  return (
    <section
      aria-labelledby="unique-features-heading"
      className="bg-white py-12 sm:py-14 lg:py-16 border-b border-stone-200/60 overflow-hidden relative"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-left max-w-3xl mb-8 sm:mb-10 space-y-2.5 sm:space-y-3"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>THE BIOGLOBAL DIFFERENCE</span>
          </div>

          {/* Main Heading */}
          <h2
            id="unique-features-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-stone-900 tracking-tight leading-tight"
          >
            More Than Manufacturing. A Commitment to Your Brand's Success.
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#708E50]">
            Driven by Expertise. Inspired by Innovation. Built Around Your Brand.
          </p>

          {/* Section Description */}
          <p className="text-stone-600 text-xs sm:text-sm sm:leading-relaxed font-normal">
            Every exceptional beauty product begins with the right combination of
            expertise, innovation, and attention to detail. At The BioGlobal, we
            bring together formulation knowledge, manufacturing capabilities, and
            collaborative support to help brands build distinctive products with
            confidence.
            <span className="block mt-2">
              From early-stage product concepts to expanding beauty
              collections, our solutions are designed to support consistent
              product development, practical manufacturing decisions, and
              lasting business partnerships.
            </span>
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* 3-COLUMN INFOGRAPHIC: 4 LEFT, RADAR CENTER, 4 RIGHT      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column Features (Pillars 1 to 4) */}
          <div className="lg:col-span-4 space-y-4">
            {LEFT_FEATURES.map((feat, idx) => {
              const Icon = getFeatureIcon(feat.iconName);
              const isHovered = activeHighlight === feat.id;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  onMouseEnter={() => setActiveHighlight(feat.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  onFocus={() => setActiveHighlight(feat.id)}
                  onBlur={() => setActiveHighlight(null)}
                  tabIndex={0}
                  role="article"
                  aria-label={feat.shortTitle}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 border cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-[#708E50] ${
                    isHovered
                      ? 'bg-white border-[#708E50] shadow-xl translate-x-1 lg:-translate-x-1'
                      : 'bg-[#FAF9F5] hover:bg-white border-stone-200/80 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isHovered
                          ? 'bg-[#1D3C34] text-[#DFBD89]'
                          : 'bg-[#E4EEE3] text-[#1D3C34]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-stone-200 text-[#708E50]">
                          {feat.shortTitle}
                        </span>
                        <span className="text-[10px] text-stone-500 font-medium">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-serif font-medium text-sm sm:text-base text-stone-900 leading-snug">
                        {feat.title}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {feat.description}
                      </p>

                      <div className="pt-0.5">
                        <span className="text-[11px] font-semibold text-[#708E50] tracking-wide">
                          {feat.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column: Central R&D Laboratory Visual with Radar Beacons */}
          <div className="lg:col-span-4 flex justify-center py-4 relative">
            {/* Ambient Halos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#708E50]/20 rounded-full blur-3xl pointer-events-none -z-0" />

            {/* Pulsing Animated Radar Rings (Concentric) */}
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
                alt="Cosmetic formulation and research laboratory environment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/25 to-transparent pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-stone-900 shadow-lg border border-stone-200/90 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#708E50] animate-pulse" />
                  <span className="text-[10px] font-bold tracking-wide uppercase text-[#1D3C34]">
                    FORMULATION • QUALITY • MANUFACTURING
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E4EEE3] text-[#1D3C34]">
                  R&amp;D LAB
                </span>
              </div>

              {/* Center Floating Lab Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-stone-900 shadow-xl border border-stone-200/90 space-y-1.5">
                <div className="flex items-center justify-between text-[#708E50]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">
                      {activeFeature ? activeFeature.shortTitle : 'CENTRAL LABORATORY VISUAL'}
                    </span>
                  </div>
                </div>

                <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                  {activeFeature
                    ? activeFeature.highlight
                    : 'Innovation at the Heart of Every Formulation'}
                </h4>

                <p className="text-[11px] text-stone-600 leading-relaxed font-normal">
                  {activeFeature
                    ? activeFeature.description.slice(0, 140) + '...'
                    : 'Connecting formulation knowledge, thoughtful product development, and manufacturing expertise to support distinctive beauty and personal care collections.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Features (Pillars 5 to 8) */}
          <div className="lg:col-span-4 space-y-4">
            {RIGHT_FEATURES.map((feat, idx) => {
              const Icon = getFeatureIcon(feat.iconName);
              const isHovered = activeHighlight === feat.id;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  onMouseEnter={() => setActiveHighlight(feat.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  onFocus={() => setActiveHighlight(feat.id)}
                  onBlur={() => setActiveHighlight(null)}
                  tabIndex={0}
                  role="article"
                  aria-label={feat.shortTitle}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 border cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-[#708E50] ${
                    isHovered
                      ? 'bg-white border-[#708E50] shadow-xl translate-x-1'
                      : 'bg-[#FAF9F5] hover:bg-white border-stone-200/80 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isHovered
                          ? 'bg-[#1D3C34] text-[#DFBD89]'
                          : 'bg-[#E4EEE3] text-[#1D3C34]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-stone-200 text-[#708E50]">
                          {feat.shortTitle}
                        </span>
                        <span className="text-[10px] text-stone-500 font-medium">
                          0{idx + 5}
                        </span>
                      </div>

                      <h3 className="font-serif font-medium text-sm sm:text-base text-stone-900 leading-snug">
                        {feat.title}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {feat.description}
                      </p>

                      <div className="pt-0.5">
                        <span className="text-[11px] font-semibold text-[#708E50] tracking-wide">
                          {feat.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ======================================================== */}
        {/* OPTIONAL CONSULTATION CTA                                 */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 pt-6 border-t border-stone-200/80"
        >
          <div className="bg-[#FAF9F5] border border-stone-200/90 rounded-2xl p-5 sm:p-7 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 text-left">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#708E50] block">
                Collaborate With Our Experts
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-3xl text-stone-900 tracking-tight">
                Discover What We Can Create Together
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                Tell us about your beauty product concept, target market, and
                manufacturing requirements. Our team can help you explore
                suitable formulation and production options.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3.5 flex-shrink-0">
              <Link
                to="/consultation"
                className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Discuss Your Product Idea</span>
                <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
