import React from 'react';
import { ChevronLeft, Download, Share2, CheckCircle2, Award, Shield, ExternalLink, Activity } from 'lucide-react';

export default function CertificateView({ setView }) {
  return (
    <div className="page flex flex-col min-h-screen relative">
      <div className="p-8 mx-auto space-y-8 flex-grow w-full relative z-10">
        {/* Top Nav inside View */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={() => setView('Dashboard')}
            className="flex items-center text-black hover:text-gray-700 transition-colors font-medium text-sm"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </button>
          
          <div className="flex items-center text-xs font-semibold text-black bg-white border border-emerald-200 px-3 py-1.5 rounded-full shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-black mr-1.5" />
            Claimed & Verified
          </div>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1e4c31] mb-4">
            Congratulations, Abebe!
          </h1>
          <p className="text-black max-w-2xl mx-auto text-lg">
            You have successfully mastered the skills to lead and innovate. Download your verified certificate and share your milestone with the world.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="bg-white p-2 rounded-2xl shadow-2xl mx-auto max-w-4xl transform hover:scale-[1.01] transition-transform duration-300">
          <div className="border-4 border-[#1e4c31] rounded-xl p-12 text-center relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlNThjZDYiIG9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')]">
            <Award className="absolute top-8 right-8 w-16 h-16 text-emerald-100 opacity-50" strokeWidth={1} />
            
            <h3 className="text-black tracking-[0.2em] font-bold text-sm uppercase mb-12">
              Certificate of Completion
            </h3>
            
            <p className="text-black italic mb-4">This is to certify that</p>
            <h2 className="text-5xl font-bold text-[#1e4c31] mb-8">Abebe Bikila</h2>
            
            <p className="text-black mb-4">has successfully completed the course</p>
            <h1 className="text-3xl font-bold text-black mb-8 max-w-2xl mx-auto leading-tight">
              Advanced Entrepreneurship & Digital Strategy
            </h1>
            
            <p className="text-black max-w-xl mx-auto mb-16">
              achieving excellence in digital literacy and technical application.
            </p>
            
            <div className="border-t border-emerald-200 pt-8 flex justify-between items-end text-left px-8">
              <div>
                <div className="flex items-center text-black font-bold mb-2">
                  <Shield className="w-5 h-5 mr-2" />
                  VERIFIED BY UBURIZA LEARN
                </div>
                <p className="text-xs text-black">ID: UB-2024-8842-XF92</p>
                <p className="text-xs text-black">Issued on: October 24, 2024</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-100 rounded mb-2 flex items-center justify-center p-2">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=uburiza.learn/cert/UB-2024-8842-XF92" alt="QR Code" className="w-full h-full mix-blend-multiply" />
                </div>
                <span className="text-[10px] font-bold text-black tracking-wider">SCAN TO VERIFY</span>
              </div>
              
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1544168190-79c154273140?w=150&q=80" alt="Signature" className="h-12 object-cover w-32 rounded mix-blend-multiply filter grayscale opacity-80 mb-2" />
                <p className="text-xs font-bold text-[#1e4c31] border-t border-emerald-300 pt-1">Director of Education</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button className="bg-[#1e4c31] hover:bg-emerald-900 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors shadow-sm">
            <Download className="w-5 h-5 mr-2" /> Download PDF
          </button>
          <button className="bg-white border border-emerald-500 text-black hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium flex items-center transition-colors shadow-sm">
            <Share2 className="w-5 h-5 mr-2" /> Share to LinkedIn
          </button>
          <div className="flex items-center space-x-3 ml-4 border-l border-emerald-200 pl-4">
            <button className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center text-black hover:text-emerald-500 hover:border-emerald-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center text-black hover:text-emerald-700 hover:border-emerald-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center text-black hover:text-gray-700 hover:border-emerald-900 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Verification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pb-16">
          <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <h4 className="font-bold text-black mb-2">BlockChain Verified</h4>
            <p className="text-sm text-black leading-relaxed">
              Your credentials are secured on the Uburiza network for permanent, unalterable verification.
            </p>
          </div>
          
          <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center mb-4">
              <ExternalLink className="w-5 h-5 text-black" />
            </div>
            <h4 className="font-bold text-black mb-2">Public Profile</h4>
            <p className="text-sm text-black leading-relaxed">
              Enable this certificate on your public Uburiza profile to showcase your expertise to recruiters.
            </p>
          </div>

          <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-black" />
            </div>
            <h4 className="font-bold text-black mb-2">Skill Points</h4>
            <p className="text-sm text-black leading-relaxed">
              Completion of this track has awarded you 2,500 Skill Points towards your next Master Badge.
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification (Fixed) */}
      <div className="fixed bottom-8 right-8 bg-[#1e4c31] text-white p-4 rounded-xl shadow-lg flex items-center space-x-3 z-50 animate-bounce">
        <CheckCircle2 className="w-6 h-6 text-black" />
        <div>
          <h4 className="font-bold text-sm">Certificate Ready!</h4>
          <p className="text-xs text-emerald-100">Syncing with LinkedIn profile...</p>
        </div>
      </div>
    </div>
  );
}
