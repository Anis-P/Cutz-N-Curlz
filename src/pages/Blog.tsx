import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Top 10 Bridal Makeup Trends for 2024',
      excerpt: 'Discover the latest bridal makeup trends that will make your special day even more beautiful.',
      category: 'Bridal',
      date: 'March 15, 2024',
      image: '/images/bridal-makeup.jpg',
      readTime: '5 min read'
    },
    {
      title: 'Complete Guide to Beard Care and Styling',
      excerpt: 'Learn how to maintain and style your beard for a sharp, professional look.',
      category: 'Men\'s Grooming',
      date: 'March 10, 2024',
      image: '/images/beard-styling.jpg',
      readTime: '7 min read'
    },
    {
      title: 'Hair Care Tips for Healthy, Shiny Hair',
      excerpt: 'Expert tips and tricks to keep your hair healthy, shiny, and beautiful.',
      category: 'Hair Care',
      date: 'March 5, 2024',
      image: '/images/hair-styling.jpg',
      readTime: '6 min read'
    },
    {
      title: 'Why Professional Makeup Training Matters',
      excerpt: 'Understanding the importance of professional certification in the beauty industry.',
      category: 'Academy',
      date: 'February 28, 2024',
      image: '/images/academy-training.jpg',
      readTime: '8 min read'
    },
    {
      title: 'Nail Art Trends You Need to Try',
      excerpt: 'Explore the hottest nail art designs and trends for the season.',
      category: 'Nail Art',
      date: 'February 20, 2024',
      image: '/images/nail-art.jpg',
      readTime: '5 min read'
    },
    {
      title: 'Skincare Routine for Different Skin Types',
      excerpt: 'Customized skincare routines for oily, dry, combination, and sensitive skin.',
      category: 'Skin Care',
      date: 'February 15, 2024',
      image: '/images/skincare.jpg',
      readTime: '10 min read'
    },
  ]

  const categories = ['All', 'Bridal', "Men's Grooming", 'Hair Care', 'Academy', 'Nail Art', 'Skin Care']

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
              Beauty <span className="text-gradient-gold">Blog</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tips, trends, and insights from the world of beauty and grooming.
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

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden hover:border-[#D4AF37]/50 transition-all group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-[#D4AF37] uppercase tracking-wider">{post.category}</span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                    <span className="text-[#D4AF37] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 gold-glow text-center"
          >
            <Calendar className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter for the latest beauty tips, trends, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-[#0a0a0a]/50 border border-[#D4AF37]/20 rounded-full text-white placeholder-gray-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog