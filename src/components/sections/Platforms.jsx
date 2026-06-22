import React, { useRef, useState } from "react";

const platformsData = [
  {
    id: 'fba',
    specialty: 'Amazon Specialists',
    brand: 'FBA Genius',
    desc: '100% Done For You FBA Stores. $3K–$10K/m Hands-Free. No Results, No Money.',
    statVal: '500+',
    statLabel: 'Successful Case Studies',
    link: '#fba',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    id: 'momentum',
    specialty: 'eBay Specialists',
    brand: 'Momentum Makers',
    desc: 'Helped 250+ People Build Real 2nd Income Streams. Real eCommerce Business Models.',
    statVal: '250+',
    statLabel: 'People Building 2nd Income',
    link: '#momentum',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg'
  },
  {
    id: 'walmart',
    specialty: 'Walmart Specialists',
    brand: 'Walmart Elite Club',
    desc: 'Guaranteed $1M Store in 18–24 Months with 30–35% Consistent ROI.',
    statVal: '$1M+',
    statLabel: 'Store Value Built',
    link: '#walmart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg'
  },
  {
    id: 'etsy',
    specialty: 'Etsy Specialists',
    brand: 'Etsy Success Partners',
    desc: 'Scaling Etsy with Profitable Automations. 40–90% ROI for 100+ Investors Monthly.',
    statVal: '90%',
    statLabel: 'ROI Generated',
    link: '#etsy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg'
  },
  {
    id: 'tiktok',
    specialty: 'TikTok Specialists',
    brand: 'TikShopz Automations',
    desc: '300+ Satisfied Clients. 100% Success Ratio. $5K–$10K/m Passive Income.',
    statVal: '300+',
    statLabel: 'Satisfied Clients',
    link: '#tiktok',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg'
  },
  {
    id: 'bayboost',
    specialty: 'eBay Specialists',
    brand: 'BayBoost Agency',
    desc: '$3K–$5K/m Net Profit Without Marketing Costs. 250+ Profitable Stores Built.',
    statVal: '250+',
    statLabel: 'Profitable Stores Built',
    link: '#ebay',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg'
  },
  {
    id: 'rapidrack',
    specialty: '3PL & Fulfillment',
    brand: 'Rapid Rack Logistics',
    desc: 'The 3PL Built for Sellers by Sellers. Cut Costs 30%, 2X Delivery Speed.',
    statVal: '30%',
    statLabel: 'Cost Reduction Guaranteed',
    link: '#rapidrack',
    logoText: '🚚'
  }
];

// Reusable 3D Tilt Card Component
const TiltCard = ({ item }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-10deg to 10deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      boxShadow: `${(centerX - x) / 10}px ${(centerY - y) / 10 + 20}px 30px rgba(212, 175, 55, 0.2)`
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    });
  };

  return (
    <a 
      href={item.link} 
      className="holo-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {/* Massive Watermark */}
      <div className="watermark">
        {item.logo ? (
          <img src={item.logo} alt="logo watermark" />
        ) : (
          <span>{item.logoText}</span>
        )}
      </div>

      <div className="hc-content">
        <div className="hc-top">
          <span className="hc-specialty">{item.specialty}</span>
          <span className="hc-arrow">↗</span>
        </div>
        <h3 className="hc-brand">{item.brand}</h3>
        <p className="hc-desc">{item.desc}</p>
        
        <div className="hc-footer">
          <div className="hc-stat-val">{item.statVal}</div>
          <div className="hc-stat-label">{item.statLabel}</div>
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
          position: relative;
          background: rgba(26, 26, 26, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px 32px;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: transform 0.1s ease-out, box-shadow 0.1s ease-out, border 0.3s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
          min-height: 380px;
          transform-style: preserve-3d;
        }

        .holo-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
        }

        /* The Watermark Logo */
        .watermark {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) translateZ(-50px);
          width: 80%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.03; /* Extremely subtle */
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.3s;
        }

        .watermark img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .watermark span {
          font-size: 180px;
          opacity: 0.5;
        }

        .holo-card:hover .watermark {
          opacity: 0.1; /* Glows up on hover */
        }

        /* Card Content (Raised in 3D) */
        .hc-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
          transform: translateZ(30px); /* Lifts content above background */
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
          .holo-card { min-height: auto; padding: 32px 24px; transform: none !important; box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important; }
          .hc-content { transform: none; }
          .watermark { transform: translate(-50%, -50%); }
        }
      `}</style>

      <section id="brands" className="platforms-holographic">
        <div className="visual-breaker"></div>
        <div className="si-plat">
          <div className="sl">Choose Your Empire</div>
          <h2 className="sh">7 Expert Teams, Each Laser-Focused<br/>on One Platform</h2>
          <p className="ss">Every brand is a dedicated team of specialists — not generalists. We build, scale, and automate your chosen marketplace.</p>
          
          <div className="holo-grid">
            {platformsData.map((item, index) => (
              <TiltCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}