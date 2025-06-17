import React from 'react';
import HaemodialysisRecordDetails from '../components/HaemodialysisRecordDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HaemodialysisRecordDetailsPage: React.FC = () => {
  return (
    <div className="haemodialysis-record-page-container">
      <Header />
      <HaemodialysisRecordDetails />
      <Footer />
    </div>
  );
};

export default HaemodialysisRecordDetailsPage; 