import type { TrackProfile } from '../types/quiz';

export const TRACK_PROFILES: Record<TrackProfile['id'], TrackProfile> = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Developer',
    shortDescription: 'Build interfaces that are clear, responsive, and easy for people to use.',
    whyItFits: 'Your answers suggest you may enjoy turning ideas into usable screens and improving how people interact with software.',
    strengths: ['Breaking big pages into reusable UI pieces', 'Catching usability friction quickly', 'Iterating with visible feedback'],
    watchOut: ['Visual polish can hide weak logic—keep fundamentals strong.', 'Browsers and devices behave differently, so testing matters.'],
    firstSkills: ['HTML and semantic structure', 'CSS layout (Flexbox/Grid)', 'JavaScript + TypeScript basics', 'React component fundamentals'],
    learningPath: ['Start with static pages and responsive layouts.', 'Add interactivity with state, forms, and validation.', 'Learn API data fetching and basic performance/accessibility checks.'],
    miniProject: 'Create a campus club portal with search, filters, and a mobile-first event details page.',
    starterTopics: ['Design systems basics', 'Accessibility (ARIA, keyboard navigation)', 'Frontend debugging in browser devtools']
  },
  backend: {
    id: 'backend',
    title: 'Backend Developer',
    shortDescription: 'Build the logic, APIs, and data systems that power applications.',
    whyItFits: 'Your choices point to comfort with structure, step-by-step reasoning, and making systems reliable behind the scenes.',
    strengths: ['Designing clean API contracts', 'Thinking about data flow and edge cases', 'Keeping behavior consistent under load'],
    watchOut: ['It is easy to over-engineer early—start simple first.', 'Debugging distributed issues takes patience and clear logs.'],
    firstSkills: ['Node.js or Python fundamentals', 'REST API design', 'SQL + basic schema design', 'Authentication and authorization basics'],
    learningPath: ['Build small CRUD APIs locally.', 'Add validation, error handling, and tests.', 'Practice deployment, observability, and simple scaling patterns.'],
    miniProject: 'Build a student task-management API with roles (student/admin), deadlines, and activity logs.',
    starterTopics: ['HTTP status codes', 'Database indexing basics', 'Rate limiting and API security hygiene']
  },
  ai_data: {
    id: 'ai_data',
    title: 'AI / Data Practitioner',
    shortDescription: 'Use data analysis and model workflows to support better decisions.',
    whyItFits: 'Your answers indicate interest in evidence, experimentation, and learning from patterns instead of guesswork.',
    strengths: ['Structured analysis of messy information', 'Comparing options with measurable criteria', 'Documenting assumptions and outcomes'],
    watchOut: ['Models can look right but still be wrong—always validate.', 'Data quality usually matters more than fancy algorithms at the start.'],
    firstSkills: ['Python fundamentals', 'Pandas and data cleaning', 'Data visualization basics', 'Intro to model evaluation metrics'],
    learningPath: ['Practice exploratory analysis on small datasets.', 'Learn feature preparation and baseline model building.', 'Improve results with evaluation, iteration, and clear reporting.'],
    miniProject: 'Analyze study habit data and build a simple predictor for likely performance bands.',
    starterTopics: ['Train/test split', 'Bias and data leakage awareness', 'Notebook storytelling for non-technical audiences']
  },
  cybersecurity: {
    id: 'cybersecurity',
    title: 'Cybersecurity Specialist',
    shortDescription: 'Reduce risk by finding weaknesses and strengthening defenses.',
    whyItFits: 'Your response pattern suggests you naturally consider failure modes, threat scenarios, and safe system behavior.',
    strengths: ['Spotting risky assumptions early', 'Thinking like both attacker and defender', 'Documenting controls and mitigations clearly'],
    watchOut: ['Security is never “finished”—it is continuous practice.', 'Overly strict controls can block usability, so balance is important.'],
    firstSkills: ['Networking and protocols basics', 'OWASP Top 10 fundamentals', 'Secure coding practices', 'Intro security tooling (scanners/log analysis)'],
    learningPath: ['Learn core security principles and common attack patterns.', 'Practice threat modeling on simple apps.', 'Run controlled audits and report practical fixes.'],
    miniProject: 'Perform a basic security review of a demo web app and propose prioritized remediation steps.',
    starterTopics: ['Principle of least privilege', 'Incident response basics', 'Security logging and alert triage']
  },
  devops_cloud: {
    id: 'devops_cloud',
    title: 'DevOps / Cloud Engineer',
    shortDescription: 'Automate delivery and operations so software stays reliable in production.',
    whyItFits: 'Your answers lean toward system-level thinking, automation, and reducing manual operational errors.',
    strengths: ['Improving repeatability with automation', 'Connecting development and operations needs', 'Monitoring reliability and acting on signals'],
    watchOut: ['Tooling can get complex quickly—focus on core principles first.', 'Automation without safeguards can spread mistakes very fast.'],
    firstSkills: ['Linux command line fluency', 'Git and CI/CD basics', 'Container fundamentals', 'Cloud service essentials (compute/network/storage)'],
    learningPath: ['Deploy a simple app manually to understand the full flow.', 'Automate build/test/deploy with a pipeline.', 'Add monitoring, alerting, and rollback strategy.'],
    miniProject: 'Containerize a web app, deploy it to a cloud VM, and automate release using a CI workflow.',
    starterTopics: ['Infrastructure as Code basics', 'Secrets management', 'Service health checks and SLO thinking']
  },
  ui_ux: {
    id: 'ui_ux',
    title: 'UI/UX Designer',
    shortDescription: 'Design product experiences that are useful, clear, and enjoyable.',
    whyItFits: 'Your choices suggest you care about user perspective, clear flows, and reducing friction in everyday tasks.',
    strengths: ['Translating user needs into concrete flows', 'Prioritizing clarity over unnecessary complexity', 'Testing and refining design decisions with feedback'],
    watchOut: ['Great visuals are not enough—validate with real users.', 'Handoffs can fail without clear rationale and documentation.'],
    firstSkills: ['Figma and component libraries', 'User interview basics', 'Wireframing and interaction design', 'Usability testing fundamentals'],
    learningPath: ['Map problems and user journeys before jumping to screens.', 'Create low-fidelity prototypes and test early.', 'Iterate visual polish and document handoff details for developers.'],
    miniProject: 'Design a mobile onboarding and weekly planner flow for students, then run 3 quick usability tests.',
    starterTopics: ['Information architecture', 'Accessibility in design', 'Design critique and decision logs']
  }
};
