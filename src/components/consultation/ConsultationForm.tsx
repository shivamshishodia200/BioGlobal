import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  FileText
} from 'lucide-react';
import { B2BInquiryPayload, InquiryResponse } from '../../types';

interface ConsultationFormProps {
  initialCategory?: string;
  initialService?: string;
  initialProduct?: string;
  compact?: boolean;
  onSuccessCallback?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialCategory = 'Skin Care',
  initialService = 'Private Label Manufacturing',
  initialProduct = '',
  compact = false,
  onSuccessCallback,
}) => {
  const [formData, setFormData] = useState<B2BInquiryPayload>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: initialCategory,
    quantityRange: '1,000 - 5,000 units',
    serviceType: initialService,
    message: initialProduct ? `Inquiring specifically regarding formulation & batch manufacturing for: ${initialProduct}` : '',
    targetProduct: initialProduct,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<InquiryResponse | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }
    if (!formData.companyName.trim()) {
      errs.companyName = 'Company / Brand Name is required for B2B requests.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Corporate Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for quote confirmation.';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your formulation or project requirements.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setResponse({
          success: true,
          referenceId: data.referenceId,
          message: data.message,
        });
        if (onSuccessCallback) {
          setTimeout(() => onSuccessCallback(), 3500);
        }
      } else {
        setResponse({
          success: false,
          message: data.error || 'Server rejected the request. Please check your submission.',
          error: data.error,
        });
      }
    } catch {
      setResponse({
        success: false,
        message: 'Could not connect to the manufacturing inquiry server. Please verify your connection or contact us via WhatsApp.',
        error: 'Network request failure',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-stone-200/90 p-6 sm:p-8 relative">
      {/* Target product badge if prefilled */}
      {formData.targetProduct && (
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-semibold border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>Inquiring for: <strong>{formData.targetProduct}</strong></span>
        </div>
      )}

      {/* Success Notification Banner */}
      {response && response.success && (
        <div className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 animate-in fade-in zoom-in-95">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-emerald-900">Inquiry Successfully Registered!</h4>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                {response.message}
              </p>
              {response.referenceId && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-emerald-300 text-xs font-mono font-bold text-emerald-800">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Dossier Reference ID: {response.referenceId}</span>
                </div>
              )}
              <div className="mt-3 pt-3 border-t border-emerald-200 flex flex-wrap items-center gap-4 text-xs">
                <span className="text-emerald-800">Need urgent formulation review?</span>
                <a
                  href={`https://wa.me/18004562464?text=Hi%20The%20BioGlobal%2C%20following%20up%20on%20quote%20reference%20${response.referenceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-900 underline hover:text-emerald-700"
                >
                  Expedite on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {response && !response.success && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-semibold text-rose-900">Failed to submit manufacturing request:</p>
            <p className="mt-0.5 text-rose-700">{response.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Row 1: Full Name & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Dr. Catherine Wells"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D3C34] ${
                errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 bg-white'
              }`}
            />
            {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Company / Brand Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Lumina Botanicals LLC"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D3C34] ${
                errors.companyName ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 bg-white'
              }`}
            />
            {errors.companyName && <p className="text-[11px] text-rose-600 mt-1">{errors.companyName}</p>}
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Work / Business Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="catherine@luminabotanicals.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D3C34] ${
                errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 bg-white'
              }`}
            />
            {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Phone Number with Country Code <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 234-5678"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D3C34] ${
                errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 bg-white'
              }`}
            />
            {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Row 3: Product Category & Quantity Range */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Product Category
            </label>
            <select
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1D3C34]"
            >
              <option value="Cosmetic Products">Cosmetic Products (Makeup & Primers)</option>
              <option value="Skin Care">Skin Care (Serums, Creams, SPF, Cleansers)</option>
              <option value="Hair Care">Hair Care (Shampoos, Oils, Treatments)</option>
              <option value="Bath Care">Bath Care (Gels, Soaks, Polishes)</option>
              <option value="Body Care">Body Care (Lotions, Butters, Firming)</option>
              <option value="Baby Care">Baby Care (Hypoallergenic Infant Care)</option>
              <option value="Multiple Categories">Multiple Categories / Comprehensive Line</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Estimated Initial Quantity (MOQ)
            </label>
            <select
              name="quantityRange"
              value={formData.quantityRange}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1D3C34]"
            >
              <option value="500 - 1,000 units">500 – 1,000 units (Pilot / Starter Launch)</option>
              <option value="1,000 - 5,000 units">1,000 – 5,000 units (Standard Commercial Batch)</option>
              <option value="5,000 - 10,000 units">5,000 – 10,000 units (Growth Scale)</option>
              <option value="10,000+ units">10,000+ units (Industrial Production Run)</option>
              <option value="Bulk Liters/Kg (Drums/IBC)">Bulk Formulation (Drums / IBC Tote Tanks)</option>
            </select>
          </div>
        </div>

        {/* Row 4: Service Type */}
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Type of Manufacturing Service
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1D3C34]"
          >
            <option value="Private Label Manufacturing">Private Label Manufacturing (Ready-to-brand formulas)</option>
            <option value="Third-Party Cosmetic Manufacturing">Third-Party Contract Manufacturing (Existing formula scaling)</option>
            <option value="Custom Product Formulation">Custom Bespoke Formulation (R&D from scratch)</option>
            <option value="Cosmetic Packaging Solutions">Packaging Sourcing & Decoration Only</option>
            <option value="Bulk Manufacturing">Bulk Compounding (Liquid / Emulsion supply)</option>
            <option value="Skin Care Consultation">Comprehensive Product Development Consultation</option>
          </select>
        </div>

        {/* Row 5: Requirements / Message */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-semibold text-stone-700">
              Formulation Brief / Specific Requirements <span className="text-rose-500">*</span>
            </label>
            <span className="text-[11px] text-stone-400 flex items-center gap-1">
              <HelpCircle className="w-3 h-3" />
              Mention benchmark products, desired textures or packaging
            </span>
          </div>
          <textarea
            name="message"
            rows={compact ? 3 : 4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your brand vision: active ingredients desired (e.g. Niacinamide, Peptides, Hyaluronic Acid), target launch date, custom packaging ideas, or export requirements..."
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D3C34] ${
              errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 bg-white'
            }`}
          />
          {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
        </div>

        {/* Submission Button & Security Guarantees */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#1D3C34] to-[#142B25] hover:from-[#142B25] hover:to-[#0D1A13] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#DFBD89]" />
                <span>Validating & Logging B2B Brief...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#DFBD89] group-hover:translate-x-0.5 transition-transform" />
                <span>Submit Manufacturing Inquiry</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between pt-2 text-[11px] text-stone-500">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            100% Confidential NDA & Formulation Ownership
          </span>
          <span>Response within 24 business hours</span>
        </div>
      </form>
    </div>
  );
};
