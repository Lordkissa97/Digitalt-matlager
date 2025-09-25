import React, { useState } from 'react';
import './MatvarerPage.css';

interface MatvareItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  expiryDate: string;
  category: string;
}

const MatvarerPage: React.FC = () => {
  const [matvareItems, setMatvareItems] = useState<MatvareItem[]>([
    { id: 1, name: 'Melk', quantity: 1, unit: 'liter', expiryDate: '2025-10-01', category: 'Meieri' },
    { id: 2, name: 'Brød', quantity: 2, unit: 'stk', expiryDate: '2025-09-28', category: 'Bakevarer' },
    { id: 3, name: 'Epler', quantity: 8, unit: 'stk', expiryDate: '2025-10-05', category: 'Frukt' },
    { id: 4, name: 'Kyllingfilet', quantity: 500, unit: 'gram', expiryDate: '2025-09-30', category: 'Kjøtt' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementer legg til vare logikk
    setShowAddForm(false);
  };

  const getExpiryStatus = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const daysDiff = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 3600 * 24));

    if (daysDiff < 0) return 'expired';
    if (daysDiff <= 3) return 'expiring-soon';
    return 'fresh';
  };

  const getExpiryText = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const daysDiff = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 3600 * 24));

    if (daysDiff < 0) return 'Utløpt';
    if (daysDiff === 0) return 'Utløper i dag';
    if (daysDiff === 1) return 'Utløper i morgen';
    if (daysDiff <= 7) return `Utløper om ${daysDiff} dager`;
    return `Utløper ${expiryDate}`;
  };

  return (
    <div className="matvarer-page">
      <div className="matvarer-header">
        <h1>📦 Mine Matvarer !Standard opprettet template!</h1>
        <button 
          className="add-item-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          ➕ Legg til vare
        </button>
      </div>

      {showAddForm && (
        <div className="add-item-form">
          <form onSubmit={handleAddItem}>
            <div className="form-row">
              <input type="text" placeholder="Varenavn" required />
              <input type="number" placeholder="Antall" required />
              <select required>
                <option value="">Velg enhet</option>
                <option value="stk">stk</option>
                <option value="liter">liter</option>
                <option value="gram">gram</option>
                <option value="kg">kg</option>
              </select>
              <input type="date" required />
              <select required>
                <option value="">Velg kategori</option>
                <option value="Frukt">Frukt</option>
                <option value="Grønnsaker">Grønnsaker</option>
                <option value="Meieri">Meieri</option>
                <option value="Kjøtt">Kjøtt</option>
                <option value="Bakevarer">Bakevarer</option>
                <option value="Annet">Annet</option>
              </select>
            </div>
            <div className="form-buttons">
              <button type="submit">Legg til</button>
              <button type="button" onClick={() => setShowAddForm(false)}>Avbryt</button>
            </div>
          </form>
        </div>
      )}

      <div className="matvarer-stats">
        <div className="stat-card">
          <span className="stat-number">{matvareItems.length}</span>
          <span className="stat-label">Totalt varer</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">
            {matvareItems.filter(item => getExpiryStatus(item.expiryDate) === 'expiring-soon').length}
          </span>
          <span className="stat-label">Utløper snart</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">
            {matvareItems.filter(item => getExpiryStatus(item.expiryDate) === 'expired').length}
          </span>
          <span className="stat-label">Utløpte</span>
        </div>
      </div>

      <div className="matvarer-list">
        {matvareItems.map(item => (
          <div 
            key={item.id} 
            className={`matvare-item ${getExpiryStatus(item.expiryDate)}`}
          >
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="item-quantity">{item.quantity} {item.unit}</p>
              <span className="item-category">{item.category}</span>
            </div>
            <div className="item-status">
              <span className="expiry-text">
                {getExpiryText(item.expiryDate)}
              </span>
            </div>
            <div className="item-actions">
              <button className="edit-btn">✏️</button>
              <button className="delete-btn">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatvarerPage;