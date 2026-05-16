import { motion } from 'framer-motion'

const TermsConditions = () => {
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
              Terms & <span className="text-gradient-gold">Conditions</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-[#D4AF37] mb-4">Last Updated: March 2024</h2>
              <p className="text-gray-400 leading-relaxed">
                Welcome to Cutz N Curlz Unisex Salon & Academy. By using our services, you agree to these Terms and Conditions. Please read them carefully.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">2. Services</h2>
              <div className="space-y-4 text-gray-400">
                <p>Cutz N Curlz provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hair cutting, styling, and treatments</li>
                  <li>Beard grooming and styling</li>
                  <li>Makeup services (bridal, party, HD, airbrush)</li>
                  <li>Nail art and extensions</li>
                  <li>Skin care and facial treatments</li>
                  <li>Professional beauty courses and training</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">3. Appointments</h2>
              <div className="space-y-4 text-gray-400">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Appointments are recommended to ensure availability</li>
                  <li>Please arrive on time for your scheduled appointment</li>
                  <li>Late arrivals may result in reduced service time</li>
                  <li>Cancellations should be made at least 24 hours in advance</li>
                  <li>No-shows may be charged a cancellation fee</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">4. Pricing and Payment</h2>
              <div className="space-y-4 text-gray-400">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All prices are in Indian Rupees (INR) and inclusive of taxes</li>
                  <li>Payment is due at the time of service</li>
                  <li>We accept cash, UPI, cards, and digital payments</li>
                  <li>Prices may vary based on hair length, service complexity, etc.</li>
                  <li>Additional charges may apply for home services</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">5. Academy Courses</h2>
              <div className="space-y-4 text-gray-400">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Course fees must be paid in full before commencement</li>
                  <li>Installment options are available for select courses</li>
                  <li>Certificates are issued upon successful completion</li>
                  <li>Attendance requirements must be met for certification</li>
                  <li>Course fees are non-refundable after commencement</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">6. Refund Policy</h2>
              <div className="space-y-4 text-gray-400">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service refunds are not typically provided</li>
                  <li>Issues with services will be addressed on a case-by-case basis</li>
                  <li>Academy course fees are non-refundable after course start</li>
                  <li>Pre-payments for appointments can be rescheduled with 24-hour notice</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">7. Health and Safety</h2>
              <p className="text-gray-400 leading-relaxed">
                Clients must inform us of any allergies, skin conditions, or health concerns before services. We reserve the right to refuse service if we believe it may cause harm.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">8. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                All content on this website, including text, images, logos, and designs, is the property of Cutz N Curlz and protected by copyright laws.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                Cutz N Curlz shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">10. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">11. Contact Information</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                For questions about these Terms and Conditions, please contact:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Owner:</strong> Vikas Dhal</p>
                <p><strong>Phone:</strong> 9619134803</p>
                <p><strong>Email:</strong> info@cutzncurlz.com</p>
                <p><strong>Address:</strong> Cutz N Curlz Salon, Main Street, City Center</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsConditions