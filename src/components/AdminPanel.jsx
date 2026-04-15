import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy, setDoc } from 'firebase/firestore';

export default function AdminPanel({ APP_CONFIG, logoImg }) {
  const [temesBD, setTemesBD] = useState({}); 
  const [avisContingut, setAvisContingut] = useState('');
  const [avisCursos, setAvisCursos] = useState([]);
  const [recursTitol, setRecursTitol] = useState('');
  const [recursUrl, setRecursUrl] = useState('');
  const [recursCursos, setRecursCursos] = useState([]);
  const [recursTipus, setRecursTipus] = useState('Teoria');
  const [recursTema, setRecursTema] = useState('');
  const [temaLliure, setTemaLliure] = useState('');

  const [materials, setMaterials] = useState([]);
  const [avisosLlista, setAvisosLlista] = useState([]);
  
  const [expandedSection, setExpandedSection] = useState(null); 
  const [expandedCurs, setExpandedCurs] = useState(null); 

  // URL del teu Worker configurat
  const WORKER_URL = 'https://brevo-proxy.serradequacions.workers.dev';

  const fetchData = async () => {
    try {
      const matSnap = await getDocs(collection(db, "materials"));
      setMaterials(matSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      
      const avisSnap = await getDocs(query(collection(db, "avisos"), orderBy("data", "desc")));
      setAvisosLlista(avisSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      const temesSnap = await getDocs(collection(db, "config_temes"));
      const mapaTemes = {};
      temesSnap.forEach(doc => {
        mapaTemes[doc.id] = doc.data().llista || [];
      });
      setTemesBD(mapaTemes);
    } catch (err) { console.error("Error fetchData:", err); }
  };

  useEffect(() => { fetchData(); }, []);

  // FUNCIÓ ACTUALITZADA: Filtra els emails per curs des de Firebase
  const enviarNotificacioEmail = async (tipus, dades) => {
    try {
      // 1. Obtenim tots els usuaris de la col·lecció 'usuaris'
      const usuarisSnap = await getDocs(collection(db, "usuaris"));
      const llistaEmails = [];
      
      usuarisSnap.forEach(doc => {
        const usuari = doc.data();
        // Si el curs de l'usuari coincideix amb els seleccionats o és un avís "General"
        if (dades.cursos.includes(usuari.curs) || dades.cursos.includes("General")) {
          if (usuari.email) llistaEmails.push(usuari.email);
        }
      });

      if (llistaEmails.length === 0) {
        console.log("No hi ha destinataris per a aquests cursos.");
        return;
      }

      // 2. Enviem la petició al Worker amb la llista d'emails
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipus: tipus,
          titol: dades.titol || 'Nou Avís',
          contingut: dades.contingut || '',
          emails: llistaEmails, // Passem la llista d'emails filtrada
          url: dades.url || ''
        })
      });

      if (!response.ok) throw new Error('Error en la resposta del Worker');
      console.log(`Notificació enviada a ${llistaEmails.length} alumnes.`);
    } catch (err) {
      console.error("Error enviant notificació email:", err);
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
    setExpandedCurs(null); 
  };

  const toggleCurs = (curs) => {
    setExpandedCurs(expandedCurs === curs ? null : curs);
  };

  const getTemesDisponibles = () => {
    if (recursCursos.length === 0) return [];
    const primerCurs = recursCursos[0];
    return temesBD[primerCurs] || [];
  };

  const handlePublicarAvis = async () => {
    if (!avisContingut) return alert("Escriu l'avís.");
    const cursosDesti = avisCursos.length > 0 ? avisCursos : ["General"];
    try {
      await addDoc(collection(db, "avisos"), {
        contingut: avisContingut,
        cursos: cursosDesti,
        data: serverTimestamp()
      });

      // DISPARAR EMAIL A ELS ALUMNES FILTRATS
      enviarNotificacioEmail('avis', {
        contingut: avisContingut,
        cursos: cursosDesti
      });

      setAvisContingut(''); setAvisCursos([]); fetchData();
      alert("Avís publicat i enviat als alumnes!");
    } catch (e) { alert(e.message); }
  };

  const handlePublicarMaterial = async () => {
    const temaFinal = temaLliure || recursTema; 
    if (!recursTitol || recursCursos.length === 0 || !temaFinal) return alert("Falten dades.");
    
    try {
      if (temaLliure) {
        const cursRef = doc(db, "config_temes", recursCursos[0]);
        const temesActuals = temesBD[recursCursos[0]] || [];
        if (!temesActuals.includes(temaLliure)) {
          await setDoc(cursRef, { llista: [...temesActuals, temaLliure] });
        }
      }
      await addDoc(collection(db, "materials"), {
        titol: recursTitol, url: recursUrl, cursos: recursCursos, 
        tipus: recursTipus, tema: temaFinal, data: serverTimestamp()
      });

      // DISPARAR EMAIL A ELS ALUMNES FILTRATS
      enviarNotificacioEmail('material', {
        titol: recursTitol,
        contingut: `S'ha penjat material nou de: ${temaFinal}`,
        cursos: recursCursos,
        url: recursUrl
      });

      setRecursTitol(''); setRecursUrl(''); setRecursCursos([]); setRecursTema(''); setTemaLliure('');
      fetchData();
      alert("Material guardat i notificació enviada!");
    } catch (e) { alert(e.message); }
  };

  const handleEsborrarTema = async (curs, temaNom) => {
    if (window.confirm(`Vols treure "${temaNom}" de ${curs}?`)) {
      const novaLlista = temesBD[curs].filter(t => t !== temaNom);
      await setDoc(doc(db, "config_temes", curs), { llista: novaLlista });
      fetchData();
    }
  };

  const handleEsborrar = async (col, id) => {
    if (window.confirm("Vols eliminar-ho definitivament?")) {
      await deleteDoc(doc(db, col, id));
      fetchData();
    }
  };

  return (
    <div className="auth-page admin-layout">
      <div className="admin-wrapper">
        <div className="navbar-admin">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src={logoImg} alt="Logo" style={{ width: '45px' }} />
            <h2 style={{ color: 'var(--brand-dark)' }}>Admin Serra d'Equacions</h2>
          </div>
          <button onClick={() => signOut(auth)} className="login-btn" style={{ width: 'auto', padding: '0.6rem 1.5rem', background: '#e11d48' }}>SORTIR</button>
        </div>

        <div className="grid-2-col">
          {/* FORMULARI AVISOS */}
          <div className="auth-card" style={{ maxWidth: '100%' }}>
            <h3>📢 Publicar Avís</h3>
            <textarea className="login-input" placeholder="Missatge..." value={avisContingut} onChange={(e) => setAvisContingut(e.target.value)} style={{ minHeight: '100px', marginTop: '1rem' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', background: '#f9f9f9', padding: '10px', borderRadius: '10px' }}>
              {APP_CONFIG.cursosOpcions.map(curs => (
                <label key={curs} style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input type="checkbox" checked={avisCursos.includes(curs)} onChange={() => setAvisCursos(p => p.includes(curs) ? p.filter(c => c !== curs) : [...p, curs])} /> {curs}
                </label>
              ))}
            </div>
            <button onClick={handlePublicarAvis} className="login-btn" style={{ marginTop: '1rem' }}>ENVIAR AVÍS</button>
          </div>

          {/* FORMULARI MATERIALS */}
          <div className="auth-card" style={{ maxWidth: '100%' }}>
            <h3>📚 Penjar Material</h3>
            <div style={{ marginTop: '1rem' }}>
              <input type="text" placeholder="Títol del recurs" className="login-input" value={recursTitol} onChange={(e) => setRecursTitol(e.target.value)} />
              <input type="text" placeholder="URL Enllaç" className="login-input" value={recursUrl} onChange={(e) => setRecursUrl(e.target.value)} />
              <div style={{ display: 'flex', gap: '10px' }}>
                <select className="login-input" value={recursTipus} onChange={(e) => setRecursTipus(e.target.value)}>
                  {Object.entries(APP_CONFIG.tipusIcons).map(([nom, icona]) => <option key={nom} value={nom}>{icona} {nom}</option>)}
                </select>
                <select className="login-input" value={recursTema} onChange={(e) => setRecursTema(e.target.value)}>
                  <option value="">-- Tema sugerit --</option>
                  {getTemesDisponibles().map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <input type="text" placeholder="O crea un tema nou..." className="login-input" value={temaLliure} onChange={(e) => setTemaLliure(e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', background: '#f9f9f9', padding: '10px', borderRadius: '10px' }}>
              {APP_CONFIG.cursosOpcions.map(curs => (
                <label key={curs} style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input type="checkbox" checked={recursCursos.includes(curs)} onChange={() => setRecursCursos(p => p.includes(curs) ? p.filter(c => c !== curs) : [...p, curs])} /> {curs}
                </label>
              ))}
            </div>
            <button onClick={handlePublicarMaterial} className="login-btn" style={{ background: 'var(--brand-medium)', marginTop: '1rem' }}>GUARDAR</button>
          </div>
        </div>

        {/* --- TAULER DE GESTIÓ --- */}
        {/* ... (La resta del tauler de gestió es manté exactament igual) ... */}
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Tauler de Gestió</h2>
          {/* GESTIÓ TEMES */}
          <div className="course-accordion">
            <div className={`course-header ${expandedSection === 'config' ? 'active' : ''}`} onClick={() => toggleSection('config')}>
              <span>⚙️ GESTIONAR LLISTA DE TEMES</span>
              <span>{expandedSection === 'config' ? '▲' : '▼'}</span>
            </div>
            {expandedSection === 'config' && (
              <div className="course-content">
                {APP_CONFIG.cursosOpcions.map(curs => (
                  <div key={`conf-group-${curs}`} style={{ marginBottom: '10px' }}>
                    <div onClick={() => toggleCurs(curs)} style={{ cursor: 'pointer', fontWeight: 'bold', background: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
                      {expandedCurs === curs ? '▼' : '▶'} {curs}
                    </div>
                    {expandedCurs === curs && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '10px' }}>
                        {(temesBD[curs] || []).map(t => (
                          <span key={`tema-${curs}-${t}`} style={{ background: '#eef2ff', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            {t} <button onClick={() => handleEsborrarTema(curs, t)} style={{ border: 'none', background: 'none', color: 'red', cursor: 'pointer' }}>×</button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* GESTIÓ AVISOS */}
          <div className="course-accordion">
            <div className={`course-header ${expandedSection === 'avisos' ? 'active' : ''}`} onClick={() => toggleSection('avisos')}>
              <span>🔔 GESTIONAR AVISOS PER CURS</span>
              <span>{expandedSection === 'avisos' ? '▲' : '▼'}</span>
            </div>
            {expandedSection === 'avisos' && (
              <div className="course-content">
                {APP_CONFIG.cursosOpcions.concat("General").map(curs => (
                  <div key={`av-group-${curs}`} style={{ marginBottom: '10px' }}>
                    <div onClick={() => toggleCurs(curs)} style={{ cursor: 'pointer', fontWeight: 'bold', background: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
                      {expandedCurs === curs ? '▼' : '▶'} {curs}
                    </div>
                    {expandedCurs === curs && (
                      <div style={{ padding: '10px' }}>
                        {avisosLlista.filter(a => a.cursos && a.cursos.includes(curs)).map(a => (
                          <div key={`item-av-${a.id}`} className="item-gestio" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid #eee' }}>
                            <span>{a.contingut}</span>
                            <button onClick={() => handleEsborrar('avisos', a.id)} style={{ color: 'red', border: 'none', background: 'none' }}>Eliminar</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* GESTIÓ MATERIALS */}
          <div className="course-accordion">
            <div className={`course-header ${expandedSection === 'materials' ? 'active' : ''}`} onClick={() => toggleSection('materials')}>
              <span>📂 GESTIONAR MATERIALS PER CURS</span>
              <span>{expandedSection === 'materials' ? '▲' : '▼'}</span>
            </div>
            {expandedSection === 'materials' && (
              <div className="course-content">
                {APP_CONFIG.cursosOpcions.map(curs => (
                  <div key={`mat-group-${curs}`} style={{ marginBottom: '10px' }}>
                    <div onClick={() => toggleCurs(curs)} style={{ cursor: 'pointer', fontWeight: 'bold', background: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
                      {expandedCurs === curs ? '▼' : '▶'} {curs}
                    </div>
                    {expandedCurs === curs && (
                      <div style={{ padding: '10px' }}>
                        {materials.filter(m => m.cursos && m.cursos.includes(curs)).length === 0 ? (
                           <p style={{fontSize: '0.8rem', color: '#888'}}>No hi ha materials en aquest curs.</p>
                        ) : (
                          materials.filter(m => m.cursos && m.cursos.includes(curs)).map(m => (
                            <div key={`item-mat-${m.id}`} className="item-gestio" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid #eee' }}>
                              <span style={{ fontSize: '0.8rem' }}>
                                {APP_CONFIG.tipusIcons[m.tipus] || '📄'} <strong>{m.tema}</strong>: {m.titol}
                              </span>
                              <button onClick={() => handleEsborrar('materials', m.id)} style={{ color: 'red', border: 'none', background: 'none' }}>Esborrar</button>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}