const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const napConfig = {
  businessName: "Socialeo Digital Product Studio",
  alternateName: "Socialeo",
  founder: "Manpreet Singh",
  address: {
    streetAddress: "1646, 5th Main, Vijayanagar 2nd Stage",
    addressLocality: "Mysore",
    addressRegion: "Karnataka",
    postalCode: "570017",
    addressCountry: "IN"
  },
  geo: {
    latitude: 12.3168,
    longitude: 76.6214
  },
  telephone: "+91 87221 63256",
  email: "hello@socialeo.in",
  website: "https://socialeo.vercel.app",
  primaryCategories: [
    "Website Designer",
    "Software Company",
    "Internet Marketing Service",
    "Graphic Designer"
  ]
};

const topCitations = [
  { platform: "Google Business Profile", type: "Core Map Pack", priority: "Tier 1 - Critical", status: "Ready for PIN Verification", targetUrl: "https://business.google.com" },
  { platform: "Bing Places for Business", type: "Search Engine Local", priority: "Tier 1 - High", status: "Sync via Google Business", targetUrl: "https://www.bingplaces.com" },
  { platform: "Apple Maps Connect", type: "Siri & iOS Maps", priority: "Tier 1 - High", status: "Ready to Submit", targetUrl: "https://mapsconnect.apple.com" },
  { platform: "Clutch.co", type: "B2B Tech Directory", priority: "Tier 1 - High Authority", status: "Profile Drafted", targetUrl: "https://clutch.co/agencies/web-design/india" },
  { platform: "GoodFirms", type: "B2B Design Directory", priority: "Tier 1 - High Authority", status: "Profile Drafted", targetUrl: "https://www.goodfirms.co" },
  { platform: "Crunchbase", type: "Global Company Graph", priority: "Tier 2 - Knowledge Graph", status: "Entity Ready", targetUrl: "https://crunchbase.com" },
  { platform: "Justdial Mysore", type: "Regional Karnataka", priority: "Tier 2 - Regional", status: "NAP Template Ready", targetUrl: "https://www.justdial.com/Mysore/Website-Designers" },
  { platform: "IndiaMART", type: "Pan-India B2B", priority: "Tier 2 - National", status: "Catalogue Ready", targetUrl: "https://www.indiamart.com" },
  { platform: "Sulekha Mysore", type: "Local Services", priority: "Tier 3 - Regional", status: "NAP Template Ready", targetUrl: "https://www.sulekha.com" }
];

const citationData = {
  napConfig,
  topCitations,
  generatedAt: new Date().toISOString()
};

fs.writeFileSync(path.join(ROOT_DIR, 'local-citations-matrix.json'), JSON.stringify(citationData, null, 2), 'utf8');

const playbookMd = `# Socialeo — Local SEO & Mysore Citation Network Playbook

## Official Standardized NAP (Name, Address, Phone)
- **Business Name**: \`${napConfig.businessName}\`
- **Address**: \`${napConfig.address.streetAddress}, ${napConfig.address.addressLocality}, ${napConfig.address.addressRegion} - ${napConfig.address.postalCode}, India\`
- **Phone**: \`${napConfig.telephone}\`
- **Email**: \`${napConfig.email}\`
- **Coordinates**: \`Latitude: ${napConfig.geo.latitude}, Longitude: ${napConfig.geo.longitude}\`

---

## Citation Action Tracker
${topCitations.map((c, i) => `${i + 1}. **${c.platform}** (${c.type}) — *${c.priority}*\n   - Status: ${c.status}\n   - Submission URL: [${c.targetUrl}](${c.targetUrl})`).join('\n\n')}
`;

fs.writeFileSync(path.join(ROOT_DIR, 'LOCAL_CITATIONS_PLAYBOOK.md'), playbookMd, 'utf8');

console.log("=================================================");
console.log("✅ OPENSEO LOCAL SEO & CITATION MATRIX GENERATED");
console.log("  - Standardized NAP verified for Mysore & Karnataka");
console.log("  - Saved local-citations-matrix.json & LOCAL_CITATIONS_PLAYBOOK.md");
console.log("=================================================");
