import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { Star, Clock, Users, Play, CheckCircle2, ChevronDown, ChevronUp, PlayCircle, FileText, Smartphone, Award, Heart, Share2, ShieldCheck, HelpCircle, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const curriculum = [
    {
      title: 'Foundations of Digital Mastery',
      lessons: '3 lessons • 45m',
      items: [
        { title: 'Introduction to the African Tech Ecosystem', duration: '15:45', type: 'video' },
        { title: 'Setting up your local environment', duration: '18:20', type: 'video' },
        { title: 'Quiz: Basics of Web Architecture', duration: '15:00', type: 'quiz' }
      ]
    },
    {
      title: 'Advanced Layout Techniques',
      lessons: '5 lessons • 1h 15m',
      items: []
    },
    {
      title: 'Low-Bandwidth Optimization',
      lessons: '4 lessons • 55m',
      items: []
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <TopNav view={view} setView={setView} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-emerald-50 border-b border-emerald-100 py-16 px-8 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Bestseller
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-black text-sm">4.9</span>
                  <span className="text-black text-sm">(2.4k ratings)</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Advanced Digital Product Design for the <span className="text-black">African Market</span>
              </h1>
              
              <p className="text-lg text-black max-w-2xl">
                Learn to craft world-class digital experiences that respect infrastructure constraints while maintaining a premium aesthetic. Master Figma, Accessibility, and modern Frontend principles.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-black font-medium">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-black" />
                  <span>12,450 Learners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 flex items-center justify-center text-black border border-emerald-400 rounded-full">🌐</span>
                  <span>English, Swahili, French</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-black" />
                  <span>Last updated 10/2024</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <img src="https://i.pravatar.cc/150?img=47" alt="Instructor" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <div>
                  <div className="text-xs text-black font-bold uppercase tracking-wider">Created By</div>
                  <div className="font-bold text-black">Dr. Amina Kalu</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Course Video Preview" className="w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-emerald-950/30 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-8 md:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Column */}
          <div className="flex-1 space-y-16">
            
            {/* What you will master */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <CheckCircle2 className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold text-black">What You Will Master</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Design high-converting landing pages tailored for African markets",
                  "Master advanced typography and color theory for accessibility",
                  "Build responsive layouts using modern CSS frameworks",
                  "Understand low-bandwidth optimization techniques",
                  "Create professional design portfolios that attract global clients",
                  "Apply African-inspired visual elements in digital design"
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-black leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <PlayCircle className="w-6 h-6 text-black" />
                  <h2 className="text-2xl font-bold text-black">Course Curriculum</h2>
                </div>
                <div className="text-sm text-black">
                  <span className="font-bold text-black">14 Modules</span> • 128 lectures • 24h total length
                </div>
              </div>

              <div className="space-y-4">
                {curriculum.map((mod, idx) => (
                  <div key={idx} className="border border-emerald-200 rounded-xl overflow-hidden">
                    <button 
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${activeModule === idx ? 'bg-emerald-50' : 'bg-white hover:bg-emerald-50'}`}
                      onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                    >
                      <div>
                        <h4 className="font-bold text-black">{mod.title}</h4>
                        <div className="text-xs text-black font-medium mt-1">{mod.lessons}</div>
                      </div>
                      {activeModule === idx ? <ChevronUp className="w-5 h-5 text-black" /> : <ChevronDown className="w-5 h-5 text-black" />}
                    </button>
                    
                    {activeModule === idx && mod.items.length > 0 && (
                      <div className="border-t border-emerald-100 bg-white p-2">
                        {mod.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg cursor-pointer" onClick={() => setView('CourseMaterial')}>
                            <div className="flex items-center space-x-3">
                              {item.type === 'video' ? <PlayCircle className="w-4 h-4 text-black" /> : <FileText className="w-4 h-4 text-orange-500" />}
                              <span className="text-sm text-black">{item.title}</span>
                            </div>
                            <span className="text-xs text-black font-medium">{item.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <button className="w-full py-4 border border-emerald-200 text-black font-bold rounded-xl hover:bg-emerald-50 transition-colors">
                  View All 14 Modules
                </button>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 flex flex-col sm:flex-row gap-8 items-start">
              <img src="https://i.pravatar.cc/150?img=47" alt="Instructor" className="w-24 h-24 rounded-full border-4 border-white shadow-md flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-black">Dr. Amina Kalu</h3>
                <p className="text-black font-medium text-sm mb-4">Chief Design Officer at TechSafari Africa</p>
                <div className="flex items-center space-x-6 text-sm text-black mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-black">4.9</span>
                    <span>Instructor Rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span className="font-bold text-black">85k</span>
                    <span>Students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <PlayCircle className="w-4 h-4" />
                    <span className="font-bold text-black">12</span>
                    <span>Courses</span>
                  </div>
                </div>
                <p className="text-black text-sm leading-relaxed italic">
                  "My mission is to empower the next generation of African designers to create products that solve local problems with global standards. With over 15 years in the industry, I've led design teams across Lagos, Nairobi, and Cape Town."
                </p>
                <button className="mt-6 text-sm font-bold text-black border border-emerald-200 px-6 py-2 rounded-lg hover:bg-emerald-100 transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-8">What our learners say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border border-emerald-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center space-x-4 mb-4">
                      <img src={`https://i.pravatar.cc/150?img=${i+12}`} alt="Student" className="w-10 h-10 rounded-full" />
                      <div>
                        <div className="font-bold text-black text-sm">Kofi A.</div>
                        <div className="flex text-amber-400">
                          {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-amber-400" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-black italic">
                      "This course changed how I view web design. The focus on low-bandwidth optimization is something you don't find elsewhere."
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-black mb-2">Frequently Asked Questions</h2>
                <p className="text-black">Everything you need to know about the course and the Uburiza platform.</p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-4">
                {['Is there a deadline to complete the course?', 'Can I download the videos for offline viewing?', 'Do I get a certificate after completion?'].map((q, idx) => (
                  <div key={idx} className="border border-emerald-200 rounded-xl bg-white">
                    <button 
                      className="w-full flex items-center justify-between p-5 text-left font-medium text-black"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    >
                      <span>{q}</span>
                      {activeFaq === idx ? <ChevronUp className="w-5 h-5 text-black" /> : <ChevronDown className="w-5 h-5 text-black" />}
                    </button>
                    {activeFaq === idx && (
                      <div className="p-5 pt-0 text-black text-sm leading-relaxed border-t border-emerald-100">
                        Yes, absolutely. We understand that internet connectivity can be challenging, so all our video content and supplementary materials are available for offline download through our mobile app.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar (Sticky) */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              
              {/* Pricing Card */}
              <div className="bg-white border border-emerald-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 pb-6">
                  <div className="flex items-end space-x-3 mb-2">
                    <span className="text-4xl font-black text-black">$49.99</span>
                    <span className="text-lg text-black line-through mb-1">$120.99</span>
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded mb-2">60% OFF</span>
                  </div>
                  <div className="text-sm text-red-600 font-medium flex items-center space-x-1 mb-6">
                    <Clock className="w-4 h-4" />
                    <span>Offer ends in 14:24:05</span>
                  </div>

                  <button className="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-900 transition-colors mb-3 shadow-lg shadow-emerald-200" onClick={() => setView('CourseMaterial')}>
                    Enroll Now
                  </button>
                  <button className="w-full bg-white text-black border border-emerald-200 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors mb-6">
                    Add to Cart
                  </button>

                  <div className="space-y-4">
                    <div className="text-sm font-bold text-black">This course includes:</div>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3 text-sm text-black">
                        <PlayCircle className="w-4 h-4 text-black" />
                        <span>24 hours on-demand video</span>
                      </li>
                      <li className="flex items-center space-x-3 text-sm text-black">
                        <FileText className="w-4 h-4 text-black" />
                        <span>42 downloadable resources</span>
                      </li>
                      <li className="flex items-center space-x-3 text-sm text-black">
                        <Smartphone className="w-4 h-4 text-black" />
                        <span>Access on mobile and TV</span>
                      </li>
                      <li className="flex items-center space-x-3 text-sm text-black">
                        <Award className="w-4 h-4 text-black" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-emerald-50 p-4 border-t border-emerald-100 flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="text-black hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="text-black hover:text-gray-700 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="text-black text-sm font-bold hover:underline">
                    Apply Coupon
                  </button>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start space-x-4">
                <ShieldCheck className="w-8 h-8 text-black flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-black mb-1">30-Day Money-Back</h4>
                  <p className="text-xs text-black">Full refund if not satisfied.</p>
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
            className="fixed bottom-6 left-6 z-50 bg-white shadow-xl border border-emerald-200 rounded-lg p-4 flex items-center space-x-4 max-w-sm"
          >
            <div className="relative">
              <img src="https://i.pravatar.cc/150?img=33" alt="User" className="w-10 h-10 rounded-full" />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-0.5 border-2 border-white">
                <Activity className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-black">David from Lagos</p>
              <p className="text-xs text-black">Just enrolled in this course</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
