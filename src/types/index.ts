export type ProductCategory = 
  | 'Cosmetic Products'
  | 'Skin Care'
  | 'Hair Care'
  | 'Bath Care'
  | 'Body Care'
  | 'Baby Care';

export interface CategoryInfo {
  id: string;
  name: ProductCategory;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
  popularFormulations: string[];
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categorySlug: string;
  tagline: string;
  description: string;
  image: string;
  keyActives: string[];
  benefits: string[];
  idealFor: string;
  minOrderQuantity: string;
  leadTime: string;
  packagingOptions: string[];
  certifications: string[];
  shelfLife: string;
  isFeatured?: boolean;
}

export interface ManufacturingService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  features: string[];
  valueProposition: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
  iconName?: string;
  deliverables?: string[];
}

export interface ProcessStep {
  step: number;
  id?: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  description: string;
  timeline: string;
  details: string[];
  activities?: string[];
  output?: string;
  image?: string;
  imageCaption?: string;
  iconName?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Manufacturing' | 'Formulation' | 'Ordering';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  designation: string;
  brandName: string;
  quote: string;
  productType: string;
  location: string;
  rating: number;
}

export interface B2BInquiryPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productCategory: string;
  quantityRange: string;
  serviceType: string;
  message: string;
  targetProduct?: string;
}

export interface InquiryResponse {
  success: boolean;
  referenceId?: string;
  message: string;
  error?: string;
}

export interface ShowcaseItem {
  id: string;
  categoryId: string;
  categoryName: string;
  tagline: string;
  description: string;
  productExamples: string[];
  image: string;
  imageAlt: string;
  slug: string;
  moq: string;
  tag: string;
}

export interface ManufacturingHighlight {
  id: string;
  title: string;
  displayText: string;
  text: string;
  iconName: 'Package' | 'FlaskConical' | 'Factory';
}

export interface UniqueFeature {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  highlight: string;
  iconName: string;
}

export type ManufacturingSolutionId = 'private_label' | 'custom_formulation' | 'third_party';
export type PackagingOptionId = 'standard' | 'premium' | 'custom';

export interface ManufacturingOption {
  id: ManufacturingSolutionId;
  name: string;
  tagline: string;
  description: string;
  timelineLabel: string;
  timelineRange: { minDays: number; maxDays: number; isGuaranteed: boolean };
}

export interface PackagingOptionItem {
  id: PackagingOptionId;
  name: string;
  tagline: string;
  description: string;
  ratePerUnit?: number;
  quotationRequired?: boolean;
}

export interface EstimateRequestPayload {
  categoryId: string;
  productId?: string | null;
  manufacturingType: ManufacturingSolutionId;
  quantity: number;
  packagingOptionId: PackagingOptionId;
}

export type EstimateResult =
  | {
      status: 'estimated';
      currency: string;
      quantity: number;
      unitPrice: number;
      baseManufacturingAmount: number;
      packagingAmount: number;
      additionalCharges: number;
      subtotal: number;
      taxAmount: number;
      taxRatePercent: number;
      estimatedTotal: number;
      timeline: {
        minDays: number;
        maxDays: number;
        label: string;
        isGuaranteed: boolean;
      };
      estimateId: string;
      expiresAt: string;
    }
  | {
      status: 'quotation_required';
      reason: string;
      message: string;
      timeline: {
        label: string;
        minDays?: number;
        maxDays?: number;
        isGuaranteed: boolean;
      };
      estimateId?: string;
    };

export interface ManufacturingQuoteRequestPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productCategory: string;
  manufacturingSolution: string;
  expectedQuantity: number;
  packagingPreference: string;
  notes?: string;
  estimateId?: string;
  estimatedTotal?: number;
}



