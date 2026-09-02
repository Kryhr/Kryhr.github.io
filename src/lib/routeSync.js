export const ROUTES = [
  { path: "/", id: "top" },
  { path: "/projects", id: "projects" },
  { path: "/about", id: "about" },
  { path: "/toolkit", id: "toolkit" },
  { path: "/school", id: "school" },
  { path: "/contact", id: "contact" }
];

export function pathForId(id) {
  return ROUTES.find((r) => r.id === id)?.path ?? "/";
}

export function idForPath(path) {
  return ROUTES.find((r) => r.path === path)?.id ?? "top";
}

/** Navigate to a section: smooth scroll + push a clean URL, no page reload. */
export function goToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  const path = pathForId(id);
  if (window.location.pathname !== path) {
    window.history.pushState(null, "", path);
  }
}

/**
 * Keeps the URL in sync with whichever section is currently in view
 * (no hash, real paths) and jumps to the right section on initial
 * load if the page was opened on a deep link like /projects.
 */
export function initRouteSync() {
  const sections = ROUTES.filter((r) => r.id !== "top")
    .map((r) => document.getElementById(r.id))
    .filter(Boolean);

  const initialId = idForPath(window.location.pathname);
  if (initialId !== "top") {
    const el = document.getElementById(initialId);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "auto", block: "start" }));
    }
  }

  let current = initialId;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.id;
      if (id !== current) {
        current = id;
        const path = pathForId(id);
        if (window.location.pathname !== path) {
          window.history.replaceState(null, "", path);
        }
      }
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((el) => observer.observe(el));

  const onPop = () => {
    const id = idForPath(window.location.pathname);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  window.addEventListener("popstate", onPop);

  return () => {
    observer.disconnect();
    window.removeEventListener("popstate", onPop);
  };
}
