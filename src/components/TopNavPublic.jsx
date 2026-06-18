import React from 'react';
import { Activity, Search, Moon, Sun, Wifi } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function TopNavPublic({ setView }) {
  const { theme, toggleTheme, dataSaver, toggleDataSaver } = useAppContext();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 flex items-center justify-between px-8 sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center space-x-12">
        <div 
          className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-400 font-bold text-xl cursor-pointer" 
          onClick={() => setView('LandingPage')}
        >
          <Activity className="w-6 h-6" />
          <span>Uburiza Learn</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <button onClick={() => setView('CourseCatalog')} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Courses</button>
          <button onClick={() => setView('Resources')} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Resources</button>
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search skills..." 
            className="pl-9 pr-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 transition-colors duration-300"
          />
        </div>
        
        <div className="flex items-center space-x-4 border-l border-gray-200 dark:border-gray-700 pl-6">
          <button onClick={toggleDataSaver} className={`p-2 rounded-full transition-colors ${dataSaver ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`} title="Data Saver Mode">
            <Wifi className="w-4 h-4" />
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Toggle Dark Mode">
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ml-2" onClick={() => setView('Login')}>Login</button>
          <button className="text-sm font-medium bg-emerald-800 dark:bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-900 dark:hover:bg-emerald-700 transition-colors shadow-sm" onClick={() => setView('Signup')}>
            Join Free
          </button>
        </div>
      </div>
    </header>
  );
}
