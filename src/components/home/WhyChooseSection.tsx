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
    description: 'Supporting emerging & established beauty brands.',
    icon: Users,
  },
  {
    id: 'custom-formulations',
    value: '500+',
    title: 'Custom Formulations',
    description: 'Diverse portfolio across cosmetic categories.',
    icon: FlaskConical,
  },
  {
    id: 'fragrance-options',
    value: '300+',
    title: 'Fragrance Options',
    description: 'Versatile IFRA-compliant fragrance library.',
    icon: Sparkles,
  },
  {
    id: 'monthly-capacity',
    value: '2 Lakh',
    unit: 'Units / Mo',
    title: 'Production Capacity',
    description: 'Automated lines for bottles, tubes & jars.',
    icon: Factory,
  },
  {
    id: 'manufacturing-facility',
    value: '5,500',
    unit: 'Sq. Ft.',
    title: 'Manufacturing Facility',
    description: 'Dedicated GMP-compliant production space.',
    icon: Building2,
  },
  {
    id: 'formulation-expertise',
    value: 'R&D',
    title: 'Formulation Expertise',
    description: 'In-house cosmetic chemists & testing lab.',
    icon: Microscope,
  },
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-[#E4EEE3] pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 border-b-0 overflow-hidden relative"
    >
      {/* Background Soft Pattern Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/40 rounded-full blur-2xl pointer-events-none -z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#86A55B]/15 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-5 sm:space-y-6 relative z-10 text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="w-full space-y-2 sm:space-y-2.5 text-left"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#1D3C34] text-xs font-semibold tracking-wider uppercase border border-[#C5DAC3] shadow-2xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>WHY CHOOSE THE BIOGLOBAL</span>
          </div>

          {/* Main Heading */}
          <h2
            id="why-choose-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[38px] text-stone-900 tracking-tight leading-tight"
          >
            The Expertise Behind Exceptional Beauty Brands
          </h2>

          {/* Section Description */}
          <p className="text-stone-700 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-5xl lg:max-w-6xl">
            At The BioGlobal, we combine extensive cosmetic manufacturing experience with formulation expertise, certified production, and a commitment to quality. Our approach helps emerging and established beauty brands develop distinctive products and build collections that align with their business goals.
          </p>
        </motion.div>

        {/* 6 White Credential Cards in a Sleek Single Line (lg:grid-cols-6) with Reduced Height */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-3 xl:gap-3.5 text-left">
          {CREDENTIALS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  delay: idx * 0.06,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 14px 28px rgba(29, 60, 52, 0.08)',
                }}
                className="bg-white rounded-xl p-3.5 sm:p-4 flex flex-col justify-between h-full shadow-xs border border-white/90 hover:border-[#C5DAC3]/70 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Top Row: Compact Icon Container & Optional Unit Badge */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-3 gap-1">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#E4EEE3] flex items-center justify-center text-[#1D3C34] group-hover:bg-[#1D3C34] transition-colors duration-300 shrink-0">
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#708E50] group-hover:text-[#86A55B] transition-colors duration-300" />
                  </div>

                  {stat.unit && (
                    <span className="text-[10px] font-semibold text-stone-500 bg-[#FAF9F5] border border-stone-200/80 px-1.5 py-0.5 rounded shrink-0">
                      {stat.unit}
                    </span>
                  )}
                </div>

                {/* Content: Stat Number, Heading, and 2-Line Crisp Description */}
                <div className="space-y-1 flex-grow">
                  <span className="font-serif font-bold text-2xl sm:text-[26px] text-[#1D3C34] tracking-tight block leading-tight">
                    <AnimatedCounter value={stat.value} />
                  </span>

                  <h3 className="font-serif font-semibold text-xs sm:text-[13px] xl:text-sm text-stone-900 tracking-tight group-hover:text-[#1D3C34] transition-colors leading-snug">
                    {stat.title}
                  </h3>

                  <p className="text-stone-600 text-[11px] leading-relaxed font-normal line-clamp-2">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Active Accent Indicator Line */}
                <div className="w-6 h-0.5 bg-[#86A55B]/40 group-hover:w-12 group-hover:bg-[#708E50] rounded-full transition-all duration-300 mt-2.5 sm:mt-3" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
