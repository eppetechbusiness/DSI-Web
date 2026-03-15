const NAV = `
<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-brand">
      <img src="images/logo.png" alt="Digital Sovereignty Institute Logo">
      <div class="brand-text">
        <span class="brand-name">Digital Sovereignty Institute</span>
        <span class="brand-tagline">Sovereign Bytes – Africa's Digital Policy Voice</span>
      </div>
    </a>
    <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="focus-areas.html">Focus</a></li>
      <li><a href="board.html">Leadership</a></li>
      <li><a href="publications.html">Publications</a></li>
      <li><a href="policy.html">Advocacy</a></li>
      <li><a href="membership.html">Membership</a></li>
      <li><a href="partnerships.html">Partnerships</a></li>
      <li><a href="news.html">Insights</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="donate.html" class="nav-donate">❤ Donate</a></li>
    </ul>
  </div>
</nav>`;

const FOOTER = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="images/logo.png" alt="Digital Sovereignty Institute">
        <p>A policy-focused institute advancing responsible digital transformation, ethical AI governance, and cybersecurity resilience in South Africa and the Global South.</p>
        <div class="footer-tagline">Sovereign Bytes – Africa's Digital Policy Voice</div>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="focus-areas.html">Focus</a></li>
          <li><a href="board.html">Leadership</a></li>
          <li><a href="publications.html">Publications</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Engage</h4>
        <ul>
          <li><a href="policy.html">Advocacy</a></li>
          <li><a href="membership.html">Membership</a></li>
          <li><a href="partnerships.html">Partnerships</a></li>
          <li><a href="news.html">Insights</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <ul>
          <li><a href="donate.html">Donate</a></li>
          <li><a href="membership.html">Become a Member</a></li>
          <li><a href="partnerships.html">Partner With Us</a></li>
          <li><a href="contact.html">Get In Touch</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Digital Sovereignty Institute. All rights reserved.</span>
      <span>Sovereign Bytes – Africa's Digital Policy Voice</span>
    </div>
  </div>
</footer>`;

document.getElementById('navbar-placeholder').innerHTML = NAV;
document.getElementById('footer-placeholder').innerHTML = FOOTER;
