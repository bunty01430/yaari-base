import { Link } from 'react-router-dom';
import { ArrowGlyph } from './Actions';
import { Reveal } from '../motion';

export function CommunityBanner() {
  return <section className="community-break">
    <div className="community-word" aria-hidden="true">YAARI</div>
    <div className="container community-layout">
      <Reveal className="community-copy">
        <span className="eyebrow">Made in India, made for everyone</span>
        <h2>Made for <em>every yaari.</em></h2>
        <p>Quick hellos, chaotic group chats, and conversations that stretch late into the night—this space celebrates all of it.</p>
        <Link className="text-link" to="/about">Meet the Yaari24 story <ArrowGlyph /></Link>
      </Reveal>
      <Reveal className="community-mascots" delay={.1}>
        <img src="/assets/mascots/community-mascots.webp" alt="Yaari24 boy and girl mascots in traditional Indian outfits welcoming the community" width="1536" height="1024" loading="lazy" />
      </Reveal>
    </div>
  </section>;
}
