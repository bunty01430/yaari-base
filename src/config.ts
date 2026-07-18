const legacyDownloadUrl = import.meta.env.VITE_APK_DOWNLOAD_URL?.trim() ?? '';
const legacySize = import.meta.env.VITE_APK_SIZE?.trim() ?? '';
const legacySha256 = import.meta.env.VITE_APK_SHA256?.trim() ?? '';

export const APK = {
  version: import.meta.env.VITE_APK_VERSION?.trim() || '1.0.1',
  arm64: {
    architecture: 'arm64-v8a' as const,
    downloadUrl: import.meta.env.VITE_APK_ARM64_DOWNLOAD_URL?.trim() || legacyDownloadUrl,
    size: import.meta.env.VITE_APK_ARM64_SIZE?.trim() || legacySize || '46.0 MB',
    sha256: import.meta.env.VITE_APK_ARM64_SHA256?.trim() || legacySha256 || '2D57FEEF653594F37117236FE4D3A35ACD0285FFE4873A09BAB92813A370E1F8',
  },
  armv7: {
    architecture: 'armeabi-v7a' as const,
    downloadUrl: import.meta.env.VITE_APK_ARMV7_DOWNLOAD_URL?.trim() ?? '',
    size: import.meta.env.VITE_APK_ARMV7_SIZE?.trim() || '39.0 MB',
    sha256: import.meta.env.VITE_APK_ARMV7_SHA256?.trim() || '2DFA0232D10F718ADEE8B7DD46C76A663B3267DD1F1DD277A3D67DFB0D73FC88',
  },
} as const;

export type ApkArchitecture = keyof Pick<typeof APK, 'arm64' | 'armv7'>;
export const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL?.trim() ?? '';
export const PLAY_STORE = { status: 'comingSoon' as const, url: '' };
export const BRAND = { name: 'Yaari24', siteUrl: 'https://yaari24.online', tagline: 'Your people. Your rooms. Your vibe.' } as const;
