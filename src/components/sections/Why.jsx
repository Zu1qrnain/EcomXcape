import React, { useRef } from "react";

const benefits = [
  {
    icon: '🔥',
    title: 'Performance-Based Model',
    desc: "We share in your profits. Our success is directly tied to yours. We're 100% motivated to maximize your store."
  },
  {
    icon: '⚡',
    title: '100% Hands-Free Operation',
    desc: 'You never touch anything. Our dedicated team handles every aspect of your store 24/7 — listings, orders, customers.'
  },
  {
    icon: '📊',
    title: 'Proven Track Record Since 2019',
    desc: '500+ clients profiting, documented results across 6 platforms, and 98% satisfaction rate.'
  },
  {
    icon: '📱',
    title: 'Dedicated Account Manager',
    desc: 'Every client gets a dedicated manager available 24/7. Weekly performance reports. Full transparency.'
  },
  {
    icon: '🛡️',
    title: 'We Take 99% of the Risk',
    desc: 'Low setup fee and profit-share model means your risk is minimal. We do the work — you reap the rewards.'
  }
];

export default function Why() {
  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    for (const card of gridRef.current.getElementsByClassName("bento-card")) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <>
      <style>{`
        .why-premium {
          background-color: #121212; /* Matches deep dark theme */
          color: #e0e0e0;
          padding: 140px 40px;
          position: relative;
        }

        .why-premium .si {
          max-width: 1200px;
          margin: 0 auto;
        }

        .why-premium .sl {
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .why-premium .sl::before {
          content: '';
          width: 30px;
          height: 2px;
          background: #d4af37;
        }

        .why-premium .sh {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .why-premium .ss {
          font-size: 18px;
          color: #a0a0a0;
          line-height: 1.6;
          max-width: 600px;
          margin-bottom: 60px;
        }

        /* Bento Grid Architecture */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(240px, auto);
          gap: 20px;
        }

        /* Spotlight Glass Cards */
        .bento-card {
          background-color: rgba(255, 255, 255, 0.02);
          border-radius: 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px;
          overflow: hidden;
        }

        .bento-card::before,
        .bento-card::after {
          content: "";
          position: absolute;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 500ms ease;
          pointer-events: none;
        }

        /* Glow effect underneath card */
        .bento-card::before {
          background: radial-gradient(
            800px circle at var(--mouse-x) var(--mouse-y),
            rgba(212, 175, 55, 0.06),
            transparent 40%
          );
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1;
        }

        /* Glowing Border effect */
        .bento-card::after {
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(212, 175, 55, 0.4),
            transparent 40%
          );
          top: -1px; left: -1px; right: -1px; bottom: -1px;
          z-index: 0;
        }

        /* Add black inside to mask border glow */
        .bento-inner {
          background-color: #1a1a1a;
          position: absolute;
          inset: 1px;
          border-radius: 23px;
          z-index: 2;
        }

        .bento-grid:hover .bento-card::before,
        .bento-grid:hover .bento-card::after {
          opacity: 1;
        }

        .bento-content {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Specific Card Spans */
        .card-stats {
          grid-column: span 2;
          grid-row: span 2;
          padding: 50px;
        }

        .card-wide {
          grid-column: span 2;
        }

        /* Stats Hero Card Styling */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          height: 100%;
          align-content: center;
        }

        .stat-block {
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #d4af37;
        }

        /* Benefit Cards Styling */
        .benefit-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 24px;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.1) inset;
        }

        .benefit-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .benefit-desc {
          font-size: 15px;
          color: #a0a0a0;
          line-height: 1.6;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .card-stats, .card-wide {
            grid-column: span 1;
            grid-row: span 1;
          }
          .stats-grid {
            gap: 30px;
          }
          .why-premium { padding: 80px 20px; }
          .bento-card { padding: 30px; }
          .card-stats { padding: 40px 30px; }
        }
      `}</style>

      <section id="why" className="why-premium">
        <div className="si">
          <div className="sl">Why Choose Us</div>
          <h2 className="sh">Why 500+ Clients Trust Us<br/>With Their Business</h2>
          <p className="ss">We don't just manage stores — we build lasting passive income machines.</p>
          
          <div className="bento-grid" ref={gridRef} onMouseMove={handleMouseMove}>
            
            {/* The Massive Stats Card */}
            <div className="bento-card card-stats">
              <div className="bento-inner"></div>
              <div className="bento-content">
                <div className="stats-grid">
                  <div className="stat-block">
                    <span className="stat-num">98%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-num">500+</span>
                    <span className="stat-label">Active Clients</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-num">$100K</span>
                    <span className="stat-label">Max Monthly Earned</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-num">2019</span>
                    <span className="stat-label">Founded & Proven</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit Cards */}
            {benefits.map((b, i) => (
              <div key={i} className={`bento-card ${i === 4 ? 'card-wide' : ''}`}>
                <div className="bento-inner"></div>
                <div className="bento-content">
                  <div className="benefit-icon-wrapper">{b.icon}</div>
                  <h4 className="benefit-title">{b.title}</h4>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
