import { useState } from "react";
import { motion } from "framer-motion";
import { SCHOOL_PROJECTS, SCHOOL_YEARS } from "../data/schoolProjects.js";
import { slideUp, viewportOnce } from "../lib/motion.js";

function Block({ block }) {
  if (typeof block === "string") {
    return <p style={{ color: "var(--ink-dim)", lineHeight: 1.65, marginBottom: "var(--space-4)" }}>{block}</p>;
  }
  if (block.list) {
    return (
      <ul style={{ margin: "0 0 var(--space-4)", paddingLeft: "1.2em", color: "var(--ink-dim)", lineHeight: 1.65 }}>
        {block.list.map((item, i) => (
          <li key={i} style={{ marginBottom: "4px" }}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p style={{ color: "var(--ink-dim)", lineHeight: 1.65, marginBottom: "var(--space-4)" }}>
      <strong style={{ color: "var(--ink)" }}>{block.label}:</strong> {block.text}
    </p>
  );
}

export default function SchoolProjects() {
  const [activeYear, setActiveYear] = useState(SCHOOL_YEARS[0]);
  const yearProjects = SCHOOL_PROJECTS.filter((p) => p.year === activeYear);

  const [activeId, setActiveId] = useState(yearProjects[0]?.id ?? null);
  const [activeSection, setActiveSection] = useState(0);

  const project = yearProjects.find((p) => p.id === activeId) ?? yearProjects[0];

  const selectYear = (year) => {
    setActiveYear(year);
    const first = SCHOOL_PROJECTS.find((p) => p.year === year);
    setActiveId(first?.id ?? null);
    setActiveSection(0);
  };

  const selectProject = (id) => {
    setActiveId(id);
    setActiveSection(0);
  };

  return (
    <section id="school">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" style={{ justifyContent: "center" }}>School</span>
          <h2>Community STEAM Academy portfolio</h2>
          <p>Pick a school year, then a project, then flip through its sections.</p>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={slideUp} style={{ marginTop: "var(--space-12)" }}>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", marginBottom: "var(--space-6)" }}>
            {SCHOOL_YEARS.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => selectYear(year)}
                className="btn"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  background: year === activeYear ? "var(--ink)" : "transparent",
                  color: year === activeYear ? "var(--paper)" : "var(--ink)"
                }}
              >
                {year}
              </button>
            ))}
          </div>

          {yearProjects.length === 0 ? (
            <div className="card card-placeholder" style={{ maxWidth: "820px", margin: "0 auto" }}>
              <span className="status-tag">coming soon</span>
              <p className="card-blurb" style={{ marginTop: "12px" }}>
                The {activeYear} school year hasn't started yet, real projects go here once it does.
              </p>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", justifyContent: "center", marginBottom: "var(--space-8)" }}>
                {yearProjects.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => selectProject(p.id)}
                    className="tag"
                    style={{
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      background: p.id === activeId ? "var(--ink)" : "transparent",
                      color: p.id === activeId ? "var(--paper)" : "var(--ink-dim)",
                      borderColor: p.id === activeId ? "var(--ink)" : "var(--line-strong)",
                      padding: "var(--space-2) var(--space-4)"
                    }}
                  >
                    {p.course}
                  </button>
                ))}
              </div>

              <div className="card" style={{ maxWidth: "820px", margin: "0 auto" }}>
                <h3 style={{ fontSize: "var(--text-xl)" }}>{project.title}</h3>

                {project.image && (
                  <figure style={{ margin: 0 }}>
                    <img
                      src={project.image}
                      alt={project.imageCaption || ""}
                      style={{ width: "100%", borderRadius: "var(--radius-sm)", border: "1px solid var(--line)" }}
                    />
                    {project.imageCaption && (
                      <figcaption style={{ fontSize: "var(--text-xs)", color: "var(--ink-faint)", marginTop: "6px" }}>
                        {project.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", borderBottom: "1px solid var(--line)", paddingBottom: "var(--space-4)" }}>
                  {project.sections.map((s, i) => (
                    <button
                      key={s.heading}
                      type="button"
                      onClick={() => setActiveSection(i)}
                      style={{
                        cursor: "pointer",
                        border: "none",
                        background: "none",
                        padding: "var(--space-1) var(--space-2)",
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        color: i === activeSection ? "var(--ink)" : "var(--ink-faint)",
                        borderBottom: i === activeSection ? "2px solid var(--accent)" : "2px solid transparent"
                      }}
                    >
                      {s.heading}
                    </button>
                  ))}
                </div>

                <div>
                  {project.sections[activeSection].body.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
