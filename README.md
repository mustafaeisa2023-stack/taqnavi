# Taqnavi

Taqnavi is a frontend-only interactive quiz that gives students a guided recommendation for tech career paths based on scenario-based answers.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Sprint 1 includes

- Landing/start screen
- 12-question scenario-based quiz flow
- Progress indicator
- Weighted deterministic scoring
- Primary + top 3 track recommendations with percentages
- Restart quiz flow
- Local question bank and local track profiles for six tracks
- Frontend-only implementation (no backend/auth/database/API integration)

Tracks included:
- frontend
- backend
- ai_data
- cybersecurity
- devops_cloud
- ui_ux

## Manual test checklist

1. Open app and confirm start screen appears with disclaimer.
2. Click **Start Quiz** and verify question 1 loads.
3. Try clicking next without selecting an option; verify inline validation appears.
4. Select answers through all 12 questions and verify progress updates each step.
5. Confirm result screen appears after final question.
6. Confirm primary match, top 3 matches, and percentages are shown.
7. Confirm result includes “why fit”, strengths, first skills, and mini project.
8. Confirm disclaimer states recommendation is not scientific diagnosis.
9. Click **Restart Quiz** and verify flow resets to start.
10. Repeat with different answer combinations and verify deterministic results.
