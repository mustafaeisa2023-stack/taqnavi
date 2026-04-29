# Deployment Guide

## Deployment Overview

Taqnavi is a static, frontend-only React + Vite app. Deployment is a build-and-host workflow with no backend services.

## Recommended Deployment Path

Use either:

1. **Vercel** (recommended for easiest GitHub-based deployment), or
2. **Any static hosting platform** that can serve the `dist` folder.

## Build Command

```bash
npm run build
```

## Output Directory

`dist`

## Environment Variables

None required.

## How to Deploy from GitHub (Vercel)

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Confirm project settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.
5. Open the generated URL and run manual QA checks.

## How to Deploy to Generic Static Hosting

1. Run `npm run build` locally or in CI.
2. Upload the `dist` folder to your static host.
3. Configure host to serve `index.html` as the default entry.
4. Open the public URL and run manual QA checks.

## How to Update After Deployment

1. Make content/code updates in the repo.
2. Run:
   - `npm run test`
   - `npm run build`
3. Merge/push changes.
4. Redeploy on Vercel (auto via GitHub) or upload new `dist` artifacts.
5. Re-verify production behavior.

## How to Verify Production Deployment

- Open deployed URL on desktop and mobile.
- Verify English and Arabic switching works.
- Verify RTL in Arabic and LTR in English.
- Verify light/dark theme toggle works.
- Complete a full quiz attempt and confirm result + Top 3.
- Confirm Restart Quiz works.

## Rollback Note

If a release has a regression:

- Vercel: redeploy the previous known-good deployment.
- Generic static host: replace current `dist` with prior known-good artifact.

Always keep one previously verified build artifact or commit reference.

## Static App Limitations

- No server-side data storage.
- No user login or personalized history.
- No server-based analytics.
- Updates require rebuilding and redeploying static assets.
