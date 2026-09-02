import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";
import { SCHOOL as school } from "../data/projects.js";
import { slideUp, viewportOnce } from "../lib/motion.js";

export default function SchoolProjects() {
  return (
    <section id="school">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" style={{ justifyContent: "center" }}>School</span>
          <h2>School projects</h2>
          <p>Wired up and ready for when I'm back in school and have real work to put here.</p>
        </div>

        <div className="card-grid" style={{ marginTop: "var(--space-12)" }}>
          {school.length ? (
            school.map((p, i) => (
              <motion.div
                key={p.id}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={slideUp}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))
          ) : (
            <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={slideUp} style={{ gridColumn: "1 / -1" }}>
              <div className="card card-placeholder">
                <span className="status-tag">coming soon</span>
                <p className="card-blurb" style={{ marginTop: "12px" }}>
                  Nothing posted yet — this section is wired up and ready.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
