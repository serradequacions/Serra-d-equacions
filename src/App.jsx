import React, { useEffect, useState } from 'react';  
import { db, auth } from './firebase'; 
import { 
  collection, 
  onSnapshot, 
  doc, 
  setDoc, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp, 
  getDocs 
} from 'firebase/firestore'; 
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup 
} from 'firebase/auth';
import logoMates from './logo.png';
import logoInstagram from './logo-instagram.png'; 

function App() {
  // ESTATS DE L'USUARI
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

  // ESTATS DE L'ADMINISTRADOR
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

  const iconesTipus = {
    'Teoria': '📚',
    'Exercici': '📝',
    'Vídeo': '🎥',
    'Examen': '🏁'
  };

  // CONTROL DE SESSIÓ
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
          // Per a nous usuaris de Google que encara no tenen document a Firestore
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

  // SUBSCRIPCIÓ A DADES (FIREBASE)
  useEffect(() => {
    if (user) {
      const unsubMaterials = onSnapshot(collection(db, 'materials'), (snap) => {
        setMaterials(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });
      const unsubAvisos = onSnapshot(collection(db, 'avisos'), (snap) => {
        setAvisos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });
      return () => { unsubMaterials(); unsubAvisos(); };
    }
  }, [user]);

  // LOGIN AMB GOOGLE
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const userDoc = await getDoc(doc(db, "usuaris", result.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "usuaris", result.user.uid), {
          email: result.user.email,
          curs: '1r ESO'
        });
      }
    } catch (error) {
      alert("Error en l'accés amb Google: " + error.message);
    }
  };

  // LOGICA BREVO (EMAILS)
  const enviarEmailsBrevo = async (cursSeleccionat, textAviso) => {
    const usuarisRef = collection(db, "usuaris");
    const querySnapshot = await getDocs(usuarisRef);
    const destinataris = querySnapshot.docs
      .map(doc => doc.data())
      .filter(u => u.curs === cursSeleccionat)
      .map(u => ({ email: u.email }));

    if (destinataris.length === 0) return;

    try {
      await fetch('https://brevo-proxy.serradequacions.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destinataris, curs: cursSeleccionat, text: textAviso })
      });
    } catch (error) {
      console.error("Error enviant correus:", error);
    }
  };

  // LOGIN AMB CORREU/PASS
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "usuaris", res.user.uid), { email, curs: userCourse });
        alert("Compte creat!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // SELECCIÓ DE CURSOS (CHECKBOXES)
  const toggleCurso = (curso, tipus) => {
    if (tipus === 'aviso') {
      setCursosSeleccionatsAviso(prev => 
        prev.includes(curso) ? prev.filter(c => c !== curso) : [...prev, curso]
      );
    } else {
      setCursosSeleccionatsMat(prev => 
        prev.includes(curso) ? prev.filter(c => c !== curso) : [...prev, curso]
      );
    }
  };

  // PUBLICAR AVISOS
  const publicarAvisoMúltiple = async (e) => {
    e.preventDefault();
    const targets = cursosSeleccionatsAviso.length > 0 ? cursosSeleccionatsAviso : ["General"];
    for (const curs of targets) {
      await addDoc(collection(db, "avisos"), { 
        text: nouAviso, 
        curs: curs, 
        data: new Date().toLocaleDateString('ca-ES'), 
        createdAt: serverTimestamp() 
      });
      if (curs !== "General") enviarEmailsBrevo(curs, nouAviso);
    }
    setNouAviso(''); setCursosSeleccionatsAviso([]);
    alert("✅ Avisos publicats!");
  };

  // PENJAR MATERIAL
  const crearMaterialMúltiple = async (e) => {
    e.preventDefault();
    const temaFinal = temaExistent === "nou" || !temaExistent ? temaMat : temaExistent;
    if (!temaFinal) { alert("Has de definir un tema!"); return; }

    for (const curs of cursosSeleccionatsMat) {
      await addDoc(collection(db, "materials"), { 
        nom: nomMat, 
        url: urlMat, 
        tema: temaFinal, 
        categoria: curs, 
        tipus: tipusMat, 
        createdAt: serverTimestamp() 
      });
      enviarEmailsBrevo(curs, `S'ha afegit material nou: ${nomMat}`);
    }
    setNomMat(''); setUrlMat(''); setTemaMat(''); setTemaExistent(''); setTipusMat('Teoria'); setCursosSeleccionatsMat([]);
    alert("✅ Materials afegits!");
  };

  // ACCIONS DE GESTIÓ
  const canviarTemaMaterial = async (id, nouTema) => {
    await updateDoc(doc(db, "materials", id), { tema: nouTema });
  };

  const canviarTipusMaterial = async (id, nouTipus) => {
    await updateDoc(doc(db, "materials", id), { tipus: nouTipus });
  };

  const eliminarElement = async (col, id) => {
    if (window.confirm("Vols eliminar-ho definitivament?")) {
      await deleteDoc(doc(db, col, id));
    }
  };

  // PANTALLA DE CARREGA
  if (loading) return <div className="loader-container"><h2>Carregant Serra d'Equacions...</h2></div>;

  // LOGIN PAGE
  if (!user) {
    return (
      <div className="login-container">
        <div className="login-card">
          <img src={logoMates} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
          <h2>{isRegistering ? 'Registre Nou Alumne' : 'Accés Alumnes'}</h2>
          
          <button 
            onClick={handleGoogleSignIn} 
            className="login-button" 
            style={{backgroundColor: '#fff', color: '#444', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px'}}
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{width: '18px'}} />
            Entra amb Google
          </button>

          <div style={{margin: '10px 0', fontSize: '0.8rem', color: '#888'}}>O UTILITZA EL TEU CORREU</div>

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
          <p onClick={() => setIsRegistering(!isRegistering)} style={{marginTop: '20px', cursor: 'pointer', color: 'var(--color-logo-blau)', fontWeight: 'bold'}}>
            {isRegistering ? 'Ja tens compte? Inicia sessió' : 'No tens compte? Registra\'t'}
          </p>
        </div>
      </div>
    );
  }

  // VARIABLES DE VISTA
  const realAdmin = user.email === adminEmail;
  const cursActual = (realAdmin && !modeAdminActiu) ? cursSimulat : userData?.curs;
  const materialsFiltrats = materials.filter(m => m.categoria === cursActual && (m.nom || "").toLowerCase().includes(searchTerm.toLowerCase()));
  const temesFiltratsPerCheckboxes = [...new Set(materials.filter(m => cursosSeleccionatsMat.includes(m.categoria)).map(m => m.tema).filter(Boolean))];

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
          <div className="admin-selector-view" style={{marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
            <select 
              className="login-input" 
              style={{padding: '10px', width: '220px', marginBottom: 0}} 
              value={modeAdminActiu ? "admin" : "alumne"} 
              onChange={(e) => setModeAdminActiu(e.target.value === "admin")}
            >
              <option value="admin">🔧 MODE GESTIÓ</option>
              <option value="alumne">🎓 VISTA ALUMNE</option>
            </select>

            {!modeAdminActiu && (
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--verd-lluminos)', padding: '8px 15px', borderRadius: '50px', border: '1px solid var(--verd-base)'}}>
                <span style={{fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--verd-muntanya)'}}>SIMULAR CURS:</span>
                <select 
                  className="login-input" 
                  style={{width: '160px', marginBottom: 0, padding: '5px', fontSize: '0.85rem', border: 'none', background: 'transparent'}} 
                  value={cursSimulat} 
                  onChange={(e) => setCursSimulat(e.target.value)}
                >
                  {llistaCursos.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}
          </div>
        )}
        <input className="search-bar" type="text" placeholder="🔍 Cerca material..." onChange={e => setSearchTerm(e.target.value)} />
      </header>

      <main>
        {realAdmin && modeAdminActiu ? (
          <section className="admin-panel">
            <div className="admin-grid">
              {/* BLOC AVISOS */}
              <div className="admin-box">
                <h3>📢 Publicar Avisos</h3>
                <form onSubmit={publicarAvisoMúltiple}>
                  <textarea placeholder="Escriu l'avís aquí..." value={nouAviso} onChange={e => setNouAviso(e.target.value)} required />
                  <div className="checkbox-grid">
                    {llistaCursos.map(c => (
                      <label key={c} className="check-item"><input type="checkbox" checked={cursosSeleccionatsAviso.includes(c)} onChange={() => toggleCurso(c, 'aviso')} /> {c}</label>
                    ))}
                  </div>
                  <button type="submit" className="btn-admin">PUBLICAR AVÍS</button>
                </form>
              </div>

              {/* BLOC MATERIAL */}
              <div className="admin-box">
                <h3>📚 Penjar Material</h3>
                <form onSubmit={crearMaterialMúltiple}>
                  <input type="text" placeholder="Títol del recurs" value={nomMat} onChange={e => setNomMat(e.target.value)} required />
                  <input type="text" placeholder="Enllaç URL" value={urlMat} onChange={e => setUrlMat(e.target.value)} required />
                  
                  <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
                    <select className="login-input" style={{flex: 1, marginBottom: 0}} value={tipusMat} onChange={e => setTipusMat(e.target.value)}>
                      <option value="Teoria">📚 Teoria</option>
                      <option value="Exercici">📝 Exercici</option>
                      <option value="Vídeo">🎥 Vídeo</option>
                      <option value="Examen">🏁 Examen</option>
                    </select>

                    <select className="login-input" style={{flex: 1, marginBottom: 0}} value={temaExistent} onChange={e => setTemaExistent(e.target.value)}>
                      <option value="">-- Tema existent --</option>
                      <option value="nou">+ NOU TEMA</option>
                      {temesFiltratsPerCheckboxes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {(temaExistent === "nou" || (cursosSeleccionatsMat.length > 0 && temesFiltratsPerCheckboxes.length === 0)) && (
                    <input className="login-input" type="text" placeholder="Escriu el nom del nou tema" value={temaMat} onChange={e => setTemaMat(e.target.value)} required />
                  )}

                  <div className="checkbox-grid">
                    {llistaCursos.map(c => (
                      <label key={c} className="check-item"><input type="checkbox" checked={cursosSeleccionatsMat.includes(c)} onChange={() => toggleCurso(c, 'material')} /> {c}</label>
                    ))}
                  </div>
                  <button type="submit" className="btn-admin btn-green">GUARDAR RECURS</button>
                </form>
              </div>
            </div>

            {/* SECCIÓ DE GESTIÓ */}
            <div className="admin-management-section">
              <h3 className="section-title-admin">📦 Gestió de Contingut Penjat</h3>
              <div className="accordion-wrapper">
                {llistaCursos.map(curs => {
                  const temesDaquestCurs = [...new Set(materials.filter(m => m.categoria === curs).map(m => m.tema).filter(Boolean))];
                  return (
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
                          <h4>Materials d'aquest curs</h4>
                          {materials.filter(m => m.categoria === curs).map(m => (
                            <div key={m.id} className="manage-item" style={{flexDirection: 'column', gap: '10px', padding: '15px'}}>
                              <div style={{display: 'flex', alignItems: 'center', gap: '10px', width: '100%'}}>
                                <span style={{fontSize: '1.2rem'}}>{iconesTipus[m.tipus] || '📄'}</span>
                                <strong style={{flexGrow: 1}}>{m.nom}</strong>
                              </div>
                              <div style={{width: '100%', display: 'flex', gap: '5px'}}>
                                <select 
                                  className="login-input" 
                                  style={{flex: 1, fontSize: '0.8rem', padding: '8px', marginBottom: '0'}} 
                                  value={m.tema || ""} 
                                  onChange={(e) => canviarTemaMaterial(m.id, e.target.value)}
                                >
                                  <option value="">Canviar Tema...</option>
                                  {temesDaquestCurs.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                                <select 
                                  className="login-input" 
                                  style={{flex: 1, fontSize: '0.8rem', padding: '8px', marginBottom: '0'}} 
                                  value={m.tipus || "Teoria"} 
                                  onChange={(e) => canviarTipusMaterial(m.id, e.target.value)}
                                >
                                  {Object.keys(iconesTipus).map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                                <button onClick={() => eliminarElement('materials', m.id)} className="btn-delete" style={{padding: '5px 12px'}}>🗑️</button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="manage-group">
                          <h4>Avisos enviats</h4>
                          {avisos.filter(a => a.curs === curs).map(a => (
                            <div key={a.id} className="manage-item">
                              <span style={{fontSize: '0.85rem'}}>{a.text.substring(0, 40)}...</span>
                              <button onClick={() => eliminarElement('avisos', a.id)} className="btn-delete">Eliminar</button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          </section>
        ) : (
          /* VISTA ALUMNE / SIMULACIÓ */
          <div className="student-view">
            <h2 className="section-title">Avisos del Professorat</h2>
            {avisos.filter(a => a.curs === cursActual || a.curs === "General").map(a => (
              <div key={a.id} className="aviso-card">
                <p>{a.text}</p>
                <small>{a.data}</small>
              </div>
            ))}

            <h2 className="section-title">Recursos de {cursActual}</h2>
            {[...new Set(materialsFiltrats.map(m => m.tema || "Altres"))].map(tema => (
              <div key={tema} style={{marginBottom: '40px'}}>
                <h3 className="topic-title" style={{fontSize: '1.8rem', color: 'var(--verd-muntanya)', borderBottom: '2px solid var(--verd-lluminos)', paddingBottom: '10px', marginBottom: '20px'}}>{tema}</h3>
                <div className="section-wrapper">
                  {materialsFiltrats.filter(m => (m.tema || "Altres") === tema).map(item => (
                    <div key={item.id} className="course-item" onClick={() => window.open(item.url, '_blank')}>
                      <div className="icon-box">{iconesTipus[item.tipus] || '📄'}</div>
                      <div className="info-box">
                        <h3>{item.nom}</h3>
                        <p>Fes clic per obrir el recurs ({item.tipus})</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {materialsFiltrats.length === 0 && <p style={{textAlign: 'center', opacity: 0.6}}>No s'ha trobat cap material per a aquest curs.</p>}
          </div>
        )}
      </main>

      <footer>
        <div className="footer-links">
          <a href="https://www.instagram.com/serradequacions/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img src={logoInstagram} alt="Instagram" style={{ width: '24px', height: '24px' }} />
          </a>
          <a href="mailto:serradequacions@gmail.com" aria-label="Correu" style={{ fontSize: '1.5rem' }}>✉️</a>
        </div>
        <p>© 2026 Serra d'Equacions | Creat per a l'aprenentatge</p>
      </footer>
    </div>
  );
}

export default App;