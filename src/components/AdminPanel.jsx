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
  updateDoc,
  limit
} from 'firebase/firestore';
import MissatgesPrivats from './MissatgesPrivats';
import { normalitzarUrlCloudinary, obtenirTipusRecursCloudinary } from '../utils/cloudinary';
import { LLISTA_CURSOS } from '../constants';

const obtenirUrlCloudinaryTramesa = (tramesa) =>
  normalitzarUrlCloudinary(tramesa?.urlCloudinary || tramesa?.fileUrl || '', tramesa?.fileName);

function TaulaRevisioTrameses({ entregues, colors, onGuardarNota, onGuardarComentari, isMobile }) {
  if (entregues.length === 0) {
    if (isMobile) {
      return (
        <div style={{
          padding: '40px 15px',
          textAlign: 'center',
          color: colors.textLight,
          fontStyle: 'italic'
        }}>
          Cap alumne ha lliurat aquesta tasca encara.
        </div>
      );
    }
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

  if (isMobile) {
    return entregues.map((tramesa) => {
      const urlCloudinary = obtenirUrlCloudinaryTramesa(tramesa);
      const timestamp = tramesa.dataLliurament || tramesa.data;

      return (
        <div
          key={tramesa.id}
          style={{
            backgroundColor: '#fff',
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}
        >
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontWeight: '800', fontSize: '1.1rem', color: colors.textDark, marginBottom: '4px' }}>
              {tramesa.alumneNom || 'Alumne sense nom'}
            </div>
            <div style={{ color: colors.primary, fontWeight: '700', fontSize: '0.9rem' }}>
              {tramesa.alumneCurs || tramesa.curs || '—'}
            </div>
          </div>

          <div style={{ marginBottom: '12px', color: colors.textLight, fontSize: '0.9rem' }}>
            <strong>Data:</strong>{' '}
            {timestamp && typeof timestamp.toDate === 'function'
              ? timestamp.toDate().toLocaleDateString('ca-ES')
              : 'Sense data'}
          </div>

          <div style={{ marginBottom: '16px' }}>
            {urlCloudinary ? (
              <a
                href={urlCloudinary}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#2563eb',
                  fontWeight: '700',
                  textDecoration: 'underline',
                  fontSize: '0.95rem',
                  display: 'inline-block'
                }}
              >
                📎 Veure Fitxer
              </a>
            ) : (
              <span style={{ color: colors.textLight, fontSize: '0.85rem' }}>Sense arxiu</span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.8rem', fontWeight: '700', color: colors.textLight, display: 'block', marginBottom: '6px' }}>
                Nota (0-10):
              </label>
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
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: `1px solid ${colors.border}`,
                  textAlign: 'center',
                  fontWeight: '700',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700', color: colors.textLight, display: 'block', marginBottom: '6px' }}>
              Comentaris de correcció o retroacció:
            </label>
            <textarea
              placeholder="Escriu aquí els teus comentaris per a l'alumne..."
              defaultValue={tramesa.comentariProfessor || ''}
              onBlur={(e) => onGuardarComentari(tramesa, e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: `1px solid ${colors.border}`,
                fontSize: '0.9rem',
                fontFamily: 'inherit',
                resize: 'vertical',
                minHeight: '80px',
                boxSizing: 'border-box',
                backgroundColor: '#f8fafc'
              }}
            />
          </div>
        </div>
      );
    });
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
          <div style={{ marginBottom: '8px' }}>
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
          </div>
          <textarea
            placeholder="Comentari..."
            defaultValue={tramesa.comentariProfessor || ''}
            onBlur={(e) => onGuardarComentari(tramesa, e.target.value)}
            style={{
              width: '150px',
              padding: '8px',
              borderRadius: '8px',
              border: `1px solid ${colors.border}`,
              fontSize: '0.8rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              minHeight: '50px',
              boxSizing: 'border-box'
            }}
          />
        </td>
      </tr>
    );
  });
}

