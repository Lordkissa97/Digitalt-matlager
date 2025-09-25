import React from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementer login logikk
    console.log('Login forsøk');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>🍽️ Digitalt Matlager</h1>
          <p>Logg inn for å få tilgang til ditt matlager !Standard opprettet template!</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-post:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="din@epost.no"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Passord:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Ditt passord"
            />
          </div>
          
          <button type="submit" className="login-btn">
            Logg inn
          </button>
        </form>
        
        <div className="login-footer">
          <p>Har du ikke konto? <a href="/register">Registrer deg her</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;