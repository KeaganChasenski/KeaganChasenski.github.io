export interface PhotographyImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category: string | string[];
}

export const blurbs: Record<string, string[]> = {
  All: [
    'Photography can be taken literally and not so literally. It\'s both the document and the dream.',
  ],
  Wildlife: [
    'My work is born from reverence—for wilderness, for fleeting light, and for the deep stories carried in fur, feather, and footprint. It is my hope that these images are more than beautiful—they are reminders. Of what we have, of what we stand to lose, and of what still might be saved.',
  ],
  People: [
    'Many of the moments we bear witness to out here are truly once-in-a-lifetime. Some are only fleeting and will be gone within an instant.',
    'These images seek to capture the unique stories and personalities of individuals from various walks of life.',
  ],
  Landscape: [
    'Journey through breathtaking vistas and serene natural environments.',
    'It\'s an art form that can be quite challenging, but it rewards me with magical moments that deepen my appreciation for Mother Nature.',
  ],
  Birds: [
    'The Lowveld and the savanna hold some of the most extraordinary birds on the planet. These are a few of them.',
  ],
  'Black&White': [
    'The timeless allure of monochrome, where light, shadow, and texture take center stage.',
    'Discover a different perspective on familiar subjects, emphasizing form and emotional depth.',
  ]
};


