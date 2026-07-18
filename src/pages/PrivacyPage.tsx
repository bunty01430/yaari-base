import { PageHero } from '../components/PageHero';
import { PageMeta } from '../components/PageMeta';
import { PageTransition } from '../motion';

export default function PrivacyPage() {
  return <PageTransition>
    <PageMeta title="Privacy Policy — Yaari24" description="Read how Yaari24 handles account, profile, conversation, device, and safety information." />
    <PageHero eyebrow="Last updated: July 18, 2026" title="Privacy," accent="in plain language." copy="This policy explains what information Yaari24 uses, why it is needed, and the choices available to you." tone="navy" />
    <article className="legal-page container">
      <section><h2>1. Information you provide</h2><p>When you create or use a Yaari24 account, you may provide registration details, profile information, a profile image, date of birth, country, status, and content you choose to send or publish. Content can include direct messages, room messages, images, voice messages, stickers, gifts, and reports.</p></section>
      <section><h2>2. Information created through use</h2><p>We process information needed to operate the service, including account identifiers, friendship state, room membership, presence, gift and Yaari-Coin activity, moderation records, app version, device information, network status, and diagnostic events.</p></section>
      <section><h2>3. How information is used</h2><p>Information is used to provide accounts, friendships, rooms, direct messaging, gifts, notifications, safety tools, customer support, fraud prevention, service reliability, and legal compliance. We do not sell personal information.</p></section>
      <section><h2>4. Conversations and visibility</h2><p>Room messages are visible to people participating in that room. Direct messages are visible to conversation participants and may be reviewed when included in a safety report or when required to investigate abuse, security, or legal issues.</p></section>
      <section><h2>5. Service providers</h2><p>Yaari24 may use infrastructure, storage, media delivery, notification, security, and hosting providers to operate the service. They receive only the information needed to perform those services and are expected to protect it.</p></section>
      <section><h2>6. Safety and legal disclosure</h2><p>Information may be preserved or disclosed when reasonably necessary to protect users, investigate abuse or fraud, enforce the Terms, respond to lawful requests, or protect the rights and safety of Yaari24 and the public.</p></section>
      <section><h2>7. Retention and deletion</h2><p>We retain information while your account is active and as needed for service, safety, dispute, and legal purposes. Account deletion controls are available through the app. Some records may remain for limited periods where required for security, fraud prevention, or legal obligations.</p></section>
      <section><h2>8. Your choices</h2><p>You can update profile information, manage privacy and notification settings, block users, leave rooms, report content, and request account deletion through the controls provided in Yaari24.</p></section>
      <section><h2>9. Children</h2><p>Yaari24 is not intended for children below the minimum age permitted by applicable law. Accounts found to violate age requirements may be restricted or removed.</p></section>
      <section><h2>10. Changes</h2><p>We may update this policy as the product or applicable requirements change. The updated date will be shown at the top of this page.</p></section>
    </article>
  </PageTransition>;
}
