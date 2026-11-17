import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  ArrowRight,
  FlaskConical 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/products/ProductCard';
import { ProductDetailModal } from '../components/products/ProductDetailModal';
import { Product, ProductCategory } from '../types';
import { useQuoteModal } from '../context/QuoteModalContext';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { openQuoteModal } = useQuoteModal();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.keyActives.some(act => act.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen py-12">
      {/* Header Banner */}
      <div className="bg-[#1D3C34] text-white py-16 px-4 sm:px-6 lg:px-8 mb-12 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Turnkey B2B Formulations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Manufacturing Product Catalog
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Browse our comprehensive formulation library across cosmetic, skincare, haircare, bath, body, and baby care. Every product is scalable from low MOQs to industrial volume.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm mb-10 space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulations, actives (e.g. Niacinamide, Keratin)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1D3C34] bg-[#FAF9F5]/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count & custom request CTA */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-semibold text-stone-500">
                Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} formulations
              </span>
              <button
                onClick={() => openQuoteModal({ serviceType: 'Custom Product Formulation' })}
                className="px-4 py-2 rounded-lg bg-[#FAF9F5] hover:bg-stone-100 border border-stone-300 text-xs font-semibold text-[#1D3C34] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FlaskConical className="w-3.5 h-3.5 text-[#708E50]" />
                <span>Custom Formula R&D</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-[#1D3C34] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.name
                    ? 'bg-[#1D3C34] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.name} ({cat.itemCount})
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8 space-y-4">
            <p className="text-base font-semibold text-stone-800">
              No matching formulations found for "{searchQuery}"
            </p>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Our chemists formulate custom formulas to any client specification. Submit your benchmark or ingredient requirements and we will engineer it for you.
            </p>
            <button
              onClick={() => openQuoteModal({ serviceType: 'Custom Product Formulation' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1D3C34] text-white text-xs font-semibold"
            >
              <span>Submit Custom Formulation Request</span>
              <ArrowRight className="w-4 h-4 text-[#DFBD89]" />
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
