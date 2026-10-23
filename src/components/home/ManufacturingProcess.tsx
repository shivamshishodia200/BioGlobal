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
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-stone-200/60 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-8 sm:space-y-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl space-y-3"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>HOW WE BRING YOUR VISION TO LIFE</span>
          </div>

          {/* Main Heading */}
          <h2
            id="manufacturing-process-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl text-stone-900 leading-tight tracking-tight"
          >
            From Your First Idea to the Finished Product
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs uppercase tracking-widest font-bold text-[#708E50]">
            Six Essential Steps. One Collaborative Manufacturing Journey.
          </p>

          {/* Description */}
          <p className="text-stone-600 text-xs sm:text-sm sm:leading-relaxed font-normal">
            Turning a beauty product concept into a market-ready formulation requires thoughtful planning, technical expertise, and coordinated manufacturing. Our structured six-step process guides brands through consultation, product development, sampling, manufacturing, quality checks, and final packaging.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* INTERACTIVE STEPPER NAVIGATION BAR                        */}
        {/* ======================================================== */}
        <div className="relative">
          {/* Connecting Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-5 left-10 right-10 h-0.5 bg-stone-200 z-0">
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
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 relative z-10"
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
                  className={`p-2 sm:p-2.5 rounded-xl text-center transition-all duration-300 flex flex-col items-center gap-1.5 cursor-pointer group focus:outline-hidden focus:ring-2 focus:ring-[#708E50] relative select-none ${
                    isSelected
                      ? 'bg-[#1D3C34] text-white shadow-md scale-102 ring-2 ring-[#708E50]'
                      : 'bg-white hover:bg-stone-50/90 text-stone-800 border border-stone-200/90 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:scale-105 relative ${
                      isSelected
                        ? 'bg-[#708E50] text-white shadow-xs'
                        : 'bg-[#E4EEE3] text-[#1D3C34] border border-[#C5DAC3]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <span
                      className={`text-[9px] uppercase font-bold tracking-widest block leading-none mb-0.5 ${
                        isSelected ? 'text-[#86A55B]' : 'text-[#708E50]'
                      }`}
                    >
                      Step 0{proc.step}
                    </span>
                    <h3
                      className={`text-[11px] sm:text-xs font-semibold tracking-tight leading-tight line-clamp-1 ${
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
        {/* ACTIVE STEP DETAILS PANEL (COMPACT)                      */}
        {/* ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            id={`step-panel-${current.step}`}
            role="tabpanel"
            aria-labelledby={`step-tab-${current.step}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-2xl border border-stone-200/90 p-5 sm:p-7 shadow-md relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column (Content & Activities) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Milestone Pill & Timeline Strip */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#1D3C34] text-[#86A55B] text-[11px] font-mono font-bold tracking-wide shadow-2xs">
                    Stage 0{current.step} of 06
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-stone-700 font-semibold px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                    <Clock className="w-3 h-3 text-amber-700" />
                    <span>Indicative Timeline: {current.timeline}</span>
                  </span>
                </div>

                {/* Heading & Subtitle */}
                <div className="space-y-0.5">
                  <h3 className="font-serif font-normal text-xl sm:text-2xl text-stone-900 leading-snug tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#708E50]">
                    {current.subtitle}
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-stone-600 text-xs sm:text-sm sm:leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Key Activities Checklist */}
                <div className="pt-1.5 border-t border-stone-100 space-y-2">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                    Key Activities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(current.activities || current.details).map((item, i) => (
                      <div
                        key={i}
                        className="py-2 px-2.5 bg-[#FAF9F5] rounded-lg border border-stone-200/80 text-xs text-stone-800 flex items-start gap-2 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium text-[11px] sm:text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Output Callout */}
                {current.output && (
                  <div className="py-2.5 px-3 rounded-lg bg-[#E4EEE3]/60 border border-[#C5DAC3] flex items-center justify-between gap-3 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D3C34]">
                      Expected Output:
                    </span>
                    <span className="font-semibold text-stone-900 text-right text-xs">
                      {current.output}
                    </span>
                  </div>
                )}

                {/* Step Switcher Navigation Controls */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border ${
                      activeStep === 0
                        ? 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300 cursor-pointer'
                    }`}
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>
                      {activeStep > 0
                        ? `Previous (0${activeStep})`
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
                    className={`px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs group ${
                      activeStep === MANUFACTURING_PROCESS.length - 1
                        ? 'opacity-40 cursor-not-allowed bg-stone-400 text-white'
                        : 'bg-[#1D3C34] hover:bg-[#142B25] text-white cursor-pointer'
                    }`}
                  >
                    <span>
                      {activeStep < MANUFACTURING_PROCESS.length - 1
                        ? `Next Step 0${activeStep + 2}: ${
                            MANUFACTURING_PROCESS[activeStep + 1].shortTitle ||
                            MANUFACTURING_PROCESS[activeStep + 1].title
                          }`
                        : 'Final Step Completed'}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: High-Res Stage Photography & Compact Action Strip */}
              <div className="lg:col-span-5 space-y-3">
                {/* Photo Frame */}
                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden shadow-sm border border-stone-200 group bg-stone-900">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Caption Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] font-bold tracking-wider uppercase border border-white/20">
                    {current.imageCaption || current.shortTitle}
                  </div>

                  {/* Bottom Stage Pill */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex items-center justify-between text-[11px] font-semibold">
                    <span className="text-stone-200">The BioGlobal Development Flow</span>
                    <span className="px-2 py-0.5 rounded bg-[#1D3C34]/90 backdrop-blur-md text-[#86A55B] font-mono font-bold text-[11px] border border-[#DFBD89]/30">
                      Step 0{current.step}
                    </span>
                  </div>
                </div>

                {/* Consultation Callout Box (Compact) */}
                <div className="bg-[#E4EEE3]/70 p-3.5 rounded-xl border border-[#C5DAC3] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 leading-tight">
                      Discuss Stage 0{current.step} Requirements
                    </h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">
                      Connect with our technical team for specifications & timelines.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        serviceType: `Process Inquiry: Step 0${current.step} (${current.shortTitle || current.title})`,
                      })
                    }
                    className="w-full sm:w-auto py-2 px-3.5 rounded-lg bg-[#708E50] hover:bg-[#5F7A43] text-white text-xs font-semibold whitespace-nowrap flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer flex-shrink-0"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ======================================================== */}
        {/* MANDATORY TIMELINE DISCLAIMER NOTE                      */}
        {/* ======================================================== */}
        <div className="text-center pt-1">
          <p className="text-[11px] text-stone-500 max-w-2xl leading-relaxed italic text-left">
            * Timelines are indicative and may vary depending on formulation
            complexity, product approval, packaging availability, and
            manufacturing requirements.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SECTION CTA: READY TO START (SLIM)                       */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-1"
        >
          <div className="bg-[#E4EEE3] rounded-2xl p-4 sm:p-6 lg:p-7 border border-[#C5DAC3] shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 text-left">
            <div className="space-y-1 max-w-xl">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#708E50] block">
                Take the Next Step
              </span>
              <h3 className="font-serif font-light text-xl sm:text-2xl text-stone-900 tracking-tight">
                Ready to Start Your Product Development Journey?
              </h3>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
                Tell us about your beauty product idea, target category, and manufacturing requirements.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-2.5 flex-shrink-0">
              <Link
                to="/consultation"
                className="px-4 py-2.5 rounded-lg bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2.5 rounded-lg bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs transition-colors border border-stone-300 shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#708E50]" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
