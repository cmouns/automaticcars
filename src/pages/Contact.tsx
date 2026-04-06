import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/Button";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [rgpdChecked, setRgpdChecked] = useState(false);
  const isFormDisabled = !rgpdChecked;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY as string);
    formData.append("subject", "Nouveau message depuis la page Contact !");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json() as { success: boolean };
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch {
      setErrorMsg("Problème de connexion. Vérifiez votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans selection:bg-gold-400 selection:text-black bg-cream min-h-screen pb-24">
      <header className="bg-dark-900 pt-32 xl:pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <span className="text-gold-500 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Service Client
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Contactez{" "}
            <span className="italic text-gold-400 font-light">Nous</span>
          </h1>
          <p className="text-gray-300 font-light leading-relaxed text-lg max-w-2xl mx-auto">
            Nous sommes à votre écoute ! Que vous souhaitiez en savoir plus sur
            nos services, obtenir un devis ou simplement échanger, n'hésitez pas
            à nous contacter.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-6xl -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* COORDONNÉES */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mb-4 text-gold-600">
                <Phone size={28} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-dark-900 mb-2 uppercase tracking-wider">Téléphone</h3>
              <p className="text-gray-500 font-light text-sm mb-4">Disponible 7j/7 pour vos demandes urgentes.</p>
              <a href="tel:+33768176882" className="text-xl font-serif text-gold-600 hover:text-dark-900 transition-colors">
                +33 7 68 17 68 82
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mb-4 text-gold-600">
                <Mail size={28} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-dark-900 mb-2 uppercase tracking-wider">Email</h3>
              <p className="text-gray-500 font-light text-sm mb-4">Pour toute demande de devis ou information.</p>
              <a href="mailto:jad@automaticcars.fr" className="text-lg font-serif text-gold-600 hover:text-dark-900 transition-colors">
                jad@automaticcars.fr
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mb-4 text-gold-600">
                <MapPin size={28} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-dark-900 mb-2 uppercase tracking-wider">Localisation</h3>
              <p className="text-gray-500 font-light text-sm mb-4">Siège social de l'agence.</p>
              <span className="text-lg font-serif text-gold-600">Bordeaux, France</span>
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/40 border border-gray-100 h-full">
              <h2 className="text-3xl font-serif text-dark-900 mb-2">Envoyez-nous un message</h2>
              <p className="text-gray-500 font-light mb-8 flex items-center gap-2">
                <Clock size={16} aria-hidden="true" /> Nous répondons généralement sous 24 heures.
              </p>

              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500" size={48} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-serif text-dark-900 mb-4">Message envoyé !</h3>
                  <p className="text-gray-600 font-light max-w-md mx-auto">
                    Nous avons bien reçu votre demande. Notre équipe vous recontactera dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot anti-spam */}
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

                  {errorMsg && (
                    <div role="alert" className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      <AlertCircle size={18} aria-hidden="true" />
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-dark-900 uppercase tracking-widest mb-2">
                        Nom complet *
                      </label>
                      <input type="text" name="name" id="name" required autoComplete="name"
                        className="w-full bg-gray-50 border border-gray-200 text-dark-900 px-4 py-3.5 rounded-lg focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-1 focus:ring-gold-400/50 transition-all"
                        placeholder="Jean Dupont" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-dark-900 uppercase tracking-widest mb-2">
                        Téléphone *
                      </label>
                      <input type="tel" name="phone" id="phone" required autoComplete="tel"
                        className="w-full bg-gray-50 border border-gray-200 text-dark-900 px-4 py-3.5 rounded-lg focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-1 focus:ring-gold-400/50 transition-all"
                        placeholder="+33 6 12 34 56 78" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-dark-900 uppercase tracking-widest mb-2">
                        Email *
                      </label>
                      <input type="email" name="email" id="email" required autoComplete="email"
                        className="w-full bg-gray-50 border border-gray-200 text-dark-900 px-4 py-3.5 rounded-lg focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-1 focus:ring-gold-400/50 transition-all"
                        placeholder="jean@exemple.com" />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-xs font-bold text-dark-900 uppercase tracking-widest mb-2">
                        Âge *
                      </label>
                      <input type="number" name="age" id="age" required min="18" max="100"
                        className="w-full bg-gray-50 border border-gray-200 text-dark-900 px-4 py-3.5 rounded-lg focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-1 focus:ring-gold-400/50 transition-all"
                        placeholder="Ex: 25" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="permit" className="block text-xs font-bold text-dark-900 uppercase tracking-widest mb-2">
                        Ancienneté du permis *
                      </label>
                      <div className="relative">
                        <select name="permit" id="permit" required defaultValue=""
                          className="w-full bg-gray-50 border border-gray-200 text-dark-900 px-4 py-3.5 rounded-lg appearance-none focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-1 focus:ring-gold-400/50 transition-all cursor-pointer">
                          <option value="" disabled>Sélectionner...</option>
                          <option value="1 an">1 an</option>
                          <option value="2 ans">2 ans</option>
                          <option value="+ de 5 ans">+ de 5 ans</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" aria-hidden="true">▼</div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="dates" className="block text-xs font-bold text-dark-900 uppercase tracking-widest mb-2">
                        Dates de location souhaitées
                      </label>
                      <input type="text" name="dates" id="dates"
                        className="w-full bg-gray-50 border border-gray-200 text-dark-900 px-4 py-3.5 rounded-lg focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-1 focus:ring-gold-400/50 transition-all"
                        placeholder="Ex: Du 12 au 15 Juin" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-dark-900 uppercase tracking-widest mb-2">
                      Votre message
                    </label>
                    <textarea name="message" id="message" rows={5}
                      className="w-full bg-gray-50 border border-gray-200 text-dark-900 px-4 py-3.5 rounded-lg focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-1 focus:ring-gold-400/50 transition-all resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"></textarea>
                  </div>

                  {/* Consentement RGPD */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="rgpd"
                      name="rgpd"
                      required
                      checked={rgpdChecked}
                      onChange={(e) => setRgpdChecked(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-gold-500 cursor-pointer shrink-0"
                    />
                    <label htmlFor="rgpd" className="text-xs text-gray-500 font-light leading-relaxed cursor-pointer">
                      J'accepte que mes données personnelles soient utilisées pour traiter ma demande de contact, conformément à notre{" "}
                      <a href="/conditions" className="text-gold-600 underline hover:text-dark-900">politique de confidentialité</a>. *
                    </label>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      isLoading={isSubmitting}
                      disabled={isFormDisabled}
                      icon={!isSubmitting ? <Send size={18} /> : undefined}
                      className="py-4 shadow-lg"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
