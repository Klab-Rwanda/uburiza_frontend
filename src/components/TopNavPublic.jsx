import React from 'react';
import { Activity, Search } from 'lucide-react';

export default function TopNavPublic({ setView }) {

  return (
    <header className="bg-white border-b border-emerald-200 h-16 flex items-center justify-between px-8 sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center space-x-12">
        <div 
          className="flex items-center space-x-2 text-black font-bold text-xl cursor-pointer" 
          onClick={() => setView('LandingPage')}
        >
          <Activity className="w-6 h-6" />
          <span>Uburiza Learn</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <button onClick={() => setView('CourseCatalog')} className="text-black hover:text-gray-800 transition-colors">Courses</button>
          <button onClick={() => setView('Resources')} className="text-black hover:text-gray-800 transition-colors">Resources</button>
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search skills..." 
            className="pl-9 pr-4 py-2 border border-emerald-200 bg-white text-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 transition-colors duration-300"
          />
        </div>
        
        <div className="flex items-center space-x-4 border-l border-emerald-200 pl-6">
          <button className="text-sm font-medium text-black hover:text-gray-700 transition-colors ml-2" onClick={() => setView('Login')}>Login</button>
          <button className="text-sm font-medium bg-emerald-800 text-white px-5 py-2 rounded-lg hover:bg-emerald-900 transition-colors shadow-sm" onClick={() => setView('Signup')}>
            Join Free
          </button>
        </div>
      </div>
    </header>
  );
}
