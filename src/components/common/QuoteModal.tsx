import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { ConsultationForm } from '../consultation/ConsultationForm';

export const QuoteModal: React.FC = () => {
  const { isOpen, initialData, closeQuoteModal } = useQuoteModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Header */}
        <div className="bg-[#1D3C34] px-6 py-5 text-white flex items-center justify-between border-b border-[#142B25]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#DFBD89]" />
            </div>
            <div>
              <h3 id="modal-title" className="font-serif text-lg font-bold text-white">
                Request Manufacturing Quotation
              </h3>
              <p className="text-xs text-stone-300">
                Partner with The BioGlobal for private label & cosmetic contract manufacturing
              </p>
            </div>
          </div>

          <button
            onClick={closeQuoteModal}
            className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto bg-[#FAF9F5]">
          <ConsultationForm
            initialCategory={initialData.productCategory || 'Skin Care'}
            initialService={initialData.serviceType || 'Private Label Manufacturing'}
            initialProduct={initialData.targetProduct || ''}
            compact={true}
            onSuccessCallback={closeQuoteModal}
          />
        </div>
      </div>
    </div>
  );
};
