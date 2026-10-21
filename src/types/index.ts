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
  iconName: string;
  image: string;
  features: string[];
  deliverables: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  details: string[];
  image?: string;
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
