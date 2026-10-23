import React, { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight, Package } from 'lucide-react';
import { Product } from '../../types';
import { useQuoteModal } from '../../context/QuoteModalContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { openQuoteModal } = useQuoteModal();
  const [imgError, setImgError] = useState(false);

  const handleInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuoteModal({
      productCategory: product.category,
      targetProduct: product.name,
      serviceType: 'Private Label Manufacturing',
    });
  };

  const activeIngredients = product.ingredients || product.keyActives || [];
  const displayDescription = product.shortDescription || product.description;
  const primaryPackaging = product.packagingOptions?.[0];

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`View formulation details for ${product.name}`}
      onClick={() => onViewDetails(product)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onViewDetails(product);
        }
      }}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 select-none focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
    >
      <div>
        {/* Product Visual Container with Hover Zoom & Gradient Vignette */}
        <div className="relative aspect-4/3 w-full bg-stone-900 overflow-hidden">
          <img
            src={imgError ? '/src/assets/capabilities/skincare.jpg' : product.image}
            alt={`${product.name} — ${product.category} formulation concept`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-black/10 pointer-events-none" />

          {/* Top Left Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full bg-[#1D3C34]/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase shadow-xs border border-white/20">
              {product.category}
            </span>
          </div>

          {/* Bottom Right MOQ Badge */}
          <div className="absolute bottom-3 right-3">
            <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-stone-800 text-[11px] font-bold border border-stone-200 shadow-xs">
              MOQ: {product.minOrderQuantity || `${product.minimumOrderQuantity || 1000} units`}
            </span>
          </div>
        </div>

        {/* Product Content */}
        <div className="p-5 space-y-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#708E50] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span className="truncate">{product.tagline || 'Approved Formulation Benchmark'}</span>
          </div>

          {/* Product Title (H3 with line clamp) */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#708E50] transition-colors line-clamp-2 min-h-[48px] leading-snug">
            {product.name}
          </h3>

          {/* Product Short Description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed min-h-[34px]">
            {displayDescription}
          </p>

          {/* Key Actives Pill Preview */}
          <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
            {activeIngredients.slice(0, 2).map((act, i) => (
              <span
                key={i}
                className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#E4EEE3] text-[#1D3C34] font-semibold border border-[#C5DAC3]"
              >
                {act}
              </span>
            ))}
            {activeIngredients.length > 2 && (
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-500 font-medium border border-stone-200">
                +{activeIngredients.length - 2} more
              </span>
            )}
          </div>

          {/* Packaging Information Snippet */}
          {primaryPackaging && (
            <div className="flex items-center gap-1.5 text-[11px] text-stone-500 pt-1">
              <Package className="w-3 h-3 text-[#708E50] shrink-0" />
              <span className="truncate">{primaryPackaging}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Actions: View Formulation & Request a Quote */}
      <div className="p-4 bg-[#FAF9F5] border-t border-stone-100 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          className="w-full py-2.5 px-3 rounded-xl border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
        >
          <Eye className="w-3.5 h-3.5 text-stone-500" />
          <span>View Formulation</span>
        </button>

        <button
          type="button"
          onClick={handleInquiry}
          className="w-full py-2.5 px-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer group/btn"
        >
          <span>Request a Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#DFBD89] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
