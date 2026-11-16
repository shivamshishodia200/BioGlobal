import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Package, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PartnershipShowcase } from '../components/home/PartnershipShowcase';

export const PrivateLabelPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen py-12">
      {/* Hero Header */}
      <div className="bg-[#1D3C34] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#142B25]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Turnkey Brand Launch</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Private Label Cosmetic Manufacturing
          </h1>

          <p className="text-stone-300 text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Fast-track your cosmetic brand launch with our library of pre-tested, stability-certified, and dermatologist-evaluated formulations ready for your custom packaging and branding.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal({ serviceType: 'Private Label Manufacturing' })}
              className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#c9a775] text-[#14261D] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Request Private Label Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#14261D]" />
            </button>
            <Link
              to="/products"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Browse Stock Formulations
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center font-bold">
              <Clock className="w-6 h-6 text-[#1D3C34]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">Rapid 4-Week Turnaround</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Because all private label formulas are pre-stabilized and preservative-tested, you bypass lengthy 6-month lab trial cycles and reach retail shelves quickly.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center font-bold">
              <Layers className="w-6 h-6 text-[#1D3C34]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">Low Trial MOQs</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Test consumer appetite with accessible minimum order quantities starting from 500 to 1,000 units per formulation without tying up massive working capital.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center font-bold">
              <Package className="w-6 h-6 text-[#1D3C34]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">Custom Packaging & Artwork</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Pair premium formulations with custom screen-printed frosted glass droppers, luxury acrylic jars, matte squeeze tubes, and foil-stamped secondary cartons.
            </p>
          </div>
        </div>

        {/* Live Client Manufacturing Case Study */}
        <PartnershipShowcase />

        {/* Private Label Categories Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Select Your Category to Private Label
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Explore formulation options available across our six primary manufacturing sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-[#708E50]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">{cat.name}</h4>
                  <p className="text-xs text-stone-500 mb-4">{cat.tagline}</p>
                  <div className="space-y-1.5 text-xs text-stone-600">
                    {cat.popularFormulations.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50] flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-xs font-semibold text-[#1D3C34] hover:underline"
                  >
                    View Formulas →
                  </Link>
                  <button
                    onClick={() => openQuoteModal({ productCategory: cat.name, serviceType: 'Private Label Manufacturing' })}
                    className="text-xs font-bold text-[#708E50] hover:text-[#5E7D40] cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
