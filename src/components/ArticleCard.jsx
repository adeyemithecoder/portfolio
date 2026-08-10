import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Badge from "./ui/Badge";

export default function ArticleCard({ article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 flex flex-col"
    >
      <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
        {article.category}
      </span>

      {/* Title */}
      <h3 className="mt-2 text-lg font-semibold text-[var(--color-white)]">
        <Link
          to={`/writing/${article.slug}`}
          className="hover:text-[var(--color-primary)] transition-colors"
        >
          {article.title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="mt-3 text-sm text-[var(--color-light)] flex-1">
        {article.excerpt}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {/* Date + Read More */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="text-xs text-[var(--color-light)]">
          {article.date ?? "Draft — not yet published"}
        </span>

        <Link
          to={`/writing/${article.slug}`}
          className="shrink-0 rounded-full border border-[var(--color-primary)] px-4 py-2 text-xs font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  );
}
