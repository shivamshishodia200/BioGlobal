import { ManufacturingService } from '../types';

export const MANUFACTURING_SERVICES: ManufacturingService[] = [
  {
    id: 'third-party-manufacturing',
    title: 'Third-Party Cosmetic Manufacturing',
    subtitle: 'Reliable Contract Production for Growing Beauty Brands',
    description:
      'Turn your approved product concepts and formulations into finished cosmetic products with dependable contract manufacturing support. The BioGlobal offers third-party manufacturing solutions designed around your product specifications, target production volumes, packaging requirements, and brand objectives. Our coordinated approach supports batch production, quality-related checks, filling, and packaging activities, helping brands maintain consistency while focusing on marketing, distribution, and business growth.',
    badge: 'CONTRACT MANUFACTURING',
    valueProposition: 'Your Formulation. Our Manufacturing Capabilities.',
    features: [
      'Manufacturing Based on Approved Product Specifications',
      'Batch Production & Process Coordination',
      'Quality Checks & Production Documentation',
      'Filling, Packaging & Labeling Support',
    ],
    image: '/images/bioglobal/services/service-third-party-manufacturing.webp',
    imageAlt: 'Cosmetic contract manufacturing and production process',
    ctaText: 'Explore Third-Party Manufacturing',
    ctaLink: '/third-party-manufacturing',
    iconName: 'Factory',
  },
  {
    id: 'private-label-manufacturing',
    title: 'Private Label Manufacturing',
    subtitle: 'Launch Your Beauty Brand With Confidence',
    description:
      'Build a distinctive beauty product collection without developing every formulation from the beginning. Our private label manufacturing solutions help emerging and established businesses select suitable cosmetic and personal care formulations and explore customization options that reflect their brand identity. From product selection and fragrance preferences to packaging, labeling, and production coordination, The BioGlobal supports the process of transforming your brand concept into a finished product range.',
    badge: 'PRIVATE LABEL SOLUTIONS',
    valueProposition: 'Your Brand Identity. Our Manufacturing Support.',
    features: [
      'Selection of Available Cosmetic Formulations',
      'Brand-Specific Product Customization',
      'Packaging, Labeling & Presentation Support',
      'Flexible Order Quantities for Eligible Products',
    ],
    image: '/images/bioglobal/services/service-private-label.webp',
    imageAlt: 'Private label skincare and cosmetic packaging collection',
    ctaText: 'Explore Private Label Solutions',
    ctaLink: '/private-label-manufacturing',
    iconName: 'Sparkles',
  },
  {
    id: 'custom-formulation-rd',
    title: 'Custom Formulation & R&D',
    subtitle: 'Unique Formulations Inspired by Your Brand Vision',
    description:
      "Create cosmetic and personal care products tailored to your brand's unique requirements. Our custom formulation and research support helps businesses explore ingredient combinations, textures, fragrance profiles, product performance goals, and formulation concepts aligned with their intended market. Through collaborative development, prototype refinement, and appropriate evaluation processes, we help brands work toward distinctive formulations that complement their product strategy and customer expectations.",
    badge: 'CUSTOM R&D SOLUTIONS',
    valueProposition: 'Your Product Idea. A Distinctive Formulation Journey.',
    features: [
      'New Cosmetic Product Concept Development',
      'Ingredient Selection & Formulation Customization',
      'Prototype Sampling & Refinement',
      'Formulation Evaluation & Technical Guidance',
    ],
    image: '/images/bioglobal/services/service-custom-rd.webp',
    imageAlt: 'Cosmetic formulation and product development laboratory',
    ctaText: 'Discuss Custom Formulation',
    ctaLink: '/consultation',
    iconName: 'FlaskConical',
  },
];
