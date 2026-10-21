import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, Clock, ShieldCheck, Package } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

interface CategoryOption {
  id: string;
  name: string;
  typicalMOQ: number;
  leadDays: number;
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { id: 'cosmetics', name: 'Cosmetic Products (Makeup & Primers)', typicalMOQ: 1000, leadDays: 24 },
  { id: 'skincare', name: 'Skin Care (Serums, Creams, SPF & Cleansers)', typicalMOQ: 1000, leadDays: 21 },
  { id: 'haircare', name: 'Hair Care (Shampoos, Oils & Hair Masks)', typicalMOQ: 1000, leadDays: 24 },
  { id: 'bathcare', name: 'Bath Care (Shower Gels, Soaps & Polishes)', typicalMOQ: 1000, leadDays: 18 },
  { id: 'bodycare', name: 'Body Care (Lotions, Butters & Firming Creams)', typicalMOQ: 1000, leadDays: 22 },
  { id: 'babycare', name: 'Baby Care (Hypoallergenic Infant & Newborn Care)', typicalMOQ: 1000, leadDays: 28 },
];

const PACKAGING_OPTIONS = [
  { id: 'dropper', label: 'Frosted Glass Dropper & Pipette', tag: 'Luxury Skincare' },
  { id: 'airless', label: 'Airless Acrylic Vacuum Pump', tag: 'Anti-Oxidation' },
  { id: 'tube', label: 'Eco PCR Recyclable Squeeze Tube', tag: 'High Practicality' },
  { id: 'jar', label: 'Double-Wall Amber / White Cosmetic Jar', tag: 'Creams & Butters' },
];

const QUANTITY_TIERS = [1000, 2500, 5000, 10000, 25000];

export const BatchEstimatorSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(CATEGORY_OPTIONS[0]);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(2500);
  const [selectedPackaging, setSelectedPackaging] = useState<string>(PACKAGING_OPTIONS[0].label);
  const { openQuoteModal } = useQuoteModal();

  // Dynamic calculations
  const estimatedDays = selectedCategory.leadDays + (selectedQuantity > 10000 ? 5 : 0);
  const sampleTimeline = '3 - 5 Business Days';

  const handleRequestQuote = () => {
    openQuoteModal({
      productCategory: selectedCategory.name.split(' ')[0],
      serviceType: 'Private Label Manufacturing',
      targetProduct: `${selectedCategory.name} (${selectedPackaging})`,
      quantityRange: `${selectedQuantity.toLocaleString()} Units`,
    });
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-stone-200/60 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
            <Calculator className="w-3.5 h-3.5 text-[#708E50]" />
            <span>Interactive B2B Project Planner</span>
          </div>

          <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight">
            Estimate Your Turnkey Batch Production
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Configure your intended formulation category, target batch scale, and preferred packaging architecture to generate instant production lead times and commercial feasibility.
          </p>
        </motion.div>

        {/* Interactive Estimator Layout */}
        <div className="max-w-5xl mx-auto bg-[#FAF9F5] rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Configuration Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Step 1: Select Category */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
                  1. Select Target Product Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CATEGORY_OPTIONS.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat)}
                      className={`p-3 rounded-xl text-left text-xs font-medium transition-all cursor-pointer border ${
                        selectedCategory.id === cat.id
                          ? 'bg-[#1D3C34] text-white border-[#1D3C34] shadow-xs'
                          : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Quantity Tier */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    2. Desired Production Quantity (Units)
                  </label>
                  <span className="text-xs font-bold text-[#708E50]">
                    {selectedQuantity.toLocaleString()} Units
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {QUANTITY_TIERS.map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setSelectedQuantity(tier)}
                      className={`py-2 px-1 rounded-xl text-center text-xs font-medium transition-all cursor-pointer border ${
                        selectedQuantity === tier
                          ? 'bg-[#708E50] text-white font-bold border-[#5F7A43] shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {tier >= 1000 ? `${tier / 1000}k` : tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Preferred Packaging Architecture */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
                  3. Primary Packaging Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PACKAGING_OPTIONS.map((pack) => (
                    <button
                      key={pack.id}
                      onClick={() => setSelectedPackaging(pack.label)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                        selectedPackaging === pack.label
                          ? 'bg-white border-[#708E50] ring-2 ring-[#86A55B]/40 shadow-xs'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <span className="text-xs font-semibold text-stone-900 block leading-tight">
                        {pack.label}
                      </span>
                      <span className="text-[10px] text-stone-500 block mt-0.5">{pack.tag}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 space-y-6 shadow-sm">
              <div className="border-b border-stone-100 pb-4 space-y-1">
                <span className="text-[11px] font-bold text-[#708E50] uppercase tracking-wider">
                  Feasibility Summary
                </span>
                <h4 className="font-sans font-medium text-xl text-stone-900">
                  Turnkey Production Spec
                </h4>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#708E50]" />
                    Lab Sample Turnaround:
                  </span>
                  <span className="font-bold text-stone-900">{sampleTimeline}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-[#708E50]" />
                    Commercial Run Lead Time:
                  </span>
                  <span className="font-bold text-stone-900">{estimatedDays} Days</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#708E50]" />
                    Standard QA Certifications:
                  </span>
                  <span className="font-bold text-stone-900">COA, MSDS, GMP</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-stone-500">Batch Scale:</span>
                  <span className="px-2 py-0.5 rounded bg-[#E4EEE3] text-[#1D3C34] font-bold border border-[#C5DAC3]">
                    {selectedQuantity.toLocaleString()} Pcs Approved
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#E4EEE3]/60 text-stone-800 text-[11px] leading-relaxed border border-[#C5DAC3]">
                <CheckCircle2 className="w-4 h-4 text-[#708E50] inline mr-1 -mt-0.5" />
                Includes formulation adjustment, stability cycling test, batch label design review, and pilot sample dispatch.
              </div>

              <motion.button
                onClick={handleRequestQuote}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(112, 142, 80, 0.45)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#708E50] hover:bg-[#5F7A43] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <span>Request Formal Spec & Sample Kit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
