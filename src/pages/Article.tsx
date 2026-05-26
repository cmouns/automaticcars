import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "../components/ui/Button";
import articlesData from "../data/articlesData";
import articleContents from "../data/articleContents";

const ArticleNotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 text-center">
      <h3 className="text-2xl font-serif text-dark-900 mb-4">
        Article introuvable
      </h3>
      <p className="text-gray-600 mb-8">
        Cet article n'existe pas ou a été déplacé.
      </p>
      <Button
        variant="secondary"
        className="border-gray-300 text-dark-900 hover:bg-gray-100"
        onClick={() => navigate("/news")}
      >
        Retour aux actualités
      </Button>
    </div>
  );
};

const ReadMore: React.FC<{ currentSlug: string }> = ({ currentSlug }) => {
  const suggestions = articlesData
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 2);
  if (suggestions.length === 0) return null;
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-serif text-dark-900 mb-12">Lire aussi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {suggestions.map((s) => (
            <Link
              key={s.id}
              to={`/news/${s.slug}`}
              className="group p-6 border border-gray-100 rounded-xl hover:border-gold-400/50 hover:shadow-lg transition-all bg-cream"
            >
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
                {s.category}
              </span>
              <h3 className="text-xl font-serif text-dark-900 group-hover:text-gold-600 transition-colors">
                {s.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const meta = articlesData.find((a) => a.slug === slug);
  const content = slug ? articleContents[slug] : undefined;

  return (
    <>
      <Helmet>
        <title>
          {meta
            ? `${meta.title} – Automatic Cars`
            : "Article introuvable – Automatic Cars"}
        </title>
        <meta
          name="description"
          content={
            meta
              ? meta.excerpt
              : "L'actualité de notre agence de location de voitures à Bordeaux."
          }
        />
      </Helmet>

      <div className="font-sans selection:bg-gold-400 selection:text-black">
        <header className="bg-dark-900 pt-32 xl:pt-40 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm font-bold uppercase tracking-wider mb-8"
            >
              <ArrowLeft size={16} /> Retour au journal
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white/10 text-gold-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest border border-white/5">
                {meta?.category ?? "Actualité"}
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
                <Calendar size={14} />
                <time dateTime={meta?.dateTime ?? ""}>
                  {meta?.date ?? "Date inconnue"}
                </time>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
              {meta?.title ?? "Article introuvable"}
            </h1>
          </div>
        </header>

        <main className="bg-cream py-16 md:py-24 border-b border-gray-200">
          <div className="container mx-auto px-6 max-w-3xl">
            <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-light">
              {content ?? <ArticleNotFound />}
            </article>
          </div>
        </main>

        {slug && meta && <ReadMore currentSlug={slug} />}
      </div>
    </>
  );
};

export default Article;
