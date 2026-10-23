import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function b2bApiPlugin(): Plugin {
  return {
    name: 'b2b-api-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];

        // 1. GET /api/manufacturing/categories
        if (url === '/api/manufacturing/categories' && req.method === 'GET') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              success: true,
              categories: [
                { id: 'cosmetic-products', name: 'Cosmetic Products', moq: 1000 },
                { id: 'skin-care', name: 'Skin Care', moq: 1000 },
                { id: 'hair-care', name: 'Hair Care', moq: 1000 },
                { id: 'bath-care', name: 'Bath Care', moq: 1000 },
                { id: 'body-care', name: 'Body Care', moq: 1000 },
                { id: 'baby-care', name: 'Baby Care', moq: 1000 },
              ],
            })
          );
          return;
        }

        // 2. GET /api/manufacturing/options
        if (url === '/api/manufacturing/options' && req.method === 'GET') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              success: true,
              solutions: [
                { id: 'private_label', name: 'Private Label Manufacturing' },
                { id: 'custom_formulation', name: 'Custom Formulation & R&D' },
                { id: 'third_party', name: 'Third-Party Contract Manufacturing' },
              ],
              packaging: [
                { id: 'standard', name: 'Standard Packaging', ratePerUnit: 24 },
                { id: 'premium', name: 'Premium Packaging', ratePerUnit: 52 },
                { id: 'custom', name: 'Custom Branded Packaging', quotationRequired: true },
              ],
            })
          );
          return;
        }

        // 3. POST /api/manufacturing/estimate
        if (url === '/api/manufacturing/estimate' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const { categoryId, manufacturingType, quantity, packagingOptionId } = data;

              if (!quantity || quantity < 1000 || quantity > 50000) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    status: 'quotation_required',
                    reason: 'Invalid Quantity',
                    message:
                      'Quantity must be between 1,000 and 50,000 units for preliminary automated estimation.',
                    timeline: { label: 'Timeline available after review', isGuaranteed: false },
                  })
                );
                return;
              }

              if (manufacturingType === 'custom_formulation') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    status: 'quotation_required',
                    reason: 'R&D Consultation Required',
                    message:
                      'Custom formulation development depends on active ingredient complexity, bench trial iterations, and stability testing. Our technical team will prepare a tailored quotation based on your formulation brief.',
                    timeline: {
                      label: '4–8 Weeks (Indicative)',
                      minDays: 28,
                      maxDays: 56,
                      isGuaranteed: false,
                    },
                  })
                );
                return;
              }

              if (manufacturingType === 'third_party') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    status: 'quotation_required',
                    reason: 'Specification Review Required',
                    message:
                      'Third-party contract manufacturing is evaluated based on client-provided specifications, bulk compounding parameters, and packaging line compatibility.',
                    timeline: { label: 'Subject to Technical Review', isGuaranteed: false },
                  })
                );
                return;
              }

              if (packagingOptionId === 'custom') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    status: 'quotation_required',
                    reason: 'Packaging Quotation Required',
                    message:
                      'Custom branded packaging (tooling, silkscreening, bespoke labels, and secondary luxury cartons) is quoted per project artwork.',
                    timeline: {
                      label: '21–28 Days + Packaging Sourcing',
                      isGuaranteed: false,
                    },
                  })
                );
                return;
              }

              // Private label standard pricing calculation
              const baseRates: Record<string, { base1k: number; base25k: number }> = {
                'skin-care': { base1k: 145, base25k: 95 },
                'cosmetic-products': { base1k: 165, base25k: 110 },
                'hair-care': { base1k: 125, base25k: 82 },
                'bath-care': { base1k: 95, base25k: 60 },
                'body-care': { base1k: 135, base25k: 88 },
                'baby-care': { base1k: 140, base25k: 92 },
              };

              const rates = baseRates[categoryId] || baseRates['skin-care'];
              const qRatio = Math.min(Math.max((quantity - 1000) / 49000, 0), 1);
              const unitMfgRate = Math.round(
                rates.base1k - qRatio * (rates.base1k - rates.base25k)
              );
              const packagingRate = packagingOptionId === 'premium' ? 52 : 24;

              const baseManufacturingAmount = unitMfgRate * quantity;
              const packagingAmount = packagingRate * quantity;
              const additionalCharges = 0;
              const subtotal = baseManufacturingAmount + packagingAmount + additionalCharges;
              const taxRatePercent = 18;
              const taxAmount = Math.round(subtotal * 0.18);
              const estimatedTotal = subtotal + taxAmount;
              const unitPrice = Math.round((estimatedTotal / quantity) * 100) / 100;
              const estimateId =
                'TBG-EST-' + Math.floor(100000 + Math.random() * 900000);
              const expiresAt = new Date(
                Date.now() + 14 * 24 * 60 * 60 * 1000
              ).toISOString();

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  status: 'estimated',
                  currency: 'INR',
                  quantity,
                  unitPrice,
                  baseManufacturingAmount,
                  packagingAmount,
                  additionalCharges,
                  subtotal,
                  taxAmount,
                  taxRatePercent,
                  estimatedTotal,
                  timeline: {
                    minDays: 21,
                    maxDays: 28,
                    label: '21–28 Days (Indicative)',
                    isGuaranteed: false,
                  },
                  estimateId,
                  expiresAt,
                })
              );
            } catch {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Malformed request body' }));
            }
          });
          return;
        }

        // 4. POST /api/manufacturing/quote-requests
        if (url === '/api/manufacturing/quote-requests' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              if (!data.fullName?.trim() || !data.email?.trim() || !data.companyName?.trim()) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    success: false,
                    error: 'Full Name, Company Name, and Business Email are required.',
                  })
                );
                return;
              }
              const ref = 'TBG-Q-' + Math.floor(100000 + Math.random() * 900000);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: true,
                  referenceId: ref,
                  message: `Thank you, ${data.fullName}. Your manufacturing quotation request for ${data.companyName} has been logged under Reference #${ref}. Our technical formulation team will review your specifications and contact you shortly.`,
                })
              );
            } catch {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Malformed request body' }));
            }
          });
          return;
        }

        // 5. Existing POST /api/inquiry
        if (req.url === '/api/inquiry' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              if (!data.fullName?.trim() || !data.email?.trim() || !data.companyName?.trim()) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: 'Validation failed: Full Name, Company Name, and a valid Email Address are required.'
                }));
                return;
              }

              const refNumber = 'TBG-' + Math.floor(100000 + Math.random() * 900000);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                referenceId: refNumber,
                message: `Thank you, ${data.fullName}. Your B2B manufacturing inquiry for ${data.companyName} has been logged under Reference #${refNumber}. A formulation specialist will contact you within 24 business hours.`,
                timestamp: new Date().toISOString()
              }));
            } catch {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: 'Malformed request body. Please ensure your submission is valid.'
              }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), b2bApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react-router-dom',
        'motion/react',
        'lucide-react',
      ],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

