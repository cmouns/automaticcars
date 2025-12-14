import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { supabase } from "./lib/supabaseClient";
import type { Session } from "@supabase/supabase-js";

// --- IMPORT DES COMPOSANTS ---
import { Login } from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/NavBar"; // Vérifie que c'est bien dans 'ui'
import Hero from "./components/sections/Hero";        // Vérifie que c'est bien à la racine de 'components'

// État pour gérer quel écran d'authentification est ouvert
type AuthScreen = "login" | "register" | null;

export default function App() {
  // --- ÉTATS ---
  const [session, setSession] = useState<Session | null>(null);
  const [authScreen, setAuthScreen] = useState<AuthScreen>(null);

  // --- Fonctions d'Ouverture/Fermeture du Modale ---
  const openLoginModal = () => setAuthScreen("login");
  const openRegisterModal = () => setAuthScreen("register");
  const closeAuthModal = () => setAuthScreen(null);

  // --- LOGIQUE SUPABASE (Auth uniquement) ---
  useEffect(() => {
    // 1. Vérifier la session au démarrage
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // 2. Écouter les changements (Connexion / Déconnexion)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        closeAuthModal(); // Ferme le modale après connexion
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  // --- RENDU PRINCIPAL ---
  return (
    <div style={styles.container}>
      
      {/* 1. NAVBAR (Fixe en haut) */}
      <Navbar 
        session={session} 
        onLogout={handleLogout} 
        onOpenAuth={openLoginModal} 
      />

      {/* 2. HERO SECTION (Prend tout l'écran) */}
      <Hero />

      {/* 3. MODALES D'AUTHENTIFICATION (Cachées par défaut) */}
      {authScreen !== null && (
        <div style={styles.modalOverlay}>
          {authScreen === "login" ? (
            <Login
              isOpen={true}
              onClose={closeAuthModal}
              onToggleView={openRegisterModal}
              onForgotPassword={() => alert("Fonctionnalité mot de passe oublié à venir !")}
            />
          ) : (
            <Register
              isOpen={true}
              onClose={closeAuthModal}
              onToggleView={openLoginModal}
            />
          )}
        </div>
      )}

    </div>
  );
}

// --- STYLES CSS SIMPLIFIÉS ---
const styles: { [key: string]: CSSProperties } = {
  container: {
    backgroundColor: "#050505", // Même noir que le Hero pour éviter les flashs blancs
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: 0, // IMPORTANT : J'ai mis 0 pour que le Hero colle aux bords
    margin: 0,
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)", // Fond sombre derrière le login
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Au-dessus de tout (Navbar = 50, Hero = 10)
    backdropFilter: "blur(5px)",
  },
};