import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ClipboardCheck, 
  HeartHandshake, 
  Leaf, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Info,
  Check
} from 'lucide-react';
import { QUALITY_CREDENTIALS } from '../../data/certifications';
import { QualityCredential } from '../../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCredential, setSelectedCredential] = useState<QualityCredential | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#1D3C34]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-amber-800" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-800" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-800" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#1D3C34]" />;
    }
  };

  return (
    <section 
      id="quality-standards"
      className="py-12 sm:py-14 lg:py-16 bg-[#FAF9F5] border-b border-stone-200/60 overflow-hidden relative"
      aria-labelledby="quality-section-heading"
    >
      {/* Background Ambient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-6 sm:space-y-8">
        {/* Section Header (Part 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-left max-w-3xl space-y-2.5 sm:space-y-3"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>OUR COMMITMENT TO QUALITY</span>
          </div>

          {/* Main Heading H2 */}
          <h2 
            id="quality-section-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-stone-900 leading-tight tracking-tight"
          >
            Quality You Can Trust. Standards That Matter.
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#708E50]">
            Thoughtful Formulations. Quality-Focused Manufacturing. Responsible Partnerships.
          </p>

          {/* Section Description */}
          <div className="space-y-3 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              At The BioGlobal, quality is an important part of our approach to cosmetic formulation and manufacturing. From ingredient selection and production planning to product documentation and quality-related processes, we focus on supporting consistency, transparency, and responsible manufacturing practices.
            </p>
            <p className="text-stone-500 text-xs sm:text-sm">
              Our aim is to help beauty businesses make informed product decisions through clear specifications, collaborative development, and a commitment to manufacturing quality.
            </p>
          </div>
        </motion.div>

        {/* Four Quality & Certification Cards (Part 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {QUALITY_CREDENTIALS.map((cred, idx) => (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1.5 group select-none cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
              tabIndex={0}
              role="button"
              aria-label={`View details for ${cred.title}`}
              onClick={() => setSelectedCredential(cred)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCredential(cred);
                }
              }}
            >
              <div className="space-y-4">
                {/* Header Row: Icon & Status Label */}
                <div className="flex items-center justify-between gap-2">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${cred.colorScheme.iconBg}`}>
                    {getIcon(cred.iconName)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cred.colorScheme.badgeBg} ${cred.colorScheme.badgeText} ${cred.colorScheme.borderColor}`}>
                    {cred.verificationLabel}
                  </span>
                </div>

                {/* Card Title (H3) & Standard Reference */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#708E50] transition-colors leading-snug">
                    {cred.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-500 mt-1 line-clamp-1">
                    {cred.reference}
                  </p>
                </div>

                {/* Short Card Description */}
                <p className="text-xs text-stone-600 leading-relaxed">
                  {cred.shortDescription}
                </p>

                {/* Key Practices Checklist Preview */}
                <div className="pt-3 border-t border-stone-100 space-y-2">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                    Core Operational Pillars
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {cred.keyPractices.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#708E50] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#1D3C34] font-semibold group-hover:text-[#708E50] transition-colors">
                <span>View Quality Principles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Quality Value Proposition (Part 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#1D3C34] text-white p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl"
        >
          {/* Subtle Ambient Background Halo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#708E50]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBD89]" />
              <span>MANUFACTURING ASSURANCE</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
              Committed to Quality at Every Stage
            </h3>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-light">
              Our approach to cosmetic manufacturing emphasizes clear product requirements, carefully considered formulation choices, appropriate production processes, and collaborative client communication. We believe dependable manufacturing partnerships are supported by transparency, consistency, and continuous attention to quality.
            </p>

            <p className="text-xs sm:text-sm text-[#DFBD89] font-medium tracking-wide italic">
              "Quality is more than a statement. It is a commitment reflected in how products are planned, developed, and manufactured."
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-start gap-4">
              <Link
                to="/consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#DFBD89] hover:bg-[#D4AF74] text-[#1D3C34] font-semibold text-xs sm:text-sm shadow-sm transition-all"
              >
                <span>Discuss Quality Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Explore Benchmark Formulations</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accessible Credential Inspector Modal (Part 7) */}
      <AnimatePresence>
        {selectedCredential && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCredential(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-credential-title"
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative z-10 shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedCredential(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5 text-left">
                {/* Header */}
                <div className="flex items-center gap-3 pr-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${selectedCredential.colorScheme.iconBg}`}>
                    {getIcon(selectedCredential.iconName)}
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${selectedCredential.colorScheme.badgeBg} ${selectedCredential.colorScheme.badgeText} ${selectedCredential.colorScheme.borderColor}`}>
                      {selectedCredential.verificationLabel}
                    </span>
                    <h4 id="modal-credential-title" className="font-serif font-bold text-xl text-stone-900 mt-1 leading-snug">
                      {selectedCredential.title}
                    </h4>
                    <p className="text-xs text-stone-500 font-medium">
                      {selectedCredential.reference}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#708E50]" />
                    <span>Operational Scope & Framework</span>
                  </h5>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {selectedCredential.description}
                  </p>
                </div>

                {/* Key Practices List */}
                <div className="space-y-2.5">
                  <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Documented Operational Activities
                  </h5>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {selectedCredential.keyPractices.map((practice, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#708E50] shrink-0 mt-0.5" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scope Note */}
                <div className="p-3.5 rounded-xl bg-[#E4EEE3]/40 border border-[#C5DAC3] text-xs text-stone-700 leading-relaxed font-light">
                  <span className="font-semibold text-[#1D3C34] block mb-0.5">
                    Transparency Declaration:
                  </span>
                  <p>{selectedCredential.scopeNote}</p>
                </div>

                {/* Close Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCredential(null)}
                    className="w-full py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    Close Information
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
