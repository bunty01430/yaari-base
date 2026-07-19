import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BRAND } from '../config';

export function PageMeta({ title, description, noIndex = false }: { title: string; description: string; noIndex?: boolean }) {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = new URL(location.pathname, BRAND.siteUrl).toString();
    const shareImage = new URL('/assets/brand/yaari24-icon.webp', BRAND.siteUrl).toString();
    document.title = title;

    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', shareImage);
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', 'Yaari24 app icon');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', shareImage);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, location.pathname, noIndex, title]);

  return null;
}
