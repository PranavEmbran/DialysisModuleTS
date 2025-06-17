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

          {/* Timing */}
          <div className="form-section">
            <h3>Timing</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>HD Starting Time</label>
                <input type="time" name="hdStartingTime" value={formData.hdStartingTime} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label>HD Closing Time</label>
                <input type="time" name="hdClosingTime" value={formData.hdClosingTime} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label>Duration Hours</label>
                <input type="number" name="durationHours" value={formData.durationHours} onChange={handleChange} min="0" />
              </div>
            </div>
          </div>

          {/* Vitals */}
          <div className="form-section">
            <h3>Vitals</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>B.P. Before Dialysis</label>
                <input type="text" name="bpBeforeDialysis" value={formData.bpBeforeDialysis} onChange={handleChange} placeholder="e.g., 120/80" />
              </div>
              <div className="form-field">
                <label>B.P. After Dialysis</label>
                <input type="text" name="bpAfterDialysis" value={formData.bpAfterDialysis} onChange={handleChange} placeholder="e.g., 110/70" />
              </div>
              <div className="form-field">
                <label>B.P. During Dialysis (Average)</label>
                <input type="text" name="bpDuringDialysis" value={formData.bpDuringDialysis} onChange={handleChange} placeholder="e.g., 115/75" />
              </div>
              <div className="form-field">
                <label>Weight Pre Dialysis (kg)</label>
                <input type="number" name="weightPreDialysis" value={formData.weightPreDialysis} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Weight Post Dialysis (kg)</label>
                <input type="number" name="weightPostDialysis" value={formData.weightPostDialysis} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Weight Loss (kg)</label>
                <input type="number" name="weightLoss" value={formData.weightLoss} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Dry Weight (kg)</label>
                <input type="number" name="dryWeight" value={formData.dryWeight} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Weight Gain (kg)</label>
                <input type="number" name="weightGain" value={formData.weightGain} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>SPO2 (%)</label>
                <input type="number" name="spo2" value={formData.spo2} onChange={handleChange} min="0" max="100" />
              </div>
            </div>
          </div>

          {/* Dialysis Setup */}
          <div className="form-section">
            <h3>Dialysis Setup</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>Blood Flow Rate (ml/min)</label>
                <input type="number" name="bloodFlowRate" value={formData.bloodFlowRate} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Inj Heparin Prime (units)</label>
                <input type="number" name="injHeparinPrime" value={formData.injHeparinPrime} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Inj. Heparin Bolus (units)</label>
                <input type="number" name="injHeparinBolus" value={formData.injHeparinBolus} onChange={handleChange} min="0" />
              </div>

              <div className="form-field checkbox-group">
                <div className="checkbox-subgroup">
                  <label htmlFor="startingWithSaline">Starting with Saline</label>
                  <input id="startingWithSaline" type="checkbox" name="startingWithSaline" checked={formData.startingWithSaline} onChange={handleChange} />
                </div>
              </div>
              <div className="form-field checkbox-group">
                <label>Closing with:</label>
                <br />
                <div className="checkbox-subgroup">
                  <label htmlFor="closingWithAir">Air</label>
                  <input id="closingWithAir" type="checkbox" name="closingWithAir" checked={formData.closingWithAir} onChange={handleChange} />
                </div>
                <div className="checkbox-subgroup">
                  <label htmlFor="closingWithSaline">Saline</label>
                  <input id="closingWithSaline" type="checkbox" name="closingWithSaline" checked={formData.closingWithSaline} onChange={handleChange} />
                </div>
                <small style={{ fontWeight: 'normal' }}>* Use both only when clinically approved</small>
              </div>
              <div className="form-field checkbox-group">
                <div className="checkbox-subgroup">
                  <label htmlFor="bloodTransfusion">Blood Transfusion</label>
                  <input id="bloodTransfusion" type="checkbox" name="bloodTransfusion" checked={formData.bloodTransfusion} onChange={handleChange} />
                </div>
                {formData.bloodTransfusion && (
                  <input type="text" name="bloodTransfusionComment" value={formData.bloodTransfusionComment} onChange={handleChange} placeholder="Comment" style={{ marginTop: '0.5rem' }} />
                )}
              </div>

              <div className="form-field">
                <label>Dialysis Monitor Name FO No</label>
                <input type="text" name="dialysisMonitorNameFO" value={formData.dialysisMonitorNameFO} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Dialysis Name / Size</label>
                <input type="text" name="dialysisNameSize" value={formData.dialysisNameSize} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Dialysis Number of Refuse</label>
                <input type="number" name="dialysisNumberOfRefuse" value={formData.dialysisNumberOfRefuse} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Blood Tube Number of Refuse</label>
                <input type="number" name="bloodTubeNumberOfRefuse" value={formData.bloodTubeNumberOfRefuse} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Dialysis Flow Rate</label>
                <input type="number" name="dialysisFlowRate" value={formData.dialysisFlowRate} onChange={handleChange} min="0" />
              </div>
              <div className="form-field">
                <label>Bathacetete</label>
                <input type="text" name="bathacetete" value={formData.bathacetete} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Bath Bicarb</label>
                <input type="text" name="bathBicarb" value={formData.bathBicarb} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Na / Conductivity</label>
                <input type="text" name="naConductivity" value={formData.naConductivity} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Profiles No</label>
                <input type="text" name="profilesNo" value={formData.profilesNo} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Complaints */}
          <div className="form-section">
            <h3>Complaints & Observations</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>Equipments Complaints</label>
                <textarea name="equipmentsComplaints" value={formData.equipmentsComplaints} onChange={handleChange} rows={4}></textarea>
              </div>
              <div className="form-field">
                <label>Patients Complaints</label>
                <textarea name="patientsComplaints" value={formData.patientsComplaints} onChange={handleChange} rows={4}></textarea>
              </div>
              <div className="form-field checkbox-group">
                <label>Fever / Rigor:</label>
                <input type="checkbox" name="fever" checked={formData.fever} onChange={handleChange} />
                <label>Fever</label>
                <input type="checkbox" name="rigor" checked={formData.rigor} onChange={handleChange} />
                <label>Rigor</label>
              </div>
              <div className="form-field checkbox-group">
                <label>Hypertension / Hypoglycemia:</label>
                <input type="checkbox" name="hypertension" checked={formData.hypertension} onChange={handleChange} />
                <label>Hypertension</label>
                <input type="checkbox" name="hypoglycemia" checked={formData.hypoglycemia} onChange={handleChange} />
                <label>Hypoglycemia</label>
              </div>
            </div>
          </div>

          {/* Sign-off */}
          <div className="form-section">
            <h3>Sign-off</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>Dept In-Charge Sign</label>
                <input type="text" name="deptInChargeSign" value={formData.deptInChargeSign} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-submit btn-with-gradient">Submit</button>
            <button type="button" className="btn-print btn-with-gradient" onClick={handlePrint}>Print</button>
            <button type="button" className="btn-export-excel btn-with-gradient" onClick={handleExportExcel}>Export to Excel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialysisFlowChart; 