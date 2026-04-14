import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, onSnapshot, doc, setDoc, getDoc, addDoc, 
  updateDoc, deleteDoc, serverTimestamp, query, orderBy, where, limit 
} from 'firebase/firestore';
import { 
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup,
  sendPasswordResetEmail, updateProfile
} from 'firebase/auth';

// 1. IMPORTACIÓ DEL LOGO LOCAL (Carpeta src/logo.png)
import logoImg from './logo.png';

/**
 * ============================================================================
 * CONFIGURACIÓ DE SERVEIS
 * ============================================================================
 */
const CLOUD_NAME = "EL_TEU_CLOUD_NAME"; // Substitueix amb el teu
const UPLOAD_PRESET = "tasques_alumnes"; // Substitueix amb el teu (Unsigned)

const firebaseConfig = {
  apiKey: "AIzaSyCYikRWiEEvEYlZFHQaWzE-2Ry5zWFcfC4",
  authDomain: "app-mates.firebaseapp.com",
  projectId: "app-mates",
  storageBucket: "app-mates.firebasestorage.app",
  messagingSenderId: "165327798812",
  appId: "1:165327798812:web:796094047d0632cc4dd5d9",
  measurementId: "G-7B6WJXEFNG"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

/**
 * ============================================================================
 * SISTEMA D'ESTILS GLOBAL (PALETA LOGO: Blaus, Verds i Cremes)
 * ============================================================================
 */
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');

  :root {
    --p-dark: #1e3a5f;      /* Blau fosc del logo */
    --p-main: #3a7ca5;      /* Blau principal */
    --p-light: #81b1d1;     /* Blau cel */
    --s-main: #6b9e7c;      /* Verd sàlvia del logo */
    --s-light: #e8f0e9;     /* Verd molt suau */
    --accent: #fdfaf3;      /* Crema de fons */
    --white: #ffffff;
    --text-primary: #1a2a3a;
    --text-secondary: #50667a;
    --danger: #d9534f;
    --success: #5cb85c;
    --border: #dbe6ed;
    --radius-xl: 20px;
    --radius-md: 12px;
    --shadow-premium: 0 20px 40px -15px rgba(30, 58, 95, 0.15);
  }

  * { box-sizing: border-box; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
  
  body { 
    margin: 0; font-family: 'Outfit', sans-serif; 
    background-color: var(--accent); color: var(--text-primary);
    overflow-x: hidden;
  }

  /* Animacions de la Interfície */
  @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .animate-fade { animation: fadeIn 0.6s ease-out; }
  .animate-slide { animation: slideUp 0.5s ease-out forwards; }

  /* Navbar i Layout */
  .app-header {
    background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(15px);
    border-bottom: 2px solid var(--border); padding: 0.8rem 6%;
    position: sticky; top: 0; z-index: 1000; display: flex;
    justify-content: space-between; align-items: center;
  }
  .logo-wrapper { display: flex; align-items: center; gap: 15px; text-decoration: none; }
  .logo-img { width: 55px; height: 55px; object-fit: contain; border-radius: 50%; border: 2px solid var(--p-light); background: white; }
  .logo-text { font-weight: 800; font-size: 1.5rem; color: var(--p-dark); letter-spacing: -1px; }

  .main-content { max-width: 1300px; margin: 0 auto; padding: 2.5rem 1.5rem; }

  /* Grid d'Escriptori */
  .dashboard-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 2rem; }
  .col-12 { grid-column: span 12; }
  .col-8 { grid-column: span 8; }
  .col-4 { grid-column: span 4; }
  @media (max-width: 1024px) { .col-8, .col-4 { grid-column: span 12; } }

  /* Targetes Professionals */
  .card-premium {
    background: var(--white); border-radius: var(--radius-xl); padding: 2.5rem;
    border: 1px solid var(--border); box-shadow: var(--shadow-premium);
    position: relative; overflow: hidden;
  }
  .card-premium::before {
    content: ''; position: absolute; top: 0; left: 0; width: 6px; height: 100%;
    background: var(--p-main);
  }

  /* Inputs i Formularis */
  .form-group { margin-bottom: 1.5rem; }
  .label-text { display: block; font-size: 0.85rem; font-weight: 700; color: var(--p-dark); margin-bottom: 0.6rem; text-transform: uppercase; }
  .input-field {
    width: 100%; padding: 1rem 1.2rem; border: 2px solid var(--border);
    border-radius: var(--radius-md); font-size: 1rem; background: #fff;
    color: var(--text-primary);
  }
  .input-field:focus { outline: none; border-color: var(--p-main); box-shadow: 0 0 0 5px rgba(58, 124, 165, 0.1); }

  /* Botons */
  .btn-base {
    padding: 1rem 2rem; border-radius: var(--radius-md); font-weight: 700;
    cursor: pointer; border: none; display: inline-flex; align-items: center;
    gap: 12px; justify-content: center; font-size: 1rem;
  }
  .btn-primary { background: var(--p-main); color: white; }
  .btn-primary:hover { background: var(--p-dark); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(30, 58, 95, 0.2); }
  .btn-secondary { background: var(--s-main); color: white; }
  .btn-outline { background: transparent; border: 2px solid var(--border); color: var(--text-secondary); }

  /* Lliurament de Tasques (Dropzone) */
  .upload-box {
    border: 3px dashed var(--p-light); padding: 4rem 2rem; text-align: center;
    border-radius: var(--radius-xl); background: var(--s-light);
    cursor: pointer; position: relative;
  }
  .upload-box:hover { background: #dcece0; border-color: var(--s-main); }
  .upload-box input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }

  /* Llista de Materials */
  .material-card {
    background: white; padding: 1.5rem; border-radius: var(--radius-md);
    border: 1px solid var(--border); display: flex; align-items: center; gap: 1.5rem;
    margin-bottom: 1rem; cursor: pointer;
  }
  .material-card:hover { border-color: var(--p-main); transform: translateX(10px); }
  .icon-box {
    width: 60px; height: 60px; background: var(--accent); border-radius: 15px;
    display: flex; align-items: center; justify-content: center; font-size: 2rem;
  }

  /* Footer Especial */
  .footer-ultra {
    background: var(--p-dark); color: white; padding: 5rem 6% 3rem;
    margin-top: 6rem; border-top: 10px solid var(--s-main);
  }
  .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 4rem; }
  .footer-logo-big { width: 100px; height: 100px; border-radius: 50%; border: 4px solid var(--s-main); background: white; padding: 5px; }
