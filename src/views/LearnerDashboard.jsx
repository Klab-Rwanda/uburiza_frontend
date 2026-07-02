import React from 'react';
import { Play, TrendingUp, BookOpen, ChevronRight, Clock, Award, PlayCircle, Layers, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';
import { useAppContext } from '../context/AppContext';
import { useMyEnrollments } from '../api/hooks/useEnrollments';

export default function LearnerDashboard({ setView, onSelectCourse }) {
  const { user, streak } = useAppContext();
  const { data: enrollments = [], isLoading } = useMyEnrollments();

  const inProgress = enrollments.filter((e) => !e.completed_at);
  const completed = enrollments.filter((e) => e.completed_at);
  const totalLessons = enrollments.reduce((sum, e) => sum + (e.progress?.totalLessons ?? 0), 0);
  const completedLessons = enrollments.reduce((sum, e) => sum + (e.progress?.completedLessons ?? 0), 0);
  const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // Build a 7-day activity chart from progress data (lessons completed per day)
  const activityData = React.useMemo(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((day) => ({ day, lessons: 0 }));
  }, []);

  // Most recently enrolled course to resume
  const resumeCourse = inProgress[0];

  return (
    <div className="p-8 mx-auto space-y-8">
      {/* ── Hero ── */}
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden gap-6">
        <div className="z-10 space-y-4">
          <div className="inline-block bg-emerald-200 text-black text-xs font-semibold px-3 py-1 rounded-full">
            Growth Mindset
          </div>
          <h1 className="text-4xl font-bold text-black">
            Welcome back, {user?.name || user?.username || 'there'}!
          </h1>
          <p className="text-gray-600 max-w-md">
            {overallProgress > 0
              ? `You've completed ${overallProgress}% of your enrolled courses. Keep going!`
              : 'Start learning today — browse courses and enroll to track your progress.'}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {resumeCourse ? (
              <button
                onClick={() => onSelectCourse ? onSelectCourse(resumeCourse.course?.id) : setView('MyCourses')}
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-lg font-medium flex items-center transition-colors"
              >
                <Play className="w-4 h-4 mr-2" fill="currentColor" />
                Resume: {resumeCourse.course?.title ?? 'Last Course'}
              </button>
            ) : (
              <button
                onClick={() => setView('CourseCatalog')}
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-lg font-medium flex items-center transition-colors"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Courses
              </button>
            )}
            <button
              onClick={() => setView('MyCourses')}
              className="bg-white border border-emerald-300 hover:bg-emerald-50 text-black px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              My Courses
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4 z-10 flex-wrap">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex items-center gap-4 min-w-[140px]">
            <div className="bg-emerald-50 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-[#1e4c31]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Streak</p>
              <p className="text-xl font-bold text-black">{streak ?? 0} Days</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex items-center gap-4 min-w-[140px]">
            <div className="bg-emerald-50 p-3 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-[#1e4c31]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Lessons Done</p>
              <p className="text-xl font-bold text-black">{completedLessons}</p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Main */}
        <div className="lg:col-span-2 space-y-8">

          {/* In Progress */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-[#1e4c31]" /> In Progress
              </h2>
              <button onClick={() => setView('MyCourses')} className="text-sm font-medium text-emerald-700 hover:underline">
                View all
              </button>
            </div>

            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[0, 1].map((i) => (
                  <div key={i} className="border border-emerald-100 rounded-2xl overflow-hidden animate-pulse">
                    <div className="h-40 bg-emerald-100" />
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-emerald-100 rounded w-3/4" />
                      <div className="h-3 bg-emerald-100 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isLoading && inProgress.length === 0 && (
              <div className="border-2 border-dashed border-emerald-200 rounded-2xl p-10 text-center">
                <BookOpen className="w-10 h-10 text-emerald-300 mx-auto mb-3" />
                <p className="text-sm font-bold text-black mb-1">No courses in progress</p>
                <p className="text-xs text-gray-400 mb-4">Enroll in a course to start learning.</p>
                <button
                  onClick={() => setView('CourseCatalog')}
                  className="bg-[#1e4c31] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-900"
                >
                  Browse Courses
                </button>
              </div>
            )}

            {!isLoading && inProgress.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inProgress.slice(0, 4).map((enrollment) => {
                  const course = enrollment.course;
                  const pct = enrollment.progress?.percentage ?? 0;
                  return (
                    <div
                      key={enrollment.id}
                      onClick={() => onSelectCourse ? onSelectCourse(course?.id) : setView('MyCourses')}
                      className="bg-white border border-emerald-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                    >
                      <div className="relative h-40 bg-emerald-100">
                        {course?.thumbnail_url ? (
                          <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <BookOpen className="w-10 h-10 text-emerald-300" />
                          </div>
                        )}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-md text-black">
                          {course?._count?.modules ?? enrollment.course?.modules?.length ?? 0} Modules
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-base text-black mb-1 line-clamp-1">{course?.title ?? 'Untitled'}</h3>
                        {course?.category && (
                          <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-3">{course.category}</p>
                        )}
                        <div className="mb-1 flex justify-between text-xs font-semibold">
                          <span className="text-gray-500">PROGRESS</span>
                          <span className="text-black">{pct}%</span>
                        </div>
                        <div className="w-full bg-emerald-100 rounded-full h-2 mb-4 overflow-hidden">
                          <div className="bg-emerald-600 h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
                        </div>
                        <div className="border-t border-emerald-100 pt-3 flex justify-between items-center text-emerald-700 group-hover:text-emerald-900 transition-colors">
                          <span className="text-sm font-semibold">Continue Learning</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Progress chart */}
          <section className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-black">Learning Activity</h2>
                <p className="text-sm text-gray-500">Lessons completed this week</p>
              </div>
              <div className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
                {completedLessons} total lessons done
              </div>
            </div>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLessons" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dx={-10} allowDecimals={false} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #d1fae5', fontSize: 12 }} />
                  <Area type="monotone" dataKey="lessons" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorLessons)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Summary stats */}
          <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-black flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1e4c31]" /> My Progress
            </h2>
            {[
              { label: 'Enrolled Courses', value: enrollments.length, color: 'bg-emerald-500' },
              { label: 'In Progress', value: inProgress.length, color: 'bg-amber-400' },
              { label: 'Completed', value: completed.length, color: 'bg-blue-500' },
              { label: 'Lessons Completed', value: completedLessons, color: 'bg-[#1e4c31]' },
            ].map(({ label, value, color }) => (
              <div key={label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                  <span className="text-sm text-gray-600">{label}</span>
                </div>
                <span className="text-sm font-bold text-black">{value}</span>
              </div>
            ))}
            {totalLessons > 0 && (
              <div className="pt-2">
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-500">OVERALL</span>
                  <span className="text-black">{overallProgress}%</span>
                </div>
                <div className="w-full bg-emerald-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#1e4c31] h-2 rounded-full transition-all" style={{ width: `${overallProgress}%` }} />
                </div>
              </div>
            )}
          </div>

          {/* Completed courses */}
          <div
            className="bg-[#1e4c31] text-white rounded-2xl p-6 relative overflow-hidden cursor-pointer"
            onClick={() => setView('Certificate')}
          >
            <h2 className="text-base font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" /> Achievements
            </h2>
            {completed.length > 0 ? (
              <>
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-emerald-500 rounded-full p-2">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-200">Completed</p>
                      <p className="font-bold text-sm line-clamp-1">{completed[0].course?.title}</p>
                    </div>
                  </div>
                  <button className="w-full bg-white text-[#1e4c31] font-semibold py-2 rounded-lg text-sm hover:bg-emerald-50 transition-colors">
                    View Certificate
                  </button>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Completed</span>
                    <span>{completed.length} / {enrollments.length}</span>
                  </div>
                  <div className="w-full bg-emerald-950/20 rounded-full h-1.5">
                    <div
                      className="bg-emerald-400 h-1.5 rounded-full"
                      style={{ width: enrollments.length > 0 ? `${Math.round((completed.length / enrollments.length) * 100)}%` : '0%' }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <Award className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm text-emerald-200">Complete a course to earn your first certificate!</p>
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold text-black mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1e4c31]" /> Quick Actions
            </h2>
            <div className="space-y-2">
              {[
                { label: 'Browse Courses', view: 'CourseCatalog' },
                { label: 'My Courses', view: 'MyCourses' },
                { label: 'Certificates', view: 'Certificate' },
                { label: 'Settings', view: 'Settings' },
              ].map(({ label, view: v }) => (
                <button
                  key={label}
                  onClick={() => setView(v)}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-emerald-50 transition-colors group"
                >
                  <span className="text-sm text-black font-medium">{label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-700" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
