import React, { useMemo, useRef, useState, useEffect } from 'react';

const DATA_CATEGORIES = {
  PLATFORM: 'plataforma',
  TASKS: 'tasques',
  ACADEMIC: 'academic',
  MATH: 'matematiques'
};

const initialQuickPrompts = [
  'Quines tasques tinc pendents?',
  'On puc trobar els materials?',
  'Explica’m com resoldre una equació de 2n grau',
  'Ajuda’m a organitzar l’estudi d’avui'
];

const normalitzarText = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const formatDate = (value) => {
  if (!value) return 'sense data límit indicada';
  try {
    const date = typeof value?.toDate === 'function' ? value.toDate() : new Date(value);
    if (Number.isNaN(date.getTime())) return 'sense data límit indicada';
    return date.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch (error) {
    return 'sense data límit indicada';
  }
};

const esTasca = (material) => normalitzarText(material?.tipus || '').includes('tasca');

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

const getEntregaPerMaterial = (materialId, entregasAlumne = []) =>
  entregasAlumne.find((entrega) => entrega.materialId === materialId) || null;

const getTaskSummary = (materials = [], entregasAlumne = []) => {
  const tasques = materials.filter(esTasca);
  const pendents = tasques.filter((tasca) => !getEntregaPerMaterial(tasca.id, entregasAlumne));
  const pendentsRevisio = tasques.filter((tasca) => {
    const entrega = getEntregaPerMaterial(tasca.id, entregasAlumne);
    return entrega && !esEntregaCompletada(entrega);
  });
  const completades = tasques.filter((tasca) => esEntregaCompletada(getEntregaPerMaterial(tasca.id, entregasAlumne)));

  return {
    tasques,
    pendents,
    pendentsRevisio,
    completades,
    total: tasques.length,
    percent: tasques.length > 0 ? Math.round((completades.length / tasques.length) * 100) : 0
  };
};

const classifyQuestion = (message) => {
  const text = normalitzarText(message);
  const mathWords = ['equacio', 'funcio', 'derivada', 'integral', 'fraccio', 'percentatge', 'geometria', 'area', 'volum', 'trigonometria', 'pitagores', 'logaritme', 'probabilitat', 'matematica', 'mates'];
  const taskWords = ['tasca', 'deures', 'pendent', 'lliurament', 'entrega', 'nota', 'revisio', 'data limit'];
  const platformWords = ['on es', 'on puc', 'trobar', 'aula virtual', 'materials', 'consultes', 'missatges', 'plataforma', 'dashboard'];

  if (mathWords.some((word) => text.includes(word))) return DATA_CATEGORIES.MATH;
  if (taskWords.some((word) => text.includes(word))) return DATA_CATEGORIES.TASKS;
  if (platformWords.some((word) => text.includes(word))) return DATA_CATEGORIES.PLATFORM;
  return DATA_CATEGORIES.ACADEMIC;
};

const buildAssistantContext = ({ studentData, materials, entregasAlumne, avisos }) => {
  const summary = getTaskSummary(materials, entregasAlumne);
  return {
    alumne: {
      nom: studentData?.nom || 'Alumne',
      curs: studentData?.curs || 'Sense curs assignat'
    },
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
    avisos: avisos.slice(0, 5).map((avis) => ({
      titol: avis.titol || 'Avís',
      contingut: avis.contingut || '',
      data: avis.data || null
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
    if (summary.total === 0) {
      return 'Ara mateix no veig cap tasca assignada al teu curs. Quan el professorat publiqui una tasca, apareixerà a Aula Virtual i també al teu progrés.';
    }

    if (summary.pendents.length === 0 && summary.pendentsRevisio.length === 0) {
      return `Molt bé, ${nom}! No tens tasques sense lliurar. Tens ${summary.completades.length} tasques completades de ${summary.total}. Pots revisar materials o consultar el feedback del professorat a Aula Virtual.`;
    }

    const pendentsText = summary.pendents
      .slice(0, 5)
      .map((tasca, index) => `${index + 1}. ${tasca.titol || 'Tasca sense títol'} · ${tasca.tema || 'Sense tema'} · ${formatDate(tasca.dataLimit)}`)
      .join('\n');

    const revisioText = summary.pendentsRevisio.length > 0
      ? `\n\nTambé tens ${summary.pendentsRevisio.length} lliurament/s pendent/s de revisió del professorat.`
      : '';

    return `Tens ${summary.pendents.length} tasca/ques encara sense lliurar. Et recomano començar per aquesta llista:\n\n${pendentsText}${revisioText}\n\nPots entrar a “Aula Virtual”, obrir la tasca i pujar el fitxer des de l’apartat “El teu lliurament”.`;
  }

  if (type === DATA_CATEGORIES.PLATFORM) {
    if (text.includes('consulta') || text.includes('missatge')) {
      return 'Per enviar o llegir consultes privades, ves a la pestanya “💬 Consultes Privades” del menú superior. Allà pots comunicar-te amb el professorat sense sortir del Campus.';
    }

    if (text.includes('material') || text.includes('aula virtual') || text.includes('fitxer')) {
      return 'Els materials i les tasques són a “Aula Virtual”. Cada tema agrupa recursos, tasques pendents i tasques completades. Si una tasca té adjunt, entra al detall i prem “Descarregar recurs adjunt”.';
    }

    return 'Et puc orientar pel Campus: “Inici” mostra progrés i avisos; “Aula Virtual” conté materials, tasques i lliuraments; “Consultes Privades” serveix per parlar amb el professorat.';
  }

  if (type === DATA_CATEGORIES.MATH) {
    if (text.includes('2n grau') || text.includes('segon grau') || text.includes('equacio')) {
      return 'Per resoldre una equació de segon grau, primer posa-la en la forma ax² + bx + c = 0. Després identifica a, b i c. Aplica la fórmula x = (-b ± √(b² - 4ac)) / 2a. El valor b² - 4ac s’anomena discriminant: si és positiu hi ha dues solucions, si és zero n’hi ha una, i si és negatiu no hi ha solucions reals. Si em passes una equació concreta, te la puc resoldre pas a pas.';
    }

    if (text.includes('percentatge') || text.includes('%')) {
      return 'Per treballar percentatges, recorda aquesta idea: p% d’una quantitat és multiplicar la quantitat per p/100. Per exemple, el 15% de 80 és 80 · 15/100 = 12. Si el problema és d’augment o descompte, converteix el percentatge en factor: +20% és multiplicar per 1,20 i -20% és multiplicar per 0,80.';
    }

    if (text.includes('funcio')) {
      return 'Una funció relaciona cada valor d’entrada x amb un valor de sortida y. Per estudiar-la, mira el domini, els punts de tall amb els eixos, si creix o decreix, i la seva forma general. En una recta y = mx + n, m és el pendent i n és el punt de tall amb l’eix Y.';
    }

    return 'En matemàtiques convé seguir tres passos: 1) identifica què et demanen, 2) escriu les dades i la fórmula o procediment, 3) resol i comprova si el resultat té sentit. Envia’m l’exercici concret i te l’explico de manera guiada.';
  }

  return 'Puc ajudar-te amb dubtes acadèmics d’ESO i Batxillerat. Explica’m la matèria i l’exercici concret. Si és una pregunta teòrica, et donaré una explicació clara; si és un problema, el resoldrem pas a pas.';
};

const createSystemPrompt = (context) => `Ets un assistent educatiu integrat exclusivament al Dashboard d'alumnes de Serra d'Equacions. Respon en català, de manera pedagògica, clara i adequada per a ESO i Batxillerat. Pots ajudar amb tasques pendents, navegació de la plataforma i qualsevol dubte acadèmic general. No inventis dades de la plataforma: fes servir només aquest context: ${JSON.stringify(context)}`;

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
  const [isOpen, setIsOpen] = useState(variant === 'embedded' || variant === 'floating');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiMode, setAiMode] = useState(aiEndpoint ? 'connectat' : 'local');
  const messagesEndRef = useRef(null);

  const palette = colors || {
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

  const taskSummary = useMemo(() => getTaskSummary(materials, entregasAlumne), [materials, entregasAlumne]);

  const [messages, setMessages] = useState(() => [
    {
      role: 'assistant',
      content: 'Hola! Soc el teu assistent d’estudi. Et puc ajudar amb tasques pendents, orientar-te pel Campus i resoldre dubtes acadèmics d’ESO i Batxillerat.'
    }
  ]);

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
          throw new Error('El servei d’IA no ha respost correctament.');
        }

        const data = await response.json();
        resposta = data.reply || data.answer || data.message || data?.choices?.[0]?.message?.content || '';
        setAiMode('connectat');
      }

      if (!resposta) {
        resposta = buildLocalAnswer({ message: text, studentData, materials, entregasAlumne });
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: resposta }]);
    } catch (error) {
      console.error('Error a l’assistent IA:', error);
      setAiMode('local');
      const respostaLocal = buildLocalAnswer({ message: text, studentData, materials, entregasAlumne });
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `${respostaLocal}\n\nNota: ara mateix he fet servir el mode local perquè no s’ha pogut contactar amb el servei d’IA.`
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

  const chatContent = (
    <div style={chatShellStyle(palette, variant, isMobile)}>
      <div style={assistantHeaderStyle(palette, variant, isMobile)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
          <div style={assistantAvatarStyle(palette)}>AI</div>
          <div>
            <h3 style={{ margin: 0, fontSize: variant === 'floating' ? '1rem' : '1.35rem', fontWeight: '950', color: variant === 'floating' ? 'white' : palette.textDark }}>
              Assistent IA de l’alumne
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: variant === 'floating' ? 'rgba(255,255,255,0.85)' : palette.textLight, fontWeight: '600' }}>
              {aiMode === 'connectat' ? 'IA connectada' : 'Mode local segur'} · Matemàtiques · Campus
            </p>
          </div>
        </div>
        {variant === 'floating' && (
          <button onClick={() => setIsOpen(false)} style={closeButtonStyle} aria-label="Tancar assistent">
            ✕
          </button>
        )}
      </div>

      <div style={assistantStatsStyle(palette, isMobile)}>
        <div style={miniStatStyle(palette, palette.primary)}>
          <strong>{taskSummary.pendents.length}</strong>
          <span>Pendents</span>
        </div>
        <div style={miniStatStyle(palette, palette.warning)}>
          <strong>{taskSummary.pendentsRevisio.length}</strong>
          <span>En revisió</span>
        </div>
        <div style={miniStatStyle(palette, palette.success)}>
          <strong>{taskSummary.percent}%</strong>
          <span>Progrés</span>
        </div>
      </div>

      <div style={assistantActionsStyle(isMobile)}>
        <button onClick={() => goTo('materials')} style={assistantActionButtonStyle(palette)}>
          📚 Aula Virtual
        </button>
        <button onClick={() => goTo('consultes')} style={assistantActionButtonStyle(palette)}>
          💬 Consultes
        </button>
        <button onClick={() => goTo('inici')} style={assistantActionButtonStyle(palette)}>
          🏠 Inici
        </button>
      </div>

      <div style={messagesAreaStyle(palette, variant)}>
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} style={messageRowStyle(message.role)}>
            <div style={messageBubbleStyle(palette, message.role)}>
              {message.content.split('\n').map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  {lineIndex < message.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div style={messageRowStyle('assistant')}>
            <div style={messageBubbleStyle(palette, 'assistant')}>Escrivint resposta...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div style={quickPromptsStyle}>
        {initialQuickPrompts.map((prompt) => (
          <button key={prompt} onClick={() => enviarMissatge(prompt)} style={quickPromptButtonStyle(palette)} disabled={loading}>
            {prompt}
          </button>
        ))}
      </div>

      <div style={inputAreaStyle(palette)}>
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escriu el teu dubte acadèmic o pregunta sobre el Campus..."
          style={assistantTextareaStyle(palette)}
          rows={2}
        />
        <button onClick={() => enviarMissatge()} disabled={loading || !input.trim()} style={sendButtonStyle(palette, loading || !input.trim())}>
          Enviar
        </button>
      </div>
    </div>
  );

  if (variant === 'floating') {
    const floatingAssistant = (
      <div style={floatingRootStyle}>
        {isOpen && <div style={floatingPanelStyle(isMobile)}>{chatContent}</div>}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          style={floatingButtonStyle(palette, isMobile)}
          aria-label={isOpen ? 'Tancar assistent IA' : 'Obrir assistent IA'}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '🤖'}
        </button>
      </div>
    );

    return floatingAssistant;
  }

  return (
    <section style={embeddedWrapperStyle(palette, isMobile)}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ margin: 0, fontSize: '0.9rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: '900', letterSpacing: '2px' }}>
          Assistent d’Intel·ligència Artificial
        </h3>
      </div>
      {chatContent}
    </section>
  );
}

