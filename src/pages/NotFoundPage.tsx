import { Link } from "react-router-dom";
import { ArrowGlyph } from "../components/Actions";
import { PageMeta } from "../components/PageMeta";
import { PageTransition } from "../motion";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <PageMeta
        title="Page not found — Yaari24"
        description="This Yaari24 page could not be found."
        noIndex
      />
      <section className="not-found">
        <div className="not-found-code">404</div>
        <div className="not-found-mascot">
          <img
            src="/assets/mascots/community-mascots.png"
            alt="Yaari24 mascots looking for the missing page"
          />
        </div>
        <div>
          <span className="eyebrow">Wrong room, dost</span>
          <h1>This page left the chat.</h1>
          <p>Let’s get you back where the conversation is happening.</p>
          <Link className="download-button" to="/">
            Back to home <ArrowGlyph />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
