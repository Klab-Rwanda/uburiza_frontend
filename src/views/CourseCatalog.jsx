import React, { useState, useEffect } from 'react';
import TopNavPublic from '../components/TopNavPublic';
import Footer from '../components/Footer';
import { Search, Grid, List, Check, ArrowRight, Star, Clock, Users, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCatalog({ setView }) {
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  
  const courses = [
    {
      category: 'DESIGN',
      title: 'Mastering UI/UX Design for African Fintech',
      author: 'Kwame Mensah',
      role: 'Senior Product Designer',
      learners: '1.2k',
      duration: '12h 30m',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: [{ text: 'Intermediate', type: 'dark' }, { text: 'Free', type: 'green' }]
    },
    {
      category: 'DEVELOPMENT',
      title: 'Full-Stack Web Dev with React & Node.js',
      author: 'Zainab Al-Farsi',
      role: 'Lead Engineer @ TechHub',
      learners: '3.5k',
      duration: '45h 00m',
      rating: '4.8',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: [{ text: 'Beginner', type: 'dark' }, { text: 'Premium', type: 'emerald' }]
    },
    {
      category: 'MARKETING',
      title: 'Digital Marketing Strategies for Small Businesses',
      author: 'Chidi Okafor',
      role: 'Growth Marketer',
      learners: '850',
      duration: '8h 15m',
      rating: '4.7',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: [{ text: 'Beginner', type: 'dark' }, { text: 'Free', type: 'green' }]
    },
    {
      category: 'DATA SCIENCE',
      title: 'Data Science with Python: African Markets',
      author: 'Amara Diallo',
      role: 'Data Scientist',
      learners: '2.1k',
      duration: '28h 45m',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: [{ text: 'Expert', type: 'dark' }, { text: 'Premium', type: 'emerald' }]
    },
    {
      category: 'BUSINESS',
      title: 'Entrepreneurship: Launching Your SaaS',
      author: 'Oluwatobiloba Adeyemi',
      role: 'Founder, U-Start',
      learners: '500',
      duration: '16h 20m',
      rating: '4.6',
      img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: [{ text: 'Intermediate', type: 'dark' }, { text: 'Free', type: 'green' }]
    },
    {
      category: 'IT & SOFTWARE',
      title: 'Cybersecurity Fundamentals for Africa',
      author: 'Fatima Toure',
      role: 'Security Consultant',
      learners: '1.4k',
      duration: '20h 10m',
      rating: '4.8',
      img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: [{ text: 'Beginner', type: 'dark' }, { text: 'Premium', type: 'emerald' }]
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <TopNavPublic setView={setView} />
      
      <main className="flex-1 max-w-7xl mx-auto px-8 py-12 w-full">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block border border-emerald-200 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
            1,420 ACTIVE COURSES
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Discover Your Next <span className="text-emerald-600">Digital Skill</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-black max-w-2xl">
              Browse our selection of premium courses curated specifically for the African tech ecosystem.
            </p>
            <div className="flex items-center space-x-2 bg-emerald-50 p-1 rounded-lg border border-emerald-200">
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-md flex items-center space-x-2 ${viewMode === 'grid' ? 'bg-white shadow-sm text-black' : 'text-black'}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
                <span>Grid View</span>
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-md flex items-center space-x-2 ${viewMode === 'list' ? 'bg-white shadow-sm text-black' : 'text-black'}`}
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
                <span>List View</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-black mb-3">Search</h3>
              <div className="relative">
                <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search keywords..." 
                  className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-black mb-3">Skill Level</h3>
              <div className="space-y-3">
                {['Beginner', 'Intermediate', 'Expert'].map(level => (
                  <label key={level} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-emerald-300 rounded flex items-center justify-center group-hover:border-emerald-500">
                      {/* Check icon would go here if checked */}
                    </div>
                    <span className="text-sm text-black">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-black mb-3">Price Range</h3>
              <div className="space-y-3">
                {['Free Courses', 'Premium Courses', 'On Sale'].map(price => (
                  <label key={price} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-emerald-300 rounded flex items-center justify-center group-hover:border-emerald-500">
                    </div>
                    <span className="text-sm text-black">{price}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-black mb-3">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Fintech', 'AgriTech', 'Cloud', 'Data Science', 'SaaS', 'Marketing'].map(topic => (
                  <span key={topic} className="px-3 py-1.5 border border-emerald-200 rounded-full text-xs text-black cursor-pointer hover:border-emerald-500 hover:text-gray-700">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Promo Box */}
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-emerald-100 rounded-full blur-xl opacity-50"></div>
              <h4 className="font-bold text-black mb-2">Get Unlimited Access</h4>
              <p className="text-xs text-black mb-4 line-clamp-2">Unlock all 200+ courses with a premium subscription.</p>
              <button 
                className="w-full bg-emerald-800 text-white py-2 rounded-lg text-sm font-semibold hover:bg-emerald-900 transition-colors"
                onClick={() => setView('CourseOverview')}
              >
                Upgrade Now
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="px-4 py-2 bg-emerald-800 text-white rounded-lg text-sm font-medium flex items-center space-x-2">
                <Grid className="w-4 h-4" />
                <span>All Courses</span>
              </button>
              {['Design', 'Development', 'Marketing', 'Business'].map(cat => (
                <button key={cat} className="px-4 py-2 bg-white border border-emerald-200 text-black hover:border-emerald-500 hover:text-gray-700 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors">
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            {/* Course Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {isLoading ? (
                /* Skeleton Loaders */
                Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="bg-white border border-emerald-200 rounded-2xl overflow-hidden flex flex-col h-[400px]">
                    <div className="h-48 bg-emerald-200 animate-pulse"></div>
                    <div className="p-5 flex-1 flex flex-col space-y-4">
                      <div className="w-24 h-4 bg-emerald-200 rounded animate-pulse"></div>
                      <div className="w-full h-6 bg-emerald-200 rounded animate-pulse"></div>
                      <div className="w-3/4 h-6 bg-emerald-200 rounded animate-pulse mb-4"></div>
                      
                      <div className="flex items-center space-x-3 mt-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-200 animate-pulse"></div>
                        <div className="space-y-2">
                          <div className="w-24 h-3 bg-emerald-200 rounded animate-pulse"></div>
                          <div className="w-32 h-3 bg-emerald-200 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                courses.map((course, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="bg-white border border-emerald-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col group cursor-pointer" 
                    onClick={() => setView('CourseOverview')}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 flex space-x-2">
                        {course.tags.map(tag => (
                          <span key={tag.text} className={`text-xs font-bold px-2 py-1 rounded-md ${
                            tag.type === 'dark' ? 'bg-emerald-900/80 text-white' : 
                            tag.type === 'green' ? 'bg-emerald-500 text-white' : 'bg-emerald-700 text-white'
                          }`}>
                            {tag.text}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs font-bold text-emerald-600 tracking-wider mb-2 uppercase">{course.category}</div>
                      <h3 className="text-lg font-bold text-black mb-4 line-clamp-2">{course.title}</h3>
                      
                      <div className="flex items-center space-x-3 mb-6">
                        <img src={`https://i.pravatar.cc/150?img=${idx + 30}`} alt={course.author} className="w-10 h-10 rounded-full bg-emerald-100" />
                        <div>
                          <div className="text-sm font-semibold text-black">{course.author}</div>
                          <div className="text-xs text-black">{course.role}</div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-emerald-100 flex items-center justify-between text-sm text-black">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{course.learners}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span className="font-bold text-black">{course.rating}</span>
                        </div>
                        <button className="text-emerald-600 font-semibold flex items-center space-x-1 group-hover:text-emerald-700">
                          <span>Preview</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center border-t border-emerald-100 pt-12">
              <p className="text-sm text-black mb-4">Showing 6 of 1,420 courses</p>
              <div className="flex justify-center items-center space-x-3">
                <button className="border border-emerald-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                  <span>Show More Courses</span>
                </button>
                <button className="bg-emerald-800 text-white p-3 rounded-lg hover:bg-emerald-900 transition-colors">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-emerald-50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between border border-emerald-100 relative overflow-hidden">
          <div className="relative z-10 mb-8 md:mb-0 max-w-xl">
            <h2 className="text-2xl font-bold text-emerald-900 mb-3">Join 50k+ African Learners</h2>
            <p className="text-black mb-6">Empower yourself with world-class education designed for the future of work in Africa.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-emerald-200 text-sm font-medium text-black">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Certificates</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-emerald-200 text-sm font-medium text-black">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Expert Instructors</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 flex items-center">
            <div className="flex -space-x-4">
              {[1,2,3,4,5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?img=${i+40}`} alt="Student" className="w-14 h-14 rounded-full border-4 border-emerald-50 object-cover" />
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-emerald-50 bg-emerald-500 flex items-center justify-center text-white text-xs font-bold z-10">
                +50k
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
