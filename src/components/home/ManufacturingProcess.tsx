import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  MessageSquare,
  FileText,
  FlaskConical,
  CheckCircle2,
  Factory,
  PackageCheck,
  Clock,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  ChevronRight,
  Check,
  Calendar,
  Layers,
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

// High-resolution local cosmetic manufacturing imagery
import skincareImg from '../../assets/capabilities/skincare.jpg';
import haircareImg from '../../assets/capabilities/haircare.jpg';
import cosmeticLabImg from '../../assets/capabilities/cosmetic_lab_rd.jpg';
import bodycareImg from '../../assets/capabilities/bodycare.jpg';
import soapcareImg from '../../assets/capabilities/soapcare.jpg';
import heroPackagingImg from '../../assets/herosection image.png';

interface ProcessStepData {
  step: number;
  shortTitle: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  image: string;
  imageCaption: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

const PROCESS_STEPS: ProcessStepData[] = [
  {
    step: 1,
    shortTitle: 'Consultation',
    title: 'Initial Consultation',
    subtitle: 'Understanding Your Brand Vision & Market Goals',
    description:
      'We meet via video conference or at our facility to evaluate your target consumer demographic, benchmark reference products, active ingredient requirements, and launch timeline.',
    timeline: 'Day 1 - 3',
    image: skincareImg,
    imageCaption: 'Benchmarking & Product Scoping',
    icon: MessageSquare,
    details: [
      'Define formulation category & aesthetic profile',
      'Establish target packaging specifications & unit economics',
      'Select Private Label or Bespoke Custom Formulation path',
    ],
  },
  {
    step: 2,
    shortTitle: 'Concept & Brief',
    title: 'Product Concept & Requirements',
    subtitle: 'Technical Brief & Ingredient Architecture',
    description:
      'Our R&D scientists draft a formal Product Development Brief specifying proposed active concentrations, carrier bases, preservatives, clean-beauty standards, and regulatory claims.',
    timeline: 'Week 1',
    image: haircareImg,
    imageCaption: 'Active Ingredient Architecture',
    icon: FileText,
    details: [
      'Ingredient feasibility & clean-beauty screening',
      'Container & dispensing pump compatibility review',
      'Formal quotation & minimum order quantity (MOQ) agreement',
    ],
  },
  {
    step: 3,
    shortTitle: 'Lab Formulation',
    title: 'Formulation & Development',
    subtitle: 'Laboratory Bench Trials & Active Compounding',
    description:
      'In our certified cosmetic formulation laboratory, veteran cosmetic chemists formulate prototype batches optimizing skin-feel, spreadability, fragrance notes, absorption, and pH stability.',
    timeline: 'Week 2 - 3',
    image: cosmeticLabImg,
    imageCaption: 'Cleanroom Active Compounding',
    icon: FlaskConical,
    details: [
      'Lab-scale emulsification & sensory evaluation',
      'Preliminary thermal stability & viscosity testing',
      'Preparation of sealed, review-ready prototype vials',
    ],
  },
  {
    step: 4,
    shortTitle: 'Sample Approval',
    title: 'Sample Approval & Testing',
    subtitle: 'Client Evaluation & Stability Sign-Off',
    description:
      'Physical pilot sample sets are dispatched to your team for texture, application, and olfactory approval. Once approved, the formula undergoes 3-month accelerated stability & challenge testing.',
    timeline: 'Client Review Window',
    image: bodycareImg,
    imageCaption: 'Sensory Texture & Fragrance Sign-Off',
    icon: CheckCircle2,
    details: [
      'Up to 3 complimentary revision rounds on formulation',
      'Microbial challenge testing (USP 51 equivalent)',
      'Packaging compatibility & leak stress analysis',
    ],
  },
  {
    step: 5,
    shortTitle: 'Batch Production',
    title: 'Manufacturing & Quality Checks',
    subtitle: 'Controlled Cleanroom Batch Compounding',
    description:
      'Full production shifts to our ISO 22716 certified cleanrooms. Industrial vacuum homogenizers mix the bulk batch under computerized temperature and vacuum parameters, followed by in-line quality assays.',
    timeline: 'Week 4 - 6',
    image: cosmeticLabImg,
    imageCaption: 'ISO 22716 Cleanroom Homogenization',
    icon: Factory,
    details: [
      'De-aeration and high-shear vacuum homogenization',
      'In-process viscosity, specific gravity & pH checks',
      'Quarantine microbial testing until official lot release',
    ],
  },
  {
    step: 6,
    shortTitle: 'Filling & Dispatch',
    title: 'Packaging & Dispatch',
    subtitle: 'Automated Filling, Labeling & Global Logistics',
    description:
      'The approved bulk is filled on sterile automated lines, induction sealed, laser lot coded, boxed in retail cartons, and packed onto shrink-wrapped pallets for secure domestic or global shipment.',
    timeline: 'Week 6 - 8',
    image: soapcareImg,
    imageCaption: 'Automated Sterile Fill & Dispatch',
    icon: PackageCheck,
    details: [
      'High-speed automated piston filling & induction seal',
      'Tamper-evident carton packaging & Barcoding',
      'Final Certificate of Analysis (CoA) & Bill of Lading delivery',
    ],
  },
];

export const ManufacturingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { openQuoteModal } = useQuoteModal();

