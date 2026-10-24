import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  FlaskConical,
  Package,
  Factory,
} from 'lucide-react';
import { ShowcaseItem, ManufacturingHighlight } from '../../types';

// High-resolution cosmetic manufacturing photography
const skincareImg = '/images/bioglobal/categories/skincare.webp';
const haircareImg = '/images/bioglobal/categories/haircare.webp';
const soapcareImg = '/images/bioglobal/categories/bathcare.webp';
const bodycareImg = '/images/bioglobal/categories/bodycare.webp';
const babycareImg = '/images/bioglobal/categories/babycare.webp';
const cosmeticsImg = '/images/bioglobal/categories/cosmetics.webp';

// Three verified manufacturing highlights
const MANUFACTURING_HIGHLIGHTS: ManufacturingHighlight[] = [
  {
    id: 'highlight-moq',
    title: 'Flexible Minimum Order Quantities',
    displayText: 'MOQ Starting at 1,000 Units',
    text: 'Start with qualifying production volumes from 1,000 units, with options based on formulation, packaging, and product requirements.',
    iconName: 'Package',
  },
  {
    id: 'highlight-custom-rd',
    title: 'Custom Formulation Expertise',
    displayText: 'Custom Formulation & R&D Support',
    text: 'Explore brand-specific cosmetic formulations with support for ingredient selection, texture refinement, and product development.',
    iconName: 'FlaskConical',
  },
  {
    id: 'highlight-solutions',
    title: 'Complete Manufacturing Solutions',
    displayText: 'Manufacturing & Packaging Support',
    text: 'Access coordinated production, filling, packaging, labeling, and quality-related support for your cosmetic product range.',
    iconName: 'Factory',
  },
];

// Column 1 cards (auto-scrolling UPWARDS): Skin Care, Cosmetic Products, Body Care
const COLUMN_1_CARDS: ShowcaseItem[] = [
  {
    id: 'showcase-skincare',
    categoryId: 'skin-care',
    categoryName: 'Skin Care',
    tagline: 'Thoughtfully Developed Skincare Solutions',
    description:
      'Discover facial cleansers, advanced serum concepts, moisturizers, and skincare formulations tailored to evolving consumer preferences.',
    productExamples: [
      'Vitamin C Serum',
      'Hyaluronic Acid Serum',
      'Barrier Moisturizer',
      'Facial Cleanser',
    ],
    image: skincareImg,
    imageAlt: 'Skin care formulations and cosmetic manufacturing',
    slug: 'skin-care',
    moq: 'From 1,000 Units',
    tag: 'Skin Care Solutions',
  },
  {
    id: 'showcase-cosmetics',
    categoryId: 'cosmetic-products',
    categoryName: 'Cosmetic Products',
    tagline: 'Makeup That Reflects Your Brand Identity',
    description:
      'Explore customizable color cosmetic and hybrid makeup product concepts created for modern beauty brands.',
    productExamples: [
      'Liquid Foundation',
      'BB & CC Cream',
      'Makeup Primer',
      'Setting Spray',
    ],
    image: cosmeticsImg,
    imageAlt: 'Color cosmetic products and makeup manufacturing',
    slug: 'cosmetic-products',
    moq: 'From 1,000 Units',
    tag: 'Color Cosmetics',
  },
  {
    id: 'showcase-bodycare',
    categoryId: 'body-care',
    categoryName: 'Body Care',
    tagline: 'Body Care Designed for Everyday Comfort',
    description:
      'Explore moisturizing lotions, nourishing creams, body butters, and exfoliating products for contemporary personal care brands.',
    productExamples: [
      'Body Lotion',
      'Body Butter',
      'Exfoliating Scrub',
      'Hand & Body Cream',
    ],
    image: bodycareImg,
    imageAlt: 'Body care emulsions and moisturizing formulations',
    slug: 'body-care',
    moq: 'From 1,000 Units',
    tag: 'Body Care',
  },
];

