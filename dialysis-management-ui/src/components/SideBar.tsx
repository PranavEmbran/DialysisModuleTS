import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';
import '../App.css';

const SideBar: React.FC = () => {
  return (
    <nav className="sidebar"> <br /> <br /> <br />
      <div className="logo">
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>Dialysis Management</h2>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">
            <FaCaretRight /> Dashboard</Link>
        </li>
        <li>
          <Link to="/registration">
            <FaCaretRight /> Patient Registration
          </Link>
        </li>
        <li>
          <Link to="/schedule">
            <FaCaretRight /> Schedule
          </Link>
        </li>
        <li>
          <Link to="/process">
            <FaCaretRight /> Start Dialysis
          </Link>
        </li>
        <li>
          <Link to="/dialysis-flow-chart">
            <FaCaretRight /> Flow Chart
          </Link>
        </li>
        <li>
          <Link to="/haemodialysis-record-details">
            <FaCaretRight /> Haemodialysis Record Details
          </Link>
        </li>
        <li>
          <Link to="/billing">
            <FaCaretRight /> Billing
          </Link>
        </li>
        <li>
          <Link to="/history">
            <FaCaretRight /> History
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar; 