import React from "react";
import { UserCircle, LogOut, User } from "lucide-react";
import type { Session } from "@supabase/supabase-js";

import { NAV_ITEMS, SOCIAL_LINKS_DATA } from "./data";
import NavLink from "./NavLink"; 

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  handleNavClick: (id: string) => void;
  session: Session | null;
  onLogout: () => void;
  onOpenAuth: () => void;
  activePage: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  handleNavClick,
  session,
  onLogout,
  onOpenAuth,
  activePage,
}) => {
  return (
    <div
      className={`fixed inset-0 w-full h-[100dvh] bg-dark-900 z-40 transition-transform duration-500 xl:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-start items-center h-full px-6 pt-32 pb-10 space-y-6 overflow-y-auto">
        
        {session ? (
            <div className="flex flex-col items-center gap-4 w-full animate-in slide-in-from-top-4 duration-700">
                <button
                    onClick={() => handleNavClick("profile")}
                    className="flex flex-col items-center gap-2 text-gold-400 group"
                >
                    <div className="p-3 rounded-full border border-gold-400 bg-gold-400/10 group-hover:bg-gold-400 group-hover:text-black transition-all duration-300">
                        <User size={32} />
                    </div>
                    <span className="font-serif font-bold text-xl uppercase tracking-widest">Mon Compte</span>
                </button>

                <button
                    onClick={() => {
                        onLogout();
                        handleNavClick("");
                    }}
                    className="flex items-center gap-2 text-gray-500 text-sm uppercase tracking-wider hover:text-red-400 transition-colors mt-1"
                >
                    <LogOut size={14} />
                    Se déconnecter
                </button>
            </div>
        ) : (
            <button
                onClick={() => {
                    onOpenAuth();
                    handleNavClick("");
                }}
                className="flex flex-col items-center gap-2 text-white hover:text-gold-400 transition-colors"
            >
                <UserCircle size={44} strokeWidth={1.5} />
                <span className="font-bold text-lg uppercase tracking-wider">Se connecter</span>
            </button>
        )}

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2"></div>

        <div className="w-full space-y-2">
            {NAV_ITEMS.map((item) => (
            <NavLink
                key={item.id}
                type="nav"
                item={item}
                activePage={activePage}
                handleNavClick={handleNavClick}
                isMobile 
            />
            ))}
        </div>

        <button
          className="w-full bg-gold-400 text-dark-900 py-4 font-bold uppercase tracking-widest text-lg mt-4 hover:bg-white transition-colors"
          onClick={() => handleNavClick("reservation")}
        >
          Réserver
        </button>

        <div className="flex gap-8 pt-6 mt-auto">
          {SOCIAL_LINKS_DATA.map((link) => (
            <NavLink 
                key={link.href} 
                type="social" 
                link={link} 
                isMobile 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;