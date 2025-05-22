import { LucideIcon } from "lucide-react"
import Link from "next/link"

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
  link,
}: ContactInfoCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon 
          width={28} 
          height={28} 
          className="text-primary" 
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {link ? (
        <Link href={link} className="text-primary hover:underline">
          {contactInfo}
        </Link>
      ) : (
        <p className="text-sm">{contactInfo}</p>
      )}
    </div>
  )
}
