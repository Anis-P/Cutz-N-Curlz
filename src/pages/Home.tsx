import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scissors, Sparkles, Award, Clock, Users, Heart, ArrowRight, Calendar, Star } from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'

const Home = () => {
  const services = [
    {
      title: "Men's Grooming",
      description: "Premium haircuts, beard styling, facials, and grooming treatments for the modern gentleman.",
      image: '/images/mens-grooming.jpg',
      link: '/mens-grooming',
      price: 'Starting ₹299'
    },
    {
      title: "Women's Beauty",
      description: "Complete beauty services including hair styling, facials, and premium treatments.",
      image: '/images/bridal-makeup.jpg',
      link: '/womens-beauty',
      price: 'Starting ₹499'
    },
    {
      title: 'Hair Styling',
      description: "Expert haircuts, coloring, smoothening, keratin treatments, and creative styling.",
      image: '/images/hair-styling.jpg',
      link: '/hair-styling',
      price: 'Starting ₹399'
    },
    {
      title: 'Bridal Makeup',
      description: "Stunning bridal makeup packages for your special day. HD, Airbrush, and traditional looks.",
      image: '/images/bridal-makeup.jpg',
      link: '/bridal-makeup',
      price: 'Starting ₹5,999'
    },
    {
      title: 'Beard Styling',
      description: "Professional beard trimming, shaping, and grooming services for the perfect look.",
      image: '/images/beard-styling.jpg',
      link: '/beard-styling',
      price: 'Starting ₹199'
    },
    {
      title: 'Nail Art',
      description: "Creative nail art, extensions, manicure, pedicure, and nail care treatments.",
      image: '/images/nail-art.jpg',
      link: '/nail-art',
      price: 'Starting ₹299'
    },
  ]

  const features = [
    { icon: Award, title: '10+ Years Experience', description: 'Expert stylists with proven track record' },
    { icon: Users, title: '5000+ Happy Clients', description: 'Trusted by thousands of satisfied customers' },
    { icon: Sparkles, title: 'Premium Products', description: 'Only high-quality branded products used' },
    { icon: Clock, title: 'On-Time Service', description: 'Respect your time with efficient service' },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Bridal Makeup',
      rating: 5,
      text: 'Absolutely stunning bridal makeup! Vikas and his team made my wedding day perfect. The attention to detail was incredible.',
      image: '/images/bridal-makeup.jpg'
    },
    {
      name: 'Rahul Verma',
      service: 'Haircut & Beard',
      rating: 5,
      text: 'Best grooming experience I have ever had. The staff is professional and the ambiance is luxurious.',
      image: '/images/mens-grooming.jpg'
    },
    {
      name: 'Anjali Patel',
      service: 'Hair Treatment',
      rating: 5,
      text: 'My hair has never looked better! The keratin treatment transformed my hair completely.',
      image: '/images/hair-styling.jpg'
    },
  ]

  const courses = [
    { title: 'Professional Makeup', duration: '3 Months', price: '₹25,000', students: '50+' },
    { title: 'Hair Styling Course', duration: '2 Months', price: '₹20,000', students: '80+' },
    { title: 'Nail Art Course', duration: '1 Month', price: '₹15,000', students: '60+' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Services"
            title="Premium Beauty & Grooming"
            description="Discover our comprehensive range of services designed to enhance your beauty and style."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-all border border-[#D4AF37]/30"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                subtitle="Learn From The Best"
                title="Join Our Academy"
                description="Start your career in the beauty industry with our professional certification courses."
                centered={false}
              />

              <div className="space-y-6 mt-8">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{course.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students} Students
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gradient-gold">{course.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/academy"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold mt-8 hover:scale-105 transition-transform gold-glow"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card gold-glow">
                <img
                  src="/images/academy-training.jpg"
                  alt="Salon Academy Training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 gold-glow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Award className="w-7 h-7 text-[#0a0a0a]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Certified Courses</p>
                    <p className="text-gray-400 text-sm">Industry Recognized</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Real stories from real clients who have experienced the Cutz N Curlz difference."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 hover:border-[#D4AF37]/50 transition-all"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-all border border-[#D4AF37]/30"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-transparent to-[#D4AF37]/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-12 gold-glow"
          >
            <Scissors className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience premium beauty services at Cutz N Curlz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-lg hover:scale-105 transition-transform"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:9619134803"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold text-lg hover:bg-[#D4AF37]/10 transition-all border border-[#D4AF37]/30"
              >
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Work"
            title="Transformation Gallery"
            description="Browse through our portfolio of stunning transformations."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              '/images/mens-grooming.jpg',
              '/images/bridal-makeup.jpg',
              '/images/hair-styling.jpg',
              '/images/nail-art.jpg',
              '/images/beard-styling.jpg',
              '/images/skincare.jpg',
              '/images/party-makeup.jpg',
              '/images/academy-training.jpg',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-card text-[#D4AF37] rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-all border border-[#D4AF37]/30"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home