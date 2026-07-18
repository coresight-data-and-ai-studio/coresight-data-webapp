import React from 'react';
import { TrendingUp, Terminal } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { portfolioProjects } from '@/data/portfolio';

export const Portfolio: React.FC = () => {
  useSeo({
    title: 'Portfolio',
    description:
      'Real-world data projects delivered by CoreSight Data & AI Studio, from CO\u2082 emissions forecasting to global health analytics.',
    path: '/portfolio',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Our Work</h1>
        <p className="text-slate-400">Real-world problems solved with data.</p>
      </div>

      <div className="space-y-20">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col items-center gap-10 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 transition-all hover:border-brand-500/30 lg:flex-row"
          >
            <div className="group relative h-80 w-full lg:h-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="w-full p-8 lg:w-1/2 lg:p-12">
              <div className="mb-4 flex items-center space-x-2">
                <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-400">
                  {project.category.split('\u00b7')[0].trim()}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">{project.title}</h3>

              <div className="mb-6">
                <h4 className="mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-slate-300">
                  <Terminal size={16} className="mr-2 text-brand-500" /> The Challenge
                </h4>
                <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="mb-8 rounded-lg border border-slate-700/50 bg-slate-900/50 p-4">
                <h4 className="mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-emerald-400">
                  <TrendingUp size={16} className="mr-2" /> The Impact
                </h4>
                <p className="text-sm font-medium text-slate-300">{project.impact}</p>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
