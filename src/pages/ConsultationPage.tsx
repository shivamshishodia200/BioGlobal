import React from 'react';
import { 
  Sparkles, 
  FlaskConical, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  Check 
} from 'lucide-react';
import { ConsultationForm } from '../components/consultation/ConsultationForm';

export const ConsultationPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen py-12">
      {/* Header */}
      <div className="bg-[#1D3C34] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#142B25]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Formulation Science & Strategy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Skin Care & Product Development Consultation
          </h1>

          <p className="text-stone-300 text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Collaborate directly with our master cosmetic chemists and commercial directors to turn your product brief into an award-winning cosmetic formulation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What We Help With */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#708E50] font-bold">
                B2B Advisory Services
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1 leading-snug">
                How Our Formulation Consultation Works
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Whether you have an existing formula that needs optimization or just a concept and benchmark product, our team provides technical feasibility and cost budgeting.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-[#1D3C34]" />
                  <span>Benchmark Matching & Texture Engineering</span>
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Provide a commercial benchmark and our chemists will analyze its sensory profile, rheology, and active efficacy to create an elevated proprietary iteration.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1D3C34]" />
                  <span>Clean Beauty Compliance & INCI Dossiers</span>
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  We formulate to meet Sephora Clean, Credo, EU Cosmetic Regulation (EC 1223/2009), and FDA MoCRA standards with verified Safety Data Sheets (SDS).
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1D3C34]" />
                  <span>Cost-of-Goods (COGS) Optimization</span>
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Receive transparent ingredient and packaging unit pricing with volume tiered savings, protecting your brand gross margins.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-[#E4EEE3] border border-[#C5DAC3] text-[#1D3C34] space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-[#1D3C34]">
                <MessageSquare className="w-4 h-4 text-[#708E50]" />
                <span>Prefer Real-Time Messaging?</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                Connect directly with our Technical Formulation Desk on WhatsApp for fast questions regarding MOQs, sample lead times, and packaging catalogs.
              </p>
              <a
                href="https://wa.me/18004562464?text=Hi%20The%20BioGlobal%20team%2C%20I%20would%20like%20to%20schedule%20a%20skin%20care%20formulation%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1D3C34] bg-white px-4 py-2 rounded-lg border border-[#C5DAC3] hover:bg-stone-50 transition-colors"
              >
                <span>Chat on WhatsApp (+1 800-456-2464)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#708E50]" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Consultation Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Submit Your Product Development Brief
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Fill in your project requirements below. All submissions are governed by mutual non-disclosure.
              </p>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
};
