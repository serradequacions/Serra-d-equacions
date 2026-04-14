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

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logoImg} alt="Logo" className="login-logo" />
        <h2>{isRegister ? 'Crea un compte' : 'Benvingut/da'}</h2>
        {error && <p className="error-msg">{error}</p>}
        
        <form onSubmit={handleAuth}>
          {isRegister && (
            <input 
              type="text" placeholder="Nom complet" className="login-input"
              value={name} onChange={(e) => setName(e.target.value)} required 
            />
          )}
          <input 
            type="email" placeholder="Correu electrònic" className="login-input"
            value={email} onChange={(e) => setEmail(e.target.value)} required 
          />
          <input 
            type="password" placeholder="Contrasenya" className="login-input"
            value={password} onChange={(e) => setPassword(e.target.value)} required 
          />
          <button type="submit" className="login-btn">
            {isRegister ? 'Registrar-me' : 'Entrar'}
          </button>
        </form>

        <button onClick={handleGoogle} className="google-btn">Entra amb Google</button>
        
        <p onClick={() => setIsRegister(!isRegister)} className="toggle-auth">
          {isRegister ? 'Ja tens compte? Entra' : 'No tens compte? Registra’t'}
        </p>
      </div>
    </div>
  );
}