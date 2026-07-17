import { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const policySections = [
  {
    title: 'Introduction',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    ),
    content: 'Welcome to Mercury Technology. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.'
  },
  {
    title: 'Information We Collect',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    content: 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data (first name, last name), Contact Data (email address, telephone numbers), and Technical Data (internet protocol (IP) address, browser type and version).'
  },
  {
    title: 'How We Use Your Information',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    ),
    content: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our IT solutions and services to you, to manage our relationship with you, and to improve our website, products/services, marketing, or customer relationships.'
  },
  {
    title: 'Information Sharing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
    ),
    content: 'We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.'
  },
  {
    title: 'Cookies',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 12.5v.01"></path><path d="M12 16v.01"></path><path d="M11 11v.01"></path><path d="M7 14.5v.01"></path></svg>
    ),
    content: 'Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.'
  },
  {
    title: 'Data Security',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    ),
    content: 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.'
  },
  {
    title: 'Third-Party Services',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
    ),
    content: 'Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.'
  },
  {
    title: 'Your Rights',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    ),
    content: 'Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to request access to your personal data, request correction of your personal data, request erasure of your personal data, and object to processing of your personal data.'
  },
  {
    title: 'Changes to This Policy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
    ),
    content: 'We keep our privacy policy under regular review. This version was last updated in July 2026. It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.'
  },
  {
    title: 'Contact Us',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    ),
    content: 'If you have any questions about this privacy policy or our privacy practices, please contact us at info@mercurytech.in or write to us at our registered office in Coimbatore, Tamil Nadu.'
  }
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--dark-navy)', backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(37, 99, 235, 0.08), transparent 25%), radial-gradient(circle at 85% 30%, rgba(56, 189, 248, 0.08), transparent 25%)', minHeight: '100vh', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Background Orbs */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'rgba(37, 99, 235, 0.15)', borderRadius: '50%', filter: 'blur(120px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', filter: 'blur(150px)', zIndex: 0 }} />

      {/* Hero Section */}
      <div className="position-relative pt-5 pb-5" style={{ zIndex: 1, marginTop: '80px' }}>
        <Container className="text-center pt-5 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="d-inline-block px-4 py-2 rounded-pill mb-4" style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
              <span className="text-primary-blue fw-bold" style={{ letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>
                Last Updated: July 2026
              </span>
            </div>
            
            <h1 className="fw-bolder display-3 mb-4" style={{ background: 'linear-gradient(to right, #ffffff, var(--light-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1px' }}>
              Privacy Policy
            </h1>
            
            <p className="mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '750px', fontSize: '19px', lineHeight: 1.8, fontWeight: '300' }}>
              At Mercury Technology, we are committed to protecting your privacy and ensuring your data is handled securely and transparently. Read on to learn more about how we collect, use, and safeguard your information.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Content Section */}
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center">
          <Col lg={9}>
            {policySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.015, translateY: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mb-4"
              >
                <Card 
                  className="border-0 rounded-4 p-4 p-md-5 text-white h-100" 
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div className="d-flex align-items-start gap-4">
                    <div 
                      className="d-flex align-items-center justify-content-center flex-shrink-0" 
                      style={{ 
                        width: '54px', 
                        height: '54px', 
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0.05) 100%)', 
                        color: 'var(--light-blue)',
                        borderRadius: '14px',
                        border: '1px solid rgba(37, 99, 235, 0.3)',
                        boxShadow: '0 0 15px rgba(37, 99, 235, 0.2)'
                      }}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="fw-bold mb-3" style={{ fontSize: '24px', letterSpacing: '-0.5px' }}>{section.title}</h3>
                      <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '17px', lineHeight: 1.8, fontWeight: '300' }}>
                        {section.content}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
