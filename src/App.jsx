import './App.css'
import NavBar from './Screens/NavBar'
import Home from './Pages/Home'
import WhyUs from './Pages/WhyUs'
import HowItWorks from './Pages/HowItWorks'
import ROI from './Pages/ROI'
import SavingsEstimator from './Pages/SavingsEstimator'
import Company from './Pages/Company'
import Footer from './Pages/Footer'

function App() {
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
