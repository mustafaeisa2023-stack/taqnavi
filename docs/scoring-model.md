# Scoring Model — Taqnavi

## Track Definitions
Taqnavi scores answers across six tracks:
- `frontend`
- `backend`
- `ai_data`
- `cybersecurity`
- `devops_cloud`
- `ui_ux`

## Weighted Scoring Approach
- Each question has multiple answer options.
- Each option contributes weighted points to one or more tracks.
- User total score per track is the sum of all selected option weights.
- No randomness is used; same answers always produce the same scores.

## Top Match Selection
1. Calculate total score for each track.
2. Sort tracks by score descending.
3. Apply deterministic tie-breaking if scores are equal.
4. First item after sorting is the top match.

## Top 3 Match Calculation
1. Use the same sorted list from total scores.
2. Select the first three tracks after tie-breaking.
3. Display rank order (1, 2, 3) with scores and short reasoning.

## Tie-Breaking Rules
Use a fixed deterministic sequence:
1. Higher score on designated anchor questions (if configured).
2. If still tied, higher score on the latest answered question affecting tied tracks.
3. If still tied, fallback to fixed track order:
   `frontend` → `backend` → `ai_data` → `cybersecurity` → `devops_cloud` → `ui_ux`.

This ensures ties are always resolved the same way for identical answers.

## Transparency and Determinism
- Scoring weights should be documented in the question bank.
- Tie-breaker strategy should be explicitly documented and unchanged within a release.
- Users should be told results are recommendation guidance based on answers.

## TypeScript Sample Data Structures
```ts
export type TrackId =
  | 'frontend'
  | 'backend'
  | 'ai_data'
  | 'cybersecurity'
  | 'devops_cloud'
  | 'ui_ux';

export type TrackProfile = {
  id: TrackId;
  label: string;
  summary: string;
  nextSteps: string[];
};

export type AnswerOption = {
  id: string;
  label: string;
  // Weight contribution per track for this option
  weights: Partial<Record<TrackId, number>>;
};

export type Question = {
  id: string;
  prompt: string;
  options: AnswerOption[];
  // Optional for deterministic tie-breaking
  isAnchor?: boolean;
};

export type ScoreMap = Record<TrackId, number>;
```
