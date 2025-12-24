import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, Users, Gem, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { CTASection } from '@/components/home/CTASection';
import aboutImg from '@/assets/about-craftsman.jpg';

const iconMap = {
  experience: Award,
  detail: Eye,
  approach: Users,
  materials: Gem,
};

const About = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === 'hr'
      ? 'O nama | Stolarija - Obiteljska tradicija'
      : 'About Us | Stolarija - Family Tradition';
  }, [language]);

  const features = [
    { key: 'experience', icon: iconMap.experience, ...t.about.experience },
    { key: 'detail', icon: iconMap.detail, ...t.about.detail },
    { key: 'approach', icon: iconMap.approach, ...t.about.approach },
    { key: 'materials', icon: iconMap.materials, ...t.about.materials },
  ];

  const values = language === 'hr' 
    ? [
        'Svaki projekt je jedinstven',
        'Koristimo samo kvalitetne materijale',
        'Pažljivo slušamo vaše potrebe',
        'Precizna izrada do zadnjeg detalja',
        'Profesionalna montaža',
        'Garancija na sve radove',
      ]
    : [
        'Every project is unique',
        'We use only quality materials',
        'We carefully listen to your needs',
        'Precise craftsmanship to the last detail',
        'Professional installation',
        'Warranty on all work',
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.about.title}
            </h1>
            <p className="text-lg text-gold font-medium">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={aboutImg}
                  alt="Stolar na poslu"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-gold rounded-2xl -z-10 opacity-60" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.about.text}
              </p>

              {/* Values List */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold mb-4">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
