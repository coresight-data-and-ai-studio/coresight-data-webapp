import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  Database,
  Cloud,
  Download,
  Search,
  Server,
  Cpu,
  Shield,
  Activity,
  User as UserIcon,
  CreditCard,
  Building
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar,
  AreaChart,
  Area
} from 'recharts';
import { User } from '../types';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

// --- Mock Data ---
const dataTrends = [
  { name: 'Jan', value: 4000, users: 2400 },
  { name: 'Feb', value: 3000, users: 1398 },
  { name: 'Mar', value: 2000, users: 9800 },
  { name: 'Apr', value: 2780, users: 3908 },
  { name: 'May', value: 1890, users: 4800 },
  { name: 'Jun', value: 2390, users: 3800 },
  { name: 'Jul', value: 3490, users: 4300 },
];

const dataUsage = [
  { name: 'Mon', usage: 120 },
  { name: 'Tue', usage: 150 },
  { name: 'Wed', usage: 200 },
  { name: 'Thu', usage: 180 },
  { name: 'Fri', usage: 250 },
  { name: 'Sat', usage: 90 },
  { name: 'Sun', usage: 80 },
];

const awsResources = [
  { id: 'i-0xy123456789abcde', name: 'Analytics-Node-Primary', type: 'EC2 (t3.xlarge)', status: 'running', region: 'us-east-1' },
  { id: 'i-0ab987654321edcba', name: 'Worker-Queue-01', type: 'EC2 (t3.medium)', status: 'running', region: 'us-east-1' },
  { id: 'db-prod-main', name: 'CoreSight-RDS-Postgres', type: 'RDS (db.r5.2xlarge)', status: 'available', region: 'us-east-1' },
  { id: 's3-client-data', name: 's3://coresight-client-abc', type: 'S3 Bucket', status: 'active', region: 'Global' },
];

// --- Sub-Components ---

