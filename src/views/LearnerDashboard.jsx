import React from 'react';
import { Play, TrendingUp, Zap, ChevronRight, Clock, Award } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis } from 'recharts';
import { courses, upcomingEvents, mentors, activityData } from '../data/mockData';
import { useAppContext } from '../context/AppContext';

export default function LearnerDashboard({ setView }) {
  const { user } = useAppContext();

  return (
    <div className="page p-8 mx-auto space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden gap-6">
        <div className="z-10 space-y-4">
          <div className="inline-block bg-emerald-200 text-black text-xs font-semibold px-3 py-1 rounded-full">
            Growth Mindset
          </div>
          <h1 className="text-4xl font-bold text-black">
            Welcome back, {user?.name || user?.username || 'there'}! <span className="text-3xl">👋</span>
          </h1>
          <p className="text-black max-w-md">
            You've completed 75% of your weekly goal. Keep it up to stay ahead of the curve!
          </p>
          <div className="flex space-x-4 pt-2">
            <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-lg font-medium flex items-center transition-colors">
              <Play className="w-4 h-4 mr-2" fill="currentColor" />
              Resume: UI/UX Design for Africa
            </button>
            <button className="bg-white border border-emerald-300 hover:bg-emerald-50 text-black px-6 py-2.5 rounded-lg font-medium transition-colors">
              Explore More
            </button>
          </div>
        </div>
        
        {/* Stats Blocks */}
        <div className="flex space-x-4 z-10">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex items-center space-x-4 min-w-[160px]">
            <div className="bg-emerald-50 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="text-xs text-black font-medium">Current Streak</p>
              <p className="text-xl font-bold text-black">12 Days</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex items-center space-x-4 min-w-[160px]">
            <div className="bg-emerald-50 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="text-xs text-black font-medium">Points Earned</p>
              <p className="text-xl font-bold text-black">2,450</p>
            </div>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* In Progress */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black flex items-center">
                <BookIcon className="w-5 h-5 mr-2" /> In Progress
              </h2>
              <button className="text-black text-sm font-medium hover:underline">View all catalog</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map(course => (
                <div key={course.id} className="bg-white border border-emerald-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="relative h-48 bg-emerald-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-md text-black">
                      {course.lessons} Lessons
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-black mb-1">{course.title}</h3>
                    <div className="flex items-center text-sm text-black mb-5">
                      <img src={course.authorAvatar} alt={course.author} className="w-5 h-5 rounded-full mr-2" />
                      {course.author}
                    </div>
                    
                    <div className="mb-2 flex justify-between text-xs font-semibold">
                      <span className="text-black">PROGRESS</span>
                      <span className="text-black">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-emerald-100 rounded-full h-2 mb-4 overflow-hidden">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    
                    <div className="border-t border-emerald-100 pt-3 flex justify-between items-center group-hover:text-gray-700 transition-colors">
                      <span className="text-sm font-semibold">Continue Learning</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Activity Chart */}
          <section className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-black">Learning Activity</h2>
                <p className="text-sm text-black">Your study time over the last 7 days</p>
              </div>
              <div className="bg-emerald-50 text-black text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
                +12% from last week
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dx={-10} />
                  <Area type="monotone" dataKey="hours" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

        </div>

        {/* Sidebar content */}
        <div className="space-y-6">
          
          {/* Up Next */}
          <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-black mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2" /> Up Next
            </h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {upcomingEvents.map((event, i) => (
                <div key={event.id} className="relative flex items-start space-x-4">
                  <div className={`w-4 h-4 rounded-full border-2 border-white ring-2 z-10 flex-shrink-0 mt-1 ${
                    event.type === 'quiz' ? 'bg-black ring-slate-200' :
                    event.type === 'assignment' ? 'bg-white ring-emerald-500 border-emerald-500' :
                    'bg-white ring-emerald-500 border-emerald-500'
                  }`} />
                  <div>
                    <h4 className="font-semibold text-black text-sm">{event.title}</h4>
                    <p className="text-xs text-black mb-1">{event.course}</p>
                    <p className={`text-xs font-semibold flex items-center ${event.type === 'quiz' ? 'text-black' : 'text-black'}`}>
                      <Clock className="w-3 h-3 mr-1" /> {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm font-semibold text-black bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors">
              View Full Calendar
            </button>
          </div>

          {/* Recent Achievements */}
          <div className="bg-[#1e4c31] text-white rounded-2xl p-6 relative overflow-hidden cursor-pointer" onClick={() => setView('Certificate')}>
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" /> Recent Achievements
            </h2>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm mb-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-500 rounded-full p-2">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-emerald-100">Certificate Earned</p>
                  <p className="font-bold text-sm">Introduction to AI</p>
                </div>
              </div>
              <button className="w-full bg-white text-[#1e4c31] font-semibold py-2 rounded-lg text-sm hover:bg-emerald-50 transition-colors">
                View Certificate
              </button>
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>Goal: 5 Certificates</span>
                <span>3/5</span>
              </div>
              <div className="w-full bg-emerald-950/20 rounded-full h-1.5">
                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          {/* Your Mentors */}
          <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-black mb-4">Your Mentors</h2>
            <div className="space-y-4">
              {mentors.map(mentor => (
                <div key={mentor.id} className="flex items-center justify-between group cursor-pointer hover:bg-emerald-50 p-2 -mx-2 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img src={mentor.avatar} alt={mentor.name} className="w-10 h-10 rounded-full" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-black">{mentor.name}</p>
                      <p className="text-xs text-black">{mentor.role}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-black group-hover:text-gray-700" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Basic book icon since lucide might not match exactly
function BookIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
