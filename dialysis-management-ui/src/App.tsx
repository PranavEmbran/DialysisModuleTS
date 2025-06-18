import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import PatientRegistration from './pages/PatientRegistration';
import Schedule from './pages/Schedule';
import DialysisProcess from './pages/DialysisProcess';
import Billing from './pages/Billing';
import History from './pages/History';
import Dashboard from './pages/Home';
import TopNav from './components/TopNav';
// import SideBar from './components/SideBar';
import SideBarComp from './components/SideBarComp';
// import StartDialysis from './components/StartDialysis';
import DialysisFlowChartPage from "./pages/DialysisFlowChartPage";
import HaemodialysisRecordDetailsPage from "./pages/HaemodialysisRecordDetailsPage";

interface SidebarProps {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);     

  return (
    <Router>
      <div className="app">
        <div className="main-container">
          <SideBarComp collapsed={sidebarCollapsed} />
          {/* <SideBar /> */}
          <TopNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main className="main-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />} />
              <Route path="/" element={<Dashboard sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />} />
              <Route path="/registration" element={<PatientRegistration sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />} />
              <Route path="/schedule" element={<Schedule sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />} />
              <Route path="/process" element={<DialysisProcess sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />} />
              <Route path="/billing" element={<Billing sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar}  />} />
              <Route path="/history" element={<History sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar}  />} />
              {/* <Route path="/start" element={<StartDialysis />} /> */}
              <Route path="/dialysis-flow-chart" element={<DialysisFlowChartPage sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar}  />} />
              <Route path="/haemodialysis-record-details" element={<HaemodialysisRecordDetailsPage sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar}  />} />
            </Routes>
          </main>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App; 