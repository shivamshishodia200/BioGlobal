import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustedCompaniesSection } from '../components/home/TrustedCompaniesSection';
import { AboutSection } from '../components/home/AboutSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { BenefitsSection } from '../components/home/BenefitsSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { CategoryBannerSection } from '../components/home/CategoryBannerSection';
import { UniqueFeaturesSection } from '../components/home/UniqueFeaturesSection';
import { ManufacturingProcess } from '../components/home/ManufacturingProcess';
import { BatchEstimatorSection } from '../components/home/BatchEstimatorSection';
import { CategoriesShowcase } from '../components/home/CategoriesShowcase';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { ConsultationSection } from '../components/home/ConsultationSection';
import { CertificationsSection } from '../components/home/CertificationsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FaqSection } from '../components/home/FaqSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-white selection:bg-[#708E50] selection:text-white">
      {/* 1. Hero Section (Multi-Slide Carousel + 3D Floating Cosmetic Mockup) */}
      <HeroSection />

      {/* 2. Trusted by thousands of companies around the world (Smooth Marquee) */}
      <TrustedCompaniesSection />

      {/* 3. Our Story & You name it we make it (Interactive Category Formulation Switcher) */}
      <AboutSection />

      {/* 4. Why us? With 6 White Stat Cards on Harmonious Botanical Sage Background */}
      <WhyChooseSection />

      {/* 5. Benefits from partnering with us (4 White Cards on Sage Background) */}
      <BenefitsSection />

      {/* 6. Personalized Solutions Just for You (Asymmetric Bento Grid Cards) */}
      <ServicesSection />

      {/* 7. Transform Your Business with Innovative Solutions (Staggered Photo Cards) */}
      <CategoryBannerSection />

      {/* 8. What Makes Us Unique from Others in the Industry (Central Lab with Pulsing Radar) */}
      <UniqueFeaturesSection />

      {/* 9. Our 6-Step Manufacturing Process (Spec-To-Product Interactive Stepper) */}
      <ManufacturingProcess />

      {/* 10. Interactive B2B Batch & Quotation Calculator */}
      <BatchEstimatorSection />

      {/* 11. Primary Product Categories Showcase (All 6 Primary Categories) */}
      <CategoriesShowcase />

      {/* 12. Featured Products Formulations with View Details & Direct Inquiry */}
      <FeaturedProductsSection />

      {/* 13. Consultation Briefing Form (Let's Build Your Next Beauty Product Together) */}
      <ConsultationSection />

      {/* 14. Certifications Circular Stamp Seals with Rotating Rings & Modal */}
      <CertificationsSection />

      {/* 15. Testimonials: Our Customer Says */}
      <TestimonialsSection />

      {/* 16. Frequently Asked Questions (Framer Motion Animated Accordion) */}
      <FaqSection />
    </div>
  );
};
