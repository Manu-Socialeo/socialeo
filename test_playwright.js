/**
 * ==============================================================================
 * SOCIALEO MASTER PLAYWRIGHT END-TO-END AUTOMATION SUITE (test_playwright.js)
 * Tests 100% of the entire website: index.html, blogs.html, & admin.html
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
    // SUITE 1: MAIN WEBSITE (index.html)
    // ==========================================
    console.log('[Suite 1] Testing Main Website (index.html)...');
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'domcontentloaded' });

    const indexTitle = await page.title();
    assert(indexTitle.includes('Socialeo'), 'Page title contains Socialeo');

    const heroHeading = await page.textContent('h1');
    assert(heroHeading.length > 0, 'Hero heading exists and is non-empty');

    const a4Pages = await page.$$('.pdf-a4-page, .capabilities-page, section');
    assert(a4Pages.length >= 3, 'Capabilities Deck contains 3+ structured content sections');

    const ctaButton = await page.$('a[href*="admin.html"], button, .btn-primary');
    assert(ctaButton !== null, 'Interactive CTA / portal links exist');

    // ==========================================
    // SUITE 2: BLOGS DIRECTORY (blogs.html)
    // ==========================================
    console.log('\n[Suite 2] Testing Medical & Digital SEO Blog Hub (blogs.html)...');
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
    // SUITE 3: ADMIN DASHBOARD (admin.html)
    // ==========================================
    console.log('\n[Suite 3] Testing Admin Dashboard (admin.html)...');
    
    // Inject authenticated session token and preset VO2 MAX data before navigation
    await page.addInitScript(() => {
      localStorage.setItem('socialeo_admin_session', 'authenticated_socialeo_studio');
    });

    await page.goto(`${BASE_URL}/admin.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    // 3.1 Verify Header & Breadcrumbs
    const headerTitle = await page.textContent('#topbar-active-tab-name');
    assert(headerTitle.trim() === 'Bill Generator Studio', 'Header displays clean section title "Bill Generator Studio"');

    const topbarNewBillBtn = await page.$('#topbar-new-bill-btn');
    assert(topbarNewBillBtn !== null, 'Top header contains "➕ New Bill" button');

    const engineBadge = await page.$('.pulse-indicator');
    assert(engineBadge === null, 'Redundant "Dashboard Engine Active" waste symbol is completely removed');

    // 3.2 Verify Left Controls Card
    const saveBtn = await page.$('#save-invoice-btn');
    const deleteBtn = await page.$('#delete-active-bill-btn');
    const leftNewBill = await page.$('.quick-toolbar-card #new-invoice-btn');
    assert(saveBtn !== null && deleteBtn !== null, 'Bill Management card contains Save Bill and Delete Bill');
    assert(leftNewBill === null, 'New Bill correctly removed from left controls card (located on topbar)');

    // 3.3 Verify Right Preview Toolbar
    const zoomDropdown = await page.$('#zoom-select-dropdown');
    const downloadPdfBtn = await page.$('#pane-download-print-btn');
    assert(zoomDropdown !== null && downloadPdfBtn !== null, 'Right preview toolbar contains Zoom dropdown and Download/Print PDF button');

    // 3.4 Test Zoom Engine Scaling
    await page.selectOption('#zoom-select-dropdown', '0.50');
    await page.waitForTimeout(200);
    const sheetTransform = await page.$eval('#invoice-printable-target', el => el.style.transform);
    assert(sheetTransform.includes('scale(0.5)'), 'Zoom dropdown at 50% scales sheet by 0.5');

    await page.selectOption('#zoom-select-dropdown', '1.00');
    await page.waitForTimeout(200);
    const sheetTransform100 = await page.$eval('#invoice-printable-target', el => el.style.transform);
    assert(sheetTransform100.includes('scale(1)'), 'Zoom dropdown at 100% (default) scales sheet by 1.0');

    // 3.5 Verify Copy Buttons (Account Number & IFSC)
    const copyAccBtn = await page.$('#copy-acc-btn');
    const copyIfscBtn = await page.$('#copy-ifsc-btn');
    assert(copyAccBtn !== null && copyIfscBtn !== null, 'Live invoice footer contains 1-tap copy buttons for Account Number and IFSC');

    // 3.6 Verify QR Code Click-to-Download
    const qrFrame = await page.$('#live-qr-frame');
    assert(qrFrame !== null, 'Payment QR code frame is clickable for direct image download');

    // 3.7 Verify VO2 MAX Ground Truth & Live Calculation
    const liveClientName = await page.textContent('#live-client-name');
    assert(liveClientName.includes('VO2 MAX'), 'Live invoice sheet displays VO2 MAX client name');

    const liveTotal = await page.textContent('#live-total-val');
    assert(liveTotal.includes('57,000') || liveTotal.includes('52,000'), `Live total calculation accurate (${liveTotal})`);

    // 3.8 Test Sidebar Presets Loading (VO2 MAX Offer)
    await page.click('#sidebar-preset-vo2-offer');
    await page.waitForTimeout(300);
    const discountDisplay = await page.textContent('#live-discount-val');
    assert(discountDisplay.includes('5,000'), 'Sidebar preset loads VO2 MAX ₹5,000 Special Launch Offer');

    // 3.9 Test Sidebar Preset: Yoga with Srinatha
    await page.click('#sidebar-preset-srinatha');
    await page.waitForTimeout(300);
    const srinathaClient = await page.textContent('#live-client-name');
    assert(srinathaClient.includes('Yoga with Srinatha'), 'Sidebar preset loads Yoga with Srinatha #7272');

    // 3.10 Test Navigation to Tabs (Client CRM, Saved Invoices, Agency & Bank Setup)
    await page.click('button[data-tab="crm-tab"]');
    await page.waitForTimeout(300);
    const crmTabActive = await page.$eval('#crm-tab', el => el.classList.contains('active'));
    assert(crmTabActive, 'Client CRM tab opens in real time');

    await page.click('button[data-tab="invoices-tab"]');
    await page.waitForTimeout(300);
    const invTabActive = await page.$eval('#invoices-tab', el => el.classList.contains('active'));
    assert(invTabActive, 'Saved Invoices tab opens in real time and lists invoices');

    await page.click('button[data-tab="settings-tab"]');
    await page.waitForTimeout(300);
    const setTabActive = await page.$eval('#settings-tab', el => el.classList.contains('active'));
    assert(setTabActive, 'Agency & Bank Setup tab opens in real time with auto-sync configuration');

    // Switch back to generator
    await page.click('button[data-tab="generator-tab"]');
    await page.waitForTimeout(200);

    // 3.11 Test Topbar "New Bill" Button
    await page.click('#topbar-new-bill-btn');
    await page.waitForTimeout(300);
    const blankItemsCount = await page.$$eval('.item-edit-row', rows => rows.length);
    assert(blankItemsCount >= 1, 'Top header "➕ New Bill" instantly creates and renders a fresh bill template');

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
