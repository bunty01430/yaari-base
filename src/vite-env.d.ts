/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APK_ARM64_DOWNLOAD_URL?: string;
  readonly VITE_APK_ARM64_SIZE?: string;
  readonly VITE_APK_ARM64_SHA256?: string;
  readonly VITE_APK_ARMV7_DOWNLOAD_URL?: string;
  readonly VITE_APK_ARMV7_SIZE?: string;
  readonly VITE_APK_ARMV7_SHA256?: string;
  readonly VITE_APK_VERSION?: string;
  readonly VITE_SUPPORT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
