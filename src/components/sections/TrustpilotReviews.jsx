import React from "react";

const reviews = [
  {
    name: "Michael R.",
    location: "Texas, USA",
    platform: "eBay",
    initials: "MR",
    text: `"EcomXcape completely changed my financial life. My eBay store is generating $4,200/m consistently and I haven't touched it in months."`
  },
  {
    name: "Sarah L.",
    location: "California, USA",
    platform: "Amazon",
    initials: "SL",
    text: `"The FBA Genius team is incredible. They set up my Amazon store and I'm now at $8,500/m passive income. Zero upfront fee was the deal maker."`
  },
  {
    name: "David J.",
    location: "Florida, USA",
    platform: "Walmart",
    initials: "DJ",
    text: `"Walmart Elite Club promised a million dollar store and they're delivering. 14 months in, my store is at $65K/m revenue with 32% ROI."`
  }
];

export default function TrustpilotReviews() {
  return (
    <>
      <style>{`
        .reviews-cinematic {
          background-color: #121212; /* Matches deep dark theme */
          color: #e0e0e0;
          padding: 140px 40px;
          position: relative;
          overflow: hidden;
        }

        .reviews-cinematic .si {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .reviews-cinematic .sl {
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
        }
        
        .reviews-cinematic .sl::before,
        .reviews-cinematic .sl::after {
          content: '';
          width: 30px;
          height: 2px;
          background: #d4af37;
        }

        .reviews-cinematic .sh {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 60px;
          letter-spacing: -1px;
          text-align: center;
        }

        /* The Trust Anchor Component */
        .trust-anchor {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px 60px;
          display: flex;
          align-items: center;
          gap: 60px;
          margin-bottom: 80px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(212, 175, 55, 0.05);
        }

        .anchor-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .anchor-divider {
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent);
        }

        .tp-logo-text {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .tp-star-row {
          color: #00b67a; /* Trustpilot Green */
          font-size: 24px;
          letter-spacing: 2px;
          text-shadow: 0 0 10px rgba(0, 182, 122, 0.4);
        }

        .anchor-score {
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          font-weight: 800;
          color: #d4af37;
          line-height: 1;
        }

        .anchor-sub {
          font-size: 14px;
          color: #a0a0a0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .anchor-badge {
          font-size: 40px;
          margin-bottom: -10px;
        }

        /* The Grid */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
        }

        /* Animated Gradient Card Wrapper */
        .animated-border-wrapper {
          position: relative;
          border-radius: 20px;
          padding: 1px; /* The border width */
          overflow: hidden;
          background: rgba(255,255,255,0.05); /* Fallback */
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          transition: transform 0.4s ease;
        }

        .animated-border-wrapper:hover {
          transform: translateY(-10px);
        }

        /* The rotating conic gradient */
        .animated-border-wrapper::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            transparent, 
            transparent, 
            transparent, 
            rgba(212, 175, 55, 1)
          );
          animation: rotate-border 4s linear infinite;
          z-index: 0;
        }

        /* Stagger animations so they don't look uniform */
        .reviews-grid > div:nth-child(1) .animated-border-wrapper::before { animation-delay: 0s; }
        .reviews-grid > div:nth-child(2) .animated-border-wrapper::before { animation-delay: -1.3s; }
        .reviews-grid > div:nth-child(3) .animated-border-wrapper::before { animation-delay: -2.6s; }

        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Inner Glass Card */
        .review-inner-card {
          position: relative;
          z-index: 1;
          background: #161616;
          border-radius: 19px; /* Slightly less than wrapper */
          padding: 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Verified Badge */
        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 182, 122, 0.1);
          color: #00b67a;
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
          align-self: flex-start;
          border: 1px solid rgba(0, 182, 122, 0.2);
        }

        .review-stars {
          color: #d4af37;
          font-size: 18px;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }

        .review-text {
          font-size: 18px;
          line-height: 1.6;
          color: #e0e0e0;
          margin-bottom: 40px;
          flex-grow: 1;
          font-style: italic;
        }

        .review-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .author-av {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2a2a2a, #1e1e1e);
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: #d4af37;
          font-size: 18px;
        }

        .author-meta {
          flex-grow: 1;
        }

        .author-name {
          font-weight: 700;
          color: #ffffff;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .author-loc {
          font-size: 13px;
          color: #888;
        }

        .platform-tag {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #1e1e1e;
          background: #d4af37;
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* Mobile */
        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: 1fr; }
          .trust-anchor { flex-direction: column; gap: 30px; text-align: center; padding: 40px; width: 100%; max-width: 400px; }
          .anchor-divider { width: 80px; height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent); }
          .reviews-cinematic { padding: 80px 20px; }
        }
      `}</style>

      <section id="testimonials" className="reviews-cinematic">
        <div className="si">
          <div className="sl">Client Results</div>
          <h2 className="sh">Real Results from Real Clients</h2>
          
          <div className="trust-anchor">
            <div className="anchor-col">
              <div className="tp-logo-text">Trustpilot</div>
              <div className="tp-star-row">★★★★★</div>
            </div>
            <div className="anchor-divider"></div>
            <div className="anchor-col">
              <div className="anchor-score">4.9</div>
              <div className="anchor-sub">Based on 100+ reviews</div>
            </div>
            <div className="anchor-divider"></div>
            <div className="anchor-col">
              <div className="anchor-badge">🏆</div>
              <div className="anchor-sub">Excellent</div>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((rev, i) => (
              <div key={i}>
                <div className="animated-border-wrapper">
                  <div className="review-inner-card">
                    <div className="verified-badge">✓ Verified Client</div>
                    <div className="review-stars">★★★★★</div>
                    <p className="review-text">{rev.text}</p>
                    
                    <div className="review-footer">
                      <div className="author-av">{rev.initials}</div>
                      <div className="author-meta">
                        <div className="author-name">{rev.name}</div>
                        <div className="author-loc">{rev.location}</div>
                      </div>
                      <div className="platform-tag">{rev.platform}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}