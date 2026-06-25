export const PLATFORMS_DATA = {
  ebay: {
    id: 'ebay',
    name: 'eBay',
    investmentNote: '$1,000 / store · Dropshipping',
    startsNote: 'Starts immediately · Fixed investment',
    capitalInput: false,
    fixedInvestment: 1000,
    roiMid: 0,
    startsQuarter: 1,
    fixedQuarters: [
      { revenue: 1000, profit: 700, yourProfit: 350 },
      { revenue: 5000, profit: 3000, yourProfit: 1500 },
      { revenue: 12500, profit: 6500, yourProfit: 3250 },
      { revenue: 25000, profit: 13000, yourProfit: 6500 },
    ]
  },
  etsy: {
    id: 'etsy',
    name: 'Etsy',
    investmentNote: '$1,000–$2,000 / store · 30–50% ROI',
    startsNote: 'Starts Q1 with capital',
    capitalInput: true,
    roiMid: 0.40,
    startsQuarter: 1
  },
  tiktok: {
    id: 'tiktok',
    name: 'TikTok Shop',
    investmentNote: '$2,000–$3,000 / store · 20–30% ROI',
    startsNote: 'Starts Q1 with capital',
    capitalInput: true,
    roiMid: 0.25,
    startsQuarter: 1
  },
  amazon: {
    id: 'amazon',
    name: 'Amazon',
    investmentNote: '$3,000–$5,000 / store · 15–20% ROI',
    startsNote: 'Starts Q1 with capital',
    capitalInput: true,
    roiMid: 0.175,
    startsQuarter: 1
  },
  onbuy: {
    id: 'onbuy',
    name: 'OnBuy',
    investmentNote: '$2,000–$3,000 / store · 20–30% ROI',
    startsNote: 'Starts Q1 with capital',
    capitalInput: true,
    roiMid: 0.25,
    startsQuarter: 1
  },
  walmart: {
    id: 'walmart',
    name: 'Walmart',
    investmentNote: '$3,000–$5,000 / store · 20–30% ROI',
    startsNote: 'Starts Q2 — approval required. Takes ~3 months.',
    capitalInput: true,
    roiMid: 0.25,
    startsQuarter: 2
  }
};

export function calculatePlatform(platformId, storeCount, capitalPerStore) {
  const p = PLATFORMS_DATA[platformId];
  if (!p) return null;

  const investment = p.capitalInput ? capitalPerStore * storeCount : p.fixedInvestment * storeCount;
  const quarters = [];
  let annualRevenue = 0;
  let annualGrossProfit = 0;
  let annualNetProfit = 0;

  for (let q = 1; q <= 4; q++) {
    let qRev = 0, qGross = 0, qNet = 0;
    let isActive = q >= p.startsQuarter;
    let quartersSinceActivation = isActive ? (q - p.startsQuarter) : 0;

    if (p.id === 'ebay') {
      const fixed = p.fixedQuarters[q - 1];
      qRev = fixed.revenue * storeCount;
      qGross = fixed.profit * storeCount;
      qNet = fixed.yourProfit * storeCount;
    } else {
      if (isActive) {
        const baseGross = capitalPerStore * (p.roiMid / 4) * storeCount;
        const growth = Math.pow(1.20, quartersSinceActivation);
        qGross = baseGross * growth;
        qNet = qGross * 0.50;
        qRev = qGross / 0.20;
      }
    }

    annualRevenue += qRev;
    annualGrossProfit += qGross;
    annualNetProfit += qNet;

    quarters.push({
      quarter: q,
      isActive,
      revenue: qRev,
      grossProfit: qGross,
      netProfit: qNet,
      growthLabel: !isActive ? 'Inactive' : (quartersSinceActivation === 0 ? '→ Ramp begins' : '↑ +20% growth')
    });
  }

  // 3-Year Compounding for Platform
  const year1Profit = annualNetProfit;
  const year2Profit = year1Profit * 1.20;
  const year3Profit = year2Profit * 1.20;

  return {
    ...p,
    investment,
    quarters,
    annualRevenue,
    annualGrossProfit,
    annualNetProfit,
    roi: investment > 0 ? (annualNetProfit / investment) * 100 : 0,
    year1Profit,
    year2Profit,
    year3Profit
  };
}

export function calculatePortfolio(selectedPlatformIds, storeCount, capitalInputs) {
  let totalInvestment = 0;
  let annualRevenue = 0;
  let annualGrossProfit = 0;
  let annualNetProfit = 0;

  const platforms = [];

  for (const pid of selectedPlatformIds) {
    const capital = capitalInputs[pid] || 0;
    const res = calculatePlatform(pid, storeCount, capital);
    if (res) {
      platforms.push(res);
      totalInvestment += res.investment;
      annualRevenue += res.annualRevenue;
      annualGrossProfit += res.annualGrossProfit;
      annualNetProfit += res.annualNetProfit;
    }
  }

  const blendedRoi = totalInvestment > 0 ? (annualNetProfit / totalInvestment) * 100 : 0;

  const year1Profit = annualNetProfit;
  const year2Profit = year1Profit * 1.20;
  const year3Profit = year2Profit * 1.20;

  const year1Revenue = annualRevenue;
  const year2Revenue = year1Revenue * 1.20;
  const year3Revenue = year2Revenue * 1.20;

  const year1ROI = blendedRoi;
  const year2ROI = totalInvestment > 0 ? (year2Profit / totalInvestment) * 100 : 0;
  const year3ROI = totalInvestment > 0 ? (year3Profit / totalInvestment) * 100 : 0;

  return {
    platforms,
    totalInvestment,
    annualRevenue,
    annualGrossProfit,
    annualNetProfit,
    blendedRoi,
    year1Profit,
    year2Profit,
    year3Profit,
    year1Revenue,
    year2Revenue,
    year3Revenue,
    year1ROI,
    year2ROI,
    year3ROI
  };
}
