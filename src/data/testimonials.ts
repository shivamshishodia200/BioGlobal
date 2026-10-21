import { TestimonialItem } from '../types';

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Elena Rostova',
    designation: 'Founder & Product Director',
    brandName: 'Lumina Derma Labs',
    quote: 'The BioGlobal turned our vision for a clinical peptide serum line into reality. Their cosmetic chemists understood our exact texture and stability requirements, delivering pilot batches on time with flawless documentation.',
    productType: 'Anti-Aging Serums & Barrier Creams',
    location: 'United States',
    rating: 5
  },
  {
    id: 'test-2',
    clientName: 'Marcus Sterling',
    designation: 'Head of Brand Development',
    brandName: 'Aura Botanica Grooming',
    quote: 'Finding a contract manufacturer willing to work with high-grade cold-pressed rosemary oil and sulfate-free surfactants was tough until we partnered with The BioGlobal. Our hair care line launched to rave customer reviews.',
    productType: 'Premium Hair Care & Scalp Elixirs',
    location: 'United Kingdom',
    rating: 5
  },
  {
    id: 'test-3',
    clientName: 'Dr. Sarah Lin, MD',
    designation: 'Chief Dermatologist & Founder',
    brandName: 'Verdant Clinical Skincare',
    quote: 'As a dermatologist, I require absolute transparency regarding active percentages and sterile cleanroom compounding. The BioGlobal’s quality assurance, CoA testing, and regulatory dossiers gave me complete peace of mind.',
    productType: 'Hypoallergenic Sunscreen & Cleansers',
    location: 'Canada',
    rating: 5
  },
  {
    id: 'test-4',
    clientName: 'Priya Mehta',
    designation: 'Managing Director',
    brandName: 'PureNurture Baby Care',
    quote: 'Launching an ultra-mild, pediatrician-grade infant skincare brand requires exacting standards. The BioGlobal guided us through safety testing, zero-tear testing, and eco-friendly packaging seamlessly.',
    productType: 'Organic Baby Wash & Diaper Balms',
    location: 'Singapore',
    rating: 5
  }
];

export const CLIENT_PARTNER_LOGOS = [
  { name: 'AURA BOTANICA', category: 'Hair Wellness' },
  { name: 'LUMINA DERMA', category: 'Clinical Cosmeceuticals' },
  { name: 'VERDANT CLINIQUE', category: 'Dermatological Care' },
  { name: 'PURENURTURE', category: 'Organic Baby Care' },
  { name: 'NOVA AESTHETICS', category: 'Salon & Spa Professional' },
  { name: 'SOLARIS SHIELD', category: 'Suncare Innovations' }
];
