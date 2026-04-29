# Event Readiness Guide

This guide prepares Taqnavi for university booth usage as a static frontend-only app.

## Pre-Event Checklist

- [ ] `npm install` completed on booth machine or prep machine.
- [ ] `npm run test` passes on the final commit.
- [ ] `npm run build` succeeds on the final commit.
- [ ] Deployed URL is updated to the same tested commit.
- [ ] QR code points to the exact deployed URL.
- [ ] Team verifies English and Arabic end-to-end quiz completion.

## Booth Laptop / Device Setup Checklist

- [ ] Fully charge laptop(s) and carry charger/power extension.
- [ ] Use a modern browser (Chrome/Edge/Safari/Firefox latest stable).
- [ ] Disable sleep during active booth hours.
- [ ] Set screen brightness for indoor visibility.
- [ ] Confirm keyboard language toggle does not interfere with usage.
- [ ] Keep one backup device available if possible.

## Browser Setup Checklist

- [ ] Open the deployed URL once before students arrive.
- [ ] Allow normal local storage behavior (for language/theme persistence).
- [ ] Clear unrelated tabs/extensions that may affect performance.
- [ ] Pin the tab for quick recovery if accidentally closed.
- [ ] Optional: open app in full-screen/kiosk-like mode.

## Language Switching Checks

- [ ] Confirm EN starts and works correctly.
- [ ] Switch to Arabic and confirm all labels update.
- [ ] Confirm quiz and result screens also switch language correctly.
- [ ] Confirm language persists after refresh.

## Light / Dark Theme Checks

- [ ] Toggle light mode and verify readability.
- [ ] Toggle dark mode and verify readability.
- [ ] Confirm contrast is acceptable on booth screen.
- [ ] Confirm theme persists after refresh.

## QR Code Usage Notes

- Print or display a high-contrast QR code with enough size for quick scanning.
- Include a short fallback URL text under the QR code.
- Test with at least two phones (iOS + Android if available).
- Keep one alternate QR copy (printed or on another device).

## Internet Fallback Notes

- If Wi-Fi is unstable, use a prepared mobile hotspot.
- Keep the deployed URL lightweight (static app already supports this).
- If network fails temporarily, pause intake and move students to backup device.

## Local Fallback Notes

- Keep a local production build ready:
  - Run `npm run build`
  - Run `npm run preview`
- Use local preview as an emergency demo fallback if internet access is lost.
- Note: local preview link is for booth operators, not public student traffic.

## Testing Checklist Before Students Use It

- [ ] Landing page opens correctly.
- [ ] Logo loads correctly.
- [ ] Start quiz works.
- [ ] Final question CTA behavior is correct before and after selecting answer.
- [ ] Result page displays primary match and Top 3.
- [ ] Disclaimer appears.
- [ ] Restart works.
- [ ] Mobile width check done.

(Use full QA list in `docs/manual-qa.md`.)

## During-Event Operating Notes

- Keep one team member monitoring flow and assisting students.
- If a session gets stuck, use Restart Quiz.
- If rendering glitches occur, refresh page once.
- Track observed student confusion points in quick notes.
- Avoid modifying production during live hours unless critical.

## Post-Event Improvement Notes

- Collect qualitative feedback from students and facilitators.
- Record recurring confusion points (language, terminology, result clarity).
- Prioritize content/UI wording improvements in a later sprint.
- Re-run manual QA before next event after any update.

## Known Limitations of Frontend-Only Deployment

- No server-side analytics or centralized usage metrics.
- No account system or session sync across devices.
- Content updates require a rebuild and redeploy.
- No backend persistence for results/history.
