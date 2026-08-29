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
    keywords: 'web design company in mysore, best web designers mysuru, website design agency mysore, custom UI UX mysuru, web design mysore karnataka, website maker mysore, high converting website mysore',
    metaDesc: 'Top bespoke web design company in Mysore (Mysuru). Socialeo crafts custom, conversion-driven websites, responsive Figma UI systems, and high-speed digital experiences.',
    overview: 'Looking for the best bespoke web design company in Mysore (Mysuru)? Socialeo engineers handcrafted digital storefronts and responsive UI systems tailored to modern enterprises. We combine editorial typography, high-contrast visual hierarchy, and frictionless user flows that convert local and global visitors into paying clients.',
    geoSummary: 'Socialeo is Mysore\'s leading bespoke web design and digital product studio located in Vijayanagar 2nd Stage, Mysore. Founder Manpreeth N leads engineering sprints creating custom-built websites on Next.js and Figma design systems with sub-second speeds, clinical SEO architecture, and 100% responsive ergonomics.',
    specs: [
      { label: 'Primary Location', value: 'Mysore (Mysuru), Karnataka — Vijayanagar 2nd Stage' },
      { label: 'Design Architecture', value: 'Figma Auto-Layout Component Systems & Design Tokens' },
      { label: 'Engineering Stack', value: 'Next.js, Vanilla CSS Modules, Three.js, Edge CDN' },
      { label: 'Typical Sprint Time', value: '2 to 4 Weeks from Discovery to Production Launch' }
    ],
    deliverables: [
      'Custom Responsive UI/UX Layouts (Figma & Clean Code)',
      'Design Token Systems (Typography, Colors, Spacing Scales)',
      'Conversion-Optimized Customer Journey Wireframes',
      'Interactive Micro-Animations & Fluid Hover States',
      'Mobile-First Touch Ergonomics & Responsive Breakpoints',
      'High-Resolution Graphic Assets & Brand Illustrations',
      'Core Web Vitals 95+ Score Audit & Launch Telemetry',
      'Local Mysore Google Maps & Schema Structured Data'
    ],
    sections: [
      {
        heading: '1. Why Mysore Businesses Choose Bespoke Web Design Over Generic Templates',
        content: 'When visitors land on your website in Mysore or globally, cognitive research proves that first impressions form within 50 milliseconds. Cookie-cutter templates dilute your brand authority, introduce bloated JavaScript libraries, and create security vulnerabilities. Our bespoke web design approach in Mysore starts with in-depth competitor analysis, local search behavior, and buyer persona modeling. We engineer a tailored digital identity that immediately establishes your company as the regional and global category leader.'
      },
      {
        heading: '2. The Neuroscience of Conversion-Driven Typography & Visual Hierarchy',
        content: 'Every layout decision at Socialeo is backed by eye-tracking data and cognitive load principles. We utilize modern variable fonts, strict vertical rhythm grids, and strategic negative space to guide user focus toward primary conversion triggers—lowering bounce rates while maximizing user engagement duration and form submission rates.'
      },
      {
        heading: '3. Technical Precision Across All Screen Resolutions & Mobile Viewports',
        content: 'From 4K ultra-wide desktop monitors down to compact smartphone displays, our designs adapt seamlessly. We build with fluid CSS grids, flexbox architectures, and vector SVG pipelines, ensuring razor-sharp clarity on high-DPI retina displays without ballooning asset payloads or slowing down page load times.'
      },
      {
        heading: '4. Enterprise Tech Stack & Clean Code Standards',
        content: 'Unlike agencies that lock clients into proprietary website builders, Socialeo builds with standards-compliant HTML5, modular CSS3, vanilla JavaScript, and modern Next.js frameworks. Your site remains 100% portable, zero-dependency, and effortlessly maintainable by any modern engineering team.'
      },
      {
        heading: '5. Mysore Local Market Advantage & Measurable Client ROI',
        content: 'Operating directly in Mysore allows us to provide in-person discovery workshops, instant local collaboration, and tailored strategies for businesses across Vijayanagar, Gokulam, Jayalakshmipuram, Saraswathipuram, Hebbal Industrial Area, and greater Karnataka. Our clients experience average conversion rate increases of 65% within 90 days of bespoke re-platforming.'
      }
    ],
    faqs: [
      { q: 'Where is Socialeo located in Mysore (Mysuru)?', a: 'Socialeo is based at 1646, 5th Main, Vijayanagar 2nd Stage, Mysore, Karnataka - 570017. We offer both in-person discovery sessions in Mysore/Bangalore and remote consultations globally.' },
      { q: 'How long does a custom web design project take in Mysore?', a: 'Standard bespoke design sprints take 2 to 4 weeks depending on scope, page count, and custom asset requirements.' },
      { q: 'Will I receive full Figma design files and source code?', a: 'Yes, complete Figma design systems with organized component libraries, auto-layouts, and developer-ready code tokens are delivered upon project completion.' },
      { q: 'Do you also handle frontend development and SEO hosting?', a: 'Yes! We provide complete end-to-end delivery from design to full-stack production deployment on Next.js with sub-second cloud CDN hosting.' },
      { q: 'How does bespoke web design improve Google search rankings?', a: 'Custom-coded websites eliminate template bloat, achieve Core Web Vitals scores above 95, and feature clean semantic HTML with structured JSON-LD schemas that Google search crawlers prioritize over heavy CMS themes.' }
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
    keywords: 'website development company in mysore, web development agency mysuru, Next.js developers mysore, software company mysore, full stack developer mysore karnataka, web development cost mysore',
    metaDesc: 'Premier website development company in Mysore (Mysuru). Socialeo builds sub-second Next.js web applications, scalable APIs, and Google Core Web Vitals 100/100 platforms.',
    overview: 'Performance is a feature. Socialeo is a leading website development studio in Mysore (Mysuru) building modern full-stack web applications and high-speed websites powered by clean architecture, Next.js / React, Server-Side Rendering (SSR), and Edge CDN cloud distribution.',
    geoSummary: 'Socialeo provides enterprise full-stack web development services in Mysore, Karnataka. Engineered with Next.js, TypeScript, Node.js, and serverless edge databases, Socialeo creates web applications that load in under 500ms with 99.99% uptime and bank-grade SSL security.',
    specs: [
      { label: 'Primary Location', value: 'Mysore (Mysuru), Karnataka — Vijayanagar 2nd Stage' },
      { label: 'Core Frameworks', value: 'Next.js 15, React 19, Node.js, Express, PostgreSQL' },
      { label: 'Hosting & CDN', value: 'Vercel Enterprise Edge CDN, AWS CloudFront, Cloudflare' },
      { label: 'Speed Benchmark', value: 'Sub-500ms TTFB, 100/100 Core Web Vitals' }
    ],
    deliverables: [
      'Full-Stack Custom Web Architecture (Next.js / Node.js / Python)',
      'Sub-Second Server-Side Rendering (SSR) & Static Generation (SSG)',
      'Clean Modular Component Codebase & API Integrations',
      'Automated CI/CD Deployment Pipelines & Edge CDN Hosting',
      'Google Core Web Vitals 95+ Performance Scores',
      'Enterprise SSL padlocks, HTTPS encryption & Security Headers',
      'Database Modeling, Microservices & Headless CMS Architecture',
      'Full Technical SEO Sitemap, Robots.txt & Schema Telemetry'
    ],
    sections: [
      {
        heading: '1. Server-Side Rendering (SSR) & Static Generation (SSG) Mastery',
        content: 'We utilize hybrid rendering pipelines where static assets are distributed across edge CDN caches while dynamic data hydrates instantaneously via serverless edge functions. This guarantees that both search engine crawlers and users receive pre-rendered HTML in under 400 milliseconds anywhere in the world.'
      },
      {
        heading: '2. Zero-Bloat Frontend Engineering with Clean Code Principles',
        content: 'Modern websites frequently ship 3+ megabytes of unminified third-party scripts. At Socialeo, we maintain strict bundle budgets. Every component is tree-shaken, dependencies are scrutinized, and assets are converted to AVIF/WebP formats to ensure lightweight, lightning-fast execution.'
      },
      {
        heading: '3. Bulletproof Security, SSL Padlocks & Edge Protection',
        content: 'Security is baked into our development lifecycle from day one. We enforce strict Content Security Policies (CSP), HSTS headers, XSS prevention, automated SSL renewals, and DDoS mitigation through enterprise edge reverse proxies.'
      },
      {
        heading: '4. API Integrations, Payment Gateways & CRM Connections',
        content: 'Whether integrating Razorpay, Stripe, WhatsApp Cloud APIs, Salesforce, HubSpot, or custom proprietary ERPs, we build resilient, typed webhooks and asynchronous message queues that never drop a transaction or lead.'
      },
      {
        heading: '5. Mysore & Bangalore Tech Ecosystem Integration',
        content: 'Located on the Mysore-Bangalore economic corridor, we work directly with tech startups, retail brands, healthcare institutions, and educational academies to modernize legacy systems into agile, high-performing web platforms.'
      }
    ],
    faqs: [
      { q: 'Which programming languages and frameworks do you use?', a: 'Our primary stack includes Next.js, React, Node.js, TypeScript, Python, PostgreSQL, and Tailwind/Vanilla CSS modules.' },
      { q: 'Will our website load fast on mobile devices in India?', a: 'Yes! We optimize specifically for mobile networks across India, delivering sub-second first contentful paint (FCP) and seamless caching.' },
      { q: 'Do you offer ongoing website maintenance and security updates in Mysore?', a: 'Yes, we provide Managed Annual Retainers (AMC) covering 24/7 uptime monitoring, automated backups, security patches, and quarterly SEO tune-ups.' },
      { q: 'Can you migrate our existing WordPress site to custom Next.js?', a: 'Yes! We frequently migrate sluggish WordPress/WooCommerce websites to custom Next.js frontends, slashing page load times by up to 75%.' },
      { q: 'What is the standard development cost for a custom website in Mysore?', a: 'Costs vary depending on feature scope, dynamic portal logic, and database complexity. Contact us for a transparent, itemized sprint proposal.' }
    ]
  },
  {
    slug: 'mobile-apps',
    serviceName: 'Mobile App Development in Mysore (Mysuru)',
    title: 'Mobile App Development Company in Mysore (Mysuru) — iOS & Android Native Apps',
    tag: 'Mobile Apps Mysore',
    readTime: '14 Min Read',
    date: 'August 25, 2026',
    image: '../assets/project-fintech.jpg',
    keywords: 'mobile app development company in mysore, app developers mysuru, ios app development mysore, android app developers mysore karnataka, flutter app development mysore, react native agency mysuru',
    metaDesc: 'Top mobile app development company in Mysore (Mysuru). Socialeo builds fluid iOS & Android apps with React Native, Flutter, and scalable cloud backends.',
    overview: 'In an app-first economy, native performance and intuitive gesture ergonomics dictate retention. Socialeo is a top mobile app development company in Mysore (Mysuru) crafting high-performance iOS and Android applications that scale effortlessly from day one.',
    geoSummary: 'Socialeo is an elite mobile application engineering studio based in Mysore, India. Specializing in Flutter, React Native, and native iOS/Android development, Socialeo creates frictionless, secure mobile experiences with offline caching, haptics, and instant push notification engines.',
    specs: [
      { label: 'Primary Location', value: 'Mysore (Mysuru), Karnataka — Vijayanagar 2nd Stage' },
      { label: 'Mobile Technologies', value: 'Flutter, React Native, Swift (iOS), Kotlin (Android)' },
      { label: 'Backend Architecture', value: 'Node.js Microservices, Firebase, Supabase, AWS Lambda' },
      { label: 'Deployment Channels', value: 'Apple App Store, Google Play Store, Enterprise MDM' }
    ],
    deliverables: [
      'iOS & Android Cross-Platform Apps (React Native / Flutter)',
      'Touch-Optimized Haptic Feedback & Gesture Ergonomics',
      'Push Notification Engines & User Engagement Loops',
      'Offline-First Data Sync & Local Secure Storage',
      'App Store (iOS) & Google Play Store Submission & Compliance',
      'Real-Time Telemetry, Crash Reporting & User Analytics',
      'Biometric Authentication (FaceID & Fingerprint Recognition)',
      'In-App Purchase & Payment Gateway Integrations (UPI, Cards)'
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
      },
      {
        heading: '4. Offline-First Architecture & Data Synchronization',
        content: 'We architect robust local SQLite / WatermelonDB databases that allow users to browse, record data, and perform operations even with intermittent network connectivity, silently synchronizing with the cloud once connection resumes.'
      },
      {
        heading: '5. Mysore Tech Leadership & Enterprise App Support',
        content: 'Based in Mysore, we provide local startups, retail chains, and institutions with dedicated mobile engineers, in-person sprint reviews, and direct post-launch monitoring.'
      }
    ],
    faqs: [
      { q: 'Do you build for both iPhone and Android?', a: 'Yes! We build cross-platform apps that deploy simultaneously to iOS and Android from a single performant codebase, reducing development cost and timeline by 40%.' },
      { q: 'Will you assist with App Store approvals?', a: 'Yes, we manage all review processes, sandbox test credentials, metadata submissions, and compliance checks until your app is live in the stores.' },
      { q: 'Can we schedule an in-person meeting in Mysore for app planning?', a: 'Yes! We welcome local founders and business owners at our Mysore studio in Vijayanagar 2nd Stage.' },
      { q: 'How do you handle mobile app security and user data privacy?', a: 'We implement AES-256 local database encryption, SSL pinning for network requests, and strict adherence to Google Play & Apple App Store data protection guidelines.' },
      { q: 'What is the typical timeframe to develop a production mobile app?', a: 'Most MVP mobile apps launch within 6 to 10 weeks, followed by iterative feature rollout sprints.' }
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
    keywords: 'digital marketing agency in mysore, seo company in mysore, best seo agency mysuru, local seo services mysore, clinical SEO mysuru, google ads agency mysore, local business seo mysore',
    metaDesc: 'Premier digital marketing & SEO company in Mysore (Mysuru). Dominate Google Search, capture high-intent local customer leads, and scale your revenue with Socialeo.',
    overview: 'Traffic without conversions is an expense; traffic with high conversion architecture is a compounding asset. Socialeo is a premier digital marketing and SEO agency in Mysore (Mysuru) delivering data-backed organic SEO, technical search architecture, and targeted marketing funnels.',
    geoSummary: 'Socialeo is Mysore\'s premier digital marketing, clinical SEO, and Generative Engine Optimization (GEO) agency. We help enterprises rank #1 on Google Search, Google Maps 3-Pack, and AI search engines like ChatGPT Search and Perplexity with high-intent localized search campaigns.',
    specs: [
      { label: 'Primary Location', value: 'Mysore (Mysuru), Karnataka — Vijayanagar 2nd Stage' },
      { label: 'Core SEO Domains', value: 'Technical SEO, Local Maps SEO, E-E-A-T Authority, GEO' },
      { label: 'Analytics Pipeline', value: 'Google Analytics 4, Search Console, Edge Telemetry' },
      { label: 'Target Outcomes', value: 'Top 3 Google Search & Maps Pack, Higher Lead Conversions' }
    ],
    deliverables: [
      'Comprehensive Organic Search (SEO) Strategy & Keyword Clustering',
      'Structured Data & Schema.org JSON-LD Architecture',
      'High-Converting Landing Page Design & A/B Split Testing',
      'Google Ads / Meta Performance Funnel Architecture',
      'Conversion Rate Optimization (CRO) Heatmap & Journey Audits',
      'Monthly Attribution Analytics & Revenue ROI Reporting',
      'Local Mysore Google Business Profile (GBP) Optimization',
      'Generative Engine Optimization (GEO) for AI Overviews & Perplexity'
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
      },
      {
        heading: '4. Generative Engine Optimization (GEO) for AI Search Engines',
        content: 'Search is evolving. In addition to traditional Google SERP algorithms, searchers rely on AI Overviews, ChatGPT Search, and Perplexity. We structure your site with direct entity-answering markup, high-density factual matrices, and verified author citations so AI engines quote your business as the definitive source.'
      },
      {
        heading: '5. Sustainable Long-Term Search Dominance in Karnataka',
        content: 'We adhere strictly to white-hat clinical SEO guidelines, focusing on high-authority topical clusters and natural backlink acquisition. Our clients retain top rankings across core commercial keywords year after year without fear of algorithmic penalties.'
      }
    ],
    faqs: [
      { q: 'How quickly can our Mysore business rank on Google Search?', a: 'Local SEO optimizations often show noticeable ranking and call volume improvements within 30 to 60 days. Highly competitive organic search keywords typically mature within 3 to 6 months.' },
      { q: 'Do you manage paid advertising campaigns (Google & Meta Ads)?', a: 'Yes! We architect full-funnel paid search and social campaigns engineered to generate immediate high-intent leads while organic SEO compounds in the background.' },
      { q: 'What makes Socialeo different from other SEO companies in Mysore?', a: 'We are engineering-led. Rather than merely stuffing keywords, we optimize page speed, JSON-LD knowledge graphs, conversion UX, and Generative Engine Optimization (GEO).' },
      { q: 'What is Generative Engine Optimization (GEO)?', a: 'GEO is the discipline of optimizing content and schema markup so that AI answer engines (ChatGPT Search, Perplexity, Google AI Overviews) recognize and cite your brand as the primary authority.' },
      { q: 'Do you provide detailed monthly ranking and lead attribution reports?', a: 'Yes, every client receives transparent monthly dashboards detailing keyword movements, organic traffic growth, conversion rates, and direct telephone/WhatsApp inquiries.' }
    ]
  },
  {
    slug: 'ui-ux-design',
    serviceName: 'UI/UX Design Systems in Mysore (Mysuru)',
    title: 'UI/UX Design Studio in Mysore (Mysuru) — Figma Systems & High-Conversion UX',
    tag: 'UI/UX Design Mysore',
    readTime: '11 Min Read',
    date: 'August 25, 2026',
    image: '../assets/process-blueprints.jpg',
    keywords: 'ui ux design agency in mysore, best ui ux designers mysuru, product design studio mysore, figma design company mysore, user experience design karnataka, website ui designer mysore',
    metaDesc: 'Elite UI/UX design studio in Mysore (Mysuru). Socialeo crafts comprehensive Figma design systems, intuitive SaaS dashboards, and conversion-optimized mobile interfaces.',
    overview: 'Great design is invisible; users effortlessly accomplish their goals with zero friction. Socialeo is an elite UI/UX product design studio in Mysore (Mysuru) engineering scalable Figma design systems, interactive prototypes, and conversion-centered digital interfaces.',
    geoSummary: 'Socialeo is Mysore\'s premier UI/UX and product design studio. We design high-converting SaaS interfaces, responsive web apps, and native mobile apps using advanced Figma auto-layout libraries, accessibility standards, and tokenized design systems.',
    specs: [
      { label: 'Primary Location', value: 'Mysore (Mysuru), Karnataka — Vijayanagar 2nd Stage' },
      { label: 'Design Tools', value: 'Figma Enterprise, FigJam, Principle, Adobe Creative Cloud' },
      { label: 'Compliance Standards', value: 'WCAG 2.2 AAA Accessibility, Responsive Auto-Layouts' },
      { label: 'Delivery Artifacts', value: 'Interactive Prototypes, Design Tokens, Developer Specs' }
    ],
    deliverables: [
      'Comprehensive Figma Component Libraries & Auto-Layout Systems',
      'Design Token Dictionaries (Colors, Typography, Elevation, Spacing)',
      'High-Fidelity Interactive Clickable Prototypes',
      'User Journey Mapping, Personas & Information Architecture',
      'WCAG 2.2 AAA Accessibility Compliance & Contrast Audits',
      'Developer-Ready Handoff Documentation & Asset Exports',
      'Design Sprint Workshops (In-Person Mysore & Remote)',
      'Product Usability Testing & Heatmap Analysis'
    ],
    sections: [
      {
        heading: '1. Modular Design Token Systems Built for Scale',
        content: 'We build structured design systems based on atomic design methodology. By establishing reusable tokens for colors, typography, elevations, and layout grids, your engineering team can build new features 3x faster with 100% visual consistency.'
      },
      {
        heading: '2. Frictionless Task Completion & Cognitive Flow',
        content: 'We strip away cognitive roadblocks. Through rigorous user testing and heuristic evaluations, we streamline multi-step onboarding funnels, simplify complex enterprise dashboards, and eliminate input fatigue across every screen.'
      },
      {
        heading: '3. Developer-First Handoff & Implementation Fidelity',
        content: 'A design is only as good as its live implementation. We provide developer-ready Figma specifications with explicit auto-layouts, responsive constraints, exported SVGs, and CSS variables so frontend engineers can code with zero ambiguity.'
      },
      {
        heading: '4. Accessibility & Inclusive Design (WCAG 2.2 Standards)',
        content: 'We ensure all interactive touchpoints satisfy strict accessibility guidelines—providing proper color contrast ratios, keyboard navigability, clear focus rings, and screen-reader accessible layouts that welcome all users.'
      },
      {
        heading: '5. Mysore Product Design Collaboration',
        content: 'We partner with startup founders and engineering teams throughout Mysore, Bangalore, and globally to conduct rapid wireframing workshops and iterative design sprints.'
      }
    ],
    faqs: [
      { q: 'Do you design UI/UX for both Web and Mobile apps in Mysore?', a: 'Yes, we engineer cohesive, cross-platform design systems for responsive web apps, SaaS dashboards, and native iOS/Android mobile applications.' },
      { q: 'Can you audit and redesign our existing product UI?', a: 'Yes, we conduct comprehensive UX usability audits with actionable heuristics evaluations and design modern overhaul blueprints.' },
      { q: 'How do you collaborate with our in-house developers?', a: 'We provide structured Figma files with auto-layouts, exported design tokens (CSS/JSON), and detailed interaction guidelines to ensure pixel-perfect engineering handoff.' },
      { q: 'What is the difference between UI and UX design?', a: 'UX (User Experience) focuses on user journeys, wireframing, and problem-solving flow; UI (User Interface) focuses on typography, colors, micro-interactions, and visual polish. We deliver both seamlessly.' },
      { q: 'Do you provide interactive clickable prototypes before coding begins?', a: 'Yes! We deliver fully interactive Figma prototypes so your stakeholders and users can experience the exact flows before writing a single line of code.' }
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
    keywords: 'brand strategy agency mysore, logo design company mysuru, branding studio mysore karnataka, corporate identity mysuru, brand design agency mysore, logo makers mysore',
    metaDesc: 'Leading brand strategy & visual identity studio in Mysore (Mysuru). Socialeo crafts enduring logo suites, brand books, typography guidelines, and digital design languages.',
    overview: 'A distinctive brand identity is the highest-leverage asset in modern business. Socialeo is a brand strategy and design studio in Mysore (Mysuru) crafting enduring visual identities, strategic market positioning, and unified design languages that inspire trust and command premium pricing.',
    geoSummary: 'Socialeo is Mysore\'s premier brand strategy, logo design, and corporate identity consultancy. We craft iconic vector logo suites, brand positioning frameworks, digital brand books, and 3D visual languages that elevate companies above commodity pricing.',
    specs: [
      { label: 'Primary Location', value: 'Mysore (Mysuru), Karnataka — Vijayanagar 2nd Stage' },
      { label: 'Strategy Framework', value: 'Competitive Whitespace Mapping & Brand Archetypes' },
      { label: 'Visual Deliverables', value: 'Vector Logo Suite, Typography Systems, Color Palettes' },
      { label: 'Brand Documentation', value: 'Complete Digital Brand Guidelines & Asset Portal' }
    ],
    deliverables: [
      'Core Brand Positioning & Value Proposition Architecture',
      'Vector Logo Suite (Primary, Secondary, Monogram, Favicon)',
      'Curated Brand Typography Hierarchy & Custom Color Palettes',
      'Comprehensive Digital Brand Guidelines & Style Book (PDF & Web)',
      'Social Media Kit & Presentation Deck Templates',
      'Brand Tone of Voice & Editorial Messaging Framework',
      'Packaging, Stationery & Environmental Signage Design',
      '3D Spatial Brand Graphics & Motion Guidelines'
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
      },
      {
        heading: '4. Multi-Platform Rollout Across Digital & Physical Touchpoints',
        content: 'We bridge the gap between digital screens and physical reality. We prepare production-ready vector assets for signage, vehicle wraps, corporate collateral, business cards, merchandise, and digital advertising kits.'
      },
      {
        heading: '5. Long-Term Brand Equity & Enterprise Valuation',
        content: 'A cohesive brand identity commands up to 3x higher pricing power compared to generic commodity alternatives. We build brands that age gracefully and build enduring financial equity.'
      }
    ],
    faqs: [
      { q: 'What do we receive at the end of a branding sprint in Mysore?', a: 'You receive vector master files (SVG, AI, EPS, PNG, PDF), font licenses/recommendations, color token specifications (HEX, RGB, CMYK, Pantone), and a comprehensive Brand Style Guide.' },
      { q: 'Do you help with brand naming and messaging?', a: 'Yes, we provide naming workshops, tagline development, and brand voice guidelines as part of our comprehensive branding sprints.' },
      { q: 'Can you align our website and pitch deck with the new brand?', a: 'Yes! We seamlessly roll out your new brand identity across your website, product UI, pitch decks, and digital collateral for a cohesive market presence.' },
      { q: 'How long does a full corporate identity sprint take?', a: 'A standard brand identity sprint spans 2 to 3 weeks from initial positioning research to master asset delivery.' },
      { q: 'Can we meet at your Mysore studio to discuss our company rebranding?', a: 'Yes! We welcome founders and executives for in-person brand strategy consultations in Vijayanagar 2nd Stage, Mysore.' }
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

  const specsHtml = service.specs.map(spec => `
    <div class="geo-spec-row">
      <span class="geo-spec-label">${spec.label}:</span>
      <strong class="geo-spec-value">${spec.value}</strong>
    </div>
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
  <title>${service.serviceName} | Socialeo Studio</title>
  <meta name="description" content="${service.metaDesc}">
  <meta name="keywords" content="${service.keywords}">
  <meta name="author" content="Manpreeth N (Manu) — Founder &amp; CEO">
  <meta name="theme-color" content="#050507">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- Speculation Rules API for Instant Navigations -->
  <script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["/index.html", "/blogs.html", "/services/web-design.html", "/services/web-development.html"]
      }
    ],
    "prefetch": [
      {
        "source": "document",
        "where": { "href_matches": "/*" }
      }
    ]
  }
  </script>

  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%23FF416C'/><circle cx='50' cy='50' r='22' fill='%23FFFFFF'/></svg>">
  <link rel="canonical" href="https://socialeo.vercel.app/services/${service.slug}.html">
  <link rel="manifest" href="../manifest.json">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Socialeo Digital Studio">
  <meta property="og:title" content="${service.serviceName} | Socialeo Studio">
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
  <meta name="twitter:title" content="${service.serviceName} | Socialeo Studio">
  <meta name="twitter:description" content="${service.metaDesc}">
  <meta name="twitter:image" content="https://socialeo.vercel.app/${service.thumb || 'assets/hero-bg.jpg'}">

  <!-- Schema.org Multi-Entity JSON-LD (Service, FAQPage, BreadcrumbList, GEO) -->
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
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".service-headline", ".service-lead-overview", ".geo-answer-card"]
        },
        "provider": {
          "@type": "ProfessionalService",
          "@id": "https://socialeo.vercel.app/#organization",
          "name": "Socialeo",
          "founder": {
            "@type": "Person",
            "@id": "https://socialeo.vercel.app/#founder",
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

  <!-- Google Preferred Sources Publisher Library -->
  <script async src="https://news.google.com/swg/js/v1/publisher.js"></script>

  <!-- Google Fonts: Plus Jakarta Sans & DM Sans matching reference font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..800;1,9..40,400..800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Core CSS -->
  <link rel="stylesheet" href="../styles.css">

  <style>
    /* Dedicated Custom CSS for High-Converting Service Masterclasses */
    .service-page-wrapper {
      padding-top: calc(var(--header-height) + 30px);
      padding-bottom: 80px;
    }
    .service-breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13.5px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .service-breadcrumbs a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color var(--transition-fast);
    }
    .service-breadcrumbs a:hover {
      color: var(--text-accent);
    }
    .service-two-col-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 380px;
      gap: 40px;
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
      margin-bottom: 30px;
      font-weight: 450;
      background: rgba(255,255,255,0.02);
      padding: 20px 24px;
      border-left: 3px solid var(--text-accent);
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    }

    /* GEO / AI Search Answer Block */
    .geo-answer-card {
      background: rgba(255, 94, 58, 0.04);
      border: 1px solid rgba(255, 94, 58, 0.25);
      border-radius: var(--radius-md);
      padding: 24px;
      margin-bottom: 36px;
    }
    .geo-card-badge {
      font-size: 11.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-accent);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .geo-answer-text {
      font-size: 1.02rem;
      line-height: 1.7;
      color: var(--text-primary);
      margin-bottom: 18px;
    }
    .geo-specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      background: rgba(0,0,0,0.3);
      padding: 16px;
      border-radius: var(--radius-sm);
      border: 1px solid rgba(255,255,255,0.05);
    }
    .geo-spec-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 13px;
    }
    .geo-spec-label {
      color: var(--text-muted);
      font-weight: 600;
    }
    .geo-spec-value {
      color: #fff;
      font-weight: 600;
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
      gap: 12px;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .wa-icon-box {
      font-size: 26px;
      line-height: 1;
    }
    .wa-title {
      font-size: 1.05rem;
      font-weight: 800;
      color: #FFFFFF;
      margin: 0;
      line-height: 1.2;
    }
    .wa-subtitle {
      font-size: 11.5px;
      color: #94A3B8;
      margin-top: 3px;
    }
    .wa-form-group {
      margin-bottom: 11px;
    }
    .wa-form-group label {
      display: block;
      font-size: 11.5px;
      font-weight: 700;
      color: #E2E8F0;
      margin-bottom: 4px;
    }
    .wa-input, .wa-textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding: 9px 12px;
      color: #FFFFFF;
      font-family: inherit;
      font-size: 13px;
      outline: none;
      box-sizing: border-box;
      transition: all var(--transition-fast);
    }
    .wa-textarea {
      resize: none;
      height: 64px;
    }
    .wa-input:focus, .wa-textarea:focus {
      border-color: #25D366;
      box-shadow: 0 0 14px rgba(37, 211, 102, 0.25);
    }
    .wa-submit-btn {
      width: 100%;
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: #FFFFFF;
      border: none;
      border-radius: 8px;
      padding: 11px;
      font-size: 13px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
      transition: all var(--transition-fast);
    }
    .wa-submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(37, 211, 102, 0.5);
    }
    .wa-trust-strip {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 11px;
      color: #94A3B8;
    }
    .wa-quick-call {
      display: block;
      text-align: center;
      margin-top: 10px;
      font-size: 12px;
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

        <!-- GEO & AI Search Summary Block (Direct Answer for ChatGPT Search, Perplexity & AI Overviews) -->
        <div class="geo-answer-card">
          <div class="geo-card-badge">⚡ Quick Facts &amp; AI Entity Summary</div>
          <p class="geo-answer-text">${service.geoSummary}</p>
          <div class="geo-specs-grid">
            ${specsHtml}
          </div>
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

      <!-- RIGHT COLUMN: Compact Sticky WhatsApp Inquiry Card -->
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

          <div class="wa-trust-strip">
            <span>⚡ Instant Response</span>
            <span>🔒 Confidential</span>
            <span>📍 Mysore Studio</span>
          </div>

          <a href="tel:+918722163256" class="wa-quick-call">
            📞 Or Call Directly: +91 8722163256
          </a>
        </div>
      </aside>

    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="../index.html#hero" class="logo">
            <div class="logo-icon"></div>
            <span>Socialeo</span>
          </a>
          <p class="footer-tagline">
            We Design Websites That Grow Businesses. Founder-led digital studio in Mysore engineering bespoke websites, native apps, and scalable digital systems.
          </p>
        </div>

        <div class="footer-links-grid">
          <div class="footer-col">
            <div class="footer-col-title">Navigation</div>
            <ul>
              <li><a href="../index.html#hero">Home</a></li>
              <li><a href="../index.html#about">About Us</a></li>
              <li><a href="../index.html#services">Services</a></li>
              <li><a href="../index.html#process">Process</a></li>
              <li><a href="../index.html#projects">Projects</a></li>
              <li><a href="../blogs.html">Blogs</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Core Services</div>
            <ul>
              <li><a href="web-design.html">Web Design Mysore</a></li>
              <li><a href="web-development.html">Web Development</a></li>
              <li><a href="mobile-apps.html">Mobile Apps</a></li>
              <li><a href="digital-marketing.html">Digital Marketing &amp; SEO</a></li>
              <li><a href="ui-ux-design.html">UI/UX Design Systems</a></li>
              <li><a href="brand-strategy.html">Brand Strategy</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Studio Location</div>
            <p style="font-size:13.5px; line-height:1.6; color:var(--text-secondary); margin-bottom:8px;">
              📍 1646, 5th Main, Vijayanagar 2nd Stage,<br>
              Mysore, Karnataka - 570017
            </p>
            <p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">
              Direct Desk: <a href="tel:+918722163256" style="color:var(--text-accent); text-decoration:none;">+91 8722163256</a>
            </p>
            <a href="https://maps.app.goo.gl/3eEMtYTEdMpLEyoz8" target="_blank" rel="noopener" style="font-size:13px; color:var(--text-accent); text-decoration:none;">
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Socialeo. All rights reserved.</p>
        <div class="footer-legal">
          <a href="../privacy-policy.html">Privacy Policy</a>
          <a href="../terms.html">Terms of Service</a>
          <a href="../cookie-policy.html">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    function handleWhatsAppSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('wa-name').value.trim();
      const phone = document.getElementById('wa-phone').value.trim();
      const message = document.getElementById('wa-message').value.trim();
      const serviceName = ${JSON.stringify(service.serviceName)};

      const fullMessage = \`*🚀 New Project Inquiry — \${serviceName}*

👤 *Client Name*: \${name}
📞 *WhatsApp*: \${phone}
💬 *Project Details*:
\${message}

---
_Sent via Socialeo \${serviceName} Page Portal_\`;

      const encodedMsg = encodeURIComponent(fullMessage);
      const whatsappUrl = \`https://api.whatsapp.com/send?phone=918722163256&text=\${encodedMsg}\`;

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'inbound_lead',
          service: serviceName,
          client_name: name,
          channel: 'whatsapp_sticky_card'
        });
      }

      window.open(whatsappUrl, '_blank');
      document.getElementById('whatsapp-inquiry-form').reset();
    }
  </script>
</body>
</html>`;
}

services.forEach(s => {
  const filePath = path.join(servicesDir, `${s.slug}.html`);
  fs.writeFileSync(filePath, generateServicePage(s), 'utf8');
  console.log(`Generated: ${filePath}`);
});

console.log('✅ All 6 Dedicated Service Masterclasses generated successfully with enhanced SEO, GEO, and Speculation Rules!');
