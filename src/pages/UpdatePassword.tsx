import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password.length < 8) {
      setError("Le mot de passe doit faire au moins 8 caractères.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      navigate("/");
      alert("Mot de passe mis à jour avec succès !");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erreur inconnue lors de la mise à jour.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-8 shadow-[0_0_40px_rgba(218,175,55,0.2)] border border-gold-500/20">
        <h2 className="text-3xl font-serif text-dark-900 mb-2">
          Nouveau mot de passe
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Sécurisez votre compte avec un nouveau mot de passe fort.
        </p>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nouveau mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-11 pr-12 rounded-lg border border-gold-500 bg-white text-black focus:outline-none focus:ring-1 focus:ring-gold-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gold-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-100">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold py-3 uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            {loading ? "Mise à jour..." : "Confirmer"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
