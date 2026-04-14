import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { 
  collection, onSnapshot, addDoc, deleteDoc, doc, 
  serverTimestamp, query, orderBy 
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';

export default function AdminPanel({ APP_CONFIG }) {
  const [avisos, setAvisos] = useState([]);
  const [nouAvis, setNouAvis] = useState({ titol: '', curs: '1r ESO', tipus: 'Teoria' });

  useEffect(() => {
    const q = query(collection(db, "avisos"), orderBy("creat", "desc"));
    return onSnapshot(q, (snapshot) => {
      setAvisos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const publicarAvis = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "avisos"), {
      ...nouAvis,
      creat: serverTimestamp()
    });
    setNouAvis({ titol: '', curs: '1r ESO', tipus: 'Teoria' });
  };

  return (
    <div className="admin-container">
      <header className="panel-header">
        <h1>Panell Administrador</h1>
        <button onClick={() => signOut(auth)}>Sortir</button>
      </header>

      <section className="publish-section">
        <h3>Publicar nou material</h3>
        <form onSubmit={publicarAvis}>
          <input 
            value={nouAvis.titol} 
            onChange={e => setNouAvis({...nouAvis, titol: e.target.value})}
            placeholder="Títol del material" required 
          />
          <select value={nouAvis.curs} onChange={e => setNouAvis({...nouAvis, curs: e.target.value})}>
            {APP_CONFIG.cursosOpcions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button type="submit">Publicar</button>
        </form>
      </section>

      <section className="items-list">
        {avisos.map(av => (
          <div key={av.id} className="item-card">
            <span>{av.curs} - {av.titol}</span>
            <button onClick={() => deleteDoc(doc(db, "avisos", av.id))}>Eliminar</button>
          </div>
        ))}
      </section>
    </div>
  );
}