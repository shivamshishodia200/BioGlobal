import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight,
  Award
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CATEGORIES } from '../../data/categories';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };


  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D3C34] via-[#708E50] to-[#86A55B] z-[60] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* 1. Professional Top Information Bar */}
      <div className="bg-[#142B25] text-white/90 text-xs py-2 px-4 sm:px-6 lg:px-12 hidden md:block border-b border-emerald-950/40 select-none">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left Details */}
          <div className="flex items-center gap-6 text-[11px] tracking-wide">
            <a
              href="tel:+919795000351"
              className="flex items-center gap-1.5 hover:text-[#86A55B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#86A55B]" />
              <span>+91 97950 00351</span>
            </a>

            <a
              href="mailto:thebioglobal@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#86A55B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#86A55B]" />
              <span>thebioglobal@gmail.com</span>
            </a>

            <div className="hidden xl:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#86A55B]" />
              <span>Mon - Sat: 9:00 AM - 6:30 PM (IST)</span>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="flex items-center gap-5 text-[11px]">
            <div className="flex items-center gap-1.5 text-[#86A55B] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>WHO-GMP & ISO 9001:2015 Certified Lab</span>
            </div>
            <span className="text-stone-500">|</span>
            <div className="flex items-center gap-1 text-amber-300 font-medium">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>20+ Years Manufacturing Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Responsive Navigation */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          isScrolled
            ? 'shadow-md py-2.5 border-b border-stone-200'
            : 'border-b border-stone-200/80 py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* Left: Brand Logo */}
          <div className="flex items-center pr-6">
            <BrandLogo />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/"
              className={`text-sm font-medium tracking-tight transition-all relative py-1 hover:text-[#708E50] ${
                isActive('/') ? 'text-[#1D3C34] font-semibold' : 'text-stone-700'
              }`}
            >
              <span>Home</span>
              {isActive('/') && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#708E50] rounded-full"
                />
              )}
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium tracking-tight transition-all relative py-1 hover:text-[#708E50] ${
                isActive('/about') ? 'text-[#1D3C34] font-semibold' : 'text-stone-700'
              }`}
            >
              <span>About Us</span>
              {isActive('/about') && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#708E50] rounded-full"
                />
              )}
            </Link>

            <Link
              to="/private-label-manufacturing"
              className={`text-sm font-medium tracking-tight transition-all relative py-1 hover:text-[#708E50] ${
                isActive('/private-label-manufacturing') ? 'text-[#1D3C34] font-semibold' : 'text-stone-700'
              }`}
            >
              <span>Private Label</span>
              {isActive('/private-label-manufacturing') && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#708E50] rounded-full"
                />
              )}
            </Link>

            <Link
              to="/third-party-manufacturing"
              className={`text-sm font-medium tracking-tight transition-all relative py-1 hover:text-[#708E50] ${
                isActive('/third-party-manufacturing') ? 'text-[#1D3C34] font-semibold' : 'text-stone-700'
              }`}
            >
              <span>International Business</span>
              {isActive('/third-party-manufacturing') && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#708E50] rounded-full"
                />
              )}
            </Link>

            {/* Products Dropdown with Visual Icons */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 text-sm font-medium tracking-tight transition-all py-1 hover:text-[#708E50] focus:outline-none ${
                  isActive('/products') || isActive('/category')
                    ? 'text-[#1D3C34] font-semibold'
                    : 'text-stone-700'
                }`}
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? 'rotate-180 text-[#708E50]' : 'text-stone-500'
                  }`}
                />
              </button>

              {productsDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-xl shadow-2xl border border-stone-200/90 p-2 overflow-hidden"
                  >
                    <Link
                      to="/products"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-bold text-[#1D3C34] bg-stone-50 hover:bg-[#E4EEE3] transition-colors mb-1.5"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      <span>Explore All Products</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#708E50]" />
                    </Link>

                    <div className="space-y-0.5">
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/category/${cat.slug}`}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-stone-700 hover:text-[#1D3C34] hover:bg-[#FAF9F5] transition-colors group"
                          onClick={() => setProductsDropdownOpen(false)}
                        >
                          <span className="font-normal group-hover:translate-x-1 transition-transform">
                            {cat.name}
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono">
                            {cat.itemCount}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </div>

            <Link
              to="/consultation"
              className={`text-sm font-medium tracking-tight transition-all relative py-1 hover:text-[#708E50] ${
                isActive('/consultation') ? 'text-[#1D3C34] font-semibold' : 'text-stone-700'
              }`}
            >
              <span>Consultation</span>
              {isActive('/consultation') && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#708E50] rounded-full"
                />
              )}
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium tracking-tight transition-all relative py-1 hover:text-[#708E50] ${
                isActive('/contact') ? 'text-[#1D3C34] font-semibold' : 'text-stone-700'
              }`}
            >
              <span>Contact Us</span>
              {isActive('/contact') && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#708E50] rounded-full"
                />
              )}
            </Link>
          </nav>
          {/* Right Actions: Animated Inquiry Button */}
          <div className="flex items-center gap-3">

            {/* Inquiry Now Button in Logo Leaf Green (#708E50) */}
            <motion.button
              onClick={() => openQuoteModal()}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(112, 142, 80, 0.45)' }}
              whileTap={{ scale: 0.96 }}
              className="relative px-5 py-2.5 rounded-lg bg-[#708E50] hover:bg-[#5F7A43] text-white text-sm font-semibold transition-all shadow-2xs whitespace-nowrap overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Inquiry Now</span>
              {/* Shimmer Light Sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-stone-200 px-6 py-5 space-y-3.5 shadow-xl"
          >
            <div className="flex flex-col space-y-2.5">
              <Link
                to="/"
                className="py-1.5 text-sm text-stone-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="py-1.5 text-sm text-stone-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/private-label-manufacturing"
                className="py-1.5 text-sm text-stone-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Private Label Manufacturing
              </Link>
              <Link
                to="/third-party-manufacturing"
                className="py-1.5 text-sm text-stone-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                International Business
              </Link>
              <Link
                to="/consultation"
                className="py-1.5 text-sm text-stone-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skin Care Consultation
              </Link>
            </div>

            <div className="py-3 border-y border-stone-100">
              <span className="text-[11px] uppercase font-bold text-stone-400 tracking-wider">
                Product Categories
              </span>
              <div className="grid grid-cols-2 gap-2 mt-2.5">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className="text-xs text-stone-700 py-1 hover:text-[#708E50]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="block py-1.5 text-sm text-stone-800 font-medium hover:text-[#708E50]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 rounded-lg bg-[#708E50] hover:bg-[#5E7D40] text-white text-sm font-semibold text-center cursor-pointer shadow-xs transition-colors"
              >
                Get a Quote / Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
