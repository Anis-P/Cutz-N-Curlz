import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Bridal Makeup',
      rating: 5,
      text: 'Absolutely stunning bridal makeup! Vikas and his team made my wedding day perfect. The attention to detail was incredible. Everyone complimented my look!',
      image: '/images/bridal-makeup.jpg',
      date: 'March 2024'
    },
    {
      name: 'Rahul Verma',
      service: 'Haircut & Beard',
      rating: 5,
      text: 'Best grooming experience I have ever had. The staff is professional and the ambiance is luxurious. My beard has never looked better!',
      image: '/images/mens-grooming.jpg',
      date: 'February 2024'
    },
    {
      name: 'Anjali Patel',
      service: 'Hair Treatment',
      rating: 5,
      text: 'My hair has never looked better! The keratin treatment transformed my hair completely. The staff was very knowledgeable and helpful.',
      image: '/images/hair-styling.jpg',
      date: 'January 2024'
    },
    {
      name: 'Sneha Gupta',
      service: 'Nail Art',
      rating: 5,
      text: 'Amazing nail art! The artist was so creative and patient. I love my new nails. Will definitely come back for more designs.',
      image: '/images/nail-art.jpg',
      date: 'December 2023'
    },
    {
      name: 'Amit Singh',
      service: 'Facial',
      rating: 5,
      text: 'The facial was so relaxing and my skin feels amazing. The products used were of high quality. Highly recommend their skincare services.',
      image: '/images/skincare.jpg',
      date: 'November 2023'
    },
    {
      name: 'Meera Reddy',
      service: 'Party Makeup',
      rating: 5,
      text: 'Got party makeup done for a friend\'s wedding and it was flawless! Lasted the entire night. The makeup artist was very talented.',
      image: '/images/party-makeup.jpg',
      date: 'October 2023'
    },
    {
      name: 'Vikram Joshi',
      service: 'Academy Course',
      rating: 5,
      text: 'Completed the hair styling course and it was excellent! The trainers are very experienced and the practical training was amazing.',
      image: '/images/academy-training.jpg',
      date: 'September 2023'
    },
    {
      name: 'Pooja Nair',
      service: 'Beard Styling',
      rating: 5,
      text: 'My husband got his beard styled here and it looks perfect! The barber was very skilled and gave great advice on maintenance.',
      image: '/images/beard-styling.jpg',
      date: 'August 2023'
    },
  ]

  const stats = [
    { value: '5000+', label: 'Happy Clients' },
    { value: '4.9', label: 'Average Rating' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '10+', label: 'Years of Service' },
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
            <Quote className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Client <span className="text-gradient-gold">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Real stories from real clients who have experienced the Cutz N Curlz difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What People Say"
            title="Our Happy Clients"
            description="Don't just take our word for it - hear from our satisfied customers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
                    <p className="text-gray-500 text-xs mt-1">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 gold-glow text-center"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Share Your Experience
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Loved our services? Leave a review and help others discover Cutz N Curlz.
            </p>
            <a
              href="tel:9619134803"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-lg hover:scale-105 transition-transform"
            >
              <span>Contact Us</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials