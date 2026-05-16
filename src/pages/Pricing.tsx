import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const Pricing = () => {
  const menServices = [
    { name: 'Classic Haircut', price: '₹299', duration: '30 mins' },
    { name: 'Premium Haircut', price: '₹499', duration: '45 mins' },
    { name: 'Beard Trim', price: '₹199', duration: '15 mins' },
    { name: 'Full Beard Grooming', price: '₹399', duration: '40 mins' },
    { name: 'Hair Spa', price: '₹599', duration: '45 mins' },
    { name: 'Head Massage', price: '₹299', duration: '30 mins' },
    { name: 'Facial for Men', price: '₹499', duration: '45 mins' },
    { name: 'Cleanup', price: '₹399', duration: '30 mins' },
    { name: 'Hair Coloring', price: '₹999', duration: '60 mins' },
    { name: 'Keratin Treatment', price: '₹2,999', duration: '2-3 hours' },
  ]

  const womenServices = [
    { name: 'Haircut & Styling', price: '₹499', duration: '45 mins' },
    { name: 'Hair Smoothening', price: '₹3,999', duration: '2-3 hours' },
    { name: 'Hair Coloring', price: '₹1,299', duration: '90 mins' },
    { name: 'Keratin Treatment', price: '₹4,999', duration: '2-3 hours' },
    { name: 'Facial Treatments', price: '₹799', duration: '60 mins' },
    { name: 'Cleanup', price: '₹499', duration: '30 mins' },
    { name: 'Nail Extensions', price: '₹1,499', duration: '90 mins' },
    { name: 'Nail Art', price: '₹599', duration: '45 mins' },
    { name: 'Party Makeup', price: '₹1,999', duration: '60 mins' },
    { name: 'HD Makeup', price: '₹2,999', duration: '90 mins' },
  ]

  const packages = [
    {
      name: 'Gentleman\'s Package',
      price: '₹899',
      services: ['Haircut', 'Beard Trim', 'Head Massage'],
      category: 'Men',
      popular: false
    },
    {
      name: 'Premium Grooming',
      price: '₹1,499',
      services: ['Premium Haircut', 'Beard Grooming', 'Facial', 'Head Massage'],
      category: 'Men',
      popular: true
    },
    {
      name: 'Beauty Essentials',
      price: '₹1,299',
      services: ['Haircut', 'Cleanup', 'Manicure'],
      category: 'Women',
      popular: false
    },
    {
      name: 'Glow Package',
      price: '₹2,499',
      services: ['Haircut', 'Facial', 'Manicure', 'Pedicure'],
      category: 'Women',
      popular: true
    },
    {
      name: 'Essential Bridal',
      price: '₹5,999',
      services: ['Bridal Makeup', 'Hair Styling', 'Saree Draping'],
      category: 'Bridal',
      popular: false
    },
    {
      name: 'Premium Bridal',
      price: '₹9,999',
      services: ['HD/Airbrush Makeup', 'Hair Styling', 'Saree Draping', 'Pre-wedding Trial'],
      category: 'Bridal',
      popular: true
    },
  ]

  const courses = [
    { name: 'Professional Makeup Course', price: '₹25,000', duration: '3 Months' },
    { name: 'Hair Styling Course', price: '₹20,000', duration: '2 Months' },
    { name: 'Nail Art Course', price: '₹15,000', duration: '1 Month' },
    { name: 'Barber Training', price: '₹18,000', duration: '2 Months' },
    { name: 'Beauty Therapy Course', price: '₹30,000', duration: '3 Months' },
    { name: 'Certification Program', price: '₹50,000', duration: '6 Months' },
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Service <span className="text-gradient-gold">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Transparent pricing for all our services. No hidden charges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Men's Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="For Him"
            title="Men's Grooming Prices"
            description="Affordable pricing for premium men's grooming services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {menServices.map((service, index) => (
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
                  <p className="text-gray-400 text-sm">{service.duration}</p>
                  <p className="text-2xl font-bold text-gradient-gold">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Women's Services */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="For Her"
            title="Women's Beauty Prices"
            description="Competitive pricing for women's beauty services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {womenServices.map((service, index) => (
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
                  <p className="text-gray-400 text-sm">{service.duration}</p>
                  <p className="text-2xl font-bold text-gradient-gold">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Save More"
            title="Value Packages"
            description="Bundle services and save more with our packages."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
                <span className="text-xs text-[#D4AF37] uppercase tracking-wider">{pkg.category}</span>
                <h3 className="text-2xl font-semibold text-white mt-2 mb-2">{pkg.name}</h3>
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

      {/* Academy Courses */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Learn With Us"
            title="Academy Course Fees"
            description="Affordable pricing for professional beauty courses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{course.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm">{course.duration}</p>
                  <p className="text-2xl font-bold text-gradient-gold">{course.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/academy"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-all border border-[#D4AF37]/30"
            >
              <span>View Course Details</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing