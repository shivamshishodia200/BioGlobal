import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  FileText,
  ArrowRight,
  RefreshCw,
  Lock
} from 'lucide-react';
import { ConsultationFormData, ConsultationResponse } from '../../types';
import { LegalModal } from '../common/LegalModals';

interface ConsultationFormProps {
  initialCategory?: string;
  initialService?: string;
  initialProduct?: string;
  source?: string;
  compact?: boolean;
  onSuccessCallback?: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialCategory = 'Skin Care',
  initialService = 'Private Label Manufacturing',
  initialProduct = '',
  source = 'homepage_consultation',
  compact = false,
  onSuccessCallback,
  onOpenPrivacyPolicy,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    categoryId: initialCategory.toLowerCase().replace(/\s+/g, '-'),
    productCategory: initialCategory,
    manufacturingType: initialService,
    estimatedQuantity: '1,000–2,999 Units',
    targetLaunchPeriod: 'Within 1–3 Months',
    productRequirements: initialProduct
      ? `Inquiring specifically regarding formulation & batch manufacturing for: ${initialProduct}`
      : '',
    contactConsent: false,
    source,
    targetProduct: initialProduct,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ConsultationResponse | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      categoryId: initialCategory.toLowerCase().replace(/\s+/g, '-'),
      productCategory: initialCategory,
      manufacturingType: initialService,
      targetProduct: initialProduct,
      source: source || prev.source,
      productRequirements: initialProduct
        ? `Inquiring specifically regarding formulation & batch manufacturing for: ${initialProduct}`
        : prev.productRequirements,
    }));
  }, [initialCategory, initialService, initialProduct, source]);

  // Field validation
  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Business email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone or WhatsApp contact number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number (minimum 7 digits).';
    }

    if (!formData.productCategory) {
      errs.productCategory = 'Please select a primary product category.';
    }

    if (!formData.manufacturingType) {
      errs.manufacturingType = 'Please select a manufacturing requirement.';
    }

    if (!formData.contactConsent) {
      errs.contactConsent = 'You must acknowledge the Privacy Policy and agree to be contacted.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setResponse(null);

    const payload = {
      fullName: formData.fullName.trim(),
      companyName: formData.companyName?.trim() || 'Independent / Startup Brand',
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      categoryId: formData.productCategory.toLowerCase().replace(/\s+/g, '-'),
      productCategory: formData.productCategory,
      manufacturingType: formData.manufacturingType,
      estimatedQuantity: formData.estimatedQuantity,
      targetLaunchPeriod: formData.targetLaunchPeriod,
      productRequirements: formData.productRequirements?.slice(0, 2000) || '',
      contactConsent: formData.contactConsent,
      source: formData.source || source,
      targetProduct: formData.targetProduct,
    };

    try {
      // Primary consultation endpoint
      let res = await fetch('/api/consultation-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Fallback to legacy inquiry endpoint if 404
      if (res.status === 404) {
        res = await fetch('/api/inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...payload,
            serviceType: payload.manufacturingType,
            quantityRange: payload.estimatedQuantity,
            message: payload.productRequirements,
          }),
        });
      }

      const data = await res.json();

      if (res.ok && data.success) {
        setResponse({
          success: true,
          referenceId: data.referenceId,
          message:
            data.message ||
            'Your manufacturing consultation request has been submitted successfully. Our team will review the information and contact you using the details provided.',
        });
        if (onSuccessCallback) {
          setTimeout(() => onSuccessCallback(), 3500);
        }
      } else {
        setResponse({
          success: false,
          message: data.error || "We couldn't submit your request at this time. Please check your connection and try again.",
          error: data.error,
        });
      }
    } catch {
      setResponse({
        success: false,
        message: "We couldn't submit your request at this time. Please check your connection and try again.",
        error: 'Network connection failure',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleReset = () => {
    setResponse(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      categoryId: 'skin-care',
      productCategory: 'Skin Care',
      manufacturingType: 'Private Label Manufacturing',
      estimatedQuantity: '1,000–2,999 Units',
      targetLaunchPeriod: 'Within 1–3 Months',
      productRequirements: '',
      contactConsent: false,
      source,
      targetProduct: '',
    });
  };

  return (
    <div 
      id="consultation-form-card"
      className="bg-white rounded-2xl shadow-xl border border-stone-200/90 p-6 sm:p-8 relative text-stone-900"
    >
      {/* Target product badge if prefilled from card or modal */}
      {formData.targetProduct && (
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold border border-[#C5DAC3]">
          <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
          <span>Inquiring for: <strong>{formData.targetProduct}</strong></span>
        </div>
      )}

      {/* Form Introduction Header (Part 3) */}
      {!response?.success && (
        <div className="mb-5 space-y-1 border-b border-stone-100 pb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
              Tell Us About Your Project
            </h3>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#708E50] bg-[#E4EEE3] px-2.5 py-0.5 rounded-full">
              <Lock className="w-3 h-3" />
              <span>Confidential Brief</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-normal">
            Share your requirements so our team can understand your project.
          </p>
        </div>
      )}

      {/* SUCCESS STATE (Part 11) */}
      {response && response.success && (
        <div className="py-8 px-4 sm:px-6 rounded-2xl bg-white text-center space-y-5 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center mx-auto shadow-xs border border-[#C5DAC3]">
            <CheckCircle2 className="w-9 h-9 text-[#708E50]" />
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              Thank You for Your Inquiry!
            </h4>
            <p className="text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
              Your manufacturing consultation request has been submitted successfully. Our team will review the information and contact you using the details provided.
            </p>
          </div>

          {response.referenceId && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono font-bold text-stone-800">
              <FileText className="w-4 h-4 text-[#708E50]" />
              <span>Brief Reference: {response.referenceId}</span>
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4 text-[#DFBD89]" />
            </Link>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-stone-500" />
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      )}

      {/* ERROR BANNER (Part 11) */}
      {response && !response.success && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-semibold text-rose-900">Unable to Submit Your Inquiry</p>
            <p className="mt-0.5 text-rose-700">
              We couldn't submit your request at this time. Please check your connection and try again.
            </p>
          </div>
        </div>
      )}

      {/* STANDARD FORM (Part 4) */}
      {(!response || !response.success) && (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Row 1: Full Name & Company / Brand Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="consultation-fullName"
                className="block text-xs font-semibold text-stone-700 mb-1"
              >
                Full Name <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <input
                id="consultation-fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34] ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 bg-white'
                }`}
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label 
                  htmlFor="consultation-companyName"
                  className="block text-xs font-semibold text-stone-700"
                >
                  Company / Brand Name
                </label>
                <span className="text-[10px] text-stone-400">Optional</span>
              </div>
              <input
                id="consultation-companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter your brand or company name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34]"
              />
            </div>
          </div>

          {/* Row 2: Business Email & Phone / WhatsApp Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="consultation-email"
                className="block text-xs font-semibold text-stone-700 mb-1"
              >
                Business Email Address <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <input
                id="consultation-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34] ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 bg-white'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="consultation-phone"
                className="block text-xs font-semibold text-stone-700 mb-1"
              >
                Phone / WhatsApp Number <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <input
                id="consultation-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your contact number"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34] ${
                  errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 bg-white'
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Row 3: Product Category & Manufacturing Requirement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="consultation-category"
                className="block text-xs font-semibold text-stone-700 mb-1"
              >
                Product Category <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <select
                id="consultation-category"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34]"
              >
                <option value="Cosmetic Products">Cosmetic Products</option>
                <option value="Skin Care">Skin Care</option>
                <option value="Hair Care">Hair Care</option>
                <option value="Bath Care">Bath Care</option>
                <option value="Body Care">Body Care</option>
                <option value="Baby Care">Baby Care</option>
              </select>
              {errors.productCategory && (
                <p className="text-[11px] text-rose-600 mt-1">{errors.productCategory}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="consultation-solution"
                className="block text-xs font-semibold text-stone-700 mb-1"
              >
                Manufacturing Requirement <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <select
                id="consultation-solution"
                name="manufacturingType"
                value={formData.manufacturingType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34]"
              >
                <option value="Private Label Manufacturing">Private Label Manufacturing</option>
                <option value="Third-Party Contract Manufacturing">Third-Party Contract Manufacturing</option>
                <option value="Custom Formulation & R&D">Custom Formulation & R&D</option>
                <option value="Need Guidance / Not Sure Yet">Need Guidance / Not Sure Yet</option>
              </select>
              {errors.manufacturingType && (
                <p className="text-[11px] text-rose-600 mt-1">{errors.manufacturingType}</p>
              )}
            </div>
          </div>

          {/* Row 4: Estimated Order Quantity & Preferred Launch Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label 
                  htmlFor="consultation-quantity"
                  className="block text-xs font-semibold text-stone-700"
                >
                  Estimated Order Quantity
                </label>
                <span className="text-[10px] text-stone-400">Optional</span>
              </div>
              <select
                id="consultation-quantity"
                name="estimatedQuantity"
                value={formData.estimatedQuantity}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34]"
              >
                <option value="1,000–2,999 Units">1,000–2,999 Units</option>
                <option value="3,000–9,999 Units">3,000–9,999 Units</option>
                <option value="10,000–49,999 Units">10,000–49,999 Units</option>
                <option value="50,000+ Units">50,000+ Units</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label 
                  htmlFor="consultation-timeline"
                  className="block text-xs font-semibold text-stone-700"
                >
                  Preferred Launch Timeline
                </label>
                <span className="text-[10px] text-stone-400">Optional</span>
              </div>
              <select
                id="consultation-timeline"
                name="targetLaunchPeriod"
                value={formData.targetLaunchPeriod}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34]"
              >
                <option value="As Soon as Practical">As Soon as Practical</option>
                <option value="Within 1–3 Months">Within 1–3 Months</option>
                <option value="Within 3–6 Months">Within 3–6 Months</option>
                <option value="More Than 6 Months">More Than 6 Months</option>
                <option value="Still Planning">Still Planning</option>
              </select>
            </div>
          </div>

          {/* Row 5: Tell Us About Your Product */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label 
                htmlFor="consultation-requirements"
                className="block text-xs font-semibold text-stone-700"
              >
                Tell Us About Your Product
              </label>
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <HelpCircle className="w-3 h-3" />
                <span>Ingredients, packaging, or target audience</span>
              </span>
            </div>
            <textarea
              id="consultation-requirements"
              name="productRequirements"
              rows={compact ? 3 : 4}
              maxLength={2000}
              value={formData.productRequirements}
              onChange={handleChange}
              placeholder="Describe your product idea, preferred ingredients, packaging requirements, target audience, or other details."
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1D3C34]"
            />
            <div className="flex justify-end mt-0.5">
              <span className="text-[10px] text-stone-400">
                {formData.productRequirements?.length || 0} / 2000 characters
              </span>
            </div>
          </div>

          {/* Row 6: Contact Consent (Part 4 Field 10) */}
          <div className="pt-1">
            <div className="flex items-start gap-2.5">
              <input
                id="consultation-consent"
                type="checkbox"
                name="contactConsent"
                checked={formData.contactConsent}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 rounded-sm border-stone-300 text-[#1D3C34] focus:ring-[#1D3C34] cursor-pointer"
              />
              <label 
                htmlFor="consultation-consent"
                className="text-xs text-stone-600 leading-snug cursor-pointer select-none"
              >
                I agree to be contacted regarding my manufacturing inquiry and acknowledge the{' '}
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenPrivacyPolicy) {
                      onOpenPrivacyPolicy();
                    } else {
                      setIsPrivacyModalOpen(true);
                    }
                  }}
                  className="font-semibold text-[#1D3C34] underline hover:text-[#708E50] cursor-pointer"
                >
                  Privacy Policy
                </button>
                . <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
            </div>
            {errors.contactConsent && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.contactConsent}</p>
            )}
          </div>

          {/* Submission Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#1D3C34] to-[#142B25] hover:from-[#142B25] hover:to-[#0D1A13] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#DFBD89]" />
                  <span>Submitting Your Inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#DFBD89] group-hover:translate-x-0.5 transition-transform" />
                  <span>Request Technical Consultation</span>
                </>
              )}
            </button>
          </div>

          {/* Privacy & Professional Trust Footer (Part 18 Compliance) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px] text-stone-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#708E50]" />
              <span>Confidentiality & Non-Disclosure Protected</span>
            </span>
            <span>Reviewed by Cosmetic Formulators & Manufacturing Engineers</span>
          </div>
        </form>
      )}

      {/* Embedded Privacy Policy Modal if triggered */}
      <LegalModal
        isOpen={isPrivacyModalOpen}
        type="privacy"
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
};
