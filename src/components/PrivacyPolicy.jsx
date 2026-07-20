import { useEffect, useState } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { motion } from 'framer-motion'

const policySections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>Mercury Technology ("we," "us," "our," or "Company") operates this website and provides technology-related services to businesses and individuals.</p>
        <p>This Privacy Policy explains how we collect, use, protect, and disclose information when you visit our website, contact us, or use our services.</p>
        <p>We are committed to protecting the privacy and security of the personal information shared with us.</p>
      </>
    )
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p>We may collect the following types of information when you interact with our website or services.</p>
        <h6 className="mt-4 mb-2 fw-bold text-dark">A. Personal Information</h6>
        <p>Depending on how you interact with us, we may collect: Full Name, Email Address, Mobile or Phone Number, Company or Organization Name, Job Title or Role (where voluntarily provided), Information submitted through our contact or enquiry forms, and Any other information you voluntarily provide to us.</p>
        <h6 className="mt-4 mb-2 fw-bold text-dark">B. Enquiry and Communication Information</h6>
        <p>When you contact us regarding our services, we may collect: Your enquiry or project requirements, Service interests, Business requirements, Communication history, and Information provided during consultations or discussions.</p>
        <h6 className="mt-4 mb-2 fw-bold text-dark">C. Technical Information</h6>
        <p>When you visit our website, certain technical information may be collected automatically, including: IP Address, Browser Type and Version, Device Type, Operating System, Date and Time of Visit, Pages Viewed, Website Usage Logs, and Referring Website or Source.</p>
        <h6 className="mt-4 mb-2 fw-bold text-dark">D. Website Usage Information</h6>
        <p>We may collect information regarding your interaction with our website, including: Pages visited, Services viewed, Website navigation activity, Interaction with website features, Form submission activity, and General browsing behavior.</p>
      </>
    )
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: (
      <>
        <p>The information collected may be used to:</p>
        <ul className="ps-4 mb-4">
          <li>Respond to enquiries and contact requests.</li>
          <li>Understand your business and technology requirements.</li>
          <li>Provide information about our products and services.</li>
          <li>Communicate with you regarding our services.</li>
          <li>Schedule consultations or discussions.</li>
          <li>Provide quotations, proposals, and service-related information.</li>
          <li>Improve our website, services, functionality, and user experience.</li>
          <li>Maintain the security and functionality of our website.</li>
          <li>Detect, prevent, and investigate unauthorized or fraudulent activities.</li>
          <li>Comply with applicable legal and regulatory requirements.</li>
          <li>Send service-related communications.</li>
          <li>Send promotional or marketing communications where permitted by applicable law and, where required, with your consent.</li>
        </ul>
      </>
    )
  },
  {
    id: 'third-party',
    title: 'Third-Party Disclosure',
    content: (
      <>
        <p>Mercury Technology does not sell, rent, or trade your personal information.</p>
        <p>Your information may be shared only when reasonably necessary with trusted third parties such as: Website hosting and cloud service providers, Email and communication service providers, Website analytics and performance service providers, IT, security, and technical support providers, Professional advisors where necessary, and Government authorities or regulatory bodies where disclosure is required by applicable law.</p>
        <p>All third-party service providers are expected to maintain appropriate confidentiality and security standards.</p>
      </>
    )
  },
  {
    id: 'protection',
    title: 'Information Protection',
    content: (
      <>
        <p>We implement reasonable administrative, technical, and organizational measures to protect your personal information against: Unauthorized access, Unauthorized disclosure, Alteration, Misuse, Loss or destruction.</p>
        <p>Our security measures may include: HTTPS/SSL encrypted communication, Access controls, Secure hosting infrastructure, Regular system monitoring, Security updates and maintenance, and Reasonable safeguards against unauthorized access.</p>
        <p>However, no method of transmission over the internet or method of electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your information.</p>
      </>
    )
  },
  {
    id: 'rights',
    title: 'Rights of Users',
    content: (
      <>
        <p>Subject to applicable laws of India, you may have the right to:</p>
        <ul className="ps-4 mb-4">
          <li>Request access to personal information held about you.</li>
          <li>Request correction or updating of inaccurate information.</li>
          <li>Request deletion of personal information where permitted by law.</li>
          <li>Withdraw consent for receiving promotional communications.</li>
          <li>Raise concerns regarding the processing of your personal information.</li>
          <li>Contact us regarding privacy-related concerns or grievances.</li>
        </ul>
        <p>We will respond to valid requests within a reasonable period in accordance with applicable law.</p>
      </>
    )
  },
  {
    id: 'cookies',
    title: 'Cookies Policy',
    content: (
      <>
        <p>Mercury Technology may use cookies and similar technologies to improve website functionality and user experience.</p>
        <p>Cookies may be used to: Maintain website functionality, Remember user preferences, Improve website performance, Analyze website traffic and usage, Understand how visitors interact with our website, and Improve the overall user experience.</p>
        <p>You may disable cookies through your browser settings. However, disabling cookies may affect certain features or functionality of the website.</p>
      </>
    )
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: (
      <>
        <p>We retain personal information only for as long as reasonably necessary to: Respond to enquiries, Provide requested services, Maintain business and communication records, Improve our services and website, Comply with applicable legal, tax, accounting, and regulatory obligations, and Resolve disputes and enforce legal agreements.</p>
        <p>After the applicable retention period, information may be securely deleted, anonymized, or otherwise handled in accordance with applicable laws.</p>
      </>
    )
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: (
      <>
        <p>Our website and services are not intentionally directed toward children under the age of 18.</p>
        <p>We do not knowingly collect personal information from children. If we become aware that personal information belonging to a child has been collected without appropriate consent, we will take reasonable steps to delete such information.</p>
      </>
    )
  },
  {
    id: 'external-links',
    title: 'External Links',
    content: (
      <>
        <p>Our website may contain links to third-party websites, platforms, or services.</p>
        <p>We are not responsible for the privacy practices, content, security, or policies of third-party websites. We recommend reviewing the privacy policies of any external websites you visit.</p>
      </>
    )
  },
  {
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    content: (
      <>
        <p>Mercury Technology reserves the right to modify or update this Privacy Policy at any time.</p>
        <p>Any changes will be posted on this page together with the updated Effective Date.</p>
        <p>Your continued use of the website after changes are posted may constitute acceptance of the revised Privacy Policy.</p>
      </>
    )
  }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = policySections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150; // Offset for sticky header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset to not overlap with top
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-off-white" style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* Hero Header */}
      <div className="py-5 mb-5" style={{ backgroundColor: 'var(--dark-navy)', paddingTop: '160px !important', paddingBottom: '80px !important' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-5"
          >
            <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(37, 99, 235, 0.3)', color: 'var(--light-blue)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>
              LEGAL DOCUMENT
            </div>
            <h1 className="fw-bold mb-3 text-white" style={{ fontSize: '3rem', letterSpacing: '-1px' }}>
              Privacy Policy
            </h1>
            <p className="mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.15rem', maxWidth: '600px' }}>
              Effective Date: July 20, 2025
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Main Two-Column Layout */}
      <Container>
        <Row className="gx-lg-5">
          {/* Sidebar Navigation */}
          <Col lg={3} className="d-none d-lg-block">
            <div className="sticky-top" style={{ top: '120px', zIndex: 10 }}>
              <h6 className="text-uppercase text-muted fw-bold mb-4" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                Table of Contents
              </h6>
              <Nav className="flex-column policy-nav">
                {policySections.map((section, index) => (
                  <Nav.Link 
                    key={index} 
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`policy-nav-link ${activeSection === section.id ? 'active' : ''}`}
                  >
                    {index === 0 ? '' : `${index}. `}{section.title}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          </Col>

          {/* Document Content */}
          <Col lg={9}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-4 p-4 p-md-5"
              style={{
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
                border: '1px solid var(--border-color)'
              }}
            >
              {policySections.map((section, index) => (
                <div key={index} id={section.id} className="policy-section mb-5">
                  <h3 className="fw-bold text-dark mb-4 pb-3 border-bottom" style={{ fontSize: '1.75rem', borderColor: '#f1f5f9 !important' }}>
                    {index === 0 ? '' : `${index}. `}{section.title}
                  </h3>
                  <div className="policy-content" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                    {section.content}
                  </div>
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      <style>{`
        .policy-nav-link {
          color: var(--text-muted);
          padding: 0.5rem 0;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          border-left: 2px solid transparent;
          padding-left: 1rem;
          margin-bottom: 0.25rem;
        }
        .policy-nav-link:hover {
          color: var(--electric-blue);
          border-left-color: rgba(37, 99, 235, 0.3);
        }
        .policy-nav-link.active {
          color: var(--electric-blue);
          font-weight: 600;
          border-left-color: var(--electric-blue);
          background: linear-gradient(90deg, var(--light-blue) 0%, transparent 100%);
          border-radius: 0 4px 4px 0;
        }
        .policy-content p {
          margin-bottom: 1.25rem;
        }
        .policy-content li {
          margin-bottom: 0.5rem;
        }
        .policy-section:last-child {
          margin-bottom: 0 !important;
        }
      `}</style>
    </div>
  );
}
