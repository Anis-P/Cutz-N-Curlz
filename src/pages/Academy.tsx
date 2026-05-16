import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Clock, Users, Award, Check, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const Academy = () => {
  const courses = [
    {
      name: 'Professional Makeup Course',
      duration: '3 Months',
      price: '₹25,000',
      description: 'Complete makeup artistry training from basics to advanced.',
      features: ['HD & Airbrush Makeup', 'Bridal Makeup', 'Party Makeup', 'Product Knowledge', 'Portfolio Building'],
      students: '50+',
      popular: true
    },
    {
      name: 'Hair Styling Course',
      duration: '2 Months',
      price: '₹20,000',
      description: 'Master the art of hair styling and cutting.',
      features: ['Hair Cutting', 'Hair Coloring', 'Styling Techniques', 'Chemical Treatments', 'Client Consultation'],
      students: '80+',
      popular: false
    },
    {
      name: 'Nail Art Course',
      duration: '1 Month',
      price: '₹15,000',
      description: 'Learn creative nail art and extensions.',
      features: ['Manicure & Pedicure', 'Nail Art', 'Gel & Acrylic Extensions', 'Nail Health', 'Design Techniques'],
      students: '60+',
      popular: false
    },
    {
      name: 'Barber Training',
      duration: '2 Months',
      price: '₹18,000',
      description: 'Professional barber and men\'s grooming training.',
      features: ['Haircutting', 'Beard Styling', 'Shaving Techniques', 'Men\'s Facial', 'Classic & Modern Styles'],
      students: '40+',
      popular: false
    },
    {
      name: 'Beauty Therapy Course',
      duration: '3 Months',
      price: '₹30,000',
      description: 'Comprehensive beauty therapy and skincare training.',
      features: ['Facial Treatments', 'Skin Analysis', 'Advanced Skincare', 'Body Treatments', 'Spa Therapies'],
      students: '45+',
      popular: false
    },
    {
      name: 'Certification Program',
      duration: '6 Months',
      price: '₹50,000',
      description: 'Complete certification covering all beauty services.',
      features: ['All Courses Combined', 'Practical Training', 'Industry Exposure', 'Job Assistance', 'Certificate'],
      students: '30+',
      popular: true
    },
  ]

  const benefits = [
    { icon: Award, title: 'Certified Training', description: 'Industry-recognized certificates' },
    { icon: Users, title: 'Small Batches', description: 'Personal attention to each student' },
    { icon: GraduationCap, title: 'Expert Faculty', description: 'Learn from industry professionals' },
    { icon: Clock, title: 'Flexible Timings', description: 'Weekend and weekday batches available' },
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
                <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-gray-300">Start Your Beauty Career</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Beauty <span className="text-gradient-gold">Academy</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Join Cutz N Curlz Academy and learn from industry experts. Get certified and start your career in the beauty industry.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="tel:9619134803"
                  className="px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold hover:scale-105 transition-transform gold-glow"
                >
                  Enroll Now
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
                  src="/images/academy-training.jpg"
                  alt="Academy Training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Academy Benefits"
            description="What makes our academy the best choice for your beauty education."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-[#D4AF37]/50 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Courses"
            title="Professional Beauty Courses"
            description="Choose from our range of professional certification courses."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card rounded-3xl p-8 relative ${
                  course.popular ? 'border-2 border-[#D4AF37] gold-glow' : 'hover:border-[#D4AF37]/50'
                } transition-all`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold text-[#0a0a0a] rounded-full text-sm font-semibold">
                    Best Seller
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} Students
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{course.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{course.description}</p>
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <p className="text-3xl font-display font-bold text-gradient-gold mb-4">{course.price}</p>
                  <a
                    href="tel:9619134803"
                    className={`block text-center py-4 rounded-full font-semibold transition-all ${
                      course.popular
                        ? 'bg-gradient-gold text-[#0a0a0a] hover:scale-105'
                        : 'border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 gold-glow text-center"
          >
            <GraduationCap className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Contact us today to enroll in our courses and start your career in the beauty industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9619134803"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-lg hover:scale-105 transition-transform"
              >
                <span>Call: 9619134803</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold text-lg hover:bg-[#D4AF37]/10 transition-all border border-[#D4AF37]/30"
              >
                <span>Send Inquiry</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Academy