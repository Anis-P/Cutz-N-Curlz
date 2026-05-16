import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-pattern overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/95 to-[#1a1a1a]/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full"
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-gray-300">10+ Years of Excellence</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
            >
              <span className="text-white">Premium </span>
              <span className="text-gradient-gold">Unisex Salon</span>
              <br />
              <span className="text-white">& Academy</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              Experience luxury grooming and beauty services at Cutz N Curlz. 
              Professional styling, makeup, bridal packages, and certified beauty courses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 gold-glow"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold text-lg hover:bg-[#D4AF37]/10 transition-all duration-300 border border-[#D4AF37]/30"
              >
                <Sparkles className="w-5 h-5" />
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[#D4AF37]/20"
            >
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">10+</p>
                <p className="text-sm text-gray-400 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">5000+</p>
                <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">50+</p>
                <p className="text-sm text-gray-400 mt-1">Courses Offered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden glass-card gold-glow">
                  <img
                    src="/images/salon-interior.jpg"
                    alt="Cutz N Curlz Salon Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-[#D4AF37] font-semibold text-lg">Luxury Salon Experience</p>
                  </div>
                </div>
              </div>

              {/* Secondary Images */}
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <img
                  src="/images/mens-grooming.jpg"
                  alt="Men's Grooming"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <img
                  src="/images/bridal-makeup.jpg"
                  alt="Bridal Makeup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 gold-glow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-[#0a0a0a]">V</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Vikas Dhal</p>
                  <p className="text-gray-400 text-sm">Founder & Owner</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero