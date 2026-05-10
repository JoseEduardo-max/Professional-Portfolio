// ─── PERSONAL ─────────────────────────────────────────────────────────────────
export const personal = {
  name: 'José Eduardo',
  lastName: 'Araújo',
  role: 'FullStack Developer & AI Enthusiast',
  subtitle:
    'Desenvolvedor focado em criar experiências modernas, sistemas inteligentes e soluções escaláveis com código limpo e interfaces que encantam.',
  location: 'Fortaleza, CE — Brasil',
  email: 'jeduardoff2@gmail.com',
  phone: '(85) 98650-2586',
  github: 'https://github.com/JoseEduardo-max',
  linkedin: 'https://www.linkedin.com/in/josé-eduardo-araújo/',
  available: true,
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    'Sou desenvolvedor FullStack apaixonado por tecnologia, interfaces modernas e inteligência artificial. Busco evoluir constantemente minhas habilidades através de projetos reais, desafios técnicos e desenvolvimento de soluções escaláveis.',
    'Tenho experiência com React, Node.js, APIs REST, bancos de dados e criação de aplicações modernas focadas em experiência do usuário. Recentemente trabalhei como professor de IA Generativa, disseminando conhecimento sobre as mais novas tecnologias.',
    'Baseado em Fortaleza, CE. Atualmente cursando Ciência da Computação na UECE e sempre em busca do próximo desafio.',
  ],
  stats: [
    { value: '3+', label: 'Anos de estudo' },
    { value: '10+', label: 'Projetos criados' },
    { value: '14', label: 'Tecnologias' },
    { value: '∞', label: 'Curiosidade' },
  ],
  tags: ['React', 'Node.js', 'IA', 'Python', 'APIs'],
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skills = [
  { name: 'React', short: '⚛', level: 85, category: 'Frontend' },
  { name: 'JavaScript', short: 'JS', level: 88, category: 'Language' },
  { name: 'Node.js', short: 'NJ', level: 80, category: 'Backend' },
  { name: 'Python', short: 'PY', level: 75, category: 'Language' },
  { name: 'Java', short: 'JV', level: 70, category: 'Language' },
  { name: 'HTML5', short: 'H5', level: 92, category: 'Frontend' },
  { name: 'CSS3', short: 'C3', level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS', short: 'TW', level: 85, category: 'Frontend' },
  { name: 'PostgreSQL', short: 'PG', level: 72, category: 'Database' },
  { name: 'MySQL', short: 'SQL', level: 75, category: 'Database' },
  { name: 'Git & GitHub', short: 'GIT', level: 85, category: 'Tools' },
  { name: 'APIs REST', short: 'API', level: 82, category: 'Backend' },
  { name: 'Jest', short: 'JST', level: 65, category: 'Tools' },
  { name: 'C', short: 'C', level: 68, category: 'Language' },
]

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: 'Professor de IA Generativa',
    company: 'Digital College',
    location: 'Fortaleza, CE',
    period: 'Jan 2026 — Mar 2026',
    type: 'Presencial',
    description: [
      'Ensino de conceitos de IA generativa para turmas presenciais',
      'Apoio e orientação em projetos práticos dos alunos',
      'Mentoria técnica e acompanhamento de desenvolvimento',
    ],
  },
  {
    id: 2,
    role: 'Auxiliar Administrativo / Digitador',
    company: 'Marco Assessoria e Consultoria Social',
    location: 'Fortaleza, CE',
    period: 'Jan 2022 — Dez 2022',
    type: 'Presencial',
    description: [
      'Organização e digitalização de documentos administrativos',
      'Gerenciamento e manutenção de base de informações',
      'Controle e apoio em processos administrativos internos',
    ],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Sistema FAQ CRUD',
    description:
      'Sistema CRUD completo para gerenciamento de perguntas frequentes. Interface intuitiva com backend robusto e API REST bem estruturada.',
    tags: ['React', 'Node.js', 'API REST'],
    github: 'https://github.com/JoseEduardo-max',
    demo: '#',
    featured: true,
    mockupColor: 'blue',
  },
  {
    id: 2,
    title: 'Plataforma de Cursos Online',
    description:
      'Sistema EAD completo com gerenciamento de alunos, cursos e acompanhamento de progresso. Banco de dados relacional robusto com PostgreSQL.',
    tags: ['Node.js', 'PostgreSQL', 'MariaDB'],
    github: 'https://github.com/JoseEduardo-max',
    demo: '#',
    featured: true,
    mockupColor: 'cyan',
  },
  {
    id: 3,
    title: 'Quiz de Química',
    description:
      'Quiz interativo com foco em acessibilidade via VLibras API e feedback inteligente. Interface gamificada e inclusiva para estudantes.',
    tags: ['React', 'Tailwind CSS', 'VLibras API'],
    github: 'https://github.com/JoseEduardo-max',
    demo: '#',
    featured: false,
    mockupColor: 'purple',
  },
]

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    institution: 'Universidade Estadual do Ceará',
    short: 'UECE',
    course: 'Bacharelado em Ciência da Computação',
    period: '2025 — Cursando',
    status: 'Em andamento',
    ongoing: true,
  },
  {
    id: 2,
    institution: 'Digital College',
    short: 'DC',
    course: 'Formação FullStack Developer',
    period: '2024 — 2025',
    status: 'Concluído',
    ongoing: false,
  },
]