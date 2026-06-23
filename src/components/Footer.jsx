import React from 'react';
import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-emerald-200 py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xl mb-4">
            <Activity className="w-6 h-6" />
            <span>Uburiza Learn</span>
          </div>
          <p className="text-emerald-500 text-sm mb-8">
            Empowering the next generation of African digital leaders through premium, accessible education.
          </p>
          <div className="text-xs text-emerald-400 mt-12">
            Built for the future of Africa. © 2024 Uburiza Learn.
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-900 mb-4">Platform</h4>
          <ul className="space-y-3 text-sm text-emerald-500">
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Course Catalog</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Resource Library</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-900 mb-4">Community</h4>
          <ul className="space-y-3 text-sm text-emerald-500">
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Africa Tech Network</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Student Mentorship</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Partnerships</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Events</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-900 mb-4">Stay Inspired</h4>
          <p className="text-sm text-emerald-500 mb-4">
            Join our newsletter for the latest tech skills and opportunities.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-4 py-2 border border-emerald-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 w-full text-sm"
            />
            <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
