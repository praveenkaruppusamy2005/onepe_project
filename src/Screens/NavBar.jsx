import { useState, useEffect } from 'react'
import { HiUsers, HiCog6Tooth, HiChartBar, HiBuildingOffice2 } from 'react-icons/hi2'
import '../assets/Styles/NavBar.css'

function NavBar() {
    const [activeSection, setActiveSection] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'why-us', 'how-it-works', 'roi', 'company']
            const scrollPosition = window.scrollY + 100

            // Check if scrolled
            setIsScrolled(window.scrollY > 50)

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <header className={`header_main ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar_container">
                {/* Logo Section */}
                <button onClick={() => scrollToSection('home')} className="logo_section">
                    <div className="logo_icon"></div>
                    <span className="logo_text">OnePe</span>
                </button>

                {/* Navigation Links */}
                <nav className="nav_links">
                    <button 
                        onClick={() => scrollToSection('why-us')}
                        className={`nav_link ${activeSection === 'why-us' ? 'active' : ''}`}
                    >
                        <div className="nav_icon">
                            <HiUsers />
                        </div>
                        <span>Why Us</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('how-it-works')}
                        className={`nav_link ${activeSection === 'how-it-works' ? 'active' : ''}`}
                    >
                        <div className="nav_icon">
                            <HiCog6Tooth />
                        </div>
                        <span>How it Works</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('roi')}
                        className={`nav_link ${activeSection === 'roi' ? 'active' : ''}`}
                    >
                        <div className="nav_icon">
                            <HiChartBar />
                        </div>
                        <span>ROI</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('company')}
                        className={`nav_link ${activeSection === 'company' ? 'active' : ''}`}
                    >
                        <div className="nav_icon">
                            <HiBuildingOffice2 />
                        </div>
                        <span>Company</span>
                    </button>
                </nav>

                {/* Action Buttons */}
                <div className="action_buttons">
                    <button className="demo_btn">
                        <span>Book a Demo</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default NavBar;