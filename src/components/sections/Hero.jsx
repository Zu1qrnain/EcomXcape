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
          background: rgba(26, 77, 46, 0.1);
          color: #f5f5f5;
          border: 1px solid rgba(26, 77, 46, 0.2);
        }
        .hero-trial-theme .badge .dot {
          background: #1a4d2e;
        }
        .hero-trial-theme h1 {
          color: #f5f5f5;
        }
        .hero-trial-theme h1 em {
          color: #1a4d2e;
        }
        .hero-trial-theme .sub {
          color: #b0b0b0;
        }
        .hero-trial-theme .btn-p {
          background: #1a4d2e;
          color: #fff;
          border-color: #1a4d2e;
        }
        .hero-trial-theme .btn-p:hover {
          background: #123821;
          border-color: #123821;
        }
        .hero-trial-theme .btn-s {
          background: transparent;
          color: #e0e0e0;
          border-color: #555;
        }
        .hero-trial-theme .btn-s:hover {
          background: rgba(255,255,255,0.05);
          border-color: #888;
        }
        .hero-trial-theme .tn {
          color: #f5f5f5;
        }
        .hero-trial-theme .tl {
          color: #a0a0a0;
        }
        .hero-trial-theme .tdiv {
          background: #444;
        }
        .hero-trial-theme .rc {
          background: #2b2b2b;
          border: 1px solid #444;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .hero-trial-theme .rc-h {
          border-bottom: 1px solid #444;
        }
        .hero-trial-theme .rc-t {
          color: #e0e0e0;
        }
        .hero-trial-theme .rb {
          background: #363636;
          border: 1px solid #444;
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
          background: #1a1a1a;
          border-top: 1px solid #444;
        }
        .hero-trial-theme .ca {
          background: #1a4d2e;
          color: #fff;
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
          background: rgba(26, 77, 46, 0.1);
          color: #1a4d2e;
        }
        .hero-trial-theme .ldot {
          background: #1a4d2e;
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
                <a href="https://www.ebay.com/str/smartcartpicks" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">eBay Store</div><div className="am">$4,280</div><div className="gr">↑ 22% this month</div><div style={{fontSize:'10px',color:'#1a4d2e',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.ebay.com/str/emilyslittleshop" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">Amazon FBA</div><div className="am">$8,560</div><div className="gr">↑ 34% this month</div><div style={{fontSize:'10px',color:'#1a4d2e',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.tiktok.com/shop" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">TikTok Shop</div><div className="am">$6,120</div><div className="gr">↑ 41% this month</div><div style={{fontSize:'10px',color:'#1a4d2e',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
                <a href="https://www.ebay.com/str/goodsforyoustore" target="_blank" rel="noreferrer" className="rb" style={{textDecoration:'none',display:'block'}}><div className="pl">Walmart</div><div className="am">$11,300</div><div className="gr">↑ 28% this month</div><div style={{fontSize:'10px',color:'#1a4d2e',marginTop:'4px',fontWeight:600}}>Visit Store →</div></a>
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
