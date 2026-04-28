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

## Sprint 4 summary

Sprint 4 focuses on booth-ready UI/UX polish while preserving the frontend-only architecture, question-selection behavior, and scoring logic.

### UI/UX improvements

- Refined landing screen with stronger value proposition, clearer quiz purpose, and a more dominant Start Quiz CTA.
- Improved quiz readability and interaction flow:
  - clearer progress indicators
  - larger touch-friendly answer cards
  - stronger selected-state visibility
  - disabled Next button until an answer is selected
- Restructured result experience into clearer visual blocks/cards:
  - Why this fits
  - Your likely strengths
  - Watch out
  - First skills to learn
  - Beginner learning path
  - Mini project to try
  - Starter topics
  - Top 3 matches
- Upgraded Top 3 layout for faster scanning with rank badges and stronger match emphasis.
- Added subtle hover/focus transitions and visible focus outlines for accessibility.
- Improved spacing, typography hierarchy, contrast, and mobile responsiveness.
- Maintained explicit non-diagnostic recommendation language.

## Manual test checklist

1. Open app and confirm the landing screen shows clear purpose, duration, and disclaimer.
2. Click **Start Quiz** and verify question 1 loads.
3. Select answers and confirm selected cards are visually distinct.
4. Confirm progress (question count and percentage) is clearly visible.
5. Verify **Next Question** / **See Result** is disabled until an answer is selected.
6. Complete all questions and verify the result screen appears.
7. Confirm result sections are readable and organized into separate cards/blocks.
8. Confirm **Top 3 matches** are clearly visible and easy to scan.
9. Confirm disclaimer appears on the result screen.
10. Click **Restart Quiz** and verify a new attempt starts quickly.
11. Confirm layout is readable at desktop/laptop width.
12. Confirm layout remains readable and usable at mobile width.
