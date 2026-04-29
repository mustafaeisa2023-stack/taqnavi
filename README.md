# Taqnavi

Taqnavi is a frontend-only quiz web app that helps university students explore suitable technology career tracks through short scenario-based questions in English and Arabic.

## Architecture (Frontend-Only)

- **Static frontend only**: no backend server, no database, and no external API calls.
- Quiz content, scoring, and track profiles are bundled in the app code.
- Language and theme preferences are saved locally in the browser (`localStorage`).

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Vitest
- CSS (single stylesheet)

## Getting Started

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm run test
```

### Preview production build locally

```bash
npm run preview
```

## Deployment Notes

Taqnavi is designed to be deployed as a static site.

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: **none required**
- No backend services are needed.

### Vercel / Static Hosting Notes

You can deploy to:

- **Vercel** (recommended for easiest GitHub integration)
- **Any static host** (Netlify, GitHub Pages, Cloudflare Pages, university hosting, nginx static folder, etc.)

Vercel defaults are enough:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

For detailed steps, see [`docs/deployment.md`](docs/deployment.md).

## Product Behavior Notes

### Bilingual support (English / Arabic)

- Language can be switched at any point in the app.
- Arabic uses RTL direction; English uses LTR direction.
- Language choice persists between refreshes.

### Light / Dark theme

- Theme can be toggled at any point in the app.
- Theme preference persists between refreshes.

## Event / Booth Readiness Checklist (Quick)

Before booth usage:

- [ ] Build succeeds locally (`npm run build`)
- [ ] Tests pass (`npm run test`)
- [ ] Deploy latest tested commit
- [ ] Open deployed URL in booth browser
- [ ] Verify English and Arabic flows
- [ ] Verify RTL/LTR switch behavior
- [ ] Verify light/dark theme toggle
- [ ] Verify final result + Top 3 display
- [ ] Verify restart behavior
- [ ] Print/test QR code on phones
- [ ] Keep a local fallback build ready

For full checklists, see:

- [`docs/event-readiness.md`](docs/event-readiness.md)
- [`docs/manual-qa.md`](docs/manual-qa.md)

## Manual QA Checklist

Use the complete checklist in [`docs/manual-qa.md`](docs/manual-qa.md) before any live student event.

## How to Update Quiz Questions After Deployment

1. Edit question content in `src/data/questions.ts`.
2. Keep the existing data structure (ids, options, weights format) intact.
3. Run:
   - `npm run test`
   - `npm run build`
4. Commit and deploy the updated build.
5. Re-run manual QA from [`docs/manual-qa.md`](docs/manual-qa.md).

## Guardrails: What Must NOT Be Added Without a New Architecture Decision

Do **not** add the following to this project unless the team explicitly approves a new architecture direction:

- Backend service
- Database
- Login/authentication
- AI API integration
- Firebase/Supabase
- Analytics SDKs
- Admin dashboard
- PDF export/share features
- Routing library migration
- Heavy dependencies that increase bundle complexity
- Complex deployment automation beyond static hosting needs

## Additional Documentation

- Deployment guide: [`docs/deployment.md`](docs/deployment.md)
- Event readiness guide: [`docs/event-readiness.md`](docs/event-readiness.md)
- Manual QA checklist: [`docs/manual-qa.md`](docs/manual-qa.md)
