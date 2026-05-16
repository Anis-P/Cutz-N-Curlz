import { motion } from 'framer-motion'
import { Scissors, Sparkles, Clock, Check } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const MensGrooming = () => {
  const services = [
    {
      name: 'Classic Haircut',
      price: '₹299',
      duration: '30 mins',
      description: 'Professional haircut with consultation, wash, and styling.',
      features: ['Consultation', 'Hair Wash', 'Precision Cut', 'Styling']
    },
    {
      name: 'Premium Haircut',
      price: '₹499',
      duration: '45 mins',
      description: 'Luxury haircut with premium products and detailed styling.',
      features: ['Consultation', 'Premium Wash', 'Precision Cut', 'Hair Spa', 'Styling']
    },
    {
      name: 'Beard Trim & Shape',
      price: '₹199',
      duration: '20 mins',
      description: 'Expert beard trimming and shaping for the perfect look.',
      features: ['Beard Trim', 'Shape Up', 'Line Up', 'Beard Oil']
    },
    {
      name: 'Full Beard Grooming',
      price: '₹399',
      duration: '40 mins',
      description: 'Complete beard grooming with hot towel treatment.',
      features: ['Beard Trim', 'Hot Towel', 'Beard Mask', 'Styling']
    },
    {
      name: 'Hair Spa',
      price: '₹599',
      duration: '45 mins',
      description: 'Deep conditioning hair spa treatment for healthy hair.',
      features: ['Hair Wash', 'Scalp Massage', 'Hair Mask', 'Steam']
    },
    {
      name: 'Head Massage',
      price: '₹299',
      duration: '30 mins',
      description: 'Relaxing head massage with aromatic oils.',
      features: ['Oil Massage', 'Pressure Points', 'Relaxation']
    },
    {
      name: 'Facial for Men',
      price: '₹499',
      duration: '45 mins',
      description: 'Deep cleansing facial designed for men\'s skin.',
      features: ['Cleansing', 'Exfoliation', 'Face Mask', 'Moisturizing']
    },
    {
      name: 'Cleanup',
      price: '₹399',
      duration: '30 mins',
      description: 'Quick face cleanup for fresh and glowing skin.',
      features: ['Cleansing', 'Scrubbing', 'Toning', 'Moisturizing']
    },
  ]

  const packages = [
    {
      name: 'Gentleman\'s Package',
      price: '₹899',
      services: ['Haircut', 'Beard Trim', 'Head Massage'],
      popular: false
    },
    {
      name: 'Premium Grooming',
      price: '₹1,499',
      services: ['Premium Haircut', 'Beard Grooming', 'Facial', 'Head Massage'],
      popular: true
    },
    {
      name: 'Complete Makeover',
      price: '₹2,499',
      services: ['Haircut', 'Beard Grooming', 'Hair Spa', 'Facial', 'Manicure'],
      popular: false
    },
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
                Men's <span className="text-gradient-gold">Grooming</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Premium grooming services designed exclusively for men. From classic haircuts to beard styling, we help you look your best.
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
                  src="/images/mens-grooming.jpg"
                  alt="Men's Grooming"
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
            title="Men's Grooming Menu"
            description="Choose from our range of premium grooming services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
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

      {/* Packages */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Value Packages"
            title="Grooming Packages"
            description="Save more with our exclusive grooming packages."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card rounded-3xl p-8 relative ${
                  pkg.popular ? 'border-2 border-[#D4AF37] gold-glow' : 'hover:border-[#D4AF37]/50'
                } transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold text-[#0a0a0a] rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{pkg.name}</h3>
                <p className="text-4xl font-display font-bold text-gradient-gold mb-6">{pkg.price}</p>
                <div className="space-y-3 mb-8">
                  {pkg.services.map((service, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-[#D4AF37] mr-3" />
                      {service}
                    </div>
                  ))}
                </div>
                <a
                  href="tel:9619134803"
                  className={`block text-center py-4 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-gold text-[#0a0a0a] hover:scale-105'
                      : 'border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10'
                  }`}
                >
                  Book Package
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MensGrooming