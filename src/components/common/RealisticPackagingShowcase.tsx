import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck, CheckCircle2, FlaskConical, Award, Eye, ArrowUpRight } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import haircareImg from '../../assets/capabilities/haircare.jpg';

interface ProductDisplay {
  id: string;
  label: string;
  category: string;
  name: string;
  bottleType: string;
  moq: string;
  image: string;
  badge: string;
  features: string[];
}

const REALISTIC_PREVIEWS: ProductDisplay[] = [
  {
    id: 'skincare-serum',
    label: 'Skincare Serums',
    category: 'Advanced Cosmeceuticals',
    name: 'Clinical Niacinamide & Peptide Elixir',
    bottleType: '30ml Frosted Amber Glass with Pipette Dropper',
    moq: '1,000 units',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=85',
    badge: 'Best-Seller B2B Formulation',
    features: ['High-Viscosity Dropper', 'Silk-Screen Gold Foil', 'Sterile Cleanroom Filled'],
  },
  {
    id: 'barrier-cream',
    label: 'Creams & Jars',
    category: 'Dermatological Emulsions',
    name: 'Ceramide Barrier Restorative Cream',
    bottleType: '50ml Heavy-Wall Frosted Jar with Gold Lid',
    moq: '1,000 units',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=85',
    badge: 'Luxury Finish',
    features: ['Double-Wall Acrylic', 'Inner Seal Disc', '72-Hour Moisture Lock'],
  },
  {
    id: 'hair-oil',
    label: 'Hair & Scalp',
    category: 'Botanical Hair Therapy',
    name: 'Rosemary & Biotin Scalp Density Oil',
    bottleType: '50ml Amber PET with Precision Dropper',
    moq: '1,000 units',
    image: haircareImg,
    badge: 'High D2C Demand',
    features: ['Cold-Pressed Extraction', 'IFRA Natural Notes', 'Tamper-Evident Ring'],
  },
  {
    id: 'body-wash',
    label: 'Body & Cleansers',
    category: 'Personal Care Solutions',
    name: 'Botanical Foaming Gentle Wash',
    bottleType: '150ml Matte White Cylinder with Gold Pump',
    moq: '1,500 units',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85',
    badge: 'Eco-Friendly Pack',
    features: ['Locking Dispenser Pump', 'Sulfate-Free pH 5.5', 'Recyclable PCR Option'],
  },
];

export const RealisticPackagingShowcase: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { openQuoteModal } = useQuoteModal();
  const current = REALISTIC_PREVIEWS[selectedIdx];

  return (
    <div className={`relative flex flex-col items-center select-none w-full ${className}`}>
      {/* Ambient background glow in exact brand palette */}
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-[#86A55B]/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#DFBD89]/20 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Main Photographic Card Showcase */}
      <div className="w-full relative z-10 bg-white rounded-3xl p-3 sm:p-5 shadow-2xl border border-stone-200/90 overflow-hidden">
        {/* Category Pills Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#FAF9F5] rounded-2xl border border-stone-200/80 mb-3 overflow-x-auto no-scrollbar">
          {REALISTIC_PREVIEWS.map((item, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#1D3C34] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#86A55B]" />}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Image Frame with Studio Lighting & Custom Label Stamp */}
        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/70 group shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full h-full relative"
            >
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Realistic Vignette and Ambient Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D3C34]/85 via-stone-900/25 to-black/10 pointer-events-none" />

              {/* "YOUR BRAND HERE" Realistic Label Stamp Overlay */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-3 left-3 bg-[#1D3C34]/90 backdrop-blur-md text-white border border-[#DFBD89]/40 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#86A55B] animate-pulse" />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFBD89] block leading-none">
                    Private Label Solution
                  </span>
                  <span className="text-xs font-extrabold tracking-wider text-white">
                    YOUR BRAND'S LOGO HERE
                  </span>
                </div>
              </motion.div>

              {/* Floating Quality Tag */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-stone-900 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md border border-stone-200 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#708E50]" />
                <span>{current.badge}</span>
              </div>

              {/* Bottom Card Info Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-lg text-left">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#708E50] font-bold block">
                      {current.category}
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base leading-snug">
                      {current.name}
                    </h4>
                    <p className="text-[11px] text-stone-600 mt-0.5 line-clamp-1">
                      Pack: <span className="font-semibold text-stone-800">{current.bottleType}</span>
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      openQuoteModal({
                        productCategory: current.category,
                        serviceType: 'Private Label Manufacturing',
                      })
                    }
                    className="px-3 py-2 rounded-lg bg-[#708E50] hover:bg-[#5E7D40] text-white text-[11px] font-semibold flex items-center gap-1 transition-all flex-shrink-0 cursor-pointer shadow-xs group/btn"
                  >
                    <span>Get Samples</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                {/* Features Row */}
                <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap items-center gap-3 text-[10px] text-stone-600 font-medium">
                  {current.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#708E50]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  <div className="ml-auto flex items-center gap-1 font-bold text-[#1D3C34]">
                    <span>MOQ:</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#E4EEE3] text-[#1D3C34]">
                      {current.moq}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Real Cleanroom & Facility Credential Footer */}
        <div className="mt-3 pt-3 border-t border-stone-100 grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-xl bg-[#FAF9F5] border border-stone-200/70">
            <p className="text-[10px] text-stone-500 uppercase font-semibold">Cleanrooms</p>
            <p className="text-xs font-bold text-[#1D3C34]">ISO 22716 GMP</p>
          </div>
          <div className="p-2 rounded-xl bg-[#FAF9F5] border border-stone-200/70">
            <p className="text-[10px] text-stone-500 uppercase font-semibold">Monthly Vol.</p>
            <p className="text-xs font-bold text-[#1D3C34]">60 Lac Units</p>
          </div>
          <div className="p-2 rounded-xl bg-[#FAF9F5] border border-stone-200/70">
            <p className="text-[10px] text-stone-500 uppercase font-semibold">Plant Area</p>
            <p className="text-xs font-bold text-[#1D3C34]">60,000 Sq. Ft.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
