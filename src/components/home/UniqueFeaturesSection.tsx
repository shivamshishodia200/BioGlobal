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
const cosmeticLabImg = '/images/bioglobal/about/about-formulation-lab.webp';

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
    id: 'custom-formulation',
    title: 'Formulation Options Tailored to Your Brand Vision',
    shortTitle: 'Formulation Customization',
    description:
      'From selecting active ingredients to refining textures and aromas, we offer opportunities to customize cosmetic formulations within manufacturing parameters. Brands can discuss customized product profiles or explore available formulations to find options that align with their concept.',
    highlight: 'Custom Formulation. Tailored Textures.',
    iconName: 'Fingerprint',
  },
  {
    id: 'dedicated-support',
    title: 'Responsive Communication Throughout Your Project',
    shortTitle: 'Dedicated Client Support',
    description:
      'Clear and consistent communication is essential to successful contract manufacturing. Our team provides responsive coordination across inquiries, sample requests, production updates, and technical questions, supporting an organized manufacturing process.',
    highlight: 'Clear Updates. Responsive Communication.',
    iconName: 'Headset',
  },
  {
    id: 'research-development',
    title: 'R&D Support to Refine Your Cosmetic Concepts',
    shortTitle: 'Formulation R&D Support',
    description:
      'Developing personal care products often involves balancing product performance, ingredient compatibility, aesthetics, and production feasibility. Our formulation support assists clients in evaluating formulations, reviewing key ingredients, and preparing products for sampling and manufacturing.',
    highlight: 'Ingredient Review. Practical Formulation.',
    iconName: 'FlaskConical',
  },
  {
    id: 'regulatory-guidance',
    title: 'Documentation Support for Industry Alignment',
    shortTitle: 'Documentation & Regulatory Support',
    description:
      'Navigating cosmetic industry standards requires thorough documentation and clear product specifications. We assist clients with standard manufacturing-related documentation, certificate preparation, and quality records to support their regulatory and compliance processes.',
    highlight: 'Batch Records. Manufacturing Documentation.',
    iconName: 'FileCheck',
  },
];

const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
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
      className="bg-[#0B1B17] py-14 sm:py-18 lg:py-24 border-b border-[#1A3830] overflow-hidden relative"
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
          className="text-left w-full mb-8 sm:mb-12 space-y-2.5 sm:space-y-3"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-semibold border border-[#254A3E] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>THE BIOGLOBAL DIFFERENCE</span>
          </div>

          {/* Main Heading */}
          <h2
            id="unique-features-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight"
          >
            More Than Manufacturing. A Commitment to Your Brand's Success.
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#DFBD89]">
            Driven by Expertise. Inspired by Innovation. Built Around Your Brand.
          </p>

          {/* Section Description */}
          <p className="text-stone-300 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-5xl lg:max-w-6xl">
            Every exceptional beauty product begins with the right combination of formulation science, certified manufacturing, and meticulous quality control. From early-stage product concepts to expanding personal care collections, our solutions provide consistent development and dependable B2B support.
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
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 border cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-[#DFBD89] ${
                    isHovered
                      ? 'bg-[#16322A] border-[#DFBD89] shadow-xl translate-x-1 lg:-translate-x-1'
                      : 'bg-[#112520] hover:bg-[#142C25] border-[#1F3F36] shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isHovered
                          ? 'bg-[#0B1B17] text-[#DFBD89]'
                          : 'bg-[#0B1B17] text-[#DFBD89]'
                      } border border-[#254A3E]`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0B1B17] border border-[#254A3E] text-[#DFBD89]">
                          {feat.shortTitle}
                        </span>
                        <span className="text-[10px] text-stone-400 font-medium">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-serif font-medium text-sm sm:text-base text-white leading-snug">
                        {feat.title}
                      </h3>

                      <p className="text-xs text-stone-300 leading-relaxed font-normal">
                        {feat.description}
                      </p>

                      <div className="pt-0.5">
                        <span className="text-[11px] font-semibold text-[#86A55B] tracking-wide">
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
              className="absolute inset-4 rounded-3xl border-2 border-[#DFBD89]/30 pointer-events-none"
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
              className="absolute inset-0 rounded-3xl border border-[#DFBD89]/20 pointer-events-none"
            />

            {/* Main Visual Image Card */}
            <div className="relative w-full max-w-[360px] aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1F3F36] z-10 group bg-stone-900">
              <img
                src={cosmeticLabImg}
                alt="Cosmetic formulation and research laboratory environment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B17] via-black/30 to-transparent pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 right-4 bg-[#0B1B17]/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-white shadow-lg border border-[#254A3E] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#DFBD89] animate-pulse" />
                  <span className="text-[10px] font-bold tracking-wide uppercase text-white">
                    FORMULATION • QUALITY • MANUFACTURING
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#132B25] text-[#DFBD89]">
                  R&amp;D LAB
                </span>
              </div>

              {/* Center Floating Lab Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0B1B17]/90 backdrop-blur-md text-white shadow-xl border border-[#254A3E] space-y-1.5">
                <div className="flex items-center justify-between text-[#DFBD89]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">
                      {activeFeature ? activeFeature.shortTitle : 'CENTRAL LABORATORY VISUAL'}
                    </span>
                  </div>
                </div>

                <h4 className="font-serif font-bold text-xs sm:text-sm text-white leading-snug">
                  {activeFeature
                    ? activeFeature.highlight
                    : 'Innovation at the Heart of Every Formulation'}
                </h4>

                <p className="text-[11px] text-stone-300 leading-relaxed font-normal">
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
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 border cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-[#DFBD89] ${
                    isHovered
                      ? 'bg-[#16322A] border-[#DFBD89] shadow-xl translate-x-1'
                      : 'bg-[#112520] hover:bg-[#142C25] border-[#1F3F36] shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isHovered
                          ? 'bg-[#0B1B17] text-[#DFBD89]'
                          : 'bg-[#0B1B17] text-[#DFBD89]'
                      } border border-[#254A3E]`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0B1B17] border border-[#254A3E] text-[#DFBD89]">
                          {feat.shortTitle}
                        </span>
                        <span className="text-[10px] text-stone-400 font-medium">
                          0{idx + 5}
                        </span>
                      </div>

                      <h3 className="font-serif font-medium text-sm sm:text-base text-white leading-snug">
                        {feat.title}
                      </h3>

                      <p className="text-xs text-stone-300 leading-relaxed font-normal">
                        {feat.description}
                      </p>

                      <div className="pt-0.5">
                        <span className="text-[11px] font-semibold text-[#86A55B] tracking-wide">
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
          className="mt-10 pt-6 border-t border-[#1A3830]"
        >
          <div className="bg-[#112520] border border-[#1F3F36] rounded-2xl p-5 sm:p-7 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 text-left">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#DFBD89] block">
                Collaborate With Our Experts
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-3xl text-white tracking-tight">
                Discover What We Can Create Together
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                Tell us about your beauty product concept, target market, and
                manufacturing requirements. Our team can help you explore
                suitable formulation and production options.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3.5 flex-shrink-0">
              <Link
                to="/consultation"
                className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Discuss Your Product Idea</span>
                <ArrowRight className="w-4 h-4 text-[#0B1B17] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
