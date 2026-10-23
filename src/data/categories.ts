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
    tagline: 'Color Cosmetics That Bring Your Brand Vision to Life',
    headline: 'Color Cosmetics That Bring Your Brand Vision to Life',
    description:
      "Create makeup collections that combine appealing textures, beautiful finishes, and customizable product concepts. Our cosmetic manufacturing capabilities support foundations, primers, setting sprays, BB creams, and other color cosmetic essentials designed around your brand's identity and target market.",
    shortDescription:
      'Develop distinctive makeup collections with customizable color cosmetic formulations.',
    image: cosmeticsImg,
    imageAlt: 'Color cosmetic products and makeup manufacturing category',
    itemCount: 12,
    popularFormulations: [
      'Liquid Foundations',
      'Makeup Primers',
      'BB & CC Creams',
      'Setting Sprays',
    ],
    productExamples: [
      'Liquid Foundations',
      'Makeup Primers',
      'BB & CC Creams',
      'Setting Sprays',
      'Compact Powders',
      'Lip Products',
    ],
    ctaText: 'Explore Cosmetic Products',
    isPublished: true,
  },
  {
    id: 'skin-care',
    name: 'Skin Care',
    slug: 'skin-care',
    tagline: 'Science-Inspired Skincare for Modern Beauty Brands',
    headline: 'Science-Inspired Skincare for Modern Beauty Brands',
    description:
      "Build skincare collections designed around evolving consumer preferences and carefully considered cosmetic ingredients. Our skincare manufacturing solutions support facial serums, cleansers, moisturizers, creams, and other product concepts, with customization options aligned with your brand's requirements.",
    shortDescription:
      'Explore innovative serums, cleansers, moisturizers, and tailored skincare solutions.',
    image: skincareImg,
    imageAlt: 'Skincare serums and moisturizing cosmetic products',
    itemCount: 24,
    popularFormulations: [
      'Vitamin C Serum',
      'Hyaluronic Acid Serum',
      'Ceramide Barrier Cream',
      'Facial Cleanser',
    ],
    productExamples: [
      'Vitamin C Serum',
      'Hyaluronic Acid Serum',
      'Facial Cleanser',
      'Moisturizing Cream',
      'Ceramide Barrier Cream',
      'Sunscreen Formulations',
    ],
    ctaText: 'Explore Skin Care Products',
    isPublished: true,
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    slug: 'hair-care',
    tagline: 'Innovative Hair & Scalp Care Manufacturing Solutions',
    headline: 'Innovative Hair & Scalp Care Manufacturing Solutions',
    description:
      'Develop comprehensive hair care collections tailored to different product needs and consumer preferences. From everyday cleansing products to conditioning masks and scalp serums, we help brands explore formulation options, ingredient combinations, and packaging choices suitable for their intended markets.',
    shortDescription:
      'Create shampoos, conditioners, masks, and scalp care products for modern hair care brands.',
    image: haircareImg,
    imageAlt: 'Haircare shampoo and conditioner product collection',
    itemCount: 16,
    popularFormulations: [
      'Sulfate-Free Shampoo',
      'Hair Conditioner',
      'Hair Repair Mask',
      'Scalp Serum',
    ],
    productExamples: [
      'Sulfate-Free Shampoo',
      'Hair Conditioner',
      'Hair Repair Mask',
      'Scalp Serum',
      'Hair Oil',
      'Hair Styling Products',
    ],
    ctaText: 'Explore Hair Care Products',
    isPublished: true,
  },
  {
    id: 'bath-care',
    name: 'Bath Care',
    slug: 'bath-care',
    tagline: 'Elevated Bath & Cleansing Products for Everyday Wellness',
    headline: 'Elevated Bath & Cleansing Products for Everyday Wellness',
    description:
      'Transform daily bathing routines into appealing personal care experiences with thoughtfully developed cleansing formulations. Our bath care capabilities support bathing soaps, botanical cleansing bars, body washes, and exfoliating products with suitable options for ingredients, fragrance, texture, and packaging.',
    shortDescription:
      'Explore cleansing bars, moisturizing body washes, soaps, and refreshing bath essentials.',
    image: soapcareImg,
    imageAlt: 'Bath care soaps and cleansing product range',
    itemCount: 10,
    popularFormulations: [
      'Glycerin Soap',
      'Botanical Soap',
      'Bathing Bars',
      'Body Wash',
    ],
    productExamples: [
      'Glycerin Soap',
      'Botanical Soap',
      'Bathing Bars',
      'Body Wash',
      'Bath Scrub',
      'Liquid Hand Wash',
    ],
    ctaText: 'Explore Bath Care Products',
    isPublished: true,
  },
  {
    id: 'body-care',
    name: 'Body Care',
    slug: 'body-care',
    tagline: 'Nourishing Body Care Formulations for Growing Brands',
    headline: 'Nourishing Body Care Formulations for Growing Brands',
    description:
      'Expand your personal care portfolio with body care formulations designed for everyday use and distinctive sensory appeal. Our solutions cover moisturizing lotions, creams, nourishing body butters, exfoliating scrubs, and other products tailored to your brand positioning, texture preferences, and packaging requirements.',
    shortDescription:
      'Develop body lotions, nourishing creams, butters, and exfoliating care collections.',
    image: bodycareImg,
    imageAlt: 'Body lotion, cream, and moisturizing care products',
    itemCount: 14,
    popularFormulations: [
      'Body Lotion',
      'Body Butter',
      'Body Scrub',
      'Hand Cream',
    ],
    productExamples: [
      'Body Lotion',
      'Body Butter',
      'Body Scrub',
      'Hand Cream',
      'Body Moisturizer',
      'Body Gel',
    ],
    ctaText: 'Explore Body Care Products',
    isPublished: true,
  },
  {
    id: 'baby-care',
    name: 'Baby Care',
    slug: 'baby-care',
    tagline: 'Thoughtfully Developed Baby & Infant Care Products',
    headline: 'Thoughtfully Developed Baby & Infant Care Products',
    description:
      'Explore gentle personal care product concepts designed for baby and infant care ranges. Our manufacturing solutions can support mild shampoos, baby body washes, moisturizing lotions, and massage oils, with ingredient selection and product development guided by intended use and applicable safety requirements.',
    shortDescription:
      'Explore mild cleansing, moisturizing, and personal care concepts for baby care collections.',
    image: babycareImg,
    imageAlt: 'Baby personal care shampoo and lotion products',
    itemCount: 8,
    popularFormulations: [
      'Mild Baby Shampoo',
      'Baby Body Wash',
      'Baby Lotion',
      'Baby Massage Oil',
    ],
    productExamples: [
      'Mild Baby Shampoo',
      'Baby Body Wash',
      'Baby Lotion',
      'Baby Massage Oil',
      'Baby Moisturizing Cream',
      'Baby Cleansing Products',
    ],
    ctaText: 'Explore Baby Care Products',
    isPublished: true,
  },
];
