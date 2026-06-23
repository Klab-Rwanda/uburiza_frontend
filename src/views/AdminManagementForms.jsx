import React from 'react';
import { UploadCloud, File, Image as ImageIcon, Video, FileText, FileBadge, Globe, Lock, Plus, Trash2, GripVertical } from 'lucide-react';

export default function AdminManagementForms() {
  return (
    <div className="page p-8 mx-auto space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-emerald-900 mb-1">Admin Management</h1>
        <p className="text-sm text-emerald-500">Configure your courses and learning materials</p>
      </div>

      {/* Create New Course Form */}
      <div className="bg-white border border-emerald-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-emerald-200 flex justify-between items-center bg-emerald-50/50">
          <div>
            <h2 className="text-lg font-bold text-emerald-900">Create New Course</h2>
            <p className="text-sm text-emerald-500">Launch a new learning experience for your students.</p>
          </div>
          <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
            Draft Mode
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Course Title</label>
              <input type="text" placeholder="e.g. Advanced Product Management" className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Category</label>
              <select className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
                <option></option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Level</label>
              <select className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
                <option></option>
              </select>
            </div>
            <div className="flex items-center justify-between border border-emerald-300 rounded-lg px-4 py-2 bg-emerald-50">
              <div>
                <label className="block text-sm font-semibold text-emerald-700">Pricing Status</label>
                <p className="text-xs text-emerald-500">Course requires payment</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-bold text-emerald-900">$99.00</span>
                <div className="w-10 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Course Thumbnail</label>
            <div className="border-2 border-dashed border-emerald-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-emerald-50 transition-colors cursor-pointer bg-emerald-50/50">
              <div className="bg-blue-50 p-3 rounded-full mb-3">
                <UploadCloud className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-emerald-900 mb-1">Click or drag to upload cover image</p>
              <p className="text-xs text-emerald-500">Recommended size: 1200x675px (16:9)</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Course Description</label>
            <textarea placeholder="Describe what students will learn in this course..." rows="4" className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Intro Video URL (YouTube/Vimeo)</label>
            <div className="relative">
              <Video className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="https://youtube.com/watch?v=..." className="w-full border border-emerald-300 rounded-lg pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          </div>

          {/* Curriculum Builder */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-semibold text-emerald-700 flex items-center">
                Curriculum Builder <span className="ml-1 text-emerald-400 cursor-help">ⓘ</span>
              </label>
              <button className="text-sm font-semibold text-emerald-700 border border-emerald-300 px-3 py-1.5 rounded-lg hover:bg-emerald-50 flex items-center">
                <Plus className="w-4 h-4 mr-1" /> Add Module
              </button>
            </div>
            
            <div className="border border-blue-200 rounded-xl bg-blue-50/30 overflow-hidden">
              <div className="p-4 flex items-center justify-between border-b border-blue-100 bg-white">
                <div className="flex items-center flex-1">
                  <GripVertical className="w-4 h-4 text-emerald-400 mr-2 cursor-move" />
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mr-3">MODULE 1</span>
                  <input type="text" defaultValue="Introduction to UI/UX" className="font-semibold text-emerald-900 bg-transparent border-none focus:outline-none flex-1 text-sm" />
                </div>
                <button className="text-red-400 hover:text-red-600 ml-4">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center bg-white border border-emerald-200 rounded-lg p-3">
                  <GripVertical className="w-4 h-4 text-emerald-400 mr-3 cursor-move" />
                  <span className="text-sm text-emerald-400 mr-3">1.</span>
                  <span className="text-sm font-medium text-emerald-700 flex-1">What is Design Thinking?</span>
                </div>
                <div className="flex items-center bg-white border border-emerald-200 rounded-lg p-3">
                  <GripVertical className="w-4 h-4 text-emerald-400 mr-3 cursor-move" />
                  <span className="text-sm text-emerald-400 mr-3">2.</span>
                  <span className="text-sm font-medium text-emerald-700 flex-1">User Research Basics</span>
                </div>
                <button className="w-full mt-2 py-2 border border-dashed border-emerald-300 rounded-lg text-sm font-medium text-emerald-600 hover:bg-white hover:border-emerald-400 transition-colors flex items-center justify-center">
                  <Plus className="w-4 h-4 mr-2" /> Add Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-emerald-200 bg-emerald-50 flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-colors flex-1 shadow-sm">
            Publish Course
          </button>
          <button className="bg-white border border-emerald-300 text-emerald-700 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition-colors shadow-sm">
            Save as Draft
          </button>
        </div>
      </div>


      {/* Upload New Resource Form */}
      <div className="bg-white border border-emerald-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-emerald-200 bg-emerald-50/50">
          <h2 className="text-lg font-bold text-emerald-900">Upload New Resource</h2>
          <p className="text-sm text-emerald-500">Add documents, slide decks, or assets to the global resource library.</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Resource Title</label>
              <input type="text" placeholder="e.g. Design Systems Handbook 2024" className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Category</label>
              <select className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white">
                <option></option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Resource File</label>
            <div className="border-2 border-dashed border-purple-200 bg-purple-50/30 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-purple-50/60 transition-colors cursor-pointer">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <File className="w-8 h-8 text-purple-600" />
              </div>
              <p className="font-bold text-emerald-900 mb-1 text-lg">Drop your file here</p>
              <p className="text-sm text-emerald-500 mb-5">Supports PDF, PPTX, DOCX (Max 50MB)</p>
              <button className="bg-white border border-emerald-300 text-emerald-700 px-6 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-emerald-50">
                Choose File
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-700 mb-1.5">Description</label>
            <textarea placeholder="Brief summary of what's inside this resource..." rows="3" className="w-full border border-emerald-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-700 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                <FileBadge className="w-3 h-3 mr-1" /> PDF <button className="ml-1 hover:text-blue-900">&times;</button>
              </span>
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                <ImageIcon className="w-3 h-3 mr-1" /> Reference <button className="ml-1 hover:text-blue-900">&times;</button>
              </span>
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                <FileText className="w-3 h-3 mr-1" /> Cheat Sheet <button className="ml-1 hover:text-blue-900">&times;</button>
              </span>
              <input type="text" placeholder="Add tag..." className="border-none bg-transparent focus:outline-none text-sm w-24 ml-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-700 mb-3">Visibility Settings</label>
            <div className="grid grid-cols-2 gap-4">
              <label className="border-2 border-blue-500 bg-blue-50/50 rounded-xl p-4 flex items-start space-x-3 cursor-pointer relative">
                <input type="radio" name="visibility" className="mt-1 w-4 h-4 text-blue-600 border-emerald-300 focus:ring-blue-500" defaultChecked />
                <div>
                  <div className="flex items-center font-bold text-emerald-900 mb-1">
                    <Globe className="w-4 h-4 mr-2 text-blue-600" /> Public
                  </div>
                  <p className="text-xs text-emerald-500">Visible to all enrolled students</p>
                </div>
              </label>
              <label className="border border-emerald-200 rounded-xl p-4 flex items-start space-x-3 cursor-pointer hover:bg-emerald-50 transition-colors">
                <input type="radio" name="visibility" className="mt-1 w-4 h-4 text-purple-600 border-emerald-300 focus:ring-purple-500" />
                <div>
                  <div className="flex items-center font-bold text-emerald-900 mb-1">
                    <Lock className="w-4 h-4 mr-2 text-emerald-400" /> Internal Only
                  </div>
                  <p className="text-xs text-emerald-500">Only visible to administrators</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-emerald-200 bg-emerald-50 flex items-center space-x-4">
          <button className="bg-[#7c3aed] hover:bg-purple-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-colors flex-1 shadow-sm">
            Save & Publish Resource
          </button>
          <button className="bg-transparent text-emerald-500 hover:text-emerald-700 px-6 py-2.5 text-sm font-semibold transition-colors">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
