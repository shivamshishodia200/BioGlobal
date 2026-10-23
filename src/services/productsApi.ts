import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';

export interface ProductQueryOptions {
  featured?: boolean;
  published?: boolean;
  category?: string;
}

export interface ProductsApiResponse {
  success: boolean;
  count: number;
  products: Product[];
}

/**
 * Fetch featured products via API with graceful fallback to typed catalog
 */
export async function fetchFeaturedProducts(
  options: ProductQueryOptions = { featured: true, published: true }
): Promise<Product[]> {
  const params = new URLSearchParams();
  if (options.featured !== undefined) {
    params.set('featured', String(options.featured));
  }
  if (options.published !== undefined) {
    params.set('published', String(options.published));
  }
  if (options.category && options.category !== 'All') {
    params.set('category', options.category);
  }

  const endpoint = `/api/products?${params.toString()}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(endpoint, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data: ProductsApiResponse = await res.json();
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        // Correlate with static asset images from PRODUCTS to prevent any image resolution issues
        return data.products.map((p) => {
          const match = PRODUCTS.find((prod) => prod.id === p.id || prod.slug === p.slug);
          return {
            ...p,
            image: match?.image || p.image,
          };
        });
      }
    }
  } catch (err) {
    // Graceful offline / SSR / fallback mode
    console.info('Products API fallback engaged:', err instanceof Error ? err.message : err);
  }

  // Authoritative fallback dataset matching identical criteria
  let result = PRODUCTS.filter((p) => (p.isPublished !== false));
  if (options.featured) {
    result = result.filter((p) => p.isFeatured);
  }
  if (options.category && options.category !== 'All') {
    result = result.filter(
      (p) => p.category === options.category || p.categorySlug === options.category
    );
  }

  return result;
}

/**
 * Find single formulation by ID or slug
 */
export async function fetchProductById(idOrSlug: string): Promise<Product | null> {
  const match = PRODUCTS.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
  return match || null;
}
