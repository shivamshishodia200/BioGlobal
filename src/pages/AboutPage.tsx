import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  FlaskConical, 
  Factory, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Users,
  Microscope
} from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import cosmeticFacilityImg from '../assets/capabilities/cosmetic_manufacturing_facility.jpg';

export const AboutPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen py-12">
      {/* Hero Header */}
      <div className="bg-[#1D3C34] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#142B25]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Company Profile</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            About The BioGlobal
          </h1>

          <p className="text-stone-300 text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Your trusted manufacturing partner in cosmetic formulation science, turnkey private labeling, and industrial cleanroom cosmetics production.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Mission & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#708E50] font-bold">
              Formulation Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Bridging Cutting-Edge Cosmeceuticals with Industrial Manufacturing
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Founded on the belief that emerging and established beauty brands deserve access to pharmaceutical-level cosmetic compounding, <strong>The BioGlobal</strong> has grown into a premier contract manufacturer serving skincare innovators, aesthetic dermatology clinics, salon networks, and consumer brands worldwide.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Our advanced compounding plant features cleanroom suites, vacuum de-aeration emulsification systems, reverse osmosis water purification, and automated bottle, jar, and tube packaging lines designed to preserve active ingredient potency and batch consistency.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="px-6 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-[#DFBD89]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={cosmeticFacilityImg}
                alt="Automated cosmetic manufacturing cleanroom line"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-stone-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-stone-900">ISO 22716 Certified</p>
                <p className="text-[11px] text-stone-500">cGMP Audited Facility</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Laboratory Capabilities */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-xs space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#708E50]">
              State-of-the-Art Infrastructure
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Our Facility & Laboratory Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Operating under strict Good Manufacturing Practices to ensure every unit is safe, stable, and consumer-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1D3C34] text-[#DFBD89] flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900">Analytical & Microbiology Testing</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                In-house assay testing for pH, viscosity, specific gravity, heavy metal screening, and preservative challenge to ensure total microbial safety.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1D3C34] text-[#DFBD89] flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900">Industrial Emulsification</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Vacuum homogenizers capable of ultra-fine sub-micron particle sizing, delivering luxurious textures from silky serums to rich whipped body butters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1D3C34] text-[#DFBD89] flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900">Formulation R&D Lab</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dedicated chemists specializing in bioactive peptides, botanical hydrosols, plant stem cells, and photostable SPF filters.
              </p>
            </div>
          </div>
        </div>

        {/* Facility Audit Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1D3C34] to-[#142B25] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Schedule a Facility Audit or Technical Consultation
            </h3>
            <p className="text-stone-200 text-xs sm:text-sm font-light">
              We welcome prospective B2B brand partners to review our quality systems, compounding suites, and warehouse logistics.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal({ serviceType: 'Skin Care Consultation' })}
            className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#c9a775] text-[#14261D] font-bold text-xs sm:text-sm shadow-md transition-colors flex-shrink-0 cursor-pointer"
          >
            Request Facility Review
          </button>
        </div>
      </div>
    </div>
  );
};
