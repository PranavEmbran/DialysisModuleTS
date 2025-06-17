import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';
import './TopNav.css';

interface TopNavProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const TopNav: React.FC<TopNavProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <Link to="/dashboard">
          <img src="/HoDo-LOGO-BLUE150.png" alt="HoDo Logo" className="nav-logo" />
        </Link>
        <ul className="nav-list2">
          <li className='nav-link'><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
          <li className='nav-link'><NavLink to="/registration" className={({ isActive }) => isActive ? 'active' : ''}>Patient Registration</NavLink></li>
          <li className='nav-link'><NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''}>Schedule</NavLink></li>
          <li className='nav-link'><NavLink to="/process" className={({ isActive }) => isActive ? 'active' : ''}>Start Dialysis</NavLink></li>
          <li className='nav-link'><NavLink to="/billing" className={({ isActive }) => isActive ? 'active' : ''}>Billing</NavLink></li>
          <li className='nav-link'><NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''}>History</NavLink></li>
        </ul>
      </div>
      <ul className="nav-list">
        <div className="searchBar">
          <input type="search" name="search" placeholder="Search Patient with Name or Card No. or Mobile No."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <li className='nav-list-button'><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
        <li className='nav-list-button'><NavLink to="/process" className={({ isActive }) => isActive ? 'active' : ''}>Start Dialysis</NavLink></li>
        <div className="nav-div-main">
          <div className="nav-div">
            <a href="#" className="nav-link text-white" title="Search Patient" onClick={(e) => {
              e.preventDefault();
              alert('Search Patient feature coming soon!');
            }}>
              <i className="fas fa-search  mt-1"></i>
              <FaSearch />
            </a>
          </div>
          <div className="nav-div">
            <a href="#" className="nav-link text-white" onClick={(e) => {
              e.preventDefault();
              alert('Notification feature coming soon!');
            }}>
              <i className="fas fa-bell  mt-1"></i>
              <FaBell />
            </a>
          </div>
          <div className="nav-div">
            <a href="#" className="nav-link text-white" onClick={(e) => {
              e.preventDefault();
              alert('Settings Disabled');
            }}>
              <i className="fas fa-cog  mt-1"></i>
              <FaCog />
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default TopNav; 