import '../../styles/CTA.css';
import React from "react";

export default function CTA() {
  return (
    <section className="cta-cinematic">
        <div className="cta-billboard">
          {/* Living Background */}
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>

          {/* Foreground Content */}
          <div className="cta-content">
            <h2 className="cta-header">You've Seen the Numbers.<br/><em>Now Let's Build It.</em></h2>
            <p className="cta-desc">
              300+ partners are already collecting their share every month — across eBay, Amazon, Etsy, TikTok Shop, OnBuy and Walmart. We build the stores. We run the operations. We scale every platform. You collect 50% of everything the stores generate, without touching a single order.
            </p>

            <div className="cta-actions">
              <a href="#contact" className="btn-qualify">
                Book a Strategy Call &rarr;
              </a>
              <a href="#contact" className="btn-email">
                DM us — type COMPANY
              </a>
            </div>

            <div className="cta-badges">
              <span className="trust-badge">✓ 300+ Active Stores</span>
              <span className="trust-badge">✓ £100M+ Sold Across 3 Countries</span>
              <span className="trust-badge">✓ 200+ Partners Earning Monthly</span>
              <span className="trust-badge">✓ 8 Years. Built Without Ads.</span>
            </div>
          </div>
        </div>
      </section>
  );
}