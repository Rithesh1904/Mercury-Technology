import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import intelligenceOverviewImg from '../assets/interlligence overview.jpg'
import fleetOverviewImg from '../assets/fleet overview.jpg'
import vehicleDiagnosticsImg from '../assets/VEHICLE DIAGNOSTICS.jpg'
import smartAgricultureImg from '../assets/SMART AGRICULTURE.jpg'

const solutions = [
  {
    title: 'INDUSTRIAL INTELLIGENCE',
    name: 'Mercury Capture',
    desc: 'Advanced data acquisition systems for industrial intelligence. Sensor-driven platforms for deep operational visibility.',
    points: ['Real-time data streaming', 'Edge computing capabilities', 'Seamless ERP integration'],
    image: intelligenceOverviewImg,
    reverse: false,
  },
  {
    title: 'LOGISTICS & TRANSPORT',
    name: 'Mercury Fleet',
    desc: 'AI-powered fleet management to optimize routes, reduce fuel usage, and improve safety.',
    points: ['Route optimization AI', 'Fuel & Maintenance tracking', 'Driver behavior analytics'],
    image: fleetOverviewImg,
    reverse: true,
  },
  {
    title: 'VEHICLE DIAGNOSTICS',
    name: 'Mercury Telematics',
    desc: 'Deep vehicle diagnostics and performance monitoring for smart mobility systems.',
    points: ['Engine health monitoring', 'Live GPS tracking', 'Incident reconstruction'],
    image: vehicleDiagnosticsImg,
    reverse: false,
  },
  {
    title: 'SMART AGRICULTURE',
    name: 'Mercury Agri',
    desc: 'IoT-powered smart farming solutions for precision agriculture and automation.',
    points: ['Soil moisture sensing', 'Automated irrigation', 'Crop health monitoring'],
    image: smartAgricultureImg,
    reverse: true,
  },
]

function SolutionCard({ s, i }) {
  return (
    <Row className={`align-items-center mb-5 pb-4 g-5 ${s.reverse ? 'flex-row-reverse' : ''}`} key={i}>
      <Col lg={6}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="position-relative">
            <img
              src={s.image}
              alt={s.name}
              className="img-fluid rounded-4 shadow-md"
              style={{ height: 380, width: '100%', objectFit: 'cover' }}
            />
            <div className="position-absolute rounded-4 w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top right, rgba(10, 102, 194, 0.2), transparent)', pointerEvents: 'none' }}></div>
          </div>
        </motion.div>
      </Col>
      <Col lg={6}>
        <motion.div
          initial={{ opacity: 0, x: s.reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="d-flex align-items-center gap-2 mb-2">
            <div style={{ width: '20px', height: '2px', background: 'var(--electric-blue)' }}></div>
            <h6 className="text-primary-blue fw-bold mb-0 text-uppercase" style={{ letterSpacing: '1px' }}>{s.title}</h6>
          </div>
          
          <h3 className="fw-bold mb-3 text-dark-navy display-6">{s.name}</h3>
          <p className="fs-5 mb-4" style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>{s.desc}</p>
          
          <ul className="list-unstyled mb-4">
            {s.points.map((p, j) => (
              <li className="mb-3 d-flex align-items-start gap-3" key={j}>
                <div className="text-primary-blue mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                  </svg>
                </div>
                <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>{p}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 text-primary-blue fw-semibold d-inline-flex align-items-center gap-2" style={{ cursor: 'pointer', transition: 'var(--transition-smooth)' }}>
            Learn More <span style={{ transition: 'transform 0.3s ease' }}>→</span>
          </div>
        </motion.div>
      </Col>
    </Row>
  )
}

export default function Solutions() {
  return (
    <div id="solutions">
      <div className="section-padding bg-white">
        <Container>
          <motion.div
            className="text-center mb-5 pb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="fw-bold display-5 text-dark-navy">Smart <span className="text-primary-blue">Solutions</span></h2>
            <div className="mx-auto mt-3 rounded mb-4" style={{ width: '60px', height: '4px', backgroundColor: 'var(--electric-blue)' }}></div>
            <p className="fs-5 mt-3 mx-auto" style={{ maxWidth: '700px', color: 'var(--text-muted)' }}>Reshaping industries with automation, AI, and cutting-edge innovation designed for scale.</p>
          </motion.div>
          {solutions.map((s, i) => (
            <SolutionCard s={s} i={i} key={i} />
          ))}
        </Container>
      </div>
    </div>
  )
}
