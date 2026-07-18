import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center space-x-3">
            <img
              src="/assets/logo-icon.png"
              alt="CoreSight Data & AI Studio"
              className="h-14 w-14 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold leading-none tracking-tight text-white md:text-2xl">
                CORESIGHT
              </span>
              <span className="mt-0.5 text-[0.6rem] font-bold leading-none tracking-widest text-brand-500 md:text-xs">
                DATA & AI STUDIO
              </span>
            </div>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
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

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b border-slate-700 bg-slate-800 md:hidden">
          <div className="space-y-2 px-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-3 text-base font-medium ${
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
  );
};
