import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion, useInView, animate } from 'framer-motion'
import aiImg from '../assets/ai.jpg'
import digitalBoardImg from '../assets/digtal board.jpg'
import globalNetworkImg from '../assets/gobal network.jpg'
import iotImg from '../assets/iot.jpg'
import MotionCard from './MotionCard'

function AnimatedCounter({ from = 0, to, suffix = "", duration = 2.5 }) {
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix
          }
        }
      })
      return () => controls.stop()
    }
  }, [from, to, inView, suffix, duration])

  return <span ref={nodeRef}>{from}{suffix}</span>
}

export default function About() {
  return (
    <div id="about">
      <div className="about-section-bg text-dark section-padding overflow-hidden">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="fw-bold display-5 text-dark-navy">About <span className="text-primary-blue">Us</span></h2>
            <div className="mx-auto mt-3 rounded" style={{ width: '60px', height: '4px', backgroundColor: 'var(--electric-blue)' }}></div>
          </motion.div>

          <Row className="align-items-center g-5 mb-5 pb-4">
            <Col lg={6}>
              <motion.div
                className="text-center text-lg-start"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="fw-bold mb-4 text-dark-navy">Who We Are</h2>
                <p className="fs-5" style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
                  Mercury Technology is a modern software company focused on building innovative AI-powered digital solutions for businesses around the world.
                </p>
                <p className="fs-5 mt-4" style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
                  We combine creativity, technology, and strategy to create scalable applications with premium user experiences and future-ready solutions.
                </p>
                <div className="d-flex gap-4 gap-lg-5 mt-5 justify-content-center justify-content-lg-start">
                  <div>
                    <h1 className="text-primary-blue fw-bold display-6">
                      <AnimatedCounter to={50} suffix="+" />
                    </h1>
                    <p className="text-muted fw-medium text-uppercase" style={{ letterSpacing: '1px', fontSize: '13px' }}>Projects</p>
                  </div>
                  <div>
                    <h1 className="text-primary-blue fw-bold display-6">
                      <AnimatedCounter to={20} suffix="+" />
                    </h1>
                    <p className="text-muted fw-medium text-uppercase" style={{ letterSpacing: '1px', fontSize: '13px' }}>Experts</p>
                  </div>
                  <div>
                    <h1 className="text-primary-blue fw-bold display-6">
                      <AnimatedCounter to={10} suffix="+" />
                    </h1>
                    <p className="text-muted fw-medium text-uppercase" style={{ letterSpacing: '1px', fontSize: '13px' }}>Years</p>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="position-relative w-100 d-flex justify-content-center align-items-center mt-5 mt-lg-0" style={{ height: '500px' }}>
                  
                  {/* Card 1 */}
                  <div className="position-absolute" style={{ width: '55%', maxWidth: '280px', height: '340px', left: '-5%', top: '15%', transform: 'rotate(-12deg)', zIndex: 1 }}>
                    <MotionCard>
                      <img src={aiImg} alt="AI" className="w-100 h-100 shadow" style={{ objectFit: 'cover', borderRadius: '1rem' }} />
                      <div className="position-absolute shadow-sm" style={{ top: '20%', right: '-15%', background: '#ffc1cc', color: '#000', padding: '8px 20px', borderRadius: '24px', fontSize: '0.85rem', fontWeight: '600', transform: 'rotate(6deg)', whiteSpace: 'nowrap' }}>intelligent by design</div>
                    </MotionCard>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="position-absolute" style={{ width: '55%', maxWidth: '280px', height: '340px', left: '15%', top: '25%', transform: 'rotate(-4deg)', zIndex: 2 }}>
                    <MotionCard>
                      <img src={digitalBoardImg} alt="Digital Board" className="w-100 h-100 shadow" style={{ objectFit: 'cover', borderRadius: '1rem' }} />
                      <div className="position-absolute shadow-sm" style={{ bottom: '15%', left: '-5%', background: '#ffdfba', color: '#000', padding: '8px 20px', borderRadius: '24px', fontSize: '0.85rem', fontWeight: '600', transform: 'rotate(-4deg)', whiteSpace: 'nowrap' }}>scalable solutions</div>
                    </MotionCard>
                  </div>

                  {/* Card 3 */}
                  <div className="position-absolute" style={{ width: '55%', maxWidth: '280px', height: '340px', left: '35%', top: '10%', transform: 'rotate(2deg)', zIndex: 3 }}>
                    <MotionCard>
                      <img src={globalNetworkImg} alt="Global Network" className="w-100 h-100 shadow" style={{ objectFit: 'cover', borderRadius: '1rem' }} />
                    </MotionCard>
                  </div>

                  {/* Card 4 */}
                  <div className="position-absolute" style={{ width: '55%', maxWidth: '280px', height: '340px', left: '55%', top: '20%', transform: 'rotate(10deg)', zIndex: 4 }}>
                    <MotionCard>
                      <img src={iotImg} alt="IoT" className="w-100 h-100 shadow" style={{ objectFit: 'cover', borderRadius: '1rem' }} />
                      <div className="position-absolute shadow-sm" style={{ top: '35%', left: '-15%', background: '#c8e6c9', color: '#000', padding: '8px 20px', borderRadius: '24px', fontSize: '0.85rem', fontWeight: '600', transform: 'rotate(-6deg)', whiteSpace: 'nowrap' }}>future ready</div>
                    </MotionCard>
                  </div>
                  
                </div>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4 mt-2">
            <Col lg={4}>
              <motion.div
                className="h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="card h-100 border-0">
                  <div className="bg"></div>
                  <div className="blob"></div>
                  <div className="position-relative p-4 d-flex flex-column h-100 w-100 text-start" style={{ zIndex: 3 }}>
                    <div className="mb-4 text-primary-blue bg-light-blue d-inline-flex p-3 rounded-circle" style={{ width: 'fit-content' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                      </svg>
                    </div>
                    <h3 className="fw-bold text-dark-navy mb-3">Our Vision</h3>
                    <p className="fs-6 mb-0" style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>To become a global leader in intelligent digital transformation empowering industries through AI and innovation.</p>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col lg={4}>
              <motion.div
                className="h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="card h-100 border-0">
                  <div className="bg"></div>
                  <div className="blob"></div>
                  <div className="position-relative p-4 d-flex flex-column h-100 w-100 text-start" style={{ zIndex: 3 }}>
                    <div className="mb-4 text-primary-blue bg-light-blue d-inline-flex p-3 rounded-circle" style={{ width: 'fit-content' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                      </svg>
                    </div>
                    <h3 className="fw-bold text-dark-navy mb-3">Our Mission</h3>
                    <p className="fs-6 mb-0" style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>To craft future-ready experiences by blending creativity, technology, and strategy—driven by purpose, fueled by passion.</p>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col lg={4}>
              <motion.div
                className="h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="card h-100 border-0">
                  <div className="bg"></div>
                  <div className="blob"></div>
                  <div className="position-relative p-4 d-flex flex-column h-100 w-100 text-start" style={{ zIndex: 3 }}>
                    <div className="mb-4 text-primary-blue bg-light-blue d-inline-flex p-3 rounded-circle" style={{ width: 'fit-content' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 1 0 8 1z"/>
                      </svg>
                    </div>
                    <h3 className="fw-bold text-dark-navy mb-3">Innovation</h3>
                    <p className="fs-6 mb-0" style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>We constantly push boundaries, harnessing emerging technologies to shape intelligent digital solutions for the future.</p>
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
