import React from "react";
export default function FAQ() { return (
<section id="faq">
  <div className="si">
    <div className="faq-layout">
      <div>
        <div className="sl">FAQ</div>
        <h2 className="sh">Answers to Your Biggest Questions</h2>
        <p className="ss">We know you've got concerns. Here's what we hear most — answered honestly.</p>
        <div className="faqc"><p>Still have questions? Our team responds within 1 hour.</p><a href="#contact" target="_blank">💬 Message Us on WhatsApp</a></div>
      </div>
      <div>
        <div className="fi open"><button className="fq"><span>Is this a scam? How do I know this is legitimate?</span><div className="ficon">+</div></button><div className="fa">We've been operating since 2019 with 500+ clients. We have documented screenshots, Seller Hub recordings, and video testimonials from real clients. We'll share proof on our first call. Our performance-based model also means we only earn when you earn.</div></div>
        <div className="fi"><button className="fq"><span>How does the pricing and profit share work?</span><div className="ficon">+</div></button><div className="fa">We charge a small setup fee to build and launch your store, then take a percentage of profits ongoing. We're fully invested in your store's performance.</div></div>
        <div className="fi"><button className="fq"><span>How long before my store starts making money?</span><div className="ficon">+</div></button><div className="fa">Most eBay stores start generating sales within the first 2–4 weeks. Profit levels build over 1–3 months as we scale winning products.</div></div>
      </div>
    </div>
  </div>
</section>
); }