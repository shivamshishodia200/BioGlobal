import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-[#1D3C34] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-5 h-5 text-[#DFBD89]" /> : <FileText className="w-5 h-5 text-[#DFBD89]" />}
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                {isPrivacy ? 'Privacy & Data Protection Policy' : 'Terms & Conditions of Manufacturing'}
              </h3>
              <p className="text-xs text-stone-300">The BioGlobal B2B Client Charter</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-300 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-stone-700 space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-stone-900">Effective Date: October 2026</p>
              <p>
                The BioGlobal takes business data privacy and proprietary formulation confidentiality with the highest priority. All project briefs, proprietary formulations, benchmark samples, and company contact details submitted through our consultation portals are protected under standard Non-Disclosure protocols.
              </p>
              <h4 className="font-bold text-stone-900 pt-2 text-sm">1. Collection of B2B Information</h4>
              <p>
                We collect business contact information (Name, Company Name, Business Email, Phone Number, Target Quantities) strictly to evaluate contract manufacturing feasibility and prepare technical quotations.
              </p>
              <h4 className="font-bold text-stone-900 pt-2 text-sm">2. Proprietary Formulation Rights</h4>
              <p>
                Client-provided formulations, active ingredient ratios, and proprietary target textures remain the sole intellectual property of the commissioning client. The BioGlobal does not share, resell, or distribute client trade secrets to third parties.
              </p>
              <h4 className="font-bold text-stone-900 pt-2 text-sm">3. In-House Security & Storage</h4>
              <p>
                All production logs, Certificates of Analysis (CoA), and Batch Manufacturing Records (BMR) are archived in encrypted systems complying with industrial ISO 22716 documentation standards.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-stone-900">Effective Date: October 2026</p>
              <p>
                The following terms govern all quotation requests, contract manufacturing orders, and private label pilot projects conducted with The BioGlobal.
              </p>
              <h4 className="font-bold text-stone-900 pt-2 text-sm">1. Quotations and Minimum Order Quantities (MOQs)</h4>
              <p>
                Preliminary quotations provided through our online portals are estimates based on standard packaging and ingredient market rates. Final firm binding quotations are issued upon client sign-off of the Product Development Brief and bench sample approval.
              </p>
              <h4 className="font-bold text-stone-900 pt-2 text-sm">2. Quality Assurance & Release Criteria</h4>
              <p>
                All manufactured lots undergo rigorous quality release criteria including pH, viscosity, specific gravity, and microbial limits. No batch is released from quarantine without a certified Certificate of Analysis (CoA).
              </p>
              <h4 className="font-bold text-stone-900 pt-2 text-sm">3. Regulatory & Labeling Compliance</h4>
              <p>
                While The BioGlobal provides technical review and INCI ingredient accuracy, clients are responsible for final brand registration and regional marketing claim substantiation in their target destination countries.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#1D3C34] text-white text-xs font-semibold hover:bg-[#142B25] cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
