import { QualityCredential } from '../types';

export const QUALITY_CREDENTIALS: QualityCredential[] = [
  {
    id: 'cosmetic-gmp',
    title: 'Cosmetic GMP Practices',
    reference: 'ISO 22716 — Cosmetics Good Manufacturing Practices',
    description:
      'ISO 22716 provides guidelines relating to the production, control, storage, and shipment of cosmetic products. These principles support organized manufacturing activities, appropriate handling practices, and quality-focused cosmetic production systems.',
    shortDescription:
      'Manufacturing processes informed by relevant cosmetic quality and hygiene principles.',
    iconName: 'ShieldCheck',
    credentialType: 'practice',
    verificationStatus: 'documented_practice',
    verificationLabel: 'Documented Operational Practice',
    isVerifiedCertificate: false,
    colorScheme: {
      badgeBg: 'bg-[#E4EEE3]',
      badgeText: 'text-[#1D3C34]',
      borderColor: 'border-[#C5DAC3]',
      iconBg: 'bg-[#1D3C34]/10',
      iconText: 'text-[#1D3C34]',
    },
    keyPractices: [
      'Organized compounding & batching workflows',
      'Controlled environmental monitoring in production zones',
      'End-to-end raw material batch lot traceability',
      'Systematic equipment sanitation and maintenance schedules',
    ],
    scopeNote:
      'Production operations are informed by ISO 22716 cosmetics guidelines. Individual commercial product batches are manufactured under documented quality procedures.',
  },
  {
    id: 'quality-controls',
    title: 'Manufacturing Quality Controls',
    reference: 'Current Good Manufacturing Practice (cGMP)',
    description:
      'Quality-focused manufacturing relies on documented procedures, defined production requirements, appropriate material handling, and applicable product checks. A structured approach helps businesses maintain traceability and consistency across relevant manufacturing operations.',
    shortDescription:
      'Structured production documentation and applicable process-related quality checks.',
    iconName: 'ClipboardCheck',
    credentialType: 'practice',
    verificationStatus: 'documented_practice',
    verificationLabel: 'Documented Operational Practice',
    isVerifiedCertificate: false,
    colorScheme: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-900',
      borderColor: 'border-amber-200',
      iconBg: 'bg-amber-100',
      iconText: 'text-amber-800',
    },
    keyPractices: [
      'Standard Operating Procedures (SOPs) across all lines',
      'In-process checks (pH, viscosity, specific gravity)',
      'Pre-shipment batch retention and physical quality verification',
      'Batch production record (BPR) documentation archiving',
    ],
    scopeNote:
      'Manufacturing controls follow documented procedures to support batch reproducibility, packaging integrity, and product consistency for client brand collections.',
  },
  {
    id: 'responsible-formulations',
    title: 'Responsible Formulation Choices',
    reference: 'Cruelty-Free & Vegan Formulation Options',
    description:
      "We support beauty brands exploring product concepts aligned with their ingredient preferences and responsible formulation goals. Depending on the product brief and available ingredients, formulation development may consider vegan-suitable ingredients and relevant animal-testing requirements.",
    shortDescription:
      "Formulation options aligned with your brand's ingredient and ethical preferences.",
    iconName: 'HeartHandshake',
    credentialType: 'capability',
    verificationStatus: 'capability',
    verificationLabel: 'Product Formulation Capability',
    isVerifiedCertificate: false,
    colorScheme: {
      badgeBg: 'bg-rose-50',
      badgeText: 'text-rose-900',
      borderColor: 'border-rose-200',
      iconBg: 'bg-rose-100',
      iconText: 'text-rose-800',
    },
    keyPractices: [
      'Vegan-compatible raw material sourcing options',
      'Cruelty-free development policies without animal testing',
      'Plant-based alternative proteins, squalane, and emollients',
      'Clear ingredient origin documentation for brand declarations',
    ],
    scopeNote:
      'Cruelty-free and vegan attributes apply to specific client-approved formulations developed upon request and substantiated per regulatory requirements.',
  },
  {
    id: 'botanical-options',
    title: 'Botanical Ingredient Options',
    reference: 'Natural-Inspired & Plant-Derived Formulations',
    description:
      'Explore cosmetic formulation concepts featuring suitable botanical extracts, plant-derived ingredients, and thoughtfully selected raw materials. We work with clients to consider ingredient preferences, formulation compatibility, desired sensory characteristics, and intended product positioning.',
    shortDescription:
      'Botanical and plant-derived ingredient options for tailored beauty products.',
    iconName: 'Leaf',
    credentialType: 'capability',
    verificationStatus: 'capability',
    verificationLabel: 'Product Formulation Capability',
    isVerifiedCertificate: false,
    colorScheme: {
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-900',
      borderColor: 'border-emerald-200',
      iconBg: 'bg-emerald-100',
      iconText: 'text-emerald-800',
    },
    keyPractices: [
      'Standardized herbal and floral botanical extracts',
      'Cold-pressed seed oils and unrefined plant butters',
      'Biodegradable, plant-derived surfactant bases',
      'Natural-origin humectants and multi-functional preservatives',
    ],
    scopeNote:
      'Natural-inspired formulations are formulated with thoughtfully selected plant-derived ingredients according to client briefs and technical suitability.',
  },
];
