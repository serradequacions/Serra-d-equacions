import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  sendPasswordResetEmail 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function LoginPage({ logoImg, APP_CONFIG }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cursAlumne, setCursAlumne] = useState(APP_CONFIG.cursosOpcions[0]); // Nou estat per al curs
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isRegister) {
        const res = await createUserWithEmailAndPassword(auth, email, pass);
        // Creem el perfil amb el curs seleccionat
        await setDoc(doc(db, "users", res.user.uid), {
          email: res.user.email,
          role: 'student',
          curs: cursAlumne, // Guardem el curs seleccionat
          created: new Date()
        });
      } else {
        await signInWithEmailAndPassword(auth, email, pass);
      }
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/user-not-found') setError('Aquest usuari no existeix.');
      else if (err.code === 'auth/wrong-password') setError('Contrasenya incorrecta.');
      else if (err.code === 'auth/email-already-in-use') setError('Aquest correu ja està registrat.');
      else setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      const userDoc = await getDoc(doc(db, "users", res.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", res.user.uid), {
          email: res.user.email,
          role: 'student',
          curs: APP_CONFIG.cursosOpcions[0] // Curs per defecte a Google
        });
      }
    } catch (err) {
      setError("Error amb Google: " + err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Escriu el teu correu per recuperar la contrasenya.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setError('');
    } catch (err) {
      setError('No s\'ha pogut enviar el correu de recuperació.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src={logoImg} alt="Logo" style={{ width: '100px', marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '1.8rem', color: 'var(--brand-dark)', fontWeight: '800' }}>
            {isRegister ? 'Crear Compte' : 'Aula Virtual'}
          </h1>
          <p style={{ color: '#5c7a7a', fontSize: '0.9rem' }}>Serra d'Equacions</p>
        </div>

        {error && <div className="status-msg error" style={{marginBottom: '1rem'}}>{error}</div>}
        {resetSent && <div className="status-msg success" style={{marginBottom: '1rem'}}>Correu de recuperació enviat!</div>}

        <form onSubmit={handleAuth}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '600' }}>Correu Electrònic</label>
            <input 
              type="email" placeholder="nom@exemple.com" className="login-input" 
              value={email} onChange={(e) => setEmail(e.target.value)} required 
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '600' }}>Contrasenya</label>
            <input 
              type="password" placeholder="••••••••" className="login-input" 
              value={pass} onChange={(e) => setPass(e.target.value)} required 
            />
          </div>

          {isRegister && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '600' }}>Selecciona el teu curs</label>
              <select 
                className="login-input" 
                value={cursAlumne} 
                onChange={(e) => setCursAlumne(e.target.value)}
              >
                {APP_CONFIG.cursosOpcions.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          )}

          {!isRegister && (
            <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
              <button type="button" onClick={handleForgotPassword} style={{ background: 'none', border: 'none', color: 'var(--brand-medium)', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}>
                Has oblidat la contrasenya?
              </button>
            </div>
          )}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Processant...' : (isRegister ? 'REGISTRAR-SE ARA' : 'INICIAR SESSIÓ')}
          </button>
        </form>

        <div style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: 1, height: '1px', background: '#d4e4d4' }}></div>
          <span style={{ fontSize: '0.8rem', color: '#888' }}>O</span>
          <div style={{ flex: 1, height: '1px', background: '#d4e4d4' }}></div>
        </div>

        <button onClick={handleGoogle} className="login-btn" style={{ background: '#ffffff', color: '#444', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/0/google.svg" alt="Google" style={{ width: '18px' }} />
          CONTINUAR AMB GOOGLE
        </button>

        <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--brand-light)' }}>
          <button 
            onClick={() => setIsRegister(!isRegister)}
            style={{ background: 'none', border: 'none', color: 'var(--brand-medium)', cursor: 'pointer', fontWeight: '600' }}
          >
            {isRegister ? 'Ja tens compte? Inicia sessió' : 'No tens compte? Registra\'t aquí'}
          </button>
        </div>
      </div>
    </div>
  );
}