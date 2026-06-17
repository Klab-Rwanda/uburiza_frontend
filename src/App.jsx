import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import LearnerDashboard from './views/LearnerDashboard';
import ResourceLibrary from './views/ResourceLibrary';
import CertificateView from './views/CertificateView';
import OperationalAnalytics from './views/OperationalAnalytics';
import AdminManagementForms from './views/AdminManagementForms';

function App() {
  const [view, setView] = useState('Dashboard');

  const renderView = () => {
    switch(view) {
      case 'Dashboard':
        return <LearnerDashboard setView={setView} />;
      case 'Resources':
        return <ResourceLibrary setView={setView} />;
      case 'Certificate':
        return <CertificateView setView={setView} />;
      case 'Analytics':
        return <OperationalAnalytics setView={setView} />;
      case 'AdminForms':
        return <AdminManagementForms setView={setView} />;
      default:
        return <LearnerDashboard setView={setView} />;
    }
  };

  return (
    <div className="container-custom flex font-sans overflow-hidden">
      <Sidebar view={view} setView={setView} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <TopNav view={view} setView={setView} />
        <main className="flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default App;
