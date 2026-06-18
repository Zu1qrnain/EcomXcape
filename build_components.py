import re

def html_to_jsx(html):
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('Millennial Automations', 'EcomXcape')
    jsx = jsx.replace('Millennial Automations LLC', 'EcomXcape LLC')
    jsx = jsx.replace('MillennialAutomations', 'EcomXcape')
    jsx = jsx.replace('millennialautomations', 'ecomxcape')
    
    # Fix style tags
    def replace_style(match):
        style_str = match.group(1)
        # Parse CSS string to dictionary
        styles = {}
        for item in style_str.split(';'):
            if ':' in item:
                key, val = item.split(':', 1)
                key = key.strip()
                # Convert kebab-case to camelCase
                key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                styles[key] = val.strip()
        
        style_dict_str = '{' + ', '.join([f"'{k}': '{v}'" for k, v in styles.items()]) + '}'
        return f"style={{{style_dict_str}}}"
        
    jsx = re.sub(r'style="([^"]*)"', replace_style, jsx)
    
    # Fix unclosed tags like img and br
    jsx = jsx.replace('<br>', '<br/>')
    jsx = re.sub(r'(<img[^>]+)(?<!/)>', r'\1/>', jsx)
    
    return jsx

ticker_html = """
<div class="ticker">
  <div class="tt">
    <span class="ti2"><span>🚀</span>Amazon FBA Automation</span><span class="ti2"><span>💰</span>eBay Store Automation</span><span class="ti2"><span>🎵</span>TikTok Shop Automation</span><span class="ti2"><span>🛍️</span>Etsy Automation</span><span class="ti2"><span>🛒</span>Walmart Automation</span><span class="ti2"><span>📦</span>Mercari Automation</span><span class="ti2"><span>🏢</span>LLC Filing</span><span class="ti2"><span>📋</span>Tax Filing</span><span class="ti2"><span>🚀</span>Amazon FBA Automation</span><span class="ti2"><span>💰</span>eBay Store Automation</span><span class="ti2"><span>🎵</span>TikTok Shop Automation</span><span class="ti2"><span>🛍️</span>Etsy Automation</span><span class="ti2"><span>🛒</span>Walmart Automation</span><span class="ti2"><span>📦</span>Mercari Automation</span><span class="ti2"><span>🏢</span>LLC Filing</span><span class="ti2"><span>📋</span>Tax Filing</span>
  </div>
</div>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/sections/TrustTicker.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function TrustTicker() { return (' + html_to_jsx(ticker_html) + '); }')

services_html = """
<section id="services">
  <div class="si">
    <div class="sl">What We Do</div>
    <h2 class="sh">One Agency. Six Platforms.<br>Infinite Passive Income.</h2>
    <p class="ss">We run your stores end-to-end. Pick your platform — we handle everything else.</p>
    <div class="sgrid">
      <div class="sc sc-amazon"><div class="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style="height:20px;width:auto;filter:brightness(0) invert(1)"></div><h3>Amazon FBA Automation</h3><p>Full store management — sourcing, listings, inventory, CS. Generating $3K–$10K/m hands-free.</p><a href="#amazon" class="sl2">Learn More →</a></div>
      <div class="sc sc-ebay"><div class="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" alt="eBay" style="height:18px;width:auto;filter:brightness(0) invert(1)"></div><h3>eBay Store Automation</h3><p>Complete eBay management from research to fulfillment. $3K–$5K/m net profit stores.</p><a href="#ebay" class="sl2">Learn More →</a></div>
      <div class="sc sc-tiktok"><div class="si2"><img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" style="height:20px;width:auto;filter:brightness(0) invert(1)"></div><h3>TikTok Shop Automation</h3><p>Built and managed from scratch — products, content, orders. $5K–$10K/m passive income.</p><a href="#tiktok" class="sl2">Learn More →</a></div>
      <div class="sc sc-etsy"><div class="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg" alt="Etsy" style="height:18px;width:auto;filter:brightness(0) invert(1)"></div><h3>Etsy Store Automation</h3><p>Trending products, keyword-optimized listings, full order management. 40–90% ROI monthly.</p><a href="#etsy" class="sl2">Learn More →</a></div>
      <div class="sc sc-walmart"><div class="si2"><img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Walmart_Spark.svg" alt="Walmart" style="height:22px;width:auto;filter:brightness(0) invert(1)"></div><h3>Walmart Automation</h3><p>Full marketplace management. Proven path to $1M+ store in 18–24 months. 30–35% ROI.</p><a href="#walmart" class="sl2">Learn More →</a></div>
      <div class="sc sc-mercari"><div class="si2" style="font-size:13px;font-weight:800;color:#fff;letter-spacing:-1px">M</div><h3>Mercari Automation</h3><p>Complete Mercari management — listing to delivery. Sourcing, pricing, CS, fulfillment.</p><a href="#mercari" class="sl2">Learn More →</a></div>
      <div class="sc sc-llc"><div class="si2" style="font-size:18px;color:#fff">🏛️</div><h3>LLC Filing</h3><p>LLC formation start to finish. State filing, operating agreements, EIN registration.</p><a href="#llc" class="sl2">Learn More →</a></div>
      <div class="sc sc-tax"><div class="si2" style="font-size:18px;color:#fff">💼</div><h3>Tax Filing</h3><p>Professional business tax filing. Stay compliant and maximize your deductions.</p><a href="#tax" class="sl2">Learn More →</a></div>
    </div>
  </div>
