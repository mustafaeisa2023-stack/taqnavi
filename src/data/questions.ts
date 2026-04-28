import type { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  { id: 'q1', category: 'interest', prompt: 'A student app has unclear navigation. What part would you most want to improve first?', options: [
    { id: 'q1a', label: 'The screen flow so key actions feel obvious.', weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q1b', label: 'The API structure so each screen gets cleaner data.', weights: { backend: 3 } },
    { id: 'q1c', label: 'The analytics events so we can measure user confusion.', weights: { ai_data: 3, frontend: 1 } },
    { id: 'q1d', label: 'The access rules so only trusted users can reach sensitive pages.', weights: { cybersecurity: 3, backend: 1 } }
  ]},
  { id: 'q2', category: 'interest', prompt: 'Your club website crashes during registrations. Which task sounds most exciting?', options: [
    { id: 'q2a', label: 'Build responsive status pages to keep students informed.', weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q2b', label: 'Fix slow queries and refactor signup endpoints.', weights: { backend: 3, devops_cloud: 1 } },
    { id: 'q2c', label: 'Set autoscaling and alerts so traffic spikes are handled.', weights: { devops_cloud: 3, backend: 1 } },
    { id: 'q2d', label: 'Review rate limits and abuse patterns.', weights: { cybersecurity: 3, devops_cloud: 1 } }
  ]},
  { id: 'q3', category: 'interest', prompt: 'A teacher offers four mini-project choices. Which do you pick?', options: [
    { id: 'q3a', label: 'Interactive dashboard with clear visuals.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q3b', label: 'Recommendation model from open student data.', weights: { ai_data: 3, backend: 1 } },
    { id: 'q3c', label: 'Secure login monitor that detects anomalies.', weights: { cybersecurity: 3, ai_data: 1 } },
    { id: 'q3d', label: 'Cloud deployment pipeline with automatic rollback.', weights: { devops_cloud: 3, backend: 1 } }
  ]},
  { id: 'q4', category: 'interest', prompt: 'You join a hackathon team late. Where do you naturally contribute first?', options: [
    { id: 'q4a', label: 'Polish the interface and clarify button labels.', weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q4b', label: 'Stabilize server logic and data flow.', weights: { backend: 3 } },
    { id: 'q4c', label: 'Create experiments to compare feature outcomes.', weights: { ai_data: 3 } },
    { id: 'q4d', label: 'Harden secrets, permissions, and deployment settings.', weights: { devops_cloud: 2, cybersecurity: 2 } }
  ]},
  { id: 'q5', category: 'interest', prompt: 'When a product succeeds, which outcome feels most rewarding to you?', options: [
    { id: 'q5a', label: 'Users say the app is easy and pleasant to use.', weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q5b', label: 'The service handles heavy use without breaking.', weights: { backend: 2, devops_cloud: 2 } },
    { id: 'q5c', label: 'The data reveals insights that guide better decisions.', weights: { ai_data: 3 } },
    { id: 'q5d', label: 'The system stays trustworthy against common attacks.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q6', category: 'interest', prompt: 'You have two free evenings to explore tech. What do you choose?', options: [
    { id: 'q6a', label: 'Rebuild a favorite app screen with accessibility improvements.', weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q6b', label: 'Build a REST API and test edge cases.', weights: { backend: 3 } },
    { id: 'q6c', label: 'Clean a dataset and compare simple prediction models.', weights: { ai_data: 3 } },
    { id: 'q6d', label: 'Practice threat modeling and secure configurations.', weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},

  { id: 'q7', category: 'thinking_style', prompt: 'When a project is ambiguous, your first move is usually:', options: [
    { id: 'q7a', label: 'Sketch user journeys before picking implementation details.', weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q7b', label: 'Define interfaces and contracts between components.', weights: { backend: 3 } },
    { id: 'q7c', label: 'List measurable goals and test assumptions quickly.', weights: { ai_data: 3, devops_cloud: 1 } },
    { id: 'q7d', label: 'Map trust boundaries and possible misuse paths.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q8', category: 'thinking_style', prompt: 'A teammate suggests a fast fix with unknown side effects. You think:', options: [
    { id: 'q8a', label: 'How might this affect user clarity and consistency?', weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q8b', label: 'What technical debt and maintenance cost does this add?', weights: { backend: 3 } },
    { id: 'q8c', label: 'Can we validate this with a quick experiment first?', weights: { ai_data: 3 } },
    { id: 'q8d', label: 'Could this open a security gap or compliance risk?', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q9', category: 'thinking_style', prompt: 'You are reviewing a new feature proposal. What stands out most?', options: [
    { id: 'q9a', label: 'Whether the interactions match user expectations.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q9b', label: 'Whether data models and APIs are future-proof.', weights: { backend: 3, devops_cloud: 1 } },
    { id: 'q9c', label: 'Whether success metrics are defined clearly.', weights: { ai_data: 3 } },
    { id: 'q9d', label: 'Whether permissions and auditability are covered.', weights: { cybersecurity: 3, backend: 1 } }
  ]},
  { id: 'q10', category: 'thinking_style', prompt: 'In a debate, you often win people over by:', options: [
    { id: 'q10a', label: 'Showing a concrete mockup or prototype.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q10b', label: 'Explaining architecture trade-offs clearly.', weights: { backend: 3 } },
    { id: 'q10c', label: 'Presenting data trends and measured outcomes.', weights: { ai_data: 3 } },
    { id: 'q10d', label: 'Highlighting risk scenarios and mitigation plans.', weights: { cybersecurity: 3, devops_cloud: 1 } }
  ]},
  { id: 'q11', category: 'thinking_style', prompt: 'A bug keeps returning. Your instinct is to:', options: [
    { id: 'q11a', label: 'Recheck the user flow where confusion starts.', weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q11b', label: 'Trace service dependencies and shared state.', weights: { backend: 3 } },
    { id: 'q11c', label: 'Analyze logs for patterns across incidents.', weights: { ai_data: 2, devops_cloud: 1 } },
    { id: 'q11d', label: 'Assess whether the bug can be exploited.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q12', category: 'thinking_style', prompt: 'When learning a new tool, what matters most to you?', options: [
    { id: 'q12a', label: 'Seeing how it improves real user interactions.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q12b', label: 'Understanding how it scales and integrates.', weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q12c', label: 'Knowing what data it produces and how to evaluate it.', weights: { ai_data: 3 } },
    { id: 'q12d', label: 'Knowing how safely it handles credentials and access.', weights: { cybersecurity: 3 } }
  ]},

  { id: 'q13', category: 'problem_solving', prompt: 'An API call intermittently fails in production. What do you do first?', options: [
    { id: 'q13a', label: 'Show a graceful fallback on the page and report context.', weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q13b', label: 'Reproduce with logs and isolate backend failure points.', weights: { backend: 3 } },
    { id: 'q13c', label: 'Correlate failures with traffic and infrastructure metrics.', weights: { devops_cloud: 3, ai_data: 1 } },
    { id: 'q13d', label: 'Check for abuse patterns or injection attempts.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q14', category: 'problem_solving', prompt: 'Users report slow page loads. Your strongest move is:', options: [
    { id: 'q14a', label: 'Optimize render paths and simplify heavy UI blocks.', weights: { frontend: 3 } },
    { id: 'q14b', label: 'Reduce payload sizes and improve endpoint efficiency.', weights: { backend: 3 } },
    { id: 'q14c', label: 'Benchmark bottlenecks with performance data.', weights: { ai_data: 2, devops_cloud: 1 } },
    { id: 'q14d', label: 'Verify CDN/security rules are not throttling legitimate users.', weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},
  { id: 'q15', category: 'problem_solving', prompt: 'You inherit unclear database tables. You begin by:', options: [
    { id: 'q15a', label: 'Mapping fields to what users actually see and do.', weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q15b', label: 'Documenting schema relationships and constraints.', weights: { backend: 3 } },
    { id: 'q15c', label: 'Profiling data quality issues and missing values.', weights: { ai_data: 3 } },
    { id: 'q15d', label: 'Reviewing access controls and data exposure risks.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q16', category: 'problem_solving', prompt: 'A deployment breaks after a dependency update. You prioritize:', options: [
    { id: 'q16a', label: 'Communicating impact clearly to users in the interface.', weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q16b', label: 'Pinning versions and validating service compatibility.', weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q16c', label: 'Improving CI checks to catch this earlier next time.', weights: { devops_cloud: 3 } },
    { id: 'q16d', label: 'Scanning for vulnerable packages before redeploying.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q17', category: 'problem_solving', prompt: 'Team members disagree on feature priority. You help by:', options: [
    { id: 'q17a', label: 'Running quick user interviews to clarify pain points.', weights: { ui_ux: 3 } },
    { id: 'q17b', label: 'Estimating engineering complexity and dependencies.', weights: { backend: 3 } },
    { id: 'q17c', label: 'Using usage data to rank likely impact.', weights: { ai_data: 3 } },
    { id: 'q17d', label: 'Flagging choices that increase security exposure.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q18', category: 'problem_solving', prompt: 'A feature works but fails under high load. Your fix strategy:', options: [
    { id: 'q18a', label: 'Simplify expensive client-side interactions.', weights: { frontend: 2 } },
    { id: 'q18b', label: 'Refactor bottleneck services and queue heavy tasks.', weights: { backend: 3 } },
    { id: 'q18c', label: 'Tune autoscaling, caching, and observability.', weights: { devops_cloud: 3 } },
    { id: 'q18d', label: 'Check denial-of-service protections and throttling.', weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},

  { id: 'q19', category: 'work_preference', prompt: 'Which team role feels most natural in a group project?', options: [
    { id: 'q19a', label: 'Crafting intuitive screens and interaction polish.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q19b', label: 'Owning core services and technical foundations.', weights: { backend: 3 } },
    { id: 'q19c', label: 'Maintaining deployment pipelines and reliability.', weights: { devops_cloud: 3 } },
    { id: 'q19d', label: 'Leading threat reviews and secure coding checks.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q20', category: 'work_preference', prompt: 'What kind of project meetings do you enjoy most?', options: [
    { id: 'q20a', label: 'Sessions where we test flows from a user perspective.', weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q20b', label: 'Architecture reviews with technical trade-offs.', weights: { backend: 3 } },
    { id: 'q20c', label: 'Metric reviews focused on outcomes and experiments.', weights: { ai_data: 3 } },
    { id: 'q20d', label: 'Risk reviews covering security and incident readiness.', weights: { cybersecurity: 3, devops_cloud: 1 } }
  ]},
  { id: 'q21', category: 'work_preference', prompt: 'Given ownership of one area, which would you choose?', options: [
    { id: 'q21a', label: 'Design system consistency and frontend quality.', weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q21b', label: 'API reliability and backend maintainability.', weights: { backend: 3 } },
    { id: 'q21c', label: 'Model performance and data pipeline quality.', weights: { ai_data: 3 } },
    { id: 'q21d', label: 'Platform resilience and deployment confidence.', weights: { devops_cloud: 3 } }
  ]},
  { id: 'q22', category: 'work_preference', prompt: 'You feel most productive when you can:', options: [
    { id: 'q22a', label: 'Iterate quickly on visual feedback.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q22b', label: 'Solve deep logic and edge cases.', weights: { backend: 3 } },
    { id: 'q22c', label: 'Investigate patterns and validate hypotheses.', weights: { ai_data: 3 } },
    { id: 'q22d', label: 'Reduce operational risks and improve trust.', weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},
  { id: 'q23', category: 'work_preference', prompt: 'Which project milestone excites you most?', options: [
    { id: 'q23a', label: 'First polished prototype users can click through.', weights: { ui_ux: 2, frontend: 2 } },
    { id: 'q23b', label: 'Stable backend API ready for multiple clients.', weights: { backend: 3 } },
    { id: 'q23c', label: 'Dashboard showing model or product performance gains.', weights: { ai_data: 3 } },
    { id: 'q23d', label: 'Zero-downtime release with automated checks.', weights: { devops_cloud: 3 } }
  ]},
  { id: 'q24', category: 'work_preference', prompt: 'In cross-functional work, you usually advocate for:', options: [
    { id: 'q24a', label: 'Clarity, accessibility, and smooth interaction.', weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q24b', label: 'System simplicity and maintainable architecture.', weights: { backend: 3 } },
    { id: 'q24c', label: 'Evidence-based decisions using data.', weights: { ai_data: 3 } },
    { id: 'q24d', label: 'Secure defaults and least-privilege access.', weights: { cybersecurity: 3 } }
  ]},

  { id: 'q25', category: 'learning_style', prompt: 'Which learning resource helps you improve fastest?', options: [
    { id: 'q25a', label: 'Interactive UI teardown videos and design critiques.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q25b', label: 'Backend architecture walkthroughs with code labs.', weights: { backend: 3 } },
    { id: 'q25c', label: 'Notebook-based tutorials with datasets and metrics.', weights: { ai_data: 3 } },
    { id: 'q25d', label: 'Capture-the-flag labs and security case studies.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q26', category: 'learning_style', prompt: 'When practicing, you prefer to start by:', options: [
    { id: 'q26a', label: 'Building a visible demo and refining details.', weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q26b', label: 'Creating robust service logic and tests.', weights: { backend: 3 } },
    { id: 'q26c', label: 'Running experiments and comparing outcomes.', weights: { ai_data: 3 } },
    { id: 'q26d', label: 'Configuring secure infrastructure in a sandbox.', weights: { devops_cloud: 2, cybersecurity: 2 } }
  ]},
  { id: 'q27', category: 'learning_style', prompt: 'How do you know you truly learned a topic?', options: [
    { id: 'q27a', label: 'I can make it simple and usable for others.', weights: { ui_ux: 2, frontend: 2 } },
    { id: 'q27b', label: 'I can explain internal trade-offs and constraints.', weights: { backend: 3 } },
    { id: 'q27c', label: 'I can measure improvement with reliable metrics.', weights: { ai_data: 3 } },
    { id: 'q27d', label: 'I can spot risks and prevent common failures.', weights: { cybersecurity: 3, devops_cloud: 1 } }
  ]},
  { id: 'q28', category: 'learning_style', prompt: 'Which assignment format motivates you most?', options: [
    { id: 'q28a', label: 'Prototype challenge with user feedback.', weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q28b', label: 'Service implementation with strict test cases.', weights: { backend: 3 } },
    { id: 'q28c', label: 'Data challenge with prediction and evaluation.', weights: { ai_data: 3 } },
    { id: 'q28d', label: 'Incident simulation and recovery drill.', weights: { devops_cloud: 2, cybersecurity: 2 } }
  ]},
  { id: 'q29', category: 'learning_style', prompt: 'When stuck, you are most likely to:', options: [
    { id: 'q29a', label: 'Replay the user flow and simplify interactions.', weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q29b', label: 'Read docs and inspect low-level implementation details.', weights: { backend: 3 } },
    { id: 'q29c', label: 'Collect evidence from logs and performance traces.', weights: { ai_data: 2, devops_cloud: 1 } },
    { id: 'q29d', label: 'Review security assumptions and permissions.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q30', category: 'learning_style', prompt: 'You retain knowledge best when:', options: [
    { id: 'q30a', label: 'I iterate on visuals and interaction details.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q30b', label: 'I build systems end-to-end and test them.', weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q30c', label: 'I compare approaches with data-backed results.', weights: { ai_data: 3 } },
    { id: 'q30d', label: 'I model threats and defend against them.', weights: { cybersecurity: 3 } }
  ]},

  { id: 'q31', category: 'real_world_scenario', prompt: 'A school portal update accidentally exposes private data. What would you lead first?', options: [
    { id: 'q31a', label: 'User-facing messaging so affected users understand next steps.', weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q31b', label: 'Service-side rollback and data access patching.', weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q31c', label: 'Forensic analysis to map affected records quickly.', weights: { ai_data: 2, cybersecurity: 1 } },
    { id: 'q31d', label: 'Containment plan, credential resets, and audit controls.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q32', category: 'real_world_scenario', prompt: 'Your app launches tomorrow and last-minute failures appear. You focus on:', options: [
    { id: 'q32a', label: 'Clear fallback UI and communication for users.', weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q32b', label: 'Critical backend fixes with safe deployment steps.', weights: { backend: 3 } },
    { id: 'q32c', label: 'Release health checks and rollback automation.', weights: { devops_cloud: 3 } },
    { id: 'q32d', label: 'Security verification of hotfixes before release.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q33', category: 'real_world_scenario', prompt: 'A nonprofit asks for a low-budget tech solution. You suggest:', options: [
    { id: 'q33a', label: 'Simple mobile-friendly interface with clear workflows.', weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q33b', label: 'Lean backend with maintainable core features.', weights: { backend: 3 } },
    { id: 'q33c', label: 'Basic analytics to monitor impact and improve over time.', weights: { ai_data: 3 } },
    { id: 'q33d', label: 'Secure hosting and least-privilege permissions from day one.', weights: { devops_cloud: 1, cybersecurity: 2 } }
  ]},
  { id: 'q34', category: 'real_world_scenario', prompt: 'You must present project outcomes to school leaders. You lead with:', options: [
    { id: 'q34a', label: 'Before/after user journey improvements.', weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q34b', label: 'System reliability and response-time improvements.', weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q34c', label: 'Data evidence showing measurable impact.', weights: { ai_data: 3 } },
    { id: 'q34d', label: 'Risk reduction and security hardening outcomes.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q35', category: 'real_world_scenario', prompt: 'A mobile network outage affects many users. Your first plan is:', options: [
    { id: 'q35a', label: 'Design lightweight screens that degrade gracefully.', weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q35b', label: 'Queue writes and sync once connection returns.', weights: { backend: 3 } },
    { id: 'q35c', label: 'Adjust infrastructure and monitor recovery metrics.', weights: { devops_cloud: 3 } },
    { id: 'q35d', label: 'Ensure offline behavior does not bypass protections.', weights: { cybersecurity: 3 } }
  ]},
  { id: 'q36', category: 'real_world_scenario', prompt: 'A student startup asks you to choose one quality bar before scaling. You pick:', options: [
    { id: 'q36a', label: 'Consistent experience across devices and abilities.', weights: { ui_ux: 2, frontend: 2 } },
    { id: 'q36b', label: 'Stable service contracts and clear data ownership.', weights: { backend: 3 } },
    { id: 'q36c', label: 'Reliable monitoring with alert-driven operations.', weights: { devops_cloud: 3 } },
    { id: 'q36d', label: 'Security-by-default configurations and review gates.', weights: { cybersecurity: 3 } }
  ]}
];
