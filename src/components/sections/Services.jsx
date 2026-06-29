import React, { useState } from "react";

const servicesData = [
  {
    id: 'ebay',
    title: 'eBay Store',
    highlight: 'Where every partnership starts. Dropshipping at scale — product research, listings, orders, customer service. All of it.',
    desc: 'Your store goes live within weeks of partnership confirmation. We handle sourcing, listing optimisation, order processing and customer service across UK, US and Australian marketplaces. A typical eBay store reaches £5K+ monthly revenue by Q3.',
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" alt="eBay" />,
    link: '#roi'
  },
  {
    id: 'amazon',
    title: 'Amazon FBA',
    highlight: 'Wholesale FBA built and managed from the ground up. 15–20% quarterly ROI on your working capital.',
    desc: 'Full FBA setup — supplier sourcing, product preparation, shipment creation, listing management, and ongoing PPC optimisation. ROI of 15–20% per quarter on your working capital deployment.',
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />,
    link: '#roi'
  },
  {
    id: 'etsy',
    title: 'Etsy Store',
    highlight: 'High-margin product categories, keyword-optimised listings, full order management. 30–50% quarterly ROI.',
    desc: 'Product research, listing creation with full SEO optimisation, order and review management. Etsy\'s handmade and vintage categories consistently deliver 30–50% quarterly ROI for our partners.',
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg" alt="Etsy" />,
    link: '#roi'
  },
  {
    id: 'tiktok',
    title: 'TikTok Shop',
    highlight: 'Built from scratch — products, content strategy, orders. Fast-growing channel. 20–30% quarterly ROI.',
    desc: 'Account setup, product strategy, creator content coordination and order fulfilment. TikTok Shop is the fastest-growing eCommerce channel in the UK and US right now.',
    icon: <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" />,
    link: '#roi'
  },
  {
    id: 'onbuy',
    title: 'OnBuy',
    highlight: 'The UK\'s fastest-growing marketplace. Early mover advantage. 20–30% quarterly ROI.',
    desc: 'Full store setup and management on the UK\'s fastest-growing marketplace. OnBuy\'s lower seller competition means faster momentum for new stores.',
    icon: <div style={{ fontSize: '32px', fontWeight: '800', color: '#ffffff' }}>O</div>,
    link: '#roi'
  },
  {
    id: 'walmart',
    title: 'Walmart',
    highlight: 'Wholesale WFS for partners with established eBay history. 20–30% quarterly ROI. Requires approval — 3 months.',
    desc: 'Wholesale WFS requires 100+ eBay feedback ratings, a proven store history, and an aged company registration. Approval takes approximately 3 months — we handle the entire process.',
    icon: <svg viewBox="0 0 100 100" fill="currentColor" style={{ height: '36px', width: '36px', color: '#ffffff' }}>
            <path d="M49.2 11.2v17c0 1.2.9 2.1 2 2.1 1.1 0 2-.9 2-2.1v-17c0-1.2-.9-2.1-2-2.1-1.1 0-2 .9-2 2.1zM73.5 21.2c-.9-.7-2.3-.6-3.1.2l-12.1 12c-.8.8-.8 2.2 0 3 .8.8 2.2.8 3 0l12-12c.9-.9.9-2.3.2-3.2zM86.8 45H69.7c-1.2 0-2.1.9-2.1 2 0 1.1-.9 2 2.1 2h17.1c1.2 0 2.1-.9 2.1-2 0-1.1-.9-2-2.1-2zM73.5 73c.8-.8 2.3-.9 3.1-.2.8.7.9 2.1.2 3l-12.1 12c-.8.8-2.2.9-3 .2-.8-.7-.9-2.1-.2-3l12-12zM49.2 86.8v-17c0-1.2.9-2.1 2-2.1 1.1 0 2 .9 2 2.1v17c0 1.2-.9 2.1-2 2.1-1.1 0-2-.9-2-2.1zM26.5 73c-.8-.8-2.3-.9-3.1-.2-.8.7-.9 2.1-.2 3l12.1 12c.8.8 2.2.9 3 .2.8-.7.9-2.1.2-3l-12-12zM13.2 45h17.1c1.2 0 2.1.9 2.1 2 0 1.1-.9 2-2.1 2H13.2C12 49 11 48.1 11 47c0-1.1.9-2 2.2-2zM26.5 21.2c.8-.7 2.3-.6 3.1.2l12.1 12c.8.8.8 2.2 0 3-.8.8-2.2.8-3 0l-12.2-12c-.8-.9-.8-2.3 0-3.2z"/>
          </svg>,
    link: '#roi'
  }
];

