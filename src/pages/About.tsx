import { motion } from 'framer-motion'
import { Award, Users, Calendar, Heart, Scissors, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const About = () => {
  const milestones = [
    { year: '2014', title: 'Founded', description: 'Cutz N Curlz was established with a vision to provide premium beauty services.' },
    { year: '2017', title: 'Expansion', description: 'Expanded services and introduced advanced beauty treatments.' },
    { year: '2020', title: 'Academy Launch', description: 'Started professional beauty and grooming academy.' },
    { year: '2024', title: '10+ Years', description: 'Celebrating a decade of excellence in beauty industry.' },
  ]

  const values = [
    { icon: Heart, title: 'Client First', description: 'Your satisfaction is our top priority. We listen and deliver.' },
    { icon: Award, title: 'Quality Excellence', description: 'Premium products and expert stylists for best results.' },
    { icon: Sparkles, title: 'Innovation', description: 'Stay updated with latest trends and techniques.' },
    { icon: Users, title: 'Professional Team', description: 'Certified and experienced beauty professionals.' },
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
                About <span className="text-gradient-gold">Cutz N Curlz</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Welcome to Cutz N Curlz, your premium destination for unisex salon services and professional beauty education.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Founded by Vikas Dhal, Cutz N Curlz has been serving clients with excellence for over 10 years. We specialize in hair styling, makeup, bridal services, beard grooming, nail art, and comprehensive beauty treatments.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our academy offers certified courses in makeup artistry, hair styling, nail art, and beauty therapy, helping aspiring professionals build successful careers in the beauty industry.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-gradient-gold">10+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-[#D4AF37]/30"></div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-gradient-gold">5000+</p>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </div>
                <div className="w-px h-12 bg-[#D4AF37]/30"></div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-gradient-gold">50+</p>
                  <p className="text-gray-400 text-sm">Expert Stylists</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card gold-glow">
                <img
                  src="/images/salon-interior.jpg"
                  alt="Cutz N Curlz Salon"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 gold-glow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Scissors className="w-7 h-7 text-[#0a0a0a]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Vikas Dhal</p>
                    <p className="text-gray-400 text-sm">Founder & Owner</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-10"
            >
              <h3 className="text-3xl font-display font-bold text-gradient-gold mb-6">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To provide exceptional beauty and grooming services that enhance our clients' confidence and style. We are committed to using premium products, staying updated with the latest trends, and delivering personalized experiences that exceed expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-10"
            >
              <h3 className="text-3xl font-display font-bold text-gradient-gold mb-6">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the leading unisex salon and beauty academy in the region, known for excellence, innovation, and customer satisfaction. We aim to empower the next generation of beauty professionals through quality education and hands-on training.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Values"
            title="What We Stand For"
            description="The core principles that guide everything we do at Cutz N Curlz."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-[#D4AF37]/50 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Journey"
            title="Milestones & Achievements"
            description="A decade of excellence in beauty and grooming services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>
                <p className="text-5xl font-display font-bold text-gradient-gold mb-4">{milestone.year}</p>
                <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                <p className="text-gray-400 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Choose Us"
            title="The Cutz N Curlz Difference"
            description="Experience the difference that sets us apart from the rest."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[#0a0a0a]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Expert Professionals</h3>
              <p className="text-gray-400">
                Our team consists of certified and experienced stylists who are passionate about their craft.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-8 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#0a0a0a]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Premium Products</h3>
              <p className="text-gray-400">
                We use only high-quality, branded products for all our services to ensure the best results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-3xl p-8 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-[#0a0a0a]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Flexible Timings</h3>
              <p className="text-gray-400">
                Open 7 days a week with extended hours to accommodate your busy schedule.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About