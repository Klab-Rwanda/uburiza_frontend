import React from 'react';
import { Filter, Users, BookOpen, TrendingUp, FileText, Plus, Upload, MoreVertical, Search } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis } from 'recharts';
import { learners, analyticsData } from '../data/mockData';

export default function OperationalAnalytics() {
  return (
    <div className="page p-8 mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-black mb-1">Operational Overview</h1>
          <p className="text-sm text-black">Monitor platform growth and learner engagement in real-time.</p>
        </div>
        <button className="flex items-center text-sm font-medium text-[#1e4c31] bg-white border border-emerald-300 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors">
          <Filter className="w-4 h-4 mr-2" /> Filter Dates
        </button>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Users className="w-5 h-5 text-emerald-700" />
            </div>
            <span className="text-xs font-bold text-black flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +14.2%
            </span>
          </div>
          <p className="text-sm text-black font-medium mb-1">Total Learners</p>
          <h3 className="text-3xl font-bold text-black">12,482</h3>
        </div>

        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <BookOpen className="w-5 h-5 text-emerald-700" />
            </div>
            <span className="text-xs font-bold text-black flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +4.8%
            </span>
          </div>
          <p className="text-sm text-black font-medium mb-1">Active Courses</p>
          <h3 className="text-3xl font-bold text-black">48</h3>
        </div>

        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <TrendingUp className="w-5 h-5 text-emerald-700" />
            </div>
            <span className="text-xs font-bold text-black flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +22.5%
            </span>
          </div>
          <p className="text-sm text-black font-medium mb-1">Platform Revenue</p>
          <h3 className="text-3xl font-bold text-black">$42,900</h3>
        </div>

        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <FileText className="w-5 h-5 text-emerald-700" />
            </div>
            <span className="text-xs font-bold text-black flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +12.1%
            </span>
          </div>
          <p className="text-sm text-black font-medium mb-1">Content Assets</p>
          <h3 className="text-3xl font-bold text-black">3,120</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-black mb-1">Enrollment & Completions</h2>
          <p className="text-sm text-black mb-6">Visualizing student registration vs. graduation trends</p>
          
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLearners" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e4c31" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1e4c31" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCompletions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dx={-10} />
                <Area type="monotone" dataKey="learners" stroke="#1e4c31" strokeWidth={3} fillOpacity={1} fill="url(#colorLearners)" />
                <Area type="monotone" dataKey="completions" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCompletions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center items-center space-x-6 mt-4">
            <div className="flex items-center text-sm font-medium text-black">
              <span className="w-3 h-3 rounded-full bg-[#1e4c31] mr-2"></span> Learners
            </div>
            <div className="flex items-center text-sm font-medium text-black">
              <span className="w-3 h-3 rounded-full bg-[#10b981] mr-2"></span> Completions
            </div>
          </div>
        </div>

        {/* Quick Actions & System Health */}
        <div className="space-y-8">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
            <h3 className="font-bold text-black mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-[#1e4c31] hover:bg-emerald-900 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-colors">
                <Plus className="w-5 h-5 mr-2" /> Launch New Course
              </button>
              <button className="w-full bg-white hover:bg-emerald-50 border border-emerald-300 text-[#1e4c31] py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-colors">
                <Upload className="w-5 h-5 mr-2" /> Upload Bulk Resources
              </button>
            </div>

            <div className="mt-8">
              <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">System Health</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-black">Server Load</span>
                  <span className="font-semibold text-black">Normal (12%)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-black">API Latency</span>
                  <span className="font-semibold text-black">42ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Course Architect */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-black mb-1">Course Architect</h2>
          <p className="text-sm text-black mb-6">Design and publish a new digital skill curriculum</p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Course Title</label>
              <input type="text" placeholder="e.g. Masterclass in Mobile Entrepreneurship" className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">Category</label>
                <select className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Skill Level</label>
                <select className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white">
                  <option>Select...</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Course Description</label>
              <textarea placeholder="Outline the learning objectives and course outcomes..." rows="3" className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"></textarea>
            </div>
            <div className="flex space-x-4 pt-2">
              <button type="button" className="bg-[#1e4c31] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-900 transition-colors flex-1">
                Save Draft
              </button>
              <button type="button" className="bg-white border border-emerald-300 text-[#1e4c31] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors flex-1">
                Preview
              </button>
            </div>
          </form>
        </div>

        {/* Resource Repository */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-black mb-1">Resource Repository</h2>
          <p className="text-sm text-black mb-6">Manage curriculum downloads and study materials</p>
          
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer mb-6">
            <div className="p-3 rounded-full mb-3">
              <Upload className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="font-medium text-black mb-1">Drag and drop resource files</p>
            <p className="text-xs text-black mb-4">Supports PDF, MP4, and ZIP up to 500MB</p>
            <button className="text-emerald-700 font-semibold text-sm hover:underline">Or browse files</button>
          </div>

          <div className="flex-grow">
            <h4 className="text-sm font-bold text-black mb-3">Pending Uploads</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-emerald-50 rounded-lg bg-white shadow-sm">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-medium text-black">Digital_Strategy_Module_1.pdf</p>
                    <p className="text-xs text-black">4.2 MB • Waiting for verification</p>
                  </div>
                </div>
                <button className="text-red-500 p-1 hover:bg-red-50 rounded"><span className="text-lg leading-none">&times;</span></button>
              </div>
              <div className="flex items-center justify-between p-3 border border-emerald-50 rounded-lg bg-white shadow-sm">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-medium text-black">Digital_Strategy_Module_2.pdf</p>
                    <p className="text-xs text-black">4.2 MB • Waiting for verification</p>
                  </div>
                </div>
                <button className="text-red-500 p-1 hover:bg-red-50 rounded"><span className="text-lg leading-none">&times;</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Learner Management</h2>
            <p className="text-sm text-black">Review enrollment status and student progress across all modules.</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Search students..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64" />
            </div>
            <button className="p-2 border border-emerald-200 rounded-lg hover:bg-emerald-50 text-black">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-emerald-200">
                <th className="py-4 px-4 text-xs font-bold text-black uppercase tracking-wider">Student</th>
                <th className="py-4 px-4 text-xs font-bold text-black uppercase tracking-wider">Enrolled Course</th>
                <th className="py-4 px-4 text-xs font-bold text-black uppercase tracking-wider">Registration Date</th>
                <th className="py-4 px-4 text-xs font-bold text-black uppercase tracking-wider">Status</th>
                <th className="py-4 px-4 text-xs font-bold text-black uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {learners.map((learner) => (
                <tr key={learner.id} className="hover:bg-emerald-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <img src={learner.avatar} alt={learner.name} className="w-8 h-8 rounded-full" />
                      <span className="font-semibold text-black text-sm">{learner.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-black">{learner.course}</td>
                  <td className="py-4 px-4 text-sm text-black">{learner.date}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
                      ${learner.status === 'Active' ? 'bg-[#1e4c31] text-white' : 
                        learner.status === 'Completed' ? 'bg-[#10b981] text-white' : 
                        'bg-white border border-slate-200 text-black'}`}>
                      {learner.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-black hover:text-gray-700">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-black">
          <span>Showing 5 of 12,482 learners</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
