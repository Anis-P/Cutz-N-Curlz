import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const Gallery = () => {
  const galleryItems = [
    { category: 'Hair', image: '/images/hair-styling.jpg', title: 'Hair Styling' },
    { category: 'Bridal', image: '/images/bridal-makeup.jpg', title: 'Bridal Makeup' },
    { category: 'Men', image: '/images/mens-grooming.jpg', title: 'Men\'s Grooming' },
    { category: 'Beard', image: '/images/beard-styling.jpg', title: 'Beard Styling' },
    { category: 'Nails', image: '/images/nail-art.jpg', title: 'Nail Art' },
    { category: 'Skin', image: '/images/skincare.jpg', title: 'Skin Care' },
    { category: 'Makeup', image: '/images/party-makeup.jpg', title: 'Party Makeup' },
    { category: 'Academy', image: '/images/academy-training.jpg', title: 'Academy Training' },
    { category: 'Hair', image: '/images/hair-styling.jpg', title: 'Hair Color' },
    { category: 'Bridal', image: '/images/bridal-makeup.jpg', title: 'Engagement Look' },
    { category: 'Men', image: '/images/mens-grooming.jpg', title: 'Classic Cut' },
    { category: 'Nails', image: '/images/nail-art.jpg', title: 'Gel Extensions' },
  ]

  const categories = ['All', 'Hair', 'Bridal', 'Men', 'Beard', 'Nails', 'Skin', 'Makeup', 'Academy']

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
              Our <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Browse through our portfolio of stunning transformations and beautiful work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-gradient-gold text-[#0a0a0a]'
                    : 'glass-card text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 gold-glow text-center"
          >
            <Instagram className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Follow Us on Instagram
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Stay updated with our latest work, offers, and behind-the-scenes content.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-lg hover:scale-105 transition-transform"
            >
              <Instagram className="w-5 h-5" />
              <span>@cutzncurlz</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery