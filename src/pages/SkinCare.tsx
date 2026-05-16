import { motion } from 'framer-motion'
import { Clock, Check, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const SkinCare = () => {
  const services = [
    {
      name: 'Basic Facial',
      price: '₹499',
      duration: '45 mins',
      description: 'Deep cleansing facial for fresh skin.',
      features: ['Cleansing', 'Exfoliation', 'Massage', 'Mask', 'Toning']
    },
    {
      name: 'Gold Facial',
      price: '₹999',
      duration: '60 mins',
      description: 'Luxurious gold facial treatment.',
      features: ['Gold Infusion', 'Massage', 'Mask', 'Serum']
    },
    {
      name: 'Diamond Facial',
      price: '₹1,299',
      duration: '75 mins',
      description: 'Premium diamond facial for radiance.',
      features: ['Diamond Dust', 'Massage', 'Mask', 'Serum']
    },
    {
      name: 'Anti-Aging Facial',
      price: '₹1,499',
      duration: '90 mins',
      description: 'Specialized anti-aging treatment.',
      features: ['Collagen Boost', 'Massage', 'Mask', 'Serum']
    },
    {
      name: 'Acne Treatment',
      price: '₹799',
      duration: '60 mins',
      description: 'Effective acne treatment.',
      features: ['Deep Cleansing', 'Extraction', 'Treatment', 'Mask']
    },
    {
      name: 'Skin Polishing',
      price: '₹699',
      duration: '45 mins',
      description: 'Microdermabrasion for smooth skin.',
      features: ['Exfoliation', 'Polishing', 'Hydration']
    },
    {
      name: 'De-tan Treatment',
      price: '₹599',
      duration: '45 mins',
      description: 'Remove tan and brighten skin.',
      features: ['Cleansing', 'De-tan Mask', 'Serum']
    },
    {
      name: 'Under Eye Treatment',
      price: '₹499',
      duration: '30 mins',
      description: 'Specialized under eye care.',
      features: ['Eye Massage', 'Eye Mask', 'Serum']
    },
  ]

  const packages = [
    {
      name: 'Glow Package',
      price: '₹1,499',
      services: ['Basic Facial', 'Cleanup', 'De-tan Treatment'],
      popular: false
    },
    {
      name: 'Radiance Package',
      price: '₹2,499',
      services: ['Gold Facial', 'Skin Polishing', 'Under Eye Treatment'],
      popular: true
    },
    {
      name: 'Complete Skin Care',
      price: '₹3,999',
      services: ['Diamond Facial', 'Anti-Aging Facial', 'Skin Polishing', 'De-tan'],
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
                Premium <span className="text-gradient-gold">Skin Care</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Rejuvenate your skin with our professional skincare treatments. From basic facials to advanced anti-aging therapies, we have it all.
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
                  src="/images/skincare.jpg"
                  alt="Skin Care"
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
            title="Skin Care Menu"
            description="Professional skincare treatments for every skin type."
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
            title="Skin Care Packages"
            description="Save more with our exclusive skincare packages."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
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

export default SkinCare