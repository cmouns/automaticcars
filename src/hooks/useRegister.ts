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
      const fullPhoneNumber = countryCode + finalPhone;

      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email,
          password,
          options: {
            data: {
              firstname: firstName,
              lastname: lastName,
            },
          },
        }
      );

      if (signUpError) throw new Error(signUpError.message);
      if (!authData.user)
        throw new Error("Erreur lors de la création du compte.");

      const { error: clientError } = await supabase.from("clients").insert([
        {
          user_id: authData.user.id,
          email: email,
          firstname: firstName,
          lastname: lastName,
          phone: fullPhoneNumber,
          date_of_birth: dateOfBirth || null,
          is_pro: false,
          vip: false,
        },
      ]);

      if (clientError) {
        console.error(clientError);
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
