import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import StudentDashboard from './components/StudentDashboard';
import AIAssistant from './components/AIAssistant';
import logoImg from './logo.png';

const APP_CONFIG = {
  adminEmail: "serradequacions@gmail.com",
  cloudName: "ducevp5vb",
  uploadPreset: "tasques_alumnes",
  cursosOpcions: [
    "1r ESO", "2n ESO", "3r ESO", "4t ESO A", "4t ESO B", 
    "1r BATX CCSS", "1r BATX CIEN.", "2n BATX CCSS", "2n BATX CIEN"
  ],
  tipusIcons: { 'Teoria': '📚', 'Exercici': '✍️', 'Vídeo': '🎥', 'Examen': '🏁', 'Tasca': '📂' },
  studentAIAssistantEndpoint: 'https://serra-equacions-ai.serradequacions.workers.dev/'
};

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#64748b' }}>Carregant aplicació...</p>
      </div>
    </div>
  );

  if (!user) {
    return <LoginPage APP_CONFIG={APP_CONFIG} logoImg={logoImg} />;
  }

  if (user.email === APP_CONFIG.adminEmail) {
    return <AdminPanel APP_CONFIG={APP_CONFIG} logoImg={logoImg} />;
  }

  const assistantColors = {
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

  return (
    <>
      <StudentDashboard user={user} APP_CONFIG={APP_CONFIG} logoImg={logoImg} />
      <AIAssistant
        variant="floating"
        colors={assistantColors}
        aiEndpoint={APP_CONFIG.studentAIAssistantEndpoint}
      />
    </>
  );
}