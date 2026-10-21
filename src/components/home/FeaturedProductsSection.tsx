import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Filter } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { ProductDetailModal } from '../products/ProductDetailModal';
import { Product, ProductCategory } from '../../types';

export const FeaturedProductsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | ProductCategory>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: Array<'All' | ProductCategory> = [
    'All',
    'Cosmetic Products',
    'Skin Care',
    'Hair Care',
    'Bath Care',
    'Body Care',
    'Baby Care',
  ];

  const filteredProducts =
    activeFilter === 'All'
      ? PRODUCTS.filter((p) => p.isFeatured)
      : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-stone-200/60 overflow-hidden relative">
      {/* Soft Ambient Background Halos */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>Turnkey Benchmark Formulations</span>
          </div>

          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight">
            Featured B2B Cosmetic & Skincare Formulations
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Market-tested benchmark formulations available for turnkey private label branding or customized
            reformulation. Click any formulation to inspect active ingredients, MOQ specs, or request a custom quotation.
          </p>
        </motion.div>

        {/* Filter Pills with Segmented Background */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900 bg-white border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProductFilterPill"
                    className="absolute inset-0 bg-[#1D3C34] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isSelected ? 'bg-[#86A55B]' : 'bg-transparent'
                    }`}
                  />
                  <span>{cat === 'All' ? 'All Featured Formulations' : cat}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid with Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  product={product}
                  onViewDetails={(prod) => setSelectedProduct(prod)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Explore Link */}
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 font-semibold text-sm shadow-xs transition-all hover:shadow-md group"
          >
            <span>View Complete Product Catalog ({PRODUCTS.length} Available Formulations)</span>
            <ArrowRight className="w-4 h-4 text-[#708E50] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
