import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { AboutPreview } from '@/components/home/AboutPreview';
import { CTASection } from '@/components/home/CTASection';
import { useLanguage } from '@/i18n/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'hr' 
      ? 'Stolarija | Namještaj po mjeri - Kvalitetna izrada'
      : 'Stolarija | Custom Furniture - Quality Craftsmanship';
  }, [language]);

  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
