import React from "react";
export default function TrustpilotReviews() { return (
<section id="testimonials" style={{'background': 'var(--off)'}}>
  <div className="si">
    <div className="tp-header">
      <div className="sl" style={{'justifyContent': 'center'}}>Client Results</div>
      <h2 className="sh">Real Results from Real Clients</h2>
      <div style={{'display': 'flex', 'justifyContent': 'center', 'margin': '20px 0'}}>
        <div className="tp-score">
          <div>
            <div className="tp-logo">Trustpilot</div>
            <div className="tp-stars">★★★★★</div>
          </div>
          <div style={{'width': '1px', 'height': '40px', 'background': 'var(--border)'}}></div>
          <div>
            <div style={{'fontSize': '28px', 'fontWeight': '800', 'color': 'var(--navy)'}}>4.9</div>
            <div className="tp-num">Based on 100+ reviews</div>
          </div>
          <div style={{'width': '1px', 'height': '40px', 'background': 'var(--border)'}}></div>
          <div>
            <div style={{'fontSize': '22px'}}>🏆</div>
            <div className="tp-num">Excellent</div>
          </div>
        </div>
      </div>
    </div>

    <div className="tp-grid">
      <div className="tp-card">
        <div className="tp-verified">✓ Verified Client</div>
        <div className="tp-card-stars">★★★★★</div>
        <p className="tp-text">"EcomXcape completely changed my financial life. My eBay store is generating $4,200/m consistently and I haven't touched it in months."</p>
        <div className="tp-author"><div className="tp-av">MR</div><div><div className="tp-name">Michael R.</div><div className="tp-loc">Texas, USA</div></div><span className="tp-platform">eBay</span></div>
      </div>
      <div className="tp-card">
        <div className="tp-verified">✓ Verified Client</div>
        <div className="tp-card-stars">★★★★★</div>
        <p className="tp-text">"The FBA Genius team is incredible. They set up my Amazon store and I'm now at $8,500/m passive income. Zero upfront fee was the deal maker."</p>
        <div className="tp-author"><div className="tp-av">SL</div><div><div className="tp-name">Sarah L.</div><div className="tp-loc">California, USA</div></div><span className="tp-platform">Amazon</span></div>
      </div>
      <div className="tp-card">
        <div className="tp-verified">✓ Verified Client</div>
        <div className="tp-card-stars">★★★★★</div>
        <p className="tp-text">"Walmart Elite Club promised a million dollar store and they're delivering. 14 months in, my store is at $65K/m revenue with 32% ROI."</p>
        <div className="tp-author"><div className="tp-av">DJ</div><div><div className="tp-name">David J.</div><div className="tp-loc">Florida, USA</div></div><span className="tp-platform">Walmart</span></div>
      </div>
    </div>
  </div>
</section>
); }