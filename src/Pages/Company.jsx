import '../assets/Styles/Company.css'
import { ShoppingCart, Pill, Shirt, Gift, Smartphone, Sparkles } from 'lucide-react'
import boyLaptop from '../assets/Styles/Boy with Laptop Character Vector Illustration_ Flat Design.jpg'

function Company() {
  const categories = [
    { icon: ShoppingCart, name: 'Groceries' },
    { icon: Pill, name: 'Pharmacies' },
    { icon: Shirt, name: 'Fashion' },
    { icon: Gift, name: 'Gifts' },
    { icon: Smartphone, name: 'Electronics' },
    { icon: Sparkles, name: 'Specialty' },
  ]

  return (
    <div className="content-section">
      <div className="company-container">
        <div className="company-header">
          <h2>Built for Every High-Growth Retailer</h2>
          <p>The infrastructure layer for modern Indian retail across all verticals.</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">
                <category.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Future-Proof Your Store Today.</h3>
            <p>
              Join the infrastructure layer of Indian retail. No long-term lock-ins, simple installation,
              and immediate impact on your bottom line.
            </p>
            <button className="cta-button">Book a Demo</button>
            <p className="cta-note">Easy install. No training needed. Works with any existing POS.</p>
          </div>
          <div className="cta-image">
            <img src={boyLaptop} alt="Boy with Laptop" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company
