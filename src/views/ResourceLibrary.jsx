import React from 'react';
import { Filter, Search, Download, FileText, FileSpreadsheet, File, Video, ArrowRight, Activity } from 'lucide-react';
import { resources } from '../data/mockData';

export default function ResourceLibrary() {
  const getIcon = (type) => {
    switch(type) {
      case 'PDF': return <FileText className="w-6 h-6" />;
      case 'XLS': return <FileSpreadsheet className="w-6 h-6" />;
      case 'DOC': return <File className="w-6 h-6" />;
      case 'VIDEO': return <Video className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <div className="page flex flex-col min-h-screen">
      <div className="p-8 mx-auto space-y-8 flex-grow w-full">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <div className="inline-block bg-emerald-50 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Knowledge Hub
            </div>
            <h1 className="text-4xl font-bold text-black mb-2">
              Resource <span className="text-black">Library</span>
            </h1>
            <p className="text-black max-w-xl">
              Access curated toolkits, guides, and templates designed to accelerate your growth in the African digital economy.
            </p>
          </div>
          <div className="relative mt-4 lg:mt-0">
            <Search className="w-5 h-5 text-black absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search resources, topics, or file types..." 
              className="pl-10 pr-4 py-3 border border-emerald-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-80 shadow-sm"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between border-b border-emerald-200 pb-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <button className="flex items-center justify-center p-2 rounded-lg border border-emerald-200 text-black hover:bg-emerald-50">
              <Filter className="w-4 h-4" />
            </button>
            <button className="bg-emerald-800 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
              All Resources
            </button>
            <button className="text-black border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 whitespace-nowrap">
              Case Studies
            </button>
            <button className="text-black border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 whitespace-nowrap">
              Video Toolkits
            </button>
            <button className="text-black border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 whitespace-nowrap">
              Worksheets
            </button>
            <button className="text-black border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 whitespace-nowrap">
              Templates
            </button>
            <button className="text-black border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 whitespace-nowrap">
              Cheat Sheets
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-black ml-4">
            <span>Sort by:</span>
            <select className="font-semibold bg-transparent focus:outline-none border-none">
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center text-sm">
          <p className="font-semibold text-black">Showing 8 results <span className="text-black font-normal">- All Categories</span></p>
          <button className="text-black font-semibold flex items-center hover:underline">
            <span className="mr-1">Edit</span> Request a Resource
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map(resource => (
            <div key={resource.id} className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${resource.bgIcon} ${resource.iconColor}`}>
                  {getIcon(resource.type)}
                </div>
                <div className="bg-emerald-50 text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                  {resource.type}
                </div>
              </div>
              
              <h3 className="font-bold text-black mb-2">{resource.title}</h3>
              <p className="text-sm text-black mb-6 flex-grow line-clamp-3">{resource.desc}</p>
              
              <div className="space-y-1 mb-6">
                <div className="flex items-center text-xs text-black">
                  <span className="w-4 h-4 mr-2 border border-emerald-300 rounded inline-block"></span>
                  {resource.category}
                </div>
                <div className="flex items-center text-xs text-black">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  Updated {resource.updated}
                </div>
              </div>

              <div className="border-t border-emerald-100 pt-4 flex justify-between items-center mt-auto">
                <div>
                  <p className="text-[10px] text-black font-bold uppercase tracking-wider">SIZE</p>
                  <p className="text-sm font-semibold text-black">{resource.size}</p>
                </div>
                <button className="bg-[#1e4c31] hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors">
                  <Download className="w-4 h-4 mr-1.5" /> Get File
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cannot find */}
        <div className="bg-white border border-emerald-200 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center my-8">
          <div className="bg-emerald-50 p-3 rounded-full mb-4">
            <BookIcon className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Can't find what you're looking for?</h3>
          <p className="text-black mb-6 max-w-md">Our team regularly updates the library based on learner feedback.</p>
          <button className="text-black border border-emerald-300 px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center hover:bg-emerald-50 transition-colors">
            Browse Full Catalog <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Footer Banner & CTA */}
      <div className="w-full">
        <div className="bg-[#1e4c31] w-full py-16 relative overflow-hidden flex justify-center items-center">
          {/* Overlay Grid Pattern - simple CSS version */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
          
          <div className="text-center z-10 px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Empower Your Learning Journey</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of African professionals mastering digital skills. All resources are mobile-optimized for accessibility.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-[#00d084] hover:bg-[#00b875] text-black font-bold px-8 py-3 rounded-lg transition-colors">
                Start Learning Now
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors">
                View All Courses
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-emerald-200 py-12 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 text-black font-bold text-xl mb-4">
                <Activity className="w-6 h-6" />
                <span>Uburiza Learn</span>
              </div>
              <p className="text-sm text-black">
                Empowering the next generation of African digital leaders through premium, accessible education.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-4">Platform</h4>
              <ul className="space-y-3 text-sm text-black">
                <li><a href="#" className="hover:text-gray-700">Course Catalog</a></li>
                <li><a href="#" className="hover:text-gray-700">Resource Library</a></li>
                <li><a href="#" className="hover:text-gray-700">Success Stories</a></li>
                <li><a href="#" className="hover:text-gray-700">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Community</h4>
              <ul className="space-y-3 text-sm text-black">
                <li><a href="#" className="hover:text-gray-700">Africa Tech Network</a></li>
                <li><a href="#" className="hover:text-gray-700">Student Mentorship</a></li>
                <li><a href="#" className="hover:text-gray-700">Partnerships</a></li>
                <li><a href="#" className="hover:text-gray-700">Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Stay Inspired</h4>
              <p className="text-sm text-black mb-4">Join our newsletter for the latest tech skills and opportunities.</p>
              <div className="flex">
                <input type="email" placeholder="Email address" className="border border-emerald-300 rounded-l-lg px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                <button className="bg-[#1e4c31] text-white px-4 py-2 rounded-r-lg font-medium">Join</button>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-emerald-100 flex flex-col md:flex-row justify-between items-center text-sm text-black">
            <p>Built for the future of Africa. © 2024 Uburiza Learn.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ClockIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}


