import React from "react";

const companiesData = [
  {
    tag: 'ECOMMERCE PARTNERSHIP',
    name: 'ecomXcape',
    tagline: 'Your eCom Partner. Your Financial Freedom.',
    body: 'Full-service eCommerce partnership agency. We build, run and scale stores across six platforms. You invest, we operate, you collect 50% of net profit every month. 300+ active stores. 200+ partners. 8 years. No ads.',
    stat: '300+ Active Stores',
    ctaText: 'See How It Works →',
    link: '#process'
  },
  {
    tag: 'ECOMMERCE SAAS',
    name: 'Autopilot DS',
    tagline: 'Built by Dropshippers. Perfected for Scale.',
    body: 'We built Autopilot DS because ecomXcape outgrew every tool available. At 50 stores, manual operations were killing us — one person could barely manage 2 stores. After Autopilot DS, one person runs 5. The software that runs our own operation is now available to other operators.',
    stat: 'Beta Waitlist Open',
    ctaText: 'Join the Waitlist →',
    link: '#contact'
  },
  {
    tag: 'BUSINESS COMMUNICATION',
    name: 'Bridgrr',
    tagline: 'The comms layer nobody built. Until now.',
    body: 'WhatsApp groups were costing us clients. Team members could see client numbers. Side deals were happening. Bridgrr creates a communication layer between your team and your clients — no visible contact details, no poaching, full conversation visibility for the owner. Built to solve a real problem.',
    stat: 'MVP Complete — Founding Pricing Available',
    ctaText: 'Learn More →',
    link: '#contact'
  }
];

// Clean Card Component
const CleanCard = ({ item }) => {
  return (
    <a 
      href={item.link} 
      className="holo-card"
    >
      <div className="hc-content">
        <div className="hc-top">
          <span className="hc-specialty">{item.tag}</span>
          <span className="hc-arrow">↗</span>
        </div>
        <h3 className="hc-brand">{item.name}</h3>
        <h4 style={{ color: '#d4af37', fontSize: '18px', marginBottom: '16px', fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>{item.tagline}</h4>
        <p className="hc-desc">{item.body}</p>
        
        <div className="hc-footer" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="hc-stat-label" style={{ color: '#ffffff', fontWeight: 700, fontSize: '16px' }}>{item.stat}</div>
          <div style={{ color: '#d4af37', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.ctaText}</div>
        </div>
      </div>
    </a>
  );
};

export default function Platforms() {
  return (
    <>
      <style>{`
        .platforms-holographic {
          background-color: #121212; /* Extremely dark for max contrast */
          color: #e0e0e0;
          padding: 140px 40px;
          position: relative;
          overflow: hidden;
        }

        /* The Visual Breaker Line from Services to Platforms */
        .visual-breaker {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
          opacity: 0.5;
        }

        /* Background glow effect */
        .platforms-holographic::before {
          content: '';
          position: absolute;
          top: 20%; left: 50%;
          width: 80%; height: 60%;
          transform: translateX(-50%);
          background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .si-plat {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .platforms-holographic .sl {
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
        
        .platforms-holographic .sl::before {
          content: '';
          width: 30px;
          height: 2px;
          background: #d4af37;
        }

        .platforms-holographic .sh {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .platforms-holographic .ss {
          font-size: 18px;
          color: #a0a0a0;
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 70px;
        }

        /* Holographic Grid Layout */
        .holo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        /* The Card */
        .holo-card {
          background: rgba(26, 26, 26, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px 32px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          min-height: 380px;
        }

        .holo-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(212, 175, 55, 0.1);
        }

        /* Card Content */
        .hc-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .hc-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .hc-specialty {
          font-size: 12px;
          font-weight: 700;
          color: #d4af37;
          text-transform: uppercase;
          letter-spacing: 2px;
          background: rgba(212, 175, 55, 0.1);
          padding: 6px 14px;
          border-radius: 100px;
        }

        .hc-arrow {
          color: #888;
          font-size: 20px;
          transition: color 0.3s;
        }

        .holo-card:hover .hc-arrow {
          color: #d4af37;
        }

        .hc-brand {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .hc-desc {
          font-size: 16px;
          color: #b0b0b0;
          line-height: 1.6;
          flex-grow: 1;
        }

        .hc-footer {
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .hc-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 8px;
        }

        .holo-card:hover .hc-stat-val {
          color: #d4af37;
        }

        .hc-stat-label {
          font-size: 14px;
          font-weight: 600;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .platforms-holographic { padding: 80px 20px; }
          .holo-grid { grid-template-columns: 1fr; gap: 24px; }
          .holo-card { min-height: auto; padding: 32px 24px; }
        }
      `}</style>

      <section id="brands" className="platforms-holographic">
        <div className="visual-breaker"></div>
        <div className="si-plat">
          <div className="sl">THE ECOSYSTEM</div>
          <h2 className="sh">Three Companies. One Operator.</h2>
          <p className="ss">Every company in this ecosystem was built because GM ran into a problem nobody had solved. Not because of a market opportunity. Because of operational pain.</p>
          
          <div className="holo-grid">
            {companiesData.map((item, index) => (
              <CleanCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}