export default function Services() { 
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <>
      <style>{`
        .services-ultra-premium {
          background-color: #1e1e1e; /* Matches Hero */
          color: #e0e0e0;
          position: relative;
          padding-bottom: 120px;
        }

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
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .services-ultra-premium .ss {
          font-size: 16px;
          color: #b0b0b0;
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 60px;
        }

        /* Interactive Split Layout */
        .interactive-wrapper {
          display: flex;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Left Side: Menu */
        .interactive-sidebar {
          flex: 0 0 35%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .si-tab {
          padding: 20px 24px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 700;
          color: #888;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
          position: relative;
        }

        .si-tab:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.03);
        }

        .si-tab.active {
          color: #ffffff;
          background: rgba(26,26,26,0.6);
          border-left: 3px solid #d4af37;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .si-tab.active::after {
          content: '→';
          position: absolute;
          right: 24px;
          color: #d4af37;
          font-size: 20px;
          opacity: 0;
          transform: translateX(-10px);
          animation: slideInArrow 0.4s forwards;
        }

        @keyframes slideInArrow {
          to { opacity: 1; transform: translateX(0); }
        }

        /* Right Side: Spotlight Window */
        .interactive-spotlight {
          flex: 1;
          background: rgba(26, 26, 26, 0.6);
          border-radius: 24px;
          padding: 60px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          border: 1px solid rgba(212, 175, 55, 0.3);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 400px;
          backdrop-filter: blur(12px);
        }

        .interactive-spotlight::before {
          content: '';
          position: absolute;
          top: -50%; right: -50%;
          width: 100%; height: 100%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Fade Animation Container */
        .spotlight-content {
          animation: fadeInScale 0.4s ease-out;
          position: relative;
          z-index: 2;
        }

        @keyframes fadeInScale {
          0% { opacity: 0; transform: translateY(10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .spotlight-icon {
          width: 80px;
          height: 80px;
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          margin-bottom: 32px;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
        }

        .spotlight-icon img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1); /* Makes logos white */
        }

        .spotlight-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .spotlight-desc {
          font-size: 18px;
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 90%;
        }

        .spotlight-highlight {
          display: inline-block;
          padding: 12px 20px;
          background: rgba(212, 175, 55, 0.1);
          color: #a07820;
          font-weight: 700;
          border-radius: 8px;
          margin-bottom: 40px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .spotlight-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          background: #d4af37;
          color: #1e1e1e;
          font-weight: 700;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .spotlight-btn:hover {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
        }

        /* Mobile Accordion Styles */
        .mobile-accordion {
          display: none;
          flex-direction: column;
          gap: 16px;
        }

        .acc-item {
          background: rgba(26,26,26,0.6);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
        }

        .acc-header {
          padding: 20px;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .acc-header .acc-icon {
          color: #d4af37;
          font-size: 24px;
          transition: transform 0.3s;
        }

        .acc-item.open .acc-icon {
          transform: rotate(45deg);
        }

        .acc-item.open {
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);
        }

        .acc-body {
          padding: 0 20px 24px 20px;
          display: none;
        }
        
        .acc-item.open .acc-body {
          display: block;
          animation: fadeIn 0.3s;
        }

        .acc-body p {
          color: #ccc;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .acc-body .spotlight-highlight {
          font-size: 14px;
          padding: 8px 12px;
          margin-bottom: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 992px) {
          .interactive-wrapper { display: none; }
          .mobile-accordion { display: flex; }
        }
      `}</style>
      <section id="services" className="services-ultra-premium">
        <div className="si">
          <div className="sl">WHAT WE DO</div>
          <h2 className="sh">One Partnership. Six Income Streams.</h2>
          <p className="ss">We start every partnership on eBay — the most forgiving platform to build reputation fast. Then we expand across Amazon, Etsy, TikTok Shop, OnBuy and Walmart as your store portfolio scales. Each platform is an additional income stream. Each is run entirely by our team.</p>
          
          {/* DESKTOP / TABLET: Interactive Split Layout */}
          <div className="interactive-wrapper">
            <div className="interactive-sidebar">
              {servicesData.map((service, index) => (
                <div 
                  key={service.id}
                  className={`si-tab ${activeIndex === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  {service.title}
                </div>
              ))}
            </div>
            
            <div className="interactive-spotlight">
              <div className="spotlight-content" key={activeIndex}> {/* key forces re-mount for animation */}
                <div className="spotlight-icon">
                  {activeService.icon}
                </div>
                <h3 className="spotlight-title">{activeService.title}</h3>
                <p className="spotlight-desc">{activeService.desc}</p>
                <div className="spotlight-highlight">{activeService.highlight}</div>
                <br/>
                <a href={activeService.link} className="spotlight-btn">Calculate Your Partnership Returns →</a>
              </div>
            </div>
          </div>

          {/* MOBILE: Accordion Layout */}
          <div className="mobile-accordion">
            {servicesData.map((service, index) => (
              <div key={service.id} className={`acc-item ${activeIndex === index ? 'open' : ''}`}>
                <div className="acc-header" onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}>
                  {service.title}
                  <span className="acc-icon">+</span>
                </div>
                <div className="acc-body">
                  <p>{service.desc}</p>
                  <div className="spotlight-highlight">{service.highlight}</div>
                  <br/>
                  <a href={service.link} className="spotlight-btn" style={{ padding: '12px 24px', fontSize: '14px' }}>Calculate Your Partnership Returns →</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  ); 
}