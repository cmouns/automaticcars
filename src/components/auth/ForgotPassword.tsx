import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { AuthModalWrapper } from './AuthModalWrapper';

interface ForgotPasswordProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToLogin: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ isOpen, onClose, onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null); setMessage(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/update-password',
      });
      if (error) throw new Error(error.message);
      setMessage("Si un compte existe, vous recevrez un lien de réinitialisation.");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthModalWrapper isOpen={isOpen} onClose={onClose} title="Mot de passe oublié" subtitle="Récupération du compte">
      <div className="space-y-4">
        <p className="text-gray-400 text-sm text-center mb-4">Entrez votre email pour recevoir le lien.</p>

        {!message ? (
          <form onSubmit={handleReset} className="space-y-4">
            <Input type="email" name="email" label="Email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required icon={<Mail size={18} />} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button type="submit" fullWidth isLoading={loading} className="mt-4">ENVOYER LE LIEN <ArrowRight size={18} className="ml-2" /></Button>
          </form>
        ) : (
          <div className="bg-green-900/20 border border-green-500/50 p-4 rounded-lg text-center"><p className="text-green-500 text-sm font-medium">{message}</p></div>
        )}

        <div className="text-center mt-6">
          <Button variant="link" onClick={onBackToLogin} className="text-sm text-gray-500 hover:text-white"><ArrowLeft size={16} className="mr-2" /> Retour à la connexion</Button>
        </div>
      </div>
    </AuthModalWrapper>
  );
};
export default ForgotPassword;