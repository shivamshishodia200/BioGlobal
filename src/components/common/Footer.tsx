import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useQuoteModal } from '../../context/QuoteModalContext';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-[#E4EEE3] text-stone-800 pt-16 pb-8 border-t border-[#C5DAC3]/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800/10">
          {/* Col 1: White Logo Box + Description + Socials */}
          <div className="lg:col-span-6 space-y-6">
            {/* White Logo Card from Proveda style */}
            <div className="bg-white rounded-2xl p-4 inline-block shadow-2xs border border-stone-200/80">
              <BrandLogo size="md" />
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal max-w-lg">
              The BioGlobal is a leading cosmetic products manufacturer. With an expertise of over 20+ years and a legacy of building trust, we provide internationally accredited cosmetic solutions that suit the best for your brand.
            </p>

            {/* Social Icons in 4 Circular White Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-stone-800 flex items-center justify-center shadow-2xs hover:bg-[#708E50] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-stone-800 flex items-center justify-center shadow-2xs hover:bg-[#708E50] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-stone-800 flex items-center justify-center shadow-2xs hover:bg-[#708E50] hover:text-white transition-colors font-bold text-xs"
                aria-label="Vimeo"
              >
                v
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-stone-800 flex items-center justify-center shadow-2xs hover:bg-[#708E50] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: NAVIGATIONS */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-medium tracking-[0.25em] text-stone-600">
              NAVIGATIONS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-800 font-normal">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/third-party-manufacturing" className="hover:underline">Solutions</Link></li>
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li>
                <button onClick={() => openQuoteModal()} className="hover:underline text-left text-[#708E50] font-semibold cursor-pointer">
                  Inquiry Now
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: POLICIES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-medium tracking-[0.25em] text-stone-600">
              POLICIES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-800 font-normal">
              <li>
                <button onClick={onOpenTerms} className="hover:underline text-left cursor-pointer">
                  Disclaimer
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:underline text-left cursor-pointer">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:underline text-left cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:underline text-left cursor-pointer">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-stone-700 font-normal">
          Copyright 2026 © The BioGlobal | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
