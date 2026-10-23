import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import {
  Users,
  FlaskConical,
  Sparkles,
  Factory,
  Building2,
  Microscope,
} from 'lucide-react';

interface CredentialCard {
  id: string;
  value: string;
  unit?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CREDENTIALS: CredentialCard[] = [
  {
    id: 'brand-partnerships',
    value: '500+',
    title: 'Brand Partnerships',
    description:
      'Supporting emerging and established beauty businesses with manufacturing solutions designed for long-term growth.',
    icon: Users,
  },
  {
    id: 'custom-formulations',
    value: '500+',
    title: 'Custom Formulations',
    description:
      'A diverse formulation portfolio supporting unique product concepts across beauty and personal care categories.',
    icon: FlaskConical,
  },
  {
    id: 'fragrance-options',
    value: '300+',
    title: 'Fragrance Options',
    description:
      'A versatile selection of fragrance options to help brands create distinctive and memorable product experiences.',
    icon: Sparkles,
  },
  {
    id: 'monthly-capacity',
    value: '2 Lakh',
    unit: 'Units / Month',
    title: 'Monthly Production Capacity',
    description:
      'Manufacturing capabilities designed to support evolving production requirements across multiple cosmetic and personal care categories.',
    icon: Factory,
  },
  {
    id: 'manufacturing-facility',
    value: '5,500',
    unit: 'Sq. Ft.',
    title: 'Manufacturing Facility',
    description:
      'Dedicated manufacturing infrastructure supporting formulation, production, packaging, and quality-focused operations.',
    icon: Building2,
  },
  {
    id: 'formulation-expertise',
    value: 'R&D',
    title: 'Formulation Expertise',
    description:
      'Research-led product development focused on ingredient selection, formulation customization, and practical manufacturing solutions.',
    icon: Microscope,
  },
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-[#E4EEE3] py-20 lg:py-28 border-b border-[#C5DAC3]/70 overflow-hidden relative"
    >
      {/* Background Soft Pattern Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/40 rounded-full blur-2xl pointer-events-none -z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#86A55B]/15 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12 relative z-10 text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-3.5 text-left"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#1D3C34] text-xs font-semibold tracking-wider uppercase border border-[#C5DAC3] shadow-2xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>WHY CHOOSE THE BIOGLOBAL</span>
          </div>

          {/* Main Heading */}
          <h2
            id="why-choose-heading"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[44px] text-stone-900 tracking-tight leading-tight"
          >
            The Expertise Behind Exceptional Beauty Brands
          </h2>

          {/* Section Description */}
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
            At The BioGlobal, we combine extensive cosmetic manufacturing
            experience with formulation expertise, production capabilities, and
            a commitment to quality. Our approach helps emerging and established
            beauty brands develop distinctive products, streamline manufacturing
            requirements, and build collections that align with their business
            goals.
          </p>
        </motion.div>

        {/* 6 White Credential Cards in a Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {CREDENTIALS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.55,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 35px rgba(29, 60, 52, 0.10)',
                }}
                className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs border border-white/90 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Top Row: Icon Container & Optional Unit Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#E4EEE3] flex items-center justify-center text-[#1D3C34] group-hover:bg-[#1D3C34] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#708E50] group-hover:text-[#86A55B] transition-colors duration-300" />
                  </div>

                  {stat.unit && (
                    <span className="text-[11px] font-semibold text-stone-500 bg-[#FAF9F5] border border-stone-200/80 px-2.5 py-1 rounded-lg">
                      {stat.unit}
                    </span>
                  )}
                </div>

                {/* Content: Stat Number, Heading, and Description */}
                <div className="space-y-2 flex-grow">
                  <span className="font-serif font-bold text-3xl sm:text-4xl text-[#1D3C34] tracking-tight block">
                    <AnimatedCounter value={stat.value} />
                  </span>

                  <h3 className="font-serif font-semibold text-lg text-stone-900 tracking-tight group-hover:text-[#1D3C34] transition-colors">
                    {stat.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Active Accent Indicator Line */}
                <div className="w-10 h-1 bg-[#86A55B]/40 group-hover:w-20 group-hover:bg-[#708E50] rounded-full transition-all duration-300 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
