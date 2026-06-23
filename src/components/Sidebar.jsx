import React from 'react';
import { BookOpen, LayoutDashboard, FileText, Settings, LogOut, ShieldCheck, BarChart2 } from 'lucide-react';

export default function Sidebar({ view, setView }) {
  const isAdmin = view === 'Analytics' || view === 'AdminForms';

  const learnerItems = [
    { name: 'Overview', icon: LayoutDashboard, id: 'Dashboard' },
    { name: 'Resources', icon: BookOpen, id: 'Resources' },
    { name: 'Certificate', icon: FileText, id: 'Certificate' },
  ];

  const adminItems = [
    { name: 'Analytics', icon: BarChart2, id: 'Analytics' },
    { name: 'Courses', icon: BookOpen, id: 'AdminForms' },
    { name: 'Security', icon: ShieldCheck, id: 'Security' }
  ];

  const items = isAdmin ? adminItems : learnerItems;

  return (
    <div className="hidden lg:flex w-64 bg-white border-r border-emerald-200 flex-col justify-between h-full overflow-y-auto">
      <div className="p-6">
        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.name}
                onClick={() => setView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-emerald-100 text-[#1e4c31] font-bold' 
                    : 'text-gray-500 hover:bg-emerald-50 hover:text-gray-700'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-emerald-700' : 'text-gray-400'}`} />
                <span>{item.name}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-emerald-200 space-y-2">
        <button onClick={() => setView('Settings')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${view === 'Settings' ? 'bg-emerald-100 text-[#1e4c31] font-bold' : 'text-gray-500 hover:bg-emerald-50 hover:text-gray-700'}`}>
          <Settings className={`w-5 h-5 ${view === 'Settings' ? 'text-emerald-700' : 'text-gray-400'}`} />
          <span>Settings</span>
        </button>
        <button onClick={() => setView('LandingPage')} className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-black hover:bg-slate-100 transition-colors">
          <LogOut className="w-5 h-5 text-black" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
