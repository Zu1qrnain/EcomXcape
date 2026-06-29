import React from "react";

const benefits = [
  {
    icon: '🤝',
    title: 'Profit Share. Not Retainer.',
    desc: 'We take 50% of net profit. No setup fees, no monthly retainers, no hidden costs. If your stores don\'t generate profit, we don\'t get paid. Our incentive is identical to yours.'
  },
  {
    icon: '👥',
    title: 'A 40-Person Team Running Your Operation.',
    desc: 'Not a freelancer. Not a virtual assistant. A full 40-person team in Multan with dedicated roles across sourcing, listing, operations, customer service and account management. This is an agency with infrastructure.'
  },
  {
    icon: '💻',
    title: 'We Built Our Own Software Because Nothing Else Scaled.',
    desc: 'At scale, every off-the-shelf tool broke. AutoDS, ZIK Analytics — none of it held at 100+ stores. So we built Autopilot DS. One operator now manages 5 stores instead of 2. This is operational depth most agencies can\'t touch.'
  },
  {
    icon: '📈',
    title: 'Real Stores. Real Dashboards. Real Numbers.',
    desc: 'We show you live eBay Seller Hub screenshots from active stores before you sign anything. No mock-ups. No projections presented as proof. Actual dashboards from actual partners who are active right now.'
  },
  {
    icon: '📊',
    title: 'Weekly Reporting. Full Visibility.',
    desc: 'Every partner receives a weekly performance report covering revenue, profit, orders, and any operational notes. You see exactly what your stores are doing, every week, without having to ask.'
  },
  {
    icon: '🏢',
    title: 'B2B Company Partnerships Are Our Primary Model.',
    desc: 'Most agencies only work with individual investors. ecomXcape works with company CEOs who use their employees\' existing accounts to open stores at scale. One CEO. Multiple accounts. One investment. Revenue across every store.'
  }
];

export default function Why() {
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

        /* Clean Cards */
        .bento-card {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          padding: 40px;
          transition: border-color 0.3s, transform 0.3s;
        }

        .bento-grid:hover .bento-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-5px);
        }

        .bento-content {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Specific Card Spans */
        .card-super-wide {
          grid-column: span 3;
          padding: 40px;
        }

        /* Stats Hero Card Styling */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
          height: 100%;
          align-items: center;
          text-align: center;
        }

        .stat-block {
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 48px);
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
          .card-super-wide {
            grid-column: span 1;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
          .why-premium { padding: 80px 20px; }
          .bento-card { padding: 30px; }
        }
      `}</style>

      <section id="why" className="why-premium">
        <div className="si">
          <div className="sl">WHY ECOMXCAPE</div>
          <h2 className="sh">8 Years. 300 Stores. We Have Never Run an Ad.</h2>
          <p className="ss">Every partner we have ever taken on came through word of mouth or content. Because results speak. Here is what makes this operation different from everything else in this space.</p>
          
          <div className="bento-grid">
            
            {/* Benefit Cards */}
            {benefits.map((b, i) => (
              <div key={i} className="bento-card">
                <div className="bento-content">
                  <div className="benefit-icon-wrapper">{b.icon}</div>
                  <h4 className="benefit-title">{b.title}</h4>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}

            {/* The Massive Stats Card */}
            <div className="bento-card card-super-wide">
              <div className="bento-content">
                <div className="stats-grid">
                  <div className="stat-block">
                    <span className="stat-num">300+</span>
                    <span className="stat-label">Active Stores</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-num">£100M+</span>
                    <span className="stat-label">Sold</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-num">200+</span>
                    <span className="stat-label">Partners</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-num">8 Years</span>
                    <span className="stat-label">Operating</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-num">40</span>
                    <span className="stat-label">Person Team</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-num">3</span>
                    <span className="stat-label">Companies Built</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
