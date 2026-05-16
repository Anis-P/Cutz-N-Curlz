import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Scissors, Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/academy', label: 'Academy' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  const serviceDropdown = [
    { path: '/mens-grooming', label: "Men's Grooming" },
    { path: '/womens-beauty', label: "Women's Beauty" },
    { path: '/hair-styling', label: 'Hair Styling' },
    { path: '/beard-styling', label: 'Beard Styling' },
    { path: '/makeup-studio', label: 'Makeup Studio' },
    { path: '/bridal-makeup', label: 'Bridal Makeup' },
    { path: '/nail-art', label: 'Nail Art' },
    { path: '/skin-care', label: 'Skin Care' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center gold-glow-sm group-hover:scale-110 transition-transform">
              <Scissors className="w-6 h-6 text-[#0a0a0a]" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-gradient-gold">Cutz N Curlz</h1>
              <p className="text-xs text-gray-400 tracking-wider">UNISEX SALON & ACADEMY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg transition-all duration-300 flex items-center">
                More Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {serviceDropdown.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="tel:9619134803"
              className="ml-4 flex items-center space-x-2 px-5 py-2.5 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 gold-glow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 glass-card rounded-2xl p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-[#D4AF37]/20 pt-2 mt-2">
              <p className="px-4 py-2 text-xs text-[#D4AF37] font-semibold tracking-wider">SERVICES</p>
              {serviceDropdown.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-3 text-sm text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:9619134803"
              className="flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-sm mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: 9619134803</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar