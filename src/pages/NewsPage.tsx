import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import articlesData from "../data/articlesData";
import NewsCard from "../components/news/NewsCard";

/**
 * Page « Actualités » — grille de cards reprenant le layout WordPress
 * (3 colonnes desktop · 2 tablette · 1 mobile).
 *
 * Fonctionnalités :
 *  • Filtre par catégorie (boutons)
 *  • Tri du plus récent au plus ancien (par défaut)
 */
const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Toutes");

  /* ── Catégories uniques ─────────────────────────────────────────── */
  const categories = useMemo(() => {
    const cats = Array.from(new Set(articlesData.map((a) => a.category)));
    return ["Toutes", ...cats.sort()];
  }, []);

  /* ── Articles filtrés ───────────────────────────────────────────── */
  const filteredArticles = useMemo(() => {
    const base =
      activeCategory === "Toutes"
        ? articlesData
        : articlesData.filter((a) => a.category === activeCategory);

    // Plus récent en premier
    return [...base].sort(
      (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
    );
  }, [activeCategory]);

  return (
    <>
      {/* ── SEO ──────────────────────────────────────────────────── */}
      <Helmet>
        <title>Actualités – Automatic Cars Bordeaux</title>
        <meta
          name="description"
          content="Retrouvez toutes les actualités d'Automatic Cars : nouveaux véhicules, offres exclusives, conseils location et événements à Bordeaux."
        />
      </Helmet>

      <div className="font-sans selection:bg-gold-400 selection:text-black">
        {/* ── Hero ────────────────────────────────────────────────── */}
        <header className="bg-dark-900 pt-32 xl:pt-40 pb-20">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.25em]
                         text-gold-400 mb-4"
            >
              Blog &amp; Actualités
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Nos actualités
            </h1>
            <p className="mt-4 text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Nouveaux modèles, offres exclusives, conseils et coulisses
              d'Automatic Cars.
            </p>
          </div>
        </header>

        {/* ── Contenu ─────────────────────────────────────────────── */}
        <main className="bg-cream py-16 md:py-20 border-b border-gray-200">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Filtres catégorie */}
            <nav
              aria-label="Filtrer par catégorie"
              className="flex flex-wrap gap-2 mb-12 justify-center"
            >
              {categories.map((cat) => {
                const isActive = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                    className={`
                      px-4 py-2 rounded-full text-sm font-semibold transition-all
                      focus-visible:outline-none focus-visible:ring-2
                      focus-visible:ring-gold-400 focus-visible:ring-offset-2
                      ${
                        isActive
                          ? "bg-dark-900 text-white shadow-md"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-gold-400 hover:text-gold-600"
                      }
                    `}
                  >
                    {cat}
                  </button>
                );
              })}
            </nav>

            {/* Grille de cards */}
            {filteredArticles.length === 0 ? (
              <p className="text-center text-gray-500 py-20">
                Aucun article dans cette catégorie pour le moment.
              </p>
            ) : (
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                role="list"
              >
                {filteredArticles.map((article) => (
                  <div key={article.id} role="listitem">
                    <NewsCard article={article} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default NewsPage;
