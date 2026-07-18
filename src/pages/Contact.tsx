import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { company } from '@/data/company';

export const Contact: React.FC = () => {
  useSeo({
    title: 'Contact',
    description:
      'Get in touch with CoreSight Data & AI Studio by email or phone to start your data project.',
    path: '/contact',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-white">Get in Touch</h1>
        <p className="text-lg text-slate-400">
          Ready to start your data journey? Reach us directly via email or phone.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center rounded-xl border border-slate-700 bg-slate-800 p-8 text-center transition-colors hover:border-brand-500">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-brand-500">
            <Mail size={32} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Email Us</h3>
          <p className="mb-6 text-sm text-slate-400">For general inquiries and project quotes.</p>
          <a
            href={`mailto:${company.email}`}
            className="text-lg font-bold text-brand-400 transition-colors hover:text-brand-300"
          >
            {company.email}
          </a>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-slate-700 bg-slate-800 p-8 text-center transition-colors hover:border-brand-500">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-brand-500">
            <Phone size={32} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Call Us</h3>
          <p className="mb-6 text-sm text-slate-400">Mon-Fri from 9am to 6pm CET.</p>
          <a
            href={`tel:${company.phone.href}`}
            className="text-lg font-bold text-brand-400 transition-colors hover:text-brand-300"
          >
            {company.phone.display}
          </a>
        </div>
      </div>
    </div>
  );
};
