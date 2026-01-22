import React, { useState } from 'react';
import { Check, Mail, Phone, MapPin, Send, Search, TrendingUp, LayoutDashboard, Zap, Users, ExternalLink, Code2, Database, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Services Page ---
export const Services: React.FC = () => {
  const services = [
    { 
      title: "Exploratory Data Analysis (EDA)", 
      desc: "Deep dive into your raw data to uncover hidden patterns, anomalies, and actionable insights before modeling begins.",
      icon: Search
    },
    { 
      title: "ML Prediction and Forecasting", 
      desc: "Leveraging state-of-the-art machine learning algorithms to predict future trends, customer behaviors, and market shifts.",
      icon: TrendingUp
    },
    { 
      title: "Dashboards & Web Apps", 
      desc: "Custom-built, interactive visualizations and web applications that bring your data to life for stakeholders.",
      icon: LayoutDashboard
    },
    { 
      title: "Data Cleaning & Organization", 
      desc: "Expert cleaning and organizing of messy data. We transform unstructured inputs into high-quality datasets ready for critical analysis.",
      icon: Database
    },
    { 
      title: "Automation Service", 
      desc: "Streamlining repetitive data workflows and reporting processes to save your team valuable time and reduce errors.",
      icon: Zap
    },
    { 
      title: "Consulting", 
      desc: "Strategic guidance on data infrastructure, tool selection, and building a data-driven culture within your organization.",
      icon: Users
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">End-to-end data solutions tailored to your business needs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-brand-500 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:border-brand-500/50 transition-colors">
               <s.icon className="text-brand-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Portfolio Page ---
export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "CO₂Vision – Global CO₂ Emission Analytics",
      category: "Data Analytics · Forecasting · Interactive Dashboards",
      description: "Built an end-to-end analytics system to explore, evaluate, and forecast global CO₂ emissions at the country level. The project focuses on robust data cleaning, exploratory analysis, climate-risk scoring, and statistically sound time-series forecasting using ARIMA.",
      impact: "Delivered a fully reproducible analytics pipeline with an interactive Streamlit dashboard, enabling country-level emission analysis and ARIMA-based forecasts.",
      stack: ["Python", "pandas", "ARIMA", "Streamlit", "Matplotlib"],
      // Option B: High-quality stock photo of charts/analytics
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", 
      isPlaceholder: false
    },
    {
      title: "Global Health & Nutrition Analytics Platform",
      category: "SQL Analytics Engineering · Public Health · Dashboards",
      description: "Transforms high-dimensional global health and nutrition datasets into structured SQL models. This project builds an end-to-end system performing deep exploratory analysis to deliver interactive dashboards and automated country-level reports.",
      impact: "Built a full SQL-driven pipeline covering 22,000+ records. Reduced analysis complexity by centralizing transformations in SQL views, enabling faster EDA.",
      stack: ["Python", "SQL", "Streamlit", "Automated Reporting", "Data Modeling"],
      // Option B: Dashboard/Analytics image representation
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", 
      isPlaceholder: false 
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Our Work</h1>
        <p className="text-slate-400">Real-world problems solved with data.</p>
      </div>
      
      <div className="space-y-20">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col lg:flex-row gap-10 items-center bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-brand-500/30 transition-all">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-80 lg:h-full relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.isPlaceholder ? 'opacity-50 grayscale' : ''}`}
              />
              {project.isPlaceholder && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
                  <div className="text-center p-6 border-2 border-dashed border-slate-500 rounded-xl">
                    <p className="text-white font-bold mb-2">Screenshot Placeholder</p>
                    <p className="text-sm text-slate-300">Replace `project.image` in code with your screenshot</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold uppercase tracking-wider border border-brand-500/20">
                  {project.category.split('·')[0]}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2 flex items-center">
                  <Terminal size={16} className="mr-2 text-brand-500" /> The Challenge
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="mb-8 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-2 flex items-center">
                  <TrendingUp size={16} className="mr-2" /> The Impact
                </h4>
                <p className="text-slate-300 text-sm font-medium">
                  {project.impact}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, t) => (
                    <span key={t} className="px-3 py-1 bg-slate-700 text-slate-200 text-xs rounded-full font-medium border border-slate-600">
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

// --- Pricing Page ---
export const Pricing: React.FC = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Tailored solutions for your data needs. Contact us with your project details for a custom quotation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-brand-500 transition-all flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
          <p className="text-slate-400 text-sm mb-6">Perfect for one-off analysis and clean data setup.</p>
          <div className="mb-8">
            <span className="text-3xl font-bold text-brand-400">Get a Quote</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Consultation",
              "Data Cleaning and Organization",
              "Basic Exploratory Data Analysis (EDA) Report",
              "Standard Dashboard (Snapshot)",
              "Final Insight Presentation",
              "Cleaned Dataset Handover"
            ].map((f, i) => (
              <li key={i} className="flex items-start text-slate-300 text-sm">
                <Check size={18} className="text-brand-500 mr-3 shrink-0 mt-0.5" /> {f}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="w-full py-3 rounded-lg font-bold bg-slate-800 border border-slate-600 hover:bg-slate-700 text-white text-center transition-colors">
            Request Quote
          </Link>
        </div>

        {/* Business Plan */}
        <div className="bg-slate-800 border border-brand-500 shadow-xl shadow-brand-900/20 p-8 rounded-2xl relative flex flex-col transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
          <p className="text-slate-400 text-sm mb-6">Comprehensive insights, forecasting & strategy.</p>
          <div className="mb-8">
             <span className="text-3xl font-bold text-brand-400">Get a Quote</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start text-white font-medium text-sm border-b border-slate-700 pb-2 mb-2">
              <Check size={18} className="text-brand-400 mr-3 shrink-0 mt-0.5" /> Everything in Starter, plus:
            </li>
            {[
              "Advanced ML Forecasting",
              "Interactive BI Dashboards",
              "User Documentation & Training",
              "Strategy & Review Session"
            ].map((f, i) => (
              <li key={i} className="flex items-start text-slate-300 text-sm">
                <Check size={18} className="text-brand-500 mr-3 shrink-0 mt-0.5" /> {f}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="w-full py-3 rounded-lg font-bold bg-brand-600 hover:bg-brand-500 text-white text-center transition-colors">
            Request Quote
          </Link>
        </div>
      </div>

      <div className="mt-16 text-center bg-slate-800/50 p-8 rounded-xl border border-slate-700 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-white mb-2">Need something custom?</h3>
        <p className="text-slate-400 mb-6">
          Every project is unique. Please contact us with your specific project details, dataset size, and goals for a precise quotation.
        </p>
        <Link to="/contact" className="inline-flex items-center text-brand-400 font-semibold hover:text-brand-300">
          Contact Sales <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

// --- Contact Page ---
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:contact@coresight-data.de?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-slate-400 mb-8 text-lg">
            Ready to start your data journey? Fill out the form or reach us directly.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center text-slate-300">
              <Mail className="w-6 h-6 text-brand-500 mr-4" />
              <a href="mailto:contact@coresight-data.de" className="hover:text-brand-400 transition-colors">contact@coresight-data.de</a>
            </div>
            <div className="flex items-center text-slate-300">
              <Phone className="w-6 h-6 text-brand-500 mr-4" />
              <span>+49 1638060710</span>
            </div>
            <div className="flex items-center text-slate-300">
              <MapPin className="w-6 h-6 text-brand-500 mr-4" />
              <span>Kassel, Hessen, Germany</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-slate-400 mb-2">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none" 
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm text-slate-400 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-slate-400 mb-2">Message</label>
            <textarea 
              rows={4} 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg flex items-center justify-center transition-all">
            Send Message <Send size={18} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};