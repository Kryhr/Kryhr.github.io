import { motion } from "framer-motion";
import { slideUp, viewportOnce } from "../lib/motion.js";

export default function About() {
  return (
    <section id="about">
      <div className="container" style={{ maxWidth: "760px", textAlign: "center" }}>
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={slideUp}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>About</span>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: "var(--text-xl)", lineHeight: 1.35, marginBottom: "var(--space-8)" }}>
            I build trading algorithms and back them with backtests I actually trust, which
            mostly means trying to break my own results before anyone else can. Alongside that,
            web software: a directory site, a full school redesign, and the tools behind both.
          </p>
          <p style={{ color: "var(--ink-dim)", maxWidth: "56ch", margin: "0 auto" }}>
            Most of what I ship comes from AI skill libraries I've written myself, for trading
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
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-xl)" }}>6</div>
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

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={slideUp}
          custom={2}
          style={{ marginTop: "var(--space-16)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
        >
          <span className="eyebrow" style={{ justifyContent: "center" }}>Currently working on</span>

          <div className="card" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <span className="status-tag">in progress</span>
              <h3 style={{ margin: 0 }}>Algorithmic-Crypto-Analysis</h3>
            </div>
            <p className="card-blurb">
              Finding exploitable microstructure alpha in less-liquid mid-cap coins (ALGO, ICP, QNT
              to start): real order-book imbalance and trade-print patterns, not just price/volume.
            </p>
            <div className="card-links">
              <a href="https://github.com/Kryhr/Algorithmic-Crypto-Analysis-" target="_blank" rel="noopener noreferrer">
                source <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="card" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <span className="status-tag">in progress</span>
              <h3 style={{ margin: 0 }}>AI-Prompts</h3>
            </div>
            <p className="card-blurb">
              An educational study on why and how AI models can be jailbroken. Not a how-to: a
              record of what worked, what didn't, and why safety refusals held or failed against
              different models and prompt styles.
            </p>
            <div className="card-links">
              <a href="https://github.com/Kryhr/AI-Prompts" target="_blank" rel="noopener noreferrer">
                source <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
