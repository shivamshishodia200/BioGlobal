import React from 'react';
import { motion } from 'motion/react';
import { Truck, Tag, Presentation, FileText, CheckCircle2 } from 'lucide-react';

const BENEFITS = [
  {
    icon: Truck,
    title: 'Short Lead Time',
    desc: 'With a capacity of 60,00,000 pieces per month, we can provide you with a fast turnaround time.',
    highlight: '21 - 28 Days Average Dispatch',
  },
  {
    icon: Tag,
    title: 'Cost Effective Prices',
    desc: 'We offer one of the best prices in the manufacturing industry without compromising formulation integrity.',
    highlight: 'Direct Lab Sourcing & Bulk Economy',
  },
  {
    icon: Presentation,
    title: 'Flexible MOQ',
    desc: 'Our negotiable MOQ is as low as 1000 pieces, enabling startups and established brands to launch with agility.',
    highlight: 'Low Risk Pilot Launches',
  },
  {
    icon: FileText,
    title: 'Document Support',
    desc: 'We assist in organizing the necessary documentation for your product registration & quality certification.',
    highlight: 'COA, MSDS, Stability & Dossiers',
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-[#E4EEE3] pt-4 pb-20 lg:pb-28 border-b border-[#C5DAC3]/70 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#708E50] font-bold block">
            The BioGlobal
          </span>

          <h2 className="font-sans font-light text-4xl sm:text-5xl text-stone-900 tracking-tight">
            Benefits from partnering with us
          </h2>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
            Partnering with The BioGlobal means access to innovative formulations and expert product development. We handle the entire process from concept to delivery, allowing you to focus on your brand's growth. With our commitment to quality and personalized support, we help you stay competitive and enhance the value of your product offerings.
          </p>
        </motion.div>

        {/* 4 White Floating Cards with Icon Pulse & Spring Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.12, duration: 0.6, ease: 'easeOut' }}
                whileHover={{
                  y: -12,
                  boxShadow: '0 24px 40px rgba(29, 60, 52, 0.14)',
                }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-between text-center shadow-xs space-y-4 cursor-default transition-all duration-300 group border border-white/80 relative"
              >
                {/* Circular Sage Icon with subtle rotate & scale on hover */}
                <div className="space-y-4 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-[#D3E4D1] group-hover:bg-[#86A55B]/40 flex items-center justify-center text-stone-700 transition-colors shadow-2xs"
                  >
                    <Icon className="w-7 h-7 text-[#1D3C34]" />
                  </motion.div>

                  <h3 className="font-sans font-bold text-lg text-stone-900 group-hover:text-[#708E50] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-2 w-full">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F5] border border-stone-200 text-[11px] font-semibold text-stone-800 w-full justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#708E50]" />
                    <span>{item.highlight}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
