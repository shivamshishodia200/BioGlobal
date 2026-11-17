import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, MessageSquare, RefreshCw, AlertCircle } from 'lucide-react';
import { Product, ProductCategory } from '../../types';
import { ProductCard } from '../products/ProductCard';
import { ProductDetailModal } from '../products/ProductDetailModal';
import { fetchFeaturedProducts } from '../../services/productsApi';

export const FeaturedProductsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | ProductCategory>('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
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

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFeaturedProducts({
        featured: activeFilter === 'All' ? true : undefined,
        published: true,
        category: activeFilter,
      });
      setProducts(data);
    } catch (err) {
      console.error('Failed to load featured formulations:', err);
      setError('Unable to load formulations. Please try again or explore our catalog.');
    } finally {
      setLoading(false);
    }
  }, [activeFilter]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <section 
      id="featured-formulations"
      className="py-12 sm:py-14 lg:py-16 bg-[#FAF9F5] border-b border-stone-200/60 overflow-hidden relative"
      aria-labelledby="featured-formulations-heading"
    >
      {/* Ambient Halos */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-left w-full mb-8 space-y-2.5 sm:space-y-3"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>EXPLORE OUR FEATURED FORMULATIONS</span>
          </div>

          {/* Main Heading H2 */}
          <h2 
            id="featured-formulations-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-stone-900 leading-tight tracking-tight"
          >
            Discover Formulations Designed for Your Next Beauty Collection
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#708E50]">
            Inspired by Innovation. Developed Around Your Brand.
          </p>

          {/* Section Description */}
          <p className="text-stone-600 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-5xl lg:max-w-6xl">
            Explore approved cosmetic and personal care formulation concepts that reflect the versatility and precision of our manufacturing infrastructure. From advanced active serums to restorative hair care and daily cleansers, we help brands launch market-ready collections tailored to commercial goals.
          </p>
        </motion.div>

        {/* Filter Pills with Segmented Background */}
        <div 
          className="flex items-center justify-start gap-2 flex-wrap mb-8"
          role="tablist"
          aria-label="Filter formulations by category"
        >
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900 bg-white border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFeaturedProductFilterPill"
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

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 p-0 animate-pulse shadow-xs flex flex-col justify-between"
              >
                <div className="aspect-4/3 w-full bg-stone-200" />
                <div className="p-5 space-y-3">
                  <div className="h-3 w-1/3 bg-stone-200 rounded-md" />
                  <div className="h-5 w-4/5 bg-stone-200 rounded-md" />
                  <div className="h-3 w-full bg-stone-200 rounded-md" />
                  <div className="h-3 w-2/3 bg-stone-200 rounded-md" />
                  <div className="pt-2 flex gap-2">
                    <div className="h-5 w-16 bg-stone-200 rounded-md" />
                    <div className="h-5 w-16 bg-stone-200 rounded-md" />
                  </div>
                </div>
                <div className="p-4 bg-stone-50 border-t border-stone-100 grid grid-cols-2 gap-2">
                  <div className="h-9 bg-stone-200 rounded-xl" />
                  <div className="h-9 bg-stone-200 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State with Retry Button */}
        {!loading && error && (
          <div className="max-w-md mx-auto text-center py-12 px-6 bg-white rounded-2xl border border-red-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Formulation Catalog Temporarily Unavailable
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {error}
            </p>
            <button
              type="button"
              onClick={loadProducts}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D3C34] text-white text-xs font-semibold shadow-xs hover:bg-[#142B25] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Loading</span>
            </button>
          </div>
        )}

        {/* Empty Catalog State */}
        {!loading && !error && products.length === 0 && (
          <div className="max-w-lg mx-auto text-center py-16 px-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center mx-auto">
              <Sparkles className="w-5 h-5 text-[#708E50]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Custom Formulation Available
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Explore our cosmetic manufacturing capabilities and contact us to discuss suitable product formulations.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1D3C34] text-white text-xs font-semibold shadow-xs hover:bg-[#142B25] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#DFBD89]" />
              <span>Discuss Custom Formulation</span>
            </Link>
          </div>
        )}

        {/* Products Grid with Layout Animation */}
        {!loading && !error && products.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7"
          >
            <AnimatePresence>
              {products.map((product) => (
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
        )}

        {/* Section Dual CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-start gap-3.5">
          {/* Primary CTA */}
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-sm shadow-sm transition-all hover:shadow-md group"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 text-[#DFBD89] group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 font-semibold text-sm shadow-2xs transition-all hover:shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#708E50]" />
            <span>Discuss Custom Formulation</span>
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
