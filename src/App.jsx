import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import LearnerDashboard from './views/LearnerDashboard';
import ResourceLibrary from './views/ResourceLibrary';
import CertificateView from './views/CertificateView';
import OperationalAnalytics from './views/OperationalAnalytics';
import AdminManagementForms from './views/AdminManagementForms';
import LandingPage from './views/LandingPage';
import CourseCatalog from './views/CourseCatalog';
import CourseOverview from './views/CourseOverview';
import CourseMaterial from './views/CourseMaterial';
import Login from './views/Login';
import Signup from './views/Signup';
import SettingsView from './views/SettingsView';
import { AppProvider } from './context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

function AppContent() {
  const [view, setViewInternal] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'LandingPage';
  });

  const setView = (newView) => {
    if (window.location.hash !== `#${newView}`) {
      window.location.hash = newView;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setViewInternal(hash || 'LandingPage');
    };
    window.addEventListener('hashchange', handleHashChange);
    // Trigger once on mount in case there's an initial hash
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
      case 'Settings':
        return <SettingsView setView={setView} />;
      case 'LandingPage':
        return <LandingPage setView={setView} />;
      case 'CourseCatalog':
        return <CourseCatalog setView={setView} />;
      case 'CourseOverview':
        return <CourseOverview view={view} setView={setView} />;
      case 'CourseMaterial':
        return <CourseMaterial view={view} setView={setView} />;
      case 'Login':
        return <Login setView={setView} />;
      case 'Signup':
        return <Signup setView={setView} />;
      default:
        return <LandingPage setView={setView} />;
    }
  };

  const isFullPageView = ['LandingPage', 'CourseCatalog', 'CourseOverview', 'CourseMaterial', 'Login', 'Signup'].includes(view);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  if (isFullPageView) {
    return (
      <div className="font-sans min-h-screen transition-colors duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex flex-col font-sans overflow-hidden bg-white h-screen transition-colors duration-300">
      <TopNav view={view} setView={setView} />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar view={view} setView={setView} />
        <main className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="h-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
