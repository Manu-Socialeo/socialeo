/* ==========================================================================
   SOCIALEO ADMIN STUDIO — CRM & INVOICE ENGINE (admin.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. DATA STATE & STORAGE (VO2 MAX BILLS ONLY)
  // ==========================================
  
  // 1. VO2 MAX — BILL 1: Work Done Till Now (19 Pages + Lead Infrastructure: ₹57,000 Standard)
  const VO2_MAX_BILL_1 = {
    invoiceNumber: "8104",
    invoiceDate: "25th August 2026",
    status: "Pending",
    currency: "₹",
    client: {
      id: "vo2-max-mysuru",
      name: "VO2 MAX Sports Physiotherapy & Rehab",
      addressLine1: "H1, Srihari Medical Trust, Opp. Learner's PU College,",
      addressLine2: "Vijayanagar 2nd Stage, Mysuru, Karnataka 570017",
      phone: "+91 99728 36999",
      email: "vo2maxphysio@gmail.com"
    },
    items: [
      { sno: "1.0", description: "UI/UX Strategy & Medical Design System (Custom athletic-medical UI, typography, color tokens, responsive wireframes)", price: "10000", qty: "1", amount: "10000" },
      { sno: "2.0", description: "Core Public Pages (9 Pages) — Home, About, Services Directory, Specialists, Pricing, Gallery, Contact, Testimonials, FAQs (9 × ₹2,500)", price: "2500", qty: "9", amount: "22500" },
      { sno: "3.0", description: "Specialist Doctor Credential Portals (2 Pages) — Dr. Pradeep Kumar (MPT) & Dr. Pinakin Ayare (MPT) verified credential portals (2 × ₹1,500)", price: "1500", qty: "2", amount: "3000" },
      { sno: "4.0", description: "Patient Conversion Engines & Interactive Lead Widgets — Online Appointment Booker (/book-appointment), Callback Portal (/request-callback), Maps Navigation (/location), Floating WhatsApp Quick-Chat, Mobile One-Touch Calling, Dynamic Hero Carousel, Interactive FAQs", price: "7500", qty: "1", amount: "7500" },
      { sno: "5.0", description: "Medical Legal & Compliance Suite (5 Pages) — Privacy Policy, Terms & Conditions, Medical Disclaimer, Appointment Policy, Cookie Policy (5 × ₹800)", price: "800", qty: "5", amount: "4000" },
      { sno: "6.0", description: "Healthcare Technical SEO & Cloud Performance — JSON-LD MedicalClinic & Physician Schema, XML Sitemap, Robots.txt, Edge CDN Cloud hosting, SSL security & Sub-second speed optimization", price: "10000", qty: "1", amount: "10000" }
    ],
    taxRate: 0,
    discountType: "fixed",
    discountValue: 0,
    bankInfo: {
      beneficiary: "MANPREETH N",
      bankName: "STATE BANK OF INDIA",
      accountNumber: "20340118904",
      ifsc: "SBIN0016500",
      upiId: "8722163256@sbi"
    },
    agencyInfo: {
      name: "Socialeo",
      addressLine1: "1646, 5th Main, Vijayanagar 2nd Stage,",
      addressLine2: "Mysore, Karnataka - 570017",
      phone: "+91 8722163256",
      email: "socialeopvtltd@gmail.com"
    }
  };

  // 2. VO2 MAX — BILL 1: Special Launch Offer (₹52,000 with ₹5,000 Launch Discount)
  const VO2_MAX_OFFER_BILL = {
    ...JSON.parse(JSON.stringify(VO2_MAX_BILL_1)),
    discountType: "fixed",
    discountValue: 5000
  };

  // 3. VO2 MAX — BILL 2: Future Scope & Annual Retainers (28 Expansion Pages + 1 Year AMC: ₹66,000)
  const VO2_MAX_BILL_2 = {
    invoiceNumber: "8105",
    invoiceDate: "25th August 2026",
    status: "Pending",
    currency: "₹",
    client: {
      id: "vo2-max-mysuru",
      name: "VO2 MAX Sports Physiotherapy & Rehab",
      addressLine1: "H1, Srihari Medical Trust, Opp. Learner's PU College,",
      addressLine2: "Vijayanagar 2nd Stage, Mysuru, Karnataka 570017",
      phone: "+91 99728 36999",
      email: "vo2maxphysio@gmail.com"
    },
    items: [
      { sno: "2.1", description: "14 Specialized Clinical Treatment Detail Pages — Dedicated deep pages for all 14 clinical therapies with recovery stages & protocol breakdowns (14 × ₹1,500)", price: "1500", qty: "14", amount: "21000" },
      { sno: "2.2", description: "14 Health Hub Clinical SEO Articles — 14,000+ words of evidence-based medical articles + BlogPosting & FAQPage Google Schema (14 × ₹1,500)", price: "1500", qty: "14", amount: "21000" },
      { sno: "2.3", description: "Managed Cloud Edge Hosting & CDN — Global Edge CDN hosting, sub-second load speeds, unlimited bandwidth, 99.99% uptime guarantee", price: "15000", qty: "1 yr", amount: "15000" },
      { sno: "2.4", description: "Automated SSL Security & DNS Management — Enterprise HTTPS padlock encryption, automated certificate renewals, domain protection", price: "4000", qty: "1 yr", amount: "4000" },
      { sno: "2.5", description: "Quarterly SEO Audits, Speed Tuning & Content Updates — Google Search Console monitoring, index coverage checks, Core Web Vitals speed tuning & updates", price: "5000", qty: "1 yr", amount: "5000" }
    ],
    taxRate: 0,
    discountType: "fixed",
    discountValue: 0,
    bankInfo: {
      beneficiary: "MANPREETH N",
      bankName: "STATE BANK OF INDIA",
      accountNumber: "20340118904",
      ifsc: "SBIN0016500",
      upiId: "8722163256@sbi"
    },
    agencyInfo: {
      name: "Socialeo",
      addressLine1: "1646, 5th Main, Vijayanagar 2nd Stage,",
      addressLine2: "Mysore, Karnataka - 570017",
      phone: "+91 8722163256",
      email: "socialeopvtltd@gmail.com"
    }
  };

  // 4. Yoga with Srinatha — Reference Bill (Inv #7272: ₹5,000)
  const SRINATHA_BILL = {
    invoiceNumber: "7272",
    invoiceDate: "20th August 2026",
    status: "Paid",
    currency: "₹",
    client: {
      id: "yoga-srinatha-mysuru",
      name: "Yoga with Srinatha",
      addressLine1: "Gokulam 3rd Stage,",
      addressLine2: "Mysuru, Karnataka - 570002",
      phone: "+91 98450 12345",
      email: "contact@yogawithsrinatha.com"
    },
    items: [
      { sno: "1.0", description: "Yoga Studio Branding & Digital Web Architecture", price: "5000", qty: "1", amount: "5000" }
    ],
    taxRate: 0,
    discountType: "fixed",
    discountValue: 0,
    bankInfo: {
      beneficiary: "MANPREETH N",
      bankName: "STATE BANK OF INDIA",
      accountNumber: "20340118904",
      ifsc: "SBIN0016500",
      upiId: "8722163256@sbi"
    },
    agencyInfo: {
      name: "Socialeo",
      addressLine1: "1646, 5th Main, Vijayanagar 2nd Stage,",
      addressLine2: "Mysore, Karnataka - 570017",
      phone: "+91 8722163256",
      email: "socialeopvtltd@gmail.com"
    }
  };

  // Standard & Medical Service Preset Catalog
  const SERVICE_CATALOG = {
    "vo2-ux-strategy": { sno: "1.0", desc: "UI/UX Strategy & Medical Design System (Custom athletic-medical UI, typography, color tokens, wireframes)", price: "10000", qty: "1", amount: "10000" },
    "vo2-core-pages": { sno: "2.0", desc: "Core Public Pages (9 Pages — Home, About, Services, Specialists, Pricing, Gallery, Contact, Testimonials, FAQs)", price: "2500", qty: "9", amount: "22500" },
    "vo2-doc-portals": { sno: "3.0", desc: "Specialist Doctor Credential Portals (2 Pages — Dr. Pradeep Kumar & Dr. Pinakin Ayare MPT)", price: "1500", qty: "2", amount: "3000" },
    "vo2-lead-widgets": { sno: "4.0", desc: "Patient Conversion Engines & Interactive Lead Widgets (Booker, Callback, WhatsApp, Maps)", price: "7500", qty: "1", amount: "7500" },
    "vo2-legal-suite": { sno: "5.0", desc: "Medical Legal & Compliance Suite (5 Pages — Privacy, Terms, Disclaimer, Appointment & Cookie Policies)", price: "800", qty: "5", amount: "4000" },
    "vo2-healthcare-seo": { sno: "6.0", desc: "Healthcare Technical SEO & Cloud Performance (MedicalClinic Schema, CDN Hosting, SSL, Speed)", price: "10000", qty: "1", amount: "10000" },
    
    "vo2-treatment-pages": { sno: "2.1", desc: "14 Specialized Clinical Treatment Detail Pages (Recovery stages & clinical breakdowns)", price: "1500", qty: "14", amount: "21000" },
    "vo2-health-articles": { sno: "2.2", desc: "14 Health Hub Clinical SEO Articles (14,000+ words + Medical BlogPosting Schema)", price: "1500", qty: "14", amount: "21000" },
    "vo2-hosting-cdn": { sno: "2.3", desc: "Managed Cloud Edge Hosting & CDN (Global Edge CDN, sub-second speed, 99.99% uptime)", price: "15000", qty: "1 yr", amount: "15000" },
    "vo2-ssl-dns": { sno: "2.4", desc: "Automated SSL Security & DNS Management (Enterprise HTTPS padlock & domain security)", price: "4000", qty: "1 yr", amount: "4000" },
    "vo2-seo-audits": { sno: "2.5", desc: "Quarterly SEO Audits, Speed Tuning & Updates (Google Search Console & Core Web Vitals)", price: "5000", qty: "1 yr", amount: "5000" },
    
    "web-design": { sno: "1.0", desc: "Website Design & UX / UI", price: "40000", qty: "1", amount: "40000" },
    "web-dev": { sno: "2.0", desc: "Website Development (Full-Stack, incl. Backend)", price: "123000", qty: "1", amount: "123000" },
    "mobile-app": { sno: "3.0", desc: "Mobile App Development (Full-Stack)", price: "165000", qty: "1", amount: "165000" },
    "admin-dash": { sno: "4.0", desc: "Custom Admin Dashboard (Inventory & Content Manager)", price: "75000", qty: "1", amount: "75000" },
    "seo": { sno: "5.0", desc: "On-Page SEO & Schema Setup", price: "15000", qty: "1", amount: "15000" },
    "user-manual": { sno: "6.0", desc: "User Manual / Video Documentation", price: "Free", qty: "1", amount: "0" },
    "hosting": { sno: "7.0", desc: "Hosting & Support", price: "Client Managed", qty: "Self", amount: "0" },
    "ssl": { sno: "8.0", desc: "SSL certificate", price: "Offer", qty: "1", amount: "0" },
    "maintenance": { sno: "9.0", desc: "Annual Maintenance Contract (AMC)", price: "35000", qty: "1 yr", amount: "35000" },
    "branding": { sno: "10.0", desc: "Brand Identity & Visual System", price: "50000", qty: "1", amount: "50000" }
  };

  // Load state from localStorage with full multi-client defaults
  const defaultSavedInvoices = [
    JSON.parse(JSON.stringify(VO2_MAX_BILL_1)),
    JSON.parse(JSON.stringify(VO2_MAX_BILL_2)),
    JSON.parse(JSON.stringify(SRINATHA_BILL))
  ];

  let rawSavedInvoices = JSON.parse(localStorage.getItem('socialeo_saved_invoices'));
  let savedInvoices = Array.isArray(rawSavedInvoices) && rawSavedInvoices.length >= 2
    ? rawSavedInvoices
    : defaultSavedInvoices;

  // Ensure Srinatha bill is present in saved invoices
  if (!savedInvoices.some(inv => inv.invoiceNumber === "7272")) {
    savedInvoices.push(JSON.parse(JSON.stringify(SRINATHA_BILL)));
  }
  localStorage.setItem('socialeo_saved_invoices', JSON.stringify(savedInvoices));

  let currentBill = JSON.parse(localStorage.getItem('socialeo_active_bill')) || JSON.parse(JSON.stringify(VO2_MAX_BILL_1));

  const defaultClients = [
    {
      id: "vo2-max-mysuru",
      name: "VO2 MAX Sports Physiotherapy & Rehab",
      addressLine1: "H1, Srihari Medical Trust, Opp. Learner's PU College,",
      addressLine2: "Vijayanagar 2nd Stage, Mysuru, Karnataka 570017",
      phone: "+91 99728 36999",
      email: "vo2maxphysio@gmail.com",
      totalBilled: "₹1,23,000",
      invoicesCount: 2
    },
    {
      id: "yoga-srinatha-mysuru",
      name: "Yoga with Srinatha",
      addressLine1: "Gokulam 3rd Stage,",
      addressLine2: "Mysuru, Karnataka - 570002",
      phone: "+91 98450 12345",
      email: "contact@yogawithsrinatha.com",
      totalBilled: "₹5,000",
      invoicesCount: 1
    }
  ];

  let rawClients = JSON.parse(localStorage.getItem('socialeo_crm_clients'));
  let crmClients = Array.isArray(rawClients) && rawClients.length >= 2
    ? rawClients
    : defaultClients;

  localStorage.setItem('socialeo_crm_clients', JSON.stringify(crmClients));

  // ==========================================
  // 2. HELPER FUNCTIONS
  // ==========================================
  
  // Format Number to Indian Currency Style (e.g. 4,18,000 or 1,23,000)
  function formatCurrency(num, symbol = "₹") {
    if (isNaN(num)) return `${symbol}0`;
    const isNegative = num < 0;
    const absNum = Math.round(Math.abs(num));
    const numStr = absNum.toString();
    
    let lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return `${isNegative ? '-' : ''}${symbol}${formatted}`;
  }

  function showToast(msg, icon = "✅") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.innerHTML = `<span>${icon}</span> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ==========================================
  // 2.5 ADMIN AUTHENTICATION & DEVICE MEMORY GATEWAY
  // ==========================================
  const authOverlay = document.getElementById('admin-auth-overlay');
  const authForm = document.getElementById('admin-login-form');
  const authUsername = document.getElementById('auth-username');
  const authPassword = document.getElementById('auth-password');
  const authRemember = document.getElementById('auth-remember-device');
  const authErrorMsg = document.getElementById('auth-error-msg');
  const authTogglePwd = document.getElementById('auth-toggle-pwd-btn');
  const logoutBtn = document.getElementById('admin-logout-btn');

  // Check persistent session on this device
  const savedToken = localStorage.getItem('socialeo_admin_session') || sessionStorage.getItem('socialeo_admin_session');
  if (savedToken === 'authenticated_socialeo_studio') {
    unlockAdminStudio(false);
  }

  function unlockAdminStudio(showToastMsg = true) {
    if (authOverlay) {
      authOverlay.classList.add('auth-granted');
    }
    if (showToastMsg) {
      showToast("Welcome to Socialeo Admin Studio!", "🔓");
    }
  }

  function lockAdminStudio() {
    localStorage.removeItem('socialeo_admin_session');
    sessionStorage.removeItem('socialeo_admin_session');
    if (authOverlay) {
      authOverlay.classList.remove('auth-granted');
      if (authPassword) authPassword.value = '';
    }
    showToast("Admin studio locked.", "🔒");
  }

  // Toggle Password Visibility
  authTogglePwd?.addEventListener('click', () => {
    if (authPassword) {
      const isPwd = authPassword.type === 'password';
      authPassword.type = isPwd ? 'text' : 'password';
      authTogglePwd.textContent = isPwd ? '🙈' : '👁️';
    }
  });

  // Login Form Submission
  authForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = (authUsername?.value || '').trim().toLowerCase();
    const p = (authPassword?.value || '').trim();

    // Valid credentials:
    // Username: 'admin' or 'socialeo' or 'socialeopvtltd@gmail.com' or 'manu'
    // Password: 'socialeo@2026' or 'socialeo2026' or 'admin123'
    const validUsers = ['admin', 'socialeo', 'socialeopvtltd@gmail.com', 'manu'];
    const validPass = ['socialeo@2026', 'socialeo2026', 'admin123', 'admin@2026'];

    if (validUsers.includes(u) && validPass.includes(p)) {
      if (authErrorMsg) authErrorMsg.style.display = 'none';

      const rememberDevice = authRemember ? authRemember.checked : true;
      if (rememberDevice) {
        localStorage.setItem('socialeo_admin_session', 'authenticated_socialeo_studio');
      } else {
        sessionStorage.setItem('socialeo_admin_session', 'authenticated_socialeo_studio');
      }

      unlockAdminStudio(true);
    } else {
      if (authErrorMsg) {
        authErrorMsg.textContent = "⚠️ Invalid credentials. Check username or password.";
        authErrorMsg.style.display = 'flex';
      }
    }
  });

  logoutBtn?.addEventListener('click', lockAdminStudio);

  // ==========================================
  // 3. COLLAPSIBLE SIDEBAR & TAB NAVIGATION
  // ==========================================
  const sidebarElem = document.getElementById('admin-sidebar');
  const layoutContainer = document.getElementById('admin-layout-container');
  const sidebarCollapseBtn = document.getElementById('sidebar-collapse-btn');
  const topbarSidebarToggle = document.getElementById('topbar-sidebar-toggle');
  const topbarTabName = document.getElementById('topbar-active-tab-name');

  // Load saved sidebar collapsed state
  const isSidebarCollapsed = localStorage.getItem('socialeo_sidebar_collapsed') === 'true';
  if (isSidebarCollapsed) {
    sidebarElem?.classList.add('collapsed');
    layoutContainer?.classList.add('sidebar-collapsed');
  }

  function toggleSidebar() {
    if (window.innerWidth <= 992) {
      sidebarElem?.classList.toggle('mobile-open');
    } else {
      const isCollapsed = sidebarElem?.classList.toggle('collapsed');
      layoutContainer?.classList.toggle('sidebar-collapsed', isCollapsed);
      sidebarElem?.classList.remove('hover-expanded');
      localStorage.setItem('socialeo_sidebar_collapsed', isCollapsed ? 'true' : 'false');
    }
  }

  sidebarCollapseBtn?.addEventListener('click', toggleSidebar);
  topbarSidebarToggle?.addEventListener('click', toggleSidebar);

  // Sidebar Hover Peek when closed with arrow key; stays locked open if uncollapsed
  sidebarElem?.addEventListener('mouseenter', () => {
    if (sidebarElem.classList.contains('collapsed')) {
      sidebarElem.classList.add('hover-expanded');
    }
  });

  sidebarElem?.addEventListener('mouseleave', () => {
    if (sidebarElem.classList.contains('collapsed')) {
      sidebarElem.classList.remove('hover-expanded');
    }
  });

  // Bill Management Card Hover & Lock Toggle
  const billMgmtCard = document.getElementById('bill-mgmt-card');
  const billMgmtToggleBtn = document.getElementById('bill-mgmt-toggle-btn');
  const isBillMgmtCollapsed = localStorage.getItem('socialeo_bill_mgmt_collapsed') === 'true';
  if (isBillMgmtCollapsed) {
    billMgmtCard?.classList.add('collapsed');
  }

  billMgmtToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isCol = billMgmtCard?.classList.toggle('collapsed');
    billMgmtCard?.classList.remove('hover-open');
    localStorage.setItem('socialeo_bill_mgmt_collapsed', isCol ? 'true' : 'false');
  });

  billMgmtCard?.addEventListener('mouseenter', () => {
    if (billMgmtCard?.classList.contains('collapsed')) {
      billMgmtCard.classList.add('hover-open');
    }
  });

  billMgmtCard?.addEventListener('mouseleave', () => {
    if (billMgmtCard?.classList.contains('collapsed')) {
      billMgmtCard.classList.remove('hover-open');
    }
  });

  // Pane Column Collapse Toggle (Matches Sidebar Arrow)
  const billStudioLayout = document.getElementById('bill-studio-layout');
  const studioControlsPane = document.getElementById('studio-controls-pane');
  const paneToggleBtn = document.getElementById('pane-toggle-btn');
  const isPaneCollapsed = localStorage.getItem('socialeo_admin_pane_collapsed') === 'true';
  if (isPaneCollapsed) {
    billStudioLayout?.classList.add('pane-collapsed');
  }

  paneToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isCol = billStudioLayout?.classList.toggle('pane-collapsed');
    studioControlsPane?.classList.remove('hover-expanded');
    localStorage.setItem('socialeo_admin_pane_collapsed', isCol ? 'true' : 'false');
  });

  studioControlsPane?.addEventListener('mouseenter', () => {
    if (billStudioLayout?.classList.contains('pane-collapsed')) {
      studioControlsPane.classList.add('hover-expanded');
    }
  });

  studioControlsPane?.addEventListener('mouseleave', () => {
    if (billStudioLayout?.classList.contains('pane-collapsed')) {
      studioControlsPane.classList.remove('hover-expanded');
    }
  });

  // Close mobile sidebar on selection
  function closeMobileSidebarOnSelection() {
    if (window.innerWidth <= 992) {
      sidebarElem?.classList.remove('mobile-open');
    }
  }

  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  const tabContents = document.querySelectorAll('.admin-tab-content');

  const tabNameMap = {
    'generator-tab': 'Bill Management',
    'crm-tab': 'Client CRM Database',
    'invoices-tab': 'Saved Invoices Directory',
    'settings-tab': 'Agency & Bank Setup'
  };

  function switchTab(targetTabId) {
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });
    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === targetTabId);
    });
    if (topbarTabName && tabNameMap[targetTabId]) {
      topbarTabName.textContent = tabNameMap[targetTabId];
    }
    closeMobileSidebarOnSelection();
    if (targetTabId === 'crm-tab') renderCRM();
    if (targetTabId === 'invoices-tab') renderSavedInvoices();
    if (targetTabId === 'settings-tab') loadSettingsTab();
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Sidebar Quick Presets
  document.getElementById('sidebar-preset-vo2-standard')?.addEventListener('click', () => {
    switchTab('generator-tab');
    loadBillIntoStudio(JSON.parse(JSON.stringify(VO2_MAX_BILL_1)));
    showToast("Loaded VO2 MAX Bill 1 (₹57,000 Standard)", "📄");
  });

  document.getElementById('sidebar-preset-vo2-offer')?.addEventListener('click', () => {
    switchTab('generator-tab');
    loadBillIntoStudio(JSON.parse(JSON.stringify(VO2_MAX_OFFER_BILL)));
    showToast("Loaded VO2 MAX Bill 1 Offer (₹52,000)", "🔥");
  });

  document.getElementById('sidebar-preset-vo2-future')?.addEventListener('click', () => {
    switchTab('generator-tab');
    loadBillIntoStudio(JSON.parse(JSON.stringify(VO2_MAX_BILL_2)));
    showToast("Loaded VO2 MAX Bill 2 Future Scope (₹66,000)", "🚀");
  });

  document.getElementById('sidebar-preset-srinatha')?.addEventListener('click', () => {
    switchTab('generator-tab');
    loadBillIntoStudio(JSON.parse(JSON.stringify(SRINATHA_BILL)));
    showToast("Loaded Yoga with Srinatha #7272 (₹5,000)", "🧘");
  });

  // Sidebar Quick Action Tools
  document.getElementById('sidebar-quick-download-print')?.addEventListener('click', () => {
    downloadPdfWithLinks();
  });

  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('socialeo-theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
  }

  themeToggleBtn?.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggleBtn.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeToggleBtn.textContent = '🌙';
    }
    localStorage.setItem('socialeo-theme', newTheme);
  });

  // ==========================================
  // 4. BILL GENERATOR FORM BINDINGS & RENDER
  // ==========================================
  
  // Global Agency & Bank Profile Helpers
  function getGlobalAgencyProfile() {
    const saved = localStorage.getItem('socialeo_agency_profile');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { ...VO2_MAX_BILL_1.agencyInfo };
  }

  function getGlobalBankProfile() {
    const saved = localStorage.getItem('socialeo_bank_profile');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { ...VO2_MAX_BILL_1.bankInfo };
  }

  // Input References
  const invNumberInput = document.getElementById('inv-number-input');
  const invDateInput = document.getElementById('inv-date-input');
  const invStatusInput = document.getElementById('inv-status-input');
  const invCurrencyInput = document.getElementById('inv-currency-input');

  const clientNameInput = document.getElementById('client-name-input');
  const clientAddr1Input = document.getElementById('client-address1-input');
  const clientAddr2Input = document.getElementById('client-address2-input');
  const clientPhoneInput = document.getElementById('client-phone-input');
  const clientEmailInput = document.getElementById('client-email-input');
  const crmClientSelect = document.getElementById('crm-client-select');

  const itemsInputsList = document.getElementById('items-inputs-list');
  const addItemRowBtn = document.getElementById('add-item-row-btn');
  const quickServiceDropdown = document.getElementById('quick-service-dropdown');

  const taxRateInput = document.getElementById('tax-rate-input');
  const discountTypeInput = document.getElementById('discount-type-input');
  const discountValueInput = document.getElementById('discount-value-input');

  // Live Sheet Target References
  const liveInvDate = document.getElementById('live-inv-date');
  const liveInvNumber = document.getElementById('live-inv-number');
  const liveClientName = document.getElementById('live-client-name');
  const liveClientAddress = document.getElementById('live-client-address');
  const liveTableTbody = document.getElementById('live-table-tbody');

  const liveSubtotalVal = document.getElementById('live-subtotal-val');
  const liveTaxRow = document.getElementById('live-tax-row');
  const liveTaxLabel = document.getElementById('live-tax-label');
  const liveTaxVal = document.getElementById('live-tax-val');
  const liveDiscountRow = document.getElementById('live-discount-row');
  const liveDiscountLabel = document.getElementById('live-discount-label');
  const liveDiscountVal = document.getElementById('live-discount-val');
  const liveTotalVal = document.getElementById('live-total-val');

  const liveBankBeneficiary = document.getElementById('live-bank-beneficiary');
  const liveBankName = document.getElementById('live-bank-name');
  const liveBankAcc = document.getElementById('live-bank-acc');
  const liveBankIfsc = document.getElementById('live-bank-ifsc');
  const liveUpiQrcode = document.getElementById('live-upi-qrcode');

  const liveAgencyName = document.getElementById('live-agency-name');
  const liveAgencyAddr1 = document.getElementById('live-agency-addr1');
  const liveAgencyAddr2 = document.getElementById('live-agency-addr2');
  const liveAgencyPhone = document.getElementById('live-agency-phone');
  const liveAgencyEmail = document.getElementById('live-agency-email');

  // Interactive Live Action Buttons
  const liveBtnWhatsapp = document.getElementById('live-btn-whatsapp');
  const liveBtnEmail = document.getElementById('live-btn-email');
  const liveBtnPaynow = document.getElementById('live-btn-paynow');

  // Financial preview displays
  const calcSubtotalDisplay = document.getElementById('calc-subtotal-display');
  const calcTaxDisplay = document.getElementById('calc-tax-display');
  const calcDiscountDisplay = document.getElementById('calc-discount-display');
  const calcTotalDisplay = document.getElementById('calc-total-display');

  // Load Bill Into Studio Helper
  function loadBillIntoStudio(bill) {
    currentBill = JSON.parse(JSON.stringify(bill));
    populateFormFromBill(currentBill);
  }
  window.loadBillIntoStudio = loadBillIntoStudio;

  // Populate Form Fields from state
  function populateFormFromBill(bill) {
    if (invNumberInput) invNumberInput.value = bill.invoiceNumber || "";
    if (invDateInput) invDateInput.value = bill.invoiceDate || "";
    if (invStatusInput) invStatusInput.value = bill.status || "Paid";
    if (invCurrencyInput) invCurrencyInput.value = bill.currency || "₹";

    if (clientNameInput) clientNameInput.value = bill.client?.name || "";
    if (clientAddr1Input) clientAddr1Input.value = bill.client?.addressLine1 || "";
    if (clientAddr2Input) clientAddr2Input.value = bill.client?.addressLine2 || "";
    if (clientPhoneInput) clientPhoneInput.value = bill.client?.phone || "";
    if (clientEmailInput) clientEmailInput.value = bill.client?.email || "";

    if (taxRateInput) taxRateInput.value = bill.taxRate ?? 0;
    if (discountTypeInput) discountTypeInput.value = bill.discountType || "percent";
    if (discountValueInput) discountValueInput.value = bill.discountValue ?? 0;

    renderItemInputRows();
    updateLivePreviewAndCalculations();
  }

  // Render Item Edit Rows in Left Pane
  function renderItemInputRows() {
    itemsInputsList.innerHTML = "";
    currentBill.items.forEach((item, index) => {
      const defaultSno = item.sno || `${index + 1}.0`;
      const row = document.createElement('div');
      row.className = 'item-edit-row';
      row.innerHTML = `
        <div class="item-row-top">
          <div class="item-sno-wrapper">
            <label>Sl. No.</label>
            <input type="text" class="admin-input item-sno-input" data-index="${index}" data-field="sno" value="${escapeHtml(defaultSno)}" placeholder="1.0">
          </div>
          <div class="item-desc-wrapper">
            <label>Deliverable Scope / Description</label>
            <input type="text" class="admin-input item-desc-input" data-index="${index}" data-field="description" value="${escapeHtml(item.description)}" placeholder="Item / Service description">
          </div>
          <button type="button" class="item-delete-btn" data-index="${index}" title="Remove this line">✕</button>
        </div>
        <div class="item-row-bottom">
          <div class="item-sub-field">
            <label>Price</label>
            <input type="text" class="admin-input" data-index="${index}" data-field="price" value="${escapeHtml(item.price)}" placeholder="40000 or Free">
          </div>
          <div class="item-sub-field">
            <label>Quantity</label>
            <input type="text" class="admin-input" data-index="${index}" data-field="qty" value="${escapeHtml(item.qty)}" placeholder="1 or Self">
          </div>
          <div class="item-sub-field">
            <label>Amount</label>
            <input type="text" class="admin-input" data-index="${index}" data-field="amount" value="${escapeHtml(item.amount)}" placeholder="40000 or 0">
          </div>
        </div>
      `;
      itemsInputsList.appendChild(row);
    });

    // Attach row events
    itemsInputsList.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', handleItemInputChange);
    });

    itemsInputsList.querySelectorAll('.item-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.index);
        currentBill.items.splice(index, 1);
        renderItemInputRows();
        updateLivePreviewAndCalculations();
      });
    });
  }

  function handleItemInputChange(e) {
    const index = parseInt(e.target.dataset.index);
    const field = e.target.dataset.field;
    const val = e.target.value;

    currentBill.items[index][field] = val;

    // Auto-calculate amount if price and qty are numbers
    if (field === 'price' || field === 'qty') {
      const p = parseFloat(currentBill.items[index].price.replace(/,/g, ''));
      const q = parseFloat(currentBill.items[index].qty.replace(/,/g, ''));
      if (!isNaN(p) && !isNaN(q)) {
        currentBill.items[index].amount = String(p * q);
        const amountInput = itemsInputsList.querySelector(`input[data-index="${index}"][data-field="amount"]`);
        if (amountInput) amountInput.value = currentBill.items[index].amount;
      } else if (val.toLowerCase() === 'free' || val.toLowerCase() === 'offer' || val.toLowerCase() === 'client managed') {
        currentBill.items[index].amount = "0";
        const amountInput = itemsInputsList.querySelector(`input[data-index="${index}"][data-field="amount"]`);
        if (amountInput) amountInput.value = "0";
      }
    }

    updateLivePreviewAndCalculations();
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ==========================================
  // 5. REAL-TIME CALCULATION & LIVE PREVIEW
  // ==========================================
  function updateLivePreviewAndCalculations() {
    const curr = invCurrencyInput.value || "₹";

    // 1. Sync Text Data
    liveInvNumber.textContent = `Invoice No. ${invNumberInput.value || '---'}`;
    liveInvDate.textContent = invDateInput.value || '---';

    liveClientName.textContent = clientNameInput.value || 'Client Name';
    const addr1 = clientAddr1Input.value.trim();
    const addr2 = clientAddr2Input.value.trim();
    liveClientAddress.innerHTML = `${escapeHtml(addr1)}${addr1 && addr2 ? '<br>' : ''}${escapeHtml(addr2)}`;

    // 2. Render Items Table in Live A4 Sheet
    liveTableTbody.innerHTML = "";
    let subtotal = 0;

    currentBill.items.forEach((item, index) => {
      const tr = document.createElement('tr');

      // Sl. No. extraction or default
      let displaySno = item.sno;
      if (!displaySno || String(displaySno).trim() === '') {
        displaySno = `${index + 1}.0`;
      }

      // Price Formatting: numerical vs text like "Free", "Client Managed", "Offer"
      let priceDisplay = item.price;
      const numPrice = parseFloat(String(item.price).replace(/,/g, ''));
      if (!isNaN(numPrice) && String(item.price).trim() !== '' && !isNaN(Number(item.price.replace(/,/g, '')))) {
        priceDisplay = formatCurrency(numPrice, curr);
      }

      // Amount Formatting: numerical vs text
      let amountDisplay = item.amount;
      const numAmount = parseFloat(String(item.amount).replace(/,/g, ''));
      if (!isNaN(numAmount) && String(item.amount).trim() !== '' && !isNaN(Number(item.amount.replace(/,/g, '')))) {
        amountDisplay = formatCurrency(numAmount, curr);
        subtotal += numAmount;
      }

      tr.innerHTML = `
        <td class="cell-sno">${escapeHtml(displaySno)}</td>
        <td class="cell-desc">${escapeHtml(item.description)}</td>
        <td class="cell-price">${escapeHtml(priceDisplay)}</td>
        <td class="cell-qty">${escapeHtml(item.qty)}</td>
        <td class="cell-amount">${escapeHtml(amountDisplay)}</td>
      `;
      liveTableTbody.appendChild(tr);
    });

    // 3. Compute Tax & Discount
    const taxRate = parseFloat(taxRateInput.value) || 0;
    const taxAmount = (subtotal * taxRate) / 100;

    const discountType = discountTypeInput.value;
    const discountValInput = parseFloat(discountValueInput.value) || 0;
    let discountAmount = 0;

    if (discountType === 'percent') {
      discountAmount = (subtotal * discountValInput) / 100;
    } else {
      discountAmount = discountValInput;
    }

    const total = Math.max(0, subtotal + taxAmount - discountAmount);

    // 4. Update Totals in Live Sheet
    liveSubtotalVal.textContent = formatCurrency(subtotal, curr);

    // Tax display
    liveTaxLabel.textContent = `Tax (${taxRate}%)`;
    liveTaxVal.textContent = formatCurrency(taxAmount, curr);

    // Discount display
    if (discountType === 'percent') {
      liveDiscountLabel.innerHTML = `Discount<br><small>(${discountValInput}%)</small>`;
    } else {
      liveDiscountLabel.innerHTML = `Discount`;
    }
    liveDiscountVal.textContent = formatCurrency(discountAmount, curr);

    // Final Total
    liveTotalVal.textContent = formatCurrency(total, curr);

    // 5. Update Financials Preview in Left Pane
    calcSubtotalDisplay.textContent = formatCurrency(subtotal, curr);
    calcTaxDisplay.textContent = formatCurrency(taxAmount, curr);
    calcDiscountDisplay.textContent = `-${formatCurrency(discountAmount, curr)}`;
    calcTotalDisplay.textContent = formatCurrency(total, curr);

    // 5. Update Bank & Agency Info from Global Profile
    const agency = currentBill.agencyInfo || getGlobalAgencyProfile();
    const bank = currentBill.bankInfo || getGlobalBankProfile();

    if (liveAgencyName) liveAgencyName.textContent = agency.name || "Socialeo";
    if (liveAgencyAddr1) liveAgencyAddr1.textContent = agency.addressLine1 || "";
    if (liveAgencyAddr2) liveAgencyAddr2.textContent = agency.addressLine2 || "";
    if (liveAgencyPhone) liveAgencyPhone.textContent = agency.phone || "";
    if (liveAgencyEmail) liveAgencyEmail.textContent = agency.email || "";

    if (liveBankBeneficiary) liveBankBeneficiary.textContent = bank.beneficiary || "MANPREETH N";
    if (liveBankName) liveBankName.textContent = bank.bankName || "STATE BANK OF INDIA";
    if (liveBankAcc) liveBankAcc.textContent = `Account no - ${bank.accountNumber || '20340118904'}`;
    if (liveBankIfsc) liveBankIfsc.textContent = `IFSC - ${bank.ifsc || 'SBIN0016500'}`;

    // Toggle compact mode on A4 sheet for bills with 7+ items to fit cleanly
    const sheetElem = document.getElementById('invoice-printable-target');
    if (sheetElem) {
      if (currentBill.items.length >= 7) {
        sheetElem.classList.add('compact-mode');
      } else {
        sheetElem.classList.remove('compact-mode');
      }
    }

    // 7. Render QR Code
    updateQrCode(total, curr, bank);

    // 8. Update Interactive Action Buttons (WhatsApp, Email, Instant Pay Now)
    const invNum = invNumberInput ? invNumberInput.value.trim() || '8104' : '8104';
    const clientName = clientNameInput ? clientNameInput.value.trim() || 'VO2 MAX Sports Physiotherapy & Rehab' : 'VO2 MAX';
    const totalFormatted = formatCurrency(total, curr);
    const agencyPhoneRaw = (agency.phone || '+918722163256').replace(/[^0-9]/g, '');
    const agencyEmail = agency.email || 'socialeopvtltd@gmail.com';
    const ccEmail = 'socialeopvtltd@gmail.com';

    // WhatsApp Direct Deep Link (100% clickable in Web & PDF)
    if (liveBtnWhatsapp) {
      const waMsg = `Hi Socialeo Team, contacting regarding Invoice #${invNum} for "${clientName}" with total payable amount: ${totalFormatted}.`;
      liveBtnWhatsapp.href = `https://wa.me/${agencyPhoneRaw}?text=${encodeURIComponent(waMsg)}`;
    }

    // Email with CC Deep Link (100% clickable in Web & PDF)
    if (liveBtnEmail) {
      const subject = `Invoice #${invNum} - ${clientName} | Socialeo Studio`;
      const body = `Hi Socialeo Team,\n\nI am reaching out regarding Invoice #${invNum} issued for ${clientName}.\n\nTotal Payable Amount: ${totalFormatted}\nDate: ${invDateInput?.value || ''}\n\nClient Name: ${clientName}\nAddress: ${clientAddr1Input?.value || ''} ${clientAddr2Input?.value || ''}\nPhone: ${clientPhoneInput?.value || 'N/A'}\n\nPlease find this billing acknowledgment.\n\nThank you!`;
      liveBtnEmail.href = `mailto:${agencyEmail}?cc=${encodeURIComponent(ccEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    // 8.3 Pay Now UPI Link (Direct Native UPI Intent: Triggers PhonePe, GPay, Paytm, BHIM, CRED)
    if (liveBtnPaynow) {
      const upiId = bank.upiId || '8722163256@sbi';
      const beneficiary = bank.beneficiary || 'MANPREETH N';
      const totalNumeric = typeof total === 'number' ? total.toFixed(2) : total;
      
      // Standard NPCI UPI URI Specification
      const upiPayUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(beneficiary)}&am=${encodeURIComponent(totalNumeric)}&tn=${encodeURIComponent('Socialeo Invoice ' + invNum)}&cu=INR`;
      
      // Assign directly to href so html2pdf embeds this exact native URI into the exported PDF
      liveBtnPaynow.href = upiPayUri;
      liveBtnPaynow.setAttribute('data-upi-uri', upiPayUri);

      liveBtnPaynow.onclick = function(e) {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isMobile) {
          window.location.href = upiPayUri;
        } else {
          e.preventDefault();
          showToast(`UPI ID: ${upiId} | Total: ${totalFormatted} (On mobile, this opens your UPI apps)`, "📱");
        }
      };
    }

    // Save active working state to localStorage
    saveCurrentStateToLocalStorage();
  }

  // Generate UPI Payment QR Code
  function updateQrCode(totalAmount, currencySymbol, bankObj = null) {
    const bank = bankObj || currentBill.bankInfo || getGlobalBankProfile();
    const upiId = bank.upiId || '8722163256@sbi';
    const beneficiary = bank.beneficiary || 'MANPREETH N';
    const invNum = invNumberInput ? invNumberInput.value.trim() || '8104' : '8104';
    
    // Standard UPI URI format
    const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(beneficiary)}&am=${totalAmount}&tn=Socialeo_Inv_${encodeURIComponent(invNum)}&cu=INR`;
    
    if (liveUpiQrcode) liveUpiQrcode.innerHTML = '';
    
    if (typeof QRCode !== 'undefined' && liveUpiQrcode) {
      try {
        new QRCode(liveUpiQrcode, {
          text: upiUri,
          width: 76,
          height: 76,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } catch (err) {
        console.warn('QR Code generation fallback:', err);
        renderFallbackQrSvg();
      }
    } else if (liveUpiQrcode) {
      renderFallbackQrSvg();
    }
  }

  function renderFallbackQrSvg() {
    if (!liveUpiQrcode) return;
    liveUpiQrcode.innerHTML = `
      <svg width="76" height="76" viewBox="0 0 100 100" fill="#000">
        <rect width="100" height="100" fill="#fff"/>
        <path fill="#000" d="M10 10h30v30h-30zM15 15v20h20v-20zM22 22h6v6h-6zM60 10h30v30h-30zM65 15v20h20v-20zM72 22h6v6h-6zM10 60h30v30h-30zM15 65v20h20v-20zM22 72h6v6h-6zM50 50h10v10h-10zM65 65h10v10h-10zM80 80h10v10h-10zM50 75h10v15h-10zM75 50h15v10h-15z"/>
      </svg>
    `;
  }

  // Dynamic CRM Statistics Recalculation from Saved Invoices
  function recalculateCrmStatsFromInvoices() {
    if (!crmClients || !Array.isArray(crmClients)) return;
    
    crmClients.forEach(client => {
      let clientTotal = 0;
      let count = 0;

      savedInvoices.forEach(inv => {
        const invClientName = (inv.client?.name || '').toLowerCase().trim();
        const clientName = (client.name || '').toLowerCase().trim();

        if (invClientName && clientName && (invClientName === clientName || invClientName.includes(clientName) || clientName.includes(invClientName))) {
          count++;
          let sub = 0;
          inv.items?.forEach(it => {
            const a = parseFloat(String(it.amount).replace(/,/g, ''));
            if (!isNaN(a)) sub += a;
          });
          const tax = (sub * (inv.taxRate || 0)) / 100;
          let disc = 0;
          if (inv.discountType === 'percent') disc = (sub * (inv.discountValue || 0)) / 100;
          else disc = (inv.discountValue || 0);
          clientTotal += Math.max(0, sub + tax - disc);
        }
      });

      if (count > 0) {
        client.invoicesCount = count;
        client.totalBilled = formatCurrency(clientTotal, "₹");
      }
    });

    // Auto-track newly typed clients in CRM if not present
    const activeClientName = (clientNameInput ? clientNameInput.value.trim() : (currentBill.client?.name || '')).trim();
    if (activeClientName && activeClientName !== "Client Name" && activeClientName !== "New Client" && activeClientName.length >= 3) {
      const exists = crmClients.some(c => c.name.toLowerCase().trim() === activeClientName.toLowerCase().trim());
      if (!exists) {
        crmClients.push({
          id: activeClientName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
          name: activeClientName,
          addressLine1: clientAddr1Input ? clientAddr1Input.value.trim() : '',
          addressLine2: clientAddr2Input ? clientAddr2Input.value.trim() : '',
          phone: clientPhoneInput ? clientPhoneInput.value.trim() : '',
          email: clientEmailInput ? clientEmailInput.value.trim() : '',
          totalBilled: formatCurrency(0, "₹"),
          invoicesCount: 1
        });
      }
    }

    localStorage.setItem('socialeo_crm_clients', JSON.stringify(crmClients));
  }

  function saveCurrentStateToLocalStorage() {
    if (invNumberInput) currentBill.invoiceNumber = invNumberInput.value.trim() || currentBill.invoiceNumber || '8104';
    if (invDateInput) currentBill.invoiceDate = invDateInput.value.trim() || currentBill.invoiceDate;
    if (invStatusInput) currentBill.status = invStatusInput.value || currentBill.status || 'Pending';
    if (invCurrencyInput) currentBill.currency = invCurrencyInput.value || currentBill.currency || '₹';

    currentBill.client = {
      name: clientNameInput ? clientNameInput.value.trim() || 'Client Name' : (currentBill.client?.name || 'Client Name'),
      addressLine1: clientAddr1Input ? clientAddr1Input.value.trim() : '',
      addressLine2: clientAddr2Input ? clientAddr2Input.value.trim() : '',
      phone: clientPhoneInput ? clientPhoneInput.value.trim() : '',
      email: clientEmailInput ? clientEmailInput.value.trim() : ''
    };

    currentBill.bankInfo = getGlobalBankProfile();
    currentBill.agencyInfo = getGlobalAgencyProfile();

    if (taxRateInput) currentBill.taxRate = parseFloat(taxRateInput.value) || 0;
    if (discountTypeInput) currentBill.discountType = discountTypeInput.value || 'percent';
    if (discountValueInput) currentBill.discountValue = parseFloat(discountValueInput.value) || 0;

    localStorage.setItem('socialeo_active_bill', JSON.stringify(currentBill));

    // Real-time synchronization into savedInvoices list
    const currentNum = String(currentBill.invoiceNumber).trim();
    const existingIndex = savedInvoices.findIndex(inv => String(inv.invoiceNumber).trim() === currentNum);
    if (existingIndex >= 0) {
      savedInvoices[existingIndex] = JSON.parse(JSON.stringify(currentBill));
    } else {
      const draftBill = JSON.parse(JSON.stringify(currentBill));
      savedInvoices.unshift(draftBill);
    }
    localStorage.setItem('socialeo_saved_invoices', JSON.stringify(savedInvoices));

    // Real-time synchronization into CRM & Sidebar Badge
    recalculateCrmStatsFromInvoices();
    updateSavedInvoicesCount();
    renderSavedInvoices();
    renderCRM();
  }

  // ==========================================
  // 6. EVENT LISTENERS FOR INPUTS & INTERACTION
  // ==========================================
  
  // All basic form inputs trigger instant live preview update on input
  [
    invNumberInput, invDateInput, invStatusInput, invCurrencyInput,
    clientNameInput, clientAddr1Input, clientAddr2Input, clientPhoneInput, clientEmailInput,
    taxRateInput, discountTypeInput, discountValueInput
  ].forEach(input => {
    input?.addEventListener('input', updateLivePreviewAndCalculations);
    input?.addEventListener('change', updateLivePreviewAndCalculations);
  });

  // Copy to Clipboard Helpers
  function copyTextToClipboard(text, label) {
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied ${label}: ${text}`, "📋");
      }).catch(() => {
        fallbackCopy(text, label);
      });
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const temp = document.createElement('input');
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${label}: ${text}`, "📋");
    } catch (e) {}
    document.body.removeChild(temp);
  }

  document.getElementById('copy-acc-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const bank = currentBill.bankInfo || getGlobalBankProfile();
    copyTextToClipboard(bank.accountNumber || '20340118904', 'Account Number');
  });

  document.getElementById('live-bank-acc-row')?.addEventListener('click', () => {
    const bank = currentBill.bankInfo || getGlobalBankProfile();
    copyTextToClipboard(bank.accountNumber || '20340118904', 'Account Number');
  });

  document.getElementById('copy-ifsc-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const bank = currentBill.bankInfo || getGlobalBankProfile();
    copyTextToClipboard(bank.ifsc || 'SBIN0016500', 'IFSC Code');
  });

  document.getElementById('live-bank-ifsc-row')?.addEventListener('click', () => {
    const bank = currentBill.bankInfo || getGlobalBankProfile();
    copyTextToClipboard(bank.ifsc || 'SBIN0016500', 'IFSC Code');
  });

  // Tap to Download Payment QR Code
  function downloadPaymentQrImage() {
    const canvas = liveUpiQrcode?.querySelector('canvas');
    const img = liveUpiQrcode?.querySelector('img');
    const invNum = invNumberInput ? invNumberInput.value.trim() || '8104' : '8104';

    if (canvas) {
      const a = document.createElement('a');
      a.download = `Socialeo_Payment_QR_Inv_${invNum}.png`;
      a.href = canvas.toDataURL('image/png');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("Downloaded Payment QR Code image", "📥");
    } else if (img && img.src) {
      const a = document.createElement('a');
      a.download = `Socialeo_Payment_QR_Inv_${invNum}.png`;
      a.href = img.src;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("Downloaded Payment QR Code image", "📥");
    } else {
      showToast("Payment QR Code ready for scan", "ℹ️");
    }
  }

  document.getElementById('live-qr-frame')?.addEventListener('click', downloadPaymentQrImage);
  document.getElementById('qr-subtext-instruction')?.addEventListener('click', downloadPaymentQrImage);

  // Add Item Row Button
  addItemRowBtn.addEventListener('click', () => {
    currentBill.items.push({
      sno: `${currentBill.items.length + 1}.0`,
      description: "Custom Service / Deliverable",
      price: "10000",
      qty: "1",
      amount: "10000"
    });
    renderItemInputRows();
    updateLivePreviewAndCalculations();
    showToast("Added new blank line item", "➕");
  });

  // Quick Preset Service Dropdown
  quickServiceDropdown.addEventListener('change', (e) => {
    const key = e.target.value;
    if (!key || !SERVICE_CATALOG[key]) return;
    
    const s = SERVICE_CATALOG[key];
    currentBill.items.push({
      sno: s.sno || `${currentBill.items.length + 1}.0`,
      description: s.desc,
      price: s.price,
      qty: s.qty,
      amount: s.amount
    });
    renderItemInputRows();
    updateLivePreviewAndCalculations();
    e.target.value = "";
    showToast(`Added "${s.desc.substring(0, 32)}..."`, "➕");
  });

  // Load VO2 MAX Bill 1 (Work Done Till Now - ₹57,000)
  document.getElementById('load-vo2max-bill1-btn')?.addEventListener('click', () => {
    currentBill = JSON.parse(JSON.stringify(VO2_MAX_BILL_1));
    populateFormFromBill(currentBill);
    showToast("Loaded VO2 MAX Bill 1 (19 Pages + Infrastructure - ₹57,000)", "🏥");
  });

  // Load VO2 MAX Bill 2 (Future Scope & AMC - ₹66,000)
  document.getElementById('load-vo2max-bill2-btn')?.addEventListener('click', () => {
    currentBill = JSON.parse(JSON.stringify(VO2_MAX_BILL_2));
    populateFormFromBill(currentBill);
    showToast("Loaded VO2 MAX Bill 2 (28 Expansion Pages + 1 Yr AMC - ₹66,000)", "🚀");
  });

  // Load VO2 MAX Bill 1 Special Launch Offer (₹52,000)
  document.getElementById('load-vo2max-offer-btn')?.addEventListener('click', () => {
    currentBill = JSON.parse(JSON.stringify(VO2_MAX_OFFER_BILL));
    populateFormFromBill(currentBill);
    showToast("Loaded VO2 MAX Special Launch Offer (₹52,000)", "🏷️");
  });

  // Load Sample Bill Button ("Yoga with Srinatha #7272")
  document.getElementById('load-sample-bill-btn')?.addEventListener('click', () => {
    currentBill = JSON.parse(JSON.stringify(SAMPLE_BILL));
    populateFormFromBill(currentBill);
    showToast("Loaded reference sample bill: Yoga with Srinatha #7272", "✨");
  });

  // New Blank Invoice Action
  function createNewBlankBill() {
    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${now.getDate()}th ${months[now.getMonth()]} ${now.getFullYear()}`;
    
    // Auto-calculate next invoice number
    let highestNum = 8105;
    savedInvoices.forEach(inv => {
      const num = parseInt(inv.invoiceNumber);
      if (!isNaN(num) && num > highestNum) highestNum = num;
    });
    const nextInvNo = String(highestNum + 1);

    currentBill = {
      invoiceNumber: nextInvNo,
      invoiceDate: formattedDate,
      status: "Draft",
      currency: "₹",
      client: {
        name: "New Client",
        addressLine1: "",
        addressLine2: "",
        phone: "",
        email: ""
      },
      items: [
        { sno: "1.0", description: "Website Development & UI Design", price: "50000", qty: "1", amount: "50000" }
      ],
      taxRate: 0,
      discountType: "percent",
      discountValue: 0,
      bankInfo: getGlobalBankProfile(),
      agencyInfo: getGlobalAgencyProfile()
    };

    // Prepend to savedInvoices immediately as Draft (Unsaved New Bill)
    const existingIndex = savedInvoices.findIndex(inv => String(inv.invoiceNumber).trim() === nextInvNo);
    if (existingIndex >= 0) {
      savedInvoices[existingIndex] = JSON.parse(JSON.stringify(currentBill));
    } else {
      savedInvoices.unshift(JSON.parse(JSON.stringify(currentBill)));
    }
    localStorage.setItem('socialeo_saved_invoices', JSON.stringify(savedInvoices));

    populateFormFromBill(currentBill);
    saveCurrentStateToLocalStorage();
    switchTab('generator-tab');
    showToast(`Created new bill #${nextInvNo} (Draft / Unsaved)`, "📄");
  }

  document.getElementById('topbar-new-bill-btn')?.addEventListener('click', createNewBlankBill);
  document.getElementById('toolbar-new-bill-btn')?.addEventListener('click', createNewBlankBill);
  document.getElementById('archive-new-bill-btn')?.addEventListener('click', createNewBlankBill);

  // Save Invoice Button
  document.getElementById('save-invoice-btn')?.addEventListener('click', () => {
    currentBill.status = invStatusInput.value !== "Draft" ? invStatusInput.value : "Pending";
    if (invStatusInput) invStatusInput.value = currentBill.status;
    saveCurrentStateToLocalStorage();
    showToast(`Saved Invoice #${currentBill.invoiceNumber} to database!`, "💾");
  });

  // Delete Active Invoice Button
  document.getElementById('delete-active-bill-btn')?.addEventListener('click', () => {
    const currentNum = (invNumberInput ? invNumberInput.value.trim() : '') || currentBill.invoiceNumber;
    if (confirm(`Are you sure you want to delete Invoice #${currentNum}?`)) {
      const idx = savedInvoices.findIndex(inv => String(inv.invoiceNumber) === String(currentNum));
      if (idx >= 0) {
        savedInvoices.splice(idx, 1);
        localStorage.setItem('socialeo_saved_invoices', JSON.stringify(savedInvoices));
        renderSavedInvoices();
        updateSavedInvoicesCount();
      }
      
      if (savedInvoices.length > 0) {
        currentBill = JSON.parse(JSON.stringify(savedInvoices[0]));
        populateFormFromBill(currentBill);
        showToast(`Deleted bill. Loaded Invoice #${currentBill.invoiceNumber}`, "🗑️");
      } else {
        createNewBlankBill();
        showToast(`Deleted bill. Created fresh blank template.`, "🗑️");
      }
    }
  });

  // Direct Interactive PDF Download Engine (Preserves Active Hyperlinks)
  function downloadPdfWithLinks() {
    showToast("Generating high-resolution PDF with clickable links...", "⏳");
    const element = document.getElementById('invoice-printable-target');
    const invNo = invNumberInput.value.trim() || '8104';
    const rawName = clientNameInput.value.trim() || 'VO2_MAX';
    const safeClient = rawName.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20);
    
    const opt = {
      margin: 0,
      filename: `Socialeo_Invoice_${invNo}_${safeClient}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      enableLinks: true
    };

    if (typeof html2pdf !== 'undefined') {
      html2pdf().set(opt).from(element).save().then(() => {
        showToast("PDF downloaded with active clickable links!", "📥");
      }).catch(err => {
        console.warn("html2pdf error, falling back to window.print():", err);
        window.print();
      });
    } else {
      window.print();
    }
  }

  // Single Unified Download / Print PDF Handlers
  document.getElementById('pane-download-print-btn')?.addEventListener('click', downloadPdfWithLinks);
  document.getElementById('bottom-download-print-btn')?.addEventListener('click', downloadPdfWithLinks);
  document.getElementById('sidebar-quick-download-print')?.addEventListener('click', downloadPdfWithLinks);

  // Simple Clean Zoom Dropdown Engine (25%, 50%, 75%, 100%, Fit)
  const a4Sheet = document.getElementById('invoice-printable-target');
  const a4PreviewWrapper = document.getElementById('a4-preview-wrapper');
  const zoomSelectDropdown = document.getElementById('zoom-select-dropdown');

  function applyZoom(scale) {
    if (!a4Sheet) return;
    a4Sheet.style.transform = `scale(${scale})`;
    const a4HeightPx = 1122.5; // 297mm in standard 96dpi pixels
    if (a4PreviewWrapper) {
      a4PreviewWrapper.style.minHeight = `${Math.round(a4HeightPx * scale + 40)}px`;
    }
  }

  // Set default view scale to 100%
  applyZoom(1.00);

  zoomSelectDropdown?.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'fit') {
      const containerWidth = (a4PreviewWrapper?.clientWidth || 800) - 30;
      const sheetWidth = 793.7; // 210mm in pixels
      const fitScale = Math.min(1, Math.max(0.2, containerWidth / sheetWidth));
      applyZoom(fitScale);
    } else {
      const scale = parseFloat(val) || 1.00;
      applyZoom(scale);
    }
  });

  // ==========================================
  // 7. CRM CLIENTS MODULE
  // ==========================================
  
  function renderCRM() {
    const tbody = document.getElementById('crm-clients-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const totalClientsElem = document.getElementById('crm-total-clients');
    if (totalClientsElem) totalClientsElem.textContent = crmClients.length;
    
    crmClients.forEach((client, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <strong>${escapeHtml(client.name)}</strong>
        </td>
        <td>
          ${escapeHtml(client.addressLine1)}<br>
          <small style="color:var(--admin-text-muted)">${escapeHtml(client.addressLine2)}</small>
        </td>
        <td>
          ${client.phone ? `<div>📞 ${escapeHtml(client.phone)}</div>` : ''}
          ${client.email ? `<div>✉️ ${escapeHtml(client.email)}</div>` : ''}
        </td>
        <td>${client.invoicesCount || 1}</td>
        <td><strong>${client.totalBilled || '₹0'}</strong></td>
        <td>
          <div class="table-btn-group">
            <button class="tool-btn" onclick="window.useClientForBill(${index})">🧾 Bill Client</button>
            <button class="tool-btn" style="color:#ef4444;" onclick="window.deleteClient(${index})">✕</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Update CRM select dropdown in generator
    renderClientDropdown();
  }

  function renderClientDropdown() {
    if (!crmClientSelect) return;
    crmClientSelect.innerHTML = '<option value="">-- Quick Pick Saved Client --</option>';
    crmClients.forEach((c, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = c.name;
      crmClientSelect.appendChild(opt);
    });
  }

  crmClientSelect?.addEventListener('change', (e) => {
    const idx = e.target.value;
    if (idx === "") return;
    const client = crmClients[idx];
    if (client) {
      clientNameInput.value = client.name;
      clientAddr1Input.value = client.addressLine1;
      clientAddr2Input.value = client.addressLine2;
      clientPhoneInput.value = client.phone || "";
      clientEmailInput.value = client.email || "";
      updateLivePreviewAndCalculations();
      showToast(`Selected client: ${client.name}`, "👤");
    }
  });

  window.useClientForBill = function(index) {
    const client = crmClients[index];
    if (client) {
      clientNameInput.value = client.name;
      clientAddr1Input.value = client.addressLine1;
      clientAddr2Input.value = client.addressLine2;
      clientPhoneInput.value = client.phone || "";
      clientEmailInput.value = client.email || "";
      updateLivePreviewAndCalculations();
      switchTab('generator-tab');
      showToast(`Ready to bill: ${client.name}`, "🧾");
    }
  };

  window.deleteClient = function(index) {
    if (confirm(`Remove ${crmClients[index].name} from CRM?`)) {
      crmClients.splice(index, 1);
      localStorage.setItem('socialeo_crm_clients', JSON.stringify(crmClients));
      renderCRM();
      showToast("Client removed from CRM");
    }
  };

  // Add Client Modal Logic
  const newClientModal = document.getElementById('new-client-modal');
  document.getElementById('crm-add-client-modal-btn')?.addEventListener('click', () => {
    newClientModal.classList.add('active');
  });
  document.getElementById('close-client-modal-btn')?.addEventListener('click', () => {
    newClientModal.classList.remove('active');
  });
  document.getElementById('cancel-client-modal-btn')?.addEventListener('click', () => {
    newClientModal.classList.remove('active');
  });

  document.getElementById('save-modal-client-btn')?.addEventListener('click', () => {
    const name = document.getElementById('modal-client-name').value.trim();
    const addr1 = document.getElementById('modal-client-addr1').value.trim();
    const addr2 = document.getElementById('modal-client-addr2').value.trim();
    const phone = document.getElementById('modal-client-phone').value.trim();
    const email = document.getElementById('modal-client-email').value.trim();

    if (!name) {
      alert("Please provide at least a Client Name.");
      return;
    }

    crmClients.push({
      id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name,
      addressLine1: addr1,
      addressLine2: addr2,
      phone,
      email,
      totalBilled: "₹0",
      invoicesCount: 0
    });

    localStorage.setItem('socialeo_crm_clients', JSON.stringify(crmClients));
    renderCRM();
    newClientModal.classList.remove('active');
    showToast(`Added client: ${name}`, "👥");
  });

  // Save current client from generator to CRM
  document.getElementById('save-current-to-crm-btn')?.addEventListener('click', () => {
    const name = clientNameInput.value.trim();
    if (!name) {
      alert("Please enter a client name first.");
      return;
    }

    const existing = crmClients.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (existing) {
      existing.addressLine1 = clientAddr1Input.value.trim();
      existing.addressLine2 = clientAddr2Input.value.trim();
      existing.phone = clientPhoneInput.value.trim();
      existing.email = clientEmailInput.value.trim();
      showToast(`Updated existing CRM record for ${name}`);
    } else {
      crmClients.push({
        id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        name,
        addressLine1: clientAddr1Input.value.trim(),
        addressLine2: clientAddr2Input.value.trim(),
        phone: clientPhoneInput.value.trim(),
        email: clientEmailInput.value.trim(),
        totalBilled: "₹0",
        invoicesCount: 1
      });
      showToast(`Saved ${name} into CRM clients!`, "👥");
    }

    localStorage.setItem('socialeo_crm_clients', JSON.stringify(crmClients));
    renderClientDropdown();
  });

  // ==========================================
  // 8. SAVED INVOICES MODULE
  // ==========================================
  function updateSavedInvoicesCount() {
    const countSpan = document.getElementById('saved-invoices-count');
    if (countSpan) countSpan.textContent = savedInvoices.length;
  }

  function renderSavedInvoices() {
    const tbody = document.getElementById('saved-invoices-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    savedInvoices.forEach((inv, index) => {
      // Calculate total for this invoice
      let sub = 0;
      inv.items?.forEach(it => {
        const a = parseFloat(String(it.amount).replace(/,/g, ''));
        if (!isNaN(a)) sub += a;
      });
      const tax = (sub * (inv.taxRate || 0)) / 100;
      let disc = 0;
      if (inv.discountType === 'percent') disc = (sub * (inv.discountValue || 0)) / 100;
      else disc = (inv.discountValue || 0);
      const tot = Math.max(0, sub + tax - disc);

      const isActive = String(inv.invoiceNumber).trim() === String(currentBill.invoiceNumber).trim();
      const statusText = inv.status || 'Draft';
      let badgeClass = 'pending';
      if (statusText === 'Paid') badgeClass = 'paid';
      else if (statusText === 'Draft') badgeClass = 'draft';

      const tr = document.createElement('tr');
      if (isActive) tr.style.background = 'rgba(255, 94, 58, 0.06)';

      tr.innerHTML = `
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <strong>#${escapeHtml(inv.invoiceNumber)}</strong>
            ${isActive ? '<span style="font-size:10px; font-weight:800; background:rgba(255,94,58,0.2); color:var(--admin-accent-primary); padding:2px 6px; border-radius:4px; border:1px solid rgba(255,94,58,0.4);">● Active</span>' : ''}
          </div>
        </td>
        <td><strong>${escapeHtml(inv.client?.name || 'Unnamed Client')}</strong></td>
        <td>${escapeHtml(inv.invoiceDate || '---')}</td>
        <td>${inv.items?.length || 0} items</td>
        <td><strong>${formatCurrency(tot, inv.currency || "₹")}</strong></td>
        <td><span class="status-badge ${badgeClass}" style="${statusText === 'Draft' ? 'background:rgba(245,158,11,0.15); color:#f59e0b; border:1px solid rgba(245,158,11,0.3);' : ''}">${escapeHtml(statusText === 'Draft' ? 'Draft / Unsaved' : statusText)}</span></td>
        <td>
          <div class="table-btn-group">
            <button class="tool-btn" onclick="window.loadSavedInvoice(${index})" title="Open and edit this bill in studio">📂 Edit</button>
            <button class="tool-btn" onclick="window.printSavedInvoice(${index})" title="Print or save as PDF">🖨️ Print</button>
            <button class="tool-btn" style="color:#ef4444;" onclick="window.deleteSavedInvoice(${index})" title="Permanently delete this bill">🗑️ Delete</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  window.loadSavedInvoice = function(index) {
    currentBill = JSON.parse(JSON.stringify(savedInvoices[index]));
    populateFormFromBill(currentBill);
    switchTab('generator-tab');
    showToast(`Loaded invoice #${currentBill.invoiceNumber}`);
  };

  window.printSavedInvoice = function(index) {
    window.loadSavedInvoice(index);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  window.deleteSavedInvoice = function(index) {
    if (confirm(`Delete Invoice #${savedInvoices[index].invoiceNumber}?`)) {
      savedInvoices.splice(index, 1);
      localStorage.setItem('socialeo_saved_invoices', JSON.stringify(savedInvoices));
      renderSavedInvoices();
      updateSavedInvoicesCount();
      showToast("Invoice deleted");
    }
  };

  document.getElementById('archive-new-bill-btn')?.addEventListener('click', () => {
    switchTab('generator-tab');
    document.getElementById('new-invoice-btn')?.click();
  });

  // ==========================================
  // 9. SETTINGS TAB (GLOBAL AGENCY & BANK SETUP)
  // ==========================================
  function loadSettingsTab() {
    const agency = getGlobalAgencyProfile();
    const bank = getGlobalBankProfile();
    
    const setAgencyName = document.getElementById('set-agency-name');
    const setAgencyAddr1 = document.getElementById('set-agency-addr1');
    const setAgencyAddr2 = document.getElementById('set-agency-addr2');
    const setAgencyPhone = document.getElementById('set-agency-phone');
    const setAgencyEmail = document.getElementById('set-agency-email');

    const setBankBeneficiary = document.getElementById('set-bank-beneficiary');
    const setBankName = document.getElementById('set-bank-name');
    const setBankAcc = document.getElementById('set-bank-acc');
    const setBankIfsc = document.getElementById('set-bank-ifsc');
    const setBankUpi = document.getElementById('set-bank-upi');

    if (setAgencyName) setAgencyName.value = agency.name || 'Socialeo';
    if (setAgencyAddr1) setAgencyAddr1.value = agency.addressLine1 || '';
    if (setAgencyAddr2) setAgencyAddr2.value = agency.addressLine2 || '';
    if (setAgencyPhone) setAgencyPhone.value = agency.phone || '';
    if (setAgencyEmail) setAgencyEmail.value = agency.email || '';

    if (setBankBeneficiary) setBankBeneficiary.value = bank.beneficiary || '';
    if (setBankName) setBankName.value = bank.bankName || '';
    if (setBankAcc) setBankAcc.value = bank.accountNumber || '';
    if (setBankIfsc) setBankIfsc.value = bank.ifsc || '';
    if (setBankUpi) setBankUpi.value = bank.upiId || '';
  }

  document.getElementById('save-settings-btn')?.addEventListener('click', () => {
    const newAgency = {
      name: document.getElementById('set-agency-name')?.value.trim() || 'Socialeo',
      addressLine1: document.getElementById('set-agency-addr1')?.value.trim() || '',
      addressLine2: document.getElementById('set-agency-addr2')?.value.trim() || '',
      phone: document.getElementById('set-agency-phone')?.value.trim() || '+91 8722163256',
      email: document.getElementById('set-agency-email')?.value.trim() || 'socialeopvtltd@gmail.com'
    };

    const newBank = {
      beneficiary: document.getElementById('set-bank-beneficiary')?.value.trim() || 'MANPREETH N',
      bankName: document.getElementById('set-bank-name')?.value.trim() || 'STATE BANK OF INDIA',
      accountNumber: document.getElementById('set-bank-acc')?.value.trim() || '20340118904',
      ifsc: document.getElementById('set-bank-ifsc')?.value.trim() || 'SBIN0016500',
      upiId: document.getElementById('set-bank-upi')?.value.trim() || '8722163256@sbi'
    };

    localStorage.setItem('socialeo_agency_profile', JSON.stringify(newAgency));
    localStorage.setItem('socialeo_bank_profile', JSON.stringify(newBank));

    currentBill.agencyInfo = newAgency;
    currentBill.bankInfo = newBank;

    updateLivePreviewAndCalculations();
    showToast("Saved default agency & bank settings (Applied to all bills)", "💾");
  });

  // ==========================================
  // 10. BLOG STUDIO & REDDIT SYNDICATION ENGINE
  // ==========================================
  const blogPresetSelect = document.getElementById('blog-preset-select');
  const blogTitleInput = document.getElementById('blog-title-input');
  const blogSlugInput = document.getElementById('blog-slug-input');
  const blogSubredditInput = document.getElementById('blog-subreddit-input');
  const blogKeywordInput = document.getElementById('blog-keyword-input');
  const blogReadtimeInput = document.getElementById('blog-readtime-input');
  const blogExcerptInput = document.getElementById('blog-excerpt-input');
  const blogBodyInput = document.getElementById('blog-body-input');
  const blogWordCount = document.getElementById('blog-word-count');
  const redditMarkdownPreview = document.getElementById('reddit-markdown-preview');
  const redditPostUrl = document.getElementById('reddit-post-url');
  const redditOpenSubmitBtn = document.getElementById('reddit-open-submit-btn');
  const blogCopyRedditBtn = document.getElementById('blog-copy-reddit-btn');
  const blogQuickPresetBtn = document.getElementById('blog-quick-preset-btn');
  const saveRedditCredsBtn = document.getElementById('save-reddit-creds-btn');
  const redditClientId = document.getElementById('reddit-client-id');
  const redditClientSecret = document.getElementById('reddit-client-secret');

  const BLOG_PRESETS_DATA = {
    'roi-design': {
      title: "Why Bespoke Web Design Outperforms Generic Templates: 2026 ROI Teardown",
      slug: "bespoke-web-design-vs-templates-roi",
      subreddit: "entrepreneur",
      keyword: "bespoke web design agency",
      readTime: "10 Min Read",
      excerpt: "An in-depth analysis of why custom-engineered design systems and edge architecture yield a +185% increase in qualified inbound inquiries compared to off-the-shelf templates.",
      body: `## 1. The 50-Millisecond First Impression Paradox\nCognitive neuroscience indicates visitors judge brand authority in under 50ms. Standard templates signal budget constraints and diluted trustworthiness.\n\n## 2. Real-World Conversion Velocity\nOver 6+ years of digital product engineering, our data reveals:\n- +185% qualified project inquiries\n- 98-100 Google Lighthouse Core Web Vitals\n- 2.4x organic SEO traffic growth in 90 days\n\n## 3. The 3 Technical Levers That Drive Revenue\n1. Design Token Architecture (Strict visual vertical rhythm & dark/light palettes)\n2. Sub-Second Edge Infrastructure (Next.js & Vercel edge networks)\n3. Frictionless WhatsApp & Lead Capture Portals\n\n> "Bespoke design is not an aesthetic luxury; it is a direct multiplier of your brand equity."`
    },
    'nextjs-seo': {
      title: "How Next.js App Router Architecture Drives #1 Google Rankings",
      slug: "frontend-architecture-and-seo-rankings",
      subreddit: "webdev",
      keyword: "Next.js SEO architecture",
      readTime: "12 Min Read",
      excerpt: "A developer's blueprint for optimizing React Server Components, JSON-LD Schema Graphs, and edge rendering for top-tier Google search visibility.",
      body: `## 1. Server Components vs Client Hydration for Crawlers\nSearch engine bots process pre-rendered HTML 5x faster than heavy client-side SPAs. Server Components ensure 100% crawl efficiency.\n\n## 2. Multi-Entity Schema.org Graphs\nInjecting comprehensive JSON-LD graphs linking LocalBusiness, Person, Service, and FAQPage enables rich snippet carousels in Google SERPs.\n\n## 3. Core Web Vitals Optimization Checklist\n- LCP < 1.2s via optimized WebP/AVIF images\n- CLS = 0 with strict dimension placeholders\n- INP < 50ms using minimal main-thread JS`
    },
    'saas-cro': {
      title: "High-Converting B2B SaaS Landing Page Anatomy (Teardown)",
      slug: "conversion-rate-optimization-landing-page-anatomy",
      subreddit: "startups",
      keyword: "SaaS conversion rate optimization",
      readTime: "8 Min Read",
      excerpt: "Step-by-step breakdown of high-converting B2B SaaS landing page layouts, hero value propositions, social proof placement, and interactive pricing calculators.",
      body: `## 1. Above-The-Fold Intent Alignment\nYour H1 must answer three questions in 3 seconds: What is it? Who is it for? Why is it better than the alternative?\n\n## 2. Proof-First Information Architecture\nMove verified client logos and metrics directly beneath the primary CTA.\n\n## 3. Interactive Pricing & Self-Qualification\nAllow potential clients to toggle scale, seats, or feature sets in real-time before booking a discovery call.`
    }
  };

  function updateRedditMarkdown() {
    const title = blogTitleInput?.value.trim() || 'Insightful Digital Product Guide';
    const slug = blogSlugInput?.value.trim() || 'guide';
    const subreddit = blogSubredditInput?.value || 'webdev';
    const excerpt = blogExcerptInput?.value.trim() || '';
    const body = blogBodyInput?.value.trim() || '';

    const words = body.split(/\s+/).filter(w => w.length > 0).length;
    if (blogWordCount) blogWordCount.textContent = `${words} Words`;

    if (redditPostUrl) {
      redditPostUrl.value = `https://www.reddit.com/r/${subreddit}/submit`;
    }

    // Format Reddit Markdown
    const redditText = `**${title}**\n\n${excerpt}\n\n---\n\n${body}\n\n---\n\n*Originally authored by Manpreeth N (Founder @ [Socialeo](https://socialeo.vercel.app/blogs/${slug}.html)) — Full deep-dive and technical teardowns available on our site.*`;

    if (redditMarkdownPreview) {
      redditMarkdownPreview.value = redditText;
    }
  }

  function loadBlogPreset(presetKey) {
    const preset = BLOG_PRESETS_DATA[presetKey];
    if (!preset) return;
    if (blogTitleInput) blogTitleInput.value = preset.title;
    if (blogSlugInput) blogSlugInput.value = preset.slug;
    if (blogSubredditInput) blogSubredditInput.value = preset.subreddit;
    if (blogKeywordInput) blogKeywordInput.value = preset.keyword;
    if (blogReadtimeInput) blogReadtimeInput.value = preset.readTime;
    if (blogExcerptInput) blogExcerptInput.value = preset.excerpt;
    if (blogBodyInput) blogBodyInput.value = preset.body;
    updateRedditMarkdown();
  }

  blogPresetSelect?.addEventListener('change', (e) => {
    loadBlogPreset(e.target.value);
  });

  blogQuickPresetBtn?.addEventListener('click', () => {
    loadBlogPreset('roi-design');
    if (blogPresetSelect) blogPresetSelect.value = 'roi-design';
    showToast("Loaded high-impact ROI blog preset!", "⚡");
  });

  [blogTitleInput, blogSlugInput, blogSubredditInput, blogKeywordInput, blogExcerptInput, blogBodyInput].forEach(el => {
    el?.addEventListener('input', updateRedditMarkdown);
  });

  blogCopyRedditBtn?.addEventListener('click', () => {
    if (redditMarkdownPreview) {
      navigator.clipboard.writeText(redditMarkdownPreview.value);
      showToast("Copied formatted Reddit Markdown to clipboard! Ready to post on u/Socialeo_ 📋", "🚀");
    }
  });

  redditOpenSubmitBtn?.addEventListener('click', () => {
    const subreddit = blogSubredditInput?.value || 'webdev';
    const title = encodeURIComponent(blogTitleInput?.value.trim() || 'New Discussion');
    const text = encodeURIComponent(redditMarkdownPreview?.value || '');
    const submitUrl = `https://www.reddit.com/r/${subreddit}/submit?title=${title}&text=${text}`;
    window.open(submitUrl, '_blank');
    showToast(`Opening r/${subreddit}/submit on Reddit for u/Socialeo_...`, "🤖");
  });

  // Save Reddit API Credentials
  const savedRedditCreds = JSON.parse(localStorage.getItem('socialeo_reddit_api') || '{}');
  if (redditClientId && savedRedditCreds.clientId) redditClientId.value = savedRedditCreds.clientId;
  if (redditClientSecret && savedRedditCreds.clientSecret) redditClientSecret.value = savedRedditCreds.clientSecret;

  saveRedditCredsBtn?.addEventListener('click', () => {
    const creds = {
      username: document.getElementById('reddit-username-input')?.value.trim() || 'Socialeo_',
      clientId: redditClientId?.value.trim() || '',
      clientSecret: redditClientSecret?.value.trim() || ''
    };
    localStorage.setItem('socialeo_reddit_api', JSON.stringify(creds));
    showToast("Saved Reddit API credentials locally!", "💾");
  });

  document.getElementById('blog-publish-btn')?.addEventListener('click', () => {
    showToast(`Blog "${blogTitleInput?.value.trim() || 'Post'}" saved! Ready for live export.`, "💾");
  });

  // Load default preset on initialization
  loadBlogPreset('roi-design');

  // ==========================================
  // 11. INITIALIZATION
  // ==========================================
  populateFormFromBill(currentBill);
  renderClientDropdown();
  updateSavedInvoicesCount();
  loadSettingsTab();
});
