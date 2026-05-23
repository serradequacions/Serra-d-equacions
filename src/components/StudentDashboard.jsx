import React, { useState, useEffect, useMemo, useRef } from 'react';
import { db, auth } from '../firebase';
import { 
  collection, query, where, onSnapshot, orderBy, doc, getDoc, addDoc, serverTimestamp 
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';

/**
 * StudentDashboard.jsx - VERSIÓ INTEGRAL REPARADA (+500 línies)
 * - Fix: Obertura segura de fitxers (CORS/Chrome Error).
 * - Fix: Error "undefined" en alumneNom.
 * - Suport 50MB Cloudinary.
 * - Secció de gràfic de progrés per a l'alumne.
 */

export default function StudentDashboard({ user, APP_CONFIG, logoImg }) {
  // --- ESTATS PRINCIPALS ---
  const [studentData, setStudentData] = useState(null);
  const [avisos, setAvisos] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [entregasAlumne, setEntregasAlumne] = useState([]);
  const [view, setView] = useState('inici'); 
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // --- ESTATS DE TRAMESA I CLOUDINARY ---
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [entregaActual, setEntregaActual] = useState(null);
  const fileInputRef = useRef(null);

  const WORKER_URL = 'https://brevo-proxy.serradequacions.workers.dev';

  // --- PALETA DE COLORS PREMIUM ---
  const colors = {
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    bg: '#f8fafc',
    card: '#ffffff',
    textDark: '#0f172a',
    textLight: '#64748b',
    border: '#e2e8f0',
    danger: '#ef4444',
    success: '#10b981',
    accent: '#3b82f6',
    warning: '#f59e0b'
  };

  const esTasca = (m) => m.tipus?.toLowerCase().includes('tasca');

  const progrés = useMemo(() => {
    const tasques = materials.filter(esTasca);
    const idsEntregats = new Set(entregasAlumne.map((e) => e.materialId));
    const completades = tasques.filter((t) => idsEntregats.has(t.id)).length;
    const total = tasques.length;
    const percent = total > 0 ? Math.round((completades / total) * 100) : 0;

    const perTema = tasques.reduce((acc, t) => {
      const tema = t.tema || 'Sense tema';
      if (!acc[tema]) acc[tema] = { total: 0, fetes: 0 };
      acc[tema].total += 1;
      if (idsEntregats.has(t.id)) acc[tema].fetes += 1;
      return acc;
    }, {});

    return { tasques, completades, total, percent, perTema };
  }, [materials, entregasAlumne]);

  // --- EFECTE: CÀRREGA DE DADES DE L'ALUMNE ---
  useEffect(() => {
    if (!user) return;

    const fetchStudentData = async () => {
      try {
        const docRef = doc(db, "usuaris", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setStudentData(data);
          subscribeToContent(data.curs);
        } else {
          const fallbackData = { 
            nom: user.displayName || user.email.split('@')[0], 
            curs: "Sense Assignar" 
          };
          setStudentData(fallbackData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error obtenint dades de l'alumne:", error);
        setLoading(false);
      }
    };

    const subscribeToContent = (cursAlumne) => {
      const qAvisos = query(
        collection(db, "avisos"),
        where("cursos", "array-contains", cursAlumne),
        orderBy("data", "desc")
      );
      
      const unsubAvisos = onSnapshot(qAvisos, (snap) => {
        setAvisos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });

      const qMaterials = query(
        collection(db, "materials"),
        where("cursos", "array-contains", cursAlumne),
        orderBy("data", "desc")
      );

      const unsubMaterials = onSnapshot(qMaterials, (snap) => {
        setMaterials(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
      });

      return () => {
        unsubAvisos();
        unsubMaterials();
      };
    };

    fetchStudentData();
  }, [user]);

  // --- MONITORITZAR TOTES LES ENTREGUES DE L'ALUMNE ---
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "trameses"),
      where("alumneId", "==", user.uid),
      orderBy("data", "desc")
    );

    const unsub = onSnapshot(q, (snap) => {
      setEntregasAlumne(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, [user]);

  // --- MONITORITZAR ENTREGUES DE L'ALUMNE (material seleccionat) ---
  useEffect(() => {
    if (selectedMaterial && user) {
      const q = query(
        collection(db, "trameses"),
        where("materialId", "==", selectedMaterial.id),
        where("alumneId", "==", user.uid),
        orderBy("data", "desc")
      );
      
      const unsub = onSnapshot(q, (snap) => {
        if (!snap.empty) {
          setEntregaActual({ id: snap.docs[0].id, ...snap.docs[0].data() });
        } else {
          setEntregaActual(null);
        }
      });
      return () => unsub();
    } else {
      setEntregaActual(null);
    }
  }, [selectedMaterial, user]);

  // --- NETEJA D'ESTAT DE PUJADA EN CANVIAR DE MATERIAL ---
  useEffect(() => {
    setUploadStatus('');
    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [selectedMaterial?.id]);

  // --- LÒGICA PER OBRIR FITXERS SENSE ERROR DE CHROME ---
  const handleOpenFile = (url) => {
    const win = window.open();
    if (win) {
      win.opener = null;
      win.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // --- LÒGICA DE NOTIFICACIÓ ---
  const enviarNotificacioEmail = async (nomArxiu, titolTasca) => {
    try {
      const nomPerEmail = studentData?.nom || user.displayName || user.email;
      await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: `📦 Nova entrega: ${nomPerEmail}`,
          content: `L'alumne/a <strong>${nomPerEmail}</strong> ha pujat l'arxiu <strong>${nomArxiu}</strong> a la tasca <strong>${titolTasca}</strong>.`,
          tipus: 'entrega'
        })
      });
    } catch (err) {
      console.error("Error enviant notificació:", err);
    }
  };

  // --- LÒGICA DE PUJADA A CLOUDINARY ---
  const resetUploadInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadCloudinary = async (e) => {
    const input = e.target;
    const file = input?.files?.[0];
    if (!file || isUploading) return;

    if (!selectedMaterial?.id) {
      setUploadStatus('❌ Error: no s\'ha pogut identificar la tasca.');
      resetUploadInput();
      return;
    }

    if (!APP_CONFIG?.cloudName || !APP_CONFIG?.uploadPreset) {
      setUploadStatus('❌ Error: configuració de pujada no disponible.');
      resetUploadInput();
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      setUploadStatus('❌ El fitxer és massa gran. El límit són 50MB.');
      resetUploadInput();
      return;
    }

    setIsUploading(true);
    setUploadStatus('Preparant enviament...');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', APP_CONFIG.uploadPreset);
    formData.append('cloud_name', APP_CONFIG.cloudName);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${APP_CONFIG.cloudName}/auto/upload`, {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Error Cloudinary");

      setUploadStatus('Finalitzant entrega...');

      const dadesEntrega = {
        alumneNom: studentData?.nom || user.displayName || user.email || "Alumne",
        alumneId: user.uid,
        curs: studentData?.curs || "Curs no especificat",
        alumneCurs: studentData?.curs || "Curs no especificat",
        materialTitol: selectedMaterial.titol || "Sense títol",
        materialId: selectedMaterial.id,
        fileUrl: data.secure_url,
        urlCloudinary: data.secure_url,
        fileName: file.name,
        data: serverTimestamp(),
        dataLliurament: serverTimestamp()
      };

      await addDoc(collection(db, "trameses"), dadesEntrega);
      await enviarNotificacioEmail(file.name, selectedMaterial.titol);
      
      setUploadStatus('✅ Tasca lliurada correctament!');
      
    } catch (err) {
      console.error("Error en el procés d'entrega:", err);
      const missatge = err?.message || "No s'ha pogut completar l'entrega. Torna-ho a provar.";
      setUploadStatus(`❌ Error: ${missatge}`);
    } finally {
      setIsUploading(false);
      resetUploadInput();
    }
  };

  const teNota = entregaActual?.nota !== undefined && entregaActual?.nota !== null;

  // --- PANTALLA DE CÀRREGA ---
  if (loading) return (
    <div style={loadingScreenStyle(colors)}>
      <div className="spinner"></div>
      <p style={{ fontWeight: '600', color: colors.textLight }}>Sincronitzant el teu Campus...</p>
      <style>{`
        .spinner { width: 50px; height: 50px; border: 5px solid #e2e8f0; border-top-color: #2563eb; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', fontFamily: '"Inter", sans-serif', color: colors.textDark }}>
      
      <nav style={navStyle(colors)}>
        <div style={navContentStyle}>
          <div style={logoAreaStyle} onClick={() => setView('inici')}>
            {logoImg && <img src={logoImg} alt="Logo" style={{ height: '42px', borderRadius: '10px' }} />}
            <span style={brandTextStyle(colors)}>Campus Serra</span>
          </div>
          <div style={navLinksArea}>
            <button onClick={() => setView('inici')} style={navLink(view === 'inici', colors)}>Inici</button>
            <button onClick={() => setView('materials')} style={navLink(view === 'materials', colors)}>Aula Virtual</button>
            <button onClick={() => signOut(auth)} style={logoutBtn(colors)}>Tancar sessió</button>
          </div>
        </div>
      </nav>

      <main style={mainLayout}>
        
        {view === 'inici' && (
          <div className="fade-in">
            <div style={welcomeBanner(colors)}>
              <div style={{ flex: 1 }}>
                <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-1.5px' }}>Benvingut, {studentData?.nom}!</h1>
                <p style={{ margin: '15px 0 0 0', opacity: 0.9, fontSize: '1.2rem', fontWeight: '500' }}>
                  Curs actual: <strong>{studentData?.curs}</strong>
                </p>
              </div>
              <div style={{ fontSize: '5rem', opacity: 0.25 }}>🚀</div>
            </div>

            <h3 style={sectionLabel}>El teu progrés</h3>
            <div style={progressCardStyle(colors)}>
              {progrés.total === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px 20px', color: colors.textLight, fontWeight: '600', fontSize: '1.05rem' }}>
                  Encara no hi ha tasques assignades al teu curs.
                </div>
              ) : (
                <div style={progressLayoutStyle}>
                  <div style={progressDonutWrapStyle}>
                    <ProgressDonut percent={progrés.percent} colors={colors} />
                    <div style={progressDonutLabelStyle}>
                      <span style={{ fontSize: '2.2rem', fontWeight: '900', color: colors.primary }}>{progrés.percent}%</span>
                      <span style={{ fontSize: '0.85rem', color: colors.textLight, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Completat
                      </span>
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={progressStatsRowStyle}>
                      <div style={progressStatBoxStyle(colors, colors.primary)}>
                        <div style={progressStatValueStyle}>{progrés.completades}</div>
                        <div style={progressStatLabelStyle(colors)}>Tasques lliurades</div>
                      </div>
                      <div style={progressStatBoxStyle(colors, colors.warning)}>
                        <div style={progressStatValueStyle}>{progrés.total - progrés.completades}</div>
                        <div style={progressStatLabelStyle(colors)}>Pendents</div>
                      </div>
                      <div style={progressStatBoxStyle(colors, colors.success)}>
                        <div style={progressStatValueStyle}>{progrés.total}</div>
                        <div style={progressStatLabelStyle(colors)}>Total tasques</div>
                      </div>
                    </div>

                    <div style={{ marginTop: '35px' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: '900', color: colors.textLight, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px' }}>
                        Progrés per tema
                      </div>
                      {Object.entries(progrés.perTema).map(([tema, stats]) => {
                        const temaPercent = stats.total > 0 ? Math.round((stats.fetes / stats.total) * 100) : 0;
                        return (
                          <div key={tema} style={{ marginBottom: '22px' }}>
                            <div style={progressBarHeaderStyle}>
                              <span style={{ fontWeight: '800', color: colors.textDark, fontSize: '0.95rem' }}>{tema}</span>
                              <span style={{ fontSize: '0.85rem', color: colors.textLight, fontWeight: '700' }}>
                                {stats.fetes}/{stats.total} ({temaPercent}%)
                              </span>
                            </div>
                            <div style={progressBarTrackStyle(colors)}>
                              <div style={progressBarFillStyle(colors, temaPercent)} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <h3 style={sectionLabel}>Últimes Notícies</h3>
            {avisos.length === 0 ? (
              <div style={emptyState(colors)}>No hi ha avisos pendents.</div>
            ) : (
              avisos.map(a => (
                <div key={a.id} style={cardStyle(colors)}>
                  <div style={{ display: 'flex', gap: '25px' }}>
                    <div style={iconCircle(colors, '#eff6ff', colors.primary)}>📢</div>
                    <div style={{ flex: 1 }}>
                      <div style={textBodyStyle}>{a.contingut}</div>
                      <div style={dateStyle}>{a.data?.toDate().toLocaleDateString('ca-ES', { day: 'numeric', month: 'long' })}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {view === 'materials' && (
          <div className="fade-in">
            <div style={{ marginBottom: '45px' }}>
              <h2 style={{ fontWeight: '900', fontSize: '2.5rem', color: colors.textDark, margin: 0, letterSpacing: '-1.5px' }}>Materials del Curs</h2>
              <div style={{ height: '6px', width: '80px', backgroundColor: colors.primary, marginTop: '15px', borderRadius: '10px' }}></div>
            </div>

            {materials.length === 0 ? (
              <div style={emptyState(colors)}>Encara no s'ha publicat contingut.</div>
            ) : (
              Object.entries(
                materials.reduce((acc, m) => {
                  acc[m.tema] = acc[m.tema] || [];
                  acc[m.tema].push(m);
                  return acc;
                }, {})
              ).map(([tema, items]) => (
                <div key={tema} style={{ marginBottom: '55px' }}>
                  <h3 style={temaHeader(colors)}>{tema}</h3>
                  {items.map(m => {
                    const lliurada = entregasAlumne.some((e) => e.materialId === m.id);
                    return (
                      <div key={m.id} onClick={() => { setSelectedMaterial(m); setView('detall'); }} style={materialRowStyle(colors)}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                          <span style={{ fontSize: '2rem' }}>{APP_CONFIG.tipusIcons[m.tipus] || '📄'}</span>
                          <div>
                            <div style={{ fontWeight: '800', color: colors.textDark, fontSize: '1.15rem' }}>{m.titol}</div>
                            <div style={{ fontSize: '0.8rem', color: colors.textLight, textTransform: 'uppercase', fontWeight: '800', marginTop: '4px' }}>
                              {m.tipus}
                              {esTasca(m) && (
                                <span style={{ marginLeft: '10px', color: lliurada ? colors.success : colors.warning }}>
                                  {lliurada ? '· Lliurada' : '· Pendent'}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={dateStyle}>{m.data?.toDate().toLocaleDateString()}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        )}

        {view === 'detall' && selectedMaterial && (
          <div className="fade-in" style={{...cardStyle(colors), padding: '50px', borderRadius: '35px'}}>
            <button onClick={() => setView('materials')} style={backBtnStyle(colors)}>
              <span>←</span> Tornar als materials
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px' }}>
              <div style={iconCircle(colors, colors.bg, colors.primary)}>
                {APP_CONFIG.tipusIcons[selectedMaterial.tipus]}
              </div>
              <div>
                <h2 style={{ margin: 0, fontWeight: '900', fontSize: '2.2rem', letterSpacing: '-1px' }}>{selectedMaterial.titol}</h2>
                <span style={{ color: colors.textLight, fontWeight: '800', textTransform: 'uppercase', fontSize: '0.9rem' }}>{selectedMaterial.tipus}</span>
              </div>
            </div>
            
            <div style={instruccionsBoxStyle}>
              <div style={{ ...textBodyStyle, whiteSpace: 'pre-wrap', fontSize: '1.15rem', lineHeight: '1.8' }}>
                {selectedMaterial.descripcio || "No hi ha instruccions detallades per a aquest material."}
              </div>
            </div>

            {selectedMaterial.url && (
              <button 
                onClick={() => handleOpenFile(selectedMaterial.url)} 
                style={{...attachmentCardStyle(colors), width: '100%', border: 'none', cursor: 'pointer', textAlign: 'left'}}
              >
                <div style={{ fontSize: '2rem' }}>📂</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Descarregar recurs adjunt</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Fitxer original compartit pel professorat</div>
                </div>
                <div style={{ fontSize: '1.5rem', color: colors.primary }}>↗</div>
              </button>
            )}

            {selectedMaterial.tipus?.toLowerCase().includes('tasca') && (
              <div style={submissionSectionStyle(colors)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.6rem', margin: 0, fontWeight: '900' }}>El teu lliurament</h3>
                  <div style={{ fontSize: '0.85rem', color: colors.textLight, fontWeight: '700', backgroundColor: '#fff', padding: '5px 12px', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                    Mida màxima: 50MB
                  </div>
                </div>
                
                <div style={{ marginBottom: '35px' }}>
                  <label style={uploadDropzoneStyle(isUploading, colors)}>
                    {isUploading ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                        <div className="spinner-white"></div>
                        <span style={{ letterSpacing: '1px' }}>{uploadStatus}</span>
                      </div>
                    ) : (
                      <div>
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📤</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: '900' }}>Prem aquí per seleccionar el fitxer</div>
                        <div style={{ fontSize: '1rem', fontWeight: '500', marginTop: '10px', opacity: 0.7 }}>Admet PDF, ZIP, DOCX i Imatges</div>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      hidden
                      onChange={handleUploadCloudinary}
                      disabled={isUploading}
                    />
                  </label>
                  
                  {uploadStatus.includes('✅') && !isUploading && (
                    <div style={{ ...statusText(colors.success), backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '15px', marginTop: '20px', border: `1px solid ${colors.success}` }}>
                      {uploadStatus}
                    </div>
                  )}

                  {uploadStatus.startsWith('❌') && !isUploading && (
                    <div style={{ ...statusText(colors.danger), backgroundColor: '#fef2f2', padding: '15px', borderRadius: '15px', marginTop: '20px', border: `1px solid ${colors.danger}` }}>
                      {uploadStatus}
                    </div>
                  )}
                </div>

                {entregaActual && (
                  <div style={confirmedSubmissionStyle(colors)}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: colors.success }}></div>
                          <div style={{ fontWeight: '900', fontSize: '0.8rem', color: colors.success, textTransform: 'uppercase' }}>Lliurat correctament</div>
                        </div>
                        {teNota && (
                          <span style={notaBadgeStyle(colors)}>
                            Qualificat: {entregaActual.nota}/10
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '1.1rem', color: colors.textDark, marginTop: '10px', fontWeight: '800' }}>{entregaActual.fileName}</div>
                      <div style={{ fontSize: '0.85rem', color: colors.textLight, marginTop: '5px', fontWeight: '600' }}>
                        Data: {entregaActual.data?.toDate().toLocaleString('ca-ES')}
                      </div>
                    </div>
                    <button onClick={() => handleOpenFile(entregaActual.fileUrl)} style={viewBtnStyle(colors)}>Revisar Enviament</button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <style>{`
        .fade-in { animation: fadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .spinner-white { width: 30px; height: 30px; border: 4px solid rgba(255,255,255,0.2); border-top-color: #fff; border-radius: 50%; animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        button { transition: all 0.2s ease; border: none; background: none; }
        button:hover { filter: brightness(0.9); transform: translateY(-2px); }
      `}</style>
    </div>
  );
}

// --- GRÀFIC CIRCULAR DE PROGRÉS ---
function ProgressDonut({ percent, colors }) {
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const size = 200;
  const center = size / 2;

  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={colors.border}
        strokeWidth="16"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={colors.primary}
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${center} ${center})`}
        style={{ transition: 'stroke-dashoffset 0.6s ease' }}
      />
    </svg>
  );
}

// --- OBJECTES D'ESTIL (TOTALMENT RESTAURATS) ---

const loadingScreenStyle = (c) => ({
  display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', 
  justifyContent: 'center', backgroundColor: c.bg
});

const navStyle = (c) => ({
  backgroundColor: '#ffffff', borderBottom: `1px solid ${c.border}`, 
  padding: '0 40px', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
});

const navContentStyle = {
  maxWidth: '1100px', margin: '0 auto', display: 'flex', 
  justifyContent: 'space-between', alignItems: 'center', height: '90px'
};

const logoAreaStyle = { display: 'flex', alignItems: 'center', gap: '18px', cursor: 'pointer' };

const brandTextStyle = (c) => ({ fontWeight: '950', fontSize: '1.6rem', color: c.textDark, letterSpacing: '-1px' });

const navLinksArea = { display: 'flex', gap: '40px', alignItems: 'center' };

const navLink = (active, c) => ({
  background: 'none', border: 'none', padding: '15px 0', cursor: 'pointer', fontSize: '1.05rem',
  borderBottom: active ? `4px solid ${c.primary}` : '4px solid transparent',
  color: active ? c.primary : c.textLight, fontWeight: active ? '900' : '600'
});

const logoutBtn = (c) => ({
  padding: '12px 26px', borderRadius: '15px', border: `1.5px solid ${c.border}`,
  background: 'white', color: c.danger, fontWeight: '800', cursor: 'pointer', fontSize: '0.95rem'
});

const mainLayout = { maxWidth: '1000px', margin: '60px auto', padding: '0 40px', boxSizing: 'border-box' };

const welcomeBanner = (c) => ({
  background: `linear-gradient(135deg, ${c.primary}, ${c.accent})`,
  color: 'white', padding: '60px', borderRadius: '40px', marginBottom: '60px',
  boxShadow: '0 25px 50px rgba(37, 99, 235, 0.2)', display: 'flex', alignItems: 'center'
});

const sectionLabel = { 
  fontSize: '0.9rem', textTransform: 'uppercase', color: '#94a3b8', 
  marginBottom: '30px', fontWeight: '900', letterSpacing: '2px', paddingLeft: '5px' 
};

const progressCardStyle = (c) => ({
  background: c.card,
  borderRadius: '30px',
  padding: '45px',
  border: `1px solid ${c.border}`,
  marginBottom: '60px',
  boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
});

const progressLayoutStyle = {
  display: 'flex',
  gap: '50px',
  alignItems: 'center',
  flexWrap: 'wrap'
};

const progressDonutWrapStyle = {
  position: 'relative',
  flexShrink: 0
};

const progressDonutLabelStyle = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none'
};

const progressStatsRowStyle = {
  display: 'flex',
  gap: '18px',
  flexWrap: 'wrap'
};

const progressStatBoxStyle = (c, accent) => ({
  flex: '1 1 120px',
  backgroundColor: '#f8fafc',
  borderRadius: '20px',
  padding: '22px 20px',
  border: `1px solid ${c.border}`,
  borderTop: `4px solid ${accent}`
});

const progressStatValueStyle = {
  fontSize: '2rem',
  fontWeight: '900',
  color: '#0f172a',
  lineHeight: 1
};

const progressStatLabelStyle = (c) => ({
  fontSize: '0.8rem',
  color: c.textLight,
  fontWeight: '700',
  marginTop: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
});

const progressBarHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
  gap: '15px'
};

const progressBarTrackStyle = (c) => ({
  height: '12px',
  backgroundColor: '#e2e8f0',
  borderRadius: '999px',
  overflow: 'hidden'
});

const progressBarFillStyle = (c, percent) => ({
  height: '100%',
  width: `${percent}%`,
  backgroundColor: c.primary,
  borderRadius: '999px',
  transition: 'width 0.6s ease'
});

const cardStyle = (c) => ({
  background: c.card, borderRadius: '30px', padding: '45px', border: `1px solid ${c.border}`,
  marginBottom: '35px', boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
});

const iconCircle = (c, bg, color) => ({
  width: '70px', height: '70px', borderRadius: '22px', backgroundColor: bg,
  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: color
});

const textBodyStyle = { fontSize: '1.15rem', lineHeight: '1.9', color: '#334155' };

const dateStyle = { fontSize: '0.95rem', color: '#94a3b8', fontWeight: '700' };

const temaHeader = (c) => ({
  fontSize: '1.8rem', color: c.textDark, fontWeight: '900', paddingBottom: '20px',
  borderBottom: `6px solid ${c.primary}`, marginBottom: '35px', marginTop: '20px', 
  display: 'inline-block', letterSpacing: '-0.5px'
});

const materialRowStyle = (c) => ({
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '28px 35px', backgroundColor: '#fff', border: `1px solid ${c.border}`,
  borderRadius: '25px', marginBottom: '20px', cursor: 'pointer',
  boxShadow: '0 6px 15px rgba(0,0,0,0.01)'
});

const backBtnStyle = (c) => ({
  background: 'none', border: 'none', color: c.textLight, cursor: 'pointer',
  fontWeight: '800', marginBottom: '40px', fontSize: '1.1rem', padding: 0, 
  display: 'flex', alignItems: 'center', gap: '10px'
});

const instruccionsBoxStyle = {
  backgroundColor: '#f8fafc', padding: '35px', borderRadius: '25px', 
  border: '1px solid #e2e8f0', marginBottom: '40px'
};

const attachmentCardStyle = (c) => ({
  display: 'flex', alignItems: 'center', gap: '25px', padding: '30px',
  borderRadius: '25px', border: `1px solid ${c.border}`, textDecoration: 'none',
  color: c.textDark, marginTop: '25px', backgroundColor: '#fff', 
  boxShadow: '0 5px 15px rgba(0,0,0,0.02)'
});

const submissionSectionStyle = (c) => ({
  marginTop: '70px', borderTop: `2px solid ${c.border}`, paddingTop: '60px'
});

const uploadDropzoneStyle = (loading, c) => ({
  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
  padding: '70px 50px', textAlign: 'center', border: `4px dashed ${c.primary}`, 
  borderRadius: '35px', cursor: loading ? 'not-allowed' : 'pointer', 
  color: loading ? '#fff' : c.primary, fontWeight: '900', 
  backgroundColor: loading ? c.primary : '#eff6ff'
});

const statusText = (color) => ({ 
  fontSize: '1.1rem', color: color, fontWeight: '800', marginTop: '30px', textAlign: 'center' 
});

const confirmedSubmissionStyle = (c) => ({
  display: 'flex', alignItems: 'center', gap: '35px', padding: '30px 40px',
  borderRadius: '28px', border: `2px solid ${c.success}`, backgroundColor: '#f0fdf4', 
  marginTop: '35px', boxShadow: '0 8px 20px rgba(16, 185, 129, 0.08)'
});

const viewBtnStyle = (c) => ({
  fontSize: '1rem', color: c.primary, fontWeight: '900', textDecoration: 'none',
  padding: '14px 28px', border: `2.5px solid ${c.primary}`, borderRadius: '16px', 
  backgroundColor: '#fff', cursor: 'pointer'
});

const notaBadgeStyle = (c) => ({
  fontSize: '0.75rem',
  fontWeight: '900',
  textTransform: 'uppercase',
  letterSpacing: '0.6px',
  padding: '7px 16px',
  borderRadius: '12px',
  backgroundColor: '#eff6ff',
  color: c.primaryDark,
  border: `1.5px solid ${c.primary}`,
  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.12)',
  whiteSpace: 'nowrap'
});

const emptyState = (c) => ({
  padding: '100px', textAlign: 'center', color: c.textLight, 
  border: `4px dashed ${c.border}`, borderRadius: '40px', 
  fontStyle: 'italic', fontSize: '1.3rem', fontWeight: '600'
});