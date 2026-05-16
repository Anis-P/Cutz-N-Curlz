import { motion } from 'framer-motion'
import { Clock, Check, Heart, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const BridalMakeup = () => {
  const packages = [
    {
      name: 'Essential Bridal',
      price: '₹5,999',
      duration: '2-3 hours',
      description: 'Complete bridal makeup package.',
      features: ['Bridal Makeup', 'Hair Styling', 'Saree Draping', 'Mehendi Setup'],
      popular: false
    },
    {
      name: 'Premium Bridal',
      price: '₹9,999',
      duration: '3-4 hours',
      description: 'Premium bridal package with extra services.',
      features: ['HD/Airbrush Makeup', 'Hair Styling', 'Saree Draping', 'Mehendi Setup', 'Pre-wedding Trial'],
      popular: true
    },
    {
      name: 'Luxury Bridal',
      price: '₹15,999',
      duration: '4-5 hours',
      description: 'Complete luxury bridal experience.',
      features: ['Airbrush Makeup', 'Hair Styling', 'Saree Draping', 'Mehendi Setup', 'Pre-wedding Trial', 'Reception Look', 'Family Makeup'],
      popular: false
    },
  ]

  const additionalServices = [
    { name: 'Pre-wedding Trial', price: '₹1,999', duration: '90 mins' },
    { name: 'Reception Makeup', price: '₹3,999', duration: '2 hours' },
    { name: 'Mehendi Makeup', price: '₹1,499', duration: '60 mins' },
    { name: 'Bridesmaid Makeup', price: '₹1,999', duration: '60 mins' },
    { name: 'Groom Makeup', price: '₹999', duration: '45 mins' },
    { name: 'Family Makeup', price: '₹1,499', duration: '60 mins' },
  ]

  const includes = [
    'Premium Makeup Products',
    'Professional Makeup Artist',
    'On-location Service Available',
    'Trial Session Included',
    'Touch-up Kit Provided',
    'Hair Styling Included',
    'Saree Draping Included',
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
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-gray-300">Make Your Special Day Perfect</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Stunning <span className="text-gradient-gold">Bridal Makeup</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Look breathtaking on your special day with our expert bridal makeup artists. We create timeless, beautiful looks that last all day.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="tel:9619134803"
                  className="px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold hover:scale-105 transition-transform gold-glow"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card gold-glow">
                <img
                  src="/images/bridal-makeup.jpg"
                  alt="Bridal Makeup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bridal Packages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Bridal Packages"
            title="Choose Your Package"
            description="Complete bridal makeup packages for your perfect wedding look."
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
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <p className="text-4xl font-display font-bold text-gradient-gold mb-2">{pkg.price}</p>
                <p className="text-gray-400 text-sm mb-6">Duration: {pkg.duration}</p>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-[#D4AF37] mr-3" />
                      {feature}
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

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Add-on Services"
            title="Additional Bridal Services"
            description="Enhance your bridal package with these additional services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <p className="text-2xl font-bold text-gradient-gold">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What's Included"
            title="All Bridal Packages Include"
            description="Premium services included in every bridal package."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {includes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-[#D4AF37]/50 transition-all"
              >
                <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
                <p className="text-white font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BridalMakeup