import { useMemo, useCallback } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Article from "./pages/Article";
import Subscription from "./pages/Subscription";
// import LldPage from "./pages/LLD";
import Terms from "./pages/Terms";
import Fleet from "./pages/Fleet";
// import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";

const PATH_MAP: Record<string, string> = {
  home: "/",
  reservation: "/reservation",
  about: "/about",
  news: "/news",
  subscription: "/subscription",
  lld: "/lld",
  conditions: "/conditions",
  fleet: "/fleet",
  contact: "/contact",
};

function MainRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPageId = useMemo(() => {
    const path = location.pathname;
    return path === "/" ? "home" : path.substring(1).split("/")[0];
  }, [location.pathname]);

  const handleAppNavigation = useCallback(
    (pageId: string) => {
      navigate(PATH_MAP[pageId] ?? `/${pageId}`);
    },
    [navigate],
  );

  return (
    <MainLayout currentPage={currentPageId} onNavigate={handleAppNavigation}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/news/:slug" element={<Article />} />
        <Route path="/subscription" element={<Subscription />} />
        {/* <Route path="/lld" element={<LldPage />} /> */}
        <Route path="/conditions" element={<Terms />} />
        <Route path="/fleet" element={<Fleet />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/news" element={<NewsPage />} />
        <Route
          path="*"
        />
      </Routes>
    </MainLayout>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </HelmetProvider>
  );
}
