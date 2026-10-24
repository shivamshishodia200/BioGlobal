import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight,
  ShieldCheck, 
  FlaskConical, 
  Factory, 
  CheckCircle2,
  Users,
  Building2,
  Layers,
  HeartHandshake,
  Lightbulb,
  Compass,
  FileCheck2,
  CalendarCheck,
  ChevronRight,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
const cosmeticFacilityImg = '/images/bioglobal/about/about-facility-infrastructure.webp';
const cosmeticLabImg = '/images/bioglobal/about/about-formulation-lab.webp';
import { CATEGORIES } from '../data/categories';
import {
  ABOUT_HERO,
  ABOUT_STORY,
  PHILOSOPHY_PRINCIPLES,
  ABOUT_STATISTICS,
  ABOUT_CAPABILITIES,
  QUALITY_COMMITMENT_POINTS,
  COMPANY_VALUES,
  FACILITY_HIGHLIGHTS,
} from '../data/about';

export const AboutPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    document.title = 'About The BioGlobal | Cosmetic & Private Label Manufacturing';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Learn about The BioGlobal's cosmetic manufacturing expertise, formulation development, private label solutions, and manufacturing capabilities for beauty brands."
      );
    }
  }, []);

  // SEO JSON-LD Structured Data
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About The BioGlobal',
    description: ABOUT_HERO.description,
    mainEntity: {
      '@type': 'Organization',
      name: 'The BioGlobal',
      description: ABOUT_HERO.description,
      knowsAbout: [
        'Cosmetic Manufacturing',
        'Private Label Cosmetic Manufacturing',
        'Third-Party Cosmetic Manufacturing',
        'Custom Cosmetic Formulation',
        'Skin Care Manufacturing',
        'Hair Care Manufacturing',
        'Bath & Body Care Manufacturing',
        'Baby Care Manufacturing',
      ],
      areaServed: 'Worldwide',
    },
  };

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen text-stone-800 font-sans selection:bg-[#E4EEE3] selection:text-[#1D3C34]">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* =========================================================================
          PART 1 — PAGE HERO SECTION
      ========================================================================= */}
      <section className="bg-[#1D3C34] text-white pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-[#142B25] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#708E50]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#DFBD89]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
                <span>{ABOUT_HERO.eyebrow}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-white leading-tight tracking-tight">
                Where Science, Beauty & <span className="italic text-[#DFBD89]">Manufacturing Expertise</span> Come Together
              </h1>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                {ABOUT_HERO.description}
              </p>

              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#DFBD89]">
                {ABOUT_HERO.tagline}
              </p>

              {/* Hero CTA buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#capabilities"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#c9a775] text-[#14261D] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-4 h-4 text-[#14261D]" />
                </a>

                <Link
                  to="/consultation"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/15">
                <img
                  src={cosmeticFacilityImg}
                  alt="The BioGlobal cosmetic manufacturing facility and cleanroom production lines"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D3C34]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-xs text-stone-200">
                  <span className="font-semibold text-white block">Manufacturing Infrastructure</span>
                  Cleanroom processing and dedicated formulation suites.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Page Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">

        {/* =========================================================================
            PART 2 — OUR STORY
        ========================================================================= */}
        <section id="story" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
              <Compass className="w-3.5 h-3.5 text-[#708E50]" />
              <span>{ABOUT_STORY.eyebrow}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
              Building Beauty Brands Through{' '}
              <span className="italic text-[#708E50]">Expertise & Innovation</span>
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              {ABOUT_STORY.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Highlight Quote */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#E4EEE3]/40 border-l-4 border-[#708E50] text-[#1D3C34] italic font-serif text-base sm:text-lg">
              {ABOUT_STORY.highlightQuote}
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#DFBD89]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src={cosmeticLabImg}
                alt="Cosmetic research and formulation laboratory at The BioGlobal"
                className="w-full h-[440px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-200 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center font-bold">
                  <FlaskConical className="w-5 h-5 text-[#708E50]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">Formulation R&D</p>
                  <p className="text-[11px] text-stone-500">Collaborative Prototype Testing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================================================================
            PART 3 — OUR PHILOSOPHY
        ========================================================================= */}
        <section id="philosophy" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
              <Lightbulb className="w-3.5 h-3.5 text-[#708E50]" />
              <span>OUR PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
              Connecting Cosmetic Science With{' '}
              <span className="italic text-[#708E50]">Practical Manufacturing Excellence</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We believe cosmetic innovation is most valuable when it is supported by practical manufacturing knowledge and a clear understanding of customer expectations.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Our approach brings together formulation planning, ingredient considerations, product customization, production coordination, and quality-related practices to help beauty businesses develop products aligned with their commercial goals. Every manufacturing project is an opportunity to combine product creativity with thoughtful technical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY_PRINCIPLES.map((principle, index) => {
              const icons = [Lightbulb, ShieldCheck, HeartHandshake];
              const IconComp = icons[index % icons.length];

              return (
                <motion.div
                  key={principle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-shadow space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6 text-[#708E50]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            PART 4 — COMPANY EXPERIENCE & INFRASTRUCTURE (STATISTICS)
        ========================================================================= */}
        <section id="infrastructure" className="bg-[#1D3C34] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#DFBD89]">
              OUR MANUFACTURING STRENGTH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight font-light">
              Experience and Infrastructure <span className="italic text-[#DFBD89]">Supporting Your Ambitions</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Our company profile highlights manufacturing experience, production infrastructure, and formulation capabilities developed to support beauty and personal care businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ABOUT_STATISTICS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-colors"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#DFBD89]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {stat.label}
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center sm:text-left text-xs text-stone-400">
            * Operational figures reflect reported company profile specifications; production scheduling and output are determined by formulation complexity and batch scheduling.
          </div>
        </section>

        {/* =========================================================================
            PART 5 — OUR CORE MANUFACTURING CAPABILITIES
        ========================================================================= */}
        <section id="capabilities" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
              <Factory className="w-3.5 h-3.5 text-[#708E50]" />
              <span>OUR TECHNICAL CAPABILITIES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
              The Expertise Behind <span className="italic text-[#708E50]">Every Formulation</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Developing successful cosmetic products involves more than selecting ingredients. It requires coordinated formulation planning, appropriate manufacturing processes, product evaluation, and packaging considerations.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              The BioGlobal supports beauty businesses through capabilities that contribute to a structured product development and manufacturing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ABOUT_CAPABILITIES.map((cap, idx) => {
              const capImages = [cosmeticFacilityImg, cosmeticFacilityImg, cosmeticLabImg];
              const cardImage = capImages[idx % capImages.length];

              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={cardImage}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] uppercase tracking-wider text-[#DFBD89] font-semibold block">
                        Capability 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white leading-tight">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-[#708E50] uppercase tracking-wider">
                        {cap.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 space-y-2">
                      <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                        Key Focus Areas:
                      </span>
                      <ul className="space-y-1.5">
                        {cap.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50] flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            PART 6 — SIX MANUFACTURING CATEGORIES
        ========================================================================= */}
        <section id="categories" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
              <Layers className="w-3.5 h-3.5 text-[#708E50]" />
              <span>OUR PRODUCT EXPERTISE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
              Manufacturing Solutions Across{' '}
              <span className="italic text-[#708E50]">Six Beauty Categories</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              From specialized cosmetic formulations to everyday personal care essentials, our capabilities support diverse beauty product requirements across six core categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.imageAlt || cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#1D3C34] text-[11px] font-bold">
                    {cat.name}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-stone-900">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {cat.shortDescription || cat.description}
                    </p>
                  </div>

                  <Link
                    to={`/category/${cat.slug}`}
                    className="pt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#1D3C34] hover:text-[#708E50] transition-colors"
                  >
                    <span>Explore {cat.name} Formulations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            PART 7 — OUR MANUFACTURING SERVICES
        ========================================================================= */}
        <section id="services" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
              <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
              <span>HOW WE SUPPORT YOUR BRAND</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
              Flexible Manufacturing Solutions for{' '}
              <span className="italic text-[#708E50]">Different Business Needs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center font-bold">
                  <Factory className="w-6 h-6 text-[#708E50]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Third-Party Cosmetic Manufacturing
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Manufacturing support for businesses working with approved formulations, defined product specifications, and production requirements.
                </p>
              </div>

              <Link
                to="/third-party-manufacturing"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Explore Contract Manufacturing</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFBD89]" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6 text-[#708E50]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Private Label Manufacturing
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Explore available cosmetic formulations and suitable packaging options for launching or expanding your branded product range.
                </p>
              </div>

              <Link
                to="/private-label-manufacturing"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Explore Private Label Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFBD89]" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center font-bold">
                  <FlaskConical className="w-6 h-6 text-[#708E50]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Custom Formulation & R&D
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Discuss brand-specific formulation development, ingredient preferences, product concepts, and prototype refinement.
                </p>
              </div>

              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Discuss Custom Formulation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFBD89]" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            PART 8 — OUR QUALITY COMMITMENT
        ========================================================================= */}
        <section id="quality" className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#708E50]">
              OUR APPROACH TO QUALITY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
              Quality-Focused Practices Throughout the{' '}
              <span className="italic text-[#708E50]">Manufacturing Journey</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              At The BioGlobal, we recognize that product consistency, clear specifications, and responsible manufacturing practices are essential to building dependable business relationships. Our quality-focused approach emphasizes appropriate manufacturing procedures, technical documentation, and collaboration around product requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITY_COMMITMENT_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FAF9F5] border border-stone-200/80 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                  <h3 className="font-sans font-bold text-sm text-stone-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
            <ShieldCheck className="w-4 h-4 text-[#708E50] flex-shrink-0" />
            <span>
              All operations are aligned with cosmetic Good Manufacturing Practice (GMP) principles. Documented specifications and test results are available upon commercial arrangement.
            </span>
          </div>
        </section>

        {/* =========================================================================
            PART 9 — OUR VISION & MISSION
        ========================================================================= */}
        <section id="vision-mission" className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-[#1D3C34] text-white space-y-4"
            >
              <span className="text-xs uppercase font-bold tracking-widest text-[#DFBD89]">
                OUR VISION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight">
                Enabling Beauty Brands to Bring Better Ideas to Market
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                To support the growth of innovative beauty and personal care businesses through collaborative product development, dependable manufacturing solutions, and a consistent commitment to quality and customer relationships.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#E4EEE3] text-[#1D3C34] space-y-4 border border-[#C5DAC3]"
            >
              <span className="text-xs uppercase font-bold tracking-widest text-[#708E50]">
                OUR MISSION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1D3C34] leading-tight">
                Making Professional Cosmetic Manufacturing More Accessible
              </h2>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
                To provide beauty brands with practical manufacturing support, thoughtful formulation options, clear communication, and commercially relevant solutions that help transform product concepts into distinctive market-ready collections.
              </p>
            </motion.div>
          </div>

          {/* Company Values */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#708E50]">
                OUR CORE VALUES
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                The Principles Guiding Our Work
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {COMPANY_VALUES.map((val, idx) => (
                <div
                  key={val.id}
                  className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2 text-center"
                >
                  <span className="inline-block w-8 h-8 rounded-full bg-[#E4EEE3] text-[#1D3C34] font-bold text-xs leading-8 mx-auto">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-base">
                    {val.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            PART 10 — MANUFACTURING FACILITY SECTION
        ========================================================================= */}
        <section id="facility" className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
                <Building2 className="w-3.5 h-3.5 text-[#708E50]" />
                <span>EXPLORE OUR FACILITY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
                Get to Know the Manufacturing Capabilities{' '}
                <span className="italic text-[#708E50]">Behind Your Brand</span>
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Understanding the manufacturing process can help businesses make more informed production decisions. Connect with The BioGlobal to discuss our manufacturing capabilities, facility-related information, and potential opportunities for a technical consultation or plant visit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {FACILITY_HIGHLIGHTS.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ serviceType: 'Skin Care Consultation' })}
                  className="px-6 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
                >
                  <CalendarCheck className="w-4 h-4 text-[#DFBD89]" />
                  <span>Request a Facility Visit</span>
                </button>

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer border border-stone-200"
                >
                  <span>Speak With Our Team</span>
                </Link>
              </div>

              <p className="text-[11px] text-stone-400">
                * Note: Facility visits are scheduled by advance request for qualified commercial brand accounts, subject to operational scheduling and safety protocols.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-stone-100">
                <img
                  src={cosmeticFacilityImg}
                  alt="Industrial cosmetic production and compounding suites"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PART 11 — FINAL ABOUT PAGE CTA
        ========================================================================= */}
        <section className="rounded-3xl bg-gradient-to-br from-[#1D3C34] via-[#142B25] to-[#1D3C34] text-white p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>LET&apos;S BUILD SOMETHING EXCEPTIONAL</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight max-w-3xl mx-auto">
            Experience the Expertise Behind Your{' '}
            <span className="italic text-[#DFBD89]">Next Beauty Product</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Whether you are creating a new skincare line, exploring private label opportunities, or seeking a manufacturing partner for your existing beauty brand, The BioGlobal welcomes the opportunity to discuss your product vision.
          </p>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Share your requirements with our team and explore a manufacturing solution aligned with your business goals.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/consultation"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#DFBD89] hover:bg-[#c9a775] text-[#14261D] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request a Technical Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#14261D]" />
            </Link>

            <Link
              to="/products"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Our Products</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
