const DEFAULT_ARM64_URL = 'https://github.com/bunty01430/yaari-base/releases/download/v1.0.2/yaari24-v1.0.2-arm64-v8a.apk';
const DEFAULT_ARMV7_URL = 'https://github.com/bunty01430/yaari-base/releases/download/v1.0.2/yaari24-v1.0.2-armeabi-v7a.apk';

export const APK = {
  version: import.meta.env.VITE_APK_VERSION?.trim() || '1.0.2',
  arm64: {
    architecture: 'arm64-v8a' as const,
    downloadUrl: import.meta.env.VITE_APK_ARM64_DOWNLOAD_URL?.trim() || DEFAULT_ARM64_URL,
    size: import.meta.env.VITE_APK_ARM64_SIZE?.trim() || '46.0 MB',
    sha256: import.meta.env.VITE_APK_ARM64_SHA256?.trim() || 'F51D203B5ADC86F15AB7FE784DE7FCD3F7D8A1644758B05655E1FD0B235E3026',
  },
  armv7: {
    architecture: 'armeabi-v7a' as const,
    downloadUrl: import.meta.env.VITE_APK_ARMV7_DOWNLOAD_URL?.trim() || DEFAULT_ARMV7_URL,
    size: import.meta.env.VITE_APK_ARMV7_SIZE?.trim() || '39.0 MB',
    sha256: import.meta.env.VITE_APK_ARMV7_SHA256?.trim() || '4AF1A81200C974F33E9F116F1964E7D94391C5E0A95CEA77BB092615B5930019',
  },
} as const;

export type ApkArchitecture = keyof Pick<typeof APK, 'arm64' | 'armv7'>;
export const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL?.trim() ?? '';
export const PLAY_STORE = { status: 'comingSoon' as const, url: '' };
export const BRAND = { name: 'Yaari24', siteUrl: 'https://yaari24.online', tagline: 'Your people. Your rooms. Your vibe.' } as const;
