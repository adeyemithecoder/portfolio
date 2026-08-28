import { useState, useRef, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import ArticleCard from "../components/ArticleCard";
import SkillCategory from "../components/SkillCategory";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import Seo from "../components/Seo";

import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { articles } from "../data/articles";
import { skills } from "../data/skills";
import { FaWhatsapp } from "react-icons/fa";

const RESUME_PATH = "/resume/Mathew_Adeyemi_Resume.pdf";
const PROFILE_PHOTO = "/images/profile/profile-photo.png";

const SNAPSHOT = [
  {
    title: "Full-Stack Development",
    detail: "React, Next.js, Vue.js, Node.js, Express, Django end-to-end.",
  },
  {
    title: "Frontend Engineering",
    detail: "TypeScript-driven UIs, state management, responsive architecture.",
  },
  {
    title: "Backend Systems",
    detail:
      "REST APIs, real-time features with Socket.io, multi-tenant data design.",
  },
  {
    title: "Cloud & DevOps",
    detail:
      "Docker, AWS, Nginx, GitHub Actions CI/CD, Linux server administration.",
  },
  {
    title: "Mobile Applications",
    detail:
      "React Native apps shipped to production, including the Google Play Store.",
  },
];

const APPROACH = [
  {
    title: "Own the whole stack",
    detail:
      "From a Tiptap-based rich text editor on the frontend to the Nginx config routing traffic to it in production, I'd rather understand the whole path a request takes than treat any layer as someone else's problem.",
  },
  {
    title: "Build for the messy, real cases",
    detail:
      "Multi-tenant SaaS, deferred image uploads, tenant-scoped databases — production systems have edge cases that tutorials skip. I design for those from the start.",
  },
  {
    title: "Ship, then keep it running",
    detail:
      "Deploying is one thing; keeping a production system healthy — through Docker, CI/CD, and server administration — is where I've grown the most.",
  },
];

const DEPLOY_FLOW = [
  "Developer",
  "GitHub",
  "GitHub Actions (Build/Test)",
  "Docker",
  "Deployment",
  "Nginx",
  "Production Application",
];

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message can't be empty.";
  return errors;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
}

