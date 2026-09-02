import { motion } from "framer-motion";
import { slideUp, viewportOnce } from "../lib/motion.js";

export default function About() {
  return (
    <section id="about">
      <div className="container" style={{ maxWidth: "760px", textAlign: "center" }}>
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={slideUp}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>About</span>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: "var(--text-xl)", lineHeight: 1.35, marginBottom: "var(--space-8)" }}>
            I build quant trading systems and back them with backtests I actually trust — which
            mostly means trying to break my own results before anyone else can. Alongside that,
            web software: a directory site, a full school redesign, and the tools behind both.
          </p>
          <p style={{ color: "var(--ink-dim)", maxWidth: "56ch", margin: "0 auto" }}>
            Most of what I ship comes from AI skill libraries I've written myself — for trading
            strategy discipline, and for keeping the sites I build from looking like everyone else's.
            This one included.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={slideUp}
          custom={1}
          style={{ display: "flex", justifyContent: "center", gap: "var(--space-16)", marginTop: "var(--space-16)", flexWrap: "wrap" }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-xl)" }}>4</div>
            <div style={{ color: "var(--ink-dim)", fontSize: "var(--text-sm)" }}>projects shipped and live</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-xl)" }}>71</div>
            <div style={{ color: "var(--ink-dim)", fontSize: "var(--text-sm)" }}>Claude Code skills authored</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-xl)" }}>0</div>
            <div style={{ color: "var(--ink-dim)", fontSize: "var(--text-sm)" }}>stock templates used here</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
