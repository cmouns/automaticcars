/**
 * Contenu JSX détaillé de chaque article, indexé par slug.
 *
 * Séparer le contenu des métadonnées permet de :
 *   • garder `articlesData.ts` léger et importable partout ;
 *   • n'importer le JSX que dans la page Article (détail).
 *
 * Le composant  est dans `components/news/.tsx`.
 */
import React from "react";
import {
  AlertCircle,
  CheckCircle,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/Button";

/* ── Map slug → contenu JSX ────────────────────────────────────────────────── */

const articleContents: Record<string, React.ReactNode> = {
  /* ------------------------------------------------------------------ 1 -- */
  "abonnement-automatic-cars": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Après plusieurs années d’expérience dans la location de véhicules haut
        de gamme, nous avons identifié un point commun chez la majorité de nos
        clients :{" "}
        <strong className="text-dark-900">
          les cautions très élevées représentent le frein numéro 1 à la
          location.
        </strong>
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Certaines cautions peuvent atteindre plusieurs milliers d’euros, ce qui
        limite fortement l’accès à notre flotte haut de gamme, même pour des
        clients sérieux et solvables. C'est pourquoi nous avons créé le Club
        Privé Automatic Cars.
      </p>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6 flex items-center gap-3">
        <span className="w-8 h-px bg-gold-500" aria-hidden="true"></span>
        Pourquoi choisir notre abonnement ?
      </h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        L'abonnement Automatic Cars a été pensé pour vous libérer des
        contraintes financières liées aux locations de prestige et vous offrir
        un statut VIP tout au long de l'année.
      </p>

      <div className="bg-cream p-8 rounded-2xl border border-gold-200/50 mb-12 shadow-sm">
        <h4 className="text-lg font-bold text-dark-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
          <Star className="text-gold-500" size={18} aria-hidden="true" />
          Avantages exclusifs inclus
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Support VIP dédié 7j/7",
            "Caution réduite d’au moins 50 %",
            "Réductions automatiques sur la flotte",
            "Événements exclusifs dédiés aux abonnés",
            "Tests drives offerts sur les nouveautés",
            "Accès prioritaire aux disponibilités",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-dark-900 font-medium text-sm"
            >
              <CheckCircle
                className="text-gold-500 shrink-0 mt-0.5"
                size={16}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6 flex items-center gap-3">
        <span className="w-8 h-px bg-gold-500" aria-hidden="true"></span>
        Nos formules d'abonnement
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Offre Gold */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-gold-400 transition-colors shadow-sm">
          <h4 className="text-xl font-serif text-dark-900 mb-2">Offre Gold</h4>
          <div className="mb-6">
            <span className="text-3xl font-bold text-gold-600">49€</span>
            <span className="text-gray-500 text-sm"> / mois</span>
          </div>
          <p className="text-gray-600 text-sm mb-6 pb-6 border-b border-gray-100">
            Idéale pour profiter régulièrement de nos véhicules premium.
          </p>
          <ul className="space-y-3 mb-8 flex-grow">
            {[
              "Caution réduite d’au moins 50 %",
              "Réduction sur chaque location",
              "Accès aux véhicules premium (hors sportifs)",
              "Accès prioritaire selon disponibilité",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 text-sm"
              >
                <CheckCircle
                  className="text-gold-500 shrink-0 mt-0.5"
                  size={16}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Offre Platinium */}
        <div className="bg-dark-900 rounded-2xl p-8 flex flex-col relative shadow-[0_10px_40px_-15px_rgba(218,175,55,0.3)]">
          <div
            className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 blur-2xl rounded-full pointer-events-none"
            aria-hidden="true"
          ></div>
          <span className="absolute -top-3 left-8 bg-gold-400 text-dark-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Le Choix Ultime
          </span>
          <h4 className="text-xl font-serif text-white mb-2">
            Offre Platinium
          </h4>
          <div className="mb-6">
            <span className="text-3xl font-bold text-gold-400">89€</span>
            <span className="text-gray-400 text-sm"> / mois</span>
          </div>
          <p className="text-gray-300 text-sm mb-6 pb-6 border-b border-white/10">
            L’expérience la plus complète pour nos clients réguliers et
            passionnés.
          </p>
          <ul className="space-y-3 mb-8 flex-grow relative z-10">
            {[
              "Caution réduite au minimum",
              "Meilleures réductions garanties",
              "Accès à TOUTE la flotte (y compris sportifs)",
              "Priorité absolue sur les disponibilités",
              "Invitations VIP & Tests drives offerts",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-300 text-sm"
              >
                <CheckCircle
                  className="text-gold-400 shrink-0 mt-0.5"
                  size={16}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-serif text-dark-900 mb-6">
            Comment ça marche ?
          </h3>
          <ol className="space-y-6 relative border-l border-gray-200 ml-3">
            {[
              {
                title: "Souscription en ligne",
                desc: "Inscription rapide en deux minutes.",
              },
              {
                title: "Activation immédiate",
                desc: "Votre statut est activé dès validation du paiement.",
              },
              {
                title: "Avantages automatiques",
                desc: "Réduction et caution réduite appliquées sur votre profil.",
              },
              {
                title: "Réservation",
                desc: "Réservez votre véhicule en quelques clics.",
              },
            ].map((step, index) => (
              <li key={index} className="pl-8 relative">
                <span className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-gold-100 border-2 border-gold-400 flex items-center justify-center text-[10px] font-bold text-dark-900">
                  {index + 1}
                </span>
                <h4 className="font-bold text-dark-900 text-sm uppercase tracking-wider mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h3 className="text-xl font-serif text-dark-900 mb-6 flex items-center gap-2">
            <ShieldCheck
              className="text-gold-500"
              size={20}
              aria-hidden="true"
            />
            Conditions d’éligibilité
          </h3>
          <ul className="space-y-4">
            {[
              "Être résident en Gironde",
              "Avoir plus de 21 ans",
              "Disposer d’au moins deux ans de permis",
              "Avoir déjà effectué une location chez nous",
            ].map((condition, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-gray-700 text-sm font-medium border-b border-gray-200/50 pb-3 last:border-0 last:pb-0"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"
                  aria-hidden="true"
                ></div>
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 pt-12 border-t border-gray-200">
        <p className="text-gray-600 mb-6">
          Prêt à rejoindre le Club Privé Automatic Cars ?
        </p>
        <a href="/subscription" className="inline-block">
          <Button variant="primary" className="shadow-gold-glow px-10 py-4">
            Je m'inscris maintenant
          </Button>
        </a>
      </div>
    </>
  ),

  /* ------------------------------------------------------------------ 2 -- */
  "nouveautes-mercedes-gris-alpin": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Automatic Cars continue de renforcer son positionnement dans la{" "}
        <strong className="text-dark-900">
          location de véhicules haut de gamme à Bordeaux
        </strong>{" "}
        avec l’arrivée de plusieurs nouveaux modèles d’exception.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Nous sommes fiers de présenter nos dernières acquisitions : Mercedes
        Classe A, Mercedes GLC, Mercedes GLE et le spectaculaire Mercedes GLE 63
        S AMG, tous dans la nouvelle couleur exclusive{" "}
        <strong className="text-dark-900">Gris Alpin</strong> — l’une des
        teintes les plus recherchées du moment chez Mercedes-Benz.
      </p>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6 flex items-center gap-3">
        <span className="w-8 h-px bg-gold-500" aria-hidden="true"></span>
        Le Gris Alpin : la nouvelle signature Mercedes
      </h3>

      <div className="border-l-2 border-gold-500 pl-6 mb-12">
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong className="text-dark-900">Gris Alpin</strong> est la toute
          dernière couleur lancée par Mercedes en 2025. Une teinte premium,
          moderne et extrêmement élégante, qui sublime les lignes sportives et
          luxueuses des modèles de la marque.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Ce coloris, encore très rare sur le marché, permet à nos véhicules de
          se distinguer instantanément : look exclusif, finitions impeccables,
          présence haut de gamme. Chez Automatic Cars, nous avons choisi cette
          couleur pour offrir à nos clients une expérience visuelle et premium
          unique.
        </p>
      </div>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-8">
        La collection Gris Alpin en détail
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Classe A */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold-300 transition-colors shadow-sm">
          <h4 className="text-xl font-serif text-dark-900 mb-2">
            Mercedes Classe A
          </h4>
          <p className="text-gold-600 text-xs font-bold uppercase tracking-wider mb-4">
            Compacte & Élégante
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            La nouvelle Mercedes Classe A rejoint notre flotte avec un niveau
            d’équipement exceptionnel. Compacte, sportive et polyvalente, elle
            est idéale pour les déplacements urbains, professionnels ou pour un
            week-end. Son style moderne en fait l’un des meilleurs choix de la
            catégorie premium.
          </p>
        </div>

        {/* GLC */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold-300 transition-colors shadow-sm">
          <h4 className="text-xl font-serif text-dark-900 mb-2">
            Mercedes GLC
          </h4>
          <p className="text-gold-600 text-xs font-bold uppercase tracking-wider mb-4">
            Le SUV Polyvalent
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Notre Mercedes GLC arrive avec un maximum d’options et un confort
            remarquable. Ce SUV, très prisé pour sa polyvalence, combine
            élégance, stabilité et technologies avancées. Parfait pour les
            voyages, les familles ou les besoins professionnels haut de gamme.
          </p>
        </div>

        {/* GLE */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold-300 transition-colors shadow-sm">
          <h4 className="text-xl font-serif text-dark-900 mb-2">
            Mercedes GLE
          </h4>
          <p className="text-gold-600 text-xs font-bold uppercase tracking-wider mb-4">
            Le Luxe par excellence
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Le Mercedes GLE représente un parfait équilibre entre puissance,
            espace et modernité. Super équipé, il offre une conduite fluide, un
            habitacle luxueux et un confort incomparable. C’est l’un des
            véhicules préférés de nos clients en quête de standing.
          </p>
        </div>

        {/* GLE 63 S AMG */}
        <div className="bg-dark-900 rounded-2xl p-8 border border-gold-500/30 shadow-[0_10px_40px_-15px_rgba(218,175,55,0.25)] relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 blur-2xl rounded-full pointer-events-none"
            aria-hidden="true"
          ></div>
          <span className="absolute -top-3 right-6 bg-gold-400 text-dark-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Exclusivité
          </span>
          <h4 className="text-xl font-serif text-white mb-2">
            Mercedes GLE 63 S AMG
          </h4>
          <p className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            Le monstre de la flotte
          </p>
          <p className="text-gray-300 text-sm leading-relaxed relative z-10">
            Pièce maîtresse de nos nouveautés. Un SUV de prestige, ultra
            performant, doté d’un moteur impressionnant et d’une finition
            intérieure exclusive. C’est la combinaison parfaite entre sportivité
            extrême et luxe absolu.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Un renforcement majeur de notre flotte
      </h3>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Avec ces nouveaux modèles, Automatic Cars confirme son ambition :
        proposer les meilleurs véhicules premium de Bordeaux, avec les
        meilleures finitions et les coloris les plus tendance. Que ce soit pour
        un week-end, un déplacement professionnel ou un événement, nos nouvelles
        Mercedes en <strong className="text-dark-900">Gris Alpin</strong> sont
        prêtes à vous offrir une expérience inoubliable.
      </p>

      <div className="bg-cream p-8 rounded-2xl border border-gold-200/50 text-center shadow-sm">
        <h4 className="text-xl font-serif text-dark-900 mb-3">
          Réservez votre Mercedes haut de gamme
        </h4>
        <p className="text-gray-600 text-sm mb-8 max-w-lg mx-auto">
          Nos véhicules sont disponibles dans notre agence de plus de 350 m²
          près de la gare Saint-Jean, avec livraison possible partout en
          Gironde.
        </p>
        <a href="/reservation" className="inline-block">
          <Button variant="primary" className="shadow-gold-glow px-10 py-3.5">
            Voir les disponibilités
          </Button>
        </a>
      </div>
    </>
  ),

  /* ------------------------------------------------------------------ 3 -- */
  "location-fiat-500-bordeaux": (
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
        Compacte, économique et moderne, la Fiat 500 est parfaite pour circuler
        dans Bordeaux et ses alentours. Elle allie style, faible consommation et
        confort, tout en restant accessible à tous.
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
            <CheckCircle className="text-gold-500 shrink-0 mt-0.5" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Nos formules de location
      </h3>
      <p className="mb-6 text-gray-600">
        Des tarifs simples et transparents, adaptés à la durée de votre
        location.
      </p>

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
                Dans un rayon de 15 km de la Gare St-Jean. Possible à domicile,
                hôtel ou aéroport.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Pourquoi choisir Automatic Cars ?
      </h3>
      <p className="mb-6">
        Même sur les véhicules économiques, nous appliquons les mêmes standards
        de qualité que pour nos modèles haut de gamme. Pas de frais cachés, pas
        de surprise : juste une location fiable, simple et avantageuse.
      </p>
    </>
  ),

  /* ------------------------------------------------------------------ 4 -- */
  "comment-louer-loueur-confiance": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Entre les agences locales, les plateformes et les particuliers, le
        marché de la location de véhicules a explosé.{" "}
        <strong className="text-dark-900">
          Il devient crucial de savoir distinguer les véritables professionnels
          des loueurs informels.
        </strong>
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Pour éviter les mauvaises surprises et garantir votre sécurité, voici
        les 6 critères essentiels à vérifier avant toute réservation. Chez
        Automatic Cars, ces garanties sont le fondement de notre relation
        client.
      </p>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-8 flex items-center gap-3">
        <span className="w-8 h-px bg-gold-500" aria-hidden="true"></span>
        Les 6 piliers d'une location sereine
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Structure Juridique",
            desc: "Une société immatriculée au RCS avec un capital social déclaré est un gage de solidité financière et de sérieux.",
          },
          {
            title: "Assurance Professionnelle",
            desc: "Le véhicule doit être couvert par une assurance spécifique à la location courte durée. Une assurance classique ne vous protège pas.",
          },
          {
            title: "Réputation Vérifiée",
            desc: "Visez une note supérieure à 4,5/5 avec des dizaines d'avis Google authentiques et récents.",
          },
          {
            title: "Transparence Digitale",
            desc: "Un site internet sécurisé présentant des photos réelles de la flotte, les tarifs et les CGV accessibles en un clic.",
          },
          {
            title: "Activité Sociale",
            desc: "Une présence régulière sur Instagram ou TikTok prouve l'existence physique et l'activité réelle de l'agence.",
          },
          {
            title: "Showroom Identifiable",
            desc: "Un loueur de confiance dispose d'un local ou d'un showroom dédié pour l'entretien et la préparation des véhicules.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 p-6 rounded-2xl hover:border-gold-300 transition-colors shadow-sm"
          >
            <h4 className="font-bold text-dark-900 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="text-gold-500">{index + 1}.</span> {item.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Résumé des garanties
      </h3>

      <div className="overflow-x-auto mb-12 border border-gray-200 rounded-xl shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-dark-900 text-white">
              <th className="p-4 font-bold uppercase tracking-wider text-xs">
                Critère
              </th>
              <th className="p-4 font-bold uppercase tracking-wider text-xs">
                Pourquoi c'est essentiel
              </th>
              <th className="p-4 font-bold uppercase tracking-wider text-xs">
                Chez Automatic Cars
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr className="hover:bg-gray-50 transition-colors text-sm">
              <td className="p-4 font-bold text-dark-900 italic">
                Capital Social
              </td>
              <td className="p-4 text-gray-600">Solidité financière</td>
              <td className="p-4 text-gold-600 font-bold">
                SAS au capital de 50 000€
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors text-sm">
              <td className="p-4 font-bold text-dark-900 italic">Assurance</td>
              <td className="p-4 text-gray-600">Protection totale</td>
              <td className="p-4 text-gold-600 font-bold">
                Contrat spécialisé IARD
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors text-sm">
              <td className="p-4 font-bold text-dark-900 italic">
                Avis Clients
              </td>
              <td className="p-4 text-gray-600">Réputation réelle</td>
              <td className="p-4 text-gold-600 font-bold">
                Note 4.8/5 (Google)
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors text-sm">
              <td className="p-4 font-bold text-dark-900 italic">
                Existence Physique
              </td>
              <td className="p-4 text-gray-600">Sécurité et service</td>
              <td className="p-4 text-gold-600 font-bold">
                Showroom 350 m² Bordeaux
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-dark-900 rounded-3xl p-10 relative overflow-hidden shadow-2xl mb-12 text-center">
        <div
          className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 blur-3xl"
          aria-hidden="true"
        ></div>
        <h3 className="text-2xl font-serif text-white mb-4">
          La transparence avant tout
        </h3>
        <p className="text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Depuis plusieurs années, Automatic Cars s’impose comme la référence du
          haut de gamme à Bordeaux. Chaque client sait avec qui il traite, ce
          qu’il paie, et quels services sont inclus. Aucune zone d’ombre —
          simplement le professionnalisme.
        </p>
        <a href="/reservation" className="inline-block">
          <Button variant="primary" className="shadow-gold-glow px-10 py-4">
            Réserver en toute sécurité
          </Button>
        </a>
      </div>
    </>
  ),

  /* ------------------------------------------------------------------ 5 -- */
  "fin-paiement-especes-loi": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Depuis 2025, la réglementation française encadre strictement le{" "}
        <strong className="text-dark-900">paiement en espèces</strong> dans le
        secteur de la location automobile pour garantir une transparence et une
        sécurité totale.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Les agences de location, dont Automatic Cars, ne peuvent plus accepter
        de règlements en liquide pour le paiement des locations ou des cautions
        au-delà de certains seuils légaux. Cette mesure vise à protéger tant le
        loueur que le client.
      </p>

      {/* Focus Loi - Bloc Autorité */}
      <div className="bg-dark-900 rounded-3xl p-8 md:p-10 border border-gold-500/30 shadow-2xl relative overflow-hidden mb-12">
        <div
          className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 blur-3xl"
          aria-hidden="true"
        ></div>
        <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
          <AlertCircle className="text-gold-400" size={24} aria-hidden="true" />
          Que dit la loi exactement ?
        </h3>
        <p className="text-gray-300 leading-relaxed mb-6 italic border-l-2 border-gold-500 pl-6 text-lg">
          "La loi française (article L112-6 du Code monétaire et financier)
          interdit désormais le paiement en espèces pour toute transaction entre
          un professionnel et un particulier supérieure à 1 000 € TTC."
        </p>
        <p className="text-gray-400 text-sm font-light leading-relaxed">
          Même en dessous de ce montant, les autorités obligent les agences à
          privilégier les moyens de paiement traçables (Carte bancaire,
          virement, Stripe) afin d'identifier clairement l'origine des fonds et
          d'assurer un suivi transparent.
        </p>
      </div>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-8 flex items-center gap-3">
        <span className="w-8 h-px bg-gold-500" aria-hidden="true"></span>
        Pourquoi cette interdiction ?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Sécurité Accrue",
            desc: "Élimination des risques liés à la manipulation et au transport de fortes sommes d'argent liquide.",
            icon: ShieldCheck,
          },
          {
            title: "Traçabilité Totale",
            desc: "Une garantie légale pour le client : chaque transaction est enregistrée, horodatée et protégée.",
            icon: Search,
          },
          {
            title: "Lutte contre la Fraude",
            desc: "Protection des professionnels contre les tentatives d'escroquerie et le blanchiment.",
            icon: Lock,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 p-6 rounded-2xl hover:border-gold-300 transition-colors shadow-sm"
          >
            <h4 className="font-bold text-dark-900 text-sm uppercase tracking-wider mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-xs leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Moyens de paiement acceptés
      </h3>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Afin de respecter la loi et de garantir une expérience fluide, Automatic
        Cars n'accepte plus les espèces pour le règlement des locations ou le
        dépôt de garantie. Nous utilisons exclusivement des solutions digitales
        certifiées :
      </p>

      <div className="space-y-4 mb-12">
        {[
          {
            method: "Cartes Bancaires",
            details: "Visa, Mastercard, American Express",
          },
          {
            method: "Virement Bancaire",
            details: "Virement SEPA classique ou instantané",
          },
          {
            method: "Paiement en ligne sécurisé",
            details: "Transactions cryptées via notre partenaire Stripe",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-cream rounded-xl border border-gold-200/30 gap-2"
          >
            <span className="font-bold text-dark-900 text-sm flex items-center gap-2">
              <CheckCircle className="text-gold-600" size={16} />
              {item.method}
            </span>
            <span className="text-gold-600 font-bold text-[10px] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-gold-200/50">
              {item.details}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200 shadow-sm mb-12">
        <h4 className="text-xl font-serif text-dark-900 mb-4">
          Louez l'esprit tranquille
        </h4>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed font-light">
          Chez Automatic Cars, la transparence et le professionnalisme sont au
          cœur de notre service. Bénéficiez d'une facturation automatique et
          d'un suivi digitalisé pour chaque location.
        </p>
        <a href="/reservation" className="inline-block">
          <Button variant="primary" className="shadow-gold-glow px-10 py-4">
            Réserver mon véhicule en toute sécurité
          </Button>
        </a>
      </div>
    </>
  ),

  /* ------------------------------------------------------------------ 6 -- */
  "reference-location-bordeaux": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Créée à Bordeaux, Automatic Cars s'est imposée en quelques années comme
        l'agence de location de véhicules haut de gamme la plus reconnue de la
        région.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Toutes les gammes, une seule agence
      </h3>
      <p className="mb-6">
        Compactes, SUV de prestige, Berlines de luxe et Cabriolets. Notre
        philosophie&nbsp;: proposer une offre complète adaptée à chaque besoin,
        toujours avec un service premium.
      </p>
    </>
  ),

  /* ------------------------------------------------------------------ 7 -- */
  "comment-fonctionne-livraison": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Notre objectif&nbsp;: vous faire gagner du temps et vous permettre de
        profiter de votre véhicule dès votre arrivée, sans passer par notre
        agence.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Livraison dans un rayon de 15&nbsp;km
      </h3>
      <p className="mb-6">
        Nous proposons la livraison à domicile, à l'hôtel ou à l'aéroport de
        Bordeaux-Mérignac pour un forfait fixe de 35&nbsp;€ TTC. Au-delà, un
        devis personnalisé est établi.
      </p>
    </>
  ),

  /* ------------------------------------------------------------------ 8 -- */
  "partenariat-mercedes-benz-allemagne": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Nous travaillons en partenariat direct avec Mercedes-Benz Allemagne, un
        lien privilégié qui nous permet de garantir des modèles exclusifs et
        récents.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Des véhicules renouvelés tous les six mois
      </h3>
      <p className="mb-6">
        Ce partenariat nous permet d'offrir des configurations rares, full
        options, et une qualité garantie Mercedes-Benz, sans intermédiaire.
      </p>
    </>
  ),

  /* ------------------------------------------------------------------ 9 -- */
  "ouverture-europe-barcelone": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Après le succès bordelais, Automatic Cars franchit une nouvelle
        étape&nbsp;: l'ouverture de sa nouvelle antenne à Barcelone, au cœur de
        la Catalogne.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Pourquoi Barcelone&nbsp;?
      </h3>
      <p className="mb-6">
        Ville dynamique et tournée vers le luxe, Barcelone offre un fort
        potentiel touristique. Nos clients y retrouveront nos modèles phares
        avec la même exigence de qualité qu'en France.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 10 -- */
  "location-voiture-metropole-bordeaux": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Nous proposons un service de location de véhicules haut de gamme
        accessible dans toute la métropole de Bordeaux et sur l'ensemble de la
        Gironde.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Nos zones de livraison principales
      </h3>
      <p className="mb-6">
        Bordeaux centre, Mérignac, Pessac, Bassin d'Arcachon, Cap Ferret,
        Saint-Émilion… Nos équipes livrent votre voiture directement à votre
        adresse.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 11 -- */
  "location-voiture-mariage-evenements": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Un mariage, un événement professionnel ou une soirée exceptionnelle
        méritent une arrivée à la hauteur du moment. L'élégance signée Automatic
        Cars.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Avec ou sans chauffeur
      </h3>
      <p className="mb-6">
        Profitez de nos cabriolets, SUV AMG ou berlines de prestige. Nous
        adaptons la mise à disposition et la décoration selon vos envies.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 12 -- */
  "location-compactes-bordeaux": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Chez Automatic Cars, nous vous proposons le meilleur du segment compact
        premium. Des modèles neufs, full options et disponibles immédiatement.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Élégance et sportivité
      </h3>
      <p className="mb-6">
        Que vous soyez attiré par le style d'une Mercedes Classe A AMG Line, la
        polyvalence d'une Golf 8 R-Line ou la précision d'une BMW Série 1 Pack
        M, nous avons le véhicule compact idéal pour vos escapades.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 13 -- */
  "location-mois-renouvelable-bordeaux": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Fini les contrats rigides&nbsp;: profitez d'une location de voiture au
        mois renouvelable, simple, claire et surtout 100&nbsp;% flexible.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Une liberté totale
      </h3>
      <p className="mb-6">
        Vous louez pour un mois, et vous décidez chaque fin de mois si vous
        souhaitez prolonger ou changer de véhicule. Assurance tous risques et
        entretien inclus.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 14 -- */
  "livraison-domicile-bordeaux": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Vos déplacements doivent être simples. C'est pourquoi nous proposons un
        service exclusif de livraison de véhicules à domicile ou à l'hôtel.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Un gain de temps considérable
      </h3>
      <p className="mb-6">
        Notre équipe assure une remise personnalisée du véhicule, avec
        présentation complète et signature du contrat sur tablette en quelques
        secondes.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 15 -- */
  "location-voiture-luxe-bordeaux": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Mercedes-Benz, BMW, Audi, Range Rover, Porsche… Louez un véhicule
        d'exception pour un moment unique avec Automatic Cars.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Une agence haut de gamme
      </h3>
      <p className="mb-6">
        Chaque véhicule est préparé, nettoyé et contrôlé avant sa mise à
        disposition afin de garantir une expérience irréprochable, avec ou sans
        chauffeur.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 16 -- */
  "pourquoi-choisir-automatic-cars": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Toutes les gammes, une seule agence. Nous croyons qu'une agence doit
        s'adapter à tous les besoins, sans jamais faire de compromis sur la
        qualité.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Fiabilité, transparence et sécurité
      </h3>
      <p className="mb-6">
        Tous nos véhicules sont assurés tous risques et entretenus. Aucune
        mauvaise surprise&nbsp;: chaque contrat est clair.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 17 -- */
  "location-mercedes-cle-cabriolet": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Dernier né de la gamme Mercedes, ce cabriolet de luxe associe élégance,
        puissance et technologie de pointe.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Parfait pour le Bassin d'Arcachon
      </h3>
      <p className="mb-6">
        Idéal pour un week-end romantique sur la côte Atlantique ou un mariage
        élégant. Nos modèles sont les toutes dernières versions, entièrement
        optionnées.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 18 -- */
  "location-avec-sans-chauffeur": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        Que vous souhaitiez conduire vous-même ou être conduit par un chauffeur
        professionnel, nous vous proposons une expérience sur mesure.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        Service chauffeur privé
      </h3>
      <p className="mb-6">
        Nos chauffeurs professionnels, expérimentés et bilingues vous assurent
        un service irréprochable pour vos transferts VIP ou déplacements
        d'affaires.
      </p>
    </>
  ),

  /* ----------------------------------------------------------------- 19 -- */
  "location-mercedes-classe-s-580": (
    <>
      <p className="lead text-xl text-gray-600 font-medium mb-8">
        La berline de luxe par excellence. Synonyme d'élégance, de confort et
        d'innovation, la Classe S est le choix idéal pour un transfert VIP.
      </p>
      <h3 className="text-2xl font-serif text-dark-900 mt-12 mb-6">
        L'art du confort absolu
      </h3>
      <p className="mb-6">
        Sièges arrière massants, éclairage d'ambiance, double écran digital et
        matériaux nobles. Offrez-vous le luxe ultime avec la Classe S 580.
      </p>
    </>
  ),
};

export default articleContents;
