import React, { useMemo, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DATA_CATEGORIES = {
  PLATFORM: 'plataforma',
  TASKS: 'tasques',
  ACADEMIC: 'academic',
  MATH: 'matematiques'
};

const initialQuickPrompts = [
  'Quines tasques tinc pendents?',
  'On puc trobar els materials?',
  "Explica'm com resoldre una equació de 2n grau",
  "Ajuda'm a organitzar l'estudi d'avui"
];

// ---------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------

const normalitzarText = (text = '') =>
  text.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const formatDate = (value) => {
  if (!value) return 'sense data límit indicada';
  try {
    const date = typeof value?.toDate === 'function' ? value.toDate() : new Date(value);
    if (Number.isNaN(date.getTime())) return 'sense data límit indicada';
    return date.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return 'sense data límit indicada';
  }
};

const esTasca = (material) => normalitzarText(material?.tipus || '').includes('tasca');

const teNotaValida = (entrega) => {
  if (!entrega || entrega.nota === undefined || entrega.nota === null) return false;
  return !Number.isNaN(parseFloat(entrega.nota));
};

const esEntregaCompletada = (entrega) => {
  if (!entrega) return false;
  if (entrega.estat === 'completada') return true;
  return teNotaValida(entrega);
};

const getEntregaPerMaterial = (materialId, entregasAlumne = []) =>
  entregasAlumne.find((e) => e.materialId === materialId) || null;

const getTaskSummary = (materials = [], entregasAlumne = []) => {
  const tasques = materials.filter(esTasca);
  const pendents = tasques.filter((t) => !getEntregaPerMaterial(t.id, entregasAlumne));
  const pendentsRevisio = tasques.filter((t) => {
    const e = getEntregaPerMaterial(t.id, entregasAlumne);
    return e && !esEntregaCompletada(e);
  });
  const completades = tasques.filter((t) =>
    esEntregaCompletada(getEntregaPerMaterial(t.id, entregasAlumne))
  );
  return {
    tasques, pendents, pendentsRevisio, completades,
    total: tasques.length,
    percent: tasques.length > 0 ? Math.round((completades.length / tasques.length) * 100) : 0
  };
};

const classifyQuestion = (message) => {
  const text = normalitzarText(message);
  const mathWords = ['equacio','funcio','derivada','integral','fraccio','percentatge','geometria','area','volum','trigonometria','pitagores','logaritme','probabilitat','matematica','mates'];
  const taskWords = ['tasca','deures','pendent','lliurament','entrega','nota','revisio','data limit'];
  const platformWords = ['on es','on puc','trobar','aula virtual','materials','consultes','missatges','plataforma','dashboard'];
  if (mathWords.some((w) => text.includes(w))) return DATA_CATEGORIES.MATH;
  if (taskWords.some((w) => text.includes(w))) return DATA_CATEGORIES.TASKS;
  if (platformWords.some((w) => text.includes(w))) return DATA_CATEGORIES.PLATFORM;
  return DATA_CATEGORIES.ACADEMIC;
};

const buildAssistantContext = ({ studentData, materials, entregasAlumne, avisos }) => {
  const summary = getTaskSummary(materials, entregasAlumne);
  return {
    alumne: { nom: studentData?.nom || 'Alumne', curs: studentData?.curs || 'Sense curs assignat' },
    tasques: summary.tasques.map((tasca) => {
      const entrega = getEntregaPerMaterial(tasca.id, entregasAlumne);
      return {
        id: tasca.id,
        titol: tasca.titol || 'Sense títol',
        tema: tasca.tema || 'Sense tema',
        dataLimit: tasca.dataLimit || null,
        estat: !entrega ? 'pendent' : esEntregaCompletada(entrega) ? 'completada' : 'pendent_revisio',
        nota: entrega?.nota ?? null
      };
    }),
    avisos: (avisos || []).slice(0, 5).map((a) => ({
      titol: a.titol || 'Avís', contingut: a.contingut || '', data: a.data || null
    })),
    resum: {
      totalTasques: summary.total,
      pendents: summary.pendents.length,
      pendentsRevisio: summary.pendentsRevisio.length,
      completades: summary.completades.length,
      percent: summary.percent
    }
  };
};

const buildLocalAnswer = ({ message, studentData, materials, entregasAlumne }) => {
  const type = classifyQuestion(message);
  const summary = getTaskSummary(materials, entregasAlumne);
  const nom = studentData?.nom || 'alumne/a';
  const text = normalitzarText(message);

  if (type === DATA_CATEGORIES.TASKS) {
    if (summary.total === 0)
      return 'Ara mateix no veig cap tasca assignada al teu curs. Quan el professorat publiqui una tasca, apareixerà a Aula Virtual i també al teu progrés.';
    if (summary.pendents.length === 0 && summary.pendentsRevisio.length === 0)
      return `Molt bé, ${nom}! No tens tasques sense lliurar. Tens ${summary.completades.length} tasques completades de ${summary.total}. Pots revisar materials o consultar el feedback del professorat a Aula Virtual.`;
    const pendentsText = summary.pendents.slice(0, 5)
      .map((t, i) => `${i + 1}. ${t.titol || 'Tasca sense títol'} · ${t.tema || 'Sense tema'} · ${formatDate(t.dataLimit)}`)
      .join('\n');
    const revisioText = summary.pendentsRevisio.length > 0
      ? `\n\nTambé tens ${summary.pendentsRevisio.length} lliurament/s pendent/s de revisió del professorat.` : '';
    return `Tens ${summary.pendents.length} tasca/ques encara sense lliurar. Et recomano començar per aquesta llista:\n\n${pendentsText}${revisioText}\n\nPots entrar a "Aula Virtual", obrir la tasca i pujar el fitxer des de l'apartat "El teu lliurament".`;
  }

  if (type === DATA_CATEGORIES.PLATFORM) {
    if (text.includes('consulta') || text.includes('missatge'))
      return 'Per enviar o llegir consultes privades, ves a la pestanya "💬 Consultes Privades" del menú superior. Allà pots comunicar-te amb el professorat sense sortir del Campus.';
    if (text.includes('material') || text.includes('aula virtual') || text.includes('fitxer'))
      return 'Els materials i les tasques són a "Aula Virtual". Cada tema agrupa recursos, tasques pendents i tasques completades. Si una tasca té adjunt, entra al detall i prem "Descarregar recurs adjunt".';
    return 'Et puc orientar pel Campus: "Inici" mostra progrés i avisos; "Aula Virtual" conté materials, tasques i lliuraments; "Consultes Privades" serveix per parlar amb el professorat.';
  }

  if (type === DATA_CATEGORIES.MATH) {
    if (text.includes('2n grau') || text.includes('segon grau') || text.includes('equacio'))
      return 'Per resoldre una equació de segon grau, primer posa-la en la forma ax² + bx + c = 0. Identifica a, b i c. Aplica la fórmula x = (-b ± √(b² - 4ac)) / 2a. El discriminant b² - 4ac indica: positiu = dues solucions, zero = una, negatiu = cap solució real. Envia\'m una equació concreta i te la resolc pas a pas.';
    if (text.includes('percentatge') || text.includes('%'))
      return 'Per treballar percentatges: p% d\'una quantitat és quantitat × p/100. Per exemple, el 15% de 80 és 80 · 15/100 = 12. Per augment o descompte, converteix a factor: +20% → ×1,20; −20% → ×0,80.';
    if (text.includes('funcio'))
      return 'Una funció relaciona cada valor x amb un valor y. Estudia\'n el domini, els talls amb els eixos, si creix o decreix, i la forma general. En y = mx + n, m és el pendent i n el tall amb l\'eix Y.';
    return 'En matemàtiques: 1) identifica què et demanen, 2) escriu les dades i la fórmula, 3) resol i comprova. Envia\'m l\'exercici concret i te l\'explico de manera guiada.';
  }

  return 'Puc ajudar-te amb dubtes acadèmics d\'ESO i Batxillerat. Explica\'m la matèria i l\'exercici concret. Si és una pregunta teòrica, et donaré una explicació clara; si és un problema, el resoldrem pas a pas.';
};

const createSystemPrompt = (context) =>
  `Ets un assistent educatiu integrat exclusivament al Dashboard d'alumnes de Serra d'Equacions. Respon en català, de manera pedagògica, clara i adequada per a ESO i Batxillerat. Pots ajudar amb tasques pendents, navegació de la plataforma i qualsevol dubte acadèmic general. No inventis dades de la plataforma: fes servir només aquest context: ${JSON.stringify(context)}`;

// ---------------------------------------------------------------------------
// Component principal
// ---------------------------------------------------------------------------

export default function AIAssistant({
  variant = 'embedded',
  studentData,
  materials = [],
  entregasAlumne = [],
  avisos = [],
  colors,
  isMobile = false,
  onNavigate,
  aiEndpoint
}) {
  // Quan variant='floating', comença obert per defecte
  const [isOpen, setIsOpen] = useState(variant === 'floating' || variant === 'embedded');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiMode, setAiMode] = useState(aiEndpoint ? 'connectat' : 'local');
  const messagesEndRef = useRef(null);

  const palette = colors || {
    primary: '#2563eb', primaryDark: '#1d4ed8', bg: '#f8fafc', card: '#ffffff',
    textDark: '#0f172a', textLight: '#64748b', border: '#e2e8f0',
    danger: '#ef4444', success: '#10b981', accent: '#3b82f6', warning: '#f59e0b'
  };

  const taskSummary = useMemo(() => getTaskSummary(materials, entregasAlumne), [materials, entregasAlumne]);

  const [messages, setMessages] = useState(() => [{
    role: 'assistant',
    content: "Hola! Soc el teu assistent d'estudi de Serra d'Equacions. Et puc ajudar amb tasques pendents, orientar-te pel Campus i resoldre dubtes acadèmics d'ESO i Batxillerat. Pregunta'm el que necessitis! 😊"
  }]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const enviarMissatge = async (textForcat) => {
    const text = (textForcat || input).trim();
    if (!text || loading) return;

    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const context = buildAssistantContext({ studentData, materials, entregasAlumne, avisos });
      let resposta = '';

      if (aiEndpoint) {
        const response = await fetch(aiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system: createSystemPrompt(context),
            message: text,
            context,
            history: [...messages, userMessage].slice(-8)
          })
        });

        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status} del Worker.`);
        }

        const data = await response.json();
        // Llegim reply, answer, resposta o message — en aquest ordre
        resposta =
          data.reply ||
          data.answer ||
          data.resposta ||
          data.message ||
          data?.choices?.[0]?.message?.content ||
          '';

        setAiMode('connectat');
      }

      // Si el Worker no ha retornat res, fem servir la resposta local
      if (!resposta) {
        resposta = buildLocalAnswer({ message: text, studentData, materials, entregasAlumne });
        setAiMode('local');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: resposta }]);
    } catch (error) {
      console.error("Error a l'assistent IA:", error);
      setAiMode('local');
      const respostaLocal = buildLocalAnswer({ message: text, studentData, materials, entregasAlumne });
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `${respostaLocal}\n\n⚠️ Nota: he fet servir el mode local perquè no s'ha pogut contactar amb el Worker (${error.message}).`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      enviarMissatge();
    }
  };

  const goTo = (novaVista) => {
    if (typeof onNavigate === 'function') onNavigate(novaVista);
    if (variant === 'floating') setIsOpen(false);
  };

  // ---------------------------------------------------------------------------
  // UI del xat
  // ---------------------------------------------------------------------------

  const chatContent = (
    <div style={chatShellStyle(palette, variant, isMobile)}>
      {/* Capçalera */}
      <div style={assistantHeaderStyle(palette, variant, isMobile)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
          <div style={assistantAvatarStyle(palette)}>AI</div>
          <div>
            <h3 style={{ margin: 0, fontSize: variant === 'floating' ? '1rem' : '1.35rem', fontWeight: '950', color: variant === 'floating' ? 'white' : palette.textDark }}>
              Assistent IA · Serra d'Equacions
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: variant === 'floating' ? 'rgba(255,255,255,0.85)' : palette.textLight, fontWeight: '600' }}>
              {aiMode === 'connectat' ? '🟢 IA connectada' : '🟡 Mode local'} · Matemàtiques · Campus
            </p>
          </div>
        </div>
        {variant === 'floating' && (
          <button onClick={() => setIsOpen(false)} style={closeButtonStyle} aria-label="Tancar assistent">
            ✕
          </button>
        )}
      </div>

      {/* Mini estadístiques de tasques */}
      <div style={assistantStatsStyle(palette, isMobile)}>
        <div style={miniStatStyle(palette, palette.primary)}>
          <strong style={{ fontSize: '1.2rem' }}>{taskSummary.pendents.length}</strong>
          <span style={{ fontSize: '0.75rem', color: palette.textLight }}>Pendents</span>
        </div>
        <div style={miniStatStyle(palette, palette.warning)}>
          <strong style={{ fontSize: '1.2rem' }}>{taskSummary.pendentsRevisio.length}</strong>
          <span style={{ fontSize: '0.75rem', color: palette.textLight }}>En revisió</span>
        </div>
        <div style={miniStatStyle(palette, palette.success)}>
          <strong style={{ fontSize: '1.2rem' }}>{taskSummary.percent}%</strong>
          <span style={{ fontSize: '0.75rem', color: palette.textLight }}>Progrés</span>
        </div>
      </div>

      {/* Botons de navegació ràpida */}
      <div style={assistantActionsStyle(isMobile)}>
        <button onClick={() => goTo('materials')} style={assistantActionButtonStyle(palette)}>📚 Aula Virtual</button>
        <button onClick={() => goTo('consultes')} style={assistantActionButtonStyle(palette)}>💬 Consultes</button>
        <button onClick={() => goTo('inici')} style={assistantActionButtonStyle(palette)}>🏠 Inici</button>
      </div>

      {/* Missatges */}
      <div style={messagesAreaStyle(palette, variant)}>
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} style={messageRowStyle(message.role)}>
            <div style={messageBubbleStyle(palette, message.role)}>
              {message.content.split('\n').map((line, lineIndex, arr) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  {lineIndex < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div style={messageRowStyle('assistant')}>
            <div style={messageBubbleStyle(palette, 'assistant')}>⏳ Escrivint resposta...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick prompts */}
      <div style={quickPromptsStyle}>
        {initialQuickPrompts.map((prompt) => (
          <button key={prompt} onClick={() => enviarMissatge(prompt)} style={quickPromptButtonStyle(palette)} disabled={loading}>
            {prompt}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={inputAreaStyle(palette)}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escriu el teu dubte acadèmic o pregunta sobre el Campus..."
          style={assistantTextareaStyle(palette)}
          rows={2}
        />
        <button
          onClick={() => enviarMissatge()}
          disabled={loading || !input.trim()}
          style={sendButtonStyle(palette, loading || !input.trim())}
        >
          Enviar
        </button>
      </div>
    </div>
  );

  // ---------------------------------------------------------------------------
  // Floating variant — renderitzat via portal sobre document.body
  // Això evita qualsevol problema de overflow/transform del contenidor pare
  // ---------------------------------------------------------------------------

  if (variant === 'floating') {
    const floatingUI = (
      <>
        {/* Panell de xat — visible quan isOpen=true */}
        {isOpen && (
          <div style={floatingPanelStyle(isMobile)}>
            {chatContent}
          </div>
        )}

        {/* Botó flotant — sempre visible */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          style={floatingButtonStyle(palette, isMobile)}
          aria-label={isOpen ? 'Tancar assistent IA' : 'Obrir assistent IA'}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '🤖'}
        </button>
      </>
    );

    // createPortal garanteix que el component es renderitzi directament a body,
    // sense cap contenidor pare que pugui "trencar" el position:fixed
    return ReactDOM.createPortal(floatingUI, document.body);
  }

  // ---------------------------------------------------------------------------
  // Embedded variant (per si es fa servir dins d'una pàgina)
  // ---------------------------------------------------------------------------

  return (
    <section style={embeddedWrapperStyle(isMobile)}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ margin: 0, fontSize: '0.9rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: '900', letterSpacing: '2px' }}>
          Assistent d'Intel·ligència Artificial
        </h3>
      </div>
      {chatContent}
    </section>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const embeddedWrapperStyle = (isMobile) => ({
  marginBottom: isMobile ? '30px' : '60px'
});

const chatShellStyle = (c, variant, isMobile) => ({
  backgroundColor: c.card,
  border: `1px solid ${c.border}`,
  borderRadius: variant === 'floating' ? '26px' : isMobile ? '22px' : '32px',
  overflow: 'hidden',
  boxShadow: variant === 'floating'
    ? '0 25px 70px rgba(15, 23, 42, 0.25)'
    : '0 18px 45px rgba(37, 99, 235, 0.08)',
  width: '100%',
  display: variant === 'floating' ? 'flex' : 'block',
  flexDirection: variant === 'floating' ? 'column' : undefined,
  maxHeight: variant === 'floating'
    ? (isMobile ? 'calc(100dvh - 104px)' : 'calc(100dvh - 128px)')
    : undefined
});

const assistantHeaderStyle = (c, variant, isMobile) => ({
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '18px',
  padding: variant === 'floating' ? '18px 20px' : isMobile ? '22px' : '28px 32px',
  background: variant === 'floating'
    ? `linear-gradient(135deg, ${c.primary}, ${c.accent})`
    : '#ffffff',
  borderBottom: variant === 'floating' ? 'none' : `1px solid ${c.border}`
});

const assistantAvatarStyle = (c) => ({
  width: '48px', height: '48px', borderRadius: '18px',
  background: `linear-gradient(135deg, ${c.primary}, ${c.accent})`,
  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontWeight: '950', fontSize: '0.95rem',
  boxShadow: '0 10px 24px rgba(37, 99, 235, 0.25)', flexShrink: 0
});

const closeButtonStyle = {
  color: 'white', fontWeight: '900', fontSize: '1rem', cursor: 'pointer',
  width: '34px', height: '34px', borderRadius: '10px',
  backgroundColor: 'rgba(255,255,255,0.18)', border: 'none',
  display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const assistantStatsStyle = (c, isMobile) => ({
  display: 'grid', flexShrink: 0,
  gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
  gap: '12px', padding: '18px 20px',
  backgroundColor: '#f8fafc', borderBottom: `1px solid ${c.border}`
});

const miniStatStyle = (c, accent) => ({
  border: `1px solid ${c.border}`, borderTop: `4px solid ${accent}`,
  borderRadius: '16px', padding: '14px', backgroundColor: '#ffffff',
  display: 'flex', flexDirection: 'column', gap: '4px'
});

const assistantActionsStyle = (isMobile) => ({
  display: 'flex', flexShrink: 0, flexWrap: 'wrap', gap: '10px',
  padding: isMobile ? '16px' : '18px 20px', borderBottom: '1px solid #e2e8f0'
});

const assistantActionButtonStyle = (c) => ({
  padding: '10px 14px', borderRadius: '12px', backgroundColor: '#eff6ff',
  color: c.primaryDark, fontWeight: '800', cursor: 'pointer',
  fontSize: '0.85rem', border: `1px solid ${c.border}`
});

const messagesAreaStyle = (c, variant) => ({
  height: variant === 'floating' ? 'auto' : '340px',
  minHeight: variant === 'floating' ? '180px' : undefined,
  flex: variant === 'floating' ? 1 : undefined,
  overflowY: 'auto', padding: '22px 20px', backgroundColor: '#ffffff'
});

const messageRowStyle = (role) => ({
  display: 'flex',
  justifyContent: role === 'user' ? 'flex-end' : 'flex-start',
  marginBottom: '14px'
});

const messageBubbleStyle = (c, role) => ({
  maxWidth: '86%', padding: '13px 16px',
  borderRadius: role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
  backgroundColor: role === 'user' ? c.primary : '#f1f5f9',
  color: role === 'user' ? 'white' : c.textDark,
  lineHeight: '1.6', fontSize: '0.94rem', fontWeight: '600', whiteSpace: 'pre-wrap'
});

const quickPromptsStyle = {
  display: 'flex', flexShrink: 0, flexWrap: 'wrap', gap: '9px',
  padding: '0 20px 18px 20px', backgroundColor: '#ffffff'
};

const quickPromptButtonStyle = (c) => ({
  padding: '8px 11px', borderRadius: '999px', backgroundColor: '#f8fafc',
  color: c.textLight, border: `1px solid ${c.border}`,
  fontWeight: '700', fontSize: '0.78rem', cursor: 'pointer'
});

const inputAreaStyle = (c) => ({
  display: 'flex', flexShrink: 0, gap: '12px',
  padding: '18px 20px 20px 20px',
  borderTop: `1px solid ${c.border}`, backgroundColor: '#f8fafc'
});

const assistantTextareaStyle = (c) => ({
  flex: 1, resize: 'none', border: `1.5px solid ${c.border}`,
  borderRadius: '14px', padding: '13px 14px', fontFamily: 'inherit',
  fontSize: '0.92rem', outline: 'none', color: c.textDark,
  backgroundColor: '#ffffff', lineHeight: '1.5'
});

const sendButtonStyle = (c, disabled) => ({
  padding: '0 18px', borderRadius: '14px',
  backgroundColor: disabled ? '#cbd5e1' : c.primary,
  color: 'white', fontWeight: '900',
  cursor: disabled ? 'not-allowed' : 'pointer',
  minWidth: '82px', border: 'none'
});

// ── Floating: el panell de xat ──
// position:fixed respecte al viewport; z-index alt garantit
const floatingPanelStyle = (isMobile) => ({
  position: 'fixed',
  right: isMobile ? '16px' : '28px',
  bottom: isMobile ? '86px' : '98px',
  width: isMobile ? 'calc(100vw - 32px)' : '430px',
  maxWidth: '430px',
  zIndex: 999999,
  pointerEvents: 'auto'
});

// ── Floating: el botó rodó ──
const floatingButtonStyle = (c, isMobile) => ({
  position: 'fixed',
  right: isMobile ? '18px' : '30px',
  bottom: isMobile ? '18px' : '30px',
  width: isMobile ? '58px' : '66px',
  height: isMobile ? '58px' : '66px',
  borderRadius: '999px',
  background: `linear-gradient(135deg, ${c.primary}, ${c.accent})`,
  color: 'white',
  fontSize: isMobile ? '1.5rem' : '1.8rem',
  boxShadow: '0 18px 40px rgba(37, 99, 235, 0.35)',
  cursor: 'pointer',
  zIndex: 999999,
  pointerEvents: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px solid rgba(255,255,255,0.75)',
  // translateZ(0) crea un nou stacking context aïllat del contenidor pare
  transform: 'translateZ(0)'
});