import { useState, useEffect } from 'react'
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const textColorClass = 'text-white'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    setExpanded(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <BSNavbar 
        expand="lg" 
        bg={isScrolled || expanded ? 'dark-navy' : 'transparent'} 
        variant="dark" 
        fixed="top" 
        expanded={expanded} 
        className={`py-2 ${isScrolled ? 'shadow-sm' : ''}`}
        style={{ transition: 'background-color 0.3s ease, box-shadow 0.3s ease' }}
      >
        <Container>
          <BSNavbar.Brand className={`fw-bold ${textColorClass} d-flex align-items-center`} style={{ fontSize: 20, letterSpacing: 1, cursor: 'pointer', transition: 'color 0.3s ease' }} onClick={() => handleNav('home')}>
            <style>
              {`
                @keyframes rotateLogo {
                  0% { transform: perspective(400px) rotateY(0deg); }
                  100% { transform: perspective(400px) rotateY(360deg); }
                }
                .animated-logo {
                  animation: rotateLogo 4s infinite linear;
                  margin-right: 10px;
                }
              `}
            </style>
            <svg className="animated-logo" width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20 60 L 20 20 L 50 40 L 80 20 L 80 60 L 70 50 L 70 35 L 55 45 L 55 80 L 50 90 L 45 80 L 45 45 L 30 35 L 30 50 Z" fill="url(#gradLogo)" />
              <defs>
                <linearGradient id="gradLogo" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--light-blue)', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: 'var(--electric-blue)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--primary-blue)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
            <div className={textColorClass} style={{ fontSize: 20, letterSpacing: 1, transition: 'color 0.3s ease' }}>
              MERCURY <span className="text-primary-blue">TECHNOLOGY</span>
            </div>
          </BSNavbar.Brand>
          <BSNavbar.Toggle
            aria-controls="navbar"
            className="ms-auto border-0 shadow-none p-1"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon" style={{ width: 24, height: 24, filter: 'brightness(0) invert(1)', transition: 'filter 0.3s ease' }} />
          </BSNavbar.Toggle>
          <BSNavbar.Collapse id="navbar">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link className={`${textColorClass} mx-3 fw-semibold`} style={{ fontSize: 16, cursor: 'pointer', transition: 'color 0.3s ease' }} onClick={() => handleNav('home')}>Home</Nav.Link>
              <Nav.Link className={`${textColorClass} mx-3 fw-semibold`} style={{ fontSize: 16, cursor: 'pointer', transition: 'color 0.3s ease' }} onClick={() => handleNav('about')}>About</Nav.Link>
              <Nav.Link className={`${textColorClass} mx-3 fw-semibold`} style={{ fontSize: 16, cursor: 'pointer', transition: 'color 0.3s ease' }} onClick={() => handleNav('services')}>Service</Nav.Link>
              <Nav.Link className={`${textColorClass} mx-3 fw-semibold`} style={{ fontSize: 16, cursor: 'pointer', transition: 'color 0.3s ease' }} onClick={() => handleNav('solutions')}>Solution</Nav.Link>
              <Nav.Link className={`${textColorClass} mx-3 fw-semibold`} style={{ fontSize: 16, cursor: 'pointer', transition: 'color 0.3s ease' }} onClick={() => handleNav('contact')}>Contact</Nav.Link>
              <Button className="btn-primary-blue ms-lg-4 mt-3 mt-lg-0 px-4 py-2 fw-semibold d-flex align-items-center gap-2" style={{ fontSize: 16 }} onClick={() => handleNav('contact')}>Get Started <span>→</span></Button>
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </>
  )
}
