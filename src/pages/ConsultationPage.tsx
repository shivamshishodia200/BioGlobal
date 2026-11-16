import React from 'react';
import { 
  Sparkles, 
  FlaskConical, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react';
import { ConsultationForm } from '../components/consultation/ConsultationForm';

export const ConsultationPage: React.FC = () => {
  return (
    <div className="w-full bg-[#0B1B17] text-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#0E201B] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#1A3830]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-[#254A3E]">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Formulation Science &amp; Strategy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Skin Care &amp; Product Development Consultation
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
              <span className="text-xs uppercase tracking-widest text-[#DFBD89] font-bold">
                B2B Advisory Services
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug">
                How Our Formulation Consultation Works
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                Whether you have an existing formula that needs optimization or just a concept and benchmark product, our team provides technical feasibility and cost budgeting.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#112520] rounded-xl border border-[#1F3F36] shadow-md space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-[#DFBD89]" />
                  <span>Benchmark Matching &amp; Texture Engineering</span>
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Provide a commercial benchmark and our chemists will analyze its sensory profile, rheology, and active efficacy to create an elevated proprietary iteration.
                </p>
              </div>

              <div className="p-4 bg-[#112520] rounded-xl border border-[#1F3F36] shadow-md space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFBD89]" />
                  <span>Clean Beauty Compliance &amp; INCI Dossiers</span>
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  We formulate to meet Sephora Clean, Credo, EU Cosmetic Regulation (EC 1223/2009), and FDA MoCRA standards with verified Safety Data Sheets (SDS).
                </p>
              </div>

              <div className="p-4 bg-[#112520] rounded-xl border border-[#1F3F36] shadow-md space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#DFBD89]" />
                  <span>Cost-of-Goods (COGS) Optimization</span>
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Receive transparent ingredient and packaging unit pricing with volume tiered savings, protecting your brand gross margins.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-[#142C25] border border-[#254A3E] text-white space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-[#DFBD89]">
                <MessageSquare className="w-4 h-4 text-[#DFBD89]" />
                <span>Prefer Real-Time Messaging?</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Connect directly with our Technical Formulation Desk on WhatsApp for fast questions regarding MOQs, sample lead times, and packaging catalogs.
              </p>
              <a
                href="https://wa.me/919795000351?text=Hi%20The%20BioGlobal%20team%2C%20I%20would%20like%20to%20schedule%20a%20skin%20care%20formulation%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1B17] bg-[#DFBD89] hover:bg-[#C8A46E] px-4 py-2 rounded-lg transition-colors"
              >
                <span>Chat on WhatsApp (+91 97950 00351)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B1B17]" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Consultation Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Submit Your Product Development Brief
              </h3>
              <p className="text-xs text-stone-400 mt-1">
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
