import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">S</span>
              </div>
              <span className="font-heading text-xl font-semibold">Stolarija</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/80 hover:text-gold transition-colors">
                {t.nav.home}
              </Link>
              <Link to="/usluge" className="text-primary-foreground/80 hover:text-gold transition-colors">
                {t.nav.services}
              </Link>
              <Link to="/o-nama" className="text-primary-foreground/80 hover:text-gold transition-colors">
                {t.nav.about}
              </Link>
              <Link to="/kontakt" className="text-primary-foreground/80 hover:text-gold transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">{t.nav.services}</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-primary-foreground/80">{t.services.items.wardrobes.title}</span>
              <span className="text-primary-foreground/80">{t.services.items.kitchens.title}</span>
              <span className="text-primary-foreground/80">{t.services.items.bathrooms.title}</span>
              <span className="text-primary-foreground/80">{t.services.items.livingRoom.title}</span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">{t.footer.contact}</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="tel:+385XXXXXXXX" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Phone size={18} />
                <span>+385 XX XXX XXXX</span>
              </a>
              <a 
                href="mailto:info@stolarija.hr" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Mail size={18} />
                <span>info@stolarija.hr</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin size={18} />
                <span>Zagreb, Hrvatska</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Stolarija. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
