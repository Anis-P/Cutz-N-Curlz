import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import SectionHeader from '../components/SectionHeader'

const Contact = () => {
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
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Get in touch with us for appointments, inquiries, or any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Get In Touch"
            title="Contact Information"
            description="Reach out to us through any of these channels or fill out the form."
          />

          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Location"
            title="Find Us"
            description="Visit our salon for a premium beauty experience."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass-card rounded-3xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1234567890123!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInNDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 text-center hover:border-[#D4AF37]/50 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Book Appointment</h3>
              <p className="text-gray-400 mb-6">Schedule your visit for premium beauty services</p>
              <a
                href="tel:9619134803"
                className="inline-block px-6 py-3 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold hover:scale-105 transition-transform"
              >
                9619134803
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-3xl p-8 text-center hover:border-[#D4AF37]/50 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Academy Inquiries</h3>
              <p className="text-gray-400 mb-6">Learn about our professional beauty courses</p>
              <a
                href="tel:9619134803"
                className="inline-block px-6 py-3 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold hover:scale-105 transition-transform"
              >
                9619134803
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-8 text-center hover:border-[#D4AF37]/50 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Business Hours</h3>
              <p className="text-gray-400 mb-6">Open 7 days a week</p>
              <p className="text-[#D4AF37] font-semibold">10:00 AM - 9:00 PM</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact