import { Link } from 'react-router-dom'
import { Scissors, Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/academy', label: 'Academy' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact Us' },
  ]

  const services = [
    { path: '/mens-grooming', label: "Men's Grooming" },
    { path: '/womens-beauty', label: "Women's Beauty" },
    { path: '/hair-styling', label: 'Hair Styling' },
    { path: '/bridal-makeup', label: 'Bridal Makeup' },
    { path: '/nail-art', label: 'Nail Art' },
    { path: '/skin-care', label: 'Skin Care' },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-t border-[#D4AF37]/20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center gold-glow">
                <Scissors className="w-7 h-7 text-[#0a0a0a]" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gradient-gold">Cutz N Curlz</h3>
                <p className="text-xs text-gray-400 tracking-wider">UNISEX SALON & ACADEMY</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium unisex salon and academy offering professional hair styling, makeup, bridal services, and beauty education with 10+ years of excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-[#D4AF37] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] mr-3 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold text-[#D4AF37] mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] mr-3 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-[#D4AF37] mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Call / WhatsApp</p>
                  <a href="tel:9619134803" className="text-white font-medium hover:text-[#D4AF37] transition-colors">
                    9619134803
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <a href="mailto:info@cutzncurlz.com" className="text-white font-medium hover:text-[#D4AF37] transition-colors">
                    info@cutzncurlz.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Visit Us</p>
                  <p className="text-white text-sm leading-relaxed">
                    Cutz N Curlz Salon<br />
                    Main Street, City Center
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Working Hours</p>
                  <p className="text-white text-sm">
                    Mon - Sun: 10:00 AM - 9:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 Cutz N Curlz. All rights reserved. Owned by Vikas Dhal.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer