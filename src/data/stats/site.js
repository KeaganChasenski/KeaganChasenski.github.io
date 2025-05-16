import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/KeaganChasenski/KeaganChasenski.github.io
 */
const data = [
  {
    label: 'vistors',
    key: 'Vistors to this site',
    value: '0', // Get for GA
  },
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/KeaganChasenski/KeaganChasenski.github.io',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/KeaganChasenski/KeaganChasenski.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2150',
    link: 'https://github.com/',
  },
];

export default data;
