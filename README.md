# Karan Kendre · Quiet portfolio

The existing karaan.me Next.js project, adapted to Folio Supply's Quiet template.

- `/`: biography, experience, featured projects, work dialog, and contact links.
- `/projects`: all nine projects, including five featured tools.
- `/desk`: owned gadgets, desk accessories, and furniture with the original Amazon links.
- `/gallery`: existing design recreations and their X posts.

## Develop and verify

```sh
npm ci --legacy-peer-deps
npm run dev
npm run typecheck
npm run build
```

Content lives in `lib/portfolio.ts`; Quiet styles in `app/quiet.css`. The dialog and India clock are in `components/quiet-interactions.tsx`. Existing coding-time API routes remain available.

## Deployment

This source is linked to the existing Vercel project `portfolio-website` in `karan-kendres-projects`, serving `karaan.me` and `www.karaan.me`. The connected repository is `kendrekaran/portfolio-website`, production branch `main`. `vercel.json` uses the npm lockfile for repeatable installs.

```sh
vercel link --yes --project portfolio-website --scope karan-kendres-projects
vercel deploy --prod
```

Original production deployment before this redesign: `dpl_8QcwVwrxRxiBYaomU3eZFfzyAZvr`.

See `CREDITS.md` for template and image attribution. The implementation follows the Next.js 15 App Router documentation and Vercel's CLI deployment guide.
