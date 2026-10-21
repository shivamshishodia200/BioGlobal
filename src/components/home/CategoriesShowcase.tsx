import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, FlaskConical } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const CategoriesShowcase: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-stone-200/60 overflow-hidden relative">
      {/* Soft Ambient Background Halos */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
              <span>Full Manufacturing Portfolio</span>
            </div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight">
              Six Comprehensive Product Categories
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              Explore our laboratory-developed formulations engineered across major personal care segments, fully customizable for your brand identity.
            </p>
          </motion.div>

          <Link
            to="/products"
            className="self-start md:self-end px-7 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all flex-shrink-0 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid (3x2 on desktop) with High-Impact Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 24px 40px rgba(29, 60, 52, 0.12)' }}
              className="group relative bg-[#FAF9F5] rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header with Image & Badges */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-900">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent pointer-events-none" />

                  {/* Top Left Status Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#86A55B] animate-pulse" />
                    <span>WHO-GMP Cleanroom</span>
                  </div>

                  {/* Top Right Formulations Count Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-stone-800 text-[11px] font-bold border border-stone-200 shadow-2xs">
                      {category.itemCount} Formulations
                    </span>
                  </div>

                  {/* Bottom Category Name & Tagline */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <h3 className="font-serif font-medium text-2xl text-white leading-snug drop-shadow-sm">
                      {category.name}
                    </h3>
                    <p className="text-[11px] text-stone-200 line-clamp-1 font-normal opacity-90">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  <div className="pt-3 border-t border-stone-200/70">
                    <span className="text-[11px] font-bold text-[#708E50] uppercase tracking-wider block mb-2.5">
                      Signature Formulations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {category.popularFormulations.slice(0, 3).map((item, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-white border border-stone-200/90 text-stone-700 font-medium shadow-2xs hover:border-[#C5DAC3] transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-white border-t border-stone-200/80 flex items-center gap-2.5">
                <Link
                  to={`/category/${category.slug}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-[#1D3C34] hover:text-white text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 group/btn"
                >
                  <span>Explore {category.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#708E50] group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    openQuoteModal({
                      productCategory: category.name,
                      serviceType: 'Private Label Manufacturing',
                    })
                  }
                  className="py-2.5 px-4 rounded-xl bg-[#708E50] hover:bg-[#5F7A43] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs hover:shadow-md"
                  title={`Request quotation for ${category.name}`}
                >
                  <span>Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
