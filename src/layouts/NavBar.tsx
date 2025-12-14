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
          ? 'bg-dark-900/95 backdrop-blur-md border-white/10 h-24' 
          : 'bg-transparent h-32' 
      } flex items-center`}
    >
      <div className="w-full max-w-[1900px] mx-auto px-10 md:px-16 flex items-center justify-between">
        
        <div className="flex items-center gap-20"> 
            
            <div className="flex items-center shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
                <img src={logo} alt="Automatic Cars" className="h-12 md:h-16 w-auto object-contain transition-all duration-300" />
            </div>

            <div className="hidden xl:flex items-center space-x-10">
                {NAV_ITEMS.map((item) => (
                    item.href !== '#' ? 
                    <a key={item.id} href={item.href} className="text-gray-200 hover:text-gold-400 text-[15px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                    {item.label}
                    </a> :
                    <button key={item.id} onClick={() => handleNavClick(item.id)} className={`text-[15px] font-bold uppercase tracking-widest transition-colors relative whitespace-nowrap ${currentPage === item.id ? 'text-gold-400' : 'text-gray-200 hover:text-gold-400'}`}>
                    {item.label}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${currentPage === item.id ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                    </button>
                ))}
            </div>
        </div>

        <div className="hidden xl:flex items-center gap-10">
          <div className="h-10 w-px bg-white/20"></div>
          
          <a href="tel:+33768176882" className="flex items-center gap-3 text-white hover:text-gold-400 transition-colors whitespace-nowrap">
            <Phone size={22} />
            <span className="font-bold text-base tracking-wide">+33 7 68 17 68 82</span>
          </a>

          <button onClick={session ? onLogout : onOpenAuth} className="group flex items-center gap-2 text-white hover:text-gold-400 transition-colors text-base font-bold uppercase tracking-widest whitespace-nowrap">
            <UserCircle size={24} className={session ? "text-gold-400" : "text-current"} />
            <span>{session ? "COMPTE" : "CONNEXION"}</span>
          </button>

          <button 
            className="bg-gold-400 text-dark-900 px-8 py-4 rounded-sm text-sm font-extrabold uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-lg whitespace-nowrap"
            onClick={() => handleNavClick('reservation')}
          >
            Réserver
          </button>
        </div>

        <div className="xl:hidden flex items-center gap-6">
          <button onClick={onOpenAuth} className="text-white hover:text-gold-400 transition-colors">
            <UserCircle size={30} className={session ? "text-gold-400" : ""} />
          </button>
          <button className="text-white hover:text-gold-400 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-dark-900 z-40 transition-transform duration-500 xl:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
         <div className="flex flex-col space-y-8 text-center">
            {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-2xl text-white font-serif italic hover:text-gold-400">
                    {item.label}
                </button>
            ))}
            <button className="bg-gold-400 text-dark-900 px-8 py-4 mt-8 font-bold uppercase tracking-widest" onClick={() => handleNavClick('reservation')}>
                RÉSERVER MAINTENANT
            </button>
         </div>
      </div>
    </nav>
  );
}