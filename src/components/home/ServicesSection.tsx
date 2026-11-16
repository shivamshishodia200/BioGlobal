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
      className="bg-[#0B1B17] py-14 sm:py-18 lg:py-20 border-b border-[#1A3830] overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-8 sm:space-y-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-left w-full space-y-2.5 sm:space-y-3"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-semibold tracking-wider uppercase border border-[#254A3E] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>OUR MANUFACTURING SOLUTIONS</span>
          </div>

          {/* Main Heading */}
          <h2
            id="services-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight"
          >
            Tailored Manufacturing Solutions for Every Beauty Brand
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#DFBD89]">
            Your Vision. Our Expertise. Endless Possibilities.
          </p>

          {/* Description */}
          <p className="text-stone-300 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-5xl lg:max-w-6xl">
            Every successful beauty brand requires manufacturing solutions tailored to its market positioning, formulation standards, and commercial growth ambitions. At The BioGlobal, we provide third-party manufacturing, private label collections, and custom R&amp;D to bring distinctive personal care products to life.
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
              className="bg-[#112520] border border-[#1F3F36] hover:border-[#DFBD89]/50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Text & Features Content (7 Cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1B17] text-white text-[10px] font-bold tracking-wider uppercase border border-[#254A3E]">
                      <Factory className="w-3 h-3 text-[#DFBD89]" />
                      <span>{thirdParty.badge}</span>
                    </span>
                    <span className="text-xs font-semibold text-[#DFBD89] tracking-wide">
                      {thirdParty.valueProposition}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                      {thirdParty.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#86A55B]">
                      {thirdParty.subtitle}
                    </p>
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm sm:leading-relaxed font-normal">
                    {thirdParty.description}
                  </p>

                  {/* 4 Service Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {thirdParty.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0B1B17] border border-[#1F3F36] text-xs text-stone-200 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#DFBD89] flex-shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3.5">
                    <Link
                      to={thirdParty.ctaLink}
                      className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] font-bold text-xs sm:text-sm transition-all shadow-md group/btn inline-flex items-center gap-2"
                    >
                      <span>{thirdParty.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#0B1B17] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        openQuoteModal({
                          serviceType: 'Third-Party Cosmetic Manufacturing',
                        })
                      }
                      className="px-5 py-3.5 rounded-xl bg-[#142C25] hover:bg-[#1C3D34] text-white font-semibold text-xs sm:text-sm transition-colors border border-[#254A3E] shadow-sm inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Request Contract Quotation</span>
                      <ArrowUpRight className="w-4 h-4 text-[#DFBD89]" />
                    </button>
                  </div>
                </div>

                {/* Right Image Frame (5 Cols) */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-md border border-[#1F3F36]">
                    <img
                      src={thirdParty.image}
                      alt={thirdParty.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B17] via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 bg-[#0B1B17]/90 backdrop-blur-md p-3 rounded-xl border border-[#254A3E] shadow-md">
                      <span className="text-[10px] font-bold text-[#DFBD89] uppercase tracking-wider block">
                        Manufacturing Environment
                      </span>
                      <p className="text-xs font-bold text-white mt-0.5">
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
                className="bg-[#112520] border border-[#1F3F36] hover:border-[#DFBD89]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="space-y-5 flex-grow">
                  {/* Image Banner */}
                  <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-sm border border-[#1F3F36]">
                    <img
                      src={privateLabel.image}
                      alt={privateLabel.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112520] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#0B1B17]/90 text-white text-[10px] font-bold tracking-wider uppercase border border-[#DFBD89]/40 backdrop-blur-xs">
                        {privateLabel.badge}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-[#DFBD89] tracking-wide block">
                      {privateLabel.valueProposition}
                    </span>
                    <h3 className="font-serif font-semibold text-2xl text-white tracking-tight">
                      {privateLabel.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#86A55B]">
                      {privateLabel.subtitle}
                    </p>
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {privateLabel.description}
                  </p>

                  {/* 4 Features */}
                  <div className="space-y-2 pt-1">
                    {privateLabel.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0B1B17] border border-[#1F3F36] text-xs text-stone-200 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#DFBD89] flex-shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-6 mt-6 border-t border-[#1F3F36] flex flex-wrap items-center gap-3">
                  <Link
                    to={privateLabel.ctaLink}
                    className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] font-bold text-xs sm:text-sm transition-all shadow-md group/btn inline-flex items-center gap-2"
                  >
                    <span>{privateLabel.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#0B1B17] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        serviceType: 'Private Label Manufacturing',
                      })
                    }
                    className="px-4 py-3.5 rounded-xl bg-[#142C25] hover:bg-[#1C3D34] text-white font-semibold text-xs transition-colors border border-[#254A3E] shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Sample Kit</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#DFBD89]" />
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
                className="bg-[#112520] border border-[#1F3F36] hover:border-[#DFBD89]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="space-y-5 flex-grow">
                  {/* Image Banner */}
                  <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-sm border border-[#1F3F36]">
                    <img
                      src={customRd.image}
                      alt={customRd.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112520] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#0B1B17]/90 text-white text-[10px] font-bold tracking-wider uppercase border border-[#DFBD89]/40 backdrop-blur-xs flex items-center gap-1.5">
                        <FlaskConical className="w-3 h-3 text-[#DFBD89]" />
                        <span>{customRd.badge}</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-[#DFBD89] tracking-wide block">
                      {customRd.valueProposition}
                    </span>
                    <h3 className="font-serif font-semibold text-2xl text-white tracking-tight">
                      {customRd.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#86A55B]">
                      {customRd.subtitle}
                    </p>
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {customRd.description}
                  </p>

                  {/* 4 Features */}
                  <div className="space-y-2 pt-1">
                    {customRd.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0B1B17] border border-[#1F3F36] text-xs text-stone-200 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#DFBD89] flex-shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-6 mt-6 border-t border-[#1F3F36] flex flex-wrap items-center gap-3">
                  <Link
                    to={customRd.ctaLink}
                    className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] font-bold text-xs sm:text-sm transition-all shadow-md group/btn inline-flex items-center gap-2"
                  >
                    <span>{customRd.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#0B1B17] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        serviceType: 'Skin Care Consultation',
                      })
                    }
                    className="px-4 py-3.5 rounded-xl bg-[#142C25] hover:bg-[#1C3D34] text-white font-semibold text-xs transition-colors border border-[#254A3E] shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Chemist Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#DFBD89]" />
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
          <div className="bg-[#112520] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#1F3F36] shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#DFBD89] block">
                Expert Guidance
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-3xl text-white tracking-tight">
                Not Sure Which Manufacturing Solution Fits Your Brand?
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                Share your product concept, target category, and manufacturing
                requirements with our team. We can help you explore suitable
                production options and identify a practical next step for your
                business.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3 flex-shrink-0">
              <Link
                to="/consultation"
                className="px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#C8A46E] text-[#0B1B17] font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#0B1B17]" />
              </Link>

              <Link
                to="/third-party-manufacturing"
                className="px-5 py-3.5 rounded-xl bg-[#142C25] hover:bg-[#1C3D34] text-white font-semibold text-xs sm:text-sm transition-colors border border-[#254A3E] shadow-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-[#DFBD89]" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
