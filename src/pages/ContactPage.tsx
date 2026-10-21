import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';
import { ConsultationForm } from '../components/consultation/ConsultationForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen py-12">
      {/* Header */}
      <div className="bg-[#1D3C34] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#142B25]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBD89] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD89]" />
            <span>Connect With Us</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Contact The BioGlobal
          </h1>

          <p className="text-stone-300 text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Our formulation scientists and commercial account managers are available to assist with your cosmetic manufacturing inquiries, sample requests, and facility visits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#708E50] font-bold">
                Commercial & Facility Inquiries
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1 leading-snug">
                Manufacturing Headquarters & R&D Laboratory
              </h2>
            </div>

            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#1D3C34]" />
                </div>
                <div className="text-xs sm:text-sm text-stone-600 space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">Facility & Offices</h4>
                  <p>The BioGlobal Manufacturing Complex</p>
                  <p>104 Bio-Industrial Parkway, Suite 400</p>
                  <p>Edison, NJ 08837, United States</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#1D3C34]" />
                </div>
                <div className="text-xs sm:text-sm text-stone-600 space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">Telephone Support</h4>
                  <p>Toll-Free B2B: <a href="tel:+18004562464" className="text-[#1D3C34] font-semibold hover:underline">+1 (800) 456-2464</a></p>
                  <p>Direct Lab Desk: <a href="tel:+18004562464" className="text-[#1D3C34] font-semibold hover:underline">+1 (800) 456-BIO-GLBL</a></p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#1D3C34]" />
                </div>
                <div className="text-xs sm:text-sm text-stone-600 space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">Email Inquiries</h4>
                  <p>Quotations & RFPs: <a href="mailto:manufacturing@thebioglobal.com" className="text-[#1D3C34] font-semibold hover:underline">manufacturing@thebioglobal.com</a></p>
                  <p>General Inquiries: <a href="mailto:info@thebioglobal.com" className="text-[#1D3C34] font-semibold hover:underline">info@thebioglobal.com</a></p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4EEE3] text-[#1D3C34] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#1D3C34]" />
                </div>
                <div className="text-xs sm:text-sm text-stone-600 space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">Operating Hours</h4>
                  <p>Monday – Friday: 8:00 AM – 6:00 PM EST</p>
                  <p>Saturday: 9:00 AM – 2:00 PM EST (By appointment)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-stone-200 flex items-center gap-3 text-xs text-stone-600">
              <ShieldCheck className="w-5 h-5 text-[#708E50] flex-shrink-0" />
              <span>Plant visits and technical quality audits available for qualified B2B accounts.</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Send Us a Message
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Have a question or request? Fill out the brief below and our commercial manager will respond within 24 business hours.
              </p>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
};
