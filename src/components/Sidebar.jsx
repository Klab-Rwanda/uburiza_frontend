import React from 'react';
import { BookOpen, LayoutDashboard, FileText, Settings, LogOut, Library, BarChart2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useLogout } from '../api/hooks/useAuthMutations';

export default function Sidebar({ view, setView }) {
  const { userRole, setUser, setUserRole } = useAppContext();
  const { handleLogout, isPending: isLoggingOut } = useLogout({ setView, setUser, setUserRole });
  const isAdmin = userRole === 'admin';

  const learnerItems = [
    { name: 'Overview', icon: LayoutDashboard, id: 'Dashboard' },
    { name: 'My Courses', icon: BookOpen, id: 'MyCourses' },
    { name: 'Certificate', icon: FileText, id: 'Certificate' },
  ];

  const adminItems = [
    { name: 'Analytics', icon: BarChart2, id: 'Analytics' },
    { name: 'Courses', icon: BookOpen, id: 'AdminForms' },
    { name: 'Resources', icon: Library, id: 'Resources' },
  ];

  const items = isAdmin ? adminItems : learnerItems;

  return (
    <div className="hidden lg:flex group/sidebar w-16 hover:w-56 bg-white border-r border-emerald-200 flex-col justify-between h-full overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out flex-shrink-0">
      <div className="p-3">
        <nav className="space-y-1">
          {items.map((item) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.name}
                onClick={() => setView(item.id)}
                title={item.name}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-emerald-100 text-[#1e4c31] font-bold'
                    : 'text-gray-400 hover:bg-emerald-50 hover:text-[#1e4c31]'
                }`}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-emerald-700' : ''}`} />
                <span className="text-sm whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-200 overflow-hidden">
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-3 border-t border-emerald-200 space-y-1">
        <button
          onClick={() => setView('Settings')}
          title="Settings"
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
            view === 'Settings'
              ? 'bg-emerald-100 text-[#1e4c31] font-bold'
              : 'text-gray-400 hover:bg-emerald-50 hover:text-[#1e4c31]'
          }`}
        >
          <Settings className={`w-5 h-5 flex-shrink-0 ${view === 'Settings' ? 'text-emerald-700' : ''}`} />
          <span className="text-sm whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-200 overflow-hidden">
            Settings
          </span>
        </button>

        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          title="Log Out"
          className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors disabled:opacity-60"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-200 overflow-hidden">
            {isLoggingOut ? 'Logging out...' : 'Log Out'}
          </span>
        </button>
      </div>
    </div>
  );
}