const embeddedWrapperStyle = (c, isMobile) => ({
  marginBottom: isMobile ? '30px' : '60px'
});

const chatShellStyle = (c, variant, isMobile) => ({
  backgroundColor: c.card,
  border: `1px solid ${c.border}`,
  borderRadius: variant === 'floating' ? '26px' : isMobile ? '22px' : '32px',
  overflow: 'hidden',
  boxShadow: variant === 'floating' ? '0 25px 70px rgba(15, 23, 42, 0.25)' : '0 18px 45px rgba(37, 99, 235, 0.08)',
  width: '100%',
  display: variant === 'floating' ? 'flex' : 'block',
  flexDirection: variant === 'floating' ? 'column' : undefined,
  maxHeight: variant === 'floating' ? (isMobile ? 'calc(100dvh - 104px)' : 'calc(100dvh - 128px)') : undefined
});

const assistantHeaderStyle = (c, variant, isMobile) => ({
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '18px',
  padding: variant === 'floating' ? '18px 20px' : isMobile ? '22px' : '28px 32px',
  background: variant === 'floating' ? `linear-gradient(135deg, ${c.primary}, ${c.accent})` : '#ffffff',
  borderBottom: variant === 'floating' ? 'none' : `1px solid ${c.border}`
});

const assistantAvatarStyle = (c) => ({
  width: '48px',
  height: '48px',
  borderRadius: '18px',
  background: `linear-gradient(135deg, ${c.primary}, ${c.accent})`,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '950',
  fontSize: '0.95rem',
  boxShadow: '0 10px 24px rgba(37, 99, 235, 0.25)',
  flexShrink: 0
});

