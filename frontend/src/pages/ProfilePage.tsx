import React, { useState } from 'react';
import './ProfilePage.css';

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  dietaryPreferences: string[];
  allergies: string[];
  favoriteCuisines: string[];
  joinDate: string;
  totalRecipes: number;
  totalMealsCooked: number;
}

const ProfilePage: React.FC = () => {
  const [profile] = useState<UserProfile>({
    name: 'Christian Olsen',
    email: 'christian@example.com',
    avatar: '👨‍🍳',
    dietaryPreferences: ['Vegetariansk', 'Lite sukker'],
    allergies: ['Nøtter'],
    favoriteCuisines: ['Italiensk', 'Asiatisk', 'Norsk'],
    joinDate: '2024-01-15',
    totalRecipes: 47,
    totalMealsCooked: 156
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementer save profile logikk
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>👤 Min Profil !Standard opprettet template!</h1>
        <button 
          className={`edit-profile-btn ${isEditing ? 'cancel' : ''}`}
          onClick={handleEditProfile}
        >
          {isEditing ? '❌ Avbryt' : '✏️ Rediger profil'}
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <span className="avatar-emoji">{profile.avatar}</span>
          </div>
          
          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="profile-edit-form">
              <div className="form-group">
                <label>Navn:</label>
                <input type="text" defaultValue={profile.name} />
              </div>
              <div className="form-group">
                <label>E-post:</label>
                <input type="email" defaultValue={profile.email} />
              </div>
              <button type="submit" className="save-btn">💾 Lagre endringer</button>
            </form>
          ) : (
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <p className="profile-email">{profile.email}</p>
              <p className="join-date">Medlem siden {profile.joinDate}</p>
            </div>
          )}
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-icon">📚</span>
            <div className="stat-content">
              <span className="stat-number">{profile.totalRecipes}</span>
              <span className="stat-label">Oppskrifter prøvd</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🍽️</span>
            <div className="stat-content">
              <span className="stat-number">{profile.totalMealsCooked}</span>
              <span className="stat-label">Måltider laget</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <div className="stat-content">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Gjennomsnittsvurdering</span>
            </div>
          </div>
        </div>

        <div className="preferences-section">
          <div className="preference-card">
            <h3>🥗 Kosthold og preferanser</h3>
            <div className="preference-tags">
              {profile.dietaryPreferences.map((pref, index) => (
                <span key={index} className="preference-tag dietary">
                  {pref}
                </span>
              ))}
            </div>
          </div>

          <div className="preference-card">
            <h3>⚠️ Allergier</h3>
            <div className="preference-tags">
              {profile.allergies.map((allergy, index) => (
                <span key={index} className="preference-tag allergy">
                  {allergy}
                </span>
              ))}
            </div>
          </div>

          <div className="preference-card">
            <h3>🌍 Favoritt kjøkken</h3>
            <div className="preference-tags">
              {profile.favoriteCuisines.map((cuisine, index) => (
                <span key={index} className="preference-tag cuisine">
                  {cuisine}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="recent-activity-section">
          <h3>📈 Siste aktivitet</h3>
          <div className="activity-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p><strong>Lagde Spaghetti Carbonara</strong></p>
                <span className="timeline-date">I dag, 18:30</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p><strong>La til nye varer i matlager</strong></p>
                <span className="timeline-date">I går, 14:20</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p><strong>Oppdaterte profil preferanser</strong></p>
                <span className="timeline-date">3 dager siden</span>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>⚙️ Innstillinger</h3>
          <div className="settings-grid">
            <div className="setting-item">
              <span>🔔 Push-varsler</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span>📧 E-postvarsler</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span>🤖 AI-anbefalinger</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;