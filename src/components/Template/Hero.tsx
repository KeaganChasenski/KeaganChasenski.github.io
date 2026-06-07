import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Keagan Chasenski</span>
        </h1>

        <p className="hero-tagline">
          Engineer. Guide. Builder.
          <br />
          I find patterns in complex systems — whether that&apos;s wildlife
          behaviour at dawn, capital allocation in emerging markets, or the
          architecture of a software product.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">BSc ECE, UCT</span>
          <span className="hero-chip">CFA Certificate in ESG Investing</span>
          <span className="hero-chip">Co-Founder, SafariSense</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
