import { motion } from 'framer-motion'
import { Scissors, Clock, Check, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const HairStyling = () => {
  const services = [
    {
      name: 'Classic Haircut',
      price: '₹399',
      duration: '45 mins',
      description: 'Timeless haircut that suits your face shape.',
      features: ['Consultation', 'Wash', 'Precision Cut', 'Styling']
    },
    {
      name: 'Layered Cut',
      price: '₹499',
      duration: '60 mins',
      description: 'Modern layered cut for volume and movement.',
      features: ['Consultation', 'Wash', 'Layered Cut', 'Blow Dry']
    },
    {
      name: 'Hair Coloring',
      price: '₹1,299',
      duration: '90 mins',
      description: 'Professional hair coloring with premium brands.',
      features: ['Color Consultation', 'Application', 'Treatment']
    },
    {
      name: 'Highlights',
      price: '₹1,999',
      duration: '2 hours',
      description: 'Beautiful highlights for dimensional look.',
      features: ['Consultation', 'Foiling', 'Processing', 'Treatment']
    },
    {
      name: 'Hair Smoothening',
      price: '₹3,999',
      duration: '2-3 hours',
      description: 'Get smooth, frizz-free hair for months.',
      features: ['Consultation', 'Treatment', 'Post Care']
    },
    {
      name: 'Keratin Treatment',
      price: '₹4,999',
      duration: '2-3 hours',
      description: 'Professional keratin for silky smooth hair.',
      features: ['Consultation', 'Treatment', 'Blow Dry']
    },
    {
      name: 'Hair Spa',
      price: '₹699',
      duration: '45 mins',
      description: 'Deep conditioning hair spa treatment.',
      features: ['Hair Wash', 'Scalp Massage', 'Hair Mask', 'Steam']
    },
    {
      name: 'Blow Dry & Styling',
      price: '₹499',
      duration: '30 mins',
      description: 'Professional blow dry and styling.',
      features: ['Wash', 'Blow Dry', 'Styling']
    },
  ]

  const beforeAfter = [
    {
      before: 'Damaged, frizzy hair',
      after: 'Smooth, silky hair',
      treatment: 'Keratin Treatment'
    },
    {
      before: 'Dull, faded color',
      after: 'Vibrant, shiny color',
      treatment: 'Hair Coloring'
    },
    {
      before: 'Flat, lifeless hair',
      after: 'Voluminous, bouncy hair',
      treatment: 'Layered Cut'
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
                Expert <span className="text-gradient-gold">Hair Styling</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Transform your look with our expert hair stylists. From classic cuts to trendy colors, we create the perfect style for you.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="tel:9619134803"
                  className="px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold hover:scale-105 transition-transform gold-glow"
                >
                  Book Appointment
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
                  src="/images/hair-styling.jpg"
                  alt="Hair Styling"
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
            title="Hair Styling Menu"
            description="Professional hair services for every hair type."
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

      {/* Transformations */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Transformations"
            title="Before & After"
            description="See the amazing transformations our clients have experienced."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 text-center"
              >
                <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
                <p className="text-gray-400 mb-4">Before: {item.before}</p>
                <div className="w-full h-px bg-gradient-gold my-6"></div>
                <p className="text-white font-semibold mb-4">After: {item.after}</p>
                <p className="text-[#D4AF37] font-medium">{item.treatment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HairStyling