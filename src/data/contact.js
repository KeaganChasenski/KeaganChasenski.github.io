import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.instagram.com/keagschasenski/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://blog.londolozi.com/profile/k-chasenski/',
    label: 'Londolozi Blog',
    icon: faBlogger,
  },
  {
    link: 'https:/linkedin.com/in/keagan-chasenski-774120184',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/KeaganChasenski',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/keagan.chasenski/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'mailto:k.chasenski@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
