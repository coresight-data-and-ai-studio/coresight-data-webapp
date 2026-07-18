const STORAGE_KEY = 'coresight-cookie-consent';

export type ConsentValue = 'all' | 'essential';

/**
 * Reads the visitor's stored cookie choice. The site currently sets no
 * non-essential cookies at all (no analytics, no ad tech), so nothing reads
 * this yet \u2014 but it's here and ready for the day an analytics script or
 * similar gets added, so that script can be gated behind
 * `getCookieConsent() === 'all'` instead of loading unconditionally.
 */
export function getCookieConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === 'all' || value === 'essential' ? value : null;
}

export function setCookieConsent(value: ConsentValue): void {
  window.localStorage.setItem(STORAGE_KEY, value);
}
