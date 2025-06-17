import React, { useState } from 'react';
import DialysisFlowChart from '../components/DialysisFlowChart';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DialysisFlowChartPage: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);

  return (
    <div className="dialysis-flow-chart-container">
      <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <DialysisFlowChart />
      <Footer />
    </div>
  );
};

export default DialysisFlowChartPage; 