import React from 'react';

export default function Hero() {
  return (
    <>
      {/* NEW COLOR SCHEME - Client Trial (Charcoal + Green) */}
      <style>{`
        .hero-trial-theme {
          background-color: #1e1e1e;
          background-image: linear-gradient(135deg, #1e1e1e 0%, #2b2b2b 100%);
          color: #e0e0e0;
        }
        .hero-trial-theme .badge {
          background: rgba(26, 77, 46, 0.15);
          color: #f5f5f5;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }
        .hero-trial-theme .badge .dot {
          background: #d4af37;
        }
        .hero-trial-theme h1 {
          color: #f5f5f5;
        }
        .hero-trial-theme h1 em {
          color: #d4af37;
        }
        .hero-trial-theme .sub {
          color: #b0b0b0;
        }
        .hero-trial-theme .btn-p {
          background: #1a4d2e;
          color: #fff;
          border: 1px solid #1a4d2e;
          transition: all 0.3s ease;
        }
        .hero-trial-theme .btn-p:hover {
          background: #d4af37;
          border-color: #d4af37;
          color: #1e1e1e;
        }
        .hero-trial-theme .btn-s {
          background: transparent;
          color: #e0e0e0;
          border: 1px solid #555;
          transition: all 0.3s ease;
        }
        .hero-trial-theme .btn-s:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: #d4af37;
          color: #d4af37;
        }
        .hero-trial-theme .tn {
          color: #d4af37;
        }
        .hero-trial-theme .tl {
          color: #a0a0a0;
        }
        .hero-trial-theme .tdiv {
          background: linear-gradient(to bottom, transparent, #555, transparent);
        }
        .hero-trial-theme .rc {
          background: rgba(43, 43, 43, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
        }
        .hero-trial-theme .rc-h {
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .hero-trial-theme .rc-t {
          color: #e0e0e0;
        }
        .hero-trial-theme .rb {
          background: rgba(54, 54, 54, 0.6);
          border: 1px solid rgba(255,255,255,0.03);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .hero-trial-theme .rb:hover {
          transform: translateY(-3px);
          border-color: rgba(212, 175, 55, 0.4);
        }
        .hero-trial-theme .pl {
          color: #b0b0b0;
        }
        .hero-trial-theme .am {
          color: #f5f5f5;
        }
        .hero-trial-theme .gr {
          color: #4caf7d;
        }
        .hero-trial-theme .cr {
          background: rgba(26, 26, 26, 0.8);
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .hero-trial-theme .ca {
          background: #1a4d2e;
          color: #fff;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }
        .hero-trial-theme .cn {
          color: #e0e0e0;
        }
        .hero-trial-theme .cd {
          color: #a0a0a0;
        }
        .hero-trial-theme .cp {
          color: #4caf7d;
        }
        .hero-trial-theme .live {
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        .hero-trial-theme .ldot {
          background: #d4af37;
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
          animation: pulseGold 2s infinite;
        }
        @keyframes pulseGold {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <div className="hero hero-trial-theme">
        <div className="hero-inner">
          <div>
            <div className="badge"><span className="dot"></span>#1 eCommerce Automation Agency</div>
            <h1>We Run Your Store.<br/><em>You Keep</em> the Profits.</h1>
            <p className="sub">500+ clients earning $3,000–$10,000/month passively since 2019. We handle everything — product research, listings, orders, and customer service — 100% done for you.</p>
            <div className="btns">
              <a href="https://wa.me/19342022517?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20call!" target="_blank" rel="noreferrer" className="btn-p">💬 Book a Free Strategy Call</a>
              <a href="portfolio.html" className="btn-s">📊 See Client Results</a>
            </div>
            <div className="trust">
              <div className="ti"><span className="tn">500+</span><span className="tl">Happy Clients</span></div>
              <div className="tdiv"></div>
              <div className="ti"><span className="tn">$100K</span><span className="tl">Max Monthly</span></div>
              <div className="tdiv"></div>
              <div className="ti"><span className="tn">98%</span><span className="tl">Success Rate</span></div>
              <div className="tdiv"></div>
              <div className="ti"><span className="tn">2019</span><span className="tl">Established</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="rc">
              <div className="rc-h"><span className="rc-t">Live Client Stores</span><span className="live"><span className="ldot"></span>Live</span></div>
              <div className="rg">
                <a href="https://www.ebay.com/str/smartcartpicks" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">eBay Store</div><div className="am">$4,280</div><div className="gr">↑ 22% this month</div><div style={{fontSize:'10px',color:'#d4af37',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.ebay.com/str/emilyslittleshop" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">Amazon FBA</div><div className="am">$8,560</div><div className="gr">↑ 34% this month</div><div style={{fontSize:'10px',color:'#d4af37',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.tiktok.com/shop" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">TikTok Shop</div><div className="am">$6,120</div><div className="gr">↑ 41% this month</div><div style={{fontSize:'10px',color:'#d4af37',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.ebay.com/str/goodsforyoustore" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">Walmart</div><div className="am">$11,300</div><div className="gr">↑ 28% this month</div><div style={{fontSize:'10px',color:'#d4af37',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
              </div>
              <div className="cr">
                <div className="ca">MR</div>
                <div><div className="cn">Michael R. — Texas</div><div className="cd">eBay Client · Since Jan 2024</div></div>
                <div className="cp">$4,200/m</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OLD HERO CODE - kept for rollback if needed */}
      {/*
      <div className="hero">
        <div className="hero-inner">
          <div>
            <div className="badge"><span className="dot"></span>#1 eCommerce Automation Agency</div>
            <h1>We Run Your Store.<br/><em>You Keep</em> the Profits.</h1>
            <p className="sub">500+ clients earning $3,000–$10,000/month passively since 2019. We handle everything — product research, listings, orders, and customer service — 100% done for you.</p>
            <div className="btns">
              <a href="https://wa.me/19342022517?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20call!" target="_blank" rel="noreferrer" className="btn-p">💬 Book a Free Strategy Call</a>
              <a href="portfolio.html" className="btn-s">📊 See Client Results</a>
            </div>
            <div className="trust">
              <div className="ti"><span className="tn">500+</span><span className="tl">Happy Clients</span></div>
              <div className="tdiv"></div>
              <div className="ti"><span className="tn">$100K</span><span className="tl">Max Monthly</span></div>
              <div className="tdiv"></div>
              <div className="ti"><span className="tn">98%</span><span className="tl">Success Rate</span></div>
              <div className="tdiv"></div>
              <div className="ti"><span className="tn">2019</span><span className="tl">Established</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="rc">
              <div className="rc-h"><span className="rc-t">Live Client Stores</span><span className="live"><span className="ldot"></span>Live</span></div>
              <div className="rg">
                <a href="https://www.ebay.com/str/smartcartpicks" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">eBay Store</div><div className="am">$4,280</div><div className="gr">↑ 22% this month</div><div style={{fontSize:'10px',color:'var(--gold)',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.ebay.com/str/emilyslittleshop" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">Amazon FBA</div><div className="am">$8,560</div><div className="gr">↑ 34% this month</div><div style={{fontSize:'10px',color:'var(--gold)',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.tiktok.com/shop" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">TikTok Shop</div><div className="am">$6,120</div><div className="gr">↑ 41% this month</div><div style={{fontSize:'10px',color:'var(--gold)',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.ebay.com/str/goodsforyoustore" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">Walmart</div><div className="am">$11,300</div><div className="gr">↑ 28% this month</div><div style={{fontSize:'10px',color:'var(--gold)',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
              </div>
              <div className="cr">
                <div className="ca">MR</div>
                <div><div className="cn">Michael R. — Texas</div><div className="cd">eBay Client · Since Jan 2024</div></div>
                <div className="cp">$4,200/m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  );
}
