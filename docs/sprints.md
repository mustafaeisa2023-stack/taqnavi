# Delivery Plan — Taqnavi

## Sprint 1: Static MVP
### Goal
Deliver a complete local/static guided recommendation experience.

### Scope
- Start screen, quiz flow, result screen, restart flow
- Initial question bank and weighted scoring logic
- Top 1 + Top 3 result presentation
- Disclaimer and booth-friendly UI baseline

### Expected Output
A usable static web app prototype that can run locally for demonstrations.

### Acceptance Criteria
- End-to-end flow works without backend
- Deterministic scoring returns stable results
- Result includes top match, top 3, and guidance disclaimer
- Restart clears session cleanly

## Sprint 2: Question Bank Expansion
### Goal
Improve recommendation quality through better coverage of scenarios.

### Scope
- Add more scenario-based questions
- Rebalance weights across all six tracks
- Validate clarity and answer-option distinctness

### Expected Output
Expanded question set with documented weights and updated track coverage.

### Acceptance Criteria
- Question bank significantly larger than Sprint 1 baseline
- No ambiguous duplicate options within a question
- Weight table is internally consistent and deterministic

## Sprint 3: Result Experience
### Goal
Make results more understandable and actionable.

### Scope
- Improve explanation text per track
- Add concise next-step suggestions per recommended track
- Improve readability and hierarchy of result layout

### Expected Output
A clearer result page that supports fast understanding and immediate action.

### Acceptance Criteria
- Users can identify top recommendation at a glance
- Top 3 alternatives are clearly ranked
- Recommendation language avoids scientific/diagnostic claims

## Sprint 4: Booth Polish
### Goal
Optimize for high-throughput event/kiosk usage.

### Scope
- Full-screen and touch-friendly polish
- Faster restart/reset interactions
- Accessibility and readability improvements for shared screens

### Expected Output
A stable booth-ready flow for repeated use during events.

### Acceptance Criteria
- Smooth repeated runs with no stale state
- Clear CTA buttons and readable text at typical booth distances
- Common empty/error states recover quickly

## Sprint 5: Optional Analytics
### Goal
Add lightweight, privacy-conscious usage insights (optional).

### Scope
- Anonymous aggregate events (start, completion, top track)
- Basic dashboard/report export via static logs or simple tooling
- No personally identifiable data collection

### Expected Output
Optional visibility into usage and completion trends.

### Acceptance Criteria
- Analytics is strictly optional and non-blocking
- No auth/backend dependency introduced for core quiz flow
- Data captured is aggregate and minimal
