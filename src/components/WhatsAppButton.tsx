import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function WhatsAppButton() {
  const { t } = useLanguage();
  const phoneNumber = '385XXXXXXXX'; // Replace with actual number
  const message = encodeURIComponent(t.contact.whatsapp);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label={t.contact.whatsapp}
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-strong hover:shadow-gold hover:scale-105 transition-all duration-300">
          <MessageCircle size={24} className="fill-current" />
          <span className="font-medium hidden sm:block">{t.contact.whatsapp}</span>
        </div>
      </div>
    </a>
  );
}
