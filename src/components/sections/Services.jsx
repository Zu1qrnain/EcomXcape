import React from "react";

/*
// ==========================================
// BACKUP OF PREVIOUS SERVICES CODE
// ==========================================
export function ServicesBackup() { 
  return (
    <>
      <style>{`
        .services-premium-theme {
          background-color: #fafafa;
          color: #1e1e1e;
        }
        .services-premium-theme .sl { color: #d4af37; }
        .services-premium-theme .sh { color: #1e1e1e; }
        .services-premium-theme .ss { color: #555555; }
        .services-premium-theme .sgrid { background: transparent; border: none; gap: 20px; }
        .services-premium-theme .sc {
          background: #ffffff;
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }
        .services-premium-theme .sc:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(212, 175, 55, 0.15);
          border-color: rgba(212, 175, 55, 0.6);
          background: #ffffff;
        }
        .services-premium-theme .sc h3 { color: #1e1e1e; }
        .services-premium-theme .sc p { color: #555555; }
        .services-premium-theme .sc .sl2 { color: #d4af37; font-weight: 600; transition: color 0.2s; }
        .services-premium-theme .sc .sl2:hover { color: #1a4d2e; }
        .services-premium-theme .sc .si2 { box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
      `}</style>
      <section id="services" className="services-premium-theme">
        <div className="si">
          <div className="sl">What We Do</div>
          <h2 className="sh">One Agency. Six Platforms.<br/>Infinite Passive Income.</h2>
          <p className="ss">We run your stores end-to-end. Pick your platform — we handle everything else.</p>
          <div className="sgrid">
            <div className="sc sc-amazon"><div className="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{'height': '20px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div><h3>Amazon FBA Automation</h3><p>Full store management — sourcing, listings, inventory, CS. Generating <span style={{color: '#d4af37', fontWeight: 'bold'}}>$3K–$10K/m</span> hands-free.</p><a href="#amazon" className="sl2">Learn More →</a></div>
            <div className="sc sc-ebay"><div className="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" alt="eBay" style={{'height': '18px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div><h3>eBay Store Automation</h3><p>Complete eBay management from research to fulfillment. <span style={{color: '#d4af37', fontWeight: 'bold'}}>$3K–$5K/m</span> net profit stores.</p><a href="#ebay" className="sl2">Learn More →</a></div>
            <div className="sc sc-tiktok"><div className="si2"><img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" style={{'height': '20px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div><h3>TikTok Shop Automation</h3><p>Built and managed from scratch — products, content, orders. <span style={{color: '#d4af37', fontWeight: 'bold'}}>$5K–$10K/m</span> passive income.</p><a href="#tiktok" className="sl2">Learn More →</a></div>
            <div className="sc sc-etsy"><div className="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg" alt="Etsy" style={{'height': '18px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div><h3>Etsy Store Automation</h3><p>Trending products, keyword-optimized listings, full order management. <span style={{color: '#d4af37', fontWeight: 'bold'}}>40–90% ROI</span> monthly.</p><a href="#etsy" className="sl2">Learn More →</a></div>
            <div className="sc sc-walmart"><div className="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Walmart_Spark.svg" alt="Walmart" style={{'height': '22px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div><h3>Walmart Automation</h3><p>Full marketplace management. Proven path to <span style={{color: '#d4af37', fontWeight: 'bold'}}>$1M+</span> store in 18–24 months. <span style={{color: '#d4af37', fontWeight: 'bold'}}>30–35% ROI</span>.</p><a href="#walmart" className="sl2">Learn More →</a></div>
            <div className="sc sc-mercari"><div className="si2" style={{'fontSize': '13px', 'fontWeight': '800', 'color': '#fff', 'letterSpacing': '-1px'}}>M</div><h3>Mercari Automation</h3><p>Complete Mercari management — listing to delivery. Sourcing, pricing, CS, fulfillment.</p><a href="#mercari" className="sl2">Learn More →</a></div>
            <div className="sc sc-llc"><div className="si2" style={{'fontSize': '18px', 'color': '#fff'}}>🏛️</div><h3>LLC Filing</h3><p>LLC formation start to finish. State filing, operating agreements, EIN registration.</p><a href="#llc" className="sl2">Learn More →</a></div>
            <div className="sc sc-tax"><div className="si2" style={{'fontSize': '18px', 'color': '#fff'}}>💼</div><h3>Tax Filing</h3><p>Professional business tax filing. Stay compliant and maximize your deductions.</p><a href="#tax" className="sl2">Learn More →</a></div>
          </div>
        </div>
      </section>
    </>
  ); 
}
// ==========================================
*/


