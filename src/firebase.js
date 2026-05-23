import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

/**
 * Configuració Firebase per a Vite.
 *
 * Les variables han d'anar al fitxer `.env` a l'ARREL del projecte (al costat de package.json).
 * Només les variables amb prefix `VITE_` s'exposen al client.
 *
 * Obligatori:
 *   VITE_FIREBASE_API_KEY=...
 *
 * Reinicia `npm run dev` després de crear o modificar el `.env`.
 */
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY?.trim();

if (!apiKey) {
  throw new Error(
    "[Firebase] Falta la variable d'entorn VITE_FIREBASE_API_KEY.\n\n" +
      "1. Crea el fitxer .env a l'arrel del projecte (app-mates/.env)\n" +
      "2. Afegeix la línia:\n" +
      "   VITE_FIREBASE_API_KEY=AIza... (copia-la des de Firebase Console → Configuració del projecte → Les teves apps → SDK)\n" +
      "3. Atura i torna a executar: npm run dev"
  );
}

const firebaseConfig = {
  apiKey,
  authDomain: "app-mates.firebaseapp.com",
  projectId: "app-mates",
  storageBucket: "app-mates.firebasestorage.app",
  messagingSenderId: "165327798812",
  appId: "1:165327798812:web:796094047d0632cc4dd5d9",
  measurementId: "G-7B6WJXEFNG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
