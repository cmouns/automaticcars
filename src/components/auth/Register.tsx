import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient'; 
import { Mail, Lock, User, ArrowRight, ChevronDown } from 'lucide-react'; 
import { FcGoogle } from "react-icons/fc"; 
import ReactCountryFlag from "react-country-flag"; 
import type { AuthModalProps } from '../../types'; 
import { Input } from '../ui/Input'; 
import { Button } from '../ui/Button'; 
import { AuthModalWrapper } from './AuthModalWrapper'; 

const COUNTRY_CODES = [
    { code: "+33", iso: "FR" }, { code: "+44", iso: "GB" }, { code: "+1", iso: "US" },  
    { code: "+34", iso: "ES" }, { code: "+49", iso: "DE" }, { code: "+39", iso: "IT" }, 
    { code: "+41", iso: "CH" }, { code: "+32", iso: "BE" }, { code: "+352", iso: "LU" },
];

export const Register: React.FC<AuthModalProps> = ({ isOpen, onClose, onToggleView }) => { 
  const [formData, setFormData] = useState({
    email: '', password: '', firstName: '', lastName: '', phoneNumber: '', countryCode: '+33'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCodeDropdown, setShowCodeDropdown] = useState(false); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name === 'phoneNumber' ? e.target.value.replace(/[^0-9]/g, '') : e.target.value;
    setFormData(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    const { email, password, firstName, lastName, phoneNumber, countryCode } = formData;

    try {
      if (!phoneNumber) throw new Error("Le numéro de téléphone est requis.");
      let finalPhone = phoneNumber;
      
      if (countryCode === '+33') {
        if (finalPhone.startsWith('0')) finalPhone = finalPhone.substring(1);
        if (finalPhone.length !== 9) throw new Error("Le numéro français doit contenir 9 chiffres.");
      }

      // RPC Call
      const { data: emailExists } = await supabase.rpc('check_email_exists', { email_to_check: email });
      if (emailExists) throw new Error("Cette adresse mail est déjà utilisée.");

      // SignUp
      const { error: signUpError } = await supabase.auth.signUp({
        email, password,
        options: { data: { first_name: firstName, last_name: lastName, phone_number: countryCode + finalPhone } },
      });

      if (signUpError) {
        if (signUpError.message.includes("Password")) throw new Error("Mot de passe trop faible.");
        throw new Error(signUpError.message);
      }
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Une erreur inconnue est survenue.");
    } finally {
      setLoading(false);
    }
  };

  const selectedCountry = COUNTRY_CODES.find(c => c.code === formData.countryCode) || COUNTRY_CODES[0];

  return (
    <AuthModalWrapper isOpen={isOpen} onClose={onClose} title="Créer un compte" subtitle="Rejoignez le club">
      <div className="space-y-4">
        <Button variant="secondary" fullWidth onClick={() => supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } })} icon={<FcGoogle size={20} />}>
          S'inscrire avec Google
        </Button>

        <div className="relative flex items-center py-2"><div className="flex-grow border-t border-gray-800"></div><span className="mx-4 text-gray-500 text-xs uppercase">Ou</span><div className="flex-grow border-t border-gray-800"></div></div>

        <form onSubmit={handleRegistration} className="space-y-4">
          <div className="flex gap-2">
            <Input name="firstName" label="Prénom" placeholder="Prénom" value={formData.firstName} onChange={handleChange} required icon={<User size={18} />} className="w-1/2" />
            <Input name="lastName" label="Nom" placeholder="Nom" value={formData.lastName} onChange={handleChange} required icon={<User size={18} />} className="w-1/2" />
          </div>
          <Input type="email" name="email" label="Email" placeholder="votre@email.com" value={formData.email} onChange={handleChange} required icon={<Mail size={18} />} />
          
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs uppercase tracking-widest text-gold-500 font-serif ml-1">Numéro de téléphone</label>
            <div className="relative flex group">
              <div className="relative">
                <button type="button" onClick={() => setShowCodeDropdown(!showCodeDropdown)} className="flex items-center gap-1.5 h-full bg-dark-800/50 border border-gray-700 rounded-l-lg px-3 text-sm text-white hover:border-gold-500">
                  <ReactCountryFlag countryCode={selectedCountry.iso} svg style={{ width: '20px' }} /> {selectedCountry.code} <ChevronDown size={14} />
                </button>
                {showCodeDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-40 bg-[#1A1A1A] border border-gray-700 rounded-lg shadow-xl z-20 max-h-40 overflow-y-auto">
                    {COUNTRY_CODES.map(c => (
                      <button key={c.code} type="button" onClick={() => { setFormData({...formData, countryCode: c.code}); setShowCodeDropdown(false); }} className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gold-500/20 flex gap-2">
                        <ReactCountryFlag countryCode={c.iso} svg style={{ width: '20px' }} /> {c.code}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input type="tel" name="phoneNumber" placeholder="Numéro" value={formData.phoneNumber} onChange={handleChange} required className="w-full bg-dark-800/50 border border-gray-700 text-white py-3 px-4 rounded-r-lg focus:border-gold-500 outline-none" inputMode="numeric"/>
            </div>
          </div>

          <Input type="password" name="password" label="Mot de passe" placeholder="Min. 8 carac." value={formData.password} onChange={handleChange} required icon={<Lock size={18} />} />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <Button type="submit" fullWidth isLoading={loading} className="mt-6">S'INSCRIRE <ArrowRight size={18} className="ml-2" /></Button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">Déjà un compte ? <Button variant="link" onClick={onToggleView} className="ml-1">Se connecter ici.</Button></p>
      </div>
    </AuthModalWrapper>
  );
};
export default Register;