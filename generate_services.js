const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

const services = [
  {
    slug: 'web-design',
    serviceName: 'Web Design in Mysore (Mysuru)',
    title: 'Bespoke Web Design Company in Mysore & Mysuru — High-Converting Custom UI Systems',
    tag: 'Web Design Mysore',
    readTime: '12 Min Read',
    date: 'August 25, 2026',
    image: '../assets/project-saas.jpg',
    keywords: 'web design company in mysore, best web designers mysuru, website design agency mysore, custom UI UX mysuru, web design mysore karnataka, website maker mysore',
    metaDesc: 'Top bespoke web design company in Mysore (Mysuru). Socialeo crafts custom, conversion-driven websites, responsive Figma UI systems, and high-speed digital experiences.',
    overview: 'Looking for the best bespoke web design company in Mysore (Mysuru)? Socialeo engineers handcrafted digital storefronts and responsive UI systems tailored to modern enterprises. We combine editorial typography, high-contrast visual hierarchy, and frictionless user flows that convert local and global visitors into paying clients.',
    deliverables: [
      'Custom Responsive UI/UX Layouts (Figma & Clean Code)',
      'Design Token Systems (Typography, Colors, Spacing Scales)',
      'Conversion-Optimized Customer Journey Wireframes',
      'Interactive Micro-Animations & Fluid Hover States',
      'Mobile-First Touch Ergonomics & Responsive Breakpoints',
      'High-Resolution Graphic Assets & Brand Illustrations'
    ],
    sections: [
      {
        heading: '1. Why Mysore Businesses Choose Bespoke Web Design Over Generic Templates',
        content: 'When visitors land on your website in Mysore or globally, cognitive research proves that first impressions form within 50 milliseconds. Cookie-cutter templates dilute your brand authority. Our bespoke web design approach in Mysore starts with in-depth competitor analysis and persona modeling, creating a tailored digital identity that immediately establishes your company as the market leader.'
      },
      {
        heading: '2. The Neuroscience of Conversion-Driven Typography & Layouts',
        content: 'Every layout decision at Socialeo is backed by eye-tracking data and cognitive load principles. We utilize modern variable fonts, strict visual vertical rhythm, and strategic negative space to guide user focus toward primary conversion triggers—lowering bounce rates while maximizing engagement duration.'
      },
      {
        heading: '3. Technical Precision Across All Screen Resolutions',
        content: 'From 4K ultra-wide desktop monitors down to compact mobile displays, our designs adapt seamlessly. We design across fluid CSS grids and vector SVG pipelines, ensuring crisp rendering and razor-sharp clarity on retina displays without excessive asset payloads.'
      }
    ],
    faqs: [
      { q: 'Where is Socialeo located in Mysore (Mysuru)?', a: 'Socialeo is based at 1646, 5th Main, Vijayanagar 2nd Stage, Mysore, Karnataka - 570017. We offer both in-person discovery sessions in Mysore/Bangalore and remote consultations globally.' },
      { q: 'How long does a custom web design project take in Mysore?', a: 'Standard bespoke design sprints take 2 to 4 weeks depending on scope, page count, and custom asset requirements.' },
      { q: 'Will I receive full Figma design files and source code?', a: 'Yes, complete Figma design systems with organized component libraries, auto-layouts, and developer-ready code tokens are delivered upon project completion.' },
      { q: 'Do you also handle frontend development and SEO hosting?', a: 'Yes! We provide complete end-to-end delivery from design to full-stack production deployment on Next.js with sub-second cloud CDN hosting.' }
    ]
  },
  {
    slug: 'web-development',
    serviceName: 'Web Development in Mysore (Mysuru)',
    title: 'Website Development Company in Mysore (Mysuru) — High-Speed Next.js & Full-Stack Apps',
    tag: 'Web Development Mysore',
    readTime: '15 Min Read',
    date: 'August 25, 2026',
    image: '../assets/project-cloud.jpg',
    keywords: 'website development company in mysore, web development agency mysuru, Next.js developers mysore, software company mysore, full stack developer mysore karnataka',
    metaDesc: 'Premier website development company in Mysore (Mysuru). Socialeo builds sub-second Next.js web applications, scalable APIs, and Google Core Web Vitals 100/100 platforms.',
    overview: 'Performance is a feature. Socialeo is a leading website development studio in Mysore (Mysuru) building modern full-stack web applications and high-speed websites powered by clean architecture, Next.js / React, Server-Side Rendering (SSR), and Edge CDN cloud distribution.',
    deliverables: [
      'Full-Stack Custom Web Architecture (Next.js / Node.js / Python)',
      'Sub-Second Server-Side Rendering (SSR) & Static Generation (SSG)',
      'Clean Modular Component Codebase & API Integrations',
      'Automated CI/CD Deployment Pipelines & Edge CDN Hosting',
      'Google Core Web Vitals 95+ Performance Scores',
      'Enterprise SSL padlocks, HTTPS encryption & Security Headers'
    ],
    sections: [
      {
        heading: '1. Engineering for Sub-Second Speed & 100% Core Web Vitals in Mysore',
        content: 'Google Core Web Vitals are a foundational ranking factor for businesses in Mysore and worldwide. Slow sites hemorrhage revenue and search rankings. By utilizing tree-shaking, automated image optimization with AVIF/WebP formats, and edge caching at the cloud boundary, our web solutions achieve sub-500ms Largest Contentful Paint (LCP) times.'
      },
      {
        heading: '2. Clean, Scalable Code That Grows With Your Enterprise',
        content: 'We engineer maintainable software using strict TypeScript types, modular component hierarchies, and comprehensive integration testing. Whether handling ten thousand or ten million monthly requests, your infrastructure remains resilient and easy to extend.'
      },
      {
        heading: '3. Seamless Backend & Database Integrations',
        content: 'From CRM synchronizations and custom payment gateways to headless CMS architectures and real-time WebSocket telemetry, we build secure, scalable backend foundations tailored to your business logic.'
      }
    ],
    faqs: [
      { q: 'Why choose Socialeo for web development in Mysore?', a: 'You work directly with founder and principal engineer Manpreeth N (Manu). Zero agency bureaucracy, institutional code quality, and direct developer communication from Day One.' },
      { q: 'What tech stack do you recommend for high-growth web apps?', a: 'We specialize in Next.js, React, Node.js, TailwindCSS / Vanilla CSS, PostgreSQL, and Vercel/AWS Edge Cloud infrastructure.' },
      { q: 'Can you migrate our legacy website to a modern stack?', a: 'Yes, we specialize in zero-downtime migrations that preserve your existing SEO rankings, backlink profiles, and user database.' }
    ]
  },
  {
    slug: 'mobile-apps',
    serviceName: 'Mobile App Development in Mysore (Mysuru)',
    title: 'Mobile App Development Company in Mysore (Mysuru) — iOS & Android Apps',
    tag: 'Mobile Apps Mysore',
    readTime: '11 Min Read',
    date: 'August 25, 2026',
    image: '../assets/project-fintech.jpg',
    keywords: 'mobile app development company in mysore, app developers in mysuru, iOS Android app agency mysore, React Native developers mysore, flutter app development mysore',
    metaDesc: 'Top mobile app development company in Mysore (Mysuru). Socialeo builds fluid iOS & Android cross-platform apps with 60fps animations, haptic feedback, and offline sync.',
    overview: 'Turn your product vision into an intuitive mobile app that users love to open daily. Socialeo develops high-retention iOS and Android mobile apps in Mysore (Mysuru) combining fluid 60fps animations, intuitive gesture navigation, and robust offline capabilities.',
    deliverables: [
      'iOS & Android Cross-Platform Apps (React Native / Flutter)',
      'Touch-Optimized Haptic Feedback & Gesture Ergonomics',
      'Push Notification Engines & User Engagement Loops',
      'Offline-First Data Sync & Local Secure Storage',
      'App Store (iOS) & Google Play Store Submission & Compliance',
      'Real-Time Telemetry, Crash Reporting & User Analytics'
    ],
    sections: [
      {
        heading: '1. Designing for Single-Handed Mobile Ergonomics',
        content: 'Over 75% of mobile interaction occurs with a single thumb. We engineer thumb-zone navigation patterns, floating action bars, and swipe-driven transitions that feel natural, fluid, and lightning-fast.'
      },
      {
        heading: '2. High-Frequency Real-Time Performance & Haptics',
        content: 'From fintech trading portals to healthcare patient companions, we utilize native threads and optimized bridge architectures to ensure smooth 60fps rendering with subtle haptic vibrations that provide tactile confirmation for user actions.'
      },
      {
        heading: '3. End-to-End App Store Launch & ASO Optimization',
        content: 'We manage the entire submission pipeline—handling Apple App Store Guidelines, Google Play Data Safety declarations, automated builds, and App Store Optimization (ASO) to maximize organic downloads from day one.'
      }
    ],
    faqs: [
      { q: 'Do you build for both iPhone and Android?', a: 'Yes! We build cross-platform apps that deploy simultaneously to iOS and Android from a single performant codebase, reducing development cost and timeline by 40%.' },
      { q: 'Will you assist with App Store approvals?', a: 'Yes, we manage all review processes, sandbox test credentials, metadata submissions, and compliance checks until your app is live in the stores.' },
      { q: 'Can we schedule an in-person meeting in Mysore for app planning?', a: 'Yes! We welcome local founders and business owners at our Mysore studio in Vijayanagar 2nd Stage.' }
    ]
  },
  {
    slug: 'digital-marketing',
    serviceName: 'Digital Marketing & SEO in Mysore (Mysuru)',
    title: 'Digital Marketing & SEO Agency in Mysore (Mysuru) — Google #1 Ranking Systems',
    tag: 'Digital Marketing Mysore',
    readTime: '13 Min Read',
    date: 'August 25, 2026',
    image: '../assets/project-marketing.jpg',
    keywords: 'digital marketing agency in mysore, seo company in mysore, best seo agency mysuru, local seo services mysore, clinical SEO mysuru, google ads agency mysore',
    metaDesc: 'Premier digital marketing & SEO company in Mysore (Mysuru). Dominate Google Search, capture high-intent local customer leads, and scale your revenue with Socialeo.',
    overview: 'Traffic without conversions is an expense; traffic with high conversion architecture is a compounding asset. Socialeo is a premier digital marketing and SEO agency in Mysore (Mysuru) delivering data-backed organic SEO, technical search architecture, and targeted marketing funnels.',
    deliverables: [
      'Comprehensive Organic Search (SEO) Strategy & Keyword Clustering',
      'Structured Data & Schema.org JSON-LD Architecture',
      'High-Converting Landing Page Design & A/B Split Testing',
      'Google Ads / Meta Performance Funnel Architecture',
      'Conversion Rate Optimization (CRO) Heatmap & Journey Audits',
      'Monthly Attribution Analytics & Revenue ROI Reporting'
    ],
    sections: [
      {
        heading: '1. Local Mysore SEO & Google Maps Local 3-Pack Mastery',
        content: 'We optimize your complete local search presence in Mysore and Mysuru: Google Business Profile citations, local geo-tagged schemas, authentic customer review funnels, and localized keyword clustering to position your business in the coveted top 3 Google Maps positions.'
      },
      {
        heading: '2. Conversion Funnel Engineering & Friction Removal',
        content: 'Acquiring clicks is only half the equation. We analyze user friction points, optimize landing page copy, streamline form inputs, and deploy targeted call-to-actions that turn passive visitors into qualified sales inquiries.'
      },
      {
        heading: '3. Transparent ROI Tracking & Telemetry',
        content: 'No vanity metrics. We implement rigorous conversion tracking across Google Analytics 4, server-side Tag Manager, and custom attribution pipelines so you can evaluate the exact return on investment for every marketing rupee spent.'
      }
    ],
    faqs: [
      { q: 'How can Socialeo help my Mysore business rank #1 on Google?', a: 'We implement comprehensive on-page SEO, high-intent localized keyword clustering for Mysore & Mysuru, schema markup, Core Web Vitals speed optimization, and Google Business Profile synchronization.' },
      { q: 'How quickly can we expect SEO results in Mysore?', a: 'Local SEO enhancements typically show rank improvements in 3 to 6 weeks, with compounding organic revenue growth scaling over 3 to 6 months.' },
      { q: 'Do you provide transparent monthly ranking reports?', a: 'Yes! You receive monthly dashboards tracking exact keyword positions, organic impressions, and verified phone/WhatsApp conversion leads.' }
    ]
  },
  {
    slug: 'ui-ux-design',
    serviceName: 'UI/UX Design in Mysore (Mysuru)',
    title: 'UI/UX Design Studio & Product Strategy in Mysore (Mysuru) — Figma Systems',
    tag: 'UI/UX Design Mysore',
    readTime: '14 Min Read',
    date: 'August 25, 2026',
    image: '../assets/project-ecommerce.jpg',
    keywords: 'ui ux design studio mysore, product designer mysuru, figma UI design mysore, UX agency mysore karnataka, mobile app UI design mysuru',
    metaDesc: 'Human-centered UI/UX design studio in Mysore (Mysuru). Socialeo creates user research journey maps, interactive Figma prototypes, and scalable design token systems.',
    overview: 'Great user experience makes complex software feel effortless. Socialeo is a human-centered UI/UX design studio in Mysore (Mysuru) transforming complicated workflows into elegant, intuitive interfaces that reduce user fatigue, boost retention, and accelerate product adoption.',
    deliverables: [
      'In-Depth User Research, Persona Discovery & Journey Maps',
      'Interactive Clickable Prototypes (Figma & Web Sandbox)',
      'Comprehensive Design Systems (Tokens, Atoms, Molecules, Organisms)',
      'Accessibility (WCAG 2.1 AA) Compliance & Color Contrast Auditing',
      'UX Usability Testing & Friction Heatmap Analysis',
      'Design Hand-off Documentation & Developer Tokens'
    ],
    sections: [
      {
        heading: '1. Discovery & Empathetic User Journey Mapping',
        content: 'We begin by interviewing stakeholders and actual product users to uncover real pain points and operational workflows. We construct comprehensive user journey maps that identify and eliminate every point of cognitive friction before writing a single line of code.'
      },
      {
        heading: '2. Scalable Figma Design Systems & Token Architecture',
        content: 'We build living design systems with standardized color palettes, typographic scales, spacing tokens, and reusable component libraries. This ensures visual consistency across your entire product suite and accelerates future feature development by 3x.'
      },
      {
        heading: '3. Rapid Prototyping & Usability Validation',
        content: 'We create high-fidelity, interactive prototypes to validate workflows with real users. By testing task completion rates and navigation pathways early, we de-risk the development cycle and ensure effortless product adoption.'
      }
    ],
    faqs: [
      { q: 'Do you design UI/UX for both Web and Mobile apps in Mysore?', a: 'Yes, we engineer cohesive, cross-platform design systems for responsive web apps, SaaS dashboards, and native iOS/Android mobile applications.' },
      { q: 'Can you audit and redesign our existing product UI?', a: 'Yes, we conduct comprehensive UX usability audits with actionable heuristics evaluations and design modern overhaul blueprints.' },
      { q: 'How do you collaborate with our in-house developers?', a: 'We provide structured Figma files with auto-layouts, exported design tokens (CSS/JSON), and detailed interaction guidelines to ensure pixel-perfect engineering handoff.' }
    ]
  },
  {
    slug: 'brand-strategy',
    serviceName: 'Brand Strategy & Identity in Mysore (Mysuru)',
    title: 'Brand Strategy & Visual Identity Studio in Mysore (Mysuru) — Enduring Brands',
    tag: 'Brand Strategy Mysore',
    readTime: '12 Min Read',
    date: 'August 25, 2026',
    image: '../assets/project-web3.jpg',
    keywords: 'brand strategy agency mysore, logo design company mysuru, branding studio mysore karnataka, corporate identity mysuru, brand design agency mysore',
    metaDesc: 'Leading brand strategy & visual identity studio in Mysore (Mysuru). Socialeo crafts enduring logo suites, brand books, typography guidelines, and digital design languages.',
    overview: 'A distinctive brand identity is the highest-leverage asset in modern business. Socialeo is a brand strategy and design studio in Mysore (Mysuru) crafting enduring visual identities, strategic market positioning, and unified design languages that inspire trust and command premium pricing.',
    deliverables: [
      'Core Brand Positioning & Value Proposition Architecture',
      'Vector Logo Suite (Primary, Secondary, Monogram, Favicon)',
      'Curated Brand Typography Hierarchy & Custom Color Palettes',
      'Comprehensive Digital Brand Guidelines & Style Book (PDF & Web)',
      'Social Media Kit & Presentation Deck Templates',
      'Brand Tone of Voice & Editorial Messaging Framework'
    ],
    sections: [
      {
        heading: '1. Finding Your Strategic Market Whitespace in Mysore & Beyond',
        content: 'We dissect your industry landscape to identify underexplored market whitespace and unique positioning opportunities. We articulate what makes your offering indispensable, crafting a clear brand narrative that resonates with high-value decision makers.'
      },
      {
        heading: '2. Crafting an Enduring Visual Language',
        content: 'We translate your strategic positioning into iconic visual assets—distinctive logo marks, harmonious color palettes, bespoke typography pairings, and tactile graphic motifs that remain instantly recognizable across all digital and physical touchpoints.'
      },
      {
        heading: '3. Institutional Brand Guidelines for Seamless Execution',
        content: 'Your identity is documented in a clear, comprehensive brand manual. From strict logo clearance zones and responsive digital layouts to presentation decks and social collateral, your team receives the blueprints needed to maintain unwavering brand consistency.'
      }
    ],
    faqs: [
      { q: 'What do we receive at the end of a branding sprint in Mysore?', a: 'You receive vector master files (SVG, AI, EPS, PNG, PDF), font licenses/recommendations, color token specifications (HEX, RGB, CMYK, Pantone), and a comprehensive Brand Style Guide.' },
      { q: 'Do you help with brand naming and messaging?', a: 'Yes, we provide naming workshops, tagline development, and brand voice guidelines as part of our comprehensive branding sprints.' },
      { q: 'Can you align our website and pitch deck with the new brand?', a: 'Yes! We seamlessly roll out your new brand identity across your website, product UI, pitch decks, and digital collateral for a cohesive market presence.' }
    ]
  }
];