// Column 2 cards (auto-scrolling DOWNWARDS): Hair Care, Bath Care, Baby Care
const COLUMN_2_CARDS: ShowcaseItem[] = [
  {
    id: 'showcase-haircare',
    categoryId: 'hair-care',
    categoryName: 'Hair Care',
    tagline: 'Innovative Hair & Scalp Care Collections',
    description:
      "Develop shampoos, conditioners, masks, and scalp care formulations aligned with your brand's product goals.",
    productExamples: [
      'Sulfate-Free Shampoo',
      'Nourishing Conditioner',
      'Hair Repair Mask',
      'Scalp Care Serum',
    ],
    image: haircareImg,
    imageAlt: 'Hair care shampoo and scalp treatment manufacturing',
    slug: 'hair-care',
    moq: 'From 1,000 Units',
    tag: 'Hair & Scalp Care',
  },
  {
    id: 'showcase-bathcare',
    categoryId: 'bath-care',
    categoryName: 'Bath Care',
    tagline: 'Everyday Cleansing, Elevated',
    description:
      'Create refreshing bath and cleansing products with appealing textures, thoughtful ingredients, and brand-specific fragrance concepts.',
    productExamples: [
      'Glycerin Bath Soap',
      'Botanical Cleansing Bar',
      'Moisturizing Body Wash',
      'Bath Scrub',
    ],
    image: soapcareImg,
    imageAlt: 'Bath care botanical soaps and cleansing washes',
    slug: 'bath-care',
    moq: 'From 1,000 Units',
    tag: 'Bath Care & Soaps',
  },
  {
    id: 'showcase-babycare',
    categoryId: 'baby-care',
    categoryName: 'Baby Care',
    tagline: 'Gentle Care, Thoughtfully Considered',
    description:
      'Develop mild cleansing, moisturizing, and personal care product concepts intended for baby care ranges, subject to appropriate safety evaluation.',
    productExamples: [
      'Mild Baby Shampoo',
      'Baby Body Wash',
      'Baby Lotion',
      'Baby Massage Oil',
    ],
    image: babycareImg,
    imageAlt: 'Gentle baby care and mild infant product concepts',
    slug: 'baby-care',
    moq: 'From 1,000 Units',
    tag: 'Gentle Baby Care',
  },
];

