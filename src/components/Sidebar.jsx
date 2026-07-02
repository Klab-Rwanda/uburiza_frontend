import React from 'react';
import { BookOpen, LayoutDashboard, FileText, Settings, LogOut, Library, BarChart2, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useLogout } from '../api/hooks/useAuthMutations';

export default function Sidebar({ view, setView, sidebarOpen, setSidebarOpen }) {
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
    { name: 'Resources', icon: Library, id: 'ResourceUpload' },
  ];

  const items = isAdmin ? adminItems : learnerItems;

  function navigate(id) {
    setView(id);
    setSidebarOpen(false);
  }

  const navContent = (
    <>
      <div className="p-3 flex-1">
        <nav className="space-y-1">
          {items.map((item) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.id)}
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
          onClick={() => navigate('Settings')}
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
          onClick={() => { handleLogout(); setSidebarOpen(false); }}
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
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex group/sidebar w-16 hover:w-56 bg-white border-r border-emerald-200 flex-col justify-between h-full overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out flex-shrink-0">
        {navContent}
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-emerald-200 flex flex-col z-50 lg:hidden transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-emerald-100">
          <span className="font-bold text-[#1e4c31] text-sm">Menu</span>
          <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-3 flex-1">
            <nav className="space-y-1">
              {items.map((item) => {
                const isActive = view === item.id;
                return (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                      isActive ? 'bg-emerald-100 text-[#1e4c31] font-bold' : 'text-gray-400 hover:bg-emerald-50 hover:text-[#1e4c31]'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-emerald-700' : ''}`} />
                    <span className="text-sm">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
          <div className="p-3 border-t border-emerald-200 space-y-1">
            <button
              onClick={() => navigate('Settings')}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                view === 'Settings' ? 'bg-emerald-100 text-[#1e4c31] font-bold' : 'text-gray-400 hover:bg-emerald-50 hover:text-[#1e4c31]'
              }`}
            >
              <Settings className={`w-5 h-5 flex-shrink-0 ${view === 'Settings' ? 'text-emerald-700' : ''}`} />
              <span className="text-sm">Settings</span>
            </button>
            <button
              onClick={() => { handleLogout(); setSidebarOpen(false); }}
              disabled={isLoggingOut}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors disabled:opacity-60"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{isLoggingOut ? 'Logging out...' : 'Log Out'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
