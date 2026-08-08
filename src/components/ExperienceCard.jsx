import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Badge from "./ui/Badge";

/**
 * `compact` renders a condensed version for the Home page preview;
 * the full version (Experience page) shows responsibilities and tech.
 */
export default function ExperienceCard({ item, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 md:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-[var(--color-border)]">
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className="h-full w-full object-contain p-1.5"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-[var(--color-white)]">{item.role}</h3>
          <p className="text-[var(--color-primary)] text-sm font-medium mt-0.5">{item.company}</p>
          <p className="text-xs text-[var(--color-light)] mt-1">
            {item.period}
            {item.location ? ` · ${item.location}` : ""}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-[var(--color-light)]">{item.summary}</p>

      {!compact && (
        <>
          {item.responsibilities?.length > 0 && (
            <ul className="mt-5 space-y-2">
              {item.responsibilities.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--color-light)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          )}

          {item.technologies?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          )}

          {item.relatedProjects?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {item.relatedProjects.map((slug) => (
                <Link
                  key={slug}
                  to={`/projects/${slug}`}
                  className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                >
                  View related project →
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </motion.article>
  );
}
