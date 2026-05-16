import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '9619134803'
  const message = encodeURIComponent('Hello! I would like to inquire about your services.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
        <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group-hover:shadow-green-500/50">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Chat with us!
          <div className="absolute top-full right-4 border-4 border-transparent border-t-white"></div>
        </div>
      </div>
    </a>
  )
}

export default WhatsAppButton