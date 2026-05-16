import { Sparkles } from 'lucide-react'

interface SectionHeaderProps {
  subtitle: string
  title: string
  description?: string
  centered?: boolean
}

const SectionHeader = ({ subtitle, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`space-y-4 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center space-x-3 ${centered ? 'justify-center' : ''}`}>
        <Sparkles className="w-5 h-5 text-[#D4AF37]" />
        <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm">{subtitle}</span>
        <Sparkles className="w-5 h-5 text-[#D4AF37]" />
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader