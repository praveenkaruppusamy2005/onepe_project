import '../assets/Styles/HowItWorks.css'
import { useEffect, useRef } from 'react'

function HowItWorks() {
  const timelineItemsRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset all animations when section comes into view
            timelineItemsRef.current.forEach((item) => {
              if (item) {
                item.classList.remove('animate')
                // Force reflow to restart animation
                void item.offsetWidth
              }
            })
            
            // Trigger animations one by one with delay
            setTimeout(() => {
              timelineItemsRef.current.forEach((item, index) => {
                if (item) {
                  setTimeout(() => {
                    item.classList.add('animate')
                  }, index * 500) // 500ms delay between each item
                }
              })
            }, 100)
          } else {
            // Remove animate class when leaving viewport
            timelineItemsRef.current.forEach((item) => {
              if (item) {
                item.classList.remove('animate')
              }
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="content-section" ref={containerRef}>
      <div className="howitworks-container">
        <div className="howitworks-left">
          <h2 className="howitworks-title">Implementation Without Interruption</h2>
          <p className="howitworks-description">
            OnePe plugs into your existing workflow in minutes. No ERP migration, no staff retraining, and 
            zero downtime.
          </p>
          
          <div className="guarantee-section">
            <h3 className="guarantee-title">The "No-Change" Guarantee</h3>
            <p className="guarantee-description">
              OnePe works seamlessly with your existing infrastructure. Zero disruption to your current 
              systems, software, or daily operations without ever interfering with your billing software's core 
              functions.
            </p>
            
            <div className="guarantee-features">
              <div className="feature-column">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Works with any Windows/Android POS</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Supports all existing printers</span>
                </div>
              </div>
              <div className="feature-column">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>No data entry required by staff</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Redundant backup system</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="howitworks-right">
          <div className="timeline">
            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[0] = el)}>
              <div className="timeline-icon">
                <div className="icon-circle">1</div>
              </div>
              <div className="timeline-content">
                <div className="card-header">
                  <img src="https://img.icons8.com/sf-black-filled/64/edit-user-male.png" alt="User" className="card-icon" />
                  <div>
                    <div className="step-label">STEP - 01</div>
                    <h3 className="step-title">Merchant onboarding</h3>
                  </div>
                </div>
                <p className="step-description">
                  Quick digital signup and store verification in under 3 minutes.
                </p>
              </div>
            </div>

            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[1] = el)}>
              <div className="timeline-icon">
                <div className="icon-circle">2</div>
              </div>
              <div className="timeline-content">
                <div className="card-header">
                  <img src="https://img.icons8.com/pastel-glyph/64/hand-box.png" alt="Package" className="card-icon" />
                  <div>
                    <div className="step-label">STEP - 02</div>
                    <h3 className="step-title">Get Device</h3>
                  </div>
                </div>
                <p className="step-description">
                  Receive your pre-configured OnePe device ready for instant activation.
                </p>
              </div>
            </div>

            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[2] = el)}>
              <div className="timeline-icon">
                <div className="icon-circle">3</div>
              </div>
              <div className="timeline-content">
                <div className="card-header">
                  <img src="https://img.icons8.com/comic/100/pos-terminal.png" alt="POS Terminal" className="card-icon" />
                  <div>
                    <div className="step-label">STEP - 03</div>
                    <h3 className="step-title">Plug In</h3>
                  </div>
                </div>
                <p className="step-description">
                  Simply connect the device to your POS. No software installation needed.
                </p>
              </div>
            </div>

            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[3] = el)}>
              <div className="timeline-icon">
                <div className="icon-circle">4</div>
              </div>
              <div className="timeline-content">
                <div className="card-header">
                  <img src="https://img.icons8.com/ios/50/checked--v1.png" alt="Success" className="card-icon" />
                  <div>
                    <div className="step-label">STEP - 04</div>
                    <h3 className="step-title">Start Transaction</h3>
                  </div>
                </div>
                <p className="step-description">
                  Begin processing digital bills and collecting insights immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
