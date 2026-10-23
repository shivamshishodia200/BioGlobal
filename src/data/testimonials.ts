import { ClientTestimonial } from '../types';

/**
 * Client Testimonials Catalog
 * In strict compliance with regulatory guidelines and B2B truth-in-advertising principles:
 * - Only genuine, client-authorized, and verified testimonials are published.
 * - Demonstration placeholders and synthetic reviews have been retired.
 * - When no verified third-party review releases are on file, the platform renders
 *   the verified Part 4 Trust Fallback & Part 5 Company Value Pillars.
 */
export const TESTIMONIALS: ClientTestimonial[] = [];

export interface TrustValuePoint {
  id: string;
  title: string;
  description: string;
  iconName: 'MessagesSquare' | 'FlaskConical' | 'Handshake';
}

export const TRUST_VALUES: TrustValuePoint[] = [
  {
    id: 'val-communication',
    title: 'Clear Communication',
    description:
      'Collaborative discussions throughout product development and manufacturing coordination.',
    iconName: 'MessagesSquare',
  },
  {
    id: 'val-development',
    title: 'Thoughtful Product Development',
    description:
      'Formulation guidance and product customization aligned with business requirements.',
    iconName: 'FlaskConical',
  },
  {
    id: 'val-support',
    title: 'Partnership-Focused Support',
    description:
      'Manufacturing support designed around practical business needs and long-term relationships.',
    iconName: 'Handshake',
  },
];
