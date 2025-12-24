export type Language = 'hr' | 'en';

interface TranslationContent {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: {
      quote: string;
      gallery: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    viewGallery: string;
    items: {
      wardrobes: { title: string; description: string };
      kitchens: { title: string; description: string };
      bathrooms: { title: string; description: string };
      livingRoom: { title: string; description: string };
      shelves: { title: string; description: string };
      other: { title: string; description: string };
    };
  };
  about: {
    title: string;
    subtitle: string;
    experience: { title: string; description: string };
    detail: { title: string; description: string };
    approach: { title: string; description: string };
    materials: { title: string; description: string };
    text: string;
  };
  contact: {
    title: string;
    subtitle: string;
    methods: {
      phone: string;
      email: string;
      message: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    whatsapp: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    rights: string;
  };
  lightbox: {
    close: string;
    previous: string;
    next: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  hr: {
    nav: {
      home: 'Početna',
      services: 'Usluge',
      about: 'O nama',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Namještaj po mjeri, prilagođen vašem prostoru',
      subtitle: 'Spoj tradicije i modernog dizajna. Svaki komad izrađujemo s pažnjom prema detaljima, kvalitetnim materijalima i preciznim mjerama.',
      cta: {
        quote: 'Zatraži ponudu',
        gallery: 'Pogledaj naše radove',
      },
    },
    services: {
      title: 'Naše usluge',
      subtitle: 'Kvalitetan namještaj izrađen s pažnjom i preciznošću',
      viewGallery: 'Pogledaj galeriju',
      items: {
        wardrobes: {
          title: 'Ugradbeni ormari i garderobe',
          description: 'Pametna rješenja za maksimalno iskorištavanje prostora. Dizajnirani prema vašim potrebama i dimenzijama prostora.',
        },
        kitchens: {
          title: 'Kuhinje po mjeri',
          description: 'Funkcionalnost, ergonomija i dugotrajni materijali. Kuhinja koja će vam služiti godinama.',
        },
        bathrooms: {
          title: 'Kupaonski namještaj',
          description: 'Otpornost na vlagu i praktična rješenja. Kvalitetni materijali prilagođeni vlažnim prostorima.',
        },
        livingRoom: {
          title: 'Dnevni boravak',
          description: 'TV elementi, police i zidne jedinice po mjeri. Stvorite prostor koji odražava vaš stil.',
        },
        shelves: {
          title: 'Police i namještaj po mjeri',
          description: 'Prilagođena rješenja za svaki prostor. Od radnih soba do hodnika.',
        },
        other: {
          title: 'Posebni projekti',
          description: 'Ako ne vidite uslugu koja vam je potrebna, slobodno nas kontaktirajte. Realiziramo sve stolarske projekte.',
        },
      },
    },
    about: {
      title: 'O nama',
      subtitle: 'Tradicija kvalitete i majstorstva',
      experience: {
        title: 'Dugogodišnje iskustvo',
        description: 'Više od 15 godina izrađujemo namještaj koji zadovoljava i najviše standarde kvalitete.',
      },
      detail: {
        title: 'Pažnja prema detaljima',
        description: 'Svaki projekt tretiramo s jednakom pažnjom, od prvog mjerenja do završne montaže.',
      },
      approach: {
        title: 'Individualni pristup',
        description: 'Slušamo vaše potrebe i želje te ih pretvaramo u funkcionalna i estetska rješenja.',
      },
      materials: {
        title: 'Kvalitetni materijali',
        description: 'Koristimo samo provjerene materijale od pouzdanih dobavljača.',
      },
      text: 'Mi smo obiteljska stolarska radionica s dugogodišnjom tradicijom u izradi namještaja po mjeri. Svaki projekt započinjemo pažljivim slušanjem vaših potreba i želja. Naša strast prema drvu i majstorstvu vidljiva je u svakom komadu koji izrađujemo.',
    },
    contact: {
      title: 'Kontaktirajte nas',
      subtitle: 'Javite nam se za besplatnu konzultaciju i ponudu',
      methods: {
        phone: 'Telefon',
        email: 'Email',
        message: 'Poruka',
      },
      form: {
        name: 'Ime i prezime',
        email: 'Email adresa',
        message: 'Vaša poruka',
        submit: 'Pošalji poruku',
        sending: 'Šaljem...',
        success: 'Hvala vam! Vaša poruka je uspješno poslana.',
        error: 'Došlo je do greške. Molimo pokušajte ponovno.',
      },
      whatsapp: 'Pošaljite nam poruku',
    },
    footer: {
      description: 'Kvalitetan namještaj po mjeri za vaš dom i poslovni prostor.',
      quickLinks: 'Brze poveznice',
      contact: 'Kontakt',
      rights: 'Sva prava pridržana.',
    },
    lightbox: {
      close: 'Zatvori',
      previous: 'Prethodna',
      next: 'Sljedeća',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Custom Furniture, Tailored to Your Space',
      subtitle: 'A blend of tradition and modern design. We craft each piece with attention to detail, quality materials, and precise measurements.',
      cta: {
        quote: 'Request a Quote',
        gallery: 'View Our Work',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Quality furniture crafted with care and precision',
      viewGallery: 'View Gallery',
      items: {
        wardrobes: {
          title: 'Built-in Wardrobes',
          description: 'Smart solutions for maximum space utilization. Designed according to your needs and room dimensions.',
        },
        kitchens: {
          title: 'Custom Kitchens',
          description: 'Functionality, ergonomics, and durable materials. A kitchen that will serve you for years.',
        },
        bathrooms: {
          title: 'Bathroom Furniture',
          description: 'Moisture-resistant and practical solutions. Quality materials adapted for humid spaces.',
        },
        livingRoom: {
          title: 'Living Room',
          description: 'TV units, shelves, and custom wall units. Create a space that reflects your style.',
        },
        shelves: {
          title: 'Custom Shelves & Furniture',
          description: 'Tailored solutions for every space. From home offices to hallways.',
        },
        other: {
          title: 'Special Projects',
          description: "If you don't see the service you need, feel free to contact us. We realize all carpentry projects.",
        },
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'A Tradition of Quality and Craftsmanship',
      experience: {
        title: 'Years of Experience',
        description: 'For over 15 years, we have been creating furniture that meets the highest quality standards.',
      },
      detail: {
        title: 'Attention to Detail',
        description: 'We treat every project with equal care, from the first measurement to the final installation.',
      },
      approach: {
        title: 'Individual Approach',
        description: 'We listen to your needs and desires and turn them into functional and aesthetic solutions.',
      },
      materials: {
        title: 'Quality Materials',
        description: 'We use only proven materials from reliable suppliers.',
      },
      text: 'We are a family carpentry workshop with a long tradition in custom furniture making. We start every project by carefully listening to your needs and desires. Our passion for wood and craftsmanship is visible in every piece we create.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch for a free consultation and quote',
      methods: {
        phone: 'Phone',
        email: 'Email',
        message: 'Message',
      },
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! Your message has been sent successfully.',
        error: 'An error occurred. Please try again.',
      },
      whatsapp: 'Send us a message',
    },
    footer: {
      description: 'Quality custom furniture for your home and business.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    lightbox: {
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
    },
  },
};

export type Translations = TranslationContent;
