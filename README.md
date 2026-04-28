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

## Sprint 3 summary

Sprint 3 improves result clarity and actionability while keeping recommendation language non-diagnostic and student-friendly.

### Result screen improvements

- Richer profile content for each track:
  - short description
  - why this fit explanation
  - likely strengths
  - watch-outs / reality checks
  - first skills
  - beginner learning path
  - mini project
  - starter topics
- Primary match card is more visually prominent.
- Top 3 matches include clearer labels, percentages, and one-line fit reasons.
- Disclaimer remains explicit: results are guided recommendations, not scientific diagnosis.
- Restart behavior and deterministic scoring remain unchanged.

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
3. Complete all 12 questions and verify the result screen appears.
4. Confirm primary result appears in a dominant card.
5. Confirm detailed sections appear:
   - Why this fits
   - Your likely strengths
   - Watch out
   - First skills to learn
   - Beginner learning path
   - Mini project to try
6. Confirm top 3 matches appear with percentages.
7. Confirm recommendation disclaimer appears and is non-diagnostic.
8. Click **Restart Quiz** and verify a new quiz attempt starts.
9. Confirm full flow remains usable at mobile width.
