import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Lightbox } from '@/components/Lightbox';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

// Import service images
import wardrobeImg from '@/assets/services/wardrobe.jpg';
import kitchenImg from '@/assets/services/kitchen.jpg';
import bathroomImg from '@/assets/services/bathroom.jpg';
import livingRoomImg from '@/assets/services/living-room.jpg';
import shelvesImg from '@/assets/services/shelves.jpg';

interface ServiceSection {
  key: string;
  title: string;
  description: string;
  images: string[];
}

const Services = () => {
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    document.title = language === 'hr'
      ? 'Usluge | Stolarija - Namještaj po mjeri'
      : 'Services | Stolarija - Custom Furniture';
  }, [language]);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const services: ServiceSection[] = [
    {
      key: 'wardrobes',
      title: t.services.items.wardrobes.title,
      description: t.services.items.wardrobes.description,
      images: [wardrobeImg, wardrobeImg, wardrobeImg],
    },
    {
      key: 'kitchens',
      title: t.services.items.kitchens.title,
      description: t.services.items.kitchens.description,
      images: [kitchenImg, kitchenImg, kitchenImg],
    },
    {
      key: 'bathrooms',
      title: t.services.items.bathrooms.title,
      description: t.services.items.bathrooms.description,
      images: [bathroomImg, bathroomImg, bathroomImg],
    },
    {
      key: 'livingRoom',
      title: t.services.items.livingRoom.title,
      description: t.services.items.livingRoom.description,
      images: [livingRoomImg, livingRoomImg, livingRoomImg],
    },
    {
      key: 'shelves',
      title: t.services.items.shelves.title,
      description: t.services.items.shelves.description,
      images: [shelvesImg, shelvesImg, shelvesImg],
    },
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
              {t.services.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, sectionIndex) => (
        <section
          key={service.key}
          id={service.key}
          className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {service.description}
              </p>
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.images.map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: imgIndex * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(service.images, imgIndex)}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500">
                    <img
                      src={image}
                      alt={`${service.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Special Projects / Other */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-6">
              <Sparkles className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              {t.services.items.other.title}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {t.services.items.other.description}
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/kontakt">
                {t.hero.cta.quote}
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </Layout>
  );
};

export default Services;
