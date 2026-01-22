import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Database, Brain, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Data Driven Decisions",
      subtitle: "Transforming raw numbers into actionable business velocity.",
      bg: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')]"
    },
    {
      title: "Predictive Intelligence",
      subtitle: "See the future of your market before it happens.",
      bg: "bg-[url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80')]"
    },
    {
      title: "Interactive Dashboards",
      subtitle: "Visualize your KPIs with custom-built, real-time reporting tools.",
      bg: "bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')]"
    },
    {
      title: "Intelligent Automation",
      subtitle: "Streamline complex workflows and eliminate manual data processing.",
      bg: "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')]"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Slider */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className={`absolute inset-0 bg-cover bg-center ${slide.bg}`}></div>
            <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-semibold mb-6 tracking-wider uppercase animate-fade-in-up">
                  Next Gen Analytics
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold text-lg transition-all transform hover:translate-y-[-2px] shadow-lg shadow-brand-500/25 flex items-center"
                  >
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white rounded-lg font-bold text-lg transition-all"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-brand-500 w-8' : 'bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why CoreSight Data & AI Studio?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We combine cutting-edge cloud infrastructure with domain expertise to deliver insights that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Activity className="w-8 h-8 text-brand-400" />,
                title: "Real-time Analytics",
                desc: "Monitor your business KPIs as they happen with sub-second latency dashboards."
              },
              {
                icon: <Database className="w-8 h-8 text-indigo-400" />,
                title: "Data Warehousing",
                desc: "Secure, scalable storage solutions built on robust cloud architecture."
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-400" />,
                title: "Predictive AI & ML",
                desc: "Leverage advanced machine learning algorithms to forecast trends and drive strategic growth."
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "Workflow Automation",
                desc: "Streamline operations by automating complex data pipelines and repetitive reporting tasks."
              }
            ].map((feature, i) => (
              <div key={i} className={`p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-brand-500/50 hover:bg-slate-800 transition-all duration-300 group ${i===3 ? 'md:col-span-3 md:w-1/2 md:mx-auto' : ''}`}>
                <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to unlock your data's potential?</h2>
          <p className="text-brand-100 text-xl mb-10 max-w-2xl mx-auto">
            Join the data revolution. Let's build a custom analytics solution tailored to your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-white text-brand-900 rounded-lg font-bold hover:bg-brand-50 transition-colors">
              Contact Sales
            </Link>
            <Link to="/pricing" className="px-8 py-4 bg-brand-800 border border-brand-700 text-white rounded-lg font-bold hover:bg-brand-700 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};