import React, { useState, useEffect, useMemo } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  setDoc,
  onSnapshot,
  getDocs,
  getDoc,
  where,
  updateDoc
} from 'firebase/firestore';

const EXTENSIONS_IMATGE = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg', 'heic'];

const obtenirTipusRecursCloudinary = (fileName) => {
  const ext = (fileName || '').split('.').pop()?.toLowerCase() || '';
  return EXTENSIONS_IMATGE.includes(ext) ? 'image' : 'raw';
};

const normalitzarUrlCloudinary = (url, fileName = '') => {
  if (!url || typeof url !== 'string') return '';
  const tipus = obtenirTipusRecursCloudinary(fileName);
  if (tipus === 'raw' && url.includes('/image/upload/')) {
    return url.replace('/image/upload/', '/raw/upload/');
  }
  if (tipus === 'image' && url.includes('/raw/upload/')) {
    return url.replace('/raw/upload/', '/image/upload/');
  }
  return url;
};

const obtenirUrlCloudinaryTramesa = (tramesa) =>
  normalitzarUrlCloudinary(tramesa?.urlCloudinary || tramesa?.fileUrl || '', tramesa?.fileName);

function TaulaRevisioTrameses({ entregues, colors, onGuardarNota }) {
  if (entregues.length === 0) {
    return (
      <tr>
        <td
          colSpan={5}
          style={{
            padding: '40px 15px',
            textAlign: 'center',
            color: colors.textLight,
            fontStyle: 'italic'
          }}
        >
          Cap alumne ha lliurat aquesta tasca encara.
        </td>
      </tr>
    );
  }

  return entregues.map((tramesa) => {
    const urlCloudinary = obtenirUrlCloudinaryTramesa(tramesa);
    const timestamp = tramesa.dataLliurament || tramesa.data;

    return (
      <tr key={tramesa.id} style={{ borderBottom: `1px solid ${colors.border}` }}>
        <td style={{ padding: '14px 15px', fontWeight: '700' }}>
          {tramesa.alumneNom || 'Alumne sense nom'}
        </td>
        <td style={{ padding: '14px 15px', color: colors.primary, fontWeight: '600', fontSize: '0.85rem' }}>
          {tramesa.alumneCurs || tramesa.curs || '—'}
        </td>
        <td style={{ padding: '14px 15px', color: colors.textLight, fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
          {timestamp && typeof timestamp.toDate === 'function'
            ? timestamp.toDate().toLocaleDateString('ca-ES')
            : 'Sense data'}
        </td>
        <td style={{ padding: '14px 15px' }}>
          {urlCloudinary ? (
            <a
              href={urlCloudinary}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'underline' }}
            >
              Veure Fitxer
            </a>
          ) : (
            <span style={{ color: colors.textLight, fontSize: '0.8rem' }}>Sense arxiu</span>
          )}
        </td>
        <td style={{ padding: '14px 15px' }}>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="-"
            defaultValue={tramesa.nota ?? ''}
            key={`nota-revisio-${tramesa.id}-${tramesa.nota ?? 'buida'}`}
            onBlur={(e) => onGuardarNota(tramesa, e.target.value)}
            style={{
              width: '70px',
              padding: '8px',
              borderRadius: '8px',
              border: `1px solid ${colors.border}`,
              textAlign: 'center',
              fontWeight: '700'
            }}
          />
        </td>
      </tr>
    );
  });
}