</section>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/sections/Services.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function Services() { return (' + html_to_jsx(services_html) + '); }')

brands_html = """
<section id="brands" style="background:var(--off)">
  <div class="si">
    <div class="sl">Specialized Brands</div>
    <h2 class="sh">7 Expert Teams, Each Laser-Focused<br>on One Platform</h2>
    <p class="ss">Every brand is a dedicated team of specialists — not generalists — for maximum results.</p>
    <div class="bgrid">
      <a href="#fba" class="bc"><span class="ba">→</span><div class="bt">Amazon Specialists</div><h3>FBA Genius</h3><p>100% Done For You FBA Stores. $3K–$10K/m Hands-Free. No Results, No Money.</p><div><span class="bsn">500+</span><span class="bsl">Successful Case Studies</span></div></a>
      <a href="#momentum" class="bc"><span class="ba">→</span><div class="bt">eBay Specialists</div><h3>Momentum Makers</h3><p>Helped 250+ People Build Real 2nd Income Streams. Real eCommerce Business Models.</p><div><span class="bsn">250+</span><span class="bsl">People Building 2nd Income</span></div></a>
      <a href="#walmart" class="bc"><span class="ba">→</span><div class="bt">Walmart Specialists</div><h3>Walmart Elite Club</h3><p>Guaranteed $1M Store in 18–24 Months with 30–35% Consistent ROI.</p><div><span class="bsn">$1M+</span><span class="bsl">Store Value Built</span></div></a>
      <a href="#etsy" class="bc"><span class="ba">→</span><div class="bt">Etsy Specialists</div><h3>Etsy Success Partners</h3><p>Scaling Etsy with Profitable Automations. 40–90% ROI for 100+ Investors Monthly.</p><div><span class="bsn">90%</span><span class="bsl">ROI Generated</span></div></a>
      <a href="#tiktok" class="bc"><span class="ba">→</span><div class="bt">TikTok Specialists</div><h3>TikShopz Automations</h3><p>300+ Satisfied Clients. 100% Success Ratio. $5K–$10K/m Passive Income.</p><div><span class="bsn">300+</span><span class="bsl">Satisfied Clients</span></div></a>
      <a href="#ebay" class="bc"><span class="ba">→</span><div class="bt">eBay Specialists</div><h3>BayBoost Agency</h3><p>$3K–$5K/m Net Profit Without Marketing Costs. 250+ Profitable Stores Built.</p><div><span class="bsn">250+</span><span class="bsl">Profitable Stores Built</span></div></a>
      <a href="#rapidrack" class="bc"><span class="ba">→</span><div class="bt">3PL &amp; Fulfillment</div><h3>Rapid Rack Logistics</h3><p>The 3PL Built for Sellers by Sellers. Cut Costs 30%, 2X Delivery Speed.</p><div><span class="bsn">30%</span><span class="bsl">Cost Reduction Guaranteed</span></div></a>
    </div>
  </div>
</section>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/sections/Platforms.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function Platforms() { return (' + html_to_jsx(brands_html) + '); }')

process_html = """
<div class="psec" id="process">
  <div class="si">
    <div class="sl">How It Works</div>
    <h2 class="sh">From Zero to Passive Income<br>in 4 Simple Steps</h2>
    <p class="ss">You invest, we do the work, you earn.</p>
    <div class="pgrid">
      <div class="ps"><span class="pn">01</span><span class="pi">📞</span><h3>Book a Free Call</h3><p>We analyze your goals and recommend the best platform. Zero pressure, zero obligation.</p></div>
      <div class="ps"><span class="pn">02</span><span class="pi">⚙️</span><h3>We Set Up &amp; Run</h3><p>Our experts build your store, source products, create listings, and manage everything 24/7.</p></div>
      <div class="ps"><span class="pn">03</span><span class="pi">💸</span><h3>You Collect Profits</h3><p>Watch your store generate passive income every month. 100% hands-free for you.</p></div>
      <div class="ps"><span class="pn">04</span><span class="pi">📈</span><h3>Scale &amp; Grow</h3><p>We optimize and scale winning products. Your income grows month over month.</p></div>
    </div>
    <div style="text-align:center;margin-top:32px"><a href="#qualify" class="btn-g">📞 Book Free Consultation Now</a></div>
  </div>
</div>
"""

with open('/Users/apple/Desktop/EcomXcape/src/components/sections/Process.jsx', 'w') as f:
    f.write('import React from "react";\\nexport default function Process() { return (' + html_to_jsx(process_html) + '); }')

