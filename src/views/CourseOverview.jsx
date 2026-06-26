import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { Star, Clock, Users, Play, CheckCircle2, ChevronDown, ChevronUp, PlayCircle, FileText, Smartphone, Award, Heart, Share2, ShieldCheck, HelpCircle, Activity, Download, Briefcase, FileCheck, HelpCircle as QuizIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiFluencyCourse } from '../data/mockData';

export default function CourseOverview({ view, setView }) {
  const [activeModule, setActiveModule] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Simulate live activity toast after 3 seconds
    const timer1 = setTimeout(() => setShowToast(true), 3000);
    const timer2 = setTimeout(() => setShowToast(false), 8000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const course = aiFluencyCourse;

  const getIconForType = (type) => {
    switch(type) {
      case 'video': return <PlayCircle className="w-4 h-4" />;
      case 'reading': return <FileText className="w-4 h-4" />;
      case 'quiz': return <QuizIcon className="w-4 h-4" />;
      case 'download': return <Download className="w-4 h-4" />;
      case 'project': return <Briefcase className="w-4 h-4" />;
      case 'certificate': return <Award className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <TopNav view={view} setView={setView} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-brand-light border-b border-[#1D9E75]/20 py-16 px-4 md:px-16">
          <div className="w-full flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[#1D9E75] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                  {course.level}
                </span>
                <span className="border border-[#1D9E75] text-[#1D9E75] text-xs font-bold px-3 py-1 rounded-full tracking-wider bg-white">
                  {course.access}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-fraunces">
                {course.title}
              </h1>
              
              <p className="text-lg text-slate-700 max-w-2xl font-inter">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700 font-medium font-inter">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-[#1D9E75]" />
                  <span>Output: {course.portfolioOutput}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#1D9E75]" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PlayCircle className="w-5 h-5 text-[#1D9E75]" />
                  <span>{course.modulesCount} Modules · {course.lessons} Lessons</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <img src={course.authorAvatar} alt="Instructor" className="w-14 h-14 rounded-full border-2 border-[#1D9E75] shadow-sm" />
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Taught By</div>
                  <div className="font-bold text-slate-900 text-lg">{course.author}</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white bg-slate-900">
                <img src={course.image} alt="Course Preview" className="w-full aspect-video object-cover opacity-80" />
                <div className="absolute inset-0 bg-[#1D9E75]/20 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center text-[#1D9E75] hover:scale-105 transition-transform shadow-xl">
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 md:px-16 w-full flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          
          {/* Main Column */}
          <div className="flex-1 space-y-16">
            
            {/* What you will master */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <CheckCircle2 className="w-6 h-6 text-[#1D9E75]" />
                <h2 className="text-2xl font-bold text-slate-900 font-fraunces">What you will be able to do</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.objectives.map((item, idx) => (
                  <div key={idx} className="flex space-x-3 bg-brand-light p-4 rounded-xl border border-[#1D9E75]/20">
                    <CheckCircle2 className="w-5 h-5 text-[#1D9E75] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-800 leading-relaxed font-inter">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <PlayCircle className="w-6 h-6 text-[#1D9E75]" />
                  <h2 className="text-2xl font-bold text-slate-900 font-fraunces">Course Curriculum</h2>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-bold text-slate-900">{course.modulesCount} Modules</span> • {course.duration}
                </div>
              </div>

              <div className="space-y-4">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="border border-[#1D9E75]/20 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button 
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${activeModule === idx ? 'bg-brand-light' : 'hover:bg-brand-light/50'}`}
                      onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="font-bold text-slate-900 text-lg font-fraunces">{mod.title}</h4>
                          {mod.badge === 'Free' && <span className="bg-[#1D9E75]/10 text-[#1D9E75] text-xs font-bold px-2 py-0.5 rounded border border-[#1D9E75]/20">Free</span>}
                          {mod.badge === 'Portfolio' && <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded border border-purple-200">Portfolio</span>}
                        </div>
                        <div className="text-sm text-slate-600 font-medium font-inter">
                          {mod.lessonsCount} • {mod.duration}
                        </div>
                      </div>
                      {activeModule === idx ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </button>
                    
                    {activeModule === idx && mod.items && (
                      <div className="border-t border-[#1D9E75]/10 bg-white p-2">
                        {mod.description && (
                          <div className="p-4 mb-2 bg-purple-50 rounded-lg border border-purple-100 mx-2 mt-2">
                            <h5 className="font-bold text-purple-900 text-sm mb-1">Learning by Creating — Portfolio Output</h5>
                            <p className="text-sm text-purple-800 leading-relaxed">{mod.description}</p>
                          </div>
                        )}
                        {mod.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer group" onClick={() => setView('CourseMaterial')}>
                            <div className="flex items-start sm:items-center space-x-3 mb-2 sm:mb-0">
                              <div className={`p-2 rounded-full ${item.type === 'project' ? 'bg-purple-100 text-purple-600' : 'bg-brand-light text-[#1D9E75]'} group-hover:bg-[#1D9E75] group-hover:text-white transition-colors`}>
                                {getIconForType(item.type)}
                              </div>
                              <div>
                                <span className="text-sm font-medium text-slate-900 block">{item.title}</span>
                                <span className="text-xs text-slate-500">{item.description}</span>
                              </div>
                            </div>
                            <span className="text-xs text-slate-500 font-medium sm:ml-4">{item.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-brand-light rounded-2xl p-8 border border-[#1D9E75]/20 flex flex-col sm:flex-row gap-8 items-start">
              <img src={course.authorAvatar} alt="Instructor" className="w-24 h-24 rounded-full border-4 border-white shadow-md flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-fraunces">{course.author}</h3>
                <p className="text-slate-700 font-medium text-sm mb-4">Instructor at Uburiza Academy</p>
                <div className="flex items-center space-x-6 text-sm text-slate-700 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-slate-900">4.9</span>
                    <span>Rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-[#1D9E75]" />
                    <span className="font-bold text-slate-900">12k</span>
                    <span>Students</span>
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic font-inter">
                  "I specialize in breaking down complex technological concepts into simple, everyday language. My goal is to equip African professionals with the practical AI skills they need to thrive without the confusing jargon."
                </p>
              </div>
            </div>

          </div>

          {/* Right Sidebar (Sticky) */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              
              {/* Enrollment Card */}
              <div className="bg-white border border-[#1D9E75]/20 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 pb-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-4xl font-black text-[#1D9E75] font-fraunces">Free</span>
                    <span className="bg-brand-light text-[#1D9E75] text-xs font-bold px-2 py-1 rounded">Open Access</span>
                  </div>

                  <button className="w-full bg-[#1D9E75] text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors mb-3 shadow-lg shadow-[#1D9E75]/20" onClick={() => setView('CourseMaterial')}>
                    Enroll for Free
                  </button>
                  <p className="text-center text-xs text-slate-500 mb-6">Create a free account to track your progress.</p>

                  <div className="space-y-4">
                    <div className="text-sm font-bold text-slate-900">This course includes:</div>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3 text-sm text-slate-700">
                        <PlayCircle className="w-4 h-4 text-[#1D9E75]" />
                        <span>{course.duration} on-demand video</span>
                      </li>
                      <li className="flex items-center space-x-3 text-sm text-slate-700">
                        <Briefcase className="w-4 h-4 text-[#1D9E75]" />
                        <span>Build a {course.portfolioOutput}</span>
                      </li>
                      <li className="flex items-center space-x-3 text-sm text-slate-700">
                        <Smartphone className="w-4 h-4 text-[#1D9E75]" />
                        <span>Mobile-first & optimized</span>
                      </li>
                      <li className="flex items-center space-x-3 text-sm text-slate-700">
                        <Award className="w-4 h-4 text-[#1D9E75]" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="text-slate-500 hover:text-[#1D9E75] transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="text-slate-500 hover:text-slate-800 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Live Learner Activity Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-6 left-6 z-50 bg-white shadow-xl border border-[#1D9E75]/20 rounded-lg p-4 flex items-center space-x-4 max-w-sm"
          >
            <div className="relative">
              <img src="https://i.pravatar.cc/150?img=33" alt="User" className="w-10 h-10 rounded-full border border-slate-200" />
              <div className="absolute -bottom-1 -right-1 bg-[#1D9E75] rounded-full p-0.5 border-2 border-white">
                <Activity className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 font-inter">A learner from Kigali</p>
              <p className="text-xs text-slate-500 font-inter">Just enrolled in this course</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
