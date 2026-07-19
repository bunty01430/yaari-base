import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { PageMeta } from '../components/PageMeta';
import { PageSubnav } from '../components/PageSubnav';
import { FeatureStories } from '../components/FeatureStories';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { DownloadCta } from '../components/DownloadCta';
import { PageTransition, Reveal } from '../motion';

export default function FeaturesPage() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  return <PageTransition>
    <PageMeta title="Features — Yaari24" description="Explore Yaari24 friends, rooms, direct messages, gifts, Yaari-Coin, and light and dark themes." />
    <PageHero eyebrow="The whole social scene" title="Features with" accent="actual personality." copy="Every screen is shaped around a real social moment—from finding your people to sending the perfect little gesture." tone="blue" />
    <PageSubnav items={[{ href: '#social', label: 'Friends & rooms' }, { href: '#themes', label: 'Themes' }, { href: '#screens', label: 'App screens' }]} />
    <section className="section" id="social"><div className="container"><FeatureStories full /></div></section>
    <section className="theme-lab section" id="themes">
      <div className="container theme-lab-grid">
        <Reveal className="theme-lab-copy"><span className="eyebrow">Apni vibe, apni theme</span><h2>Bright days.<br /><em>Deep nights.</em></h2><p>Warm cream when you want the energy. Calm navy when conversations run late.</p><div className="theme-switch" role="group" aria-label="Preview app theme"><button type="button" className={mode === 'light' ? 'active' : ''} onClick={() => setMode('light')} aria-pressed={mode === 'light'}>Light mode</button><button type="button" className={mode === 'dark' ? 'active' : ''} onClick={() => setMode('dark')} aria-pressed={mode === 'dark'}>Dark mode</button></div></Reveal>
        <Reveal className={'theme-preview ' + mode}><div className="theme-sun">LIGHT</div><img src={'/assets/screens/home-' + mode + '.webp'} alt={'Yaari24 home screen in ' + mode + ' mode'} width="840" height="1867" /></Reveal>
      </div>
    </section>
    <section className="section gallery-section" id="screens"><div className="container"><ScreenshotGallery /></div></section>
    <section className="section container"><DownloadCta compact /></section>
  </PageTransition>;
}
