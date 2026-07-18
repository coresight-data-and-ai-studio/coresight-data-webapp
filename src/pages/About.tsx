import React from 'react';
import { User, Target, Lightbulb, AlertTriangle, Users } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { team } from '@/data/team';

const problems = [
  {
    title: 'Data Fragmentation',
    description:
      'Critical information is often trapped in disconnected silos\u2014spreadsheets, SaaS tools, and legacy databases making a unified view impossible.',
  },
  {
    title: 'Technical Complexity',
    description:
      'Implementing AI and advanced analytics typically requires expensive, specialized talent that is hard to find and retain.',
  },
  {
    title: 'Action Gap',
    description:
      'Traditional reports look backward, not forward. We replace static dashboards with predictive models that tell you what to do next.',
  },
];

export const About: React.FC = () => {
  useSeo({
    title: 'About Us',
    description:
      'Meet CoreSight Data & AI Studio: a team of data enthusiasts, engineers, and strategists making advanced analytics accessible to every business.',
    path: '/about',
  });

  return (
    <div className="min-h-screen bg-slate-900 pb-20">
      <div className="border-b border-slate-800 bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">About Us</h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-400">
            We are a team of data enthusiasts, engineers, and strategists dedicated to making
            advanced analytics accessible to everyone.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16">
        {/* Mission */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center space-x-3">
              <Target className="h-8 w-8 text-brand-500" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              At CoreSight Data & AI Studio, we believe that data is the new oil, but only if you
              have the engine to process it. Our mission is to provide that engine.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              We bridge the gap between complex raw data and clear, actionable insights using
              state-of-the-art technologies and intuitive design. We exist to empower organizations
              to stop guessing and start knowing, transforming uncertainty into calculated growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand-500 opacity-20 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Team working"
              className="relative rounded-2xl border border-slate-700 shadow-2xl"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:flex-row-reverse">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Visionary Tech"
              className="relative rounded-2xl border border-slate-700 shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-6 flex items-center space-x-3">
              <Lightbulb className="h-8 w-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              We envision a future where advanced data intelligence is not just a luxury for tech
              giants, but a fundamental utility for businesses of all scales.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Our goal is to build the digital infrastructure that defines the next generation of
              business intelligence\u2014autonomous, predictive, and seamlessly integrated into
              daily decision-making processes. We aspire to be the catalyst that turns the
              world&apos;s data into the world&apos;s progress.
            </p>
          </div>
        </div>

        {/* Core Problem */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-red-500/10 p-3">
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">The Problem We Solve</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Businesses are drowning in data but starving for insights. We tackle the three biggest
              barriers to data-driven success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6"
              >
                <h3 className="mb-3 text-xl font-bold text-white">{problem.title}</h3>
                <p className="text-slate-400">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-brand-500/10 p-3">
              <Users className="h-8 w-8 text-brand-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Team</h2>
            <p className="mt-4 text-slate-400">The minds behind CoreSight Data & AI Studio.</p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center transition-colors hover:border-brand-500/50"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-700 text-slate-400">
                  <User size={32} />
                </div>
                <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm font-medium text-brand-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
