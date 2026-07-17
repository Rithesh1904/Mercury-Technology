import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function ServiceForm() {
  const navigate = useNavigate()

  const scrollToServices = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh', padding: '80px 0' }}>
      <Container style={{ maxWidth: 750 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ background: '#ffffff', borderRadius: 28, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)' }}
        >
          <Row className="g-0">
            <Col lg={5}>
              <div style={{ background: 'linear-gradient(135deg, var(--primary-blue), var(--dark-navy))', height: '100%', padding: '50px 40px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '150px', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-5%', right: '-10%', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
                
                <h2 className="fw-bold mb-3 display-6 position-relative" style={{ zIndex: 1 }}>Service Request</h2>
                <div className="rounded mb-4 position-relative" style={{ width: '40px', height: '4px', backgroundColor: 'var(--electric-blue)', zIndex: 1 }}></div>
                <p className="position-relative" style={{ lineHeight: 1.7, opacity: 0.9, zIndex: 1, fontSize: '15px' }}>Tell us about your project goals. Our team of experts will connect with you to design a solution that drives your business forward.</p>
                
                <div className="mt-5 pt-4 position-relative d-none d-lg-block" style={{ zIndex: 1 }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--electric-blue)" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                    <span className="small opacity-75">Expert Consultation</span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--electric-blue)" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                    <span className="small opacity-75">Tailored Solutions</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div style={{ padding: '50px 40px' }}>
                <h3 className="fw-bold text-dark-navy mb-2">Fill the Form</h3>
                <p className="text-muted mb-4 small">We'll get back to you within 24 hours.</p>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium text-dark-navy small">Full Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium text-dark-navy small">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="john@example.com" className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium text-dark-navy small">Address</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Your location" className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium text-dark-navy small">Project Details</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="How can we help you?" className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue" />
                  </Form.Group>
                  <div className="d-flex gap-3">
                    <Button onClick={scrollToServices} className="fw-semibold text-dark-navy" style={{ background: 'var(--off-white)', border: '1px solid var(--border-color)', padding: '14px 24px', borderRadius: '12px', fontSize: '15px', flex: 1, transition: 'var(--transition-smooth)' }} onMouseOver={(e) => e.target.style.background = '#e2e8f0'} onMouseOut={(e) => e.target.style.background = 'var(--off-white)'}>Back</Button>
                    <Button type="submit" className="btn-primary-blue fw-semibold" style={{ padding: '14px 24px', borderRadius: '12px', fontSize: '15px', flex: 2, border: 'none' }}>Submit Request</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  )
}
