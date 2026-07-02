import React from 'react';
import { BookOpen, Clock, ChevronRight, PlayCircle, Award } from 'lucide-react';
import { useMyEnrollments } from '../api/hooks/useEnrollments';
import { useUserCertificates } from '../api/hooks/useCertificates';
import { useAppContext } from '../context/AppContext';

export default function MyCourses({ setView, onSelectCourse }) {
  const { user } = useAppContext();
  const { data: enrollments = [], isLoading, isError } = useMyEnrollments();
  const { data: certificates = [] } = useUserCertificates(user?.id);

  // Create a map of course IDs to certificates
  const certificateMap = React.useMemo(() => {
    const map = new Map();
    certificates.forEach(cert => {
      map.set(cert.course.id, cert);
    });
    return map;
  }, [certificates]);

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black mb-1">My Courses</h1>
        <p className="text-sm text-gray-500">
          Welcome back, <span className="font-semibold text-black">{user?.name || user?.username || 'Learner'}</span> — here are your enrolled courses.
        </p>
      </div>

      {/* Stats row */}
      {!isLoading && (
        <div className="flex items-center gap-6">
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-3 flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#1e4c31]" />
            <div>
              <p className="text-xs text-gray-500">Enrolled</p>
              <p className="text-lg font-bold text-black">{enrollments.length}</p>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-3 flex items-center gap-3">
            <PlayCircle className="w-5 h-5 text-[#1e4c31]" />
            <div>
              <p className="text-xs text-gray-500">In Progress</p>
              <p className="text-lg font-bold text-black">
                {enrollments.filter((e) => !e.completed_at).length}
              </p>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-3 flex items-center gap-3">
            <Award className="w-5 h-5 text-[#1e4c31]" />
            <div>
              <p className="text-xs text-gray-500">Certificates</p>
              <p className="text-lg font-bold text-black">{certificates.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Course list */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border border-emerald-100 rounded-2xl overflow-hidden">
              <div className="h-40 bg-emerald-100 animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-emerald-100 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-emerald-100 rounded animate-pulse w-1/2" />
              </div>
            </div>
          ))}
        </div>
      )}

      {isError && (
        <p className="text-red-500 text-sm">Failed to load your courses. Please try again.</p>
      )}

      {!isLoading && !isError && enrollments.length === 0 && (
        <div className="border-2 border-dashed border-emerald-200 rounded-2xl p-16 flex flex-col items-center text-center">
          <BookOpen className="w-12 h-12 text-emerald-300 mb-4" />
          <p className="text-base font-bold text-black mb-1">No courses yet</p>
          <p className="text-sm text-gray-400 mb-6">Browse the catalog and enroll in a course to get started.</p>
          <button
            onClick={() => setView('CourseCatalog')}
            className="bg-[#1e4c31] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-900 transition-colors"
          >
            Browse Courses
          </button>
        </div>
      )}

      {!isLoading && enrollments.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {enrollments.map((enrollment) => {
            const course = enrollment.course;
            const hasCertificate = certificateMap.has(course?.id);
            const certificate = certificateMap.get(course?.id);
            return (
              <div
                key={enrollment.id}
                onClick={() => onSelectCourse ? onSelectCourse(course?.id) : setView('CourseOverview')}
                className="bg-white border border-emerald-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group relative"
              >
                <div className="h-40 bg-emerald-100 overflow-hidden relative">
                  {course?.thumbnail_url ? (
                    <img
                      src={course.thumbnail_url}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen className="w-10 h-10 text-emerald-300" />
                    </div>
                  )}
                  {hasCertificate && (
                    <span 
                      className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1 cursor-pointer hover:from-amber-500 hover:to-amber-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setView('Certificate');
                      }}
                      title="View Certificate"
                    >
                      <Award className="w-3 h-3" />
                      Certified
                    </span>
                  )}
                  {enrollment.completed_at && (
                    <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded-md">
                      Completed
                    </span>
                  )}
                </div>

                <div className="p-5">
                  {course?.category && (
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">{course.category}</p>
                  )}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-black line-clamp-2 flex-1">{course?.title ?? 'Untitled Course'}</h3>
                    {hasCertificate && (
                      <Award className="w-5 h-5 text-amber-500 ml-2 flex-shrink-0" title="Certificate Earned" />
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    {course?.level && <span className="bg-slate-100 px-2 py-0.5 rounded font-medium">{course.level}</span>}
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {course?._count?.modules ?? 0} modules
                    </span>
                  </div>

                  {enrollment.progress && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-gray-500">PROGRESS</span>
                        <span className="text-black">{enrollment.progress.percentage}%</span>
                      </div>
                      <div className="w-full bg-emerald-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-600 h-1.5 rounded-full transition-all" style={{ width: `${enrollment.progress.percentage}%` }} />
                      </div>
                    </div>
                  )}

                  <div className="border-t border-emerald-100 pt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      Enrolled {new Date(enrollment.enrolled_at).toLocaleDateString()}
                    </span>
                    {hasCertificate ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setView('Certificate');
                        }}
                        className="text-amber-600 text-xs font-semibold flex items-center gap-1 hover:text-amber-700 transition-colors"
                      >
                        <Award className="w-3 h-3" />
                        View Certificate
                      </button>
                    ) : (
                      <span className="text-emerald-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Continue <ChevronRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
