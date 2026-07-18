import React from 'react';
import { useSeo } from '@/hooks/useSeo';
import { services } from '@/data/services';

export const Services: React.FC = () => {
  useSeo({
    title: 'Services',
    description:
      'End-to-end data solutions: exploratory data analysis, ML forecasting, dashboards, data cleaning, automation, and consulting.',
    path: '/services',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Our Services</h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          End-to-end data solutions tailored to your business needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-xl border border-slate-700 bg-slate-800 p-8 transition-all hover:-translate-y-1 hover:border-brand-500"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition-colors group-hover:border-brand-500/50">
              <service.icon className="h-6 w-6 text-brand-400" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
            <p className="leading-relaxed text-slate-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
