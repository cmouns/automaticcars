import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, Building, ShieldAlert } from "lucide-react";

const Conditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-cream min-h-screen selection:bg-gold-400 selection:text-black pb-24">
      {/* HEADER SECTION */}
      <header className="bg-dark-900 pt-32 xl:pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <span className="text-gold-500 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Informations Légales
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Conditions Générales &{" "}
            <span className="italic text-gold-400 font-light">Mentions</span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-4xl py-12 relative z-20">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gold-600 transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>
        </div>

        {/* MENTIONS LÉGALES (Extraites du bas de l'ancien site) */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-gray-200/40 border border-gray-100 mb-12">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="bg-gold-50 text-gold-600 p-3 rounded-full">
              <Building size={24} />
            </div>
            <h2 className="text-2xl font-serif text-dark-900">
              Mentions Légales
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 font-light">
            <div>
              <p className="mb-2">
                <strong className="text-dark-900 font-medium">
                  Éditeur du site & Loueur :
                </strong>{" "}
                AGENCE AUTOMATIC CARS
              </p>
              <p className="mb-2">
                <strong className="text-dark-900 font-medium">
                  Forme juridique :
                </strong>{" "}
                SAS
              </p>
              <p className="mb-2">
                <strong className="text-dark-900 font-medium">
                  Capital Social :
                </strong>{" "}
                50 000 €
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-dark-900 font-medium">SIRET :</strong>{" "}
                919 141 309 00014
              </p>
              <p className="mb-2">
                <strong className="text-dark-900 font-medium">
                  Siège social :
                </strong>{" "}
                Bordeaux, France
              </p>
              <p className="mb-2">
                <strong className="text-dark-900 font-medium">Contact :</strong>{" "}
                Jad@automaticcars.fr | +33 7 68 17 68 82
              </p>
            </div>
          </div>
        </div>

        {/* CONDITIONS GÉNÉRALES DE LOCATION (Le texte intégral à 100%) */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/40 border border-gray-100">
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
            <div className="bg-dark-900 text-white p-3 rounded-full">
              <Scale size={24} />
            </div>
            <h2 className="text-2xl font-serif text-dark-900">
              Conditions Générales de Location
            </h2>
          </div>

          <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light">
            {/* ARTICLE 1 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">1.</span> DÉFINITIONS
              </h3>
              <p>
                <strong>« Le LOCATAIRE »</strong> : personne physique ou morale
                au nom de laquelle est établi le contrat de location, dont
                l’identité figure dans l’encart « locataire » du contrat. La
                personne physique ou le représentant légal de la personne morale
                est le conducteur principal. Le locataire sera considéré comme «
                professionnel » s’il agit pour les besoins de son activité
                professionnelle. Dans ce cas, des dispositions spécifiques sont
                susceptibles de s’appliquer.
              </p>
              <p className="mt-2">
                <strong>« Le LOUEUR »</strong> : personne morale désignée en
                tête du contrat de location ; Certaines dispositions faisant
                expressément référence aux professionnels ne sont applicables
                qu’aux professionnels et non aux consommateurs et/ou non
                professionnels.
              </p>
            </section>

            {/* ARTICLE 2 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">2.</span> CONDITIONS
                PRÉALABLE A LA LOCATION
              </h3>
              <p className="mb-3">
                <strong>2.1</strong> Le LOCATAIRE devra fournir son identité,
                ses coordonnées postales (justificatif de domicile moins de 3
                mois) et téléphoniques et le cas échéant un email, et présenter
                au LOUEUR au moment de la prise du véhicule un permis de
                conduire en cours de validité (document original), correspondant
                au type de véhicule loué. Si le LOCATAIRE est un professionnel,
                il devra également fournir (Extrait Kbis ou tout autre document
                officiel justifiant de son existence légale et de la qualité à
                contracter de la personne physique par exemple un pouvoir du
                responsable légal de la personne morale, autorisant expressément
                la location par le LOCATAIRE). Dans le cas où le LOCATAIRE
                détient un permis de conduire délivré par un Etat hors de
                l’Union Européenne, il devra présenter un permis de conduire
                international en langue française en cours de validité (document
                original).
              </p>
              <p className="mb-3">
                <strong>2.2</strong> Le(s) conducteur(s) doit être âgé de plus
                de 18 ans, titulaire depuis au moins 1 an de permis de conduire,
                en cours de validité (document original). Le LOCATAIRE ne doit
                pas faire l’objet d’une interdiction de conduire tout véhicule
                terrestre à moteur. Le LOUEUR se réserve la possibilité de
                refuser de louer le Véhicule si le LOCATAIRE ne respecte pas les
                dispositions des présentes Conditions générales et notamment si
                : – l’un des documents à fournir est manquant ou n’est pas en
                cours de validité, -le LOCATAIRE ne peut satisfaire à la
                consignation du dépôt de garantie par pré-autorisation bancaire
                ; – le LOCATAIRE est en situation d’impayé vis-à-vis du LOUEUR.
                Dans ces cas, le LOUEUR aura la possibilité de conserver les
                sommes afférentes à la réservation déjà versées par le
                LOCATAIRE.
              </p>
              <p className="mb-3">
                <strong>2.3</strong> L’accès à certains véhicules est toutefois
                soumis à des conditions d’âge et d’ancienneté de permis plus
                strictes. Ainsi, la location de véhicules de catégorie haut de
                gamme n’est en aucun cas accessible aux conducteurs âgés de
                moins de 21 ans et titulaire d’un permis depuis moins de deux
                ans. En cas de dérogation accordée, des conditions
                supplémentaires peuvent être appliquées, notamment un montant de
                dépôt de garantie et une franchise pouvant être doublés par
                rapport aux conditions standards.
              </p>
              <p className="mb-3">
                Les conditions spécifiques applicables à chaque véhicule (âge
                minimal, ancienneté du permis, montant de dépôt de garantie,
                montant de franchise, etc.) sont indiquées lors de la
                réservation en ligne et rappelées dans le contrat de location.
              </p>
              <p>
                Il appartient au LOCATAIRE de vérifier, avant toute validation
                de réservation, qu’il satisfait aux conditions spécifiques à la
                catégorie du véhicule concerné. En cas de doute, il est de la
                responsabilité du LOCATAIRE de consulter les Conditions
                Générales de Location ou de contacter le LOUEUR par tout moyen.
              </p>
            </section>

            {/* ARTICLE 3 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">3.</span> USAGE DU VÉHICULE
                – INFRACTIONS – RESTRICTIONS À L’USAGE
              </h3>
              <p className="mb-3">
                <strong>3.1</strong> Le LOCATAIRE doit conduire le véhicule loué
                avec prudence et conformément au Code de la Route et à la
                réglementation en vigueur. Il s’oblige à une attention accrue
                lors des manoeuvres ou franchissement d’infrastructures
                routières, lors desquels il devra tenir compte des dimensions du
                véhicule. LE LOCATAIRE doit utiliser le véhicule loué
                conformément à sa destination (transport de personnes pour un
                véhicule de tourisme et transport de biens pour un véhicule
                utilitaire). Toute utilisation du véhicule qui porterait
                préjudice au LOUEUR ainsi que toute somme due autoriserait
                celui-ci à résilier de plein droit le contrat.
              </p>
              <p className="mb-3">
                <strong>3.2</strong> LE LOCATAIRE est responsable des
                infractions commises pendant la durée de la location et sera à
                ce titre redevable de l’ensemble des sommes afférentes. Il sera
                également seul redevable des frais de péage et de stationnement
                que l’usage du véhicule aurait occasionné. Le LOUEUR se réserve
                le droit de refacturer au LOCATAIRE toute somme qui lui serait
                réclamée relativement aux infractions commises par ce dernier,
                ou aux frais engendrés par son utilisation du véhicule. Le
                LOCATAIRE sera redevable, en sus, de frais de gestion d’un
                montant forfaitaire de 20 euros par procès-verbal.
              </p>
              <p className="mb-2">
                <strong>3.3 Restrictions à l’utilisation du véhicule :</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li>
                  Le véhicule doit être utilisé uniquement sur le territoire
                  français (France Métropolitaine ou DROM COM, selon le lieu de
                  la prise du véhicule), et, dans les pays pour lesquels la
                  Carte Internationale d’Assurance (carte verte) est valide.
                </li>
                <li>
                  Le véhicule ne doit pas être utilisé en surcharge ou pour le
                  transport d’un nombre de personnes supérieur à celui mentionné
                  sur la carte grise du véhicule, ou pour le transport payant de
                  passagers ou de marchandises.
                </li>
                <li>
                  Le véhicule ne doit pas être utilisé dans le cadre de
                  compétitions, pour propulser ou tirer un autre véhicule.
                </li>
                <li>
                  Le véhicule ne doit pas être utilisé à des fins illicites,
                  pour l’apprentissage de la conduite, ou sur des routes non
                  carrossables, ni pour transporter des marchandises
                  dangereuses.
                </li>
                <li>
                  Le véhicule ne doit pas être conduit sous influence éthylique
                  ou narcotique ou de toute substance susceptible d’affecter la
                  conduite.
                </li>
                <li>
                  Les marchandises et bagages transportés dans le véhicule, y
                  compris leur emballage ou leur arrimage, ne doivent ni
                  détériorer le véhicule, ni faire courir de risques anormaux à
                  ses occupants.
                </li>
                <li>
                  Le LOCATAIRE est soumis à toutes les obligations législatives,
                  réglementaires ou douanières relatives au transport de
                  marchandises qu’il effectue au moyen du véhicule.
                </li>
                <li>
                  <strong>
                    Il est interdit de fumer dans le véhicule loué.
                  </strong>
                </li>
                <li>
                  Quand le véhicule est stationné, même pour un arrêt de courte
                  durée, le LOCATAIRE s’engage à fermer le véhicule à clef et à
                  se servir des dispositifs d’alarme et/ou d’antivol dont le
                  véhicule est équipé. Le LOCATAIRE ne doit jamais laisser le
                  véhicule inoccupé avec les clés à l’intérieur du véhicule.
                </li>
              </ul>
            </section>

            {/* ARTICLE 4 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">4.</span> DURÉE DE LA
                LOCATION – DÉPASSEMENT
              </h3>
              <p>
                La durée de location ne peut excéder 30 jours. Elle se calcule
                par tranches de 24 heures ou de 4 heures 30 pour les véhicules
                utilitaires. La location se termine par la restitution du
                véhicule, de ses clés et de ses papiers dans les locaux du
                LOUEUR, pendant les horaires d’ouverture. Le LOCATAIRE s’engage
                à restituer le véhicule au LOUEUR à la date et heure convenues,
                sauf à solliciter l’accord du LOUEUR et à régulariser un nouveau
                contrat. A défaut, au-delà d’1 heure de retard : – le LOCATAIRE
                se verra facturer une journée de location supplémentaire par
                tranche de retard entamée ainsi qu’une pénalité forfaitaire de
                retard de 50 euros à partir de 24 heures de retard ; – le LOUEUR
                se réserve le droit de reprendre le véhicule en quelque lieu où
                il se trouve au frais du LOCATAIRE. Si le LOCATAIRE souhaite
                restituer le véhicule avant le terme fixé au contrat, il lui
                appartiendra d’obtenir l’accord préalable du LOUEUR.
              </p>
            </section>

            {/* ARTICLE 5 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">5.</span> PRIX DE LA
                LOCATION – CARBURANT
              </h3>
              <p className="mb-3">
                <strong>5.1</strong> Le coût de la location comprend un forfait
                de base, convenu entre le LOCATAIRE et le LOUEUR et réglé au
                moment de la réservation. Le contrat précise le prix d’un
                kilomètre et d’un jour supplémentaire, lesquels seront, le cas
                échéant, facturés en sus au LOCATAIRE après la restitution du
                véhicule.
              </p>
              <p className="mb-3">
                <strong>5.2</strong> Le carburant (ou l’énergie) est à la charge
                du LOCATAIRE : le véhicule est fourni avec le plein de carburant
                (ou d’énergie) et le LOCATAIRE doit le restituer dans le même
                état. À défaut, le nombre de litres de carburant (ou niveau de
                charge) manquant lui sera facturé conformément au barème des
                prix indiqué sur la grille tarifaire.
              </p>
              <p>
                <strong>5.3</strong> Si le LOCATAIRE est un professionnel
                conformément aux dispositions de l’article L.441-10 du Code de
                commerce, tout retard de paiement, même partiel, entrainera de
                plein droit, outre la facturation d’une indemnité forfaitaire ne
                pouvant dépasser 40 euros pour frais de recouvrement,
                l’application de pénalités de retard égales à trois (3) fois le
                taux d’intérêt légal en vigueur applicable par jour ouvré de
                retard à compter du lendemain du jour de l’échéance, jusqu’à
                complet paiement de la facture.
              </p>
            </section>

            {/* ARTICLE 6 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">6.</span> ANNULATION –
                INDISPONIBILITÉ DU VÉHICULE
              </h3>
              <p className="mb-3">
                <strong>6.1 Annulation</strong> L’annulation d’une réservation
                par le LOCATAIRE ne pourra être effectuée que par écrit, aux
                conditions suivantes : -effectuée dans un délai inférieur à 48
                heures avant la date prévue de mise à disposition du véhicule,
                le LOCATAIRE sera redevable envers le LOUEUR d’une somme
                équivalente à 30 % de la totalité du montant TTC estimé de la
                location plafonné à hauteur de 170€ TTC. Dans le cas où le coût
                estimé de la location aurait été réglé par le LOCATAIRE au
                moment de la réservation, les sommes dues par le LOCATAIRE au
                titre de l’annulation seront déduites du règlement effectué et
                le solde sera restitué au LOCATAIRE dans un délai maximum de 8
                jours à compter de l’annulation. Dans le cas où aucun règlement
                n’aurait été effectué par le LOCATAIRE, les frais d’annulation
                lui seront facturés et payables dans un délai de 8 jours à
                compter de l’envoi de la facture.
              </p>
              <p>
                <strong>6.2 Indisponibilité du véhicule</strong> En cas
                d’indisponibilité du véhicule à l’heure convenue par les parties
                (par exemple, en raison d’une défaillance mécanique résultant
                d’une précédente location dudit véhicule), le LOUEUR fera ses
                meilleurs efforts pour trouver un autre véhicule aux
                caractéristiques au moins égales . Si aucune solution de
                remplacement n’est trouvée par le LOUEUR, ce dernier s’engage à
                rembourser au LOCATAIRE dans un délai maximum de 8 jours toute
                somme déjà versée par le LOCATAIRE au titre de la réservation
                ainsi qu’une somme équivalente à 10 % de la totalité du montant
                TTC estimé de la location plafonné à hauteur de 170€ TTC au
                titre du dédommagement.
              </p>
            </section>

            {/* ARTICLE 7 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">7.</span> ASSURANCES
              </h3>
              <p className="mb-3">
                <strong>7.1</strong> Tous les véhicules sont couverts par une
                police « Multi conducteurs », conformément à la réglementation
                en vigueur. Les garanties couvertes par cette police ainsi que
                les exclusions sont mentionnées sur une notice remise au
                locataire. Il faut entendre par « assuré » toute personne dont
                la responsabilité est engagée du fait de la garde ou de la
                conduite du véhicule assuré avec l’autorisation du LOUEUR ou du
                LOCATAIRE. Tout LOCATAIRE s’engage donc à participer comme
                assuré au bénéfice d’une police d’assurance automobile. Le
                LOCATAIRE donne par le présent contrat son accord à ladite
                police et s’engage à en observer les clauses et conditions. De
                plus, le LOCATAIRE s’engage à prendre toutes les mesures utiles
                pour protéger les intérêts du LOUEUR et de la compagnie
                d’assurance du LOUEUR en cas d’accident au cours de la durée du
                présent contrat et notamment : – alerter les autorités de police
                dans les 24 heures, non compris les jours fériés, à compter de
                sa découverte tout vol, acte de vandalisme ou accident
                corporel,- déclarer au LOUEUR dans les 24 heures, non compris
                les jours fériés, à compter de sa découverte tout accident, vol,
                acte de vandalisme ou incendie,- mentionner dans la déclaration
                de sinistre particulièrement les circonstances, les noms et
                adresses de témoins éventuels, le nom et l’adresse de la
                compagnie d’assurance de la partie adverse ainsi que le numéro
                de police – joindre à cette déclaration tout rapport de police,
                de gendarmerie, récépissé de déclaration de plainte, etc., et ne
                discuter en aucun cas la responsabilité ni traiter ou transiger
                avec des tiers relativement à l’accident, ne pas abandonner le
                véhicule sans prendre le soin d’assurer sa sauvegarde et sa
                sécurité. La sur le contrat qu’il faut revenir à revoir dépôt de
                garantie remise lors de la restitution du véhicule d’un constat
                amiable ou d’une déclaration d’accident entraînera la
                facturation totale des réparations consécutives au sinistre.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-6 flex items-start gap-4">
                <ShieldAlert className="text-red-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-red-800 font-bold mb-2">
                    7.2 – Conditions particulières applicables aux véhicules
                    immatriculés à l’étranger
                  </h4>
                  <p className="text-red-700 text-sm mb-2">
                    Pour tous les véhicules mis à disposition par le LOUEUR et
                    immatriculés hors de France, des conditions spécifiques de
                    couverture et de responsabilité s’appliquent. En cas de
                    sinistre, y compris lorsque le LOCATAIRE n’est pas reconnu
                    responsable, une franchise incompressible équivalente au
                    montant du dépôt de garantie sera systématiquement facturée
                    au LOCATAIRE.
                  </p>
                  <p className="text-red-700 text-sm mb-2">
                    Cette franchise s’applique par sinistre, quel qu’en soit le
                    nombre ou la nature pendant la durée de la location. Aucune
                    option de rachat ou de réduction de franchise proposée par
                    le LOUEUR (notamment les offres Serinity ou Serenity Plus)
                    ne s’applique aux véhicules immatriculés à l’étranger.
                  </p>
                  <p className="text-red-700 text-sm mb-2">
                    Il est fortement recommandé au LOCATAIRE de disposer, avant
                    la prise en charge du véhicule, d’une assurance
                    complémentaire liée à une carte bancaire (ex. Visa Premier,
                    Mastercard Gold, American Express), afin de pouvoir obtenir
                    le remboursement de la franchise facturée par sinistre. Il
                    appartient au LOCATAIRE de vérifier les conditions de
                    couverture auprès de l’émetteur de sa carte, ainsi que les
                    modalités de déclaration et les justificatifs exigés.
                  </p>
                  <p className="text-red-700 text-sm mb-2">
                    Le LOCATAIRE reconnaît avoir été informé de ces conditions
                    au moment de la réservation. Elles sont également rappelées
                    dans le contrat de location.
                  </p>
                  <p className="text-red-700 text-sm">
                    Le LOCATAIRE s’engage à respecter l’ensemble des obligations
                    énoncées à l’article 7.1 en matière de déclaration de
                    sinistre. En cas d’absence de constat amiable ou de
                    déclaration d’accident, le LOUEUR se réserve le droit de
                    facturer l’intégralité des frais de remise en état.
                  </p>
                </div>
              </div>

              <p>
                <strong>
                  7.3 Recommandation concernant la couverture de la franchise –
                  véhicules immatriculés à l’étranger
                </strong>
                <br />
                Le LOUEUR recommande expressément au LOCATAIRE de vérifier,
                avant la prise en charge du véhicule, s’il bénéficie d’une
                assurance complémentaire adossée à sa carte bancaire (de type
                Gold, Visa Premier, Mastercard, American Express, etc.),
                susceptible de couvrir le montant de la franchise retenue en cas
                de sinistre ou de dommage. Cette recommandation s’applique
                particulièrement aux véhicules immatriculés à l’étranger, pour
                lesquels une franchise incompressible, équivalente au dépôt de
                garantie, est systématiquement appliquée même en cas de sinistre
                non responsable. En l’absence de couverture complémentaire
                personnelle, cette franchise restera intégralement à la charge
                du LOCATAIRE, sans possibilité de réduction ou de rachat par une
                offre du LOUEUR. Il appartient au LOCATAIRE de vérifier
                directement auprès de sa banque ou de l’émetteur de sa carte les
                conditions exactes de prise en charge de ce type de franchise,
                ainsi que les formalités à respecter (paiement avec la carte,
                déclaration à l’assurance bancaire, justificatifs à fournir,
                etc.).
              </p>
            </section>

            {/* ARTICLE 8 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">8.</span> DÉPÔT DE GARANTIE
              </h3>
              <p className="mb-3">
                Le dépôt de garantie est une somme consignée par l’intermédiaire
                d’une pré-autorisation bancaire ou, exceptionnellement, en
                espèces, par le LOCATAIRE au profit du LOUEUR, au plus tard lors
                de la mise à disposition du véhicule, afin de garantir la
                parfaite exécution des obligations mises à sa charge. Le
                LOCATAIRE doit s’assurer que le plafond de la carte bancaire qui
                servira au DÉPÔT DE GARANTIE permette la préautorisation le jour
                de la mise à disposition du véhicule.
              </p>
              <p className="mb-3">
                En l’absence de préautorisation bancaire ou de dépôt conforme,
                conformément à l’article 2.3, aucun véhicule ne sera mis à
                disposition et aucun remboursement des sommes déjà versées ne
                sera effectué.
              </p>
              <p className="mb-3">
                Le montant du dépôt de garantie est compris entre 400 € et 10
                000 € selon la catégorie du véhicule, tel qu’indiqué sur le
                contrat de location de véhicule ou la grille tarifaire. De même,
                la franchise applicable est comprise entre 1000 € et 10 000 €,
                selon la catégorie du véhicule et les éventuelles options
                souscrites.
              </p>
              <p className="mb-3">
                Le LOCATAIRE peut souscrire à une des options suivantes :
                Serinity ou Serenity Plus, permettant une réduction du dépôt de
                garantie et de la franchise moyennant un supplément journalier.
                Ces offres n’impliquent pas un rachat complet de franchise et
                laissent subsister un reste à charge.
                <br />
                Les offres Serinity et Serenity Plus ne sont pas disponibles
                pour les véhicules haut-de-gamme ou de luxe sauf dérogation
                expresse du LOUEUR.
                <br />
                L’offre Serenity Plus n’est pas accessible lors d’une première
                location ni pour les conducteurs âgés de moins de 25 ans.
                <br />
                Les conditions de ces options sont précisées dans les documents
                contractuels ou la grille tarifaire, sauf dérogation expresse du
                LOUEUR.
              </p>
              <p className="mb-3">
                Dans le cas où le LOCATAIRE serait redevable envers le LOUEUR de
                sommes au titre du contrat, le LOCATAIRE autorise expressément
                le LOUEUR à retenir les sommes dues sur le dépôt de garantie, en
                en justifiant le montant.
              </p>
              <p className="mb-3">
                En l’absence de toute somme due par le LOCATAIRE au LOUEUR, le
                dépôt de garantie lui sera restitué dans un délai compris entre
                7 et 21 jours calendaires, selon la catégorie du véhicule. En
                cas de dépôt en espèces, le remboursement interviendra dans un
                délai fixe de 21 jours calendaires, quelle que soit la
                catégorie.
              </p>
              <p>
                Si le montant des sommes dues au LOUEUR excède celui du dépôt de
                garantie, une demande de règlement complémentaire sera adressée
                au LOCATAIRE par tout moyen.
              </p>
            </section>

            {/* ARTICLE 9 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">9.</span> ÉTAT DU VÉHICULE
                – ÉTAT DES LIEUX
              </h3>
              <p className="mb-3">
                <strong>9.1</strong> Une fiche « état des lieux » est remise au
                LOCATAIRE au moment de la mise à disposition du véhicule. Cette
                fiche indique l’état descriptif du véhicule, tel que constaté
                par le LOUEUR. Il appartient au LOCATAIRE de vérifier l’état du
                véhicule avec la fiche « état des lieux » transmise par le
                LOUEUR et signaler ainsi, avant son départ, toute défectuosité
                apparente qui n’y figurerait pas afin comment que le LOUEUR
                puisse l’y ajouter. À défaut, le LOUEUR est réputé avoir délivré
                un véhicule conforme à l’état descriptif mentionné sur la fiche
                « état des lieux » et le LOCATAIRE avoir accepté la fiche « état
                des lieux » de départ. La fiche « état des lieux » est établie
                au retour du véhicule. La restitution du véhicule ne peut se
                faire qu’auprès d’un représentant du LOUEUR et en présence du
                LOCATAIRE. Si le LOCATAIRE ne peut pas et/ou refuse d’inspecter
                le véhicule avec le représentant désigné du LOUEUR, le LOUEUR
                est autorisé à inspecter le véhicule en son absence et à
                enregistrer son impossibilité ou refus d’état des lieux
                contradictoire. Le véhicule est remis au LOCATAIRE en parfait
                état de propreté, et doit être restitué dans le même état. A
                défaut, le coût du nettoyage pourra être facturé au LOCATAIRE
                selon un forfait de 70 euros TTC (excepté pour un véhicule haut
                de gamme , forfait de 379 euros TTC).
              </p>

              <p className="mb-2 font-bold text-dark-900">
                <strong>9.2 INTERDICTION DE FUMER DANS LE VÉHICULE</strong>
              </p>
              <p className="mb-3">
                Il est strictement interdit de fumer à l’intérieur du véhicule,
                quelle que soit la nature du produit consommé (tabac, cigarette
                électronique, chicha, cannabis, etc.).
              </p>
              <p className="mb-3">
                En cas de constat d’odeur de tabac, de cendre ou de tout autre
                indice prouvant qu’il a été fumé dans le véhicule, une amende
                forfaitaire de 250 € TTC sera automatiquement facturée au
                LOCATAIRE, sans préavis et sans possibilité de contestation.
              </p>
              <p className="mb-3">
                En outre, tout dommage causé à l’intérieur du véhicule en lien
                avec l’usage de tabac ou de produits similaires, tels que :
                trou, brûlure, sur les sièges tache ou odeur persistante, dégâts
                ou brûlure sur la moquette ou les garnitures, entraînera
                automatiquement la facturation du remplacement intégral de
                l’élément concerné, sans réparation partielle possible.
              </p>
              <p className="mb-3">
                Ainsi : tout trou ou brûlure sur un siège entraînera le
                remplacement complet du siège concerné ; Tout dommage sur la
                moquette entraînera le remplacement intégral de la moquette
                intérieure du véhicule.
              </p>
              <p className="mb-3">
                Aucun devis partiel, rabais ou réparation à moindre coût ne sera
                proposé : ces frais sont non négociables.
              </p>
              <p>
                Le LOCATAIRE est tenu de restituer le véhicule dans un état
                strictement conforme à celui constaté au départ. À défaut, les
                frais liés aux remplacements, nettoyage et immobilisation seront
                intégralement facturés.
              </p>
            </section>

            {/* ARTICLE 10 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">10.</span> ENTRETIEN –
                PROBLÈME MÉCANIQUE-CARROSSERIE
              </h3>
              <p>
                Au cours de la location et en fonction du nombre de kilomètres
                parcourus, le LOCATAIRE devra procéder aux vérifications d’usage
                des niveaux d’huile, d’eau et autre fluide, pression des pneus,
                etc., conformément à un usage normal du véhicule. Le LOCATAIRE
                restera vigilant à tout signal émis par les voyants d’alerte
                apparaissant sur le tableau de bord du véhicule et prendra
                toutes les mesures conservatoires nécessaires, telles que
                l’arrêt d’urgence. Le véhicule est fourni avec des pneumatiques
                dont l’état est conforme à la réglementation routière. En cas de
                détérioration de l’un d’entre eux pour une cause autre que
                l’usure normale, vice caché ou cas de force majeure, le
                LOCATAIRE s’engage à le remplacer immédiatement et à ses frais
                par un pneumatique identique de même type, même marque et
                d’usure égale. De même, les détériorations causées aux jantes du
                véhicule seront à la charge du LOCATAIRE. En cas de défaut de
                fonctionnement du compteur kilométrique, le LOCATAIRE en
                avertira immédiatement le LOUEUR. Dans le cas où le défaut de
                fonctionnement du compteur est lié à une fraude du LOCATAIRE,
                celui-ci sera facturé d’une indemnité kilométrique calculée sur
                la base de 500 kilomètres par jour. En cas de panne immobilisant
                le véhicule, le LOCATAIRE s’engage à faire appel au service
                assistance du LOUEUR dont le numéro figure sur le véhicule loué
                et dans les dispositions générales d’assistance ainsi qu’à
                prévenir le LOUEUR dans les meilleurs délais. Toute
                transformation, réparation carrosserie ou intervention mécanique
                sur le véhicule est interdite sans autorisation préalable du
                LOUEUR.
              </p>
            </section>

            {/* ARTICLE 11 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">11.</span> RESPONSABILITÉ
                ET GARANTIES
              </h3>
              <p className="mb-3">
                <strong>11.1 Responsabilité générale du LOCATAIRE</strong>
                <br />
                Le LOCATAIRE est responsable du véhicule dont il a la garde
                jusqu’à la fin du contrat de location ; à ce titre, il est
                responsable des dégradations autres que l’usure normale subies
                par le véhicule. Ainsi, tous frais de remise en état ou de
                remplacement, rendus nécessaires par le fait du LOCATAIRE,
                viendront en supplément du coût de la location. Ces frais seront
                facturés au LOCATAIRE sur la base d’un devis établi par un
                garagiste indépendant et en fonction de la couverture du
                sinistre par l’assurance du LOUEUR. Dans l’hypothèse où la
                restitution nécessiterait, du fait du LOCATAIRE, un
                rapatriement, les frais correspondants seront facturés au
                LOCATAIRE. En cas de confiscation ou de mise sous scellés du
                véhicule, le contrat de location pourra être résilié de plein
                droit dès que le LOUEUR en sera informé par les autorités
                judiciaires ou par le LOCATAIRE. En cas de vol, le contrat de
                location est arrêté dès transmission au LOUEUR du dépôt de
                plainte effectué par le LOCATAIRE auprès des autorités
                compétentes. En cas d’accident nécessitant l’immobilisation du
                véhicule, le contrat de location est arrêté dès transmission au
                LOUEUR du constat amiable dûment rempli par le LOCATAIRE et le
                tiers éventuel. En cas de dommage ou de vol, le LOCATAIRE devra
                transmettre au LOUEUR, le constat amiable d’accident ou le
                récépissé de déclaration de vol remis par les autorités, ainsi
                que les clés et papiers du véhicule, dans un délai maximum de 5
                jours à compter de la survenance de l’événement ou de la date à
                laquelle il a eu connaissance de l’événement sauf au LOCATAIRE à
                démontrer que la non-restitution des clés est due à une cause
                qui ne lui est pas imputable ou à un cas de force majeure. Pour
                l’application du présent article 11, les termes suivants sont
                ainsi définis : • « DOMMAGES » : tout dégât survenu au véhicule
                y compris le bris de glace, incluant les optiques, les
                rétroviseurs et les phares ; « FRANCHISE » : somme restant à la
                charge du LOCATAIRE comme étant non garantie par l’assureur
                (notamment : en cas de dommages sans tiers identifié, en
                l’absence de recours contre un tiers identifié ou de dommage
                imputable au LOCATAIRE de même qu’en cas de vol).
              </p>

              <p className="mb-3">
                <strong>
                  11-2 Responsabilité du LOCATAIRE couverte par l’assurance du
                  LOUEUR
                </strong>
                <br />
                Le LOCATAIRE est responsable des sinistres couverts par la
                compagnie d’assurance du LOUEUR mentionnés dans la notice , dans
                le contrat de location ou au moment de la réservation en ligne
                par le LOCATAIRE, ceci incluant notamment : – tous dommages
                causés aux parties supérieures de la carrosserie, à la
                carrosserie et aux parties mécaniques apparentes. Pour les
                parties invisibles du véhicule (carter d’huile, moteur,
                échappement…) qui seraient endommagées, la faute du LOCATAIRE
                pourra également être recherchée. Sous réserve des dispositions
                prévues à l’article 3-3, en cas de vol, le LOCATAIRE est couvert
                par la compagnie d’assurance du LOUEUR sous réserve du respect
                des conditions des présentes et à condition de la restitution
                des clés, des documents de bord du véhicule et du certificat de
                dépôt de plainte pour vol remis par les autorités compétentes.
                En cas de sinistre responsable, de sinistre sans tiers identifié
                ou sans possibilité de recours contre un tiers identifié, en cas
                de vol, sous réserve des dispositions de l’article 3-3, de même
                qu’en cas de dommages subis par le véhicule, le LOCATAIRE sera
                alors responsable à hauteur de la franchise mentionnée sur le
                contrat de location. En cas de sinistre avec tiers identifié, la
                franchise s’appliquera également par sinistre. Cette franchise
                ou ces franchises en cas de pluralité de sinistres au cours d’un
                même contrat, sera (ont) également applicable(s) pour les
                dommages occasionnés à des tiers même en l’absence de dégâts sur
                le véhicule. Pour chaque sinistre, le montant de la franchise
                sera facturé au LOCATAIRE dès la fin de la location sur la base
                de justificatifs produits par le LOUEUR et sera imputable sur le
                montant du dépôt de garantie, sous réserve de l’application de
                l’article 11.4 des présentes.
              </p>

              <p className="mb-3">
                <strong>
                  11.3 Responsabilité du LOCATAIRE non couverte par l’assurance
                  du LOUEUR
                </strong>
                <br />
                Le locataire sera tenu pour responsable des dégradations
                intérieures du véhicule causées volontairement ou
                involontairement, (bris d’accessoires, brûlures par cigarettes,
                détérioration par les biens transportés, leur emballage ou leur
                arrimage, etc.), sauf au LOCATAIRE à apporter la preuve de son
                absence de faute. Le LOCATAIRE sera tenu pour responsable des
                pertes, vols ou dommages causés à tous biens et valeurs
                transportés ou laissés par lui ou toute autre personne sur ou
                dans le véhicule pendant la durée de la location ou après la
                restitution du véhicule. Tous les frais de réparation du
                véhicule consécutifs à une faute du LOCATAIRE, viendront en
                complément du coût de la location et seront facturés au
                LOCATAIRE. La responsabilité du LOUEUR ne pourra être recherchée
                pour toute perte ou dommage occasionnés par le LOCATAIRE ou à un
                tiers quelconque par le chargement ou le déchargement du
                véhicule y compris les dommages causés par ou à une porte ou
                hayon élévateur du véhicule. Le non-respect d’une quelconque des
                obligations expressément stipulées aux articles 2, 3 et 4 des
                présentes Conditions Générales entraînera la déchéance des
                garanties contractuelles et privera le LOCATAIRE de toute
                couverture par l’assurance du LOUEUR. Le véhicule n’est assuré
                que pour la durée de la location indiquée sur le contrat de
                location. Passé ce délai, le LOUEUR décline toute responsabilité
                pour les accidents que le LOCATAIRE aurait pu causer et dont il
                devra faire son affaire personnelle. Le LOCATAIRE sera
                responsable de l’ensemble des sinistres non couverts par
                l’assurance du LOUEUR dans les conditions du droit commun de la
                responsabilité. Tous les frais de réparation imputables au
                LOCATAIRE seront à sa charge et viendront en complément du coût
                de la location. Les sommes dues en application du présent
                article lui seront facturées dès la fin de la location sur la
                base de justificatifs produits par le LOUEUR, et s’imputeront
                sur le montant du dépôt de garantie ou seront réclamées en
                complément du dépôt de garantie dans le cas où son montant
                serait insuffisant.
              </p>

              <p>
                <strong>11-4 Protections complémentaires</strong>
                <br />
                Le LOUEUR peut proposer au LOCATAIRE deux options (Serinity et
                Serinity plus) de limitation du montant de la franchise et du
                dépôt de garantie . Dans ce cas, la souscription par le
                LOCATAIRE, de cette option lors de la signature du contrat de
                location, permet de diminuer le montant qui lui sera réclamé en
                application de l’article 11-2 au titre du remboursement de la
                franchise. Cette option de limitation du montant de la franchise
                ne s’applique qu’une seule fois, pour un seul dommage pendant la
                durée du contrat. Les autres dommages se verront appliqués une
                franchise pleine par dommage si il n’y a pas de lien de
                causalité entre les dommages.
              </p>
            </section>

            {/* ARTICLE 12 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">12.</span> FORCE MAJEURE
              </h3>
              <p>
                L’exécution des obligations incombant à chacune des parties aux
                termes des présentes pourra être suspendue par la survenance
                d’un événement constitutif de force majeure. Est constitutif
                d’un cas de force majeure, tout événement échappant au contrôle
                de l’une des parties, qui ne pouvait être raisonnablement prévu
                lors de la conclusion du Contrat et dont les effets ne peuvent
                être évités par des mesures appropriées, empêchant l’exécution
                de l’obligation de l’une des parties au sens de l’article 1218
                du Code civil et de la jurisprudence. La partie qui invoque la
                force majeure devra informer sans délai l’autre partie par
                écrit, de la durée et des conséquences prévisibles de
                l’événement constitutif de force majeure. Les parties devront
                alors se rencontrer pour envisager les conséquences de la
                situation et s’efforcer de parvenir à une solution acceptable
                pour permettre l’accomplissement des présentes. L’exécution des
                obligations reprendra son cours normal dès que l’événement
                constitutif de force majeure aura cessé.
              </p>
            </section>

            {/* ARTICLE 13 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">13.</span> TRAITEMENT DES
                DONNÉES PERSONNELLES
              </h3>
              <p>
                Les informations recueillies font l’objet d’un traitement par la
                société Automatic Cars , afin de fournir les services de
                location demandés et, le cas échéant, gérer votre location.
                Conformément à la réglementation applicable en matière de
                protection des données à caractère personnel, vous disposez d’un
                droit d’accès, de rectification, de suppression et de
                portabilité de vos données, ainsi que d’un droit d’opposition et
                de limitation à l’ensemble des données vous concernant. Lorsque
                le traitement est fondé sur le consentement, vous pouvez retirer
                votre consentement à tout moment. Vous pouvez à tout moment
                exercer votre droit de recours auprès de l’Autorité compétente
                en matière de protection des données personnelles (CNIL).
              </p>
            </section>

            {/* ARTICLE 14 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">14.</span> INFORMATION
                RELATIVE A L’OPPOSITION AU DÉMARCHAGE TÉLÉPHONIQUE
              </h3>
              <p>
                Si le numéro de téléphone du client est recueilli a l’occasion
                de son achat, le vendeur l’informe qu‘il dispose, en application
                de l’article L. 223-1 du code de la consommation, en dehors de
                sa relation client avec son loueur et d’une manière générale, de
                la possibilité s’inscrire gratuitement sur une liste
                d’opposition au démarchage téléphonique s’il ne souhaite pas
                faire l’objet de prospection commerciale par voie téléphonique.
              </p>
            </section>

            {/* ARTICLE 15 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">15.</span> SERVICE CLIENT –
                RÉCLAMATION – MÉDIATION
              </h3>
              <p>
                Pour toute information, question ou réclamation, le LOUEUR est
                l’interlocuteur privilégié du LOCATAIRE pour lui apporter une
                réponse et/ou solution. Le LOCATAIRE peut s’adresser en premier
                recours au LOUEUR. Parallèlement à ce système de résolution
                amiable, la Commission européenne a mis en place une plateforme
                de résolution des litiges destinées à recueillir les éventuelles
                réclamations de consommateurs faisant suite à un achat en ligne
                afin de les transmettre ensuite aux médiateurs nationaux
                compétents. Cette plateforme est accessible à l’adresse suivante
                : http://ec.europa.eu/consumers/odr/
              </p>
            </section>

            {/* ARTICLE 16 */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm">
                <span className="text-gold-500 mr-2">16.</span> DROIT APPLICABLE
                ET JURIDICTION COMPÉTENTE
              </h3>
              <p>
                La langue régissant les présentes Conditions Générales de
                Location ainsi que toutes les communications en lien avec
                celles-ci est le français. Les présentes Conditions Générales de
                Location sont soumises au droit français.
              </p>
              <p className="mt-4">
                <strong>
                  LORSQUE LE LOCATAIRE EST UN PROFESSIONNEL, DE CONVENTION
                  EXPRESSE ET SOUS RÉSERVE DE LA LÉGISLATION IMPÉRATIVE EN
                  VIGUEUR, LE TRIBUNAL DE COMMERCE DE PARIS SERA SEUL COMPÉTENT
                  POUR TOUT LITIGE RELATIF AU PRÉSENT CONTRAT CONCLU AVEC DES
                  PROFESSIONNELS.
                </strong>
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Conditions;
