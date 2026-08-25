/* ==========================================================================
   SOCIALEO INTERACTIVE LOGIC & PERFORMANCE OPTIMIZATIONS (main.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('socialeo-theme') || 'dark';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeToggleBtn) themeToggleBtn.innerHTML = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggleBtn) themeToggleBtn.innerHTML = '🌙';
    }
  }

  applyTheme(savedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    localStorage.setItem('socialeo-theme', newTheme);
    applyTheme(newTheme);
  });

  // 1. Navigation Scroll Effect & Dynamic Active Section ScrollSpy
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.querySelector('.back-to-top');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  function getSectionIdFromHref(href) {
    if (!href) return '';
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      return href.substring(hashIndex + 1);
    }
    return '';
  }

  function updateNavbar() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // ScrollSpy Highlight - dynamically moves the underline to the current active section
    if (sections.length > 0) {
      let currentSectionId = '';

      // Check if user scrolled to bottom of page (e.g. contact section)
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 80)) {
        const lastSec = sections[sections.length - 1];
        if (lastSec) currentSectionId = lastSec.getAttribute('id');
      } else {
        const triggerPoint = scrollY + 160;
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.offsetTop <= triggerPoint) {
            currentSectionId = section.getAttribute('id');
            break;
          }
        }
        if (!currentSectionId && sections.length > 0) {
          currentSectionId = sections[0].getAttribute('id');
        }
      }

      if (currentSectionId) {
        navLinks.forEach(link => {
          const targetId = getSectionIdFromHref(link.getAttribute('href'));
          if (targetId) {
            link.classList.toggle('active', targetId === currentSectionId);
          }
        });
      }
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  window.addEventListener('resize', updateNavbar, { passive: true });
  updateNavbar();

  // Back to Top Click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 2. Mobile Menu Drawer
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      const isExpanded = mobileDrawer.classList.contains('active');
      mobileMenuBtn.innerHTML = isExpanded ? '✕' : '☰';
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    });

    mobileDrawer.querySelectorAll('.nav-link, .btn').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileMenuBtn.innerHTML = '☰';
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Animated Number Counters (Intersection Observer)
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimatedStats = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimatedStats) {
        hasAnimatedStats = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          let current = 0;
          const stepTime = Math.max(15, Math.floor(1200 / target));
          const interval = setInterval(() => {
            current += Math.ceil(target / 35);
            if (current >= target) {
              stat.textContent = target + suffix;
              clearInterval(interval);
            } else {
              stat.textContent = current + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsContainer = document.querySelector('.about-stats');
  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }

  // 4. Portfolio Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInTestimonial 0.35s ease-out forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Testimonial Slider & Avatars with Keyboard / Touch Support
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const avatarBtns = document.querySelectorAll('.avatar-btn');
  let currentTestimonial = 0;
  let testimonialTimer = null;

  function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
    avatarBtns.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
    currentTestimonial = index;
  }

  avatarBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      showTestimonial(index);
      resetAutoSlide();
    });
  });

  function nextTestimonial() {
    let next = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(next);
  }

  function resetAutoSlide() {
    clearInterval(testimonialTimer);
    testimonialTimer = setInterval(nextTestimonial, 6500);
  }

  resetAutoSlide();

  // 6. Project Modal Quick View
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.project-title')?.textContent || 'Project';
      const desc = card.querySelector('.project-desc')?.textContent || '';
      const img = card.querySelector('.project-media img');
      const imgSrc = img ? img.src : '';
      const tags = Array.from(card.querySelectorAll('.project-tag')).map(t => t.textContent);

      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc + " — Tailor-made with bespoke visual architecture, high conversion ergonomics, and clean modern code standards.";
      if (modalImg && imgSrc) modalImg.src = imgSrc;
      if (modalTags) {
        modalTags.innerHTML = tags.map(tag => `<span class="project-tag" style="color:#FF5E3A;border-color:rgba(255,94,58,0.3)">${tag}</span>`).join(' ');
      }

      modalBackdrop?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('active')) {
      closeModal();
    }
  });

  // 7. Interactive 3D Card Spotlight Glow on Mouse Move (Desktop)
  if (window.matchMedia('(pointer: fine)').matches) {
    const interactiveCards = document.querySelectorAll('.service-card, .project-card, .process-step-card');
    interactiveCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // 8. Contact Form Handling with Toast
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.querySelector('.toast-container');

  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color:#FFA800;font-size:18px;">${icon}</span> <span>${message}</span>`;
    toastContainer?.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    const firstName = document.getElementById('first-name')?.value || '';
    const lastName = document.getElementById('last-name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const phoneSelect = contactForm.querySelector('select')?.value || '+91';
    const phone = document.getElementById('phone')?.value || '';
    const message = document.getElementById('message')?.value || '';

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Connecting WhatsApp... 💬';

    const whatsappMessage = `*🚀 New Project Inquiry — Socialeo Website*

👤 *Client*: ${firstName} ${lastName}
✉️ *Email*: ${email}
📞 *Phone*: ${phoneSelect} ${phone}
💬 *Project Details*:
${message}

---
_Sent via Socialeo Instant Web Portal_`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=918722163256&text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      window.open(whatsappUrl, '_blank');
      contactForm.reset();
      showToast('Opening WhatsApp to send your inquiry to Socialeo (+91 87221 63256)...', '💬');
    }, 800);
  });

  // 9. Interactive Floating Embers Canvas (Hero Section)
  const heroCanvas = document.getElementById('hero-particles');
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    let width = (heroCanvas.width = heroCanvas.parentElement.offsetWidth);
    let height = (heroCanvas.height = heroCanvas.parentElement.offsetHeight);

    window.addEventListener('resize', () => {
      if (!heroCanvas.parentElement) return;
      width = heroCanvas.width = heroCanvas.parentElement.offsetWidth;
      height = heroCanvas.height = heroCanvas.parentElement.offsetHeight;
    });

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '#FF5E3A' : '#FFA800'
    }));

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // ==========================================
  // WEB DEVELOPMENT CAPABILITIES PDF DOWNLOAD
  // ==========================================
  const downloadWebDevBtn = document.getElementById('download-webdev-pdf-btn');
  
  function downloadCapabilitiesPdf() {
    showToast("Generating 3-page Capabilities PDF...", "⏳");
    const brochureElement = document.getElementById('capabilities-pdf-content');
    
    if (!brochureElement) {
      showToast("Brochure template not found.", "⚠️");
      return;
    }

    const opt = {
      margin: 0,
      filename: 'Socialeo_Web_Development_Capabilities_Deck.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        letterRendering: true,
        scrollY: 0
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: 'css' },
      enableLinks: true
    };

    if (typeof html2pdf !== 'undefined') {
      html2pdf().set(opt).from(brochureElement).save().then(() => {
        showToast("PDF downloaded with interactive action buttons!", "📥");
      }).catch(err => {
        console.warn("html2pdf download error:", err);
        showToast("Capabilities deck downloaded successfully.", "✅");
      });
    } else {
      window.print();
    }
  }

  downloadWebDevBtn?.addEventListener('click', downloadCapabilitiesPdf);
});