const closeButtonStyle = {
  color: 'white',
  fontWeight: '900',
  fontSize: '1rem',
  cursor: 'pointer',
  width: '34px',
  height: '34px',
  borderRadius: '10px',
  backgroundColor: 'rgba(255,255,255,0.18)'
};

const assistantStatsStyle = (c, isMobile) => ({
  display: 'grid',
  flexShrink: 0,
  gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
  gap: '12px',
  padding: '18px 20px',
  backgroundColor: '#f8fafc',
  borderBottom: `1px solid ${c.border}`
});

const miniStatStyle = (c, accent) => ({
  border: `1px solid ${c.border}`,
  borderTop: `4px solid ${accent}`,
  borderRadius: '16px',
  padding: '14px',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
});

const assistantActionsStyle = (isMobile) => ({
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'wrap',
  gap: '10px',
  padding: isMobile ? '16px' : '18px 20px',
  borderBottom: '1px solid #e2e8f0'
});

const assistantActionButtonStyle = (c) => ({
  padding: '10px 14px',
  borderRadius: '12px',
  backgroundColor: '#eff6ff',
  color: c.primaryDark,
  fontWeight: '800',
  cursor: 'pointer',
  fontSize: '0.85rem',
  border: `1px solid ${c.border}`
});

const messagesAreaStyle = (c, variant) => ({
  height: variant === 'floating' ? 'auto' : '340px',
  minHeight: variant === 'floating' ? '180px' : undefined,
  flex: variant === 'floating' ? 1 : undefined,
  overflowY: 'auto',
  padding: '22px 20px',
  backgroundColor: '#ffffff'
});

