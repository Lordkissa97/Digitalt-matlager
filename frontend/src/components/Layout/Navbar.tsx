import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/home', label: 'Hjem', icon: '🏠' },
    { path: '/matvarer', label: 'Matvarer', icon: '📦' },
    { path: '/recipes', label: 'Oppskrifter', icon: '🧾' },
    { path: '/profile', label: 'Profil', icon: '👤' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home" className="brand-link">
          <span className="brand-icon">🍽️</span>
          <span className="brand-text">Digitalt Matlager</span>
        </Link>
      </div>

      <ul className="navbar-nav">
        {navItems.map(item => (
          <li key={item.path} className="nav-item">
            <Link 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <button className="notification-btn">
          🔔
          <span className="notification-badge">3</span>
        </button>
        <Link to="/login" className="logout-btn">
          🚪 Logg ut
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;