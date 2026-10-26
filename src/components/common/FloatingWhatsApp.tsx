import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919795000351'; // Configurable business WhatsApp number
  const defaultMessage = 'Hello The BioGlobal team, I am interested in cosmetic manufacturing services and would like to request product information.';

  const handleWhatsAppRedirect = (customMsg?: string) => {
    const text = encodeURIComponent(customMsg || defaultMessage);
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-32px)] max-w-sm sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 pointer-events-auto">
          {/* Header */}
          <div className="bg-[#1D3C34] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#708E50]/40 border border-[#86A55B]/40 flex items-center justify-center font-bold text-sm text-[#DFBD89]">
                TBG
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">The BioGlobal B2B Desk</h4>
                <p className="text-[11px] text-[#C5DAC3] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#86A55B] animate-pulse"></span>
                  Formulation Specialists Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-white p-1 rounded-md"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF9F5] text-xs text-stone-700 space-y-3">
            <div className="p-3 bg-white rounded-xl shadow-xs border border-stone-200/60 leading-relaxed">
              👋 Welcome! Looking to launch or scale your cosmetic or skincare brand? Connect directly with our lead technical formulation team.
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                Quick Inquiries:
              </span>
              <button
                onClick={() => handleWhatsAppRedirect('Hi The BioGlobal, I would like to inquire about Private Label Skincare products and MOQs.')}
                className="w-full text-left p-2.5 bg-white hover:bg-[#E4EEE3] rounded-lg border border-stone-200 hover:border-[#708E50]/40 text-stone-800 text-xs font-medium flex items-center justify-between transition-colors group cursor-pointer"
              >
                <span>Private Label Skincare Catalog & MOQs</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#708E50] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => handleWhatsAppRedirect('Hi The BioGlobal, I have a custom cosmetic formulation brief I would like your chemists to evaluate.')}
                className="w-full text-left p-2.5 bg-white hover:bg-[#E4EEE3] rounded-lg border border-stone-200 hover:border-[#708E50]/40 text-stone-800 text-xs font-medium flex items-center justify-between transition-colors group cursor-pointer"
              >
                <span>Bespoke Custom Formulation Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#708E50] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => handleWhatsAppRedirect('Hi The BioGlobal, I need bulk manufacturing and packaging solutions for our existing brand.')}
                className="w-full text-left p-2.5 bg-white hover:bg-[#E4EEE3] rounded-lg border border-stone-200 hover:border-[#708E50]/40 text-stone-800 text-xs font-medium flex items-center justify-between transition-colors group cursor-pointer"
              >
                <span>Bulk Compounding & Contract Packaging</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#708E50] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500 border-t border-stone-200">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#708E50]" />
                Confidential NDA protected
              </span>
              <span>Fast B2B Response</span>
            </div>
          </div>

          {/* Action */}
          <div className="p-3 bg-white border-t border-stone-200">
            <button
              onClick={() => handleWhatsAppRedirect()}
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.179.18-.077.355.101.173.452.746.97 1.208.667.594 1.229.779 1.403.866.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.174.231-.145.39-.087.159.058 1.011.477 1.184.564.173.086.289.13.332.202.043.072.043.419-.101.824z" />
              </svg>
              <span>Start WhatsApp Conversation</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-[#1D3C34] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-[#708E50]/40 cursor-pointer"
        aria-label="Open B2B WhatsApp consultation"
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.179.18-.077.355.101.173.452.746.97 1.208.667.594 1.229.779 1.403.866.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.174.231-.145.39-.087.159.058 1.011.477 1.184.564.173.086.289.13.332.202.043.072.043.419-.101.824z" />
          </svg>
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-[10px] text-[#C5DAC3] font-semibold uppercase tracking-wider leading-none">Instant Support</p>
          <p className="text-xs font-bold text-white leading-tight">Chat with Formulation Team</p>
        </div>
      </button>
    </div>
  );
};
