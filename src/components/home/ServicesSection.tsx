import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { MANUFACTURING_SERVICES } from '../../data/services';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Factory,
  MessageSquare,
  FlaskConical,
  ArrowUpRight,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  const thirdParty = MANUFACTURING_SERVICES[0];
  const privateLabel = MANUFACTURING_SERVICES[1];
  const customRd = MANUFACTURING_SERVICES[2];

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-white py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden relative"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold tracking-wider uppercase border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>OUR MANUFACTURING SOLUTIONS</span>
          </div>

          {/* Main Heading */}
          <h2
            id="services-heading"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[44px] text-stone-900 tracking-tight leading-tight"
          >
            Tailored Manufacturing Solutions for Every Beauty Brand
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#708E50]">
            Your Vision. Our Expertise. Endless Possibilities.
          </p>

          {/* Description */}
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Every successful beauty brand needs manufacturing solutions that
            match its vision, market positioning, and growth ambitions. At The
            BioGlobal, we provide comprehensive third-party cosmetic
            manufacturing, private label solutions, and customized formulation
            development to help businesses bring distinctive beauty and
            personal care products to market. From concept development and
            formulation selection to manufacturing and packaging coordination,
            our approach focuses on quality, collaboration, and commercially
            practical solutions.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* BENTO GRID: 3 PRIMARY MANUFACTURING SERVICES             */}
        {/* ======================================================== */}
        <div className="space-y-8">
          
          {/* Card 1: Featured Third-Party Cosmetic Manufacturing (Full-Width Split Bento) */}
          {thirdParty && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-[#FAF9F5] border border-stone-200/90 hover:border-[#C5DAC3] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Text & Features Content (7 Cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D3C34] text-white text-[10px] font-bold tracking-wider uppercase">
                      <Factory className="w-3 h-3 text-[#DFBD89]" />
                      <span>{thirdParty.badge}</span>
                    </span>
                    <span className="text-xs font-semibold text-[#708E50] tracking-wide">
                      {thirdParty.valueProposition}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-stone-900 tracking-tight">
                      {thirdParty.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#708E50]">
                      {thirdParty.subtitle}
                    </p>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm sm:leading-relaxed font-normal">
                    {thirdParty.description}
                  </p>

                  {/* 4 Service Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {thirdParty.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/70 text-xs text-stone-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3.5">
                    <Link
                      to={thirdParty.ctaLink}
                      className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md group/btn inline-flex items-center gap-2"
                    >
                      <span>{thirdParty.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        openQuoteModal({
                          serviceType: 'Third-Party Cosmetic Manufacturing',
                        })
                      }
                      className="px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm transition-colors border border-stone-300 shadow-2xs inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Request Contract Quotation</span>
                      <ArrowUpRight className="w-4 h-4 text-[#708E50]" />
                    </button>
                  </div>
                </div>

                {/* Right Image Frame (5 Cols) */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-md border border-stone-100">
                    <img
                      src={thirdParty.image}
                      alt={thirdParty.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/80 shadow-md">
                      <span className="text-[10px] font-bold text-[#708E50] uppercase tracking-wider block">
                        Manufacturing Environment
                      </span>
                      <p className="text-xs font-bold text-stone-900 mt-0.5">
                        Batch Compounding &amp; Controlled Filling
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* Cards 2 & 3: Private Label and Custom R&D (2-Column Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 2: Private Label Manufacturing */}
            {privateLabel && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#FAF9F5] border border-stone-200/90 hover:border-[#C5DAC3] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="space-y-5 flex-grow">
                  {/* Image Banner */}
                  <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-sm border border-stone-100">
                    <img
                      src={privateLabel.image}
                      alt={privateLabel.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#1D3C34]/90 text-white text-[10px] font-bold tracking-wider uppercase border border-[#DFBD89]/40 backdrop-blur-xs">
                        {privateLabel.badge}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-[#708E50] tracking-wide block">
                      {privateLabel.valueProposition}
                    </span>
                    <h3 className="font-serif font-semibold text-2xl text-stone-900 tracking-tight">
                      {privateLabel.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#708E50]">
                      {privateLabel.subtitle}
                    </p>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {privateLabel.description}
                  </p>

                  {/* 4 Features */}
                  <div className="space-y-2 pt-1">
                    {privateLabel.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/70 text-xs text-stone-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-6 mt-6 border-t border-stone-200/70 flex flex-wrap items-center gap-3">
                  <Link
                    to={privateLabel.ctaLink}
                    className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md group/btn inline-flex items-center gap-2"
                  >
                    <span>{privateLabel.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        serviceType: 'Private Label Manufacturing',
                      })
                    }
                    className="px-4 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs transition-colors border border-stone-300 shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Sample Kit</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#708E50]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Card 3: Custom Formulation & R&D */}
            {customRd && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-[#FAF9F5] border border-stone-200/90 hover:border-[#C5DAC3] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="space-y-5 flex-grow">
                  {/* Image Banner */}
                  <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-sm border border-stone-100">
                    <img
                      src={customRd.image}
                      alt={customRd.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#1D3C34]/90 text-white text-[10px] font-bold tracking-wider uppercase border border-[#DFBD89]/40 backdrop-blur-xs flex items-center gap-1.5">
                        <FlaskConical className="w-3 h-3 text-[#DFBD89]" />
                        <span>{customRd.badge}</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-[#708E50] tracking-wide block">
                      {customRd.valueProposition}
                    </span>
                    <h3 className="font-serif font-semibold text-2xl text-stone-900 tracking-tight">
                      {customRd.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#708E50]">
                      {customRd.subtitle}
                    </p>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {customRd.description}
                  </p>

                  {/* 4 Features */}
                  <div className="space-y-2 pt-1">
                    {customRd.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/70 text-xs text-stone-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-6 mt-6 border-t border-stone-200/70 flex flex-wrap items-center gap-3">
                  <Link
                    to={customRd.ctaLink}
                    className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md group/btn inline-flex items-center gap-2"
                  >
                    <span>{customRd.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        serviceType: 'Skin Care Consultation',
                      })
                    }
                    className="px-4 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs transition-colors border border-stone-300 shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Chemist Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#708E50]" />
                  </button>
                </div>
              </motion.div>
            )}

          </div>
        </div>

        {/* ======================================================== */}
        {/* OPTIONAL SERVICE SECTION CTA CALLOUT                      */}
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
                Expert Guidance
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-3xl text-stone-900 tracking-tight">
                Not Sure Which Manufacturing Solution Fits Your Brand?
              </h3>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
                Share your product concept, target category, and manufacturing
                requirements with our team. We can help you explore suitable
                production options and identify a practical next step for your
                business.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <Link
                to="/consultation"
                className="px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#86A55B]" />
              </Link>

              <Link
                to="/third-party-manufacturing"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm transition-colors border border-stone-300 shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-[#708E50]" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
