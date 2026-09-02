import { motion } from "framer-motion";
import { scaleIn, viewportOnce } from "../lib/motion.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="contact-band"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
        >
          <div>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Contact</span>
            <h2>Let's talk</h2>
            <p>Best reached by email or on GitHub.</p>
          </div>
          <div className="contact-actions" style={{ marginTop: "var(--space-8)" }}>
            <a className="btn btn-primary" href="mailto:hainesdrew.h@gmail.com">Email me</a>
            <a className="btn" href="https://github.com/Kryhr" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
