import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  MessageSquare,
  ClipboardList,
  FlaskConical,
  PackageCheck,
  Factory,
  Truck,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Layers,
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { MANUFACTURING_PROCESS } from '../../data/process';

// Icon resolver for process steps
const getProcessIcon = (iconName?: string) => {
  switch (iconName) {
    case 'MessageSquare':
      return MessageSquare;
    case 'ClipboardList':
      return ClipboardList;
    case 'FlaskConical':
      return FlaskConical;
    case 'PackageCheck':
      return PackageCheck;
    case 'Factory':
      return Factory;
    case 'Truck':
      return Truck;
    default:
      return Layers;
  }
};

export const ManufacturingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { openQuoteModal } = useQuoteModal();

  const current = MANUFACTURING_PROCESS[activeStep];
  const StepIcon = getProcessIcon(current.iconName);

  return (
    <section
      id="how-it-works"
      aria-labelledby="manufacturing-process-heading"
      className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-stone-200/60 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>HOW WE BRING YOUR VISION TO LIFE</span>
          </div>

          {/* Main Heading */}
          <h2
            id="manufacturing-process-heading"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight"
          >
            From Your First Idea to the Finished Product
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#708E50]">
            Six Essential Steps. One Collaborative Manufacturing Journey.
          </p>

          {/* Description */}
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Turning a beauty product concept into a market-ready formulation
            requires thoughtful planning, technical expertise, and coordinated
            manufacturing. At The BioGlobal, our structured six-step process
            helps guide brands through consultation, product development,
            sampling, manufacturing, quality-related checks, and final
            packaging.
            <span className="block mt-2">
              Whether you are launching your first private label product or
              developing a customized cosmetic range, we focus on clear
              communication and practical execution throughout the manufacturing
              journey.
            </span>
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* INTERACTIVE STEPPER NAVIGATION BAR                        */}
        {/* ======================================================== */}
        <div className="relative">
          {/* Connecting Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-stone-200 z-0">
            <motion.div
              className="h-full bg-[#708E50]"
              initial={false}
              animate={{
                width: `${(activeStep / (MANUFACTURING_PROCESS.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
          </div>

          {/* 6 Step Cards */}
          <div
            role="tablist"
            aria-label="Manufacturing Process Steps"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10"
          >
            {MANUFACTURING_PROCESS.map((proc, index) => {
              const Icon = getProcessIcon(proc.iconName);
              const isSelected = activeStep === index;

              return (
                <button
                  key={proc.id || proc.step}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`step-panel-${proc.step}`}
                  id={`step-tab-${proc.step}`}
                  onClick={() => setActiveStep(index)}
                  className={`p-3.5 sm:p-4 rounded-2xl text-center transition-all duration-300 flex flex-col items-center gap-2.5 cursor-pointer group focus:outline-hidden focus:ring-2 focus:ring-[#708E50] relative select-none ${
                    isSelected
                      ? 'bg-[#1D3C34] text-white shadow-xl scale-102 ring-2 ring-[#708E50]'
                      : 'bg-white hover:bg-stone-50/90 text-stone-800 border border-stone-200/90 shadow-2xs hover:shadow-md'
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-108 relative ${
                      isSelected
                        ? 'bg-[#708E50] text-white shadow-md'
                        : 'bg-[#E4EEE3] text-[#1D3C34] border border-[#C5DAC3]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-widest block leading-none mb-1 ${
                        isSelected ? 'text-[#86A55B]' : 'text-[#708E50]'
                      }`}
                    >
                      Step 0{proc.step}
                    </span>
                    <h3
                      className={`text-xs sm:text-sm font-semibold tracking-tight ${
                        isSelected ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {proc.shortTitle || proc.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* ACTIVE STEP DETAILS PANEL                                */}
        {/* ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            id={`step-panel-${current.step}`}
            role="tabpanel"
            aria-labelledby={`step-tab-${current.step}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (Content & Activities) */}
              <div className="lg:col-span-7 space-y-5">
                {/* Milestone Pill & Timeline Strip */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#1D3C34] text-[#86A55B] text-xs font-mono font-bold tracking-wide shadow-2xs">
                    Stage 0{current.step} of 06
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-stone-700 font-semibold px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 shadow-2xs">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Indicative Timeline: {current.timeline}</span>
                  </span>
                </div>

                {/* Heading & Subtitle */}
                <div className="space-y-1">
                  <h3 className="font-serif font-normal text-2xl sm:text-3xl text-stone-900 leading-tight tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#708E50]">
                    {current.subtitle}
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-stone-600 text-xs sm:text-sm sm:leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Key Activities Checklist */}
                <div className="pt-2 border-t border-stone-100 space-y-2.5">
                  <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                    Key Activities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(current.activities || current.details).map((item, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#FAF9F5] rounded-xl border border-stone-200/90 text-xs text-stone-800 flex items-start gap-2.5 shadow-2xs hover:border-[#C5DAC3] hover:bg-[#F2F7F0] transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Output Callout */}
                {current.output && (
                  <div className="p-3.5 rounded-xl bg-[#E4EEE3]/60 border border-[#C5DAC3] flex items-center justify-between gap-3 text-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D3C34]">
                      Expected Output:
                    </span>
                    <span className="font-semibold text-stone-900 text-right">
                      {current.output}
                    </span>
                  </div>
                )}

                {/* Step Switcher Navigation Controls */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border ${
                      activeStep === 0
                        ? 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300 cursor-pointer'
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>
                      {activeStep > 0
                        ? `Previous: Step 0${activeStep}`
                        : 'Previous'}
                    </span>
                  </button>

                  <button
                    type="button"
                    disabled={activeStep === MANUFACTURING_PROCESS.length - 1}
                    onClick={() =>
                      setActiveStep((prev) =>
                        Math.min(MANUFACTURING_PROCESS.length - 1, prev + 1)
                      )
                    }
                    className={`px-5 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-md group ${
                      activeStep === MANUFACTURING_PROCESS.length - 1
                        ? 'opacity-40 cursor-not-allowed bg-stone-400 text-white'
                        : 'bg-[#1D3C34] hover:bg-[#142B25] text-white cursor-pointer'
                    }`}
                  >
                    <span>
                      {activeStep < MANUFACTURING_PROCESS.length - 1
                        ? `Proceed to Step 0${activeStep + 2}: ${
                            MANUFACTURING_PROCESS[activeStep + 1].shortTitle ||
                            MANUFACTURING_PROCESS[activeStep + 1].title
                          }`
                        : 'Final Step Completed'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: High-Res Stage Photography & Action Card */}
              <div className="lg:col-span-5 space-y-4">
                {/* Photo Frame */}
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-md border border-stone-200 group bg-stone-900">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Caption Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                    {current.imageCaption || current.shortTitle}
                  </div>

                  {/* Bottom Stage Pill */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-semibold">
                    <span className="text-stone-200">The BioGlobal Development Flow</span>
                    <span className="px-2.5 py-1 rounded-md bg-[#1D3C34]/90 backdrop-blur-md text-[#86A55B] font-mono font-bold text-xs border border-[#DFBD89]/30">
                      Step 0{current.step}
                    </span>
                  </div>
                </div>

                {/* Consultation Callout Box */}
                <div className="bg-[#E4EEE3]/80 p-5 rounded-2xl border border-[#C5DAC3] text-center space-y-2.5 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D3C34] block">
                    Next Step for Your Brand
                  </span>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Discuss Stage 0{current.step} Requirements
                  </h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                    Connect with our technical team to discuss specifications,
                    sample preparation, and commercial timelines.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        serviceType: `Process Inquiry: Step 0${current.step} (${current.shortTitle || current.title})`,
                      })
                    }
                    className="w-full py-3 px-4 rounded-xl bg-[#708E50] hover:bg-[#5F7A43] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer hover:shadow-lg"
                  >
                    <span>Inquire About Step 0{current.step}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ======================================================== */}
        {/* MANDATORY TIMELINE DISCLAIMER NOTE                      */}
        {/* ======================================================== */}
        <div className="text-center">
          <p className="text-xs text-stone-500 max-w-2xl mx-auto leading-relaxed italic">
            * Timelines are indicative and may vary depending on formulation
            complexity, product approval, packaging availability, and
            manufacturing requirements.
          </p>
        </div>

        {/* ======================================================== */}
        {/* OPTIONAL SECTION CTA: READY TO START                     */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-4"
        >
          <div className="bg-[#E4EEE3] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#C5DAC3] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#708E50] block">
                Take the Next Step
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-3xl text-stone-900 tracking-tight">
                Ready to Start Your Product Development Journey?
              </h3>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
                Tell us about your beauty product idea, target category, and
                manufacturing requirements. Our team can help you explore an
                appropriate development and production approach.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <Link
                to="/consultation"
                className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm transition-colors border border-stone-300 shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#708E50]" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
