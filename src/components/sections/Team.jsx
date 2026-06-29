import React from 'react';

const teamData = [
  {
    name: 'Mian GM',
    fullName: 'Ghulam Muhammad Farooq',
    role: 'Founder & Chairman',
    companies: 'ecomXcape · Autopilot DS · Bridgrr',
    image: '', // No photo yet
    bio: 'Started with a single eBay seller account. Scaled to 300+ active stores across the UK, Australia and USA without running a single ad. Built Autopilot DS when the operation outgrew every existing tool. Built Bridgrr when WhatsApp groups started costing clients. Cambridge BBA graduate. Operator before founder, always.'
  },
  {
    name: 'Ibrahim Farooq',
    role: 'Co-Founder',
    companies: 'ecomXcape · Autopilot DS · Bridgrr',
    image: '', // No photo yet
    bio: 'The operational and client side of ecomXcape runs through Ibrahim. 8 years managing partner relationships, client onboarding and the financial infrastructure of the business. 200+ partners have collected monthly income. None of them have left. Ibrahim is the reason.'
  }
];

export default function Team() {
  return (
    <>
      <style>{`
        .team-section {
          background-color: #1e1e1e; /* Matches dark premium theme */
          color: #e0e0e0;
          position: relative;
          padding: 120px 40px;
        }

        .team-section .sl {
          color: #d4af37;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .team-section .sl::before {
          content: '';
          width: 24px;
          height: 2px;
          background: #d4af37;
        }

        .team-section .sh {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .team-section .ss {
          font-size: 16px;
          color: #b0b0b0;
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 60px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .team-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          aspect-ratio: 3/4;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-image {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.1) brightness(0.8);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-image-placeholder {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          color: rgba(255,255,255,0.05);
          font-weight: 800;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 60%;
          background: linear-gradient(to top, rgba(15,23,42,0.95) 0%, transparent 100%);
          transition: opacity 0.4s ease;
        }

        .team-info {
          position: absolute;
          bottom: 0; left: 0; width: 100%;
          padding: 30px 24px;
          z-index: 2;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-name {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .team-role {
          font-size: 13px;
          font-weight: 700;
          color: #d4af37;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .team-companies {
          font-size: 11px;
          font-weight: 700;
          color: #a0a0a0;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .team-bio {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover Effects */
        .team-card:hover {
          border-color: rgba(212, 175, 55, 0.5);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.15);
          transform: translateY(-8px);
        }

        .team-card:hover .team-image {
          filter: grayscale(0%) contrast(1.05) brightness(1);
          transform: scale(1.05);
        }

        .team-card:hover .team-image-placeholder {
          transform: scale(1.05);
          color: rgba(212, 175, 55, 0.1);
        }

        .team-card:hover .team-info {
          transform: translateY(0);
        }

        .team-card:hover .team-bio {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .team-section { padding: 80px 20px; }
          .team-card { aspect-ratio: 4/5; }
          .team-info { transform: translateY(0); }
          .team-bio { opacity: 1; transform: translateY(0); display: none; /* Hide bio on very small screens to save space */ }
        }
      `}</style>

      <section id="team" className="team-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sl">THE FOUNDERS</div>
          <h2 className="sh">Built by Operators. Not Marketers.</h2>
          <p className="ss">Two brothers. One started selling on eBay from a bedroom. The other built the client and operations side that kept everything from falling apart. Combined, they have spent the last 8 years building what ecomXcape is today.</p>
          
          <div className="team-grid">
            {teamData.map((member, index) => (
              <div key={index} className="team-card">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="team-image" />
                ) : (
                  <div className="team-image-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className="team-info">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <div className="team-companies">{member.companies}</div>
                  <div className="team-bio">{member.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
