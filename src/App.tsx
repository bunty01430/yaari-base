import { lazy, Suspense } from 'react';
import { AnimatePresence, LazyMotion, domAnimation } from 'motion/react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { SiteShell } from './components/SiteShell';

const HomePage = lazy(() => import('./pages/HomePage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const SafetyPage = lazy(() => import('./pages/SafetyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RoutedSite() {
  const location = useLocation();
  return (
    <SiteShell>
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<div className="route-loader" role="status"><span />Loading Yaari24…</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </SiteShell>
  );
}

export default function App() {
  return <LazyMotion features={domAnimation} strict><BrowserRouter><RoutedSite /></BrowserRouter></LazyMotion>;
}
