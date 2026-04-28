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

## Sprint 2 summary

Sprint 2 expands the local question bank and introduces balanced quiz selection per attempt while keeping the app frontend-only and deterministic in scoring.

### Sprint 2 behavior

- Question bank expanded to **36 local scenario-based questions**.
- Every question now includes a `category` from:
  - `interest`
  - `thinking_style`
  - `problem_solving`
  - `work_preference`
  - `learning_style`
  - `real_world_scenario`
- Each quiz attempt still asks exactly **12 questions**.
- Question selection is balanced: every attempt includes at least one question from each category.
- No duplicate questions are selected within a single attempt.
- Restart generates a fresh balanced 12-question set.
- Scoring weights are unchanged in behavior: deterministic for any fixed selected question set + answers.

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
3. Confirm the quiz contains exactly 12 questions (via progress indicator).
4. Try clicking next without selecting an option; verify inline validation appears.
5. Complete all 12 questions and verify the result screen appears.
6. Confirm primary match and Top 3 matches still appear with percentages.
7. Confirm disclaimer still states this is guidance, not a scientific diagnosis.
8. Click **Restart Quiz** and verify a new 12-question attempt starts.
9. Confirm restart still supports full completion to results.
10. Check layout on mobile width and verify core flow remains usable.
