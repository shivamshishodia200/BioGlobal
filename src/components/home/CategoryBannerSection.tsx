import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, ArrowUpRight, FlaskConical } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

// High-resolution local cosmetic manufacturing photography
import skincareImg from '../../assets/capabilities/skincare.jpg';
import haircareImg from '../../assets/capabilities/haircare.jpg';
import soapcareImg from '../../assets/capabilities/soapcare.jpg';
import bodycareImg from '../../assets/capabilities/bodycare.jpg';
import babycareImg from '../../assets/capabilities/babycare.jpg';
import cosmeticsImg from '../../assets/capabilities/cosmetics.jpg';

interface CategoryCardItem {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
  moq: string;
  tag: string;
}

// Left column cards (auto-scrolling UPWARDS)
const LEFT_COLUMN_CARDS: CategoryCardItem[] = [
  {
    id: 'left-cosmetics',
    title: 'Cosmetic Products',
    category: 'Color Cosmetics & Primers',
    image: cosmeticsImg,
    slug: 'cosmetic-products',
    moq: '1,000 Units',
    tag: 'Color Cosmetics',
  },
  {
    id: 'left-skincare',
    title: 'Skin Care',
    category: 'Clinical Actives & Peptides',
    image: skincareImg,
    slug: 'skin-care',
    moq: '1,000 Units',
    tag: 'Clinical Grade',
  },
  {
    id: 'left-haircare',
    title: 'Hair Care',
    category: 'Scalp Therapy & Keratin',
    image: haircareImg,
    slug: 'hair-care',
    moq: '1,000 Units',
    tag: 'Salon Formulation',
  },
];

// Right column cards (auto-scrolling DOWNWARDS)
const RIGHT_COLUMN_CARDS: CategoryCardItem[] = [
  {
    id: 'right-bathcare',
    title: 'Bath Care',
    category: 'Botanical Soaps & Bath Bars',
    image: soapcareImg,
    slug: 'bath-care',
    moq: '1,000 Units',
    tag: 'Artisanal Soaps',
  },
  {
    id: 'right-bodycare',
    title: 'Body Care',
    category: 'Nourishing Butters & Gels',
    image: bodycareImg,
    slug: 'body-care',
    moq: '1,000 Units',
    tag: 'Deep Hydration',
  },
  {
    id: 'right-babycare',
    title: 'Baby Care',
    category: 'Tear-Free & Pediatric Safe',
    image: babycareImg,
    slug: 'baby-care',
    moq: '1,000 Units',
    tag: 'Ultra Gentle',
  },
];

export const CategoryBannerSection: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  const keyFeatures = [
    'Low 1,000 Units Minimum Order Quantity',
    'WHO-GMP & ISO 22716 Certified Cleanrooms',
    'Custom R&D Lab Formulation Compounding',
  ];

  // Duplicate for seamless 100% infinite vertical loop
  const leftLoop = [...LEFT_COLUMN_CARDS, ...LEFT_COLUMN_CARDS];
  const rightLoop = [...RIGHT_COLUMN_CARDS, ...RIGHT_COLUMN_CARDS];

  return (
    <section className="bg-[#E4EEE3]/80 py-16 lg:py-24 overflow-hidden border-b border-[#C5DAC3]/70 relative">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#86A55B]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Value Props, and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#1D3C34] text-xs font-semibold backdrop-blur-md border border-white shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
              <span>Full Category Customization</span>
            </div>

            {/* Editorial Heading */}
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-[46px] text-stone-900 leading-[1.18] tracking-tight">
              Transform Your Business with Our Innovative Third-Party Cosmetics Manufacturing Solutions
            </h2>

            {/* Description */}
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              As a leading manufacturer and exporter across 6 specialized categories — Cosmetic Products, Skin Care,
              Hair Care, Bath Care, Body Care, and Baby Care — we provide laboratory-tested formulations tailored
              precisely to your brand's vision.
            </p>

            {/* Key Benefits Checklist */}
            <div className="space-y-2.5 pt-1">
              {keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-stone-800">
                  <div className="w-5 h-5 rounded-full bg-[#1D3C34] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#86A55B]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl group"
              >
                <span>Explore All Categories</span>
                <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() =>
                  openQuoteModal({
                    serviceType: 'Private Label Manufacturing',
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white text-stone-800 font-semibold text-xs sm:text-sm transition-colors border border-white/90 shadow-2xs cursor-pointer"
              >
                <FlaskConical className="w-4 h-4 text-[#708E50]" />
                <span>Request Custom Formulation</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Dual-Column Vertical Infinite Marquee (Left UP, Right DOWN) */}
          <div className="lg:col-span-6 relative h-[580px] sm:h-[620px] overflow-hidden rounded-3xl">
            {/* Top and Bottom Smooth Fade Gradients for Seamless Entrance/Exit */}
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-b from-[#E4EEE3] via-[#E4EEE3]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-[#E4EEE3] via-[#E4EEE3]/80 to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 sm:gap-5 h-full marquee-container">
              {/* Left Column: Continuous Auto-Scroll UPWARDS */}
              <div className="relative overflow-hidden h-full">
                <div className="animate-marquee-up space-y-4 sm:space-y-5">
                  {leftLoop.map((item, idx) => (
                    <Link
                      key={`${item.id}-${idx}`}
                      to={`/category/${item.slug}`}
                      className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-white/90 relative"
                    >
                      <div className="aspect-4/3 w-full overflow-hidden bg-stone-900 relative">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/10 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                          {item.tag}
                        </div>

                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-stone-800 shadow-2xs border border-stone-200">
                          MOQ: {item.moq}
                        </div>

                        {/* Bottom Image Caption */}
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-[11px] font-medium text-stone-200">View Formulations</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#86A55B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 bg-white space-y-0.5 sm:space-y-1">
                        <h4 className="font-serif font-medium text-sm sm:text-base text-stone-900 group-hover:text-[#708E50] transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-stone-500 font-normal truncate">
                          {item.category}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Column: Continuous Auto-Scroll DOWNWARDS */}
              <div className="relative overflow-hidden h-full">
                <div className="animate-marquee-down space-y-4 sm:space-y-5">
                  {rightLoop.map((item, idx) => (
                    <Link
                      key={`${item.id}-${idx}`}
                      to={`/category/${item.slug}`}
                      className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-white/90 relative"
                    >
                      <div className="aspect-4/3 w-full overflow-hidden bg-stone-900 relative">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/10 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                          {item.tag}
                        </div>

                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-stone-800 shadow-2xs border border-stone-200">
                          MOQ: {item.moq}
                        </div>

                        {/* Bottom Image Caption */}
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-[11px] font-medium text-stone-200">View Formulations</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#86A55B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 bg-white space-y-0.5 sm:space-y-1">
                        <h4 className="font-serif font-medium text-sm sm:text-base text-stone-900 group-hover:text-[#708E50] transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-stone-500 font-normal truncate">
                          {item.category}
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
