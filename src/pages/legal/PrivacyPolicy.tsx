import React from 'react';
import { useSeo } from '@/hooks/useSeo';
import { company } from '@/data/company';

export const PrivacyPolicy: React.FC = () => {
  useSeo({
    title: 'Privacy Policy',
    description: 'How CoreSight Data & AI Studio collects, uses, and protects your personal data.',
    path: '/privacy',
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>
      <div className="prose prose-invert prose-slate max-w-none text-slate-300">
        <p className="mb-4">Last updated: October 26, 2025</p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">1. Introduction</h2>
        <p>
          {company.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy
          and is committed to protecting your personal data. This privacy policy will inform you as
          to how we look after your personal data when you visit our website or use our services and
          tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">2. The Data We Collect</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which
          we have grouped together as follows:
        </p>
        <ul className="my-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Identity Data:</strong> includes first name, last name, username or similar
            identifier.
          </li>
          <li>
            <strong>Contact Data:</strong> includes billing address, delivery address, email address
            and telephone numbers.
          </li>
          <li>
            <strong>Technical Data:</strong> includes internet protocol (IP) address, your login
            data, browser type and version, time zone setting and location.
          </li>
          <li>
            <strong>Usage Data:</strong> includes information about how you use our website and
            services.
          </li>
        </ul>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">3. How We Use Your Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use
          your personal data in the following circumstances:
        </p>
        <ul className="my-4 list-disc space-y-2 pl-6">
          <li>
            Where we need to perform the contract we are about to enter into or have entered into
            with you.
          </li>
          <li>
            Where it is necessary for our legitimate interests (or those of a third party) and your
            interests and fundamental rights do not override those interests.
          </li>
          <li>Where we need to comply with a legal or regulatory obligation.</li>
        </ul>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">4. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from
          being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In
          addition, we limit access to your personal data to those employees, agents, contractors
          and other third parties who have a business need to know.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-white">5. Contact Details</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please
          contact us at:
          <br />
          Email: {company.email}
        </p>
      </div>
    </div>
  );
};
