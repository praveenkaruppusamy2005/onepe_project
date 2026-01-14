import { Check, Zap, Building2, ArrowUpRight } from 'lucide-react'
import heroImage from '../assets/Styles/WhatsApp Image 2026-01-14 at 12.55.36.jpeg'
import '../assets/Styles/Home.css'

function Home() {
  return (
    <div className="content-section">
      <div className="home-container">
        <div className="home-card">
          <div className="home-content">
            <div className="home-left">
              <div className="brand-badge">
                INFRASTRUCTURE FOR MODERN RETAIL
              </div>
              
              <h1 className="home-title">
                Turn Every Transaction into a<br />
                <span className="title-highlight">Growth Engine.</span>
              </h1>
              
              <p className="home-description">
                The infrastructure layer that converts offline sales into digital insights, 
                customer loyalty, and automated payments—without changing your 
                existing billing or ERP system.
              </p>
              
              <button className="cta-button">
                <span className="cta-button-text">Book a Demo</span>
                <div className="cta-button-icon">
                  <ArrowUpRight />
                </div>
              </button>
              
              <div className="feature-badges">
                <div className="feature-badge">
                  <span className="feature-icon">
                    <Check />
                  </span>
                  <span>No ERP Change</span>
                </div>
                <div className="feature-badge">
                  <span className="feature-icon">
                    <Zap />
                  </span>
                  <span>Instant Setup</span>
                </div>
                <div className="feature-badge">
                  <span className="feature-icon">
                    <Building2 />
                  </span>
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </div>
            
            <div className="home-right">
              <div className="hero-image-container">
                <img src={heroImage} alt="OnePe Platform" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home