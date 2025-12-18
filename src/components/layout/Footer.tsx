import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import type { SocialLinkData } from "./Navbar/data";
import NavLink from "./Navbar/NavLink";
import { SOCIAL_LINKS_DATA } from "./Navbar/data";
import logo from "../../assets/logoAutomaticCarsSVG.svg";

interface FooterProps {
  onNavigate?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleFooterLinkClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const filteredSocialLinks = SOCIAL_LINKS_DATA.filter(
    (link: SocialLinkData) =>
      link.icon === "Instagram" ||
      link.icon === "Tiktok" ||
      link.icon === "Snapchat"
  );

  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img
              src={logo}
              alt="Automatic Cars logo"
              className="h-20  w-auto pb-5"
            />
            <p className="text-gray-400 font-light leading-relaxed max-w-md mb-8">
              L'excellence automobile à votre service. Nous redéfinissons les
              standards de la location de luxe pour vous offrir une expérience
              inoubliable.
            </p>

            <div className="flex space-x-4">
              {filteredSocialLinks.map((link) => (
                <NavLink
                  key={link.href}
                  type="social"
                  link={link}
                  isMobile={false}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300"
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li>
                <button
                  onClick={() => handleFooterLinkClick("fleet")}
                  className="hover:text-white transition-colors"
                >
                  Nos Véhicules
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterLinkClick("subscription")}
                  className="hover:text-white transition-colors"
                >
                  Services Exclusifs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterLinkClick("lld")}
                  className="hover:text-white transition-colors"
                >
                  Location Longue Durée
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterLinkClick("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contactez-nous
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-gold-400">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gold-400" />
                <span>Bordeaux</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-400" />
                <span>+33 7 68 17 68 82</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-400" />
                <span>Jad@automaticcars.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Automatic Cars. Tous droits
            réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={() => handleFooterLinkClick("conditions")}
              className="hover:text-white transition-colors"
            >
              Mentions Légales
            </button>
            <button
              onClick={() => handleFooterLinkClick("politique-confidentialite")}
              className="hover:text-white transition-colors"
            >
              Politique de Confidentialité
            </button>
            <button
              onClick={() => handleFooterLinkClick("cgv")}
              className="hover:text-white transition-colors"
            >
              CGV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
