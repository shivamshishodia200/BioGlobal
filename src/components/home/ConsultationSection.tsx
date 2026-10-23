import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  FlaskConical, 
  Factory, 
  MessagesSquare,
  ArrowRight,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { ConsultationForm } from '../consultation/ConsultationForm';

export const ConsultationSection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('consultation-fullName');
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section 
      id="consultation-section" 
      className="py-12 sm:py-14 lg:py-16 bg-[#1D3C34] text-white relative overflow-hidden"
      aria-labelledby="consultation-heading"
    >
      {/* Background Decorative Ambient Halos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#708E50]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DFBD89]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, B2B Narrative & Expertise Highlights (Part 1 & 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-white/15 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
              <span>LET'S CREATE SOMETHING EXCEPTIONAL</span>
            </div>

            {/* Main Heading H2 */}
            <h2 
              id="consultation-heading"
              className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight tracking-tight"
            >
              Your Next Beauty Product Starts With a Conversation
            </h2>

            {/* Supporting Tagline */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#DFBD89]">
              Your Vision Deserves Expert Manufacturing Guidance.
            </p>

            {/* Section Description */}
            <div className="space-y-3 text-stone-200 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Have a product idea, a formulation requirement, or plans to launch your own beauty brand? Connect with The BioGlobal to explore manufacturing solutions tailored to your vision.
              </p>
              <p>
                From selecting suitable ingredients and formulation options to discussing packaging preferences and production quantities, our team can help you understand the next steps in bringing your beauty concept to market.
              </p>
            </div>

            {/* Three Manufacturing Expertise Highlights (Part 2) */}
            <div className="pt-4 space-y-4">
              {/* Highlight 1: Formulation Guidance */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5 hover:bg-white/8 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E4EEE3]/15 flex items-center justify-center shrink-0 text-[#DFBD89]">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white">
                    Formulation Guidance
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed font-light">
                    Explore product concepts, ingredient preferences, textures, and formulation customization options aligned with your brand's goals.
                  </p>
                </div>
              </div>

              {/* Highlight 2: Manufacturing Planning */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5 hover:bg-white/8 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E4EEE3]/15 flex items-center justify-center shrink-0 text-[#DFBD89]">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white">
                    Manufacturing Planning
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed font-light">
                    Discuss suitable production quantities, packaging requirements, and practical manufacturing considerations.
                  </p>
                </div>
              </div>

              {/* Highlight 3: Collaborative Support */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5 hover:bg-white/8 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E4EEE3]/15 flex items-center justify-center shrink-0 text-[#DFBD89]">
                  <MessagesSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white">
                    Collaborative Support
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed font-light">
                    Receive guidance on the next steps for your product development or manufacturing inquiry.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Action Links (Part 1 CTAs) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#DFBD89] hover:bg-[#D4AF74] text-[#1D3C34] font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/third-party-manufacturing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Explore Manufacturing Services</span>
              </Link>
            </div>

            {/* Compliance & Trust Credentials (Part 18 Compliant) */}
            <div className="pt-4 border-t border-white/15 space-y-2.5 text-xs text-stone-300 font-light">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#DFBD89] shrink-0" />
                <span>Strict Non-Disclosure Agreements (NDA) executed before formulation disclosure</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DFBD89] shrink-0" />
                <span>ISO 22716 GMP compliant cosmetic cleanroom infrastructure</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#DFBD89] shrink-0" />
                <span>Proprietary customer formulation protection & intellectual property rights</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full Product Briefing Form (Part 3, 4, 5, 6) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <ConsultationForm source="homepage_consultation" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
