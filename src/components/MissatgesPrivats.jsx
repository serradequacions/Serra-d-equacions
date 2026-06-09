import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { 
  collection, query, where, onSnapshot, orderBy, addDoc, serverTimestamp, updateDoc, doc 
} from 'firebase/firestore';

export default function MissatgesPrivats({ user, isAdmin = false, colors }) {
  const [consultes, setConsultes] = useState([]);
  const [selectedAlumne, setSelectedAlumne] = useState(null);
  const [titol, setTitol] = useState('');
  const [missatge, setMissatge] = useState('');
  // Map: consultaId -> text de la resposta en curs (evita barrejar respostes entre consultes)
  const [respostes, setRespostes] = useState({});
  // Set: consultaId -> mode edició actiu
  const [editant, setEditant] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Color scheme fallback
  const safeColors = colors || {
    primary: '#2563eb',
    bg: '#f8fafc',
    card: '#ffffff',
    textDark: '#0f172a',
    textLight: '#64748b',
    border: '#e2e8f0',
    success: '#10b981',
    accent: '#3b82f6'
  };

  // Subscribe to consultes_privades collection
  useEffect(() => {
    if (!user) return;

    let q;
    if (isAdmin) {
      // Professor: veure totes les consultes
      q = query(collection(db, 'consultes_privades'), orderBy('dataCreacio', 'desc'));
    } else {
      // Alumne: veure només les seves consultes
      q = query(
        collection(db, 'consultes_privades'),
        where('alumneEmail', '==', user.email),
        orderBy('dataCreacio', 'desc')
      );
    }

    const unsub = onSnapshot(q, (snap) => {
      setConsultes(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, [user, isAdmin]);

  // Agrupar consultes per alumne (per al professor)
  const consultesPerAlumne = isAdmin ? (() => {
    const agrupades = {};
    consultes.forEach(cons => {
      const key = cons.alumneEmail;
      if (!agrupades[key]) {
        agrupades[key] = {
          email: cons.alumneEmail,
          nom: cons.alumneNom,
          consultes: []
        };
      }
      agrupades[key].consultes.push(cons);
    });
    return Object.values(agrupades);
  })() : [];

  // Enviar nova consulta (alumne)
  const handleEnviarConsulta = async (e) => {
    e.preventDefault();
    if (!titol.trim() || !missatge.trim()) return;

    setIsSending(true);
    try {
      await addDoc(collection(db, 'consultes_privades'), {
        alumneEmail: user.email,
        alumneNom: user.displayName || user.email.split('@')[0],
        titol: titol.trim(),
        missatge: missatge.trim(),
        respostaProfessor: '',
        dataCreacio: serverTimestamp(),
        dataResposta: null
      });
      setTitol('');
      setMissatge('');
    } catch (error) {
      console.error('Error enviant consulta:', error);
      alert('Error enviant la consulta. Torna-ho a provar.');
    } finally {
      setIsSending(false);
    }
  };

  // Helpers per gestionar el Map de respostes per consulta
  const setRespostaConsulta = (consultaId, text) =>
    setRespostes((prev) => ({ ...prev, [consultaId]: text }));

  const getRespostaConsulta = (consultaId) => respostes[consultaId] ?? '';

  // Enviar o actualitzar resposta (professor)
  const handleEnviarResposta = async (consultaId) => {
    const text = getRespostaConsulta(consultaId).trim();
    if (!text) return;

    setIsSending(true);
    try {
      await updateDoc(doc(db, 'consultes_privades', consultaId), {
        respostaProfessor: text,
        dataResposta: serverTimestamp()
      });
      // Netejar l'estat d'aquest consulta i tancar edició
      setRespostes((prev) => { const n = { ...prev }; delete n[consultaId]; return n; });
      setEditant((prev) => { const n = { ...prev }; delete n[consultaId]; return n; });
    } catch (error) {
      console.error('Error enviant resposta:', error);
      alert('Error enviant la resposta. Torna-ho a provar.');
    } finally {
      setIsSending(false);
    }
  };

  // Activar edició d'una resposta ja enviada
  const activarEdicio = (consultaId, respostaActual) => {
    setRespostaConsulta(consultaId, respostaActual);
    setEditant((prev) => ({ ...prev, [consultaId]: true }));
  };

  const cancellarEdicio = (consultaId) => {
    setRespostes((prev) => { const n = { ...prev }; delete n[consultaId]; return n; });
    setEditant((prev) => { const n = { ...prev }; delete n[consultaId]; return n; });
  };

  // Format data
  const formatData = (timestamp) => {
    if (!timestamp) return '';
    const data = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return data.toLocaleDateString('ca-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // VISTA ALUMNE
  if (!isAdmin) {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Formulari nova consulta */}
        <div style={cardStyle(safeColors)}>
          <h3 style={cardTitleStyle(safeColors)}>📝 Enviar un nou dubte al professor</h3>
          <form onSubmit={handleEnviarConsulta}>
            <input
              type="text"
              placeholder="Títol del dubte..."
              value={titol}
              onChange={(e) => setTitol(e.target.value)}
              style={inputStyle(safeColors)}
              disabled={isSending}
            />
            <textarea
              placeholder="Escriu aquí el teu dubte o consulta..."
              value={missatge}
              onChange={(e) => setMissatge(e.target.value)}
              style={textareaStyle(safeColors)}
              disabled={isSending}
            />
            <button 
              type="submit" 
              style={primaryButtonStyle(safeColors)}
              disabled={isSending || !titol.trim() || !missatge.trim()}
            >
              {isSending ? 'Enviant...' : 'Enviar consulta'}
            </button>
          </form>
        </div>

        {/* Llistat de consultes */}
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: safeColors.textDark, marginBottom: '20px' }}>
            💬 Els meus dubtes i respostes
          </h3>
          {consultes.length === 0 ? (
            <div style={emptyStateStyle(safeColors)}>
              Encara no has enviat cap consulta.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {consultes.map((cons) => (
                <div key={cons.id} style={consultaCardStyle(safeColors, !!cons.respostaProfessor)}>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontWeight: '800', fontSize: '1.1rem', color: safeColors.textDark }}>
                      {cons.titol}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: safeColors.textLight, marginTop: '4px' }}>
                      {formatData(cons.dataCreacio)}
                    </div>
                  </div>
                  
                  <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '10px', marginBottom: '12px' }}>
                    <div style={{ fontSize: '0.75rem', color: safeColors.textLight, fontWeight: '700', marginBottom: '6px' }}>
                      EL TEU MISSATGE:
                    </div>
                    <div style={{ fontSize: '0.95rem', color: safeColors.textDark, lineHeight: '1.6' }}>
                      {cons.missatge}
                    </div>
                  </div>

                  {cons.respostaProfessor && (
                    <div style={{ backgroundColor: '#eff6ff', padding: '15px', borderRadius: '10px', border: `1px solid ${safeColors.primary}` }}>
                      <div style={{ fontSize: '0.75rem', color: safeColors.primary, fontWeight: '700', marginBottom: '6px' }}>
                        RESPOSTA DEL PROFESSOR:
                      </div>
                      <div style={{ fontSize: '0.95rem', color: safeColors.textDark, lineHeight: '1.6' }}>
                        {cons.respostaProfessor}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: safeColors.textLight, marginTop: '8px' }}>
                        {formatData(cons.dataResposta)}
                      </div>
                    </div>
                  )}

                  {!cons.respostaProfessor && (
                    <div style={{ fontSize: '0.85rem', color: safeColors.textLight, fontStyle: 'italic', marginTop: '8px' }}>
                      ⏳ Pendent de resposta del professor...
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // VISTA PROFESSOR (ADMIN)
  return (
    <div>
      {!selectedAlumne ? (
        <>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: safeColors.textDark, marginBottom: '20px' }}>
            💬 Consultes dels alumnes
          </h3>
          {consultesPerAlumne.length === 0 ? (
            <div style={emptyStateStyle(safeColors)}>
              Encara no hi ha cap consulta dels alumnes.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
              {consultesPerAlumne.map((alumne) => {
                const pendents = alumne.consultes.filter(c => !c.respostaProfessor).length;
                return (
                  <div 
                    key={alumne.email} 
                    onClick={() => setSelectedAlumne(alumne)}
                    style={alumneCardStyle(safeColors, pendents > 0)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <div style={avatarStyle(safeColors)}>
                        {alumne.nom.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontWeight: '800', fontSize: '1rem', color: safeColors.textDark }}>
                          {alumne.nom}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: safeColors.textLight }}>
                          {alumne.email}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem', color: safeColors.textLight }}>
                        {alumne.consultes.length} consulta{alumne.consultes.length !== 1 ? 's' : ''}
                      </span>
                      {pendents > 0 && (
                        <span style={pendingBadgeStyle(safeColors)}>
                          {pendents} pendents
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <div>
          <button 
            onClick={() => setSelectedAlumne(null)}
            style={backButtonStyle(safeColors)}
          >
            ← Tornar al llistat
          </button>
          
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
              <div style={avatarStyle(safeColors, true)}>
                {selectedAlumne.nom.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: safeColors.textDark }}>
                  {selectedAlumne.nom}
                </h3>
                <div style={{ fontSize: '0.9rem', color: safeColors.textLight }}>
                  {selectedAlumne.email}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {selectedAlumne.consultes.map((cons) => (
                <div key={cons.id} style={consultaCardStyle(safeColors, !!cons.respostaProfessor)}>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontWeight: '800', fontSize: '1.1rem', color: safeColors.textDark }}>
                      {cons.titol}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: safeColors.textLight, marginTop: '4px' }}>
                      {formatData(cons.dataCreacio)}
                    </div>
                  </div>
                  
                  <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '10px', marginBottom: '12px' }}>
                    <div style={{ fontSize: '0.75rem', color: safeColors.textLight, fontWeight: '700', marginBottom: '6px' }}>
                      MISSATGE DE L'ALUMNE:
                    </div>
                    <div style={{ fontSize: '0.95rem', color: safeColors.textDark, lineHeight: '1.6' }}>
                      {cons.missatge}
                    </div>
                  </div>

                  {cons.respostaProfessor ? (
                    <div style={{ backgroundColor: '#eff6ff', padding: '15px', borderRadius: '10px', border: `1px solid ${safeColors.primary}` }}>
                      <div style={{ fontSize: '0.75rem', color: safeColors.primary, fontWeight: '700', marginBottom: '6px' }}>
                        LA TEVA RESPOSTA:
                      </div>
                      {editant[cons.id] ? (
                        <>
                          <textarea
                            value={getRespostaConsulta(cons.id)}
                            onChange={(e) => setRespostaConsulta(cons.id, e.target.value)}
                            style={textareaStyle(safeColors)}
                            disabled={isSending}
                          />
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                              onClick={() => handleEnviarResposta(cons.id)}
                              style={{ ...primaryButtonStyle(safeColors), flex: 1 }}
                              disabled={isSending || !getRespostaConsulta(cons.id).trim()}
                            >
                              {isSending ? 'Guardant...' : 'Guardar canvis'}
                            </button>
                            <button
                              onClick={() => cancellarEdicio(cons.id)}
                              style={{ padding: '14px', border: `1px solid ${safeColors.border}`, borderRadius: '10px', background: '#f8fafc', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' }}
                            >
                              Cancel·lar
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div style={{ fontSize: '0.95rem', color: safeColors.textDark, lineHeight: '1.6' }}>
                            {cons.respostaProfessor}
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                            <div style={{ fontSize: '0.75rem', color: safeColors.textLight }}>
                              {formatData(cons.dataResposta)}
                            </div>
                            <button
                              onClick={() => activarEdicio(cons.id, cons.respostaProfessor)}
                              style={{ fontSize: '0.75rem', color: safeColors.primary, background: 'none', border: 'none', cursor: 'pointer', fontWeight: '700' }}
                            >
                              ✏️ Editar
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div>
                      <textarea
                        placeholder="Escriu la teva resposta..."
                        value={getRespostaConsulta(cons.id)}
                        onChange={(e) => setRespostaConsulta(cons.id, e.target.value)}
                        style={textareaStyle(safeColors)}
                        disabled={isSending}
                      />
                      <button
                        onClick={() => handleEnviarResposta(cons.id)}
                        style={primaryButtonStyle(safeColors)}
                        disabled={isSending || !getRespostaConsulta(cons.id).trim()}
                      >
                        {isSending ? 'Enviant...' : 'Enviar resposta'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Estils
const cardStyle = (c) => ({
  background: c.card,
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
  border: `1px solid ${c.border}`,
  marginBottom: '25px'
});

const cardTitleStyle = (c) => ({
  margin: '0 0 20px 0',
  fontSize: '1.1rem',
  color: c.textDark,
  fontWeight: '800',
  borderLeft: `4px solid ${c.primary}`,
  paddingLeft: '12px'
});

const inputStyle = (c) => ({
  width: '100%',
  padding: '12px',
  marginBottom: '12px',
  borderRadius: '10px',
  border: `1px solid ${c.border}`,
  fontSize: '0.9rem',
  boxSizing: 'border-box',
  fontFamily: 'inherit'
});

const textareaStyle = (c) => ({
  ...inputStyle(c),
  height: '100px',
  resize: 'none',
  marginBottom: '15px'
});

const primaryButtonStyle = (c) => ({
  width: '100%',
  padding: '14px',
  backgroundColor: c.primary,
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  fontWeight: '700',
  cursor: 'pointer',
  fontSize: '0.95rem',
  transition: 'all 0.2s ease'
});

const emptyStateStyle = (c) => ({
  padding: '40px',
  textAlign: 'center',
  color: c.textLight,
  fontStyle: 'italic',
  backgroundColor: c.card,
  borderRadius: '16px',
  border: `1px solid ${c.border}`
});

const consultaCardStyle = (c, hasResponse) => ({
  background: c.card,
  borderRadius: '16px',
  padding: '20px',
  border: `1px solid ${hasResponse ? c.success : c.border}`,
  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
  transition: 'all 0.2s ease'
});

const alumneCardStyle = (c, hasPending) => ({
  background: c.card,
  borderRadius: '16px',
  padding: '20px',
  border: `1px solid ${hasPending ? c.primary : c.border}`,
  boxShadow: hasPending ? '0 4px 20px rgba(37, 99, 235, 0.1)' : '0 4px 20px rgba(0,0,0,0.04)',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
});

const avatarStyle = (c, large = false) => ({
  width: large ? '50px' : '40px',
  height: large ? '50px' : '40px',
  borderRadius: '50%',
  backgroundColor: c.primary,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '800',
  fontSize: large ? '1.2rem' : '1rem'
});

const pendingBadgeStyle = (c) => ({
  backgroundColor: '#ef4444',
  color: 'white',
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '0.75rem',
  fontWeight: '700'
});

const backButtonStyle = (c) => ({
  padding: '10px 20px',
  backgroundColor: '#f8fafc',
  border: `1px solid ${c.border}`,
  borderRadius: '10px',
  color: c.textDark,
  fontWeight: '700',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'all 0.2s ease'
});