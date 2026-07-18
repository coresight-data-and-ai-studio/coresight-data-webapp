import React from 'react';
import { useSeo } from '@/hooks/useSeo';

export const CookiePolicy: React.FC = () => {
  useSeo({
    title: 'Cookie Policy',
    description: 'How CoreSight Data & AI Studio uses cookies, and how to manage your preferences.',
    path: '/cookies',
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold text-white">Cookie Policy</h1>
      <div className="prose prose-invert prose-slate max-w-none text-slate-300">
        <p className="mb-4">Last updated: October 26, 2025</p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device by websites
          that you visit. They are widely used in order to make websites work, or work more
          efficiently, as well as to provide information to the owners of the site.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">2. Cookies We Currently Use</h2>
        <p>
          When you first visit our site, a banner asks you to choose between &quot;Essential
          Only&quot; and &quot;Accept All&quot;. Today, the only cookie we set is:
        </p>
        <ul className="my-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Consent Preference (essential):</strong> stores your choice from the cookie
            banner locally in your browser, so we don&apos;t ask again on every visit. This is
            strictly necessary and cannot be disabled.
          </li>
        </ul>
        <p>
          We do not currently use any analytics, advertising, or third-party tracking cookies. If
          that changes in the future \u2014 for example, if we add privacy-friendly analytics to
          understand site usage \u2014 those cookies will only be set for visitors who choose
          &quot;Accept All&quot;, and this policy will be updated to describe them before they go
          live.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">3. Managing Your Choice</h2>
        <p>
          You can change your preference at any time by clearing your browser&apos;s local storage
          for this site, which will bring the cookie banner back on your next visit. Most web
          browsers also allow you to control cookies through their own settings; visit
          www.aboutcookies.org or www.allaboutcookies.org to learn more.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">4. Changes to This Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We encourage you to review this policy
          periodically to stay informed about how we are using cookies.
        </p>
      </div>
    </div>
  );
};
