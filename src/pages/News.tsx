import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/Button";

// Le composant Call-To-Action réutilisable pour la fin de chaque article
const ArticleCTA = () => (
  <div className="bg-dark-900 text-white p-8 rounded-xl mt-12 mb-8 text-center shadow-xl">
    <h4 className="text-2xl font-serif text-gold-400 mb-4">
      Réservez votre expérience
    </h4>
    <p className="text-gray-300 mb-6 font-light">
      Automatic Cars – Bordeaux (proche Gare Saint-Jean)
      <br />
      Toutes les gammes, une seule agence.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Button variant="primary">Réserver un véhicule</Button>
      <Button
        variant="secondary"
        onClick={() => (window.location.href = "tel:+33768176882")}
      >
        Appeler le 07 68 17 68 82
      </Button>
    </div>
  </div>
);

// Base de données locale de TOUS tes articles
const articlesDB = [
  {
    id: 1,
    slug: "abonnement-automatic-cars",
    title:
      "L’Abonnement Automatic Cars – Le privilège de la location haut de gamme",
    date: "24 Nov. 2025",
    dateTime: "2025-11-24",
    category: "Service",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Un abonnement exclusif à partir de 390 € par an. Chez Automatic Cars,
          nous avons imaginé une formule unique en France : un abonnement annuel
          qui vous donne accès à des privilèges exclusifs tout au long de
          l’année.
        </p>
        <p className="mb-6">
          Pour seulement 390 € par an, vous rejoignez le club Automatic Cars,
          réservé à nos clients les plus fidèles et passionnés d’automobile haut
          de gamme.
        </p>

        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Les avantages réservés à nos membres
        </h3>

        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          1. -50 % sur vos cautions toute l’année
        </h4>
        <p className="mb-4">
          Grâce à votre abonnement, vous bénéficiez de réductions
          exceptionnelles sur les dépôts de garantie. Louez nos véhicules
          d’exception en payant deux fois moins de caution.
        </p>

        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          2. -10 % sur toutes vos locations
        </h4>
        <p className="mb-4">
          En tant que membre, vous profitez automatiquement de 10 % de réduction
          sur toutes vos réservations, sans limite de nombre ni de durée.
        </p>

        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          3. Découvrez nos modèles en avant-première
        </h4>
        <p className="mb-4">
          Les membres du club ont la possibilité de tester nos nouveaux modèles
          avant leur mise en location officielle.
        </p>

        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          4. Accès à nos événements privés
        </h4>
        <p className="mb-6">
          L’abonnement comprend également une invitation à nos événements
          exclusifs : Cocktails, soirées privées, test drives, et présentation
          de nouveaux modèles.
        </p>

        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Un concept unique à Bordeaux
        </h3>
        <p className="mb-6">
          L’abonnement Automatic Cars est bien plus qu’une simple offre de
          location : c’est un accès privilégié à un univers automobile haut de
          gamme.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 2,
    slug: "nouveautes-mercedes-gris-alpin",
    title: "Nouveautés : Découvrez nos Mercedes Gris Alpin",
    date: "15 Nov. 2025",
    dateTime: "2025-11-15",
    category: "Flotte",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Automatic Cars continue de renforcer son positionnement dans la
          location de véhicules haut de gamme à Bordeaux avec l’arrivée de
          plusieurs nouveaux modèles d’exception en couleur Gris Alpin.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Le Gris Alpin : la nouvelle signature Mercedes
        </h3>
        <p className="mb-6">
          Une teinte premium, moderne et extrêmement élégante, qui sublime les
          lignes sportives et luxueuses des modèles de la marque.
        </p>
        <ul className="space-y-4 mb-12 mt-8">
          <li className="flex items-start gap-3 text-gray-700">
            <CheckCircle className="text-gold-500 shrink-0 mt-1" size={20} />
            <div>
              <strong className="text-dark-900 block">Mercedes Classe A</strong>
              Compacte, sportive et polyvalente, idéale pour les déplacements
              urbains.
            </div>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <CheckCircle className="text-gold-500 shrink-0 mt-1" size={20} />
            <div>
              <strong className="text-dark-900 block">Mercedes GLC</strong>
              Ce SUV combine élégance, stabilité et technologies avancées.
            </div>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <CheckCircle className="text-gold-500 shrink-0 mt-1" size={20} />
            <div>
              <strong className="text-dark-900 block">
                Mercedes GLE 63 S AMG
              </strong>
              Le monstre de la flotte. La combinaison parfaite entre sportivité
              extrême et luxe absolu.
            </div>
          </li>
        </ul>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 3,
    slug: "location-fiat-500-bordeaux",
    title:
      "Location de voiture pas chère à Bordeaux – Fiat 500 à partir de 18 € / jour",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Économique",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Des tarifs économiques sans compromis sur la qualité. Notre offre Fiat
          500 est idéale pour ceux qui recherchent une location pas chère à
          Bordeaux.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          L’élégance urbaine à petit prix
        </h3>
        <ul className="space-y-3 mb-12">
          {[
            "Boîte manuelle ou automatique",
            "Climatisation & Bluetooth",
            "Écran tactile & Apple CarPlay",
            "Faible consommation",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <CheckCircle className="text-gold-500 shrink-0" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 4,
    slug: "comment-louer-loueur-confiance",
    title: "Comment être sûr de louer chez un loueur de confiance ?",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Information",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Le marché de la location de véhicules a explosé. Pour éviter les
          mauvaises surprises, voici les 6 critères essentiels à vérifier avant
          toute réservation.
        </p>
        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          1. Le capital social et la structure juridique
        </h4>
        <p className="mb-4">
          Un loueur de confiance doit être une société immatriculée au RCS avec
          un capital social clair.
        </p>
        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          2. Une assurance professionnelle adaptée
        </h4>
        <p className="mb-4">
          Vérifiez toujours que le véhicule est couvert par une assurance
          spécifique à la location courte durée.
        </p>
        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          3. Des avis Google authentiques et nombreux
        </h4>
        <p className="mb-4">
          Un loueur sérieux doit avoir plusieurs dizaines d’avis vérifiés avec
          une note moyenne supérieure à 4,5/5.
        </p>
        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          4. Un site internet professionnel et transparent
        </h4>
        <p className="mb-4">
          Présentation de la flotte, CGV claires, paiement sécurisé.
        </p>
        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          5. Une présence réelle sur les réseaux sociaux
        </h4>
        <p className="mb-4">
          Des photos réelles de la flotte et des témoignages clients.
        </p>
        <h4 className="text-lg font-bold text-dark-900 mb-2 mt-6">
          6. Un local ou showroom identifiable
        </h4>
        <p className="mb-6">
          Un loueur de confiance doit disposer d’un local professionnel
          identifiable, prouvant son existence réelle.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 5,
    slug: "fin-paiement-especes-loi",
    title:
      "Fin du paiement en espèces pour la location de voiture : ce que dit la loi",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Réglementation",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Depuis 2025, la réglementation française encadre strictement le
          paiement en espèces dans le secteur de la location automobile.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Que dit la loi ?
        </h3>
        <p className="mb-6">
          La loi interdit le paiement en espèces pour toute transaction
          supérieure à 1 000 € TTC. Dans le cadre des locations de véhicules,
          les agences doivent privilégier les moyens de paiement traçables (CB,
          virement, en ligne).
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          La transparence avant tout chez Automatic Cars
        </h3>
        <p className="mb-6">
          Afin de respecter la loi et garantir la sécurité, Automatic Cars
          n’accepte plus les paiements en espèces pour le règlement de la
          location ou la caution.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 6,
    slug: "reference-location-bordeaux",
    title:
      "Automatic Cars : la référence de la location haut de gamme à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Agence",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Créée à Bordeaux, Automatic Cars s’est imposée en quelques années
          comme l’agence de location de véhicules haut de gamme la plus reconnue
          de la région.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Toutes les gammes, une seule agence
        </h3>
        <p className="mb-6">
          Compactes, SUV de prestige, Berlines de luxe et Cabriolets. Notre
          philosophie : proposer une offre complète adaptée à chaque besoin,
          toujours avec un service premium.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 7,
    slug: "comment-fonctionne-livraison",
    title: "Comment fonctionne la livraison de voiture chez Automatic Cars ?",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Notre objectif : vous faire gagner du temps et vous permettre de
          profiter de votre véhicule dès votre arrivée, sans passer par notre
          agence.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Livraison dans un rayon de 15 km
        </h3>
        <p className="mb-6">
          Nous proposons la livraison à domicile, à l'hôtel ou à l'aéroport de
          Bordeaux-Mérignac pour un forfait fixe de 35 € TTC. Au-delà, un devis
          personnalisé est établi.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 8,
    slug: "partenariat-mercedes-benz-allemagne",
    title:
      "Notre partenariat avec Mercedes-Benz Allemagne : un gage d’exclusivité",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Partenariat",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Nous travaillons en partenariat direct avec Mercedes-Benz Allemagne,
          un lien privilégié qui nous permet de garantir des modèles exclusifs
          et récents.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Des véhicules renouvelés tous les six mois
        </h3>
        <p className="mb-6">
          Ce partenariat nous permet d'offrir des configurations rares, full
          options, et une qualité garantie Mercedes-Benz, sans intermédiaire.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 9,
    slug: "ouverture-europe-barcelone",
    title: "Automatic Cars s’ouvre à l’Europe : direction Barcelone",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Développement",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Après le succès bordelais, Automatic Cars franchit une nouvelle étape
          : l’ouverture de sa nouvelle antenne à Barcelone, au cœur de la
          Catalogne.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Pourquoi Barcelone ?
        </h3>
        <p className="mb-6">
          Ville dynamique et tournée vers le luxe, Barcelone offre un fort
          potentiel touristique. Nos clients y retrouveront nos modèles phares
          avec la même exigence de qualité qu'en France.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 10,
    slug: "location-voiture-metropole-bordeaux",
    title: "Location de voiture à Bordeaux et dans toute la métropole",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Nous proposons un service de location de véhicules haut de gamme
          accessible dans toute la métropole de Bordeaux et sur l’ensemble de la
          Gironde.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Nos zones de livraison principales
        </h3>
        <p className="mb-6">
          Bordeaux centre, Mérignac, Pessac, Bassin d’Arcachon, Cap Ferret,
          Saint-Émilion... Nos équipes livrent votre voiture directement à votre
          adresse.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 11,
    slug: "location-voiture-mariage-evenements",
    title: "Location de voiture pour mariage & événements à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Événementiel",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Un mariage, un événement professionnel ou une soirée exceptionnelle
          méritent une arrivée à la hauteur du moment. L'élégance signée
          Automatic Cars.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Avec ou sans chauffeur
        </h3>
        <p className="mb-6">
          Profitez de nos cabriolets, SUV AMG ou berlines de prestige. Nous
          adaptons la mise à disposition et la décoration selon vos envies.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 12,
    slug: "location-compactes-bordeaux",
    title:
      "Location Mercedes Classe A, Golf 8 R-Line & BMW Série 1 Pack M à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Flotte",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Chez Automatic Cars, nous vous proposons le meilleur du segment
          compact premium. Des modèles neufs, full options et disponibles
          immédiatement.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Élégance et sportivité
        </h3>
        <p className="mb-6">
          Que vous soyez attiré par le style d’une Mercedes Classe A AMG Line,
          la polyvalence d’une Golf 8 R-Line ou la précision d’une BMW Série 1
          Pack M, nous avons le véhicule compact idéal pour vos escapades.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 13,
    slug: "location-mois-renouvelable-bordeaux",
    title: "Location de voiture au mois renouvelable à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Fini les contrats rigides : profitez d’une location de voiture au mois
          renouvelable, simple, claire et surtout 100 % flexible.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Une liberté totale
        </h3>
        <p className="mb-6">
          Vous louez pour un mois, et vous décidez chaque fin de mois si vous
          souhaitez prolonger ou changer de véhicule. Assurance tous risques et
          entretien inclus.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 14,
    slug: "livraison-domicile-bordeaux",
    title:
      "Livraison de voiture à domicile à Bordeaux – Le luxe qui vient à vous",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Vos déplacements doivent être simples. C’est pourquoi nous proposons
          un service exclusif de livraison de véhicules à domicile ou à l'hôtel.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Un gain de temps considérable
        </h3>
        <p className="mb-6">
          Notre équipe assure une remise personnalisée du véhicule, avec
          présentation complète et signature du contrat sur tablette en quelques
          secondes.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 15,
    slug: "location-voiture-luxe-bordeaux",
    title: "Location de voiture de luxe à Bordeaux – L’expérience premium",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Flotte",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Mercedes-Benz, BMW, Audi, Range Rover, Porsche... Louez un véhicule
          d’exception pour un moment unique avec Automatic Cars.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Une agence haut de gamme
        </h3>
        <p className="mb-6">
          Chaque véhicule est préparé, nettoyé et contrôlé avant sa mise à
          disposition afin de garantir une expérience irréprochable, avec ou
          sans chauffeur.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 16,
    slug: "pourquoi-choisir-automatic-cars",
    title:
      "Pourquoi choisir Automatic Cars pour votre location de voiture à Bordeaux ?",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Agence",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Toutes les gammes, une seule agence. Nous croyons qu’une agence doit
          s’adapter à tous les besoins, sans jamais faire de compromis sur la
          qualité.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Fiabilité, transparence et sécurité
        </h3>
        <p className="mb-6">
          Tous nos véhicules sont assurés tous risques et entretenus. Aucune
          mauvaise surprise : chaque contrat est clair.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 17,
    slug: "location-mercedes-cle-cabriolet",
    title: "Location Mercedes CLE Cabriolet à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Flotte",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Dernier né de la gamme Mercedes, ce cabriolet de luxe associe
          élégance, puissance et technologie de pointe.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Parfait pour le Bassin d'Arcachon
        </h3>
        <p className="mb-6">
          Idéal pour un week-end romantique sur la côte Atlantique ou un mariage
          élégant. Nos modèles sont les toutes dernières versions, entièrement
          optionnées.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 18,
    slug: "location-avec-sans-chauffeur",
    title: "Location de voitures avec ou sans chauffeur à Bordeaux",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Service",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Que vous souhaitiez conduire vous-même ou être conduit par un
          chauffeur professionnel, nous vous proposons une expérience sur
          mesure.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Service chauffeur privé
        </h3>
        <p className="mb-6">
          Nos chauffeurs professionnels, expérimentés et bilingues vous assurent
          un service irréprochable pour vos transferts VIP ou déplacements
          d'affaires.
        </p>
        <ArticleCTA />
      </>
    ),
  },
  {
    id: 19,
    slug: "location-mercedes-classe-s-580",
    title: "Location Mercedes Classe S 580 à Bordeaux",
    date: "25 Oct. 2025",
    dateTime: "2025-10-25",
    category: "Flotte",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          La berline de luxe par excellence. Synonyme d’élégance, de confort et
          d’innovation, la Classe S est le choix idéal pour un transfert VIP.
        </p>
        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          L’art du confort absolu
        </h3>
        <p className="mb-6">
          Sièges arrière massants, éclairage d’ambiance, double écran digital et
          matériaux nobles. Offrez-vous le luxe ultime avec la Classe S 580.
        </p>
        <ArticleCTA />
      </>
    ),
  },
];

