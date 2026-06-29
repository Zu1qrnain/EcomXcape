import React, { useState } from "react";

const processSteps = [
  {
    id: '01',
    title: 'We Talk',
    desc: 'Book a strategy call. We understand your situation — capital available, how many accounts, which platforms interest you. No pressure. No pitch. We tell you what the numbers look like for your specific setup.'
  },
  {
    id: '02',
    title: 'We Build',
    desc: 'Our 40-person team sets up your store infrastructure — accounts, listings, supplier relationships, automation. eBay goes live first. Additional platforms are activated as your portfolio grows.'
  },
  {
    id: '03',
    title: 'Stores Go Live',
    desc: 'Orders start coming in within the first week on eBay. Our team handles every order, every customer message, every return. You receive weekly performance reports. You never touch operations.'
  },
  {
    id: '04',
    title: 'You Collect 50%',
    desc: 'Every month, you receive 50% of net profit across every active store. As platforms are added and stores mature, that number compounds. Most partners are across 3+ platforms by the end of year one.'
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the height of the glowing line based on active index
  // 0 -> 0%, 1 -> 33%, 2 -> 66%, 3 -> 100%
  const lineProgress = activeIndex * (100 / (processSteps.length - 1));

  return (
    <>
      <style>{`
        .process-pipeline {
          background-color: #1e1e1e; /* Match Dark premium theme */
          color: #e0e0e0;
          padding: 140px 40px;
          position: relative;
        }

        .process-pipeline .si {
          max-width: 900px;
          margin: 0 auto;
        }

        .process-pipeline .sl {
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
        
        .process-pipeline .sl::before {
          content: '';
          width: 30px;
          height: 2px;
          background: #d4af37;
        }

        .process-pipeline .sh {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .process-pipeline .ss {
          font-size: 18px;
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 80px;
        }

        /* The Pipeline Structure */
        .pipeline-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 60px;
          padding-left: 60px; /* Space for the track */
        }

        /* The Background Dim Track */
        .pipeline-track-bg {
          position: absolute;
          top: 0; 
          left: 15px; /* Center of the 30px node */
          width: 2px;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          z-index: 1;
        }

        /* The Glowing Gold Track */
        .pipeline-track-fill {
          position: absolute;
          top: 0; 
          left: 15px;
          width: 2px;
          background: linear-gradient(to bottom, #d4af37, #f3da7e);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
          z-index: 2;
          transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Individual Step Node */
        .pipeline-step {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 12px;
          opacity: 0.5;
          transform: translateX(0);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .pipeline-step.active {
          opacity: 1;
          transform: translateX(10px);
        }

        /* The Marker Dot on the Track */
        .pipeline-marker {
          position: absolute;
          top: 0;
          left: -60px; /* Pull it back over the track */
          width: 32px;
          height: 32px;
          background: #1e1e1e;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }

        .pipeline-step.active .pipeline-marker,
        .pipeline-step.passed .pipeline-marker {
          border-color: #d4af37;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }

        /* The Inner Glow Dot */
        .pipeline-marker::after {
          content: '';
          width: 10px;
          height: 10px;
          background: #d4af37;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s ease;
        }

        .pipeline-step.active .pipeline-marker::after,
        .pipeline-step.passed .pipeline-marker::after {
          opacity: 1;
          transform: scale(1);
        }

        /* Typography */
        .step-id {
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          font-weight: 800;
          color: rgba(255,255,255,0.05);
          line-height: 0.8;
          position: absolute;
          top: -20px;
          left: 0;
          z-index: 0;
          transition: color 0.4s ease;
        }

        .pipeline-step.active .step-id {
          color: rgba(212, 175, 55, 0.15);
        }

        .step-content {
          position: relative;
          z-index: 1;
          padding-top: 10px;
        }

        .step-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .step-desc {
          font-size: 17px;
          color: #a0a0a0;
          line-height: 1.6;
          max-width: 500px;
        }

        /* The Final CTA Connector */
        .pipeline-cta-wrapper {
          margin-top: 80px;
          padding-left: 60px;
          position: relative;
        }

        .cta-connector {
          position: absolute;
          top: -80px;
          left: 15px;
          width: 2px;
          height: 120px;
          background: linear-gradient(to bottom, #d4af37, transparent);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        /* Show the connector only when the last step is active */
        .pipeline-cta-wrapper.ready .cta-connector {
          opacity: 1;
        }

        .btn-pipeline {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #d4af37, #e5c458);
          color: #1e1e1e;
          font-size: 16px;
          font-weight: 800;
          padding: 20px 40px;
          border-radius: 100px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          transition: all 0.3s;
        }

        .btn-pipeline:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 768px) {
          .process-pipeline { padding: 80px 20px; }
          .pipeline-container { padding-left: 40px; gap: 40px; }
          .pipeline-track-bg, .pipeline-track-fill { left: 15px; }
          .pipeline-marker { left: -40px; width: 24px; height: 24px; }
          .step-id { font-size: 48px; left: 10px; }
          .pipeline-cta-wrapper { padding-left: 0; text-align: center; margin-top: 60px; }
          .cta-connector { display: none; }
        }
      `}</style>

      <section id="process" className="process-pipeline">
        <div className="si">
          <div className="sl">HOW IT WORKS</div>
          <h2 className="sh">From First Call to First Payment.</h2>
          <p className="ss">The model is straightforward. Most agencies complicate it deliberately. We don't.</p>
          
          <div className="pipeline-container" onMouseLeave={() => setActiveIndex(0)}>
            {/* The Tracks */}
            <div className="pipeline-track-bg"></div>
            <div className="pipeline-track-fill" style={{ height: `${lineProgress}%` }}></div>

            {processSteps.map((step, index) => {
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;

              return (
                <div 
                  key={step.id} 
                  className={`pipeline-step ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="pipeline-marker"></div>
                  <div className="step-id">{step.id}</div>
                  
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`pipeline-cta-wrapper ${activeIndex === processSteps.length - 1 ? 'ready' : ''}`}>
            <div className="cta-connector"></div>
            <a href="#qualify" className="btn-pipeline">
              <span>Book a Strategy Call</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}