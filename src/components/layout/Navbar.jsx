import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav id="mainNav">
        <a href="#" className="logo" style={{ background: 'transparent', padding: 0, display: 'flex', alignItems: 'center' }}>
          {/* Main Logo */}
          <img src="/ecomxcape logo final.png" alt="EcomXcape" className="logo-img" style={{ height: '48px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#brands">Our Brands</a>
          <a href="#process">How It Works</a>
          <a href="#testimonials">Results</a>
          <a href="#qualify">Qualify</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#call" className="nav-cta">Book Free Call →</a>
        </div>
        <button 
          className={`ham-btn ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#brands" onClick={() => setMenuOpen(false)}>Our Brands</a>
        <a href="#process" onClick={() => setMenuOpen(false)}>How It Works</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Results</a>
        <a href="#qualify" onClick={() => setMenuOpen(false)}>Qualify</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="#call" className="nav-cta" style={{ background: 'var(--navy)' }} onClick={() => setMenuOpen(false)}>Book Free Call →</a>
      </div>
    </>
  );
}
