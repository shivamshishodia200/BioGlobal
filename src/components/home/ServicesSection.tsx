import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Globe, Package, TrendingUp } from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  isTeal: boolean;
  desc: string;
  features: string[];
  moq: string;
  leadTime: string;
  link?: string;
  serviceType: string;
}

const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'private-labelling',
    title: 'Private Labelling',
    isTeal: false,
    desc: 'Customize our high-quality products with your own brand name and packaging. This allows you to build your brand identity while offering your customers exceptional Cosmetic Products, Skin Care, Hair Care, Bath Care, Body Care, and Baby Care formulations.',
    features: ['Custom label & box printing', 'Turnkey formula selection', 'Barcode & batch coding', 'Regulatory compliance assistance'],
    moq: '1,000 units per SKU',
    leadTime: '21 - 28 Days',
    link: '/private-label-manufacturing',
    serviceType: 'Private Label Manufacturing',
  },
  {
    id: 'international-business',
    title: 'International Business',
    isTeal: true,
    desc: 'We work with customers all over the world. If you want to expand your business internationally or reach new markets, we are here to help with global export documentation, shipping logistics, and customs clearance.',
    features: ['Export dossiers & Certificate of Free Sale (CFS)', 'COA & MSDS documentation', 'International freight forwarding', 'Compliant multilingual labeling'],
    moq: 'Negotiable for export',
    leadTime: '30 - 45 Days',
    link: '/third-party-manufacturing',
    serviceType: 'Third-Party Cosmetic Manufacturing',
  },
  {
    id: 'bulk-ordering',
    title: 'Bulk Ordering',
    isTeal: true,
    desc: 'We make it easy to order products in large quantities. This is great if you want to keep plenty of stock on hand and save money simultaneously through economies of scale and direct factory pricing.',
    features: ['Bulk liquid/semi-solid drum supply (50kg - 1000kg)', 'High-volume automated filling', 'Tiered volume discounts', 'Scheduled phased delivery'],
    moq: '500kg or 5,000 finished units',
    leadTime: '18 - 25 Days',
    serviceType: 'Bulk Manufacturing',
  },
  {
    id: 'marketing-support',
    title: 'Marketing Support',
    isTeal: false,
    desc: 'We can help you promote your brand and reach your audience better. Our team can share marketing ideas, product positioning strategies, 3D render assets, and packaging concepts to help you stand out in a crowded market.',
    features: ['3D photorealistic packaging mockups', 'Key active ingredient marketing claims', 'Dermatological study summaries', 'Market trend & benchmarking data'],
    moq: 'Included with manufacturing contract',
    leadTime: 'Available upon onboarding',
    serviceType: 'Skin Care Consultation',
  },
];

export const ServicesSection: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Description */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-5"
          >
            <span className="text-xs uppercase tracking-widest text-[#708E50] font-bold block">
              Our Services
            </span>

            <h2 className="font-sans font-light text-4xl sm:text-5xl text-stone-900 leading-tight tracking-tight">
              Personalized Solutions Just for You
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              We provide a variety of products to suit your requirements. Whether you're looking for custom Cosmetic Products, Skin Care, Hair Care, Bath Care, Body Care, or Baby Care, or prefer our ready-made private-label options, we are here to assist you. Our goal is to meet all your needs!
            </p>

            <div className="pt-4">
              <button
                onClick={() => openQuoteModal()}
                className="px-7 py-3 rounded-md bg-[#1D3C34] hover:bg-[#142B25] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs cursor-pointer"
              >
                Discuss Your Project Scope
              </button>
            </div>
          </motion.div>

          {/* Right Column: 4-Card Asymmetric Grid (White & Sage Tint) with Motion */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES_LIST.map((srv, idx) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 35px rgba(29,60,52,0.12)',
                }}
                className={`rounded-2xl p-7 shadow-xs flex flex-col justify-between min-h-[280px] transition-all duration-300 relative group cursor-pointer ${
                  srv.isTeal
                    ? 'bg-[#E4EEE3] text-stone-900 border border-[#C5DAC3]'
                    : 'bg-white border border-stone-200 text-stone-900'
                }`}
                onClick={() => setSelectedService(srv)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans font-normal text-2xl text-stone-900">
                      {srv.title}
                    </h3>
                    <Sparkles className="w-4 h-4 text-[#708E50] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed font-normal text-stone-600">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-black/10 mt-4">
                  <span className="text-xs font-bold text-[#708E50] underline underline-offset-4 inline-block transition-transform group-hover:translate-x-1">
                    Read More & Specs
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#708E50] transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative z-10 shadow-2xl border border-stone-200"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-bold border border-[#C5DAC3]">
                  <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
                  <span>Manufacturing Service Specification</span>
                </div>

                <h3 className="font-sans font-normal text-3xl text-stone-900">
                  {selectedService.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {selectedService.desc}
                </p>

                <div className="pt-2 border-t border-stone-100 space-y-2">
                  <h4 className="text-xs uppercase font-bold text-stone-900 tracking-wider">
                    Included Capabilities & Deliverables:
                  </h4>
                  <div className="space-y-2">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">MOQ</span>
                    <span className="text-xs font-bold text-stone-900">{selectedService.moq}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Typical Lead Time</span>
                    <span className="text-xs font-bold text-stone-900">{selectedService.leadTime}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => {
                      const sType = selectedService.serviceType;
                      setSelectedService(null);
                      openQuoteModal({ serviceType: sType });
                    }}
                    className="flex-1 py-3 px-5 rounded-xl bg-[#708E50] hover:bg-[#5F7A43] text-white font-medium text-xs transition-colors shadow-2xs text-center cursor-pointer"
                  >
                    Request Quotation for {selectedService.title}
                  </button>
                  {selectedService.link && (
                    <Link
                      to={selectedService.link}
                      className="py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium"
                      onClick={() => setSelectedService(null)}
                    >
                      Full Page
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
