export interface PartnershipProduct {
  id: string;
  brand: string;
  name: string;
  category: string;
  tagline: string;
  keyActives: string[];
  benefits: string[];
  packagingDescription: string;
  image: string;
  packshotImage: string;
  netQty: string;
  badges: string[];
  colorTheme: {
    accent: string;
    bgPill: string;
    textPill: string;
    border: string;
  };
}

export interface BrandPartnership {
  brandName: string;
  tagline: string;
  partnershipType: string;
  description: string;
  highlights: string[];
  products: PartnershipProduct[];
}

export const COTX_PARTNERSHIP: BrandPartnership = {
  brandName: 'COTX',
  tagline: 'Luxury Skincare',
  partnershipType: 'Turnkey Formulation, Custom Packaging & Private Label Manufacturing',
  description:
    'A complete turnkey skincare product line developed, formulated, and manufactured by The BioGlobal. From custom active formulation (Korean Rice Extract, Suncat DE, Salicylic Acid, Papaya, Alpha Arbutin) to bespoke screen-printed bottles, folding cartons, and cleanroom filling.',
  highlights: [
    'Custom Active Ingredients (Niacinamide, Rice Extract, Alpha Arbutin, Salicylic Acid)',
    'Full Brand Identity: Custom Matching Cartons & Silk-Screen Bottles',
    'Dermatologically Tested, Sulphate-Free & Clean Beauty Formulations',
    'Certified GMP Batch Production & Controlled Cleanroom Filling',
  ],
  products: [
    {
      id: 'cotx-korean-rice-toner',
      brand: 'COTX Luxury Skincare',
      name: 'Korean Rice Face Toner',
      category: 'Face Toner',
      tagline: 'Hydrate. Balance. Glow Naturally.',
      keyActives: ['Rice Extract', 'Niacinamide', 'Hyaluronic Acid'],
      benefits: [
        'Deeply hydrates and refreshes tired, dull skin',
        'Helps even out skin tone and brings natural radiance',
        'Controls excess oil and maintains natural pH balance',
        'Refines pores and strengthens skin barrier',
      ],
      packagingDescription: '100ml Matte Forest Green Cylinder with Frosted Cap & Matching Display Carton',
      image: '/images/bioglobal/partnerships/cotx-korean-rice-toner.webp',
      packshotImage: '/images/bioglobal/partnerships/cotx-korean-rice-packshot.webp',
      netQty: '100ml',
      badges: ['Paraben Free', 'Sulphate Free', 'Dermatologically Tested', 'Cruelty Free', 'Toxin Free'],
      colorTheme: {
        accent: '#1D3C34',
        bgPill: '#E4EEE3',
        textPill: '#1D3C34',
        border: '#C5DAC3',
      },
    },
    {
      id: 'cotx-sun-block-spf50',
      brand: 'COTX Luxury Skincare',
      name: 'Sun Block SPF 50++',
      category: 'Sun Care & Protection',
      tagline: 'Protect. Preserve. Restore.',
      keyActives: ['Suncat DE', 'Rice Starch', 'Broad Spectrum UV Filters'],
      benefits: [
        'Broad-spectrum UVA/UVB high-level defense (SPF 50++)',
        'Non-greasy, ultra-lightweight daily protective emulsion',
        'Rice starch for seamless matte, anti-shine finish',
        'Moisture-locking formula suitable for all skin types',
      ],
      packagingDescription: '100ml Vibrant Warm Sun-Yellow Treatment Pump Dispenser with Coordinated Outer Box',
      image: '/images/bioglobal/partnerships/cotx-sun-block-spf50.webp',
      packshotImage: '/images/bioglobal/partnerships/cotx-sun-block-spf50-packshot.webp',
      netQty: '100ml',
      badges: ['Broad Spectrum SPF 50++', 'Paraben Free', 'Non-Comedogenic', 'Cruelty Free', 'Water Resistant'],
      colorTheme: {
        accent: '#D97706',
        bgPill: '#FEF3C7',
        textPill: '#92400E',
        border: '#FDE68A',
      },
    },
    {
      id: 'cotx-cherry-blossom-facewash',
      brand: 'COTX Luxury Skincare',
      name: 'Japanese Cherry Blossom Face Wash',
      category: 'Facial Cleanser',
      tagline: 'Illuminating & Radiant Glow Face Wash',
      keyActives: ['Prunus Serrulata (Cherry Blossom) Extract', 'Alpha Arbutin', 'Botanical Cleansers'],
      benefits: [
        'Delivers an illuminating, gentle glow while purifying impurities',
        'Enriched with Prunus Serrulata extract for antioxidant defense',
        'Alpha Arbutin helps reduce dark spots and even skin tone',
        'Luxurious floral sensory aroma with pH-balanced mild lather',
      ],
      packagingDescription: '100ml Elegant Minimalist White Presentation Box with Floral Botanical Embossing',
      image: '/images/bioglobal/partnerships/cotx-cherry-blossom-facewash.webp',
      packshotImage: '/images/bioglobal/partnerships/cotx-cherry-blossom-packshot.webp',
      netQty: '100ml (3.38 fl. oz.)',
      badges: ['Alpha Arbutin Infused', 'Sulphate Free', 'Gentle Formula', 'Cruelty Free', 'Radiance Boosting'],
      colorTheme: {
        accent: '#BE185D',
        bgPill: '#FCE7F3',
        textPill: '#9D174D',
        border: '#FBCFE8',
      },
    },
    {
      id: 'cotx-acne-oil-control-facewash',
      brand: 'COTX Luxury Skincare',
      name: 'Acne & Oil Control Face Wash Gel',
      category: 'Targeted Facial Cleanser',
      tagline: 'Deep Cleanse. Control Oil. Clear Skin.',
      keyActives: ['Salicylic Acid (BHA)', 'Niacinamide', 'Vitamin C'],
      benefits: [
        'Salicylic Acid penetrates deep into pores to remove dirt, oil & impurities',
        'Niacinamide regulates sebum production and prevents unwanted shine',
        'Helps calm active breakouts and prevents future blemishes',
        'Soothes inflammation while reinforcing healthy skin barrier',
      ],
      packagingDescription: '100ml Deep Emerald Green Presentation Carton with Modern Facial Line Art',
      image: '/images/bioglobal/partnerships/cotx-acne-oil-control-facewash.webp',
      packshotImage: '/images/bioglobal/partnerships/cotx-acne-facewash-packshot.webp',
      netQty: '100ml',
      badges: ['Salicylic Acid BHA', 'Paraben Free', 'Sulphate Free', 'Dermatologically Tested', 'Cruelty Free'],
      colorTheme: {
        accent: '#047857',
        bgPill: '#D1FAE5',
        textPill: '#065F46',
        border: '#A7F3D0',
      },
    },
    {
      id: 'cotx-papaya-brightening-facewash',
      brand: 'COTX Luxury Skincare',
      name: 'Skin Brightening Papaya Facewash',
      category: 'Exfoliating Facial Cleanser',
      tagline: 'Bright Skin. Healthy Glow. Naturally.',
      keyActives: ['Natural Papaya Extract', 'Niacinamide', 'Vitamin C'],
      benefits: [
        'Natural papaya enzymes gently eliminate dull dead surface skin cells',
        'Vitamin C and Niacinamide synergize to enhance natural luminosity',
        'Gently cleanses excess oil without stripping natural moisture',
        'Helps reduce blemishes and leaves skin radiant throughout the day',
      ],
      packagingDescription: '100ml Amber-Orange Pump Bottle with Coordinated Citrus-Gold Display Box',
      image: '/images/bioglobal/partnerships/cotx-papaya-brightening-facewash.webp',
      packshotImage: '/images/bioglobal/partnerships/cotx-papaya-facewash-packshot.webp',
      netQty: '100ml',
      badges: ['Papaya Enzyme', 'Vitamin C', 'Paraben Free', 'Sulphate Free', 'Suitable for All Skin Types'],
      colorTheme: {
        accent: '#EA580C',
        bgPill: '#FFEDD5',
        textPill: '#9A3412',
        border: '#FED7AA',
      },
    },
  ],
};
