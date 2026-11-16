import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Send,
  Home,
  CheckCircle2,
  FlaskConical
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { ProductDetailModal } from '../components/products/ProductDetailModal';
import { Product } from '../types';
import { useQuoteModal } from '../context/QuoteModalContext';

const SEO_TITLES: Record<string, string> = {
  'skin-care': 'Private Label Skincare Products | The BioGlobal',
  'facial-treatments': 'Facial Treatments & Derma Care Manufacturing | The BioGlobal',
  'hair-care': 'Hair Care Product Manufacturing | The BioGlobal',
  'bath-care': 'Bath & Cleansing Product Solutions | The BioGlobal',
  'body-care': 'Body Care Product Manufacturing | The BioGlobal',
  'baby-care': 'Baby Care Product Development | The BioGlobal',
};

const SEO_DESCRIPTIONS: Record<string, string> = {
  'skin-care': 'Partner with The BioGlobal for private label skincare serums, creams, cleansers, and masks manufactured under ISO 22716 GMP standards.',
  'facial-treatments': 'Manufacture professional skin brightening creams, salon facial kits, and restorative night creams formulated to rigorous standards.',
  'hair-care': 'Manufacture professional shampoos, conditioners, hair masks, and scalp care formulations customized for your beauty brand.',
  'bath-care': 'Discover contract manufacturing for luxury bathing soaps, shower gels, liquid hand washes, bath scrubs, and bath salts.',
  'body-care': 'Create market-ready body lotions, whipped body butters, creams, scrubs, and nourishing massage oils tailored to your brand.',
  'baby-care': 'Develop gentle baby shampoos, washes, soothing creams, and massage oils formulated to rigorous personal care safety standards.',
};

