import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div id="contact">
      <div className="section-padding bg-off-white text-dark">
        <Container>
          <motion.div
            className="text-center mb-5 pb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="fw-bold text-dark-navy display-5">Send Us a <span className="text-primary-blue">Message</span></h2>
            <div className="mx-auto mt-3 rounded mb-4" style={{ width: '60px', height: '4px', backgroundColor: 'var(--electric-blue)' }}></div>
            <p className="fs-5 mt-3 mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>Ready to transform your digital presence? We're here to help you build the future.</p>
          </motion.div>

          <Row className="g-5">
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="bg-white p-4 p-md-5 rounded-4 shadow-md border-0" style={{ border: '1px solid var(--border-color) !important' }}>
                  <Form>
                    <Row className="g-4 mb-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-dark-navy small">First Name</Form.Label>
                          <Form.Control type="text" placeholder="John" className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-dark-navy small">Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Doe" className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue" />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-medium text-dark-navy small">Email Address</Form.Label>
                      <Form.Control type="email" placeholder="john@example.com" className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue" />
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-medium text-dark-navy small">Service of Interest</Form.Label>
                      <Form.Select className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue text-muted">
                        <option>Select a service...</option>
                        <option>Web Development</option>
                        <option>Mobile Apps</option>
                        <option>Digital Marketing</option>
                        <option>Cloud Solutions</option>
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-medium text-dark-navy small">Project Details</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Tell us about your project goals and timeline..." className="bg-off-white border-0 py-3 px-4 rounded-3 shadow-none focus-ring focus-ring-primary-blue" />
                    </Form.Group>
                    
                    <Button className="btn-primary-blue w-100 py-3 fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontSize: '14px' }}>
                      Send Message
                    </Button>
                  </Form>
                </div>
              </motion.div>
            </Col>
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-100"
              >
                <div className="p-4 p-md-5 bg-dark-navy rounded-4 shadow-md text-white h-100 d-flex flex-column position-relative overflow-hidden">
                  <div className="position-absolute top-0 end-0 p-3 opacity-25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>
                  </div>
                  
                  <div className="position-relative z-index-1">
                    <div className="mb-5">
                      <h4 className="fw-bold mb-4 text-white">Contact Information</h4>
                      <p className="text-white opacity-75 mb-4" style={{ lineHeight: 1.6 }}>Fill out the form and our team will get back to you within 24 hours.</p>
                      
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="bg-primary-blue rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="mb-0 small text-uppercase text-white opacity-75 fw-semibold" style={{ letterSpacing: '1px' }}>Email</p>
                          <p className="mb-0 fw-medium text-white">info@mercurytech.in</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="bg-primary-blue rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="mb-0 small text-uppercase text-white opacity-75 fw-semibold" style={{ letterSpacing: '1px' }}>Location</p>
                          <p className="mb-0 fw-medium text-white">Coimbatore, Tamil Nadu</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <iframe
                        title="Coimbatore Location"
                        src="https://www.google.com/maps?q=Coimbatore,TamilNadu&output=embed"
                        width="100%"
                        height="220"
                        style={{ border: 0, borderRadius: '12px', opacity: 0.9, filter: 'grayscale(0.5)' }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
