import { useMemo, useCallback } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation"; // Ta nouvelle page !
import About from "./pages/About";
import News from "./pages/News";
import Article from "./pages/Article";
import Subscription from "./pages/Subscription";
import LLD from "./pages/LLD";
import Terms from "./pages/Terms";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";

function MainRouter() {
  const navigate = useNavigate();
  const location = useLocation();

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
        case "reservation":
          path = "/reservation";
          break;
        case "about":
          path = "/about";
          break;
        case "news":
          path = "/news";
          break;
        case "subscription":
          path = "/subscription";
          break;
        case "lld":
          path = "/lld";
          break;
        case "conditions":
          path = "/conditions";
          break;
        case "fleet":
          path = "/fleet";
          break;
        case "contact":
          path = "/contact";
          break;
        default:
          path = `/${pageId}`;
      }
      navigate(path);
    },
    [navigate],
  );

  return (
    <Routes>
      <Route
        path="*"
        element={
          <MainLayout
            currentPage={currentPageId}
            onNavigate={handleAppNavigation}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route
                path="/:pageId"
                element={
                  <div
                    style={{ padding: "100px" }}
                    className="text-white text-center"
                  >
                    Page {currentPageId.toUpperCase()} en construction
                  </div>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<Article />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/lld" element={<LLD />} />
              <Route path="/conditions" element={<Terms />} />{" "}
              <Route path="/fleet" element={<Fleet />} />{" "}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}
