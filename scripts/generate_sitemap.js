const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BASE_URL = "https://socialeo.vercel.app";
const TODAY = new Date().toISOString().split('T')[0];

const corePages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'blogs', priority: '0.9', changefreq: 'daily' },
  { path: 'cookie-policy', priority: '0.5', changefreq: 'yearly' },
  { path: 'privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { path: 'terms', priority: '0.5', changefreq: 'yearly' },
  { path: 'seo-geo-dashboard', priority: '0.7', changefreq: 'weekly' }
];

const urls = [];

corePages.forEach(p => {
  const url = p.path ? `${BASE_URL}/${p.path}` : `${BASE_URL}/`;
  urls.push({ loc: url, lastmod: TODAY, changefreq: p.changefreq, priority: p.priority });
});

// Services (Clean URLs without .html)
const servicesDir = path.join(ROOT_DIR, 'services');
if (fs.existsSync(servicesDir)) {
  fs.readdirSync(servicesDir).filter(f => f.endsWith('.html')).forEach(f => {
    const slug = f.replace(/\.html$/, '');
    urls.push({ loc: `${BASE_URL}/services/${slug}`, lastmod: TODAY, changefreq: 'weekly', priority: '0.9' });
  });
}

// Blogs (Clean URLs without .html)
const blogsDir = path.join(ROOT_DIR, 'blogs');
if (fs.existsSync(blogsDir)) {
  fs.readdirSync(blogsDir).filter(f => f.endsWith('.html')).forEach(f => {
    const slug = f.replace(/\.html$/, '');
    urls.push({ loc: `${BASE_URL}/blogs/${slug}`, lastmod: TODAY, changefreq: 'monthly', priority: '0.8' });
  });
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`[Sitemap Generator] Generated sitemap.xml with ${urls.length} URLs (lastmod: ${TODAY}).`);
