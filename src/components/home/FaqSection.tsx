import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';
import { FAQS } from '../../data/faqs';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openQuoteModal } = useQuoteModal();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-stone-200/60 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3]">
            <HelpCircle className="w-3.5 h-3.5 text-[#708E50]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Essential knowledge about third-party contract manufacturing, minimum order quantities (MOQs), custom formulating, regulatory approvals, and launching your private label beauty line.
          </p>
        </motion.div>

        {/* Accordion List with Framer Motion AnimatePresence */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-medium text-base sm:text-lg text-stone-900 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#1D3C34] text-[#DFBD89] rotate-180'
                        : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-[#FAF9F5]/40">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs"
        >
          <div className="space-y-1">
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">
              Have specific technical formulation questions?
            </h4>
            <p className="text-xs text-stone-500">
              Our cosmetic chemists are available to review your benchmark products and custom project brief.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal({ serviceType: 'Skin Care Consultation' })}
            className="px-5 py-2.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs font-semibold flex items-center gap-2 flex-shrink-0 transition-colors shadow-2xs cursor-pointer"
          >
            <span>Ask a Formulation Specialist</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#DFBD89]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
