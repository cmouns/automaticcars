import React from "react";
import { supabase } from "../../lib/supabaseClient";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import type { AuthModalProps } from "../../types";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { AuthModalWrapper } from "./AuthModalWrapper";
import { DateInput } from "../ui/DateInput";
import { PhoneInputGroup } from "./PhoneInputGroup";
import { useRegister } from "../../hooks/useRegister";

export const Register: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onToggleView,
}) => {
  const {
    formData,
    loading,
    error,
    handleChange,
    setCountryCode,
    handleSubmit,
  } = useRegister(onClose);

  return (
    <AuthModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Créer un compte"
      subtitle="Devenez membre de prestige"
    >
      <div className="space-y-5">
        <Button
          variant="secondary"
          fullWidth
          icon={<FcGoogle size={20} />}
          onClick={() =>
            supabase.auth.signInWithOAuth({
              provider: "google",
              options: { redirectTo: window.location.origin },
            })
          }
        >
          S'inscrire avec Google
        </Button>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="mx-4 text-gray-500 text-xs uppercase">Ou</span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <Input
              name="firstName"
              label="Prénom"
              placeholder="Marc"
              value={formData.firstName}
              onChange={handleChange}
              required
              icon={<User size={18} />}
            />
            <Input
              name="lastName"
              label="Nom"
              placeholder="Dubois"
              value={formData.lastName}
              onChange={handleChange}
              required
              icon={<User size={18} />}
            />
          </div>

          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="marc@exemple.com"
            value={formData.email}
            onChange={handleChange}
            required
            icon={<Mail size={18} />}
          />

          <DateInput
            label="Date de Naissance"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />

          <PhoneInputGroup
            countryCode={formData.countryCode}
            phoneNumber={formData.phoneNumber}
            onCountryChange={setCountryCode}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            label="Mot de passe"
            placeholder="Min. 8 caractères"
            value={formData.password}
            onChange={handleChange}
            required
            icon={<Lock size={18} />}
            withShowPassword={true}
          />

          {error && (
            <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-center">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          <Button type="submit" fullWidth isLoading={loading} className="mt-4">
            S'INSCRIRE <ArrowRight size={18} className="ml-2" />
          </Button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Déjà un compte ?{" "}
          <Button
            variant="link"
            onClick={onToggleView}
            className="ml-1 p-0 h-auto"
          >
            Se connecter ici.
          </Button>
        </p>
      </div>
    </AuthModalWrapper>
  );
};
export default Register;
