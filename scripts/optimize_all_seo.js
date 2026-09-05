const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const blogsDir = path.join(ROOT_DIR, 'blogs');

const titleUpdates = {
  '5-step-product-design-process-startups.html': '5-Step Product Design Process for Startups | Socialeo',
  'accessible-web-design-wcag-compliance.html': 'Accessible Web Design & WCAG 2.2 Compliance Guide | Socialeo',
  'ai-analytics-dashboard-design-patterns.html': 'AI Analytics Dashboard UI & Telemetry Patterns | Socialeo',
  'b2b-saas-website-redesign-playbook.html': 'B2B SaaS Website Redesign Playbook: 2x Conversions | Socialeo',
  'bespoke-web-design-vs-templates-roi.html': 'Bespoke Web Design vs Templates: 2026 ROI Guide | Socialeo',
  'branding-and-digital-identity-strategy.html': 'Digital Brand Identity Strategy & Visual Design | Socialeo',
  'conversion-rate-optimization-landing-page-anatomy.html': 'Anatomy of a High-Converting Landing Page | Socialeo',
  'core-web-vitals-speed-optimization-guide.html': 'Core Web Vitals Speed Mastery Guide: 100/100 | Socialeo',
  'creative-agency-portfolio-case-study-framework.html': 'Creative Agency Portfolio Case Study Framework | Socialeo',
  'design-systems-for-growing-brands.html': 'Building Scalable Design Systems: Figma to Code | Socialeo',
  'fintech-and-trading-mobile-app-ux.html': 'Fintech & Trading Mobile App UX: Dark Mode Design | Socialeo',
  'frontend-architecture-and-seo-rankings.html': 'Frontend Architecture & Next.js SEO Ranking Boost | Socialeo',
  'high-converting-ecommerce-design-systems.html': 'High-Converting E-Commerce Design Systems Guide | Socialeo',
  'how-to-choose-best-mobile-app-development-company-mysore.html': 'Best Mobile App Development Company in Mysore | Socialeo',
  'top-seo-strategies-to-rank-number-1-in-mysuru.html': 'Top Local SEO Strategies to Rank #1 in Mysore | Socialeo',
  'webflow-vs-custom-code-for-agencies.html': 'Webflow vs Custom Code: Agency Tech Stack Guide | Socialeo',
  'webgl-3d-interactive-web-experiences.html': 'WebGL & 3D Interactive Web Experiences Guide | Socialeo',
  'why-mysore-businesses-need-bespoke-websites-in-2026.html': 'Why Mysore Businesses Need Bespoke Websites in 2026 | Socialeo'
};

if (fs.existsSync(blogsDir)) {
  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.html'));
  files.forEach(file => {
    const fullPath = path.join(blogsDir, file);
    let html = fs.readFileSync(fullPath, 'utf8');
    const newTitle = titleUpdates[file];
    if (newTitle) {
      html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${newTitle}</title>`);
      // Also update og:title if present
      html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i, `<meta property="og:title" content="${newTitle}"`);
      html = html.replace(/<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']/i, `<meta name="twitter:title" content="${newTitle}"`);
      fs.writeFileSync(fullPath, html, 'utf8');
      console.log(`[Optimized Title] ${file} -> "${newTitle}" (${newTitle.length} chars)`);
    }
  });
}

console.log("\nAll blog titles successfully optimized under 65 chars.");
