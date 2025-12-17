import React from 'react';
import { supabase } from '../../lib/supabaseClient'; 
import { Mail, Lock, ArrowRight } from 'lucide-react'; 
import { FcGoogle } from "react-icons/fc"; 
import { Input } from '../ui/Input'; 
import { Button } from '../ui/Button'; 
import { AuthModalWrapper } from './AuthModalWrapper'; 
import { useLogin } from '../../hooks/useLogin'; // Import du nouveau hook

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleView: () => void;
  onForgotPassword: () => void; 
}

export const Login: React.FC<LoginProps> = ({ isOpen, onClose, onToggleView, onForgotPassword }) => { 
  const { formData, loading, error, handleChange, handleLogin } = useLogin(onClose);

  return (
    <AuthModalWrapper isOpen={isOpen} onClose={onClose} title="Se connecter" subtitle="Accès au compte">
       <div className="space-y-4">
          <Button 
            variant="secondary" 
            fullWidth 
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } })} 
            icon={<FcGoogle size={20} />}
          >
            Se connecter avec Google
          </Button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="mx-4 text-gray-500 text-xs uppercase">Ou</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-black" >
            <Input 
              type="email" 
              name="email" 
              label="Email" 
              placeholder="votre@email.com" 
              value={formData.email} 
              onChange={handleChange} // Plus propre ici
              required 
              icon={<Mail size={18} />} 
            />
            <Input 
              type="password" 
              name="password" 
              label="Mot de passe" 
              placeholder="Mot de passe" 
              value={formData.password} 
              onChange={handleChange} // Et ici
              required 
              icon={<Lock size={18} />} 
            />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="text-right text-xs pt-1">
              <Button variant="link" type="button" onClick={onForgotPassword} className="text-gray-500 hover:text-gold-500 !p-0">
                Mot de passe oublié ?
              </Button>
            </div>

            <Button type="submit" fullWidth isLoading={loading} className="mt-6">
              CONNEXION <ArrowRight size={18} className="ml-2" />
            </Button>
          </form>
          
          <p className="mt-6 text-sm text-center text-gray-500">
            Pas encore de compte ? 
            <Button variant="link" onClick={onToggleView} className="ml-1">S'inscrire ici.</Button>
          </p>
       </div>
    </AuthModalWrapper>
  );
};
export default Login;