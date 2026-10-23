import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  User,
  Star,
  CheckCircle2
} from 'lucide-react';
import { ClientTestimonial } from '../../types';
import { fetchPublishedTestimonials } from '../../services/testimonialsApi';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ClientTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Load verified testimonials
  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const data = await fetchPublishedTestimonials();
        if (mounted) {
          setTestimonials(data);
        }
      } catch (err) {
        console.error('Error loading testimonials:', err);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const total = testimonials.length;

  const nextSlide = useCallback(() => {
    if (total > 1) {
      setCurrentIndex((prev) => (prev + 1) % total);
    }
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total > 1) {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    }
  }, [total]);

  // Autoplay with hover pause if multiple testimonials exist
  useEffect(() => {
    if (total <= 1 || isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [total, isPaused, nextSlide]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };



  return (
    <section 
      id="testimonials-section" 
      className="py-12 sm:py-14 lg:py-16 bg-[#FAF9F5] border-b border-stone-200/60 overflow-hidden relative"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Ambient Accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#86A55B]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#DFBD89]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-6 sm:space-y-8">
        {/* Section Header (Part 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-left w-full space-y-2.5 sm:space-y-3"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold uppercase tracking-wider border border-[#C5DAC3] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
            <span>BUILT ON TRUST & COLLABORATION</span>
          </div>

          {/* Main Heading H2 */}
          <h2 
            id="testimonials-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[40px] text-stone-900 leading-tight tracking-tight"
          >
            Meaningful Partnerships. Shared Success.
          </h2>

          {/* Supporting Tagline */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#708E50]">
            Your Vision. Our Commitment. A Partnership Built to Grow.
          </p>

          {/* Section Description */}
          <p className="text-stone-600 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-5xl lg:max-w-6xl">
            At The BioGlobal, strong manufacturing partnerships are built on transparent communication, dependable support, and verified product quality. We empower beauty brands with collaborative formulation guidance, turnkey filling, and reliable production.
          </p>
        </motion.div>

        {/* CASE A: Verified Testimonials Carousel (Part 6) */}
        {!loading && testimonials.length > 0 && (
          <div 
            className="max-w-4xl mx-auto relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden relative min-h-[340px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl relative"
                >
                  <Quote className="w-12 h-12 text-[#E4EEE3] absolute top-6 right-8 pointer-events-none" />

                  {/* Service Category Badge */}
                  {testimonials[currentIndex].serviceCategory && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-[11px] font-semibold border border-[#C5DAC3]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#708E50]" />
                      <span>{testimonials[currentIndex].serviceCategory}</span>
                    </div>
                  )}

                  {/* Rating if provided */}
                  {testimonials[currentIndex].rating !== undefined && testimonials[currentIndex].rating > 0 && (
                    <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${testimonials[currentIndex].rating} out of 5 stars`}>
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  )}

                  {/* Quote Body */}
                  <blockquote className="font-serif text-lg sm:text-xl text-stone-800 leading-relaxed italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Client Identification */}
                  <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                    <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold text-sm shrink-0 border border-stone-200">
                      {testimonials[currentIndex].clientPhoto ? (
                        <img 
                          src={testimonials[currentIndex].clientPhoto} 
                          alt={testimonials[currentIndex].clientName}
                          className="w-full h-full object-cover rounded-full" 
                        />
                      ) : (
                        <User className="w-6 h-6 text-stone-400" />
                      )}
                    </div>
                    <div>
                      <div className="font-sans font-bold text-base text-stone-900 leading-snug">
                        {testimonials[currentIndex].clientName}
                      </div>
                      <div className="text-xs text-stone-500 font-light mt-0.5">
                        {testimonials[currentIndex].clientRole || testimonials[currentIndex].designation}
                        {testimonials[currentIndex].companyName && ` • ${testimonials[currentIndex].companyName}`}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            {total > 1 && (
              <div className="flex items-center justify-between mt-6 px-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                    className="p-2.5 rounded-full bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 transition-colors cursor-pointer shadow-2xs focus:ring-2 focus:ring-[#708E50]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                    className="p-2.5 rounded-full bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 transition-colors cursor-pointer shadow-2xs focus:ring-2 focus:ring-[#708E50]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonial slides">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={currentIndex === idx}
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-6 bg-[#1D3C34]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CASE B: Professional Trust Fallback (Part 4) */}
        {!loading && testimonials.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl text-center space-y-6 relative overflow-hidden"
          >
            {/* Subtle Accent Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E4EEE3]/60 rounded-full blur-2xl pointer-events-none" />

            <div className="w-14 h-14 rounded-2xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center mx-auto shadow-2xs">
              <CheckCircle2 className="w-7 h-7 text-[#708E50]" />
            </div>

            <div className="space-y-3 relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900 leading-tight">
                Your Experience Matters to Us
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
                We value feedback from the businesses we work with. Genuine client experiences help prospective partners understand our approach to communication, formulation development, and manufacturing support.
              </p>
              <p className="text-xs sm:text-sm text-[#708E50] font-semibold tracking-wider uppercase pt-1">
                Building Trust Through Every Manufacturing Partnership.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm shadow-md transition-all group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 text-[#DFBD89] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}


      </div>
    </section>
  );
};
