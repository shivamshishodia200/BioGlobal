import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Package,
  FlaskConical,
  ArrowUpRight,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { COTX_PARTNERSHIP, PartnershipProduct } from '../../data/partnerships';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const PartnershipShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<PartnershipProduct>(
    COTX_PARTNERSHIP.products[0]
  );
  const [viewMode, setViewMode] = useState<'poster' | 'packshot'>('poster');
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="w-full space-y-6">
      {/* Spotlight Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/90 shadow-sm relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 space-y-6">
          {/* Section Sub-Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-[11px] font-bold tracking-wider uppercase border border-[#C5DAC3]">
                <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
                <span>REAL MANUFACTURING COLLABORATION</span>
              </div>
              <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-stone-900 tracking-tight">
                Case Study: COTX Luxury Skincare Line
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
                {COTX_PARTNERSHIP.description}
              </p>
            </div>

            {/* Quick stats pill */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <div className="px-4 py-2 rounded-2xl bg-[#FAF9F5] border border-stone-200 text-left">
                <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                  Turnkey Line
                </span>
                <span className="text-sm font-bold text-[#1D3C34]">
                  5 Custom SKUs
                </span>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-[#FAF9F5] border border-stone-200 text-left">
                <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                  Lead Time
                </span>
                <span className="text-sm font-bold text-[#708E50]">
                  21–28 Days
                </span>
              </div>
            </div>
          </div>

          {/* Product Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {COTX_PARTNERSHIP.products.map((prod) => {
              const isSelected = prod.id === selectedProduct.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#1D3C34] text-white border-[#1D3C34] shadow-md'
                      : 'bg-[#FAF9F5] text-stone-700 hover:text-stone-900 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-transform ${
                      isSelected ? 'bg-[#DFBD89] scale-125' : 'bg-stone-300'
                    }`}
                  />
                  <span>{prod.name}</span>
                </button>
              );
            })}
          </div>

          {/* Split Detail Grid: Product Visual on Left, Specifications on Right */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F5] rounded-2xl p-5 sm:p-7 border border-stone-200/90 shadow-2xs"
            >
              {/* Left: High-Res Image Display (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full aspect-4/5 sm:aspect-1/1 lg:aspect-4/5 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-md group flex items-center justify-center p-3">
                  <img
                    src={
                      viewMode === 'poster'
                        ? selectedProduct.image
                        : selectedProduct.packshotImage
                    }
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Net Qty Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1D3C34]/90 text-white text-[11px] font-bold tracking-wider backdrop-blur-xs border border-white/20 shadow-xs">
                    {selectedProduct.netQty}
                  </div>

                  {/* View Mode Toggle Switch (Full Showcase vs Packshot) */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/95 p-1 rounded-xl border border-stone-200 shadow-sm backdrop-blur-xs">
                    <button
                      type="button"
                      onClick={() => setViewMode('poster')}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        viewMode === 'poster'
                          ? 'bg-[#1D3C34] text-white'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      Showcase
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('packshot')}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        viewMode === 'packshot'
                          ? 'bg-[#1D3C34] text-white'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      Packshot
                    </button>
                  </div>
                </div>

                {/* Subtext info */}
                <span className="text-[11px] text-stone-600 mt-2 text-center">
                  Packshot &amp; formulation manufactured under contract for COTX Luxury Skincare
                </span>
              </div>

              {/* Right: Formulation & Manufacturing Specs (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Brand & Category */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1D3C34] text-white text-[10px] font-bold uppercase tracking-wider">
                    {selectedProduct.brand}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: selectedProduct.colorTheme.bgPill,
                      color: selectedProduct.colorTheme.textPill,
                      borderColor: selectedProduct.colorTheme.border,
                    }}
                  >
                    {selectedProduct.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold text-2xl sm:text-3xl text-stone-900 tracking-tight">
                    {selectedProduct.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#708E50]">
                    {selectedProduct.tagline}
                  </p>
                </div>

                {/* Key Active Actives Pills */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold uppercase text-stone-600 tracking-wider flex items-center gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5 text-[#708E50]" />
                    <span>Compounded Key Actives:</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.keyActives.map((active, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-800 shadow-2xs"
                      >
                        {active}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase text-stone-600 tracking-wider block">
                    Product Formulation Benefits:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProduct.benefits.map((b, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-stone-200/80 text-xs text-stone-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packaging Details */}
                <div className="p-3 rounded-xl bg-white border border-stone-200/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E4EEE3] flex items-center justify-center flex-shrink-0">
                    <Package className="w-4 h-4 text-[#1D3C34]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-600 block tracking-wider">
                      Turnkey Packaging &amp; Labeling:
                    </span>
                    <p className="text-xs font-medium text-stone-800">
                      {selectedProduct.packagingDescription}
                    </p>
                  </div>
                </div>

                {/* Quality Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {selectedProduct.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#E4EEE3]/60 border border-[#C5DAC3]/70 text-[10px] font-semibold text-[#1D3C34]"
                    >
                      <ShieldCheck className="w-3 h-3 text-[#708E50]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        serviceType: 'Private Label Manufacturing',
                        productCategory: selectedProduct.category,
                      })
                    }
                    className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Request Sample Formulation</span>
                    <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    to="/private-label-manufacturing"
                    className="px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm border border-stone-300 shadow-2xs transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Explore Private Label Options</span>
                    <ArrowUpRight className="w-4 h-4 text-[#708E50]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Thumbnail Strip for Fast Comparison */}
          <div className="pt-2">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-3">
              All 5 Formulations in this Manufacturing Collection:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {COTX_PARTNERSHIP.products.map((item) => {
                const isActive = item.id === selectedProduct.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className={`p-2.5 rounded-2xl bg-white border text-left transition-all duration-200 cursor-pointer flex flex-col items-center gap-2 group ${
                      isActive
                        ? 'border-[#1D3C34] shadow-md ring-2 ring-[#708E50]/30'
                        : 'border-stone-200 hover:border-stone-300 hover:shadow-xs'
                    }`}
                  >
                    <div className="w-full aspect-1/1 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center p-1">
                      <img
                        src={item.packshotImage}
                        alt={item.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="w-full text-center">
                      <p className="text-[11px] font-bold text-stone-900 truncate">
                        {item.name}
                      </p>
                      <span className="text-[10px] text-stone-500 block truncate">
                        {item.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
