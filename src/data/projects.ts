export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'SafariSense',
    subtitle: 'Lodge management software',
    link: 'https://github.com/KeaganChasenski',
    image: '/images/projects/safarisense.jpg',
    date: '2023-01-01',
    desc: 'Lodge management software for asset-intensive hospitality operations. Built to handle the complexity that generic tools miss — from allocation and inventory to leave management and boutique retail. Most safari lodges run critical operations on spreadsheets and WhatsApp. We are changing that.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'],
    featured: true,
  },
  {
    title: 'Building with Claude Code',
    subtitle: 'An engineer\'s field guide',
    link: undefined,
    image: '/images/projects/claude-code.jpg',
    date: '2026-06-01',
    desc: 'A practical, engineer-first guide to using Claude Code — Anthropic\'s agentic CLI tool for software development. Written while building this very website, so every step is documented as it happened. This isn\'t a tutorial about AI replacing engineers. It\'s about what happens when an engineer starts treating AI as a capable junior collaborator.',
    tech: ['Claude Code', 'Next.js', 'TypeScript'],
    featured: true,
  },
];

export default data;
