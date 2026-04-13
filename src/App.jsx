import React, { useEffect, useState, useMemo, useCallback } from 'react';  
import { db, auth } from './firebase'; 
import { 
  collection, onSnapshot, doc, setDoc, getDoc, addDoc, updateDoc, 
  deleteDoc, serverTimestamp, getDocs, query, orderBy, where 
} from 'firebase/firestore'; 
import { 
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, 
  signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail 
} from 'firebase/auth';

// Actius visuals
import logoMates from './logo.png';
import logoInstagram from './logo-instagram.png'; 

/**
 * CONFIGURACIÓ DE L'ESTIL GLOBAL (CSS-IN-JS)
 * Per garantir que el build no falli per rutes de CSS i per augmentar la robustesa.
 */
const CSS_STYLES = `
  :root {
    --p-color: #2563eb; --p-dark: #1e40af; --s-color: #64748b;
    --success: #22c55e; --danger: #ef4444; --warn: #f59e0b;
    --bg: #f1f5f9; --card: #ffffff; --text: #0f172a; --muted: #64748b;
  }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: 'Segoe UI', Roboto, sans-serif; background: var(--bg); color: var(--text); }
  
  /* Animacions */
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .fade-in { animation: fadeIn 0.4s ease-out; }

  /* Header i Nav */
  .navbar { background: var(--card); border-bottom: 1px solid #e2e8f0; padding: 10px 5%; sticky: top; top: 0; z-index: 1000; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .nav-box { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; }
  .logo-area { display: flex; align-items: center; gap: 12px; }
  .logo-area img { height: 45px; width: auto; }
  .user-pill { background: #eff6ff; padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; color: var(--p-color); font-weight: 600; }

  /* Forms i Inputs */
  .search-container { max-width: 800px; margin: 20px auto; padding: 0 20px; }
  .main-input { width: 100%; padding: 12px 20px; border: 2px solid #e2e8f0; border-radius: 12px; font-size: 1rem; transition: 0.3s; }
  .main-input:focus { border-color: var(--p-color); outline: none; box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1); }

  /* Grid de Continguts */
  .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
  .admin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; }
  .panel-card { background: var(--card); border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; }
  .card-h { font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; color: var(--p-color); display: flex; align-items: center; gap: 10px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; }

  /* Botons */
  .btn { padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; border: none; display: inline-flex; align-items: center; gap: 8px; }
  .btn-p { background: var(--p-color); color: white; }
  .btn-p:hover { background: var(--p-dark); transform: translateY(-1px); }
  .btn-out { background: transparent; border: 1px solid #cbd5e1; color: var(--muted); }
  .btn-del { color: var(--danger); background: #fee2e2; padding: 5px 10px; font-size: 0.8rem; }

  /* Vista Alumne */
  .unit-section { margin-bottom: 40px; }
  .unit-title { font-size: 1.4rem; color: #334155; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid var(--p-color); }
  .resource-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; }
  .resource-item { background: white; padding: 15px; border-radius: 12px; display: flex; align-items: center; gap: 15px; cursor: pointer; transition: 0.2s; border: 1px solid #f1f5f9; }
  .resource-item:hover { border-color: var(--p-color); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); transform: scale(1.02); }
  .icon-box { width: 45px; height: 45px; background: #f8fafc; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; }

  /* Avisos */
  .notice-box { background: #fffbeb; border: 1px solid #fef3c7; border-radius: 12px; padding: 15px; margin-bottom: 20px; border-left: 5px solid var(--warn); }
  
  /* Auth */
  .auth-bg { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
  .auth-card { background: white; padding: 40px; border-radius: 24px; width: 100%; max-width: 420px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); text-align: center; }
  
  /* Utils */
  .loading-spinner { border: 4px solid #f3f3f3; border-top: 4px solid var(--p-color); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 20px auto; }
  @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  .checkbox-group { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 10px; background: #f8fafc; border-radius: 8px; margin: 10px 0; max-height: 150px; overflow-y: auto; }
`;

