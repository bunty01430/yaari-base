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

Configure these separately under **Settings → Environment variables** for Production and Preview:

| Variable | Production | Preview |
| --- | --- | --- |
| `VITE_APK_DOWNLOAD_URL` | Direct GitHub Release asset URL | Empty unless a test APK is approved |
| `VITE_APK_VERSION` | `1.0.0` | Same as production |
| `VITE_APK_SIZE` | `129.5 MB` | Same as production |
| `VITE_APK_SHA256` | Release checksum | Same as production |
| `VITE_SUPPORT_EMAIL` | Public support address | Optional |

Environment values are embedded at build time. Trigger a new Pages deployment after changing them.

## APK hosting with GitHub Releases

Do not commit the APK to the repository. Publish it as a binary asset on a versioned GitHub Release in `bunty01430/yaari-base`.

For version `1.0.0`:

1. Create tag and release `v1.0.0`.
2. Upload the APK as `yaari24-v1.0.0.apk`.
3. Set `VITE_APK_DOWNLOAD_URL` to `https://github.com/bunty01430/yaari-base/releases/download/v1.0.0/yaari24-v1.0.0.apk`.
4. Keep the release asset filename and tag versioned rather than replacing an old binary.
5. Publish the uploaded file's SHA-256 value through `VITE_APK_SHA256`.

GitHub serves the release asset as a direct HTTPS download. The website source and APK release can therefore live under the same GitHub repository without adding the APK to Git history.

## Domain setup

1. In the Pages project, open **Custom domains** and attach `yaari24.online`.
2. Confirm the automatically provisioned HTTPS certificate is active.
3. Create a Cloudflare Redirect Rule for `www.yaari24.online/*` to `https://yaari24.online/$1` with status **301**.
4. Keep `yaari24.online` as the canonical hostname.

## Verification

After deployment:

1. Open and refresh every public route directly.
2. Verify `/robots.txt`, `/sitemap.xml`, and response security headers.
3. Confirm APK buttons use the GitHub Release asset URL.
4. Confirm Google Play remains a non-clickable “Coming soon” control.
5. Check production and preview deployments at mobile, tablet, and desktop widths.
