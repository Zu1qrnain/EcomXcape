import React from "react";

export default function CTA() {
  return (
    <>
      <style>{`
        .cta-cinematic {
          background-color: #121212; /* Deep charcoal background */
          padding: 160px 40px;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* The Floating Billboard */
        .cta-billboard {
          position: relative;
          max-width: 1100px;
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 32px;
          padding: 80px 40px;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(212, 175, 55, 0.03);
          z-index: 10;
        }

        /* The Living Background Orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.5;
          animation: floatOrb 15s ease-in-out infinite alternate;
        }

        .orb-1 {
          top: -50%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: rgba(212, 175, 55, 0.15);
          animation-delay: 0s;
        }

        .orb-2 {
          bottom: -50%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(229, 196, 88, 0.1);
          animation-delay: -5s;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, 15%) scale(1.1); }
          100% { transform: translate(-10%, -10%) scale(0.9); }
        }

        /* Content Layer */
        .cta-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-header {
          font-family: 'Playfair Display', serif;
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .cta-header em {
          font-style: normal;
          background: linear-gradient(135deg, #d4af37, #f9e29c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        }

        .cta-desc {
          font-size: clamp(18px, 2vw, 22px);
          color: #a0a0a0;
          line-height: 1.6;
          max-width: 650px;
          margin-bottom: 50px;
        }

        /* Buttons */
        .cta-actions {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .btn-qualify {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, #d4af37, #e5c458);
          color: #1e1e1e;
          font-size: 18px;
          font-weight: 800;
          padding: 20px 48px;
          border-radius: 100px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          transition: all 0.3s;
        }

        .btn-qualify:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.5);
        }

        .btn-email {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          padding: 20px 48px;
          border-radius: 100px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }

        .btn-email:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }

        /* Trust Badges */
        .cta-badges {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: #d4af37;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .cta-cinematic { padding: 80px 20px; }
          .cta-billboard { padding: 60px 20px; border-radius: 24px; }
          .cta-actions { flex-direction: column; width: 100%; gap: 16px; }
          .btn-qualify, .btn-email { width: 100%; }
        }
      `}</style>

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
    </>
  );
}