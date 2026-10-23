import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  PackageCheck,
  Clock,
  FlaskConical,
  ExternalLink,
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

// High-resolution luxury product showcase images
import skincareImg from '../../assets/capabilities/skincare.jpg';
import haircareImg from '../../assets/capabilities/haircare.jpg';
import bodycareImg from '../../assets/capabilities/bodycare.jpg';
import babycareImg from '../../assets/capabilities/babycare.jpg';
import soapcareImg from '../../assets/capabilities/soapcare.jpg';
import cosmeticsImg from '../../assets/capabilities/cosmetics.jpg';

interface CapabilityCategory {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  formulations: string[];
  ingredients: string[];
  packaging: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
  moq: string;
  leadTime: string;
  highlightTag: string;
}

const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: 'cosmetic-products',
    name: 'Cosmetic Products',
    slug: 'cosmetic-products',
    headline: 'Color Cosmetics Crafted for Modern Beauty Brands',
    description:
      'Create makeup collections that combine beautiful finishes, comfortable textures, and contemporary cosmetic innovation. Our manufacturing solutions support beauty brands seeking distinctive color cosmetics, hybrid makeup formulations, and customizable product experiences. From everyday beauty essentials to premium makeup collections, we help develop formulations aligned with your desired product positioning, packaging preferences, and target audience.',
    formulations: [
      'Liquid & Cream Foundations',
      'Hydrating Makeup Primers',
      'Setting Sprays & Mists',
      'BB & CC Creams',
    ],
    ingredients: [
      'Hyaluronic Acid',
      'Vitamin E',
      'Niacinamide',
      'Glycerin',
    ],
    packaging:
      'Airless Pumps, Cosmetic Tubes, Glass Bottles, Compact Containers, and Custom Makeup Packaging.',
    image: cosmeticsImg,
    imageAlt: 'Color cosmetics and hybrid makeup manufacturing by The BioGlobal',
    ctaText: 'Explore Cosmetic Products',
    ctaLink: '/category/cosmetic-products',
    moq: '1,000 Units',
    leadTime: '21 - 28 Days',
    highlightTag: 'Hybrid Makeup Formulations',
  },
  {
    id: 'skincare',
    name: 'Skin Care',
    slug: 'skin-care',
    headline: 'Science-Inspired Skincare Formulations for Growing Brands',
    description:
      'Develop skincare collections that respond to modern consumer preferences for effective ingredients, refined textures, and carefully considered formulations. Our skincare manufacturing capabilities cover facial cleansers, serums, moisturizers, creams, and specialized skin treatment products. We collaborate with brands to create formulations suited to different product concepts, target audiences, and market requirements.',
    formulations: [
      'Vitamin C Facial Serums',
      'Hyaluronic Acid Hydration Serums',
      'Ceramide Barrier Moisturizers',
      'Broad-Spectrum Sunscreen Formulations',
    ],
    ingredients: [
      'Niacinamide',
      'Hyaluronic Acid',
      'Vitamin C Derivatives',
      'Ceramides',
    ],
    packaging:
      'Amber Dropper Bottles, Airless Pumps, Cosmetic Jars, Tubes, and Serum Bottles.',
    image: skincareImg,
    imageAlt: 'Science-inspired skincare formulation and manufacturing',
    ctaText: 'Explore Skin Care Products',
    ctaLink: '/category/skin-care',
    moq: '1,000 Units',
    leadTime: '21 - 28 Days',
    highlightTag: 'Clinical Cosmeceutical Compounding',
  },
  {
    id: 'haircare',
    name: 'Hair Care',
    slug: 'hair-care',
    headline: 'Innovative Hair & Scalp Care Manufacturing Solutions',
    description:
      'Build hair care collections that bring together cleansing performance, conditioning benefits, and appealing sensory experiences. From shampoos and conditioners to hair masks, scalp serums, and styling products, The BioGlobal supports customized hair care formulations designed for different consumer preferences, hair types, and brand positioning.',
    formulations: [
      'Sulfate-Free Shampoos',
      'Nourishing Hair Conditioners',
      'Hair Repair Masks',
      'Scalp Care Serums',
    ],
    ingredients: [
      'Biotin',
      'Rosemary Extract',
      'Panthenol',
      'Hydrolyzed Keratin',
    ],
    packaging:
      'Shampoo Bottles, Pump Dispensers, Hair Mask Jars, Dropper Bottles, and Cosmetic Tubes.',
    image: haircareImg,
    imageAlt: 'Hair and scalp care manufacturing solutions',
    ctaText: 'Explore Hair Care Products',
    ctaLink: '/category/hair-care',
    moq: '1,000 Units',
    leadTime: '21 - 30 Days',
    highlightTag: 'Scalp & Fiber Restoration',
  },
  {
    id: 'bathcare',
    name: 'Bath Care',
    slug: 'bath-care',
    headline: 'Refreshing Bath Care Products for Everyday Wellness',
    description:
      'Create bath and cleansing collections that elevate everyday routines through appealing textures, fragrances, and thoughtful ingredient combinations. Our bath care manufacturing solutions support a variety of product concepts, from traditional cleansing bars to contemporary shower and bath essentials. We help brands develop products that reflect their identity and desired customer experience.',
    formulations: [
      'Glycerin Bath Soaps',
      'Botanical Cleansing Bars',
      'Moisturizing Body Washes',
      'Bath Scrubs & Polishes',
    ],
    ingredients: [
      'Glycerin',
      'Aloe Vera',
      'Shea Butter',
      'Botanical Oils',
    ],
    packaging:
      'Soap Wrappers, Paper Cartons, Liquid Dispenser Bottles, Pump Bottles, and Premium Gift Packaging.',
    image: soapcareImg,
    imageAlt: 'Artisanal bath and cleansing care soap manufacturing',
    ctaText: 'Explore Bath Care Products',
    ctaLink: '/category/bath-care',
    moq: '1,000 Units',
    leadTime: '14 - 21 Days',
    highlightTag: 'Cold-Process & Cleansing Bars',
  },
  {
    id: 'bodycare',
    name: 'Body Care',
    slug: 'body-care',
    headline: 'Thoughtfully Formulated Body Care for Every Lifestyle',
    description:
      'Develop body care products that combine daily comfort with premium textures and carefully selected cosmetic ingredients. Our manufacturing capabilities include moisturizing lotions, nourishing creams, body butters, exfoliating scrubs, and other personal care essentials. We help beauty brands create product collections that offer a distinctive experience while supporting their commercial objectives.',
    formulations: [
      'Hydrating Body Lotions',
      'Nourishing Body Butters',
      'Exfoliating Body Scrubs',
      'Hand & Body Creams',
    ],
    ingredients: [
      'Shea Butter',
      'Cocoa Butter',
      'Glycerin',
      'Lactic Acid',
    ],
    packaging:
      'Body Lotion Pumps, Cosmetic Jars, Squeeze Tubes, Dispenser Bottles, and Travel-Size Packaging.',
    image: bodycareImg,
    imageAlt: 'Body care lotions, butters and creams manufacturing',
    ctaText: 'Explore Body Care Products',
    ctaLink: '/category/body-care',
    moq: '1,000 Units',
    leadTime: '18 - 25 Days',
    highlightTag: 'Fast-Absorbing Emulsions',
  },
  {
    id: 'babycare',
    name: 'Baby Care',
    slug: 'baby-care',
    headline: 'Gentle Baby Care Formulations Developed with Care',
    description:
      'Create baby and infant personal care collections with an emphasis on carefully selected ingredients, gentle product concepts, and appropriate quality assessment. Our baby care formulation capabilities include mild cleansing products, moisturizing lotions, baby massage oils, and protective care products. We support brands in developing formulations aligned with their intended age groups, product positioning, and applicable safety requirements.',
    formulations: [
      'Mild Baby Shampoos',
      'Gentle Baby Body Washes',
      'Baby Moisturizing Lotions',
      'Baby Massage Oils',
    ],
    ingredients: [
      'Colloidal Oatmeal',
      'Glycerin',
      'Sunflower Seed Oil',
      'Panthenol',
    ],
    packaging:
      'Baby-Safe Pump Bottles, Flip-Top Bottles, Soft Tubes, Lotion Containers, and Travel-Size Packaging.',
    image: babycareImg,
    imageAlt: 'Gentle baby and infant personal care product formulations',
    ctaText: 'Explore Baby Care Products',
    ctaLink: '/category/baby-care',
    moq: '1,000 Units',
    leadTime: '21 - 30 Days',
    highlightTag: 'Gentle Infant Care Compounding',
  },
];

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cosmetic-products');
  const { openQuoteModal } = useQuoteModal();

  const currentCategory =
    CAPABILITY_CATEGORIES.find((c) => c.id === activeTab) ||
    CAPABILITY_CATEGORIES[0];

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16 border-b border-stone-200/60 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12">
        
        {/* ======================================================== */}
        {/* PART 1 — OUR STORY                                       */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
        >
          {/* Left Column (5 Cols): Eyebrow, Heading, Tagline & CTA */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold tracking-wider uppercase border border-[#C5DAC3] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
              <span>A LEGACY OF EXPERTISE &amp; INNOVATION</span>
            </div>

            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-[44px] text-stone-900 tracking-tight leading-[1.18]">
              Where Beauty Innovation Meets Manufacturing Excellence
            </h2>

            <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#708E50]">
              Your Brand Vision. Our Manufacturing Expertise.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl group"
              >
                <span>Discover Our Manufacturing Expertise</span>
                <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column (7 Cols): Left-Aligned Narrative Story Paragraphs */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/80 shadow-xs space-y-4 text-left text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              At <strong>The BioGlobal</strong>, we believe every successful
              beauty brand begins with a powerful idea—and the right
              manufacturing expertise to bring it to life.
            </p>
            <p>
              With over 20 years of experience in cosmetic manufacturing, we
              combine formulation knowledge, product development expertise, and
              quality-focused production processes to create beauty and personal
              care products tailored to evolving market demands.
            </p>
            <p>
              From ambitious skincare startups to established cosmetic
              businesses, we provide comprehensive third-party manufacturing and
              private label solutions designed to help brands build
              distinctive, competitive product portfolios.
            </p>
            <p className="pt-2 border-t border-stone-200/70 text-xs sm:text-sm text-stone-500">
              Our capabilities cover six essential categories:{' '}
              <em className="text-stone-700 font-medium">
                Cosmetic Products, Skin Care, Hair Care, Bath Care, Body Care,
                and Baby Care
              </em>
              . Whether developing a completely new formulation or expanding an
              existing product range, our approach prioritizes collaboration,
              consistency, and commercially practical manufacturing solutions.
            </p>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* PART 2 — MANUFACTURING CAPABILITIES                      */}
        {/* ======================================================== */}
        <div className="pt-4 border-t border-stone-200/60">
          {/* Section Subheading (Left-Aligned) */}
          <div className="w-full mb-6 space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-[#708E50] font-bold block">
              EXPLORE OUR EXPERTISE
            </span>
            <h2 className="font-serif font-light text-2xl sm:text-3xl lg:text-[38px] text-stone-900 tracking-tight">
              You Name It. We Make It.
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm sm:leading-relaxed max-w-5xl lg:max-w-6xl">
              From advanced skincare serums to everyday personal care essentials, The BioGlobal offers versatile cosmetic manufacturing solutions across six specialized categories. Explore our formulation capabilities to help transform your product ideas into market-ready beauty collections.
            </p>
          </div>

          {/* Six Category Tabs (Full-Width Responsive Segmented Control) */}
          <div className="w-full mb-8">
            <div
              role="tablist"
              aria-label="Manufacturing product categories"
              className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2 p-1.5 bg-[#FAF9F5] rounded-2xl lg:rounded-full border border-stone-200/90 shadow-inner"
            >
              {CAPABILITY_CATEGORIES.map((cat) => {
                const isSelected = cat.id === activeTab;
                return (
                  <button
                    key={cat.id}
                    id={`tab-${cat.id}`}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`panel-${cat.id}`}
                    type="button"
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative w-full py-3 px-2 sm:px-3 rounded-xl lg:rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center text-center ${
                      isSelected
                        ? 'text-white'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute inset-0 bg-[#1D3C34] rounded-xl lg:rounded-full shadow-md"
                        transition={{
                          type: 'spring',
                          stiffness: 450,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                          isSelected ? 'bg-[#86A55B]' : 'bg-transparent'
                        }`}
                      />
                      <span className="whitespace-nowrap">{cat.name}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Grid */}
          <div
            id={`panel-${currentCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentCategory.id}`}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          >
            {/* Left Column: Dynamic Category Details */}
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Category Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE3]/80 border border-[#C5DAC3] text-[#1D3C34] text-xs font-semibold">
                <FlaskConical className="w-3.5 h-3.5 text-[#708E50]" />
                <span>{currentCategory.highlightTag}</span>
              </div>

              {/* Category Heading */}
              <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[32px] text-stone-900 leading-snug tracking-tight">
                {currentCategory.headline}
              </h3>

              {/* Category Description */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                {currentCategory.description}
              </p>

              {/* Key Formulations Grid */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  Key Formulations:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentCategory.formulations.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF9F5] border border-stone-200/80 text-xs font-medium text-stone-800 transition-colors shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Active Ingredients */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  Suggested Active Ingredients:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCategory.ingredients.map((active, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-3 py-1 rounded-md bg-[#FAF9F5] border border-stone-200/90 text-stone-700 font-medium"
                    >
                      {active}
                    </span>
                  ))}
                </div>
              </div>

              {/* Packaging Formats Card */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                <div className="flex items-start gap-2.5">
                  <PackageCheck className="w-4 h-4 text-[#708E50] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                      Recommended Packaging Formats
                    </span>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      {currentCategory.packaging}
                    </p>
                  </div>
                </div>
              </div>

              {/* Specifications Strip (MOQ & Turnaround) */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <PackageCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-semibold block leading-none mb-1">
                      Starting MOQ
                    </span>
                    <span className="text-sm font-bold text-stone-900">
                      {currentCategory.moq}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-semibold block leading-none mb-1">
                      Lead Time
                    </span>
                    <span className="text-sm font-bold text-stone-900">
                      {currentCategory.leadTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to={currentCategory.ctaLink}
                  className="px-7 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl relative overflow-hidden group inline-flex items-center gap-2 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{currentCategory.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    openQuoteModal({
                      productCategory: currentCategory.name,
                      serviceType: 'Private Label Manufacturing',
                    })
                  }
                  className="px-5 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-800 font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 border border-stone-200 cursor-pointer"
                >
                  <span>Request Formulation Quote</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: High-Impact Category Image Showcase */}
            <div className="lg:col-span-6 relative">
              {/* Subtle ambient luxury backdrop glow */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#86A55B]/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none -z-0" />

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative z-10 bg-white rounded-3xl p-4 sm:p-5 border border-stone-200/90 shadow-xl overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-4"
                  >
                    {/* Realistic Product Image Frame with Overlays */}
                    <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-stone-900 group shadow-md border border-stone-100">
                      <img
                        src={currentCategory.image}
                        alt={currentCategory.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                      />

                      {/* Sophisticated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 bg-[#1D3C34]/90 backdrop-blur-md text-white border border-[#DFBD89]/40 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#86A55B] animate-pulse" />
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-[#DFBD89] block font-bold leading-none">
                            Manufacturing Solution
                          </span>
                          <span className="text-[11px] font-extrabold tracking-wider text-white">
                            {currentCategory.name.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-xs text-stone-900 px-2.5 py-1.5 rounded-xl text-[10px] font-bold shadow-md border border-stone-200 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#708E50]" />
                        <span>{currentCategory.highlightTag}</span>
                      </div>
                    </div>

                    {/* Manufacturing & Lead Time Credential Badges */}
                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                        <p className="text-[10px] text-stone-500 uppercase font-semibold">
                          Standard Lead Time
                        </p>
                        <p className="text-xs font-bold text-[#1D3C34] mt-0.5">
                          {currentCategory.leadTime}
                        </p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                        <p className="text-[10px] text-stone-500 uppercase font-semibold">
                          Cleanroom Standard
                        </p>
                        <p className="text-xs font-bold text-[#708E50] mt-0.5">
                          ISO 22716 cGMP
                        </p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                        <p className="text-[10px] text-stone-500 uppercase font-semibold">
                          Pilot Lab Samples
                        </p>
                        <p className="text-xs font-bold text-[#1D3C34] mt-0.5">
                          Complimentary
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
