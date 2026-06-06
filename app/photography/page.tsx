import type { Metadata } from 'next';

import Gallery from '@/components/Photography/Gallery';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Photography',
  description:
    'Wildlife, landscape, and portrait photography by Keagan Chasenski — made mostly in early mornings across southern and east Africa.',
  path: '/photography/',
});

export default function PhotographyPage() {
  return (
    <PageWrapper mainClassName="page-main--wide">
      <section className="photography-page">
        <header className="photography-header">
          <h1 className="page-title">Photography</h1>
          <p className="page-subtitle">
            Mostly early mornings. Mostly wild places.
          </p>
        </header>
        <Gallery />
      </section>
    </PageWrapper>
  );
}
