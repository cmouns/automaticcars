import type { PropsWithChildren } from "react";
import type { Session } from "@supabase/supabase-js";

import Navbar from "./NavBar";
import Footer from "./Footer";

interface MainLayoutProps {
  session: Session | null;
  onLogout: () => void;
  onOpenAuth: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
  session,
  onLogout,
  onOpenAuth,
  currentPage,
  onNavigate,
}) => {
  const shouldOverlapNavbar = currentPage === "home";

  const mainClasses = shouldOverlapNavbar ? "pt-20 xl:pt-0" : "pt-20";

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar
        session={session}
        onLogout={onLogout}
        onOpenAuth={onOpenAuth}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />

      <main className={`flex-grow ${mainClasses}`}>{children}</main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default MainLayout;
