import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';

export default function LoginPage({ logoImg }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isRegister) {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCred.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError("Error en l'autenticació: " + err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError("Error amb Google: " + err.message);
    }
  };

  // He adaptat les classes a: "auth-page", "auth-card", "login-input", "login-btn", etc.
  // que són les que apareixen al teu index.css
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <img src={logoImg} alt="Logo" className="auth-logo" style={{maxWidth: '180px', marginBottom: '1.5rem'}} />
          <h2 className="auth-title">{isRegister ? 'Crea un compte' : 'Benvingut/da'}</h2>
          <p className="auth-subtitle">Accedeix a la plataforma de Serra d'Equacions</p>
        </div>

        {error && (
          <div className="status-msg error" style={{marginBottom: '1.5rem', display: 'block'}}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleAuth} className="auth-form">
          {isRegister && (
            <div className="input-group">
              <input 
                type="text" placeholder="Nom complet" className="login-input"
                value={name} onChange={(e) => setName(e.target.value)} required 
              />
            </div>
          )}
          <div className="input-group">
            <input 
              type="email" placeholder="Correu electrònic" className="login-input"
              value={email} onChange={(e) => setEmail(e.target.value)} required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" placeholder="Contrasenya" className="login-input"
              value={password} onChange={(e) => setPassword(e.target.value)} required 
            />
          </div>
          
          <button type="submit" className="login-btn">
            {isRegister ? 'Registrar-me' : 'Iniciar Sessió'}
          </button>
        </form>

        <div className="auth-divider">
          <span>O CONTINUA AMB</span>
        </div>

        <button onClick={handleGoogle} className="google-btn">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" alt="" style={{width: '18px', marginRight: '10px'}} />
          Entra amb Google
        </button>
        
        <div className="auth-footer">
          <p onClick={() => setIsRegister(!isRegister)} style={{cursor: 'pointer', color: 'var(--brand-primary)', fontWeight: '500'}}>
            {isRegister ? 'Ja tens compte? Inicia sessió' : 'No tens compte? Registra’t ara'}
          </p>
        </div>
      </div>
    </div>
  );
}