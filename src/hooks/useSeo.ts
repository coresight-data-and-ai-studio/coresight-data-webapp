import { useEffect } from 'react';

interface SeoOptions {
  /** Full page title, shown in the browser tab and search results. */
  title: string;
  /** One or two sentence summary used as the meta description. */
  description: string;
  /** Path only, e.g. "/services". Defaults to the current path. */
  path?: string;
}

const SITE_NAME = 'CoreSight Data & AI Studio';
const SITE_URL = 'https://www.coresight-data.de';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Sets document title + meta description + canonical URL for the current page.
 *
 * Note: since this is a client-rendered SPA (no server-side rendering), this
 * only updates tags after the page has hydrated in the browser. It's enough
 * for browser tabs, browser history, and JS-rendering search crawlers (which
 * covers modern Google/Bing crawling). Getting these tags into the very
 * first HTML response — which matters for link-preview bots on platforms
 * like LinkedIn/Facebook that don't execute JavaScript — would require adding
 * a prerendering or SSR step, which is a reasonable future upgrade but out
 * of scope for this rewrite.
 */
export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);

    const url = `${SITE_URL}${path ?? window.location.pathname}`;
    setMetaTag('property', 'og:url', url);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path]);
}
