import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
  price?: string
  delay?: number
}

const ServiceCard = ({ title, description, image, link, price, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <Link to={link} className="block">
        <div className="glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
            
            {price && (
              <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-gold text-[#0a0a0a] rounded-full text-sm font-semibold">
                {price}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-display font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center text-[#D4AF37] font-medium group-hover:translate-x-2 transition-transform">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard