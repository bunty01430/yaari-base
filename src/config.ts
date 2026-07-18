export const APK = {
  downloadUrl: import.meta.env.VITE_APK_DOWNLOAD_URL?.trim() ?? '',
  version: import.meta.env.VITE_APK_VERSION?.trim() || '1.0.0',
  size: import.meta.env.VITE_APK_SIZE?.trim() || '129.5 MB',
  sha256: import.meta.env.VITE_APK_SHA256?.trim() || '55152CF5A9A26667682069F7B6AB2186C0C16633AFD06DA9F33ECDC69DDC7EA1',
} as const;

export const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL?.trim() ?? '';
export const PLAY_STORE = { status: 'comingSoon' as const, url: '' };
export const BRAND = { name: 'Yaari24', siteUrl: 'https://yaari24.online', tagline: 'Your people. Your rooms. Your vibe.' } as const;
