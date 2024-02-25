export const anchors = [
  { id: 'about', label: 'Sobre mim' },
  { id: 'skills', label: 'Conhecimentos' },
  { id: 'projects', label: 'Meus projetos' },
  { id: 'experience', label: 'Experiências' },
  { id: 'contact', label: 'Contato' },
];

export const skills = {
  frontend: [
    {
      title: 'HTML/CSS',
      icon: 'html',
    },
    {
      title: 'Tailwind CSS',
      icon: 'tailwind',
    },
    {
      title: 'Next/ReactJS',
      icon: 'react',
    },
    {
      title: 'Angular',
      icon: 'angular',
    },
    {
      title: 'JavaScript',
      icon: 'javascript',
    },
    {
      title: 'TypeScript',
      icon: 'typescript',
    },
  ],
  backend: [
    {
      title: 'Docker',
      icon: 'docker',
    },
    {
      title: 'Express/NodeJS',
      icon: 'nodejs',
    },
    {
      title: 'PostgreSQL',
      icon: 'postgresql',
    },
    {
      title: 'Mongo DB',
      icon: 'mongodb',
    },
    {
      title: '.NET',
      icon: 'dotnet',
    },
    {
      title: 'Java',
      icon: 'java',
    },
  ],
};

export const experiences = [
  {
    id: '1',
    role: 'Fullstack developer',
    company: 'Kbase',
    period: 'Dez 2021 - Atual',
    stacks: ['React', 'NodeJS', 'TypeScript', '.NET', 'PostgreSQL', 'Angular'],
    topics: [
      'Desenvolvimento de novas features.',
      'Manutenção de código e refatoração.',
      'Versionamento de código e releases.',
      'Atuaçao em análises de performance.',
    ],
    default: true,
  },
  {
    id: '2',
    role: 'Fullstack developer',
    company: 'Tassinari',
    period: 'Freelancer',
    stacks: ['React', 'Node', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    topics: [
      'Criação de landing pages',
      'Consultoria',
      'Desenvolvimento de projetos SPA',
      'Desenvolvimento de APIs',
    ],
    default: true,
  },
];
