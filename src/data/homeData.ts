import { Key, Sparkles, Clock, Crown, ShieldCheck, Euro } from "lucide-react";

// ─── Brands ───────────────────────────────────────────────────────────────────

export const BRANDS_DATA = [
  {
    name: "Mercedes-Benz",
    img: "https://automaticcars.fr/wp-content/uploads/2024/10/pngegg-1.png",
  },
  {
    name: "BMW",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/bmw.png",
  },
  {
    name: "Volkswagen",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/klipartz.com_.png",
  },
  {
    name: "Mini",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/Mini-logo.svg.png",
  },
  {
    name: "Fiat",
    img: "https://automaticcars.fr/wp-content/uploads/2024/10/logo-fiat.png",
  },
  {
    name: "Renault",
    img: "https://automaticcars.fr/wp-content/uploads/2024/10/CITYPNG.COMRenault-Logo-Icon-Sign-PNG-4000x4000-1.png",
  },
  {
    name: "Nissan",
    img: "https://automaticcars.fr/wp-content/uploads/2024/10/pngwing.com_.png",
  },
  {
    name: "Cupra",
    img: "https://automaticcars.fr/wp-content/uploads/2024/10/47071d6e0fc18c454660395f20c8247e.png",
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Livraison & Récupération",
    description:
      "Profitez d'un confort et d'une flexibilité grâce à la livraison à domicile, en gare ou aéroport.",
    icon: Key,
    isDark: false,
  },
  {
    id: 2,
    title: "Nettoyage Inclus",
    description:
      "Profitez d'un véhicule toujours propre avec notre service de nettoyage modéré inclus à chaque location.",
    icon: Sparkles,
    isDark: true,
  },
  {
    id: 3,
    title: "Location Longue Durée",
    description:
      "Réservez un véhicule automatique pour plusieurs semaines ou mois avec des tarifs dégressifs.",
    icon: Clock,
    isDark: false,
  },
  {
    id: 4,
    title: "Offre Premium",
    description:
      "Obtenez un véhicule premium à prix compétitifs, avec un contrat personnalisé selon vos besoins.",
    icon: Crown,
    isDark: false,
  },
  {
    id: 5,
    title: "Assistance 24/7",
    description:
      "Roulez l'esprit tranquille grâce à notre service d'assistance disponible tout au long de votre location.",
    icon: ShieldCheck,
    isDark: true,
  },
  {
    id: 6,
    title: "Prix Abordable",
    description:
      "Bénéficiez de nos tarifs compétitifs pour louer une voiture automatique sans compromis sur la qualité.",
    icon: Euro,
    isDark: false,
  },
];

// ─── Featured cars (23 véhicules de la flotte) ────────────────────────────────

export const FEATURED_CARS = [
  {
    name: "Mercedes GLA",
    img: "/images/featuredcars/mercedes-gla-location-bordeaux.webp",
  },
  {
    name: "Cupra Formentor 2025",
    img: "/images/featuredcars/cupra-formentor-2025-location-bordeaux.webp",
  },
  {
    name: "Nissan Juke",
    img: "/images/featuredcars/nissan-juke-location-bordeaux.webp",
  },
  {
    name: "Mercedes Classe A",
    img: "/images/featuredcars/mercedes-classe-a-location-bordeaux.webp",
  },
  {
    name: "Mini Cooper",
    img: "/images/featuredcars/mini-cooper-location-bordeaux.webp",
  },
  {
    name: "Volkswagen Taigo R",
    img: "/images/featuredcars/volkswagen-taigo-r-location-bordeaux.webp",
  },
  {
    name: "Fiat 500 Hybride",
    img: "/images/featuredcars/fiat-500-hybride-location-bordeaux.webp",
  },
  {
    name: "Volkswagen Golf 8 R Line",
    img: "/images/featuredcars/volkswagen-golf-8-r-line-location-bordeaux.webp",
  },
  {
    name: "Cupra Leon",
    img: "/images/featuredcars/cupra-leon-location-bordeaux.webp",
  },
  {
    name: "Renault Clio 5",
    img: "/images/featuredcars/renault-clio-bleu-location-bordeaux.webp",
  },
  {
    name: "Mercedes CLE Cabriolet",
    img: "/images/featuredcars/mercedes-cle-cabriolet-noir-location-bordeaux.webp",
  },
  {
    name: "Mercedes Classe A 200",
    img: "/images/featuredcars/mercedes-classe-a-grise-location-bordeaux.webp",
  },
  {
    name: "Volkswagen Golf GTI",
    img: "/images/featuredcars/volkswagen-golf-gti-location-bordeaux.webp",
  },
  {
    name: "BMW Série 1",
    img: "/images/featuredcars/bmw-serie-1-location-bordeaux.webp",
  },
  {
    name: "Mercedes CLE Cabriolet",
    img: "/images/featuredcars/mercedes-cle-cabriolet-location-bordeaux.webp",
  },
  {
    name: "BMW X1",
    img: "/images/featuredcars/bmw-x1-location-bordeaux.webp",
  },
  {
    name: "Cupra Formentor VZ",
    img: "/images/featuredcars/cupra-formentor-vz-location-bordeaux.webp",
  },
  {
    name: "Mercedes Classe E",
    img: "/images/featuredcars/mercedes-classe-e-location-bordeaux.webp",
  },
  {
    name: "Renault Clio 5",
    img: "/images/featuredcars/renault-clio-rouge-location-bordeaux.webp",
  },
  {
    name: "Mercedes Classe S",
    img: "/images/featuredcars/mercedes-classe-s-location-bordeaux.webp",
  },
  {
    name: "Toyota Aygo X",
    img: "/images/featuredcars/toyota-aygo-location-bordeaux.webp",
  },
  {
    name: "Mercedes GLC",
    img: "/images/featuredcars/mercedes-glc-location-bordeaux.webp",
  },
  {
    name: "Mercedes Classe G",
    img: "/images/featuredcars/mercedes-classe-g-location-bordeaux.webp",
  },
];
// ─── Reviews ──────────────────────────────────────────────────────────────────

