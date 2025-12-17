import { useState, useEffect, useMemo, useCallback } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import type { Session } from "@supabase/supabase-js";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ForgotPassword } from "./components/auth/ForgotPassword";

import { supabase } from "./lib/supabaseClient";

function MainRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const [session, setSession] = useState<Session | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<"login" | "register" | "forgot">(
    "login"
  );

  const [hasRedirectedAfterLogin, setHasRedirectedAfterLogin] = useState(false);

  const currentPageId = useMemo(() => {
    const path = location.pathname;
    return path === "/" ? "home" : path.substring(1).split("/")[0];
  }, [location.pathname]);

  const handleAppNavigation = useCallback(
    (pageId: string) => {
      let path = "/";
      switch (pageId) {
        case "home":
          path = "/";
          break;
        case "profile":
          path = "/profile";
          break;
        default:
          path = `/${pageId}`;
      }
      navigate(path);
    },
    [navigate]
  );

  const handleCloseAuth = useCallback(() => {
    setAuthModalOpen(false);
    setTimeout(() => setAuthView("login"), 300);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setHasRedirectedAfterLogin(false);
  };

  const handleOpenAuth = () => setAuthModalOpen(true);
  const handleToggleAuthView = () =>
    setAuthView((prev) => (prev === "login" ? "register" : "login"));
  const handleForgotPassword = () => setAuthView("forgot");
  const handleBackToLogin = () => setAuthView("login");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);

      if (session && event === "SIGNED_IN" && !hasRedirectedAfterLogin) {
        handleCloseAuth();

        if (!location.pathname.startsWith("/profile")) {
          handleAppNavigation("profile");
        }

        setHasRedirectedAfterLogin(true);
      }

      if (!session && event === "SIGNED_OUT") {
        handleAppNavigation("home");
        setHasRedirectedAfterLogin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [
    handleAppNavigation,
    handleCloseAuth,
    location.pathname,
    hasRedirectedAfterLogin,
  ]);

  return (
    <>
      <MainLayout
        session={session}
        onLogout={handleLogout}
        onOpenAuth={handleOpenAuth}
        currentPage={currentPageId}
        onNavigate={handleAppNavigation}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/:pageId"
            element={
              <div style={{ padding: "100px" }} className="text-white">
                Page {currentPageId.toUpperCase()}
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div style={{ padding: "100px" }} className="text-white">
                404 | Page non trouvée
              </div>
            }
          />
        </Routes>
      </MainLayout>

      {authView === "login" && (
        <Login
          isOpen={authModalOpen}
          onClose={handleCloseAuth}
          onToggleView={handleToggleAuthView}
          onForgotPassword={handleForgotPassword}
        />
      )}
      {authView === "register" && (
        <Register
          isOpen={authModalOpen}
          onClose={handleCloseAuth}
          onToggleView={handleToggleAuthView}
        />
      )}
      {authView === "forgot" && (
        <ForgotPassword
          isOpen={authModalOpen}
          onClose={handleCloseAuth}
          onBackToLogin={handleBackToLogin}
        />
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
