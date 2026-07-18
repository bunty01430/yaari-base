# Cloudflare Pages deployment

## Pages project

Create a **Pages** project from the dedicated `yaari-base` GitHub repository.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | React (Vite) |
| Root directory | `/` |
| Build command | `npm run build` |
| Build output directory | `dist` |

Node is pinned through `.node-version`. This project does not use Workers, Pages Functions, analytics, or custom cache rules.

## Environment variables

Configure these under **Settings → Environment variables**. Production uses the published release values; Preview should leave both download URLs empty unless test APKs are intentionally available.

| Variable | Production value |
| --- | --- |
| `VITE_APK_ARM64_DOWNLOAD_URL` | `https://github.com/bunty01430/yaari-base/releases/download/v1.0.1/yaari24-v1.0.1-arm64-v8a.apk` |
| `VITE_APK_ARM64_SIZE` | `46.0 MB` |
| `VITE_APK_ARM64_SHA256` | `2D57FEEF653594F37117236FE4D3A35ACD0285FFE4873A09BAB92813A370E1F8` |
| `VITE_APK_ARMV7_DOWNLOAD_URL` | `https://github.com/bunty01430/yaari-base/releases/download/v1.0.1/yaari24-v1.0.1-armeabi-v7a.apk` |
| `VITE_APK_ARMV7_SIZE` | `39.0 MB` |
| `VITE_APK_ARMV7_SHA256` | `2DFA0232D10F718ADEE8B7DD46C76A663B3267DD1F1DD277A3D67DFB0D73FC88` |
| `VITE_APK_VERSION` | `1.0.1` |
| `VITE_SUPPORT_EMAIL` | Public support address, optional |

The old `VITE_APK_DOWNLOAD_URL`, `VITE_APK_SIZE`, and `VITE_APK_SHA256` variables are accepted temporarily as an ARM64 fallback. Remove them from Cloudflare after the architecture-specific variables are active. Environment values are embedded at build time, so trigger a new deployment after changes.

## APK hosting with GitHub Releases

Do not commit APK binaries to Git. Publish architecture-labelled assets on a versioned GitHub Release:

- `yaari24-v1.0.1-arm64-v8a.apk` for most modern Android phones.
- `yaari24-v1.0.1-armeabi-v7a.apk` for older 32-bit Android phones.

Version `1.0.1` starts the permanent production signing identity. Users who installed the debug-signed `v1.0.0` release must uninstall it before installing `v1.0.1`. Uninstalling clears local app data; server-backed accounts remain available after sign-in.

## Domain setup

1. In the Pages project, open **Custom domains** and attach `yaari24.online`.
2. Confirm the automatically provisioned HTTPS certificate is active.
3. Create a Cloudflare Redirect Rule for `www.yaari24.online/*` to `https://yaari24.online/$1` with status **301**.
4. Keep `yaari24.online` as the canonical hostname.

## Verification

1. Open and refresh every public route directly.
2. Verify `/robots.txt`, `/sitemap.xml`, and response security headers.
3. Confirm both APK buttons use the matching GitHub Release assets.
4. Confirm Google Play remains a non-clickable “Coming soon” control.
5. Check production and preview deployments at mobile, tablet, and desktop widths.