function App() {
  // -------------------------------------------------------------------------
  // 1. ESTATS DE L'APLICACIÓ
  // -------------------------------------------------------------------------
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegMode, setIsRegMode] = useState(false);
  
  // Inputs d'usuari
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('1r ESO');
  const [searchTerm, setSearchTerm] = useState('');

  // Dades de col·leccions
  const [materials, setMaterials] = useState([]);
  const [avisos, setAvisos] = useState([]);
  const [systemUsers, setSystemUsers] = useState([]);

  // Estats d'Administració
  const [isAdminView, setIsAdminView] = useState(true);
  const [simulatedCourse, setSimulatedCourse] = useState('1r ESO');
  const [newNoticeText, setNewNoticeText] = useState('');
  const [noticeTargetCourses, setNoticeTargetCourses] = useState([]);
  const [matName, setMatName] = useState('');
  const [matUrl, setMatUrl] = useState('');
  const [matCategory, setMatCategory] = useState('Teoria');
  const [matTheme, setMatTheme] = useState('');
  const [matExistingTheme, setMatExistingTheme] = useState('');
  const [matTargetCourses, setMatTargetCourses] = useState([]);

  // Constants de configuració
  const ADMIN_EMAIL = "serradequacions@gmail.com";
  const CURSOS = [
    "1r ESO", "2n ESO", "3r ESO", "4t ESO A", "4t ESO B", 
    "1r BATX CCSS", "1r BATX CIEN.", "1r BATX GENERAL", 
    "2n BATX CCSS", "2n BATX CIEN"
  ];
  const ICONS = { 'Teoria': '📚', 'Exercici': '📝', 'Vídeo': '🎥', 'Examen': '🏁', 'Default': '📄' };

  // -------------------------------------------------------------------------
  // 2. EFECTES I SUBSCRIPCIONS
  // -------------------------------------------------------------------------
  useEffect(() => {
    // Injectar CSS dinàmicament al document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = CSS_STYLES;
    document.head.appendChild(styleSheet);

    // Gestió d'autenticació
    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        const uDoc = await getDoc(doc(db, "usuaris", u.uid));
        if (uDoc.exists()) {
          const d = uDoc.data();
          setUserData(d);
          setSimulatedCourse(d.curs || '1r ESO');
        } else {
          // Fallback per a loguejos nous via Google
          const fallback = { email: u.email, curs: '1r ESO', joined: new Date() };
          setUserData(fallback);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setIsLoading(false);
    });

    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!user) return;

    // Subscripció a Materials
    const qMat = query(collection(db, 'materials'), orderBy('createdAt', 'desc'));
    const unsubMat = onSnapshot(qMat, (snap) => {
      setMaterials(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // Subscripció a Avisos
    const qAvi = query(collection(db, 'avisos'), orderBy('createdAt', 'desc'));
    const unsubAvi = onSnapshot(qAvi, (snap) => {
      setAvisos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // Subscripció a Usuaris (Només per a l'admin)
    if (user.email === ADMIN_EMAIL) {
      const unsubUsr = onSnapshot(collection(db, 'usuaris'), (snap) => {
        setSystemUsers(snap.docs.map(d => d.data()));
      });
      return () => { unsubMat(); unsubAvi(); unsubUsr(); };
    }

    return () => { unsubMat(); unsubAvi(); };
  }, [user]);

  // -------------------------------------------------------------------------
  // 3. LÒGICA DE FUNCIONS I HANDLERS
  // -------------------------------------------------------------------------
  const triggerEmailAPI = async (curs, missatge) => {
    try {
      const usersInCourse = systemUsers.filter(u => u.curs === curs).map(u => ({ email: u.email }));
      if (usersInCourse.length === 0) return;

      await fetch('https://brevo-proxy.serradequacions.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destinataris: usersInCourse, curs, text: missatge })
      });
    } catch (e) { console.error("Error en el servei de notificacions:", e); }
  };

  const handleAuthAction = async (e) => {
    e.preventDefault();
    try {
      if (isRegMode) {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "usuaris", cred.user.uid), {
          email, curs: selectedCourse, uid: cred.user.uid, createdAt: serverTimestamp()
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      alert(`Error d'accés: ${err.message}`);
    }
  };

  const handleCreateMaterial = async (e) => {
    e.preventDefault();
    const finalTheme = (matExistingTheme === "nou" || !matExistingTheme) ? matTheme : matExistingTheme;
    
    if (!finalTheme || matTargetCourses.length === 0) {
      return alert("Si us plau, omple el tema i selecciona almenys un curs.");
    }

    try {
      for (const curs of matTargetCourses) {
        await addDoc(collection(db, "materials"), {
          nom: matName, url: matUrl, tema: finalTheme, 
          categoria: curs, tipus: matCategory, createdAt: serverTimestamp()
        });
        triggerEmailAPI(curs, `S'ha penjat un nou recurs: ${matName}`);
      }
      setMatName(''); setMatUrl(''); setMatTheme(''); setMatTargetCourses([]);
      alert("✅ Material publicat amb èxit.");
    } catch (err) { alert(err.message); }
  };

  const handlePostNotice = async (e) => {
    e.preventDefault();
    const targets = noticeTargetCourses.length > 0 ? noticeTargetCourses : ["General"];
    
    try {
      for (const curs of targets) {
        await addDoc(collection(db, "avisos"), {
          text: newNoticeText, curs, data: new Date().toLocaleDateString('ca-ES'), createdAt: serverTimestamp()
        });
        if (curs !== "General") triggerEmailAPI(curs, `NOU AVÍS: ${newNoticeText}`);
      }
      setNewNoticeText(''); setNoticeTargetCourses([]);
      alert("📢 Avís enviat a tots els grups seleccionats.");
    } catch (err) { alert(err.message); }
  };

  const deleteDocument = async (coll, id) => {
    if (window.confirm("Aquesta acció eliminarà el document de forma permanent. Vols continuar?")) {
      try {
        await deleteDoc(doc(db, coll, id));
      } catch (err) { alert("Error al eliminar: " + err.message); }
    }
  };

  // -------------------------------------------------------------------------
  // 4. LOGICA DE FILTRATGE I DERIVATS (MEMOIZED)
  // -------------------------------------------------------------------------
  const isRealAdmin = useMemo(() => user?.email === ADMIN_EMAIL, [user]);
  
  const currentViewContext = useMemo(() => {
    if (isRealAdmin && !isAdminView) return simulatedCourse;
    return userData?.curs || '1r ESO';
  }, [isRealAdmin, isAdminView, simulatedCourse, userData]);

  const filteredMaterials = useMemo(() => {
    return materials.filter(m => 
      m.categoria === currentViewContext && 
      (m.nom || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [materials, currentViewContext, searchTerm]);

  const uniqueThemes = useMemo(() => {
    const list = materials
      .filter(m => matTargetCourses.includes(m.categoria))
      .map(m => m.tema);
    return [...new Set(list)].sort();
  }, [materials, matTargetCourses]);

  // -------------------------------------------------------------------------
  // 5. RENDERITZAT DE COMPONENTS
  // -------------------------------------------------------------------------
  if (isLoading) {
    return (
      <div className="auth-bg">
        <div className="auth-card">
          <div className="loading-spinner"></div>
          <p>Connectant amb Serra d'Equacions...</p>
        </div>
      </div>
    );
  }

  // PANTALLA D'AUTENTICACIÓ
  if (!user) {
    return (
      <div className="auth-bg">
        <div className="auth-card fade-in">
          <img src={logoMates} alt="Logo" style={{width:'100px', marginBottom: '10px'}} />
          <h1 style={{fontSize: '1.6rem', margin: '0 0 10px 0'}}>Serra d'Equacions</h1>
          <p style={{color: '#64748b', marginBottom: '30px'}}>Aula Virtual de Matemàtiques</p>
          
          <button className="btn btn-out" style={{width:'100%', marginBottom:'20px'}} onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="" />
            Entra amb Google Workspace
          </button>

          <div style={{margin: '20px 0', color:'#cbd5e1', fontSize:'0.8rem'}}>O AMB EL TEU CORREU</div>

          <form onSubmit={handleAuthAction}>
            <input className="main-input" style={{marginBottom:'12px'}} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
            <input className="main-input" style={{marginBottom:'12px'}} type="password" placeholder="Contrasenya" onChange={e => setPassword(e.target.value)} required />
            
            {isRegMode && (
              <div style={{textAlign:'left', marginBottom:'15px'}}>
                <label style={{fontSize:'0.8rem', fontWeight:'600', color:'#64748b'}}>TRIA EL TEU CURS:</label>
                <select className="main-input" value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
                  {CURSOS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}
            
            <button className="btn btn-p" style={{width:'100%', justifyContent:'center'}} type="submit">
              {isRegMode ? 'CREAR EL MEU COMPTE' : 'INICIAR SESSIÓ'}
            </button>
          </form>

          <p onClick={() => setIsRegMode(!isRegMode)} style={{marginTop:'25px', cursor:'pointer', color:'var(--p-color)', fontWeight:'600', fontSize:'0.9rem'}}>
            {isRegMode ? 'Ja ets usuari? Entra aquí' : 'No tens compte? Registra\'t gratis'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-box">
          <div className="logo-area">
            <img src={logoMates} alt="Logo" />
            <div>
              <h2 style={{margin:0, fontSize: '1.1rem'}}>Serra d'Equacions</h2>
              <div className="user-pill">{user.email}</div>
            </div>
          </div>
          
          <div style={{display:'flex', gap:'12px'}}>
            {isRealAdmin && (
              <button 
                className="btn" 
                onClick={() => setIsAdminMode(!isAdminMode)}
                style={{background: isAdminMode ? '#fee2e2' : '#dcfce7', color: isAdminMode ? '#b91c1c' : '#15803d'}}
              >
                {isAdminMode ? '👁️ MODO ALUMNE' : '🛠️ GESTIÓ'}
              </button>
            )}
            <button className="btn btn-out" onClick={() => signOut(auth)}>Surt</button>
          </div>
        </div>
      </nav>

      {/* CERCADOR */}
      <div className="search-container">
        <input 
          className="main-input fade-in" 
          placeholder="🔍 Cerca temes, vídeos o exàmens..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <main className="container">
        {isRealAdmin && isAdminMode ? (
          /* ==========================================================
             PANEL D'ADMINISTRACIÓ (LOGICA DE CONTROL)
             ========================================================== */
          <div className="admin-grid fade-in">
            
            {/* CARD: PUBLICACIÓ D'AVISOS */}
            <div className="panel-card">
              <div className="card-h">📢 Publicar Avís Urgent</div>
              <form onSubmit={handlePostNotice}>
                <textarea 
                  className="main-input" 
                  style={{minHeight:'100px', marginBottom:'15px', resize:'none'}}
                  placeholder="Quin missatge vols enviar avui?"
                  value={newNoticeText}
                  onChange={e => setNewNoticeText(e.target.value)}
                  required
                />
                <label style={{fontSize:'0.8rem', fontWeight:'700'}}>ENVIAR A:</label>
                <div className="checkbox-group">
                  {CURSOS.map(c => (
                    <label key={c} style={{display:'flex', gap:'8px', fontSize:'0.8rem'}}>
                      <input type="checkbox" checked={noticeTargetCourses.includes(c)} onChange={() => {
                        setNoticeTargetCourses(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
                      }} /> {c}
                    </label>
                  ))}
                </div>
                <button type="submit" className="btn btn-p" style={{width:'100%', justifyContent:'center', marginTop:'10px'}}>PUBLICAR I NOTIFICAR</button>
              </form>
            </div>

            {/* CARD: CREACIÓ DE MATERIALS */}
            <div className="panel-card">
              <div className="card-h">📚 Afegir Nou Material</div>
              <form onSubmit={handleCreateMaterial}>
                <input className="main-input" style={{marginBottom:'10px'}} placeholder="Títol del recurs" value={matName} onChange={e => setMatName(e.target.value)} required />
                <input className="main-input" style={{marginBottom:'10px'}} placeholder="URL (Drive, YouTube...)" value={matUrl} onChange={e => setMatUrl(e.target.value)} required />
                
                <div style={{display:'flex', gap:'10px', marginBottom:'10px'}}>
                  <select className="main-input" value={matCategory} onChange={e => setMatCategory(e.target.value)}>
                    {Object.keys(ICONS).filter(k => k !== 'Default').map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                  
                  <select className="main-input" value={matExistingTheme} onChange={e => setMatExistingTheme(e.target.value)}>
                    <option value="">-- Tema --</option>
                    <option value="nou">+ NOU TEMA</option>
                    {uniqueThemes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {(matExistingTheme === "nou" || uniqueThemes.length === 0) && (
                  <input className="main-input" style={{marginBottom:'10px'}} placeholder="Escriu el nom del nou tema" value={matTheme} onChange={e => setMatTheme(e.target.value)} required />
                )}

                <label style={{fontSize:'0.8rem', fontWeight:'700'}}>CURSOS DESTINATARIS:</label>
                <div className="checkbox-group">
                  {CURSOS.map(c => (
                    <label key={c} style={{display:'flex', gap:'8px', fontSize:'0.8rem'}}>
                      <input type="checkbox" checked={matTargetCourses.includes(c)} onChange={() => {
                        setMatTargetCourses(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
                      }} /> {c}
                    </label>
                  ))}
                </div>
                <button type="submit" className="btn btn-p" style={{width:'100%', justifyContent:'center', background:'#10b981'}}>PENJAR RECURS</button>
              </form>
            </div>

            {/* CARD: INVENTARI RÀPID */}
            <div className="panel-card" style={{gridColumn: '1 / -1'}}>
              <div className="card-h">📦 Inventari i Gestió de Continguts</div>
              <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px'}}>
                {CURSOS.map(curs => (
                  <details key={curs} style={{background:'#f8fafc', padding:'10px', borderRadius:'10px', border:'1px solid #e2e8f0'}}>
                    <summary style={{fontWeight:'bold', cursor:'pointer', fontSize:'0.9rem'}}>
                      {curs} ({materials.filter(m => m.categoria === curs).length})
                    </summary>
                    <div style={{marginTop:'10px', maxHeight:'200px', overflowY:'auto'}}>
                      {materials.filter(m => m.categoria === curs).map(m => (
                        <div key={m.id} style={{display:'flex', justifyContent:'space-between', padding:'5px', borderBottom:'1px solid #eee', fontSize:'0.75rem'}}>
                          <span>{ICONS[m.tipus] || ICONS.Default} {m.nom}</span>
                          <button onClick={() => deleteDocument('materials', m.id)} className="btn btn-del">🗑️</button>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ==========================================================
             VISTA ALUMNE (FULL INTERFACE)
             ========================================================== */
          <div className="fade-in">
            {isRealAdmin && (
              <div className="notice-box" style={{background:'#eff6ff', borderLeftColor:'#2563eb'}}>
                <strong>MODE SIMULACIÓ:</strong> Estàs visualitzant l'aula com un alumne de:
                <select className="main-input" style={{width:'auto', marginLeft:'15px', padding:'5px'}} value={simulatedCourse} onChange={e => setSimulatedCourse(e.target.value)}>
                  {CURSOS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}

            {/* SECCIÓ AVISOS */}
            <section className="unit-section">
              <h2 className="unit-title">📢 Avisos de la teva classe</h2>
              {avisos.filter(a => a.curs === currentViewContext || a.curs === "General").length === 0 ? (
                <p style={{color:'#94a3b8', paddingLeft:'10px'}}>No hi ha avisos pendents. Tot correcte! 👍</p>
              ) : (
                avisos.filter(a => a.curs === currentViewContext || a.curs === "General").map(a => (
                  <div key={a.id} className="notice-box">
                    <div style={{display:'flex', justifyContent:'space-between', marginBottom:'5px', fontSize:'0.75rem', fontWeight:'700', color:'#b45309'}}>
                      <span>{a.curs.toUpperCase()}</span>
                      <span>{a.data}</span>
                    </div>
                    <p style={{margin:0, lineHeight:'1.4'}}>{a.text}</p>
                  </div>
                ))
              )}
            </section>

            {/* SECCIÓ MATERIALS PER TEMES */}
            <section className="unit-section">
              <h2 className="unit-title">📖 Temari i Recursos de {currentViewContext}</h2>
              {filteredMaterials.length === 0 ? (
                <p style={{color:'#94a3b8', paddingLeft:'10px'}}>Encara no s'ha publicat material per a aquest curs.</p>
              ) : (
                [...new Set(filteredMaterials.map(m => m.tema))].map(tema => (
                  <div key={tema} style={{marginBottom:'30px'}}>
                    <h3 style={{fontSize:'1rem', color:'#64748b', textTransform:'uppercase', margin:'20px 0 10px 10px'}}>{tema}</h3>
                    <div className="resource-list">
                      {filteredMaterials.filter(m => m.tema === tema).map(res => (
                        <div key={res.id} className="resource-item" onClick={() => window.open(res.url, '_blank')}>
                          <div className="icon-box">{ICONS[res.tipus] || ICONS.Default}</div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:'700', fontSize:'0.95rem'}}>{res.nom}</div>
                            <div style={{fontSize:'0.7rem', color:'#94a3b8'}}>{res.tipus}</div>
                          </div>
                          <div style={{color:'#cbd5e1'}}>➜</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </section>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="container" style={{textAlign:'center', marginTop:'50px', borderTop:'1px solid #e2e8f0', padding:'40px 0'}}>
        <div style={{display:'flex', justifyContent:'center', gap:'20px', marginBottom:'20px'}}>
          <a href="https://www.instagram.com/serradequacions/" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'var(--muted)', display:'flex', alignItems:'center', gap:'5px'}}>
            <img src={logoInstagram} alt="IG" style={{width:'24px'}} /> <span>@serradequacions</span>
          </a>
        </div>
        <p style={{fontSize:'0.9rem', color:'#94a3b8', margin:0}}>© 2026 Serra d'Equacions - L'èxit en les matemàtiques depèn de la constància.</p>
      </footer>
    </div>
  );
}

export default App;