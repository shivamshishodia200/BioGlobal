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
    'Skin Care',
    'Facial Treatments',
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
      className="py-14 sm:py-18 lg:py-24 bg-[#0B1B17] border-b border-[#1A3830] overflow-hidden relative"
      aria-labelledby="featured-formulations-heading"
    >
      {/* Ambient Halos */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#DFBD89]/10 rounded-full blur-3xl pointer-events-none -z-0" />

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-[#254A3E] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>EXPLORE OUR FEATURED FORMULATIONS</span>
          </div>

          {/* Main Heading H2 */}
          <h2 
            id="featured-formulations-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight tracking-tight"
          >
            Discover Formulations Designed for Your Next Beauty Collection
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#DFBD89]">
            Inspired by Innovation. Developed Around Your Brand.
          </p>

          {/* Section Description */}
          <p className="text-stone-300 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-5xl lg:max-w-6xl">
            Explore approved cosmetic and personal care formulation concepts that reflect the versatility and precision of our manufacturing infrastructure. From advanced active serums to restorative facial treatments, hair care, and daily cleansers, we help brands launch market-ready collections tailored to commercial goals.
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
                    ? 'text-[#0B1B17] font-bold shadow-md'
                    : 'text-stone-300 hover:text-white bg-[#112520] border border-[#1F3F36] hover:bg-[#163028]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFeaturedProductFilterPill"
                    className="absolute inset-0 bg-[#DFBD89] rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isSelected ? 'bg-[#0B1B17]' : 'bg-transparent'
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
                className="bg-[#112520] rounded-2xl overflow-hidden border border-[#1F3F36] p-0 animate-pulse shadow-md flex flex-col justify-between"
              >
                <div className="aspect-4/3 w-full bg-[#18332B]" />
                <div className="p-5 space-y-3">
                  <div className="h-3 w-1/3 bg-[#18332B] rounded-md" />
                  <div className="h-5 w-4/5 bg-[#18332B] rounded-md" />
                  <div className="h-3 w-full bg-[#18332B] rounded-md" />
                  <div className="h-3 w-2/3 bg-[#18332B] rounded-md" />
                  <div className="pt-2 flex gap-2">
                    <div className="h-5 w-16 bg-[#18332B] rounded-md" />
                    <div className="h-5 w-16 bg-[#18332B] rounded-md" />
                  </div>
                </div>
                <div className="p-4 bg-[#0D1F1A] border-t border-[#1F3F36] grid grid-cols-2 gap-2">
                  <div className="h-9 bg-[#18332B] rounded-xl" />
                  <div className="h-9 bg-[#18332B] rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State with Retry Button */}
        {!loading && error && (
          <div className="max-w-md mx-auto text-center py-12 px-6 bg-[#112520] rounded-2xl border border-red-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-950/60 text-red-400 flex items-center justify-center mx-auto border border-red-500/30">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">
              Formulation Catalog Temporarily Unavailable
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              {error}
            </p>
            <button
              type="button"
              onClick={loadProducts}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DFBD89] text-[#0B1B17] text-xs font-bold shadow-md hover:bg-[#C8A46E] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Loading</span>
            </button>
          </div>
        )}

        {/* Empty Catalog State */}
        {!loading && !error && products.length === 0 && (
          <div className="max-w-lg mx-auto text-center py-16 px-6 bg-[#112520] rounded-2xl border border-[#1F3F36] shadow-md space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#16322A] text-[#DFBD89] flex items-center justify-center mx-auto border border-[#254A3E]">
              <Sparkles className="w-5 h-5 text-[#DFBD89]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">
              Custom Formulation Available
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Explore our cosmetic manufacturing capabilities and contact us to discuss suitable product formulations.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#DFBD89] text-[#0B1B17] text-xs font-bold shadow-md hover:bg-[#C8A46E] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#0B1B17]" />
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
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-start gap-3.5">
          {/* Primary CTA */}
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] font-bold text-sm shadow-md transition-all hover:shadow-lg group"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 text-[#0B1B17] group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#142C25] hover:bg-[#1C3D34] border border-[#254A3E] text-white font-semibold text-sm shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#DFBD89]" />
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
