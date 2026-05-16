import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What are your working hours?',
          a: 'We are open 7 days a week from 10:00 AM to 9:00 PM. We recommend booking appointments in advance for better availability.'
        },
        {
          q: 'Do I need to book an appointment?',
          a: 'While walk-ins are welcome, we highly recommend booking an appointment to avoid waiting and ensure you get the best service experience.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept cash, UPI, credit/debit cards, and all major digital payment methods.'
        },
        {
          q: 'Do you offer home services?',
          a: 'Yes, we offer home services for bridal makeup and special occasions. Additional charges may apply based on location.'
        },
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          q: 'What products do you use?',
          a: 'We use only premium, branded products from renowned brands like L\'Oreal, Schwarzkopf, MAC, and others to ensure the best results.'
        },
        {
          q: 'How long does a haircut take?',
          a: 'A standard haircut takes about 30-45 minutes including consultation, wash, cut, and styling.'
        },
        {
          q: 'Do you offer hair treatments for damaged hair?',
          a: 'Yes, we offer various treatments like keratin, smoothening, hair spa, and deep conditioning treatments to repair and nourish damaged hair.'
        },
        {
          q: 'Can I get a trial for bridal makeup?',
          a: 'Yes, we offer pre-wedding trials for bridal makeup. This is included in our premium bridal packages or can be booked separately.'
        },
      ]
    },
    {
      category: 'Academy',
      questions: [
        {
          q: 'What are the eligibility criteria for courses?',
          a: 'Our courses are open to anyone passionate about beauty and grooming. No prior experience is required for basic courses.'
        },
        {
          q: 'Do you provide certificates after course completion?',
          a: 'Yes, we provide industry-recognized certificates upon successful completion of all our courses.'
        },
        {
          q: 'Do you offer job placement assistance?',
          a: 'Yes, we provide job placement assistance and career guidance to our academy students.'
        },
        {
          q: 'Can I pay course fees in installments?',
          a: 'Yes, we offer flexible payment options including EMI and installment plans for all our courses.'
        },
      ]
    },
    {
      category: 'Pricing',
      questions: [
        {
          q: 'Are the prices fixed?',
          a: 'Our prices are fixed and transparent. However, we occasionally offer special packages and discounts. Contact us for current offers.'
        },
        {
          q: 'Do you charge extra for long hair?',
          a: 'Some services like hair coloring and treatments may have additional charges for very long hair (shoulder length or longer).'
        },
        {
          q: 'Are there any hidden charges?',
          a: 'No, we believe in complete transparency. All prices are inclusive of taxes and there are no hidden charges.'
        },
      ]
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our services, pricing, and academy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h2 className="text-2xl font-display font-bold text-[#D4AF37] mb-8">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const index = catIndex * 100 + faqIndex
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="glass-card rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#D4AF37]/5 transition-colors"
                      >
                        <span className="text-white font-medium pr-4">{faq.q}</span>
                        {openIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                        )}
                      </button>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-5"
                        >
                          <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 gold-glow text-center"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Can't find the answer you're looking for? Feel free to contact us directly.
            </p>
            <a
              href="tel:9619134803"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-gold text-[#0a0a0a] rounded-full font-semibold text-lg hover:scale-105 transition-transform"
            >
              <span>Call: 9619134803</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