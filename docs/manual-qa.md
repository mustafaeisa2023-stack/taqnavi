# Manual QA Checklist

Run this checklist before release and before any live university booth session.

## Core Flow Checks

- [ ] Open landing page.
- [ ] Confirm logo appears correctly.
- [ ] Start quiz in English.
- [ ] Switch English/Arabic.
- [ ] Confirm RTL in Arabic.
- [ ] Confirm LTR in English.
- [ ] Complete quiz in English.
- [ ] Complete quiz in Arabic.

## Final Question CTA Behavior

- [ ] Confirm final question CTA does not show result before selecting an answer.
- [ ] Confirm final question CTA changes after selecting an answer.

## Result Screen Checks

- [ ] Confirm result page appears.
- [ ] Confirm primary match appears.
- [ ] Confirm Top 3 matches appear.
- [ ] Confirm disclaimer appears.
- [ ] Confirm restart works.

## Theme and Display Checks

- [ ] Confirm light mode.
- [ ] Confirm dark mode.
- [ ] Test laptop screen.
- [ ] Test mobile width.

## Build and Deployment Checks

- [ ] Test after production build.
- [ ] Test deployed URL.
- [ ] Test QR code opening on phone.

## Suggested Execution Order

1. Run `npm run test`.
2. Run `npm run build`.
3. Run `npm run preview` and complete all checks locally.
4. Deploy.
5. Repeat key checks on deployed URL.
