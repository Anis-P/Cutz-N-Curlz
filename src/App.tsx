import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import MensGrooming from './pages/MensGrooming'
import WomensBeauty from './pages/WomensBeauty'
import HairStyling from './pages/HairStyling'
import BeardStyling from './pages/BeardStyling'
import MakeupStudio from './pages/MakeupStudio'
import BridalMakeup from './pages/BridalMakeup'
import NailArt from './pages/NailArt'
import SkinCare from './pages/SkinCare'
import Academy from './pages/Academy'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mens-grooming" element={<MensGrooming />} />
            <Route path="/womens-beauty" element={<WomensBeauty />} />
            <Route path="/hair-styling" element={<HairStyling />} />
            <Route path="/beard-styling" element={<BeardStyling />} />
            <Route path="/makeup-studio" element={<MakeupStudio />} />
            <Route path="/bridal-makeup" element={<BridalMakeup />} />
            <Route path="/nail-art" element={<NailArt />} />
            <Route path="/skin-care" element={<SkinCare />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App