import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const BG_MODAL = '#121212';
const ANIMATION_DURATION_MS = 300;

export const AuthModalWrapper: React.FC<AuthModalWrapperProps> = ({ 
  isOpen, onClose, title, subtitle, children 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: number;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      timer = setTimeout(() => setIsVisible(true), 0);
    } else {
      document.body.style.overflow = 'unset';
      timer = setTimeout(() => setIsVisible(false), ANIMATION_DURATION_MS);
    }
    return () => {
      if (timer) clearTimeout(timer);
      document.body.style.overflow = 'unset';
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
        className={`relative w-full max-w-[450px] bg-[${BG_MODAL}] border border-gold-500/30 rounded-2xl shadow-[0_0_50px_-12px_rgba(218,175,55,0.25)] transform transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-70"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-500/5 rounded-full blur-3xl"></div>

        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gold-500 transition-colors p-2 rounded-full hover:bg-white/5 z-20"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-white mb-2 tracking-wide">{title}</h2>
            <p className="text-gold-500 text-sm uppercase tracking-[0.2em]">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};