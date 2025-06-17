import React, { useState, useEffect, ChangeEvent } from 'react';
import { FaUserInjured, FaProcedures, FaCalendarAlt } from 'react-icons/fa';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { patientsApi } from '../api/patientsApi';
import { Patient } from '../types';

interface Stat {
  label: string;
  value: number;
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const stats: Stat[] = [
    { label: 'Total Active Patients', value: 120, icon: <FaUserInjured /> },
    { label: "Today's Dialysis Sessions", value: 18, icon: <FaProcedures /> },
    { label: 'Upcoming Appointments', value: 7, icon: <FaCalendarAlt /> },
  ];

  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [opIp, setOpIp] = useState<'OP' | 'IP'>('OP');
  const [autoRefresh, setAutoRefresh] = useState<number>(15);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [patients, setPatients] = useState<Patient[]>([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);

  useEffect(() => {
    patientsApi.getAllPatients().then(setPatients).catch(() => {});
  }, []);

  return (
    <>
    <Container fluid className="home-container py-5">
    <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
          <Row className="mb-4">
        {stats.map((stat) => (
          <Col key={stat.label} md={4} className="mb-3">
            <div className="dashboard-card text-center p-4 shadow-sm rounded bg-white h-100 d-flex flex-column align-items-center justify-content-center">
              <div className="dashboard-icon mb-2">{stat.icon}</div>
              <div className="dashboard-value mb-1">{stat.value}</div>
              <div className="dashboard-label">{stat.label}</div>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="mb-3 align-items-end g-3">
        <Col xs={12} md={2}>
          <Form.Label>From Date</Form.Label>
          <Form.Control type="date" value={fromDate} onChange={(e: ChangeEvent<HTMLInputElement>) => setFromDate(e.target.value)} />
        </Col>
        <Col xs={12} md={2}>
          <Form.Label>To Date</Form.Label>
          <Form.Control type="date" value={toDate} onChange={(e: ChangeEvent<HTMLInputElement>) => setToDate(e.target.value)} />
        </Col>
        <Col xs={12} md={3}>
          <Form.Label>Current Status</Form.Label>
          <Form.Select value={status} onChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="Admitted">Admitted</option>
            <option value="Discharged">Discharged</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Col>
        <Col xs={12} md={1} className="d-flex flex-column">
          <Form.Label>OP/IP</Form.Label>
          <InputGroup>
            <Form.Check
              type="switch"
              id="op-ip-switch"
              label={opIp}
              checked={opIp === 'IP'}
              onChange={() => setOpIp(opIp === 'OP' ? 'IP' : 'OP')}
            />
          </InputGroup>
        </Col>
        <Col xs={12} md={2}>
          <Form.Label>Auto-Refresh Timer</Form.Label>
          <InputGroup>
            <Form.Select value={autoRefresh} onChange={(e: ChangeEvent<HTMLSelectElement>) => setAutoRefresh(Number(e.target.value))}>
              <option value={5}>5 Minutes</option>
              <option value={15}>15 Minutes</option>
              <option value={30}>30 Minutes</option>
            </Form.Select>
            <Button variant="outline-secondary" title="Refresh"><i className="bi bi-arrow-clockwise"></i></Button>
          </InputGroup>
        </Col>
        <Col xs={12} md={1} className="d-flex flex-column align-items-center">
          <Form.Label>Show All Patients</Form.Label>
          <Form.Check
            type="checkbox"
            checked={showAll}
            onChange={() => setShowAll(!showAll)}
            label=""
          />
        </Col>
        <Col xs={12} md={2}>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Registered Patients</h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Blood Group</th>
                  <th>DOB</th>
                </tr>
              </thead>
              <tbody>
                {patients.map(p => (
                  <tr key={p.id}>
                    <td>{(p.firstName || p.name) + (p.lastName ? ' ' + p.lastName : '')}</td>
                    <td>{p.gender}</td>
                    <td>{p.mobileNo}</td>
                    <td>{p.bloodGroup}</td>
                    <td>{p.dateOfBirth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Doctor</th>
                  <th>Token/IP No</th>
                  <th>Visit ID</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Button size="sm" variant="outline-primary">+</Button></td>
                  <td colSpan={7} className="text-center">Table data will appear here...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Dashboard; 