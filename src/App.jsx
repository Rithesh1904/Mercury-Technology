import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServiceForm from './components/ServiceForm'
import Tieups from './components/Tieups'
import PrivacyPolicy from './components/PrivacyPolicy'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Tieups />
      <Contact />
      <Footer />
    </>
  )
}

function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-form" element={<ServiceForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
