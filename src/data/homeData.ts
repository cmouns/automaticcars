// src/data/homeData.ts
import { Key, Sparkles, Clock, Crown, ShieldCheck, Euro } from "lucide-react";

export const BRANDS_DATA = [
  {
    name: "Cupra",
    img: "https://automaticcars.fr/wp-content/uploads/2024/10/47071d6e0fc18c454660395f20c8247e.png",
  },
  {
    name: "BMW",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/bmw.png",
  },
  {
    name: "Mercedes",
    img: "https://automaticcars.fr/wp-content/uploads/2024/10/pngegg-1.png",
  },
  {
    name: "Volkswagen",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/klipartz.com_.png",
  },
  {
    name: "Mini",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/Mini-logo.svg.png",
  },
];

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
      "Profitez d'un véhicule toujours propre avec notre service de nettoyage inclus à chaque location.",
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
      "Obtenez un véhicule premium à prix compétitifs, avec un contrat personnalisé.",
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

export const FEATURED_CARS = [
  {
    name: "Cupra Leon",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/Cupra-1-scaled-e1752522811309-1024x576.webp",
  },
  {
    name: "Renault Clio",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/Clio-bleu-scaled-e1752709235590-1024x576.webp",
  },
  {
    name: "Mercedes-Benz CLE",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/CLE-CAB-NOIR-1-scaled-e1752523435609-1024x576.webp",
  },
  {
    name: "Mercedes Classe A",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/ClasseA-1-scaled-e1752522200219-1024x576.webp",
  },
  {
    name: "Golf GTI",
    img: "https://automaticcars.fr/wp-content/uploads/2025/07/GTI-2-scaled-e1752523334191-1024x576.webp",
  },
];

export const REVIEWS_DATA = [
  {
    name: "Sophie Wilcock",
    text: "Fantastic service! Jad and his team delivered our vehicle directly...",
    time: "il y a 6 mois",
    bg: "bg-purple-600",
  },
  {
    name: "Cameron Ngo",
    text: "J’ai décidé de faire confiance à Automatic Cars Bordeaux pour partir un weekend...",
    time: "il y a 3 mois",
    bg: "bg-blue-600",
  },
  {
    name: "Paul Foquet Carron",
    text: "Week-end parfait avec une Mercedes Classe S louée chez Automatic Cars...",
    time: "il y a 7 mois",
    bg: "bg-teal-600",
  },
  {
    name: "Djema Menam",
    text: "Je loue chez eux depuis plus d’un an maintenant et je n’ai jamais été déçue !",
    time: "il y a 5 mois",
    bg: "bg-orange-500",
  },
  {
    name: "Likmazeer",
    text: "Location GLC coupé 2025 parfaite, rien à dire, répondent du tac au tac...",
    time: "il y a 3 mois",
    bg: "bg-red-500",
  },
  {
    name: "Jean-François R.",
    text: "Service de location de voitures très qualitatif. Bon rapport qualité/prix...",
    time: "il y a 5 mois",
    bg: "bg-green-600",
  },
];

export const FAQS_DATA = [
  {
    q: "Quelles sont nos conditions préalables ?",
    a: "Vous devez avoir au moins vingt et un ans et être titulaire du permis depuis deux ans...",
  },
  {
    q: "Y a-t-il un dépôt de garantie à prévoir ?",
    a: "Oui, un dépôt de garantie est obligatoire. Il est effectué par empreinte bancaire...",
  },
  {
    q: "Comment se passe la réservation ?",
    a: "La réservation se fait en ligne ou par téléphone. Vous choisissez les dates, le véhicule...",
  },
];