export default function Services() { 
  return (
    <>
      <style>{`
        .services-ultra-premium {
          background-color: #fafafa;
          color: #1a1a2e;
          position: relative;
        }

        /* Subtle gold gradient line at top of section */
        .services-ultra-premium::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent);
        }

        .services-ultra-premium .sl {
          color: #d4af37;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .services-ultra-premium .sl::before {
          content: '';
          width: 24px;
          height: 2px;
          background: #d4af37;
        }

        .services-ultra-premium .sh {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #1e1e1e;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .services-ultra-premium .ss {
          font-size: 16px;
          color: #666666;
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 50px;
        }

        .services-ultra-premium .sgrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          background: transparent;
          border: none;
        }

        @media (max-width: 1100px) {
          .services-ultra-premium .sgrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .services-ultra-premium .sgrid { grid-template-columns: 1fr; }
        }

        /* The Card */
        .services-ultra-premium .sc {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px 28px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        /* Subtle gold accent line at top of card that fades in */
        .services-ultra-premium .sc::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #d4af37, #f5d060);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .services-ultra-premium .sc:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.08);
          border-color: rgba(212, 175, 55, 0.25);
        }

        .services-ultra-premium .sc:hover::before {
          opacity: 1;
        }

        /* Icons Container */
        .services-ultra-premium .si2 {
          width: 52px;
          height: 52px;
          background: #fdfbf7;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.06);
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        /* Force icons to be charcoal color and fit within container */
        .services-ultra-premium .si2 img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: brightness(0) opacity(0.85) !important;
          transition: opacity 0.4s ease;
        }

        .services-ultra-premium .sc:hover .si2 {
          transform: scale(1.08);
          border-color: rgba(212, 175, 55, 0.5);
        }

        .services-ultra-premium .sc:hover .si2 img {
          opacity: 1;
        }

        /* Typography */
        .services-ultra-premium .sc h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 800;
          color: #1e1e1e;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .services-ultra-premium .sc p {
          font-size: 14px;
          color: #666666;
          line-height: 1.65;
          margin-bottom: 30px;
          flex-grow: 1;
        }

        .services-ultra-premium .sc p span {
          color: #d4af37;
          font-weight: 700;
        }

        /* Learn More Link */
        .services-ultra-premium .sl2 {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: #d4af37;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          margin-top: auto;
          text-decoration: none;
        }

        .services-ultra-premium .sl2 .arr {
          transition: transform 0.3s ease;
          font-size: 15px;
        }

        .services-ultra-premium .sc:hover .sl2 {
          color: #1a4d2e;
        }

        .services-ultra-premium .sc:hover .sl2 .arr {
          transform: translateX(4px);
        }
      `}</style>
      <section id="services" className="services-ultra-premium">
        <div className="si">
          <div className="sl">What We Do</div>
          <h2 className="sh">One Agency. Six Platforms.<br/>Infinite Passive Income.</h2>
          <p className="ss">We run your stores end-to-end. Pick your platform — we handle everything else.</p>
          <div className="sgrid">
            
            <div className="sc">
              <div className="si2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
              </div>
              <h3>Amazon FBA Automation</h3>
              <p>Full store management — sourcing, listings, inventory, CS. Generating <span>$3K–$10K/m</span> hands-free.</p>
              <a href="#amazon" className="sl2">Learn More <span className="arr">→</span></a>
            </div>

            <div className="sc">
              <div className="si2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" alt="eBay" />
              </div>
              <h3>eBay Store Automation</h3>
              <p>Complete eBay management from research to fulfillment. <span>$3K–$5K/m</span> net profit stores.</p>
              <a href="#ebay" className="sl2">Learn More <span className="arr">→</span></a>
            </div>

            <div className="sc">
              <div className="si2">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" />
              </div>
              <h3>TikTok Shop Automation</h3>
              <p>Built and managed from scratch — products, content, orders. <span>$5K–$10K/m</span> passive income.</p>
              <a href="#tiktok" className="sl2">Learn More <span className="arr">→</span></a>
            </div>

            <div className="sc">
              <div className="si2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg" alt="Etsy" />
              </div>
              <h3>Etsy Store Automation</h3>
              <p>Trending products, keyword-optimized listings, full order management. <span>40–90% ROI</span> monthly.</p>
              <a href="#etsy" className="sl2">Learn More <span className="arr">→</span></a>
            </div>

            <div className="sc">
              <div className="si2" style={{ color: '#1e1e1e', opacity: 0.85 }}>
                <svg viewBox="0 0 100 100" fill="currentColor" style={{ height: '28px', width: '28px' }}>
                  <path d="M49.2 11.2v17c0 1.2.9 2.1 2 2.1 1.1 0 2-.9 2-2.1v-17c0-1.2-.9-2.1-2-2.1-1.1 0-2 .9-2 2.1zM73.5 21.2c-.9-.7-2.3-.6-3.1.2l-12.1 12c-.8.8-.8 2.2 0 3 .8.8 2.2.8 3 0l12-12c.9-.9.9-2.3.2-3.2zM86.8 45H69.7c-1.2 0-2.1.9-2.1 2 0 1.1-.9 2 2.1 2h17.1c1.2 0 2.1-.9 2.1-2 0-1.1-.9-2-2.1-2zM73.5 73c.8-.8 2.3-.9 3.1-.2.8.7.9 2.1.2 3l-12.1 12c-.8.8-2.2.9-3 .2-.8-.7-.9-2.1-.2-3l12-12zM49.2 86.8v-17c0-1.2.9-2.1 2-2.1 1.1 0 2 .9 2 2.1v17c0 1.2-.9 2.1-2 2.1-1.1 0-2-.9-2-2.1zM26.5 73c-.8-.8-2.3-.9-3.1-.2-.8.7-.9 2.1-.2 3l12.1 12c.8.8 2.2.9 3 .2.8-.7.9-2.1.2-3l-12-12zM13.2 45h17.1c1.2 0 2.1.9 2.1 2 0 1.1-.9 2-2.1 2H13.2C12 49 11 48.1 11 47c0-1.1.9-2 2.2-2zM26.5 21.2c.8-.7 2.3-.6 3.1.2l12.1 12c.8.8.8 2.2 0 3-.8.8-2.2.8-3 0l-12.2-12c-.8-.9-.8-2.3 0-3.2z"/>
                </svg>
              </div>
              <h3>Walmart Automation</h3>
              <p>Full marketplace management. Proven path to <span>$1M+</span> store in 18–24 months. <span>30–35% ROI</span>.</p>
              <a href="#walmart" className="sl2">Learn More <span className="arr">→</span></a>
            </div>

            <div className="sc">
              <div className="si2" style={{ fontSize: '18px', fontWeight: '800', color: '#333' }}>M</div>
              <h3>Mercari Automation</h3>
              <p>Complete Mercari management — listing to delivery. Sourcing, pricing, CS, fulfillment.</p>
              <a href="#mercari" className="sl2">Learn More <span className="arr">→</span></a>
            </div>

            <div className="sc">
              <div className="si2" style={{ fontSize: '20px' }}>🏛️</div>
              <h3>LLC Filing</h3>
              <p>LLC formation start to finish. State filing, operating agreements, EIN registration.</p>
              <a href="#llc" className="sl2">Learn More <span className="arr">→</span></a>
            </div>

            <div className="sc">
              <div className="si2" style={{ fontSize: '20px' }}>💼</div>
              <h3>Tax Filing</h3>
              <p>Professional business tax filing. Stay compliant and maximize your deductions.</p>
              <a href="#tax" className="sl2">Learn More <span className="arr">→</span></a>
            </div>

          </div>
        </div>
      </section>
    </>
  ); 
}