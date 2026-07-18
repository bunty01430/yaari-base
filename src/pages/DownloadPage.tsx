import { useState } from 'react';
import { APK, SUPPORT_EMAIL } from '../config';
import { DownloadButton, PlayStoreBadge } from '../components/Actions';
import { PageHero } from '../components/PageHero';
import { PageMeta } from '../components/PageMeta';
import { PageTransition, Reveal } from '../motion';

const faqs = [
  ['Why is this not on Google Play yet?', 'The Google Play release is coming soon. Until then, the official APK is the direct Android installation method.'],
  ['Android warned me about the file. Is that normal?', 'Android may ask you to allow installs from your browser because the APK comes directly from Yaari24 rather than Google Play. Only continue when you downloaded it from yaari24.online.'],
  ['Will installing an update remove my account?', 'Installing a newer official APK over the existing app should update the app without removing your Yaari24 account.'],
  ['Where can I verify the file?', 'Compare the downloaded APK SHA-256 fingerprint with the value shown on this page before installing.'],
];

export default function DownloadPage() {
  const [copied, setCopied] = useState(false);
  const copyChecksum = async () => {
    await navigator.clipboard.writeText(APK.sha256);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return <PageTransition>
    <PageMeta title="Download Yaari24 for Android" description="Download the official Yaari24 Android APK, verify its checksum, and follow the installation guide." />
    <PageHero eyebrow="Official Android download" title="Bas tap karo." accent="Yaari starts here." copy="Download the APK directly, verify the file, and get into the conversation." tone="orange"><div className="page-hero-actions"><DownloadButton /><PlayStoreBadge /></div></PageHero>
    <section className="section download-details-section"><div className="container download-details-grid">
      <Reveal className="download-product"><img src="/assets/brand/yaari24-icon.webp" alt="Yaari24 app icon" width="220" height="220" /><div><span>YAARI24 FOR ANDROID</span><h2>Version {APK.version}</h2><p>Official direct APK</p></div></Reveal>
      <Reveal className="release-card" delay={.08}><div><small>Version</small><strong>{APK.version}</strong></div><div><small>Download size</small><strong>{APK.size}</strong></div><div className="checksum"><small>SHA-256</small><code>{APK.sha256}</code><button type="button" onClick={copyChecksum}>{copied ? 'Copied' : 'Copy checksum'}</button></div></Reveal>
    </div></section>
    <section className="install-section section"><div className="container"><Reveal className="section-intro"><span className="eyebrow">Three quick steps</span><h2>Download. Allow. <em>Join.</em></h2></Reveal><ol className="install-steps"><li><span>01</span><img src="/assets/app-icons/store.webp" alt="" width="66" height="66" /><div><strong>Download the APK</strong><p>Use the official button on this page. If it says unavailable, the release URL has not been configured yet.</p></div></li><li><span>02</span><img src="/assets/app-icons/lock.webp" alt="" width="66" height="66" /><div><strong>Allow this installation</strong><p>Android may ask permission for your browser to install this app. Approve it only for this download.</p></div></li><li><span>03</span><img src="/assets/app-icons/success.webp" alt="" width="66" height="66" /><div><strong>Open Yaari24</strong><p>Launch the app, sign in or create your account, and say hello.</p></div></li></ol></div></section>
    <section className="faq-section section"><div className="container faq-grid"><Reveal><span className="eyebrow">Need a hand?</span><h2>APK questions,<br /><em>answered.</em></h2>{SUPPORT_EMAIL ? <a className="support-link" href={'mailto:' + SUPPORT_EMAIL}>Still stuck? Email {SUPPORT_EMAIL}</a> : <p className="support-note">Support contact will appear here when configured.</p>}</Reveal><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
  </PageTransition>;
}
