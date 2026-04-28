import type { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    prompt: 'A student club site gets heavy traffic before an event. What would you improve first?',
    options: [
      { id: 'q1a', label: 'Redesign key pages so users can find schedules instantly.', weights: { frontend: 3, ui_ux: 2 } },
      { id: 'q1b', label: 'Optimize database queries and API response times.', weights: { backend: 3, devops_cloud: 1 } },
      { id: 'q1c', label: 'Add caching, autoscaling, and uptime alerts.', weights: { devops_cloud: 3, backend: 1 } },
      { id: 'q1d', label: 'Check abuse risks and harden rate limits and auth.', weights: { cybersecurity: 3, backend: 1 } }
    ]
  },
  {
    id: 'q2',
    prompt: 'You receive a messy dataset from a survey. Your first instinct is to:',
    options: [
      { id: 'q2a', label: 'Clean it and explore trends with quick charts.', weights: { ai_data: 3, backend: 1 } },
      { id: 'q2b', label: 'Design a dashboard that tells a clear story to non-tech users.', weights: { frontend: 2, ui_ux: 2 } },
      { id: 'q2c', label: 'Automate import pipelines for future updates.', weights: { devops_cloud: 2, backend: 2 } },
      { id: 'q2d', label: 'Validate data access permissions and privacy risks.', weights: { cybersecurity: 3, ai_data: 1 } }
    ]
  },
  {
    id: 'q3',
    prompt: 'A feature request is vague and contradictory. You prefer to:',
    options: [
      { id: 'q3a', label: 'Sketch user journeys and clarify goals visually.', weights: { ui_ux: 3, frontend: 1 } },
      { id: 'q3b', label: 'Define API contracts and edge-case handling early.', weights: { backend: 3 } },
      { id: 'q3c', label: 'Set up experiments and metrics before implementation.', weights: { ai_data: 3, devops_cloud: 1 } },
      { id: 'q3d', label: 'Review trust boundaries and misuse scenarios first.', weights: { cybersecurity: 3 } }
    ]
  },
  {
    id: 'q4',
    prompt: 'Your app works, but users drop off at step 2. What do you do?',
    options: [
      { id: 'q4a', label: 'Run usability tests and simplify interface decisions.', weights: { ui_ux: 3, frontend: 2 } },
      { id: 'q4b', label: 'Inspect API latency and backend bottlenecks.', weights: { backend: 2, devops_cloud: 1 } },
      { id: 'q4c', label: 'Instrument funnels and analyze where users quit.', weights: { ai_data: 3, frontend: 1 } },
      { id: 'q4d', label: 'Audit security prompts that may block trusted users.', weights: { cybersecurity: 2, ui_ux: 1 } }
    ]
  },
  {
    id: 'q5',
    prompt: 'In a team project, which responsibility feels most energizing?',
    options: [
      { id: 'q5a', label: 'Turning wireframes into polished interactive screens.', weights: { frontend: 3, ui_ux: 1 } },
      { id: 'q5b', label: 'Building core logic that powers all client apps.', weights: { backend: 3 } },
      { id: 'q5c', label: 'Creating pipelines that keep deployments stable.', weights: { devops_cloud: 3, backend: 1 } },
      { id: 'q5d', label: 'Investigating suspicious activity and closing gaps.', weights: { cybersecurity: 3 } }
    ]
  },
  {
    id: 'q6',
    prompt: 'You have one free weekend to learn. You choose to:',
    options: [
      { id: 'q6a', label: 'Build an interface clone to sharpen UI implementation.', weights: { frontend: 3 } },
      { id: 'q6b', label: 'Write service endpoints and test load handling.', weights: { backend: 3, devops_cloud: 1 } },
      { id: 'q6c', label: 'Train a small model and compare metrics.', weights: { ai_data: 3 } },
      { id: 'q6d', label: 'Practice secure configuration in a sandbox lab.', weights: { cybersecurity: 3, devops_cloud: 1 } }
    ]
  },
  {
    id: 'q7',
    prompt: 'A production bug appears at midnight. You naturally focus on:',
    options: [
      { id: 'q7a', label: 'User-facing impact and temporary UI guidance.', weights: { frontend: 2, ui_ux: 2 } },
      { id: 'q7b', label: 'Root-cause tracing in logs and backend flows.', weights: { backend: 3 } },
      { id: 'q7c', label: 'System health, rollback strategy, and uptime.', weights: { devops_cloud: 3 } },
      { id: 'q7d', label: 'Potential exploitation path and containment.', weights: { cybersecurity: 3, backend: 1 } }
    ]
  },
  {
    id: 'q8',
    prompt: 'Your teacher asks for a capstone idea. You propose:',
    options: [
      { id: 'q8a', label: 'A visually rich app with accessible interaction patterns.', weights: { frontend: 2, ui_ux: 2 } },
      { id: 'q8b', label: 'A smart recommendation engine trained on open data.', weights: { ai_data: 3, backend: 1 } },
      { id: 'q8c', label: 'A secure system that flags anomalous login attempts.', weights: { cybersecurity: 3, ai_data: 1 } },
      { id: 'q8d', label: 'A cloud-deployed platform with automated release flow.', weights: { devops_cloud: 3, backend: 1 } }
    ]
  },
  {
    id: 'q9',
    prompt: 'When reading technical content, you prefer materials that:',
    options: [
      { id: 'q9a', label: 'Show real UI examples and component breakdowns.', weights: { frontend: 2, ui_ux: 1 } },
      { id: 'q9b', label: 'Explain architecture decisions and trade-offs.', weights: { backend: 2, devops_cloud: 1 } },
      { id: 'q9c', label: 'Include experiments, metrics, and reproducible notebooks.', weights: { ai_data: 3 } },
      { id: 'q9d', label: 'Detail attack vectors, defenses, and incident postmortems.', weights: { cybersecurity: 3 } }
    ]
  },
  {
    id: 'q10',
    prompt: 'A teammate says “it works on my machine.” You respond by:',
    options: [
      { id: 'q10a', label: 'Reproducing in browser/device combinations and documenting UX differences.', weights: { frontend: 2, ui_ux: 1 } },
      { id: 'q10b', label: 'Creating integration tests around service behavior.', weights: { backend: 3 } },
      { id: 'q10c', label: 'Containerizing setup and standardizing CI checks.', weights: { devops_cloud: 3, backend: 1 } },
      { id: 'q10d', label: 'Reviewing dependency risks and patch management.', weights: { cybersecurity: 3, devops_cloud: 1 } }
    ]
  },
  {
    id: 'q11',
    prompt: 'You must explain project value to non-technical stakeholders. You:',
    options: [
      { id: 'q11a', label: 'Tell the story through interface outcomes and user moments.', weights: { ui_ux: 3, frontend: 1 } },
      { id: 'q11b', label: 'Highlight reliability and architecture scalability.', weights: { backend: 2, devops_cloud: 1 } },
      { id: 'q11c', label: 'Present measurable impact with data evidence.', weights: { ai_data: 3 } },
      { id: 'q11d', label: 'Frame risk reduction and trust improvements.', weights: { cybersecurity: 3 } }
    ]
  },
  {
    id: 'q12',
    prompt: 'Given a complex challenge, your strongest contribution is usually:',
    options: [
      { id: 'q12a', label: 'Crafting intuitive interactions from ambiguity.', weights: { ui_ux: 2, frontend: 2 } },
      { id: 'q12b', label: 'Structuring robust logic and maintainable services.', weights: { backend: 3 } },
      { id: 'q12c', label: 'Finding hidden patterns and validating hypotheses.', weights: { ai_data: 3 } },
      { id: 'q12d', label: 'Designing reliable and secure operating workflows.', weights: { devops_cloud: 2, cybersecurity: 2 } }
    ]
  }
];
