import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const NAV_LINKS = [
  { hash: "about", label: "About" },
  { hash: "experience", label: "Experience" },
  { hash: "projects", label: "Projects" },
  { hash: "skills", label: "Skills" },
  { hash: "writing", label: "Writing" },
  { hash: "contact", label: "Contact" },
];

const RESUME_PATH = "/resume/Mathew_Adeyemi_Resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const location = useLocation();
  const onHome = location.pathname === "/";

  // Detect scrolling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock page scrolling while mobile menu is open
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes mobile menu
  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Scroll spy
  useEffect(() => {
    if (!onHome) {
      setActiveHash("");
      return;
    }

    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.hash),
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [onHome]);

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

  const handleLogoClick = (e) => {
    if (onHome) {
      e.preventDefault();

      setOpen(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", "/");
    }
  };

  const linkClasses = (hash) =>
    `text-sm font-medium transition-colors duration-200 ${
      activeHash === hash
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-light)] hover:text-[var(--color-white)]"
    }`;

  return (
    <>
      {/* =========================================================
          MAIN NAVBAR
      ========================================================== */}
      <header
        className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-lg"
            : "bg-[var(--color-bg)]/90 backdrop-blur-sm"
        }`}
      >
        <nav className="container h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="text-xl font-semibold text-[var(--color-white)] hover:text-[var(--color-primary)] transition-colors"
          >
            Mathew.
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <Link
                  to={`/#${link.hash}`}
                  onClick={handleNavClick(link.hash)}
                  className={linkClasses(link.hash)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
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

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-2xl text-[var(--color-white)] hover:bg-white/10 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>
      </header>

      {/* =========================================================
          MOBILE DRAWER
      ========================================================== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-[110] bg-black/60 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 z-[120] w-[82%] max-w-sm bg-[var(--color-bg-variant)] border-l border-[var(--color-border)] lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {/* Drawer Header */}
              <div className="h-20 px-6 flex items-center justify-between border-b border-[var(--color-border)]">
                <span className="text-lg font-semibold text-[var(--color-white)]">
                  Menu
                </span>

                {/* CLOSE ICON */}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-2xl text-[var(--color-white)] hover:bg-white/10 hover:text-[var(--color-primary)] transition-colors"
                >
                  <HiX aria-hidden="true" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="px-6 py-6">
                <nav className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.hash}
                      to={`/#${link.hash}`}
                      onClick={handleNavClick(link.hash)}
                      className={`py-4 text-lg font-medium border-b border-[var(--color-border)] transition-colors ${
                        activeHash === link.hash
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-white)] hover:text-[var(--color-primary)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Resume */}
                <a
                  href={RESUME_PATH}
                  download
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-flex items-center gap-2 text-[var(--color-light)] hover:text-[var(--color-white)] transition-colors"
                >
                  <HiOutlineArrowDownTray aria-hidden="true" />
                  Download Resume
                </a>

                {/* Let's Talk */}
                <Link
                  to="/#contact"
                  onClick={handleNavClick("contact")}
                  className="mt-6 flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-[var(--color-bg)] hover:opacity-90 transition-opacity"
                >
                  Let's Talk
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
