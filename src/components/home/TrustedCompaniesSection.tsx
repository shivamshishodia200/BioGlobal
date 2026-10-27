import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, CheckCircle2, Award, HeartHandshake } from 'lucide-react';

interface BrandItem {
  name: string;
  subtitle: string;
  category: string;
}

const BRANDS: BrandItem[] = [
  { name: 'COTX', subtitle: 'Luxury Skincare', category: 'Turnkey Brand Partnership' },
  { name: 'Lia HiCare', subtitle: 'Personal Care', category: 'Third-Party Manufacturing' },
  { name: 'Sanfe', subtitle: 'Feminine Wellness', category: 'Formulation Partner' },
  { name: 'sattvik', subtitle: 'pure • fresh • divine', category: 'Botanical Skincare' },
  { name: 'SMR', subtitle: 'Life Sciences', category: 'Clinical Cosmeceuticals' },
  { name: 'Janatra', subtitle: 'Health Care', category: 'Personal Care Solutions' },
  { name: 'VYEDA', subtitle: 'HERBALS', category: 'Ayurvedic Compounding' },
  { name: 'Blue Buzz', subtitle: 'Cosmetics', category: 'Color Cosmetics' },
  { name: 'AURA', subtitle: 'Botanicals', category: 'Clean Beauty Formulations' },
  { name: 'CHIC', subtitle: 'Beauty Labs', category: 'Private Label Solutions' },
];

export const TrustedCompaniesSection: React.FC = () => {
  // Duplicate for seamless 100% infinite loop
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section
      aria-labelledby="trusted-partnerships-heading"
      className="bg-white py-10 sm:py-12 lg:py-14 border-b border-stone-200/60 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Block: Eyebrow, Main Heading, Supporting Statement, and Description */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-6 sm:mb-8">
          {/* 1. Section Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold tracking-wider uppercase border border-[#C5DAC3] shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>BUILT ON TRUST. DRIVEN BY QUALITY.</span>
          </motion.div>

          {/* 2. Main Section Heading */}
          <motion.h2
            id="trusted-partnerships-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[42px] text-stone-900 tracking-tight leading-tight"
          >
            Manufacturing Partnerships That Inspire Confidence
          </motion.h2>

          {/* 4. Supporting Trust Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#708E50]"
          >
            Your Vision. Our Expertise. A Partnership for Growth.
          </motion.p>

          {/* 3. Section Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto"
          >
            At The BioGlobal, we believe successful beauty brands are built
            through quality, consistency, and strong manufacturing
            partnerships. From emerging skincare startups to established
            cosmetic businesses, we support brands with dependable production
            solutions, formulation expertise, and a commitment to bringing
            exceptional beauty products to market.
          </motion.p>
        </div>
      </div>

      {/* 5. Client Logo Marquee with Left/Right Smooth Gradients and Hover Pause */}
      <div className="relative w-full overflow-hidden marquee-container-h">
        {/* Left and Right Smooth Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Infinite Smooth Track */}
        <div className="flex animate-marquee-left gap-4 sm:gap-5 flex-nowrap shrink-0 items-center py-2 will-change-transform">
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="w-48 sm:w-56 h-26 bg-[#FAF9F5] hover:bg-white border border-stone-200/90 hover:border-[#708E50]/70 rounded-xl p-4 flex flex-col items-center justify-center shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer select-none shrink-0 group"
            >
              <span className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-[#1D3C34] tracking-tight transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-stone-500 font-medium tracking-wider uppercase mt-1">
                {brand.subtitle}
              </span>
              <span className="text-[9px] text-[#1D3C34] font-semibold bg-[#E4EEE3] px-2.5 py-0.5 rounded-full mt-2 border border-[#C5DAC3]/70 group-hover:bg-[#1D3C34] group-hover:text-white transition-colors">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Additional Content (Integrated cleanly into supporting bottom grid) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-14 relative z-10">
        <div className="bg-[#FAF9F5] border border-stone-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-5 space-y-2 text-center lg:text-left">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#708E50] block">
                Collaborative Development
              </span>
              <h3 className="font-serif font-light text-xl sm:text-2xl text-stone-900 leading-snug">
                Trusted Manufacturing. Thoughtful Formulations. Long-Term
                Partnerships.
              </h3>
            </div>

            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Whether you are introducing your first beauty product or
                expanding an established product portfolio, The BioGlobal
                provides manufacturing support designed around your business
                requirements. We focus on clear communication, product
                consistency, and collaborative development to support your
                brand's growth.
              </p>

              {/* SEO Strategic Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200 text-[11px] font-medium text-stone-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#708E50]" />
                  <span>Third-Party Cosmetic Manufacturing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200 text-[11px] font-medium text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50]" />
                  <span>Private Label Cosmetic Manufacturing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200 text-[11px] font-medium text-stone-700">
                  <Award className="w-3.5 h-3.5 text-[#708E50]" />
                  <span>Beauty Brand Manufacturing Solutions</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200 text-[11px] font-medium text-stone-700">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#708E50]" />
                  <span>Cosmetic Manufacturing Partner</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
