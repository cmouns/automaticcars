import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";
import { Input } from "../ui/Input";
import { DateInput } from "../ui/DateInput";
import { PhoneInputGroup } from "./PhoneInputGroup";
import { Button } from "../ui/Button";
import { AuthModalWrapper } from "./AuthModalWrapper";

const registerSchema = z
  .object({
    firstName: z.string().min(2, "Prénom requis"),
    lastName: z.string().min(2, "Nom requis"),
    email: z.string().email("Email invalide"),
    countryCode: z.string(),
    phoneNumber: z.string().min(9, "Numéro trop court"),

    birthDate: z.string().refine((val) => {
      const date = new Date(val);
      const age = new Date().getFullYear() - date.getFullYear();
      return age >= 18 && age <= 65;
    }, "Vous devez avoir entre 18 et 65 ans"),

    password: z.string().min(6, "6 caractères minimum"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

interface RegisterProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleView: () => void;
}

export const Register: React.FC<RegisterProps> = ({
  isOpen,
  onClose,
  onToggleView,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      birthDate: "",
      countryCode: "+33",
      phoneNumber: "",
    },
  });

  const today = new Date();
  const minBirthDate = new Date(
    today.getFullYear() - 65,
    today.getMonth(),
    today.getDate()
  );
  const maxBirthDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const fullPhone = `${data.countryCode}${data.phoneNumber}`;

      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.firstName,
            last_name: data.lastName,
            full_name: `${data.firstName} ${data.lastName}`,
            phone: fullPhone,
            birth_date: data.birthDate,
          },
        },
      });
      if (error) throw error;
      alert("Inscription réussie !");
      onClose();
    } catch (err: unknown) {
      let errorMessage = "Erreur lors de l'inscription";
      if (err instanceof Error) errorMessage = err.message;
      setError("root", { message: errorMessage });
    }
  };

  return (
    <AuthModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Créer un compte"
      subtitle="de Prestige"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
        {/* PRÉNOM & NOM */}
        <div className="flex gap-4">
          <Input
            label="Prénom"
            placeholder="Marc"
            icon={<User size={18} />}
            {...register("firstName")}
            error={errors.firstName?.message}
          />
          <Input
            label="Nom"
            placeholder="Dubois"
            icon={<User size={18} />}
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </div>

        {/* EMAIL */}
        <Input
          label="Email"
          type="email"
          placeholder="exemple@email.com"
          icon={<Mail size={18} />}
          {...register("email")}
          error={errors.email?.message}
        />

        {/* TÉLÉPHONE */}
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, value } }) => (
            <Controller
              control={control}
              name="countryCode"
              render={({
                field: { onChange: onCountryChange, value: countryValue },
              }) => (
                <PhoneInputGroup
                  countryCode={countryValue}
                  phoneNumber={value}
                  onCountryChange={onCountryChange}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
          )}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs ml-1">
            {errors.phoneNumber.message}
          </p>
        )}

        {/* DATE DE NAISSANCE */}
        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <DateInput
              label="Date de naissance"
              name={field.name}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              minDate={minBirthDate}
              maxDate={maxBirthDate}
              required
              className={errors.birthDate ? "border-red-500" : ""}
            />
          )}
        />
        {errors.birthDate && (
          <p className="text-red-500 text-xs ml-1">
            {errors.birthDate.message}
          </p>
        )}

        {/* MOT DE PASSE */}
        <div className="space-y-4">
          <Input
            type="password"
            label="Mot de passe"
            placeholder="••••••"
            icon={<Lock size={18} />}
            withShowPassword
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        {errors.root && (
          <p className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded">
            {errors.root.message}
          </p>
        )}

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          className="mt-4"
        >
          S'INSCRIRE <ArrowRight size={18} className="ml-2" />
        </Button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-500">
        Déjà membre ?
        <Button variant="link" onClick={onToggleView} className="ml-1">
          Se connecter
        </Button>
      </p>
    </AuthModalWrapper>
  );
};

export default Register;
