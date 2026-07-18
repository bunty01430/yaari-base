import { type PointerEvent, useRef } from 'react';
import { m, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { APK, type ApkArchitecture } from '../config';

function DownloadGlyph() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 18v2h14v-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function ArrowGlyph() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function DownloadButton({ compact = false, inverse = false, architecture = 'arm64', label }: { compact?: boolean; inverse?: boolean; architecture?: ApkArchitecture; label?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 230, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 230, damping: 18 });
  const release = APK[architecture];
  const defaultLabel = architecture === 'arm64' ? (compact ? '64-bit APK' : 'Download for most phones') : (compact ? '32-bit APK' : 'Download for older phones');
  const onMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (reduced || !matchMedia('(pointer:fine)').matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left - rect.width / 2) * 0.13);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  };
  const reset = () => { x.set(0); y.set(0); };
  const classes = ['download-button', compact ? 'compact' : '', inverse ? 'inverse' : '', architecture === 'armv7' ? 'secondary' : ''].filter(Boolean).join(' ');

  if (!release.downloadUrl) {
    return <button className={classes + ' unavailable'} type="button" disabled aria-label={`${release.architecture} APK download is not configured yet`}><DownloadGlyph /><span>{label || 'Download unavailable'}</span></button>;
  }

  return <m.a ref={ref} style={{ x, y }} className={classes} href={release.downloadUrl} onPointerMove={onMove} onPointerLeave={reset} onBlur={reset} aria-label={`Download Yaari24 version ${APK.version} ${release.architecture} Android APK`}><DownloadGlyph /><span>{label || defaultLabel}</span></m.a>;
}

export function PlayStoreBadge({ inverse = false }: { inverse?: boolean }) {
  return <div className={'play-badge ' + (inverse ? 'inverse' : '')} aria-label="Google Play release coming soon" aria-disabled="true">
    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m4 3 11 9L4 21V3Z" fill="#34A853" /><path d="m4 3 13 7-2 2L4 3Z" fill="#4285F4" /><path d="m4 21 13-7-2-2L4 21Z" fill="#FBBC04" /><path d="m17 10 3 2-3 2-2-2 2-2Z" fill="#EA4335" /></svg>
    <span><small>GET IT ON</small>Google Play</span><strong>Coming soon</strong>
  </div>;
}
