import React, { useState } from 'react';
import { Lock, User as UserIcon, AlertCircle, Info } from 'lucide-react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Strict credential check for demo account
    if (email.toLowerCase() === 'abc@gmail.com' && password === 'abc123') {
      onLogin({
        id: 'demo-123',
        name: 'John Doe',
        email: email,
        role: 'client',
        companyName: 'ABC Corp'
      });
      setError('');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex flex-col items-center justify-center mb-6">
             {/* Using the full stacked logo which includes text */}
             <img src="/assets/logo-full.png" alt="CoreSight Data & AI Studio" className="w-48 object-contain mb-3" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Client Portal</h2>
          <p className="text-slate-400 text-sm">Secure access to your analytics dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg flex items-center text-sm">
              <AlertCircle size={16} className="mr-2" />
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="client@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-brand-500/20"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-700">
           <div className="bg-brand-900/30 border border-brand-500/30 p-4 rounded-lg flex items-start gap-3">
             <Info className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
             <div className="text-sm text-slate-300">
               <p className="font-semibold text-brand-400 mb-1">Demo Credentials:</p>
               <p>Email: <code className="bg-slate-900 px-1 py-0.5 rounded text-white">abc@gmail.com</code></p>
               <p>Password: <code className="bg-slate-900 px-1 py-0.5 rounded text-white">abc123</code></p>
             </div>
           </div>
          
          <p className="text-slate-500 text-xs mt-4 text-center">
             Note: Client credentials can only be created by the CoreSight Data & AI Studio team.
          </p>
        </div>
      </div>
    </div>
  );
};