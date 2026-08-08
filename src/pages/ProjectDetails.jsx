import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import Seo from "../components/Seo";
import { getProjectBySlug, projects } from "../data/projects";

import "swiper/css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/#projects" replace />;

  const related = projects.filter((p) => project.relatedProjects?.includes(p.slug) || false);
  // Fallback: show other projects if none explicitly related
  const relatedToShow = related.length
    ? related
    : projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);

  const gallery = project.gallery?.length ? project.gallery : [project.image];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <Seo title={project.title} description={project.shortDescription} />
      {/* Project Hero */}
      <section className="container pt-16 pb-10">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-light)] hover:text-[var(--color-white)] mb-6"
        >
          <FiArrowLeft aria-hidden="true" /> Back to Projects
        </Link>

        <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
          {project.category}
        </span>
        <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-[var(--color-white)]">{project.title}</h1>
        {project.company && <p className="mt-2 text-[var(--color-light)]">{project.company}</p>}
        <p className="mt-1 text-sm text-[var(--color-light)]">Role: {project.myRole}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {project.liveUrls?.map((link) => (
            <Button key={link.url} href={link.url} variant="primary">
              <FiExternalLink aria-hidden="true" /> {link.label}
            </Button>
          ))}
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="outline">
              <FiGithub aria-hidden="true" /> GitHub
            </Button>
          )}
        </div>
      </section>

      {/* Project image / gallery */}
      <section className="container pb-16">
        {gallery.length > 1 ? (
          <Swiper spaceBetween={16} slidesPerView={1} className="rounded-2xl overflow-hidden border border-[var(--color-border)]">
            {gallery.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] aspect-video bg-white/5">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.parentElement.innerHTML =
                  '<div class="h-full w-full flex items-center justify-center text-sm text-[var(--color-light)]">[ADD PROJECT SCREENSHOT]</div>';
              }}
            />
          </div>
        )}
      </section>

      <div className="container pb-24 grid lg:grid-cols-[1.6fr_1fr] gap-16">
        {/* Main content */}
        <div className="space-y-16">
          {project.overview && (
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-white)] mb-3">Overview</h2>
              <p className="text-[var(--color-light)]">{project.overview}</p>
            </section>
          )}

          {(project.problem || project.solution) && (
            <section className="grid sm:grid-cols-2 gap-8">
              {project.problem && (
                <div>
                  <h2 className="text-xl font-semibold text-[var(--color-white)] mb-3">Problem</h2>
                  <p className="text-[var(--color-light)]">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <h2 className="text-xl font-semibold text-[var(--color-white)] mb-3">Solution</h2>
                  <p className="text-[var(--color-light)]">{project.solution}</p>
                </div>
              )}
            </section>
          )}

          {project.keyFeatures?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-white)] mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[var(--color-light)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.challenges?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-white)] mb-4">Engineering Challenges</h2>
              <div className="space-y-6">
                {project.challenges.map((c, i) => (
                  <div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
                    <p className="text-sm">
                      <span className="font-semibold text-[var(--color-primary)]">Challenge: </span>
                      <span className="text-[var(--color-light)]">{c.challenge}</span>
                    </p>
                    <p className="text-sm mt-3">
                      <span className="font-semibold text-[var(--color-primary)]">Approach: </span>
                      <span className="text-[var(--color-light)]">{c.approach}</span>
                    </p>
                    <p className="text-sm mt-3">
                      <span className="font-semibold text-[var(--color-primary)]">Solution: </span>
                      <span className="text-[var(--color-light)]">{c.solution}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.results && (
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-white)] mb-3">Results / Impact</h2>
              <p className="text-[var(--color-light)]">{project.results}</p>
            </section>
          )}
        </div>

        {/* Sidebar: architecture + related */}
        <aside className="space-y-10">
          {project.architecture?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-white)] mb-5">Architecture</h2>
              <ArchitectureDiagram steps={project.architecture} />
            </div>
          )}

          {relatedToShow.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-white)] mb-4">Related Projects</h2>
              <div className="space-y-3">
                {relatedToShow.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-primary)]/50 transition-colors"
                  >
                    <p className="text-sm font-medium text-[var(--color-white)]">{p.title}</p>
                    <p className="text-xs text-[var(--color-light)] mt-1">{p.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </motion.div>
  );
}
