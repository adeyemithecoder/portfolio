import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Badge from "./ui/Badge";

export default function ProjectCard({ project }) {
  const primaryLive = project.liveUrls?.[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden flex flex-col hover:border-[var(--color-primary)]/50 transition-colors duration-300"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block aspect-video overflow-hidden bg-white/5"
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;charset=UTF-8,%3Csvg width='400' height='225' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%232c2c6c'/%3E%3C/svg%3E";
          }}
        />
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
            {project.category}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-[var(--color-white)]">
          <Link
            to={`/projects/${project.slug}`}
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            {project.title}
          </Link>
        </h3>

        {project.company && (
          <p className="mt-1 text-sm text-[var(--color-light)]">
            {project.company}
          </p>
        )}

        <p className="mt-3 text-sm text-[var(--color-light)] flex-1">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge>+{project.technologies.length - 4}</Badge>
          )}
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm font-medium">
          {primaryLive && (
            <a
              href={primaryLive.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--color-primary)] hover:underline"
            >
              <FiExternalLink aria-hidden="true" /> View Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--color-light)] hover:text-[var(--color-white)]"
            >
              <FiGithub aria-hidden="true" /> GitHub
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="ml-auto text-[var(--color-light)] hover:text-[var(--color-white)]"
          >
            View Case Study →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
