import { type LucideIcon } from "lucide-react"

interface ContactInfoCardProps {
  icon: LucideIcon
  title: string
  description: string
  contactInfo: string
  link?: string
}

export default function ContactInfoCard({
  icon: Icon,
  title,
  description,
  contactInfo,
  link
}: ContactInfoCardProps) {
  const isLink = link && (link.startsWith("tel:") || link.startsWith("mailto:"))

  const content = (
    <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
      <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <p className="font-medium break-words">{contactInfo}</p>
    </div>
  )

  if (isLink) {
    return (
      <a href={link} className="hover:scale-105 transition-transform duration-300 block h-full">
        {content}
      </a>
    )
  }

  return content
}