const images: PhotographyImage[] = [
  {
    id: 'cheetahcubs',
    src: '/images/photography/cheetahcubs.jpg',
    alt: 'Cheetah cubs resting together',
    title: 'Cheetah Cubs',
    category: 'Wildlife',
  },
  {
    id: 'lion',
    src: '/images/photography/lion.jpg',
    alt: 'Lion in golden light',
    title: 'Lion',
    category: 'Wildlife',
  },
  {
    id: 'lioncuddle',
    src: '/images/photography/lioncuddle.jpg',
    alt: 'Two lions nuzzling',
    title: 'Lion Affection',
    category: 'Wildlife',
  },
  {
    id: 'nkovenicub',
    src: '/images/photography/nkovenicub.jpg',
    alt: 'Nkoveni leopard cub',
    title: 'Nkoveni Cub',
    category: 'Wildlife',
  },
  {
    id: 'nkovenicub-golden',
    src: '/images/photography/nkovenicub-golden.jpg',
    alt: 'Nkoveni leopard cub in golden evening light',
    title: 'Nkoveni Cub — Golden Hour',
    category: 'Wildlife',
  },
  {
    id: 'nsevu-golden',
    src: '/images/photography/nsevu-golden.jpg',
    alt: 'Nsevu leopard in golden light',
    title: 'Nsevu — Golden Hour',
    category: 'Wildlife',
  },
  {
    id: 'ntomi',
    src: '/images/photography/ntomi.jpg',
    alt: 'Ntomi leopard',
    title: 'Ntomi',
    category: 'Wildlife',
  },
  {
    id: 'cub',
    src: '/images/photography/cub.jpg',
    alt: 'Leopard cub in a tree',
    title: 'Cub',
    category: 'Wildlife',
  },
  {
    id: 'elephantportrait',
    src: '/images/photography/elephantportrait.jpg',
    alt: 'Close elephant portrait',
    title: 'Elephant Portrait',
    category: 'Wildlife',
  },
  {
    id: 'elephantmud',
    src: '/images/photography/elephantmud.jpg',
    alt: 'Elephant wallowing in mud',
    title: 'Mud Bath',
    category: 'Wildlife',
  },
  {
    id: 'elephantairstrip',
    src: '/images/photography/elephantairstrip.jpg',
    alt: 'Elephants crossing an airstrip at dusk',
    title: 'Elephants at the Airstrip',
    category: ['Wildlife', 'Landscape'],
  },
  {
    id: 'wilddog',
    src: '/images/photography/wilddog.jpg',
    alt: 'African wild dog',
    title: 'Wild Dog',
    category: 'Wildlife',
  },
  {
    id: 'zebra',
    src: '/images/photography/zebra.jpg',
    alt: 'Zebra in profile',
    title: 'Zebra',
    category: 'Wildlife',
  },
  {
    id: 'vervet',
    src: '/images/photography/vervet.jpg',
    alt: 'Vervet monkey',
    title: 'Vervet',
    category: 'Wildlife',
  },
  {
    id: 'yawn',
    src: '/images/photography/yawn.jpg',
    alt: 'Animal mid-yawn showing teeth',
    title: 'Yawn',
    category: 'Wildlife',
  },
  {
    id: 'chameleon',
    src: '/images/photography/chameleon.jpg',
    alt: 'Chameleon on a branch',
    title: 'Chameleon',
    category: 'Wildlife',
  },
  {
    id: 'gimpro-giraffe',
    src: '/images/photography/gimpro-giraffe.jpg',
    alt: 'Giraffe in the bush',
    title: 'Giraffe',
    category: 'Wildlife',
  },
  {
    id: 'giraffe-bw-scenery',
    src: '/images/photography/giraffe-bw-scenery.jpg',
    alt: 'Giraffe in black and white landscape',
    title: 'Giraffe — Black & White',
    category: ['Wildlife', 'Black&White'],
  },
  {
    id: 'pilanesburg',
    src: '/images/photography/pilanesburg.jpg',
    alt: 'Pilanesberg landscape',
    title: 'Pilanesberg',
    category: ['Wildlife', 'Landscape'],
  },
  {
    id: 'bateleur',
    src: '/images/photography/bateleur.jpg',
    alt: 'Bateleur eagle perched',
    title: 'Bateleur Eagle',
    category: 'Birds',
  },
  {
    id: 'brownsnakeeagle',
    src: '/images/photography/brownsnakeeagle.jpg',
    alt: 'Brown snake eagle',
    title: 'Brown Snake Eagle',
    category: 'Birds',
  },
  {
    id: 'hammerkop',
    src: '/images/photography/hammerkop.jpg',
    alt: 'Hammerkop wading',
    title: 'Hammerkop',
    category: 'Birds',
  },
  {
    id: 'fish-eagle-flight-sunset',
    src: '/images/photography/fish-eagle-flight-sunset.jpg',
    alt: 'African fish eagle in flight at sunset',
    title: 'Fish Eagle — Sunset Flight',
    category: ['Birds', 'Landscape'],
  },
  {
    id: 'airstrip',
    src: '/images/photography/airstrip.jpg',
    alt: 'Bush airstrip at golden hour',
    title: 'Airstrip',
    category: 'Landscape',
  },
  {
    id: 'boats',
    src: '/images/photography/boats.jpg',
    alt: 'Boats on calm water',
    title: 'Boats',
    category: 'Landscape',
  },
  {
    id: 'mirror',
    src: '/images/photography/mirror.jpg',
    alt: 'Perfect reflection on still water',
    title: 'Mirror',
    category: 'Landscape',
  },
  {
    id: 'ndzanzeni',
    src: '/images/photography/ndzanzeni.jpg',
    alt: 'Ndzanzeni landscape view',
    title: 'Ndzanzeni',
    category: 'Landscape',
  },
  {
    id: 'newlands',
    src: '/images/photography/newlands.jpg',
    alt: 'Newlands, Cape Town',
    title: 'Newlands',
    category: 'Landscape',
  },
  {
    id: 'ricefields',
    src: '/images/photography/ricefields.jpg',
    alt: 'Rice fields stretching to the horizon',
    title: 'Rice Fields',
    category: 'Landscape',
  },
  {
    id: 'tsala',
    src: '/images/photography/tsala.jpg',
    alt: 'Tsala landscape',
    title: 'Tsala',
    category: 'Landscape',
  },
  {
    id: 'josh',
    src: '/images/photography/josh.jpg',
    alt: 'Portrait in the bush',
    title: 'Josh',
    category: 'People',
  },
  {
    id: 'fishing',
    src: '/images/photography/fishing.jpg',
    alt: 'Fishing at dusk',
    title: 'Fishing',
    category: 'People',
  },
];

export default images;
