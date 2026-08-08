import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Badge from "../components/ui/Badge";
import Seo from "../components/Seo";
import { getArticleBySlug } from "../data/articles";

export default function ArticleDetails() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <Navigate to="/#writing" replace />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <Seo title={article.title} description={article.excerpt} />
      <article className="container pt-16 pb-28 max-w-3xl">
        <Link
          to="/#writing"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-light)] hover:text-[var(--color-white)] mb-8"
        >
          <FiArrowLeft aria-hidden="true" /> Back to Writing
        </Link>

        <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
          {article.category}
        </span>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-[var(--color-white)]">{article.title}</h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-[var(--color-light)]">
          <span>{article.date ?? "Draft — not yet published"}</span>
          {article.readingTime && <span>· {article.readingTime}</span>}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-10 text-[var(--color-light)] leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </article>
    </motion.div>
  );
}
