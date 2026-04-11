import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Ara utilitzem la variable d'entorn en lloc d'escriure la clau directament
  apiKey: import.meta.env.VITE_FIREBASE_KEY, 
  authDomain: "app-mates.firebaseapp.com",
  projectId: "app-mates",
  storageBucket: "app-mates.firebasestorage.app",
  messagingSenderId: "165327798812",
  appId: "1:165327798812:web:796094047d0632cc4dd5d9",
  measurementId: "G-7B6WJXEFNG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);