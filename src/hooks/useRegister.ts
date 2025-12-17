// Fichier: src/hooks/useRegister.ts
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useRegister = (onSuccess: () => void) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+33",
    dateOfBirth: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => {
    let value = e.target.value;
    if (e.target.name === "phoneNumber") value = value.replace(/[^0-9]/g, "");
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const setCountryCode = (code: string) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      dateOfBirth,
    } = formData;

    try {
      if (!phoneNumber) throw new Error("Le numéro de téléphone est requis.");

      let finalPhone = phoneNumber;
      if (countryCode === "+33") {
        if (finalPhone.startsWith("0")) finalPhone = finalPhone.substring(1);
        if (finalPhone.length !== 9)
          throw new Error(
            "Le numéro doit contenir 9 chiffres, sans '0' au début."
          );
      }

      const { data: emailExists } = await supabase.rpc("check_email_exists", {
        email_to_check: email,
      });
      if (emailExists) throw new Error("Cette adresse mail est déjà utilisée.");

      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone_number: countryCode + finalPhone,
            date_of_birth: dateOfBirth,
          },
        },
      });

      if (signUpError) {
        if (signUpError.message.includes("Password"))
          throw new Error(
            "Le mot de passe doit contenir 8 caractères dont 1 majuscule, 1 chiffre et 1 caractères spécials(*@.-/...)."
          );
        throw new Error(signUpError.message);
      }

      onSuccess();
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Une erreur inconnue est survenue."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    handleChange,
    setCountryCode,
    handleSubmit,
  };
};
