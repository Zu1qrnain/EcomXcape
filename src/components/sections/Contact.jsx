import '../../styles/Contact.css';
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    partnerType: "",
    accountCount: "",
    message: "",
    company_website: "" // Honeypot field
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // HONEYPOT CHECK
    // If the hidden 'company_website' field is filled out, it's a bot.
    if (formData.company_website !== "") {
      // Fake a success so the bot thinks it worked and moves on
      setStatus("success");
      setFormData({ name: "", email: "", whatsapp: "", partnerType: "", accountCount: "", message: "", company_website: "" });
      setTimeout(() => setStatus("idle"), 5000);
      return; // Stop execution, don't send to SheetDB
    }

    setStatus("loading");
    
    try {
      const response = await fetch(import.meta.env.VITE_SHEETDB_API_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: [
            {
              "Full Name": formData.name,
              "Email": formData.email,
              "WhatsApp": formData.whatsapp,
              "Partner Type": formData.partnerType,
              "Accounts": formData.accountCount,
              "Message": formData.message,
              "Date": new Date().toLocaleString()
            }
          ]
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", partnerType: "", accountCount: "", message: "", company_website: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-cinematic">
        <div className="si">
          <div className="contact-grid">
            
            {/* Left Side: Pitch */}
            <div className="contact-pitch">
              <div className="sl">GET IN TOUCH</div>
              <h2 className="sh">Start With a Conversation.</h2>
              <p className="ss">
                No pitch decks. No high-pressure sales. You tell us your situation — capital available, number of accounts, what you're trying to build. We tell you what the numbers look like for your specific setup. If it makes sense, we move forward. If it doesn't, we tell you that too.
              </p>

              <a href="mailto:Contact@ecomxcape.com" className="contact-info-badge">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <span className="info-label">Email Us</span>
                  <span className="info-value">Contact@ecomxcape.com</span>
                </div>
              </a>
            </div>

            {/* Right Side: Glass Console */}
            <form className="contact-console" onSubmit={handleSubmit}>
              
              {/* HONEYPOT FIELD - Invisible to humans, traps automated bots */}
              <input 
                type="text" 
                name="company_website"
                value={formData.company_website}
                onChange={handleChange}
                style={{ opacity: 0, position: 'absolute', top: '-9999px', left: '-9999px' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-input" 
                    placeholder="John Smith" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input" 
                    placeholder="john@email.com" 
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp Number</label>
                <input 
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="glass-input" 
                  placeholder="+1 (555) 000-0000" 
                  required 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">I am a...</label>
                  <select 
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleChange}
                    className="glass-input" 
                    required
                  >
                    <option value="">Select...</option>
                    <option value="B2B">Company CEO (B2B Partnership)</option>
                    <option value="B2C">Individual Investor (B2C Partnership)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Number of accounts / employees</label>
                  <input 
                    type="number" 
                    name="accountCount"
                    value={formData.accountCount}
                    onChange={handleChange}
                    className="glass-input" 
                    placeholder="e.g. 5" 
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Tell us about your situation (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-input" 
                  placeholder="Capital available, platforms you're interested in, any questions..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "⏳ Sending..." : "Send My Request →"}
              </button>

              {status === "success" && (
                <div className="status-message status-success">
                  ✅ Message sent successfully! We'll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div className="status-message status-error">
                  ❌ Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>

          </div>
        </div>
      </section>
  );
}