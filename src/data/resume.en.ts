import type { ResumeData } from './types';

export const resumeEn: ResumeData = {
  lang: 'en',
  path: '',
  pageTitle: 'Roman Miller — Senior QA Engineer',
  pageDescription:
    'Senior QA engineer with 7 years in QA across fintech (banking, payments) and B2B SaaS: manual testing, API and UI test automation, load testing and release ownership. Remote, based in Serbia.',

  profile: {
    name: 'Roman Miller',
    title: 'Senior QA Engineer',
    location: 'Remote · based in Serbia',
    availability: [
      'Sole proprietor registered in Serbia and Russia',
      'Employment: full time, part time or project work',
      'Remote only, no business trips',
    ],
    contacts: [
      {
        label: 'adm.dx@outlook.com',
        href: 'mailto:adm.dx@outlook.com',
        icon: 'mail',
        note: 'preferred',
      },
      {
        label: 'github.com/adm-dx',
        href: 'https://github.com/adm-dx',
        icon: 'github',
      },
    ],
  },

  summary: [
    'Senior QA engineer with 7 years in QA across fintech (banking, payments) and B2B SaaS. I combine manual testing, API and UI test automation, load testing and release ownership.',
    'I work in cross-functional agile teams, exchanging experience with developers, analysts and other QA engineers, and set up the QA process where testing is not yet mature. At iDWELL I own the pre-release cycle and led QA for a full UI redesign. I use AI assistants daily and am moving towards a QA Lead role.',
  ],

  experienceHeading: 'Work experience — 7 years',

  jobs: [
    {
      company: 'iDWELL',
      role: 'Senior QA Engineer (Manual), release owner',
      period: 'February 2025 — present',
      location: 'Vienna, Austria (remote)',
      industry: 'PropTech, B2B SaaS',
      about:
        'iDWELL is a Vienna-based SaaS platform for professional property management, founded in 2017. It combines a CRM and ticketing system for property managers, a self-service app for tenants and owners, a portal for service providers and AI-driven invoice processing. The platform is used by property management companies across Germany, Austria and Switzerland and covers more than 2 million apartments.',
      achievements: [
        'Led QA for the UI redesign of the web application, including cross-browser and localization testing; more than 90% of the manager cabinet has been migrated to the new design',
        'Owned the pre-release cycle for twice-weekly releases: full regression, final build sign-off, release notes and the go/no-go decision',
        'As part of a team of 4 QA engineers, launched DocFlow, which automates splitting and delivery of documents to residents: one upload replaces manual distribution to every resident of a building',
        'Delivered and tested the platform’s AI features (AI Greta: support chat, email generation, linking emails to tickets, ticket summaries) using reference query sets and regression after every prompt or model change',
        'Reviewed requirements and mockups before development; investigated production incidents using logs and monitoring (Kibana, Grafana, Sentry)',
      ],
    },
    {
      company: 'Payler',
      role: 'QA Engineer, Manual + Automation (Senior to Lead)',
      period: 'July 2023 — December 2024',
      location: 'Moscow (remote)',
      industry: 'Fintech, payments',
      about:
        'Payler is a payment service provider that has operated since 2014: online acquiring and payment acceptance for e-commerce, as an official service provider of Visa and Mastercard. It now positions itself as a fintech platform for business finance, with accounts, payments, payment acceptance and corporate cards.',
      achievements: [
        'Built the test strategy from scratch for a new product, a bank for small and large businesses, as the only tester in an agile team, including regression and smoke suites',
        'Built the test automation pyramid from scratch at the API and UI levels: Python, Pytest and Playwright, integrated with Qase and the internal test framework',
        'Ran load tests with JMeter (open and closed workload models) to find throughput limits and bottlenecks and to confirm non-functional load requirements',
        'Mentored and onboarded testers from other teams, reviewed their test cases and autotests, interviewed QA candidates, distributed testing tasks and estimated testing effort',
      ],
    },
    {
      company: 'Raiffeisenbank',
      role: 'QA Engineer, Manual + Automation (Middle to Senior)',
      period: 'July 2021 — July 2023',
      location: 'Moscow',
      industry: 'Banking',
      about:
        'The only tester in an agile team building software that assesses the risks of working with the bank’s counterparties.',
      achievements: [
        'Built integration and end-to-end UI test layers from scratch on top of existing unit and stubbed API tests: PHP Codeception for the backend, integration tests for Java microservices, Playwright and TypeScript for the React SPA',
        'Set up all test suites to run at different stages of the GitLab CI pipeline, with reports uploaded to Allure TestOps and to Jira Zephyr (Adaptavist) via API',
        'Built a mock server in Java for ActiveMQ message queues using LLM-assisted development; extended the Python (Flask) mock application for REST API services',
        'Ran load tests with k6 to determine maximum throughput, locate bottlenecks and verify non-functional load requirements',
        'Investigated production incidents and worked with the preview cluster in Kubernetes: logs, pod consoles, resource monitoring, release reinstalls with Helm',
        'Kept test data and team instructions up to date and ran demos for business customers (product owner, business analyst)',
      ],
    },
    {
      company: 'Rosbank',
      role: 'QA Engineer, Manual + Automation (Junior to Middle)',
      period: 'August 2019 — July 2021',
      location: 'Moscow',
      industry: 'Banking',
      achievements: [
        'The only tester in two agile teams (10+ developers, 2-week sprints)',
        'Manual component, integration, system and regression testing of partner agent accounts for the mortgage business and of the Rosbank.DomPro mobile application',
        'Maintained and extended automated regression for the lead generation and mortgage application platform (BDD, C# + Selenium + SpecFlow)',
      ],
    },
    {
      company: 'Earlier experience',
      role: 'Technical support, from dispatcher to team lead',
      period: '2012 — 2019',
      location: 'Moscow',
      about:
        'IT support for retail chains (Zwilling, KitchenLand, Mango, New Yorker, Adidas): grew from dispatcher to team lead, supported stores and opened new ones as an on-site engineer.',
      achievements: [],
    },
  ],

  projects: [
    {
      name: 'Expense Tracker',
      description:
        'Pet project: a personal expense tracking application, built as an npm-workspaces monorepo — a Next.js web app and a NestJS API over PostgreSQL, with shared type and config packages. A sandbox for practising full-stack development and test automation outside of work.',
      stack: [
        'TypeScript',
        'Next.js',
        'React',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'Tailwind CSS',
        'Jest',
        'Docker Compose',
      ],
      repo: 'https://github.com/adm-dx/expense-tracker',
    },
  ],

  skills: [
    {
      label: 'Testing',
      items: [
        'test strategy',
        'functional testing',
        'regression testing',
        'integration testing',
        'API testing',
        'UI testing',
        'cross-browser testing',
        'localization testing',
        'requirements review',
        'test design',
        'release management',
        'mentoring and interviewing',
      ],
    },
    {
      label: 'Automation',
      items: [
        'Python',
        'Pytest',
        'Java',
        'TypeScript',
        'Playwright',
        'Codeception (PHP)',
        'Selenium WebDriver',
        'CI/CD integration',
      ],
    },
    {
      label: 'Load testing',
      items: ['k6', 'JMeter'],
    },
    {
      label: 'API and messaging',
      items: ['REST', 'SOAP', 'JSON', 'XML', 'Swagger', 'Postman', 'Kafka', 'RabbitMQ', 'ActiveMQ'],
    },
    {
      label: 'Tools',
      items: [
        'Jira',
        'Confluence',
        'Zephyr',
        'Qase',
        'Allure TestOps',
        'GitLab CI',
        'Bamboo',
        'Kubernetes',
        'Helm',
        'Git',
        'Linux',
        'Kibana',
        'Grafana',
        'Sentry',
        'SQL (PostgreSQL, Oracle: procedures and views)',
      ],
    },
    {
      label: 'AI tools',
      items: ['Claude Code', 'LLM-assisted test development', 'testing of AI product features'],
    },
    {
      label: 'Process',
      items: ['Agile / Scrum'],
    },
  ],

  education: [
    {
      institution: 'The Open University (UK)',
      qualification: 'Computing & IT',
      period: 'in progress',
    },
    {
      institution: 'Humanitarian College of Innovative Technologies',
      qualification: 'Management, IT Manager',
      period: '2006, incomplete',
    },
  ],

  courses: 'Courses: Java for Testers (software-testing.ru, 2020), Java Core (JavaRush, 2019)',

  languages: [
    { language: 'Russian', level: 'native' },
    { language: 'English', level: 'B1 (Intermediate)' },
  ],

  ui: {
    downloadPdf: 'Download PDF',
    switchLanguage: 'Русский',
    toggleTheme: 'Toggle colour theme',
    sections: {
      summary: 'Summary',
      experience: 'Work experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
    },
    projectRepo: 'Source',
    projectDemo: 'Live demo',
    footer: '© {year} Roman Miller',
  },
};