export const CategoryBannerSection: React.FC = () => {
  // Seamless infinite loop arrays
  const column1Loop = [...COLUMN_1_CARDS, ...COLUMN_1_CARDS];
  const column2Loop = [...COLUMN_2_CARDS, ...COLUMN_2_CARDS];

  return (
    <section
      aria-labelledby="category-banner-heading"
      className="bg-[#E4EEE3]/80 py-12 sm:py-14 lg:py-16 overflow-hidden border-b border-[#C5DAC3]/70 relative"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#86A55B]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* Left Column: Heading, Value Props, Highlights, and CTAs  */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 text-[#1D3C34] text-xs font-semibold backdrop-blur-md border border-[#C5DAC3] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
              <span>COMPLETE COSMETIC MANUFACTURING SOLUTIONS</span>
            </div>

            {/* Editorial Heading (H2) */}
            <h2
              id="category-banner-heading"
              className="font-serif font-light text-3xl sm:text-4xl lg:text-[44px] text-stone-900 leading-[1.18] tracking-tight"
            >
              Transform Your Beauty Vision Into Market-Ready Products
            </h2>

            {/* Highlighted Tagline */}
            <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#708E50]">
              Your Brand. Your Vision. Our Manufacturing Expertise.
            </p>

            {/* Description */}
            <p className="text-stone-700 text-xs sm:text-sm sm:leading-relaxed font-normal">
              Bring your beauty brand ideas to life with comprehensive cosmetic
              manufacturing solutions designed around your business goals. At
              The BioGlobal, we combine formulation expertise, product
              customization, manufacturing support, and packaging coordination
              to help emerging and established brands build distinctive beauty
              and personal care collections.
              <span className="block mt-2">
                From skincare and haircare to color cosmetics, bath care, body
                care, and baby care, our versatile manufacturing capabilities
                support a wide range of product concepts and market requirements.
              </span>
            </p>

            {/* Three Manufacturing Highlights */}
            <div className="space-y-3 pt-1">
              {MANUFACTURING_HIGHLIGHTS.map((hl) => {
                const IconComponent =
                  hl.iconName === 'Package'
                    ? Package
                    : hl.iconName === 'FlaskConical'
                    ? FlaskConical
                    : Factory;
                return (
                  <div
                    key={hl.id}
                    className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-white/90 shadow-2xs hover:shadow-xs transition-shadow flex items-start gap-3 sm:gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#1D3C34] text-[#DFBD89] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight">
                          {hl.displayText}
                        </span>
                        <span className="text-[11px] font-medium text-[#708E50]">
                          ({hl.title})
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {hl.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl group"
              >
                <span>Explore All Categories</span>
                <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/consultation?source=homepage-category-banner"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm transition-colors border border-stone-300 shadow-2xs group cursor-pointer"
              >
                <FlaskConical className="w-4 h-4 text-[#708E50]" />
                <span>Request Custom Formulation</span>
              </Link>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* Right Column: Dual-Column Vertical Infinite Marquee      */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 relative h-[480px] sm:h-[520px] lg:h-[540px] overflow-hidden rounded-3xl">
            {/* Top and Bottom Smooth Fade Gradients for Seamless Entrance/Exit */}
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-b from-[#E4EEE3] via-[#E4EEE3]/90 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-[#E4EEE3] via-[#E4EEE3]/90 to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 sm:gap-5 h-full marquee-container">
              
              {/* Column 1: Continuous Auto-Scroll UPWARDS */}
              <div className="relative overflow-hidden h-full">
                <div className="animate-marquee-up space-y-4 sm:space-y-5">
                  {column1Loop.map((item, idx) => (
                    <Link
                      key={`${item.id}-${idx}`}
                      to={`/category/${item.slug}`}
                      className="group block bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200/80 hover:border-[#C5DAC3] relative"
                    >
                      <div className="aspect-4/3 w-full overflow-hidden bg-stone-900 relative">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-black/15 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1D3C34]/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                          {item.tag}
                        </div>

                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-stone-800 shadow-2xs border border-stone-200">
                          MOQ: {item.moq}
                        </div>

                        {/* Bottom Image Caption */}
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-[11px] font-medium text-stone-200">
                            View Formulations
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#86A55B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 bg-white space-y-1">
                        <h3 className="font-serif font-semibold text-sm sm:text-base text-stone-900 group-hover:text-[#708E50] transition-colors leading-snug">
                          {item.categoryName}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#708E50] font-medium leading-snug line-clamp-1">
                          {item.tagline}
                        </p>
                        <p className="text-[11px] text-stone-500 font-normal truncate pt-0.5">
                          {item.productExamples.slice(0, 3).join(' • ')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 2: Continuous Auto-Scroll DOWNWARDS */}
              <div className="relative overflow-hidden h-full">
                <div className="animate-marquee-down space-y-4 sm:space-y-5">
                  {column2Loop.map((item, idx) => (
                    <Link
                      key={`${item.id}-${idx}`}
                      to={`/category/${item.slug}`}
                      className="group block bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200/80 hover:border-[#C5DAC3] relative"
                    >
                      <div className="aspect-4/3 w-full overflow-hidden bg-stone-900 relative">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-black/15 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1D3C34]/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                          {item.tag}
                        </div>

                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-stone-800 shadow-2xs border border-stone-200">
                          MOQ: {item.moq}
                        </div>

                        {/* Bottom Image Caption */}
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-[11px] font-medium text-stone-200">
                            View Formulations
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#86A55B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 bg-white space-y-1">
                        <h3 className="font-serif font-semibold text-sm sm:text-base text-stone-900 group-hover:text-[#708E50] transition-colors leading-snug">
                          {item.categoryName}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#708E50] font-medium leading-snug line-clamp-1">
                          {item.tagline}
                        </p>
                        <p className="text-[11px] text-stone-500 font-normal truncate pt-0.5">
                          {item.productExamples.slice(0, 3).join(' • ')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
