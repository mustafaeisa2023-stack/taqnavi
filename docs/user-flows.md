# User Flows — Taqnavi

## 1) Start Screen Flow
1. User sees app title, short description, and disclaimer.
2. User taps/clicks **Start Quiz**.
3. App enters question 1.

## 2) Quiz Flow
1. Show one question at a time with single-select options.
2. User selects one option and moves to next question.
3. Progress indicator updates each step.
4. On final question, user submits.
5. App calculates deterministic scores and ranking.

## 3) Result Flow
1. Display top match prominently.
2. Show top 3 ranked tracks with score/order.
3. Provide short explanation and suggested next steps.
4. Show disclaimer that recommendation is based on answers, not diagnosis.

## 4) Restart Flow
1. User clicks **Retake Quiz** or **Start Over**.
2. App clears current answers and scores.
3. Return to start screen (or first question in kiosk mode).

## 5) Booth Usage Flow
1. Staff opens Taqnavi in full-screen on shared device.
2. Visitor completes quiz quickly (target: under 3 minutes).
3. Visitor views result and optionally takes a photo/note.
4. Staff triggers restart for next visitor.

## 6) Basic Failure / Empty-State Considerations
- If user tries to continue without selecting an option, show inline prompt.
- If scoring data is unavailable/corrupt, show friendly error and restart action.
- If result cannot be generated, return to start with a clear message.
- Keep error language simple and booth-appropriate.
