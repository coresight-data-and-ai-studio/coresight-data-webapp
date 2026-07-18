import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Database, Brain, Zap } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

const slides = [
  {
    title: 'Data Driven Decisions',
    subtitle: 'Transforming raw numbers into actionable business velocity.',
    bg: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')]",
  },
  {
    title: 'Predictive Intelligence',
    subtitle: 'See the future of your market before it happens.',
    bg: "bg-[url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80')]",
  },
  {
    title: 'Interactive Dashboards',
    subtitle: 'Visualize your KPIs with custom-built, real-time reporting tools.',
    bg: "bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')]",
  },
  {
    title: 'Intelligent Automation',
    subtitle: 'Streamline complex workflows and eliminate manual data processing.',
    bg: "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')]",
  },
];

const features = [
  {
    icon: Activity,
    color: 'text-brand-400',
    title: 'Real-time Analytics',
    description: 'Monitor your business KPIs as they happen with sub-second latency dashboards.',
  },
  {
    icon: Database,
    color: 'text-indigo-400',
    title: 'Data Warehousing',
    description: 'Secure, scalable storage solutions built on robust cloud architecture.',
  },
  {
    icon: Brain,
    color: 'text-purple-400',
    title: 'Predictive AI & ML',
    description:
      'Leverage advanced machine learning algorithms to forecast trends and drive strategic growth.',
  },
  {
    icon: Zap,
    color: 'text-yellow-400',
    title: 'Workflow Automation',
    description:
      'Streamline operations by automating complex data pipelines and repetitive reporting tasks.',
  },
];

export const Home: React.FC = () => {
  useSeo({
    title: 'Analytics for the Future',
    description:
      'CoreSight Data & AI Studio transforms raw data into predictive intelligence, real-time dashboards, and workflow automation for growing businesses.',
    path: '/',
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full flex-col">
      {/* Hero Slider */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-cover bg-center ${slide.bg}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent bg-slate-900/70" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mx-auto max-w-4xl px-4 text-center">
                <span className="mb-6 inline-block animate-fade-in-up rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-brand-400">
                  Next Gen Analytics
                </span>
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                  {slide.title}
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    to="/contact"
                    className="flex transform items-center rounded-lg bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:translate-y-[-2px] hover:bg-brand-500"
                  >
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="rounded-lg border border-slate-600 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:border-white"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show slide: ${slide.title}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-brand-500' : 'w-3 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Why CoreSight Data & AI Studio?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              We combine cutting-edge cloud infrastructure with domain expertise to deliver insights
              that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border border-slate-700 bg-slate-800/50 p-8 transition-all duration-300 hover:border-brand-500/50 hover:bg-slate-800 ${
                  i === 3 ? 'md:col-span-3 md:mx-auto md:w-1/2' : ''
                }`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition-transform group-hover:scale-110">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-brand-900" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
            Ready to unlock your data&apos;s potential?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-brand-100">
            Join the data revolution. Let&apos;s build a custom analytics solution tailored to your
            growth.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-white px-8 py-4 font-bold text-brand-900 transition-colors hover:bg-brand-50"
            >
              Contact Sales
            </Link>
            <Link
              to="/pricing"
              className="rounded-lg border border-brand-700 bg-brand-800 px-8 py-4 font-bold text-white transition-colors hover:bg-brand-700"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
