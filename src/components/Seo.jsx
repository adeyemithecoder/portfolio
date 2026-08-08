import { useEffect } from "react";

const SITE_NAME = "Mathew Adeyemi — Full-Stack Software Engineer";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Lightweight, dependency-free per-page SEO. No react-helmet needed —
 * this is a client-side React/Vite app, not Next.js, so we manage
 * document.title and meta tags directly.
 */
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    if (description) {
      setMeta("description", description);
      setMeta("og:title", title ? `${title} | ${SITE_NAME}` : SITE_NAME, "property");
      setMeta("og:description", description, "property");
      setMeta("og:type", "website", "property");
    }
  }, [title, description]);

  return null;
}
