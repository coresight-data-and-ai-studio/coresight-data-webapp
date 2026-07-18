import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { getCookieConsent, setCookieConsent, type ConsentValue } from '@/lib/cookieConsent';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(() => getCookieConsent() === null);

  const choose = (value: ConsentValue) => {
    setCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-700 bg-slate-900/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
          <p className="text-sm text-slate-300">
            We use essential cookies to run this site. With your consent, we may also use optional
            cookies to understand site usage. Read our{' '}
            <Link to="/cookies" className="text-brand-400 underline hover:text-brand-300">
              Cookie Policy
            </Link>{' '}
            to learn more.
          </p>
        </div>
        <div className="flex w-full shrink-0 gap-3 sm:w-auto">
          <button
            onClick={() => choose('essential')}
            className="flex-1 rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 sm:flex-none"
          >
            Essential Only
          </button>
          <button
            onClick={() => choose('all')}
            className="flex-1 rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-500 sm:flex-none"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};
