import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Velkommen til ditt Digitale Matlager! !Standard opprettet template! 🍽️</h1>
        <p>Hold oversikt over matvarene dine og få smarte oppskriftsforslag</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">📦</div>
          <h3>Matlager Status</h3>
          <div className="stats">
            <p><strong>42</strong> varer totalt</p>
            <p><strong>5</strong> utløper snart</p>
          </div>
          <button className="card-btn">Se matlager</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🧾</div>
          <h3>Oppskriftsforslag</h3>
          <div className="stats">
            <p><strong>12</strong> oppskrifter tilgjengelig</p>
            <p>Basert på dine varer</p>
          </div>
          <button className="card-btn">Se oppskrifter</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🛒</div>
          <h3>Handleliste</h3>
          <div className="stats">
            <p><strong>8</strong> varer på listen</p>
            <p>Manglende ingredienser</p>
          </div>
          <button className="card-btn">Se handleliste</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🤖</div>
          <h3>AI Anbefalinger</h3>
          <div className="stats">
            <p>Smarte forslag basert på</p>
            <p>dine preferanser</p>
          </div>
          <button className="card-btn">Få forslag</button>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Siste aktivitet</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">➕</span>
            <span>La til "Melk" i matlager</span>
            <span className="activity-time">2 timer siden</span>
          </div>
          <div className="activity-item">
            <span className="activity-icon">🍝</span>
            <span>Lagde "Spaghetti Carbonara"</span>
            <span className="activity-time">1 dag siden</span>
          </div>
          <div className="activity-item">
            <span className="activity-icon">🛒</span>
            <span>Oppdaterte handleliste</span>
            <span className="activity-time">2 dager siden</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;