export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'CFA Institute',
    degree: 'Certificate in ESG Investing',
    link: 'https://www.cfainstitute.org/en/programs/esg-investing',
    year: 2024,
  },
  {
    school: 'University of Cape Town',
    degree: 'BSc Electrical & Computer Engineering',
    link: 'https://www.uct.ac.za',
    year: 2019,
  },
];

export default degrees;
