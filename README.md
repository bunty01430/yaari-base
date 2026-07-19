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
VITE_APK_ARM64_DOWNLOAD_URL=https://github.com/bunty01430/yaari-base/releases/download/v1.0.2/yaari24-v1.0.2-arm64-v8a.apk
VITE_APK_ARM64_SIZE=46.0 MB
VITE_APK_ARM64_SHA256=F51D203B5ADC86F15AB7FE784DE7FCD3F7D8A1644758B05655E1FD0B235E3026
VITE_APK_ARMV7_DOWNLOAD_URL=https://github.com/bunty01430/yaari-base/releases/download/v1.0.2/yaari24-v1.0.2-armeabi-v7a.apk
VITE_APK_ARMV7_SIZE=39.0 MB
VITE_APK_ARMV7_SHA256=4AF1A81200C974F33E9F116F1964E7D94391C5E0A95CEA77BB092615B5930019
VITE_APK_VERSION=1.0.2
VITE_SUPPORT_EMAIL=support@yaari24.online
```

Both APK URLs must point to the architecture-labelled assets attached to the matching GitHub Release. ARM64 is the primary download and the legacy single-APK variables remain a temporary ARM64 fallback. Keep APK binaries out of Git history. The support email is optional. Google Play is centrally marked `comingSoon` in `src/config.ts`.

## Cloudflare Pages

Use these Git deployment settings:

- Framework preset: **React (Vite)**
- Production branch: `main`
- Root directory: `/`
- Build command: `npm run build`
- Build output directory: `dist`

The project pins Node 22, includes Cloudflare `_redirects` and `_headers`, and does not require Workers or Pages Functions. See [CLOUDFLARE.md](./CLOUDFLARE.md) for environment variables, GitHub Release APK hosting, domain setup, and the deployment checklist.

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
