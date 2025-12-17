import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useLogin = (onClose: () => void) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // La fonction générique pour mettre à jour email ou password
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Utilisation de la propriété calculée
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword(formData);
      
      if (signInError) {
        throw new Error(
          signInError.message.includes("Invalid login") 
            ? "Identifiants incorrects." 
            : signInError.message
        );
      }
      
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, error, handleChange, handleLogin };
};