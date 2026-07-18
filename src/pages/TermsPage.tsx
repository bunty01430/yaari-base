import { PageHero } from '../components/PageHero';
import { PageMeta } from '../components/PageMeta';
import { PageTransition } from '../motion';

export default function TermsPage() {
  return <PageTransition>
    <PageMeta title="Terms of Service — Yaari24" description="Read the Yaari24 Terms of Service and community use requirements." />
    <PageHero eyebrow="Effective: July 18, 2026" title="The rules of" accent="the room." copy="These terms keep expectations clear so Yaari24 can stay expressive, welcoming, and safe." tone="blue" />
    <article className="legal-page container">
      <section><h2>1. Accepting these terms</h2><p>By creating an account or using Yaari24, you agree to these Terms and the Privacy Policy. If you do not agree, do not use the service.</p></section>
      <section><h2>2. Your account</h2><p>Provide accurate registration information, protect your login details, and do not transfer or sell your account. You are responsible for activity performed through your account unless you promptly report unauthorized access.</p></section>
      <section><h2>3. Respect the community</h2><p>Do not harass, threaten, exploit, impersonate, deceive, or expose another person’s private information. Hate, sexual exploitation, non-consensual sexual content, illegal content, malware, scams, and conduct that creates a credible safety risk are prohibited.</p></section>
      <section><h2>4. Rooms and moderation</h2><p>Room owners and moderators may manage access and participation within their rooms. Yaari24 may review reports and take action including warnings, content restriction, room restriction, suspension, or account removal.</p></section>
      <section><h2>5. Your content</h2><p>You keep ownership of content you create. You grant Yaari24 the limited permission needed to store, transmit, display, and process that content to operate, secure, and improve the service.</p></section>
      <section><h2>6. Gifts and Yaari-Coin</h2><p>Yaari-Coin and virtual gifts are digital service features, not cash, bank deposits, or transferable property. Availability, balances, and gift catalogs may change. Do not attempt unauthorized transactions, manipulation, or resale.</p></section>
      <section><h2>7. Intellectual property</h2><p>The Yaari24 name, logo, mascots, interface, artwork, and software are protected by applicable intellectual property laws. These Terms do not grant permission to copy or commercially exploit them.</p></section>
      <section><h2>8. Service availability</h2><p>We work to keep Yaari24 available but do not guarantee uninterrupted operation. Features may change, pause, or end for maintenance, safety, legal, or product reasons.</p></section>
      <section><h2>9. Enforcement and termination</h2><p>We may limit or terminate access when these Terms are violated, the service is abused, or action is reasonably necessary to protect users, Yaari24, or the public. You may stop using the service and request account deletion at any time.</p></section>
      <section><h2>10. Changes to these terms</h2><p>We may update these Terms as the service evolves. Continued use after an update means you accept the revised Terms where permitted by law.</p></section>
    </article>
  </PageTransition>;
}
