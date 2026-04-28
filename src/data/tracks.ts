import type { TrackProfile } from '../types/quiz';

export const TRACK_PROFILES: Record<TrackProfile['id'], TrackProfile> = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Build interactive interfaces that users see and use directly.',
    whyFit: 'You tend to value user experience, visual flow, and fast feedback loops.',
    strengths: ['UI composition', 'Component thinking', 'User-centered iteration'],
    firstSkills: ['HTML/CSS', 'JavaScript/TypeScript', 'React fundamentals'],
    miniProject: 'Build a student event dashboard with filters and responsive cards.'
  },
  backend: {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Design application logic, APIs, and server-side systems.',
    whyFit: 'You enjoy structured logic, data flow, and reliable system behavior.',
    strengths: ['API design', 'Data modeling', 'Performance reasoning'],
    firstSkills: ['Node.js or Python', 'REST APIs', 'SQL basics'],
    miniProject: 'Create a task API with authentication and role-based endpoints.'
  },
  ai_data: {
    id: 'ai_data',
    title: 'AI / Data Practitioner',
    description: 'Use data and models to uncover patterns and support decisions.',
    whyFit: 'You are motivated by evidence, experimentation, and measurable outcomes.',
    strengths: ['Analytical thinking', 'Pattern detection', 'Experiment discipline'],
    firstSkills: ['Python', 'Pandas + visualization', 'Intro ML workflow'],
    miniProject: 'Analyze student study data and predict likely score ranges.'
  },
  cybersecurity: {
    id: 'cybersecurity',
    title: 'Cybersecurity Specialist',
    description: 'Protect systems by identifying risks and improving defenses.',
    whyFit: 'You naturally think in threats, vulnerabilities, and secure design choices.',
    strengths: ['Risk awareness', 'Threat modeling', 'Incident mindset'],
    firstSkills: ['Networking basics', 'OWASP Top 10', 'Security tooling intro'],
    miniProject: 'Run a basic web app security checklist and document mitigations.'
  },
  devops_cloud: {
    id: 'devops_cloud',
    title: 'DevOps / Cloud Engineer',
    description: 'Automate delivery, infrastructure, and system reliability.',
    whyFit: 'You prefer end-to-end system reliability, automation, and operational clarity.',
    strengths: ['Automation mindset', 'Infrastructure thinking', 'Monitoring discipline'],
    firstSkills: ['Linux command line', 'CI/CD basics', 'Container fundamentals'],
    miniProject: 'Deploy a small web app with CI pipeline and uptime monitoring.'
  },
  ui_ux: {
    id: 'ui_ux',
    title: 'UI/UX Designer',
    description: 'Shape experiences through research, interaction design, and visual clarity.',
    whyFit: 'You focus on empathy, usability, and making complex tasks feel simple.',
    strengths: ['User empathy', 'Interaction mapping', 'Visual hierarchy'],
    firstSkills: ['Figma', 'User research basics', 'Wireframing and prototyping'],
    miniProject: 'Design and test a mobile onboarding flow for a campus app.'
  }
};
