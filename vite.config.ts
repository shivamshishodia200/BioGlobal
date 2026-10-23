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

        // 0. GET /api/products
        if (url === '/api/products' && req.method === 'GET') {
          const fullUrl = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
          const featuredParam = fullUrl.searchParams.get('featured');
          const publishedParam = fullUrl.searchParams.get('published');
          const categoryParam = fullUrl.searchParams.get('category');

          const rawProducts = [
            {
              id: 'prod-vitamin-c-serum',
              name: 'Vitamin C Facial Serum',
              slug: 'vitamin-c-facial-serum',
              category: 'Skin Care',
              categoryId: 'skin-care',
              categorySlug: 'skin-care',
              tagline: 'An Antioxidant-Inspired Addition to Your Skincare Collection',
              shortDescription: 'Explore a vitamin C-based facial serum concept for beauty brands seeking lightweight textures, contemporary skincare ingredients, and customizable packaging options.',
              description: 'A vitamin C-based facial serum offers beauty brands an opportunity to develop a differentiated skincare product aligned with consumer interest in antioxidant ingredients and refined daily care routines. The formulation concept can be explored with suitable vitamin C derivatives, moisturizing ingredients, and texture preferences, subject to technical assessment and formulation testing.',
              image: '/src/assets/capabilities/skincare.jpg',
              ingredients: ['Vitamin C Derivative (Sodium Ascorbyl Phosphate)', 'Hyaluronic Acid', 'Vegetable Glycerin', 'Vitamin E (Tocopherol)'],
              keyActives: ['Vitamin C Derivative (Sodium Ascorbyl Phosphate)', 'Hyaluronic Acid', 'Vegetable Glycerin', 'Vitamin E (Tocopherol)'],
              benefits: ['Antioxidant cosmetic daily support', 'Lightweight fast-absorbing fluid base', 'Balanced humectant hydration matrix', 'Customizable viscosity and fragrance profile'],
              idealFor: 'Contemporary daily facial skincare routines across multiple skin profiles',
              minOrderQuantity: '1,000 units',
              minimumOrderQuantity: 1000,
              packagingOptions: ['Amber Glass Dropper Bottle (30ml)', 'Airless Serum Pump (30ml / 50ml)', 'Custom Branded Pipette Vial'],
              certifications: ['ISO 22716 GMP Compliant', 'Cruelty-Free Standard', 'Stability Tested'],
              shelfLife: '24 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-ceramide-barrier-cream',
              name: 'Multi-Ceramide Barrier Cream',
              slug: 'multi-ceramide-barrier-cream',
              category: 'Skin Care',
              categoryId: 'skin-care',
              categorySlug: 'skin-care',
              tagline: 'A Moisturizing Cream Concept for Modern Skincare Brands',
              shortDescription: 'Discover a ceramide-based moisturizing cream concept suitable for premium skincare collections focused on daily moisturizing care.',
              description: 'A ceramide-based cream can support a skincare product portfolio designed around everyday moisturization and a comfortable sensory experience. With appropriate formulation development, brands can explore combinations of ceramides, emollients, humectants, and complementary cosmetic ingredients to create products aligned with their target audience.',
              image: '/src/assets/capabilities/skincare.jpg',
              ingredients: ['Ceramide Complex (NP, AP, EOP)', 'Vegetable Glycerin', 'Panthenol (Pro-Vitamin B5)', 'Fair-Trade Shea Butter'],
              keyActives: ['Ceramide Complex (NP, AP, EOP)', 'Vegetable Glycerin', 'Panthenol (Pro-Vitamin B5)', 'Fair-Trade Shea Butter'],
              benefits: ['Rich emollient daily moisturization', 'Skin-comforting protective barrier feel', 'Velvety non-greasy absorption', 'Adaptable for fragrance-free or subtle scented formulations'],
              idealFor: 'Dry, dehydrated, or moisture-depleted skin profiles needing daily comfort',
              minOrderQuantity: '1,000 units',
              minimumOrderQuantity: 1000,
              packagingOptions: ['Cosmetic Double-Wall Jar (50g)', 'Airless Pump Dispenser (50ml)', 'Premium Heavy-Wall Cream Container'],
              certifications: ['ISO 22716 GMP Compliant', 'Non-Comedogenic Profile', 'Cruelty-Free Standard'],
              shelfLife: '24 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-rosemary-biotin-drops',
              name: 'Rosemary & Biotin Hair Drops',
              slug: 'rosemary-biotin-hair-drops',
              category: 'Hair Care',
              categoryId: 'hair-care',
              categorySlug: 'hair-care',
              tagline: 'Botanical-Inspired Hair & Scalp Care Formulation',
              shortDescription: 'Explore a rosemary and biotin-inspired hair care serum concept for brands creating contemporary scalp care and hair wellness collections.',
              description: 'Hair and scalp care products are an important part of modern beauty portfolios. This formulation concept brings together botanical-inspired ingredients and suitable cosmetic conditioning components to help brands explore differentiated scalp serum products with customizable textures and packaging.',
              image: '/src/assets/capabilities/haircare.jpg',
              ingredients: ['Rosemary Leaf Extract (Rosmarinus Officinalis)', 'Biotin (Vitamin B7)', 'Panthenol (Pro-Vitamin B5)', 'Botanical Glycerin'],
              keyActives: ['Rosemary Leaf Extract (Rosmarinus Officinalis)', 'Biotin (Vitamin B7)', 'Panthenol (Pro-Vitamin B5)', 'Botanical Glycerin'],
              benefits: ['Conditioning botanical scalp care', 'Lightweight non-greasy application', 'Supports refreshed feeling at root zone', 'Versatile oil-blend or aqueous serum formats'],
              idealFor: 'Scalp care regimens, wellness hair collections, and daily root conditioning',
              minOrderQuantity: '1,000 units',
              minimumOrderQuantity: 1000,
              packagingOptions: ['Amber Glass Dropper Bottle (50ml)', 'Scalp Applicator Pipette Bottle', 'Precision Nozzle Treatment Dispenser'],
              certifications: ['ISO 22716 GMP Compliant', 'Plant-Derived Actives', 'Cruelty-Free Standard'],
              shelfLife: '24 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-charcoal-cleansing-bar',
              name: 'Activated Charcoal Cleansing Bar',
              slug: 'activated-charcoal-cleansing-bar',
              category: 'Bath Care',
              categoryId: 'bath-care',
              categorySlug: 'bath-care',
              tagline: 'A Distinctive Cleansing Concept for Personal Care Brands',
              shortDescription: 'Discover a charcoal-based cleansing bar concept designed for bath and personal care collections seeking distinctive appearance, fragrance options, and packaging formats.',
              description: 'Activated charcoal cleansing bars offer brands an opportunity to introduce visually distinctive products within bath and body care ranges. Formulation options may include suitable cleansing ingredients, moisturizing components, fragrances, and packaging finishes tailored to the intended product concept.',
              image: '/src/assets/capabilities/soapcare.jpg',
              ingredients: ['Activated Bamboo Charcoal', 'Vegetable Glycerin Base', 'Gentle Botanical Cleansing Base', 'Cold-Pressed Botanical Oils'],
              keyActives: ['Activated Bamboo Charcoal', 'Vegetable Glycerin Base', 'Gentle Botanical Cleansing Base', 'Cold-Pressed Botanical Oils'],
              benefits: ['Visually distinctive artisan black bar aesthetic', 'Gentle daily lather without excessive dryness', 'Customizable botanical scent or unscented base', 'Sustainable zero-plastic packaging compatibility'],
              idealFor: 'Bath and body collections seeking modern, premium cleansing bar alternatives',
              minOrderQuantity: '1,000 units',
              minimumOrderQuantity: 1000,
              packagingOptions: ['Printed Recyclable Paper Carton', 'Eco-Friendly Paper Wrap', 'Premium Rigid Soap Gift Box'],
              certifications: ['ISO 22716 GMP Compliant', 'Zero Plastic Primary Packaging', 'Cruelty-Free Standard'],
              shelfLife: '30 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-face-serum',
              name: 'Clarifying Niacinamide 10% + Zinc 1% Face Serum',
              slug: 'clarifying-niacinamide-face-serum',
              category: 'Skin Care',
              categoryId: 'skin-care',
              categorySlug: 'skin-care',
              tagline: 'Lightweight water-based cosmeceutical serum for pore refinement and sebum regulation',
              shortDescription: 'A benchmark high-potency cosmeceutical formulation designed to minimize enlarged pores, rebalance oil production, and enhance skin radiance.',
              description: 'A benchmark high-potency cosmeceutical formulation designed to minimize enlarged pores, rebalance oil production, and enhance skin radiance without irritation. Manufactured in sterile cleanrooms with pharmaceutical-grade active ingredients.',
              image: '/src/assets/capabilities/skincare.jpg',
              ingredients: ['Niacinamide (Vitamin B3) 10%', 'Zinc PCA 1%', 'Tamarindus Indica Seed Extract', 'Allantoin'],
              keyActives: ['Niacinamide (Vitamin B3) 10%', 'Zinc PCA 1%', 'Tamarindus Indica Seed Extract', 'Allantoin'],
              benefits: ['Visibly reduces pore congestion', 'Balances daily sebum secretion', 'Strengthens epidermal barrier', 'Calms redness & blemishes'],
              idealFor: 'Blemished, oily, and combination skin profiles',
              minOrderQuantity: '1,000 units',
              minimumOrderQuantity: 1000,
              packagingOptions: ['30ml Amber Glass Dropper', '30ml Frosted White Pipette', '50ml Airless Pump Bottle'],
              certifications: ['ISO 22716 GMP Compliant', 'Cruelty-Free', 'Dermatologically Tested'],
              shelfLife: '24 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-shampoo',
              name: 'Keratin & Botanical Peptide Infusion Shampoo',
              slug: 'keratin-botanical-peptide-shampoo',
              category: 'Hair Care',
              categoryId: 'hair-care',
              categorySlug: 'hair-care',
              tagline: 'Sulfate-free restorative cleanse for chemically treated and color-processed hair',
              shortDescription: 'Enriched with hydrolyzed vegan keratin peptides, argan oil, and plant ceramides to repair broken disulfide bonds and seal cuticles.',
              description: 'Enriched with hydrolyzed vegan keratin peptides, argan oil, and plant ceramides to repair broken disulfide bonds, seal lifted cuticles, and deliver salon-grade mirror shine without weighing roots down.',
              image: '/src/assets/capabilities/haircare.jpg',
              ingredients: ['Hydrolyzed Pea Keratin Peptides', 'Organic Cold-Pressed Argan Oil', 'Biotin', 'Rosemary Extract'],
              keyActives: ['Hydrolyzed Pea Keratin Peptides', 'Organic Cold-Pressed Argan Oil', 'Biotin', 'Rosemary Extract'],
              benefits: ['Zero SLS/SLES sulfates', 'Prevents color fading and strand breakage', 'Nourishes dry scalp micro-environment', 'Rich luxurious plant-derived lather'],
              idealFor: 'Damaged, frizzy, keratin-treated, and color-treated hair',
              minOrderQuantity: '1,500 units',
              minimumOrderQuantity: 1500,
              packagingOptions: ['250ml Amber PET Bottle with Disc Cap', '300ml Post-Consumer Recycled PCR Pump Bottle'],
              certifications: ['ISO 22716 GMP Compliant', 'Cruelty-Free', 'Color-Safe Formula'],
              shelfLife: '30 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-body-lotion',
              name: 'Deep Nourish Shea & Squalane Rich Body Lotion',
              slug: 'deep-nourish-shea-squalane-body-lotion',
              category: 'Body Care',
              categoryId: 'body-care',
              categorySlug: 'body-care',
              tagline: 'Silky 24-hour hydration emulsion with fast absorption and subtle vanilla-cashmere note',
              shortDescription: 'Formulated with cold-pressed fair-trade shea butter, olive squalane, and provitamin B5 to hydrate ashy skin and restore supple elasticity.',
              description: 'Formulated with cold-pressed fair-trade shea butter, olive squalane, and provitamin B5 to hydrate ashy skin, restore supple elasticity, and leave limbs feeling velvety smooth without sticky residue.',
              image: '/src/assets/capabilities/bodycare.jpg',
              ingredients: ['Raw Shea Butter (20%)', 'Plant Squalane', 'Niacinamide (2%)', 'Sodium Hyaluronate'],
              keyActives: ['Raw Shea Butter (20%)', 'Plant Squalane', 'Niacinamide (2%)', 'Sodium Hyaluronate'],
              benefits: ['Intense 24-hour hydration barrier', 'Immediate relief for rough elbows and knees', 'Absorbs within seconds without clothing transfer', 'Subtle customizable signature scent'],
              idealFor: 'Daily total-body conditioning across all climates',
              minOrderQuantity: '1,500 units',
              minimumOrderQuantity: 1500,
              packagingOptions: ['250ml Gloss White Pump Dispenser', '400ml Luxury Soft-Touch Cylindrical Bottle'],
              certifications: ['ISO 22716 GMP Compliant', 'Non-Greasy Formulation'],
              shelfLife: '30 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-cosmetic-cream',
              name: 'Peptide Sculpt & Radiance Cosmetic Day Cream',
              slug: 'peptide-sculpt-radiance-day-cream',
              category: 'Cosmetic Products',
              categoryId: 'cosmetic-products',
              categorySlug: 'cosmetic-products',
              tagline: 'Hybrid cosmetic skincare cream with soft-focus blurring pearls and anti-aging peptides',
              shortDescription: 'Convergence of cosmeceutical and decorative cosmetic technology. Infused with copper peptides, micro-fine light-diffusing mineral spheres, and hyaluronic acid.',
              description: 'The pinnacle of cosmeceutical and decorative cosmetic convergence. Infused with copper peptides, micro-fine light-diffusing mineral spheres, and hyaluronic acid to instantly blur fine lines and impart an ethereal lit-from-within glow.',
              image: '/src/assets/capabilities/cosmetics.jpg',
              ingredients: ['Palmitoyl Tripeptide-38', 'Light-Reflecting Mineral Mica (Ethically Sourced)', 'Niacinamide (3%)', 'Sodium Hyaluronate Cross-Polymer'],
              keyActives: ['Palmitoyl Tripeptide-38', 'Light-Reflecting Mineral Mica (Ethically Sourced)', 'Niacinamide (3%)', 'Sodium Hyaluronate Cross-Polymer'],
              benefits: ['Immediate soft-focus visual blurring', 'Stimulates endogenous collagen over 28 days', 'Functions as primer and daily anti-fatigue cream', 'Non-comedogenic weightless emulsion'],
              idealFor: 'Pre-makeup priming, anti-aging skincare, and camera-ready radiance',
              minOrderQuantity: '1,000 units',
              minimumOrderQuantity: 1000,
              packagingOptions: ['50ml Frosted Heavy-Wall Glass Jar with Gold Lid', '50ml Airless Metallic Pump'],
              certifications: ['ISO 22716 GMP Compliant', 'Clean Cosmetic Formulation'],
              shelfLife: '24 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-baby-lotion',
              name: 'Ultra-Mild Calendula & Oat Pediatric Baby Lotion',
              slug: 'ultra-mild-calendula-oat-baby-lotion',
              category: 'Baby Care',
              categoryId: 'baby-care',
              categorySlug: 'baby-care',
              tagline: 'Pediatrician-tested, fragrance-free gentle moisture balm for newborns and infants',
              shortDescription: 'A soothing and protective hypoallergenic formula crafted specifically for infant and newborn skin with cold-pressed calendula and colloidal oatmeal.',
              description: 'A soothing and protective hypoallergenic formula crafted specifically for infant and newborn skin. Combines cold-pressed organic calendula blossoms with colloidal oatmeal to prevent cradle cap, diaper friction, and childhood dryness.',
              image: '/src/assets/capabilities/babycare.jpg',
              ingredients: ['Colloidal Oatmeal 1%', 'Organic Calendula Flower Extract', 'Jojoba Esters', 'Chamomile Recutita Extract'],
              keyActives: ['Colloidal Oatmeal 1%', 'Organic Calendula Flower Extract', 'Jojoba Esters', 'Chamomile Recutita Extract'],
              benefits: ['Tested safe for newborns from Day 1', 'Free of fragrances, phthalates, parabens, and dyes', 'Clinically proven hypoallergenic', 'Soothes dryness flare-ups and redness'],
              idealFor: 'Infants, toddlers, and ultra-sensitive adult skin',
              minOrderQuantity: '1,000 units',
              minimumOrderQuantity: 1000,
              packagingOptions: ['200ml Rounded Baby Safety Bottle with Lock Pump', '150ml Soft Touch Squeeze Tube'],
              certifications: ['ISO 22716 GMP Compliant', 'Pediatrician Approved Safety Profile', 'Hypoallergenic'],
              shelfLife: '24 Months',
              isFeatured: true,
              isPublished: true,
            },
            {
              id: 'prod-setting-mist',
              name: 'Dewy Finish Hyaluronic Acid Setting & Primer Mist',
              slug: 'dewy-finish-hyaluronic-setting-mist',
              category: 'Cosmetic Products',
              categoryId: 'cosmetic-products',
              categorySlug: 'cosmetic-products',
              tagline: 'Micro-fine setting spray that locks makeup in place for 16 hours while boosting skin hydration',
              shortDescription: 'An ultra-fine mist combining flexible film-formers with rosewater, hyaluronic acid, and niacinamide to melt makeup layers seamlessly.',
              description: 'An ultra-fine cloud aerosol-free mist combining flexible film-formers with rosewater, hyaluronic acid, and niacinamide. Seamlessly melts makeup layers together while preventing midday creasing and cakeyness.',
              image: '/src/assets/capabilities/cosmetics.jpg',
              ingredients: ['Micro-Fine Flexible Polymer Network', 'Multi-Weight Hyaluronic Acid', 'Damask Rose Hydrosol', 'Aloe Vera Leaf Water'],
              keyActives: ['Micro-Fine Flexible Polymer Network', 'Multi-Weight Hyaluronic Acid', 'Damask Rose Hydrosol', 'Aloe Vera Leaf Water'],
              benefits: ['Extends makeup wear up to 16 hours', 'Delivers ultra-fine continuous mist droplet spread', 'Prevents base cracking in dry indoor air', 'Alcohol-free non-stinging formulation'],
              idealFor: 'All makeup wearers and mid-day skin refreshers',
              minOrderQuantity: '1,500 units',
              minimumOrderQuantity: 1500,
              packagingOptions: ['100ml Slender Aluminum Bottle with Ultra-Fine Mist Pump', '60ml Travel Purse Atomizer'],
              certifications: ['ISO 22716 GMP Compliant', 'Alcohol-Free Formula'],
              shelfLife: '24 Months',
              isFeatured: true,
              isPublished: true,
            },
          ];

          let filtered = rawProducts;
          if (publishedParam === 'true') {
            filtered = filtered.filter((p) => p.isPublished);
          }
          if (featuredParam === 'true') {
            filtered = filtered.filter((p) => p.isFeatured);
          }
          if (categoryParam && categoryParam !== 'All') {
            filtered = filtered.filter(
              (p) => p.category === categoryParam || p.categoryId === categoryParam
            );
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              success: true,
              count: filtered.length,
              products: filtered,
            })
          );
          return;
        }

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

