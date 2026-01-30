import React from 'react';
import { Linkedin, User, Target, Lightbulb, AlertTriangle, Users } from 'lucide-react';

export const About: React.FC = () => {
  /* 
  // Founders data kept for future reference
  const founders = [
    {
      name: "Nayeem Haider",
      role: "CEO & Co-Founder",
      image: "assets/nayeem.jpg", 
      bio: "Nayeem leads the vision of CoreSight Data & AI Studio. With years of experience in Data Science, Machine Learning and Strategic Management, he ensures our solutions drive real business value. He focuses on using data and AI to solve real business problems, ensuring that solutions are practical, reliable, and valuable for clients.",
      linkedin: "https://www.linkedin.com/in/nayeem-haider-82b390110/"
    },
    {
      name: "Shaikat Saha",
      role: "COO & Co-Founder",
      image: "assets/shaikat.jpg",
      bio: "Shaikat leads day-to-day operations, ensuring smooth project execution, efficient workflows, and timely delivery of high-quality solutions. He translates strategic goals into scalable processes, aligning teams and resources to drive consistent client value and operational excellence.",
      linkedin: "https://www.linkedin.com/in/shaikat-saha/"
    },
    {
      name: "Ittehad Akash",
      role: "CTO & Co-Founder",
      image: "assets/ittehad.jpg",
      bio: "Ittehad leads the company’s technical vision, architecture, and engineering standards across data platforms, machine learning systems, and applications. He ensures scalable, secure, and reliable solutions by turning complex technical challenges into robust, production-ready systems.",
      linkedin: "#"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
    const target = e.currentTarget;
    target.onerror = null; 
    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1e293b&color=94a3b8&size=400&font-size=0.33`;
  };
  */

  return (
    <div className="bg-slate-900 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-950 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We are a team of data enthusiasts, engineers, and strategists dedicated to making advanced analytics accessible to everyone.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Target className="text-brand-500 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              At CoreSight Data & AI Studio, we believe that data is the new oil, but only if you have the engine to process it. Our mission is to provide that engine.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We bridge the gap between complex raw data and clear, actionable insights using state-of-the-art technologies and intuitive design. We exist to empower organizations to stop guessing and start knowing, transforming uncertainty into calculated growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-500 blur-3xl opacity-20 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Team working" 
              className="relative rounded-2xl border border-slate-700 shadow-2xl"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 relative">
             <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>
             <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Visionary Tech" 
              className="relative rounded-2xl border border-slate-700 shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="text-yellow-400 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We envision a future where advanced data intelligence is not just a luxury for tech giants, but a fundamental utility for businesses of all scales.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our goal is to build the digital infrastructure that defines the next generation of business intelligence—autonomous, predictive, and seamlessly integrated into daily decision-making processes. We aspire to be the catalyst that turns the world's data into the world's progress.
            </p>
          </div>
        </div>

        {/* Core Problem */}
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-xl mb-4">
               <AlertTriangle className="text-red-400 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">The Problem We Solve</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Businesses are drowning in data but starving for insights. We tackle the three biggest barriers to data-driven success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Data Fragmentation</h3>
              <p className="text-slate-400">
                Critical information is often trapped in disconnected silos—spreadsheets, SaaS tools, and legacy databases making a unified view impossible.
              </p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Technical Complexity</h3>
              <p className="text-slate-400">
                Implementing AI and advanced analytics typically requires expensive, specialized talent that is hard to find and retain.
              </p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Action Gap</h3>
              <p className="text-slate-400">
                Traditional reports look backward, not forward. We replace static dashboards with predictive models that tell you what to do next.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section (Simplified) */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand-500/10 rounded-xl mb-4">
               <Users className="text-brand-400 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Team</h2>
            <p className="text-slate-400 mt-4">The minds behind CoreSight Data & AI Studio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             {[
               { name: "Nayeem Haider", role: "CEO & Co-Founder" },
               { name: "Shaikat Saha", role: "COO & Co-Founder" },
               { name: "Ittehad Akash", role: "CTO & Co-Founder" }
             ].map((member, i) => (
               <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-brand-500/50 transition-colors">
                 <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                   <User size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                 <p className="text-brand-400 font-medium text-sm">{member.role}</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Founders (Hidden for now) */}
      {/* 
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet The Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-brand-500 transition-all duration-300 hover:shadow-xl hover:shadow-brand-900/50 group">
              <div className="h-80 overflow-hidden relative bg-slate-700 group-hover:bg-slate-600 transition-colors">
                <img 
                  src={founder.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&background=1e293b&color=94a3b8&size=400&font-size=0.33`}
                  alt={founder.name} 
                  onError={(e) => handleImageError(e, founder.name)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                  <p className="text-brand-400 font-medium">{founder.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  {founder.bio}
                </p>
                <div className="flex space-x-4">
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
    </div>
  );
};
