import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UserCircle } from 'lucide-react';
import type { Session } from "@supabase/supabase-js";
import logo from '../../assets/logoAutomaticCarsSVG.svg';

interface NavbarProps {
  session: Session | null;
  onLogout: () => void;
  onOpenAuth: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'ACCUEIL', href: '#' },
  { id: 'reservation', label: 'RÉSERVATION', href: '#' },
  { id: 'fleet', label: 'FLOTTE', href: '#' },
  { id: 'lld', label: 'LLD', href: '#' },
  { id: 'news', label: 'ACTUS', href: '#' },
  { id: 'about', label: 'NOTRE PARCOURS', href: '#' },
  { id: 'contact', label: 'CONTACT', href: '#' },
];

export default function Navbar({ session, onLogout, onOpenAuth }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled || currentPage !== 'home' 
          ? 'bg-dark-900/95 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center items-center max-w-[1800px]">
        <div className="flex items-center shrink-0 mx-10 cursor-pointer" onClick={() => handleNavClick('home')}>
          <img 
            src={logo} 
            alt="Automatic Cars" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300" 
          />
        </div>

        <div className="hidden xl:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
             item.href !== '#' ? 
             <a key={item.id} href={item.href} className="text-gray-300 hover:text-gold-400 text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
               {item.label}
             </a> :
             <button key={item.id} onClick={() => handleNavClick(item.id)} className={`text-sm font-bold uppercase tracking-widest transition-colors relative whitespace-nowrap after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full ${currentPage === item.id ? 'text-gold-400 after:w-full' : 'text-gray-300 hover:text-gold-400 after:w-0'}`}>
               {item.label}
             </button>
          ))}

          <div className="h-6 w-px bg-white/20 mx-4"></div>
          
          <a href="tel:+33768176882" className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors whitespace-nowrap">
            <Phone size={18} />
            <span className="font-bold text-sm hidden 2xl:inline">+33 7 68 17 68 82</span>
          </a>

          <button onClick={session ? onLogout : onOpenAuth} className="group flex items-center gap-2 text-white hover:text-gold-400 transition-colors text-sm font-bold uppercase tracking-widest whitespace-nowrap ml-4">
            <UserCircle size={20} className={session ? "text-gold-400" : "text-current"} />
            <span>{session ? "COMPTE" : "CONNEXION"}</span>
          </button>

          <button 
            className="bg-gold-400 text-dark-900 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest ml-4 hover:bg-gold-600 transition-colors shadow-lg whitespace-nowrap"
            onClick={() => handleNavClick('reservation')}
          >
            Réserver
          </button>
        </div>

        <div className="xl:hidden flex items-center gap-4 ml-auto">
          <button onClick={onOpenAuth} className="text-white hover:text-gold-400 transition-colors">
            <UserCircle size={24} className={session ? "text-gold-400" : ""} />
          </button>
          <button className="text-white hover:text-gold-400 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-dark-900 z-40 transition-transform duration-500 xl:hidden flex flex-col justify-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         
         <div className="flex flex-col p-8 space-y-6 text-center">
            <div className="mb-6 flex flex-col items-center">
               <button onClick={() => { if(session) onLogout(); else onOpenAuth(); setIsMobileMenuOpen(false); }} className="flex flex-col items-center gap-2 text-gold-400 hover:text-white transition-colors">
                  <UserCircle size={48} />
                  <span className="text-xl font-serif italic">{session ? "Se déconnecter" : "Se connecter"}</span>
               </button>
            </div>

            <div className="w-12 h-px bg-white/20 mx-auto"></div>

            {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-2xl text-white font-serif italic hover:text-gold-400">
                    {item.label}
                </button>
            ))}

            <div className="w-12 h-1 bg-gold-400 mx-auto my-6"></div>
            <a href="tel:+33768176882" className="text-xl text-gray-300">+33 7 68 17 68 82</a>

            <button className="w-full max-w-xs mx-auto mt-4 bg-gold-500 text-dark-900 px-6 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-gold-600 transition-colors" onClick={() => handleNavClick('reservation')}>
                RÉSERVER MAINTENANT
            </button>
         </div>
      </div>
    </nav>
  );
}