export default function Home() {
  // Arriving here via a "/#section" link (e.g. from a project or article
  // page, or the Navbar when not already on Home) — scroll to that section
  // once it's mounted, instead of leaving the page at the top.
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash]);

  // --- Projects filter (moved here from the old standalone /projects page) ---
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // --- Contact form ---
  const formRef = useRef(null);
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e2) => ({ ...e2, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const foundErrors = validate(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Config not set up yet — fail loudly in dev rather than silently pretending to send.
      console.error(
        "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("success");
      setValues(initialForm);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Full-Stack Software Engineer"
        description="Mathew Adeyemi is a Full-Stack Software Engineer building production web, mobile, and cloud-deployed systems across React, Node.js, and Python/Django."
      />

      {/* Hero */}
      <section className="container pt-16 md:pt-24 pb-20">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[var(--color-primary)] font-medium tracking-wide">
              Hi, I'm
            </p>
            <h1 className="mt-2 text-4xl md:text-6xl font-semibold text-[var(--color-white)] leading-tight">
              Mathew Adeyemi
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-[var(--color-light)]">
              Full-Stack Software Engineer
              <br className="hidden md:block" /> Frontend • Backend • Cloud
              &amp; DevOps
            </p>
            <p className="mt-6 max-w-xl text-[var(--color-light)]">
              I build and ship production web, mobile, and backend systems —
              from multi-tenant SaaS platforms serving real schools to
              containerized infrastructure running on AWS. I work across the
              full stack: React and React Native on the front end, Node.js and
              Django on the back end, and Docker, Nginx, and CI/CD pipelines to
              get it all running reliably in production.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button onClick={() => scrollToSection("projects")}>
                View Projects
              </Button>
              <Button href={RESUME_PATH} variant="outline">
                <HiOutlineArrowDownTray aria-hidden="true" /> Download Resume
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="ghost"
              >
                Get in touch →
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/adeyemithecoder/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-xl text-[var(--color-light)] hover:text-[var(--color-primary)] transition-colors"
              >
                <FiGithub aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/mathew-adeyemi-a0603429b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-xl text-[var(--color-light)] hover:text-[var(--color-primary)] transition-colors"
              >
                <FiLinkedin aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="justify-self-center"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-[var(--color-primary-variant)] shadow-[0_0_60px_rgba(77,181,255,0.25)]">
              <img
                src={PROFILE_PHOTO}
                alt="Mathew Adeyemi, Full-Stack Software Engineer"
                className="h-full w-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;charset=UTF-8,%3Csvg width='320' height='320' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%232c2c6c'/%3E%3C/svg%3E";
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering snapshot */}
      <section className="container pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SNAPSHOT.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
            >
              <h3 className="text-sm font-semibold text-[var(--color-white)]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-[var(--color-light)]">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container pt-8 pb-24 scroll-mt-28">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] aspect-[4/5]">
              <img
                src={PROFILE_PHOTO}
                alt="Mathew Adeyemi"
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;charset=UTF-8,%3Csvg width='400' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%232c2c6c'/%3E%3C/svg%3E";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[var(--color-primary)] font-medium tracking-wide">
              About
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-[var(--color-white)]">
              I build systems end to end — not just the parts that are visible.
            </h2>
            <div className="mt-6 space-y-4 text-[var(--color-light)]">
              <p>
                I'm a Full-Stack Software Engineer working across the
                JavaScript/TypeScript ecosystem — React, Next.js, Vue.js,
                Node.js, Express — as well as Python and Django. Over the last
                several years my work has grown from writing application code to
                owning the full lifecycle of production software: designing REST
                APIs, modeling relational and NoSQL databases, containerizing
                applications with Docker, configuring Nginx reverse proxies,
                administering Linux servers, and deploying to AWS.
              </p>
              <p>
                Right now, at TD4PAI Hardtech Hub, I build real-time dashboards
                that visualize embedded device data — and I'm also the one who
                sets up the Ubuntu servers, configures the Docker networking,
                and builds the GitHub Actions pipelines that get those
                dashboards into production. Alongside that, I maintain a
                multi-tenant school management SaaS suite for AS Code Elevate
                Solution, used by multiple schools from a single codebase,
                spanning exam delivery, result processing, and fees/accounting
                management.
              </p>
              <p>
                I've also shipped mobile applications — including a production
                React Native app on the Google Play Store — and spent time on
                the other side of the table as an instructor, teaching React,
                React Native, Node.js, and MongoDB to students building their
                first real projects.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <SectionTitle
            eyebrow="How I Work"
            title="My Approach to Engineering"
            description="A few things that consistently shape how I build."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {APPROACH.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
              >
                <h3 className="text-base font-semibold text-[var(--color-white)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-light)]">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionTitle eyebrow="What I Bring" title="To an Engineering Team" />
          <div className="grid sm:grid-cols-2 gap-4 text-[var(--color-light)]">
            <p>
              Comfort moving between frontend, backend, mobile, and
              infrastructure — I don't hand off a problem just because it
              crosses a layer boundary.
            </p>
            <p>
              Direct experience with the operational side of shipping: Docker,
              Nginx, CI/CD, and Linux server administration, not just writing
              application code and deploying to a managed platform.
            </p>
            <p>
              A track record of building multi-tenant systems that need to stay
              correct and performant as more customers are added, not just
              single-tenant demos.
            </p>
            <p>
              Experience explaining technical concepts clearly, from writing
              instructor guides to structuring training curricula — useful for
              documentation, onboarding, and cross-functional communication.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container pb-24 scroll-mt-28">
        <SectionTitle
          eyebrow="Career"
          title="Professional Experience"
          description="Real companies, real production systems — in reverse-chronological order."
        />
        <div className="relative">
          <div className="hidden md:block absolute left-6 top-2 bottom-2 w-px bg-[var(--color-border)]" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="md:pl-16 relative"
              >
                <div className="hidden md:block absolute left-[19px] top-8 h-3 w-3 rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-bg)]" />
                <ExperienceCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container pb-24 scroll-mt-28">
        <SectionTitle
          eyebrow="Portfolio"
          title="Projects"
          description="Most of these were built for real companies — some don't have public source code, so live demos are the primary way to see the work."
        />

        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-[var(--color-primary)] text-[var(--color-bg)] border-[var(--color-primary)]"
                  : "border-[var(--color-border)] text-[var(--color-light)] hover:text-[var(--color-white)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container pb-24 scroll-mt-28">
        <SectionTitle
          eyebrow="Toolbox"
          title="Technical Capabilities"
          description="Organized by area rather than ranked by percentage — depth varies naturally by how much production time I've spent in each."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <SkillCategory
              key={group.category}
              category={group.category}
              items={group.items}
            />
          ))}
        </div>

        <div className="mt-16">
          <SectionTitle
            eyebrow="In Practice"
            title="How Code Gets to Production"
            description="The deployment flow I've built and operated for projects like the DAQBIN dashboard."
          />
          <ArchitectureDiagram steps={DEPLOY_FLOW} />
        </div>
      </section>

      {/* Writing */}
      {articles.length > 0 && (
        <section id="writing" className="container pb-24 scroll-mt-28">
          <SectionTitle
            eyebrow="Writing"
            title="Technical Writing"
            description="Notes on the systems I work with day to day — deployment, infrastructure, and full-stack architecture."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="container pb-28 scroll-mt-28">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Talk"
          description="Open to full-stack, backend, and cloud/DevOps roles or contract work. I usually reply within a day or two."
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div className="space-y-6">
            <a
              href="mailto:mathewadeyemi7654@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-primary)]/50 transition-colors"
            >
              <FiMail
                className="text-xl text-[var(--color-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm text-[var(--color-light)]">
                mathewadeyemi7654@gmail.com
              </span>
            </a>
            <a
              href="https://linkedin.com/in/mathew-adeyemi-a0603429b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-primary)]/50 transition-colors"
            >
              <FiLinkedin
                className="text-xl text-[var(--color-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm text-[var(--color-light)]">
                linkedin.com/in/mathew-adeyemi-a0603429b
              </span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-primary)]/50 transition-colors"
            >
              <FiGithub
                className="text-xl text-[var(--color-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm text-[var(--color-light)]">
                https://github.com/adeyemithecoder/
              </span>
            </a>
            <a
              href="https://wa.me/2348109774285"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-primary)]/50 transition-colors"
            >
              <FaWhatsapp
                className="text-xl text-[var(--color-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm text-[var(--color-light)]">
                WhatsApp
              </span>
            </a>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--color-white)] mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-[var(--color-light)]/50"
                placeholder="Your full name"
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1.5 text-xs text-[var(--color-error)]"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--color-white)] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-[var(--color-light)]/50"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1.5 text-xs text-[var(--color-error)]"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[var(--color-white)] mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-[var(--color-light)]/50"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p
                  id="subject-error"
                  className="mt-1.5 text-xs text-[var(--color-error)]"
                >
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--color-white)] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-[var(--color-light)]/50 resize-y"
                placeholder="Tell me a bit about the role or project..."
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1.5 text-xs text-[var(--color-error)]"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Accessible live region for async status updates */}
            <div aria-live="polite" className="pt-1">
              {status === "success" && (
                <p className="text-sm text-[var(--color-success)]">
                  Message sent — thanks for reaching out. I'll get back to you
                  soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-[var(--color-error)]">
                  Something went wrong sending that. Please try again, or email
                  me directly at mathewadeyemi7654@gmail.com.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
