import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaBell, FaCog, FaChevronDown } from 'react-icons/fa';
import './TopNav.css';

interface TopNavProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const TopNav: React.FC<TopNavProps> = ({ searchQuery, setSearchQuery }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleDropdownToggle = () => setDropdownOpen((open) => !open);
  const handleNavClick = () => setDropdownOpen(false);

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
          {/* <li className='nav-link'><NavLink to="/dialysis-flow-chart" className={({ isActive }) => isActive ? 'active' : ''}>Flow Chart</NavLink></li>
          <li className='nav-link'><NavLink to="/haemodialysis-record-details" className={({ isActive }) => isActive ? 'active' : ''}>HD Record</NavLink></li>
          <li className='nav-link'><NavLink to="/billing" className={({ isActive }) => isActive ? 'active' : ''}>Billing</NavLink></li>
          <li className='nav-link'><NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''}>History</NavLink></li> */}
        </ul>

        <div className="nav-permanent-more-wrapper" ref={dropdownRef}>
          <button className="nav-permanent-more-btn" onClick={handleDropdownToggle} aria-expanded={dropdownOpen} aria-controls="nav-more-dropdown">
            More <FaChevronDown style={{ marginLeft: 4 }} />
          </button>
          {dropdownOpen && (
            <div className="nav-permanent-more-dropdown" id="nav-permanent-more-dropdown">
              {/* <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Dashboard</NavLink>
              <NavLink to="/registration" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Patient Registration</NavLink>
              <NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Schedule</NavLink>
              <NavLink to="/process" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Start Dialysis</NavLink> */}
              <NavLink to="/dialysis-flow-chart" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Flow Chart</NavLink>
              <NavLink to="/haemodialysis-record-details" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>HD Record</NavLink>
              <NavLink to="/billing" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Billing</NavLink>
              <NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>History</NavLink>
            </div>
          )}
        </div>

        <div className="nav-more-wrapper" ref={dropdownRef}>
          <button className="nav-more-btn" onClick={handleDropdownToggle} aria-expanded={dropdownOpen} aria-controls="nav-more-dropdown">
            More <FaChevronDown style={{ marginLeft: 4 }} />
          </button>
          {dropdownOpen && (
            <div className="nav-more-dropdown" id="nav-more-dropdown">
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Dashboard</NavLink>
              <NavLink to="/registration" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Patient Registration</NavLink>
              <NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Schedule</NavLink>
              <NavLink to="/process" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Start Dialysis</NavLink>
              <NavLink to="/dialysis-flow-chart" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Flow Chart</NavLink>
              <NavLink to="/haemodialysis-record-details" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>HD Record</NavLink>
              <NavLink to="/billing" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Billing</NavLink>
              <NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>History</NavLink>
            </div>
          )}
        </div>
      </div>
      <ul className="nav-list nav-list-responsive">
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