const GenericContent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 text-center">
      <h3 className="text-2xl font-serif text-dark-900 mb-4">
        Article en cours de rédaction
      </h3>
      <p className="text-gray-600 mb-8">
        Cet article sera bientôt disponible avec tous ses détails.
      </p>
      <Button
        variant="secondary"
        className="border-gray-300 text-dark-900 hover:bg-gray-100"
        onClick={() => navigate("/news")}
      >
        Retour aux actualités
      </Button>
    </div>
  );
};

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = articlesDB.find((a) => a.slug === slug);

  return (
    <div className="font-sans selection:bg-gold-400 selection:text-black">
      <header className="bg-dark-900 pt-32 xl:pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm font-bold uppercase tracking-wider mb-8"
          >
            <ArrowLeft size={16} /> Retour aux actualités
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/10 text-gold-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest border border-white/5">
              {article?.category || "Actualité"}
            </span>
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
              <Calendar size={14} />
              <time dateTime={article?.dateTime || "2025-01-01"}>
                {article?.date || "Récemment"}
              </time>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
            {article?.title || "Cet article n'est pas encore disponible"}
          </h1>
        </div>
      </header>

      <main className="bg-cream py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-light">
            {article ? article.content : <GenericContent />}
          </article>
        </div>
      </main>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-dark-900 mb-12">
            Poursuivre la lecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Link
              to="/news/location-mercedes-cle-cabriolet"
              className="group p-6 border border-gray-100 rounded-xl hover:border-gold-400/50 hover:shadow-lg transition-all bg-cream"
            >
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
                Flotte
              </span>
              <h3 className="text-xl font-serif text-dark-900 group-hover:text-gold-600 transition-colors">
                Location Mercedes CLE Cabriolet à Bordeaux
              </h3>
            </Link>
            <Link
              to="/news/abonnement-automatic-cars"
              className="group p-6 border border-gray-100 rounded-xl hover:border-gold-400/50 hover:shadow-lg transition-all bg-cream"
            >
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
                Service
              </span>
              <h3 className="text-xl font-serif text-dark-900 group-hover:text-gold-600 transition-colors">
                L'abonnement Automatic Cars
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
