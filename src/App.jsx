import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import './App.css'
import NavBar from './Screens/NavBar'
import Home from './Pages/Home'
import WhyUs from './Pages/WhyUs'
import HowItWorks from './Pages/HowItWorks'
import ROI from './Pages/ROI'
import SavingsEstimator from './Pages/SavingsEstimator'
import Company from './Pages/Company'
import Footer from './Pages/Footer'
import contactlessPayment from './assets/contactless payment.json'
import untitledAnimation from './assets/Untitled file.json'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentAnimation, setCurrentAnimation] = useState('payment')

  useEffect(() => {
    // Set a timer to hide loading screen after animations complete
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  const handlePaymentComplete = () => {
    setCurrentAnimation('whatsapp')
  }

  const handleWhatsAppComplete = () => {
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <div className="loading-content">
            {currentAnimation === 'payment' ? (
              <>
                <Lottie 
                  animationData={contactlessPayment}
                  loop={false}
                  autoplay={true}
                  onComplete={handlePaymentComplete}
                  style={{ width: '400px', height: '400px' }}
                />
                <div className="loading-step">
                  <span className="step-number">01</span>
                  <div className="step-arrow"></div>
                  <span className="step-text">Make a payment</span>
                </div>
              </>
            ) : (
              <>
                <Lottie 
                  animationData={untitledAnimation}
                  loop={false}
                  autoplay={true}
                  initialSegment={[30, 227]}
                  onComplete={handleWhatsAppComplete}
                  style={{ width: '400px', height: '400px' }}
                />
                <div className="loading-step">
                  <span className="step-number">02</span>
                  <div className="step-arrow"></div>
                  <span className="step-text">Digital Bill received through WhatsApp</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="why-us" className="section">
          <WhyUs />
        </section>
        <section id="how-it-works" className="section">
          <HowItWorks />
        </section>
        <section id="roi" className="section">
          <ROI />
        </section>
        <section id="savings-estimator" className="section">
          <SavingsEstimator />
        </section>
        <section id="company" className="section">
          <Company />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
