import React from 'react';
import { Bell, Search, Activity, Flame } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function TopNav({ view, setView }) {
  const { streak } = useAppContext();

  return (
    <header className="bg-white border-b border-emerald-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2 text-black font-bold text-xl cursor-pointer" onClick={() => setView('Dashboard')}>
          <Activity className="w-6 h-6" />
          <span>Uburiza Learn</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <button onClick={() => setView('Dashboard')} className={`${view === 'Dashboard' ? 'text-black' : 'text-black hover:text-gray-700'}`}>Courses</button>
          <button onClick={() => setView('Resources')} className={`${view === 'Resources' ? 'text-black' : 'text-black hover:text-gray-700'}`}>Resources</button>
          <button onClick={() => setView('Dashboard')} className={`${view === 'Dashboard' ? 'text-black' : 'text-black hover:text-gray-700'}`}>My Dashboard</button>
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search skills..." 
            className="pl-9 pr-4 py-2 border border-emerald-200 bg-white text-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 transition-colors duration-300"
          />
        </div>
        
        <div className="flex items-center space-x-1 text-orange-500 font-bold text-sm bg-orange-50/20 px-3 py-1.5 rounded-full" title={`${streak} Day Streak!`}>
          <Flame className="w-4 h-4 fill-orange-500" />
          <span>{streak}</span>
        </div>

        <button className="text-black hover:text-gray-700 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative cursor-pointer">
          <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-8 h-8 rounded-full border border-emerald-200" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
