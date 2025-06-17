import React, { useState, ChangeEvent, FormEvent } from 'react';
import './DialysisFlowChart.css';

interface DialysisFlowChartForm {
  date: string;
  hemodialysisNIO: string;
  bloodAccess: string;
  hdStartingTime: string;
  hdClosingTime: string;
  durationHours: string;
  bloodFlowRate: string;
  injHeparinPrime: string;
  injHeparinBolus: string;
  startingWithSaline: boolean;
  closingWithAir: boolean;
  closingWithSaline: boolean;
  bloodTransfusion: boolean;
  bloodTransfusionComment: string;
  bpBeforeDialysis: string;
  bpAfterDialysis: string;
  bpDuringDialysis: string;
  weightPreDialysis: string;
  weightPostDialysis: string;
  weightLoss: string;
  dryWeight: string;
  weightGain: string;
  dialysisMonitorNameFO: string;
  dialysisNameSize: string;
  dialysisNumberOfRefuse: string;
  bloodTubeNumberOfRefuse: string;
  dialysisFlowRate: string;
  bathacetete: string;
  bathBicarb: string;
  naConductivity: string;
  profilesNo: string;
  equipmentsComplaints: string;
  patientsComplaints: string;
  spo2: string;
  fever: boolean;
  rigor: boolean;
  hypertension: boolean;
  hypoglycemia: boolean;
  deptInChargeSign: string;
}

const DialysisFlowChart: React.FC = () => {
  const [formData, setFormData] = useState<DialysisFlowChartForm>({
    date: '',
    hemodialysisNIO: '',
    bloodAccess: '',
    hdStartingTime: '',
    hdClosingTime: '',
    durationHours: '',
    bloodFlowRate: '',
    injHeparinPrime: '',
    injHeparinBolus: '',
    startingWithSaline: false,
    closingWithAir: false,
    closingWithSaline: false,
    bloodTransfusion: false,
    bloodTransfusionComment: '',
    bpBeforeDialysis: '',
    bpAfterDialysis: '',
    bpDuringDialysis: '',
    weightPreDialysis: '',
    weightPostDialysis: '',
    weightLoss: '',
    dryWeight: '',
    weightGain: '',
    dialysisMonitorNameFO: '',
    dialysisNameSize: '',
    dialysisNumberOfRefuse: '',
    bloodTubeNumberOfRefuse: '',
    dialysisFlowRate: '',
    bathacetete: '',
    bathBicarb: '',
    naConductivity: '',
    profilesNo: '',
    equipmentsComplaints: '',
    patientsComplaints: '',
    spo2: '',
    fever: false,
    rigor: false,
    hypertension: false,
    hypoglycemia: false,
    deptInChargeSign: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportExcel = () => {
    // Logic to export to Excel
    console.log('Exporting to Excel:', formData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="dialysis-flow-chart-content">
      <div className="dialysis-flow-chart-header">
        <h2 className="dialysis-flow-chart-title">Dialysis Flow Chart</h2>
      </div>
      <div className="dialysis-flow-chart-form-container">
        <form onSubmit={handleSubmit}>
          {/* General Info */}
          <div className="form-section">
            <h3>General Info</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label>Hemodialysis NIO</label>
                <input type="text" name="hemodialysisNIO" value={formData.hemodialysisNIO} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Blood Access</label>
                <select name="bloodAccess" value={formData.bloodAccess} onChange={handleChange} required>
                  <option value="">Select Access</option>
                  <option value="AV Fistula">AV Fistula</option>
                  <option value="AV Graft">AV Graft</option>
                  <option value="Catheter">Catheter</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          {/* ... existing code ... */}
        </form>
      </div>
    </div>
  );
};

export default DialysisFlowChart; 