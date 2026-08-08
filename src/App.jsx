import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ArticleDetails from "./pages/ArticleDetails";
import NotFound from "./pages/NotFound";

// Scrolls to top on every route change so case-study / article pages
// don't inherit the previous page's scroll position. Skipped when the
// new URL carries a hash (e.g. "/#projects") — that case is a same-page
// anchor jump handled by Navbar / Home instead.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <main id="main-content" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/writing/:slug" element={<ArticleDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
