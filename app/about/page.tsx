import type { Metadata } from 'next';

import AboutContent from '@/components/About/Sections';
import Personal from '@/components/Stats/Personal';
import Random from '@/components/Stats/Random';
import Site from '@/components/Stats/Site';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn about Keagan Chasenski — engineer, safari guide, and founder. BSc ECE (UCT), CFA Certificate in ESG Investing, co-founder of SafariSense.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <PageWrapper mainClassName="page-main--wide">
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About</h1>
        </header>
        <AboutContent
          markdown={aboutMarkdown}
          appendLinks={[{ id: 'by-the-numbers', title: 'By the numbers' }]}
        />

        <section className="about-stats" id="by-the-numbers">
          <h2 className="about-stats-title">By the numbers</h2>
          <div className="about-stats-grid">
            <div className="about-stats-section">
              <h3 className="about-stats-subtitle">Personal</h3>
              <Personal />
            </div>
            <div className="about-stats-section">
              <h3 className="about-stats-subtitle">In the field</h3>
              <Random />
            </div>
            <div className="about-stats-section">
              <h3 className="about-stats-subtitle">This site</h3>
              <Site />
            </div>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
}
