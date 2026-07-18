import React from 'react';
import { useSeo } from '@/hooks/useSeo';

export const TermsOfService: React.FC = () => {
  useSeo({
    title: 'Terms of Service',
    description:
      'The terms and conditions for using the CoreSight Data & AI Studio website and services.',
    path: '/terms',
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold text-white">Terms of Service</h1>
      <div className="prose prose-invert prose-slate max-w-none text-slate-300">
        <p className="mb-4">Last updated: October 26, 2025</p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">1. Agreement to Terms</h2>
        <p>
          By accessing or using our website and services, you agree to be bound by these Terms of
          Service and our Privacy Policy. If you do not agree to these terms, you may not use our
          services.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">2. Intellectual Property Rights</h2>
        <p>
          Unless otherwise indicated, the Site and our services are our proprietary property and all
          source code, databases, functionality, software, website designs, audio, video, text,
          photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the
          trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned
          or controlled by us or licensed to us, and are protected by copyright and trademark laws.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">3. User Representations</h2>
        <p>
          By using the Site, you represent and warrant that: (1) all registration information you
          submit will be true, accurate, current, and complete; (2) you will maintain the accuracy
          of such information and promptly update such registration information as necessary; (3)
          you have the legal capacity and you agree to comply with these Terms of Service.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">4. Prohibited Activities</h2>
        <p>
          You may not access or use the Site for any purpose other than that for which we make the
          Site available. The Site may not be used in connection with any commercial endeavors
          except those that are specifically endorsed or approved by us.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">5. Limitation of Liability</h2>
        <p>
          In no event will we or our directors, employees, or agents be liable to you or any third
          party for any direct, indirect, consequential, exemplary, incidental, special, or punitive
          damages, including lost profit, lost revenue, loss of data, or other damages arising from
          your use of the site, even if we have been advised of the possibility of such damages.
        </p>
      </div>
    </div>
  );
};
