import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://sheetdb.io/api/v1/k1rp4vdjdz2ra", {
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
              "Service": formData.service,
              "Message": formData.message,
              "Date": new Date().toLocaleString()
            }
          ]
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", service: "", message: "" });
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
    <>
      <style>{`
        /* ... existing styles remain exactly the same ... */
        .contact-cinematic {
          background-color: #1e1e1e;
          color: #e0e0e0;
          padding: 140px 40px;
          position: relative;
        }

        .contact-cinematic .si {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        /* Left Side: The Pitch */
        .contact-pitch {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-cinematic .sl {
          color: #d4af37;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .contact-cinematic .sl::before {
          content: '';
          width: 30px;
          height: 2px;
          background: #d4af37;
        }

        .contact-cinematic .sh {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .contact-cinematic .ss {
          font-size: 18px;
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .contact-info-badge {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 20px 24px;
          border-radius: 16px;
          margin-top: 20px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .contact-info-badge:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(212, 175, 55, 0.3);
          transform: translateY(-2px);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          color: #d4af37;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .info-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-label {
          font-size: 13px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-value {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
        }

        /* Right Side: The Glass Console */
        .contact-console {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 50px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(212, 175, 55, 0.02);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .form-row .form-group {
          margin-bottom: 0;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #b0b0b0;
          letter-spacing: 0.5px;
        }

        /* Interactive Glass Inputs */
        .glass-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px 20px;
          color: #ffffff;
          font-size: 16px;
          font-family: inherit;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        .glass-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: #d4af37;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.15), inset 0 0 10px rgba(212, 175, 55, 0.05);
        }

        textarea.glass-input {
          min-height: 140px;
          resize: vertical;
        }

        select.glass-input {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23a0a0a0%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 20px top 50%;
          background-size: 12px auto;
        }

        select.glass-input option {
          background: #1e1e1e;
          color: #ffffff;
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 12px;
          background: linear-gradient(135deg, #d4af37, #e5c458);
          color: #1e1e1e;
          font-size: 18px;
          font-weight: 800;
          padding: 20px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          transition: all 0.3s;
          margin-top: 10px;
        }

        .btn-submit:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.5);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .status-message {
          margin-top: 16px;
          padding: 12px;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          font-size: 14px;
        }
        .status-success {
          background: rgba(0, 182, 122, 0.1);
          color: #00b67a;
          border: 1px solid rgba(0, 182, 122, 0.2);
        }
        .status-error {
          background: rgba(255, 82, 82, 0.1);
          color: #ff5252;
          border: 1px solid rgba(255, 82, 82, 0.2);
        }

        /* Mobile */
        @media (max-width: 900px) {
          .contact-cinematic { padding: 80px 20px; }
          .contact-grid { grid-template-columns: 1fr; gap: 50px; }
          .contact-console { padding: 30px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact" className="contact-cinematic">
        <div className="si">
          <div className="contact-grid">
            
            {/* Left Side: Pitch */}
            <div className="contact-pitch">
              <div className="sl">Get In Touch</div>
              <h2 className="sh">Let's Build Your Passive Income</h2>
              <p className="ss">
                Fill out the form and our team will reach out within 1 hour. We are available 7 days a week to answer your questions and start building your store.
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

              <div className="form-group">
                <label className="form-label">Interested In</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="glass-input" 
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="amazon">Amazon FBA Automation</option>
                  <option value="ebay">eBay Store Automation</option>
                  <option value="walmart">Walmart Elite Club</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-input" 
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "⏳ Sending..." : "🚀 Send My Request"}
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
    </>
  );
}