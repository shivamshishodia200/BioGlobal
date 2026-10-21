import { CategoryInfo } from '../types';
import skincareImg from '../assets/capabilities/skincare.jpg';
import haircareImg from '../assets/capabilities/haircare.jpg';
import soapcareImg from '../assets/capabilities/soapcare.jpg';
import bodycareImg from '../assets/capabilities/bodycare.jpg';
import babycareImg from '../assets/capabilities/babycare.jpg';
import cosmeticsImg from '../assets/capabilities/cosmetics.jpg';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'cosmetic-products',
    name: 'Cosmetic Products',
    slug: 'cosmetic-products',
    tagline: 'High-Performance Color Cosmetics & Hybrid Make-up Formulations',
    description: 'Expertly engineered foundations, primers, setting mists, and color cosmetics with skin-nourishing active ingredients and micro-fine pigments.',
    image: cosmeticsImg,
    itemCount: 12,
    popularFormulations: [
      'Silky Hydrating Primers',
      'Hyaluronic Mineral BB & CC Creams',
      'Long-Wear Setting Mists',
      'Luminous Peptide Foundations'
    ]
  },
  {
    id: 'skin-care',
    name: 'Skin Care',
    slug: 'skin-care',
    tagline: 'Dermatologically Advanced Cosmeceutical Skin Formulations',
    description: 'Targeted serums, barrier moisturizers, gentle botanical cleansers, and clinical-grade SPF sunscreens manufactured under sterile cleanroom protocols.',
    image: skincareImg,
    itemCount: 24,
    popularFormulations: [
      'Niacinamide + Zinc Clarifying Serum',
      'Ceramide Barrier Repair Cream',
      'Multi-Molecular Hyaluronic Acid',
      'Broad Spectrum SPF 50+ Hybrid Sunscreen'
    ]
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    slug: 'hair-care',
    tagline: 'Scalp Health & Hair Fiber Restoration Formulations',
    description: 'Sulfate-free shampoos, keratin smoothing conditioners, peptide hair density serums, and cold-pressed botanical hair oils.',
    image: haircareImg,
    itemCount: 16,
    popularFormulations: [
      'Rosemary & Biotin Scalp Treatment',
      'Sulfate-Free Keratin Infusion Shampoo',
      'Deep Repair Bonding Hair Mask',
      'Anti-Frizz Argan & Marula Serum'
    ]
  },
  {
    id: 'bath-care',
    name: 'Bath Care',
    slug: 'bath-care',
    tagline: 'Sensory Body Cleansers & Hydrotherapy Formulations',
    description: 'Rich lathering botanical shower gels, exfoliating sugar-salt polishes, moisturizing bath milks, and artisanal cold-pressed soap bars.',
    image: soapcareImg,
    itemCount: 10,
    popularFormulations: [
      'Artisanal Lavender & Sea Salt Soaps',
      'Eucalyptus & Green Tea Shower Gel',
      'Hydrating Oat & Honey Bath Milk',
      'Dead Sea Mineral Bath Soak'
    ]
  },
  {
    id: 'body-care',
    name: 'Body Care',
    slug: 'body-care',
    tagline: 'Deep Moisture, Firming & Daily Body Wellness Emulsions',
    description: 'Luxe whipped body butters, skin-firming peptide lotions, rejuvenating AHA body washes, and targeted hand and foot balms.',
    image: bodycareImg,
    itemCount: 14,
    popularFormulations: [
      'Ultra-Rich Shea & Murumuru Butter',
      'Lactic Acid 10% Smoothing Body Emulsion',
      'Fast-Absorbing Botanical Body Lotion',
      'Intensive Ceramide Hand Therapy'
    ]
  },
  {
    id: 'baby-care',
    name: 'Baby Care',
    slug: 'baby-care',
    tagline: 'Pediatrician-Inspired, Hypoallergenic & Ultra-Gentle Formulations',
    description: 'Zero-tear hair & body washes, soothing calendula creams, zinc oxide diaper rash barriers, and organic cold-pressed baby massage oils.',
    image: babycareImg,
    itemCount: 8,
    popularFormulations: [
      'Tear-Free Calendula Wash & Shampoo',
      'Gentle Oatmeal Barrier Baby Lotion',
      'Zinc Oxide 15% Calming Diaper Balm',
      'Nourishing Jojoba & Almond Baby Oil'
    ]
  }
];
