import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Layers,
  Clock,
  FlaskConical,
  Sparkles,
  FileCheck2,
  Package,
  ShieldCheck,
  Globe2,
  Tag
} from 'lucide-react';
import { FAQS } from '../../data/faqs';
import { FaqItem } from '../../types';
import { fetchPublishedFaqs } from '../../services/faqsApi';
import { useQuoteModal } from '../../context/QuoteModalContext';

const FAQ_ICONS: Record<string, React.ElementType> = {
  'faq-moq': Layers,
  'faq-timeline': Clock,
  'faq-sampling': FlaskConical,
  'faq-custom-formulation': Sparkles,
  'faq-quality-documentation': FileCheck2,
  'faq-packaging': Package,
  'faq-quality-standards': ShieldCheck,
  'faq-international-export': Globe2,
};

export const FaqSection: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>(FAQS);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    let isMounted = true;
    fetchPublishedFaqs().then((data) => {
      if (isMounted && data && data.length > 0) {
        setFaqs(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Structured Data Schema for Search Engines (FAQPage)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\n\n/g, ' '),
      },
    })),
  };

  return (
    <section 
      id="faqs"
      className="py-14 sm:py-18 lg:py-24 bg-[#0B1B17] border-b border-[#1A3830] overflow-hidden relative"
      aria-labelledby="faq-section-heading"
    >
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-left w-full mb-8 space-y-2.5 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B25] text-[#DFBD89] text-xs font-semibold uppercase tracking-wider border border-[#254A3E]">
            <HelpCircle className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 
            id="faq-section-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight"
          >
            Everything You Need to Know About{' '}
            <span className="italic text-[#DFBD89]">Manufacturing With Us</span>
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm sm:leading-relaxed max-w-5xl lg:max-w-6xl">
            Explore concise answers to common questions about our cosmetic manufacturing services, minimum order quantities, and custom formulation development. Whether launching your first private label SKU or expanding an existing beauty range, these answers help you plan your next production steps.
          </p>

          <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#DFBD89] pt-1">
            Clear Answers. Better Decisions. Confident Partnerships.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const IconComponent = FAQ_ICONS[faq.id] || HelpCircle;
            const triggerId = `faq-trigger-${faq.id || index}`;
            const panelId = `faq-panel-${faq.id || index}`;

            return (
              <motion.div
                key={faq.id || index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className={`bg-[#112520] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#DFBD89]/60 shadow-lg ring-1 ring-[#DFBD89]/30'
                    : 'border-[#1F3F36] shadow-md hover:border-[#2A4F44]'
                }`}
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFBD89] focus-visible:ring-offset-2 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 pr-2">
                      {/* Numeric Order Badge */}
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0B1B17] border border-[#254A3E] text-[#DFBD89] font-mono text-xs font-bold flex items-center justify-center mt-0.5 sm:mt-0">
                        {String(faq.sortOrder || index + 1).padStart(2, '0')}
                      </span>

                      <div className="space-y-1">
                        {faq.category && (
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#DFBD89] uppercase tracking-wider">
                            <IconComponent className="w-3 h-3 text-[#DFBD89]" />
                            <span>{faq.category}</span>
                          </div>
                        )}
                        <span className="font-sans font-medium text-base sm:text-lg text-white leading-snug block">
                          {faq.question}
                        </span>
                      </div>
                    </div>

                    {/* Chevron Indicator */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#0B1B17] text-[#DFBD89] rotate-180 border border-[#DFBD89]/40'
                          : 'bg-[#0B1B17] text-stone-400 border border-[#254A3E]'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-[#1F3F36] bg-[#0E201B]/80">
                        {/* Multi-paragraph answer text */}
                        <div className="text-stone-300 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                          {faq.answer.split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>

                        {/* Keyword Topics */}
                        {faq.keywords && faq.keywords.length > 0 && (
                          <div className="mt-5 pt-3.5 border-t border-[#1F3F36] flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                              <Tag className="w-3 h-3 text-[#DFBD89]" />
                              Keywords:
                            </span>
                            {faq.keywords.map((keyword, kIdx) => (
                              <span
                                key={kIdx}
                                className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#0B1B17] border border-[#254A3E] text-stone-300 font-medium"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
