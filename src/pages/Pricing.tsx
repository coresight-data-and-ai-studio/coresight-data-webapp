import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { pricingTiers } from '@/data/pricing';

export const Pricing: React.FC = () => {
  useSeo({
    title: 'Pricing',
    description:
      'Transparent, tailored pricing for data cleaning, analytics, dashboards, and ML forecasting. Contact us for a custom quote.',
    path: '/pricing',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Transparent Pricing</h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          Tailored solutions for your data needs. Contact us with your project details for a custom
          quotation.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
              tier.featured
                ? 'transform border-brand-500 bg-slate-800 shadow-xl shadow-brand-900/20 md:-translate-y-4'
                : 'border-slate-700 bg-slate-900 hover:border-brand-500'
            }`}
          >
            {tier.featured && (
              <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                MOST POPULAR
              </div>
            )}
            <h3 className="mb-2 text-2xl font-bold text-white">{tier.name}</h3>
            <p className="mb-6 text-sm text-slate-400">{tier.tagline}</p>
            <div className="mb-8">
              <span className="text-3xl font-bold text-brand-400">Get a Quote</span>
            </div>
            <ul className="mb-8 flex-grow space-y-4">
              {tier.includesPrevious && (
                <li className="mb-2 flex items-start border-b border-slate-700 pb-2 text-sm font-medium text-white">
                  <Check size={18} className="mr-3 mt-0.5 shrink-0 text-brand-400" />
                  {tier.includesPrevious}
                </li>
              )}
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start text-sm text-slate-300">
                  <Check size={18} className="mr-3 mt-0.5 shrink-0 text-brand-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`w-full rounded-lg py-3 text-center font-bold transition-colors ${
                tier.featured
                  ? 'bg-brand-600 text-white hover:bg-brand-500'
                  : 'border border-slate-600 bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              Request Quote
            </Link>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-slate-700 bg-slate-800/50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold text-white">Need something custom?</h3>
        <p className="mb-6 text-slate-400">
          Every project is unique. Please contact us with your specific project details, dataset
          size, and goals for a precise quotation.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center font-semibold text-brand-400 hover:text-brand-300"
        >
          Contact Sales <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};
