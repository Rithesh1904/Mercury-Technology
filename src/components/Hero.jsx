import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import heroBgVideo from '../assets/back.mp4'

export default function Hero() {
  return (
    <div id="home" className="position-relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      {/* Very subtle gradient overlay to ensure text contrast at the very center, but leaving the image clearly visible */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.3) 0%, rgba(2, 6, 23, 0.1) 50%, rgba(2, 6, 23, 0.4) 100%)',
          zIndex: 1
        }}
      ></div>

      <style>
        {`

          .hero-gradient-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }
        `}
      </style>

      <div className="hero-gradient-bg"></div>

      {/* Subtle grid pattern overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.03, backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }}></div>

      {/* Stamp overlay to cover the logo completely */}
      <div 
        className="mobile-hide-stamp"
        style={{
          position: 'absolute',
          bottom: '35px',
          right: '85px',
          width: '130px',
          height: '130px',
          zIndex: 10,
          background: 'rgba(2, 6, 23, 0.98)',
          backdropFilter: 'blur(12px)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.9)',
          border: '2px solid rgba(37, 99, 235, 0.7)'
        }}
      >
        <span className="text-primary-blue fw-bold text-center" style={{ fontSize: '15px', lineHeight: '1.2' }}>MERCURY<br/>TECH</span>
      </div>

      <Container className="position-relative pt-5" style={{ zIndex: 2 }}>
        <Row className="w-100 justify-content-center mx-0 text-center">
          <Col lg={9} md={10}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-inline-block px-3 py-1 mb-4 rounded-pill" style={{ background: 'rgba(2, 6, 23, 0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(37, 99, 235, 0.5)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                <span className="text-primary-blue fw-semibold" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>NEXT GENERATION DIGITAL SOLUTIONS</span>
              </div>

              <h1 className="fw-bold lh-1 mb-4 text-white" style={{ fontSize: 'clamp(45px, 6vw, 85px)', letterSpacing: '-1.5px', textShadow: '0 8px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)' }}>
                Transforming<br />
                <span className="text-primary-blue" style={{ textShadow: '0 8px 24px rgba(0,0,0,0.9)' }}>Ideas Into Reality</span>
              </h1>

              <p className="fs-5 mb-5 mx-auto" style={{ maxWidth: '680px', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.95)', textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)', fontWeight: '500' }}>
                We build modern AI-driven applications and premium digital solutions for startups and businesses with powerful user experiences and innovative technologies.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button className="btn-primary-blue px-4 py-3 fw-semibold d-flex align-items-center gap-2" style={{ fontSize: 16, boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)' }}>
                  Explore Our Work <span>→</span>
                </Button>
                <Button className="btn-outline-blue px-4 py-3 fw-semibold d-flex align-items-center gap-2" style={{ fontSize: 16, borderColor: 'rgba(255,255,255,0.4)', color: 'white', background: 'rgba(2, 6, 23, 0.4)', backdropFilter: 'blur(4px)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                  Get In Touch
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