export const CategoryPage: React.FC = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug?: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { openQuoteModal } = useQuoteModal();
  const navigate = useNavigate();

  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  // Set category-specific SEO title & meta description
  useEffect(() => {
    if (category) {
      const pageTitle = SEO_TITLES[category.slug] || `${category.name} Manufacturing | The BioGlobal`;
      document.title = pageTitle;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          SEO_DESCRIPTIONS[category.slug] || category.description
        );
      }
    }
  }, [category]);

  // Sync selectedProduct if productSlug is in URL
  useEffect(() => {
    if (category && productSlug) {
      const found = PRODUCTS.find((p) => p.categorySlug === category.slug && p.slug === productSlug);
      if (found) {
        setSelectedProduct(found);
      }
    }
  }, [category, productSlug]);

  if (categorySlug === 'cosmetic-products') {
    return <Navigate to="/category/facial-treatments" replace />;
  }

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);
  const relatedCategories = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);

  const handleCloseModal = () => {
    setSelectedProduct(null);
    if (productSlug) {
      navigate(`/category/${category.slug}`, { replace: true });
    }
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    if (product.slug) {
      navigate(`/category/${category.slug}/${product.slug}`, { replace: true });
    }
  };

  return (
    <div className="w-full bg-[#0B1B17] text-white min-h-screen py-6 sm:py-10">
      {/* 1. BREADCRUMBS NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-stone-400">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#DFBD89] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <Link to="/products" className="hover:text-[#DFBD89] transition-colors">
            Product Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-[#DFBD89] font-bold" aria-current="page">
            {category.name}
          </span>
        </nav>
      </div>

      {/* 2. CATEGORY HERO BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-[#112520] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#1F3F36] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text & Specifications */}
          <div className="lg:col-span-7 space-y-4">
            {/* Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-[#254A3E]">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
              <span>Contract Manufacturing &amp; Private Label</span>
            </div>

            {/* Category Heading (H1) */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              {category.name}
            </h1>

            {/* Category Tagline */}
            <p className="text-xs sm:text-sm font-bold text-[#DFBD89] uppercase tracking-wider">
              {category.tagline}
            </p>

            {/* Category Description */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
              {category.description}
            </p>

            {/* Category Verified Specifications */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-[#0B1B17] border border-[#254A3E] text-stone-200 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBD89]" />
                <span>MOQ from 1,000 Units</span>
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#0B1B17] border border-[#254A3E] text-stone-200 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBD89]" />
                <span>ISO 22716 GMP Facility</span>
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#0B1B17] border border-[#254A3E] text-stone-200 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBD89]" />
                <span>Custom R&amp;D Available</span>
              </span>
            </div>

            {/* Main CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  openQuoteModal({
                    productCategory: category.name,
                    serviceType: 'Private Label Manufacturing',
                    source: 'Product Category Page',
                  })
                }
                className="px-6 py-3 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4 text-[#0B1B17]" />
                <span>Inquire for {category.name}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden border border-[#1F3F36] shadow-xl bg-stone-900 aspect-4/3 sm:aspect-1/1 lg:aspect-4/3 max-h-[460px]">
              <img
                src={category.image}
                alt={`${category.name} collection packaging`}
                className="product-category-image object-cover w-full h-full"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B17]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-semibold">
                <span className="drop-shadow-xs">{category.name} Showcase</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0B1B17]/90 backdrop-blur-xs text-[#DFBD89] text-[10px] font-bold border border-[#254A3E]">
                  {categoryProducts.length} Formulations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PRODUCT CATALOG GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#1A3830]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white">
              Formulation Lineup ({categoryProducts.length} Product Types)
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
              Select any formulation below to inspect packaging, active ingredients, and minimum batch requirements.
            </p>
          </div>

          <button
            onClick={() =>
              openQuoteModal({
                productCategory: category.name,
                serviceType: 'Private Label Manufacturing',
                source: 'Product Category Page',
              })
            }
            className="px-5 py-2.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md shrink-0"
          >
            <Send className="w-3.5 h-3.5 text-[#0B1B17]" />
            <span>Inquire for {category.name}</span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleOpenProduct}
            />
          ))}
        </div>

        {/* 4. CUSTOM FORMULATION CALLOUT */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#112520] border border-[#1F3F36] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#132B25] text-[#DFBD89] text-[11px] font-bold uppercase tracking-wider border border-[#254A3E]">
              <FlaskConical className="w-3.5 h-3.5 text-[#DFBD89]" />
              <span>Bespoke Formulation Laboratory</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Need a custom {category.name.toLowerCase()} formulation or benchmark match?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Our in-house cosmetic R&amp;D team can formulate bespoke textures, match performance benchmarks, or engineer unique botanical blends tailored to your brand's specifications.
            </p>
          </div>

          <button
            onClick={() =>
              openQuoteModal({
                productCategory: category.name,
                serviceType: 'Custom Product Formulation',
                source: 'Product Category Page',
              })
            }
            className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shrink-0 transition-all cursor-pointer"
          >
            <span>Request Bespoke Formulation</span>
            <ArrowRight className="w-4 h-4 text-[#0B1B17]" />
          </button>
        </div>

        {/* 5. RELATED CATEGORIES */}
        <div className="pt-10 border-t border-[#1A3830] space-y-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Explore Related Beauty Categories
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Expand your product collection across our specialized manufacturing verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedCategories.map((rel) => (
              <Link
                key={rel.id}
                to={`/category/${rel.slug}`}
                className="group p-3 rounded-2xl bg-[#112520] border border-[#1F3F36] shadow-md hover:shadow-xl hover:border-[#DFBD89]/60 transition-all flex flex-col justify-between"
              >
                <div className="aspect-4/3 w-full rounded-xl overflow-hidden bg-stone-900 mb-2.5">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-white group-hover:text-[#DFBD89] transition-colors truncate">
                    {rel.name}
                  </h4>
                  <p className="text-[11px] text-stone-400 line-clamp-1">
                    {rel.itemCount || 8} Product Types
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1 text-[11px] font-semibold text-[#DFBD89] group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 6. PRODUCT DETAIL MODAL */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
};
