import React, { useEffect, useState } from 'react';  
import { db, auth, storage } from './firebase'; 
import { 
  collection, onSnapshot, doc, setDoc, getDoc, addDoc, updateDoc, deleteDoc, serverTimestamp, getDocs 
} from 'firebase/firestore'; 
import { 
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup 
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; 
import logoMates from './logo.png';
import logoInstagram from './logo-instagram.png'; 

function App() {
  // --- ESTATS DE L'USUARI I APP ---
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userCourse, setUserCourse] = useState('1r ESO');
  const [searchTerm, setSearchTerm] = useState('');
  const [materials, setMaterials] = useState([]);
  const [avisos, setAvisos] = useState([]); 
  const [entregues, setEntregues] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // --- ESTATS DE L'ADMINISTRADOR ---
  const [modeAdminActiu, setModeAdminActiu] = useState(true); 
  const [cursSimulat, setCursSimulat] = useState('1r ESO');
  const [nouAviso, setNouAviso] = useState('');
  const [cursosSeleccionatsAviso, setCursosSeleccionatsAviso] = useState([]);
  const [nomMat, setNomMat] = useState('');
  const [urlMat, setUrlMat] = useState('');
  const [temaMat, setTemaMat] = useState(''); 
  const [temaExistent, setTemaExistent] = useState(''); 
  const [tipusMat, setTipusMat] = useState('Teoria'); 
  const [cursosSeleccionatsMat, setCursosSeleccionatsMat] = useState([]);

  const adminEmail = "serradequacions@gmail.com"; 
  const llistaCursos = [
    "1r ESO", "2n ESO", "3r ESO", "4t ESO A", "4t ESO B", 
    "1r BATX CCSS", "1r BATX CIEN.", "1r BATX GENERAL", 
    "2n BATX CCSS", "2n BATX CIEN"
  ];

  const iconesTipus = { 'Teoria': '📚', 'Exercici': '📝', 'Vídeo': '🎥', 'Examen': '🏁' };

  // --- 1. CONTROL DE SESSIÓ ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const docSnap = await getDoc(doc(db, "usuaris", currentUser.uid));
        if (docSnap.exists()) {
          const dades = docSnap.data();
          setUserData(dades);
          setCursSimulat(dades.curs || '1r ESO');
        } else {
          setUserData({ email: currentUser.email, curs: '1r ESO' });
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // --- 2. SUBSCRIPCIÓ A DADES EN TEMPS REAL ---
  useEffect(() => {
    if (user) {
      const unsubMat = onSnapshot(collection(db, 'materials'), (snap) => {
        setMaterials(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });
      const unsubAvi = onSnapshot(collection(db, 'avisos'), (snap) => {
        setAvisos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });
      const unsubEnt = onSnapshot(collection(db, 'entregues'), (snap) => {
        const dades = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setEntregues(user.email === adminEmail ? dades : dades.filter(e => e.alumneEmail === user.email));
      });
      return () => { unsubMat(); unsubAvi(); unsubEnt(); };
    }
  }, [user]);

  // --- 3. FUNCIONS D'ENVIAMENT (BREVO) ---
  const enviarEmailsBrevo = async (curs, text) => {
    try {
      const usuarisSnap = await getDocs(collection(db, "usuaris"));
      const destinataris = usuarisSnap.docs
        .map(d => d.data())
        .filter(u => u.curs === curs)
        .map(u => ({ email: u.email }));

      if (destinataris.length > 0) {
        await fetch('https://brevo-proxy.serradequacions.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ destinataris, curs, text })
        });
      }
    } catch (err) { console.error("Error Brevo:", err); }
  };

  // --- 4. FUNCIONS D'ALUMNE (ENTREGUES STORAGE) ---
  const pujarTasca = async (e, materialId, materialNom) => {
    const fitxer = e.target.files[0];
    if (!fitxer) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `entregues/${user.uid}_${materialId}_${fitxer.name}`);
      await uploadBytes(storageRef, fitxer);
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, "entregues"), {
        materialId,
        materialNom,
        alumneEmail: user.email,
        alumneNom: user.displayName || user.email,
        curs: userData.curs,
        fitxerUrl: downloadURL,
        dataEntrega: new Date().toLocaleString('ca-ES'),
        createdAt: serverTimestamp()
      });
      alert("✅ Tasca entregada correctament!");
    } catch (error) {
      alert("Error en la pujada: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  // --- 5. FUNCIONS D'ADMINISTRACIÓ ---
  const crearMaterialMúltiple = async (e) => {
    e.preventDefault();
    const temaFinal = temaExistent === "nou" || !temaExistent ? temaMat : temaExistent;
    if (!temaFinal) return alert("Defineix un tema!");

    for (const curs of cursosSeleccionatsMat) {
      await addDoc(collection(db, "materials"), { 
        nom: nomMat, url: urlMat, tema: temaFinal, categoria: curs, tipus: tipusMat, createdAt: serverTimestamp() 
      });
      enviarEmailsBrevo(curs, `Nou material: ${nomMat}`);
    }
    setNomMat(''); setUrlMat(''); setTemaMat(''); setTemaExistent(''); setCursosSeleccionatsMat([]);
    alert("🚀 Material publicat i correus enviats!");
  };

  const publicarAvisoMúltiple = async (e) => {
    e.preventDefault();
    const targets = cursosSeleccionatsAviso.length > 0 ? cursosSeleccionatsAviso : ["General"];
    for (const curs of targets) {
      await addDoc(collection(db, "avisos"), { 
        text: nouAviso, curs, data: new Date().toLocaleDateString('ca-ES'), createdAt: serverTimestamp() 
      });
      if (curs !== "General") enviarEmailsBrevo(curs, nouAviso);
    }
    setNouAviso(''); setCursosSeleccionatsAviso([]);
    alert("📢 Avisos enviats!");
  };

  const eliminarElement = async (col, id) => {
    if (window.confirm("Vols eliminar-ho definitivament?")) {
      await deleteDoc(doc(db, col, id));
    }
  };

  // --- 6. AUTENTICACIÓ ---
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "usuaris", res.user.uid), { email, curs: userCourse });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) { alert(err.message); }
  };

  if (loading) return <div className="loader-container"><h2>Carregant Serra d'Equacions...</h2></div>;

  // --- VISTA LOGIN ---
  if (!user) {
    return (
      <div className="login-container">
        <div className="login-card">
          <img src={logoMates} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
          <h2>{isRegistering ? 'Registre Nou Usuari' : 'Inici de Sessió'}</h2>
          <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())} className="login-button google-auth">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" /> Entra amb Google
          </button>
          <div className="separator">o amb el teu correu</div>
          <form onSubmit={handleAuth}>
            <input className="login-input" type="email" placeholder="Correu electrònic" onChange={e => setEmail(e.target.value)} required />
            <input className="login-input" type="password" placeholder="Contrasenya" onChange={e => setPassword(e.target.value)} required />
            {isRegistering && (
              <select className="login-input" value={userCourse} onChange={e => setUserCourse(e.target.value)}>
                {llistaCursos.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            )}
            <button className="login-button" type="submit">{isRegistering ? 'CREAR COMPTE' : 'ENTRAR'}</button>
          </form>
          <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-auth-text">
            {isRegistering ? 'Ja tens compte? Entra' : 'Ets nou? Registra\'t aquí'}
          </p>
        </div>
      </div>
    );
  }

  const realAdmin = user.email === adminEmail;
  const cursActual = (realAdmin && !modeAdminActiu) ? cursSimulat : userData?.curs;
  const materialsFiltrats = materials.filter(m => m.categoria === cursActual && (m.nom || "").toLowerCase().includes(searchTerm.toLowerCase()));
  const temesExistents = [...new Set(materials.filter(m => cursosSeleccionatsMat.includes(m.categoria)).map(m => m.tema))];

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <div className="top-nav">
          <div className="logo-section">
            <img src={logoMates} alt="Logo" className="header-logo" />
            <div>
              <h1>Serra d'Equacions</h1>
              <p className="user-badge">{user.email} | {userData?.curs || 'Admin'}</p>
            </div>
          </div>
          <button className="logout-btn" onClick={() => signOut(auth)}>Tancar Sessió</button>
        </div>
        
        {realAdmin && (
          <div className="admin-quick-nav">
            <select className="mode-toggle" value={modeAdminActiu ? "admin" : "alumne"} onChange={(e) => setModeAdminActiu(e.target.value === "admin")}>
              <option value="admin">🔧 PANEL DE GESTIÓ</option>
              <option value="alumne">🎓 VISTA ALUMNE</option>
            </select>
            {!modeAdminActiu && (
              <div className="simulator-box">
                <span>Simulant curs:</span>
                <select value={cursSimulat} onChange={e => setCursSimulat(e.target.value)}>
                  {llistaCursos.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}
          </div>
        )}
        <div className="search-container">
          <input className="search-bar" type="text" placeholder="🔍 Cerca temes, exercicis, vídeos..." onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </header>

      <main className="content-area">
        {realAdmin && modeAdminActiu ? (
          <section className="admin-dashboard">
            {/* TAULA D'ENTREGUES (IMPORTANT!) */}
            <div className="dashboard-card full-width">
              <div className="card-header">
                <h3>📥 Bústia d'Entregues (PDFs Alumnes)</h3>
              </div>
              <div className="table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Alumne</th>
                      <th>Curs</th>
                      <th>Activitat</th>
                      <th>Fitxer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entregues.sort((a,b) => b.createdAt - a.createdAt).map(en => (
                      <tr key={en.id}>
                        <td>{en.dataEntrega}</td>
                        <td className="bold">{en.alumneEmail}</td>
                        <td><span className="badge-curs">{en.curs}</span></td>
                        <td>{en.materialNom}</td>
                        <td><a href={en.fitxerUrl} target="_blank" rel="noreferrer" className="view-link">Obrir PDF</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="dashboard-grid">
              {/* FORMULARI AVISOS */}
              <div className="dashboard-card">
                <h3>📢 Publicar Avís</h3>
                <textarea className="admin-input" value={nouAviso} onChange={e => setNouAviso(e.target.value)} placeholder="Escriu aquí el missatge per als alumnes..." />
                <p className="small-label">Enviar a:</p>
                <div className="checkbox-selector">
                  {llistaCursos.map(c => (
                    <label key={c} className="check-item">
                      <input type="checkbox" checked={cursosSeleccionatsAviso.includes(c)} onChange={() => {
                        setCursosSeleccionatsAviso(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
                      }} /> {c}
                    </label>
                  ))}
                </div>
                <button onClick={publicarAvisoMúltiple} className="btn-primary">ENVIAR AVÍS</button>
              </div>

              {/* FORMULARI MATERIAL */}
              <div className="dashboard-card">
                <h3>📚 Penjar Nou Material</h3>
                <form onSubmit={crearMaterialMúltiple} className="admin-form">
                  <input type="text" placeholder="Títol del recurs" value={nomMat} onChange={e => setNomMat(e.target.value)} required />
                  <input type="text" placeholder="Enllaç (Drive/Web)" value={urlMat} onChange={e => setUrlMat(e.target.value)} required />
                  
                  <div className="form-row">
                    <select value={tipusMat} onChange={e => setTipusMat(e.target.value)}>
                      {Object.keys(iconesTipus).map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    
                    <select value={temaExistent} onChange={e => setTemaExistent(e.target.value)}>
                      <option value="">-- Tria tema --</option>
                      <option value="nou">+ CREAR NOU</option>
                      {temesExistents.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {(temaExistent === "nou" || temesExistents.length === 0) && (
                    <input type="text" placeholder="Nom del nou tema" value={temaMat} onChange={e => setTemaMat(e.target.value)} required />
                  )}

                  <p className="small-label">Cursos destinataris:</p>
                  <div className="checkbox-selector">
                    {llistaCursos.map(c => (
                      <label key={c} className="check-item">
                        <input type="checkbox" checked={cursosSeleccionatsMat.includes(c)} onChange={() => {
                          setCursosSeleccionatsMat(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
                        }} /> {c}
                      </label>
                    ))}
                  </div>
                  <button type="submit" className="btn-primary btn-success">PUBLICAR RECURS</button>
                </form>
              </div>
            </div>

            {/* GESTIÓ D'INVENTARI (ACORDIONS) */}
            <div className="dashboard-card full-width">
              <h3>📦 Inventari de continguts</h3>
              <div className="accordion-container">
                {llistaCursos.map(curs => (
                  <details key={curs} className="admin-accordion">
                    <summary>
                      <strong>{curs}</strong> 
                      <span>({materials.filter(m => m.categoria === curs).length} fitxers)</span>
                    </summary>
                    <div className="accordion-content">
                      {materials.filter(m => m.categoria === curs).map(m => (
                        <div key={m.id} className="manage-row">
                          <span>{iconesTipus[m.tipus]} <strong>{m.nom}</strong> <small>({m.tema})</small></span>
                          <button onClick={() => eliminarElement('materials', m.id)} className="btn-mini-delete">Eliminar</button>
                        </div>
                      ))}
                      {avisos.filter(a => a.curs === curs).map(a => (
                        <div key={a.id} className="manage-row aviso-row">
                          <span>📢 {a.text.substring(0, 40)}...</span>
                          <button onClick={() => eliminarElement('avisos', a.id)} className="btn-mini-delete">Eliminar</button>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* --- VISTA ALUMNE --- */
          <div className="student-layout">
            <section className="avisos-section">
              <h2 className="section-title">📢 Avisos de classe</h2>
              <div className="avisos-grid">
                {avisos.filter(a => a.curs === cursActual || a.curs === "General").length === 0 ? 
                  <p className="no-data">No hi ha avisos recents per a {cursActual}.</p> :
                  avisos.filter(a => a.curs === cursActual || a.curs === "General").map(a => (
                    <div key={a.id} className="aviso-card">
                      <div className="aviso-header">
                        <span className="aviso-tag">{a.curs}</span>
                        <span className="aviso-date">{a.data}</span>
                      </div>
                      <p>{a.text}</p>
                    </div>
                  ))
                }
              </div>
            </section>

            <section className="materials-section">
              <h2 className="section-title">📚 Recursos de {cursActual}</h2>
              {[...new Set(materialsFiltrats.map(m => m.tema || "General"))].sort().map(tema => (
                <div key={tema} className="topic-group">
                  <h3 className="topic-header">{tema}</h3>
                  <div className="materials-list">
                    {materialsFiltrats.filter(m => (m.tema || "General") === tema).map(item => {
                      const entregaFeta = entregues.find(e => e.materialId === item.id);
                      return (
                        <div key={item.id} className="material-card">
                          <div className="material-main" onClick={() => window.open(item.url, '_blank')}>
                            <div className="type-icon">{iconesTipus[item.tipus]}</div>
                            <div className="material-info">
                              <h4>{item.nom}</h4>
                              <p>{item.tipus}</p>
                            </div>
                          </div>
                          
                          {/* ZONA D'ENTREGA PER A EXERCICIS I EXAMENS */}
                          {(item.tipus === 'Exercici' || item.tipus === 'Examen') && (
                            <div className="delivery-box">
                              {entregaFeta ? (
                                <div className="delivery-status ok">
                                  <span>✅ Entregat</span>
                                  <small>{entregaFeta.dataEntrega}</small>
                                </div>
                              ) : (
                                <label className="upload-trigger">
                                  {uploading ? 'Pujant...' : '📤 Enviar la meva feina'}
                                  <input type="file" onChange={(e) => pujarTasca(e, item.id, item.nom)} disabled={uploading} style={{display: 'none'}} />
                                </label>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://www.instagram.com/serradequacions/" target="_blank" rel="noreferrer" className="ig-link">
              <img src={logoInstagram} alt="Instagram" /> @serradequacions
            </a>
            <a href="mailto:serradequacions@gmail.com" className="mail-link">✉️ Contacte</a>
          </div>
          <div className="footer-info">
            <p>© 2026 Serra d'Equacions | Matemàtiques per a tothom</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;