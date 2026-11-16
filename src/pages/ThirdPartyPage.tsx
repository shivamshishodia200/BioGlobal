import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Factory, 
  FlaskConical, 
  ShieldCheck, 
  FileCheck, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

export const ThirdPartyPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen py-12">
      {/* Hero Header */}
      <div className="bg-[#1D3C34] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mb-16 border-b border-emerald-950">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Industrial Contract Compounding</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Third-Party Cosmetic Manufacturing
          </h1>

          <p className="text-stone-300 text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Scale your proprietary cosmetic formulations with an ISO 22716 & cGMP certified manufacturing partner. From high-shear vacuum homogenization to automated sterile filling, we handle industrial execution with precision.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal({ serviceType: 'Third-Party Cosmetic Manufacturing' })}
              className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#c9a775] text-[#14261D] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Submit Contract Manufacturing RFP</span>
              <ArrowRight className="w-4 h-4 text-[#14261D]" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* OEM / ODM Contract Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#1D3C34] text-[#DFBD89] flex items-center justify-center">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">Custom Batch Compounding</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We manufacture directly to your proprietary formulation specifications. Our compounding chemists maintain rigorous temperature and de-aeration controls, utilizing multi-stage reverse osmosis (RO) and electro-deionization (EDI) purified water systems to guarantee batch purity.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Strict batch-to-batch repeatability and delta-E color matching</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Full batch manufacturing record (BMR) retention for 5 years</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Microbiological quarantine hold until CoA sign-off</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#1D3C34] text-[#DFBD89] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">Automated High-Speed Filling</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Equipped with pneumatic multi-head piston filling lines, ultrasonic tube sealers, rotary capping machines, and automated laser lot coders, our facility fills bottles, jars, squeeze tubes, and airless pump dispensers seamlessly.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Viscosities ranging from water-thin mists to heavy whipped butters</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Induction foil sealing, shrink sleeving, and secondary boxing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Automated torque control on all dispenser pump closures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bulk Drum & Tote Options */}
        <div className="bg-[#FAF9F5] p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#708E50]">Industrial Supply</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Bulk Emulsion & Base Compounding</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Do you already operate your own packaging facility? The BioGlobal provides wholesale bulk cosmetic compounding in food-grade 55-gallon steel/poly drums and 1,000-liter intermediate bulk container (IBC) tote tanks with tamper seals and full release assays.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal({ serviceType: 'Bulk Manufacturing' })}
            className="px-6 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <span>Inquire for Bulk Drum Pricing</span>
            <ArrowRight className="w-4 h-4 text-[#DFBD89]" />
          </button>
        </div>
      </div>
    </div>
  );
};
