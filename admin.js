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

  // Load state from localStorage and sanitize (Strictly 2 VO2 MAX Bills only)
  let rawSavedInvoices = JSON.parse(localStorage.getItem('socialeo_saved_invoices'));
  let savedInvoices = [
    JSON.parse(JSON.stringify(VO2_MAX_BILL_1)),
    JSON.parse(JSON.stringify(VO2_MAX_BILL_2))
  ];

  if (Array.isArray(rawSavedInvoices) && rawSavedInvoices.length > 0) {
    // Purge unwanted bills (e.g. invoice #7272, Yoga with Srinatha)
    const validSaved = rawSavedInvoices.filter(inv => {
      const isYoga = (inv.invoiceNumber === "7272") || (inv.client?.name && inv.client.name.toLowerCase().includes("yoga"));
      return !isYoga;
    });
    if (validSaved.length > 0) {
      savedInvoices = validSaved;
    }
  }
  localStorage.setItem('socialeo_saved_invoices', JSON.stringify(savedInvoices));

  let currentBill = JSON.parse(localStorage.getItem('socialeo_active_bill')) || JSON.parse(JSON.stringify(VO2_MAX_BILL_1));
  if (currentBill.invoiceNumber === "7272" || (currentBill.client?.name && currentBill.client.name.toLowerCase().includes("yoga"))) {
    currentBill = JSON.parse(JSON.stringify(VO2_MAX_BILL_1));
    localStorage.setItem('socialeo_active_bill', JSON.stringify(currentBill));
  }

  let crmClients = [
    {
      id: "vo2-max-mysuru",
      name: "VO2 MAX Sports Physiotherapy & Rehab",
      addressLine1: "H1, Srihari Medical Trust, Opp. Learner's PU College,",
      addressLine2: "Vijayanagar 2nd Stage, Mysuru, Karnataka 570017",
      phone: "+91 99728 36999",
      email: "vo2maxphysio@gmail.com",
      totalBilled: "₹1,23,000",
      invoicesCount: 2
    }
  ];
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
  // 3. TAB NAVIGATION
  // ==========================================
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  const tabContents = document.querySelectorAll('.admin-tab-content');

  function switchTab(targetTabId) {
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });
    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === targetTabId);
    });
    if (targetTabId === 'crm-tab') renderCRM();
    if (targetTabId === 'invoices-tab') renderSavedInvoices();
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
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

  const bankBeneficiaryInput = document.getElementById('bank-beneficiary-input');
  const bankNameInput = document.getElementById('bank-name-input');
  const bankAccInput = document.getElementById('bank-acc-input');
  const bankIfscInput = document.getElementById('bank-ifsc-input');
  const upiIdInput = document.getElementById('upi-id-input');

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

  // Populate Form Fields from state
  function populateFormFromBill(bill) {
    invNumberInput.value = bill.invoiceNumber || "";
    invDateInput.value = bill.invoiceDate || "";
    invStatusInput.value = bill.status || "Paid";
    invCurrencyInput.value = bill.currency || "₹";

    clientNameInput.value = bill.client?.name || "";
    clientAddr1Input.value = bill.client?.addressLine1 || "";
    clientAddr2Input.value = bill.client?.addressLine2 || "";
    clientPhoneInput.value = bill.client?.phone || "";
    clientEmailInput.value = bill.client?.email || "";

    taxRateInput.value = bill.taxRate ?? 0;
    discountTypeInput.value = bill.discountType || "percent";
    discountValueInput.value = bill.discountValue ?? 0;

    bankBeneficiaryInput.value = bill.bankInfo?.beneficiary || "";
    bankNameInput.value = bill.bankInfo?.bankName || "";
    bankAccInput.value = bill.bankInfo?.accountNumber || "";
    bankIfscInput.value = bill.bankInfo?.ifsc || "";
    upiIdInput.value = bill.bankInfo?.upiId || "";

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

    // 6. Update Bank & Payment Info
    liveBankBeneficiary.textContent = bankBeneficiaryInput.value || "MANPREETH N";
    liveBankName.textContent = bankNameInput.value || "STATE BANK OF INDIA";
    liveBankAcc.textContent = `Account no - ${bankAccInput.value || '---'}`;
    liveBankIfsc.textContent = `IFSC - ${bankIfscInput.value || '---'}`;

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
    updateQrCode(total, curr);

    // 8. Update Interactive Action Buttons (WhatsApp, Email, Instant Pay Now)
    const invNum = invNumberInput.value.trim() || '8104';
    const clientName = clientNameInput.value.trim() || 'VO2 MAX Sports Physiotherapy & Rehab';
    const totalFormatted = formatCurrency(total, curr);
    const agencyPhoneRaw = (currentBill.agencyInfo?.phone || '+918722163256').replace(/[^0-9]/g, '');
    const agencyEmail = currentBill.agencyInfo?.email || 'socialeopvtltd@gmail.com';
    const ccEmail = 'socialeopvtltd@gmail.com';

    // WhatsApp Direct Deep Link (100% clickable in Web & PDF)
    if (liveBtnWhatsapp) {
      const waMsg = `Hi Socialeo Team, contacting regarding Invoice #${invNum} for "${clientName}" with total payable amount: ${totalFormatted}.`;
      liveBtnWhatsapp.href = `https://wa.me/${agencyPhoneRaw}?text=${encodeURIComponent(waMsg)}`;
    }

    // Email with CC Deep Link (100% clickable in Web & PDF)
    if (liveBtnEmail) {
      const subject = `Invoice #${invNum} - ${clientName} | Socialeo Studio`;
      const body = `Hi Socialeo Team,\n\nI am reaching out regarding Invoice #${invNum} issued for ${clientName}.\n\nTotal Payable Amount: ${totalFormatted}\nDate: ${invDateInput.value}\n\nClient Name: ${clientName}\nAddress: ${clientAddr1Input.value} ${clientAddr2Input.value}\nPhone: ${clientPhoneInput.value || 'N/A'}\n\nPlease find this billing acknowledgment.\n\nThank you!`;
      liveBtnEmail.href = `mailto:${agencyEmail}?cc=${encodeURIComponent(ccEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    // 8.3 Pay Now UPI Link (Direct Native UPI Intent: Triggers PhonePe, GPay, Paytm, BHIM, CRED)
    if (liveBtnPaynow) {
      const upiId = upiIdInput.value.trim() || '8722163256@sbi';
      const beneficiary = bankBeneficiaryInput.value.trim() || 'MANPREETH N';
      const totalNumeric = typeof total === 'number' ? total.toFixed(2) : total;
      
      // Standard NPCI UPI URI Specification
      const upiPayUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(beneficiary)}&am=${encodeURIComponent(totalNumeric)}&tn=${encodeURIComponent('Socialeo Invoice ' + invNum)}&cu=INR`;
      
      // Assign directly to href so html2pdf embeds this exact native URI into the exported PDF
      liveBtnPaynow.href = upiPayUri;
      liveBtnPaynow.setAttribute('data-upi-uri', upiPayUri);

      liveBtnPaynow.onclick = function(e) {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isMobile) {
          // On mobile, trigger installed UPI app chooser (GPay, PhonePe, Paytm, etc.)
          window.location.href = upiPayUri;
        } else {
          // On desktop web preview, notify user
          e.preventDefault();
          showToast(`UPI ID: ${upiId} | Total: ${totalFormatted} (On mobile, this opens your UPI apps)`, "📱");
        }
      };
    }

    // Save active working state to localStorage
    saveCurrentStateToLocalStorage();
  }

  // Generate UPI Payment QR Code
  function updateQrCode(totalAmount, currencySymbol) {
    const upiId = upiIdInput.value.trim() || '8722163256@sbi';
    const beneficiary = bankBeneficiaryInput.value.trim() || 'Socialeo';
    const invNum = invNumberInput.value.trim() || '8104';
    
    // Standard UPI URI format
    const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(beneficiary)}&am=${totalAmount}&tn=Socialeo_Inv_${encodeURIComponent(invNum)}&cu=INR`;
    
    liveUpiQrcode.innerHTML = '';
    
    if (typeof QRCode !== 'undefined') {
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
    } else {
      renderFallbackQrSvg();
    }
  }

  function renderFallbackQrSvg() {
    liveUpiQrcode.innerHTML = `
      <svg width="76" height="76" viewBox="0 0 100 100" fill="#000">
        <rect width="100" height="100" fill="#fff"/>
        <path fill="#000" d="M10 10h30v30h-30zM15 15v20h20v-20zM22 22h6v6h-6zM60 10h30v30h-30zM65 15v20h20v-20zM72 22h6v6h-6zM10 60h30v30h-30zM15 65v20h20v-20zM22 72h6v6h-6zM50 50h10v10h-10zM65 65h10v10h-10zM80 80h10v10h-10zM50 75h10v15h-10zM75 50h15v10h-15z"/>
      </svg>
    `;
  }

  function saveCurrentStateToLocalStorage() {
    currentBill.invoiceNumber = invNumberInput.value;
    currentBill.invoiceDate = invDateInput.value;
    currentBill.status = invStatusInput.value;
    currentBill.currency = invCurrencyInput.value;

    currentBill.client = {
      name: clientNameInput.value,
      addressLine1: clientAddr1Input.value,
      addressLine2: clientAddr2Input.value,
      phone: clientPhoneInput.value,
      email: clientEmailInput.value
    };

    currentBill.bankInfo = {
      beneficiary: bankBeneficiaryInput.value,
      bankName: bankNameInput.value,
      accountNumber: bankAccInput.value,
      ifsc: bankIfscInput.value,
      upiId: upiIdInput.value
    };

    currentBill.taxRate = parseFloat(taxInput.value) || 0;
    currentBill.discountType = discountTypeSelect.value;
    currentBill.discountValue = parseFloat(discountValInput.value) || 0;

    localStorage.setItem('socialeo_active_bill', JSON.stringify(currentBill));
  }

  // ==========================================
  // 6. EVENT LISTENERS FOR INPUTS
  // ==========================================
  
  // All basic form inputs trigger instant live preview update on input
  [
    invNumberInput, invDateInput, invStatusInput, invCurrencyInput,
    clientNameInput, clientAddr1Input, clientAddr2Input, clientPhoneInput, clientEmailInput,
    taxRateInput, discountTypeInput, discountValueInput,
    bankBeneficiaryInput, bankNameInput, bankAccInput, bankIfscInput, upiIdInput
  ].forEach(input => {
    input?.addEventListener('input', updateLivePreviewAndCalculations);
    input?.addEventListener('change', updateLivePreviewAndCalculations);
  });

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

  // New Blank Invoice Button
  document.getElementById('new-invoice-btn')?.addEventListener('click', () => {
    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${now.getDate()}th ${months[now.getMonth()]} ${now.getFullYear()}`;
    const nextInvNo = Math.floor(1000 + Math.random() * 9000).toString();

    currentBill = {
      invoiceNumber: nextInvNo,
      invoiceDate: formattedDate,
      status: "Draft",
      currency: "₹",
      client: {
        name: "",
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
      bankInfo: { ...VO2_MAX_BILL_1.bankInfo },
      agencyInfo: { ...VO2_MAX_BILL_1.agencyInfo }
    };
    populateFormFromBill(currentBill);
    showToast("Created new blank invoice template", "📄");
  });

  // Save Invoice Button
  document.getElementById('save-invoice-btn')?.addEventListener('click', () => {
    saveCurrentStateToLocalStorage();
    
    // Check if invoice # already exists in history
    const existingIndex = savedInvoices.findIndex(inv => inv.invoiceNumber === currentBill.invoiceNumber);
    if (existingIndex >= 0) {
      savedInvoices[existingIndex] = JSON.parse(JSON.stringify(currentBill));
      showToast(`Updated Invoice #${currentBill.invoiceNumber} in database`, "💾");
    } else {
      savedInvoices.unshift(JSON.parse(JSON.stringify(currentBill)));
      showToast(`Saved new Invoice #${currentBill.invoiceNumber}`, "💾");
    }

    localStorage.setItem('socialeo_saved_invoices', JSON.stringify(savedInvoices));
    updateSavedInvoicesCount();
  });

  // Delete Active Invoice Button
  document.getElementById('delete-active-bill-btn')?.addEventListener('click', () => {
    const currentNum = invNumberInput.value.trim() || currentBill.invoiceNumber;
    if (confirm(`Are you sure you want to delete / remove Invoice #${currentNum}?`)) {
      const idx = savedInvoices.findIndex(inv => inv.invoiceNumber === currentNum);
      if (idx >= 0) {
        savedInvoices.splice(idx, 1);
        localStorage.setItem('socialeo_saved_invoices', JSON.stringify(savedInvoices));
        updateSavedInvoicesCount();
        showToast(`Deleted Invoice #${currentNum} from database`, "🗑️");
      } else {
        showToast(`Cleared active Invoice #${currentNum}`, "🗑️");
      }
      document.getElementById('new-invoice-btn')?.click();
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

  // Print / PDF Triggers
  function triggerPrint() {
    window.print();
  }

  document.getElementById('top-print-btn')?.addEventListener('click', triggerPrint);
  document.getElementById('bottom-print-btn')?.addEventListener('click', triggerPrint);
  document.getElementById('pane-print-btn')?.addEventListener('click', triggerPrint);
  
  // Download Interactive PDF Triggers
  document.getElementById('pane-download-btn')?.addEventListener('click', downloadPdfWithLinks);
  document.getElementById('bottom-download-btn')?.addEventListener('click', downloadPdfWithLinks);

  // Zoom / Scale Controls for Preview Pane
  const a4Sheet = document.getElementById('invoice-printable-target');
  document.getElementById('zoom-fit-btn')?.addEventListener('click', () => {
    if (a4Sheet) a4Sheet.style.transform = 'scale(0.85)';
  });
  document.getElementById('zoom-100-btn')?.addEventListener('click', () => {
    if (a4Sheet) a4Sheet.style.transform = 'scale(1)';
  });

  // ==========================================
  // 7. CRM CLIENTS MODULE
  // ==========================================
  
  function renderCRM() {
    const tbody = document.getElementById('crm-clients-tbody');
    tbody.innerHTML = '';
    
    document.getElementById('crm-total-clients').textContent = crmClients.length;
    
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
    crmClientSelect.innerHTML = '<option value="">-- Quick Pick Saved Client --</option>';
    crmClients.forEach((c, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = c.name;
      crmClientSelect.appendChild(opt);
    });
  }

  crmClientSelect.addEventListener('change', (e) => {
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
        totalBilled: "₹4,18,000",
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

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>#${escapeHtml(inv.invoiceNumber)}</strong></td>
        <td>${escapeHtml(inv.client?.name || 'Unnamed')}</td>
        <td>${escapeHtml(inv.invoiceDate || '---')}</td>
        <td>${inv.items?.length || 0} items</td>
        <td><strong>${formatCurrency(tot, inv.currency || "₹")}</strong></td>
        <td><span class="status-badge ${inv.status === 'Paid' ? 'paid' : 'pending'}">${inv.status || 'Paid'}</span></td>
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
  // 9. SETTINGS TAB
  // ==========================================
  document.getElementById('save-settings-btn')?.addEventListener('click', () => {
    const newAgency = {
      name: document.getElementById('set-agency-name').value,
      addressLine1: document.getElementById('set-agency-addr1').value,
      addressLine2: document.getElementById('set-agency-addr2').value,
      phone: document.getElementById('set-agency-phone').value,
      email: document.getElementById('set-agency-email').value
    };

    const newBank = {
      beneficiary: document.getElementById('set-bank-beneficiary').value,
      bankName: document.getElementById('set-bank-name').value,
      accountNumber: document.getElementById('set-bank-acc').value,
      ifsc: document.getElementById('set-bank-ifsc').value,
      upiId: document.getElementById('set-bank-upi').value
    };

    currentBill.agencyInfo = newAgency;
    currentBill.bankInfo = newBank;

    // Update active generator fields
    bankBeneficiaryInput.value = newBank.beneficiary;
    bankNameInput.value = newBank.bankName;
    bankAccInput.value = newBank.accountNumber;
    bankIfscInput.value = newBank.ifsc;
    upiIdInput.value = newBank.upiId;

    liveAgencyName.textContent = newAgency.name;
    liveAgencyAddr1.textContent = newAgency.addressLine1;
    liveAgencyAddr2.textContent = newAgency.addressLine2;
    liveAgencyPhone.textContent = newAgency.phone;
    liveAgencyEmail.textContent = newAgency.email;

    updateLivePreviewAndCalculations();
    showToast("Saved default agency & bank settings", "💾");
  });

  // ==========================================
  // 10. INITIALIZATION
  // ==========================================
  populateFormFromBill(currentBill);
  renderClientDropdown();
  updateSavedInvoicesCount();
});
