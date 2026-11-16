import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Package, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useQuoteModal } from '../context/QuoteModalContext';

export const PrivateLabelPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="w-full bg-[#0B1B17] text-white min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-[#0E201B] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#1A3830]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-[#254A3E]">
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
              className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#c9a775] text-[#0B1B17] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Private Label Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#0B1B17]" />
            </button>
            <Link
              to="/products"
              className="px-6 py-3.5 rounded-xl bg-[#142C25] hover:bg-[#1C3D34] text-white font-semibold text-xs sm:text-sm border border-[#254A3E] transition-all"
            >
              Browse Stock Formulations
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#112520] border border-[#1F3F36] shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1B17] text-[#DFBD89] border border-[#254A3E] flex items-center justify-center font-bold">
              <Clock className="w-6 h-6 text-[#DFBD89]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Rapid 4-Week Turnaround</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Because all private label formulas are pre-stabilized and preservative-tested, you bypass lengthy 6-month lab trial cycles and reach retail shelves quickly.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#112520] border border-[#1F3F36] shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1B17] text-[#DFBD89] border border-[#254A3E] flex items-center justify-center font-bold">
              <Layers className="w-6 h-6 text-[#DFBD89]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Low Trial MOQs</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Test consumer appetite with accessible minimum order quantities starting from 500 to 1,000 units per formulation without tying up massive working capital.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#112520] border border-[#1F3F36] shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1B17] text-[#DFBD89] border border-[#254A3E] flex items-center justify-center font-bold">
              <Package className="w-6 h-6 text-[#DFBD89]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Custom Packaging & Artwork</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Pair premium formulations with custom screen-printed frosted glass droppers, luxury acrylic jars, matte squeeze tubes, and foil-stamped secondary cartons.
            </p>
          </div>
        </div>

        {/* Private Label Categories Showcase (6 Categories) */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-bold tracking-wider uppercase border border-[#254A3E] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
              <span>MANUFACTURING SECTORS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Select Your Category to Private Label
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-medium">
              Explore formulation options available across our primary manufacturing sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#112520] text-white border-2 border-[#1F3F36] hover:border-[#DFBD89] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Luxury Card Ambient Glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#86A55B]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Category Image Preview Header */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-[#0B1B17] border border-[#254A3E]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112520] via-[#112520]/40 to-transparent" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0B1B17]/90 backdrop-blur-md text-[11px] font-bold text-[#DFBD89] border border-[#254A3E] shadow-xs flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-[#DFBD89]" />
                      <span>{cat.itemCount || 8}+ Formulations</span>
                    </div>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#DFBD89] transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-xs text-[#DFBD89] font-medium mb-5 line-clamp-2 min-h-[32px] leading-relaxed">
                    {cat.tagline}
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm">
                    {cat.popularFormulations.slice(0, 3).map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-[#0B1B17] border border-[#1F3F36] text-stone-200 font-semibold shadow-2xs group-hover:bg-[#16322A] transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#DFBD89] flex-shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-5 mt-6 border-t border-[#1F3F36] flex items-center justify-between">
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-xs sm:text-sm font-bold text-[#DFBD89] hover:text-white flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>View Formulas</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-[#DFBD89]" />
                  </Link>
                  <button
                    onClick={() => openQuoteModal({ productCategory: cat.name, serviceType: 'Private Label Manufacturing' })}
                    className="px-4 py-2.5 rounded-xl bg-[#DFBD89] hover:bg-[#c9a775] text-[#0B1B17] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
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
