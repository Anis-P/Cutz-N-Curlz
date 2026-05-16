import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const Services = () => {
  const menServices = [
    { name: 'Classic Haircut', price: '₹299', description: 'Precision cut with styling' },
    { name: 'Beard Trim & Shape', price: '₹199', description: 'Expert beard grooming' },
    { name: 'Hair Spa', price: '₹599', description: 'Deep conditioning treatment' },
    { name: 'Hair Coloring', price: '₹999', description: 'Premium color services' },
    { name: 'Keratin Treatment', price: '₹2,999', description: 'Smooth & shiny hair' },
    { name: 'Facial for Men', price: '₹499', description: 'Deep cleansing facial' },
    { name: 'Head Massage', price: '₹299', description: 'Relaxing oil massage' },
    { name: 'Cleanup', price: '₹399', description: 'Complete face cleanup' },
  ]

  const womenServices = [
    { name: 'Haircut & Styling', price: '₹499', description: 'Trendy cuts & styling' },
    { name: 'Hair Smoothening', price: '₹3,999', description: 'Frizz-free smooth hair' },
    { name: 'Hair Coloring', price: '₹1,299', description: 'Vibrant color options' },
    { name: 'Facial Treatments', price: '₹799', description: 'Customized facials' },
    { name: 'Nail Extensions', price: '₹1,499', description: 'Premium nail extensions' },
    { name: 'Nail Art', price: '₹599', description: 'Creative nail designs' },
    { name: 'Skin Treatments', price: '₹999', description: 'Advanced skincare' },
    { name: 'Party Makeup', price: '₹1,999', description: 'Glamorous party looks' },
  ]

  const specialServices = [
    { name: 'Bridal Makeup', price: '₹5,999', description: 'Complete bridal package', link: '/bridal-makeup' },
    { name: 'HD Makeup', price: '₹2,999', description: 'High definition makeup', link: '/makeup-studio' },
    { name: 'Airbrush Makeup', price: '₹3,999', description: 'Flawless airbrush finish', link: '/makeup-studio' },
    { name: 'Saree Draping', price: '₹499', description: 'Traditional draping styles', link: '/bridal-makeup' },
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Our <span className="text-gradient-gold">Premium Services</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Discover our comprehensive range of beauty and grooming services designed to enhance your natural beauty and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Men's Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="For Him"
            title="Men's Grooming Services"
            description="Premium grooming services for the modern gentleman."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {menServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all group"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gradient-gold">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/mens-grooming"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-all border border-[#D4AF37]/30"
            >
              <span>View Men's Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Women's Services */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="For Her"
            title="Women's Beauty Services"
            description="Complete beauty solutions for every occasion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {womenServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all group"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gradient-gold">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/womens-beauty"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-all border border-[#D4AF37]/30"
            >
              <span>View Women's Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Special Packages"
            title="Bridal & Event Services"
            description="Make your special occasions unforgettable with our premium packages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {specialServices.map((service, index) => (
              <Link key={index} to={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all group h-full"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gradient-gold">{service.price}</p>
                    <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 gold-glow"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Contact us today to schedule your appointment or inquire about our services.
            </p>
            <a
              href="tel:9619134803"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-lg hover:scale-105 transition-transform"
            >
              <span>Call: 9619134803</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services