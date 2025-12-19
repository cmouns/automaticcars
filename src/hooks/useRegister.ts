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
    const { name, value } = e.target;
    const finalValue =
      name === "phoneNumber" ? value.replace(/[^0-9]/g, "") : value;

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
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

      let cleanPhone = phoneNumber;
      if (countryCode === "+33") {
        if (cleanPhone.startsWith("0")) cleanPhone = cleanPhone.substring(1);
        if (cleanPhone.length !== 9) {
          throw new Error(
            "Le numéro français doit contenir 9 chiffres après l'indicatif."
          );
        }
      }
      const fullPhoneNumber = countryCode + cleanPhone;

      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email,
          password,
          options: {
            data: {
              firstname: firstName,
              lastname: lastName,
              phone: fullPhoneNumber,
            },
          },
        }
      );

      if (signUpError) throw signUpError;
      if (!authData.user)
        throw new Error("Erreur lors de la création du compte.");
      const { error: clientError } = await supabase.from("clients").upsert(
        {
          user_id: authData.user.id,
          email: email.toLowerCase().trim(),
          firstname: firstName.trim(),
          lastname: lastName.trim(),
          phone: fullPhoneNumber,
          date_of_birth: dateOfBirth || null,
          is_pro: false,
          vip: false,
        },
        { onConflict: "user_id" }
      );

      if (clientError) {
        console.error("Erreur table clients:", clientError.message);
      }

      onSuccess();
    } catch (err: unknown) {
      console.error("Registration error:", err);
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
