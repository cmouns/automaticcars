import React from 'react';
import { UserCircle } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';

import { NAV_ITEMS, SOCIAL_LINKS_DATA } from './Navbar.data';
import NavLink from './NavLink';

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
      className={`fixed top-0 left-0 w-screen h-[100dvh] bg-dark-900 z-40 transition-transform duration-500 xl:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col justify-center items-center h-full px-8 space-y-6 overflow-y-auto">

        {/* Auth */}
        <button
          onClick={() => {
            if (session) {
              onLogout();
            } else {
              onOpenAuth();
            }
            handleNavClick('');
          }}
          className="flex flex-col items-center gap-2 text-gold-400"
        >
          <UserCircle size={44} />
          <span className="italic text-lg">
            {session ? 'Se déconnecter' : 'Se connecter'}
          </span>
        </button>

        <div className="w-12 h-px bg-white/20"></div>

        {/* Navigation */}
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

        <div className="w-12 h-1 bg-gold-400 my-6"></div>

        <button
          className="bg-gold-500 text-dark-900 px-6 py-4 font-bold uppercase"
          onClick={() => handleNavClick('reservation')}
        >
          Réserver maintenant
        </button>

        {/* Social */}
        <div className="flex gap-8 pt-8 border-t border-white/10">
          {SOCIAL_LINKS_DATA.map((link) => (
            <NavLink key={link.href} type="social" link={link} isMobile />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
