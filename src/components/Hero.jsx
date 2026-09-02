import { motion } from "framer-motion";
import { popIn } from "../lib/motion.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p className="hero-eyebrow" custom={0} variants={popIn}>
          Andrew Haines
        </motion.p>
        <motion.h1 custom={1} variants={popIn}>
          Built. Shipped.<br />
          <span className="accent">Linked.</span>
        </motion.h1>
        <motion.p className="hero-sub" custom={2} variants={popIn}>
          Trading systems, web software, and everything else I've actually made — every project ahead is real.
        </motion.p>
        <motion.div className="hero-actions" custom={3} variants={popIn}>
          <a href="#projects" className="btn btn-primary">View projects</a>
          <a href="#contact" className="btn">Get in touch</a>
        </motion.div>
        <motion.div className="scroll-cue" custom={4} variants={popIn}>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
            <path d="M8 1v18M8 19l-6-6M8 19l6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
