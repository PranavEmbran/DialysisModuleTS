import React from 'react';
import HaemodialysisRecordDetails from '../components/HaemodialysisRecordDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import { Row, Col } from 'react-bootstrap';

const HaemodialysisRecordDetailsPage: React.FC<{ sidebarCollapsed: boolean; toggleSidebar: () => void }> = ({ sidebarCollapsed, toggleSidebar }) => {
  return (
    <div className={`haemodialysis-record-page-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <Row className="mb-4">
        <Col>
          <SectionHeading title="Haemodialysis Record Details" subtitle="Detailed records for haemodialysis sessions" />
        </Col>
      </Row>
      <HaemodialysisRecordDetails />
      <Footer />
    </div>
  );
};

export default HaemodialysisRecordDetailsPage; 