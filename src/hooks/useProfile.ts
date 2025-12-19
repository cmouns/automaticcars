import { useState, useCallback, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import type { UserProfile } from "../types";

const INITIAL_FORM_DATA: UserProfile = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateOfBirth: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
  licenseNumber: "",
  licenseExpirationDate: "",
  licenseObtainedDate: "",
  licenseFrontPath: null,
  licenseBackPath: null,
  avatarUrl: "",
};

export const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<UserProfile>(INITIAL_FORM_DATA);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const fetchProfile = useCallback(async (uid: string) => {
    setLoading(true);
    try {
      const { data, error: fetchError } = await supabase
        .from("clients")
        .select("*")
        .eq("user_id", uid)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") throw fetchError;

      if (data) {
        setFormData({
          id: data.id,
          email: data.email || "",
          firstName: data.firstname || "",
          lastName: data.lastname || "",
          phoneNumber: data.phone || "",
          dateOfBirth: data.date_of_birth || "",
          address: data.addr_street || "",
          city: data.addr_city || "",
          zipCode: data.addr_zip || "",
          country: data.country || "",
          licenseNumber: data.license_num || "",
          licenseExpirationDate: data.license_expiration_date || "",
          licenseObtainedDate: data.license_obtained_date || "",
          avatarUrl: data.avatar_url || "",
          licenseFrontPath: data.license_front_path || null,
          licenseBackPath: data.license_back_path || null,
          isPro: data.is_pro || false,
        });
      }
    } catch (err) {
      console.error(err);
      setError("Erreur de chargement.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setUserId(session.user.id);
        await fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUserId(session.user.id);
        fetchProfile(session.user.id);
      } else {
        setUserId(null);
        setFormData(INITIAL_FORM_DATA);
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchProfile]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;
    setLoading(true);

    try {
      const { data, error: upsertError } = await supabase
        .from("clients")
        .upsert(
          {
            user_id: userId,
            email: formData.email,
            firstname: formData.firstName,
            lastname: formData.lastName,
            phone: formData.phoneNumber,
            date_of_birth: formData.dateOfBirth || null,
            addr_street: formData.address,
            addr_city: formData.city,
            addr_zip: formData.zipCode,
            country: formData.country,
            license_num: formData.licenseNumber,
            license_expiration_date: formData.licenseExpirationDate || null,
            license_obtained_date: formData.licenseObtainedDate || null,
          },
          { onConflict: "user_id" }
        )
        .select()
        .single();

      if (upsertError) throw upsertError;
      if (data) alert("Profil mis à jour !");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    formData,
    handleChange,
    handleSave,
    userId,
    refreshProfile: () => userId && fetchProfile(userId),
  };
};
