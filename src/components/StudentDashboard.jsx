import React, { useState, useEffect, useMemo, useRef } from 'react';
import { db, auth } from '../firebase';
import { 
  collection, query, where, onSnapshot, orderBy, doc, getDoc, addDoc, serverTimestamp 
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import MissatgesPrivats from './MissatgesPrivats';
import { normalitzarUrlCloudinary, obtenirTipusRecursCloudinary } from '../utils/cloudinary';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ducevp5vb/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'tasques_alumnes'; // Preset Cloudinary configurat com a 'unsigned'

const obtenirUrlPujadaCloudinary = (fileName) => {
  const tipus = obtenirTipusRecursCloudinary(fileName);
  if (tipus === 'raw') {
    return CLOUDINARY_URL.replace('/image/upload', '/raw/upload');
  }
  return CLOUDINARY_URL;
};

const obtenirUrlCloudinary = (tramesa) =>
  normalitzarUrlCloudinary(tramesa?.urlCloudinary || tramesa?.fileUrl || '', tramesa?.fileName);

const teNotaValida = (entrega) => {
  if (!entrega || entrega.nota === undefined || entrega.nota === null) return false;
  const nota = parseFloat(entrega.nota);
  return !Number.isNaN(nota);
};

const esEntregaCompletada = (entrega) => {
  if (!entrega) return false;
  if (entrega.estat === 'completada') return true;
  return teNotaValida(entrega);
};

const ENLLACES_WHATSAPP_DASHBOARD = {
  "1r ESO": "https://chat.whatsapp.com/CLJ6MrG0qt97fkcSl3TsUx",
  "2n ESO": "https://chat.whatsapp.com/IJBlyDSfLlK9lFTMMVC3gi",
  "3r ESO": "https://chat.whatsapp.com/KWSeWhLFMn13cSoGm9dncC",
  "4t ESO A": "https://chat.whatsapp.com/BcoAOGM78nCJkabOitiRnY",
  "4t ESO B": "https://chat.whatsapp.com/DVZ7g6ekHMVDOmpDvKnEFH",
  "1r Batxillerat Científic": "https://chat.whatsapp.com/L6YXc7jcm6kFVDhIR1i0IQ",
  "1r Batxillerat CCSS": "https://chat.whatsapp.com/JguPEEqvFEM46GBcnLTA36",
  "1r Batxillerat General": "https://chat.whatsapp.com/BRP3t5UdeWmJG8TgiXZW1M",
  "2n Batxillerat Científic": "https://chat.whatsapp.com/IQzli2hPyNR6cyPsaGqYtH",
  "2n Batxillerat CCSS": "https://chat.whatsapp.com/CSyHjZsxz3gBzyqGyK0USI",
};
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
  const [isMobile, setIsMobile] = useState(false);
  const [menuMobilObert, setMenuMobilObert] = useState(false);
  const [contactForm, setContactForm] = useState({ nom: '', correu: '', missatge: '' });
  const [enviatAmbExit, setEnviatAmbExit] = useState(false);
  const [carregantContacte, setCarregantContacte] = useState(false);
  const [avisosLlegits, setAvisosLlegits] = useState(() => {
    const guardats = localStorage.getItem('avisosLlegits');
    return guardats ? JSON.parse(guardats) : [];
  });
  const [loadingSeguretat, setLoadingSeguretat] = useState(true);
  const [errorSeguretat, setErrorSeguretat] = useState(null);
  
  // --- ESTATS DE TRAMESA I CLOUDINARY ---
  const [uploadingTascaId, setUploadingTascaId] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const fileInputRef = useRef(null);

  const isUploading = uploadingTascaId === selectedMaterial?.id;

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

  const obtenirEntregaPerMaterial = (materialId) =>
    entregasAlumne.find((e) => e.materialId === materialId);

  const esMaterialCompletat = (materialId) =>
    esEntregaCompletada(obtenirEntregaPerMaterial(materialId));

  const progrés = useMemo(() => {
    const tasques = materials.filter(esTasca);
    const completades = tasques.filter((t) => esEntregaCompletada(obtenirEntregaPerMaterial(t.id))).length;
    const total = tasques.length;
    const percent = total > 0 ? Math.round((completades / total) * 100) : 0;

    const perTema = tasques.reduce((acc, t) => {
      const tema = t.tema || 'Sense tema';
      if (!acc[tema]) acc[tema] = { total: 0, fetes: 0 };
      acc[tema].total += 1;
      if (esEntregaCompletada(obtenirEntregaPerMaterial(t.id))) acc[tema].fetes += 1;
      return acc;
    }, {});

    return { tasques, completades, total, percent, perTema };
  }, [materials, entregasAlumne]);

  // --- VERIFICACIÓ DE SEGURETAT DE L'ALUMNE ---
  useEffect(() => {
    const verificarSessioAlumne = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          setErrorSeguretat('No hi ha cap sessió activa. Inicia sessió per accedir al Campus.');
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

        setLoadingSeguretat(false);
      } catch (error) {
        console.error('Error verificant sessió de l\'alumne:', error);
        setErrorSeguretat('Error de connexió. Torna-ho a provar.');
        setLoadingSeguretat(false);
      }
    };

    verificarSessioAlumne();
  }, []);

  // --- EFECTE: CÀRREGA DE DADES DE L'ALUMNE ---
  useEffect(() => {
    if (!user || loadingSeguretat || errorSeguretat) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [user, loadingSeguretat, errorSeguretat]);

  useEffect(() => {
    if (!user || loadingSeguretat || errorSeguretat) return;

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
            nom: user.displayName || user.email?.split('@')[0] || 'Alumne', 
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
  }, [user, loadingSeguretat, errorSeguretat]);

  // --- MONITORITZAR TOTES LES ENTREGUES DE L'ALUMNE ---
  useEffect(() => {
    if (!user || loadingSeguretat || errorSeguretat) return;

    try {
      const q = query(
        collection(db, "trameses"),
        where("alumneId", "==", user.uid),
        orderBy("data", "desc")
      );

      const unsub = onSnapshot(q, (snap) => {
        setEntregasAlumne(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      });

      return () => unsub();
    } catch (error) {
      console.error('Error monitoritzant entregues:', error);
    }
  }, [user, loadingSeguretat, errorSeguretat]);

  // --- FILTRAR ENTREGA DEL MATERIAL ACTIU EN MEMÒRIA ---
  const entregaActual = useMemo(() => {
    if (!selectedMaterial || !user) return null;
    return entregasAlumne.find((e) => e.materialId === selectedMaterial.id && e.alumneId === user.uid) || null;
  }, [selectedMaterial, user, entregasAlumne]);

  // --- NETEJA D'ESTAT DE PUJADA EN CANVIAR DE MATERIAL ---
  useEffect(() => {
    setUploadStatus('');
    setUploadError('');
    setUploadingTascaId(null);
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
        enviatDesDe: 'Dashboard',
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
            `<em>Enviat des de: Dashboard de l\'Alumne</em>`
          ].join('<br>'),
          content: [
            `<strong>Nom:</strong> ${contactForm.nom}`,
            '',
            `<strong>Email:</strong> ${contactForm.correu}`,
            '',
            `<strong>Missatge:</strong>`,
            contactForm.missatge,
            '',
            `<em>Enviat des de: Dashboard de l\'Alumne</em>`
          ].join('<br>'),
          url: 'https://serradequacions.github.io/Serra-d-equacions/'
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

  const handleMarcarComLlegit = (avisoId) => {
    const nousLlegits = [...avisosLlegits, avisoId];
    setAvisosLlegits(nousLlegits);
    localStorage.setItem('avisosLlegits', JSON.stringify(nousLlegits));
  };

  const esMaterialSolucionari = (material) => {
    const titolLower = (material.titol || '').toLowerCase();
    return titolLower.includes('solució') || titolLower.includes('solucionari') || titolLower.includes('solucio');
  };

  const esSolucionariDesbloquejat = (material) => {
    if (!esMaterialSolucionari(material)) return true;
    const entrega = obtenirEntregaPerMaterial(material.id);
    return entrega && entrega.estat === 'completada';
  };

  // --- LÒGICA DE NOTIFICACIÓ ---
  const enviarNotificacioEmail = async (nomArxiu, titolTasca) => {
    try {
      if (!auth.currentUser?.uid) {
        console.warn('No hi ha usuari autenticat per enviar notificació');
        return;
      }
      const nomPerEmail = studentData?.nom || user?.displayName || user?.email || 'Alumne';
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

  const handlePujarFitxer = async (e) => {
    const input = e.target;
    const file = input?.files?.[0];
    const tascaId = selectedMaterial?.id;

    if (!file || uploadingTascaId) return;

    if (!tascaId) {
      setUploadError('No s\'ha pogut identificar la tasca.');
      resetUploadInput();
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      setUploadError('El fitxer és massa gran. El límit són 50MB.');
      resetUploadInput();
      return;
    }

    setUploadError('');
    setUploadStatus('');
    setUploadingTascaId(tascaId);
    setUploadStatus('Pujant fitxer a Cloudinary...');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(obtenirUrlPujadaCloudinary(file.name), {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || 'Error en la resposta de Cloudinary.');
      }

      if (!data.secure_url) {
        throw new Error('Cloudinary no ha retornat una URL vàlida (secure_url).');
      }

      const urlCloudinary = normalitzarUrlCloudinary(data.secure_url, file.name);

      setUploadStatus('Finalitzant entrega...');

      if (!auth.currentUser?.uid) {
        throw new Error('Sessió no vàlida. Inicia sessió de nou.');
      }

      const dadesEntrega = {
        alumneNom: studentData?.nom || user?.displayName || user?.email || 'Alumne',
        alumneId: user.uid,
        curs: studentData?.curs || 'Curs no especificat',
        alumneCurs: studentData?.curs || 'Curs no especificat',
        materialTitol: selectedMaterial.titol || 'Sense títol',
        materialId: tascaId,
        fileUrl: data.secure_url,
        urlCloudinary,
        fileName: file.name,
        estat: 'pendent_revisio',
        data: serverTimestamp(),
        dataLliurament: serverTimestamp()
      };

      await addDoc(collection(db, 'trameses'), dadesEntrega);
      await enviarNotificacioEmail(file.name, selectedMaterial.titol);

      setUploadStatus('✅ Tasca lliurada correctament!');
    } catch (err) {
      console.error("Error en el procés d'entrega:", err);
      const missatge =
        err?.message ||
        (err?.name === 'TypeError'
          ? 'Error de xarxa en connectar amb Cloudinary. Comprova la connexió.'
          : "No s'ha pogut completar l'entrega. Torna-ho a provar.");
      setUploadError(missatge);
      setUploadStatus('');
    } finally {
      setUploadingTascaId(null);
      resetUploadInput();
    }
  };

  const teNota = teNotaValida(entregaActual);
  const tascaCompletada = esEntregaCompletada(entregaActual);

  const DataLimitIndicador = ({ m, esTasca, entrega, colors }) => {
    if (!esTasca(m) || !m.dataLimit || entrega) return null;
    const avui = new Date();
    avui.setHours(0, 0, 0, 0);
    const limit = new Date(m.dataLimit);
    limit.setHours(0, 0, 0, 0);
    const diesRestants = Math.ceil((limit - avui) / (1000 * 60 * 60 * 24));
    const vencuda = diesRestants < 0;
    const urgent = diesRestants >= 0 && diesRestants <= 2;
    const color = vencuda ? colors.danger : urgent ? colors.warning : colors.textLight;
    const etiqueta = vencuda
      ? '⛔ Data límit superada'
      : diesRestants === 0
        ? '⚠️ Avui és el darrer dia!'
        : diesRestants === 1
          ? '⚠️ Queda 1 dia'
          : urgent
            ? `⚠️ Queden ${diesRestants} dies`
            : `📅 Entrega fins al ${limit.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long' })}`;
    return (
      <div style={{ fontSize: '0.78rem', color, fontWeight: '700', marginTop: '5px' }}>
        {etiqueta}
      </div>
    );
  };

  const renderFilaMaterial = (m, colors, APP_CONFIG) => {
    const entrega = obtenirEntregaPerMaterial(m.id);
    const completada = esTasca(m) && esEntregaCompletada(entrega);
    const lliuradaPendent = esTasca(m) && entrega && !completada;
    const esSolucionari = esMaterialSolucionari(m);
    const desbloquejat = esSolucionariDesbloquejat(m);

    return (
      <div
        key={m.id}
        onClick={() => { if (desbloquejat) { setSelectedMaterial(m); setView('detall'); } }}
        style={{
          ...(completada ? materialRowCompletadaStyle(colors, isMobile) : materialRowStyle(colors, isMobile)),
          cursor: desbloquejat ? 'pointer' : 'not-allowed',
          opacity: desbloquejat ? 1 : 0.7
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <span style={{ fontSize: '2rem' }}>{esSolucionari && !desbloquejat ? '🔒' : (APP_CONFIG.tipusIcons[m.tipus] || '📄')}</span>
          <div>
            <div style={{ fontWeight: '800', color: colors.textDark, fontSize: '1.15rem' }}>{m.titol}</div>
            <div style={{ fontSize: '0.8rem', color: colors.textLight, textTransform: 'uppercase', fontWeight: '800', marginTop: '4px' }}>
              {m.tipus}
              {esSolucionari && !desbloquejat && (
                <span style={{ marginLeft: '10px', color: colors.danger }}>· Bloquejat</span>
              )}
              {completada && (
                <span style={{ marginLeft: '10px', color: colors.success }}>· Tasca Completada</span>
              )}
              {lliuradaPendent && (
                <span style={{ marginLeft: '10px', color: colors.warning }}>· Pendent de revisió</span>
              )}
              {esTasca(m) && !entrega && (
                <span style={{ marginLeft: '10px', color: colors.warning }}>· Pendent</span>
              )}
            </div>
            <DataLimitIndicador m={m} esTasca={esTasca} entrega={entrega} colors={colors} />
            {completada && teNotaValida(entrega) && (
              <div style={{ fontSize: '0.8rem', color: colors.primaryDark, fontWeight: '800', marginTop: '6px' }}>
                Nota: {entrega.nota}/10
              </div>
            )}
            {completada && entrega?.comentariProfessor && (
              <div style={{
                marginTop: '8px',
                padding: '10px 14px',
                backgroundColor: '#f0fdf4',
                borderLeft: `3px solid ${colors.success}`,
                borderRadius: '6px',
                fontStyle: 'italic',
                fontSize: '0.8rem',
                color: colors.textDark,
                lineHeight: '1.5'
              }}>
                <strong style={{ fontStyle: 'normal', color: colors.success, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>💬 Feedback:</strong>
                <br />
                {entrega.comentariProfessor}
              </div>
            )}
            {esSolucionari && !desbloquejat && (
              <div style={{ fontSize: '0.75rem', color: colors.textLight, fontWeight: '600', marginTop: '6px' }}>
                Es desbloqueja en puntuar la teva entrega
              </div>
            )}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={dateStyle}>{m.data?.toDate().toLocaleDateString()}</span>
        </div>
      </div>
    );
  };

  // --- PANTALLA DE CÀRREGA DE SEGURETAT ---
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
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⚠️</div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: colors.danger, marginBottom: '15px' }}>
          Error de Connexió
        </h2>
        <p style={{ fontSize: '1.1rem', color: colors.textLight, lineHeight: '1.6', maxWidth: '500px' }}>
          {errorSeguretat}
        </p>
        <button
          onClick={() => window.location.reload()}
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
          Reintentar
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
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⚠️</div>
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
            {logoImg && <img src={logoImg} alt="Logo" style={{ height: isMobile ? '35px' : '42px', borderRadius: '10px' }} />}
            <span style={brandTextStyle(colors)}>Campus Serra</span>
          </div>
          <div style={navLinksArea}>
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
            <div style={{ display: isMobile ? (menuMobilObert ? 'flex' : 'none') : 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '10px' : '40px', alignItems: isMobile ? 'flex-start' : 'center', position: isMobile ? 'absolute' : 'static', top: isMobile ? '100%' : 'auto', left: isMobile ? '0' : 'auto', right: isMobile ? '0' : 'auto', backgroundColor: isMobile ? 'white' : 'transparent', padding: isMobile ? '20px' : '0', borderBottom: isMobile ? `1px solid ${colors.border}` : 'none', boxShadow: isMobile ? '0 4px 20px rgba(0,0,0,0.1)' : 'none', zIndex: isMobile ? '1000' : 'auto' }}>
              <button onClick={() => { setView('inici'); setMenuMobilObert(false); }} style={navLink(view === 'inici', colors)}>Inici</button>
              <button onClick={() => { setView('materials'); setMenuMobilObert(false); }} style={navLink(view === 'materials', colors)}>Aula Virtual</button>
              <button onClick={() => { setView('consultes'); setMenuMobilObert(false); }} style={navLink(view === 'consultes', colors)}>💬 Consultes Privades</button>
              <button onClick={() => signOut(auth)} style={logoutBtn(colors)}>Tancar sessió</button>
            </div>
          </div>
        </div>
      </nav>

      <main style={mainLayout(isMobile)}>
        
        {view === 'inici' && (
          <div className="fade-in">
            <div style={welcomeBanner(colors, isMobile)}>
              <div style={{ flex: 1 }}>
                <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-1.5px' }}>Benvingut, {studentData?.nom}!</h1>
                <p style={{ margin: '15px 0 0 0', opacity: 0.9, fontSize: '1.2rem', fontWeight: '500' }}>
                  Curs actual: <strong>{studentData?.curs}</strong>
                </p>
              </div>
              <div style={{ fontSize: '5rem', opacity: 0.25 }}>🚀</div>
            </div>

            <h3 style={sectionLabel}>El teu progrés</h3>
            <div style={progressCardStyle(colors, isMobile)}>
              {progrés.total === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px 20px', color: colors.textLight, fontWeight: '600', fontSize: '1.05rem' }}>
                  Encara no hi ha tasques assignades al teu curs.
                </div>
              ) : (
                <div style={progressLayoutStyle(isMobile)}>
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
                    <div style={progressStatsRowStyle(isMobile)}>
                      <div style={progressStatBoxStyle(colors, colors.primary)}>
                        <div style={progressStatValueStyle}>{progrés.completades}</div>
                        <div style={progressStatLabelStyle(colors)}>Tasques completades</div>
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
              <div style={emptyState(colors, isMobile)}>No hi ha avisos pendents.</div>
            ) : (
              avisos
                .filter(a => !avisosLlegits.includes(a.id))
                .map(a => (
                  <div key={a.id} style={cardStyle(colors, isMobile)}>
                    <div style={{ display: 'flex', gap: '25px' }}>
                      <div style={iconCircle(colors, '#eff6ff', colors.primary)}>📢</div>
                      <div style={{ flex: 1 }}>
                        <div style={textBodyStyle}>{a.contingut}</div>
                        <div style={dateStyle}>{a.data?.toDate().toLocaleDateString('ca-ES', { day: 'numeric', month: 'long' })}</div>
                      </div>
                      <button
                        onClick={() => handleMarcarComLlegit(a.id)}
                        style={{
                          padding: '8px 12px',
                          backgroundColor: colors.success,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          transition: 'all 0.2s ease',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        ✓ Llegit
                      </button>
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
              <div style={emptyState(colors, isMobile)}>Encara no s'ha publicat contingut.</div>
            ) : (
              Object.entries(
                materials.reduce((acc, m) => {
                  acc[m.tema] = acc[m.tema] || [];
                  acc[m.tema].push(m);
                  return acc;
                }, {})
              ).map(([tema, items]) => {
                const tasques = items.filter(esTasca);
                const altresMaterials = items.filter((m) => !esTasca(m));
                const tasquesPendents = tasques.filter((m) => !esMaterialCompletat(m.id));
                const tasquesCompletades = tasques.filter((m) => esMaterialCompletat(m.id));

                return (
                  <div key={tema} style={{ marginBottom: '55px' }}>
                    <h3 style={temaHeader(colors)}>{tema}</h3>

                    {altresMaterials.map((m) => renderFilaMaterial(m, colors, APP_CONFIG))}

                    {tasquesPendents.length > 0 && (
                      <div style={{ marginTop: altresMaterials.length > 0 ? '25px' : 0, marginBottom: '25px' }}>
                        <div style={subSectionLabelStyle(colors)}>Tasques pendents de revisió</div>
                        {tasquesPendents.map((m) => renderFilaMaterial(m, colors, APP_CONFIG))}
                      </div>
                    )}

                    {tasquesCompletades.length > 0 && (
                      <div style={{ marginTop: '25px' }}>
                        <div style={subSectionLabelStyle(colors, colors.success)}>Tasques completades</div>
                        {tasquesCompletades.map((m) => renderFilaMaterial(m, colors, APP_CONFIG))}
                      </div>
                    )}
                  </div>
                );
              })
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
              esSolucionariDesbloquejat(selectedMaterial) ? (
                <button 
                  onClick={() => handleOpenFile(selectedMaterial.url)} 
                  style={{...attachmentCardStyle(colors, isMobile), width: '100%', border: 'none', cursor: 'pointer', textAlign: isMobile ? 'center' : 'left'}}
                >
                  <div style={{ fontSize: '2rem' }}>📂</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Descarregar recurs adjunt</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Fitxer original compartit pel professorat</div>
                  </div>
                  <div style={{ fontSize: '1.5rem', color: colors.primary }}>↗</div>
                </button>
              ) : (
                <div 
                  style={{
                    ...attachmentCardStyle(colors, isMobile),
                    width: '100%',
                    opacity: 0.6,
                    cursor: 'not-allowed',
                    backgroundColor: '#f1f5f9'
                  }}
                >
                  <div style={{ fontSize: '2rem' }}>🔒</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '800', fontSize: '1.1rem', color: colors.textLight }}>Solucionari bloquejat</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '4px' }}>Es desbloqueja en puntuar la teva entrega</div>
                  </div>
                  <div style={{ fontSize: '1.5rem', color: colors.textLight }}>🔒</div>
                </div>
              )
            )}

            {selectedMaterial.tipus?.toLowerCase().includes('tasca') && (
              <div style={submissionSectionStyle(colors)}>
                {tascaCompletada && (
                  <div style={tascaCompletadaBannerStyle(colors, isMobile)}>
                    <span style={{ fontSize: '1.5rem' }}>✅</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '900', fontSize: '1.1rem', color: colors.success }}>Tasca Completada</div>
                      <div style={{ fontSize: '0.9rem', color: colors.textLight, marginTop: '4px', fontWeight: '600' }}>
                        El professor ha revisat i qualificat el teu lliurament.
                        {teNota && ` La teva nota és ${entregaActual.nota}/10.`}
                      </div>
                      {entregaActual.comentariProfessor && (
                        <div style={{
                          marginTop: '12px',
                          padding: '12px 16px',
                          backgroundColor: '#f0fdf4',
                          borderLeft: `4px solid ${colors.success}`,
                          borderRadius: '8px',
                          fontStyle: 'italic',
                          fontSize: '0.9rem',
                          color: colors.textDark,
                          lineHeight: '1.6'
                        }}>
                          <strong style={{ fontStyle: 'normal', color: colors.success }}>💬 Feedback del professor:</strong>
                          <br />
                          {entregaActual.comentariProfessor}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.6rem', margin: 0, fontWeight: '900' }}>El teu lliurament</h3>
                  <div style={{ fontSize: '0.85rem', color: colors.textLight, fontWeight: '700', backgroundColor: '#fff', padding: '5px 12px', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                    Mida màxima: 50MB
                  </div>
                </div>
                
                <div style={{ marginBottom: '35px' }}>
                  <label style={uploadDropzoneStyle(isUploading, colors, tascaCompletada, isMobile)}>
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
                      onChange={handlePujarFitxer}
                      disabled={isUploading || tascaCompletada}
                    />
                  </label>
                  {tascaCompletada && (
                    <p style={{ textAlign: 'center', color: colors.textLight, fontSize: '0.9rem', marginTop: '12px', fontWeight: '600' }}>
                      Aquesta tasca ja està tancada. No cal tornar a pujar el fitxer.
                    </p>
                  )}
                  
                  {uploadStatus.includes('✅') && !isUploading && (
                    <div style={{ ...statusText(colors.success), backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '15px', marginTop: '20px', border: `1px solid ${colors.success}` }}>
                      {uploadStatus}
                    </div>
                  )}

                  {uploadError && !isUploading && (
                    <div style={{ ...statusText(colors.danger), backgroundColor: '#fef2f2', padding: '15px', borderRadius: '15px', marginTop: '20px', border: `1px solid ${colors.danger}` }}>
                      ❌ Error: {uploadError}
                    </div>
                  )}
                </div>

                {entregaActual && (
                  <div style={tascaCompletada ? confirmedSubmissionCompletadaStyle(colors, isMobile) : confirmedSubmissionStyle(colors, isMobile)}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: colors.success }}></div>
                          <div style={{ fontWeight: '900', fontSize: '0.8rem', color: colors.success, textTransform: 'uppercase' }}>
                            {tascaCompletada ? 'Tasca Completada' : 'Lliurat correctament'}
                          </div>
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
                    <button onClick={() => handleOpenFile(obtenirUrlCloudinary(entregaActual))} style={viewBtnStyle(colors)}>Revisar Enviament</button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {view === 'consultes' && (
          <div className="fade-in">
            <MissatgesPrivats user={user} isAdmin={false} colors={colors} />
          </div>
        )}
      </main>

      {isMobile && menuMobilObert && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            zIndex: 999,
            onClick: () => setMenuMobilObert(false)
          }}
        />
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
        {/* FOOTER PRINCIPAL DE L'ALUMNE (AMB WHATSAPP INTEGRAT I REPARAT) */}
        <div style={footerBottomStyle(colors)}>
          
          {/* BOTÓ DE WHATSAPP DINÀMIC PER CURS */}
          {studentData?.curs && ENLLACES_WHATSAPP_DASHBOARD[studentData.curs] && (
            <div style={{ marginBottom: '25px', textAlign: 'center' }}>
              <a 
                href={ENLLACES_WHATSAPP_DASHBOARD[studentData.curs]}
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25d366',
                  color: 'white',
                  padding: '8px 18px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.backgroundColor = '#1ebd59';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#25d366';
                }}
              >
                <span style={{ fontSize: '1rem' }}>💬</span> Entrar al grup de WhatsApp de {studentData.curs}
              </a>
            </div>
          )}
          <p style={{ margin: '0', fontSize: '0.85rem', color: colors.textLight }}>
            &copy; {new Date().getFullYear()} Serra d'Equacions — Alliberant el potencial matemàtic.
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.75rem', color: colors.textLight, opacity: 0.7 }}>
            Desenvolupat de forma nativa per a optimitzar el rendiment acadèmic.
          </p>
        </div>
      </footer>

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

const mainLayout = (isMobile) => ({ maxWidth: '1000px', margin: isMobile ? '30px auto' : '60px auto', padding: isMobile ? '0 20px' : '0 40px', boxSizing: 'border-box' });

const welcomeBanner = (c, isMobile) => ({
  background: `linear-gradient(135deg, ${c.primary}, ${c.accent})`,
  color: 'white', padding: isMobile ? '30px' : '60px', borderRadius: isMobile ? '20px' : '40px', marginBottom: isMobile ? '30px' : '60px',
  boxShadow: '0 25px 50px rgba(37, 99, 235, 0.2)', display: 'flex', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left'
});

const sectionLabel = { 
  fontSize: '0.9rem', textTransform: 'uppercase', color: '#94a3b8', 
  marginBottom: '30px', fontWeight: '900', letterSpacing: '2px', paddingLeft: '5px' 
};

const progressCardStyle = (c, isMobile) => ({
  background: c.card,
  borderRadius: isMobile ? '20px' : '30px',
  padding: isMobile ? '25px' : '45px',
  border: `1px solid ${c.border}`,
  marginBottom: isMobile ? '30px' : '60px',
  boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
});

const progressLayoutStyle = (isMobile) => ({
  display: 'flex',
  gap: isMobile ? '30px' : '50px',
  alignItems: isMobile ? 'flex-start' : 'center',
  flexWrap: 'wrap',
  flexDirection: isMobile ? 'column' : 'row'
});

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

const progressStatsRowStyle = (isMobile) => ({
  display: 'flex',
  gap: isMobile ? '12px' : '18px',
  flexWrap: 'wrap',
  flexDirection: isMobile ? 'column' : 'row'
});

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

const cardStyle = (c, isMobile) => ({
  background: c.card, borderRadius: isMobile ? '20px' : '30px', padding: isMobile ? '25px' : '45px', border: `1px solid ${c.border}`,
  marginBottom: isMobile ? '20px' : '35px', boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
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

const materialRowStyle = (c, isMobile) => ({
  display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
  padding: isMobile ? '20px 25px' : '28px 35px', backgroundColor: '#fff', border: `1px solid ${c.border}`,
  borderRadius: isMobile ? '15px' : '25px', marginBottom: '20px', cursor: 'pointer',
  boxShadow: '0 6px 15px rgba(0,0,0,0.01)', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '15px' : '0'
});

const materialRowCompletadaStyle = (c, isMobile) => ({
  ...materialRowStyle(c, isMobile),
  backgroundColor: '#f0fdf4',
  border: `2px solid ${c.success}`,
  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.1)'
});

const subSectionLabelStyle = (c, accent = c.primary) => ({
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  fontWeight: '900',
  letterSpacing: '1.5px',
  color: accent,
  marginBottom: '18px',
  paddingLeft: '5px'
});

const tascaCompletadaBannerStyle = (c, isMobile) => ({
  display: 'flex',
  alignItems: isMobile ? 'flex-start' : 'center',
  gap: '18px',
  padding: isMobile ? '18px 20px' : '22px 28px',
  borderRadius: isMobile ? '15px' : '20px',
  backgroundColor: '#f0fdf4',
  border: `2px solid ${c.success}`,
  marginBottom: isMobile ? '20px' : '35px',
  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.08)',
  flexDirection: isMobile ? 'column' : 'row'
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

const attachmentCardStyle = (c, isMobile) => ({
  display: 'flex', alignItems: 'center', gap: isMobile ? '15px' : '25px', padding: isMobile ? '20px' : '30px',
  borderRadius: isMobile ? '15px' : '25px', border: `1px solid ${c.border}`, textDecoration: 'none',
  color: c.textDark, marginTop: '25px', backgroundColor: '#fff', 
  boxShadow: '0 5px 15px rgba(0,0,0,0.02)', flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left'
});

const submissionSectionStyle = (c) => ({
  marginTop: '70px', borderTop: `2px solid ${c.border}`, paddingTop: '60px'
});

const uploadDropzoneStyle = (loading, c, desactivat = false, isMobile = false) => ({
  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
  padding: isMobile ? '40px 30px' : '70px 50px', textAlign: 'center', border: `4px dashed ${desactivat ? c.border : c.primary}`, 
  borderRadius: isMobile ? '20px' : '35px', cursor: loading || desactivat ? 'not-allowed' : 'pointer', 
  color: loading ? '#fff' : desactivat ? c.textLight : c.primary, fontWeight: '900', 
  backgroundColor: loading ? c.primary : desactivat ? '#f1f5f9' : '#eff6ff',
  opacity: desactivat && !loading ? 0.75 : 1
});

const statusText = (color) => ({ 
  fontSize: '1.1rem', color: color, fontWeight: '800', marginTop: '30px', textAlign: 'center' 
});

const confirmedSubmissionStyle = (c, isMobile) => ({
  display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '20px' : '35px', padding: isMobile ? '20px 25px' : '30px 40px',
  borderRadius: isMobile ? '20px' : '28px', border: `2px solid ${c.success}`, backgroundColor: '#f0fdf4', 
  marginTop: isMobile ? '20px' : '35px', boxShadow: '0 8px 20px rgba(16, 185, 129, 0.08)', flexDirection: isMobile ? 'column' : 'row'
});

const confirmedSubmissionCompletadaStyle = (c, isMobile) => ({
  ...confirmedSubmissionStyle(c, isMobile),
  border: `2px solid ${c.primary}`,
  backgroundColor: '#eff6ff'
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

const emptyState = (c, isMobile) => ({
  padding: isMobile ? '50px 20px' : '100px', textAlign: 'center', color: c.textLight, 
  border: `4px dashed ${c.border}`, borderRadius: isMobile ? '20px' : '40px', 
  fontStyle: 'italic', fontSize: isMobile ? '1rem' : '1.3rem', fontWeight: '600'
});

const footerStyle = (c, isMobile) => ({
  backgroundColor: c.card,
  borderTop: `2px solid ${c.border}`,
  padding: isMobile ? '30px 20px' : '50px 40px',
  marginTop: '60px',
  boxShadow: '0 -4px 20px rgba(0,0,0,0.03)'
});

const footerContentStyle = (isMobile) => ({
  maxWidth: '1000px',
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
  maxWidth: '1000px',
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