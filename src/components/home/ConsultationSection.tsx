import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  FlaskConical, 
  Package, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { ConsultationForm } from '../consultation/ConsultationForm';

export const ConsultationSection: React.FC = () => {
  return (
    <section 
      id="consultation-section" 
      className="py-14 sm:py-16 lg:py-18 bg-[#1D3C34] text-white relative overflow-hidden scroll-mt-24"
      aria-labelledby="consultation-heading"
    >
      {/* Background Decorative Ambient Halos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#708E50]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DFBD89]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Heading & 2 Concise Supporting Points */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-white/15 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
              <span>LET'S CREATE SOMETHING EXCEPTIONAL</span>
            </div>

            {/* Main Heading H2 */}
            <h2 
              id="consultation-heading"
              className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl text-white leading-tight tracking-tight"
            >
              Your Next Beauty Product Starts With a Conversation
            </h2>

            {/* Supporting Tagline */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#DFBD89]">
              YOUR VISION DESERVES EXPERT MANUFACTURING GUIDANCE.
            </p>

            {/* Short description */}
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-light">
              Share your beauty product concept, preferred packaging, and estimated order quantity. Our team can help you explore suitable development and manufacturing options.
            </p>

            {/* Two Concise Supporting Points */}
            <div className="pt-2 space-y-3">
              {/* Point 1: Formulation & Product Guidance */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/8 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#E4EEE3]/15 flex items-center justify-center shrink-0 text-[#DFBD89]">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white">
                    Formulation & Product Guidance
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5 leading-relaxed font-light">
                    Explore active ingredients, custom textures, stability profiles, and tailored formulation concepts for your brand.
                  </p>
                </div>
              </div>

              {/* Point 2: Packaging & Manufacturing Consultation */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/8 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#E4EEE3]/15 flex items-center justify-center shrink-0 text-[#DFBD89]">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white">
                    Packaging & Manufacturing Consultation
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5 leading-relaxed font-light">
                    Discuss batch volumes starting from 1,000 units, dispensing formats, container compatibility, and launch timelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-stone-300 font-light">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#DFBD89] shrink-0" />
                <span>Confidential NDA Protected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#86A55B] shrink-0" />
                <span>ISO 22716 GMP Facility</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compact Form Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <ConsultationForm source="homepage_consultation" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
