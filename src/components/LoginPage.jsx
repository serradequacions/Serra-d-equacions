import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { LLISTA_CURSOS } from '../constants';

/**
 * LoginPage.jsx
 * Component d'autenticació premium per al Campus Serra.
 * Inclou: Login, Registre (amb selecció de curs) i Recuperació de contrasenya.
 */

export default function LoginPage({ APP_CONFIG, logoImg }) {
  // --- ESTATS DE NAVEGACIÓ I INTERFAZ ---
  const [mode, setMode] = useState('login'); // 'login', 'register', 'reset'
  const [isFocused, setIsFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // --- ESTATS DE FORMULARI ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nom, setNom] = useState('');
  const [curs, setCurs] = useState('');

  // --- LÒGICA D'AUTENTICACIÓ ---

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return setError("Omple tots els camps.");
    
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Login error:", err);
      setError("Credencials incorrectes o l'usuari no existeix.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) return setError("Les contrasenyes no coincideixen.");
    if (!curs) return setError("Has de seleccionar un curs.");
    if (password.length < 6) return setError("La contrasenya ha de tenir almenys 6 caràcters.");

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Creació del perfil a Firestore
      await setDoc(doc(db, "usuaris", user.uid), {
        uid: user.uid,
        nom: nom,
        email: email,
        curs: curs,
        rol: 'alumne',
        createdAt: new Date().toISOString()
      });
      
    } catch (err) {
      console.error("Registration error:", err);
      if (err.code === 'auth/email-already-in-use') {
        setError("Aquest correu ja està registrat.");
      } else {
        setError("Error en crear el compte. Intenta-ho més tard.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) return setError("Introdueix el teu correu electrònic.");
    
    setLoading(true);
    setError('');
    setMessage('');
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("S'ha enviat un enllaç al teu correu per restablir la contrasenya.");
    } catch (err) {
      console.error("Reset error:", err);
      setError("No s'ha pogut enviar el correu. Revisa l'adreça.");
    } finally {
      setLoading(false);
    }
  };

  // --- DEFINICIÓ D'ESTILS (ESTÈTICA PREMIUM) ---

  const colors = {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    bg: '#f8fafc',
    card: '#ffffff',
    textDark: '#0f172a',
    textLight: '#64748b',
    border: '#e2e8f0',
    danger: '#ef4444',
    success: '#10b981',
    accent: '#3b82f6',
    shadow: 'rgba(37, 99, 235, 0.08)'
  };

  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
    overflowX: 'hidden'
  };

  const cardStyle = {
    background: colors.card,
    borderRadius: '24px',
    padding: '48px',
    border: `1px solid ${colors.border}`,
    boxShadow: `0 25px 50px -12px ${colors.shadow}, 0 10px 15px -3px ${colors.shadow}`,
    width: '100%',
    maxWidth: '480px',
    boxSizing: 'border-box',
    animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
  };

  const headerSection = {
    textAlign: 'center',
    marginBottom: '32px'
  };

  const logoStyle = {
    height: '75px',
    width: 'auto',
    marginBottom: '20px',
    objectFit: 'contain'
  };

  const titleStyle = {
    margin: '0 0 8px 0',
    color: colors.textDark,
    fontSize: '1.85rem',
    fontWeight: '850',
    letterSpacing: '-0.025em'
  };

  const subtitleStyle = {
    margin: 0,
    color: colors.textLight,
    fontSize: '1rem',
    lineHeight: '1.6'
  };

  const formGroupStyle = {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const labelStyle = (focused) => ({
    fontSize: '0.875rem',
    fontWeight: '700',
    color: focused ? colors.primary : colors.textDark,
    transition: 'color 0.2s ease',
    paddingLeft: '2px'
  });

  const inputContainerStyle = (focused) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '14px 18px',
    borderRadius: '14px',
    border: focused ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`,
    backgroundColor: focused ? '#fff' : '#fcfcfd',
    boxSizing: 'border-box',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: focused ? `0 0 0 4px rgba(37, 99, 235, 0.1)` : 'none'
  });

  const inputBaseStyle = {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '1rem',
    color: colors.textDark,
    backgroundColor: 'transparent',
    padding: 0
  };

  const iconStyle = (focused) => ({
    marginRight: '12px',
    fontSize: '1.2rem',
    color: focused ? colors.primary : colors.textLight,
    transition: 'color 0.2s ease'
  });

  const alertBoxStyle = (type) => ({
    backgroundColor: type === 'error' ? '#fff1f2' : '#f0fdf4',
    color: type === 'error' ? colors.danger : colors.success,
    padding: '16px',
    borderRadius: '14px',
    marginBottom: '24px',
    fontSize: '0.9rem',
    fontWeight: '600',
    border: `1px solid ${type === 'error' ? '#ffe4e6' : '#dcfce7'}`,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    animation: 'shake 0.4s linear'
  });

  const mainButtonStyle = {
    width: '100%',
    padding: '16px',
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: '14px',
    fontWeight: '750',
    cursor: loading ? 'not-allowed' : 'pointer',
    fontSize: '1.05rem',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
  };

  const secondaryBtnStyle = {
    background: 'none',
    border: 'none',
    color: colors.primary,
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '0.925rem',
    marginTop: '20px',
    textAlign: 'center',
    display: 'block',
    width: '100%',
    transition: 'opacity 0.2s'
  };

  const dividerStyle = {
    margin: '32px 0',
    height: '1px',
    background: colors.border,
    position: 'relative'
  };

  // --- RENDERITZAT DE FORMULARIS ---

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          input::placeholder { color: #94a3b8; }
          button:hover { opacity: 0.9; transform: translateY(-1px); }
          button:active { transform: translateY(0); }
          .loader {
            width: 18px;
            height: 18px;
            border: 2px solid #FFF;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            animation: rotation 1s linear infinite;
          }
          @keyframes rotation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={cardStyle}>
        {/* HEADER */}
        <div style={headerSection}>
          {logoImg && <img src={logoImg} alt="Campus Logo" style={logoStyle} />}
          <h1 style={titleStyle}>
            {mode === 'login' ? 'Benvingut/da' : mode === 'register' ? 'Crea un compte' : 'Recuperar accés'}
          </h1>
          <p style={subtitleStyle}>
            {mode === 'login' && "Accedeix a Serra d'Equacions per veure els teus materials."}
            {mode === 'register' && "Registra't per accedir als materials de la teva classe."}
            {mode === 'reset' && "T'enviarem un correu electrònic per restablir el teu compte."}
          </p>
        </div>

        {/* ALERTES */}
        {error && <div style={alertBoxStyle('error')}><span>⚠️</span> {error}</div>}
        {message && <div style={alertBoxStyle('success')}><span>✅</span> {message}</div>}

        {/* FORMULARI DINÀMIC */}
        <form onSubmit={mode === 'login' ? handleLogin : mode === 'register' ? handleRegister : handleResetPassword}>
          
          {mode === 'register' && (
            <>
              <div style={formGroupStyle}>
                <label style={labelStyle(isFocused === 'nom')}>Nom i Cognoms</label>
                <div style={inputContainerStyle(isFocused === 'nom')}>
                  <span style={iconStyle(isFocused === 'nom')}>👤</span>
                  <input 
                    style={inputBaseStyle}
                    type="text" 
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)}
                    onFocus={() => setIsFocused('nom')}
                    onBlur={() => setIsFocused(null)}
                    placeholder="Escriu el teu nom complet"
                    required
                  />
                </div>
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle(isFocused === 'curs')}>El teu Curs</label>
                <div style={inputContainerStyle(isFocused === 'curs')}>
                  <span style={iconStyle(isFocused === 'curs')}>🏫</span>
                  <select 
                    style={{...inputBaseStyle, appearance: 'none', cursor: 'pointer'}}
                    value={curs}
                    onChange={(e) => setCurs(e.target.value)}
                    onFocus={() => setIsFocused('curs')}
                    onBlur={() => setIsFocused(null)}
                    required
                  >
                    <option value="">Selecciona el teu curs...</option>
                    {LLISTA_CURSOS.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}

          <div style={formGroupStyle}>
            <label style={labelStyle(isFocused === 'email')}>Correu electrònic</label>
            <div style={inputContainerStyle(isFocused === 'email')}>
              <span style={iconStyle(isFocused === 'email')}>✉️</span>
              <input 
                style={inputBaseStyle}
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused('email')}
                onBlur={() => setIsFocused(null)}
                placeholder="alumne@escola.com"
                required
              />
            </div>
          </div>

          {mode !== 'reset' && (
            <div style={formGroupStyle}>
              <label style={labelStyle(isFocused === 'pass')}>Contrasenya</label>
              <div style={inputContainerStyle(isFocused === 'pass')}>
                <span style={iconStyle(isFocused === 'pass')}>🔒</span>
                <input 
                  style={inputBaseStyle}
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsFocused('pass')}
                  onBlur={() => setIsFocused(null)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          )}

          {mode === 'register' && (
            <div style={formGroupStyle}>
              <label style={labelStyle(isFocused === 'confirm')}>Repetir contrasenya</label>
              <div style={inputContainerStyle(isFocused === 'confirm')}>
                <span style={iconStyle(isFocused === 'confirm')}>🔄</span>
                <input 
                  style={inputBaseStyle}
                  type="password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setIsFocused('confirm')}
                  onBlur={() => setIsFocused(null)}
                  placeholder="Repeteix la contrasenya"
                  required
                />
              </div>
            </div>
          )}

          <button type="submit" style={mainButtonStyle} disabled={loading}>
            {loading ? <span className="loader"></span> : (
              mode === 'login' ? 'Iniciar Sessió' : mode === 'register' ? 'Crear compte' : 'Enviar enllaç'
            )}
          </button>
        </form>

        {/* NAVEGACIÓ ENTRE MODES */}
        <div style={{ marginTop: '20px' }}>
          {mode === 'login' && (
            <button style={secondaryBtnStyle} onClick={() => { setMode('reset'); setError(''); setMessage(''); }}>
              He oblidat la contrasenya
            </button>
          )}
          
          <div style={dividerStyle}>
            <span style={{ 
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
              background: '#fff', padding: '0 15px', color: colors.textLight, fontSize: '0.8rem' 
            }}>O</span>
          </div>

          <button 
            style={{...secondaryBtnStyle, color: colors.textDark, border: `1px solid ${colors.border}`, padding: '12px', borderRadius: '12px', marginTop: '0'}}
            onClick={() => {
              setMode(mode === 'login' ? 'register' : 'login');
              setError('');
              setMessage('');
            }}
          >
            {mode === 'login' ? "No tens compte? Registra't" : "Ja tens compte? Inicia sessió"}
          </button>
          
          {mode === 'reset' && (
            <button style={{...secondaryBtnStyle, marginTop: '15px'}} onClick={() => { setMode('login'); setError(''); }}>
              Torna al Login
            </button>
          )}
        </div>

        {/* FOOTER */}
        <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.8rem', color: colors.textLight }}>
          &copy; {new Date().getFullYear()} Serra d'Equacions
          <br />
          Suport: <a href={`mailto:${APP_CONFIG?.adminEmail}`} style={{ color: colors.primary, textDecoration: 'none', fontWeight: '600' }}>{APP_CONFIG?.adminEmail}</a>
        </div>
      </div>
    </div>
  );
}