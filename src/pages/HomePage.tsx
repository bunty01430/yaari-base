import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { APK } from "../config";
import {
  DownloadButton,
  PlayStoreBadge,
  ArrowGlyph,
} from "../components/Actions";
import { CommunityBanner } from "../components/CommunityBanner";
import { DownloadCta } from "../components/DownloadCta";
import { FeatureStories } from "../components/FeatureStories";
import { PageMeta } from "../components/PageMeta";
import { SafetyFlow } from "../components/SafetyFlow";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  FloatingSticker,
  KineticTicker,
  PageTransition,
  Reveal,
} from "../motion";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 130]);
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 70]);
  const spotlightX = useSpring(50, { stiffness: 80, damping: 20 });
  const spotlightY = useSpring(40, { stiffness: 80, damping: 20 });
  const spotlightLeft = useTransform(spotlightX, (value) => value + "%");
  const spotlightTop = useTransform(spotlightY, (value) => value + "%");
  const lightPhoneY = useTransform(phoneY, (value) => -value * 0.25);

  const moveSpotlight = (event: React.PointerEvent<HTMLElement>) => {
    if (reduced || !matchMedia("(pointer:fine)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    spotlightX.set(((event.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <PageTransition>
      <PageMeta
        title="Yaari24 — Your people. Your rooms. Your vibe."
        description="Meet friends, join live rooms, chat privately, and share gifts on Yaari24. Download the official Android APK."
      />
      <section
        className="home-hero"
        ref={heroRef}
        onPointerMove={moveSpotlight}
      >
        <m.div
          className="pointer-glow"
          style={{ left: spotlightLeft, top: spotlightTop }}
        />
        <div className="hero-noise" />
        <div className="container hero-stage">
          <div className="hero-copy">
            <m.span
              className="hero-kicker"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Social, but apna sa.
            </m.span>
            <h1>
              <m.span
                initial={{ y: 70, rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7 }}
              >
                Your people.
              </m.span>
              <m.span
                initial={{ y: 70, rotate: -2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
              >
                Your rooms.
              </m.span>
              <m.span
                className="gradient-text"
                initial={{ y: 70 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
              >
                Your vibe.
              </m.span>
            </h1>
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Friends online. Rooms buzzing. DMs that never feel dry. Yaari24
              puts every conversation in one vibrant place.
            </m.p>
            <m.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <DownloadButton destination="download-page" label="Download" />
              <PlayStoreBadge />
            </m.div>
            <div className="hero-meta">
              <span>Android</span>
              <i />
              <span>v{APK.version}</span>
              <i />
              <span>{APK.arm64.size}</span>
            </div>
            <Link className="hero-text-link" to="/features">
              See what’s inside <ArrowGlyph />
            </Link>
          </div>
          <div
            className="hero-collage"
            aria-label="Yaari24 app and mascot collage"
          >
            <div className="collage-blob blob-one" />
            <div className="collage-blob blob-two" />
            <m.img
              className="hero-mascots"
              style={{ y: mascotY }}
              src="/assets/mascots/chatting-mascots.webp"
              alt="Yaari24 mascots chatting together on their phones"
              width="853"
              height="1843"
              fetchPriority="high"
            />
            <div className="mascot-prompt">
              <strong>Kya scene?</strong>
              <span>Your people are already here.</span>
            </div>
            <m.div
              className="hero-phone phone-dark"
              style={{ y: phoneY, rotate: 8 }}
            >
              <img
                src="/assets/screens/dm-dark.webp"
                alt="Yaari24 dark-mode direct message screen"
                width="840"
                height="1867"
                fetchPriority="high"
              />
            </m.div>
            <m.div
              className="hero-phone phone-light"
              style={{ y: lightPhoneY, rotate: -8 }}
            >
              <img
                src="/assets/screens/home-light.webp"
                alt="Yaari24 light-mode home screen"
                width="840"
                height="1867"
                fetchPriority="high"
              />
            </m.div>
            <FloatingSticker className="scene-sticker">
              SCENE
              <br />
              ON?
            </FloatingSticker>
            <FloatingSticker className="live-sticker" delay={0.7}>
              <i /> 24 LIVE
            </FloatingSticker>
            <FloatingSticker className="message-sticker" delay={1.2}>
              Arey, aa jao!<span>↗</span>
            </FloatingSticker>
          </div>
        </div>
        <div className="hero-side-label">YAARI24 / ANDROID / 2026</div>
      </section>

      <KineticTicker />

      <section className="section story-section">
        <div className="container">
          <Reveal className="section-intro">
            <span className="eyebrow">More than another social app</span>
            <h2>
              Every kind of <em>conversation.</em>
              <br />
              One unmistakable vibe.
            </h2>
            <p>
              No generic feeds. Yaari24 is built around the moments that
              actually bring people closer.
            </p>
          </Reveal>
          <FeatureStories />
        </div>
      </section>

      <CommunityBanner />

      <section className="section gallery-section">
        <div className="container">
          <ScreenshotGallery limit={7} />
          <div className="gallery-more">
            <Link className="text-link" to="/features">
              Explore every feature <ArrowGlyph />
            </Link>
          </div>
        </div>
      </section>

      <section className="section safety-teaser">
        <div className="container safety-teaser-grid">
          <Reveal className="safety-teaser-copy">
            <span className="eyebrow">Good vibes need real controls</span>
            <h2>
              Fun first.
              <br />
              <em>Safety always.</em>
            </h2>
            <p>
              Reporting, blocking, room moderation, and account controls are
              part of the experience—not hidden afterthoughts.
            </p>
            <Link className="text-link" to="/safety">
              See how safety works <ArrowGlyph />
            </Link>
          </Reveal>
          <SafetyFlow compact />
        </div>
      </section>

      <section className="section container">
        <DownloadCta />
      </section>
    </PageTransition>
  );
}
