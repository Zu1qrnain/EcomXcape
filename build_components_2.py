import re

def html_to_jsx(html):
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('Millennial Automations', 'EcomXcape')
    jsx = jsx.replace('Millennial Automations LLC', 'EcomXcape LLC')
    jsx = jsx.replace('MillennialAutomations', 'EcomXcape')
    jsx = jsx.replace('millennialautomations', 'ecomxcape')
    jsx = jsx.replace('onclick=', 'onClick=')
    
    # Fix style tags
    def replace_style(match):
        style_str = match.group(1)
        styles = {}
        for item in style_str.split(';'):
            if ':' in item:
                key, val = item.split(':', 1)
                key = key.strip()
                key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                styles[key] = val.strip()
        
        style_dict_str = '{' + ', '.join([f"'{k}': '{v}'" for k, v in styles.items()]) + '}'
        return f"style={{{style_dict_str}}}"
        
    jsx = re.sub(r'style="([^"]*)"', replace_style, jsx)
    jsx = jsx.replace('<br>', '<br/>')
    jsx = re.sub(r'(<img[^>]+)(?<!/)>', r'\1/>', jsx)
    jsx = re.sub(r'(<input[^>]+)(?<!/)>', r'\1/>', jsx)
    
    return jsx

reviews_html = """
<section id="testimonials" style="background:var(--off)">
  <div class="si">
    <div class="tp-header">
      <div class="sl" style="justify-content:center">Client Results</div>
      <h2 class="sh">Real Results from Real Clients</h2>
      <div style="display:flex;justify-content:center;margin:20px 0">
        <div class="tp-score">
          <div>
            <div class="tp-logo">Trustpilot</div>
            <div class="tp-stars">★★★★★</div>
          </div>
          <div style="width:1px;height:40px;background:var(--border)"></div>
          <div>
            <div style="font-size:28px;font-weight:800;color:var(--navy)">4.9</div>
            <div class="tp-num">Based on 100+ reviews</div>
          </div>
          <div style="width:1px;height:40px;background:var(--border)"></div>
          <div>
            <div style="font-size:22px">🏆</div>
            <div class="tp-num">Excellent</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tp-grid">
      <div class="tp-card">
        <div class="tp-verified">✓ Verified Client</div>
        <div class="tp-card-stars">★★★★★</div>
        <p class="tp-text">"EcomXcape completely changed my financial life. My eBay store is generating $4,200/m consistently and I haven't touched it in months."</p>
        <div class="tp-author"><div class="tp-av">MR</div><div><div class="tp-name">Michael R.</div><div class="tp-loc">Texas, USA</div></div><span class="tp-platform">eBay</span></div>
      </div>
      <div class="tp-card">
        <div class="tp-verified">✓ Verified Client</div>
        <div class="tp-card-stars">★★★★★</div>
        <p class="tp-text">"The FBA Genius team is incredible. They set up my Amazon store and I'm now at $8,500/m passive income. Zero upfront fee was the deal maker."</p>
        <div class="tp-author"><div class="tp-av">SL</div><div><div class="tp-name">Sarah L.</div><div class="tp-loc">California, USA</div></div><span class="tp-platform">Amazon</span></div>
      </div>
      <div class="tp-card">
        <div class="tp-verified">✓ Verified Client</div>
        <div class="tp-card-stars">★★★★★</div>
        <p class="tp-text">"Walmart Elite Club promised a million dollar store and they're delivering. 14 months in, my store is at $65K/m revenue with 32% ROI."</p>
        <div class="tp-author"><div class="tp-av">DJ</div><div><div class="tp-name">David J.</div><div class="tp-loc">Florida, USA</div></div><span class="tp-platform">Walmart</span></div>
      </div>
    </div>
  </div>
</section>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/sections/TrustpilotReviews.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function TrustpilotReviews() { return (' + html_to_jsx(reviews_html) + '); }')

faq_html = """
<section id="faq">
  <div class="si">
    <div class="faq-layout">
      <div>
        <div class="sl">FAQ</div>
        <h2 class="sh">Answers to Your Biggest Questions</h2>
        <p class="ss">We know you've got concerns. Here's what we hear most — answered honestly.</p>
        <div class="faqc"><p>Still have questions? Our team responds within 1 hour.</p><a href="#contact" target="_blank">💬 Message Us on WhatsApp</a></div>
      </div>
      <div>
        <div class="fi open"><button class="fq"><span>Is this a scam? How do I know this is legitimate?</span><div class="ficon">+</div></button><div class="fa">We've been operating since 2019 with 500+ clients. We have documented screenshots, Seller Hub recordings, and video testimonials from real clients. We'll share proof on our first call. Our performance-based model also means we only earn when you earn.</div></div>
        <div class="fi"><button class="fq"><span>How does the pricing and profit share work?</span><div class="ficon">+</div></button><div class="fa">We charge a small setup fee to build and launch your store, then take a percentage of profits ongoing. We're fully invested in your store's performance.</div></div>
        <div class="fi"><button class="fq"><span>How long before my store starts making money?</span><div class="ficon">+</div></button><div class="fa">Most eBay stores start generating sales within the first 2–4 weeks. Profit levels build over 1–3 months as we scale winning products.</div></div>
      </div>
    </div>
  </div>
