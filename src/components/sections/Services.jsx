import React from "react";

export default function Services() { 
  return (
    <>
      <style>{`
        .services-premium-theme {
          background-color: #fafafa;
          color: #1e1e1e;
        }
        .services-premium-theme .sl {
          color: #d4af37;
        }
        .services-premium-theme .sh {
          color: #1e1e1e;
        }
        .services-premium-theme .ss {
          color: #555555;
        }
        .services-premium-theme .sgrid {
          background: transparent;
          border: none;
          gap: 20px;
        }
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
        .services-premium-theme .sc h3 {
          color: #1e1e1e;
        }
        .services-premium-theme .sc p {
          color: #555555;
        }
        .services-premium-theme .sc .sl2 {
          color: #d4af37;
          font-weight: 600;
          transition: color 0.2s;
        }
        .services-premium-theme .sc .sl2:hover {
          color: #1a4d2e;
        }
        .services-premium-theme .sc .si2 {
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
      `}</style>
      <section id="services" className="services-premium-theme">
        <div className="si">
          <div className="sl">What We Do</div>
          <h2 className="sh">One Agency. Six Platforms.<br/>Infinite Passive Income.</h2>
          <p className="ss">We run your stores end-to-end. Pick your platform — we handle everything else.</p>
          <div className="sgrid">
            <div className="sc sc-amazon">
              <div className="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{'height': '20px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div>
              <h3>Amazon FBA Automation</h3>
              <p>Full store management — sourcing, listings, inventory, CS. Generating <span style={{color: '#d4af37', fontWeight: 'bold'}}>$3K–$10K/m</span> hands-free.</p>
              <a href="#amazon" className="sl2">Learn More →</a>
            </div>
            <div className="sc sc-ebay">
              <div className="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" alt="eBay" style={{'height': '18px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div>
              <h3>eBay Store Automation</h3>
              <p>Complete eBay management from research to fulfillment. <span style={{color: '#d4af37', fontWeight: 'bold'}}>$3K–$5K/m</span> net profit stores.</p>
              <a href="#ebay" className="sl2">Learn More →</a>
            </div>
            <div className="sc sc-tiktok">
              <div className="si2"><img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" style={{'height': '20px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div>
              <h3>TikTok Shop Automation</h3>
              <p>Built and managed from scratch — products, content, orders. <span style={{color: '#d4af37', fontWeight: 'bold'}}>$5K–$10K/m</span> passive income.</p>
              <a href="#tiktok" className="sl2">Learn More →</a>
            </div>
            <div className="sc sc-etsy">
              <div className="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg" alt="Etsy" style={{'height': '18px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div>
              <h3>Etsy Store Automation</h3>
              <p>Trending products, keyword-optimized listings, full order management. <span style={{color: '#d4af37', fontWeight: 'bold'}}>40–90% ROI</span> monthly.</p>
              <a href="#etsy" className="sl2">Learn More →</a>
            </div>
            <div className="sc sc-walmart">
              <div className="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Walmart_Spark.svg" alt="Walmart" style={{'height': '22px', 'width': 'auto', 'filter': 'brightness(0) invert(1)'}}/></div>
              <h3>Walmart Automation</h3>
              <p>Full marketplace management. Proven path to <span style={{color: '#d4af37', fontWeight: 'bold'}}>$1M+</span> store in 18–24 months. <span style={{color: '#d4af37', fontWeight: 'bold'}}>30–35% ROI</span>.</p>
              <a href="#walmart" className="sl2">Learn More →</a>
            </div>
            <div className="sc sc-mercari">
              <div className="si2" style={{'fontSize': '13px', 'fontWeight': '800', 'color': '#fff', 'letterSpacing': '-1px'}}>M</div>
              <h3>Mercari Automation</h3>
              <p>Complete Mercari management — listing to delivery. Sourcing, pricing, CS, fulfillment.</p>
              <a href="#mercari" className="sl2">Learn More →</a>
            </div>
            <div className="sc sc-llc">
              <div className="si2" style={{'fontSize': '18px', 'color': '#fff'}}>🏛️</div>
              <h3>LLC Filing</h3>
              <p>LLC formation start to finish. State filing, operating agreements, EIN registration.</p>
              <a href="#llc" className="sl2">Learn More →</a>
            </div>
            <div className="sc sc-tax">
              <div className="si2" style={{'fontSize': '18px', 'color': '#fff'}}>💼</div>
              <h3>Tax Filing</h3>
              <p>Professional business tax filing. Stay compliant and maximize your deductions.</p>
              <a href="#tax" className="sl2">Learn More →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  ); 
}