export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Finance
  {
    title: 'Financial Modelling',
    competency: 4,
    category: ['Finance'],
  },
  {
    title: 'ESG Investing',
    competency: 4,
    category: ['Finance'],
  },
  {
    title: 'Private Markets',
    competency: 3,
    category: ['Finance'],
  },
  {
    title: 'Capital Allocation',
    competency: 3,
    category: ['Finance'],
  },
  // Engineering
  {
    title: 'Python',
    competency: 3,
    category: ['Engineering'],
  },
  {
    title: 'Software Architecture',
    competency: 4,
    category: ['Engineering'],
  },
  {
    title: 'React / TypeScript',
    competency: 3,
    category: ['Engineering'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Engineering'],
  },
  // Leadership & Operations
  {
    title: 'Team Leadership',
    competency: 5,
    category: ['Leadership & Operations'],
  },
  {
    title: 'Risk Management',
    competency: 5,
    category: ['Leadership & Operations'],
  },
  {
    title: 'Strategic Planning',
    competency: 4,
    category: ['Leadership & Operations'],
  },
  {
    title: 'Stakeholder Relations',
    competency: 5,
    category: ['Leadership & Operations'],
  },
  // Field Operations
  {
    title: 'Wildlife Management',
    competency: 5,
    category: ['Field Operations'],
  },
  {
    title: 'Safari Operations',
    competency: 5,
    category: ['Field Operations'],
  },
  {
    title: 'Emergency Response',
    competency: 4,
    category: ['Field Operations'],
  },
  {
    title: 'Environmental Analysis',
    competency: 4,
    category: ['Field Operations'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
