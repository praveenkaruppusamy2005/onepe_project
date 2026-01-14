import { useState } from 'react'
import Lottie from 'lottie-react'
import { Check, Zap, Building2, ArrowUpRight } from 'lucide-react'
import contactlessPayment from '../assets/contactless payment.json'
import paymentComplete from '../assets/PaymentComplete.json'
import untitledAnimation from '../assets/Untitled file.json'
import '../assets/Styles/Home.css'

function Home() {
  const [currentAnimation, setCurrentAnimation] = useState('contactless')

  const handleContactlessComplete = () => {
    // Switch to payment complete animation when contactless payment finishes
    setCurrentAnimation('complete')
  }

  const handlePaymentCompleteComplete = () => {
    // Switch to untitled animation when payment complete finishes
    setCurrentAnimation('untitled')
  }

  const handleUntitledComplete = () => {
    // Reset to contactless payment to create a loop
    setCurrentAnimation('contactless')
  }

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
              <div className="lottie-container">
                {currentAnimation === 'contactless' ? (
                  <>
                    <Lottie 
                      animationData={contactlessPayment}
                      loop={false}
                      autoplay={true}
                      onComplete={handleContactlessComplete}
                      style={{ width: '80%', height: '80%' }}
                    />
                    <div className="step-label" key="step-1">
                      <span className="step-number">01</span>
                      <div className="step-arrow"></div>
                      <span className="step-text">Make a payment</span>
                    </div>
                  </>
                ) : currentAnimation === 'complete' ? (
                  <>
                    <Lottie 
                      animationData={paymentComplete}
                      loop={false}
                      autoplay={true}
                      speed={1.2}
                      initialSegment={[150, 801]}
                      onComplete={handlePaymentCompleteComplete}
                      style={{ width: '60%', height: '60%', margin: 'auto' }}
                    />
                    <div className="step-label" key="step-2">
                      <span className="step-number">02</span>
                      <div className="step-arrow"></div>
                      <span className="step-text">Payment completed</span>
                    </div>
                  </>
                ) : (
                  <>
                    <Lottie 
                      animationData={untitledAnimation}
                      loop={false}
                      autoplay={true}
                      initialSegment={[30, 227]}
                      onComplete={handleUntitledComplete}
                      style={{ width: '80%', height: '80%', margin: 'auto' }}
                    />
                    <div className="step-label" key="step-3">
                      <span className="step-number">03</span>
                      <div className="step-arrow"></div>
                      <span className="step-text">Invoice received through WhatsApp</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home