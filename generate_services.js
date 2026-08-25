const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

const services = [
  {
    slug: 'web-design',
    serviceName: 'Web Design',
    title: 'Bespoke Web Design & UI Systems That Convert Visitors Into High-Value Clients',
    tag: 'Digital Craft & UX',
    readTime: '12 Min Read',
    date: 'August 24, 2026',
    image: '../assets/project-saas.jpg',
    keywords: 'bespoke web design, conversion web design, luxury UI UX design, custom website agency',
    metaDesc: 'Discover how Socialeo engineers custom, conversion-driven web design and intuitive user flows that captivate visitors, elevate brand trust, and drive compounding business growth.',
    overview: 'In an era where digital first impressions determine company valuation and customer trust, generic templates no longer cut it. Socialeo crafts handcrafted web design systems tailored to your distinct market positioning, combining editorial typography, high-contrast visual hierarchy, and frictionless user flows.',
    deliverables: [
      'Custom Responsive UI/UX Layouts (Figma & Code)',
      'Design Token Systems (Typography, Colors, Spacing)',
      'Conversion-Optimized Customer Journey Wireframes',
      'Interactive Micro-Animations & Fluid Hover States',
      'Mobile-First Touch Ergonomics & Responsive Breakpoints',
      'High-Resolution Graphic Assets & Brand Illustrations'
    ],
    sections: [
      {
        heading: '1. Why Bespoke Visual Architecture Outperforms Standard Templates',
        content: 'When visitors land on your digital storefront, neurological research demonstrates that subconscious credibility assessments occur within 50 milliseconds. Cookie-cutter templates dilute brand authority with predictable stock layouts. Our custom web design approach starts with an exhaustive competitor teardown and persona modeling, creating a tailored aesthetic that immediately positions your brand as the definitive category leader.'
      },
      {
        heading: '2. The Neuroscience of Conversion-Driven Typography & Layouts',
        content: 'Every layout decision at Socialeo is backed by eye-tracking data and cognitive load principles. We utilize modern variable fonts, strict visual vertical rhythm, and strategic negative space to guide user focus toward primary conversion triggers—lowering bounce rates while maximizing engagement duration.'
      },
      {
        heading: '3. Technical Precision Across All Screen Resolutions',
        content: 'From 4K ultra-wide monitors down to compact mobile displays, our designs adapt seamlessly. We design across fluid CSS grids and vector SVG pipelines, ensuring crisp rendering and razor-sharp clarity on retina displays without excessive asset payloads.'
      }
    ],
    faqs: [
      { q: 'How long does a custom web design project take?', a: 'Standard bespoke design sprints take 2 to 4 weeks depending on scope, page count, and custom asset requirements.' },
      { q: 'Will I receive Figma design files?', a: 'Yes, complete Figma design systems with organized component libraries, auto-layouts, and developer-ready tokens are delivered upon project completion.' },
      { q: 'Do you also handle the frontend development?', a: 'Yes! We provide complete end-to-end delivery from design to full-stack production deployment on Next.js or Webflow.' }
    ]
  },
  {
    slug: 'web-development',
    serviceName: 'Web Development',
    title: 'High-Performance Full-Stack Web Development: Scalable, Secure & Blazing Fast',
    tag: 'Full-Stack Engineering',
    readTime: '15 Min Read',
    date: 'August 23, 2026',
    image: '../assets/project-cloud.jpg',
    keywords: 'full stack web development, Next.js web apps, edge CDN hosting, custom web application agency',
    metaDesc: 'Explore enterprise-grade web development from Socialeo: sub-second page loads, clean component architecture, robust API integrations, and 99.99% cloud uptime.',
    overview: 'Performance is a feature. Socialeo builds modern full-stack web applications and high-speed websites powered by clean architecture, Next.js / React, Server-Side Rendering (SSR), and Edge CDN distribution.',
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
        heading: '1. Engineering for Sub-Second Speed & 100% Core Web Vitals',
        content: 'Google Core Web Vitals are a foundational ranking factor. Slow sites hemorrhage revenue and search rankings. By utilizing tree-shaking, automated image optimization with AVIF/WebP formats, and edge caching at the cloud boundary, our web solutions achieve sub-500ms Largest Contentful Paint (LCP) times globally.'
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
      { q: 'What tech stack do you recommend for high-growth web apps?', a: 'We specialize in Next.js, React, Node.js, TailwindCSS / Vanilla CSS, PostgreSQL, and Vercel/AWS Edge Cloud infrastructure.' },
      { q: 'Can you migrate our legacy website to a modern stack?', a: 'Yes, we specialize in zero-downtime migrations that preserve your existing SEO rankings, backlink profiles, and user database.' },
      { q: 'Do you provide maintenance and cloud hosting support?', a: 'Yes, our Annual Maintenance Contracts (AMC) include 24/7 uptime monitoring, security updates, quarterly speed tuning, and CDN management.' }
    ]
  },
  {
    slug: 'mobile-apps',
    serviceName: 'Mobile Apps',
    title: 'Native & Cross-Platform Mobile App Development Built for Touch Speed & Retention',
    tag: 'Mobile Engineering',
    readTime: '11 Min Read',
    date: 'August 22, 2026',
    image: '../assets/project-fintech.jpg',
    keywords: 'mobile app development, iOS Android cross-platform apps, React Native agency, mobile UI UX',
    metaDesc: 'Socialeo develops high-retention iOS and Android mobile applications featuring smooth haptic feedback, dark-mode ergonomics, and seamless cloud synchronization.',
    overview: 'Turn your product vision into an intuitive mobile app that users love to open daily. We design and develop native and cross-platform mobile apps that combine fluid 60fps animations, intuitive gesture navigation, and robust offline capabilities.',
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
      { q: 'Can the app work offline?', a: 'Yes, we implement SQLite and reactive local storage with background synchronization so users can continue work seamlessly without internet connectivity.' }
    ]
  },
  {
    slug: 'digital-marketing',
    serviceName: 'Digital Marketing',
    title: 'Data-Backed SEO, Performance Marketing & Conversion Rate Optimization (CRO)',
    tag: 'Growth & SEO',
    readTime: '13 Min Read',
    date: 'August 21, 2026',
    image: '../assets/project-marketing.jpg',
    keywords: 'digital marketing agency, clinical SEO, performance marketing funnels, conversion rate optimization',
    metaDesc: 'Drive predictable, compounding customer acquisition with Socialeo’s data-driven SEO strategies, high-intent Google Ads campaigns, and conversion funnel engineering.',
    overview: 'Traffic without conversions is an expense; traffic with high conversion architecture is a compounding asset. Socialeo provides end-to-end organic SEO, technical search architecture, and targeted marketing campaigns that scale customer acquisition.',
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
        heading: '1. Clinical Technical SEO That Dominates Search Rankings',
        content: 'We go beyond basic meta tags. We construct authoritative keyword topic clusters, implement Schema.org microdata (MedicalClinic, ProfessionalService, FAQPage, Article), and fix technical crawl bottlenecks to secure dominant organic positions for high-intent transactional search queries.'
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
      { q: 'How quickly can we expect SEO results?', a: 'Technical optimizations and index fixes typically show rank improvements within 3 to 6 weeks, with compounding organic revenue growth scaling continuously over 3 to 6 months.' },
      { q: 'Do you manage paid ad campaigns as well?', a: 'Yes, we manage Google Search Ads, Performance Max, and LinkedIn/Meta campaigns with dedicated landing page CRO.' },
      { q: 'Do you provide regular progress reports?', a: 'Yes, you receive transparent monthly performance dashboards covering organic keyword rankings, traffic quality, conversion rates, and pipeline revenue.' }
    ]
  },
  {
    slug: 'ui-ux-design',
    serviceName: 'UI/UX Design',
    title: 'User-Centric UI/UX Research, Interactive Wireframing & Bespoke Design Systems',
    tag: 'UI/UX Systems',
    readTime: '14 Min Read',
    date: 'August 20, 2026',
    image: '../assets/project-ecommerce.jpg',
    keywords: 'UI UX design agency, Figma design systems, user research wireframing, UX journey mapping',
    metaDesc: 'Elevate your software with human-centered UI/UX design: in-depth user journey research, high-fidelity prototypes, interactive micro-animations, and comprehensive Figma design systems.',
    overview: 'Great user experience makes complex software feel effortless. Socialeo transforms complicated workflows into elegant, intuitive interfaces that reduce user fatigue, boost retention, and accelerate product adoption.',
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
      { q: 'What is the difference between UI and UX in your process?', a: 'UX focuses on user logic, information architecture, wireframing, and reducing friction; UI focuses on visual aesthetics, typography, color harmony, and micro-animations. We integrate both into a unified craft.' },
      { q: 'Can you audit and redesign our existing application?', a: 'Yes, we conduct comprehensive UX usability audits with actionable heuristics evaluations and design modern overhaul blueprints.' },
      { q: 'How do you collaborate with our in-house developers?', a: 'We provide structured Figma files with auto-layouts, exported design tokens (CSS/JSON), and detailed interaction guidelines to ensure pixel-perfect engineering handoff.' }
    ]
  },
  {
    slug: 'brand-strategy',
    serviceName: 'Brand Strategy',
    title: 'Brand Strategy, Visual Identity Systems & Market-Defining Design Languages',
    tag: 'Brand Architecture',
    readTime: '12 Min Read',
    date: 'August 19, 2026',
    image: '../assets/project-web3.jpg',
    keywords: 'brand strategy agency, visual identity design, logo design typography guidelines, brand positioning',
    metaDesc: 'Build a memorable, market-defining brand with Socialeo: strategic brand positioning, iconic visual identities, typography guidelines, and digital brand style guides.',
    overview: 'A distinctive brand identity is the highest-leverage asset in modern business. Socialeo crafts enduring visual identities, strategic market positioning, and unified design languages that inspire trust and command premium pricing.',
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
        heading: '1. Finding Your Strategic Market Whitespace',
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
      { q: 'What do we receive at the end of a branding sprint?', a: 'You receive vector master files (SVG, AI, EPS, PNG, PDF), font licenses/recommendations, color token specifications (HEX, RGB, CMYK, Pantone), and a comprehensive Brand Style Guide.' },
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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${service.serviceName} Solutions &amp; Strategy — Socialeo Digital Studio</title>
  <meta name="description" content="${service.metaDesc}">
  <meta name="keywords" content="${service.keywords}">
  <meta name="author" content="Socialeo">
  <meta name="theme-color" content="#050507">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%23FF416C'/><circle cx='50' cy='50' r='22' fill='%23FFFFFF'/></svg>">

  <!-- Open Graph / Meta -->
  <meta property="og:title" content="${service.serviceName} Solutions — Socialeo Digital Studio">
  <meta property="og:description" content="${service.metaDesc}">
  <meta property="og:image" content="https://socialeo.vercel.app/${service.thumb || 'assets/hero-bg.jpg'}">
  <meta property="og:url" content="https://socialeo.vercel.app/services/${service.slug}.html">
  <meta property="og:type" content="article">

  <!-- Canonical & Manifest -->
  <link rel="canonical" href="https://socialeo.vercel.app/services/${service.slug}.html">
  <link rel="manifest" href="../manifest.json">

  <!-- Schema.org JSON-LD Structured Data for SEO -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${service.serviceName} by Socialeo",
    "serviceType": "${service.serviceName}",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Socialeo",
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
      }
    },
    "description": "${service.metaDesc}",
    "areaServed": "Global"
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

    /* RIGHT STICKY WHATSAPP INQUIRY CARD */
    .sticky-inquiry-sidebar {
      position: sticky;
      top: calc(var(--header-height) + 20px);
    }
    .whatsapp-inquiry-card {
      background: radial-gradient(circle at top right, rgba(37, 211, 102, 0.15) 0%, rgba(18, 18, 24, 0.98) 70%);
      border: 1px solid rgba(37, 211, 102, 0.35);
      border-radius: var(--radius-lg);
      padding: 32px 28px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.6);
    }
    .wa-card-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 16px;
    }
    .wa-icon-box {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #25D366;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
      box-shadow: 0 0 20px rgba(37, 211, 102, 0.5);
      flex-shrink: 0;
    }
    .wa-title {
      font-family: var(--font-display);
      font-size: 1.3rem;
      color: #fff;
      margin: 0;
      font-weight: 800;
    }
    .wa-subtitle {
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 2px;
    }
    .wa-desc {
      font-size: 13.5px;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 22px;
    }
    .wa-form-group {
      margin-bottom: 14px;
    }
    .wa-form-group label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      color: var(--text-secondary);
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .wa-input, .wa-textarea, .wa-select {
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 12px 14px;
      color: #fff;
      font-family: inherit;
      font-size: 14px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.2s;
    }
    .wa-input:focus, .wa-textarea:focus, .wa-select:focus {
      border-color: #25D366;
      box-shadow: 0 0 14px rgba(37, 211, 102, 0.25);
    }
    .wa-submit-btn {
      width: 100%;
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: #ffffff;
      border: none;
      border-radius: var(--radius-sm);
      padding: 14px 20px;
      font-size: 14.5px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
      transition: all 0.2s;
      margin-top: 18px;
    }
    .wa-submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
      background: linear-gradient(135deg, #2ae06d 0%, #179e8e 100%);
    }
    .wa-direct-call {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
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
          <li><a href="../index.html#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="https://wa.me/918722163256?text=Hi%20Socialeo%2C%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(service.serviceName)}%20services." target="_blank" class="btn btn-primary" style="background:#25D366; border:none;">WhatsApp Us 💬</a>
      </div>
    </div>
  </header>

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
          <span>By <strong>Socialeo Studio</strong></span>
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

      <!-- RIGHT COLUMN: Sticky WhatsApp Inquiry Form -->
      <aside class="sticky-inquiry-sidebar">
        <div class="whatsapp-inquiry-card">
          <div class="wa-card-header">
            <div class="wa-icon-box">💬</div>
            <div>
              <h2 class="wa-title">Start via WhatsApp</h2>
              <div class="wa-subtitle">Direct line to Socialeo Lead Engineers</div>
            </div>
          </div>
          
          <p class="wa-desc">
            Submit your details below to launch an instant pre-filled WhatsApp conversation directly with our studio founders.
          </p>

          <form id="whatsapp-inquiry-form" onsubmit="handleWhatsAppSubmit(event)">
            <div class="wa-form-group">
              <label for="wa-name">Your Full Name *</label>
              <input type="text" id="wa-name" class="wa-input" placeholder="e.g. Rahul Sharma" required>
            </div>

            <div class="wa-form-group">
              <label for="wa-phone">WhatsApp Phone Number *</label>
              <input type="tel" id="wa-phone" class="wa-input" placeholder="+91 98765 43210" required>
            </div>

            <div class="wa-form-group">
              <label for="wa-service">Service Requirement</label>
              <select id="wa-service" class="wa-select">
                <option value="${service.serviceName}" selected>${service.serviceName} (Current)</option>
                <option value="Web Design">Web Design &amp; UI Systems</option>
                <option value="Web Development">Full-Stack Web Development</option>
                <option value="Mobile Apps">Mobile App Development</option>
                <option value="Digital Marketing">Digital Marketing &amp; SEO</option>
                <option value="UI/UX Design">UI/UX Research &amp; Wireframing</option>
                <option value="Brand Strategy">Brand Strategy &amp; Identity</option>
              </select>
            </div>

            <div class="wa-form-group">
              <label for="wa-budget">Estimated Budget / Timeline</label>
              <input type="text" id="wa-budget" class="wa-input" placeholder="e.g. ₹50,000 / 2-3 Weeks">
            </div>

            <div class="wa-form-group">
              <label for="wa-notes">Project Scope &amp; Vision</label>
              <textarea id="wa-notes" class="wa-textarea" rows="3" placeholder="Describe your goals, existing links, or requirements..."></textarea>
            </div>

            <button type="submit" class="wa-submit-btn" id="wa-send-btn">
              <span>Send WhatsApp Message</span>
              <span>→</span>
            </button>
          </form>

          <div class="wa-direct-call">
            <span>Prefer a quick phone call?</span>
            <a href="tel:+918722163256">📞 +91 8722163256</a>
          </div>

        </div>
      </aside>

    </div>
  </main>

  <!-- Footer -->
  <footer style="border-top:1px solid var(--border-subtle); padding:40px 0; text-align:center; color:var(--text-muted); font-size:13.5px;">
    <div class="container">
      <p>&copy; 2026 Socialeo Digital Studio. 1646, 5th Main, Vijayanagar 2nd Stage, Mysore, Karnataka 570017.</p>
    </div>
  </footer>

  <script>
    function handleWhatsAppSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('wa-name').value.trim();
      const phone = document.getElementById('wa-phone').value.trim();
      const service = document.getElementById('wa-service').value;
      const budget = document.getElementById('wa-budget').value.trim() || 'Flexible';
      const notes = document.getElementById('wa-notes').value.trim() || 'Please share portfolio and initial proposal.';

      const message = \`Hi Socialeo Team! 👋\\n\\nI would like to inquire about your *\${service}* services.\\n\\n👤 *Name:* \${name}\\n📱 *Phone:* \${phone}\\n💰 *Budget/Timeline:* \${budget}\\n📝 *Project Scope:* \${notes}\\n\\nPlease let me know when we can connect!\`;

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
