import { motion } from 'framer-motion'
import { Clock, Check, Palette } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const NailArt = () => {
  const services = [
    {
      name: 'Classic Manicure',
      price: '₹299',
      duration: '30 mins',
      description: 'Traditional manicure for healthy nails.',
      features: ['Nail Shaping', 'Cuticle Care', 'Hand Massage', 'Polish']
    },
    {
      name: 'Classic Pedicure',
      price: '₹399',
      duration: '45 mins',
      description: 'Relaxing pedicure for beautiful feet.',
      features: ['Foot Soak', 'Exfoliation', 'Foot Massage', 'Polish']
    },
    {
      name: 'Gel Manicure',
      price: '₹699',
      duration: '60 mins',
      description: 'Long-lasting gel manicure.',
      features: ['Nail Prep', 'Gel Application', 'Curing', 'Finish']
    },
    {
      name: 'Nail Art (Per Nail)',
      price: '₹99',
      duration: '15 mins',
      description: 'Creative nail art designs.',
      features: ['Design', 'Application', 'Top Coat']
    },
    {
      name: 'Acrylic Extensions',
      price: '₹1,499',
      duration: '90 mins',
      description: 'Premium acrylic nail extensions.',
      features: ['Nail Prep', 'Extensions', 'Shaping', 'Design']
    },
    {
      name: 'Gel Extensions',
      price: '₹1,799',
      duration: '90 mins',
      description: 'Natural-looking gel extensions.',
      features: ['Nail Prep', 'Extensions', 'Shaping', 'Finish']
    },
  ]

  const designs = [
    { name: 'French Tips', description: 'Classic French manicure' },
    { name: 'Ombre', description: 'Gradient color effect' },
    { name: 'Glitter', description: 'Sparkly glitter designs' },
    { name: 'Floral', description: 'Beautiful flower art' },
    { name: 'Geometric', description: 'Modern geometric patterns' },
    { name: 'Minimalist', description: 'Simple and elegant' },
    { name: '3D Art', description: 'Dimensional nail art' },
    { name: 'Marble', description: 'Marble effect designs' },
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Creative <span className="text-gradient-gold">Nail Art</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Express yourself with stunning nail art and extensions. From classic manicures to creative designs, we make your nails beautiful.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="tel:9619134803"
                  className="px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold hover:scale-105 transition-transform gold-glow"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card gold-glow">
                <img
                  src="/images/nail-art.jpg"
                  alt="Nail Art"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Services"
            title="Nail Services Menu"
            description="Complete nail care and art services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <p className="text-2xl font-bold text-gradient-gold">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nail Art Designs */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Popular Designs"
            title="Nail Art Styles"
            description="Choose from our popular nail art designs."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {designs.map((design, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-[#D4AF37]/50 transition-all"
              >
                <Palette className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{design.name}</h3>
                <p className="text-gray-400 text-sm">{design.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NailArt