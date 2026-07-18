/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APK_DOWNLOAD_URL?: string;
  readonly VITE_APK_VERSION?: string;
  readonly VITE_APK_SIZE?: string;
  readonly VITE_APK_SHA256?: string;
  readonly VITE_SUPPORT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
