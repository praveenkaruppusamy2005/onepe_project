import PaymentTerminal from '../assets/Payment_by_card_using_a_terminal_Illustration-Picsart-AiImageEnhancer-removebg-preview.png'
import DataScience from '../assets/Business_model_and_income_growth_isometric_illustration-removebg-preview.png'
import DataAnalysis from '../assets/Download_illustration_of_business_man_doing_data_analysis_using_magnifying_glass__data_analytics_makes_predictions_of_future_business_for_free-removebg-preview.png'
import '../assets/Styles/WhyUs.css'
import { useEffect, useRef } from 'react'

export default function WhyUs() {
  const headerRef = useRef(null)
  const leftRef = useRef(null)
  const centerRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          } else {
            entry.target.classList.remove('animate')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    if (leftRef.current) observer.observe(leftRef.current)
    if (centerRef.current) observer.observe(centerRef.current)
    if (rightRef.current) observer.observe(rightRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="whyus">
      <div className="whyus-header" ref={headerRef}>
        <h2>The Blind Spot in Offline Retail</h2>
        <p>
          Most offline transactions end with a paper bill—and then disappear. Valuable data is lost,<br />
          customer relationships are severed at the counter, and fragmented systems fail to provide a<br />
          unified view of the business.
        </p>
      </div>

      <div className="whyus-grid">
        <div className="whyus-item left" ref={leftRef}>
          <div className="card-content-left">
            <h3>Paper Dead-Ends</h3>
            <p className="sub">
              Bills are printed and discarded. No record of the customer,
              no way to re-engage, and significant recurring costs.
            </p>
          </div>
          <img src={PaymentTerminal} alt="Paper Dead-Ends" className="card-image-right" />
        </div>

        <div className="whyus-item center" ref={centerRef}>
          <div className="card-content-left">
            <h3>Siloed Intelligence</h3>
            <p className="sub">
              Existing ERPs track inventory but fail to capture the behavioral insights needed for predictive growth.
            </p>
          </div>
          <img src={DataScience} alt="Siloed Intelligence" className="card-image-right" />
        </div>

        <div className="whyus-item right" ref={rightRef}>
          <div className="card-content-left">
            <h3>Friction-Heavy Returns</h3>
            <p className="sub">
              Manual reconciliations and fragmented payment records lead to operational bottlenecks and revenue leakage.
            </p>
          </div>
          <img src={DataAnalysis} alt="Friction-Heavy Returns" className="card-image-right" />
        </div>
      </div>
    </section>
  )
}