import csaXeniaEntrance from "../assets/projects/csa-xenia.webp";
import disclosrShot from "../assets/projects/disclosr.png";

/**
 * REVEALS — the full-bleed scroll-pinned panels. Only projects with a
 * real photo/screenshot belong here; add `image` to promote something
 * into this treatment later.
 */
export const REVEALS = [
  {
    id: "csa-xenia",
    title: "csa-xenia",
    kicker: "school website redesign",
    blurb: "A full rebuild of my school's site, Community STEAM Academy — new campus, real photography, built from scratch with my own anti-slop skill library.",
    image: csaXeniaEntrance,
    tags: ["HTML / CSS", "Redesign"],
    links: [
      { label: "view live site", href: "https://andrewhaines.me/csa-xenia/" },
      { label: "source", href: "https://github.com/Kryhr/csa-xenia" }
    ]
  },
  {
    id: "disclosr",
    title: "disclosr",
    kicker: "local farm & producer directory",
    blurb: "Every listing sourced and linked — public donation filings, a business's own statements, and self-reported profiles, never guessed.",
    image: disclosrShot,
    tags: ["Directory", "Data"],
    links: [{ label: "disclosr.info", href: "https://disclosr.info" }]
  }
];

/**
 * Secondary work — code tools and skill libraries without a visual
 * identity of their own yet. Rendered as a simple list, not a reveal.
 */
export const OTHER_WORK = [
  {
    id: "mev-arbitrage-bot",
    title: "MEV-arbitrage-bot",
    blurb: "Scans Uniswap V2/V3 on Ethereum mainnet for cross-venue price gaps and estimates arbitrage profit after gas. Read-only — it never builds or sends a transaction.",
    tags: ["Python", "Web3", "Read-only"],
    links: [{ label: "source", href: "https://github.com/Kryhr/MEV-arbitrage-bot" }]
  },
  {
    id: "quant-trading-skills",
    title: "26-quant-trading-skills",
    blurb: "Claude Code skills for building trading algorithms that don't just look good in a backtest — lookahead-bias checks, fill realism, overfitting guards.",
    tags: ["Claude Code", "Quant"],
    links: [{ label: "source", href: "https://github.com/Kryhr/26-quant-trading-skills" }]
  },
  {
    id: "anti-slop-skills",
    title: "45-anti-slop-skills",
    blurb: "AI skills for building websites and apps that don't read as AI-generated. This redesign was built with them.",
    tags: ["Claude Code", "Design"],
    links: [{ label: "source", href: "https://github.com/Kryhr/45-anti-slop-skills" }]
  }
];

export const SCHOOL = [];