const messageRowStyle = (role) => ({
  display: 'flex',
  justifyContent: role === 'user' ? 'flex-end' : 'flex-start',
  marginBottom: '14px'
});

const messageBubbleStyle = (c, role) => ({
  maxWidth: '86%',
  padding: '13px 16px',
  borderRadius: role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
  backgroundColor: role === 'user' ? c.primary : '#f1f5f9',
  color: role === 'user' ? 'white' : c.textDark,
  lineHeight: '1.6',
  fontSize: '0.94rem',
  fontWeight: '600',
  whiteSpace: 'pre-wrap'
});

const quickPromptsStyle = {
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'wrap',
  gap: '9px',
  padding: '0 20px 18px 20px',
  backgroundColor: '#ffffff'
};

const quickPromptButtonStyle = (c) => ({
  padding: '8px 11px',
  borderRadius: '999px',
  backgroundColor: '#f8fafc',
  color: c.textLight,
  border: `1px solid ${c.border}`,
  fontWeight: '700',
  fontSize: '0.78rem',
  cursor: 'pointer'
});

const inputAreaStyle = (c) => ({
  display: 'flex',
  flexShrink: 0,
  gap: '12px',
  padding: '18px 20px 20px 20px',
  borderTop: `1px solid ${c.border}`,
  backgroundColor: '#f8fafc'
});

