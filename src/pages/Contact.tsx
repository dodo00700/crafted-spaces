import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.title = language === 'hr'
      ? 'Kontakt | Stolarija - Javite nam se'
      : 'Contact | Stolarija - Get in Touch';
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setFormStatus('sending');

    // Submit to FormSubmit (replace with your email)
    try {
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nova poruka od ${formData.name} - Stolarija`,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.methods.phone,
      value: '+385 XX XXX XXXX',
      href: 'tel:+385XXXXXXXX',
    },
    {
      icon: Mail,
      label: t.contact.methods.email,
      value: 'info@stolarija.hr',
      href: 'mailto:info@stolarija.hr',
    },
    {
      icon: MapPin,
      label: language === 'hr' ? 'Lokacija' : 'Location',
      value: 'Zagreb, Hrvatska',
      href: undefined,
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
              {t.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                {language === 'hr' ? 'Kako nas možete kontaktirati' : 'How to reach us'}
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-medium text-foreground hover:text-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional text */}
              <div className="mt-12 p-6 bg-secondary rounded-xl">
                <p className="text-muted-foreground">
                  {language === 'hr'
                    ? 'Radujemo se vašem upitu! Odgovorit ćemo vam u najkraćem mogućem roku.'
                    : 'We look forward to your inquiry! We will respond as soon as possible.'}
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-medium">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  {t.contact.methods.message}
                </h2>

                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-lg text-foreground font-medium">
                      {t.contact.form.success}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.name}</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={errors.name ? 'border-destructive' : ''}
                        disabled={formStatus === 'sending'}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={errors.email ? 'border-destructive' : ''}
                        disabled={formStatus === 'sending'}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={errors.message ? 'border-destructive' : ''}
                        disabled={formStatus === 'sending'}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 text-destructive">
                        <AlertCircle size={18} />
                        <p className="text-sm">{t.contact.form.error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full"
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? (
                        t.contact.form.sending
                      ) : (
                        <>
                          {t.contact.form.submit}
                          <Send size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
