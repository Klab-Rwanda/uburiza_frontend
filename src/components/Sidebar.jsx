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
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between h-screen sticky top-0">
      <div className="p-6">
        <div className="mb-8 pl-2">
          {/* Using text for logo if image is not provided, matching brand */}
        </div>
        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.name}
                onClick={() => setView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-emerald-50 text-emerald-800 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-emerald-700' : 'text-gray-400'}`} />
                <span>{item.name}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-gray-200 space-y-2">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
          <Settings className="w-5 h-5 text-gray-400" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5 text-red-500" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
