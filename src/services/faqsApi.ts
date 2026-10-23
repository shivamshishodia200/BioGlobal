import { FaqItem } from '../types';
import { FAQS } from '../data/faqs';

export interface FaqsApiResponse {
  success: boolean;
  count: number;
  faqs: FaqItem[];
  timestamp?: string;
}

/**
 * Fetch approved and published FAQs via API with graceful static fallback
 */
export async function fetchPublishedFaqs(): Promise<FaqItem[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch('/api/faqs?published=true', {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data: FaqsApiResponse = await res.json();
      if (data && Array.isArray(data.faqs) && data.faqs.length > 0) {
        return data.faqs
          .filter((f) => f.isPublished)
          .sort((a, b) => a.sortOrder - b.sortOrder);
      }
    }
  } catch (err) {
    console.info('FAQs API fallback engaged:', err instanceof Error ? err.message : err);
  }

  // Graceful fallback to verified centralized static FAQs
  return FAQS.filter((f) => f.isPublished).sort((a, b) => a.sortOrder - b.sortOrder);
}
