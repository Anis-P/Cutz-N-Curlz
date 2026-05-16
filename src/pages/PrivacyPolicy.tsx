import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
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
              Privacy <span className="text-gradient-gold">Policy</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                At Cutz N Curlz, we are committed to protecting your privacy and personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services or visit our website.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-400">
                <p>We collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal information (name, phone number, email address)</li>
                  <li>Appointment details and service preferences</li>
                  <li>Payment information (processed securely)</li>
                  <li>Communication records</li>
                  <li>Website usage data (cookies, analytics)</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-400">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Schedule and manage your appointments</li>
                  <li>Provide beauty and grooming services</li>
                  <li>Process payments and send receipts</li>
                  <li>Send service reminders and promotions</li>
                  <li>Improve our services</li>
                  <li>Respond to your inquiries</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Data Protection</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Sharing Your Information</h2>
              <p className="text-gray-400 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 mt-4">
                <li>Service providers who assist our operations</li>
                <li>Payment processors</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-400 leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
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

export default PrivacyPolicy