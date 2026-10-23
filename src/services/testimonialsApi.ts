import { ClientTestimonial } from '../types';
import { TESTIMONIALS } from '../data/testimonials';

export interface TestimonialsApiResponse {
  success: boolean;
  count: number;
  testimonials: ClientTestimonial[];
  hasVerifiedReviews: boolean;
}

/**
 * Fetch verified and approved testimonials via API with fallback
 */
export async function fetchPublishedTestimonials(): Promise<ClientTestimonial[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch('/api/testimonials?published=true', {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data: TestimonialsApiResponse = await res.json();
      if (data && Array.isArray(data.testimonials)) {
        return data.testimonials.filter((t) => t.isPublished && t.isVerified);
      }
    }
  } catch (err) {
    console.info('Testimonials API fallback:', err instanceof Error ? err.message : err);
  }

  return TESTIMONIALS.filter((t) => t.isPublished && t.isVerified);
}
