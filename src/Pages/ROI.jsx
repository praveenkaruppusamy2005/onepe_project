import '../assets/Styles/ROI.css'
import { useEffect, useRef } from 'react'
import { 
  FileText,
  TrendingDown,
  Users,
  MessageSquareHeart,
  Zap,
  ShieldCheck
} from 'lucide-react'
import digitalPaymentImg from '../assets/MTS_Bank___3D_illustrations-removebg-preview.png'
import feedbackImg from '../assets/7190b469-25ff-42bb-b035-917e87c684b2-removebg-preview.png'
import speedImg from '../assets/Styles/Speedometer_with_arrow_and_dashboard_indicators_risk_speed_and_rating_levels_concept_3d_vector___Premium_Vector-removebg-preview.png'
import securityImg from '../assets/Styles/3d_shield_with_check_mark_icon_illustration___security_symbol_with_glass_morphism_style___Premium_PSD-removebg-preview.png'
import moneyBagImg from '../assets/Styles/Download_3D_Render_of_a_Hand_Holding_a_Money_Bag_for_free-removebg-preview.png'

function ROI() {
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          } else {
            // Remove animate class when out of view so it can animate again
            entry.target.classList.remove('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      Icon: FileText,
      name: "Digital Bills & Payments",
      description: "Send high-converting digital bills via WhatsApp or SMS. Accept payments instantly through dynamic QR codes.",
      gridClass: "bento-card-1",
      bgColor: "#0f0f0f",
      iconColor: "#2a2a2a",
      image: digitalPaymentImg,
      imagePosition: "top-left",
    },
    {
      Icon: TrendingDown,
      name: "Lower Operational Cost",
      description: "Eliminate thermal paper costs and printer maintenance. Reduce manual checkout errors and reconciliation time.",
      gridClass: "bento-card-2",
      bgColor: "#2a2a2a",
      iconColor: "#10b981",
      image: moneyBagImg,
      imagePosition: "bottom-right",
    },
    {
      Icon: Users,
      name: "Customer Intelligence",
      description: "Identify your top 20% of customers, understand frequency patterns and track churn before it happens.",
      gridClass: "bento-card-3",
      bgColor: "#1a1a1a",
      iconColor: "#8b5cf6",
      image: "https://img.icons8.com/3d-fluency/200/group.png",
      imagePosition: "center-right",
    },
    {
      Icon: MessageSquareHeart,
      name: "Feedback & Engagement",
      description: "Capture instant ratings after every sale. Run targeted promotions based on actual purchase history.",
      gridClass: "bento-card-4",
      bgColor: "#0a0a0a",
      iconColor: "#ec4899",
      image: feedbackImg,
      imagePosition: "bottom-right",
    },
    {
      Icon: Zap,
      name: "Faster Checkout",
      description: "One-click digital billing speeds up the queue, allowing your staff to serve more customers per hour.",
      gridClass: "bento-card-5",
      bgColor: "#252525",
      iconColor: "#f59e0b",
      image: speedImg,
      imagePosition: "bottom-center",
    },
    {
      Icon: ShieldCheck,
      name: "Enterprise Security",
      description: "Financial-grade data encryption and local-first architecture ensure your business data is always safe.",
      gridClass: "bento-card-6",
      bgColor: "#1c1c1c",
      iconColor: "#06b6d4",
      image: securityImg,
      imagePosition: "bottom-left",
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
              className={`bento-card ${feature.gridClass} image-${feature.imagePosition} ${idx === 0 ? 'large-image' : ''} ${idx === 1 ? 'large-image' : ''}`}
              style={{ 
                background: feature.bgColor,
                '--icon-color': feature.iconColor 
              }}
            >
              <div className="bento-card-content">
                <img src={feature.image} alt={feature.name} className="bento-3d-image" />
                <div className="bento-text-content">
                  <h3 className="bento-title">{feature.name}</h3>
                  <p className="bento-description">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ROI
