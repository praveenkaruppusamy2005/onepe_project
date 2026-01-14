import '../assets/Styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
        {/* Top Section - Main Navigation */}
        <div className="footer-main">
          {/* Left Column - Company Info */}
          <div className="footer-brand">
            <div className="brand-logo">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 12 6 8 10 10C14 12 18 16 22 14C26 12 30 8 34 10C38 12 38 12 38 12" stroke="#1e293b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2 16C2 16 6 12 10 14C14 16 18 20 22 18C26 16 30 12 34 14C38 16 38 16 38 16" stroke="#1e293b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2 20C2 20 6 16 10 18C14 20 18 24 22 22C26 20 30 16 34 18C38 20 38 20 38 20" stroke="#1e293b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="brand-logo-text">onepe</span>
            </div>
          </div>

          {/* Middle Columns - Navigation Links */}
          <div className="footer-nav-columns">
            <div className="footer-column">
              <h4 className="footer-column-title">Platform</h4>
              <ul className="footer-link-list">
                <li><a href="#how-it-works">How it Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#device-setup">Device Setup</a></li>
                <li><a href="#integrations">Integrations</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-link-list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#partnerships">Partnerships</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press Kit</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-link-list">
                <li><a href="#help">Merchant Help Desk</a></li>
                <li><a href="#roi">ROI Case Studies</a></li>
                <li><a href="#security">Security Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">© 2024 onepe. All rights reserved.</p>
          </div>
          <div className="footer-bottom-center">
            <a href="#terms" className="footer-bottom-link">Terms of Service</a>
            <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="#security" className="footer-bottom-link">Security</a>
            <a href="#sitemap" className="footer-bottom-link">Sitemap</a>
          </div>
          <div className="footer-bottom-right">
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Website">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
          </div>
        </div>

        </div>
      </div>
    </footer>
  )
}
