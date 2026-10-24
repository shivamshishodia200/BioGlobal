import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Package,
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { PRODUCTS } from '../../data/products';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const CategoriesShowcase: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  // Calculate product count per category dynamically from the products database
  const getProductCount = (categorySlug: string): number => {
    return PRODUCTS.filter((p) => p.categorySlug === categorySlug).length;
  };

  return (
    <section
      id="categories"
      aria-labelledby="categories-showcase-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white border-b border-stone-200/60 overflow-hidden relative scroll-mt-28 lg:scroll-mt-36"
    >
      {/* Soft Ambient Background Halos */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-8 sm:space-y-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-2.5"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
              <span>SIX SPECIALIZED CATEGORIES. ENDLESS OPPORTUNITIES FOR YOUR BRAND.</span>
            </div>

            {/* Main Heading (H2) */}
            <h2
              id="categories-showcase-heading"
              className="font-serif font-light text-3xl sm:text-4xl lg:text-[44px] text-stone-900 leading-tight tracking-tight pt-1"
            >
              Beauty Category
            </h2>

            {/* Description */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              Explore six specialized beauty and personal care categories, with product concepts and manufacturing solutions tailored to your brand vision.
            </p>
          </motion.div>

          <Link
            to="/products"
            className="self-start md:self-end px-6 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all shrink-0 group"
          >
            <span>Explore All Formulations</span>
            <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ======================================================== */}
        {/* 6-CARD CATEGORY SHOWCASE GRID (3x2 Desktop, 2-Col Tablet)*/}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CATEGORIES.map((category, idx) => {
            const productCount = getProductCount(category.slug) || 8;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: '0 16px 30px rgba(29, 60, 52, 0.08)' }}
                className="group relative bg-[#FAF9F5] rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:border-[#C5DAC3] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Header with Image */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-[#FAF9F5]">
                    <img
                      src={category.image}
                      alt={category.imageAlt || `${category.name} manufacturing category`}
                      className="product-category-image transition-transform duration-700 group-hover:scale-106"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />

                    {/* Top Right Product Count Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-stone-800 text-[11px] font-bold border border-stone-200 shadow-2xs inline-flex items-center gap-1">
                        <Package className="w-3 h-3 text-[#708E50]" />
                        <span>{productCount} Formulations</span>
                      </span>
                    </div>

                    {/* Bottom Category Name & Tagline */}
                    <div className="absolute bottom-3.5 left-4 right-4 space-y-0.5">
                      <h3 className="font-serif font-medium text-xl sm:text-2xl text-white leading-snug drop-shadow-sm">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-stone-200 line-clamp-1 font-normal opacity-90">
                        {category.headline || category.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal line-clamp-2 min-h-[40px]">
                      {category.shortDescription || category.description}
                    </p>

                    {/* Sample Formulations (Compact) */}
                    <div className="pt-2.5 border-t border-stone-200/70">
                      <span className="text-[10px] font-bold text-[#708E50] uppercase tracking-wider block mb-2">
                        Sample Formulations:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(category.productExamples || category.popularFormulations)
                          .slice(0, 4)
                          .map((item, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-700 font-medium shadow-2xs"
                            >
                              {item}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-3.5 bg-white border-t border-stone-200/80 flex items-center gap-2">
                  <Link
                    to={`/category/${category.slug}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-stone-100 hover:bg-[#1D3C34] hover:text-white text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 group/btn"
                  >
                    <span>{category.ctaText || `Explore ${category.name}`}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#708E50] group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        productCategory: category.name,
                        serviceType: 'Private Label Manufacturing',
                        source: 'Beauty Category Showcase',
                      })
                    }
                    className="py-2 px-3.5 rounded-lg bg-[#708E50] hover:bg-[#5F7A43] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
                    title={`Request quotation for ${category.name}`}
                  >
                    <span>Quote</span>
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
