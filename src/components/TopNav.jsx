import React, { useState } from 'react';
import { Bell, Search, Activity, Flame, Menu, X, ChevronDown, User, LayoutDashboard, Settings, LogOut, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function TopNav({ view, setView }) {
  const { streak, userRole, setUserRole } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const isAdmin = userRole === 'admin';

  return (
    <header className="bg-white border-b border-emerald-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xl cursor-pointer" onClick={() => setView('Dashboard')}>
          <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span>Uburiza Learn</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <button onClick={() => setView('CourseCatalog')} className={`${view === 'CourseCatalog' ? 'text-emerald-700 font-bold' : 'text-black hover:text-emerald-700 transition-colors'}`}>Courses</button>
          <button onClick={() => setView('Resources')} className={`${view === 'Resources' ? 'text-emerald-700 font-bold' : 'text-black hover:text-emerald-700 transition-colors'}`}>Resources</button>
          {!isAdmin ? (
            <button onClick={() => { setUserRole('admin'); setView('Analytics'); }} className="text-black hover:text-emerald-700 transition-colors flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1" /> Admin
            </button>
          ) : (
            <button onClick={() => { setUserRole('learner'); setView('Dashboard'); }} className="text-emerald-600 font-bold hover:text-emerald-800 transition-colors flex items-center">
              <User className="w-4 h-4 mr-1" /> Learner View
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
              <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-8 h-8 rounded-full border border-emerald-200" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
          </div>

          {/* Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 top-full pt-2 w-48 z-50">
              <div className="bg-white border border-emerald-100 rounded-xl shadow-xl overflow-hidden">
                <div className="p-3 border-b border-emerald-50 bg-emerald-50/50">
                  <p className="text-sm font-bold text-black">Abebe Bikila</p>
                  <p className="text-xs text-gray-500">{isAdmin ? 'Administrator' : 'Learner'}</p>
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
                    onClick={() => { setView('LandingPage'); setIsProfileDropdownOpen(false); }} 
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black z-50">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-emerald-950/60 backdrop-blur-sm z-40 md:hidden transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col z-50 animate-in slide-in-from-right-8 duration-300 md:hidden">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-emerald-100">
              <div className="flex items-center space-x-3">
                <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-emerald-200" />
                <div>
                  <p className="font-bold text-black text-lg">Abebe Bikila</p>
                  <p className="text-sm text-emerald-600 font-medium">{isAdmin ? 'Administrator' : 'Learner'}</p>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-black transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2 pr-2">
              <button onClick={() => { setView('CourseCatalog'); setIsMobileMenuOpen(false); }} className="w-full text-left font-semibold text-black py-3.5 px-4 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition-colors">Courses Catalog</button>
              <button onClick={() => { setView(isAdmin ? 'Analytics' : 'Dashboard'); setIsMobileMenuOpen(false); }} className="w-full text-left font-semibold text-black py-3.5 px-4 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition-colors">My Dashboard</button>
              <button onClick={() => { setView('Resources'); setIsMobileMenuOpen(false); }} className="w-full text-left font-semibold text-black py-3.5 px-4 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition-colors">Resources</button>
              <button onClick={() => { setView('Settings'); setIsMobileMenuOpen(false); }} className="w-full text-left font-semibold text-black py-3.5 px-4 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition-colors">Settings</button>
              
              <div className="pt-2">
                {!isAdmin ? (
                  <button onClick={() => { setUserRole('admin'); setView('Analytics'); setIsMobileMenuOpen(false); }} className="w-full text-left font-semibold text-black py-3.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors flex items-center border border-slate-200">
                    <ShieldCheck className="w-5 h-5 mr-3 text-slate-600" /> Switch to Admin
                  </button>
                ) : (
                  <button onClick={() => { setUserRole('learner'); setView('Dashboard'); setIsMobileMenuOpen(false); }} className="w-full text-left font-semibold text-emerald-700 py-3.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center border border-emerald-200">
                    <User className="w-5 h-5 mr-3" /> Switch to Learner
                  </button>
                )}
              </div>
            </div>

            <div className="border-t border-emerald-100 mt-auto pt-6 pb-2">
              <button onClick={() => { setView('LandingPage'); setIsMobileMenuOpen(false); }} className="w-full text-left font-semibold text-red-600 py-3.5 px-4 rounded-xl hover:bg-red-50 active:bg-red-100 transition-colors flex items-center">
                <LogOut className="w-5 h-5 mr-3 text-red-500" /> Log Out
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
