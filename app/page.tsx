import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Engineer, safari guide, and founder. BSc Electrical & Computer Engineering (UCT), CFA Certificate in ESG Investing, co-founder of SafariSense. Interested in emerging markets, real assets, and sustainable capital.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
