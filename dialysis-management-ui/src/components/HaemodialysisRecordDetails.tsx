import React, { useState, ChangeEvent } from 'react';
import './HaemodialysisRecordDetails.css';

interface Row {
  id: number;
  time: string;
  bp: string;
  pulse: string;
  temperature: string;
  venousPressure: string;
  negativePressure: string;
  tmp: string;
  heparin: string;
  medicationRemarks: string;
}

const HaemodialysisRecordDetails: React.FC = () => {
  const createNewRow = (): Row => {
    const now = new Date();
    const time = now.toTimeString().slice(0, 5);
    return {
      id: now.getTime(),
      time: time,
      bp: '',
      pulse: '',
      temperature: '',
      venousPressure: '',
      negativePressure: '',
      tmp: '',
      heparin: '',
      medicationRemarks: '',
    };
  };

  const [rows, setRows] = useState<Row[]>([createNewRow()]);

  const handleAddRow = () => {
    setRows([...rows, createNewRow()]);
  };

  const handleRowChange = (id: number, field: keyof Row, value: string) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleSave = () => {
    console.log('Saving data:', rows);
    // Implement save logic here
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="haemodialysis-record-content">
      <div className="haemodialysis-record-header">
        <h2 className="haemodialysis-record-title">Haemodialysis Record Details</h2>
      </div>
      <div className="haemodialysis-record-form-container">
        <div className="record-table-wrapper">
          <table className="record-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>B.P.</th>
                <th>Pulse</th>
                <th>Temp</th>
                <th>Venous Pressure</th>
                <th>Negative Pressure</th>
                <th>TMP</th>
                <th>Heparin</th>
                <th>Medication & Remarks</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td><input type="time" value={row.time} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRowChange(row.id, 'time', e.target.value)} /></td>
                  <td><input type="text" value={row.bp} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRowChange(row.id, 'bp', e.target.value)} placeholder="e.g., 120/80" /></td>
                  <td><input type="number" value={row.pulse} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRowChange(row.id, 'pulse', e.target.value)} /></td>
                  <td><input type="number" value={row.temperature} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRowChange(row.id, 'temperature', e.target.value)} /></td>
                  <td><input type="number" value={row.venousPressure} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRowChange(row.id, 'venousPressure', e.target.value)} /></td>
                  <td><input type="number" value={row.negativePressure} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRowChange(row.id, 'negativePressure', e.target.value)} /></td>
                  <td><input type="number" value={row.tmp} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRowChange(row.id, 'tmp', e.target.value)} /></td>
                  <td><input type="text" value={row.heparin} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRowChange(row.id, 'heparin', e.target.value)} /></td>
                  <td><textarea value={row.medicationRemarks} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleRowChange(row.id, 'medicationRemarks', e.target.value)}></textarea></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-actions">
          <button onClick={handleAddRow} className="btn-add-row btn-with-gradient">Add Row</button>
          <div>
            <button onClick={handleSave} className="btn-save btn-with-gradient" style={{ marginRight: '10px' }}>Save</button>
            <button onClick={handlePrint} className="btn-print-record btn-with-gradient">Print</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaemodialysisRecordDetails; 