import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import type { ArticleMeta } from "../../data/articlesData";

interface NewsCardProps {
  article: ArticleMeta;
}

/**
 * Card d'actualité reproduisant le style du site WordPress Automatic Cars.
 *
 * Structure :
 *  ┌─────────────────────────────┐
 *  │  Badge catégorie            │
 *  │  Titre (h3, lien)          │
 *  │  Extrait tronqué           │
 *  │  « Lire la suite »         │
 *  │─────────────────────────────│
 *  │  📅 Date                   │
 *  └─────────────────────────────┘
 */
const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const linkTo = `/news/${article.slug}`;

  return (
    <article
      className="group flex flex-col bg-white rounded-2xl shadow-md
                 hover:shadow-xl transition-shadow duration-300
                 overflow-hidden border border-gray-100"
    >
      {/* ── Corps de la card ──────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Catégorie */}
        <span
          className="self-start text-[11px] font-bold uppercase tracking-widest
                     text-gold-600 bg-gold-400/10 px-3 py-1 rounded-full mb-4"
        >
          {article.category}
        </span>

        {/* Titre */}
        <h3 className="text-lg font-serif font-semibold text-dark-900 leading-snug mb-3 line-clamp-3">
          <Link
            to={linkTo}
            className="hover:text-gold-600 transition-colors focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 rounded"
          >
            {article.title}
          </Link>
        </h3>

        {/* Extrait */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-1">
          {article.excerpt}
        </p>

        {/* Lire la suite */}
        <Link
          to={linkTo}
          className="inline-flex items-center gap-1.5 text-sm font-semibold
                     text-gold-600 hover:text-gold-700 transition-colors
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-gold-400 focus-visible:ring-offset-2 rounded"
          aria-label={`Lire la suite : ${article.title}`}
        >
          Lire la suite
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* ── Pied de card (date) ───────────────────────────────────────── */}
      <div className="border-t border-gray-100 px-6 py-3 flex items-center gap-2 text-xs text-gray-400 font-medium">
        <Calendar size={13} aria-hidden="true" />
        <time dateTime={article.dateTime}>{article.date}</time>
      </div>
    </article>
  );
};

export default NewsCard;