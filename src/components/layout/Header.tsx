import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/usluge', label: t.nav.services },
    { path: '/o-nama', label: t.nav.about },
    { path: '/kontakt', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-wood flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">S</span>
            </div>
            <span className="font-heading text-xl font-semibold text-foreground hidden sm:block">
              Stolarija
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-gold rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center bg-secondary rounded-full p-1">
              <button
                onClick={() => setLanguage('hr')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'hr'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                HR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
            <Button variant="gold" size="lg" asChild>
              <Link to="/kontakt">{t.hero.cta.quote}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center bg-secondary rounded-full p-1">
                    <button
                      onClick={() => setLanguage('hr')}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        language === 'hr'
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      HR
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        language === 'en'
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                    {t.hero.cta.quote}
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
