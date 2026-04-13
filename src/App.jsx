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
        // L'admin ho veu tot, l'alumne només el que és seu
        setEntregues(user.email === adminEmail ? dades : dades.filter(e => e.alumneEmail === user.email));
      });
      return () => { unsubMat(); unsubAvi(); unsubEnt(); };
    }
  }, [user]);

  // --- 3. FUNCIONS D'ALUMNE (ENTREGUES) ---
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

  // --- 4. FUNCIONS D'ADMINISTRACIÓ ---
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
    alert("🚀 Material publicat!");
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

  // --- 5. LOGICA D'AUTENTICACIÓ ---
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

  // --- VISTA: LOGIN ---
  if (!user) {
    return (
      <div className="login-container">
        <div className="login-card">
          <img src={logoMates} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
          <h2>{isRegistering ? 'Registre' : 'Inici de Sessió'}</h2>
          <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())} className="login-button" style={{background: '#fff', color: '#444', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px'}}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" style={{width: '18px'}} /> Entra amb Google
          </button>
          <form onSubmit={handleAuth}>
            <input className="login-input" type="email" placeholder="Correu" onChange={e => setEmail(e.target.value)} required />
            <input className="login-input" type="password" placeholder="Contrasenya" onChange={e => setPassword(e.target.value)} required />
            {isRegistering && (
              <select className="login-input" value={userCourse} onChange={e => setUserCourse(e.target.value)}>
                {llistaCursos.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            )}
            <button className="login-button" type="submit">{isRegistering ? 'CREAR COMPTE' : 'ENTRAR'}</button>
          </form>
          <p onClick={() => setIsRegistering(!isRegistering)} style={{marginTop: '20px', cursor: 'pointer', color: 'var(--color-logo-blau)', fontWeight: 'bold'}}>
            {isRegistering ? 'Ja tens compte? Entra' : 'Ets nou? Registra\'t'}
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
      <header>
        <div className="top-bar">
          <div className="notif-bell">🔔</div>
          <button className="logout-btn" onClick={() => signOut(auth)}>Tancar Sessió</button>
        </div>
        <img src={logoMates} alt="Logo" style={{ width: '80px' }} />
        <h1>Serra d'Equacions</h1>
        
        {realAdmin && (
          <div className="admin-controls-header">
            <select className="login-input" style={{width: '200px', margin: '10px auto'}} value={modeAdminActiu ? "admin" : "alumne"} onChange={(e) => setModeAdminActiu(e.target.value === "admin")}>
              <option value="admin">🔧 MODE GESTIÓ</option>
              <option value="alumne">🎓 VISTA ALUMNE</option>
            </select>
            {!modeAdminActiu && (
              <div className="simul-badge">
                <span>Simulant: </span>
                <select value={cursSimulat} onChange={e => setCursSimulat(e.target.value)}>
                  {llistaCursos.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}
          </div>
        )}
        <input className="search-bar" type="text" placeholder="🔍 Cerca material o tema..." onChange={e => setSearchTerm(e.target.value)} />
      </header>

      <main>
        {realAdmin && modeAdminActiu ? (
          <section className="admin-panel">
            {/* 1. TAULA D'ENTREGUES (MAGATZEM DE PDFS) */}
            <div className="admin-box full-width" style={{background: '#e0f2fe'}}>
              <h3>📥 Últimes entregues dels alumnes</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr><th>Alumne</th><th>Curs</th><th>Tasca</th><th>Data</th><th>Fitxer</th></tr>
                  </thead>
                  <tbody>
                    {entregues.sort((a,b) => b.createdAt - a.createdAt).map(en => (
                      <tr key={en.id}>
                        <td>{en.alumneEmail}</td>
                        <td>{en.curs}</td>
                        <td>{en.materialNom}</td>
                        <td>{en.dataEntrega}</td>
                        <td><a href={en.fitxerUrl} target="_blank" rel="noreferrer" className="btn-view">Veure PDF</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="admin-grid">
              {/* 2. FORMULARI AVISOS */}
              <div className="admin-box">
                <h3>📢 Crear Avís / Notificació</h3>
                <textarea value={nouAviso} onChange={e => setNouAviso(e.target.value)} placeholder="Escriu el missatge..." />
                <div className="checkbox-grid">
                  {llistaCursos.map(c => (
                    <label key={c}><input type="checkbox" checked={cursosSeleccionatsAviso.includes(c)} onChange={() => {
                      setCursosSeleccionatsAviso(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
                    }} /> {c}</label>
                  ))}
                </div>
                <button onClick={publicarAvisoMúltiple} className="btn-admin">PUBLICAR AVÍS</button>
              </div>

              {/* 3. FORMULARI MATERIAL */}
              <div className="admin-box">
                <h3>📚 Penjar Nou Recurs</h3>
                <form onSubmit={crearMaterialMúltiple}>
                  <input type="text" placeholder="Nom del recurs" value={nomMat} onChange={e => setNomMat(e.target.value)} required />
                  <input type="text" placeholder="URL (Drive, YouTube...)" value={urlMat} onChange={e => setUrlMat(e.target.value)} required />
                  <select className="login-input" value={tipusMat} onChange={e => setTipusMat(e.target.value)}>
                    {Object.keys(iconesTipus).map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <select className="login-input" value={temaExistent} onChange={e => setTemaExistent(e.target.value)}>
                    <option value="">-- Tria tema existent --</option>
                    <option value="nou">+ CREAR NOU TEMA</option>
                    {temesExistents.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {(temaExistent === "nou" || temesExistents.length === 0) && (
                    <input type="text" placeholder="Nom del nou tema" value={temaMat} onChange={e => setTemaMat(e.target.value)} required />
                  )}
                  <div className="checkbox-grid">
                    {llistaCursos.map(c => (
                      <label key={c}><input type="checkbox" checked={cursosSeleccionatsMat.includes(c)} onChange={() => {
                        setCursosSeleccionatsMat(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
                      }} /> {c}</label>
                    ))}
                  </div>
                  <button type="submit" className="btn-admin btn-green">GUARDAR RECURS</button>
                </form>
              </div>
            </div>

            {/* 4. GESTIÓ DE CONTINGUT (ACORDIONS) */}
            <div className="admin-management-section">
              <h3>📦 Inventari de continguts per curs</h3>
              {llistaCursos.map(curs => (
                <details key={curs} className="curs-accordion">
                  <summary>{curs} — ({materials.filter(m => m.categoria === curs).length} fitxers)</summary>
                  <div className="manage-group">
                    {materials.filter(m => m.categoria === curs).map(m => (
                      <div key={m.id} className="manage-item">
                        <span>{iconesTipus[m.tipus]} <strong>{m.nom}</strong> ({m.tema})</span>
                        <button onClick={() => eliminarElement('materials', m.id)} className="btn-delete">Eliminar</button>
                      </div>
                    ))}
                    {avisos.filter(a => a.curs === curs).map(a => (
                      <div key={a.id} className="manage-item aviso-item">
                        <span>📢 {a.text.substring(0, 30)}...</span>
                        <button onClick={() => eliminarElement('avisos', a.id)} className="btn-delete">Eliminar</button>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ) : (
          /* --- VISTA ALUMNE --- */
          <div className="student-view">
            <h2 className="section-title">Avisos del Professor</h2>
            <div className="avisos-container">
              {avisos.filter(a => a.curs === cursActual || a.curs === "General").length === 0 ? <p className="empty">No hi ha avisos.</p> :
                avisos.filter(a => a.curs === cursActual || a.curs === "General").map(a => (
                  <div key={a.id} className="aviso-card">
                    <p>{a.text}</p>
                    <small>{a.data}</small>
                  </div>
                ))
              }
            </div>

            <h2 className="section-title">Recursos de Matemàtiques</h2>
            {[...new Set(materialsFiltrats.map(m => m.tema || "Altres"))].map(tema => (
              <div key={tema} className="topic-block">
                <h3 className="topic-title">{tema}</h3>
                <div className="section-wrapper">
                  {materialsFiltrats.filter(m => (m.tema || "Altres") === tema).map(item => {
                    const entregaFeta = entregues.find(e => e.materialId === item.id);
                    return (
                      <div key={item.id} className="course-item">
                        <div className="icon-box" onClick={() => window.open(item.url, '_blank')}>{iconesTipus[item.tipus]}</div>
                        <div className="info-box">
                          <h3 onClick={() => window.open(item.url, '_blank')}>{item.nom}</h3>
                          {/* SISTEMA D'ENTREGA SI ÉS EXERCICI O EXAMEN */}
                          {(item.tipus === 'Exercici' || item.tipus === 'Examen') && (
                            <div className="delivery-zone">
                              {entregaFeta ? (
                                <div className="status-ok">✅ Entregat ({entregaFeta.dataEntrega})</div>
                              ) : (
                                <label className="upload-label">
                                  {uploading ? 'Pujant...' : '📤 Envia la teva feina'}
                                  <input type="file" onChange={(e) => pujarTasca(e, item.id, item.nom)} disabled={uploading} />
                                </label>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer>
        <div className="footer-links">
          <a href="https://www.instagram.com/serradequacions/" target="_blank" rel="noreferrer">
            <img src={logoInstagram} alt="Instagram" style={{ width: '24px' }} />
          </a>
          <a href="mailto:serradequacions@gmail.com">✉️ Contacte</a>
        </div>
        <p>© 2026 Serra d'Equacions | Creat per a l'aprenentatge</p>
      </footer>
    </div>
  );
}

export default App;