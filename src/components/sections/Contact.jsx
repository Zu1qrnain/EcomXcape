import React from "react";
export default function Contact() { return (
<section id="contact" className="contact-sec">
  <div className="si">
    <div className="clayout">
      <div className="cfw">
        <div className="sl">Get In Touch</div>
        <h3 style={{fontFamily: '"Playfair Display",serif', fontSize: '22px', fontWeight: '700', color: 'var(--navy)', margin: '10px 0 7px'}}>Start Your Free Consultation</h3>
        <p style={{'fontSize': '13px', 'color': 'var(--muted)', 'marginBottom': '22px'}}>Fill out the form and our team will reach out within 1 hour.</p>
        <div className="fr">
          <div className="fg"><label>Full Name</label><input type="text" placeholder="John Smith"/></div>
          <div className="fg"><label>Email Address</label><input type="email" placeholder="john@email.com"/></div>
        </div>
        <div className="fg"><label>WhatsApp Number</label><input type="tel" placeholder="+1 (555) 000-0000"/></div>
        <div className="fg"><label>Interested In</label><select><option>Select a service...</option><option>Amazon FBA Automation</option><option>eBay Store Automation</option></select></div>
        <div className="fg"><label>Message (Optional)</label><textarea placeholder="Tell us about your goals..."></textarea></div>
        <button className="fsub">🚀 Send My Request</button>
      </div>
      <div>
        <h3 className="cit">Let's Build Your Passive Income</h3>
        <p className="cis">Our team is available 7 days a week. We respond within 1 hour.</p>
        <div className="citem"><div className="cico">✉️</div><div><div className="cil">Email</div><a href="mailto:Contact@ecomxcape.com" className="civ">Contact@ecomxcape.com</a></div></div>
      </div>
    </div>
  </div>
</section>
); }