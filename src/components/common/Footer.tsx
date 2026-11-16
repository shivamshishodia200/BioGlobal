import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Phone, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useQuoteModal } from '../../context/QuoteModalContext';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-[#071310] text-stone-300 pt-16 pb-8 border-t border-[#142C25]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#142C25]">
          {/* Col 1: White Logo Box + Description + Socials */}
          <div className="lg:col-span-4 space-y-6">
            {/* White Logo Card */}
            <div className="bg-white rounded-2xl p-4 inline-block shadow-md border border-white/20">
              <BrandLogo size="md" />
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal max-w-sm">
              The BioGlobal is a leading cosmetic products manufacturer. With an expertise of over 20+ years and a legacy of building trust, we provide internationally accredited cosmetic solutions that suit the best for your brand.
            </p>

            {/* Social Icons in 4 Circular Dark Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#112520] text-[#DFBD89] border border-[#254A3E] flex items-center justify-center shadow-xs hover:bg-[#DFBD89] hover:text-[#0B1B17] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#112520] text-[#DFBD89] border border-[#254A3E] flex items-center justify-center shadow-xs hover:bg-[#DFBD89] hover:text-[#0B1B17] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#112520] text-[#DFBD89] border border-[#254A3E] flex items-center justify-center shadow-xs hover:bg-[#DFBD89] hover:text-[#0B1B17] transition-colors font-bold text-xs"
                aria-label="Vimeo"
              >
                v
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#112520] text-[#DFBD89] border border-[#254A3E] flex items-center justify-center shadow-xs hover:bg-[#DFBD89] hover:text-[#0B1B17] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: NAVIGATIONS */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-[#DFBD89]">
              NAVIGATIONS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-normal">
              <li><Link to="/" className="hover:text-white hover:underline transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:underline transition-colors">About Us</Link></li>
              <li><Link to="/third-party-manufacturing" className="hover:text-white hover:underline transition-colors">International Business</Link></li>
              <li><Link to="/products" className="hover:text-white hover:underline transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:underline transition-colors">Contact Us</Link></li>
              <li>
                <button onClick={() => openQuoteModal()} className="hover:underline text-left text-[#DFBD89] font-bold cursor-pointer">
                  Inquiry Now
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: POLICIES */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-[#DFBD89]">
              POLICIES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-normal">
              <li>
                <button onClick={onOpenTerms} className="hover:text-white hover:underline text-left cursor-pointer transition-colors">
                  Disclaimer
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-white hover:underline text-left cursor-pointer transition-colors">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-white hover:underline text-left cursor-pointer transition-colors">
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-white hover:underline text-left cursor-pointer transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT US */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-[#DFBD89]">
              CONTACT US
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-normal">
              <a
                href="tel:+919795000351"
                className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#112520] border border-[#254A3E] flex items-center justify-center text-[#DFBD89] shadow-xs group-hover:bg-[#DFBD89] group-hover:text-[#0B1B17] transition-colors flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">+91 97950 00351</span>
              </a>

              <a
                href="mailto:thebioglobal@gmail.com"
                className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#112520] border border-[#254A3E] flex items-center justify-center text-[#DFBD89] shadow-xs group-hover:bg-[#DFBD89] group-hover:text-[#0B1B17] transition-colors flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium break-all">thebioglobal@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-stone-400 font-normal">
          Copyright 2026 © The BioGlobal | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
