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

      <h3 className="mt-2 text-lg font-semibold text-[var(--color-white)]">
        <Link to={`/writing/${article.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
          {article.title}
        </Link>
      </h3>

      <p className="mt-3 text-sm text-[var(--color-light)] flex-1">{article.excerpt}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-[var(--color-light)]">
        <span>{article.date ?? "Draft — not yet published"}</span>
        <span>{article.readingTime ?? ""}</span>
      </div>
    </motion.article>
  );
}