`;

/**
 * ============================================================================
 * COMPONENT PRINCIPAL DE L'APLICACIÓ
 * ============================================================================
 */
function App() {
  // --- ESTATS D'AUTENTICACIÓ ---
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [authView, setAuthView] = useState('login'); // login | signup | reset
  const [authError, setAuthError] = useState('');

  // --- ESTATS DE DADES (FIRESTORE) ---
  const [materials, setMaterials] = useState([]);
  const [avisos, setAvisos] = useState([]);
  const [entregues, setEntregues] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // --- ESTATS DE CONTROL I INTERFÍCIE ---
  const [isAdminPanel, setIsAdminPanel] = useState(true);
  const [previewCurs, setPreviewCurs] = useState('1r ESO');
  const [isUploadingTask, setIsUploadingTask] = useState(false);

  // --- ESTATS FORMULARIS ADMINISTRADOR ---
  const [newNotice, setNewNotice] = useState({ body: '', targetCursos: [] });
  const [newMaterial, setNewMaterial] = useState({
    name: '', url: '', type: 'Teoria', theme: '', existingTheme: '', courses: []
  });

  // --- CONSTANTS I REFERÈNCIES ---
  const ADMIN_EMAIL = "serradequacions@gmail.com";
  const LLISTA_CURSOS = [
    "1r ESO", "2n ESO", "3r ESO", "4t ESO A", "4t ESO B", 
    "1r BATX CCSS", "1r BATX CIEN.", "2n BATX CCSS", "2n BATX CIEN"
  ];
  const TYPE_ICONS = { 'Teoria': '📚', 'Exercici': '✍️', 'Vídeo': '🎥', 'Examen': '🏁', 'Link': '🔗' };

  /**
   * EFECTE 1: Inicialització i Control de Sessió
   */
  useEffect(() => {
    // Injectar estils
    const styleTag = document.createElement("style");
    styleTag.innerText = GLOBAL_STYLES;
    document.head.appendChild(styleTag);

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        setUser(fbUser);
        const docRef = doc(db, "usuaris", fbUser.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);
          setPreviewCurs(data.curs || '1r ESO');
        } else {
          // Creació perfil inicial si no existeix (Google Login)
          const newProfile = { 
            email: fbUser.email, 
            curs: '1r ESO', 
            nom: fbUser.displayName || 'Alumne Nou',
            avatar: fbUser.photoURL || '',
            creatEl: serverTimestamp() 
          };
          await setDoc(docRef, newProfile);
          setUserData(newProfile);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setIsAppLoading(false);
    });

    return () => unsubscribe();
  }, []);

  /**
   * EFECTE 2: Sincronització Realtime amb Firestore
   */
  useEffect(() => {
    if (!user) return;

    // 1. Materials: Tots els materials ordenats per data
    const qMaterials = query(collection(db, 'materials'), orderBy('createdAt', 'desc'));
    const unsubMaterials = onSnapshot(qMaterials, (snap) => {
      setMaterials(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // 2. Avisos: Últims 20 avisos
    const qAvisos = query(collection(db, 'avisos'), orderBy('createdAt', 'desc'), limit(20));
    const unsubAvisos = onSnapshot(qAvisos, (snap) => {
      setAvisos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // 3. Dades només per a l'ADMIN
    if (user.email === ADMIN_EMAIL) {
      const qEntregues = query(collection(db, 'entregues'), orderBy('createdAt', 'desc'));
      const unsubEntregues = onSnapshot(qEntregues, (snap) => {
        setEntregues(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });

      const unsubUsers = onSnapshot(collection(db, 'usuaris'), (snap) => {
        setUsersList(snap.docs.map(d => d.data()));
      });

      return () => { unsubMaterials(); unsubAvisos(); unsubEntregues(); unsubUsers(); };
    }

    return () => { unsubMaterials(); unsubAvisos(); };
  }, [user]);

  /**
   * GESTIÓ D'AUTENTICACIÓ
   */
  const handleAuthAction = async (e) => {
    e.preventDefault();
    setAuthError('');
    const { email, password, cursNom, realName } = e.target.elements;

    try {
      if (authView === 'login') {
        await signInWithEmailAndPassword(auth, email.value, password.value);
      } else if (authView === 'signup') {
        const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
        await updateProfile(res.user, { displayName: realName.value });
        await setDoc(doc(db, "usuaris", res.user.uid), {
          nom: realName.value,
          email: email.value,
          curs: cursNom.value,
          uid: res.user.uid,
          createdAt: serverTimestamp()
        });
      } else if (authView === 'reset') {
        await sendPasswordResetEmail(auth, email.value);
        alert("Enllaç de recuperació enviat al teu correu.");
        setAuthView('login');
      }
    } catch (err) {
      setAuthError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) { setAuthError(err.message); }
  };

  /**
   * GESTIÓ DE TASQUES (PUJADA A CLOUDINARY)
   */
  const onFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploadingTask(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: 'POST',
        body: formData
      });
      const cloudData = await res.json();

      if (cloudData.secure_url) {
        await addDoc(collection(db, "entregues"), {
          alumne: userData?.nom || user.email,
          email: user.email,
          curs: userData?.curs || "General",
          fileUrl: cloudData.secure_url,
          fileName: file.name,
          timeStamp: new Date().toLocaleString('ca-ES'),
          createdAt: serverTimestamp()
        });
        alert("🎉 Tasca entregada amb èxit! Ja la pot revisar el professor.");
      }
    } catch (err) {
      alert("Error en la pujada del fitxer.");
    } finally {
      setIsUploadingTask(false);
    }
  };

  /**
   * ACCIONS D'ADMINISTRADOR
   */
  const publishNotice = async (e) => {
    e.preventDefault();
    if (!newNotice.body) return;
    const targets = newNotice.targetCursos.length > 0 ? newNotice.targetCursos : ["General"];
    
    try {
      for (const curs of targets) {
        await addDoc(collection(db, "avisos"), {
          body: newNotice.body,
          curs: curs,
          dataStr: new Date().toLocaleDateString('ca-ES'),
          createdAt: serverTimestamp()
        });
      }
      setNewNotice({ body: '', targetCursos: [] });
      alert("📢 Notificació publicada correctament.");
    } catch (err) { alert(err.message); }
  };

  const publishMaterial = async (e) => {
    e.preventDefault();
    const finalTheme = (newMaterial.existingTheme === "nou" || !newMaterial.existingTheme) ? newMaterial.theme : newMaterial.existingTheme;
    
    if (!newMaterial.name || newMaterial.courses.length === 0 || !finalTheme) {
      return alert("Falten camps per completar.");
    }

    try {
      for (const c of newMaterial.courses) {
        await addDoc(collection(db, "materials"), {
          nom: newMaterial.name,
          url: newMaterial.url,
          tema: finalTheme,
          categoria: c,
          tipus: newMaterial.type,
          createdAt: serverTimestamp()
        });
      }
      setNewMaterial({ name: '', url: '', type: 'Teoria', theme: '', existingTheme: '', courses: [] });
      alert("🚀 Contingut lliurat a tots els grups.");
    } catch (err) { alert(err.message); }
  };

  const removeDoc = async (col, id) => {
    if (window.confirm("Aquesta acció és irreversible. Vols continuar?")) {
      await deleteDoc(doc(db, col, id));
    }
  };

  /**
   * LÒGICA DE FILTRATGE DE CONTINGUTS
   */
  const isAdmin = useMemo(() => user?.email === ADMIN_EMAIL, [user]);
  const viewCurs = useMemo(() => (isAdmin && !isAdminPanel) ? previewCurs : userData?.curs, [isAdmin, isAdminPanel, previewCurs, userData]);

  const filteredMaterials = useMemo(() => {
    return materials.filter(m => 
      m.categoria === viewCurs && 
      m.nom.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [materials, viewCurs, searchQuery]);

  const uniqueThemes = useMemo(() => {
    return [...new Set(filteredMaterials.map(m => m.tema))].sort();
  }, [filteredMaterials]);

  const allThemesGlobal = useMemo(() => {
    return [...new Set(materials.map(m => m.tema))].sort();
  }, [materials]);

  /**
   * RENDER: LOADING STATE
   */
  if (isAppLoading) {
    return (
      <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--p-dark)'}}>
        <div style={{textAlign:'center', color:'white'}}>
          <img src={logoImg} alt="Logo" style={{width:100, marginBottom:20, animation:'fadeIn 1s infinite alternate'}} />
          <h2 style={{letterSpacing:4}}>SERRA D'EQUACIONS</h2>
          <p style={{opacity:0.6}}>Iniciant experiència educativa...</p>
        </div>
      </div>
    );
  }

  /**
   * RENDER: AUTHENTICATION
   */
  if (!user) {
    return (
      <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(135deg, var(--p-dark) 0%, var(--p-main) 100%)', padding:20}}>
        <div className="card-premium animate-slide" style={{maxWidth:500, width:'100%', textAlign:'center', gridColumn:'span 12'}}>
          <img src={logoImg} alt="Logo" style={{width:120, marginBottom:'1.5rem'}} />
          <h1 style={{color:'var(--p-dark)', fontSize:'2.2rem', marginBottom:'0.5rem', marginTop:0}}>Benvingut/da</h1>
          <p style={{color:'var(--text-secondary)', marginBottom:'3rem'}}>Accedeix a la teva aula virtual personalitzada.</p>
          
          <button className="btn-base btn-outline" style={{width:'100%', marginBottom:'2rem'}} onClick={handleGoogleSignIn}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="22" alt=""/> 
            Entra amb Google Classroom
          </button>

          <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'2rem'}}>
            <hr style={{flex:1, border:'none', borderTop:'1px solid var(--border)'}} />
            <span style={{fontSize:'0.75rem', color:'var(--text-secondary)', fontWeight:800}}>O ACCÉS MANUAL</span>
            <hr style={{flex:1, border:'none', borderTop:'1px solid var(--border)'}} />
          </div>

          <form onSubmit={handleAuthAction}>
            {authView === 'signup' && (
              <div className="form-group">
                <input className="input-field" name="realName" placeholder="Nom i Cognoms" required />
              </div>
            )}
            <div className="form-group">
              <input className="input-field" name="email" type="email" placeholder="Correu electrònic" required />
            </div>
            {authView !== 'reset' && (
              <div className="form-group">
                <input className="input-field" name="password" type="password" placeholder="Contrasenya" required />
              </div>
            )}
            {authView === 'signup' && (
              <div className="form-group" style={{textAlign:'left'}}>
                <label className="label-text">Selecciona el teu grup</label>
                <select className="input-field" name="cursNom">
                  {LLISTA_CURSOS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}

            {authError && <p style={{color:'var(--danger)', fontSize:'0.85rem', marginBottom:'1.5rem'}}>{authError}</p>}

            <button className="btn-base btn-primary" style={{width:'100%'}} type="submit">
              {authView === 'login' ? 'INICIAR SESSIÓ' : authView === 'signup' ? 'CREAR COMPTE' : 'ENVIAR CLAU'}
            </button>
          </form>

          <div style={{marginTop:'2.5rem', fontSize:'0.95rem'}}>
            {authView === 'login' ? (
              <>
                <p>Ets nou alumne? <span style={{color:'var(--p-main)', fontWeight:800, cursor:'pointer'}} onClick={() => setAuthView('signup')}>Registra't aquí</span></p>
                <p style={{fontSize:'0.85rem', color:'var(--text-secondary)', cursor:'pointer', marginTop:10}} onClick={() => setAuthView('reset')}>Has oblidat la contrasenya?</p>
              </>
            ) : (
              <p>Ja tens un compte? <span style={{color:'var(--p-main)', fontWeight:800, cursor:'pointer'}} onClick={() => setAuthView('login')}>Torna al Login</span></p>
            )}
          </div>
        </div>
      </div>
    );
  }

  /**
   * RENDER: MAIN APPLICATION
   */
  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      {/* HEADER AMB LOGO LOCAL */}
      <header className="app-header">
        <a href="/" className="logo-wrapper">
          <img src={logoImg} alt="Serra d'Equacions" className="logo-img" />
          <span className="logo-text">Serra d'Equacions</span>
        </a>
        <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
          <div style={{textAlign:'right'}} className="hide-mobile">
            <div style={{fontSize:'0.9rem', fontWeight:800, color:'var(--p-dark)'}}>{userData?.nom || 'Usuari'}</div>
            <div style={{fontSize:'0.75rem', color:'var(--text-secondary)'}}>{viewCurs}</div>
          </div>
          {isAdmin && (
            <button className="btn-base" style={{background: isAdminPanel ? 'var(--s-light)' : '#fee2e2', color: isAdminPanel ? 'var(--s-main)' : 'var(--danger)', padding:'0.6rem 1.2rem', fontSize:'0.85rem'}} onClick={() => setIsAdminPanel(!isAdminPanel)}>
              {isAdminPanel ? '👁️ VISTA ALUMNE' : '🛠️ PANELL GESTIÓ'}
            </button>
          )}
          <button className="btn-base btn-outline" style={{padding:'0.6rem 1.2rem', fontSize:'0.85rem'}} onClick={() => signOut(auth)}>Surt</button>
        </div>
      </header>

      <main className="main-content">
        {/* BARRA DE CERCA SUPERIOR */}
        <div style={{marginBottom:'3.5rem', position:'relative'}}>
          <input className="input-field animate-slide" style={{height:'70px', borderRadius:'35px', paddingLeft:'3rem', fontSize:'1.2rem', border:'none', boxShadow:'var(--shadow-premium)'}} placeholder="🔍 Cerca temaris, vídeos o apunts..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>

        {isAdmin && isAdminPanel ? (
          /* ==================================================================
             VISTA ADMINISTRADOR (FULL CONTROL)
             ================================================================== */
          <div className="dashboard-grid animate-fade">
            
            {/* 1. PUBLICAR AVÍS */}
            <div className="card-premium col-4">
              <h3 style={{color:'var(--p-dark)', display:'flex', alignItems:'center', gap:10, marginTop:0}}>📢 Nova Notificació</h3>
              <form onSubmit={publishNotice}>
                <div className="form-group">
                  <textarea className="input-field" style={{minHeight:'120px', resize:'none'}} placeholder="Què vols comunicar avui?" value={newNotice.body} onChange={e => setNewNotice({...newNotice, body: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label className="label-text">Grups (Buit = General)</label>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', background:'#f8fafc', padding:15, borderRadius:12, maxHeight:150, overflowY:'auto', border:'1px solid var(--border)'}}>
                    {LLISTA_CURSOS.map(c => (
                      <label key={c} style={{fontSize:'0.8rem', display:'flex', alignItems:'center', gap:8, cursor:'pointer'}}>
                        <input type="checkbox" checked={newNotice.targetCursos.includes(c)} onChange={() => {
                          const prev = newNotice.targetCursos;
                          setNewNotice({...newNotice, targetCursos: prev.includes(c) ? prev.filter(x => x!==c) : [...prev, c]});
                        }} /> {c}
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="btn-base btn-primary" style={{width:'100%'}}>ENVIAR AVÍS</button>
              </form>
            </div>

            {/* 2. PUBLICAR MATERIAL */}
            <div className="card-premium col-8">
              <h3 style={{color:'var(--p-dark)', marginTop:0}}>📚 Penjar Nou Contingut</h3>
              <form onSubmit={publishMaterial} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
                <div className="form-group" style={{gridColumn:'span 2'}}>
                  <input className="input-field" placeholder="Títol del material" value={newMaterial.name} onChange={e => setNewMaterial({...newMaterial, name: e.target.value})} required />
                </div>
                <div className="form-group" style={{gridColumn:'span 2'}}>
                  <input className="input-field" placeholder="URL del fitxer o vídeo" value={newMaterial.url} onChange={e => setNewMaterial({...newMaterial, url: e.target.value})} required />
                </div>
                <div className="form-group">
                  <select className="input-field" value={newMaterial.type} onChange={e => setNewMaterial({...newMaterial, type: e.target.value})}>
                    {Object.keys(TYPE_ICONS).map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <select className="input-field" value={newMaterial.existingTheme} onChange={e => setNewMaterial({...newMaterial, existingTheme: e.target.value})}>
                    <option value="">-- Tria Tema --</option>
                    <option value="nou">+ CREAR NOU TEMA</option>
                    {allThemesGlobal.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                {newMaterial.existingTheme === "nou" && (
                  <div className="form-group" style={{gridColumn:'span 2'}}>
                    <input className="input-field" placeholder="Escriu el nom del nou tema" value={newMaterial.theme} onChange={e => setNewMaterial({...newMaterial, theme: e.target.value})} required />
                  </div>
                )}
                <div className="form-group" style={{gridColumn:'span 2'}}>
                  <label className="label-text">Selecciona els grups destinataris</label>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px', background:'#f8fafc', padding:15, borderRadius:12, border:'1px solid var(--border)'}}>
                    {LLISTA_CURSOS.map(c => (
                      <label key={c} style={{fontSize:'0.8rem', display:'flex', alignItems:'center', gap:8}}>
                        <input type="checkbox" checked={newMaterial.courses.includes(c)} onChange={() => {
                          const prev = newMaterial.courses;
                          setNewMaterial({...newMaterial, courses: prev.includes(c) ? prev.filter(x => x!==c) : [...prev, c]});
                        }} /> {c}
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="btn-base btn-secondary" style={{gridColumn:'span 2'}}>GUARDAR I PUBLICAR</button>
              </form>
            </div>

            {/* 3. TASQUES REBUDES (CLOUDINARY LINKS) */}
            <div className="card-premium col-12">
              <h3 style={{color:'var(--p-dark)', marginTop:0}}>📥 Lliuraments dels Alumnes</h3>
              <div style={{overflowX:'auto'}}>
                <table style={{width:'100%', borderCollapse:'collapse', marginTop:20}}>
                  <thead>
                    <tr style={{textAlign:'left', borderBottom:'2px solid var(--border)', color:'var(--text-secondary)', fontSize:'0.85rem'}}>
                      <th style={{padding:15}}>ALUMNE</th>
                      <th style={{padding:15}}>CURS</th>
                      <th style={{padding:15}}>FITXER</th>
                      <th style={{padding:15}}>DATA ENVIAMENT</th>
                      <th style={{padding:15}}>ACCIÓ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entregues.length === 0 && <tr><td colSpan="5" style={{padding:30, textAlign:'center', color:'var(--text-secondary)'}}>No hi ha entregues per revisar.</td></tr>}
                    {entregues.map(ent => (
                      <tr key={ent.id} style={{borderBottom:'1px solid #f1f5f9'}}>
                        <td style={{padding:15, fontWeight:700}}>{ent.alumne}</td>
                        <td style={{padding:15}}><span className="badge-blue" style={{padding:'4px 10px', borderRadius:20, background:'var(--s-light)', color:'var(--s-main)', fontSize:'0.7rem', fontWeight:800}}>{ent.curs}</span></td>
                        <td style={{padding:15, fontSize:'0.85rem'}}>{ent.fileName}</td>
                        <td style={{padding:15, fontSize:'0.85rem', color:'var(--text-secondary)'}}>{ent.timeStamp}</td>
                        <td style={{padding:15, display:'flex', gap:10}}>
                          <button className="btn-base btn-primary" style={{padding:'6px 15px', fontSize:'0.75rem'}} onClick={() => window.open(ent.fileUrl, '_blank')}>OBRIR</button>
                          <button className="btn-base" style={{padding:'6px', background:'#fee2e2', color:'var(--danger)'}} onClick={() => removeDoc('entregues', ent.id)}>🗑️</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. INVENTARI DE FITXERS PER GRUP */}
            <div className="card-premium col-12">
              <h3 style={{color:'var(--p-dark)', marginTop:0}}>📦 Gestió Global de Continguts</h3>
              <div className="dashboard-grid" style={{marginTop:25}}>
                {LLISTA_CURSOS.map(curs => {
                  const items = materials.filter(m => m.categoria === curs);
                  return (
                    <div key={curs} className="card-premium col-4" style={{padding:20, minHeight:200}}>
                      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:15}}>
                        <strong style={{fontSize:'1rem'}}>{curs}</strong>
                        <span style={{fontSize:'0.7rem', color:'var(--p-main)', fontWeight:900}}>{items.length} ITEMS</span>
                      </div>
                      <div style={{maxHeight:150, overflowY:'auto'}}>
                        {items.length === 0 && <p style={{fontSize:'0.75rem', color:'var(--text-secondary)'}}>SENSE FITXERS.</p>}
                        {items.map(m => (
                          <div key={m.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom:'1px solid #f1f5f9', fontSize:'0.8rem'}}>
                            <span style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:'70%'}}>{TYPE_ICONS[m.tipus]} {m.nom}</span>
                            <button style={{background:'none', border:'none', color:'var(--danger)', cursor:'pointer', fontWeight:800, fontSize:'0.65rem'}} onClick={() => removeDoc('materials', m.id)}>ELIMINAR</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* ==================================================================
             VISTA ALUMNE (AULA PERSONALITZADA)
             ================================================================== */
          <div className="animate-fade">
            
            {/* 1. MANTENIMENT DE MODE (NOMÉS ADMIN) */}
            {isAdmin && (
              <div className="card-premium col-12" style={{background:'var(--s-light)', borderLeftColor:'var(--s-main)', marginBottom:'2rem', padding:'1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span><strong>🔧 MODE SIMULACIÓ:</strong> Estàs visualitzant la plataforma com un alumne de:</span>
                <select className="input-field" style={{width:'auto', margin:0, padding:'8px 20px'}} value={previewCurs} onChange={e => setPreviewCurs(e.target.value)}>
                  {LLISTA_CURSOS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}

            <div className="dashboard-grid">
              {/* 2. SECCIÓ D'AVISOS */}
              <div className="col-8">
                <h2 style={{color:'var(--p-dark)', marginBottom:'2rem', display:'flex', alignItems:'center', gap:15}}>
                  <span style={{width:40, height:6, background:'var(--s-main)', borderRadius:3}}></span>
                  Notificacions del curs
                </h2>
                {avisos.filter(a => a.curs === viewCurs || a.curs === "General").length === 0 ? (
                  <div className="card-premium">
                    <p style={{color:'var(--text-secondary)', textAlign:'center', margin:0}}>No hi ha avisos nous. Tot al dia! ✅</p>
                  </div>
                ) : (
                  avisos.filter(a => a.curs === viewCurs || a.curs === "General").map(a => (
                    <div key={a.id} className="card-premium" style={{marginBottom:'1.5rem', borderLeft:'6px solid var(--s-main)', padding:'1.8rem'}}>
                      <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
                        <span style={{fontWeight:900, fontSize:'0.7rem', color:'var(--s-main)', textTransform:'uppercase'}}>{a.curs}</span>
                        <span style={{fontSize:'0.75rem', color:'var(--text-secondary)', fontWeight:600}}>{a.dataStr}</span>
                      </div>
                      <p style={{margin:0, fontSize:'1.15rem', fontWeight:600, lineHeight:1.4}}>{a.body}</p>
                      {isAdmin && <button style={{marginTop:15, background:'none', border:'none', color:'var(--danger)', fontSize:'0.75rem', fontWeight:800, cursor:'pointer'}} onClick={() => removeDoc('avisos', a.id)}>🗑️ ELIMINAR AVÍS PER A TOTS</button>}
                    </div>
                  ))
                )}
              </div>

              {/* 3. LLIURAMENT DE TASQUES (PUJADA DIRECTA) */}
              <div className="col-4">
                <h2 style={{color:'var(--p-dark)', marginBottom:'2rem', display:'flex', alignItems:'center', gap:15}}>
                  <span style={{width:40, height:6, background:'var(--p-main)', borderRadius:3}}></span>
                  Entrega tasca
                </h2>
                <div className="card-premium" style={{background:'#f0f4f8'}}>
                  <p style={{fontSize:'0.9rem', color:'var(--text-secondary)', marginBottom:'2rem'}}>Puja aquí els teus deures (PDF o Imatge). El professor rebrà l'enllaç automàticament.</p>
                  <label className="upload-box" style={{display:'block'}}>
                    {isUploadingTask ? (
                      <div>
                        <div style={{fontSize:'2.5rem', marginBottom:15}}>⌛</div>
                        <p style={{fontWeight:800, color:'var(--p-dark)'}}>PUJANT AL SERVIDOR...</p>
                      </div>
                    ) : (
                      <div>
                        <div style={{fontSize:'3rem', marginBottom:15}}>📁</div>
                        <p style={{fontWeight:800, color:'var(--p-dark)', margin:0}}>CLICA PER SELECCIONAR</p>
                        <p style={{fontSize:'0.75rem', opacity:0.6, marginTop:5}}>PDF, JPG o PNG</p>
                      </div>
                    )}
                    <input type="file" onChange={onFileSelect} disabled={isUploadingTask} />
                  </label>
                  {isUploadingTask && <div style={{height:4, background:'var(--s-main)', width:'100%', marginTop:10, borderRadius:2, animation:'fadeIn 0.5s infinite alternate'}}></div>}
                </div>
              </div>

              {/* 4. MATERIALS EDUCATIUS */}
              <div className="col-12" style={{marginTop:'3rem'}}>
                <h2 style={{color:'var(--p-dark)', marginBottom:'2.5rem', display:'flex', alignItems:'center', gap:15}}>
                  <span style={{width:40, height:6, background:'var(--p-main)', borderRadius:3}}></span>
                  Temari i Recursos Disponibles
                </h2>

                {uniqueThemes.length === 0 ? (
                  <div className="card-premium" style={{textAlign:'center', padding:'5rem'}}>
                    <div style={{fontSize:'4rem', marginBottom:'1.5rem'}}>📚</div>
                    <h3 style={{margin:0}}>Encara no s'ha publicat material.</h3>
                    <p style={{color:'var(--text-secondary)'}}>Quan el professor pugi continguts, apareixeran aquí organitzats per temes.</p>
                  </div>
                ) : (
                  uniqueThemes.map(tema => (
                    <div key={tema} style={{marginBottom:'4.5rem'}}>
                      <div style={{display:'flex', alignItems:'center', gap:'20px', marginBottom:'2rem'}}>
                        <h3 style={{fontSize:'1rem', color:'var(--p-light)', textTransform:'uppercase', letterSpacing:'3px', fontWeight:900, margin:0}}>{tema}</h3>
                        <div style={{flex:1, height:'2px', background:'var(--border)'}}></div>
                      </div>
                      <div className="dashboard-grid">
                        {filteredMaterials.filter(m => m.tema === tema).map(m => (
                          <div key={m.id} className="material-card col-4" onClick={() => window.open(m.url, '_blank')}>
                            <div className="icon-box">
                              {TYPE_ICONS[m.tipus] || '📄'}
                            </div>
                            <div style={{overflow:'hidden'}}>
                              <div style={{fontWeight:800, fontSize:'1.1rem', marginBottom:4, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}} title={m.nom}>{m.nom}</div>
                              <div style={{display:'flex', alignItems:'center', gap:10}}>
                                <span style={{fontSize:'0.65rem', fontWeight:900, background:'var(--p-light)', color:'var(--p-dark)', padding:'2px 8px', borderRadius:10}}>{m.tipus}</span>
                                <span style={{fontSize:'0.75rem', color:'var(--text-secondary)'}}>Veure recurs ➔</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER AMB LOGO LOCAL */}
      <footer className="footer-ultra">
        <div className="main-content" style={{padding:0}}>
          <div className="footer-grid">
            <div>
              <img src={logoImg} alt="Serra d'Equacions" className="footer-logo-big" />
              <h2 style={{marginTop:15, marginBottom:10, fontSize:'1.8rem', letterSpacing:'-1px'}}>Serra d'Equacions</h2>
              <p style={{opacity:0.7, lineHeight:1.8, fontSize:'0.95rem'}}>
                Plataforma d'excel·lència educativa. Treballem per fer que les matemàtiques siguin accessibles, entenedores i motivadores per a tothom.
              </p>
            </div>
            <div>
              <h4 style={{color:'var(--s-main)', letterSpacing:2, marginBottom:'1.5rem'}}>MATERIALS</h4>
              <ul style={{listStyle:'none', padding:0, lineHeight:'2.5'}}>
                <li><a href="#" style={{color:'white', textDecoration:'none', opacity:0.8}}>1r i 2n ESO</a></li>
                <li><a href="#" style={{color:'white', textDecoration:'none', opacity:0.8}}>3r i 4t ESO</a></li>
                <li><a href="#" style={{color:'white', textDecoration:'none', opacity:0.8}}>Batxillerat CCSS</a></li>
                <li><a href="#" style={{color:'white', textDecoration:'none', opacity:0.8}}>Batxillerat Científic</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{color:'var(--s-main)', letterSpacing:2, marginBottom:'1.5rem'}}>CONTACTE</h4>
              <ul style={{listStyle:'none', padding:0, lineHeight:'2.5'}}>
                <li><a href="https://instagram.com/serradequacions" target="_blank" rel="noreferrer" style={{color:'white', textDecoration:'none', opacity:0.8}}>Instagram Oficial</a></li>
                <li><a href="#" style={{color:'white', textDecoration:'none', opacity:0.8}}>Suport Tècnic</a></li>
                <li><a href="#" style={{color:'white', textDecoration:'none', opacity:0.8}}>Recursos Google Drive</a></li>
              </ul>
            </div>
          </div>
          <div style={{marginTop:'5rem', paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,0.1)', textAlign:'center', fontSize:'0.8rem', opacity:0.5}}>
            © 2026 SERRA D'EQUACIONS. DISSENYAT AMB ❤️ PER A L'EDUCACIÓ DEL FUTUR.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;