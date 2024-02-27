export const anchors = [
  { id: 'about', value: 'Sobre mim' },
  { id: 'skills', value: 'Conhecimentos' },
  { id: 'projects', value: 'Meus projetos' },
  { id: 'experience', value: 'Experiências' },
  { id: 'contact', value: 'Contato' },
];

export const skills = {
  frontend: [
    {
      value: 'HTML/CSS',
      icon: 'html',
    },
    {
      value: 'Tailwind CSS',
      icon: 'tailwind',
    },
    {
      value: 'Next/ReactJS',
      icon: 'react',
    },
    {
      value: 'Angular',
      icon: 'angular',
    },
    {
      value: 'JavaScript',
      icon: 'javascript',
    },
    {
      value: 'TypeScript',
      icon: 'typescript',
    },
  ],
  backend: [
    {
      value: 'Docker',
      icon: 'docker',
    },
    {
      value: 'Express/NodeJS',
      icon: 'nodejs',
    },
    {
      value: 'PostgreSQL',
      icon: 'postgresql',
    },
    {
      value: 'Mongo DB',
      icon: 'mongodb',
    },
    {
      value: '.NET',
      icon: 'dotnet',
    },
    {
      value: 'Java',
      icon: 'java',
    },
  ],
};

export const projects = [
  {
    keyof: 'project-1',
    name: 'Flex Turismos',
    subtitle: 'Landing Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'flex-turismos',
    link: 'https://brunotassinari.github.io/flex-turismos/',
    alt: 'Project 1',
    stack: [
      {
        value: 'HTML/CSS',
      },
      {
        value: 'Tailwind CSS',
      },
      {
        value: 'JavaScript',
      },
    ],
  },
];

export const experiences = [
  {
    id: '1',
    role: 'Fullstack developer',
    company: 'Kbase',
    period: 'Dez 2021 - Atual',
    stacks: [
      {
        value: 'ReactJS',
      },
      {
        value: 'NodeJS',
      },
      {
        value: 'PostgreSQL',
      },
      {
        value: 'MongoDB',
      },
    ],
    topics: [
      {
        value: 'Desenvolvimento de novas features.',
        icon: 'taglist',
      },
      {
        value: 'Manutenção de código e refatoração.',
        icon: 'taglist',
      },
      {
        value: 'Versionamento de código e releases.',
        icon: 'taglist',
      },
      {
        value: 'Atuaçao em análises de performance.',
        icon: 'taglist',
      },
    ],
    default: true,
  },
  {
    id: '2',
    role: 'Fullstack developer',
    company: 'Tassinari',
    period: 'Freelancer',
    stacks: [
      {
        value: 'React',
      },
      {
        value: 'NodeJS',
      },
      {
        value: 'TypeScript',
      },
      {
        value: 'PostgreSQL',
      },
    ],
    topics: [
      {
        value: 'Desenvolvimento de novas features.',
        icon: 'taglist',
      },
      {
        value: 'Manutenção de código e refatoração.',
        icon: 'taglist',
      },
      {
        value: 'Versionamento de código e releases.',
        icon: 'taglist',
      },
      {
        value: 'Atuaçao em análises de performance.',
        icon: 'taglist',
      },
    ],
    default: true,
  },
];
