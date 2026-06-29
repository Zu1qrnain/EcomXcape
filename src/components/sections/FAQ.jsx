import React, { useState } from "react";

const faqData = [
  {
    question: "How do I know this isn't a scam?",
    answer: "We have been operating since 2018. We have 300+ active stores generating real revenue right now. We show you live eBay Seller Hub screenshots from active stores before you sign anything — not projections, not mock-ups, real dashboards. Our profit-share model means we earn nothing until your stores earn. Book a call and we will show you the proof before you make any decision."
  },
  {
    question: "How does the profit split work?",
    answer: "Simple. We take 50% of net profit across all your stores, every month. Net profit is revenue minus platform fees, supplier costs and operating expenses. There are no setup fees, no monthly retainers, and no hidden charges. You see the full breakdown in your weekly performance report."
  },
  {
    question: "How long before my stores start generating revenue?",
    answer: "Most eBay stores receive their first orders within 7 days of going live. Revenue builds over the first quarter as we scale winning products and the account builds reputation. By Q3, a typical eBay store is generating £3,000–£5,000 monthly revenue. The exact timeline depends on your specific account history and market conditions — we give you a realistic projection on the strategy call."
  },
  {
    question: "What do I actually have to do?",
    answer: "Very little. You need an account on the platform, your initial capital, and 30 minutes a week to review your performance report. Everything else — sourcing, listings, orders, customer service, scaling — is handled entirely by our team. Some partners go weeks without thinking about their stores."
  },
  {
    question: "What is the B2B company partnership model?",
    answer: "If you are a company CEO, your employees already have personal eBay accounts. Each of those accounts becomes a store. You make the investment. Our team builds, runs and scales every store. You collect 50% of net profit from the entire portfolio every month. The minimum is 5 employee accounts. There is no maximum. Some of our B2B partners have 30+ stores running simultaneously from day one."
  },
  {
    question: "Do I need any eCommerce experience?",
    answer: "Zero. We have partners who had never logged into eBay before their first call with us. The entire operation is run by our team. Your only job is to review your weekly report and collect your monthly payment."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <style>{`
        .faq-dashboard {
          background-color: #1e1e1e;
          color: #e0e0e0;
          padding: 140px 40px;
          position: relative;
        }

        .faq-dashboard .si {
          max-width: 1200px;
          margin: 0 auto;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
        }

        /* Sticky Left Column */
        .faq-left {
          position: sticky;
          top: 140px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .faq-dashboard .sl {
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .faq-dashboard .sl::before {
          content: '';
          width: 30px;
          height: 2px;
          background: #d4af37;
        }

        .faq-dashboard .sh {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 4vw, 56px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .faq-dashboard .ss {
          font-size: 18px;
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Glassmorphic Contact Card */
        .faq-contact-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2), inset 0 0 20px rgba(212, 175, 55, 0.05);
        }

        .faq-contact-text {
          font-size: 16px;
          color: #cccccc;
          line-height: 1.5;
        }

        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25D366; /* WhatsApp Green */
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 24px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);
        }

        .btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
        }

        /* Right Column - Accordions */
        .faq-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-accordion {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.7; /* Dimmed by default */
        }

        .faq-accordion:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(212, 175, 55, 0.2);
        }

        .faq-accordion.active {
          opacity: 1;
          background: rgba(255, 255, 255, 0.05);
          border-color: #d4af37;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(212, 175, 55, 0.15);
        }

        .faq-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #d4af37;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
          margin-left: 20px;
        }

        .faq-accordion.active .faq-icon {
          background: #d4af37;
          color: #1e1e1e;
          transform: rotate(45deg); /* Spin to form an X */
        }

        .faq-body-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-accordion.active .faq-body-wrapper {
          grid-template-rows: 1fr;
        }

        .faq-body-inner {
          overflow: hidden;
        }

        .faq-body-content {
          padding: 0 32px 32px 32px;
          font-size: 16px;
          color: #a0a0a0;
          line-height: 1.7;
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
          .faq-dashboard { padding: 80px 20px; }
          .faq-grid { grid-template-columns: 1fr; gap: 50px; }
          .faq-left { position: relative; top: 0; }
          .faq-header { padding: 24px; font-size: 18px; }
          .faq-body-content { padding: 0 24px 24px 24px; }
        }
      `}</style>

      <section id="faq" className="faq-dashboard">
        <div className="si">
          <div className="faq-grid">
            
            {/* Left Sticky Column */}
            <div className="faq-left">
              <div>
                <div className="sl">FAQ</div>
                <h2 className="sh">The Questions Everyone Asks Before Saying Yes.</h2>
                <p className="ss">This category has a trust problem. Most agencies in this space have given people reasons to be sceptical. We understand that. Here are honest answers to what we hear most.</p>
              </div>

              <div className="faq-contact-card">
                <p className="faq-contact-text">Still have a question we haven't answered?</p>
                <a href="#contact" className="btn-whatsapp">
                  <span>💬</span> Message Us on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Accordion Column */}
            <div className="faq-right">
              {faqData.map((faq, index) => {
                const isActive = openIndex === index;
                return (
                  <div key={index} className={`faq-accordion ${isActive ? 'active' : ''}`}>
                    <button className="faq-header" onClick={() => toggleFAQ(index)}>
                      <span>{faq.question}</span>
                      <div className="faq-icon">+</div>
                    </button>
                    <div className="faq-body-wrapper">
                      <div className="faq-body-inner">
                        <div className="faq-body-content">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}