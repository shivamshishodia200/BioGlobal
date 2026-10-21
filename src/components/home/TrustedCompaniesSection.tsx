import React from 'react';
import { motion } from 'motion/react';

const BRANDS = [
  { name: 'Lia HiCare', subtitle: 'Personal Care' },
  { name: 'Sanfe', subtitle: 'Feminine Wellness' },
  { name: 'sattvik', subtitle: 'pure • fresh • divine' },
  { name: 'SMR', subtitle: 'Life Sciences' },
  { name: 'Janatra', subtitle: 'Health Care' },
  { name: 'VYEDA', subtitle: 'HERBALS' },
  { name: 'Blue Buzz', subtitle: 'Cosmetics' },
  { name: 'AURA', subtitle: 'Botanicals' },
  { name: 'CHIC', subtitle: 'Beauty Labs' },
];

export const TrustedCompaniesSection: React.FC = () => {
  // Duplicate for seamless loop
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="bg-white py-14 border-b border-stone-200/60 overflow-hidden relative">
      {/* Left and Right Smooth Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-light text-2xl sm:text-3xl text-stone-900"
        >
          Trusted by thousands of companies around the world
        </motion.h2>
      </div>

      {/* Infinite Smooth Marquee Ribbon */}
      <div className="relative w-full overflow-hidden flex">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-4 flex-nowrap shrink-0 items-center will-change-transform"
        >
          {duplicatedBrands.map((brand, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}
              transition={{ duration: 0.2 }}
              className="w-44 sm:w-48 h-24 bg-white border border-stone-200/90 rounded-md p-4 flex flex-col items-center justify-center shadow-2xs cursor-pointer select-none shrink-0"
            >
              <span className="font-sans font-bold text-lg text-stone-800 tracking-tight">
                {brand.name}
              </span>
              <span className="text-[10px] text-stone-400 font-medium tracking-wider uppercase mt-0.5">
                {brand.subtitle}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
