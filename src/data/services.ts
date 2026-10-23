import { ManufacturingService } from '../types';
import cosmeticFacilityImg from '../assets/capabilities/cosmetic_manufacturing_facility.jpg';

export const MANUFACTURING_SERVICES: ManufacturingService[] = [
  {
    id: 'third-party-manufacturing',
    title: 'Third-Party Cosmetic Manufacturing',
    subtitle: 'End-to-End Contract Production at Scale',
    description: 'We operate state-of-the-art cleanroom manufacturing facilities to manufacture your established proprietary formulas at scale, adhering to strict international quality standards, rigorous stability protocols, and timely delivery schedules.',
    iconName: 'Factory',
    image: cosmeticFacilityImg,
    features: [
      'Industrial-scale vacuum emulsification and compounding',
      'Batch-to-batch consistency with automated PLC controls',
      'Stringent microbiology and heavy metal testing per lot',
      'Flexible run sizes from pilot batches to large industrial runs'
    ],
    deliverables: [
      'Certificate of Analysis (CoA) with every delivery',
      'Cleanroom compounding and certified quality checks',
      'Complete batch manufacturing records (BMR)',
      'Regulatory compliance documentation'
    ]
  },
  {
    id: 'private-label-manufacturing',
    title: 'Private Label Manufacturing',
    subtitle: 'Market-Ready Formulas for Rapid Brand Launch',
    description: 'Select from our library of hundreds of pre-tested, high-efficacy cosmetic and skincare formulations. Customize the fragrance, packaging, and branding to launch your brand into the market in weeks rather than months.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    features: [
      'Turnkey catalog of tested, high-performance formulations',
      'Rapid turnaround with lower minimum order requirements',
      'Fully customizable secondary cartons, labels, and caps',
      'Stability and compatibility pre-verified'
    ],
    deliverables: [
      'Turnkey packaged products ready for retail/ecommerce',
      'Custom branding application & silkscreening',
      'Pre-cleared safety profiles and safety data sheets (SDS)',
      'Barcode and regulatory labeling guidance'
    ]
  },
  {
    id: 'custom-product-formulation',
    title: 'Custom Product Formulation',
    subtitle: 'Bespoke R&D Tailored to Your Brand DNA',
    description: 'Collaborate directly with our master cosmetic chemists to engineer unique, proprietary textures, scents, and active ingredient delivery systems that establish strong market differentiation for your beauty line.',
    iconName: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    features: [
      'Novel bioactive peptides, plant stem cells, and clean botanicals',
      'Proprietary emulsion technologies (gel-creams, bi-phase, serums)',
      'Formulations matching specific clean standards (Sephora Clean, etc.)',
      'Exclusive formulation ownership upon agreement'
    ],
    deliverables: [
      'Custom bench lab trial samples for evaluation',
      'Stability, microbial challenge, and PET testing',
      'Full INCI ingredient deck optimization',
      'Comprehensive technical transfer documentation'
    ]
  },
  {
    id: 'cosmetic-packaging-solutions',
    title: 'Cosmetic Packaging Solutions',
    subtitle: 'Sustainable & Luxury Packaging Sourcing & Design',
    description: 'Elevate your product shelf presence with our curated packaging solutions. From frosted glass droppers and airless vacuum bottles to PCR recycled plastics and luxury hot-stamped cartons, we handle all packaging needs.',
    iconName: 'PackageCheck',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    features: [
      'Airless pump dispensers, droppers, jars, and squeeze tubes',
      'Post-Consumer Recycled (PCR) & Ocean-bound plastic options',
      'Silk-screen printing, hot foil stamping, and UV lacquering',
      'Compatibility testing with your specific formula viscosity'
    ],
    deliverables: [
      'Packaging prototype samples for review',
      'Drop-testing and leakage stress evaluation',
      'High-precision automated filling and crimping',
      'Shrink-wrapping, batch coding, and tamper-evident sealing'
    ]
  },
  {
    id: 'bulk-manufacturing',
    title: 'Bulk Cosmetic Manufacturing',
    subtitle: 'Liquid, Cream & Gel Compounding in Drums & IBCs',
    description: 'Need concentrated bulk emulsions, bases, or bulk liquid fills for your own packaging facility? We compound bulk batches under strict quality conditions and ship in food-grade drums or tote tanks globally.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    features: [
      'Batch sizes ranging from 100 kg to multi-ton capacities',
      'Strict temperature-controlled blending and de-aeration',
      'Pharmaceutical-grade purified water (RO/EDI) filtration systems',
      'Hermetically sealed industrial drums and tote packaging'
    ],
    deliverables: [
      'Bulk drum/tote shipment with tamper seals',
      'Comprehensive lot release assay documents',
      'Viscosity and pH tolerance verification',
      'Export palletization and dangerous goods handling if needed'
    ]
  },
  {
    id: 'skincare-consultation',
    title: 'Skin Care & Product Development Consultation',
    subtitle: 'Strategic Technical Guidance for Beauty Brands',
    description: 'Navigate the complex landscape of cosmetic chemistry, regulatory claims, target audience benchmarks, and cost-of-goods (COGS) optimization with our seasoned cosmetic scientists and business advisors.',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Feasibility analysis and ingredient cost budgeting',
      'Regulatory dossier guidance for international markets',
      'Dermatological benchmark testing and sensory panel reviews',
      'Marketing claim substantiation and clinical trial guidance'
    ],
    deliverables: [
      'Comprehensive product brief and roadmapping',
      'Cost-per-unit breakdown and margin model',
      'Risk assessment and stability protocol plan',
      'Dedicated technical account manager'
    ]
  }
];
