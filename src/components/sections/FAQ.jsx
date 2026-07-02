import '../../styles/FAQ.css';
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
  );
}