import React, { useState } from 'react';
import { User, Shield, Bell, Save } from 'lucide-react';

export default function SettingsView() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'account', name: 'Account', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto w-full">
      <h1 className="text-3xl font-bold text-emerald-900 mb-8">Settings</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 flex flex-col md:flex-row overflow-hidden">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 bg-emerald-50/50 border-b md:border-b-0 md:border-r border-emerald-100 p-6">
          <nav className="space-y-2 flex flex-row md:flex-col overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full transition-colors whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-emerald-100 text-emerald-800 font-semibold' 
                    : 'text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-emerald-700' : 'text-emerald-400'}`} />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-8">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-emerald-900 mb-6 border-b border-emerald-100 pb-4">Profile Information</h2>
              
              <div className="flex items-center space-x-6 mb-8">
                <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-24 h-24 rounded-full border-4 border-emerald-50" />
                <div>
                  <button className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-medium hover:bg-emerald-200 transition-colors text-sm mb-2">Change Picture</button>
                  <p className="text-xs text-emerald-500">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">First Name</label>
                  <input type="text" defaultValue="Abebe" className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Last Name</label>
                  <input type="text" defaultValue="Bikila" className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Bio</label>
                  <textarea rows="4" defaultValue="Passionate learner exploring tech and sustainability." className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Location</label>
                  <input type="text" defaultValue="Addis Ababa, Ethiopia" className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Current Role</label>
                  <input type="text" defaultValue="Software Developer" className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-emerald-900 mb-6 border-b border-emerald-100 pb-4">Account Security</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Email Address</label>
                  <input type="email" defaultValue="abebe.b@example.com" className="w-full max-w-md border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div className="pt-4">
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full max-w-md border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">New Password</label>
                  <input type="password" placeholder="Leave blank to keep same" className="w-full max-w-md border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-emerald-900 mt-10 mb-6 border-b border-emerald-100 pb-4">Preferences</h2>
              <div>
                <label className="block text-sm font-medium text-emerald-700 mb-2">Language</label>
                <select className="w-full max-w-md border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white">
                  <option>English (US)</option>
                  <option>French</option>
                  <option>Swahili</option>
                  <option>Amharic</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-emerald-900 mb-6 border-b border-emerald-100 pb-4">Notification Preferences</h2>
              
              <div className="space-y-6">
                {[
                  { title: "Course Updates", desc: "Announcements and updates from instructors." },
                  { title: "Promotions & Offers", desc: "Receive special discounts and promotional offers." },
                  { title: "Learning Reminders", desc: "Weekly reminders to help you reach your goals." },
                  { title: "Community Discussions", desc: "Alerts when someone replies to your forum posts." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-emerald-900">{item.title}</h3>
                      <p className="text-sm text-emerald-600 mt-1">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4 flex-shrink-0">
                      <input type="checkbox" className="sr-only peer" defaultChecked={i !== 1} />
                      <div className="w-11 h-6 bg-emerald-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-emerald-100 flex justify-end">
            <button className="flex items-center space-x-2 bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm font-medium">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
