import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Facebook, Instagram } from 'lucide-react';

export const PublicLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/assets/logo-icon.png" 
                alt="CoreSight Data & AI Studio" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white leading-none">
                  CORESIGHT
                </span>
                <span className="text-[0.6rem] md:text-xs font-bold tracking-widest text-brand-500 leading-none mt-0.5">
                  DATA & AI STUDIO
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-500 ${
                    location.pathname === link.path ? 'text-brand-500' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path 
                      ? 'bg-slate-700 text-brand-500' 
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/assets/logo-icon.png" 
                  alt="CoreSight Data & AI Studio" 
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-white leading-none">CORESIGHT</span>
                  <span className="text-xs font-bold text-brand-500 tracking-wider leading-none">DATA & AI STUDIO</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering businesses with advanced analytics, predictive modeling, and real-time insights.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-brand-500">About Us</Link></li>
                <li><Link to="/services" className="hover:text-brand-500">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-brand-500">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-brand-500">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/privacy" className="hover:text-brand-500">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-brand-500">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-brand-500">Cookie Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>contact@coresight-data.de</li>
                <li>+49 1638060710</li>
                <li>Kassel, Hessen, Germany</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} CoreSight Data & AI Studio. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
               <a href="https://www.linkedin.com/company/coresight-data-ai-studio/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 text-slate-400 border border-slate-700 hover:border-brand-500" aria-label="LinkedIn">
                 <Linkedin size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 text-slate-400 border border-slate-700 hover:border-brand-500" aria-label="Facebook">
                 <Facebook size={20} />
               </a>
               <a href="https://www.instagram.com/coresightdataaistudio?igsh=aHFxY3h2NGl1cHN3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 text-slate-400 border border-slate-700 hover:border-brand-500" aria-label="Instagram">
                 <Instagram size={20} />
               </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};