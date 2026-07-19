import { useEffect, useRef, useState } from "react";
import { APK, SUPPORT_EMAIL, type ApkArchitecture } from "../config";
import { DownloadButton, PlayStoreBadge } from "../components/Actions";
import { PageHero } from "../components/PageHero";
import { PageSubnav } from "../components/PageSubnav";
import { PageMeta } from "../components/PageMeta";
import { PageTransition, Reveal } from "../motion";

const faqs = [
  [
    "Which APK should I choose?",
    "Choose 64-bit for most Android phones. Use the 32-bit download only for an older phone that reports armeabi-v7a or if Android says the 64-bit APK is incompatible.",
  ],
  [
    "Why must v1.0.0 users uninstall first?",
    "Version 1.0.1 starts Yaari24’s permanent production signing identity. The earlier v1.0.0 test release used a different key, so Android cannot update it in place.",
  ],
  [
    "Will uninstalling remove my account?",
    "Uninstalling clears local app data. Your server-backed Yaari24 account remains available, so sign in again after installing v1.0.1.",
  ],
  [
    "Why is this not on Google Play yet?",
    "The Google Play release is coming soon. Until then, the official APKs are the direct Android installation method.",
  ],
  [
    "Android warned me about the file. Is that normal?",
    "Android may ask you to allow installs from your browser because the APK comes directly from Yaari24 rather than Google Play. Only continue when you downloaded it from yaari24.online.",
  ],
  [
    "Where can I verify the file?",
    "Compare the downloaded APK SHA-256 fingerprint with the matching architecture value shown on this page before installing.",
  ],
];

type CopyStatus = "idle" | "copied" | "error";

function ReleaseCard({
  architecture,
  title,
  copy,
}: {
  architecture: ApkArchitecture;
  title: string;
  copy: string;
}) {
  const release = APK[architecture];
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyChecksum = async () => {
    if (!release.sha256) return;
    window.clearTimeout(resetTimer.current);
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(release.sha256);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    resetTimer.current = window.setTimeout(() => setCopyStatus("idle"), 3000);
  };

  const statusMessage =
    copyStatus === "copied"
      ? "Checksum copied."
      : copyStatus === "error"
        ? "Copy failed. Select the checksum and copy it manually."
        : "";

  return (
    <Reveal
      className={`architecture-card ${architecture === "arm64" ? "recommended" : ""}`}
    >
      <div className="architecture-card-head">
        <div>
          <span>
            {architecture === "arm64" ? "RECOMMENDED" : "OLDER DEVICES"}
          </span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </div>
        <strong>{release.architecture}</strong>
      </div>
      <DownloadButton
        destination="apk"
        architecture={architecture}
        label={
          architecture === "arm64"
            ? "Download 64-bit APK"
            : "Download 32-bit APK"
        }
      />
      <dl>
        <div>
          <dt>Version</dt>
          <dd>{APK.version}</dd>
        </div>
        <div>
          <dt>Size</dt>
          <dd>{release.size}</dd>
        </div>
      </dl>
      <div className="architecture-checksum">
        <small>SHA-256</small>
        <code>{release.sha256 || "Published with the release"}</code>
        <button type="button" onClick={copyChecksum} disabled={!release.sha256}>
          {copyStatus === "copied"
            ? "Copied"
            : copyStatus === "error"
              ? "Try again"
              : "Copy checksum"}
        </button>
        <span
          className={"copy-status " + (copyStatus === "error" ? "error" : "")}
          aria-live="polite"
        >
          {statusMessage}
        </span>
      </div>
    </Reveal>
  );
}

export default function DownloadPage() {
  return (
    <PageTransition>
      <PageMeta
        title="Download Yaari24 for Android"
        description="Download the official Yaari24 Android APK for your phone architecture, verify its checksum, and follow the installation guide."
      />
      <PageHero
        eyebrow="Official Android download"
        title="Pick your phone."
        accent="Join your yaari."
        copy="Most Android phones use the recommended 64-bit build. A smaller 32-bit build is available for older devices."
        tone="orange"
      >
        <div className="page-hero-actions">
          <DownloadButton
            destination="apk"
            architecture="arm64"
            label="Download 64-bit APK"
            inverse
          />
          <PlayStoreBadge inverse />
        </div>
        <div className="release-trust" aria-label="Release verification">
          <span>Official GitHub release</span>
          <span>Production signed</span>
          <span>SHA-256 published</span>
        </div>
      </PageHero>
      <PageSubnav
        items={[
          { href: "#builds", label: "Choose a build" },
          { href: "#install", label: "Install guide" },
          { href: "#faq", label: "APK help" },
        ]}
      />
      <section className="migration-alert">
        <div className="container">
          <strong>Updating from v1.0.0?</strong>
          <p>
            Uninstall v1.0.0 before installing v1.0.1. This one-time step moves
            Yaari24 from its test signing key to the permanent production key.
            Uninstalling clears local app data, but your server-backed account
            remains available.
          </p>
        </div>
      </section>
      <section className="section architecture-section" id="builds">
        <div className="container">
          <Reveal className="section-intro">
            <span className="eyebrow">Choose your build</span>
            <h2>
              Small APK.
              <br />
              <em>Right architecture.</em>
            </h2>
            <p>
              No unreliable browser guessing—choose the clearly labelled build
              for your phone.
            </p>
          </Reveal>
          <div className="architecture-grid">
            <ReleaseCard
              architecture="arm64"
              title="Most Android phones"
              copy="For modern 64-bit phones using arm64-v8a."
            />
            <ReleaseCard
              architecture="armv7"
              title="Older Android phones"
              copy="For older 32-bit phones using armeabi-v7a."
            />
          </div>
          <Reveal className="architecture-help">
            <strong>Not sure?</strong>
            <p>
              Choose 64-bit first. If Android reports that the app is
              incompatible, return here and use the 32-bit build.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="install-section section" id="install">
        <div className="container">
          <Reveal className="section-intro">
            <span className="eyebrow">Three quick steps</span>
            <h2>
              Download. Allow. <em>Join.</em>
            </h2>
          </Reveal>
          <ol className="install-steps">
            <li>
              <span>01</span>
              <img
                src="/assets/app-icons/store.webp"
                alt=""
                width="66"
                height="66"
                loading="lazy"
              />
              <div>
                <strong>Choose your APK</strong>
                <p>
                  Use 64-bit for most phones, or the labelled 32-bit build for
                  an older device.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <img
                src="/assets/app-icons/lock.webp"
                alt=""
                width="66"
                height="66"
                loading="lazy"
              />
              <div>
                <strong>Allow this installation</strong>
                <p>
                  Android may ask permission for your browser to install this
                  app. Approve it only for this download.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <img
                src="/assets/app-icons/success.webp"
                alt=""
                width="66"
                height="66"
                loading="lazy"
              />
              <div>
                <strong>Open Yaari24</strong>
                <p>
                  Launch the app, sign in or create your account, and say hello.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="faq-section section" id="faq">
        <div className="container faq-grid">
          <Reveal>
            <span className="eyebrow">Need a hand?</span>
            <h2>
              APK questions,
              <br />
              <em>answered.</em>
            </h2>
            {SUPPORT_EMAIL ? (
              <a className="support-link" href={"mailto:" + SUPPORT_EMAIL}>
                Still stuck? Email {SUPPORT_EMAIL}
              </a>
            ) : (
              <p className="support-note">
                Support contact will appear here when configured.
              </p>
            )}
          </Reveal>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
