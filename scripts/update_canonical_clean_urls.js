const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BASE_URL = "https://socialeo.vercel.app";

function updateCanonicalsAndLinks(filePath, cleanSlug) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Update canonical
  const canonicalUrl = cleanSlug ? `${BASE_URL}/${cleanSlug}` : `${BASE_URL}/`;
  content = content.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i, `<link rel="canonical" href="${canonicalUrl}"`);

  // Update internal links to clean URLs
  content = content
    .replace(/href=["'](\/?)blogs\.html(["'])/g, 'href="$1blogs$2')
    .replace(/href=["'](\/?)cookie-policy\.html(["'])/g, 'href="$1cookie-policy$2')
    .replace(/href=["'](\/?)privacy-policy\.html(["'])/g, 'href="$1privacy-policy$2')
    .replace(/href=["'](\/?)terms\.html(["'])/g, 'href="$1terms$2')
    .replace(/href=["'](\/?)services\/([a-z0-9-]+)\.html(["'])/g, 'href="$1services/$2$3')
    .replace(/href=["'](\/?)blogs\/([a-z0-9-]+)\.html(["'])/g, 'href="$1blogs/$2$3')
    .replace(/href=["']\.\.\/services\/([a-z0-9-]+)\.html(["'])/g, 'href="/services/$1$2')
    .replace(/href=["']\.\.\/blogs\/([a-z0-9-]+)\.html(["'])/g, 'href="/blogs/$1$2')
    .replace(/href=["']\.\.\/blogs\.html(["'])/g, 'href="/blogs$1')
    .replace(/href=["']\.\.\/index\.html(["'])/g, 'href="/$1');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[Clean URLs & Canonical Updated] ${path.relative(ROOT_DIR, filePath)} -> ${canonicalUrl}`);
  }
}

// Root files
updateCanonicalsAndLinks(path.join(ROOT_DIR, 'index.html'), '');
updateCanonicalsAndLinks(path.join(ROOT_DIR, 'blogs.html'), 'blogs');
updateCanonicalsAndLinks(path.join(ROOT_DIR, 'cookie-policy.html'), 'cookie-policy');
updateCanonicalsAndLinks(path.join(ROOT_DIR, 'privacy-policy.html'), 'privacy-policy');
updateCanonicalsAndLinks(path.join(ROOT_DIR, 'terms.html'), 'terms');
updateCanonicalsAndLinks(path.join(ROOT_DIR, 'seo-geo-dashboard.html'), 'seo-geo-dashboard');

// Services
const servicesDir = path.join(ROOT_DIR, 'services');
if (fs.existsSync(servicesDir)) {
  fs.readdirSync(servicesDir).filter(f => f.endsWith('.html')).forEach(f => {
    const slug = f.replace(/\.html$/, '');
    updateCanonicalsAndLinks(path.join(servicesDir, f), `services/${slug}`);
  });
}

// Blogs
const blogsDir = path.join(ROOT_DIR, 'blogs');
if (fs.existsSync(blogsDir)) {
  fs.readdirSync(blogsDir).filter(f => f.endsWith('.html')).forEach(f => {
    const slug = f.replace(/\.html$/, '');
    updateCanonicalsAndLinks(path.join(blogsDir, f), `blogs/${slug}`);
  });
}

console.log("\nAll canonicals and internal links successfully updated to clean URLs!");
