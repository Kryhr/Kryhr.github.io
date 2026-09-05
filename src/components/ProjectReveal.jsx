import { useEffect, useRef, useState } from "react";
import { REVEALS } from "../data/projects.js";

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (x) => { const c = clamp(x); return c * c * (3 - 2 * c); };

/**
 * Full-bleed, scroll-pinned project reveal. Unlike a hard panel-switch,
 * every project's opacity is a continuous function of scroll distance
 * from its own segment, so adjacent projects genuinely crossfade through
 * each other rather than cutting — the "one continuous flight, no cuts"
 * feel, without needing pre-rendered video (real photos + a slow zoom
 * do the job here).
 *
 * Degrades to a plain stacked list of full-bleed sections on narrow
 * viewports and under prefers-reduced-motion.
 */
export default function ProjectReveal() {
  const stageRef = useRef(null);
  const panelRefs = useRef([]);
  const dotRefs = useRef([]);
  const progressRef = useRef(null);
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
    const N = REVEALS.length;
    const seg = 1 / N;
    const FADE = seg * 0.4; // how much of a segment's width the crossfade spans

    const render = () => {
      raf = null;
      const stage = stageRef.current;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      const progress = clamp(raw, 0, 1);

      let activeIndex = 0;

      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        const start = i * seg;
        const end = start + seg;
        const local = clamp((progress - start) / seg, 0, 1);
        const inside = progress >= start && progress <= end;
        if (inside) activeIndex = i;

        let outside = 0;
        if (progress < start) outside = start - progress;
        else if (progress > end) outside = progress - end;

        const opacity = smooth(1 - outside / FADE);
        panel.style.opacity = String(opacity);
        panel.style.zIndex = inside ? "5" : "3";

        const img = panel.querySelector("img");
        if (img) img.style.transform = `scale(${1.1 - local * 0.08})`;

        const copy = panel.querySelector(".reveal-copy");
        if (copy) copy.style.transform = `translateY(${(0.5 - local) * 10}px)`;
      });

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      dotRefs.current.forEach((d, i) => {
        if (d) d.classList.toggle("is-active", i === activeIndex);
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
            <div className="reveal-progress" aria-hidden="true">
              <span ref={progressRef} />
            </div>
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
              <span key={project.id} className="reveal-dot" ref={(el) => (dotRefs.current[i] = el)}>
                <i />
                <em>{project.title}</em>
              </span>
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
    <div className="reveal-copy">
      <div className="reveal-index">
        {String(index + 1).padStart(2, "0")} · {project.kicker}
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
