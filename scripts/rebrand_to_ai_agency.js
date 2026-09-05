const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function replaceInDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));
  files.forEach(f => {
    const fullPath = path.join(dirPath, f);
    let content = fs.readFileSync(fullPath, 'utf8');
    let updated = content
      .replace(/Socialeo Digital Studio/g, 'Socialeo AI Agency')
      .replace(/Socialeo Studio/g, 'Socialeo AI Agency')
      .replace(/digital product studio/gi, 'digital AI agency')
      .replace(/digital studio/gi, 'AI agency');
    if (updated !== content) {
      fs.writeFileSync(fullPath, updated, 'utf8');
      console.log(`[Updated to AI Agency] ${path.relative(ROOT_DIR, fullPath)}`);
    }
  });
}

replaceInDir(path.join(ROOT_DIR, 'services'));
replaceInDir(path.join(ROOT_DIR, 'blogs'));

// Root HTML files
['blogs.html', 'seo-geo-dashboard.html', 'cookie-policy.html', 'privacy-policy.html', 'terms.html'].forEach(f => {
  const p = path.join(ROOT_DIR, f);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    let updated = content
      .replace(/Socialeo Digital Studio/g, 'Socialeo AI Agency')
      .replace(/Socialeo Studio/g, 'Socialeo AI Agency')
      .replace(/digital product studio/gi, 'digital AI agency')
      .replace(/digital studio/gi, 'AI agency');
    if (updated !== content) {
      fs.writeFileSync(p, updated, 'utf8');
      console.log(`[Updated to AI Agency] ${f}`);
    }
  }
});

console.log("\nComplete! All service pages, blogs, and legal pages rebranded to AI Agency.");
