# Yaari24 website

Production-ready Vite, React, and TypeScript website for [yaari24.online](https://yaari24.online), configured for Cloudflare Pages.

## Routes

- `/` — cinematic homepage
- `/features` — product stories, theme comparison, and screenshot gallery
- `/safety` — reporting, blocking, moderation, and account controls
- `/about` — Yaari24 community and mascot story
- `/download` — APK release details, install guide, and FAQ
- `/privacy` and `/terms` — legal content

Unknown routes display the branded, non-indexable 404 page. Route metadata updates canonical and Open Graph URLs.

## Local development

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

The site runs without `.env.local`. In that state every APK button is disabled and shows **Download unavailable**.

## Release configuration

```dotenv
VITE_APK_DOWNLOAD_URL=https://downloads.yaari24.online/yaari24-v1.0.0.apk
VITE_APK_VERSION=1.0.0
VITE_APK_SIZE=129.5 MB
VITE_APK_SHA256=55152CF5A9A26667682069F7B6AB2186C0C16633AFD06DA9F33ECDC69DDC7EA1
VITE_SUPPORT_EMAIL=support@yaari24.online
```

The APK URL must be a direct HTTPS file URL. The support email is optional. Google Play is centrally marked `comingSoon` in `src/config.ts`.

## Cloudflare Pages

Use these Git deployment settings:

- Framework preset: **React (Vite)**
- Production branch: `main`
- Root directory: `/`
- Build command: `npm run build`
- Build output directory: `dist`

The project pins Node 22, includes Cloudflare `_redirects` and `_headers`, and does not require Workers or Pages Functions. See [CLOUDFLARE.md](./CLOUDFLARE.md) for environment variables, R2 APK hosting, domain setup, and the deployment checklist.

## Build and preview

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
```

The deployable output is written to `dist/`.

## Assets

- Product screenshots: `public/assets/screens`
- Logos and app icon: `public/assets/brand`
- Mascot artwork: `public/assets/mascots`
- Authentic app UI artwork: `public/assets/app-icons`
- Local Poppins fonts: `public/assets/fonts`

Below-fold images are lazy-loaded, product pages are route-split, theme preference persists locally, and animation respects `prefers-reduced-motion`.

