import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Digitalt Matlager. Laget med ❤️ for bedre matlager-styring.</p>
      </footer>
    </div>
  );
};

export default Layout;