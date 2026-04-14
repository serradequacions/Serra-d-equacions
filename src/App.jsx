import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Importem els components que hem creat
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import StudentDashboard from './components/StudentDashboard';
import logoImg from './logo.png';

const APP_CONFIG = {
  adminEmail: "serradequacions@gmail.com",
  cloudName: "ducevp5vb",
  uploadPreset: "tasques_alumnes",
  cursosOpcions: [
    "1r ESO", "2n ESO", "3r ESO", "4t ESO A", "4t ESO B", 
    "1r BATX CCSS", "1r BATX CIEN.", "2n BATX CCSS", "2n BATX CIEN"
  ],
  tipusIcons: { 'Teoria': '📚', 'Exercici': '✍️', 'Vídeo': '🎥', 'Examen': '🏁' }
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

  if (loading) return <div className="loading-screen">Carregant...</div>;

  return (
    <>
      {!user ? (
        <LoginPage logoImg={logoImg} />
      ) : user.email === APP_CONFIG.adminEmail ? (
        <AdminPanel user={user} APP_CONFIG={APP_CONFIG} />
      ) : (
        <StudentDashboard user={user} APP_CONFIG={APP_CONFIG} />
      )}
    </>
  );
}