import { ProcessStep } from '../types';
import cosmeticFacilityImg from '../assets/capabilities/cosmetic_manufacturing_facility.jpg';

export const MANUFACTURING_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: 'Initial Consultation',
    subtitle: 'Understanding Your Brand Vision & Market Goals',
    description: 'We meet via video conference or at our facility to discuss your target demographic, desired active ingredients, product format, price targets, and launch timelines.',
    timeline: 'Day 1 - 3',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    details: [
      'Define formulation category & aesthetic profile',
      'Establish target packaging specifications & budget',
      'Select Private Label or Bespoke Custom Formulation path'
    ]
  },
  {
    step: 2,
    title: 'Product Concept & Requirements',
    subtitle: 'Technical Brief & Ingredient Architecture',
    description: 'Our R&D scientists draft a formal Product Development Brief outlining proposed active concentrations, carrier bases, preservatives, and required regulatory claim substantiation.',
    timeline: 'Week 1',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    details: [
      'Ingredient feasibility & allergen screening',
      'Compatibility assessment with intended container',
      'Formal quotation & minimum order quantity (MOQ) agreement'
    ]
  },
  {
    step: 3,
    title: 'Formulation & Development',
    subtitle: 'Laboratory Bench Trials & Compounding',
    description: 'In our state-of-the-art laboratory, cosmetic chemists formulate small-batch prototypes optimizing skin-feel, spreadability, fragrance notes, and pH balance.',
    timeline: 'Week 2 - 3',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80',
    details: [
      'Lab-scale emulsification & sensory evaluation',
      'Accelerated preliminary stability testing',
      'Preparation of review-ready lab sample vials'
    ]
  },
  {
    step: 4,
    title: 'Sample Approval & Testing',
    subtitle: 'Client Evaluation & Stability Sign-off',
    description: 'Physical sample sets are delivered to your team for texture, application, and olfactory approval. Once approved, the formula undergoes 3-month accelerated stability & preservative challenge testing.',
    timeline: 'Client Review Window',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    details: [
      'Up to 3 complimentary revision rounds on formulation',
      'Microbial challenge testing (USP 51 equivalent)',
      'Packaging compatibility & leak stress analysis'
    ]
  },
  {
    step: 5,
    title: 'Manufacturing & Quality Checks',
    subtitle: 'Controlled Cleanroom Batch Compounding',
    description: 'Production shifts to our ISO 22716 certified cleanrooms. Industrial homogenizers mix the bulk batch under computerized temperature and vacuum parameters, followed by in-line quality assays.',
    timeline: 'Week 4 - 6',
    image: cosmeticFacilityImg,
    details: [
      'De-aeration and high-shear vacuum homogenization',
      'In-process viscosity, specific gravity & pH checks',
      'Lot microbiology quarantine until release approval'
    ]
  },
  {
    step: 6,
    title: 'Packaging & Dispatch',
    subtitle: 'Automated Filling, Labeling & Global Logistics',
    description: 'The batch is filled in sterile automated lines, capped, batch-coded with laser lot stamps, sealed, boxed, and packed onto stretch-wrapped pallets for secure global shipment.',
    timeline: 'Week 6 - 8',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    details: [
      'High-speed automated piston filling & induction seal',
      'Tamper-evident carton packaging & Barcoding',
      'Final Certificate of Analysis (CoA) & Bill of Lading delivery'
    ]
  }
];
