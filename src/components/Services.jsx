import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import webDevImg from '../assets/web development.jpg'
import mobileSolImg from '../assets/mobile solution.jpg'
import aiRobotImg from '../assets/ai and robot.jpg'
import iotSystemsImg from '../assets/iot systems.jpg'
import uiUxImg from '../assets/ui nad ux.jpg'
import cloudImg from '../assets/cloud.jpg'

const services = [
  { title: 'Web Development', desc: 'Crafting high-performance, responsive websites that deliver exceptional user experiences.', image: webDevImg },
  { title: 'Mobile Solutions', desc: 'Developing intuitive iOS and Android applications that engage and delight users.', image: mobileSolImg },
  { title: 'AI & Automation', desc: 'Leveraging artificial intelligence to streamline operations and drive intelligent growth.', image: aiRobotImg },
  { title: 'IoT Systems', desc: 'Connecting devices and data to create smart, integrated environments for the future.', image: iotSystemsImg },
  { title: 'UI/UX Design', desc: 'Designing beautiful, user-centric interfaces that blend aesthetics with functionality.', image: uiUxImg },
  { title: 'Cloud Infrastructure', desc: 'Building scalable, secure cloud environments that empower your digital transformation.', image: cloudImg },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <div id="services">
      {/* Updated background to use the light cool tone */}
      <div className="section-padding bg-light-cool">
        <Container>
          <motion.div
            className="text-center mb-5 pb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="fw-bold display-5 text-dark-navy">Our <span className="text-primary-blue">Services</span></h2>
            <div className="mx-auto mt-3 rounded mb-4" style={{ width: '60px', height: '4px', backgroundColor: 'var(--electric-blue)' }}></div>
            <p className="mt-3 fs-5 mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>We offer comprehensive technology solutions tailored to your business needs, driven by innovation and excellence.</p>
          </motion.div>

          <Row className="g-4">
            <style>
              {`
                .service-img-container:hover img {
                  transform: scale(1.05);
                }
                .service-img-container:hover .image-overlay {
                  opacity: 1 !important;
                }
                .service-img-container:hover .learn-more-btn {
                  opacity: 1 !important;
                  transform: translateY(0) !important;
                }
              `}
            </style>
            {services.map((s, i) => (
              <Col lg={4} md={6} key={i}>
                <motion.div
                  className="h-100"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="position-relative overflow-hidden h-100 service-card" style={{ cursor: 'default' }}>
                    <div className="service-img-container position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      />
                      <div 
                        className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{ 
                          backgroundColor: 'rgba(10, 25, 47, 0.5)', 
                          opacity: 0, 
                          transition: 'opacity 0.4s ease' 
                        }}
                      >
                        <button
                          className="learn-more-btn btn-primary-blue fw-semibold rounded px-4 py-2 border-0 shadow-lg"
                          onClick={() => navigate('/service-form')}
                          style={{
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: 'all 0.4s ease 0.1s'
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="p-4 bg-white h-100">
                      <h4 className="fw-bold mb-3 text-dark-navy">{s.title}</h4>
                      <p style={{ lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: 0 }}>{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}
