import { useEffect, useRef, useState } from "react";
import { REVEALS } from "../data/projects.js";

/**
 * Full-bleed, scroll-pinned project reveal: the stage pins for one
 * viewport per project and each panel enters/exits based on scroll
 * fraction through the stage. Plain scroll math (no GSAP/Lenis) so
 * position: sticky behaves exactly like native scroll expects.
 *
 * Degrades to a plain stacked list of full-bleed sections on narrow
 * viewports and under prefers-reduced-motion.
 */
export default function ProjectReveal() {
  const stageRef = useRef(null);
  const panelRefs = useRef([]);
  const dotRefs = useRef([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const mq = window.matchMedia("(max-width: 760px)");
    setNarrow(mq.matches);
    const onChange = (e) => setNarrow(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || narrow) return;

    let raf = null;

    const render = () => {
      raf = null;
      const stage = stageRef.current;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      const progress = Math.min(Math.max(raw, 0), 1);
      const seg = 1 / REVEALS.length;
      const idx = Math.min(Math.floor(progress / seg), REVEALS.length - 1);
      const local = (progress - idx * seg) / seg;

      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        const img = panel.querySelector("img");
        if (i === idx) {
          const enter = Math.min(local / 0.22, 1);
          const exit = Math.max((local - 0.7) / 0.3, 0);
          panel.style.opacity = String(Math.min(enter, 1) * (1 - exit));
          panel.style.zIndex = "5";
          if (img) img.style.transform = `scale(${1.12 - enter * 0.07 + exit * 0.05})`;
          const copy = panel.querySelector(".reveal-copy");
          if (copy) copy.style.transform = `translateX(-50%) translateY(${(1 - enter) * 20}px)`;
        } else {
          panel.style.opacity = "0";
          panel.style.zIndex = "1";
        }
      });

      dotRefs.current.forEach((d, i) => {
        if (d) d.classList.toggle("is-active", i === idx);
      });
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [reducedMotion, narrow]);

  const showPinned = !reducedMotion && !narrow;

  return (
    <section className="reveal-section" id="projects">
      {showPinned && (
        <div className="stage" ref={stageRef} style={{ height: `${REVEALS.length * 100}vh` }}>
          <div className="reveal-pin">
            {REVEALS.map((project, i) => (
              <div
                className="reveal-panel"
                key={project.id}
                ref={(el) => (panelRefs.current[i] = el)}
              >
                <div className="reveal-media">
                  <img src={project.image} alt="" />
                </div>
                <PanelCopy project={project} index={i} />
              </div>
            ))}
          </div>
          <div className="reveal-dots" aria-hidden="true">
            {REVEALS.map((project, i) => (
              <span key={project.id} ref={(el) => (dotRefs.current[i] = el)} />
            ))}
          </div>
        </div>
      )}

      <div className="reveal-fallback">
        {REVEALS.map((project, i) => (
          <div className="reveal-static" key={project.id}>
            <div className="reveal-media">
              <img src={project.image} alt="" />
            </div>
            <PanelCopy project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

function PanelCopy({ project, index }) {
  return (
    <div className={`reveal-copy reveal-copy--${project.textColor === "dark" ? "dark" : "light"}`}>
      <div className="reveal-index">
        {String(index + 1).padStart(2, "0")} — {project.kicker}
      </div>
      <h2>{project.title}</h2>
      <p>{project.blurb}</p>
      <div className="tag-list">
        {project.tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap", justifyContent: "center" }}>
        {project.links.map((l) => (
          <a className="cta" href={l.href} key={l.href} target="_blank" rel="noopener noreferrer">
            {l.label} <span aria-hidden="true">&rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
}
