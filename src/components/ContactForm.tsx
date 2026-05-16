import { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form will be submitted to Formspree
    const form = e.target as HTMLFormElement
    form.submit()
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-display font-bold text-gradient-gold mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Have questions or ready to book an appointment? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="space-y-6">
          <a
            href="tel:9619134803"
            className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:border-[#D4AF37]/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-semibold">Call Us</p>
              <p className="text-gray-400">9619134803</p>
            </div>
          </a>

          <a
            href="mailto:info@cutzncurlz.com"
            className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:border-[#D4AF37]/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
              <Mail className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-semibold">Email Us</p>
              <p className="text-gray-400">info@cutzncurlz.com</p>
            </div>
          </a>

          <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-gray-400">Cutz N Curlz Salon, Main Street, City Center</p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="glass-card rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
          <div className="space-y-2 text-gray-400">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="text-[#D4AF37]">10:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday - Sunday</span>
              <span className="text-[#D4AF37]">10:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="glass-card rounded-3xl p-8">
        <h3 className="text-2xl font-display font-bold text-white mb-6">Send us a Message</h3>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                placeholder="9619134803"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
            <select
              name="service"
              className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-[#D4AF37]/20 rounded-xl text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">Select a service</option>
              <option value="haircut">Haircut & Styling</option>
              <option value="beard">Beard Styling</option>
              <option value="makeup">Makeup Services</option>
              <option value="bridal">Bridal Makeup</option>
              <option value="nail">Nail Art</option>
              <option value="skincare">Skin Care</option>
              <option value="academy">Academy Courses</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-lg hover:scale-[1.02] transition-transform duration-300 gold-glow"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm