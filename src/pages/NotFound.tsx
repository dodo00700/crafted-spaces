import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-heading text-8xl font-bold text-gold mb-4">404</h1>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            {language === 'hr' ? 'Stranica nije pronađena' : 'Page Not Found'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {language === 'hr'
              ? 'Stranica koju tražite ne postoji ili je premještena.'
              : 'The page you are looking for does not exist or has been moved.'}
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/">
              <Home size={18} />
              {language === 'hr' ? 'Povratak na početnu' : 'Back to Home'}
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;