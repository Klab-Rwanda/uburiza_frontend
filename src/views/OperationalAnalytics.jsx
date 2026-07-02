import React, { useState } from 'react';
import { Filter, Users, BookOpen, TrendingUp, FileText, Plus, Upload, MoreVertical, Search } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis } from 'recharts';
import { useCourses } from '../api/hooks/useCourse';
import { useAdminStats } from '../api/hooks/useEnrollments';

const PAGE_SIZE = 10;

export default function OperationalAnalytics({ setView }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { data: stats, isLoading: statsLoading } = useAdminStats();
  const { data: courses, isLoading: coursesLoading } = useCourses({ published: true });

  const enrollments = stats?.recent_enrollments ?? [];
  const chartData = stats?.monthly_chart ?? [];

  const filtered = enrollments.filter((e) =>
    e.user_name?.toLowerCase().includes(search.toLowerCase()) ||
    e.course_title?.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const metrics = [
    { icon: Users, label: 'Total Learners', value: stats?.total_learners ?? '—' },
    { icon: BookOpen, label: 'Active Courses', value: stats?.active_courses ?? courses?.length ?? '—' },
    { icon: TrendingUp, label: 'Platform Revenue', value: stats?.total_revenue != null ? `$${Number(stats.total_revenue).toLocaleString()}` : '—' },
    { icon: FileText, label: 'Content Assets', value: stats?.total_lessons ?? '—' },
  ];

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
        {metrics.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
            <div className="mb-4">
              <Icon className="w-5 h-5 text-emerald-700" />
            </div>
            <p className="text-sm text-black font-medium mb-1">{label}</p>
            <h3 className="text-3xl font-bold text-black">
              {statsLoading ? <span className="text-gray-300 animate-pulse">···</span> : value}
            </h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-black mb-1">Enrollment & Completions</h2>
          <p className="text-sm text-black mb-6">Visualizing student registration vs. graduation trends</p>
          <div className="h-72 w-full">
            {chartData.length === 0 && !statsLoading ? (
              <p className="text-sm text-gray-400 text-center pt-24">No chart data available.</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLearners" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e4c31" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#1e4c31" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorCompletions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dx={-10} />
                  <Area type="monotone" dataKey="learners" stroke="#1e4c31" strokeWidth={3} fillOpacity={1} fill="url(#colorLearners)" />
                  <Area type="monotone" dataKey="completions" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCompletions)" />
                </AreaChart>
              </ResponsiveContainer>
            )}
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
              <button onClick={() => setView('AdminForms')} className="w-full bg-[#1e4c31] hover:bg-emerald-900 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-colors">
                <Plus className="w-5 h-5 mr-2" /> Launch New Course
              </button>
              <button onClick={() => setView('ResourceUpload')} className="w-full bg-white hover:bg-emerald-50 border border-emerald-300 text-[#1e4c31] py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-colors">
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

      {/* Learner Management Table */}
      <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Learner Management</h2>
            <p className="text-sm text-black">Review enrollment status and student progress across all modules.</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
              />
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
              {statsLoading ? (
                <tr><td colSpan={5} className="py-8 text-center text-sm text-gray-400">Loading...</td></tr>
              ) : paginated.length === 0 ? (
                <tr><td colSpan={5} className="py-8 text-center text-sm text-gray-400">No learners found.</td></tr>
              ) : paginated.map((e) => (
                <tr key={e.id} className="hover:bg-emerald-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">
                        {e.user_name?.[0]?.toUpperCase() ?? '?'}
                      </div>
                      <span className="font-semibold text-black text-sm">{e.user_name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-black">{e.course_title}</td>
                  <td className="py-4 px-4 text-sm text-black">
                    {e.enrolled_at ? new Date(e.enrolled_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
                      ${e.status === 'active' ? 'bg-[#1e4c31] text-white' :
                        e.status === 'completed' ? 'bg-[#10b981] text-white' :
                        'bg-white border border-slate-200 text-black'}`}>
                      {e.status ? e.status.charAt(0).toUpperCase() + e.status.slice(1) : '—'}
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
          <span>Showing {paginated.length} of {filtered.length} learners</span>
          <div className="flex space-x-2">
            <button onClick={() => setPage((p) => p - 1)} disabled={page === 1} className="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 disabled:opacity-50">Previous</button>
            <button onClick={() => setPage((p) => p + 1)} disabled={page >= totalPages} className="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
