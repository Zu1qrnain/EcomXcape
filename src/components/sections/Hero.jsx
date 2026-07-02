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
        /* --- NEW INNOVATIVE LAYOUT CSS --- */
        .hero-custom-layout {
          padding: 140px 40px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* Avatar Social Proof Badge */
        .hero-avatar-badge {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: rgba(26, 26, 26, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.25);
          padding: 8px 20px 8px 8px;
          border-radius: 100px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          cursor: default;
        }
        .hero-avatar-badge:hover {
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.15);
          transform: translateY(-2px);
        }
        .avatar-group {
          display: flex;
          align-items: center;
        }
        .avatar-pic {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #1e1e1e;
          background-size: cover;
          background-position: center;
          margin-left: -10px;
          transition: transform 0.2s;
          position: relative;
        }
        .avatar-pic:first-child { margin-left: 0; }
        .avatar-pic:hover { transform: translateY(-4px); z-index: 10 !important; }
        .avatar-more {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #1e1e1e;
          background: linear-gradient(135deg, #f5d060 0%, #a07820 100%);
          color: #1e1e1e;
          font-size: 10px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -10px;
          z-index: 1;
        }
        .avatar-text {
          font-size: 13px;
          color: #b0b0b0;
          letter-spacing: 0.5px;
        }
        .avatar-text strong {
          color: #d4af37;
          font-weight: 700;
        }

        .hero-glow {
          position: absolute;
          top: 10%;
          right: 5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .hero-grid-wrapper {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          z-index: 1;
        }
        .hero-content-area {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-content-area h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 5vw, 68px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 24px;
        }
        .hero-content-area .sub {
          font-size: 18px;
          line-height: 1.65;
          max-width: 540px;
          margin-bottom: 40px;
        }
        
        /* Floating Cards Visual Area */
        .hero-visual-area {
          position: relative;
          width: 100%;
          height: 540px;
        }
        .float-card {
          position: absolute;
          width: 230px;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        .fc-1 { top: 0; left: 0; animation: floatAnim 7s ease-in-out infinite; z-index: 3; }
        .fc-2 { top: 50px; right: 0; animation: floatAnim 8s ease-in-out infinite 1.5s; z-index: 1; }
        .fc-3 { bottom: 60px; left: 30px; animation: floatAnim 6s ease-in-out infinite 2.5s; z-index: 2; }
        .fc-4 { bottom: 0; right: 30px; animation: floatAnim 7s ease-in-out infinite 1s; z-index: 4; }
        
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        .live-center-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.15);
          z-index: 0;
        }
        .live-center-badge .ldot {
          width: 8px; height: 8px; border-radius: 50%;
        }

        /* Trust Bar */
        .hero-trust-bar {
          max-width: 1280px;
          width: 100%;
          margin: 80px auto 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 36px 40px;
          background: rgba(43, 43, 43, 0.5);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          backdrop-filter: blur(14px);
          z-index: 1;
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
        }
        .trust-item .tn {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1;
        }
        .trust-item .tl {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .trust-divider {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent);
        }

        /* Inline Testimonial */
        .hero-testimonial {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: rgba(26, 26, 26, 0.6);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
        }
        .hero-testimonial .ca {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 14px; flex-shrink: 0;
        }
        .ht-text { display: flex; flex-direction: column; gap: 4px; }
        .ht-text .cn { font-size: 14px; font-weight: 700; }
        .ht-text .cd { font-size: 12px; }

        /* Responsiveness */
        .mobile-visual-grid { display: none; }
        .mobile-video-area { display: none; }
        
        @media (max-width: 1024px) {
          .hero-grid-wrapper { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .hero-content-area { align-items: center; }
          .hero-content-area .sub { margin: 0 auto 40px; }
          .hero-testimonial { margin: 40px auto 0; text-align: left; }
          .hero-visual-area { height: 480px; max-width: 600px; margin: 0 auto; }
          .fc-1 { left: 0; }
          .fc-2 { right: 0; }
          .fc-3 { left: 20px; }
          .fc-4 { right: 20px; }
        }
        
        @media (max-width: 768px) {
          .hero-custom-layout { padding: 110px 20px 50px; }
          .hero-content-area h1 { font-size: 38px; }
          .hero-visual-area { display: none; } /* Hide complex floats on mobile */
          
          .mobile-video-area { display: block; margin-top: 50px; width: 100%; z-index: 1; }

          .mobile-visual-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            width: 100%;
            margin-top: 50px;
            z-index: 1;
          }
          .mobile-visual-grid .rb {
            width: 100%;
            padding: 16px;
            border-radius: 12px;
          }
          
          .hero-trust-bar {
            flex-direction: column;
            gap: 34px;
            padding: 40px 20px;
            margin-top: 50px;
            border-radius: 16px;
          }
          .trust-divider { width: 120px; height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent); }
        }
      `}</style>
      <div className="hero-trial-theme hero-custom-layout">
        <div className="hero-glow"></div>
        
        <div className="hero-grid-wrapper">
          <div className="hero-content-area">
            <div className="hero-avatar-badge">
              <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '16px' }}>✓</span>
              <div className="avatar-text">
                <strong>300+ Stores. 3 Countries. 8 Years. No Ads.</strong>
              </div>
            </div>
            <h1>Your Capital.<br/><em>Our Operation.</em><br/><span style={{fontSize: 'clamp(28px, 4vw, 48px)'}}>50% of Every Pound Earned — Yours.</span></h1>
            <p className="sub">We built 300+ stores across the UK, Australia and USA from a single eBay account. Today we partner with individuals and companies who want real eCommerce income — without touching a single order. You bring the capital. We build, run and scale everything. You collect half of every pound the stores generate, every month.</p>
            <div className="btns">
              <a href="https://wa.me/19342022517?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20call!" target="_blank" rel="noopener noreferrer" className="btn-p">Book a Strategy Call →</a>
              <a href="#portfolio" className="btn-s">See Partner Results</a>
            </div>
            
            {/* Inline testimonial removed as per new copy document */}
          </div>

          <div className="hero-visual-area">
            {/* WILL BE MOVED TO ANOTHER SECTION - COMMENTED OUT FOR NOW
            <div className="live-center-badge live">
              <span className="ldot"></span> Live Tracking
            </div>
            
            <a href="https://www.ebay.com/str/smartcartpicks" target="_blank" rel="noopener noreferrer" className="rb float-card fc-1">
              <div className="pl">eBay Store</div>
              <div className="am">$4,280</div>
              <div className="gr">↑ 22% this month</div>
              <div style={{fontSize:'11px',color:'#d4af37',marginTop:'8px',fontWeight:700,letterSpacing:'0.5px'}}>Visit Store →</div>
            </a>
            
            <a href="https://www.ebay.com/str/emilyslittleshop" target="_blank" rel="noopener noreferrer" className="rb float-card fc-2">
              <div className="pl">Amazon FBA</div>
              <div className="am">$8,560</div>
              <div className="gr">↑ 34% this month</div>
              <div style={{fontSize:'11px',color:'#d4af37',marginTop:'8px',fontWeight:700,letterSpacing:'0.5px'}}>Visit Store →</div>
            </a>
            
            <a href="https://www.tiktok.com/shop" target="_blank" rel="noopener noreferrer" className="rb float-card fc-3">
              <div className="pl">TikTok Shop</div>
              <div className="am">$6,120</div>
              <div className="gr">↑ 41% this month</div>
              <div style={{fontSize:'11px',color:'#d4af37',marginTop:'8px',fontWeight:700,letterSpacing:'0.5px'}}>Visit Store →</div>
            </a>
            
            <a href="https://www.ebay.com/str/goodsforyoustore" target="_blank" rel="noopener noreferrer" className="rb float-card fc-4">
              <div className="pl">Walmart</div>
              <div className="am">$11,300</div>
              <div className="gr">↑ 28% this month</div>
              <div style={{fontSize:'11px',color:'#d4af37',marginTop:'8px',fontWeight:700,letterSpacing:'0.5px'}}>Visit Store →</div>
            </a>
            */}

            {/* CLIENT YOUTUBE VIDEO PLACEHOLDER */}
            <div style={{
              width: '100%', 
              height: '100%', 
              background: '#1a1a1a', 
              border: '1px solid rgba(212, 175, 55, 0.3)', 
              borderRadius: '24px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(212, 175, 55, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
              }}>
                <span style={{ color: '#1e1e1e', fontSize: '32px', marginLeft: '6px' }}>▶</span>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(0,0,0,0.7)',
                padding: '8px 16px',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                Watch: How the Partnership Works
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Alternative Visuals */}
        {/* WILL BE MOVED TO ANOTHER SECTION - COMMENTED OUT FOR NOW
        <div className="mobile-visual-grid">
           <a href="https://www.ebay.com/str/emilyslittleshop" target="_blank" rel="noopener noreferrer" className="rb">
              <div className="pl">Amazon FBA</div>
              <div className="am">$8,560</div>
              <div className="gr">↑ 34%</div>
            </a>
            <a href="https://www.ebay.com/str/goodsforyoustore" target="_blank" rel="noopener noreferrer" className="rb">
              <div className="pl">Walmart</div>
              <div className="am">$11,300</div>
              <div className="gr">↑ 28%</div>
            </a>
            <a href="https://www.tiktok.com/shop" target="_blank" rel="noopener noreferrer" className="rb">
              <div className="pl">TikTok Shop</div>
              <div className="am">$6,120</div>
              <div className="gr">↑ 41%</div>
            </a>
            <a href="https://www.ebay.com/str/smartcartpicks" target="_blank" rel="noopener noreferrer" className="rb">
              <div className="pl">eBay Store</div>
              <div className="am">$4,280</div>
              <div className="gr">↑ 22%</div>
            </a>
        </div>
        */}
        
        <div className="mobile-video-area">
           {/* Mobile YouTube Video Placeholder */}
           <div style={{
              width: '100%', 
              height: '280px', 
              background: '#1a1a1a', 
              border: '1px solid rgba(212, 175, 55, 0.3)', 
              borderRadius: '16px', 
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(212, 175, 55, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
              }}>
                <span style={{ color: '#1e1e1e', fontSize: '24px', marginLeft: '4px' }}>▶</span>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: 'rgba(0,0,0,0.7)',
                padding: '6px 12px',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 600,
                fontSize: '12px'
              }}>
                Watch: How the Partnership Works
              </div>
            </div>
        </div>

        <div className="hero-trust-bar">
          <div className="trust-item">
            <span className="tn">300+</span>
            <span className="tl">Active Stores</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="tn">£100M+</span>
            <span className="tl">Sold</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="tn">200+</span>
            <span className="tl" style={{maxWidth: '120px', lineHeight: '1.2'}}>Partners Earning Monthly</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="tn">8 Years</span>
            <span className="tl">Zero Ads.</span>
          </div>
        </div>
      </div>
    </>
  );
}