function generateServicePage(service) {
  const sectionsHtml = service.sections.map(s => `
    <section class="service-content-block">
      <h2>${s.heading}</h2>
      <p>${s.content}</p>
    </section>
  `).join('\n');

  const deliverablesHtml = service.deliverables.map(d => `
    <li class="deliverable-item">
      <span class="deliverable-check">✓</span>
      <span>${d}</span>
    </li>
  `).join('\n');

  const faqsHtml = service.faqs.map(f => `
    <div class="faq-card">
      <h3 class="faq-question">❓ ${f.q}</h3>
      <p class="faq-answer">${f.a}</p>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-PGMPT015CP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-PGMPT015CP');
  </script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${service.serviceName} Solutions &amp; Strategy — Socialeo Digital Studio</title>
  <meta name="description" content="${service.metaDesc}">
  <meta name="keywords" content="${service.keywords}">
  <meta name="author" content="Manpreeth N (Manu) — Founder &amp; CEO">
  <meta name="theme-color" content="#050507">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%23FF416C'/><circle cx='50' cy='50' r='22' fill='%23FFFFFF'/></svg>">
  <link rel="canonical" href="https://socialeo.vercel.app/services/${service.slug}.html">
  <link rel="manifest" href="../manifest.json">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Socialeo Digital Studio">
  <meta property="og:title" content="${service.serviceName} Solutions &amp; Strategy — Socialeo Digital Studio">
  <meta property="og:description" content="${service.metaDesc}">
  <meta property="og:image" content="https://socialeo.vercel.app/${service.thumb || 'assets/hero-bg.jpg'}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${service.serviceName} by Socialeo">
  <meta property="og:url" content="https://socialeo.vercel.app/services/${service.slug}.html">
  <meta property="og:locale" content="en_US">

  <!-- Twitter / X Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://socialeo.vercel.app/services/${service.slug}.html">
  <meta name="twitter:title" content="${service.serviceName} Solutions &amp; Strategy — Socialeo Digital Studio">
  <meta name="twitter:description" content="${service.metaDesc}">
  <meta name="twitter:image" content="https://socialeo.vercel.app/${service.thumb || 'assets/hero-bg.jpg'}">

  <!-- Schema.org Multi-Entity JSON-LD (Service, FAQPage, BreadcrumbList) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://socialeo.vercel.app/services/${service.slug}.html#service",
        "name": "${service.serviceName} by Socialeo",
        "serviceType": "${service.serviceName}",
        "url": "https://socialeo.vercel.app/services/${service.slug}.html",
        "description": "${service.metaDesc}",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Socialeo",
          "founder": {
            "@type": "Person",
            "name": "Manpreeth N (Manu)",
            "jobTitle": "Founder & CEO"
          },
          "url": "https://socialeo.vercel.app/",
          "telephone": "+918722163256",
          "email": "socialeopvtltd@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1646, 5th Main, Vijayanagar 2nd Stage",
            "addressLocality": "Mysore",
            "addressRegion": "Karnataka",
            "postalCode": "570017",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.3364,
            "longitude": 76.6191
          },
          "hasMap": "https://maps.app.goo.gl/3eEMtYTEdMpLEyoz8"
        },
        "areaServed": [
          { "@type": "City", "name": "Mysore" },
          { "@type": "City", "name": "Mysuru" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "AdministrativeArea", "name": "Karnataka" },
          { "@type": "Country", "name": "India" },
          { "@type": "AdministrativeArea", "name": "Global" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://socialeo.vercel.app/services/${service.slug}.html#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://socialeo.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://socialeo.vercel.app/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${service.serviceName}",
            "item": "https://socialeo.vercel.app/services/${service.slug}.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://socialeo.vercel.app/services/${service.slug}.html#faq",
        "mainEntity": [
          ${service.faqs.map(f => `{
            "@type": "Question",
            "name": ${JSON.stringify(f.q)},
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ${JSON.stringify(f.a)}
            }
          }`).join(',\n          ')}
        ]
      }
    ]
  }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..800;1,9..40,400..800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Outfit:wght@500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Main Stylesheet -->
  <link rel="stylesheet" href="../styles.css">

  <style>
    .service-page-wrapper {
      padding-top: calc(var(--header-height) + 40px);
      padding-bottom: 90px;
    }
    .service-breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .service-breadcrumbs a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.2s;
    }
    .service-breadcrumbs a:hover {
      color: var(--text-accent);
    }
    .service-two-col-layout {
      display: grid;
      grid-template-columns: 1.55fr 1fr;
      gap: 48px;
      align-items: start;
    }
    .service-main-content {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 40px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    }
    .service-badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 94, 58, 0.12);
      border: 1px solid rgba(255, 94, 58, 0.3);
      color: var(--text-accent);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 6px 14px;
      border-radius: 999px;
      margin-bottom: 16px;
    }
    .service-headline {
      font-family: var(--font-display);
      font-size: clamp(1.8rem, 3.2vw, 2.4rem);
      font-weight: 800;
      color: var(--text-primary);
      line-height: 1.25;
      margin-bottom: 20px;
      letter-spacing: -0.02em;
    }
    .service-meta-row {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 13.5px;
      color: var(--text-muted);
      padding-bottom: 24px;
      margin-bottom: 28px;
      border-bottom: 1px solid var(--border-subtle);
    }
    .service-hero-img-box {
      border-radius: var(--radius-md);
      overflow: hidden;
      margin-bottom: 32px;
      max-height: 380px;
      border: 1px solid var(--border-subtle);
    }
    .service-hero-img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .service-lead-overview {
      font-size: 1.12rem;
      line-height: 1.75;
      color: var(--text-primary);
      margin-bottom: 36px;
      font-weight: 450;
      background: rgba(255,255,255,0.02);
      padding: 20px 24px;
      border-left: 3px solid var(--text-accent);
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    }
    .service-content-block {
      margin-bottom: 36px;
    }
    .service-content-block h2 {
      font-family: var(--font-display);
      font-size: 1.45rem;
      color: var(--text-primary);
      margin-bottom: 14px;
      font-weight: 700;
    }
    .service-content-block p {
      font-size: 1rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: 16px;
    }
    .deliverables-box {
      background: rgba(18, 18, 24, 0.85);
      border: 1px solid rgba(255, 94, 58, 0.25);
      border-radius: var(--radius-md);
      padding: 28px;
      margin-bottom: 40px;
    }
    .deliverables-box h3 {
      font-family: var(--font-display);
      font-size: 1.25rem;
      color: #fff;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .deliverables-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .deliverable-item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14.5px;
      color: var(--text-primary);
    }
    .deliverable-check {
      color: var(--text-accent);
      font-weight: 900;
      font-size: 16px;
    }
    .faq-section {
      margin-top: 40px;
      padding-top: 30px;
      border-top: 1px solid var(--border-subtle);
    }
    .faq-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 20px;
      margin-bottom: 14px;
    }
    .faq-question {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 8px;
    }
    .faq-answer {
      font-size: 0.95rem;
      line-height: 1.65;
      color: var(--text-secondary);
      margin: 0;
    }

    /* RIGHT STICKY WHATSAPP INQUIRY CARD (COMPACT SINGLE DESKTOP SCREEN) */
    .sticky-inquiry-sidebar {
      position: sticky;
      top: calc(var(--header-height) + 20px);
      max-height: calc(100vh - 100px);
      z-index: 10;
    }
    .whatsapp-inquiry-card {
      background: radial-gradient(circle at top right, rgba(37, 211, 102, 0.14) 0%, rgba(18, 18, 24, 0.98) 75%);
      border: 1px solid rgba(37, 211, 102, 0.35);
      border-radius: var(--radius-lg);
      padding: 22px 20px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.6);
      box-sizing: border-box;
    }
    .wa-card-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }
    .wa-icon-box {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #25D366;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 20px;
      box-shadow: 0 0 16px rgba(37, 211, 102, 0.5);
      flex-shrink: 0;
    }
    .wa-title {
      font-family: var(--font-display);
      font-size: 1.15rem;
      color: #fff;
      margin: 0;
      font-weight: 800;
      line-height: 1.2;
    }
    .wa-subtitle {
      font-size: 11.5px;
      color: var(--text-muted);
      margin-top: 2px;
    }
    .wa-form-group {
      margin-bottom: 10px;
    }
    .wa-form-group label {
      display: block;
      font-size: 11px;
      font-weight: 700;
      color: var(--text-secondary);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .wa-input, .wa-textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.45);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 9px 12px;
      color: #fff;
      font-family: inherit;
      font-size: 13px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.2s;
    }
    .wa-input:focus, .wa-textarea:focus {
      border-color: #25D366;
      box-shadow: 0 0 12px rgba(37, 211, 102, 0.25);
    }
    .wa-textarea {
      height: 64px;
      resize: none;
    }
    .wa-submit-btn {
      width: 100%;
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: #ffffff;
      border: none;
      border-radius: var(--radius-sm);
      padding: 12px 16px;
      font-size: 13.5px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
      transition: all 0.2s;
      margin-top: 12px;
    }
    .wa-submit-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 24px rgba(37, 211, 102, 0.55);
      background: linear-gradient(135deg, #2ae06d 0%, #179e8e 100%);
    }
    .wa-direct-call {
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: var(--text-muted);
    }
    .wa-direct-call a {
      color: #25D366;
      font-weight: 700;
      text-decoration: none;
    }

    @media (max-width: 960px) {
      .service-two-col-layout {
        grid-template-columns: 1fr;
      }
      .service-main-content {
        padding: 24px;
      }
      .sticky-inquiry-sidebar {
        position: static;
        max-height: none;
      }
    }
  </style>
</head>
<body>

  <!-- Background Atmosphere -->
  <div class="bg-atmosphere"></div>
  <div class="bg-grid-overlay"></div>

  <!-- Navigation Bar -->
  <header class="navbar">
    <div class="container nav-container">
      <a href="../index.html#hero" class="logo" id="brand-logo">
        <div class="logo-icon"></div>
        <span>Socialeo</span>
      </a>

      <nav>
        <ul class="nav-links">
          <li><a href="../index.html#hero" class="nav-link">Home</a></li>
          <li><a href="../index.html#about" class="nav-link">About Us</a></li>
          <li><a href="../index.html#services" class="nav-link active">Services</a></li>
          <li><a href="../index.html#process" class="nav-link">Process</a></li>
          <li><a href="../index.html#projects" class="nav-link">Projects</a></li>
          <li><a href="../blogs.html" class="nav-link">Blogs</a></li>
          <li><a href="../index.html#testimonials" class="nav-link">Testimonials</a></li>
          <li><a href="../index.html#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Dark / Light Mode" title="Toggle Mode">🌙</button>
        <a href="../index.html#contact" class="btn btn-primary" id="nav-cta-btn">Contact Us</a>
        <button class="mobile-menu-btn" id="mobile-toggle-btn" aria-label="Toggle Navigation">☰</button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-nav-drawer" id="mobile-drawer">
    <a href="../index.html#hero" class="nav-link">Home</a>
    <a href="../index.html#about" class="nav-link">About Us</a>
    <a href="../index.html#services" class="nav-link active">Services</a>
    <a href="../index.html#process" class="nav-link">Our Process</a>
    <a href="../index.html#projects" class="nav-link">Projects</a>
    <a href="../blogs.html" class="nav-link">Blogs &amp; Insights</a>
    <a href="../index.html#testimonials" class="nav-link">Testimonials</a>
    <a href="../index.html#contact" class="nav-link">Contact Us</a>
    <a href="../index.html#contact" class="btn btn-primary" style="margin-top: 12px; text-align:center;">Start a Project</a>
  </div>

  <!-- Main Content Layout -->
  <main class="container service-page-wrapper">
    
    <!-- Breadcrumbs -->
    <div class="service-breadcrumbs">
      <a href="../index.html">Home</a>
      <span>/</span>
      <a href="../index.html#services">Services</a>
      <span>/</span>
      <span style="color:var(--text-primary); font-weight:600;">${service.serviceName}</span>
    </div>

    <div class="service-two-col-layout">
      
      <!-- LEFT COLUMN: Deep Blog & Technical Service Guide -->
      <article class="service-main-content">
        <div class="service-badge-pill">✦ ${service.tag}</div>
        <h1 class="service-headline">${service.title}</h1>
        
        <div class="service-meta-row">
          <span>By <strong>Manpreeth N (Manu)</strong> &bull; Founder &amp; CEO</span>
          <span>&bull;</span>
          <span>⏱️ ${service.readTime}</span>
          <span>&bull;</span>
          <span>📅 ${service.date}</span>
        </div>

        <div class="service-hero-img-box">
          <img src="${service.image}" alt="${service.serviceName} - Socialeo Digital Studio" fetchpriority="high">
        </div>

        <div class="service-lead-overview">
          ${service.overview}
        </div>

        <!-- Key Deliverables -->
        <div class="deliverables-box">
          <h3>📦 Scope &amp; Core Deliverables</h3>
          <ul class="deliverables-list">
            ${deliverablesHtml}
          </ul>
        </div>

        <!-- Deep Content Sections -->
        ${sectionsHtml}

        <!-- FAQs Section -->
        <div class="faq-section">
          <h2 style="font-family:var(--font-display); font-size:1.4rem; color:#fff; margin-bottom:18px;">Frequently Asked Questions</h2>
          ${faqsHtml}
        </div>

      </article>

      <!-- RIGHT COLUMN: Compact Sticky WhatsApp Inquiry Card (Single Screen Viewport) -->
      <aside class="sticky-inquiry-sidebar">
        <div class="whatsapp-inquiry-card">
          <div class="wa-card-header">
            <div class="wa-icon-box">💬</div>
            <div>
              <h2 class="wa-title">Quick WhatsApp Inquiry</h2>
              <div class="wa-subtitle">Direct line to Manpreeth N (Founder &amp; CEO)</div>
            </div>
          </div>

          <form id="whatsapp-inquiry-form" onsubmit="handleWhatsAppSubmit(event)">
            <div class="wa-form-group">
              <label for="wa-name">Your Full Name *</label>
              <input type="text" id="wa-name" class="wa-input" placeholder="e.g. Rahul Sharma" required>
            </div>

            <div class="wa-form-group">
              <label for="wa-phone">WhatsApp Number *</label>
              <input type="tel" id="wa-phone" class="wa-input" placeholder="+91 98765 43210" required>
            </div>

            <div class="wa-form-group">
              <label for="wa-message">Your Message *</label>
              <textarea id="wa-message" class="wa-textarea" placeholder="Type your message or project requirements..." required></textarea>
            </div>

            <button type="submit" class="wa-submit-btn" id="wa-send-btn">
              <span>Send WhatsApp Message 💬</span>
              <span>→</span>
            </button>
          </form>

          <div class="wa-direct-call">
            <span>Direct Phone Call:</span>
            <a href="tel:+918722163256">📞 +91 8722163256</a>
          </div>

        </div>
      </aside>

    </div>
  </main>

  <!-- Footer Section -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <a href="../index.html#hero" class="logo footer-logo">
          <div class="logo-icon"></div>
          <span>Socialeo</span>
        </a>

        <ul class="footer-links">
          <li><a href="../index.html#hero" class="footer-link">Home</a></li>
          <li><a href="../index.html#about" class="footer-link">About Us</a></li>
          <li><a href="../index.html#services" class="footer-link">Services</a></li>
          <li><a href="../index.html#process" class="footer-link">Process</a></li>
          <li><a href="../index.html#projects" class="footer-link">Projects</a></li>
          <li><a href="../blogs.html" class="footer-link">Blogs</a></li>
          <li><a href="../index.html#testimonials" class="footer-link">Testimonials</a></li>
          <li><a href="../index.html#contact" class="footer-link">Contact</a></li>
        </ul>

        <div class="social-links" style="margin-top: 10px;">
          <a href="https://maps.app.goo.gl/3eEMtYTEdMpLEyoz8" target="_blank" rel="noopener" class="social-btn" aria-label="Google Maps" title="Google Maps">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
          </a>
          <a href="https://www.instagram.com/socialeo.in" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener" class="social-btn" aria-label="Twitter / X" title="Twitter / X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://github.com/Manu-Socialeo/socialeo" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <div>Copyright &copy; 2026 Socialeo. All rights reserved.</div>
        <div class="footer-legal">
          <a href="../privacy-policy.html">Privacy Policy</a>
          <a href="../terms.html">Terms of Service</a>
          <a href="../cookie-policy.html">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Toast Notification Container -->
  <div class="toast-container"></div>

  <!-- Back to Top Floating Button -->
  <button class="back-to-top" aria-label="Back to top">↑</button>

  <!-- JavaScript -->
  <script src="../main.js"></script>

  <script>
    function handleWhatsAppSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('wa-name').value.trim();
      const phone = document.getElementById('wa-phone').value.trim();
      const messageText = document.getElementById('wa-message').value.trim();

      const message = \`Hi Socialeo Team! 👋\\n\\nI would like to inquire about *\${service.serviceName}*.\\n\\n👤 *Name:* \${name}\\n📱 *WhatsApp Number:* \${phone}\\n💬 *Message:* \${messageText}\\n\\nPlease let me know when we can connect!\`;

      const encodedMsg = encodeURIComponent(message);
      const waUrl = \`https://wa.me/918722163256?text=\${encodedMsg}\`;
      
      window.open(waUrl, '_blank');
    }
  </script>

</body>
</html>
`;
}

// Generate all 6 service pages
services.forEach(service => {
  const filePath = path.join(servicesDir, `${service.slug}.html`);
  fs.writeFileSync(filePath, generateServicePage(service), 'utf-8');
  console.log(`Generated service page: services/${service.slug}.html`);
});

console.log('🎉 All 6 service blog pages with WhatsApp forms generated successfully!');
