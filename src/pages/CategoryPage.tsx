import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight,
  Package, 
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
  'cosmetic-products': 'Color Cosmetics & Makeup Product Manufacturing | The BioGlobal',
  'skin-care': 'Private Label Skincare Products | The BioGlobal',
  'hair-care': 'Hair Care Product Manufacturing | The BioGlobal',
  'bath-care': 'Bath & Cleansing Product Solutions | The BioGlobal',
  'body-care': 'Body Care Product Manufacturing | The BioGlobal',
  'baby-care': 'Baby Care Product Development | The BioGlobal',
};

const SEO_DESCRIPTIONS: Record<string, string> = {
  'cosmetic-products': 'Explore custom color cosmetic and makeup formulations, from foundations to setting sprays with The BioGlobal manufacturing solutions.',
  'skin-care': 'Partner with The BioGlobal for private label skincare serums, creams, cleansers, and masks manufactured under ISO 22716 GMP standards.',
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

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);
  const relatedCategories = CATEGORIES.filter((c) => c.slug !== category.slug);

  const handleCloseModal = () => {
    setSelectedProduct(null);
    if (productSlug) {
      navigate(`/products/${category.slug}`, { replace: true });
    }
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    if (product.slug) {
      navigate(`/products/${category.slug}/${product.slug}`, { replace: true });
    }
  };

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen py-6 sm:py-10">
      {/* 1. BREADCRUMBS NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-stone-500">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#1D3C34] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/products" className="hover:text-[#1D3C34] transition-colors">
            Product Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-900 font-bold" aria-current="page">
            {category.name}
          </span>
        </nav>
      </div>

      {/* 2. CATEGORY HERO BANNER (Balanced 2-Column Text & Image Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text & Specifications */}
          <div className="lg:col-span-7 space-y-4">
            {/* Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
              <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
              <span>Contract Manufacturing & Private Label</span>
            </div>

            {/* Category Heading (H1) */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-tight">
              {category.name}
            </h1>

            {/* Category Tagline */}
            <p className="text-xs sm:text-sm font-bold text-[#708E50] uppercase tracking-wider">
              {category.tagline}
            </p>

            {/* Category Description */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              {category.description}
            </p>

            {/* Category Verified Specifications */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-[#FAF9F5] border border-stone-200 text-stone-800 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50]" />
                <span>MOQ from 1,000 Units</span>
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#FAF9F5] border border-stone-200 text-stone-800 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50]" />
                <span>ISO 22716 GMP Facility</span>
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#FAF9F5] border border-stone-200 text-stone-800 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50]" />
                <span>Custom R&D Available</span>
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
                className="px-6 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <Send className="w-4 h-4 text-[#DFBD89]" />
                <span>Inquire for {category.name}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image with Natural Proportions (~420-520px height) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 aspect-4/3 sm:aspect-1/1 lg:aspect-4/3 max-h-[460px]">
              <img
                src={category.image}
                alt={`${category.name} collection packaging`}
                className="product-category-image"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-semibold">
                <span className="drop-shadow-xs">{category.name} Showcase</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-stone-900 text-[10px] font-bold">
                  8 Formulations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PRODUCT CATALOG GRID (8 PRODUCTS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Formulation Lineup ({categoryProducts.length} Product Types)
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
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
            className="px-5 py-2.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm shrink-0"
          >
            <Send className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Inquire for {category.name}</span>
          </button>
        </div>

        {/* 8 Product Cards Grid */}
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
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-[11px] font-bold uppercase tracking-wider">
              <FlaskConical className="w-3.5 h-3.5 text-[#708E50]" />
              <span>Bespoke Formulation Laboratory</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Need a custom {category.name.toLowerCase()} formulation or benchmark match?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our in-house cosmetic R&D team can formulate bespoke textures, match performance benchmarks, or engineer unique botanical blends tailored to your brand's specifications.
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
            className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs shrink-0 transition-colors cursor-pointer"
          >
            <span>Request Bespoke Formulation</span>
            <ArrowRight className="w-4 h-4 text-[#DFBD89]" />
          </button>
        </div>

        {/* 5. RELATED CATEGORIES */}
        <div className="pt-10 border-t border-stone-200/80 space-y-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Explore Related Beauty Categories
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Expand your product collection across our six specialized manufacturing verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedCategories.map((rel) => (
              <Link
                key={rel.id}
                to={`/products/${rel.slug}`}
                className="group p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-[#C5DAC3] transition-all flex flex-col justify-between"
              >
                <div className="aspect-4/3 w-full rounded-xl overflow-hidden bg-stone-100 mb-2.5">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 group-hover:text-[#708E50] transition-colors truncate">
                    {rel.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 line-clamp-1">
                    8 Product Types
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1 text-[11px] font-semibold text-[#708E50] group-hover:translate-x-0.5 transition-transform">
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
