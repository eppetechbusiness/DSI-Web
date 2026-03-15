const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', (e) => { if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) navLinks.classList.remove('open'); });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => { if (link.getAttribute('href') === currentPage) link.classList.add('active'); });

document.querySelectorAll('.donate-amount-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.donate-amount-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const ci = document.getElementById('custom-amount');
    if (ci) ci.value = btn.dataset.amount || '';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });
document.querySelectorAll('.focus-card, .pub-card, .board-card, .news-card, .partner-card, .membership-card').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; observer.observe(el);
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => { e.preventDefault(); const btn = contactForm.querySelector('button[type="submit"]'); btn.textContent = 'Message Sent ✓'; btn.style.background = '#2E7D32'; setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; contactForm.reset(); }, 3000); });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) { signupForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Welcome to the Digital Sovereignty Institute! Your application has been received.'); signupForm.reset(); }); }

const loginForm = document.getElementById('loginForm');
if (loginForm) { loginForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Login functionality will be connected to the backend by your developer.'); }); }

const donateForm = document.getElementById('donateForm');
if (donateForm) { donateForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Thank you for supporting the Digital Sovereignty Institute! Your developer will connect this to a payment gateway.'); donateForm.reset(); }); }
