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
| `VITE_APK_DOWNLOAD_URL` | Official direct HTTPS APK URL | Empty unless a test APK is approved |
| `VITE_APK_VERSION` | `1.0.0` | Same as production |
| `VITE_APK_SIZE` | `129.5 MB` | Same as production |
| `VITE_APK_SHA256` | Release checksum | Same as production |
| `VITE_SUPPORT_EMAIL` | Public support address | Optional |

Environment values are embedded at build time. Trigger a new Pages deployment after changing them.

## APK hosting with R2

Do not commit the APK to Git. Upload it to an R2 bucket and expose it through a custom domain such as `downloads.yaari24.online`.

Use:

- Content-Type: `application/vnd.android.package-archive`
- Content-Disposition: `attachment; filename="yaari24-v1.0.0.apk"`
- A versioned object name rather than overwriting an existing release
- The published file's SHA-256 value in `VITE_APK_SHA256`

## Domain setup

1. In the Pages project, open **Custom domains** and attach `yaari24.online`.
2. Confirm the automatically provisioned HTTPS certificate is active.
3. Create a Cloudflare Redirect Rule for `www.yaari24.online/*` to `https://yaari24.online/$1` with status **301**.
4. Keep `yaari24.online` as the canonical hostname.

## Verification

After deployment:

1. Open and refresh every public route directly.
2. Verify `/robots.txt`, `/sitemap.xml`, and response security headers.
3. Confirm APK buttons use the R2/custom-domain URL.
4. Confirm Google Play remains a non-clickable “Coming soon” control.
5. Check production and preview deployments at mobile, tablet, and desktop widths.
