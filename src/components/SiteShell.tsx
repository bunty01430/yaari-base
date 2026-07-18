import { type ReactNode, useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { DownloadButton } from './Actions';
import { APK } from '../config';

type Theme = 'light' | 'dark';
const nav = [
  { to: '/features', label: 'Features' },
  { to: '/safety', label: 'Safety' },
  { to: '/about', label: 'About' },
  { to: '/download', label: 'APK options' },
];

function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === 'dark'
    ? <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="currentColor" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    : <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" fill="currentColor" /></svg>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('yaari24-site-theme', theme);
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#030817' : '#fff8ee');
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={'site-header ' + (scrolled ? 'scrolled' : '')}>
      <div className="nav-shell container">
        <Link className="brand-link" to="/" aria-label="Yaari24 home"><img src="/assets/brand/yaari24-logo.webp" alt="Yaari24" width="170" height="103" /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'active' : undefined}>{item.label}</NavLink>)}
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}><ThemeIcon theme={theme} /></button>
          <DownloadButton compact />
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}><span /><span /></button>
        </div>
      </div>
      <div id="mobile-menu" className={'mobile-menu ' + (menuOpen ? 'open' : '')} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">{nav.map((item, index) => <NavLink key={item.to} to={item.to}><span>0{index + 1}</span>{item.label}</NavLink>)}</nav>
      </div>
    </header>
    <main id="main">{children}</main>
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><img src="/assets/brand/yaari24-logo.webp" alt="Yaari24" width="170" height="103" /><p>Your people. Your rooms. Your vibe.</p><span>Android v{APK.version}</span></div>
        <div><strong>Explore</strong><Link to="/features">Features</Link><Link to="/safety">Safety</Link><Link to="/about">About</Link></div>
        <div><strong>Get Yaari24</strong><Link to="/download">Choose 64-bit / 32-bit</Link><span>Google Play — Coming soon</span></div>
        <div><strong>Legal</strong><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Yaari24. Made with yaari in India.</span><span>yaari24.online</span></div>
    </footer>
  </>;
}
