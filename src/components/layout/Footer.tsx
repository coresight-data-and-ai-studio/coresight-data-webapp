import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import { navLinks, legalLinks } from '@/data/navigation';
import { company } from '@/data/company';

const socialLinks = [
  { name: 'LinkedIn', href: company.social.linkedin, icon: Linkedin },
  { name: 'Instagram', href: company.social.instagram, icon: Instagram },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pb-8 pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4 flex items-center space-x-3">
              <img
                src="/assets/logo-icon.png"
                alt="CoreSight Data & AI Studio"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-extrabold leading-none text-white">CORESIGHT</span>
                <span className="text-xs font-bold leading-none tracking-wider text-brand-500">
                  DATA & AI STUDIO
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering businesses with advanced analytics, predictive modeling, and real-time
              insights.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {navLinks
                .filter((link) => link.path !== '/')
                .map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-brand-500">
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-500">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{company.email}</li>
              <li>{company.phone.display}</li>
              <li>{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-400 transition-all duration-300 hover:border-brand-500 hover:bg-brand-600 hover:text-white"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
