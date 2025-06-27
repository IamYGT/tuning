import { Link } from "@/i18n/navigation";
import { LucideIcon } from "lucide-react";
import type React from "react";

interface ContactInfoCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  contactInfo: string;
  link?: string;
}

export default function ContactInfoCard({
  icon: Icon,
  title,
  description,
  contactInfo,
  link,
}: ContactInfoCardProps) {
  return (
    <>
      <div className="p-6 rounded-lg bg-card border border-border h-full flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow">
        <div className="p-3 rounded-full bg-primary/10 mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <div className="mt-4">
          <a
            href={link || "#"}
            className="font-medium text-primary hover:underline break-words"
          >
            {contactInfo}
          </a>
        </div>
      </div>
    </>
  );
}
