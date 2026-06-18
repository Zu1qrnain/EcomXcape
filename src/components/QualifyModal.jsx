import React, { useState } from 'react';

export default function QualifyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* We can expose a global function to open it, or use a state manager later */}
      <div className={`qm-overlay ${isOpen ? 'active' : ''}`} id="qualifyModal">
        <button className="qm-close" onClick={() => setIsOpen(false)} aria-label="Close">&times;</button>
        <div className="qm-body">
          <div className="qm-hero">
            <span className="qm-tag">🎯 Free Strategy Call</span>
            <h2>Check Your <em>Eligibility</em><br/>For Passive Income</h2>
            <p>Answer 8 quick questions. Our team reviews your application and reaches out within 24 hours.</p>
            <div className="qm-trust">
              <div className="qm-ti"><span>✓</span> Takes 3 minutes</div>
              <div class="qm-ti"><span>✓</span> 100% free</div>
              <div className="qm-ti"><span>✓</span> No pressure</div>
              <div className="qm-ti"><span>✓</span> Expert review</div>
            </div>
          </div>
          <div style={{textAlign: 'center', padding: '2rem'}}>
             <p>Form to be connected here...</p>
          </div>
        </div>
      </div>
    </>
  );
}
