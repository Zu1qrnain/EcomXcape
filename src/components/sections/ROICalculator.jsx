import React, { useState } from 'react';
import '../../styles/ROICalculator.css';
import { PLATFORMS_DATA, calculatePortfolio } from '../../lib/calculations';
import { fmt } from '../../lib/formatters';

export default function ROICalculator() {
  const [partnerType, setPartnerType] = useState('b2b'); // 'b2b' or 'b2c'
  const [headcount, setHeadcount] = useState(5);
  const [accountCount, setAccountCount] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState(new Set(['ebay']));
  const [capitalInputs, setCapitalInputs] = useState({});
  const [resultsVisible, setResultsVisible] = useState(false);
  const [results, setResults] = useState(null);

  const storeCount = partnerType === 'b2b' ? headcount : accountCount;

  const togglePlatform = (id) => {
    const newSet = new Set(selectedPlatforms);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedPlatforms(newSet);
  };

  const handleCapitalChange = (id, value) => {
    setCapitalInputs(prev => ({ ...prev, [id]: Number(value) }));
  };

  const handleCalculate = () => {
    if (selectedPlatforms.size === 0) {
      alert('Please select at least one platform.');
      return;
    }
    const res = calculatePortfolio(Array.from(selectedPlatforms), storeCount, capitalInputs);
    setResults(res);
    setResultsVisible(true);
    setTimeout(() => {
      document.getElementById('roi-results-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="roi-calculator" id="calculator">
      <div className="roi-container">
        <div className="roi-hero">
          <h2>Project Your <em>Returns</em></h2>
          <p>Input your headcount or account count, select your platforms, and see exactly what your partnership generates — quarter by quarter, platform by platform, across three years.</p>
        </div>

        {/* Step 1 */}
        <div className="roi-toggle-wrap">
          <button 
            className={`roi-toggle-btn ${partnerType === 'b2b' ? 'active' : ''}`}
            onClick={() => setPartnerType('b2b')}
          >
            B2B — Company CEO
          </button>
          <button 
            className={`roi-toggle-btn ${partnerType === 'b2c' ? 'active' : ''}`}
            onClick={() => setPartnerType('b2c')}
          >
            B2C — Individual Partner
          </button>
        </div>

        <div className="roi-input-group">
          {partnerType === 'b2b' ? (
            <>
              <label>Number of employees (minimum 5)</label>
              <input 
                type="number" 
                min="5" 
                value={headcount} 
                onChange={(e) => setHeadcount(Math.max(5, parseInt(e.target.value) || 5))} 
              />
            </>
          ) : (
            <>
              <label>Number of accounts you want to open</label>
              <input 
                type="number" 
                min="1" 
                value={accountCount} 
                onChange={(e) => setAccountCount(Math.max(1, parseInt(e.target.value) || 1))} 
              />
            </>
          )}
        </div>

        {/* Step 2 */}
        <div className="roi-platforms">
          {Object.values(PLATFORMS_DATA).map(p => {
            const isSelected = selectedPlatforms.has(p.id);
            return (
              <div 
                key={p.id} 
                className={`roi-pc ${isSelected ? 'selected' : ''}`}
                onClick={() => togglePlatform(p.id)}
              >
                <div className="roi-pc-check">✓</div>
                <h3>{p.name}</h3>
                <p>{p.investmentNote}</p>
                <p>{p.startsNote}</p>

                {p.capitalInput && isSelected && (
                  <div className="roi-pc-cap">
                    <label>Working capital per store ($)</label>
                    <input 
                      type="number" 
                      value={capitalInputs[p.id] || ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleCapitalChange(p.id, e.target.value)}
                      placeholder="e.g. 3000"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button className="roi-calc-btn" onClick={handleCalculate}>Calculate Returns</button>

        {/* Results */}
        <div id="roi-results-section" className={`roi-results ${resultsVisible ? 'visible' : ''}`}>
          {results && (
            <>
              {/* Annual Summary Block */}
              <div className="roi-summary">
                <div className="roi-stat">
                  <span className="roi-stat-l">Total Investment</span>
                  <span className="roi-stat-v">{fmt(results.totalInvestment)}</span>
                  <span className="roi-stat-s">Across all platforms</span>
                </div>
                <div className="roi-stat">
                  <span className="roi-stat-l">Annual Revenue</span>
                  <span className="roi-stat-v">{fmt(results.annualRevenue)}</span>
                  <span className="roi-stat-s">All platforms combined</span>
                </div>
                <div className="roi-stat">
                  <span className="roi-stat-l">Annual Profit</span>
                  <span className="roi-stat-v">{fmt(results.annualGrossProfit)}</span>
                  <span className="roi-stat-s">Before split</span>
                </div>
                <div className="roi-stat">
                  <span className="roi-stat-l">Your Annual Profit</span>
                  <span className="roi-stat-v gold">{fmt(results.annualNetProfit)}</span>
                  <span className="roi-stat-s">Your 50% share</span>
                </div>
                <div className="roi-stat">
                  <span className="roi-stat-l">Blended ROI</span>
                  <span className="roi-stat-v gold">{Math.round(results.blendedRoi)}%</span>
                  <span className="roi-stat-s">Total profit ÷ total investment</span>
                </div>
              </div>

              <p className="roi-comp-text">
                The average ROI in traditional business sits below 10% annually. Your projected ecomXcape partnership returns {Math.round(results.blendedRoi)}% — {Math.round(results.blendedRoi / 10)}x more than what most investors accept. Figures benchmarked against our live network of 300+ active stores.
              </p>

              {/* Platform Result Cards */}
              {results.platforms.map(p => (
                <div className="roi-rcard" key={p.id}>
                  <div className="roi-rc-h">
                    <div className="roi-rc-t">
                      <h4>{p.name} <span className="roi-rc-badge">{storeCount} Store{storeCount > 1 ? 's' : ''}</span></h4>
                    </div>
                    <div className="roi-rc-rt">
                      <div className="roi-rc-rt-v">{fmt(p.annualNetProfit)}</div>
                      <div className="roi-rc-rt-l">Your Year 1 profit</div>
                    </div>
                  </div>
                  <div className="roi-qgrid">
                    {p.quarters.map(q => (
                      <div className="roi-qcell" key={q.quarter}>
                        <div className="roi-qcell-l">Q{q.quarter}</div>
                        {q.isActive ? (
                          <>
                            <div className="roi-qcell-row"><span>Revenue:</span> <strong>{fmt(q.revenue)}</strong></div>
                            <div className="roi-qcell-row"><span>Profit:</span> <strong>{fmt(q.grossProfit)}</strong></div>
                            <div className="roi-qcell-row"><span>Your Profit:</span> <strong>{fmt(q.netProfit)}</strong></div>
                            <div className="roi-qcell-g">{q.growthLabel}</div>
                          </>
                        ) : (
                          <div className="roi-qcell-in">Approval in progress. Activates Q2.</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="roi-rc-f">
                    <div className="roi-stat">
                      <span className="roi-stat-l">Investment</span>
                      <span className="roi-stat-v" style={{fontSize:'16px'}}>{fmt(p.investment)}</span>
                    </div>
                    <div className="roi-stat">
                      <span className="roi-stat-l">Annual Revenue</span>
                      <span className="roi-stat-v" style={{fontSize:'16px'}}>{fmt(p.annualRevenue)}</span>
                    </div>
                    <div className="roi-stat">
                      <span className="roi-stat-l">Annual Profit</span>
                      <span className="roi-stat-v" style={{fontSize:'16px'}}>{fmt(p.annualGrossProfit)}</span>
                    </div>
                    <div className="roi-stat">
                      <span className="roi-stat-l">Your Profit</span>
                      <span className="roi-stat-v gold" style={{fontSize:'16px'}}>{fmt(p.annualNetProfit)}</span>
                    </div>
                    <div className="roi-stat">
                      <span className="roi-stat-l">ROI</span>
                      <span className="roi-stat-v gold" style={{fontSize:'16px'}}>{Math.round(p.roi)}%</span>
                    </div>
                  </div>
                  <div className="roi-yc-row">
                    <div className="roi-yc y1">
                      <div className="roi-yc-l">Year 1 Total Profit</div>
                      <div className="roi-yc-v" style={{marginBottom: '12px'}}>{fmt(p.year1GrossProfit)}</div>
                      <div className="roi-yc-l">Your Share</div>
                      <div className="roi-yc-v" style={{fontSize:'18px', color:'#d4af37'}}>{fmt(p.year1Profit)}</div>
                    </div>
                    <div className="roi-yc y2">
                      <div className="roi-yc-l">Year 2 Total Profit</div>
                      <div className="roi-yc-v" style={{marginBottom: '12px'}}>{fmt(p.year2GrossProfit)}</div>
                      <div className="roi-yc-l">Your Share</div>
                      <div className="roi-yc-v" style={{fontSize:'18px', color:'#d4af37'}}>{fmt(p.year2Profit)}</div>
                    </div>
                    <div className="roi-yc y3">
                      <div className="roi-yc-l">Year 3 Total Profit</div>
                      <div className="roi-yc-v" style={{marginBottom: '12px'}}>{fmt(p.year3GrossProfit)}</div>
                      <div className="roi-yc-l">Your Share</div>
                      <div className="roi-yc-v" style={{fontSize:'18px', color:'#d4af37'}}>{fmt(p.year3Profit)}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="roi-alert-box">
                <span className="roi-alert-icon">💡</span>
                <p>
                  <strong>Growth Mechanism:</strong> Your initial investment remains constant, while revenue and profit compound over time. Your share of the profits can be continuously reinvested to aggressively scale revenue and profit per store (except for eBay, which scales organically without capital constraints).
                </p>
              </div>

              {/* 3-Year Portfolio */}
              <div className="roi-portfolio">
                <div className="sl">3-Year Trajectory</div>
                <h2 className="sh" style={{color:'#fff'}}>Portfolio Compounding</h2>
                <div className="roi-p-grid">
                  <div className="roi-p-card y1">
                    <div className="roi-p-card-l">Year 1</div>
                    <div className="roi-p-card-sub" style={{marginBottom:'8px'}}>Total Profit</div>
                    <div className="roi-p-card-v" style={{fontSize:'36px', marginBottom:'20px'}}>{fmt(results.year1GrossProfit)}</div>
                    <div className="roi-p-card-sub" style={{marginBottom:'8px'}}>Your Share</div>
                    <div className="roi-p-card-v" style={{fontSize:'28px', color:'#d4af37', marginBottom:'24px'}}>{fmt(results.year1Profit)}</div>
                    <div className="roi-p-card-stat"><span>Total Revenue</span> <strong>{fmt(results.year1Revenue)}</strong></div>
                    <div className="roi-p-card-stat"><span>Investment</span> <strong>{fmt(results.totalInvestment)}</strong></div>
                    <div className="roi-p-card-stat" style={{border:0}}><span>Blended ROI</span> <strong>{Math.round(results.year1ROI)}%</strong></div>
                  </div>
                  <div className="roi-p-card y2">
                    <div className="roi-p-card-l">Year 2</div>
                    <div className="roi-p-card-sub" style={{marginBottom:'8px'}}>Total Profit</div>
                    <div className="roi-p-card-v" style={{fontSize:'36px', marginBottom:'20px'}}>{fmt(results.year2GrossProfit)}</div>
                    <div className="roi-p-card-sub" style={{marginBottom:'8px'}}>Your Share</div>
                    <div className="roi-p-card-v" style={{fontSize:'28px', color:'#d4af37', marginBottom:'24px'}}>{fmt(results.year2Profit)}</div>
                    <div className="roi-p-card-stat"><span>Total Revenue</span> <strong>{fmt(results.year2Revenue)}</strong></div>
                    <div className="roi-p-card-stat"><span>Investment</span> <strong>{fmt(results.totalInvestment)}</strong></div>
                    <div className="roi-p-card-stat" style={{border:0}}><span>Blended ROI</span> <strong style={{color:'#d4af37'}}>{Math.round(results.year2ROI)}%</strong></div>
                  </div>
                  <div className="roi-p-card y3">
                    <div className="roi-p-card-l">Year 3</div>
                    <div className="roi-p-card-sub" style={{marginBottom:'8px'}}>Total Profit</div>
                    <div className="roi-p-card-v" style={{fontSize:'36px', marginBottom:'20px'}}>{fmt(results.year3GrossProfit)}</div>
                    <div className="roi-p-card-sub" style={{marginBottom:'8px'}}>Your Share</div>
                    <div className="roi-p-card-v" style={{fontSize:'28px', color:'#F5D060', marginBottom:'24px'}}>{fmt(results.year3Profit)}</div>
                    <div className="roi-p-card-stat"><span>Total Revenue</span> <strong>{fmt(results.year3Revenue)}</strong></div>
                    <div className="roi-p-card-stat"><span>Investment</span> <strong>{fmt(results.totalInvestment)}</strong></div>
                    <div className="roi-p-card-stat" style={{border:0}}><span>Blended ROI</span> <strong style={{color:'#F5D060'}}>{Math.round(results.year3ROI)}%</strong></div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="roi-cta">
                <h3>You've seen the numbers.</h3>
                <h4>Now let's build it.</h4>
                <p>Book a strategy call to verify these projections for your specific situation.</p>
                <div className="roi-cta-btns">
                  <a href="#contact" className="btn-g" style={{textTransform:'uppercase'}}>Book a Strategy Call</a>
                  <a href="#contact" className="btn-o">DM us — type COMPANY</a>
                </div>
                <div className="roi-cta-proof">
                  <span>300+ Active stores</span>
                  <span>£100M+ Sold across 3 countries</span>
                  <span>200+ Partners earning monthly</span>
                  <span>8 years Operating. Zero ads.</span>
                </div>
                <p style={{fontSize:'10px', color:'rgba(255,255,255,0.2)', marginTop:'24px', textTransform:'uppercase'}}>
                  Disclaimer: Projections are illustrative and based on historical performance of top stores. Not a guarantee of returns.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