export default function AdminPanel({ APP_CONFIG, logoImg }) {

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
  const [recursDataLimit, setRecursDataLimit] = useState('');

  const [activeTab, setActiveTab] = useState('avisos');
  const [expandedCurs, setExpandedCurs] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [materialRevisio, setMaterialRevisio] = useState(null);
  const [menuMobilObert, setMenuMobilObert] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [contactForm, setContactForm] = useState({ nom: '', correu: '', missatge: '' });
  const [enviatAmbExit, setEnviatAmbExit] = useState(false);
  const [carregantContacte, setCarregantContacte] = useState(false);
  const [comentarisProfessor, setComentarisProfessor] = useState({});
  const [loadingSeguretat, setLoadingSeguretat] = useState(true);
  const [errorSeguretat, setErrorSeguretat] = useState(null);
  // Modal de confirmació d'esborrat
  const [confirmEsborrar, setConfirmEsborrar] = useState(null); // { col, id, titol }

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

  // --- VERIFICACIÓ DE ROL I SEGURETAT ---
  useEffect(() => {
    const verificarRolAdmin = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          setErrorSeguretat('No hi ha cap sessió activa. Inicia sessió per accedir al Panell d\'Administració.');
          setLoadingSeguretat(false);
          return;
        }

        const docRef = doc(db, 'usuaris', currentUser.uid);
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) {
          setErrorSeguretat('Perfil d\'usuari no trobat. Contacta amb l\'administració.');
          setLoadingSeguretat(false);
          return;
        }

        const userData = docSnap.data();
        const rol = userData?.rol || userData?.role;
        
        if (rol !== 'admin' && rol !== 'professor' && rol !== 'administrador') {
          setErrorSeguretat('Accés Denegat: No tens permisos de professor o administració.');
          setLoadingSeguretat(false);
          return;
        }

        setLoadingSeguretat(false);
      } catch (error) {
        console.error('Error verificant rol d\'administració:', error);
        setErrorSeguretat('Error de connexió. Torna-ho a provar.');
        setLoadingSeguretat(false);
      }
    };

    verificarRolAdmin();
  }, []);

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
    if (loadingSeguretat || errorSeguretat) return;

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

    const unsubTram = onSnapshot(query(collection(db, 'trameses'), orderBy('data', 'desc'), limit(50)), (snap) => {
      setTrameses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      unsubMat();
      unsubAv();
      unsubTemes();
      unsubTram();
      window.removeEventListener('resize', handleResize);
    };
  }, [loadingSeguretat, errorSeguretat]);

  const obtenirEmailAlumne = async (alumneId) => {
    if (!alumneId || !auth.currentUser?.uid) return null;
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
          url: 'https://app-mates.web.app/'
        })
      });

      if (!res.ok) {
        console.error('Error del proxy Brevo en enviar correu de nota:', await res.text());
      }
    } catch (e) {
      console.error('Error enviant correu de nota:', e);
    }
  };

  const handleGuardarComentari = async (tramesa, valor) => {
    if (!tramesa?.id) return;
    setComentarisProfessor(prev => ({
      ...prev,
      [tramesa.id]: valor
    }));
  };

  const handleGuardarNota = async (tramesa, valor) => {
    if (!tramesa?.id) return;

    const valorNet = String(valor).trim();
    const notaAnterior = tramesa.nota ?? null;
    const comentari = comentarisProfessor[tramesa.id] || '';

    if (valorNet === '') {
      if (notaAnterior === null || notaAnterior === undefined && !comentari) return;
      try {
        await updateDoc(doc(db, 'trameses', tramesa.id), {
          nota: null,
          estat: 'pendent_revisio',
          comentariProfessor: comentari || null
        });
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

    if (notaPreviaNum !== null && !Number.isNaN(notaPreviaNum) && notaPreviaNum === nota && tramesa.comentariProfessor === comentari) {
      return;
    }

    try {
      await updateDoc(doc(db, 'trameses', tramesa.id), {
        nota,
        estat: 'completada',
        comentariProfessor: comentari || null
      });

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
          url: 'https://app-mates.web.app/'
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
        data: serverTimestamp(),
        dataLimit: recursDataLimit || null
      });
      await handleNotificar('material', recursTitol, `Nou material: ${recursTitol}`, recursCursos);
      setRecursTitol('');
      setRecursUrl('');
      setRecursDescripcio('');
      setRecursTema('');
      setTemaLliure('');
      setRecursCursos([]);
      setRecursDataLimit('');
      alert('Material publicat.');
    } catch (e) {
      alert(e.message);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleEsborrar = (col, id, titol = '') => {
    setConfirmEsborrar({ col, id, titol });
  };

  const confirmarEsborrat = async () => {
    if (!confirmEsborrar) return;
    try {
      await deleteDoc(doc(db, confirmEsborrar.col, confirmEsborrar.id));
    } catch (e) {
      alert(e.message);
    } finally {
      setConfirmEsborrar(null);
    }
  };

  const toggleCheckbox = (curs, state, setState) => {
    setState((prev) => (prev.includes(curs) ? prev.filter((c) => c !== curs) : [...prev, curs]));
  };

  const handleEnviarContacte = async (e) => {
    e.preventDefault();
    if (!contactForm.nom || !contactForm.correu || !contactForm.missatge) {
      alert('Si us plau, omple tots els camps.');
      return;
    }

    setCarregantContacte(true);
    try {
      await addDoc(collection(db, 'contactes_footer'), {
        nom: contactForm.nom,
        email: contactForm.correu,
        missatge: contactForm.missatge,
        enviatDesDe: 'Admin',
        dataEnviament: serverTimestamp()
      });

      await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: ['serradequacions@gmail.com'],
          tipus: 'contacte',
          titol: 'Nova consulta des del Footer - Serra d\'Equacions',
          subject: 'Nova consulta des del Footer - Serra d\'Equacions',
          contingut: [
            `<strong>Nom:</strong> ${contactForm.nom}`,
            '',
            `<strong>Email:</strong> ${contactForm.correu}`,
            '',
            `<strong>Missatge:</strong>`,
            contactForm.missatge,
            '',
            `<em>Enviat des de: Panell d\'Administració</em>`
          ].join('<br>'),
          content: [
            `<strong>Nom:</strong> ${contactForm.nom}`,
            '',
            `<strong>Email:</strong> ${contactForm.correu}`,
            '',
            `<strong>Missatge:</strong>`,
            contactForm.missatge,
            '',
            `<em>Enviat des de: Panell d\'Administració</em>`
          ].join('<br>'),
          url: 'https://app-mates.web.app/'
        })
      });

      setEnviatAmbExit(true);
      setContactForm({ nom: '', correu: '', missatge: '' });
    } catch (error) {
      console.error('Error enviant el missatge:', error);
      alert("No s'ha pogut enviar el missatge. Torna-ho a provar.");
    } finally {
      setCarregantContacte(false);
    }
  };

  const handleResetContacte = () => {
    setEnviatAmbExit(false);
    setContactForm({ nom: '', correu: '', missatge: '' });
  };

  if (loadingSeguretat) {
    return (
      <div style={{
        backgroundColor: colors.bg,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", sans-serif'
      }}>
        {logoImg && <img src={logoImg} alt="Logo" style={{ height: '80px', borderRadius: '16px', marginBottom: '30px' }} />}
        <div className="spinner-security"></div>
        <p style={{ fontWeight: '600', color: colors.textLight, marginTop: '20px', fontSize: '1.1rem' }}>
          Verificant seguretat...
        </p>
        <style>{`
          .spinner-security {
            width: 50px;
            height: 50px;
            border: 5px solid #e2e8f0;
            border-top-color: #2563eb;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  if (errorSeguretat) {
    return (
      <div style={{
        backgroundColor: colors.bg,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", sans-serif',
        padding: '20px',
        textAlign: 'center'
      }}>
        {logoImg && <img src={logoImg} alt="Logo" style={{ height: '80px', borderRadius: '16px', marginBottom: '30px' }} />}
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔒</div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: colors.danger, marginBottom: '15px' }}>
          Accés Denegat
        </h2>
        <p style={{ fontSize: '1.1rem', color: colors.textLight, lineHeight: '1.6', maxWidth: '500px' }}>
          {errorSeguretat}
        </p>
        <button
          onClick={async () => {
            await signOut(auth);
            window.location.href = '/';
          }}
          style={{
            marginTop: '30px',
            padding: '14px 28px',
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Tancar Sessió
        </button>
      </div>
    );
  }

  if (!auth.currentUser?.uid) {
    return (
      <div style={{
        backgroundColor: colors.bg,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", sans-serif',
        padding: '20px',
        textAlign: 'center'
      }}>
        {logoImg && <img src={logoImg} alt="Logo" style={{ height: '80px', borderRadius: '16px', marginBottom: '30px' }} />}
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔒</div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: colors.danger, marginBottom: '15px' }}>
          Sessió No Vàlida
        </h2>
        <p style={{ fontSize: '1.1rem', color: colors.textLight, lineHeight: '1.6', maxWidth: '500px' }}>
          No s'ha pogut verificar la teva identitat. Inicia sessió de nou.
        </p>
        <button
          onClick={async () => {
            await signOut(auth);
            window.location.href = '/';
          }}
          style={{
            marginTop: '30px',
            padding: '14px 28px',
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Tancar Sessió
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', padding: isMobile ? '15px' : '40px 20px', fontFamily: '"Inter", sans-serif' }}>
      <header style={{ maxWidth: '1250px', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {logoImg && <img src={logoImg} alt="Logo" style={{ height: isMobile ? '40px' : '60px', borderRadius: '12px' }} />}
          <h1 style={{ margin: 0, fontSize: isMobile ? '1.1rem' : '1.6rem', color: colors.textDark, fontWeight: '800' }}>Gestió de l'Aula Digital</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isMobile && (
            <button 
              onClick={() => setMenuMobilObert(!menuMobilObert)} 
              style={{ 
                padding: '12px 16px', 
                backgroundColor: colors.primary, 
                color: 'white', 
                border: 'none', 
                borderRadius: '10px', 
                fontWeight: '700', 
                cursor: 'pointer', 
                fontSize: '1.4rem',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              {menuMobilObert ? '✕' : '☰'}
            </button>
          )}
          <button onClick={() => signOut(auth)} style={logoutBtnStyle(colors)}>Tancar sessió</button>
        </div>
      </header>

      <div style={{ maxWidth: '1250px', margin: '0 auto', display: isMobile ? 'block' : 'grid', gridTemplateColumns: isMobile ? '1fr' : '400px 1fr', gap: '30px' }}>
        {(!isMobile || menuMobilObert) && (
          <aside style={{ marginBottom: isMobile ? '20px' : '0' }}>
            <div style={cardStyle(colors)}>
            <h3 style={cardTitleStyle(colors)}>📢 Crear Nou Avís</h3>
            <textarea placeholder="Missatge..." value={avisContingut} onChange={(e) => setAvisContingut(e.target.value)} style={textareaStyle(colors)} />
            <div style={checkboxGrid(isMobile)}>
              {LLISTA_CURSOS.map((curs) => (
                <label key={curs} style={checkLabel}>
                  <input type="checkbox" checked={avisCursos.includes(curs)} onChange={() => toggleCheckbox(curs, avisCursos, setAvisCursos)} /> {curs}
                </label>
              ))}
            </div>
            <button 
              onClick={() => { handlePublicarAvis(); if (isMobile) setMenuMobilObert(false); }} 
              disabled={isPublishing} 
              style={primaryButtonStyle(colors)}
            >
              Publicar Avís
            </button>
          </div>

          <div style={cardStyle(colors)}>
            <h3 style={cardTitleStyle(colors)}>📚 Pujar Material / Tasca</h3>
            <input placeholder="Títol" value={recursTitol} onChange={(e) => setRecursTitol(e.target.value)} style={inputStyle(colors)} />
            <input placeholder="URL" value={recursUrl} onChange={(e) => setRecursUrl(e.target.value)} style={inputStyle(colors)} />
            <textarea placeholder="Descripció..." value={recursDescripcio} onChange={(e) => setRecursDescripcio(e.target.value)} style={{ ...textareaStyle(colors), height: '60px' }} />
            {recursTipus?.toLowerCase().includes('tasca') && (
              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '700', color: colors.textLight, display: 'block', marginBottom: '6px' }}>
                  📅 Data límit d'entrega (opcional)
                </label>
                <input
                  type="date"
                  value={recursDataLimit}
                  onChange={(e) => setRecursDataLimit(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  style={{ ...inputStyle(colors), color: recursDataLimit ? colors.textDark : colors.textLight }}
                />
              </div>
            )}

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
            <div style={checkboxGrid(isMobile)}>
              {LLISTA_CURSOS.map((curs) => (
                <label key={curs} style={checkLabel}>
                  <input type="checkbox" checked={recursCursos.includes(curs)} onChange={() => toggleCheckbox(curs, recursCursos, setRecursCursos)} /> {curs}
                </label>
              ))}
            </div>
            <button 
              onClick={() => { handlePublicarMaterial(); if (isMobile) setMenuMobilObert(false); }} 
              disabled={isPublishing} 
              style={{ ...primaryButtonStyle(colors), backgroundColor: colors.success }}
            >
              Publicar
            </button>
          </div>
          </aside>
        )}

        {isMobile && menuMobilObert && (
          <div
            onClick={() => setMenuMobilObert(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.5)',
              zIndex: 1000,
              cursor: 'pointer'
            }}
          />
        )}

        <main style={cardStyle(colors)}>
          <div style={tabsHeader(colors, isMobile)}>
            <button onClick={() => setActiveTab('avisos')} style={tabButtonStyle(activeTab === 'avisos', colors)}>Avisos</button>
            <button onClick={() => setActiveTab('materials')} style={tabButtonStyle(activeTab === 'materials', colors)}>Continguts</button>
            <button onClick={() => setActiveTab('trameses')} style={tabButtonStyle(activeTab === 'trameses', colors)}>
              Entregues {trameses.length > 0 && <span style={counterBadge}>{trameses.length}</span>}
            </button>
            <button onClick={() => setActiveTab('missatges')} style={tabButtonStyle(activeTab === 'missatges', colors)}>💬 Missatges Alumnes</button>
          </div>

          {activeTab === 'trameses' && (
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
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
                            <button type="button" onClick={() => handleEsborrar('trameses', tramesa.id, `entrega de ${tramesa.alumneNom || 'alumne'}`)} style={deleteBtn}>✕</button>
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
                <div key={a.id} style={listItemStyle(colors, isMobile)}>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '0.95rem' }}>{a.contingut}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {a.cursos?.map((c) => (
                        <span key={c} style={badgeStyle(colors)}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <button type="button" onClick={() => handleEsborrar('avisos', a.id, a.contingut?.substring(0, 40))} style={deleteBtn}>✕</button>
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
                          <div key={m.id} style={materialRow(colors, isMobile)}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                              <span style={{ fontSize: '1.2rem' }}>{APP_CONFIG?.tipusIcons?.[m.tipus] || '📄'}</span>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{m.titol}</div>
                                <div style={{ fontSize: '0.7rem', color: colors.textLight }}>{m.tema} · {m.tipus}</div>
                                {esTasca(m) && m.dataLimit && (
                                  <div style={{ fontSize: '0.7rem', color: colors.warning, fontWeight: '700', marginTop: '2px' }}>
                                    📅 Límit: {new Date(m.dataLimit).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                              {esTasca(m) && (
                                <button type="button" onClick={() => obrirRevisio(m)} style={revisarBtnStyle(colors)}>
                                  Revisar {numEntregues > 0 ? `(${numEntregues})` : ''}
                                </button>
                              )}
                              <button type="button" onClick={() => handleEsborrar('materials', m.id, m.titol)} style={deleteTextBtn}>Eliminar</button>
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

          {activeTab === 'missatges' && (
            <MissatgesPrivats user={auth.currentUser} isAdmin={true} colors={colors} />
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

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              {isMobile ? (
                <div style={{ padding: '10px 0' }}>
                  <TaulaRevisioTrameses
                    entregues={entreguesPerRevisio}
                    colors={colors}
                    onGuardarNota={handleGuardarNota}
                    onGuardarComentari={handleGuardarComentari}
                    isMobile={true}
                  />
                </div>
              ) : (
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
                      onGuardarComentari={handleGuardarComentari}
                      isMobile={false}
                    />
                  </tbody>
                </table>
              )}
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: colors.textLight, fontWeight: '600' }}>
              {entreguesPerRevisio.length} entrega{entreguesPerRevisio.length === 1 ? '' : 'es'} per aquesta tasca
            </div>
          </div>
        </div>
      )}

      <footer style={footerStyle(colors, isMobile)}>
        <div style={footerContentStyle(isMobile)}>
          <div style={footerSectionStyle(isMobile)}>
            <h4 style={footerTitleStyle(colors)}>💡 Inspiració Matemàtica</h4>
            <p style={footerQuoteStyle(colors)}>
              "La matemàtica és l'alfabet amb el qual Déu ha escrit l'univers."
            </p>
            <p style={footerAuthorStyle(colors)}>— Galileo Galilei</p>
          </div>

          <div style={footerSectionStyle(isMobile)}>
            <h4 style={footerTitleStyle(colors)}>📬 Contacte</h4>
            {carregantContacte ? (
              <div style={footerLoadingStyle(colors)}>
                <div className="spinner-footer"></div>
                <p style={{ margin: '10px 0 0 0', fontSize: '0.9rem', color: colors.textLight, fontWeight: '600' }}>S'està enviant el missatge...</p>
              </div>
            ) : enviatAmbExit ? (
              <div style={footerSuccessStyle(colors)}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✓</div>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: colors.success, fontWeight: '800' }}>Missatge enviat correctament!</h5>
                <p style={{ margin: '0 0 16px 0', fontSize: '0.85rem', color: colors.textLight, lineHeight: '1.5' }}>
                  Ens posarem en contacte amb tu a {contactForm.correu} al més aviat possible.
                </p>
                <button onClick={handleResetContacte} style={footerResetButtonStyle(colors)}>
                  Enviar un altre missatge
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnviarContacte} style={footerFormStyle}>
                <input
                  type="text"
                  placeholder="Nom"
                  value={contactForm.nom}
                  onChange={(e) => setContactForm({ ...contactForm, nom: e.target.value })}
                  style={footerInputStyle(colors)}
                />
                <input
                  type="email"
                  placeholder="Correu"
                  value={contactForm.correu}
                  onChange={(e) => setContactForm({ ...contactForm, correu: e.target.value })}
                  style={footerInputStyle(colors)}
                />
                <textarea
                  placeholder="Missatge"
                  value={contactForm.missatge}
                  onChange={(e) => setContactForm({ ...contactForm, missatge: e.target.value })}
                  style={footerTextareaStyle(colors)}
                  rows={3}
                />
                <button type="submit" disabled={carregantContacte} style={footerButtonStyle(colors)}>
                  Enviar Missatge
                </button>
              </form>
            )}
          </div>

          <div style={footerSectionStyle(isMobile)}>
            <h4 style={footerTitleStyle(colors)}>📸 Segueix-nos</h4>
            <a
              href="https://www.instagram.com/serradequacions"
              target="_blank"
              rel="noopener noreferrer"
              style={instagramButtonStyle(colors, isMobile)}
            >
              <span style={{ fontSize: isMobile ? '1.5rem' : '1.8rem' }}>📷</span>
              <span style={{ marginLeft: '8px', fontWeight: '700' }}>@serradequacions</span>
            </a>
          </div>
        </div>
        <div style={footerBottomStyle(colors)}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: colors.textLight }}>
            © {new Date().getFullYear()} Serra d'Equacions. Tots els drets reservats.
          </p>
        </div>
      </footer>

      {/* MODAL DE CONFIRMACIÓ D'ESBORRAT */}
      {confirmEsborrar && (
        <div style={modalOverlayStyle} onClick={() => setConfirmEsborrar(null)}>
          <div
            style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '32px', maxWidth: '420px', width: '100%', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '16px' }}>🗑️</div>
            <h3 style={{ margin: '0 0 12px 0', textAlign: 'center', fontSize: '1.2rem', fontWeight: '800', color: '#0f172a' }}>
              Confirmar eliminació
            </h3>
            <p style={{ margin: '0 0 8px 0', textAlign: 'center', color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Estàs a punt d'eliminar:
            </p>
            {confirmEsborrar.titol && (
              <p style={{ margin: '0 0 24px 0', textAlign: 'center', fontWeight: '700', color: '#0f172a', fontSize: '0.95rem', backgroundColor: '#f1f5f9', padding: '10px 16px', borderRadius: '10px' }}>
                "{confirmEsborrar.titol}"
              </p>
            )}
            <p style={{ margin: '0 0 24px 0', textAlign: 'center', color: '#ef4444', fontSize: '0.85rem', fontWeight: '600' }}>
              Aquesta acció no es pot desfer.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setConfirmEsborrar(null)}
                style={{ flex: 1, padding: '12px', border: '1px solid #e2e8f0', borderRadius: '10px', background: '#f8fafc', fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Cancel·lar
              </button>
              <button
                onClick={confirmarEsborrat}
                style={{ flex: 1, padding: '12px', border: 'none', borderRadius: '10px', background: '#ef4444', color: 'white', fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Sí, eliminar
              </button>
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
const checkboxGrid = (isMobile) => ({ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '8px', padding: '12px', backgroundColor: '#f1f5f9', borderRadius: '10px', marginBottom: '20px', maxHeight: '150px', overflowY: 'auto' });
const checkLabel = { fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' };
const tabsHeader = (c, isMobile) => ({ display: 'flex', gap: isMobile ? '15px' : '30px', borderBottom: `2px solid ${c.border}`, marginBottom: '25px', overflowX: 'auto', flexWrap: 'wrap' });
const tabButtonStyle = (active, c) => ({ padding: '12px 5px', border: 'none', background: 'none', borderBottom: active ? `3px solid ${c.primary}` : '3px solid transparent', color: active ? c.primary : c.textLight, fontWeight: '700', cursor: 'pointer' });
const listItemStyle = (c, isMobile) => ({ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', padding: '15px', border: `1px solid ${c.border}`, borderRadius: '12px', backgroundColor: '#fff', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '10px' : '0' });
const badgeStyle = (c) => ({ fontSize: '0.65rem', backgroundColor: '#dbeafe', color: c.primary, padding: '3px 8px', borderRadius: '5px', fontWeight: '800' });
const deleteBtn = { color: '#cbd5e1', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2rem' };
const deleteTextBtn = { color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600' };
const logoutBtnStyle = (c) => ({ padding: '10px 20px', border: `1px solid ${c.danger}`, color: c.danger, borderRadius: '10px', background: 'none', fontWeight: '700', cursor: 'pointer' });
const cursAccordion = (c) => ({ marginBottom: '12px', border: `1px solid ${c.border}`, borderRadius: '12px', overflow: 'hidden' });
const cursHeader = (c) => ({ padding: '15px 20px', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' });
const materialRow = (c, isMobile) => ({ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', padding: '12px 0', borderBottom: `1px solid ${c.border}`, gap: '15px', flexDirection: isMobile ? 'column' : 'row' });
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

const footerStyle = (c, isMobile) => ({
  backgroundColor: c.card,
  borderTop: `2px solid ${c.border}`,
  padding: isMobile ? '30px 20px' : '50px 40px',
  marginTop: '60px',
  boxShadow: '0 -4px 20px rgba(0,0,0,0.03)'
});

const footerContentStyle = (isMobile) => ({
  maxWidth: '1250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
  gap: isMobile ? '30px' : '40px'
});

const footerSectionStyle = (isMobile) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
});

const footerTitleStyle = (c) => ({
  margin: '0 0 10px 0',
  fontSize: '1.1rem',
  color: c.textDark,
  fontWeight: '800',
  letterSpacing: '-0.5px'
});

const footerQuoteStyle = (c) => ({
  margin: '0 0 8px 0',
  fontSize: '0.95rem',
  color: c.textDark,
  fontStyle: 'italic',
  lineHeight: '1.6'
});

const footerAuthorStyle = (c) => ({
  margin: '0',
  fontSize: '0.85rem',
  color: c.primary,
  fontWeight: '700'
});

const footerFormStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
};

const footerInputStyle = (c) => ({
  padding: '12px',
  borderRadius: '8px',
  border: `1px solid ${c.border}`,
  fontSize: '0.9rem',
  boxSizing: 'border-box',
  fontFamily: 'inherit'
});

const footerTextareaStyle = (c) => ({
  ...footerInputStyle(c),
  resize: 'none',
  minHeight: '80px'
});

const footerButtonStyle = (c) => ({
  padding: '12px 20px',
  backgroundColor: c.primary,
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '700',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'all 0.2s ease'
});

const instagramButtonStyle = (c, isMobile) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: isMobile ? '12px 20px' : '14px 24px',
  borderRadius: '12px',
  textDecoration: 'none',
  fontSize: isMobile ? '0.9rem' : '1rem',
  fontWeight: '700',
  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
  color: 'white',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(220, 39, 67, 0.3)'
});

const footerBottomStyle = (c) => ({
  maxWidth: '1250px',
  margin: '40px auto 0 auto',
  paddingTop: '20px',
  borderTop: `1px solid ${c.border}`,
  textAlign: 'center'
});

const footerLoadingStyle = (c) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 20px',
  backgroundColor: '#f8fafc',
  borderRadius: '12px',
  border: `1px solid ${c.border}`
});

const footerSuccessStyle = (c) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '12px',
  border: `2px solid ${c.success}`,
  textAlign: 'center'
});

const footerResetButtonStyle = (c) => ({
  padding: '10px 20px',
  backgroundColor: c.success,
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '700',
  cursor: 'pointer',
  fontSize: '0.85rem',
  transition: 'all 0.2s ease'
});