import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';

import wardrobeImg from '@/assets/services/wardrobe.jpg';
import kitchenImg from '@/assets/services/kitchen.jpg';
import bathroomImg from '@/assets/services/bathroom.jpg';
import livingRoomImg from '@/assets/services/living-room.jpg';

const serviceImages: Record<string, string> = {
  wardrobes: wardrobeImg,
  kitchens: kitchenImg,
  bathrooms: bathroomImg,
  livingRoom: livingRoomImg,
};

export function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    { key: 'wardrobes', ...t.services.items.wardrobes },
    { key: 'kitchens', ...t.services.items.kitchens },
    { key: 'bathrooms', ...t.services.items.bathrooms },
    { key: 'livingRoom', ...t.services.items.livingRoom },
  ];

  return (
    <section className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card shadow-soft hover:shadow-medium transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={serviceImages[service.key]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-cream mb-2">
                  {service.title}
                </h3>
                <p className="text-cream/80 text-sm line-clamp-2 mb-4">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/usluge">
              {t.services.viewGallery}
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
