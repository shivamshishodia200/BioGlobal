import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Sparkles, CheckCircle2, X } from 'lucide-react';

interface CertificationSeal {
  id: string;
  name: string;
  color: string;
  inner: string;
  body: string;
  subtext: string;
  details: string;
}

const SEALS: CertificationSeal[] = [
  {
    id: 'org',
    name: '100% ORGANIC CERTIFIED',
    color: 'border-emerald-600/70 text-emerald-800 bg-emerald-50/50',
    inner: 'ORGANIC',
    body: 'Certified Organic Ingredients',
    subtext: 'ECOCERT & USDA standards compliant sourcing for pure botanical extracts.',
    details: 'Compliant with organic farming and non-GMO extraction guidelines.',
  },
  {
    id: 'iso',
    name: 'CERTIFIED ISO 9001:2015',
    color: 'border-amber-700/60 text-amber-900 bg-amber-50/50',
    inner: 'ISO 9001:2015',
    body: 'Quality Management Systems',
    subtext: 'Audited international manufacturing protocols ensuring zero-defect batch runs.',
    details: 'International standard for quality management and process optimization.',
  },
  {
    id: 'gmp',
    name: 'WHO-GMP PRACTICE',
    color: 'border-blue-700/60 text-blue-900 bg-blue-50/50',
    inner: 'WHO-GMP',
    body: 'Good Manufacturing Practices',
    subtext: 'Class 100,000 cleanrooms and controlled micro-filtered air handling units.',
    details: 'Validated cleanrooms with strict particulate and bioburden monitoring.',
  },
  {
    id: 'cruelty',
    name: 'CRUELTY FREE & VEGAN',
    color: 'border-cyan-600/70 text-cyan-800 bg-cyan-50/50',
    inner: 'CRUELTY FREE',
    body: 'Never Tested on Animals',
    subtext: 'Ethical formulation using in-vitro safety testing and 100% vegan ingredients.',
    details: 'PETA-aligned verification without animal derivatives.',
  },
  {
    id: 'natural',
    name: 'PURE & NATURAL',
    color: 'border-lime-700/70 text-lime-900 bg-lime-50/50',
    inner: 'PURE & NATURAL',
    body: 'Plant-Based Cosmeceuticals',
    subtext: 'Sustainably harvested botanicals without harsh sulfates, silicones, or parabens.',
    details: 'Clean cosmetic formulation philosophy with biodegradable ingredients.',
  },
  {
    id: 'export',
    name: 'EXPORT QUALITY GRADE',
    color: 'border-yellow-800/60 text-yellow-950 bg-yellow-50/50',
    inner: 'EXPORT GRADE',
    body: 'Global Regulatory Approved',
    subtext: 'Compliance with EU cosmetic regulations, US FDA facility registration, and ASEAN guidelines.',
    details: 'Complete stability and safety dossiers (PIF) ready for international border clearance.',
  },
  {
    id: 'rd',
    name: 'CUSTOM FORMULATION LAB',
    color: 'border-purple-700/60 text-purple-900 bg-purple-50/50',
    inner: 'R&D LAB',
    body: 'In-House Laboratory Chemistry',
    subtext: 'Modern analytical instruments including HPLC, viscosity meters, and stability ovens.',
    details: 'Expert cosmetic chemists handling reverse engineering & proprietary formulas.',
  },
  {
    id: 'haccp',
    name: 'CERTIFIED HACCP SAFETY',
    color: 'border-red-700/60 text-red-900 bg-red-50/50',
    inner: 'HACCP',
    body: 'Hazard Analysis & Critical Points',
    subtext: 'Systematic preventive approach to physical, chemical, and biological hazards.',
    details: 'Full supply chain trace and safety checkpoints at every stage.',
  },
];

export const CertificationsSection: React.FC = () => {
  const [activeSeal, setActiveSeal] = useState<CertificationSeal | null>(null);

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#4CA6A8] font-bold block">
            Quality Assurance & Global Trust
          </span>

          <h2 className="font-sans font-light text-4xl sm:text-5xl text-stone-900 tracking-tight">
            Certifications
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Internationally certified manufacturing standards. Click any stamp to inspect accreditation details.
          </p>
        </motion.div>

        {/* Circular Stamp Seals Cluster with Slow Rotating Dashed Rings */}
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-4">
          {SEALS.map((seal, idx) => (
            <motion.div
              key={seal.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.08, y: -4 }}
              onClick={() => setActiveSeal(seal)}
              className="relative cursor-pointer group select-none"
            >
              {/* Rotating Outer Dashed Stamp Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-dashed p-1 flex items-center justify-center shadow-xs transition-colors ${seal.color}`}
              />

              {/* Inner Static Seal Emblem */}
              <div className="absolute inset-2 rounded-full border-2 border-current flex flex-col items-center justify-center p-2 text-center pointer-events-none">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-tight uppercase line-clamp-1">
                  {seal.name.split(' ')[0]}
                </span>
                <span className="font-sans font-black text-xs sm:text-sm tracking-wider my-0.5">
                  {seal.inner}
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold opacity-80">
                  VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Seal Detail Inspector Modal */}
      <AnimatePresence>
        {activeSeal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSeal(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full relative z-10 shadow-2xl border border-stone-200"
            >
              <button
                onClick={() => setActiveSeal(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-full border-2 border-dashed flex items-center justify-center font-bold text-xs ${activeSeal.color}`}>
                    {activeSeal.inner}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400">Accreditation</span>
                    <h4 className="font-sans font-bold text-lg text-stone-900">{activeSeal.name}</h4>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                    {activeSeal.body}
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {activeSeal.subtext}
                  </p>
                </div>

                <div className="text-xs text-stone-600 space-y-1">
                  <span className="font-bold text-stone-900 block">Standard Compliance:</span>
                  <p>{activeSeal.details}</p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveSeal(null)}
                    className="w-full py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
                  >
                    Close Verification
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
