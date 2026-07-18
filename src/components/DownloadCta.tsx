import { APK } from '../config';
import { DownloadButton, PlayStoreBadge } from './Actions';
import { Reveal } from '../motion';

export function DownloadCta({ compact = false }: { compact?: boolean }) {
  return <section className={'download-cta ' + (compact ? 'compact' : '')}>
    <div className="cta-orb orb-a" /><div className="cta-orb orb-b" />
    <Reveal className="cta-icon"><img src="/assets/brand/yaari24-icon.webp" alt="Yaari24 app icon" width="200" height="200" loading="lazy" /></Reveal>
    <Reveal className="cta-copy" delay={.06}><span className="eyebrow">Ready when you are</span><h2>Bas tap karo.<br /><em>Yaari starts here.</em></h2><p>Download the official Android APK directly from Yaari24.</p><div className="cta-actions"><DownloadButton inverse /><PlayStoreBadge inverse /></div><div className="cta-meta"><span>Android</span><i /><span>v{APK.version}</span><i /><span>{APK.size}</span></div></Reveal>
  </section>;
}
