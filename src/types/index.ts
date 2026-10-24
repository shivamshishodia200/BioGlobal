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
  headline?: string;
  description: string;
  shortDescription?: string;
  image: string;
  imageAlt?: string;
  itemCount: number;
  productCount?: number;
  popularFormulations: string[];
  productExamples?: string[];
  ctaText?: string;
  isPublished?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug?: string;
  category: ProductCategory;
  categoryId?: string;
  categorySlug: string;
  tagline: string;
  description: string;
  shortDescription?: string;
  image: string;
  keyActives: string[];
  ingredients?: string[];
  benefits: string[];
  idealFor: string;
  minOrderQuantity: string;
  minimumOrderQuantity?: number | string | null;
  leadTime: string;
  packagingOptions: string[];
  certifications: string[];
  shelfLife: string;
  isFeatured?: boolean;
  isPublished?: boolean;
  availabilityStatus?: 'available' | 'on_request' | 'unconfirmed';
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

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  keywords?: string[];
  sortOrder: number;
  isPublished: boolean;
}

export type FAQItem = FaqItem;

export interface ClientTestimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
  designation?: string;
  companyName?: string;
  brandName?: string;
  companyLogo?: string;
  clientPhoto?: string;
  serviceCategory?: string;
  productType?: string;
  location?: string;
  editorialTheme?: 'Low Minimum Order Quantity' | 'Formulation Development & Quality' | 'Manufacturing Coordination & Support';
  rating?: number;
  reviewDate?: string;
  sourceUrl?: string;
  isVerified: boolean;
  isApproved: boolean;
  isPublished: boolean;
  displayOrder?: number;
}

export type TestimonialItem = ClientTestimonial;

export interface B2BInquiryPayload {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  productCategory: string;
  quantityRange: string;
  serviceType: string;
  message: string;
  targetProduct?: string;
  contactConsent?: boolean;
  source?: string;
}

export interface ConsultationFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  categoryId: string;
  productCategory: string;
  manufacturingType: string;
  estimatedQuantity?: string;
  targetLaunchPeriod?: string;
  productRequirements?: string;
  contactConsent: boolean;
  source?: string;
  targetProduct?: string;
}

export interface ConsultationResponse {
  success: boolean;
  referenceId?: string;
  message: string;
  error?: string;
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

export interface QualityCredential {
  id: string;
  title: string;
  reference: string;
  description: string;
  shortDescription: string;
  iconName: 'ShieldCheck' | 'ClipboardCheck' | 'HeartHandshake' | 'Leaf';
  credentialType: 'certification' | 'audit' | 'practice' | 'capability';
  verificationStatus: 'verified' | 'documented_practice' | 'capability' | 'unverified' | 'expired';
  verificationLabel: string;
  isVerifiedCertificate: boolean;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    borderColor: string;
    iconBg: string;
    iconText: string;
  };
  keyPractices: string[];
  scopeNote?: string;
  ctaText?: string;
  certificateNumber?: string;
  issuedBy?: string;
  validUntil?: string;
  publicDocumentUrl?: string;
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

export interface AboutStatistic {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface AboutCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image?: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
}




