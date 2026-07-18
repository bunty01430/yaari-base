import { PageHero } from '../components/PageHero';
import { PageMeta } from '../components/PageMeta';
import { DownloadCta } from '../components/DownloadCta';
import { PageTransition, Reveal } from '../motion';

export default function AboutPage() {
  return <PageTransition>
    <PageMeta title="About — Yaari24" description="Meet the spirit, mascots, and community values behind Yaari24." />
    <PageHero eyebrow="A social space with an Indian heartbeat" title="The internet is big." accent="Yaari makes it feel close." copy="Yaari24 is built around a simple idea: technology should make friendship feel warmer, more expressive, and more alive." tone="orange" />
    <section className="about-story section"><div className="container about-story-grid"><Reveal className="about-art"><div className="about-bubble">Hello! Namaste! Kya scene?</div><img src="/assets/mascots/community-mascots.webp" alt="Yaari24 mascots in traditional Indian outfits" width="1536" height="1024" /></Reveal><Reveal className="about-copy" delay={.08}><span className="eyebrow">Made for every yaari</span><h2>Familiar warmth.<br /><em>A fresh digital home.</em></h2><p>Our mascots carry that spirit: welcoming, expressive, a little playful, and always ready to bring someone into the conversation.</p><p>Yaari24 mixes rooms, friends, private chat, gifts, and identity into an experience that feels rooted without feeling old.</p></Reveal></div></section>
    <section className="values-section"><div className="container values-grid"><Reveal><strong>01</strong><h2>People over metrics</h2><p>Conversation is the product. Counts and coins never replace genuine connection.</p></Reveal><Reveal delay={.06}><strong>02</strong><h2>Expression without clutter</h2><p>Color, gifts, themes, and personality—without turning every screen into noise.</p></Reveal><Reveal delay={.12}><strong>03</strong><h2>Fun with boundaries</h2><p>The most alive communities still need reporting, moderation, and personal control.</p></Reveal></div></section>
    <section className="about-blue"><div className="container"><Reveal><img src="/assets/mascots/chatting-mascots.webp" alt="Yaari24 mascots chatting with phones" width="853" height="1843" loading="lazy" /><div><span>From “hey”</span><strong>to yaari.</strong><p>That is the whole point.</p></div></Reveal></div></section>
    <section className="section container"><DownloadCta compact /></section>
  </PageTransition>;
}
