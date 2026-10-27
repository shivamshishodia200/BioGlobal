import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { PartnershipShowcase } from './PartnershipShowcase';

export const BenefitsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="bg-[#FAF9F5] py-12 sm:py-14 lg:py-16 border-b border-stone-200/60 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6 sm:space-y-8 relative z-10 text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="w-full space-y-2.5 sm:space-y-3 text-left"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#1D3C34] text-xs font-semibold tracking-wider uppercase border border-[#C5DAC3] shadow-2xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>REAL BRAND PARTNERSHIPS</span>
          </div>

          {/* Main Heading */}
          <h2
            id="benefits-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-stone-900 tracking-tight leading-tight"
          >
            A Manufacturing Partnership Built Around Your Growth
          </h2>

          {/* Section Description */}
          <p className="text-stone-700 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-5xl lg:max-w-6xl">
            Choosing the right manufacturing partner transforms cosmetic ideas into commercial reality. Explore our featured brand collaboration with COTX Luxury Skincare — showcasing custom dermatological formulations, specialized active ingredients, bespoke packaging, and cleanroom batch production.
          </p>
        </motion.div>

        {/* Real Brand Partnership Showcase: COTX Luxury Skincare */}
        <PartnershipShowcase />
      </div>
    </section>
  );
};
