import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Tieups() {
  const tieups = [
    {
      title: 'Thiran360 AI',
      subtitle: 'AI Solutions Partner',
      url: 'https://www.thiran360ai.com/',
      icon: (
        <img src="https://cdn.phototourl.com/free/2026-07-09-c41f6b1a-8ae7-4ab0-b28f-58c10a13556d.jpg" style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: '140px', maxHeight: '140px' }} alt="Thiran360 AI" />
      )
    },
    {
      title: 'Coding Boss',
      subtitle: 'Education Partner',
      url: 'https://codingboss.in/',
      icon: (
        <img src="https://cdn.phototourl.com/free/2026-07-09-4d45eb9a-e0cc-4d35-8d3c-0c7e23e7ff22.png" alt="Coding Boss" style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: '140px', maxHeight: '140px' }} />
      )
    }
  ];

  return (
    <section id="tieups" className="bg-dark-navy section-padding text-white position-relative">
      {/* Subtle Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
      <div className="position-absolute bottom-0 end-0 w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 90% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
      
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <motion.div
          className="text-center mb-5 pb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-white fw-bold display-5">Partners & <span className="text-primary-blue">Tie-ups</span></h2>
          <div className="mx-auto mt-3 rounded" style={{ width: '60px', height: '4px', backgroundColor: 'var(--electric-blue)' }}></div>
          <p className="mt-3 fs-5 mx-auto" style={{ maxWidth: '700px', color: 'rgba(255,255,255,0.7)' }}>Collaborating with industry leaders to deliver exceptional value and innovative solutions.</p>
        </motion.div>

        <Row className="g-5 justify-content-center mt-3">
          {tieups.map((item, idx) => (
            <Col lg={4} md={6} key={idx} className="d-flex flex-column align-items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-100 cursor-pointer"
                onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
                style={{ cursor: 'pointer' }}
              >
                <div className="bg-white rounded-4 p-5 d-flex align-items-center justify-content-center shadow-lg mx-auto" style={{ height: '220px', maxWidth: '300px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {item.icon}
                </div>
                
                <div className="text-center mt-4">
                  <h4 className="text-white fw-bold mb-2" style={{ fontSize: '24px' }}>
                    {item.title}
                  </h4>
                  <p className="text-primary-blue fw-semibold text-uppercase" style={{ margin: 0, fontSize: '13px', letterSpacing: '1px' }}>
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        
        <div className="mt-5 pt-5 border-top" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
          <motion.div 
            className="d-flex flex-column align-items-center align-items-lg-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="d-inline-flex align-items-stretch rounded overflow-hidden shadow-lg mb-4 bg-navy-light" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="bg-primary-blue text-white px-4 py-2 d-flex align-items-center">
                <span className="fw-semibold text-uppercase" style={{ fontSize: '14px', letterSpacing: '1px' }}>Meet Our CEO</span>
              </div>
              <div className="px-4 py-2 d-flex align-items-center">
                <span className="fw-bold fs-5 text-white">Manickavasagar G</span>
              </div>
            </div>
            
            <a
              href="https://www.linkedin.com/in/manickavasagarg/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center gap-3 text-white text-decoration-none p-3 rounded-pill"
              style={{ background: 'rgba(255,255,255,0.05)', transition: 'background 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', background: '#0A66C2' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </div>
              <span className="fw-semibold">Connect on LinkedIn</span>
              <span className="text-primary-blue ms-1">→</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