export const REVIEWS_DATA = [
  {
    name: "Lookman",
    text: "C'était incroyable, vous pouvez louer les yeux fermés avec Jad. La location s'est super bien passée 👌🏼",
    time: "il y a 2 mois",
    bg: "bg-purple-600",
    source: "google",
  },
  {
    name: "Imad",
    text: "Jad est quelqu'un d'humain, de très professionnel et attentif aux besoins de ses clients. Je recommande vivement !",
    time: "il y a 1 mois",
    bg: "bg-blue-600",
    source: "google",
  },
  {
    name: "Jeff Bilger",
    text: "Location très abordable avec une communication rapide, une disponibilité et un large choix de véhicules 👌🏼.",
    time: "il y a 3 mois",
    bg: "bg-teal-600",
    source: "google",
  },
  {
    name: "Soufian Bey",
    text: "Je recommande fortement. Prestation et service au top, retour de la caution très rapide, personne honnête et sérieuse ✅",
    time: "il y a 4 mois",
    bg: "bg-orange-500",
    source: "google",
  },
  {
    name: "Sophie Wilcock",
    text: "Fantastic service! Jad and his team delivered our vehicle directly to us. Vehicle was spotless and exactly as described.",
    time: "il y a 6 mois",
    bg: "bg-pink-600",
    source: "google",
  },
  {
    name: "Cameron Ngo",
    text: "J'ai décidé de faire confiance à Automatic Cars Bordeaux pour partir en week-end. Expérience parfaite du début à la fin.",
    time: "il y a 3 mois",
    bg: "bg-indigo-600",
    source: "google",
  },
  {
    name: "Valérie L.",
    text: "Bon véhicule en très bon état. Tout s'est très bien déroulé avec Jad. Hôte arrangeant.",
    time: "il y a 5 mois",
    bg: "bg-emerald-600",
    source: "turo",
  },
  {
    name: "Paul J.",
    text: "Superb vehicle - super clean. Easy collect and return. Nice host. Perfect, thank you.",
    time: "il y a 7 mois",
    bg: "bg-sky-600",
    source: "turo",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQS_DATA = [
  {
    q: "Quelles sont les conditions préalables ?",
    a: "Vous devez avoir au moins 21 ans et être titulaire du permis depuis 2 ans. Nous demandons un permis de conduire valide (format physique), une pièce d'identité, une carte bancaire à votre nom, ainsi qu'un justificatif de domicile de moins de 3 mois.",
  },
  {
    q: "Y a-t-il un dépôt de garantie à prévoir ?",
    a: "Oui, un dépôt de garantie est obligatoire. Il est effectué par empreinte bancaire (ou exceptionnellement en espèces jusqu'à 1 000 €) au nom du conducteur. Le montant varie selon le véhicule. La restitution s'effectue entre 7 et 21 jours après retour du véhicule, s'il n'y a aucun frais à retenir.",
  },
  {
    q: "Comment se passe la réservation ?",
    a: "La réservation se fait en ligne ou par téléphone. Vous choisissez les dates, le véhicule, et si vous préférez une livraison ou un retrait sur place. Une fois la disponibilité confirmée et les documents reçus avec le paiement, vous recevez les détails par e-mail.",
  },
  {
    q: "La livraison est-elle incluse dans le tarif ?",
    a: "La livraison à domicile, en gare ou à l'aéroport est disponible sur devis selon la distance. Contactez-nous directement pour obtenir un tarif personnalisé et vérifier la disponibilité sur votre zone.",
  },
];
