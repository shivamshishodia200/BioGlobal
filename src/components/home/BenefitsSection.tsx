import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Clock,
  Coins,
  Package,
  FileCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ManufacturingBenefit {
  id: string;
  title: string;
  description: string;
  badge: string;
  keyBenefit: string;
  icon: React.ComponentType<{ className?: string }>;
}

const BENEFITS: ManufacturingBenefit[] = [
  {
    id: 'efficient-production',
    title: 'Efficient Production Timelines',
    description:
      'Bring your beauty products to market with better planning and coordinated manufacturing support. Our streamlined approach helps manage formulation selection, production scheduling, packaging requirements, and order preparation to support efficient turnaround times.',
    badge: 'Target Turnaround: 21–28 Days',
    keyBenefit: 'Efficient Planning. Timely Execution.',
    icon: Clock,
  },
  {
    id: 'competitive-costs',
    title: 'Competitive Manufacturing Costs',
    description:
      'Create commercially viable cosmetic products with manufacturing solutions aligned to your brand positioning and budget. We work with clients to explore practical formulation, ingredient, packaging, and production options that support their target costs while maintaining agreed product quality requirements.',
    badge: 'Value-Driven Manufacturing',
    keyBenefit: 'Smart Production. Better Cost Control.',
    icon: Coins,
  },
  {
    id: 'flexible-moq',
    title: 'Flexible Minimum Order Quantities',
    description:
      'Start your beauty business with manageable production volumes and the flexibility to expand as demand grows. With minimum order quantities starting from 1,000 units for eligible products, The BioGlobal helps emerging and established brands explore new product opportunities without requiring unnecessarily large initial orders.',
    badge: 'MOQ Starting at 1,000 Units',
    keyBenefit: 'Start Small. Scale with Confidence.',
    icon: Package,
  },
  {
    id: 'documentation-support',
    title: 'Documentation & Technical Support',
    description:
      'Navigate product development and manufacturing requirements with guidance from our technical team. We help clients understand available product specifications, quality-related documentation, ingredient information, and relevant manufacturing requirements to support informed business decisions.',
    badge: 'Product & Quality Documentation Support',
    keyBenefit: 'Clear Guidance. Greater Confidence.',
    icon: FileCheck,
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="bg-[#E4EEE3] pt-4 sm:pt-6 pb-12 sm:pb-14 lg:pb-16 border-b border-[#C5DAC3]/70 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6 sm:space-y-8 relative z-10 text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-2.5 sm:space-y-3 text-left"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#1D3C34] text-xs font-semibold tracking-wider uppercase border border-[#C5DAC3] shadow-2xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>THE BIOGLOBAL ADVANTAGE</span>
          </div>

          {/* Main Heading */}
          <h2
            id="benefits-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-stone-900 tracking-tight leading-tight"
          >
            A Manufacturing Partnership Built Around Your Growth
          </h2>

          {/* Section Description */}
          <p className="text-stone-700 text-xs sm:text-sm sm:leading-relaxed font-normal">
            Choosing the right manufacturing partner is essential to building a
            successful beauty brand. At The BioGlobal, we combine formulation
            expertise, flexible production solutions, cost-conscious
            manufacturing, and dedicated technical support to help simplify
            your product development journey. Whether you are launching your
            first private label collection or expanding an established cosmetic
            portfolio, our collaborative approach is designed to support your
            goals at every stage.
          </p>
        </motion.div>

        {/* 4 White Benefit Cards with Hover Elevation and Clear Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.55,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 35px rgba(29, 60, 52, 0.12)',
                }}
                className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs border border-white/90 transition-all duration-300 group relative"
              >
                <div className="space-y-4 flex-grow">
                  {/* Top Row: Icon Container and Key Benefit Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#D3E4D1] group-hover:bg-[#1D3C34] flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#1D3C34] group-hover:text-[#86A55B] transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] font-bold text-[#708E50] uppercase tracking-wider text-right">
                      {item.keyBenefit}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-serif font-semibold text-lg text-stone-900 group-hover:text-[#1D3C34] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Highlight Badge at Bottom */}
                <div className="pt-4 mt-5 border-t border-stone-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F5] border border-stone-200/80 text-[11px] font-semibold text-stone-800 w-full justify-center text-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50] flex-shrink-0" />
                    <span className="truncate">{item.badge}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional Section Footer Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-1"
        >
          <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 sm:p-6 border border-white/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left max-w-4xl mx-auto">
            <div className="space-y-1">
              <h3 className="font-serif font-semibold text-lg sm:text-xl text-stone-900 tracking-tight">
                Your Ideas Deserve a Manufacturing Partner That Understands Your
                Business.
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                From concept development to production coordination, we focus on
                building dependable partnerships that support quality,
                consistency, and long-term business growth.
              </p>
            </div>

            <Link
              to="/consultation"
              className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl relative overflow-hidden group inline-flex items-center gap-2 cursor-pointer flex-shrink-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
