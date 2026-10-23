import React, { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calculator,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Package,
  FileQuestion,
  Receipt,
  X,
  Send,
  Loader2,
  Check,
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import {
  MANUFACTURING_SOLUTIONS,
  PACKAGING_OPTIONS,
  fetchManufacturingEstimate,
  submitManufacturingQuoteRequest,
} from '../../services/manufacturingApi';
import {
  ManufacturingSolutionId,
  PackagingOptionId,
  EstimateResult,
  ManufacturingQuoteRequestPayload,
} from '../../types';

export const BatchEstimatorSection: React.FC = () => {
  // Calculator selections
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('skin-care');
  const [selectedSolutionId, setSelectedSolutionId] = useState<ManufacturingSolutionId>('private_label');
  const [selectedQuantity, setSelectedQuantity] = useState<number>(2500);
  const [selectedPackagingId, setSelectedPackagingId] = useState<PackagingOptionId>('standard');

  // Estimate state
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [isLoadingEstimate, setIsLoadingEstimate] = useState<boolean>(false);

  // Quote Request Modal State
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [isSubmittingQuote, setIsSubmittingQuote] = useState<boolean>(false);
  const [quoteSuccessMessage, setQuoteSuccessMessage] = useState<string | null>(null);
  const [quoteError, setQuoteError] = useState<string | null>(null);

  // Quote Form inputs
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('India');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);

  const quantityInputId = useId();

  // Selected Category and Options metadata
  const currentCategory =
    CATEGORIES.find((c) => c.slug === selectedCategorySlug) || CATEGORIES[1];
  const currentSolution =
    MANUFACTURING_SOLUTIONS.find((s) => s.id === selectedSolutionId) ||
    MANUFACTURING_SOLUTIONS[0];
  const currentPackaging =
    PACKAGING_OPTIONS.find((p) => p.id === selectedPackagingId) ||
    PACKAGING_OPTIONS[0];

  // Fetch / Calculate estimate whenever selections change (with debounce)
  useEffect(() => {
    let isCancelled = false;
    setIsLoadingEstimate(true);

    const timer = setTimeout(async () => {
      const result = await fetchManufacturingEstimate({
        categoryId: selectedCategorySlug,
        manufacturingType: selectedSolutionId,
        quantity: selectedQuantity,
        packagingOptionId: selectedPackagingId,
      });

      if (!isCancelled) {
        setEstimate(result);
        setIsLoadingEstimate(false);
      }
    }, 180);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [selectedCategorySlug, selectedSolutionId, selectedQuantity, selectedPackagingId]);

  // Handle Quote Form Submit
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteError(null);

    if (!fullName.trim() || !companyName.trim() || !email.trim() || !phone.trim()) {
      setQuoteError('Please complete all mandatory contact fields.');
      return;
    }

    if (!consent) {
      setQuoteError('Please provide consent to review your manufacturing specifications.');
      return;
    }

    setIsSubmittingQuote(true);

    const payload: ManufacturingQuoteRequestPayload = {
      fullName,
      companyName,
      email,
      phone,
      country,
      productCategory: currentCategory.name,
      manufacturingSolution: currentSolution.name,
      expectedQuantity: selectedQuantity,
      packagingPreference: currentPackaging.name,
      notes,
      estimateId: estimate?.status === 'estimated' ? estimate.estimateId : undefined,
      estimatedTotal:
        estimate?.status === 'estimated' ? estimate.estimatedTotal : undefined,
    };

    const res = await submitManufacturingQuoteRequest(payload);
    setIsSubmittingQuote(false);

    if (res.success) {
      setQuoteSuccessMessage(res.message);
    } else {
      setQuoteError(res.error || 'Submission failed. Please try again or reach out directly.');
    }
  };

  const handleOpenQuoteModal = () => {
    setQuoteSuccessMessage(null);
    setQuoteError(null);
    setIsQuoteModalOpen(true);
  };

  const quantityPresets = [1000, 2500, 5000, 10000, 25000, 50000];

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="py-20 lg:py-28 bg-white border-b border-stone-200/60 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-[#708E50]" />
            <span>PLAN YOUR PRODUCTION</span>
          </div>

          {/* Main Heading (H2) */}
          <h2
            id="calculator-heading"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight"
          >
            Estimate Your Manufacturing Requirements
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#708E50]">
            Plan Smarter. Manufacture with Confidence.
          </p>

          {/* Description */}
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Planning your next beauty product launch? Explore suitable production
            quantities, formulation options, and packaging preferences to prepare a
            preliminary manufacturing inquiry. Our team can help you develop a
            quotation tailored to your product specifications and business goals.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* CALCULATOR MAIN INTERFACE                                 */}
        {/* ======================================================== */}
        <div className="max-w-6xl mx-auto bg-[#FAF9F5] rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-xs">
          
          {/* Subheading & Description inside card */}
          <div className="border-b border-stone-200 pb-5 mb-8">
            <h3 className="font-serif font-medium text-xl sm:text-2xl text-stone-900 tracking-tight">
              Build Your Production Estimate
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Select your product category, manufacturing solution, preferred
              packaging, and order quantity to explore your potential production
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ====================================================== */}
            {/* LEFT CONFIGURATION CONTROLS (7 COLS)                   */}
            {/* ====================================================== */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Step 1: Product Category Selector */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
                  1. Select Product Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategorySlug === cat.slug;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategorySlug(cat.slug)}
                        className={`p-3 rounded-xl text-left transition-all cursor-pointer border select-none ${
                          isSelected
                            ? 'bg-[#1D3C34] text-white border-[#1D3C34] shadow-xs'
                            : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        <span className="text-xs font-semibold block leading-tight">
                          {cat.name}
                        </span>
                        <span
                          className={`text-[10px] block mt-0.5 ${
                            isSelected ? 'text-[#DFBD89]' : 'text-stone-400'
                          }`}
                        >
                          MOQ: 1,000 Units
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Manufacturing Solution Selector */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
                  2. Choose Manufacturing Solution
                </label>
                <div className="space-y-2">
                  {MANUFACTURING_SOLUTIONS.map((sol) => {
                    const isSelected = selectedSolutionId === sol.id;
                    return (
                      <button
                        key={sol.id}
                        type="button"
                        onClick={() => setSelectedSolutionId(sol.id)}
                        className={`w-full p-3.5 rounded-xl text-left transition-all cursor-pointer border select-none ${
                          isSelected
                            ? 'bg-white border-[#708E50] ring-2 ring-[#708E50]/40 shadow-xs'
                            : 'bg-white border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-stone-900">
                            {sol.name}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-[#708E50]">
                            {sol.timelineLabel}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          {sol.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Order Quantity Selector (Slider + Numeric Input) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={quantityInputId}
                    className="text-xs font-bold text-stone-900 uppercase tracking-wider"
                  >
                    3. Estimated Production Quantity
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      id={quantityInputId}
                      type="number"
                      min={1000}
                      max={50000}
                      step={1000}
                      value={selectedQuantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        if (!isNaN(val)) {
                          setSelectedQuantity(Math.min(Math.max(val, 1000), 50000));
                        }
                      }}
                      className="w-24 text-right px-2.5 py-1 text-xs font-bold text-[#1D3C34] bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
                    />
                    <span className="text-xs font-bold text-stone-600">Units</span>
                  </div>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={1000}
                  value={selectedQuantity}
                  onChange={(e) => setSelectedQuantity(parseInt(e.target.value, 10))}
                  className="w-full accent-[#708E50] cursor-pointer"
                  aria-label="Estimated Production Quantity Slider"
                />

                {/* Quick Preset Buttons */}
                <div className="grid grid-cols-6 gap-1.5 pt-1">
                  {quantityPresets.map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setSelectedQuantity(qty)}
                      className={`py-1.5 px-1 rounded-lg text-center text-[11px] font-semibold transition-colors cursor-pointer border ${
                        selectedQuantity === qty
                          ? 'bg-[#708E50] text-white border-[#5F7A43] shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {qty >= 1000 ? `${qty / 1000}k` : qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Preferred Packaging Selector */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
                  4. Preferred Packaging
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PACKAGING_OPTIONS.map((pack) => {
                    const isSelected = selectedPackagingId === pack.id;
                    return (
                      <button
                        key={pack.id}
                        type="button"
                        onClick={() => setSelectedPackagingId(pack.id)}
                        className={`p-3 rounded-xl text-left transition-all cursor-pointer border select-none ${
                          isSelected
                            ? 'bg-white border-[#708E50] ring-2 ring-[#708E50]/40 shadow-xs'
                            : 'bg-white border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <span className="text-xs font-bold text-stone-900 block leading-tight">
                          {pack.name}
                        </span>
                        <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                          {pack.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* ====================================================== */}
            {/* RIGHT ESTIMATE RESULT PANEL (5 COLS)                   */}
            {/* ====================================================== */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 space-y-6 shadow-sm relative">
              
              {/* Card Header */}
              <div className="border-b border-stone-100 pb-4 space-y-1">
                <span className="text-[10px] font-bold text-[#708E50] uppercase tracking-wider flex items-center gap-1.5">
                  <Receipt className="w-3.5 h-3.5" />
                  <span>PRELIMINARY ESTIMATE ENGINE</span>
                </span>
                <h4 className="font-serif font-medium text-xl text-stone-900 tracking-tight">
                  Your Preliminary Manufacturing Estimate
                </h4>
              </div>

              {/* Loading State or Result */}
              {isLoadingEstimate ? (
                <div className="py-12 text-center space-y-2">
                  <Loader2 className="w-6 h-6 animate-spin text-[#708E50] mx-auto" />
                  <p className="text-xs text-stone-500 font-medium">
                    Calculating preliminary manufacturing rules...
                  </p>
                </div>
              ) : estimate?.status === 'estimated' ? (
                <div className="space-y-4">
                  {/* Summary Breakdown */}
                  <div className="space-y-2.5 text-xs text-stone-700">
                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Product Category:</span>
                      <span className="font-semibold text-stone-900">
                        {currentCategory.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Manufacturing Solution:</span>
                      <span className="font-semibold text-stone-900">
                        {currentSolution.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Production Quantity:</span>
                      <span className="font-bold text-[#1D3C34] px-2 py-0.5 rounded bg-[#E4EEE3]">
                        {estimate.quantity.toLocaleString()} Units
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Packaging Preference:</span>
                      <span className="font-semibold text-stone-900">
                        {currentPackaging.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#708E50]" />
                        <span>Indicative Timeline:</span>
                      </span>
                      <span className="font-bold text-stone-900">
                        {estimate.timeline.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Base Manufacturing:</span>
                      <span className="font-semibold text-stone-900">
                        ₹{estimate.baseManufacturingAmount.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Packaging Total:</span>
                      <span className="font-semibold text-stone-900">
                        ₹{estimate.packagingAmount.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Applicable Tax (18% GST):</span>
                      <span className="font-semibold text-stone-900">
                        ₹{estimate.taxAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Highlighted Total Box */}
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-stone-200/90 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-700">
                        Estimated Total:
                      </span>
                      <span className="font-serif font-bold text-2xl text-[#1D3C34]">
                        ₹{estimate.estimatedTotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-stone-500 pt-0.5">
                      <span>Calculated Unit Price:</span>
                      <span className="font-semibold text-[#708E50]">
                        ₹{estimate.unitPrice.toFixed(2)} / Unit
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Quotation Required Fallback State */
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-amber-900">
                      <FileQuestion className="w-4 h-4 text-amber-700 flex-shrink-0" />
                      <span className="font-bold text-xs uppercase tracking-wide">
                        Custom Quotation Required
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-stone-700">
                      {estimate?.message ||
                        'Share your manufacturing requirements with our team to receive a quotation based on your product specifications, order quantity, and packaging preferences.'}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-stone-600">
                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Category:</span>
                      <span className="font-semibold text-stone-900">
                        {currentCategory.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Solution:</span>
                      <span className="font-semibold text-stone-900">
                        {currentSolution.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Quantity:</span>
                      <span className="font-bold text-[#1D3C34]">
                        {selectedQuantity.toLocaleString()} Units
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Indicative Timeline:</span>
                      <span className="font-semibold text-stone-900">
                        {estimate?.timeline.label || currentSolution.timelineLabel}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Supporting Disclaimer */}
              <p className="text-[10px] text-stone-500 leading-relaxed italic border-t border-stone-100 pt-3">
                * This estimate is indicative and subject to final product
                specifications, formulation approval, packaging selection,
                availability, and commercial confirmation.
              </p>

              {/* Main CTA: Request Custom Quotation */}
              <button
                type="button"
                onClick={handleOpenQuoteModal}
                className="w-full py-3.5 px-4 rounded-xl bg-[#708E50] hover:bg-[#5F7A43] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Request Your Custom Quotation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

            </div>

          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* QUOTATION REQUEST FORM MODAL                              */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-heading"
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8"
            >
              {/* Modal Header */}
              <div className="bg-[#1D3C34] p-6 text-white flex items-center justify-between border-b border-[#142B25]">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#86A55B] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
                    <span>Manufacturing Quotation Inquiry</span>
                  </div>
                  <h3 id="quote-modal-heading" className="font-serif text-xl sm:text-2xl font-bold">
                    Request Your Personalized Manufacturing Quote
                  </h3>
                  <p className="text-xs text-stone-300">
                    Tell us a little about your business and manufacturing goals.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 max-h-[75vh] overflow-y-auto bg-[#FAF9F5]">
                {quoteSuccessMessage ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl font-bold text-stone-900">
                        Thank You for Your Inquiry!
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                        {quoteSuccessMessage}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsQuoteModalOpen(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#1D3C34] text-white text-xs font-semibold cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    {/* Error Banner */}
                    {quoteError && (
                      <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                        {quoteError}
                      </div>
                    )}

                    {/* Pre-filled Configuration Summary */}
                    <div className="p-3.5 rounded-xl bg-[#E4EEE3]/60 border border-[#C5DAC3] text-xs text-stone-800 space-y-1">
                      <span className="font-bold text-[#1D3C34] block uppercase text-[10px] tracking-wider">
                        Configured Requirements:
                      </span>
                      <p>
                        <strong>{currentCategory.name}</strong> •{' '}
                        <strong>{currentSolution.name}</strong> •{' '}
                        <strong>{selectedQuantity.toLocaleString()} Units</strong> •{' '}
                        <strong>{currentPackaging.name}</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-stone-800 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Vikram Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-stone-800 block">
                          Company / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Aura Botanicals"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-stone-800 block">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. founder@aurabotanicals.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-stone-800 block">
                          Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-800 block">
                        Country / Destination Market
                      </label>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="e.g. India, UAE, UK, USA"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-800 block">
                        Product Requirements / Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Specify target active ingredients, benchmarks, or specific packaging preferences..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#708E50]"
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        id="consent-check"
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 accent-[#708E50] cursor-pointer"
                      />
                      <label
                        htmlFor="consent-check"
                        className="text-xs text-stone-600 leading-snug cursor-pointer"
                      >
                        I consent to The BioGlobal reviewing my product requirements
                        and contacting me with a tailored manufacturing quotation.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmittingQuote}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmittingQuote ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#86A55B]" />
                          <span>Submitting Quotation Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Manufacturing Requirements</span>
                          <Send className="w-3.5 h-3.5 text-[#86A55B]" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
