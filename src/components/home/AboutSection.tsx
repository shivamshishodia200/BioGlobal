import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  FlaskConical,
  Award,
  PackageCheck,
  Clock,
  Droplets,
  Heart,
  Smile,
  ExternalLink,
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

// Local high-resolution luxury product showcase images
import skincareImg from '../../assets/capabilities/skincare.jpg';
import haircareImg from '../../assets/capabilities/haircare.jpg';
import bodycareImg from '../../assets/capabilities/bodycare.jpg';
import babycareImg from '../../assets/capabilities/babycare.jpg';
import soapcareImg from '../../assets/capabilities/soapcare.jpg';
import cosmeticsImg from '../../assets/capabilities/cosmetics.jpg';

interface CapabilityTab {
  id: string;
  label: string;
  slug: string;
  title: string;
  lead: string;
  categoryTag: string;
  items: string[];
  popularActives: string[];
  moq: string;
  leadTime: string;
  image: string;
  packType: string;
  highlightTag: string;
}

const CAPABILITY_TABS: CapabilityTab[] = [
  {
    id: 'cosmetic-products',
    label: 'Cosmetic Products',
    slug: 'cosmetic-products',
    categoryTag: 'Color Cosmetics & Hybrid Makeup',
    title: 'High-Performance Color Cosmetics & Hybrid Make-up Formulations',
    lead: 'Expertly engineered foundations, silky primers, long-wear setting mists, and color cosmetics with skin-nourishing active ingredients, micro-fine pigments, and luminous velvet finishes.',
    items: [
      'Luminous Peptide Liquid Foundations',
      'Hyaluronic Mineral BB & CC Creams',
      '16-Hour Dewy Setting Mists',
      'Velvet Pore-Blurring Primers',
    ],
    popularActives: ['Micro-Fine Mineral Pigments', 'Hyaluronic Acid', 'Copper Peptides', 'Niacinamide 3%'],
    moq: '1,000 units',
    leadTime: '21 - 28 Days',
    image: cosmeticsImg,
    packType: 'Glass Foundation Pumps, Compact Jars & Droppers',
    highlightTag: 'Micro-Fine Pigment Milling',
  },
  {
    id: 'skincare',
    label: 'Skin Care',
    slug: 'skin-care',
    categoryTag: 'Clinical Cosmeceuticals & Dermats',
    title: 'Advanced Cosmeceutical & Dermatological Skincare',
    lead: 'We formulate clinical-grade serums, gentle cleansers, hydrating gels, barrier creams, and SPF 50+ sunscreens utilizing high-efficacy actives like Niacinamide, Hyaluronic Acid, Retinoids, and Peptides.',
    items: [
      'Niacinamide & Zinc Clarifying Serums',
      'Multi-Ceramide Barrier Creams',
      'AHA/BHA Exfoliating Cleansers',
      'Invisible Broad Spectrum SPF 50+ Gels',
    ],
    popularActives: ['Niacinamide 10%', 'Hyaluronic Acid 2%', 'Ceramides NP/AP', 'Bio-Peptides'],
    moq: '1,000 units',
    leadTime: '21 - 28 Days',
    image: skincareImg,
    packType: 'Amber Droppers, Pipettes & Airless Pumps',
    highlightTag: 'WHO-GMP Cleanroom Formulated',
  },
  {
    id: 'haircare',
    label: 'Hair Care',
    slug: 'hair-care',
    categoryTag: 'Scalp Health & Fiber Restoration',
    title: 'High-Performance Botanical Hair & Scalp Therapy',
    lead: 'Engineered for salons and retail brands: sulfate-free shampoos, keratin bonding repair masks, peptide scalp stimulating serums, and nourishing cold-pressed botanical hair oils.',
    items: [
      'Biotin & Rosemary Scalp Serums',
      'Keratin Infusion Smoothing Shampoos',
      'Deep Nourishing Hair Bonding Masks',
      'Cold-Pressed Onion & Argan Oils',
    ],
    popularActives: ['Redensyl 3%', 'Hydrolyzed Keratin', 'Rosemary Extract', 'Biotin Complex'],
    moq: '1,000 units',
    leadTime: '21 - 30 Days',
    image: haircareImg,
    packType: 'PCR Bottles, Scalp Pipettes & Mask Tubs',
    highlightTag: 'Salon & D2C Performance',
  },
  {
    id: 'bathcare',
    label: 'Bath Care',
    slug: 'bath-care',
    categoryTag: 'Cold-Process & Triple-Milled Bars',
    title: 'Artisanal Cold-Process, Melt & Pour and Bath Bars',
    lead: 'Premium handmade and triple-milled bathing bars infused with pure essential oils, ayurvedic herbal extracts, activated charcoal, and moisturizing goat milk or plant glycerin bases.',
    items: [
      'Handcrafted Shea & Cocoa Butter Bars',
      'Detoxifying Activated Charcoal Facial Soaps',
      'Pure Farm Goat Milk Gentle Moisture Bars',
      'Aromatic Lavender & Sea Salt Polishes',
    ],
    popularActives: ['Activated Bamboo Charcoal', 'Fresh Goat Milk', 'Organic Neem', 'Essential Lavender'],
    moq: '1,000 units',
    leadTime: '14 - 21 Days',
    image: soapcareImg,
    packType: 'Kraft Paper Bands, Twine Wrapping & Stamped Bars',
    highlightTag: 'Triple-Milled & Cold-Pressed',
  },
  {
    id: 'bodycare',
    label: 'Body Care',
    slug: 'body-care',
    categoryTag: 'Deep Hydration & Firming Emulsions',
    title: 'Luxurious Body Moisturization & Polishing Solutions',
    lead: 'From rich botanical body butters and skin-brightening lotions to aromatic shower gels and exfoliating sugar-salt polishes, crafted with textures that absorb effortlessly without greasiness.',
    items: [
      'Whipped Shea & Murumuru Body Butters',
      'Lactic Acid 10% Smoothing Body Lotions',
      'Sulfate-Free Aromatherapy Shower Gels',
      'Coffee & Crushed Walnut Body Polishes',
    ],
    popularActives: ['Raw Shea Butter', 'Niacinamide', 'Lactic Acid (AHA)', 'Sweet Almond Oil'],
    moq: '1,000 units',
    leadTime: '18 - 25 Days',
    image: bodycareImg,
    packType: 'Lotion Pumps, Heavy-Wall Jars & Tubes',
    highlightTag: 'Ultra-Rich Fast-Absorbing',
  },
  {
    id: 'babycare',
    label: 'Baby Care',
    slug: 'baby-care',
    categoryTag: 'Pediatrician-Safe & Hypoallergenic',
    title: 'Tear-Free, Hypoallergenic & Pediatrician-Approved Care',
    lead: 'Ultra-gentle formulations crafted strictly without harsh sulfates, artificial dyes, parabens, phthalates, or allergens to ensure 100% peace of mind for sensitive infant skin.',
    items: [
      'Tear-Free 2-in-1 Baby Hair & Body Wash',
      'Colloidal Oat Soothing Baby Lotions',
      'Zinc Oxide 15% Calming Diaper Rash Balms',
      'Cold-Pressed Jojoba & Almond Massage Oils',
    ],
    popularActives: ['Colloidal Oatmeal', 'Organic Calendula', 'Zinc Oxide', 'Chamomile Extract'],
    moq: '1,000 units',
    leadTime: '25 - 35 Days',
    image: babycareImg,
    packType: 'Safety-Lock Child Pumps & Flip-Top Bottles',
    highlightTag: '100% Tear-Free Pediatric Safe',
  },
];

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cosmetic-products');
  const { openQuoteModal } = useQuoteModal();

  const currentTab = CAPABILITY_TABS.find((t) => t.id === activeTab) || CAPABILITY_TABS[0];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-stone-200/60 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        {/* Top Story Heading & Lead Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold tracking-wider uppercase border border-[#C5DAC3]">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>Legacy of Trust</span>
          </div>

          <h2 className="font-serif font-light text-4xl sm:text-5xl text-stone-900 tracking-tight">
            Our Story
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            The BioGlobal is a leading manufacturer specializing in 6 primary categories: Cosmetic Products, Skin Care,
            Hair Care, Bath Care, Body Care, and Baby Care. With over 14 years of expertise and a legacy of trust, we deliver
            internationally accredited solutions tailored to elevate your brand.
          </p>
        </motion.div>

        {/* Capabilities Section: "You name it we make it" */}
        <div className="pt-4">
          {/* Section Subheading */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#708E50] font-bold block">
              The BioGlobal Capabilities
            </span>
            <h3 className="font-serif font-light text-3xl sm:text-4xl lg:text-[42px] text-stone-900 tracking-tight">
              You name it we make it
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Click a category below to explore certified formulations, turnkey packaging specs, and production lead times.
            </p>
          </div>

          {/* Category Tabs Switcher (Segmented Control) */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 bg-[#FAF9F5] rounded-full border border-stone-200/90 shadow-inner max-w-full overflow-x-auto no-scrollbar">
              {CAPABILITY_TABS.map((tab) => {
                const isSelected = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'text-white'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute inset-0 bg-[#1D3C34] rounded-full shadow-md"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          isSelected ? 'bg-[#86A55B]' : 'bg-transparent'
                        }`}
                      />
                      <span>{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Dynamic Tab Details */}
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Category Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EEE3]/80 border border-[#C5DAC3] text-[#1D3C34] text-xs font-semibold">
                <FlaskConical className="w-3.5 h-3.5 text-[#708E50]" />
                <span>{currentTab.categoryTag}</span>
              </div>

              {/* Title */}
              <h4 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[34px] text-stone-900 leading-snug tracking-tight">
                {currentTab.title}
              </h4>

              {/* Lead Paragraph */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                {currentTab.lead}
              </p>

              {/* Formulation Cards Grid */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  Signature Formulations:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentTab.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF9F5] hover:bg-[#F2F7F0] border border-stone-200/80 hover:border-[#C5DAC3] text-xs font-medium text-stone-800 transition-colors shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Actives Pill Tags */}
              <div className="pt-1">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">
                  Key Actives & Ingredients:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentTab.popularActives.map((active, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-stone-700 font-medium"
                    >
                      {active}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications Strip (MOQ & Turnaround) */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <PackageCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-semibold block leading-none mb-1">
                      Minimum Order (MOQ)
                    </span>
                    <span className="text-sm font-bold text-stone-900">{currentTab.moq}</span>
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
                    <span className="text-sm font-bold text-stone-900">{currentTab.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.button
                  type="button"
                  onClick={() =>
                    openQuoteModal({
                      productCategory: currentTab.label,
                      serviceType: 'Private Label Manufacturing',
                    })
                  }
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(29, 60, 52, 0.25)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md relative overflow-hidden group cursor-pointer inline-flex items-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Let's Connect for {currentTab.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                </motion.button>

                <Link
                  to={`/category/${currentTab.slug}`}
                  className="px-5 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-800 font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 border border-stone-200"
                >
                  <span>View All {currentTab.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </Link>
              </div>
            </motion.div>

            {/* Right Card: High-Impact Photorealistic Product Showcase */}
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
                    key={currentTab.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-4"
                  >
                    {/* Realistic Product Image Frame with Overlays */}
                    <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-stone-900 group shadow-md border border-stone-100">
                      <img
                        src={currentTab.image}
                        alt=""
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
                            Private Label Mockup
                          </span>
                          <span className="text-[11px] font-extrabold tracking-wider text-white">
                            YOUR BRAND'S PACKAGING HERE
                          </span>
                        </div>
                      </div>

                      <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-xs text-stone-900 px-2.5 py-1.5 rounded-xl text-[10px] font-bold shadow-md border border-stone-200 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#708E50]" />
                        <span>{currentTab.highlightTag}</span>
                      </div>

                      {/* Bottom Packaging Caption Card Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-lg">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <span className="text-[10px] uppercase font-bold text-[#708E50] tracking-wider block">
                              Turnkey Packaging Solution
                            </span>
                            <p className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                              {currentTab.packType}
                            </p>
                          </div>
                          <span className="px-2.5 py-1 rounded-md bg-[#E4EEE3] text-[#1D3C34] text-xs font-bold flex-shrink-0 border border-[#C5DAC3]">
                            MOQ: {currentTab.moq}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Manufacturing & Lead Time Credential Badges */}
                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                        <p className="text-[10px] text-stone-500 uppercase font-semibold">Standard Lead Time</p>
                        <p className="text-xs font-bold text-[#1D3C34] mt-0.5">{currentTab.leadTime}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                        <p className="text-[10px] text-stone-500 uppercase font-semibold">Cleanroom Standard</p>
                        <p className="text-xs font-bold text-[#708E50] mt-0.5">ISO 22716 cGMP</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-stone-200/80">
                        <p className="text-[10px] text-stone-500 uppercase font-semibold">Pilot Lab Samples</p>
                        <p className="text-xs font-bold text-[#1D3C34] mt-0.5">Complimentary</p>
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
