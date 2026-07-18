import React from 'react';
import { Link } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';

export const NotFound: React.FC = () => {
  useSeo({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
  });

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-slate-900 px-4 text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-500">404</p>
      <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Page not found</h1>
      <p className="mb-10 max-w-md text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-brand-600 px-8 py-4 font-bold text-white transition-colors hover:bg-brand-500"
      >
        Back to Home
      </Link>
    </div>
  );
};
