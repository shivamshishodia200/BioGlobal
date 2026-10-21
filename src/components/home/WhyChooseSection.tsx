import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { Users, FlaskConical, Sparkles, Factory, ShieldCheck, Microscope } from 'lucide-react';

const STATS = [
  {
    icon: Users,
    number: '500+',
    label: 'Happy & Satisfied Customers',
    sub: 'Worldwide B2B Brands',
  },
  {
    icon: FlaskConical,
    number: '2000+',
    label: 'Custom Formulation',
    sub: 'Derm-tested formulas',
  },
  {
    icon: Sparkles,
    number: '500+',
    label: 'Unique Fragrances',
    sub: 'IFRA compliant notes',
  },
  {
    icon: Factory,
    number: '60 Lacs',
    label: 'Pieces on Monthly Production of all Types of Tubes, Bottles And Jars',
    sub: 'Automated filling lines',
  },
  {
    icon: ShieldCheck,
    number: '60,000',
    label: 'Sq. Ft. World Class Manufacturing Unit',
    sub: 'Class 100,000 cleanrooms',
  },
  {
    icon: Microscope,
    number: 'R&D',
    label: 'In-house Strong Research & Development',
    sub: 'Lead formulation chemists',
  },
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="bg-[#E4EEE3] py-20 lg:py-24 border-b border-[#C5DAC3]/70 overflow-hidden relative">
      {/* Background Soft Pattern Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#86A55B]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#708E50] font-bold block">
            The BioGlobal
          </span>

          <h2 className="font-sans font-light text-4xl sm:text-5xl text-stone-900 tracking-tight">
            Why us?
          </h2>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
            With The BioGlobal comprehensive Spec-To-Product strategy, we expertly manage the product development journey. From innovative formula design to efficient delivery, we are dedicated to providing exceptional quality for our clients.
          </p>
        </motion.div>

        {/* 6 White Stat Cards with 3D Tilt Hover and Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.09, duration: 0.55, ease: 'easeOut' }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                  boxShadow: '0 20px 35px rgba(29, 60, 52, 0.12)',
                }}
                className="bg-white rounded-xl p-6 flex flex-col justify-between items-center text-center shadow-xs min-h-[190px] cursor-default transition-all duration-300 relative group overflow-hidden border border-white/80"
              >
                {/* Top Subtle Icon */}
                <div className="w-8 h-8 rounded-full bg-[#E4EEE3] flex items-center justify-center text-[#708E50] mb-2 group-hover:scale-115 transition-transform duration-300">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="my-auto">
                  <span className="font-sans font-bold text-3xl sm:text-[32px] text-stone-900 leading-none block mb-2 tracking-tight">
                    <AnimatedCounter value={stat.number} />
                  </span>
                  <p className="text-xs text-stone-600 leading-snug font-normal line-clamp-3">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom Active Glow Line */}
                <div className="w-8 h-1 bg-[#708E50] rounded-full mt-3 group-hover:w-16 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
