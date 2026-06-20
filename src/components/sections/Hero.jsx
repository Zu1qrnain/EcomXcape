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
              <div className="avatar-group">
                <div className="avatar-pic" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=11)', zIndex: 5}}></div>
                <div className="avatar-pic" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=32)', zIndex: 4}}></div>
                <div className="avatar-pic" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=44)', zIndex: 3}}></div>
                <div className="avatar-pic" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=60)', zIndex: 2}}></div>
                <div className="avatar-more">+500</div>
              </div>
              <div className="avatar-text">
                Trusted by <strong>successful store owners</strong>
              </div>
            </div>
            <h1>We Run Your Store.<br/><em>You Keep</em> the Profits.</h1>
            <p className="sub">500+ clients earning $3,000–$10,000/month passively since 2019. We handle everything — product research, listings, orders, and customer service — 100% done for you.</p>
            <div className="btns">
              <a href="https://wa.me/19342022517?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20call!" target="_blank" rel="noreferrer" className="btn-p">💬 Book a Free Strategy Call</a>
              <a href="#portfolio" className="btn-s">📊 See Client Results</a>
            </div>
            
            <div className="hero-testimonial">
              <div className="ca">MR</div>
              <div className="ht-text">
                <span className="cn">Michael R. — Texas</span>
                <span className="cd">eBay Client · Earning <span className="cp">$4,200/m</span> Since Jan 2024</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-area">
            {/* WILL BE MOVED TO ANOTHER SECTION - COMMENTED OUT FOR NOW
            <div className="live-center-badge live">
              <span className="ldot"></span> Live Tracking
            </div>
            
            <a href="https://www.ebay.com/str/smartcartpicks" target="_blank" rel="noreferrer" className="rb float-card fc-1">
              <div className="pl">eBay Store</div>
              <div className="am">$4,280</div>
              <div className="gr">↑ 22% this month</div>
              <div style={{fontSize:'11px',color:'#d4af37',marginTop:'8px',fontWeight:700,letterSpacing:'0.5px'}}>Visit Store →</div>
            </a>
            
            <a href="https://www.ebay.com/str/emilyslittleshop" target="_blank" rel="noreferrer" className="rb float-card fc-2">
              <div className="pl">Amazon FBA</div>
              <div className="am">$8,560</div>
              <div className="gr">↑ 34% this month</div>
              <div style={{fontSize:'11px',color:'#d4af37',marginTop:'8px',fontWeight:700,letterSpacing:'0.5px'}}>Visit Store →</div>
            </a>
            
            <a href="https://www.tiktok.com/shop" target="_blank" rel="noreferrer" className="rb float-card fc-3">
              <div className="pl">TikTok Shop</div>
              <div className="am">$6,120</div>
              <div className="gr">↑ 41% this month</div>
              <div style={{fontSize:'11px',color:'#d4af37',marginTop:'8px',fontWeight:700,letterSpacing:'0.5px'}}>Visit Store →</div>
            </a>
            
            <a href="https://www.ebay.com/str/goodsforyoustore" target="_blank" rel="noreferrer" className="rb float-card fc-4">
              <div className="pl">Walmart</div>
              <div className="am">$11,300</div>
              <div className="gr">↑ 28% this month</div>
              <div style={{fontSize:'11px',color:'#d4af37',marginTop:'8px',fontWeight:700,letterSpacing:'0.5px'}}>Visit Store →</div>
            </a>
            */}

            {/* CLIENT YOUTUBE VIDEO */}
            <div style={{
              width: '100%', 
              height: '100%', 
              background: 'rgba(26, 26, 26, 0.6)', 
              border: '1px solid rgba(212, 175, 55, 0.3)', 
              borderRadius: '24px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              position: 'relative',
              overflow: 'hidden',
              pointerEvents: 'none' /* Prevents clicking on the video to pause it */
            }}>
              <iframe 
                src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_HERE?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=YOUTUBE_VIDEO_ID_HERE&rel=0&showinfo=0" 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '150%', /* Oversize to hide borders and YouTube logo */
                  height: '150%',
                  transform: 'translate(-50%, -50%)',
                  border: 'none',
                  pointerEvents: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Client Video"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Mobile Alternative Visuals */}
        {/* WILL BE MOVED TO ANOTHER SECTION - COMMENTED OUT FOR NOW
        <div className="mobile-visual-grid">
           <a href="https://www.ebay.com/str/emilyslittleshop" target="_blank" rel="noreferrer" className="rb">
              <div className="pl">Amazon FBA</div>
              <div className="am">$8,560</div>
              <div className="gr">↑ 34%</div>
            </a>
            <a href="https://www.ebay.com/str/goodsforyoustore" target="_blank" rel="noreferrer" className="rb">
              <div className="pl">Walmart</div>
              <div className="am">$11,300</div>
              <div className="gr">↑ 28%</div>
            </a>
            <a href="https://www.tiktok.com/shop" target="_blank" rel="noreferrer" className="rb">
              <div className="pl">TikTok Shop</div>
              <div className="am">$6,120</div>
              <div className="gr">↑ 41%</div>
            </a>
            <a href="https://www.ebay.com/str/smartcartpicks" target="_blank" rel="noreferrer" className="rb">
              <div className="pl">eBay Store</div>
              <div className="am">$4,280</div>
              <div className="gr">↑ 22%</div>
            </a>
        </div>
        */}
        
        <div className="mobile-video-area">
           {/* Mobile YouTube Video */}
           <div style={{
              width: '100%', 
              height: '280px', 
              background: 'rgba(26, 26, 26, 0.6)', 
              border: '1px solid rgba(212, 175, 55, 0.3)', 
              borderRadius: '16px', 
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              pointerEvents: 'none'
            }}>
              <iframe 
                src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_HERE?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=YOUTUBE_VIDEO_ID_HERE&rel=0&showinfo=0" 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '150%',
                  height: '150%',
                  transform: 'translate(-50%, -50%)',
                  border: 'none',
                  pointerEvents: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Client Mobile Video"
              ></iframe>
            </div>
        </div>

        <div className="hero-trust-bar">
          <div className="trust-item">
            <span className="tn">500+</span>
            <span className="tl">Happy Clients</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="tn">$100K</span>
            <span className="tl">Max Monthly</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="tn">98%</span>
            <span className="tl">Success Rate</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="tn">2019</span>
            <span className="tl">Established</span>
          </div>
        </div>
      </div>
    </>
  );
}
