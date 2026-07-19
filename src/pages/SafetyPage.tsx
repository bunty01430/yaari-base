import { PageHero } from '../components/PageHero';
import { PageMeta } from '../components/PageMeta';
import { PageSubnav } from '../components/PageSubnav';
import { SafetyFlow } from '../components/SafetyFlow';
import { DownloadCta } from '../components/DownloadCta';
import { PageTransition, Reveal } from '../motion';

const principles = [
  { icon: '/assets/app-icons/report.webp', title: 'Report the moment', copy: 'Flag the message or behavior that crossed the line so reviewers get useful context.' },
  { icon: '/assets/app-icons/block.webp', title: 'Choose your boundaries', copy: 'Block unwanted contact and take control of who gets access to your attention.' },
  { icon: '/assets/app-icons/moderation.webp', title: 'Rooms need hosts', copy: 'Moderation controls help room teams respond when a live conversation stops feeling welcoming.' },
  { icon: '/assets/app-icons/lock.webp', title: 'Your account, your call', copy: 'Privacy, profile, and account deletion controls stay clear and close at hand.' },
];

export default function SafetyPage() {
  return <PageTransition>
    <PageMeta title="Safety — Yaari24" description="Learn about Yaari24 reporting, blocking, moderation, privacy, and account controls." />
    <PageHero eyebrow="Good vibes. Real controls." title="Built for fun." accent="Ready for real life." copy="Community should feel spontaneous, not unsafe. Yaari24 pairs expressive conversation with practical controls you can understand." tone="navy" />
    <PageSubnav items={[{ href: '#controls', label: 'Safety controls' }, { href: '#principles', label: 'How it works' }, { href: '#rules', label: 'Community rules' }]} />
    <section className="section safety-main" id="controls"><div className="container safety-main-grid"><Reveal><span className="eyebrow">Safety in the conversation</span><h2>See it. Act on it.<br /><em>Keep moving.</em></h2><p>The controls live where you need them. Report a specific message, block unwanted contact, or let room moderators step in.</p></Reveal><SafetyFlow /></div></section>
    <section className="section" id="principles"><div className="container"><div className="safety-principles">{principles.map((item, index) => <Reveal className="principle" key={item.title} delay={index * .06}><span className="principle-number">0{index + 1}</span><img src={item.icon} alt="" width="76" height="76" loading="lazy" /><h2>{item.title}</h2><p>{item.copy}</p></Reveal>)}</div></div></section>
    <section className="community-rules" id="rules"><div className="container rules-grid"><Reveal><span className="eyebrow">The simple rule</span><h2>Bring the energy.<br /><em>Respect the room.</em></h2></Reveal><Reveal delay={.1}><p>Be yourself without making someone else feel smaller. No harassment, hate, impersonation, unwanted sexual content, or behavior that puts people at risk.</p><p>Reports are reviewed in context. Serious or repeated violations can lead to room restrictions or account action.</p></Reveal></div></section>
    <section className="section container"><DownloadCta compact /></section>
  </PageTransition>;
}
