import React, { useState } from 'react';
import { Activity, Search, Bell, Flame, ChevronDown, LayoutDashboard, Settings, LogOut, ShieldCheck, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useLogout } from '../api/hooks/useAuthMutations';

export default function TopNavPublic({ setView }) {
  const { streak, user, userRole, setUser, setUserRole } = useAppContext();
  const { handleLogout, isPending: isLoggingOut } = useLogout({ setView, setUser, setUserRole });
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAdmin = userRole === 'admin';
  const isLoggedIn = !!user;

  return (
    <header className="bg-white border-b border-emerald-200 h-16 flex items-center justify-between px-8 sticky top-0 z-50 transition-colors duration-300">
      {/* Left: logo + nav */}
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xl cursor-pointer" onClick={() => setView('LandingPage')}>
          <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span>Uburiza Learn</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <button onClick={() => setView('CourseCatalog')} className="text-black hover:text-emerald-700 transition-colors">Courses</button>
          <button onClick={() => setView('Resources')} className="text-black hover:text-emerald-700 transition-colors">Resources</button>
          {isLoggedIn && !isAdmin && (
            <button onClick={() => setView('Dashboard')} className="text-black hover:text-emerald-700 transition-colors">My Dashboard</button>
          )}
          {isAdmin && (
            <button onClick={() => setView('Analytics')} className="text-black hover:text-emerald-700 transition-colors flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Admin
            </button>
          )}
        </nav>
      </div>

      {/* Right */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="relative">
          <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" placeholder="Search skills..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64" />
        </div>

        {isLoggedIn ? (
          <>
            <div className="flex items-center space-x-1 text-black font-bold text-sm bg-emerald-50 px-3 py-1.5 rounded-full">
              <Flame className="w-4 h-4 text-emerald-600" />
              <span>{streak}</span>
            </div>
            <button className="text-black hover:text-gray-700 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full" />
            </button>
            <div className="relative cursor-pointer" onMouseEnter={() => setProfileOpen(true)} onMouseLeave={() => setProfileOpen(false)}>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-8 h-8 rounded-full border border-emerald-200" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              {profileOpen && (
                <div className="absolute right-0 top-full pt-2 w-48 z-50">
                  <div className="bg-white border border-emerald-100 rounded-xl shadow-xl overflow-hidden">
                    <div className="p-3 border-b border-emerald-50 bg-emerald-50/50">
                      <p className="text-sm font-bold text-black">{user?.name || user?.username || 'User'}</p>
                      <p className="text-xs text-gray-500">{user?.email || (isAdmin ? 'Administrator' : 'Learner')}</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <button onClick={() => { setView(isAdmin ? 'Analytics' : 'Dashboard'); setProfileOpen(false); }} className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-black hover:bg-emerald-50 rounded-lg">
                        <LayoutDashboard className="w-4 h-4 text-emerald-600" /><span>My Dashboard</span>
                      </button>
                      <button onClick={() => { setView('Settings'); setProfileOpen(false); }} className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-black hover:bg-emerald-50 rounded-lg">
                        <Settings className="w-4 h-4 text-emerald-600" /><span>Settings</span>
                      </button>
                      <div className="border-t border-emerald-50 my-1" />
                      <button onClick={() => { handleLogout(); setProfileOpen(false); }} disabled={isLoggingOut} className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-60">
                        <LogOut className="w-4 h-4 text-red-500" /><span>{isLoggingOut ? 'Logging out...' : 'Log Out'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center space-x-4 border-l border-emerald-200 pl-6">
            <button className="text-sm font-medium text-emerald-900 hover:text-emerald-700 transition-colors" onClick={() => setView('Login')}>Login</button>
            <button className="text-sm font-medium bg-emerald-800 text-white px-5 py-2 rounded-lg hover:bg-emerald-900 transition-colors shadow-sm" onClick={() => setView('Signup')}>Join Free</button>
          </div>
        )}
      </div>

      {/* Mobile toggle */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen((o) => !o)} className="text-black">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-emerald-200 p-6 shadow-xl flex flex-col space-y-2 md:hidden z-50">
          <button onClick={() => { setView('CourseCatalog'); setMobileOpen(false); }} className="text-left font-medium text-black py-3 px-4 rounded-lg hover:bg-emerald-50">Courses</button>
          <button onClick={() => { setView('Resources'); setMobileOpen(false); }} className="text-left font-medium text-black py-3 px-4 rounded-lg hover:bg-emerald-50">Resources</button>
          {isLoggedIn && !isAdmin && (
            <button onClick={() => { setView('Dashboard'); setMobileOpen(false); }} className="text-left font-medium text-black py-3 px-4 rounded-lg hover:bg-emerald-50">My Dashboard</button>
          )}
          {isAdmin && (
            <button onClick={() => { setView('Analytics'); setMobileOpen(false); }} className="text-left font-medium text-black py-3 px-4 rounded-lg hover:bg-emerald-50 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Admin Dashboard
            </button>
          )}
          {!isLoggedIn && (
            <>
              <button onClick={() => { setView('Login'); setMobileOpen(false); }} className="text-left font-medium text-black py-3 px-4 rounded-lg hover:bg-emerald-50">Login</button>
              <button onClick={() => { setView('Signup'); setMobileOpen(false); }} className="text-left font-medium bg-emerald-800 text-white py-3 px-4 rounded-lg">Join Free</button>
            </>
          )}
          {isLoggedIn && (
            <button onClick={() => { handleLogout(); setMobileOpen(false); }} disabled={isLoggingOut} className="text-left font-medium text-red-600 py-3 px-4 rounded-lg hover:bg-red-50 disabled:opacity-60">
              {isLoggingOut ? 'Logging out...' : 'Log Out'}
            </button>
          )}
        </div>
      )}
    </header>
  );
}
