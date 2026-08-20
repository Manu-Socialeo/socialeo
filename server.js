const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5173;
const ROOT_DIR = path.join(__dirname, 'rekolet.framer.website');
const PAGES_DIR = path.join(ROOT_DIR, 'rekolet.framer.website');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.ico': 'image/x-icon',
};

function sanitizePath(reqUrl) {
  let cleanPath = reqUrl.split('?')[0].split('#')[0];
  try {
    cleanPath = decodeURIComponent(cleanPath);
  } catch (e) {}
  return cleanPath;
}

const server = http.createServer((req, res) => {
  const urlPath = sanitizePath(req.url);

  let filePath = null;

  // 1. Check direct pages routing
  if (urlPath === '/' || urlPath === '/index.html') {
    filePath = path.join(PAGES_DIR, 'index.html');
  } else if (urlPath === '/service' || urlPath === '/service.html') {
    filePath = path.join(PAGES_DIR, 'service.html');
  } else if (urlPath === '/projects' || urlPath === '/projects.html') {
    filePath = path.join(PAGES_DIR, 'projects.html');
  } else if (urlPath === '/blogs' || urlPath === '/blogs.html') {
    filePath = path.join(PAGES_DIR, 'blogs.html');
  } else if (urlPath === '/contact' || urlPath === '/contact.html') {
    filePath = path.join(PAGES_DIR, 'contact.html');
  } else if (urlPath === '/about') {
    filePath = path.join(PAGES_DIR, 'service.html');
  } else {
    // Check if path exists inside ROOT_DIR directly
    const directPath = path.join(ROOT_DIR, urlPath);
    if (fs.existsSync(directPath) && !fs.statSync(directPath).isDirectory()) {
      filePath = directPath;
    } else {
      // Check in pages dir
      const pagePath = path.join(PAGES_DIR, urlPath);
      if (fs.existsSync(pagePath) && !fs.statSync(pagePath).isDirectory()) {
        filePath = pagePath;
      } else {
        // Check under subdirectories
        const possibleSubdirs = ['framerusercontent.com', 'app.framerstatic.com', 'fonts.gstatic.com', 'api.framer.com', '_DataURI'];
        for (const sub of possibleSubdirs) {
          const subPath = path.join(ROOT_DIR, sub, urlPath);
          if (fs.existsSync(subPath) && !fs.statSync(subPath).isDirectory()) {
            filePath = subPath;
            break;
          }
        }
      }
    }
  }

  // Fallback to index.html for dynamic SPA navigation if not found and is HTML request
  if (!filePath && (req.headers.accept || '').includes('text/html')) {
    filePath = path.join(PAGES_DIR, 'index.html');
  }

  if (filePath && fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`404 Not Found: ${urlPath}`);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