const DashboardOverview = () => (
  <div className="space-y-6 animate-fade-in-up">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-2xl font-bold text-white">Analytics Overview</h2>
      <span className="text-slate-400 text-sm">Last updated: Just now</span>
    </div>

    {/* KPI Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm hover:border-brand-500/50 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-400 text-sm font-medium">Monthly Revenue</h3>
          <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded">+12.5%</span>
        </div>
        <p className="text-3xl font-bold text-white">$45,231.89</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm hover:border-brand-500/50 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-400 text-sm font-medium">Active Users</h3>
          <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded">+5.2%</span>
        </div>
        <p className="text-3xl font-bold text-white">12,345</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm hover:border-brand-500/50 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-400 text-sm font-medium">S3 Storage Used</h3>
          <span className="text-yellow-400 text-xs font-bold bg-yellow-400/10 px-2 py-1 rounded">85%</span>
        </div>
        <p className="text-3xl font-bold text-white">1.2 TB</p>
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <h3 className="text-white font-semibold mb-6">Revenue & User Growth</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataTrends}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} 
              />
              <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" />
              <Area type="monotone" dataKey="users" stroke="#8b5cf6" fillOpacity={0} fill="transparent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <h3 className="text-white font-semibold mb-6">API Usage (Requests/Min)</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                cursor={{fill: '#334155'}}
              />
              <Bar dataKey="usage" fill="#14b8a6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
);

const DatasetsView = () => (
  <div className="space-y-6 animate-fade-in-up">
    <div className="flex items-center justify-between mb-2">
       <h2 className="text-2xl font-bold text-white">My Datasets</h2>
       <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
         <Cloud size={16} className="mr-2" /> Upload New
       </button>
    </div>

    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text" 
            placeholder="Search files..." 
            className="bg-slate-900 border border-slate-600 rounded-full py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-brand-500 w-full sm:w-64"
          />
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-400">
          <span>Sort by:</span>
          <select className="bg-slate-900 border border-slate-600 rounded-lg px-2 py-1 focus:outline-none">
            <option>Date Added</option>
            <option>Size</option>
            <option>Name</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-slate-400 text-sm uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Size</th>
              <th className="px-6 py-4 font-medium">Last Updated</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700 text-slate-300">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="hover:bg-slate-700/50 transition-colors">
                <td className="px-6 py-4 font-medium text-white flex items-center">
                  <FileText size={16} className="mr-2 text-brand-400" />
                  sales_data_q{i}_2024
                </td>
                <td className="px-6 py-4">CSV</td>
                <td className="px-6 py-4">{120 * i} MB</td>
                <td className="px-6 py-4">Oct {10 + i}, 2024</td>
                <td className="px-6 py-4">
                  <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs border border-emerald-500/20">
                    Ready
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-slate-400 hover:text-brand-400 transition-colors p-2 hover:bg-slate-700 rounded-full">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AWSView = () => (
  <div className="space-y-6 animate-fade-in-up">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">AWS Infrastructure</h2>
      <span className="flex items-center text-emerald-400 text-sm font-medium bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
        <Activity size={14} className="mr-2" /> Systems Operational
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-orange-500/20 rounded-lg">
            <Server className="text-orange-500 w-6 h-6" />
          </div>
          <span className="text-slate-400 text-xs">EC2 Instances</span>
        </div>
        <h3 className="text-2xl font-bold text-white">2 Running</h3>
        <p className="text-slate-500 text-sm mt-1">us-east-1 region</p>
      </div>
      
      <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Database className="text-blue-500 w-6 h-6" />
          </div>
          <span className="text-slate-400 text-xs">RDS Databases</span>
        </div>
        <h3 className="text-2xl font-bold text-white">1 Active</h3>
        <p className="text-slate-500 text-sm mt-1">PostgreSQL 14.2</p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <Cloud className="text-green-500 w-6 h-6" />
          </div>
          <span className="text-slate-400 text-xs">S3 Buckets</span>
        </div>
        <h3 className="text-2xl font-bold text-white">4 Buckets</h3>
        <p className="text-slate-500 text-sm mt-1">1.2 TB Stored</p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Shield className="text-purple-500 w-6 h-6" />
          </div>
          <span className="text-slate-400 text-xs">Security Groups</span>
        </div>
        <h3 className="text-2xl font-bold text-white">Protected</h3>
        <p className="text-slate-500 text-sm mt-1">WAF Enabled</p>
      </div>
    </div>
    
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700">
        <h3 className="font-bold text-white">Resource Inventory</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-900/50 text-slate-400 text-xs uppercase">
            <tr>
              <th className="px-6 py-3">Resource ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Region</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700 text-slate-300 text-sm">
            {awsResources.map((res) => (
              <tr key={res.id} className="hover:bg-slate-700/30">
                <td className="px-6 py-4 font-mono text-xs text-slate-500">{res.id}</td>
                <td className="px-6 py-4 font-medium text-white">{res.name}</td>
                <td className="px-6 py-4">{res.type}</td>
                <td className="px-6 py-4">{res.region}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></span>
                    {res.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AccountInfoView = ({ user }: { user: User }) => (
  <div className="max-w-4xl space-y-8 animate-fade-in-up">
    <h2 className="text-2xl font-bold text-white">Account Information</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Profile Card */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
        <div className="flex items-center mb-6">
           <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
             {user.name.charAt(0)}
           </div>
           <div className="ml-4">
             <h3 className="text-xl font-bold text-white">{user.name}</h3>
             <p className="text-slate-400">{user.role.charAt(0).toUpperCase() + user.role.slice(1)} Account</p>
           </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 uppercase mb-1">Email Address</label>
            <div className="flex items-center text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
              <UserIcon size={16} className="mr-3 text-slate-500" />
              {user.email}
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 uppercase mb-1">Company</label>
            <div className="flex items-center text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
              <Building size={16} className="mr-3 text-slate-500" />
              {user.companyName}
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Card */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center">
          <CreditCard className="mr-2 text-brand-400" /> Subscription Plan
        </h3>
        
        <div className="bg-gradient-to-r from-brand-900/50 to-indigo-900/50 border border-brand-500/30 rounded-lg p-6 mb-6">
           <div className="flex justify-between items-start mb-2">
             <h4 className="text-xl font-bold text-white">Growth Plan</h4>
             <span className="bg-brand-500 text-white text-xs px-2 py-1 rounded font-bold">ACTIVE</span>
           </div>
           <p className="text-brand-200 text-sm mb-4">$799/month</p>
           <ul className="text-sm text-slate-300 space-y-2">
             <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-400 rounded-full mr-2"></span>Advanced ML Forecasting</li>
             <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-400 rounded-full mr-2"></span>Real-time Web App</li>
             <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-400 rounded-full mr-2"></span>Priority Support</li>
           </ul>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400">Next billing date:</span>
          <span className="text-white font-medium">November 1, 2024</span>
        </div>
      </div>
    </div>
    
    {/* Contact Support */}
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col md:flex-row items-center justify-between">
       <div>
         <h3 className="text-lg font-bold text-white mb-1">Need help with your account?</h3>
         <p className="text-slate-400 text-sm">Our dedicated support team is available 24/7 for Enterprise clients.</p>
       </div>
       <button className="mt-4 md:mt-0 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
         Contact Support
       </button>
    </div>
  </div>
);

// --- Main Layout ---

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const location = useLocation();

  const links = [
    { icon: LayoutDashboard, label: 'Analytics', path: '' },
    { icon: Database, label: 'Datasets', path: 'datasets' },
    { icon: Server, label: 'AWS Infrastructure', path: 'aws' },
    { icon: UserIcon, label: 'Information', path: 'info' },
  ];

  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col shrink-0 transition-all duration-300">
        <div className="h-20 flex items-center px-6 border-b border-slate-800 space-x-3">
           <img src="/assets/logo-icon.png" alt="CS" className="w-14 h-14 object-contain" />
           <div className="flex flex-col">
             <span className="text-lg font-extrabold text-white leading-none">CORESIGHT</span>
             <span className="text-[0.65rem] font-bold text-brand-500 tracking-wider mt-0.5">DATA & AI STUDIO</span>
           </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {links.map((link) => {
            const fullPath = `/dashboard${link.path ? `/${link.path}` : ''}`;
            const isActive = location.pathname === fullPath || (link.path === '' && location.pathname === '/dashboard');
            
            return (
              <Link
                key={link.label}
                to={fullPath}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <link.icon size={20} className="mr-3" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center mb-4 px-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-xs font-bold text-white mr-3 shrink-0">
              {user.name.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate">{user.companyName}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center justify-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
          >
            <LogOut size={18} className="mr-2" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-900 p-8">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/datasets" element={<DatasetsView />} />
          <Route path="/aws" element={<AWSView />} />
          <Route path="/info" element={<AccountInfoView user={user} />} />
        </Routes>
      </main>
    </div>
  );
};