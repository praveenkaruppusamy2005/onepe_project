import { useState } from 'react'
import '../assets/Styles/SavingsEstimator.css'

function SavingsEstimator() {
  const [stores, setStores] = useState(1)
  const [billsPerDay, setBillsPerDay] = useState(100)
  const [paperSize, setPaperSize] = useState(50)
  const [paperQuality, setPaperQuality] = useState('standard')

  // Calculate savings
  const calculateSavings = () => {
    const paperCostPerBill = paperQuality === 'standard' ? 0.5 : 1.0
    const maintenanceCostPerMonth = 500
    const retentionIncrease = 0.15
    
    const dailyPaperCost = stores * billsPerDay * paperCostPerBill
    const annualPaperCost = dailyPaperCost * 365
    const annualMaintenance = stores * maintenanceCostPerMonth * 12
    const retentionValue = annualPaperCost * retentionIncrease
    
    const totalSavings = annualPaperCost + annualMaintenance + retentionValue
    
    return (totalSavings / 100000).toFixed(2)
  }

  return (
    <div className="content-section">
      <div className="savings-wrapper">
        <div className="savings-info">
          <h2 className="payback-title">
            Pays for Itself in <span className="highlight-blue">90 Days.</span>
          </h2>
          <p className="payback-description">
            The average retail store spends ₹2,000–₹5,000 monthly just on thermal paper rolls and printer ink. OnePe 
            eliminates this cost entirely while driving revenue growth.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">60%</div>
              <div className="stat-label">Reduction in Billing Costs</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">15%</div>
              <div className="stat-label">Increase in Repeat Orders</div>
            </div>
          </div>

          <button className="roi-analysis-btn">View Detailed ROI Analysis</button>
        </div>

        <div className="estimator-container">
          <div className="estimator-header">
            <h2>Savings Estimator</h2>
            <button className="roi-engine-btn">ROI ENGINE</button>
          </div>

          <div className="estimator-form">
            <div className="form-group">
              <label>NO. OF STORES</label>
              <input
                type="number"
                value={stores}
                onChange={(e) => setStores(Number(e.target.value))}
                min="1"
              />
            </div>

            <div className="form-group">
              <label>BILLS PER DAY</label>
              <input
                type="number"
                value={billsPerDay}
                onChange={(e) => setBillsPerDay(Number(e.target.value))}
                min="1"
              />
            </div>

            <div className="form-group">
              <label>AVERAGE PAPER SIZE (CM)</label>
              <div className="slider-container">
                <input
                  type="range"
                  value={paperSize}
                  onChange={(e) => setPaperSize(Number(e.target.value))}
                  min="20"
                  max="100"
                  className="slider"
                />
                <span className="slider-value">{paperSize}cm</span>
              </div>
            </div>

            <div className="form-group">
              <label>PAPER QUALITY</label>
              <div className="radio-group">
                <button
                  className={`radio-btn ${paperQuality === 'standard' ? 'active' : ''}`}
                  onClick={() => setPaperQuality('standard')}
                >
                  <span className="radio-circle"></span>
                  Standard
                </button>
                <button
                  className={`radio-btn ${paperQuality === 'premium' ? 'active' : ''}`}
                  onClick={() => setPaperQuality('premium')}
                >
                  <span className="radio-circle"></span>
                  Premium
                </button>
              </div>
            </div>

            <div className="savings-result">
              <div className="result-label">Annualized Savings Potential</div>
              <div className="result-amount">₹ {calculateSavings()}L+</div>
              <div className="result-note">
                Includes paper costs, maintenance, and 15% increase in customer retention value.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavingsEstimator
