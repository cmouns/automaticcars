import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/Button";

// 1. Notre "Base de données" locale pour les articles
const articlesDB = [
  {
    id: 10,
    slug: "location-fiat-500-bordeaux",
    title:
      "Location de voiture pas chère à Bordeaux – Fiat 500 à partir de 18 € par jour",
    date: "26 Oct. 2025",
    dateTime: "2025-10-26",
    category: "Économique",
    content: (
      <>
        <p className="lead text-xl text-gray-600 font-medium mb-8">
          Des tarifs économiques sans compromis sur la qualité. Chez Automatic
          Cars, nous proposons des solutions pour tous les budgets : du véhicule
          de luxe à la citadine pratique et économique.
        </p>
        <p className="mb-6">
          Notre offre <strong>Fiat 500</strong> est idéale pour ceux qui
          recherchent une location pas chère à Bordeaux, tout en profitant d’un
          service professionnel et fiable.
        </p>

        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Fiat 500 – L’élégance urbaine à petit prix
        </h3>
        <p className="mb-6">
          Compacte, économique et moderne, la Fiat 500 est parfaite pour
          circuler dans Bordeaux et ses alentours. Elle allie style, faible
          consommation et confort, tout en restant accessible à tous.
        </p>

        <h4 className="text-lg font-bold text-dark-900 mb-4 uppercase tracking-wider text-sm">
          Équipements principaux :
        </h4>
        <ul className="space-y-3 mb-12">
          {[
            "Boîte manuelle ou automatique selon version",
            "Climatisation & Bluetooth",
            "Écran tactile & Apple CarPlay / Android Auto",
            "Faible consommation (environ 4L/100 km)",
            "Idéale pour vos trajets quotidiens, séjours professionnels ou week-ends en ville.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle
                className="text-gold-500 shrink-0 mt-0.5"
                size={18}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Nos formules de location
        </h3>
        <p className="mb-6 text-gray-600 italic">
          Des tarifs simples et transparents, adaptés à la durée de votre
          location.
        </p>

        {/* Un beau tableau responsive et moderne */}
        <div className="overflow-x-auto mb-12 border border-gray-200 rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-dark-900 text-white">
                <th className="p-4 font-bold uppercase tracking-wider text-sm">
                  Durée / Service
                </th>
                <th className="p-4 font-bold uppercase tracking-wider text-sm">
                  Tarif
                </th>
                <th className="p-4 font-bold uppercase tracking-wider text-sm">
                  Détails
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-dark-900">
                  À partir de 30 jours
                </td>
                <td className="p-4 text-gold-600 font-bold">18 € / jour</td>
                <td className="p-4 text-gray-600 text-sm">
                  Soit env. 540 € / mois, assurance incluse
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-dark-900">
                  Location à la semaine
                </td>
                <td className="p-4 text-gold-600 font-bold">200 € / semaine</td>
                <td className="p-4 text-gray-600 text-sm">
                  7 jours, contrat digital, assistance 7j/7
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-dark-900">
                  Livraison (en option)
                </td>
                <td className="p-4 text-gold-600 font-bold">35 € TTC</td>
                <td className="p-4 text-gray-600 text-sm">
                  Dans un rayon de 15 km de la Gare St-Jean. Possible à
                  domicile, hôtel ou aéroport.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
          Pourquoi choisir Automatic Cars ?
        </h3>
        <p className="mb-6">
          Même sur les véhicules économiques, nous appliquons les mêmes
          standards de qualité que pour nos modèles haut de gamme. Pas de frais
          cachés, pas de surprise : juste une location fiable, simple et
          avantageuse.
        </p>

        {/* Call to Action */}
        <div className="bg-dark-900 text-white p-8 rounded-xl mt-12 mb-8 text-center shadow-xl">
          <h4 className="text-2xl font-serif text-gold-400 mb-4">
            Réservez dès aujourd’hui
          </h4>
          <p className="text-gray-300 mb-6 font-light">
            Automatic Cars – Bordeaux (proche Gare Saint-Jean)
            <br />
            Toutes les gammes, une seule agence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary">Réserver ce véhicule</Button>
            <Button
              variant="secondary"
              onClick={() => (window.location.href = "tel:+33768176882")}
            >
              Appeler le 07 68 17 68 82
            </Button>
          </div>
        </div>
      </>
    ),
  },
];

// 2. LA CORRECTION EST ICI : Le composant est sorti à la racine du fichier
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

// 3. Le composant principal
const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Cherche l'article dans notre base de données
  const article = articlesDB.find((a) => a.slug === slug);

  return (
    <div className="font-sans selection:bg-gold-400 selection:text-black">
      {/* HEADER DE L'ARTICLE (Sombre) */}
      <header className="bg-dark-900 pt-32 xl:pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm font-bold uppercase tracking-wider mb-8"
          >
            <ArrowLeft size={16} /> Retour au journal
          </Link>

          {/* Encart Catégorie & Date (Géré dynamiquement) */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/10 text-gold-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest border border-white/5">
              {article?.category || "Actualité"}
            </span>
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
              <Calendar size={14} />
              <time dateTime={article?.dateTime || "2025-01-01"}>
                {article?.date || "Récent"}
              </time>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
            {article?.title || "Cet article n'est pas encore disponible"}
          </h1>
        </div>
      </header>

      {/* CORPS DE L'ARTICLE (Crème) */}
      <main className="bg-cream py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-light">
            {/* C'est ici qu'on appelle notre composant proprement */}
            {article ? article.content : <GenericContent />}
          </article>
        </div>
      </main>

      {/* SECTION ARTICLES SIMILAIRES */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-dark-900 mb-12">
            Lire aussi
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
              to="/news/comment-fonctionne-livraison"
              className="group p-6 border border-gray-100 rounded-xl hover:border-gold-400/50 hover:shadow-lg transition-all bg-cream"
            >
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
                Service
              </span>
              <h3 className="text-xl font-serif text-dark-900 group-hover:text-gold-600 transition-colors">
                Comment fonctionne la livraison de voiture ?
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
