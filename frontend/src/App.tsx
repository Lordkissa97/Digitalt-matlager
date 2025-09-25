import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MatvarerPage from './pages/MatvarerPage';
import RecipesPage from './pages/RecipesPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<HomePage />} />
            <Route path="matvarer" element={<MatvarerPage />} />
            <Route path="recipes" element={<RecipesPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
