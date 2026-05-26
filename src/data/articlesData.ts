/**
 * Métadonnées de tous les articles du blog Automatic Cars.
 *
 * ⚠️  Ce fichier ne contient QUE des données (pas de JSX).
 *     Le contenu détaillé de chaque article se trouve dans
 *     `articleContents.tsx` et est chargé paresseusement par slug.
 */

export interface ArticleMeta {
  /** Identifiant numérique unique */
  id: number;
  /** Slug URL‐safe (utilisé dans le routeur) */
  slug: string;
  /** Titre complet */
  title: string;
  /** Date affichée (format lisible FR) */
  date: string;
  /** Date ISO pour la balise <time> */
  dateTime: string;
  /** Catégorie affichée sur la card */
  category: string;
  /** Extrait court pour la card (~2‑3 lignes) */
  excerpt: string;
}

const articlesData: ArticleMeta[] = [
  {
    id: 1,
    slug: "abonnement-automatic-cars",
    title:
      "L'Abonnement Automatic Cars – Le privilège de la location haut de gamme",
    date: "24 Nov. 2025",
    dateTime: "2025-11-24",
    category: "Service",
    excerpt:
      "Un abonnement exclusif à partir de 390 € par an. Chez Automatic Cars, nous avons imaginé une formule unique en France : un abonnement annuel qui vous donne accès à des privilèges exclusifs tout au long de l'année.",
  },
  {
    id: 2,
    slug: "nouveautes-mercedes-gris-alpin",
    title: "Nouveautés : Découvrez nos Mercedes Gris Alpin",
    date: "15 Nov. 2025",
    dateTime: "2025-11-15",
    category: "Flotte",
    excerpt:
      "Automatic Cars continue de renforcer son positionnement dans la location de véhicules haut de gamme à Bordeaux avec l'arrivée de plusieurs nouveaux modèles d'exception en couleur Gris Alpin.",
  },
  {
    id: 3,
    slug: "location-fiat-500-bordeaux",
    title:
      "Location de voiture pas chère à Bordeaux – Fiat 500 à partir de 18 € / jour",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Économique",
    excerpt:
      "Des tarifs économiques sans compromis sur la qualité. Notre offre Fiat 500 est idéale pour ceux qui recherchent une location pas chère à Bordeaux.",
  },
  {
    id: 4,
    slug: "comment-louer-loueur-confiance",
    title: "Comment être sûr de louer chez un loueur de confiance ?",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Information",
    excerpt:
      "Le marché de la location de véhicules a explosé. Pour éviter les mauvaises surprises, voici les 6 critères essentiels à vérifier avant toute réservation.",
  },
  {
    id: 5,
    slug: "fin-paiement-especes-loi",
    title:
      "Fin du paiement en espèces pour la location de voiture : ce que dit la loi",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Réglementation",
    excerpt:
      "Depuis 2025, la réglementation française encadre strictement le paiement en espèces dans le secteur de la location automobile.",
  },
  {
    id: 6,
    slug: "reference-location-bordeaux",
    title:
      "Automatic Cars : la référence de la location haut de gamme à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Agence",
    excerpt:
      "Créée à Bordeaux, Automatic Cars s'est imposée en quelques années comme l'agence de location de véhicules haut de gamme la plus reconnue de la région.",
  },
  {
    id: 7,
    slug: "comment-fonctionne-livraison",
    title: "Comment fonctionne la livraison de voiture chez Automatic Cars ?",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    excerpt:
      "Notre objectif : vous faire gagner du temps et vous permettre de profiter de votre véhicule dès votre arrivée, sans passer par notre agence.",
  },
  {
    id: 8,
    slug: "partenariat-mercedes-benz-allemagne",
    title:
      "Notre partenariat avec Mercedes-Benz Allemagne : un gage d'exclusivité",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Partenariat",
    excerpt:
      "Nous travaillons en partenariat direct avec Mercedes-Benz Allemagne, un lien privilégié qui nous permet de garantir des modèles exclusifs et récents.",
  },
  {
    id: 9,
    slug: "ouverture-europe-barcelone",
    title: "Automatic Cars s'ouvre à l'Europe : direction Barcelone",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Développement",
    excerpt:
      "Après le succès bordelais, Automatic Cars franchit une nouvelle étape : l'ouverture de sa nouvelle antenne à Barcelone, au cœur de la Catalogne.",
  },
  {
    id: 10,
    slug: "location-voiture-metropole-bordeaux",
    title: "Location de voiture à Bordeaux et dans toute la métropole",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    excerpt:
      "Nous proposons un service de location de véhicules haut de gamme accessible dans toute la métropole de Bordeaux et sur l'ensemble de la Gironde.",
  },
  {
    id: 11,
    slug: "location-voiture-mariage-evenements",
    title: "Location de voiture pour mariage & événements à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Événementiel",
    excerpt:
      "Un mariage, un événement professionnel ou une soirée exceptionnelle méritent une arrivée à la hauteur du moment. L'élégance signée Automatic Cars.",
  },
  {
    id: 12,
    slug: "location-compactes-bordeaux",
    title:
      "Location Mercedes Classe A, Golf 8 R-Line & BMW Série 1 Pack M à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Flotte",
    excerpt:
      "Chez Automatic Cars, nous vous proposons le meilleur du segment compact premium. Des modèles neufs, full options et disponibles immédiatement.",
  },
  {
    id: 13,
    slug: "location-mois-renouvelable-bordeaux",
    title: "Location de voiture au mois renouvelable à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    excerpt:
      "Fini les contrats rigides : profitez d'une location de voiture au mois renouvelable, simple, claire et surtout 100 % flexible.",
  },
  {
    id: 14,
    slug: "livraison-domicile-bordeaux",
    title:
      "Livraison de voiture à domicile à Bordeaux – Le luxe qui vient à vous",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    excerpt:
      "Vos déplacements doivent être simples. C'est pourquoi nous proposons un service exclusif de livraison de véhicules à domicile ou à l'hôtel.",
  },
  {
    id: 15,
    slug: "location-voiture-luxe-bordeaux",
    title: "Location de voiture de luxe à Bordeaux – L'expérience premium",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Flotte",
    excerpt:
      "Mercedes-Benz, BMW, Audi, Range Rover, Porsche... Louez un véhicule d'exception pour un moment unique avec Automatic Cars.",
  },
  {
    id: 16,
    slug: "pourquoi-choisir-automatic-cars",
    title:
      "Pourquoi choisir Automatic Cars pour votre location de voiture à Bordeaux ?",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Agence",
    excerpt:
      "Toutes les gammes, une seule agence. Nous croyons qu'une agence doit s'adapter à tous les besoins, sans jamais faire de compromis sur la qualité.",
  },
  {
    id: 17,
    slug: "location-mercedes-cle-cabriolet",
    title: "Location Mercedes CLE Cabriolet à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Flotte",
    excerpt:
      "Dernier né de la gamme Mercedes, ce cabriolet de luxe associe élégance, puissance et technologie de pointe.",
  },
  {
    id: 18,
    slug: "location-avec-sans-chauffeur",
    title: "Location de voitures avec ou sans chauffeur à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    excerpt:
      "Que vous souhaitiez conduire vous-même ou être conduit par un chauffeur professionnel, nous vous proposons une expérience sur mesure.",
  },
  {
    id: 19,
    slug: "location-mercedes-classe-s-580",
    title: "Location Mercedes Classe S 580 à Bordeaux",
    date: "25 Oct. 2025",
    dateTime: "2025-10-25",
    category: "Flotte",
    excerpt:
      "La berline de luxe par excellence. Synonyme d'élégance, de confort et d'innovation, la Classe S est le choix idéal pour un transfert VIP.",
  },
];

export default articlesData;