import React from "react";

const reviews = [
  {
    name: "[B2B CEO Name]",
    location: "UK",
    platform: "eBay & Amazon",
    duration: "Active 2+ Years",
    initials: "B2B",
    text: `"[Placeholder] Real quote from a B2B CEO partner. Minimum one B2B CEO quote required."`
  },
  {
    name: "[Individual Partner]",
    location: "USA",
    platform: "TikTok Shop",
    duration: "Active 6 Months",
    initials: "B2C",
    text: `"[Placeholder] Real quote from a US-based individual partner required."`
  },
  {
    name: "[Partner Name]",
    location: "Australia",
    platform: "Etsy",
    duration: "Active 1 Year",
    initials: "AU",
    text: `"[Placeholder] Real quote from an Australia-based partner required."`
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

        /* Clean Card Wrapper */
        .animated-border-wrapper {
          border-radius: 20px;
          padding: 1px;
          background: rgba(255,255,255,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: transform 0.4s ease, background-color 0.4s ease;
          height: 100%;
        }

        .animated-border-wrapper:hover {
          transform: translateY(-10px);
          background: rgba(212, 175, 55, 0.4);
        }

        /* Inner Glass Card */
        .review-inner-card {
          background: #161616;
          border-radius: 19px;
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
          <div className="sl">PARTNER RESULTS</div>
          <h2 className="sh">300 Stores. 200 Partners. The Numbers Speak.</h2>
          <p className="ss" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px auto', fontSize: '18px', color: '#a0a0a0', lineHeight: 1.6 }}>Every figure below is from a real store, on a real platform, run by our team. We share live Seller Hub dashboards on every strategy call — no mock-ups, no projections presented as proof.</p>

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
                        <div className="author-loc" style={{ marginTop: '2px', color: '#d4af37' }}>{rev.duration}</div>
                      </div>
                      <div className="platform-tag">{rev.platform}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Store Proof Section */}
          <div className="proof-section" style={{ marginTop: '120px', width: '100%' }}>
            <h3 className="sh" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '16px', textAlign: 'center' }}>Live eBay Seller Hub Dashboards</h3>
            <p className="ss" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto', fontSize: '18px', color: '#a0a0a0', lineHeight: 1.6 }}>These are unedited screenshots from active partner stores. Updated monthly.</p>
            
            <div className="proof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', width: '100%' }}>
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} style={{ 
                  background: '#1a1a1a', 
                  border: '1px dashed rgba(212, 175, 55, 0.4)', 
                  borderRadius: '16px', 
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Dashboard Screenshot {idx+1}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}