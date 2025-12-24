import { motion } from 'framer-motion';
import { Award, Eye, Users, Gem } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import aboutImg from '@/assets/about-craftsman.jpg';

const iconMap = {
  experience: Award,
  detail: Eye,
  approach: Users,
  materials: Gem,
};

export function AboutPreview() {
  const { t } = useLanguage();

  const features = [
    { key: 'experience', icon: iconMap.experience, ...t.about.experience },
    { key: 'detail', icon: iconMap.detail, ...t.about.detail },
    { key: 'approach', icon: iconMap.approach, ...t.about.approach },
    { key: 'materials', icon: iconMap.materials, ...t.about.materials },
  ];

  return (
    <section className="py-24">
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
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.about.title}
            </h2>
            <p className="text-lg text-gold font-medium mb-6">
              {t.about.subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {t.about.text}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
