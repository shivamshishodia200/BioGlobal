import React, { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight, Package, Tag } from 'lucide-react';
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
      source: 'Product Category Page',
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
      className="group bg-[#112520] rounded-2xl overflow-hidden border border-[#1F3F36] shadow-md hover:border-[#DFBD89]/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 select-none focus:outline-hidden focus:ring-2 focus:ring-[#DFBD89]"
    >
      <div>
        {/* Product Visual Container with Hover Zoom & Gradient Vignette */}
        <div className="relative aspect-4/3 w-full bg-[#0A1814] overflow-hidden">
          <img
            src={imgError ? '/images/bioglobal/categories/skincare.webp' : product.image}
            alt={`${product.name} — ${product.category} packaging`}
            onError={() => setImgError(true)}
            className="product-card-image transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#112520] via-black/20 to-transparent pointer-events-none" />

          {/* Top Left Category Badge */}
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2.5 py-1 rounded-full bg-[#0B1B17]/90 backdrop-blur-md text-[#DFBD89] text-[10px] font-bold tracking-wider uppercase shadow-xs border border-[#254A3E]">
              {product.category}
            </span>
          </div>

          {/* Bottom Right MOQ Badge */}
          <div className="absolute bottom-2.5 right-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[#0B1B17]/90 backdrop-blur-xs text-stone-200 text-[10px] font-bold border border-[#254A3E] shadow-2xs">
              MOQ: {product.minOrderQuantity || '1,000 units'}
            </span>
          </div>
        </div>

        {/* Product Content */}
        <div className="p-4 sm:p-5 space-y-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#DFBD89] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89] shrink-0" />
            <span className="truncate">{product.tagline || 'Approved Formulation Benchmark'}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base font-bold text-white group-hover:text-[#DFBD89] transition-colors line-clamp-2 min-h-[44px] leading-snug">
            {product.name}
          </h3>

          {/* Product Short Description */}
          <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed min-h-[34px]">
            {displayDescription}
          </p>

          {/* Key Actives Pill Preview */}
          <div className="pt-2 border-t border-[#1F3F36] flex flex-wrap items-center gap-1.5 min-h-[28px]">
            {activeIngredients.slice(0, 3).map((act, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-md bg-[#0B1B17] text-stone-200 font-semibold border border-[#254A3E] truncate max-w-[130px]"
              >
                {act}
              </span>
            ))}
            {activeIngredients.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#0B1B17] text-stone-400 font-medium border border-[#254A3E]">
                +{activeIngredients.length - 3} more
              </span>
            )}
          </div>

          {/* Packaging & Pricing Info */}
          <div className="pt-2 border-t border-[#1F3F36] flex items-center justify-between text-[11px]">
            {primaryPackaging ? (
              <div className="flex items-center gap-1 text-stone-400 truncate max-w-[58%]">
                <Package className="w-3 h-3 text-[#DFBD89] shrink-0" />
                <span className="truncate">{primaryPackaging}</span>
              </div>
            ) : <div />}
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#DFBD89] bg-[#0B1B17] px-2 py-0.5 rounded border border-[#254A3E]">
              <Tag className="w-2.5 h-2.5 text-[#DFBD89]" />
              <span>Request Pricing</span>
            </span>
          </div>
        </div>
      </div>

      {/* Card Actions: View Details & Request a Quote (Fixed to bottom) */}
      <div className="p-3.5 bg-[#0D1F1A] border-t border-[#1F3F36] grid grid-cols-2 gap-2 mt-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          className="w-full py-2 px-2.5 rounded-xl border border-[#254A3E] bg-[#142C25] hover:bg-[#1C3D34] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
        >
          <Eye className="w-3.5 h-3.5 text-stone-300" />
          <span>View Details</span>
        </button>

        <button
          type="button"
          onClick={handleInquiry}
          className="w-full py-2 px-2.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer group/btn"
        >
          <span>Request Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#0B1B17] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
