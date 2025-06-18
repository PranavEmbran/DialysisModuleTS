import React, { useState } from 'react';
import DialysisFlowChart from '../components/DialysisFlowChart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import { Row, Col } from 'react-bootstrap';

// const DialysisFlowChartPage: React.FC = () => {
  // const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);
  const DialysisFlowChartPage: React.FC<{ sidebarCollapsed: boolean; toggleSidebar: () => void }> = ({ sidebarCollapsed, toggleSidebar }) => {

  return (
    <div className={`dialysis-flow-chart-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <Row className="mb-4">
        <Col>
          <SectionHeading title="Dialysis Flow Chart" subtitle="Visualize and manage dialysis flow charts" />
        </Col>
      </Row>
      <DialysisFlowChart />
      <Footer />
    </div>
  );
};

export default DialysisFlowChartPage; 