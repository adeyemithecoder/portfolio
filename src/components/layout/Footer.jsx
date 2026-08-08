import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

const RESUME_PATH = "/src/assets/resume/Mathew_Adeyemi_Resume.pdf";

// [ADD REAL GITHUB URL] — resume doesn't list one; update once available.
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/mathew-adeyemi-a0603429b", icon: FiLinkedin },
  { label: "Email", href: "mailto:mathewadeyemi7654@gmail.com", icon: FiMail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="container py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-white)]">Mathew Adeyemi</p>
          <p className="mt-1 text-sm text-[var(--color-light)]">
            Full-Stack Software Engineer — Frontend • Backend • Cloud &amp; DevOps
          </p>
        </div>

        <div className="flex items-center gap-5">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-xl text-[var(--color-light)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
          <a
            href={RESUME_PATH}
            download
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-light)] hover:text-[var(--color-primary)] transition-colors"
          >
            <FiDownload aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <p className="container py-6 text-xs text-[var(--color-light)]">
          © {year} Mathew Adeyemi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
