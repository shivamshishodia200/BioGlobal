import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import heroPackagingImg from '../../assets/herosection_image.png';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  // Root & element refs for GSAP context & parallax
  const heroRef = useRef<HTMLElement>(null);
  const bgGlow1Ref = useRef<HTMLDivElement>(null);
  const bgGlow2Ref = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const bulletsContainerRef = useRef<HTMLDivElement>(null);
  const productWrapperRef = useRef<HTMLDivElement>(null);
  const productInnerRef = useRef<HTMLDivElement>(null);
  const credentialsRef = useRef<HTMLDivElement>(null);

  const bulletPoints = [
    'Flexible Minimum Orders Starting at 1,000 Units',
    'Tailored Formulations for Your Beauty Brand',
    'Complete Manufacturing & Packaging Solutions',
    'Quality-Focused Production & Technical Support',
  ];

  const statCards = [
    { value: '20+ Years', label: 'Manufacturing Expertise' },
    { value: '1,000 Units', label: 'Starting MOQ' },
    { value: '2 Lakh', label: 'Monthly Production Capacity' },
    { value: '5,500 Sq. Ft.', label: 'Manufacturing Facility' },
  ];

  useEffect(() => {
    // Accessibility check: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Immediate display without motion for reduced-motion users
        gsap.set(
          [
            badgeRef.current,
            headingLine1Ref.current,
            headingLine2Ref.current,
            descRef.current,
            ctaContainerRef.current,
            bulletsContainerRef.current?.children,
            productWrapperRef.current,
            credentialsRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotateZ: 0,
            rotateX: 0,
          }
        );
        return;
      }

      // Master Entrance Animation Timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // 1. Background ambient glows reveal (0.6s)
      tl.fromTo(
        [bgGlow1Ref.current, bgGlow2Ref.current],
        { opacity: 0, scale: 0.75 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', stagger: 0.15 }
      );

      // 2. Eyebrow badge slide down & fade
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.5'
      );

      // 3. Cinematic staggered heading reveal (0.85s)
      tl.fromTo(
        [headingLine1Ref.current, headingLine2Ref.current],
        { yPercent: 110, opacity: 0, rotateX: 18 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
        },
        '-=0.3'
      );

      // 4. Description upward fade (0.7s)
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.55'
      );

      // 5. Main Product Collection Entrance (1.2s with subtle rotation & scale settling)
      tl.fromTo(
        productWrapperRef.current,
        { opacity: 0, y: 110, scale: 0.88, rotateZ: -2.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateZ: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=0.85'
      );

      // 6. Integrated credentials card reveal
      tl.fromTo(
        credentialsRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.55'
      );

      // 7. CTA Buttons reveal (0.6s)
      tl.fromTo(
        ctaContainerRef.current,
        { opacity: 0, y: 18, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        '-=0.55'
      );

      // 8. Characteristic Bullet points stagger reveal
      if (bulletsContainerRef.current) {
        tl.fromTo(
          bulletsContainerRef.current.children,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
          '-=0.45'
        );
      }

      // 9. Post-entrance continuous smooth floating oscillations
      gsap.to(productInnerRef.current, {
        y: -10,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.2,
      });

      // Scroll-Based Parallax Effect using ScrollTrigger
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
        onUpdate: (self) => {
          const p = self.progress;
          // Smooth product scale & translation on scroll
          if (productWrapperRef.current) {
            gsap.set(productWrapperRef.current, {
              y: p * 55,
              scale: 1 - p * 0.04,
            });
          }
          // Slight counter-shift on text elements for depth
          if (descRef.current) {
            gsap.set(descRef.current, {
              y: -p * 24,
              opacity: 1 - p * 0.75,
            });
          }
          // Background ambient glows shift
          if (bgGlow1Ref.current) {
            gsap.set(bgGlow1Ref.current, {
              y: p * 80,
            });
          }
        },
      });

      // Desktop-Only Interactive Mouse-Follow Parallax
      const isFinePointer = window.matchMedia(
        '(hover: hover) and (pointer: fine)'
      ).matches;

      if (isFinePointer && heroRef.current && productInnerRef.current) {
        const xTo = gsap.quickTo(productInnerRef.current, 'x', {
          duration: 0.65,
          ease: 'power2.out',
        });
        const yTo = gsap.quickTo(productInnerRef.current, 'y', {
          duration: 0.65,
          ease: 'power2.out',
        });
        const rotXTo = gsap.quickTo(productInnerRef.current, 'rotationX', {
          duration: 0.65,
          ease: 'power2.out',
        });
        const rotYTo = gsap.quickTo(productInnerRef.current, 'rotationY', {
          duration: 0.65,
          ease: 'power2.out',
        });

        const glowXTo = bgGlow1Ref.current
          ? gsap.quickTo(bgGlow1Ref.current, 'x', {
              duration: 0.85,
              ease: 'power2.out',
            })
          : null;
        const glowYTo = bgGlow1Ref.current
          ? gsap.quickTo(bgGlow1Ref.current, 'y', {
              duration: 0.85,
              ease: 'power2.out',
            })
          : null;

        const handleMouseMove = (e: MouseEvent) => {
          if (!heroRef.current) return;
          const rect = heroRef.current.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
          const relY = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

          xTo(relX * 22);
          yTo(relY * 18);
          rotXTo(-relY * 6);
          rotYTo(relX * 8);

          if (glowXTo && glowYTo) {
            glowXTo(-relX * 35);
            glowYTo(-relY * 30);
          }
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
          rotXTo(0);
          rotYTo(0);
          if (glowXTo && glowYTo) {
            glowXTo(0);
            glowYTo(0);
          }
        };

        const heroEl = heroRef.current;
        heroEl.addEventListener('mousemove', handleMouseMove);
        heroEl.addEventListener('mouseleave', handleMouseLeave);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-[#FAF9F5] pt-8 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 border-b border-stone-200/70 overflow-hidden select-none"
    >
      {/* Decorative Ambient Background Soft Glows */}
      <div
        ref={bgGlow1Ref}
        className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#86A55B]/15 rounded-full blur-3xl pointer-events-none -z-0 will-change-transform"
      />
      <div
        ref={bgGlow2Ref}
        className="absolute bottom-10 right-1/4 w-[380px] h-[380px] bg-[#DFBD89]/20 rounded-full blur-3xl pointer-events-none -z-0 will-change-transform"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Description, CTA Buttons, and Value Bullets */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-4">
              {/* Category Eyebrow Pill Badge */}
              <div
                ref={badgeRef}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EEE3] text-[#1D3C34] text-xs font-semibold tracking-wide border border-[#C5DAC3] shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#708E50]" />
                <span>20+ Years of Cosmetic Manufacturing Expertise</span>
              </div>

              {/* Primary Main Heading with GSAP Staggered Line Reveal */}
              <h1 className="font-serif font-light text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-stone-900 leading-[1.14] tracking-tight">
                <span className="block overflow-hidden py-0.5">
                  <span
                    ref={headingLine1Ref}
                    className="block transform-gpu will-change-transform"
                  >
                    Your Beauty Brand Starts With
                  </span>
                </span>
                <span className="block overflow-hidden py-0.5">
                  <span
                    ref={headingLine2Ref}
                    className="block text-[#1D3C34] font-normal transform-gpu will-change-transform"
                  >
                    Better Manufacturing.
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p
                ref={descRef}
                className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl"
              >
                Bring your beauty vision to market with a manufacturing partner
                that understands formulation, quality, packaging, and commercial
                scale. At The BioGlobal, we offer comprehensive third-party
                cosmetic manufacturing and private label solutions across
                skincare, haircare, cosmetics, bath care, body care, and baby
                care. From initial product concepts to finished, market-ready
                formulations, we help beauty brands create distinctive products
                with confidence.
              </p>

              {/* CTA Action Buttons */}
              <div
                ref={ctaContainerRef}
                className="pt-2 flex flex-wrap items-center gap-3.5"
              >
                {/* Primary Button: Explore Our Products */}
                <Link
                  to="/products"
                  className="px-7 py-3.5 rounded-xl bg-[#1D3C34] hover:bg-[#142B25] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl relative overflow-hidden group inline-flex items-center gap-2 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Explore Our Products</span>
                    <ArrowRight className="w-4 h-4 text-[#86A55B] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                </Link>

                {/* Secondary Button: Request a Sample */}
                <button
                  type="button"
                  onClick={() =>
                    openQuoteModal({
                      targetProduct: 'Sample Kit',
                      serviceType: 'Private Label Manufacturing',
                    })
                  }
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm transition-colors border border-stone-300/90 shadow-2xs inline-flex items-center gap-2 cursor-pointer group"
                >
                  <span>Request a Sample</span>
                  <ArrowUpRight className="w-4 h-4 text-[#708E50] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* 4 Characteristic Bullet Points (Structured in a 2x2 Grid) */}
            <div className="pt-4 border-t border-stone-200/60">
              <div
                ref={bulletsContainerRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              >
                {bulletPoints.map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-stone-200/80 text-xs sm:text-[13px] font-medium text-stone-800 transition-colors shadow-2xs hover:border-[#C5DAC3] hover:bg-[#F2F7F0]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#708E50] flex-shrink-0" />
                    <span className="leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Cosmetic Packaging Showcase with Interactive 3D Tilt */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div
              ref={productWrapperRef}
              className="w-full max-w-[580px] relative perspective-[1000px] will-change-transform"
            >
              {/* Luxury Ambient Lighting Glow Halos behind the bottles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-gradient-to-tr from-[#708E50]/20 via-[#DFBD89]/25 to-[#E4EEE3]/40 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute top-10 right-4 w-60 h-60 bg-[#86A55B]/15 rounded-full blur-2xl pointer-events-none -z-10" />

              {/* Inner 3D Container with Mouse Tilt & Sine Wave Float */}
              <div
                ref={productInnerRef}
                className="relative group space-y-3.5 will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Main Hero Skincare Product Bottles PNG with Clinical Grade and MOQ */}
                <div className="relative z-10 flex items-center justify-center pt-2 pb-2">
                  <img
                    src={heroPackagingImg}
                    alt="The BioGlobal Clinical Grade Private Label Cosmetic Packaging Collection - Amber Droppers & Dispensers"
                    className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_24px_38px_rgba(29,60,52,0.18)] transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Integrated Facility Credentials Card */}
                <div
                  ref={credentialsRef}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-stone-200/90 relative z-20 space-y-3"
                >
                  {/* Card Header: Low MOQ pill on left + Request a Sample Button on right */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>
                        Starting MOQ:{' '}
                        <strong className="text-emerald-950 font-bold">
                          1,000 Units
                        </strong>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        openQuoteModal({
                          targetProduct: 'Sample Kit',
                          serviceType: 'Private Label Manufacturing',
                        })
                      }
                      className="px-4 py-2 rounded-xl bg-[#708E50] hover:bg-[#5E7D40] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-md transition-all group/btn"
                    >
                      <span>Request a Sample</span>
                      <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* 4 Stat Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-2 border-t border-stone-100">
                    {statCards.map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-2 sm:p-2.5 rounded-xl bg-[#FAF9F5] border border-stone-200/80 flex flex-col justify-center min-h-[58px]"
                      >
                        <p className="text-[9px] sm:text-[10px] text-stone-500 uppercase font-semibold tracking-wider leading-tight">
                          {stat.label}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-[#1D3C34] mt-1">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
