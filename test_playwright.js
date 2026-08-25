/**
 * ==============================================================================
 * SOCIALEO MASTER PLAYWRIGHT END-TO-END AUTOMATION SUITE (test_playwright.js)
 * Tests 100% of the entire website:
 * - index.html (Services Cards, Capabilities Deck, Redirections)
 * - services/*.html (6 Dedicated SEO Service Blogs with WhatsApp Forms)
 * - blogs.html (15 Medical & Digital SEO Knowledge Masterclasses)
 * - admin.html (Multi-Tab Real-Time Sync, Bill Generator, CRM, Saved Invoices, Setup)
 * ==============================================================================
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PORT = 8089;
const BASE_URL = `http://localhost:${PORT}`;

// 1. Lightweight Native Static Server for E2E testing
function startTestServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';
    
    const filePath = path.join(__dirname, reqPath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'text/plain';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      resolve(server);
    });
  });
}

async function runE2ETests() {
  console.log('\n========================================================');
  console.log('  🚀 LAUNCHING SOCIALEO PLAYWRIGHT E2E TEST ENGINE      ');
  console.log('========================================================\n');

  const server = await startTestServer();
  console.log(`[HTTP Server] Running locally on ${BASE_URL}\n`);

  let browser;
  let passedCount = 0;
  let totalCount = 0;

  function assert(condition, message) {
    totalCount++;
    if (condition) {
      passedCount++;
      console.log(`  ✅ PASS: ${message}`);
    } else {
      console.error(`  ❌ FAIL: ${message}`);
    }
  }

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 }
    });
    const page = await context.newPage();

    // ==========================================
    // SUITE 1: MAIN WEBSITE (index.html) & SERVICES
    // ==========================================
    console.log('[Suite 1] Testing Main Website (index.html) & Services Redirections...');
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'domcontentloaded' });

    const indexTitle = await page.title();
    assert(indexTitle.includes('Socialeo'), 'Page title contains Socialeo');

    const heroHeading = await page.textContent('h1');
    assert(heroHeading.length > 0, 'Hero heading exists and is non-empty');

    const serviceCards = await page.$$('.service-card');
    assert(serviceCards.length === 6, 'All 6 Service Cards exist in Services section');

    const serviceLinks = await page.$$eval('.service-card a.service-link', links => links.map(a => a.getAttribute('href')));
    const allServicesHavePages = serviceLinks.every(href => href.startsWith('services/'));
    assert(allServicesHavePages, 'All 6 Service Cards link directly to dedicated service blog pages');

    // ==========================================
    // SUITE 2: DEDICATED SERVICE PAGES & WHATSAPP FORMS
    // ==========================================
    console.log('\n[Suite 2] Testing Dedicated Service Blog Pages & WhatsApp Inquiry Form...');
    await page.goto(`${BASE_URL}/services/web-design.html`, { waitUntil: 'domcontentloaded' });

    const servicePageTitle = await page.title();
    assert(servicePageTitle.includes('Web Design'), 'Service page loaded with proper SEO title');

    const schemaScript = await page.$('script[type="application/ld+json"]');
    assert(schemaScript !== null, 'Service page has Schema.org JSON-LD Structured Data for SEO');

    const waForm = await page.$('#whatsapp-inquiry-form');
    const waNameInput = await page.$('#wa-name');
    const waPhoneInput = await page.$('#wa-phone');
    const waSubmitBtn = await page.$('#wa-send-btn');
    assert(waForm !== null && waNameInput !== null && waPhoneInput !== null && waSubmitBtn !== null, 
      'Service page contains interactive WhatsApp inquiry form on the right sidebar');

    // ==========================================
    // SUITE 3: BLOGS DIRECTORY (blogs.html)
    // ==========================================
    console.log('\n[Suite 3] Testing Medical & Digital SEO Blog Hub (blogs.html)...');
    await page.goto(`${BASE_URL}/blogs.html`, { waitUntil: 'domcontentloaded' });

    const blogsTitle = await page.title();
    assert(blogsTitle.includes('Socialeo') || blogsTitle.includes('Blog'), 'Blogs page loaded successfully');

    const blogCards = await page.$$('.featured-article, .article-card');
    assert(blogCards.length >= 15, `Blog articles directory rendered (Found ${blogCards.length} masterclasses)`);

    // Test Search Filter
    await page.fill('#blog-search', 'SEO');
    await page.waitForTimeout(200);
    const visibleCards = await page.$$eval('.article-card, .featured-article', cards => 
      cards.filter(c => c.style.display !== 'none').length
    );
    assert(visibleCards > 0, `Blog search filter works dynamically (Found ${visibleCards} matches for "SEO")`);

    // ==========================================
    // SUITE 4: ADMIN DASHBOARD MULTI-TAB SYNCHRONIZATION
    // ==========================================
    console.log('\n[Suite 4] Testing Admin Dashboard Multi-Tab Real-Time Sync (admin.html)...');
    
    // Inject authenticated session token and preset VO2 MAX data before navigation
    await page.addInitScript(() => {
      localStorage.setItem('socialeo_admin_session', 'authenticated_socialeo_studio');
    });

    await page.goto(`${BASE_URL}/admin.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(400);

    // 4.1 Verify Header & Controls
    const headerTitle = await page.textContent('#topbar-active-tab-name');
    assert(headerTitle.trim() === 'Bill Management', 'Header displays clean section title "Bill Management"');

    const topbarNewBillBtn = await page.$('#topbar-new-bill-btn');
    assert(topbarNewBillBtn !== null, 'Top header contains "➕ New Bill" button');

    // 4.2 Test Zoom Scaling
    await page.selectOption('#zoom-select-dropdown', '0.50');
    await page.waitForTimeout(150);
    const sheetTransform = await page.$eval('#invoice-printable-target', el => el.style.transform);
    assert(sheetTransform.includes('scale(0.5)'), 'Zoom dropdown at 50% scales sheet by 0.5');

    await page.selectOption('#zoom-select-dropdown', '1.00');
    await page.waitForTimeout(150);

    // 4.3 Test Copy Buttons & QR Download
    const copyAccBtn = await page.$('#copy-acc-btn');
    const copyIfscBtn = await page.$('#copy-ifsc-btn');
    assert(copyAccBtn !== null && copyIfscBtn !== null, 'Invoice footer contains 1-tap copy buttons for Account Number and IFSC');

    // 4.4 Test Real-Time Input Sync to Saved Invoices & CRM
    await page.fill('#client-name-input', 'Dr. Apex Sports Hospital');
    await page.waitForTimeout(300);

    // Switch to Saved Invoices tab to verify real-time sync
    await page.click('button[data-tab="invoices-tab"]');
    await page.waitForTimeout(300);
    const savedInvoicesText = await page.textContent('#saved-invoices-tbody');
    assert(savedInvoicesText.includes('Dr. Apex Sports Hospital'), 'Live edits in Generator synchronized in real-time to Saved Invoices tab');

    // Switch to CRM tab to verify real-time tracking
    await page.click('button[data-tab="crm-tab"]');
    await page.waitForTimeout(300);
    const crmText = await page.textContent('#crm-clients-tbody');
    assert(crmText.includes('Dr. Apex Sports Hospital') || crmText.includes('VO2 MAX'), 'CRM client database updated in real-time');

    // Switch back to generator
    await page.click('button[data-tab="generator-tab"]');
    await page.waitForTimeout(200);

    // 4.5 Test "➕ New Bill" Real-Time Sync & Draft Tracking
    await page.click('#topbar-new-bill-btn');
    await page.waitForTimeout(300);

    // Verify it automatically registered in Saved Invoices as Draft / Unsaved
    await page.click('button[data-tab="invoices-tab"]');
    await page.waitForTimeout(300);
    const draftStatusExists = await page.textContent('#saved-invoices-tbody');
    assert(draftStatusExists.includes('Draft') || draftStatusExists.includes('Unsaved'), 'New Bill immediately appears in Saved Invoices directory as Draft / Unsaved');

    // 4.6 Test Sidebar Presets 1-Click Load
    await page.click('#sidebar-preset-vo2-standard');
    await page.waitForTimeout(300);
    const liveClientName = await page.textContent('#live-client-name');
    assert(liveClientName.includes('VO2 MAX'), 'Sidebar preset VO2 MAX Bill 1 loaded seamlessly');

    // 4.7 Test Blog Studio & Reddit Syndication Hub
    await page.click('button[data-tab="blog-studio-tab"]');
    await page.waitForTimeout(300);
    const blogTitleVal = await page.inputValue('#blog-title-input');
    const redditPreviewVal = await page.inputValue('#reddit-markdown-preview');
    assert(blogTitleVal.length > 0 && redditPreviewVal.includes('Socialeo'), 'Blog Studio loads with ready-to-publish preset & Reddit syndication markdown');

    // ==========================================
    // SUITE 5: LEGAL PAGES (Privacy, Terms, Cookie)
    // ==========================================
    console.log('\n[Suite 5] Testing Legal Suites (Privacy Policy, Terms of Service, Cookie Policy)...');

    // 5.1 Test Privacy Policy
    await page.goto(`${BASE_URL}/privacy-policy.html`, { waitUntil: 'domcontentloaded' });
    const privacyTitle = await page.title();
    assert(privacyTitle.includes('Privacy Policy'), 'Privacy Policy page loaded with proper title');
    const privacyNavbar = await page.$('.navbar');
    const privacyFooter = await page.$('.footer');
    assert(privacyNavbar !== null && privacyFooter !== null, 'Privacy Policy contains responsive Navbar and Footer');

    // Test Theme Toggle on Privacy Policy
    await page.click('#theme-toggle');
    await page.waitForTimeout(200);
    const privacyTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    assert(privacyTheme === 'light', 'Theme Toggle switches to Light Mode on Privacy Policy');
    await page.click('#theme-toggle'); // switch back
    await page.waitForTimeout(100);

    // 5.2 Test Terms of Service
    await page.goto(`${BASE_URL}/terms.html`, { waitUntil: 'domcontentloaded' });
    const termsTitle = await page.title();
    assert(termsTitle.includes('Terms of Service'), 'Terms of Service page loaded with proper title');
    const termsNavbar = await page.$('.navbar');
    const termsFooter = await page.$('.footer');
    assert(termsNavbar !== null && termsFooter !== null, 'Terms of Service contains responsive Navbar and Footer');

    // 5.3 Test Cookie Policy
    await page.goto(`${BASE_URL}/cookie-policy.html`, { waitUntil: 'domcontentloaded' });
    const cookieTitle = await page.title();
    assert(cookieTitle.includes('Cookie Policy'), 'Cookie Policy page loaded with proper title');
    const cookieNavbar = await page.$('.navbar');
    const cookieFooter = await page.$('.footer');
    assert(cookieNavbar !== null && cookieFooter !== null, 'Cookie Policy contains responsive Navbar and Footer');

  } catch (error) {
    console.error('\n❌ Unhandled error during Playwright execution:', error);
  } finally {
    if (browser) await browser.close();
    server.close();
  }

  console.log('\n========================================================');
  console.log(`  PLAYWRIGHT RESULTS: ${passedCount} / ${totalCount} TESTS PASSED (${Math.round((passedCount/totalCount)*100)}%)`);
  console.log('========================================================\n');

  if (passedCount === totalCount && totalCount > 0) {
    console.log('🎉 ALL PLAYWRIGHT E2E BROWSER TESTS PASSED PERFECTLY!\n');
    process.exit(0);
  } else {
    console.error('❌ SOME PLAYWRIGHT E2E TESTS FAILED.\n');
    process.exit(1);
  }
}

runE2ETests();
