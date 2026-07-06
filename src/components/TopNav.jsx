import React, { useState } from 'react';
import { Bell, Search, Activity, Flame, Menu, X, ChevronDown, LayoutDashboard, Settings, LogOut, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useLogout } from '../api/hooks/useAuthMutations';
import { useMyProfile } from '../api/hooks/useProfile';

export default function TopNav({ view, setView, sidebarOpen, setSidebarOpen }) {
  const { streak, user, userRole, setUser, setUserRole } = useAppContext();
  const { handleLogout, isPending: isLoggingOut } = useLogout({ setView, setUser, setUserRole });
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { data: profile } = useMyProfile();

  const isAdmin = userRole === 'admin';
  const avatarSrc = profile?.picture_url ?? `https://i.pravatar.cc/150?img=11`;
  const displayName = profile ? `${profile.first_name} ${profile.last_name}`.trim() : (user?.name ?? 'User');

  return (
    <header className="bg-white border-b border-emerald-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xl cursor-pointer" onClick={() => setView(isAdmin ? 'Analytics' : 'Dashboard')}>
          <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span>Uburiza Learn</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <button onClick={() => setView('CourseCatalog')} className={`${view === 'CourseCatalog' ? 'text-emerald-700 font-bold' : 'text-black hover:text-emerald-700 transition-colors'}`}>Courses</button>
          <button onClick={() => setView('Resources')} className={`${view === 'Resources' ? 'text-emerald-700 font-bold' : 'text-black hover:text-emerald-700 transition-colors'}`}>Resources</button>
          {!isAdmin && (
            <button onClick={() => setView('Dashboard')} className={`${view === 'Dashboard' ? 'text-emerald-700 font-bold' : 'text-black hover:text-emerald-700 transition-colors'}`}>My Dashboard</button>
          )}
          {isAdmin && (
            <button onClick={() => setView('Analytics')} className={`${view === 'Analytics' ? 'text-emerald-700 font-bold' : 'text-black hover:text-emerald-700 transition-colors'} flex items-center`}>
              <ShieldCheck className="w-4 h-4 mr-1" /> Admin
            </button>
          )}
        </nav>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <div className="relative">
          <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search skills..." 
            className="pl-9 pr-4 py-2 border border-slate-200 bg-white text-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 transition-colors duration-300"
          />
        </div>
        
        <div className="flex items-center space-x-1 text-black font-bold text-sm bg-emerald-50 px-3 py-1.5 rounded-full" title={`${streak} Day Streak!`}>
          <Flame className="w-4 h-4 text-emerald-600" />
          <span>{streak}</span>
        </div>

        <button className="text-black hover:text-gray-700 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        <div 
          className="relative cursor-pointer group"
          onMouseEnter={() => setIsProfileDropdownOpen(true)}
          onMouseLeave={() => setIsProfileDropdownOpen(false)}
        >
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img src={avatarSrc} alt="Avatar" className="w-8 h-8 rounded-full border border-emerald-200 object-cover" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
          </div>

          {/* Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 top-full pt-2 w-48 z-50">
              <div className="bg-white border border-emerald-100 rounded-xl shadow-xl overflow-hidden">
                <div className="p-3 border-b border-emerald-50 bg-emerald-50/50">
                  <p className="text-sm font-bold text-black">{displayName}</p>
                  <p className="text-xs text-gray-500">{user?.email || (isAdmin ? 'Administrator' : 'Learner')}</p>
                </div>
                <div className="p-2 space-y-1">
                  <button 
                    onClick={() => { setView(isAdmin ? 'Analytics' : 'Dashboard'); setIsProfileDropdownOpen(false); }} 
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-black hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                    <span>My Dashboard</span>
                  </button>
                  <button 
                    onClick={() => { setView('Settings'); setIsProfileDropdownOpen(false); }} 
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-black hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    <Settings className="w-4 h-4 text-emerald-600" />
                    <span>Settings</span>
                  </button>
                  <div className="border-t border-emerald-50 my-1"></div>
                  <button 
                    onClick={() => { handleLogout(); setIsProfileDropdownOpen(false); }} 
                    disabled={isLoggingOut}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-60"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    <span>{isLoggingOut ? 'Logging out...' : 'Log Out'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-black">
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}
