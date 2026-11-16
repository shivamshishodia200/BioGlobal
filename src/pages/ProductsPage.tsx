import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight,
  FlaskConical 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/products/ProductCard';
import { ProductDetailModal } from '../components/products/ProductDetailModal';
import { Product } from '../types';
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
    <div className="w-full bg-[#0B1B17] text-white min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-[#0E201B] text-white py-16 px-4 sm:px-6 lg:px-8 mb-12 border-b border-[#1A3830]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-[#254A3E]">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Turnkey B2B Formulations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Manufacturing Product Catalog
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Browse our comprehensive formulation library across facial treatments, skincare, haircare, bath, body, and baby care. Every product is scalable from low MOQs to industrial volume.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Controls */}
        <div className="bg-[#112520] rounded-2xl p-6 border border-[#1F3F36] shadow-xl mb-10 space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulations, actives (e.g. Niacinamide, Bakuchiol)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#254A3E] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#DFBD89] bg-[#0B1B17] placeholder-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count & custom request CTA */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-semibold text-stone-300">
                Showing <strong className="text-[#DFBD89]">{filteredProducts.length}</strong> of {PRODUCTS.length} formulations
              </span>
              <button
                onClick={() => openQuoteModal({ serviceType: 'Custom Product Formulation' })}
                className="px-4 py-2 rounded-lg bg-[#142C25] hover:bg-[#1C3D34] border border-[#254A3E] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FlaskConical className="w-3.5 h-3.5 text-[#DFBD89]" />
                <span>Custom Formula R&amp;D</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-[#DFBD89] text-[#0B1B17] font-bold shadow-md'
                  : 'bg-[#0B1B17] text-stone-300 border border-[#1F3F36] hover:bg-[#163028]'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.name
                    ? 'bg-[#DFBD89] text-[#0B1B17] font-bold shadow-md'
                    : 'bg-[#0B1B17] text-stone-300 border border-[#1F3F36] hover:bg-[#163028]'
                }`}
              >
                {cat.name} ({cat.itemCount || 8})
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
          <div className="text-center py-20 bg-[#112520] rounded-2xl border border-[#1F3F36] p-8 space-y-4">
            <p className="text-base font-semibold text-white">
              No matching formulations found for "{searchQuery}"
            </p>
            <p className="text-xs text-stone-300 max-w-md mx-auto">
              Our chemists formulate custom formulas to any client specification. Submit your benchmark or ingredient requirements and we will engineer it for you.
            </p>
            <button
              onClick={() => openQuoteModal({ serviceType: 'Custom Product Formulation' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] text-xs font-bold transition-all"
            >
              <span>Submit Custom Formulation Request</span>
              <ArrowRight className="w-4 h-4 text-[#0B1B17]" />
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
