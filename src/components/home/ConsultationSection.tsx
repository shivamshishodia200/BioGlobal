import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  FlaskConical, 
  CheckCircle2, 
  MessageSquareQuote,
  Check
} from 'lucide-react';
import { ConsultationForm } from '../consultation/ConsultationForm';

export const ConsultationSection: React.FC = () => {
  return (
    <section id="consultation-section" className="py-20 lg:py-28 bg-[#1D3C34] text-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#708E50]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DFBD89]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Proposition for Business Owners */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
              <span>Skin Care & Formulation Consultation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let's Build Your Next Beauty Product Together
            </h2>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-light">
              Whether you are an established cosmetic brand scaling production, a dermatology clinic launching proprietary skincare, or a beauty entrepreneur taking your first formulation to market, our technical advisors are ready to collaborate.
            </p>

            {/* Target Audience Audience Badges */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DFBD89]">
                Tailored Consultation For:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-200">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#DFBD89]" />
                  <span>Beauty Brand Founders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#DFBD89]" />
                  <span>Dermatology Clinics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#DFBD89]" />
                  <span>Salon & Spa Franchises</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#DFBD89]" />
                  <span>Wholesale Distributors</span>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="pt-6 border-t border-white/15 space-y-3 text-xs text-stone-300">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#DFBD89] flex-shrink-0" />
                <span>Strict Non-Disclosure Agreements (NDA) executed before formula sharing</span>
              </div>
              <div className="flex items-center gap-3">
                <FlaskConical className="w-4 h-4 text-[#DFBD89] flex-shrink-0" />
                <span>Direct collaboration with experienced cosmetic chemists and regulatory staff</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#DFBD89] flex-shrink-0" />
                <span>Complete formulation dossier and initial quotation within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real B2B Form */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};
