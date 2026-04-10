import React, { useEffect, useState } from 'react';
import { db, auth } from './firebase'; 
import { collection, onSnapshot, doc, setDoc, getDoc, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import logoMates from './logo.png';
import logoInstagram from './logo-instagram.png'; // Importem el teu logo d'Instagram

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userCourse, setUserCourse] = useState('1r ESO');
  const [searchTerm, setSearchTerm] = useState('');
  const [materials, setMaterials] = useState([]);
  const [avisos, setAvisos] = useState([]); 
  const [loading, setLoading] = useState(true);

  // ESTATS ADMIN RECUPERATS
  const [modeAdminActiu, setModeAdminActiu] = useState(true); 
  const [cursSimulat, setCursSimulat] = useState('1r ESO');
  const [nouAviso, setNouAviso] = useState('');
  const [cursosSeleccionatsAviso, setCursosSeleccionatsAviso] = useState([]);
  const [nomMat, setNomMat] = useState('');
  const [urlMat, setUrlMat] = useState('');
  const [cursosSeleccionatsMat, setCursosSeleccionatsMat] = useState([]);

  const adminEmail = "serradequacions@gmail.com"; 
  const llistaCursos = ["1r ESO", "2n ESO", "3r ESO", "4t ESO A", "4t ESO B", "1r BATX CCSS", "1r BATX CIEN.", "1r BATX GENERAL", "2n BATX CCSS", "2n BATX CIEN"];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const docSnap = await getDoc(doc(db, "usuaris", currentUser.uid));
        if (docSnap.exists()) {
          const dades = docSnap.data();
          setUserData(dades);
          setCursSimulat(dades.curs);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      onSnapshot(collection(db, 'materials'), (snap) => {
        setMaterials(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });
      onSnapshot(collection(db, 'avisos'), (snap) => {
        setAvisos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });
    }
  }, [user]);

  const toggleCurso = (curso, tipus) => {
    if (tipus === 'aviso') {
      setCursosSeleccionatsAviso(prev => prev.includes(curso) ? prev.filter(c => c !== curso) : [...prev, curso]);
    } else {
      setCursosSeleccionatsMat(prev => prev.includes(curso) ? prev.filter(c => c !== curso) : [...prev, curso]);
    }
  };

  const publicarAvisoMúltiple = async (e) => {
    e.preventDefault();
    const targets = cursosSeleccionatsAviso.length > 0 ? cursosSeleccionatsAviso : ["General"];
    for (const curs of targets) {
      await addDoc(collection(db, "avisos"), { text: nouAviso, curs: curs, data: new Date().toLocaleDateString('ca-ES'), createdAt: serverTimestamp() });
    }
    setNouAviso(''); setCursosSeleccionatsAviso([]);
    alert("✅ Avisos enviats!");
  };

  const crearMaterialMúltiple = async (e) => {
    e.preventDefault();
    for (const curs of cursosSeleccionatsMat) {
      await addDoc(collection(db, "materials"), { nom: nomMat, url: urlMat, categoria: curs, createdAt: serverTimestamp() });
    }
    setNomMat(''); setUrlMat(''); setCursosSeleccionatsMat([]);
    alert("✅ Materials afegits!");
  };

  const eliminarElement = async (col, id) => {
    if (window.confirm("Segur que vols eliminar aquest element?")) {
      await deleteDoc(doc(db, col, id));
    }
  };

  if (loading) return <div className="loader-container"><h2>Carregant Serra d'Equacions...</h2></div>;

  if (!user) {
    return (
      <div className="login-container">
        <div className="login-card">
          <img src={logoMates} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
          <h2>Accés Alumnes</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (isRegistering) {
              createUserWithEmailAndPassword(auth, email, password).then(res => {
                setDoc(doc(db, "usuaris", res.user.uid), { email, curs: userCourse });
              });
            } else {
              signInWithEmailAndPassword(auth, email, password);
            }
          }}>
            <input className="login-input" type="email" placeholder="Correu electrònic" onChange={e => setEmail(e.target.value)} required />
            <input className="login-input" type="password" placeholder="Contrasenya" onChange={e => setPassword(e.target.value)} required />
            {isRegistering && (
              <select className="login-input" value={userCourse} onChange={e => setUserCourse(e.target.value)}>
                {llistaCursos.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            )}
            <button className="login-button" type="submit">{isRegistering ? 'CREAR COMPTE' : 'ENTRAR'}</button>
          </form>
          <p onClick={() => setIsRegistering(!isRegistering)} style={{marginTop: '20px', cursor: 'pointer', color: 'var(--color-logo-blau)', fontWeight: 'bold'}}>
            {isRegistering ? 'Ja tens compte? Entra' : 'No tens compte? Registra\'t'}
          </p>
        </div>
      </div>
    );
  }

  const realAdmin = user.email === adminEmail;
  const cursActual = (realAdmin && !modeAdminActiu) ? cursSimulat : userData?.curs;

  return (
    <div className="app-wrapper">
      <header>
        <div className="top-bar">
          <div className="notif-bell">🔔</div>
          <button className="logout-btn" onClick={() => signOut(auth)}>Tancar Sessió</button>
        </div>
        <img src={logoMates} alt="Logo" style={{ width: '80px', marginTop: '10px' }} />
        <h1>Serra d'Equacions</h1>
        
        {realAdmin && (
          <div className="admin-selector-view" style={{marginTop: '20px'}}>
            <select value={modeAdminActiu ? "admin" : "alumne"} onChange={(e) => setModeAdminActiu(e.target.value === "admin")} style={{padding: '10px', borderRadius: '10px'}}>
              <option value="admin">🔧 GESTIÓ ADMIN</option>
              <option value="alumne">🎓 VISTA ALUMNE</option>
            </select>
            {!modeAdminActiu && (
              <select value={cursSimulat} onChange={(e) => setCursSimulat(e.target.value)} style={{marginLeft: '10px', padding: '10px', borderRadius: '10px', borderColor: 'var(--color-logo-verd)'}}>
                {llistaCursos.map(c => <option key={c} value={c}>Curs: {c}</option>)}
              </select>
            )}
          </div>
        )}
        <input className="search-bar" type="text" placeholder="🔍 Cerca apunts, exercicis..." onChange={e => setSearchTerm(e.target.value)} />
      </header>

      <main>
        {realAdmin && modeAdminActiu ? (
          <section className="admin-panel">
            <div className="admin-grid">
              <div className="admin-box">
                <h3>📢 Publicar Avisos</h3>
                <form onSubmit={publicarAvisoMúltiple}>
                  <textarea placeholder="Escriu l'avís aquí..." value={nouAviso} onChange={e => setNouAviso(e.target.value)} required />
                  <div className="multi-select-area">
                    <p>Selecciona els cursos destinataris:</p>
                    <div className="checkbox-grid">
                      {llistaCursos.map(c => (
                        <label key={c} className="check-item">
                          <input type="checkbox" checked={cursosSeleccionatsAviso.includes(c)} onChange={() => toggleCurso(c, 'aviso')} /> {c}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn-admin">ENVIAR AVÍS</button>
                </form>
              </div>

              <div className="admin-box">
                <h3>📚 Penjar Material</h3>
                <form onSubmit={crearMaterialMúltiple}>
                  <input type="text" placeholder="Títol del recurs" value={nomMat} onChange={e => setNomMat(e.target.value)} required />
                  <input type="text" placeholder="Enllaç (URL)" value={urlMat} onChange={e => setUrlMat(e.target.value)} required />
                  <div className="multi-select-area">
                    <p>Afegir a:</p>
                    <div className="checkbox-grid">
                      {llistaCursos.map(c => (
                        <label key={c} className="check-item">
                          <input type="checkbox" checked={cursosSeleccionatsMat.includes(c)} onChange={() => toggleCurso(c, 'material')} /> {c}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn-admin btn-green">GUARDAR RECURS</button>
                </form>
              </div>
            </div>

            <div className="admin-management-section">
              <h3 className="section-title-admin">📦 Gestió de Contingut Penjat</h3>
              <div className="accordion-wrapper">
                {llistaCursos.map(curs => (
                  <details key={curs} className="curs-accordion">
                    <summary className="curs-summary">
                      <span>{curs}</span>
                      <div className="count-badges">
                        <small>📢 {avisos.filter(a => a.curs === curs).length}</small>
                        <small>📚 {materials.filter(m => m.categoria === curs).length}</small>
                      </div>
                    </summary>
                    <div className="curs-content">
                      <div className="manage-group">
                        <h4>Avisos</h4>
                        {avisos.filter(a => a.curs === curs).length === 0 && <p className="no-data">Cap avís.</p>}
                        {avisos.filter(a => a.curs === curs).map(a => (
                          <div key={a.id} className="manage-item">
                            <span>{a.text.substring(0, 40)}...</span>
                            <button onClick={() => eliminarElement('avisos', a.id)} className="btn-delete">Eliminar</button>
                          </div>
                        ))}
                      </div>
                      <div className="manage-group">
                        <h4>Materials</h4>
                        {materials.filter(m => m.categoria === curs).length === 0 && <p className="no-data">Cap material.</p>}
                        {materials.filter(m => m.categoria === curs).map(m => (
                          <div key={m.id} className="manage-item">
                            <span>{m.nom}</span>
                            <button onClick={() => eliminarElement('materials', m.id)} className="btn-delete">Eliminar</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div className="student-view">
            <h2 className="section-title">Avisos de {cursActual}</h2>
            {avisos.filter(a => a.curs === cursActual || a.curs === "General").map(aviso => (
              <div key={aviso.id} className="aviso-card">
                <p>{aviso.text}</p>
                <small>{aviso.data}</small>
              </div>
            ))}

            <h2 className="section-title">Materials de {cursActual}</h2>
            <div className="section-wrapper">
              {materials
                .filter(m => m.categoria === cursActual && (m.nom || "").toLowerCase().includes(searchTerm.toLowerCase()))
                .map(item => (
                  <div key={item.id} className="course-item" onClick={() => window.open(item.url, '_blank')}>
                    <div className="icon-box">📄</div>
                    <div className="info-box">
                      <h3>{item.nom}</h3>
                      <p>Prem per descarregar o veure</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </main>

      <footer>
        <div className="footer-links">
          {/* Enllaç amb el teu logo d'Instagram */}
          <a href="#" aria-label="Instagram">
            <img src={logoInstagram} alt="Instagram" style={{ width: '24px', height: '24px' }} />
          </a>
          {/* Enllaç de correu amb icona */}
          <a href="mailto:serradequacions@gmail.com" aria-label="Correu" style={{ fontSize: '1.5rem' }}>✉️</a>
        </div>
        <p>© 2026 Serra d'Equacions - Tots els drets reservats</p>
      </footer>
    </div>
  );
}

export default App;