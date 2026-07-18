import { type ReactNode, useRef } from 'react';
import { m, useInView, useReducedMotion } from 'motion/react';

export const easing = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return <m.div className="page-transition" initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }} transition={{ duration: reduced ? 0.12 : 0.42, ease: easing }}>{children}</m.div>;
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <m.div className={className} initial={reduced ? { opacity: 0 } : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduced ? 0.15 : 0.62, delay: reduced ? 0 : delay, ease: easing }}>{children}</m.div>;
}

export function KineticTicker() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1 });
  const words = ['ROOMS OPEN', 'FRIENDS ONLINE', 'GIFTS SENT', 'SCENE ON?'];
  return <div className="ticker" ref={ref} aria-label={words.join(', ')}><m.div className="ticker-track" animate={!reduced && inView ? { x: ['0%', '-50%'] } : undefined} transition={{ duration: 22, ease: 'linear', repeat: Infinity }}>{[...words, ...words].map((word, index) => <span key={word + index}>{word}<i /></span>)}</m.div></div>;
}

export function FloatingSticker({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <m.div className={'floating-sticker ' + className} animate={reduced ? undefined : { y: [0, -8, 0], rotate: [-2, 2, -2] }} transition={{ duration: 4.5, delay, repeat: Infinity, ease: 'easeInOut' }}>{children}</m.div>;
}
