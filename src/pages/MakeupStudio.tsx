import { motion } from 'framer-motion'
import { Clock, Check, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const MakeupStudio = () => {
  const services = [
    {
      name: 'Party Makeup',
      price: '₹1,999',
      duration: '60 mins',
      description: 'Glamorous makeup for parties and events.',
      features: ['Consultation', 'Base', 'Eye Makeup', 'Lips', 'Setting']
    },
    {
      name: 'HD Makeup',
      price: '₹2,999',
      duration: '90 mins',
      description: 'High definition makeup for camera-ready look.',
      features: ['HD Products', 'Full Face', 'Contouring', 'Setting Spray']
    },
    {
      name: 'Airbrush Makeup',
      price: '₹3,999',
      duration: '90 mins',
      description: 'Flawless airbrush makeup for special occasions.',
      features: ['Airbrush Technique', 'Full Face', 'Long-lasting', 'Waterproof']
    },
    {
      name: 'Editorial Makeup',
      price: '₹2,499',
      duration: '75 mins',
      description: 'Creative editorial and fashion makeup.',
      features: ['Creative Design', 'Full Face', 'Bold Colors']
    },
    {
      name: 'Engagement Makeup',
      price: '₹2,999',
      duration: '90 mins',
      description: 'Beautiful engagement ceremony makeup.',
      features: ['Consultation', 'Full Face', 'Hair Styling', 'Setting']
    },
    {
      name: 'Saree Draping',
      price: '₹499',
      duration: '30 mins',
      description: 'Professional saree draping in various styles.',
      features: ['Traditional Styles', 'Modern Draping', 'Pleating']
    },
  ]

  const looks = [
    { name: 'Glamorous', description: 'Bold and dramatic look' },
    { name: 'Natural', description: 'Subtle and fresh look' },
    { name: 'Smokey Eye', description: 'Classic smokey eye look' },
    { name: 'Dewy', description: 'Fresh and glowing look' },
    { name: 'Matte', description: 'Full matte finish look' },
    { name: 'Cut Crease', description: 'Dramatic cut crease look' },
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
                Professional <span className="text-gradient-gold">Makeup Studio</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Transform your look with our expert makeup artists. From party makeup to HD and airbrush techniques, we create stunning looks.
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
                  src="/images/party-makeup.jpg"
                  alt="Makeup Studio"
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
            title="Makeup Services Menu"
            description="Professional makeup for every occasion."
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

      {/* Makeup Looks */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Popular Looks"
            title="Makeup Styles We Create"
            description="Choose from our popular makeup looks."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {looks.map((look, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-[#D4AF37]/50 transition-all"
              >
                <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{look.name}</h3>
                <p className="text-gray-400 text-sm">{look.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MakeupStudio