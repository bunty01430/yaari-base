import { type ReactNode } from 'react';
import { Reveal } from '../motion';

export function PageHero({ eyebrow, title, accent, copy, children, tone = 'blue' }: { eyebrow: string; title: string; accent: string; copy: string; children?: ReactNode; tone?: 'blue' | 'orange' | 'navy' }) {
  return <section className={'page-hero tone-' + tone}><div className="page-hero-grid" aria-hidden="true" /><div className="container page-hero-inner"><Reveal><span className="eyebrow">{eyebrow}</span><h1>{title} <em>{accent}</em></h1><p>{copy}</p>{children}</Reveal></div></section>;
}
