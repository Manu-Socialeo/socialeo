const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const competitors = [
  {
    name: "Regional Competitor A (Mysore Web Dev)",
    location: "Mysore, Karnataka",
    strengths: ["Established local map pack listings", "Long domain age"],
    weaknesses: ["Slow page speed (>3.5s LCP)", "No AI/GEO optimization", "Template-based WordPress code", "No dark mode or modern WebGL"],
    gapOpportunity: "Outrank on bespoke performance, 100/100 Core Web Vitals, and interactive 3D demos."
  },
  {
    name: "Regional Competitor B (Bangalore Digital Agency)",
    location: "Bangalore, Karnataka",
    strengths: ["High domain authority", "Corporate enterprise portfolio"],
    weaknesses: ["High pricing overhead", "Generic stock design", "Poor local Mysore relevance"],
    gapOpportunity: "Win mid-market Karnataka clients with agile pricing, founder-led execution, and superior UX polish."
  }
];

const backlinkOutreachTemplates = [
  {
    targetType: "Design Award & Tech Showcase (Awwwards, CSSDA, SiteInspire, Mobbin)",
    subject: "Submission: Socialeo — Bespoke Vanilla WebGL & Minimalist Dark Mode Studio",
    body: `Hi [Editor Name],

I wanted to share Socialeo (https://socialeo.vercel.app/), a bespoke digital product studio built from scratch in vanilla HTML5/CSS3 and lightweight WebGL with 0 framework overhead.

Key Highlights:
- 100/100 Core Web Vitals score on mobile
- Bespoke custom cursor physics & interactive 3D cards
- Clean typography and micro-animations

Would love for you to consider featuring Socialeo in your latest showcase or design inspiration roundup.

Best regards,
Manpreet Singh
Founder, Socialeo Digital Product Studio`
  },
  {
    targetType: "Tech & Startup Publications (YourStory, Inc42, DailyIO, Bangalore Tech Media)",
    subject: "Guest Contribution: Why Karnataka Enterprises are Shifting from WordPress to Bespoke Next.js Web Architectures",
    body: `Hi [Editor Name],

I've been following your coverage on South Indian tech ecosystems and digital transformation.

I've put together an in-depth data-backed breakdown on "Why Bespoke Web Architecture Outperforms CMS Templates in 2026", analyzing conversion rates, sub-second LCP impact on Google rankings, and AI-first Generative Engine Optimization (GEO).

I'd love to share an exclusive guest article tailored for your readers. Let me know if you'd be interested in reviewing the draft!

Warm regards,
Manpreet Singh
Founder & Lead Architect, Socialeo`
  }
];

const reportData = {
  competitors,
  backlinkOutreachTemplates,
  generatedAt: new Date().toISOString()
};

fs.writeFileSync(path.join(ROOT_DIR, 'competitor-radar-backlinks.json'), JSON.stringify(reportData, null, 2), 'utf8');

console.log("=================================================");
console.log("✅ OPENSEO COMPETITOR RADAR & BACKLINK ENGINE READY");
console.log("  - Competitor gap analysis compiled");
console.log("  - Outreach templates generated in competitor-radar-backlinks.json");
console.log("=================================================");