</section>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/sections/FAQ.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function FAQ() { return (' + html_to_jsx(faq_html) + '); }')

cta_html = """
<div class="cta-sec">
  <div class="cta-in">
    <h2>Ready to Start Earning <em>Passively?</em></h2>
    <p>Join 500+ clients who wake up to profit notifications every day. Your eCommerce store, on autopilot, starting today.</p>
    <div class="cta-btns">
      <a href="#qualify" class="btn-g">💬 Qualify Now</a>
      <a href="#contact" class="btn-o">✉️ Send Us an Email</a>
    </div>
    <div class="cta-tr">
      <span class="cti">500+ Happy Clients</span>
      <span class="cti">Since 2019</span>
      <span class="cti">98% Satisfaction</span>
      <span class="cti">1-Hour Response</span>
    </div>
  </div>
</div>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/sections/CTA.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function CTA() { return (' + html_to_jsx(cta_html) + '); }')

contact_html = """
<section id="contact" class="contact-sec">
  <div class="si">
    <div class="clayout">
      <div class="cfw">
        <div class="sl">Get In Touch</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--navy);margin:10px 0 7px">Start Your Free Consultation</h3>
        <p style="font-size:13px;color:var(--muted);margin-bottom:22px">Fill out the form and our team will reach out within 1 hour.</p>
        <div class="fr">
          <div class="fg"><label>Full Name</label><input type="text" placeholder="John Smith"/></div>
          <div class="fg"><label>Email Address</label><input type="email" placeholder="john@email.com"/></div>
        </div>
        <div class="fg"><label>WhatsApp Number</label><input type="tel" placeholder="+1 (555) 000-0000"/></div>
        <div class="fg"><label>Interested In</label><select><option>Select a service...</option><option>Amazon FBA Automation</option><option>eBay Store Automation</option></select></div>
        <div class="fg"><label>Message (Optional)</label><textarea placeholder="Tell us about your goals..."></textarea></div>
        <button class="fsub">🚀 Send My Request</button>
      </div>
      <div>
        <h3 class="cit">Let's Build Your Passive Income</h3>
        <p class="cis">Our team is available 7 days a week. We respond within 1 hour.</p>
        <div class="citem"><div class="cico">✉️</div><div><div class="cil">Email</div><a href="mailto:Contact@ecomxcape.com" class="civ">Contact@ecomxcape.com</a></div></div>
      </div>
    </div>
  </div>
</section>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/sections/Contact.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function Contact() { return (' + html_to_jsx(contact_html) + '); }')

footer_html = """
<footer>
  <div class="fi2">
    <div class="ft">
      <div>
        <span class="flogo">EcomXcape <span>Agency</span></span>
        <p class="fd">The #1 eCommerce Automation Agency. 500+ Clients Profiting Since 2019. Six Platforms, One Team, Infinite Passive Income.</p>
      </div>
      <div class="fc"><h4>Services</h4><ul class="fl"><li><a href="#amazon">Amazon FBA</a></li><li><a href="#ebay">eBay Automation</a></li><li><a href="#tiktok">TikTok Shop</a></li></ul></div>
      <div class="fc"><h4>Contact</h4><ul class="fl"><li><a href="mailto:Contact@ecomxcape.com">Contact@ecomxcape.com</a></li><li><a href="#faq">FAQ</a></li></ul></div>
    </div>
    <div class="fb">
      <p class="fc2">© 2026 EcomXcape LLC. All rights reserved.</p>
      <p class="fd2">Results vary. Income figures are representative of top performers. Past performance is not a guarantee of future results.</p>
    </div>
  </div>
</footer>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/layout/Footer.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function Footer() { return (' + html_to_jsx(footer_html) + '); }')

