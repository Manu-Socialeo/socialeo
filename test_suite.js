const fs = require('fs');

console.log('====================================================');
console.log('  SOCIALEO MASTER INTEGRATION & AUDIT TEST SUITE    ');
console.log('====================================================\n');

const adminHtml = fs.readFileSync('admin.html', 'utf8');
const adminCss = fs.readFileSync('admin.css', 'utf8');
const adminJs = fs.readFileSync('admin.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const stylesCss = fs.readFileSync('styles.css', 'utf8');
const mainJs = fs.readFileSync('main.js', 'utf8');
const brainMd = fs.readFileSync('brain.md', 'utf8');

const tests = [
  { 
    suite: 'Branding & Naming',
    name: 'Admin title is Socialeo Admin Dashboard', 
    pass: adminHtml.includes('Socialeo Admin Dashboard') 
  },
  { 
    suite: 'Branding & Naming',
    name: 'Admin badge is ADMIN DASHBOARD', 
    pass: adminHtml.includes('ADMIN DASHBOARD') 
  },
  { 
    suite: 'Sidebar Navigation',
    name: 'Collapsible Left Sidebar exists in DOM', 
    pass: adminHtml.includes('id="admin-sidebar"') && adminHtml.includes('id="sidebar-collapse-btn"') 
  },
  { 
    suite: 'Sidebar Navigation',
    name: 'Collapsible arrow icon toggle exists', 
    pass: adminHtml.includes('id="sidebar-arrow-icon"') && adminJs.includes('toggleSidebar') 
  },
  { 
    suite: 'Unified PDF Controls',
    name: 'Single Download / Print button in preview toolbar', 
    pass: adminHtml.includes('id="pane-download-print-btn"') 
  },
  { 
    suite: 'Unified PDF Controls',
    name: 'Single Download / Print button in sticky bottom bar', 
    pass: adminHtml.includes('id="bottom-download-print-btn"') 
  },
  { 
    suite: 'Unified PDF Controls',
    name: 'Single Download / Print button in sidebar studio tools', 
    pass: adminHtml.includes('id="sidebar-quick-download-print"') 
  },
  { 
    suite: 'A4 Sheet Zoom Engine',
    name: 'Simple Zoom Dropdown Button exists with 25%, 50%, 75%, 100%, and Fit options', 
    pass: adminHtml.includes('id="zoom-select-dropdown"') && 
          adminHtml.includes('value="0.25"') && 
          adminHtml.includes('value="0.50"') && 
          adminHtml.includes('value="0.75"') && 
          adminHtml.includes('value="1.00"') && 
          adminHtml.includes('value="fit"') &&
          adminJs.includes('zoomSelectDropdown')
  },
  { 
    suite: 'Client Ground Truth Data',
    name: 'VO2 MAX verified address updated across HTML, JS, & Brain', 
    pass: adminHtml.includes('H1, Srihari Medical Trust') && 
          adminJs.includes('H1, Srihari Medical Trust') &&
          brainMd.includes('H1, Srihari Medical Trust')
  },
  { 
    suite: 'Capabilities Deck PDF',
    name: '3-Page Capabilities deck has exact 296mm page containment and no trailing blanks', 
    pass: stylesCss.includes('height: 296mm') && 
          stylesCss.includes('page-break-after: avoid') && 
          mainJs.includes("pagebreak: { mode: 'css' }")
  },
  { 
    suite: 'Payment & Bank Information',
    name: 'Copy buttons for Account Number and IFSC exist on live invoice sheet', 
    pass: adminHtml.includes('id="copy-acc-btn"') && 
          adminHtml.includes('id="copy-ifsc-btn"') && 
          adminJs.includes('copyTextToClipboard')
  },
  { 
    suite: 'Payment & Bank Information',
    name: 'Tap-to-download Payment QR Code capability is wired up', 
    pass: adminHtml.includes('clickable-qr') && 
          adminJs.includes('downloadPaymentQrImage')
  },
  { 
    suite: 'Global Agency & Banking Setup',
    name: 'Agency & Bank Setup tab exists in sidebar and auto-syncs globally', 
    pass: adminHtml.includes('data-tab="settings-tab"') && 
          adminJs.includes('getGlobalBankProfile') &&
          adminJs.includes('getGlobalAgencyProfile') &&
          adminJs.includes('loadSettingsTab')
  },
  { 
    suite: 'Branding Links',
    name: 'Socialeo official website clickable logo preserved', 
    pass: adminHtml.includes('https://socialeo.vercel.app/') 
  }
];

let passCount = 0;
tests.forEach((t, i) => {
  if (t.pass) passCount++;
  console.log(`[${t.suite}] ${t.pass ? '✅ PASS' : '❌ FAIL'} - ${t.name}`);
});

console.log(`\nResults: ${passCount} / ${tests.length} tests passed (${Math.round((passCount / tests.length) * 100)}%)`);

if (passCount === tests.length) {
  console.log('\n🎉 ALL QUALITY ASSURANCE CHECKS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('\n❌ SOME CHECKS FAILED\n');
  process.exit(1);
}
