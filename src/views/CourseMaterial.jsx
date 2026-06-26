import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import { ChevronDown, ChevronUp, PlayCircle, Headphones, Flag, CheckCircle, Maximize, Volume2, Settings, MessageSquare, ChevronRight, X, Bookmark, FileText, HelpCircle as QuizIcon, Download, Briefcase, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { aiFluencyCourse } from '../data/mockData';
import AIAssistantWidget from '../components/AIAssistantWidget';

export default function CourseMaterial({ view, setView }) {
  const [expandedModuleIdx, setExpandedModuleIdx] = useState(0);
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [bookmarks, setBookmarks] = useState([]);
  const [videoTime, setVideoTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const course = aiFluencyCourse;
  const activeModule = course.modules[activeModuleIdx];
  const activeLesson = activeModule?.items[activeLessonIdx];

  // Mock video progress
  useEffect(() => {
    let interval;
    if (isPlaying && activeLesson?.type === 'video') {
      interval = setInterval(() => {
        setVideoTime(prev => (prev < 2520 ? prev + 1 : prev));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeLesson]);

  // Reset progress when changing lesson
  useEffect(() => {
    setVideoTime(0);
    setIsPlaying(false);
  }, [activeModuleIdx, activeLessonIdx]);

  const handleComplete = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1D9E75', '#10b981', '#f59e0b']
    });
  };

  const addBookmark = () => {
    const mins = Math.floor(videoTime / 60);
    const secs = videoTime % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    setBookmarks([...bookmarks, { time: timeStr, note: 'New note at this timestamp...' }]);
    setActiveTab('My Notes');
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const transcript = [
    { time: 0, text: "Welcome to this lesson." },
    { time: 5, text: "We are going to explore this topic deeply." },
    { time: 10, text: "Artificial Intelligence is transforming how we work." },
    { time: 15, text: "By the end, you'll have a firm grasp of the basics." }
  ];

  const activeTranscriptIdx = transcript.findIndex((t, i) => 
    videoTime >= t.time && (i === transcript.length - 1 || videoTime < transcript[i+1].time)
  );

  const getIconForType = (type, isActive) => {
    const colorClass = isActive ? 'text-[#1D9E75]' : 'text-slate-400';
    switch(type) {
      case 'video': return <PlayCircle className={`w-4 h-4 ${colorClass}`} />;
      case 'reading': return <FileText className={`w-4 h-4 ${colorClass}`} />;
      case 'quiz': return <QuizIcon className={`w-4 h-4 ${colorClass}`} />;
      case 'download': return <Download className={`w-4 h-4 ${colorClass}`} />;
      case 'project': return <Briefcase className={`w-4 h-4 ${colorClass}`} />;
      case 'certificate': return <Award className={`w-4 h-4 ${colorClass}`} />;
      default: return <FileText className={`w-4 h-4 ${colorClass}`} />;
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-inter h-screen overflow-hidden transition-colors duration-300">
      <TopNav view={view} setView={setView} />
      
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Left Sidebar */}
        <div className="w-80 bg-brand-light border-r border-[#1D9E75]/20 flex flex-col h-full flex-shrink-0 transition-colors duration-300 z-10">
          
          <div className="p-6 border-b border-[#1D9E75]/20 bg-white">
            <h2 className="font-fraunces font-bold text-slate-900 mb-2 truncate" title={course.title}>{course.title}</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">Course Progress</span>
              <span className="text-sm font-bold text-[#1D9E75]">12%</span>
            </div>
            <div className="w-full bg-[#1D9E75]/10 h-2 rounded-full overflow-hidden">
              <div className="bg-[#1D9E75] h-full w-[12%] rounded-full"></div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {course.modules.map((mod, mIdx) => (
              <div key={mIdx} className="mb-2">
                <button 
                  className={`w-full flex items-center justify-between px-6 py-3 transition-colors ${activeModuleIdx === mIdx ? 'bg-[var(--color-brand)]/10 border-l-4 border-[var(--color-brand)]' : 'hover:bg-brand-light/50 border-l-4 border-transparent'}`}
                  onClick={() => setExpandedModuleIdx(expandedModuleIdx === mIdx ? null : mIdx)}
                >
                  <span className={`font-bold text-sm font-fraunces text-left ${activeModuleIdx === mIdx ? 'text-slate-900' : 'text-slate-700'}`}>{mod.title}</span>
                  {expandedModuleIdx === mIdx ? <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0 ml-2" /> : <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0 ml-2" />}
                </button>
                
                {expandedModuleIdx === mIdx && mod.items && (
                  <div className="py-2 bg-slate-50/50">
                    {mod.items.map((item, lIdx) => {
                      const isActive = mIdx === activeModuleIdx && lIdx === activeLessonIdx;
                      return (
                        <button 
                          key={lIdx}
                          onClick={() => { setActiveModuleIdx(mIdx); setActiveLessonIdx(lIdx); }}
                          className={`w-full flex items-start space-x-3 px-6 py-2.5 text-left text-sm transition-colors ${isActive ? 'bg-[var(--color-brand)]/10 border-l-4 border-[var(--color-brand)]' : 'border-l-4 border-transparent hover:bg-white text-slate-600'}`}
                        >
                          <div className="mt-0.5">
                            {getIconForType(item.type, isActive)}
                          </div>
                          <div className="flex-1">
                            <span className={isActive ? 'font-bold text-[#1D9E75]' : 'font-medium'}>{item.title}</span>
                            <span className="block text-xs text-slate-500 mt-0.5">{item.duration !== '—' ? item.duration : 'Anytime'}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-[#1D9E75]/20 bg-white">
            <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 border-2 border-[#1D9E75] text-[#1D9E75] rounded-xl hover:bg-brand-light transition-colors font-bold">
              <Award className="w-5 h-5" />
              <span>Claim Certificate</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white overflow-y-auto flex flex-col transition-colors duration-300">
          <div className="p-4 md:p-8 w-full max-w-5xl mx-auto">
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-slate-500 mb-6 font-medium">
              <span className="hover:text-[#1D9E75] cursor-pointer" onClick={() => setView('CourseOverview')}>Overview</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-800 truncate">{activeModule?.title}</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#1D9E75] font-bold truncate">{activeLesson?.title}</span>
            </div>

            {/* Lesson Content Render based on type */}
            {activeLesson?.type === 'video' && (
              <>
                {/* YouTube Video Player Container */}
                <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-xl mb-4">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/aircAruvnKk" 
                    title="Uburiza Academy Lesson Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                  </iframe>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                   <div className="text-sm text-slate-500 font-medium">
                     Unlisted Video • Hosted on Uburiza Academy
                   </div>
                   <button onClick={addBookmark} className="text-sm font-bold text-slate-600 flex items-center space-x-1 hover:text-[var(--color-brand)] transition-colors">
                      <Bookmark className="w-4 h-4" />
                      <span>Take Note</span>
                   </button>
                </div>
              </>
            )}

            {activeLesson?.type === 'reading' && (
              <div className="w-full bg-brand-light rounded-2xl p-8 md:p-12 mb-8 border border-[#1D9E75]/20 shadow-sm">
                <FileText className="w-12 h-12 text-[#1D9E75] mb-6" />
                <h2 className="text-3xl font-fraunces font-bold text-slate-900 mb-6">{activeLesson.title}</h2>
                <div className="prose max-w-none text-slate-700 font-inter space-y-4">
                  <p>In the rapidly evolving landscape of AI, understanding the core concepts is crucial for making informed decisions. AI is no longer a distant sci-fi concept; it's a practical tool that can be leveraged across various sectors in Africa, from agriculture to healthcare and education.</p>
                  <p>When we talk about "Artificial Intelligence," we're often referring to a subset called Machine Learning, where systems learn patterns from vast amounts of data. This allows them to make predictions or generate content without being explicitly programmed for every scenario.</p>
                  <p>Please read through the attached examples carefully, and prepare your thoughts for the next module's discussion.</p>
                </div>
              </div>
            )}

            {activeLesson?.type === 'quiz' && (
              <div className="w-full bg-slate-50 rounded-2xl p-8 md:p-12 mb-8 border border-slate-200 shadow-sm text-center">
                <QuizIcon className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h2 className="text-3xl font-fraunces font-bold text-slate-900 mb-4">Module Checkpoint</h2>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto">Test your understanding of the concepts covered so far. You need an 80% to pass.</p>
                <button className="bg-purple-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-purple-700 transition-colors">
                  Start Quiz ({activeLesson.duration})
                </button>
              </div>
            )}

            {activeLesson?.type === 'project' && (
              <div className="w-full bg-purple-50 rounded-2xl p-8 md:p-12 mb-8 border border-purple-200 shadow-sm">
                <Briefcase className="w-12 h-12 text-purple-600 mb-6" />
                <h2 className="text-3xl font-fraunces font-bold text-purple-900 mb-4">{activeLesson.title}</h2>
                <p className="text-purple-800 mb-8 max-w-2xl text-lg">This is your portfolio output. Apply everything you've learned to create a practical artifact you can use in your daily work.</p>
                
                <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm mb-6">
                  <h4 className="font-bold text-slate-900 mb-2">Instructions</h4>
                  <p className="text-slate-600 mb-4">Upload your completed prompt library using the template provided in the previous lesson.</p>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50">
                    <Download className="w-8 h-8 text-slate-400 mb-2" />
                    <span className="font-bold text-slate-700">Drag and drop your file here</span>
                    <span className="text-sm text-slate-500 mt-1">Supports .pdf, .docx, .zip up to 10MB</span>
                  </div>
                </div>
              </div>
            )}

            {activeLesson?.type === 'download' && (
              <div className="w-full bg-amber-50 rounded-2xl p-8 md:p-12 mb-8 border border-amber-200 shadow-sm flex items-start gap-8">
                <div className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm flex-shrink-0">
                  <Download className="w-12 h-12 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-fraunces font-bold text-amber-900 mb-3">{activeLesson.title}</h2>
                  <p className="text-amber-800 mb-6 text-lg">Download this resource and keep it handy for your daily work.</p>
                  <button className="bg-amber-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:bg-amber-600 transition-colors flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Resource</span>
                  </button>
                </div>
              </div>
            )}

            {activeLesson?.type === 'certificate' && (
              <div className="w-full bg-brand-light rounded-2xl p-8 md:p-12 mb-8 border border-[var(--color-brand)]/20 shadow-sm text-center">
                <Award className="w-20 h-20 text-[var(--color-brand)] mx-auto mb-6" />
                <h2 className="text-3xl font-fraunces font-bold text-slate-900 mb-4">Congratulations!</h2>
                <p className="text-slate-700 mb-8 max-w-lg mx-auto text-lg">You have successfully completed this course and submitted your portfolio output. Your certificate is ready.</p>
                <button className="bg-[var(--color-brand)] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition-colors mx-auto flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Download Certificate</span>
                </button>
              </div>
            )}

            {/* Lesson Info Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
              <div>
                <div className="inline-block border border-[#1D9E75]/30 text-[#1D9E75] bg-brand-light px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                  {activeModule?.title}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 font-fraunces">{activeLesson?.title}</h1>
                <div className="flex items-center space-x-2 text-slate-600 text-sm font-medium">
                  <span>Type: <span className="capitalize">{activeLesson?.type || 'Lesson'}</span></span>
                  <span>•</span>
                  <span>{activeLesson?.duration || 'Anytime'}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button 
                  onClick={() => setShowDrawer(true)}
                  className="flex items-center space-x-2 border-2 border-[#1D9E75] text-[#1D9E75] px-4 py-2.5 rounded-xl hover:bg-brand-light transition-colors text-sm font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discussion</span>
                </button>
                <button 
                  onClick={handleComplete}
                  className="flex items-center space-x-2 bg-[#1D9E75] text-white px-5 py-2.5 rounded-xl hover:bg-brand-dark transition-colors text-sm font-bold shadow-lg shadow-[#1D9E75]/30"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Mark Complete</span>
                </button>
              </div>
            </div>

            {/* Tabs for Video/Audio content */}
            {activeLesson?.type === 'video' && (
              <>
                <div className="border-b border-slate-200 mb-8">
                  <div className="flex space-x-8">
                    {['Overview', 'Transcript', 'My Notes'].map((tab) => (
                      <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-bold relative ${activeTab === tab ? 'text-[#1D9E75]' : 'text-slate-500 hover:text-slate-800'}`}
                      >
                        {tab}
                        {activeTab === tab && <motion.div layoutId="activetab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#1D9E75] rounded-t-full"></motion.div>}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tab Content Area */}
                <div className="pb-16">
                  {activeTab === 'Overview' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}}>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 font-fraunces">About this lesson</h3>
                      <p className="text-slate-700 leading-relaxed max-w-3xl">
                        {activeLesson.description}
                        <br/><br/>
                        In this module, Derrick explains how to leverage AI tools responsibly and effectively in a professional setting. Ensure you understand the underlying concepts before moving on to the hands-on prompting exercises.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'Transcript' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="max-w-3xl space-y-4 h-64 overflow-y-auto pr-4">
                      {transcript.map((line, idx) => (
                        <div key={idx} className={`flex space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${activeTranscriptIdx === idx ? 'bg-brand-light border-l-4 border-[#1D9E75]' : 'hover:bg-slate-50'}`} onClick={() => setVideoTime(line.time)}>
                          <span className={`text-sm font-mono font-bold flex-shrink-0 pt-0.5 ${activeTranscriptIdx === idx ? 'text-[#1D9E75]' : 'text-slate-500'}`}>
                            {formatTime(line.time)}
                          </span>
                          <p className={`text-sm leading-relaxed ${activeTranscriptIdx === idx ? 'text-slate-900 font-bold' : 'text-slate-600'}`}>
                            {line.text}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'My Notes' && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="max-w-3xl">
                      {bookmarks.length === 0 ? (
                        <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                          <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                          <p className="text-slate-500 font-medium">No notes yet. Click the bookmark icon on the video to take a note at a specific timestamp.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {bookmarks.map((bm, idx) => (
                            <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
                              <div className="flex items-center space-x-2 mb-3 cursor-pointer text-[#1D9E75] font-bold text-sm hover:underline">
                                <PlayCircle className="w-4 h-4" />
                                <span>{bm.time}</span>
                              </div>
                              <textarea 
                                className="w-full bg-white border border-slate-300 rounded-lg p-4 text-sm text-slate-800 focus:ring-2 focus:ring-[#1D9E75] focus:outline-none transition-shadow shadow-inner"
                                defaultValue={bm.note}
                                rows={3}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </>
            )}

          </div>
        </div>

        {/* Slide-out Discussion Drawer */}
        <AnimatePresence>
          {showDrawer && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-96 bg-white border-l border-[#1D9E75]/20 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-4 border-b border-[#1D9E75]/20 flex items-center justify-between bg-brand-light">
                <h3 className="font-bold text-slate-900 flex items-center space-x-2 font-fraunces">
                  <MessageSquare className="w-5 h-5 text-[#1D9E75]" />
                  <span>Class Discussion</span>
                </h3>
                <button onClick={() => setShowDrawer(false)} className="p-2 hover:bg-[#1D9E75]/20 rounded-full text-slate-600 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {[
                  { name: "Sarah M.", role: "Student", msg: "This framework makes so much sense for our context!" },
                  { name: course.author, role: "Instructor", msg: "Glad you found it helpful Sarah. Remember to keep your prompts highly specific." },
                  { name: "John D.", role: "Student", msg: "Could you clarify the difference between zero-shot and few-shot prompting?" }
                ].map((msg, idx) => (
                  <div key={idx} className="flex space-x-3">
                    <img src={`https://i.pravatar.cc/150?img=${idx+10}`} alt="User" className="w-10 h-10 rounded-full border border-slate-200 shadow-sm" />
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-bold text-sm text-slate-900">{msg.name}</span>
                        {msg.role === 'Instructor' && <span className="bg-[#1D9E75]/20 text-[#1D9E75] text-[10px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">Instructor</span>}
                      </div>
                      <p className="text-sm text-slate-700 bg-slate-50 border border-slate-100 p-3 rounded-xl rounded-tl-none leading-relaxed">{msg.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <input 
                  type="text" 
                  placeholder="Ask a question or share a thought..." 
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1D9E75] shadow-sm"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AIAssistantWidget />
      </div>
    </div>
  );
}
