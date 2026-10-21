import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const CtaBanner: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-[#1D3C34] via-[#142B25] to-[#0D1A13] text-white overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#708E50]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
          <span>Start Your Manufacturing Journey</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Ready to Launch Your Cosmetic Brand?
        </h2>

        <p className="text-stone-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          From custom chemical compounding and cleanroom batch production to luxury packaging and regulatory dossiers, The BioGlobal provides the complete turnkey infrastructure your brand needs.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openQuoteModal({ serviceType: 'Skin Care Consultation' })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#DFBD89] to-[#C5A880] hover:from-[#e8cd9e] hover:to-[#d1b58f] text-[#14261D] font-bold text-sm tracking-wide shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#14261D]" />
          </button>

          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 backdrop-blur-xs font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#DFBD89]" />
            <span>Request a Quote</span>
          </button>
        </div>

        {/* Reassurance */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#DFBD89]" />
            Mutual Non-Disclosure Agreement
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Low Minimum Order Quantities</span>
          <span className="hidden sm:inline">•</span>
          <span>Sample Bench Trials Delivered in 7 Days</span>
        </div>
      </div>
    </section>
  );
};