export default function AdminPanel({ APP_CONFIG, logoImg }) {
  const LLISTA_CURSOS = [
    '1r ESO', '2n ESO', '3r ESO', '4t ESO A', '4t ESO B',
    '1r Batxillerat Científic', '1r Batxillerat CCSS', '1r Batxillerat General',
    '2n Batxillerat Científic', '2n Batxillerat CCSS'
  ];

  const WORKER_URL = 'https://brevo-proxy.serradequacions.workers.dev';

  const [temesBD, setTemesBD] = useState({});
  const [materials, setMaterials] = useState([]);
  const [avisosLlista, setAvisosLlista] = useState([]);
  const [trameses, setTrameses] = useState([]);

  const [avisContingut, setAvisContingut] = useState('');
  const [avisCursos, setAvisCursos] = useState([]);
  const [recursTitol, setRecursTitol] = useState('');
  const [recursUrl, setRecursUrl] = useState('');
  const [recursDescripcio, setRecursDescripcio] = useState('');
  const [recursCursos, setRecursCursos] = useState([]);
  const [recursTipus, setRecursTipus] = useState('Teoria');
  const [recursTema, setRecursTema] = useState('');
  const [temaLliure, setTemaLliure] = useState('');

  const [activeTab, setActiveTab] = useState('avisos');
  const [expandedCurs, setExpandedCurs] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [materialRevisio, setMaterialRevisio] = useState(null);

  const colors = {
    primary: '#2563eb',
    bg: '#f8fafc',
    card: '#ffffff',
    textDark: '#0f172a',
    textLight: '#64748b',
    border: '#e2e8f0',
    danger: '#ef4444',
    success: '#10b981',
    accent: '#3b82f6'
  };

  const esTasca = (material) => material?.tipus?.toLowerCase().includes('tasca');

  const entregaPertanyAMaterial = (entrega, material) => {
    if (!entrega || !material) return false;

    const idMaterial = material.id;
    const idEntrega = entrega.materialId;

    if (idMaterial && idEntrega && String(idEntrega) === String(idMaterial)) {
      return true;
    }

    const titolMaterial = (material.titol || '').trim().toLowerCase();
    const titolEntrega = (entrega.materialTitol || '').trim().toLowerCase();
    if (titolMaterial && titolEntrega && titolMaterial === titolEntrega) {
      return true;
    }

    return false;
  };

  const entreguesPerRevisio = useMemo(() => {
    if (!materialRevisio) return [];
    return trameses.filter((tramesa) => entregaPertanyAMaterial(tramesa, materialRevisio));
  }, [trameses, materialRevisio]);

  useEffect(() => {
    const unsubMat = onSnapshot(query(collection(db, 'materials'), orderBy('data', 'desc')), (snap) => {
      setMaterials(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    const unsubAv = onSnapshot(query(collection(db, 'avisos'), orderBy('data', 'desc')), (snap) => {
      setAvisosLlista(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    const unsubTemes = onSnapshot(collection(db, 'config_temes'), (snap) => {
      const obj = {};
      snap.forEach((d) => {
        obj[d.id] = d.data().llista || [];
      });
      setTemesBD(obj);
    });

    const unsubTram = onSnapshot(query(collection(db, 'trameses'), orderBy('data', 'desc')), (snap) => {
      setTrameses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => {
      unsubMat();
      unsubAv();
      unsubTemes();
      unsubTram();
    };
  }, []);

  const obtenirEmailAlumne = async (alumneId) => {
    if (!alumneId) return null;
    try {
      const snap = await getDoc(doc(db, 'usuaris', alumneId));
      if (snap.exists()) {
        return snap.data().email || null;
      }
    } catch (e) {
      console.error('Error obtenint el correu de l\'alumne:', e);
    }
    return null;
  };

  const enviarCorreuNota = async (correuAlumne, nomAlumne, titolTasca, nota) => {
    if (!correuAlumne) {
      console.warn('No es pot enviar el correu de nota: l\'alumne no té email registrat.');
      return;
    }

    const nom = nomAlumne || 'Alumne';
    const tasca = titolTasca || 'la teva tasca';
    const notaText = Number.isInteger(nota) ? String(nota) : String(nota);

    const assumpte = "Nova qualificació disponible a Serra d'Equacions";
    const contingut = [
      `Hola <strong>${nom}</strong>,`,
      '',
      `El professor ha qualificat la teva tasca <strong>"${tasca}"</strong> amb una nota de <strong>${notaText}/10</strong>.`,
      '',
      'Pots entrar al Campus per veure els detalls de la teva entrega i la resta de materials del curs.',
      '',
      'Atentament,',
      "<strong>Equip Serra d'Equacions</strong>"
    ].join('<br>');

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: [correuAlumne],
          tipus: 'nota',
          titol: assumpte,
          subject: assumpte,
          contingut,
          content: contingut,
          url: 'https://serradequacions.github.io/Serra-d-equacions/'
        })
      });

      if (!res.ok) {
        console.error('Error del proxy Brevo en enviar correu de nota:', await res.text());
      }
    } catch (e) {
      console.error('Error enviant correu de nota:', e);
    }
  };

  const handleGuardarNota = async (tramesa, valor) => {
    if (!tramesa?.id) return;

    const valorNet = String(valor).trim();
    const notaAnterior = tramesa.nota ?? null;

    if (valorNet === '') {
      if (notaAnterior === null || notaAnterior === undefined) return;
      try {
        await updateDoc(doc(db, 'trameses', tramesa.id), { nota: null });
      } catch (e) {
        console.error('Error esborrant la nota:', e);
        alert("No s'ha pogut actualitzar la nota. Torna-ho a provar.");
      }
      return;
    }

    const nota = parseFloat(valorNet);
    if (Number.isNaN(nota)) return;

    const notaPreviaNum = notaAnterior === null || notaAnterior === undefined
      ? null
      : parseFloat(notaAnterior);

    if (notaPreviaNum !== null && !Number.isNaN(notaPreviaNum) && notaPreviaNum === nota) {
      return;
    }

    try {
      await updateDoc(doc(db, 'trameses', tramesa.id), { nota });

      const correuAlumne = await obtenirEmailAlumne(tramesa.alumneId);
      const titolTasca = tramesa.materialTitol || materialRevisio?.titol || 'Tasca';

      await enviarCorreuNota(
        correuAlumne,
        tramesa.alumneNom,
        titolTasca,
        nota
      );
    } catch (e) {
      console.error('Error guardant nota:', e);
      alert("No s'ha pogut guardar la nota. Torna-ho a provar.");
    }
  };

  const obrirFitxer = (url) => {
    if (!url) return;
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (win) win.opener = null;
  };

  const obrirRevisio = (material) => {
    setMaterialRevisio(material);
    setActiveTab('materials');
  };

  const tancarRevisio = () => {
    setMaterialRevisio(null);
  };

  const getEmailsAlumnes = async (cursosSeleccionats) => {
    try {
      const q = query(collection(db, 'usuaris'), where('curs', 'in', cursosSeleccionats));
      const snap = await getDocs(q);
      return snap.docs.map((d) => d.data().email).filter((email) => !!email);
    } catch (e) {
      console.error('Error obtenint emails:', e);
      return [];
    }
  };

  const handleNotificar = async (tipus, titol, contingut, cursos) => {
    try {
      const llistaEmails = await getEmailsAlumnes(cursos);
      if (llistaEmails.length === 0) return;

      await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: llistaEmails,
          tipus,
          titol,
          contingut,
          url: 'https://serradequacions.github.io/Serra-d-equacions/'
        })
      });
    } catch (e) {
      console.error('Error enviant notificació Worker:', e);
    }
  };

  const handlePublicarAvis = async () => {
    if (!avisContingut || avisCursos.length === 0) return alert('Escriu un missatge i tria cursos.');
    setIsPublishing(true);
    try {
      await addDoc(collection(db, 'avisos'), {
        contingut: avisContingut,
        cursos: avisCursos,
        data: serverTimestamp()
      });
      await handleNotificar('avis', 'Nou avís al campus', avisContingut, avisCursos);
      setAvisContingut('');
      setAvisCursos([]);
      alert('Avís enviat.');
    } catch (e) {
      alert(e.message);
    } finally {
      setIsPublishing(false);
    }
  };

  const handlePublicarMaterial = async () => {
    const temaFinal = temaLliure || recursTema;
    if (!recursTitol || recursCursos.length === 0 || !temaFinal) return alert('Falten dades.');
    setIsPublishing(true);
    try {
      if (temaLliure) {
        for (const c of recursCursos) {
          const actuals = temesBD[c] || [];
          if (!actuals.includes(temaLliure)) {
            await setDoc(doc(db, 'config_temes', c), { llista: [...actuals, temaLliure] });
          }
        }
      }
      await addDoc(collection(db, 'materials'), {
        titol: recursTitol,
        url: recursUrl,
        descripcio: recursDescripcio,
        cursos: recursCursos,
        tipus: recursTipus,
        tema: temaFinal,
        data: serverTimestamp()
      });
      await handleNotificar('material', recursTitol, `Nou material: ${recursTitol}`, recursCursos);
      setRecursTitol('');
      setRecursUrl('');
      setRecursDescripcio('');
      setRecursTema('');
      setTemaLliure('');
      setRecursCursos([]);
      alert('Material publicat.');
    } catch (e) {
      alert(e.message);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleEsborrar = async (col, id) => {
    if (window.confirm('Eliminar?')) {
      try {
        await deleteDoc(doc(db, col, id));
      } catch (e) {
        alert(e.message);
      }
    }
  };

  const toggleCheckbox = (curs, state, setState) => {
    setState((prev) => (prev.includes(curs) ? prev.filter((c) => c !== curs) : [...prev, curs]));
  };

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', padding: '40px 20px', fontFamily: '"Inter", sans-serif' }}>
      <header style={{ maxWidth: '1250px', margin: '0 auto 40px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {logoImg && <img src={logoImg} alt="Logo" style={{ height: '60px', borderRadius: '12px' }} />}
          <h1 style={{ margin: 0, fontSize: '1.6rem', color: colors.textDark, fontWeight: '800' }}>Gestió del Campus (Admin)</h1>
        </div>
        <button onClick={() => signOut(auth)} style={logoutBtnStyle(colors)}>Tancar sessió</button>
      </header>

      <div style={{ maxWidth: '1250px', margin: '0 auto', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '30px' }}>
        <aside>
          <div style={cardStyle(colors)}>
            <h3 style={cardTitleStyle(colors)}>📢 Crear Nou Avís</h3>
            <textarea placeholder="Missatge..." value={avisContingut} onChange={(e) => setAvisContingut(e.target.value)} style={textareaStyle(colors)} />
            <div style={checkboxGrid}>
              {LLISTA_CURSOS.map((curs) => (
                <label key={curs} style={checkLabel}>
                  <input type="checkbox" checked={avisCursos.includes(curs)} onChange={() => toggleCheckbox(curs, avisCursos, setAvisCursos)} /> {curs}
                </label>
              ))}
            </div>
            <button onClick={handlePublicarAvis} disabled={isPublishing} style={primaryButtonStyle(colors)}>Publicar Avís</button>
          </div>

          <div style={cardStyle(colors)}>
            <h3 style={cardTitleStyle(colors)}>📚 Pujar Material / Tasca</h3>
            <input placeholder="Títol" value={recursTitol} onChange={(e) => setRecursTitol(e.target.value)} style={inputStyle(colors)} />
            <input placeholder="URL" value={recursUrl} onChange={(e) => setRecursUrl(e.target.value)} style={inputStyle(colors)} />
            <textarea placeholder="Descripció..." value={recursDescripcio} onChange={(e) => setRecursDescripcio(e.target.value)} style={{ ...textareaStyle(colors), height: '60px' }} />

            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '0.75rem', color: colors.textLight, marginBottom: '8px', fontWeight: '600' }}>Tipus</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Object.keys(APP_CONFIG?.tipusIcons || {}).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setRecursTipus(t)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: `2px solid ${recursTipus === t ? colors.primary : colors.border}`,
                      backgroundColor: recursTipus === t ? '#dbeafe' : '#f8fafc',
                      color: recursTipus === t ? colors.primary : colors.textDark,
                      fontWeight: recursTipus === t ? '700' : '400',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.15s'
                    }}
                  >
                    <span>{APP_CONFIG?.tipusIcons?.[t]}</span>
                    <span>{t}</span>
                  </button>
                ))}
              </div>
            </div>

            <select value={recursTema} onChange={(e) => setRecursTema(e.target.value)} style={inputStyle(colors)}>
              <option value="">Tema...</option>
              {[...new Set(recursCursos.flatMap((c) => temesBD[c] || []))].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <input placeholder="Nou tema..." value={temaLliure} onChange={(e) => setTemaLliure(e.target.value)} style={inputStyle(colors)} />
            <div style={checkboxGrid}>
              {LLISTA_CURSOS.map((curs) => (
                <label key={curs} style={checkLabel}>
                  <input type="checkbox" checked={recursCursos.includes(curs)} onChange={() => toggleCheckbox(curs, recursCursos, setRecursCursos)} /> {curs}
                </label>
              ))}
            </div>
            <button onClick={handlePublicarMaterial} disabled={isPublishing} style={{ ...primaryButtonStyle(colors), backgroundColor: colors.success }}>Publicar</button>
          </div>
        </aside>

        <main style={cardStyle(colors)}>
          <div style={tabsHeader(colors)}>
            <button onClick={() => setActiveTab('avisos')} style={tabButtonStyle(activeTab === 'avisos', colors)}>Avisos</button>
            <button onClick={() => setActiveTab('materials')} style={tabButtonStyle(activeTab === 'materials', colors)}>Continguts</button>
            <button onClick={() => setActiveTab('trameses')} style={tabButtonStyle(activeTab === 'trameses', colors)}>
              Entregues {trameses.length > 0 && <span style={counterBadge}>{trameses.length}</span>}
            </button>
          </div>

          {activeTab === 'trameses' && (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: `2px solid ${colors.border}`, color: colors.textLight }}>
                    <th style={{ padding: '15px' }}>Alumne/Curs</th>
                    <th style={{ padding: '15px' }}>Tasca</th>
                    <th style={{ padding: '15px' }}>Fitxer</th>
                    <th style={{ padding: '15px' }}>Nota / 10</th>
                    <th style={{ padding: '15px' }}>Accions</th>
                  </tr>
                </thead>
                <tbody>
                  {trameses.length === 0 ? (
                    <tr>
                      <td colSpan={5} style={{ padding: '30px', textAlign: 'center', color: colors.textLight, fontStyle: 'italic' }}>
                        Encara no hi ha cap entrega registrada.
                      </td>
                    </tr>
                  ) : (
                    trameses.map((tramesa) => {
                      const urlCloudinary = obtenirUrlCloudinaryTramesa(tramesa);
                      return (
                        <tr key={tramesa.id} style={{ borderBottom: `1px solid ${colors.border}` }}>
                          <td style={{ padding: '15px' }}>
                            <div style={{ fontWeight: '700' }}>{tramesa.alumneNom || 'Alumne sense nom'}</div>
                            <div style={{ fontSize: '0.75rem', color: colors.primary }}>{tramesa.alumneCurs || tramesa.curs || '—'}</div>
                          </td>
                          <td style={{ padding: '15px' }}>{tramesa.materialTitol || '—'}</td>
                          <td style={{ padding: '15px' }}>
                            {urlCloudinary ? (
                              <a
                                href={urlCloudinary}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'underline' }}
                              >
                                Veure Fitxer
                              </a>
                            ) : (
                              <span style={{ color: colors.textLight, fontSize: '0.8rem' }}>Sense arxiu</span>
                            )}
                          </td>
                          <td style={{ padding: '15px' }}>
                            <input
                              type="number"
                              step="0.1"
                              min="0"
                              max="10"
                              placeholder="-"
                              defaultValue={tramesa.nota ?? ''}
                              key={`nota-global-${tramesa.id}-${tramesa.nota ?? 'buida'}`}
                              onBlur={(e) => handleGuardarNota(tramesa, e.target.value)}
                              style={{ width: '60px', padding: '8px', borderRadius: '8px', border: `1px solid ${colors.border}`, textAlign: 'center', fontWeight: '700' }}
                            />
                          </td>
                          <td style={{ padding: '15px' }}>
                            <button type="button" onClick={() => handleEsborrar('trameses', tramesa.id)} style={deleteBtn}>✕</button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'avisos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {avisosLlista.map((a) => (
                <div key={a.id} style={listItemStyle(colors)}>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '0.95rem' }}>{a.contingut}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {a.cursos?.map((c) => (
                        <span key={c} style={badgeStyle(colors)}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <button type="button" onClick={() => handleEsborrar('avisos', a.id)} style={deleteBtn}>✕</button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'materials' && (
            <div>
              {LLISTA_CURSOS.map((curs) => (
                <div key={curs} style={cursAccordion(colors)}>
                  <div onClick={() => setExpandedCurs(expandedCurs === curs ? null : curs)} style={cursHeader(colors)}>
                    <span style={{ fontWeight: '700' }}>📂 {curs}</span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                      {materials.filter((m) => m.cursos?.includes(curs)).length} elements
                    </span>
                  </div>
                  {expandedCurs === curs && (
                    <div style={{ padding: '10px 20px', backgroundColor: 'white' }}>
                      {materials.filter((m) => m.cursos?.includes(curs)).map((m) => {
                        const numEntregues = trameses.filter((tramesa) => entregaPertanyAMaterial(tramesa, m)).length;
                        return (
                          <div key={m.id} style={materialRow(colors)}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                              <span style={{ fontSize: '1.2rem' }}>{APP_CONFIG?.tipusIcons?.[m.tipus] || '📄'}</span>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{m.titol}</div>
                                <div style={{ fontSize: '0.7rem', color: colors.textLight }}>{m.tema} · {m.tipus}</div>
                              </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                              {esTasca(m) && (
                                <button type="button" onClick={() => obrirRevisio(m)} style={revisarBtnStyle(colors)}>
                                  Revisar {numEntregues > 0 ? `(${numEntregues})` : ''}
                                </button>
                              )}
                              <button type="button" onClick={() => handleEsborrar('materials', m.id)} style={deleteTextBtn}>Eliminar</button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {materialRevisio && (
        <div style={modalOverlayStyle} onClick={tancarRevisio}>
          <div
            style={modalContentStyle(colors)}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="revisio-titol"
          >
            <div style={modalHeaderStyle}>
              <div>
                <h3 id="revisio-titol" style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', color: colors.textDark }}>
                  Revisió de la tasca
                </h3>
                <p style={{ margin: '8px 0 0 0', color: colors.textLight, fontSize: '0.9rem' }}>
                  {materialRevisio.titol}
                </p>
              </div>
              <button type="button" onClick={tancarRevisio} style={modalCloseBtnStyle(colors)} aria-label="Tancar">
                ✕
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: `2px solid ${colors.border}`, color: colors.textLight }}>
                    <th style={{ padding: '12px 15px' }}>Nom</th>
                    <th style={{ padding: '12px 15px' }}>Curs</th>
                    <th style={{ padding: '12px 15px' }}>Data</th>
                    <th style={{ padding: '12px 15px' }}>Arxiu</th>
                    <th style={{ padding: '12px 15px' }}>Nota</th>
                  </tr>
                </thead>
                <tbody>
                  <TaulaRevisioTrameses
                    entregues={entreguesPerRevisio}
                    colors={colors}
                    onGuardarNota={handleGuardarNota}
                  />
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: colors.textLight, fontWeight: '600' }}>
              {entreguesPerRevisio.length} entrega{entreguesPerRevisio.length === 1 ? '' : 'es'} per aquesta tasca
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const cardStyle = (c) => ({ background: c.card, borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: `1px solid ${c.border}`, marginBottom: '25px' });
const cardTitleStyle = (c) => ({ margin: '0 0 20px 0', fontSize: '1.1rem', color: c.textDark, fontWeight: '800', borderLeft: `4px solid ${c.primary}`, paddingLeft: '12px' });
const inputStyle = (c) => ({ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '10px', border: `1px solid ${c.border}`, fontSize: '0.9rem', boxSizing: 'border-box' });
const textareaStyle = (c) => ({ ...inputStyle(c), height: '80px', resize: 'none', fontFamily: 'inherit' });
const primaryButtonStyle = (c) => ({ width: '100%', padding: '14px', backgroundColor: c.primary, color: 'white', border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' });
const checkboxGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '12px', backgroundColor: '#f1f5f9', borderRadius: '10px', marginBottom: '20px', maxHeight: '150px', overflowY: 'auto' };
const checkLabel = { fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' };
const tabsHeader = (c) => ({ display: 'flex', gap: '30px', borderBottom: `2px solid ${c.border}`, marginBottom: '25px' });
const tabButtonStyle = (active, c) => ({ padding: '12px 5px', border: 'none', background: 'none', borderBottom: active ? `3px solid ${c.primary}` : '3px solid transparent', color: active ? c.primary : c.textLight, fontWeight: '700', cursor: 'pointer' });
const listItemStyle = (c) => ({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: `1px solid ${c.border}`, borderRadius: '12px', backgroundColor: '#fff' });
const badgeStyle = (c) => ({ fontSize: '0.65rem', backgroundColor: '#dbeafe', color: c.primary, padding: '3px 8px', borderRadius: '5px', fontWeight: '800' });
const deleteBtn = { color: '#cbd5e1', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2rem' };
const deleteTextBtn = { color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600' };
const logoutBtnStyle = (c) => ({ padding: '10px 20px', border: `1px solid ${c.danger}`, color: c.danger, borderRadius: '10px', background: 'none', fontWeight: '700', cursor: 'pointer' });
const cursAccordion = (c) => ({ marginBottom: '12px', border: `1px solid ${c.border}`, borderRadius: '12px', overflow: 'hidden' });
const cursHeader = (c) => ({ padding: '15px 20px', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' });
const materialRow = (c) => ({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: `1px solid ${c.border}`, gap: '15px' });
const counterBadge = { backgroundColor: '#ef4444', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', marginLeft: '8px' };
const revisarBtnStyle = (c) => ({ backgroundColor: '#eff6ff', color: c.primary, padding: '8px 14px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '700', border: `1px solid ${c.accent}`, cursor: 'pointer', whiteSpace: 'nowrap' });

const modalOverlayStyle = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.55)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  zIndex: 2000
};

const modalContentStyle = (c) => ({
  backgroundColor: c.card,
  borderRadius: '20px',
  padding: '28px 32px',
  width: '100%',
  maxWidth: '960px',
  maxHeight: '85vh',
  overflowY: 'auto',
  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
  border: `1px solid ${c.border}`
});

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '24px',
  gap: '20px'
};

const modalCloseBtnStyle = (c) => ({
  border: `1px solid ${c.border}`,
  background: '#f8fafc',
  color: c.textLight,
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  fontWeight: '700',
  flexShrink: 0
});
