import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { QuoteModalProvider } from './context/QuoteModalContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { QuoteModal } from './components/common/QuoteModal';
import { LegalModal } from './components/common/LegalModals';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { PrivateLabelPage } from './pages/PrivateLabelPage';
import { ThirdPartyPage } from './pages/ThirdPartyPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <QuoteModalProvider>
      <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-stone-800 font-sans selection:bg-[#E4EEE3] selection:text-[#1D3C34]">
        <ScrollToTop />
        <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/category/:categorySlug" element={<CategoryPage />} />
              <Route path="/private-label-manufacturing" element={<PrivateLabelPage />} />
              <Route path="/third-party-manufacturing" element={<ThirdPartyPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer
            onOpenPrivacy={() => setLegalModalType('privacy')}
            onOpenTerms={() => setLegalModalType('terms')}
          />

          <FloatingWhatsApp />
          <QuoteModal />
          <LegalModal
            isOpen={legalModalType !== null}
            type={legalModalType}
            onClose={() => setLegalModalType(null)}
          />
        </div>
      </QuoteModalProvider>
  );
}
