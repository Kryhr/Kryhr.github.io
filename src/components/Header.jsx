import { useEffect, useState } from "react";
import { goToSection } from "../lib/routeSync.js";

const LINKS = [
  { id: "projects", path: "/projects", label: "Projects" },
  { id: "about", path: "/about", label: "About" },
  { id: "toolkit", path: "/toolkit", label: "Toolkit" },
  { id: "school", path: "/school", label: "School" },
  { id: "contact", path: "/contact", label: "Contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    goToSection(id);
    setOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container">
        <a href="/" className="wordmark" onClick={(e) => go(e, "top")}>
          andrewhaines<span className="dot">.me</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>

        <nav className={`primary-nav${open ? " is-open" : ""}`} id="primary-nav" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.id} href={l.path} onClick={(e) => go(e, l.id)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
