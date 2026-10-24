import React from 'react';
import { 
  X, 
  Sparkles, 
  Clock, 
  Package, 
  CheckCircle, 
  Layers, 
  Send,
  Tag
} from 'lucide-react';
import { Product } from '../../types';
import { useQuoteModal } from '../../context/QuoteModalContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { openQuoteModal } = useQuoteModal();

  if (!product) return null;

  const handleInquireThisProduct = () => {
    onClose();
    openQuoteModal({
      productCategory: product.category,
      targetProduct: product.name,
      serviceType: 'Private Label Manufacturing',
      source: 'Product Category Page',
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Visual & Badges */}
          <div className="relative bg-stone-100 flex items-center justify-center min-h-[300px] md:min-h-full p-6">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain max-h-[420px] rounded-xl drop-shadow-md"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="px-3 py-1 rounded-md bg-[#1D3C34] text-white text-xs font-semibold tracking-wider uppercase shadow-xs">
                {product.category}
              </span>
              <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-xs text-stone-800 text-xs font-semibold border border-stone-200 shadow-xs">
                MOQ: {product.minOrderQuantity || `${product.minimumOrderQuantity || 1000} units`}
              </span>
            </div>
          </div>

          {/* Right: Technical Formulation Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#708E50] uppercase">
                  B2B Formulation Specification
                </span>
                <h3 id="product-title" className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-stone-500 italic mt-1">
                  {product.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {product.description}
              </p>

              {/* Key Actives Section */}
              <div className="pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
                  <span>Key Active Ingredients</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(product.ingredients || product.keyActives || []).map((act, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-md bg-[#E4EEE3] text-[#1D3C34] text-xs font-medium border border-[#C5DAC3]"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              {/* Formulation Benefits */}
              <div className="pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#708E50]" />
                  <span>Formulation & Performance Attributes</span>
                </h4>
                <ul className="grid grid-cols-1 gap-1 text-xs text-stone-600">
                  {product.benefits.map((ben, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#708E50] font-bold">•</span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Grid */}
              <div className="pt-2 border-t border-stone-100 grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-stone-200">
                  <div className="flex items-center gap-1 text-stone-500 font-medium">
                    <Tag className="w-3.5 h-3.5 text-[#DFBD89]" />
                    <span>Pricing</span>
                  </div>
                  <p className="font-semibold text-[#1D3C34] mt-0.5 text-[11px]">Request Pricing</p>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-stone-200">
                  <div className="flex items-center gap-1 text-stone-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Lead Time</span>
                  </div>
                  <p className="font-semibold text-stone-800 mt-0.5 text-[11px]">{product.leadTime || '4-6 weeks'}</p>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-stone-200">
                  <div className="flex items-center gap-1 text-stone-500 font-medium">
                    <Layers className="w-3.5 h-3.5 text-stone-400" />
                    <span>Shelf Life</span>
                  </div>
                  <p className="font-semibold text-stone-800 mt-0.5 text-[11px]">{product.shelfLife || '24 Months'}</p>
                </div>
              </div>

              {/* Packaging Options */}
              <div className="pt-2">
                <div className="flex items-start gap-1.5 text-xs text-stone-600">
                  <Package className="w-3.5 h-3.5 text-stone-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Packaging Options:</strong> {product.packagingOptions ? product.packagingOptions.join(', ') : 'Custom jars, bottles, tubes, and pumps'}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleInquireThisProduct}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#1D3C34] to-[#142B25] hover:from-[#142B25] hover:to-[#0D1A13] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#DFBD89]" />
                <span>Request Quotation for This Formula</span>
              </button>
              <button
                onClick={onClose}
                className="py-3 px-4 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium text-xs sm:text-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
