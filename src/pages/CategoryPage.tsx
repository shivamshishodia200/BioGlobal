import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Package, 
  Send 
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { ProductDetailModal } from '../components/products/ProductDetailModal';
import { Product } from '../types';
import { useQuoteModal } from '../context/QuoteModalContext';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { openQuoteModal } = useQuoteModal();

  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen py-12">
      {/* Category Hero Banner */}
      <div className="relative bg-[#1D3C34] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#142B25] via-[#1D3C34]/90 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 space-y-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs text-[#DFBD89] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Categories</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Manufacturing Category Profile</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {category.name}
          </h1>

          <p className="text-stone-200 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            {category.description}
          </p>

          {/* Popular Formulations Tag Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-300 font-semibold">Specialized Capabilities:</span>
            {category.popularFormulations.map((item, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Formulation Lineup ({categoryProducts.length} Available)
            </h2>
            <p className="text-xs text-stone-500">
              Standard commercial batches available from 1,000 units. Custom ingredient substitutions available upon request.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal({ productCategory: category.name, serviceType: 'Private Label Manufacturing' })}
            className="px-5 py-2.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Inquire for {category.name} Line</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>

        {/* Custom Formulation Callout for this Category */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Have a proprietary {category.name.toLowerCase()} formula or benchmark?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our master cosmetic chemists can reverse-engineer benchmarks, optimize existing stability profiles, or create an exclusive proprietary blend matching your specific marketing claims.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal({ productCategory: category.name, serviceType: 'Custom Product Formulation' })}
            className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs flex-shrink-0 transition-colors cursor-pointer"
          >
            <span>Request Bespoke Formulation</span>
            <ArrowRight className="w-4 h-4 text-[#DFBD89]" />
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
