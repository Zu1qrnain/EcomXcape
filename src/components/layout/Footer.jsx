import React from "react";
export default function Footer() { return (
<footer>
  <div className="fi2">
    <div className="ft">
      <div>
        <img src="/ecomxcape logo final.png" alt="EcomXcape Agency" style={{ height: '80px', marginBottom: '16px', objectFit: 'contain' }} />
        <p className="fd">Full-service eCommerce partnership agency. 300+ stores. 3 countries. 8 years. Zero ads.</p>
      </div>
      <div className="fc">
        <h4>Services</h4>
        <ul className="fl">
          <li><a href="#services">eBay Partnership</a></li>
          <li><a href="#services">Amazon FBA</a></li>
          <li><a href="#services">Etsy Store</a></li>
          <li><a href="#services">TikTok Shop</a></li>
          <li><a href="#services">OnBuy</a></li>
          <li><a href="#services">Walmart</a></li>
        </ul>
      </div>
      <div className="fc">
        <h4>Companies</h4>
        <ul className="fl">
          <li><a href="#brands">ecomXcape</a></li>
          <li><a href="#brands">Autopilot DS</a></li>
          <li><a href="#brands">Bridgrr</a></li>
        </ul>
      </div>
      <div className="fc">
        <h4>Contact</h4>
        <ul className="fl">
          <li><a href="mailto:contact@ecomxcape.com">contact@ecomxcape.com</a></li>
          <li><a href="https://linkedin.com/in/miangm" target="_blank" rel="noopener noreferrer">LinkedIn — GM</a></li>
          <li><a href="https://linkedin.com/in/ibrahimfarooq" target="_blank" rel="noopener noreferrer">LinkedIn — Ibrahim</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </div>
    </div>
    <div className="fb">
      <p className="fc2">© 2026 ecomXcape. All rights reserved.</p>
      <p className="fd2">Results vary. Figures shown are based on live operational benchmarks and are not a guarantee of future performance.</p>
    </div>
  </div>
</footer>
); }