  const current = PROCESS_STEPS[activeStep];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-stone-200/60 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>Spec-To-Product Blueprint</span>
          </div>

          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight">
            Our 6-Step Manufacturing Process
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            From initial formula conceptualization to final carton dispatch, our streamlined milestone-driven production
            cycle ensures absolute transparency, safety, and rapid market launch.
          </p>
        </motion.div>

        {/* Chronological Stepper Navigation Bar */}
        <div className="relative mb-12">
          {/* Connecting Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-stone-200 z-0">
            <motion.div
              className="h-full bg-[#708E50]"
              initial={false}
              animate={{
                width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {PROCESS_STEPS.map((proc, index) => {
              const Icon = proc.icon;
              const isActive = activeStep === index;
              const isPast = index < activeStep;

              return (
                <button
                  key={proc.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`p-3.5 sm:p-4 rounded-2xl text-center transition-all duration-300 flex flex-col items-center gap-2.5 cursor-pointer group focus:outline-none relative select-none ${
                    isActive
                      ? 'bg-[#1D3C34] text-white shadow-xl scale-102 ring-2 ring-[#708E50]'
                      : 'bg-white hover:bg-stone-50/80 text-stone-800 border border-stone-200 shadow-2xs hover:shadow-md'
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-108 relative ${
                      isActive
                        ? 'bg-[#708E50] text-white shadow-md'
                        : isPast
                        ? 'bg-[#E4EEE3] text-[#1D3C34] border border-[#C5DAC3]'
                        : 'bg-stone-100 text-stone-600 border border-stone-200'
                    }`}
                  >
                    {isPast ? <Check className="w-5 h-5 text-[#1D3C34]" /> : <Icon className="w-5 h-5" />}
                  </div>

                  <div>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-widest block leading-none mb-1 ${
                        isActive ? 'text-[#86A55B]' : isPast ? 'text-[#708E50]' : 'text-stone-400'
                      }`}
                    >
                      Step 0{proc.step}
                    </span>
                    <h4
                      className={`text-xs sm:text-sm font-semibold tracking-tight ${
                        isActive ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {proc.shortTitle}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (Content & Action Items) */}
              <div className="lg:col-span-7 space-y-5">
                {/* Milestone Pill & Timeline Strip */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#1D3C34] text-[#86A55B] text-xs font-mono font-bold tracking-wide shadow-2xs">
                    Milestone 0{current.step} of 06
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-stone-700 font-semibold px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Typical Duration: {current.timeline}</span>
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[32px] text-stone-900 leading-tight tracking-tight">
                  {current.title} – <span className="text-[#708E50]">{current.subtitle}</span>
                </h3>

                {/* Narrative Description */}
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Key Deliverables & Action Items */}
                <div className="pt-2 border-t border-stone-100 space-y-2.5">
                  <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                    Key Deliverables & Action Items:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {current.details.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -2 }}
                        className="p-3.5 bg-[#FAF9F5] rounded-xl border border-stone-200/90 text-xs text-stone-800 flex items-start gap-2.5 shadow-2xs hover:border-[#C5DAC3] hover:bg-[#F2F7F0] transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Step Switcher Navigation Arrows */}
                <div className="pt-4 flex items-center gap-3">
                  {activeStep > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => prev - 1)}
                      className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-200"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous: Step 0{activeStep}</span>
                    </button>
                  )}

                  {activeStep < PROCESS_STEPS.length - 1 && (
                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => prev + 1)}
                      className="px-5 py-2.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-md group"
                    >
                      <span>Proceed to Step 0{activeStep + 2}: {PROCESS_STEPS[activeStep + 1].shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: High-Res Stage Photography & Consultation Box */}
              <div className="lg:col-span-5 space-y-4">
                {/* Photo Frame */}
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200 group bg-stone-900">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                    {current.imageCaption}
                  </div>

                  {/* Bottom Stage Pill */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-semibold">
                    <span className="text-stone-200">The BioGlobal Quality Protocol</span>
                    <span className="px-2.5 py-1 rounded-md bg-[#1D3C34]/90 backdrop-blur-md text-[#86A55B] font-mono font-bold text-xs border border-[#DFBD89]/30">
                      Stage 0{current.step}
                    </span>
                  </div>
                </div>

                {/* Consultation Callout Box */}
                <div className="bg-[#E4EEE3]/80 p-5 rounded-2xl border border-[#C5DAC3] text-center space-y-2.5 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D3C34] block">
                    Next Step for Your Brand
                  </span>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Schedule Formulation Review
                  </h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                    Connect directly with our lead chemist to discuss formulation benchmarks, MOQ, and sample pricing.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        serviceType: `Process Consultation: Step 0${current.step} (${current.shortTitle})`,
                      })
                    }
                    className="w-full py-3 px-4 rounded-xl bg-[#708E50] hover:bg-[#5F7A43] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer hover:shadow-lg"
                  >
                    <span>Book Step 0{current.step} Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