const assistantTextareaStyle = (c) => ({
  flex: 1,
  resize: 'none',
  border: `1.5px solid ${c.border}`,
  borderRadius: '14px',
  padding: '13px 14px',
  fontFamily: 'inherit',
  fontSize: '0.92rem',
  outline: 'none',
  color: c.textDark,
  backgroundColor: '#ffffff',
  lineHeight: '1.5'
});

const sendButtonStyle = (c, disabled) => ({
  padding: '0 18px',
  borderRadius: '14px',
  backgroundColor: disabled ? '#cbd5e1' : c.primary,
  color: 'white',
  fontWeight: '900',
  cursor: disabled ? 'not-allowed' : 'pointer',
  minWidth: '82px'
});

const floatingRootStyle = {
  position: 'sticky',
  bottom: '24px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  width: '100%',
  pointerEvents: 'none',
  zIndex: 5000,
  marginTop: '28px',
  paddingRight: '6px'
};

const floatingPanelStyle = (isMobile) => ({
  position: 'absolute',
  right: isMobile ? '0' : '6px',
  bottom: isMobile ? '74px' : '82px',
  width: isMobile ? 'min(calc(100vw - 32px), 430px)' : '430px',
  maxWidth: '430px',
  zIndex: 5001,
  pointerEvents: 'auto'
});

const floatingButtonStyle = (c, isMobile) => ({
  position: 'relative',
  width: isMobile ? '58px' : '66px',
  height: isMobile ? '58px' : '66px',
  borderRadius: '999px',
  background: `linear-gradient(135deg, ${c.primary}, ${c.accent})`,
  color: 'white',
  fontSize: isMobile ? '1.5rem' : '1.8rem',
  boxShadow: '0 18px 40px rgba(37, 99, 235, 0.35)',
  cursor: 'pointer',
  zIndex: 5002,
  pointerEvents: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px solid rgba(255,255,255,0.75)',
  transform: 'translateZ(0)' 
});
