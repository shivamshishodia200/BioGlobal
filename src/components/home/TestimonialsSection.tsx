import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIAL_CARDS = [
  {
    logoName: 'Chic Beauty Labs',
    brandTag: 'D2C Skincare Brand',
    founder: 'Priya Sharma, Brand Director',
    logoBg: 'bg-rose-50 text-rose-900 border-rose-200',
    quote:
      "Working with The BioGlobal has been amazing! Their herbal skincare products really work and fit our values. The team is professional and always keeps quality in mind. We plan to keep partnering with them for future projects!",
    rating: 5,
    volume: '25,000+ Units / Month',
  },
  {
    logoName: "Dr. Paul's Cosmeceuticals",
    brandTag: 'Clinical Dermatology Line',
    founder: 'Dr. Arjun Paul, Dermatologist',
    logoBg: 'bg-stone-50 text-stone-900 border-stone-200',
    quote:
      "We're really happy with our collaboration with The BioGlobal. Their knowledge of herbal and clinical skincare shows in the products they create. The team is dedicated and always on time. We're looking forward to more projects together.",
    rating: 5,
    volume: '15,000 Units / Batch',
  },
  {
    logoName: 'Eu Genia Biocare Int.',
    brandTag: 'Global Export Distributor',
    founder: 'Sophie Laurent, Procurement VP',
    logoBg: 'bg-sky-50 text-sky-900 border-sky-200',
    quote:
      "We can't say enough good things about The BioGlobal! Their herbal skincare solutions are fantastic and our customers love them. The team is easy to work with and always responsive. I'd recommend them to anyone in the skincare business!",
    rating: 5,
    volume: '40,000 Units Export',
  },
  {
    logoName: 'GBK HEALTHCARE',
    brandTag: 'Wellness & Personal Care',
    founder: 'Ramesh Patel, Supply Chain Head',
    logoBg: 'bg-emerald-50 text-emerald-950 border-emerald-200',
    quote:
      "The BioGlobal has consistently impressed us every step of the way. They offer unique high-grade skincare products that our retail clients adore. The team communicates well and meets all our bulk production deadlines.",
    rating: 5,
    volume: '50,000+ Units Monthly',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-2"
        >
          <span className="text-xs uppercase tracking-widest text-[#4CA6A8] font-bold block">
            Client Testimonials
          </span>

          <h2 className="font-sans font-light text-4xl sm:text-5xl text-stone-900 tracking-tight">
            Our Customer Says
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Trusted by beauty founders, dermatologists, and retail distributors across India and international markets.
          </p>
        </motion.div>

        {/* Testimonials Cards Grid with Stagger & Spring Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIAL_CARDS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 20px 35px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs transition-all duration-300 flex flex-col justify-between min-h-[380px] group relative"
            >
              <div>
                {/* Brand Logo Box at Top */}
                <div
                  className={`h-24 rounded-xl border flex flex-col items-center justify-center p-3 mb-5 transition-transform group-hover:scale-102 ${item.logoBg}`}
                >
                  <span className="font-serif font-bold text-lg text-center tracking-tight leading-tight">
                    {item.logoName}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-75 mt-0.5">
                    {item.brandTag}
                  </span>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Client Details */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900 leading-tight">{item.founder}</h4>
                  <span className="text-[10px] text-[#708E50] font-semibold">{item.volume}</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#E4EEE3] text-[#708E50] flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
