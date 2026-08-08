import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

// Home is now a single-page layout: everything below is a section id on
// Home, not a separate route. /projects/:slug and /writing/:slug still
// exist as standalone case-study / article pages.
const NAV_LINKS = [
  { hash: "about", label: "About" },
  { hash: "experience", label: "Experience" },
  { hash: "projects", label: "Projects" },
  { hash: "skills", label: "Skills" },
  { hash: "writing", label: "Writing" },
  { hash: "contact", label: "Contact" },
];

const RESUME_PATH = "/src/assets/resume/Mathew_Adeyemi_Resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const drawerRef = useRef(null);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever a route change happens (NavLink click).
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Basic focus trap + Escape-to-close for the mobile drawer.
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Scroll-spy: highlight whichever section is currently in view. Only
  // meaningful on Home, since that's the only route with these section ids.
  useEffect(() => {
    if (!onHome) {
      setActiveHash("");
      return;
    }

    const sections = NAV_LINKS.map((l) => document.getElementById(l.hash)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  // Same page: smooth-scroll directly (scroll-mt-* on each section handles
  // the sticky-navbar offset). Different page: navigate to "/#hash" and let
  // Home's own effect scroll to it once the section exists in the DOM.
  const handleNavClick = (hash) => (e) => {
    if (onHome) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${hash}`);
      setActiveHash(hash);
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  const linkClasses = (hash) =>
    `text-sm font-medium transition-colors duration-200 ${
      activeHash === hash
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-light)] hover:text-[var(--color-white)]"
    }`;

  const handleLogoClick = (e) => {
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-5">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="font-display text-lg font-semibold text-[var(--color-white)]"
        >
          Mathew<span className="text-[var(--color-primary)]">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.hash}>
              <Link to={`/#${link.hash}`} onClick={handleNavClick(link.hash)} className={linkClasses(link.hash)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={RESUME_PATH}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-light)] hover:text-[var(--color-white)] transition-colors"
          >
            <HiOutlineArrowDownTray aria-hidden="true" />
            Resume
          </a>
          <Link
            to="/#contact"
            onClick={handleNavClick("contact")}
            className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-2xl text-[var(--color-white)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              className="fixed top-0 right-0 h-full w-[78%] max-w-xs bg-[var(--color-bg-variant)] z-50 lg:hidden flex flex-col gap-1 p-8 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.hash}
                  to={`/#${link.hash}`}
                  onClick={handleNavClick(link.hash)}
                  className={`py-3 text-lg font-medium border-b border-[var(--color-border)] ${
                    activeHash === link.hash ? "text-[var(--color-primary)]" : "text-[var(--color-white)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={RESUME_PATH}
                download
                className="mt-6 inline-flex items-center gap-2 text-[var(--color-light)]"
              >
                <HiOutlineArrowDownTray aria-hidden="true" />
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
