import React from 'react';
import { Check, Edit2, Trash2, Plus, GripVertical, Info, Layers, PlayCircle, FileText, BookOpen } from 'lucide-react';

export default function AdminManagementForms() {
  return (
    <div className="bg-white min-h-screen font-sans flex flex-col h-screen overflow-hidden">
      {/* Top Header Stepper */}
      <div className="border-b border-slate-200 px-8 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-6 flex-1 overflow-x-auto">
          {/* Step 1 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#1e4c31] flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-black whitespace-nowrap">Course Details</span>
          </div>
          <div className="w-12 h-px bg-slate-200 flex-shrink-0"></div>
          
          {/* Step 2 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#1e4c31] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-[#1e4c31]">2</span>
            </div>
            <span className="text-sm font-bold text-[#1e4c31] whitespace-nowrap">Modules</span>
          </div>
          <div className="w-12 h-px bg-slate-200 flex-shrink-0"></div>

          {/* Step 3 */}
          <div className="flex items-center space-x-3 opacity-50">
            <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-black">3</span>
            </div>
            <span className="text-sm font-medium text-black whitespace-nowrap">Lessons</span>
          </div>
          <div className="w-12 h-px bg-slate-200 flex-shrink-0"></div>

          {/* Step 4 */}
          <div className="flex items-center space-x-3 opacity-50">
            <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-black">4</span>
            </div>
            <span className="text-sm font-medium text-black whitespace-nowrap">Quiz</span>
          </div>
          <div className="w-12 h-px bg-slate-200 flex-shrink-0"></div>

          {/* Step 5 */}
          <div className="flex items-center space-x-3 opacity-50">
            <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-black">5</span>
            </div>
            <span className="text-sm font-medium text-black whitespace-nowrap">Preview</span>
          </div>
          <div className="w-12 h-px bg-slate-200 flex-shrink-0"></div>

          {/* Step 6 */}
          <div className="flex items-center space-x-3 opacity-50">
            <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-black">6</span>
            </div>
            <span className="text-sm font-medium text-black whitespace-nowrap">Publish</span>
          </div>
        </div>

        <div className="flex items-center space-x-6 ml-8 flex-shrink-0">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-black tracking-wider uppercase mb-1">Overall Progress</span>
            <div className="flex items-center space-x-3">
              <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#1e4c31] w-1/3"></div>
              </div>
              <span className="text-sm font-bold text-black">33%</span>
            </div>
          </div>
          
          <button className="flex items-center space-x-2 border border-emerald-300 text-[#1e4c31] px-4 py-2 rounded-lg font-medium text-sm hover:bg-emerald-50 transition-colors">
            <FileText className="w-4 h-4" />
            <span>Save Draft</span>
          </button>
          
          <button className="bg-[#1e4c31] text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-emerald-900 transition-colors flex items-center space-x-2">
            <span>Next Step</span>
            <span className="text-lg leading-none">&rsaquo;</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 border-r border-slate-200 p-6 flex flex-col h-full overflow-y-auto bg-white flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold text-black">Course Structure</h2>
            <span className="bg-emerald-100 text-[#1e4c31] text-xs font-bold px-2 py-1 rounded-md">2 Modules</span>
          </div>

          <div className="space-y-4 flex-1">
            {/* Module 1 */}
            <div className="border border-emerald-100 rounded-xl overflow-hidden bg-white">
              <div className="bg-slate-50 p-3 flex items-center border-b border-emerald-100 cursor-pointer">
                <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm font-bold text-black">Module 1: Fundamentals</span>
              </div>
              <div className="p-2 space-y-1">
                <div className="flex items-center p-2 text-sm text-black hover:bg-emerald-50 rounded-lg cursor-pointer">
                  <PlayCircle className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="truncate">Lesson 1: Introduction to Digital Strategy</span>
                </div>
                <div className="flex items-center p-2 text-sm text-black hover:bg-emerald-50 rounded-lg cursor-pointer">
                  <PlayCircle className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="truncate">Lesson 2: Introduction to Digital Strategy</span>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <div className="bg-slate-50 p-3 flex items-center border-b border-slate-200 cursor-pointer">
                <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm font-bold text-black">Module 2: Fundamentals</span>
              </div>
              <div className="p-2 space-y-1">
                <div className="flex items-center p-2 text-sm text-black hover:bg-slate-50 rounded-lg cursor-pointer">
                  <PlayCircle className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="truncate">Lesson 1: Introduction to Digital Strategy</span>
                </div>
                <div className="flex items-center p-2 text-sm text-black hover:bg-slate-50 rounded-lg cursor-pointer">
                  <PlayCircle className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="truncate">Lesson 2: Introduction to Digital Strategy</span>
                </div>
              </div>
            </div>

            <button className="flex items-center text-[#1e4c31] text-sm font-bold p-2 hover:bg-emerald-50 rounded-lg transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Add New Module
            </button>
          </div>

          <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start space-x-3">
            <Info className="w-5 h-5 text-[#1e4c31] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-black mb-1">Pro Tip</h4>
              <p className="text-xs text-black">Keep modules under 15 minutes to maximize student retention and completion rates.</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white flex flex-col relative pb-24">
          <div className="max-w-4xl w-full mx-auto p-10 flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-black mb-1">Module Configuration</h1>
                <p className="text-sm text-black">Define modules and organize your curriculum flow</p>
              </div>
              <button className="bg-[#1e4c31] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-900 transition-colors flex items-center shadow-sm">
                <Plus className="w-4 h-4 mr-2" /> Add Module
              </button>
            </div>

            <div className="space-y-6">
              {/* Module 1 Configuration Card */}
              <div className="border border-emerald-200 rounded-2xl p-8 bg-white shadow-sm relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-emerald-100 text-[#1e4c31] text-xs font-bold px-3 py-1 rounded-md tracking-wider uppercase">Module 01</span>
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-500 hover:text-black flex items-center text-sm font-medium">
                      <GripVertical className="w-4 h-4 mr-1" /> Reorder
                    </button>
                    <button className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-black mb-2">Module Title</label>
                    <input type="text" defaultValue="Fundamentals of Digital Growth" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Estimated Duration (Mins)</label>
                    <input type="text" defaultValue="45" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-black mb-2">Learning Objectives</label>
                  <textarea placeholder="What will students learn in this module?" rows="3" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"></textarea>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-black flex items-center mb-4">
                    <BookOpen className="w-4 h-4 mr-2 text-[#1e4c31]" /> Module Lessons
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="border border-slate-200 rounded-xl p-4 flex items-center justify-between bg-white hover:border-emerald-300 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-sm font-bold text-black">1</div>
                        <div>
                          <p className="text-sm font-bold text-black">Lesson 1: Getting Started with Analytics</p>
                          <p className="text-xs text-gray-500 mt-0.5">Video • 12:40 mins</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="text-gray-400 hover:text-black"><Edit2 className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-4 flex items-center justify-between bg-white hover:border-emerald-300 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-sm font-bold text-black">2</div>
                        <div>
                          <p className="text-sm font-bold text-black">Lesson 2: Getting Started with Analytics</p>
                          <p className="text-xs text-gray-500 mt-0.5">Video • 12:40 mins</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="text-gray-400 hover:text-black"><Edit2 className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>

                    <button className="w-full border-2 border-dashed border-emerald-200 rounded-xl py-4 flex items-center justify-center text-[#1e4c31] font-bold text-sm hover:bg-emerald-50 transition-colors">
                      <Plus className="w-4 h-4 mr-2" /> Add Lesson to Module
                    </button>
                  </div>
                </div>
              </div>

              {/* Collapsed Module 2 */}
              <div className="border border-slate-200 rounded-xl p-6 flex items-center justify-between bg-white hover:border-emerald-300 transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black">Module 02: Advanced Marketing Channels</h3>
                    <p className="text-xs text-gray-500 mt-0.5">4 Lessons • 58 Mins</p>
                  </div>
                </div>
                <button className="text-[#1e4c31] font-bold text-sm hover:underline">Edit Module</button>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="fixed bottom-0 left-64 right-0 border-t border-slate-200 bg-white p-4 px-10 flex items-center justify-between z-10" style={{ marginLeft: '20rem' }}>
            <button className="bg-white border border-slate-300 text-black font-bold px-8 py-2.5 rounded-xl text-sm hover:bg-slate-50 transition-colors">
              Back
            </button>
            <div className="flex items-center space-x-6">
              <button className="text-black font-bold text-sm hover:underline">
                Save as Draft
              </button>
              <button className="bg-[#1e4c31] hover:bg-emerald-900 text-white font-bold px-8 py-2.5 rounded-xl text-sm transition-colors shadow-sm">
                Continue to Lessons
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
