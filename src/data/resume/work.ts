/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'SafariSense',
    position: 'Co-Founder & Technical Lead',
    url: 'https://github.com/KeaganChasenski',
    startDate: '2023-01-01',
    summary: `Lodge management software for asset-intensive hospitality operations.
    Built to handle the day-to-day complexity that generic tools miss — from allocation
    and inventory to leave management and boutique retail. Most safari lodges run critical
    operations on spreadsheets and WhatsApp. SafariSense is changing that.`,
    highlights: [
      'Co-founded the company; lead technical design, system architecture, and product roadmap.',
      'Identified and validated the core problem through direct operational experience at Londolozi.',
      'Building a SaaS platform to replace spreadsheet-driven operations across asset-intensive hospitality businesses.',
      'Responsible for full-stack development, database design, and iterative product delivery.',
    ],
  },
  {
    name: 'Londolozi Private Game Reserve',
    position: 'Senior Safari Guide',
    url: 'https://www.londolozi.com',
    startDate: '2020-01-01',
    endDate: '2024-12-01',
    summary: `Londolozi is one of the world's leading private game reserves in the Sabi Sand,
    Greater Kruger. As a senior guide, I led high-stakes wilderness experiences for founders,
    executives, and investors from around the world — managing risk, teams, and complex
    stakeholder dynamics in real time.`,
    highlights: [
      "Led guests through immersive wildlife experiences in one of Africa's most celebrated reserves.",
      'Managed real-time risk assessment in dynamic, high-consequence environments.',
      'Delivered high-stakes experiences for C-suite executives, investors, and dignitaries — requiring precise stakeholder management and calm under pressure.',
      'Led and mentored junior guiding staff; responsible for team safety protocols and operational standards.',
      'Developed deep pattern-recognition skills across complex, variable systems — the foundation for structured thinking under uncertainty.',
    ],
  },
];

export default work;
