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
import StartDialysis from './components/StartDialysis';
// import Footer from './components/Footer.jsx';
import DialysisFlowChartPage from "./pages/DialysisFlowChartPage";
import HaemodialysisRecordDetailsPage from "./pages/HaemodialysisRecordDetailsPage";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <Router>
      <div className="app">
        <div className="main-container">
          <SideBarComp />
          {/* <SideBar /> */}
          <TopNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main className="main-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/registration" element={<PatientRegistration />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/process" element={<DialysisProcess />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/history" element={<History />} />
              <Route path="/start" element={<StartDialysis />} />
              <Route path="/dialysis-flow-chart" element={<DialysisFlowChartPage />} />
              <Route path="/haemodialysis-record-details" element={<HaemodialysisRecordDetailsPage />} />
            </Routes>
          </main>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App; 