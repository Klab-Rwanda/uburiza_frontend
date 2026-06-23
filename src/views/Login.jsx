import React, { useState } from 'react';
import { Activity, Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function Login({ setView }) {
  const { theme } = useAppContext();
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = existingUsers.find(u => u.email === formData.email && u.password === formData.password);
    
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setView('Dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-row-reverse bg-slate-50 transition-colors duration-300 font-sans">
      
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-900 relative overflow-hidden flex-col justify-between p-12 order-2">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent"></div>
        
        <div 
          className="relative z-10 flex items-center space-x-2 text-black font-bold text-2xl cursor-pointer w-fit" 
          onClick={() => setView('LandingPage')}
        >
          <Activity className="w-8 h-8" />
          <span>Uburiza Learn</span>
        </div>
        
        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">Welcome back to your learning journey.</h1>
          <p className="text-emerald-100/80 text-lg leading-relaxed mb-8">
            Continue mastering the skills that will shape the future of Africa's digital economy.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?img=${i + 15}`} alt="User" className="w-10 h-10 rounded-full border-2 border-emerald-900" />
              ))}
            </div>
            <p className="text-sm text-emerald-200 font-medium">Join 50k+ active learners today</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative order-1">
        <div 
          className="absolute top-8 left-8 lg:hidden flex items-center space-x-2 text-black font-bold text-xl cursor-pointer" 
          onClick={() => setView('LandingPage')}
        >
          <Activity className="w-6 h-6" />
          <span>Uburiza Learn</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-black mb-3">Log in to your account</h2>
            <p className="text-black text-sm">Enter your credentials to access your dashboard.</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Email Address</label>
              <div className="relative">
                <Mail className="w-5 h-5 text-black absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com" 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-emerald-200 rounded-xl text-black text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-black">Password</label>
                <a href="#" className="text-xs font-bold text-black hover:text-gray-700">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 text-black absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-emerald-200 rounded-xl text-black text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                />
              </div>
            </div>

            <button 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center space-x-2 group mt-2"
              onClick={handleLogin}
            >
              <span>Log In</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 flex items-center">
            <div className="flex-1 border-t border-emerald-200"></div>
            <span className="px-4 text-xs text-black uppercase tracking-wider font-semibold">Or continue with</span>
            <div className="flex-1 border-t border-emerald-200"></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 py-2.5 border border-emerald-200 bg-white rounded-xl hover:bg-emerald-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium text-black">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-2.5 border border-emerald-200 bg-white rounded-xl hover:bg-emerald-50 transition-colors">
              <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span className="text-sm font-medium text-black">GitHub</span>
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-black">
            Don't have an account?{' '}
            <button 
              className="font-bold text-black hover:text-gray-700 hover:underline"
              onClick={() => setView('Signup')}
            >
              Sign up
            </button>
          </p>
        </motion.div>
      </div>

    </div>
  );
}
