import React, { useEffect, useState } from 'react';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';
import type { ModalProps } from '../types'; 
import { Input } from './ui/Input'; 

export const Login: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const ANIMATION_DURATION_MS = 300; 

  useEffect(() => {
    let timer: number | undefined; 

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      timer = setTimeout(() => {
          setIsVisible(true);
      }, 0); 

    } else {
      document.body.style.overflow = 'unset';
      timer = setTimeout(() => setIsVisible(false), ANIMATION_DURATION_MS); 
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        isOpen ? 'bg-black/80 backdrop-blur-sm opacity-100' : 'bg-black/0 backdrop-blur-none opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`
          relative w-full max-w-[450px] bg-[#121212] 
          border border-gold-500/30 rounded-2xl
          shadow-[0_0_50px_-12px_rgba(218,175,55,0.25)]
          transform transition-all duration-500 ease-out
          overflow-hidden
          ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-70"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-500/5 rounded-full blur-3xl"></div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gold-500 transition-colors p-2 rounded-full hover:bg-white/5"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-white mb-2 tracking-wide">
              Bienvenue
            </h2>
            <p className="text-gold-500 text-sm uppercase tracking-[0.2em]">
              Espace Membre
            </p>
          </div>

          <div className="space-y-6">
            <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Se connecter avec Google</span>
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-800"></div>
              <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-wider">Ou continuer avec</span>
              <div className="flex-grow border-t border-gray-800"></div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <Input 
                label="Email" 
                type="email" 
                placeholder="votre@email.com"
                icon={<Mail size={18} />}
              />
              <Input 
                label="Mot de passe" 
                type="password" 
                placeholder="••••••••"
                icon={<Lock size={18} />}
              />
              
              <div className="flex justify-end">
                <button type="button" className="text-xs text-gray-400 hover:text-gold-500 transition-colors">
                  Mot de passe oublié ?
                </button>
              </div>

              <button 
                className="
                  group w-full bg-gradient-to-r from-gold-600 to-gold-400 
                  hover:from-gold-500 hover:to-gold-400
                  text-black font-bold py-3.5 px-4 rounded-lg
                  flex items-center justify-center gap-2
                  transition-all duration-300 transform hover:-translate-y-0.5
                  shadow-[0_4px_20px_rgba(218,175,55,0.25)]
                "
              >
                <span className="tracking-wide">SE CONNECTER</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            Pas encore membre ?{' '}
            <button className="text-gold-500 hover:text-gold-400 font-medium ml-1 underline decoration-transparent hover:decoration-gold-500 transition-all">
              Créer un compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;