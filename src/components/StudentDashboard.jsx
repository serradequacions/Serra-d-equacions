import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

export default function StudentDashboard({ user, APP_CONFIG }) {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "avisos"), orderBy("creat", "desc"));
    return onSnapshot(q, (snapshot) => {
      setMaterials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="student-container">
      <nav className="student-nav">
        <span>Hola, {user.displayName || user.email}</span>
        <button onClick={() => signOut(auth)}>Tancar sessió</button>
      </nav>

      <main className="content">
        <h2>El teu material d'estudi</h2>
        <div className="materials-grid">
          {materials.map(m => (
            <div key={m.id} className="material-card">
              <div className="icon">{APP_CONFIG.tipusIcons[m.tipus] || '📄'}</div>
              <h4>{m.titol}</h4>
              <p>{m.curs}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}