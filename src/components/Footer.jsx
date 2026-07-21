import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleNav = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '#' },
    { name: 'Cookie Policy', path: '#' }
  ]

  return (
    <>
      <footer style={{ backgroundColor: 'var(--dark-navy)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 80, paddingBottom: 60, overflow: 'hidden', position: 'relative' }}>
        {/* Decorative Background Elements */}
        <div style={{ position: 'absolute', top: 0, left: '20%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)' }}></div>
        <div style={{ position: 'absolute', top: 0, right: '20%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)' }}></div>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(10,102,194,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="gy-5 justify-content-between align-items-start">
            <Col lg={4} className="text-center text-lg-start">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-4">
                <img src="/favicon.png" alt="Mercury Tech Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                <h1 className="fw-bold text-white mb-0" style={{ fontSize: 22, letterSpacing: 1 }}>
                  MERCURY <span className="text-primary-blue">TECH</span>
                </h1>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', maxWidth: 420, fontSize: 15, lineHeight: 1.9 }} className="mx-auto mx-lg-0 mb-4">
                Building innovative digital experiences with modern technology solutions for businesses worldwide. Accelerating your digital transformation.
              </p>
            </Col>

            <Col lg={2} md={4} xs={6} className="text-center text-lg-start">
              <h5 className="fw-bold mb-4 text-white" style={{ letterSpacing: '0.5px' }}>Quick Links</h5>
              <div className="d-flex flex-column gap-3">
                <span onClick={() => handleNav('home')} className="footer-link" style={{ color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', fontSize: 15, transition: 'all 0.3s ease', display: 'inline-block' }} onMouseOver={(e) => { e.target.style.color = 'var(--light-blue)'; e.target.style.transform = 'translateX(5px)'; }} onMouseOut={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.7)'; e.target.style.transform = 'translateX(0)'; }}>Home</span>
                <span onClick={() => handleNav('services')} className="footer-link" style={{ color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', fontSize: 15, transition: 'all 0.3s ease', display: 'inline-block' }} onMouseOver={(e) => { e.target.style.color = 'var(--light-blue)'; e.target.style.transform = 'translateX(5px)'; }} onMouseOut={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.7)'; e.target.style.transform = 'translateX(0)'; }}>Services</span>
                <span onClick={() => handleNav('solutions')} className="footer-link" style={{ color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', fontSize: 15, transition: 'all 0.3s ease', display: 'inline-block' }} onMouseOver={(e) => { e.target.style.color = 'var(--light-blue)'; e.target.style.transform = 'translateX(5px)'; }} onMouseOut={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.7)'; e.target.style.transform = 'translateX(0)'; }}>Solutions</span>
                <span onClick={() => handleNav('contact')} className="footer-link" style={{ color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', fontSize: 15, transition: 'all 0.3s ease', display: 'inline-block' }} onMouseOver={(e) => { e.target.style.color = 'var(--light-blue)'; e.target.style.transform = 'translateX(5px)'; }} onMouseOut={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.7)'; e.target.style.transform = 'translateX(0)'; }}>Contact</span>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6} className="text-center text-lg-start">
              <h5 className="fw-bold mb-4 text-white" style={{ letterSpacing: '0.5px' }}>Legal</h5>
              <div className="d-flex flex-column gap-3">
                {legalLinks.map((l) => (
                  <Link key={l.name} to={l.path} style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: 15, transition: 'all 0.3s ease', display: 'inline-block' }} onMouseOver={(e) => { e.target.style.color = 'var(--light-blue)'; e.target.style.transform = 'translateX(5px)'; }} onMouseOut={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.7)'; e.target.style.transform = 'translateX(0)'; }}>
                    {l.name}
                  </Link>
                ))}
              </div>
            </Col>

            <Col lg={3} md={4} className="text-center text-lg-start">
              <h5 className="fw-bold mb-4 text-white" style={{ letterSpacing: '0.5px' }}>Contact</h5>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-3">
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--light-blue)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 15, margin: 0 }}>Coimbatore, Tamil Nadu</p>
              </div>
              
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-4">
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--light-blue)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/></svg>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 15, margin: 0 }}>info@mercurytech.in</p>
              </div>
              
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
                <a href="https://www.instagram.com/merc_urytechnology?igsh=NGRxY28wYnBnenJk" target="_blank" rel="noopener noreferrer" style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-blue)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/mercury-technology-9a2771409/" target="_blank" rel="noopener noreferrer" style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-blue)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div style={{ backgroundColor: 'var(--dark-navy)', padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="text-white mb-3 mb-md-0" style={{ fontSize: 14, opacity: 0.7 }}>
              &copy; 2025 MERCURY TECHNOLOGY. All rights reserved.
            </div>
            <div className="text-white" style={{ fontSize: 13, opacity: 0.5, letterSpacing: '0.5px' }}>
              Designed for the Future
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
