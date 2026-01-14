import '../assets/Styles/ROI.css'
import { useEffect, useRef } from 'react'
import { 
  Receipt,
  Coins,
  Brain,
  HeartHandshake,
  Gauge,
  KeyRound
} from 'lucide-react'

function ROI() {
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    
    // Make cards visible immediately and observe them
    setTimeout(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          card.classList.add('animate')
          observer.observe(card)
        }
      })
    }, 50)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      Icon: Receipt,
      name: "Digital Bills & Payments",
      description: "Send high-converting digital bills via WhatsApp or SMS. Accept payments instantly through dynamic QR codes.",
      gridClass: "bento-card-1",
      bgColor: "#dbeafe", // Light blue
    },
    {
      Icon: Coins,
      name: "Lower Operational Cost",
      description: "Eliminate thermal paper costs and printer maintenance. Reduce manual checkout errors and reconciliation time.",
      gridClass: "bento-card-2",
      bgColor: "#d1fae5", // Light green
    },
    {
      Icon: Brain,
      name: "Customer Intelligence",
      description: "Identify your top 20% of customers, understand frequency patterns and track churn before it happens.",
      gridClass: "bento-card-3",
      bgColor: "#e0f2fe", // Light blue variant
    },
    {
      Icon: HeartHandshake,
      name: "Feedback & Engagement",
      description: "Capture instant ratings after every sale. Run targeted promotions based on actual purchase history.",
      gridClass: "bento-card-4",
      bgColor: "#dcfce7", // Light green variant
    },
    {
      Icon: Gauge,
      name: "Faster Checkout",
      description: "One-click digital billing speeds up the queue, allowing your staff to serve more customers per hour.",
      gridClass: "bento-card-5",
      bgColor: "#bfdbfe", // Medium light blue
    },
    {
      Icon: KeyRound,
      name: "Enterprise Security",
      description: "Financial-grade data encryption and local-first architecture ensure your business data is always safe.",
      gridClass: "bento-card-6",
      bgColor: "#bbf7d0", // Medium light green
    },
  ]

  return (
    <div className="content-section">
      <div className="roi-container">
        <div className="roi-header" ref={headerRef}>
          <h2>Built for Bottom-Line Impact</h2>
          <p>
            Digitization is the means. Growth is the outcome. We focus on the metrics that matter to your business.
          </p>
        </div>

        <div className="bento-grid">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`bento-card ${feature.gridClass}`}
              style={{ background: feature.bgColor }}
            >
              <div className="bento-card-content">
                <div className="bento-icon-circle">
                  <feature.Icon className="bento-icon-svg" />
                </div>
                <h3 className="bento-title">{feature.name}</h3>
                <p className="bento-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ROI
