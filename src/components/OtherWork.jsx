import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";
import { OTHER_WORK } from "../data/projects.js";
import { slideUp, viewportOnce } from "../lib/motion.js";

export default function OtherWork() {
  return (
    <section id="toolkit">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Other work</span>
          <h2>Tools and skill libraries</h2>
          <p>Code without a visual identity of its own yet: the trading tool and the two Claude Code skill libraries everything else here was built with.</p>
        </div>

        <div className="card-grid" style={{ marginTop: "var(--space-12)" }}>
          {OTHER_WORK.map((p, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
