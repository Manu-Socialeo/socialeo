/* ==========================================================================
   SOCIALEO INTERACTIVE LOGIC (main.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Scroll Effect
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

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
    });

    mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileMenuBtn.innerHTML = '☰';
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
          const increment = Math.ceil(target / 40);
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target + suffix;
              clearInterval(interval);
            } else {
              stat.textContent = current + suffix;
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.4 });

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
          card.style.animation = 'fadeInTestimonial 0.4s ease-out forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Testimonial Slider & Avatars
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
    testimonialTimer = setInterval(nextTestimonial, 6000);
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
    card.addEventListener('click', (e) => {
      // ignore if clicked directly on external link
      const title = card.querySelector('.project-title').textContent;
      const desc = card.querySelector('.project-desc').textContent;
      const imgSrc = card.querySelector('.project-media img').src;
      const tags = Array.from(card.querySelectorAll('.project-tag')).map(t => t.textContent);

      modalTitle.textContent = title;
      modalDesc.textContent = desc + " - Engineered with high-performance frameworks, customized design systems, and responsive layouts tailored to scale conversion rates.";
      modalImg.src = imgSrc;
      modalTags.innerHTML = tags.map(tag => `<span class="project-tag" style="color:#FF5E3A;border-color:rgba(255,94,58,0.3)">${tag}</span>`).join(' ');

      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalBackdrop.classList.remove('active');
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

  // 7. Contact Form Handling with Toast
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.querySelector('.toast-container');

  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color:#FFA800;font-size:18px;">${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

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

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... ⏳';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      contactForm.reset();
      showToast('Thank you! Your project request has been sent to the Socialeo team.', '🚀');
    }, 1200);
  });
});
