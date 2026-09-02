/**
 * Shared Framer Motion timing/easing so every section's entrance draws
 * from the same scale, even though the shape of each entrance differs
 * (pop / slide-left / slide-right / cascade / scale) per motion-system.
 */

export const EASE = [0.2, 0, 0, 1];
export const EASE_BACK = [0.34, 1.56, 0.64, 1];

export const DURATION = {
  base: 0.4,
  slow: 0.6
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_BACK, delay: i * 0.08 }
  })
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: DURATION.slow, ease: EASE } }
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: DURATION.slow, ease: EASE } }
};

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE, delay: i * 0.06 }
  })
};

export const cascadeIn = {
  hidden: { opacity: 0, y: 30, rotate: -4 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: DURATION.base, ease: EASE_BACK, delay: i * 0.1 }
  })
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: DURATION.slow, ease: EASE } }
};

export const viewportOnce = { once: true, amount: 0.3 };
