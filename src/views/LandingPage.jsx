import React from 'react';
import TopNavPublic from '../components/TopNavPublic';
import Footer from '../components/Footer';
import { Play, TrendingUp, Code, Lightbulb, TrendingUp as Marketing, MonitorSmartphone, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import agriTechImg from '../assets/sustainable_agritech.png';

export default function LandingPage({ setView }) {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans">
      <TopNavPublic setView={setView} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-8 md:px-16 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center space-x-2 text-black font-medium mb-6">
              <span className="w-8 h-[2px] bg-black"></span>
              <span>Empowering African Tech Leaders</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
              Master Digital <br/>
              Skills. <span className="text-black">Lead</span> <br/>
              <span className="text-black">the Future.</span>
            </h1>
            <p className="text-black text-lg mb-10 max-w-md">
              Unlock your potential with premium, African-led digital education. From AI to Entrepreneurship, we build the leaders of tomorrow.
            </p>
            <div className="flex items-center space-x-4 mb-10">
              <button 
                onClick={() => setView('CourseCatalog')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
              >
                Explore Courses
              </button>
              <button className="flex items-center space-x-2 text-black font-semibold px-6 py-4 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-colors">
                <Play className="w-5 h-5" />
                <span>How it works</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div className="text-sm text-black">
                <span className="font-bold text-black">Joined by 50,000+</span> ambitious learners
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-black">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-black font-medium uppercase tracking-wider">Salary Growth</p>
                <p className="text-xl font-bold text-black">+85% Avg. Increase</p>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="border-t border-b border-emerald-100 py-10 bg-emerald-50/50">
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-center text-xs font-bold text-black tracking-widest uppercase mb-8">
              Trusted by Africa's Leading Innovators
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using generic tech logo placeholders */}
              <div className="text-xl font-black text-black">Flutterwave</div>
              <div className="text-xl font-black text-black">Paystack</div>
              <div className="text-xl font-black text-black">Andela</div>
              <div className="text-xl font-black text-black">M-PESA</div>
              <div className="text-xl font-black text-black">Jumia</div>
            </div>
          </div>
        </section>

        {/* Popular Learning Paths */}
        <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Popular Learning Paths</h2>
          <p className="text-black max-w-2xl mx-auto mb-16">
            Tailored curriculums designed for the unique challenges and opportunities of the African digital economy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: 'AI & Data Science', courses: '12 Courses', icon: Code, color: 'text-black', bg: 'bg-emerald-50' },
              { title: 'Entrepreneurship', courses: '8 Courses', icon: Lightbulb, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Digital Marketing', courses: '15 Courses', icon: Marketing, color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'Digital Literacy', courses: '6 Courses', icon: MonitorSmartphone, color: 'text-orange-600', bg: 'bg-orange-50' }
            ].map((path, idx) => (
              <div key={idx} className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-all cursor-pointer group border border-emerald-100">
                <div className={`w-14 h-14 rounded-xl ${path.bg} ${path.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <path.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{path.title}</h3>
                <p className="text-black font-medium">{path.courses}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-24 px-8 md:px-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Featured Courses</h2>
                <p className="text-black max-w-xl">
                  Start learning with our most popular programs, led by industry experts across the continent.
                </p>
              </div>
              <button 
                onClick={() => setView('CourseCatalog')}
                className="hidden md:flex items-center space-x-2 text-black font-semibold hover:text-gray-700 transition-colors"
              >
                <span>View all courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'FinTech Fundamentals for Africa', author: 'Kwame Osei', rating: '4.8', learners: '1.2k', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tag: 'TRENDING' },
                { title: 'Sustainable Agri-Tech Solutions', author: 'Amina Hassan', rating: '4.9', learners: '850', img: agriTechImg, tag: 'NEW' },
                { title: 'Mastering Mobile UX Design', author: 'David Kalu', rating: '4.7', learners: '2.1k', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tag: 'ADVANCED' }
              ].map((course, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-emerald-100 flex flex-col cursor-pointer" onClick={() => setView('CourseOverview')}>
                  <div className="relative h-48">
                    <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.tag}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center space-x-4 text-sm text-black mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="font-medium text-black">{course.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{course.learners} learners</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4 line-clamp-2">{course.title}</h3>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={`https://i.pravatar.cc/150?img=${idx + 20}`} alt={course.author} className="w-8 h-8 rounded-full" />
                        <span className="text-sm font-medium text-black">{course.author}</span>
                      </div>
                      <button className="text-black border border-emerald-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <button 
                onClick={() => setView('CourseCatalog')}
                className="inline-flex items-center space-x-2 text-black font-semibold hover:text-gray-700 transition-colors"
              >
                <span>View all courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-emerald-900 py-16 px-8 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-emerald-800">
            {[
              { value: '50K+', label: 'ACTIVE STUDENTS' },
              { value: '120+', label: 'DIGITAL COURSES' },
              { value: '94%', label: 'SUCCESS RATE' },
              { value: '15+', label: 'SPECIALIZATIONS' }
            ].map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-emerald-300 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-8 md:px-16 max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl text-black font-serif">"</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-10">
            "Uburiza Learn didn't just teach me how to code; it gave me the confidence to launch my own startup in Nairobi. The curriculum is perfectly suited for our market."
          </h2>
          <div className="flex flex-col items-center">
            <img src="https://i.pravatar.cc/150?img=32" alt="Fatima Diop" className="w-16 h-16 rounded-full border-4 border-white shadow-lg mb-4" />
            <h4 className="font-bold text-black text-lg">Fatima Diop</h4>
            <p className="text-black">Founder, GreenTech Kenya</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to start your digital journey?
            </h2>
            <p className="text-black text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of African learners building the future of Africa today. No credit card required to start.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10 relative z-10">
              <button 
                onClick={() => setView('Signup')}
                className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                JOIN 50K+ AFRICAN LEARNERS
              </button>
              <button 
                onClick={() => setView('CourseCatalog')}
                className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition-colors border border-emerald-400"
              >
                EXPLORE COURSES
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-black relative z-10">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Certificates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Offline Access</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
