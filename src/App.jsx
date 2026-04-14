import React, { useEffect, useMemo, useRef, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where,
  limit,
  arrayUnion,
  arrayRemove,
  getDocs,
  increment,
} from 'firebase/firestore';
import logoImg from './logo.png';

const ADMIN_EMAIL = 'serradequacions@gmail.com';
const APP_NAME = 'Serra d\'Equacions';
const CLOUD_NAME = 'ducevp5vb';
const UPLOAD_PRESET = 'tasques_alumnes';
const MAX_FILE_SIZE_MB = 25;
const SUPPORTED_FILE_TYPES = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp'];

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCYikRWiEEvEYlZFHQaWzE-2Ry5zWFcfC4',
  authDomain: 'app-mates.firebaseapp.com',
  projectId: 'app-mates',
  storageBucket: 'app-mates.firebasestorage.app',
  messagingSenderId: '165327798812',
  appId: '1:165327798812:web:796094047d0632cc4dd5d9',
  measurementId: 'G-7B6WJXEFNG',
};

const firebaseApp = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const COURSE_OPTIONS = [
  '1r ESO',
  '2n ESO',
  '3r ESO',
  '4t ESO A',
  '4t ESO B',
  '1r BATX CCSS',
  '1r BATX CIEN.',
  '2n BATX CCSS',
  '2n BATX CIEN',
];

const MATERIAL_TYPES = [
  { value: 'Teoria', label: 'Teoria', icon: '📚' },
  { value: 'Exercici', label: 'Exercici', icon: '✍️' },
  { value: 'Vídeo', label: 'Vídeo', icon: '🎥' },
  { value: 'Examen', label: 'Examen', icon: '🏁' },
  { value: 'Fitxa', label: 'Fitxa', icon: '🧾' },
  { value: 'Link', label: 'Link', icon: '🔗' },
  { value: 'Projecte', label: 'Projecte', icon: '🧠' },
];

const DEFAULT_THEMES = [
  'Aritmètica',
  'Fraccions',
  'Potències i arrels',
  'Polinomis',
  'Equacions',
  'Sistemes',
  'Funcions',
  'Geometria',
  'Estadística',
  'Probabilitat',
];

const CSS_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
  --bg: #f3f7ff;
  --bg-2: #eef4ff;
  --card: rgba(255,255,255,0.88);
  --card-solid: #ffffff;
  --text: #0f172a;
  --text-soft: #475569;
  --muted: #94a3b8;
  --line: rgba(148, 163, 184, 0.22);
  --primary: #1e40af;
  --primary-2: #2563eb;
  --emerald: #059669;
  --emerald-2: #10b981;
  --danger: #dc2626;
  --warning: #d97706;
  --success: #16a34a;
  --shadow: 0 20px 55px rgba(15, 23, 42, 0.08);
  --shadow-soft: 0 10px 30px rgba(15, 23, 42, 0.06);
  --radius-xl: 28px;
  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-sm: 12px;
}

* { box-sizing: border-box; }
html, body, #root { min-height: 100%; }
body {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(37,99,235,0.12), transparent 24%),
    radial-gradient(circle at top right, rgba(5,150,105,0.10), transparent 26%),
    linear-gradient(180deg, var(--bg) 0%, #ffffff 100%);
  color: var(--text);
  overflow-x: hidden;
}

a { color: inherit; }
button, input, textarea, select { font: inherit; }
button { cursor: pointer; }
img { max-width: 100%; display: block; }

::selection { background: rgba(30,64,175,0.12); }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulseSoft {
  0%, 100% { transform: scale(1); opacity: 0.92; }
  50% { transform: scale(1.02); opacity: 1; }
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(255,255,255,0.82);
  border-bottom: 1px solid rgba(148,163,184,0.18);
}

.topbar-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  min-width: 0;
}

.brand-logo {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: var(--shadow-soft);
  background: white;
}

.brand-title {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.brand-title strong {
  font-size: 18px;
  letter-spacing: -0.03em;
}

.brand-title span {
  font-size: 12px;
  color: var(--text-soft);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.page {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 28px 24px 56px;
  flex: 1;
}

.hero-card, .glass-card, .panel-card, .detail-card, .auth-card, .admin-card, .metric-card {
  background: var(--card);
  border: 1px solid rgba(255,255,255,0.62);
  box-shadow: var(--shadow);
  border-radius: var(--radius-xl);
}

.hero-card {
  padding: 24px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 18px;
  margin-bottom: 22px;
  overflow: hidden;
  position: relative;
}

.hero-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(30,64,175,0.08), rgba(5,150,105,0.05));
  pointer-events: none;
}

.hero-copy {
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.5s ease both;
}

.hero-eyebrow {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(30,64,175,0.08);
  color: var(--primary);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
}

.hero-title {
  margin: 14px 0 8px;
  font-size: clamp(30px, 4vw, 54px);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.hero-subtitle {
  margin: 0;
  color: var(--text-soft);
  line-height: 1.7;
  font-size: 15px;
  max-width: 68ch;
}

.hero-side {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: stretch;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin: 18px 0 22px;
}

.metric-card {
  padding: 18px;
  animation: fadeInUp 0.5s ease both;
}

.metric-label { color: var(--text-soft); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
.metric-value { font-size: 24px; font-weight: 800; letter-spacing: -0.04em; margin-top: 8px; }
.metric-help { margin-top: 4px; font-size: 12px; color: var(--muted); }

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin: 18px 0 20px;
}

.search-wrap {
  position: relative;
  flex: 1;
  min-width: min(100%, 420px);
}

.search-input, .text-input, .select-input, .textarea-input {
  width: 100%;
  border: 1px solid rgba(148,163,184,0.2);
  background: rgba(255,255,255,0.9);
  color: var(--text);
  border-radius: 18px;
  outline: none;
  transition: all 0.2s ease;
}

.search-input:focus, .text-input:focus, .select-input:focus, .textarea-input:focus {
  border-color: rgba(30,64,175,0.45);
  box-shadow: 0 0 0 4px rgba(30,64,175,0.08);
  transform: translateY(-1px);
}

.search-input {
  padding: 16px 18px 16px 48px;
  font-size: 15px;
  box-shadow: var(--shadow-soft);
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  pointer-events: none;
}

.text-input, .select-input {
  padding: 13px 14px;
  min-height: 48px;
}

.textarea-input {
  padding: 14px;
  min-height: 130px;
  resize: vertical;
  line-height: 1.6;
}

.label {
  display: block;
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 800;
  color: var(--text-soft);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.helper {
  margin: 8px 0 0;
  font-size: 12px;
  color: var(--muted);
  line-height: 1.5;
}

.button {
  border: 0;
  outline: none;
  border-radius: 16px;
  padding: 13px 18px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-soft);
}

.button:hover { transform: translateY(-1px); }
.button:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
.button-primary { background: linear-gradient(135deg, var(--primary), var(--primary-2)); color: white; }
.button-emerald { background: linear-gradient(135deg, var(--emerald), var(--emerald-2)); color: white; }
.button-soft { background: rgba(255,255,255,0.92); color: var(--text); border: 1px solid rgba(148,163,184,0.18); }
.button-danger { background: rgba(220,38,38,0.09); color: var(--danger); }
.button-ghost { background: transparent; color: var(--text-soft); box-shadow: none; border: 1px solid rgba(148,163,184,0.18); }
.button-pill { border-radius: 999px; padding-inline: 16px; }

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(148,163,184,0.16);
  color: var(--text-soft);
  font-size: 12px;
  font-weight: 700;
}

.chip-primary { background: rgba(30,64,175,0.08); color: var(--primary); }
.chip-emerald { background: rgba(5,150,105,0.08); color: var(--emerald); }
.chip-muted { color: var(--muted); }

.grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
.stack { display: grid; gap: 14px; }

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 16px;
  font-size: 18px;
  letter-spacing: -0.03em;
}

.section-title .line {
  width: 36px;
  height: 5px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--emerald));
  flex: 0 0 auto;
}

.section-title small {
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.panel-card, .auth-card, .detail-card, .admin-card {
  padding: 22px;
}

.auth-wrap {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 28px;
  background:
    radial-gradient(circle at top left, rgba(30,64,175,0.12), transparent 24%),
    radial-gradient(circle at top right, rgba(5,150,105,0.10), transparent 26%),
    linear-gradient(180deg, #eef4ff 0%, #ffffff 100%);
}

.auth-card {
  width: min(560px, 100%);
  animation: fadeInUp 0.55s ease both;
}

.auth-header {
  display: grid;
  justify-items: center;
  gap: 14px;
  margin-bottom: 12px;
  text-align: center;
}

.auth-logo {
  width: 88px;
  height: 88px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: var(--shadow);
}

.auth-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.auth-tab {
  flex: 1;
  min-width: 120px;
  border-radius: 999px;
  padding: 12px 14px;
  border: 1px solid rgba(148,163,184,0.18);
  background: rgba(255,255,255,0.9);
  color: var(--text-soft);
  font-weight: 800;
}

.auth-tab.is-active {
  background: linear-gradient(135deg, rgba(30,64,175,0.1), rgba(5,150,105,0.08));
  color: var(--text);
  border-color: rgba(30,64,175,0.18);
}

.notice-bar {
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(30,64,175,0.08);
  border: 1px solid rgba(30,64,175,0.10);
  color: var(--text);
}

.notice-bar.warn {
  background: rgba(217,119,6,0.08);
  border-color: rgba(217,119,6,0.10);
}

.notice-bar.success {
  background: rgba(5,150,105,0.08);
  border-color: rgba(5,150,105,0.10);
}

.card-list {
  display: grid;
  gap: 14px;
}

.material-card {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(148,163,184,0.18);
  background: rgba(255,255,255,0.92);
  box-shadow: var(--shadow-soft);
  padding: 18px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.material-card:hover {
  transform: translateY(-2px);
  border-color: rgba(30,64,175,0.24);
  box-shadow: 0 16px 30px rgba(15,23,42,0.08);
}

.material-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(30,64,175,0.03), transparent 35%, rgba(5,150,105,0.03));
  pointer-events: none;
}

.material-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  z-index: 1;
}

.material-icon {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(30,64,175,0.12), rgba(5,150,105,0.10));
  font-size: 24px;
  flex: 0 0 auto;
}

.material-content { min-width: 0; flex: 1; }
.material-title {
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.03em;
  line-height: 1.3;
}
.material-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.material-desc {
  margin: 10px 0 0;
  color: var(--text-soft);
  line-height: 1.6;
  font-size: 14px;
}
.material-actions {
  display: flex;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
}

.section-divider {
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(148,163,184,0.24), transparent);
  margin: 18px 0;
}

.theme-block {
  margin-bottom: 28px;
}

.theme-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.theme-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.theme-header .theme-line {
  flex: 1;
  height: 1px;
  background: rgba(148,163,184,0.22);
}

.detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 20px;
}

.detail-hero {
  display: grid;
  gap: 14px;
}

.detail-title {
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.05;
  letter-spacing: -0.05em;
  margin: 0;
}

.detail-longdesc {
  color: var(--text-soft);
  line-height: 1.8;
  font-size: 15px;
  white-space: pre-wrap;
}

.detail-aside {
  display: grid;
  gap: 16px;
}

.comment-panel {
  display: grid;
  gap: 14px;
}

.comment-list {
  display: grid;
  gap: 12px;
  max-height: 420px;
  overflow: auto;
  padding-right: 6px;
}

.comment-item {
  padding: 14px;
  border-radius: 18px;
  background: rgba(255,255,255,0.86);
  border: 1px solid rgba(148,163,184,0.16);
}

.comment-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.comment-author { font-weight: 800; font-size: 13px; }
.comment-time { font-size: 12px; color: var(--muted); }
.comment-text { margin: 0; color: var(--text-soft); line-height: 1.6; white-space: pre-wrap; }

.upload-dropzone {
  border: 1.5px dashed rgba(30,64,175,0.35);
  background: linear-gradient(135deg, rgba(30,64,175,0.06), rgba(5,150,105,0.04));
  border-radius: 24px;
  padding: 22px;
  text-align: center;
  transition: all 0.2s ease;
}

.upload-dropzone:hover {
  transform: translateY(-1px);
  border-color: rgba(5,150,105,0.35);
}

.upload-dropzone input { display: none; }

.dropzone-icon {
  width: 62px;
  height: 62px;
  margin: 0 auto 12px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.95);
  box-shadow: var(--shadow-soft);
  font-size: 28px;
}

.table-wrap {
  overflow: auto;
  border-radius: 22px;
  border: 1px solid rgba(148,163,184,0.16);
  background: rgba(255,255,255,0.82);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
}

th, td {
  padding: 14px 14px;
  border-bottom: 1px solid rgba(148,163,184,0.14);
  text-align: left;
  vertical-align: top;
}

th {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-soft);
  background: rgba(248,250,252,0.8);
}

td { font-size: 14px; color: var(--text); }
tr:hover td { background: rgba(30,64,175,0.03); }

.footer {
  border-top: 1px solid rgba(148,163,184,0.16);
  background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(239,244,255,0.92));
}

.footer-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px 24px 36px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr 0.7fr;
  gap: 20px;
}

.footer-brand {
  display: grid;
  gap: 12px;
}

.footer-brand img {
  width: 78px;
  height: 78px;
  border-radius: 22px;
  object-fit: cover;
}

.footer-col h4 {
  margin: 0 0 12px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
}

.footer-col a, .footer-col button {
  display: block;
  margin: 0 0 10px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--text-soft);
  text-align: left;
  text-decoration: none;
}

.footer-copy {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px 20px;
  color: var(--muted);
  font-size: 12px;
}

.toast-stack {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 100;
  display: grid;
  gap: 10px;
  width: min(400px, calc(100vw - 36px));
}

.toast {
  border-radius: 18px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.96);
  border: 1px solid rgba(148,163,184,0.18);
  box-shadow: var(--shadow);
  animation: fadeInUp 0.25s ease both;
}

.toast-title { font-weight: 900; margin: 0 0 4px; }
.toast-text { margin: 0; color: var(--text-soft); font-size: 13px; line-height: 1.5; }

.skeleton {
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(148,163,184,0.12), rgba(148,163,184,0.22), rgba(148,163,184,0.12));
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite linear;
  border-radius: 16px;
}

.skeleton-line { height: 14px; width: 100%; }
.skeleton-box { height: 180px; width: 100%; }

@media (max-width: 1180px) {
  .hero-card, .detail-layout, .footer-inner, .grid-4 { grid-template-columns: 1fr; }
  .metric-grid, .grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  .page, .topbar-inner { padding-left: 16px; padding-right: 16px; }
  .hero-card, .panel-card, .auth-card, .detail-card, .admin-card { padding: 16px; border-radius: 22px; }
  .metric-grid, .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
  .topbar-inner { align-items: flex-start; flex-direction: column; }
  .topbar-actions { width: 100%; justify-content: flex-start; }
  .brand-title strong { font-size: 16px; }
}
`;

function injectStylesOnce() {
  if (document.getElementById('serra-equacions-styles')) return;
  const styleTag = document.createElement('style');
  styleTag.id = 'serra-equacions-styles';
  styleTag.innerHTML = CSS_STYLES;
  document.head.appendChild(styleTag);
}

function sanitizeText(value) {
  return String(value ?? '')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeText(value) {
  return sanitizeText(value).toLowerCase();
}

function safeArray(value) {
  if (!Array.isArray(value)) return [];
  return value.filter(Boolean);
}

function formatDateTime(value) {
  try {
    const date = value?.toDate ? value.toDate() : value ? new Date(value) : null;
    if (!date || Number.isNaN(date.getTime())) return '—';
    return new Intl.DateTimeFormat('ca-ES', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  } catch {
    return '—';
  }
}

function formatDateOnly(value) {
  try {
    const date = value?.toDate ? value.toDate() : value ? new Date(value) : null;
    if (!date || Number.isNaN(date.getTime())) return '—';
    return new Intl.DateTimeFormat('ca-ES', {
      dateStyle: 'medium',
    }).format(date);
  } catch {
    return '—';
  }
}

function getMaterialIcon(type) {
  const found = MATERIAL_TYPES.find((item) => item.value === type);
  return found?.icon || '📄';
}

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function sortThemes(themes) {
  const order = [...DEFAULT_THEMES];
  return [...themes].sort((a, b) => {
    const ai = order.indexOf(a);
    const bi = order.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b, 'ca');
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

function useToast() {
  const [toasts, setToasts] = useState([]);
  const pushToast = (title, text, kind = 'info') => {
    const id = crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, text, kind }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4200);
  };
  return { toasts, pushToast };
}

function App() {
  const { toasts, pushToast } = useToast();
  const styleInjectedRef = useRef(false);
  const commentsEndRef = useRef(null);
  const uploadInputRef = useRef(null);
  const detailUploadRef = useRef(null);

  const [authLoading, setAuthLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [authForm, setAuthForm] = useState({ email: '', password: '', name: '', courseId: COURSE_OPTIONS[0] });
  const [authError, setAuthError] = useState('');

  const [appView, setAppView] = useState('home'); // auth | home | detail | admin
  const [activeCourse, setActiveCourse] = useState(COURSE_OPTIONS[0]);
  const [selectedMaterialId, setSelectedMaterialId] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedSubmissionMaterial, setSelectedSubmissionMaterial] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [detailSearchQuery, setDetailSearchQuery] = useState('');
  const [loadingActions, setLoadingActions] = useState({});

  const [materials, setMaterials] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState('');
  const [newComment, setNewComment] = useState('');

  const [isAdminPreview, setIsAdminPreview] = useState(false);
  const [adminPreviewCourse, setAdminPreviewCourse] = useState(COURSE_OPTIONS[0]);
  const [selectedAdminTab, setSelectedAdminTab] = useState('materials');

  const [isUploadingSubmission, setIsUploadingSubmission] = useState(false);
  const [isUploadingDetailSubmission, setIsUploadingDetailSubmission] = useState(false);

  const [materialForm, setMaterialForm] = useState({
    title: '',
    longDescription: '',
    shortDescription: '',
    url: '',
    theme: DEFAULT_THEMES[0],
    newTheme: '',
    type: 'Teoria',
    courseIds: [COURSE_OPTIONS[0]],
    visible: true,
    tags: '',
    requireDelivery: false,
  });

  const [announcementForm, setAnnouncementForm] = useState({
    body: '',
    targetCourses: [],
  });

  const [submissionForm, setSubmissionForm] = useState({
    title: '',
    notes: '',
  });

  const isAdmin = useMemo(() => currentUser?.email === ADMIN_EMAIL, [currentUser]);
  const activeCourseForView = useMemo(() => {
    if (isAdmin && isAdminPreview) return adminPreviewCourse;
    return profile?.courseId || activeCourse;
  }, [isAdmin, isAdminPreview, adminPreviewCourse, activeCourse, profile]);

  const filteredMaterials = useMemo(() => {
    const q = normalizeText(searchQuery);
    return materials.filter((material) => {
      const matchesCourse = safeArray(material.courseIds).includes(activeCourseForView);
      const haystack = normalizeText([
        material.title,
        material.shortDescription,
        material.longDescription,
        material.theme,
        material.tags?.join?.(' '),
      ].join(' '));
      const matchesQuery = !q || haystack.includes(q);
      return matchesCourse && matchesQuery && material.visible !== false;
    });
  }, [materials, searchQuery, activeCourseForView]);

  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((announcement) => {
      const targets = safeArray(announcement.targetCourses);
      return targets.length === 0 || targets.includes(activeCourseForView) || targets.includes('General');
    });
  }, [announcements, activeCourseForView]);

  const themesForCurrentCourse = useMemo(() => {
    const themes = uniq(filteredMaterials.map((material) => material.theme || 'Sense tema'));
    return sortThemes(themes);
  }, [filteredMaterials]);

  const materialsByTheme = useMemo(() => {
    const map = new Map();
    for (const material of filteredMaterials) {
      const theme = material.theme || 'Sense tema';
      if (!map.has(theme)) map.set(theme, []);
      map.get(theme).push(material);
    }
    for (const [theme, list] of map.entries()) {
      list.sort((a, b) => {
        const aTime = a.createdAt?.toMillis?.() || 0;
        const bTime = b.createdAt?.toMillis?.() || 0;
        return bTime - aTime;
      });
    }
    return map;
  }, [filteredMaterials]);

  const visibleDeliveries = useMemo(() => {
    return deliveries.filter((delivery) => {
      const inCourse = !activeCourseForView || delivery.courseId === activeCourseForView || delivery.curs === activeCourseForView;
      const q = normalizeText(detailSearchQuery);
      if (!q) return inCourse;
      const haystack = normalizeText([
        delivery.studentName,
        delivery.studentEmail,
        delivery.fileName,
        delivery.materialTitle,
        delivery.courseId,
        delivery.notes,
      ].join(' '));
      return inCourse && haystack.includes(q);
    });
  }, [deliveries, activeCourseForView, detailSearchQuery]);

  const selectedMaterialData = useMemo(() => {
    if (!selectedMaterialId) return null;
    return materials.find((material) => material.id === selectedMaterialId) || null;
  }, [materials, selectedMaterialId]);

  useEffect(() => {
    injectStylesOnce();
    styleInjectedRef.current = true;
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      try {
        setAuthLoading(true);
        setAuthError('');
        if (!fbUser) {
          setCurrentUser(null);
          setProfile(null);
          setAppView('home');
          setAuthLoading(false);
          return;
        }

        setCurrentUser(fbUser);
        const profileRef = doc(db, 'usuaris', fbUser.uid);
        const profileSnap = await getDoc(profileRef);

        if (profileSnap.exists()) {
          const data = profileSnap.data();
          setProfile({
            id: fbUser.uid,
            email: fbUser.email,
            name: data.name || fbUser.displayName || 'Usuari',
            courseId: data.courseId || COURSE_OPTIONS[0],
            photoURL: data.photoURL || fbUser.photoURL || '',
            role: data.role || (fbUser.email === ADMIN_EMAIL ? 'admin' : 'student'),
            createdAt: data.createdAt || null,
          });
          setActiveCourse(data.courseId || COURSE_OPTIONS[0]);
        } else {
          const initialProfile = {
            name: fbUser.displayName || 'Usuari nou',
            email: fbUser.email,
            courseId: COURSE_OPTIONS[0],
            photoURL: fbUser.photoURL || '',
            role: fbUser.email === ADMIN_EMAIL ? 'admin' : 'student',
            createdAt: serverTimestamp(),
          };
          await setDoc(profileRef, initialProfile, { merge: true });
          setProfile({
            id: fbUser.uid,
            ...initialProfile,
            createdAt: new Date(),
          });
          setActiveCourse(COURSE_OPTIONS[0]);
        }
      } catch (error) {
        console.error(error);
        setAuthError('No s\'ha pogut carregar el perfil.');
        pushToast('Error d\'autenticació', error?.message || 'Error desconegut', 'error');
      } finally {
        setAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, [pushToast]);

  useEffect(() => {
    const unsubMaterials = onSnapshot(
      query(collection(db, 'materials'), orderBy('createdAt', 'desc')),
      (snapshot) => {
        setMaterials(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
      },
      (error) => {
        console.error(error);
        pushToast('Materials', 'No s\'han pogut carregar els materials.', 'error');
      },
    );

    const unsubAnnouncements = onSnapshot(
      query(collection(db, 'avisos'), orderBy('createdAt', 'desc'), limit(40)),
      (snapshot) => {
        setAnnouncements(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
      },
      (error) => {
        console.error(error);
        pushToast('Avisos', 'No s\'han pogut carregar els avisos.', 'error');
      },
    );

    return () => {
      unsubMaterials();
      unsubAnnouncements();
    };
  }, [pushToast]);

  useEffect(() => {
    if (!currentUser || !isAdmin) return undefined;

    const unsubDeliveries = onSnapshot(
      query(collection(db, 'entregues'), orderBy('createdAt', 'desc')),
      (snapshot) => {
        setDeliveries(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
      },
      (error) => {
        console.error(error);
        pushToast('Entregues', 'No s\'han pogut carregar les entregues.', 'error');
      },
    );

    const unsubUsers = onSnapshot(
      query(collection(db, 'usuaris'), orderBy('createdAt', 'desc')),
      (snapshot) => {
        setUsersList(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
      },
      (error) => {
        console.error(error);
        pushToast('Usuaris', 'No s\'han pogut carregar els usuaris.', 'error');
      },
    );

    return () => {
      unsubDeliveries();
      unsubUsers();
    };
  }, [currentUser, isAdmin, pushToast]);

  useEffect(() => {
    if (!selectedMaterialId) {
      setComments([]);
      setSelectedMaterial(null);
      return undefined;
    }

    setSelectedMaterial(selectedMaterialData);
    setCommentsLoading(true);
    setCommentsError('');

    const commentsRef = collection(db, 'materials', selectedMaterialId, 'comments');
    const commentsQuery = query(commentsRef, orderBy('createdAt', 'asc'));

    const unsubComments = onSnapshot(
      commentsQuery,
      (snapshot) => {
        setComments(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
        setCommentsLoading(false);
      },
      (error) => {
        console.error(error);
        setCommentsLoading(false);
        setCommentsError('No s\'han pogut carregar els comentaris.');
        pushToast('Comentaris', 'Error carregant el xat del material.', 'error');
      },
    );

    return () => unsubComments();
  }, [selectedMaterialId, selectedMaterialData, pushToast]);

  useEffect(() => {
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [comments, selectedMaterialId]);

  const roleLabel = useMemo(() => {
    if (!currentUser) return 'Convidat';
    if (currentUser.email === ADMIN_EMAIL) return 'Administrador';
    return 'Alumne';
  }, [currentUser]);

  const totalMaterialsForCourse = useMemo(() => filteredMaterials.length, [filteredMaterials]);
  const totalThemesForCourse = useMemo(() => themesForCurrentCourse.length, [themesForCurrentCourse]);
  const totalAnnouncements = useMemo(() => filteredAnnouncements.length, [filteredAnnouncements]);
  const totalUsers = useMemo(() => usersList.length, [usersList]);

  const resetAuthForm = () => {
    setAuthForm({ email: '', password: '', name: '', courseId: COURSE_OPTIONS[0] });
    setAuthError('');
  };

  const closeDetailView = () => {
    setSelectedMaterialId(null);
    setSelectedMaterial(null);
    setNewComment('');
    setCommentsError('');
    setSelectedSubmissionMaterial(null);
    setAppView('home');
  };

  const openMaterialDetail = (materialId) => {
    setSelectedMaterialId(materialId);
    setAppView('detail');
  };

  const ensureSignedIn = () => {
    if (!currentUser || !profile) {
      pushToast('Accés denegat', 'Has d\'iniciar sessió.', 'warning');
      setAppView('home');
      return false;
    }
    return true;
  };

  const ensureAdmin = () => {
    if (!isAdmin) {
      pushToast('Accés restringit', 'Només l\'administrador pot realitzar aquesta acció.', 'warning');
      return false;
    }
    return true;
  };

  const buildProfilePayload = (fbUser, extra = {}) => ({
    name: sanitizeText(extra.name || fbUser.displayName || 'Usuari'),
    email: fbUser.email,
    courseId: extra.courseId || COURSE_OPTIONS[0],
    photoURL: fbUser.photoURL || '',
    role: fbUser.email === ADMIN_EMAIL ? 'admin' : 'student',
    updatedAt: serverTimestamp(),
  });

  const handleAuthSubmit = async (event) => {
    event.preventDefault();
    setAuthError('');

    const email = sanitizeText(authForm.email).toLowerCase();
    const password = authForm.password;
    const name = sanitizeText(authForm.name);
    const courseId = sanitizeText(authForm.courseId);

    try {
      if (!email || !email.includes('@')) {
        throw new Error('Introdueix un correu electrònic vàlid.');
      }

      if (authMode === 'login') {
        if (!password) throw new Error('La contrasenya és obligatòria.');
        await signInWithEmailAndPassword(auth, email, password);
        pushToast('Benvingut/da', 'Sessió iniciada correctament.', 'success');
      }

      if (authMode === 'signup') {
        if (!password || password.length < 6) {
          throw new Error('La contrasenya ha de tenir almenys 6 caràcters.');
        }
        if (!name) throw new Error('El nom és obligatori.');
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(credential.user, { displayName: name });
        await setDoc(doc(db, 'usuaris', credential.user.uid), buildProfilePayload(credential.user, { name, courseId }), { merge: true });
        pushToast('Compte creat', 'El teu accés ha estat registrat.', 'success');
      }

      if (authMode === 'reset') {
        await sendPasswordResetEmail(auth, email);
        pushToast('Correu enviat', 'Revisa la teva bústia per recuperar la contrasenya.', 'success');
        setAuthMode('login');
      }
    } catch (error) {
      console.error(error);
      setAuthError(error?.message || 'No s\'ha pogut completar l\'operació.');
      pushToast('Error d\'accés', error?.message || 'Error desconegut', 'error');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const credential = await signInWithPopup(auth, provider);
      const u = credential.user;
      const profileRef = doc(db, 'usuaris', u.uid);
      const existing = await getDoc(profileRef);

      if (!existing.exists()) {
        await setDoc(profileRef, buildProfilePayload(u, { name: u.displayName, courseId: COURSE_OPTIONS[0] }), { merge: true });
      }

      pushToast('Accés Google', 'Sessió iniciada amb èxit.', 'success');
    } catch (error) {
      console.error(error);
      setAuthError(error?.message || 'No s\'ha pogut iniciar amb Google.');
      pushToast('Google Login', error?.message || 'Error desconegut', 'error');
    }
  };

  const updateProfileCourse = async (nextCourse) => {
    if (!ensureSignedIn()) return;
    try {
      const cleanCourse = sanitizeText(nextCourse);
      const profileRef = doc(db, 'usuaris', currentUser.uid);
      await updateDoc(profileRef, { courseId: cleanCourse, updatedAt: serverTimestamp() });
      setProfile((prev) => ({ ...prev, courseId: cleanCourse }));
      setActiveCourse(cleanCourse);
      setAdminPreviewCourse(cleanCourse);
      pushToast('Perfil actualitzat', `Ara treballes amb el curs ${cleanCourse}.`, 'success');
    } catch (error) {
      console.error(error);
      pushToast('Perfil', error?.message || 'No s\'ha pogut actualitzar el curs.', 'error');
    }
  };

  const uploadToCloudinary = async (file) => {
    if (!file) throw new Error('No s\'ha seleccionat cap fitxer.');
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      throw new Error(`El fitxer supera el límit de ${MAX_FILE_SIZE_MB}MB.`);
    }
    if (SUPPORTED_FILE_TYPES.length > 0 && !SUPPORTED_FILE_TYPES.includes(file.type)) {
      throw new Error('Format no suportat. Utilitza PDF, JPG, PNG o WEBP.');
    }

    const payload = new FormData();
    payload.append('file', file);
    payload.append('upload_preset', UPLOAD_PRESET);
    payload.append('folder', 'serra-d-equacions/entregues');

    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
      method: 'POST',
      body: payload,
    });

    if (!response.ok) {
      const txt = await response.text();
      throw new Error(`Cloudinary ha respost amb error (${response.status}). ${txt}`);
    }

    const data = await response.json();
    if (!data?.secure_url) {
      throw new Error('La pujada no ha retornat un enllaç vàlid.');
    }
    return data;
  };

  const handleSubmissionUpload = async (event, source = 'home') => {
    const file = event?.target?.files?.[0];
    if (!file) return;
    if (!ensureSignedIn()) return;

    try {
      if (!selectedSubmissionMaterial && source === 'detail') {
        throw new Error('No hi ha cap material vinculat a aquesta entrega.');
      }

      if (source === 'home') setIsUploadingSubmission(true);
      if (source === 'detail') setIsUploadingDetailSubmission(true);

      const cloud = await uploadToCloudinary(file);
      const targetMaterial = source === 'detail' ? selectedMaterialData : selectedSubmissionMaterial;

      const deliveryPayload = {
        studentId: currentUser.uid,
        studentName: profile?.name || currentUser.displayName || 'Alumne',
        studentEmail: currentUser.email,
        courseId: profile?.courseId || activeCourseForView,
        materialId: targetMaterial?.id || null,
        materialTitle: targetMaterial?.title || submissionForm.title || 'Entrega sense material',
        notes: sanitizeText(submissionForm.notes),
        fileName: file.name,
        fileUrl: cloud.secure_url,
        fileType: cloud.resource_type || file.type,
        cloudinaryPublicId: cloud.public_id || '',
        createdAt: serverTimestamp(),
        status: 'submitted',
      };

      await addDoc(collection(db, 'entregues'), deliveryPayload);
      if (targetMaterial?.id) {
        await updateDoc(doc(db, 'materials', targetMaterial.id), {
          submissionCount: increment(1),
          updatedAt: serverTimestamp(),
        });
      }

      pushToast('Entrega registrada', 'El fitxer s\'ha pujat i guardat correctament.', 'success');
      setSubmissionForm({ title: '', notes: '' });
      if (uploadInputRef.current) uploadInputRef.current.value = '';
      if (detailUploadRef.current) detailUploadRef.current.value = '';
    } catch (error) {
      console.error(error);
      pushToast('Entrega fallida', error?.message || 'No s\'ha pogut completar la pujada.', 'error');
    } finally {
      setIsUploadingSubmission(false);
      setIsUploadingDetailSubmission(false);
    }
  };

  const handleMaterialSubmit = async (event) => {
    event.preventDefault();
    if (!ensureAdmin()) return;

    const title = sanitizeText(materialForm.title);
    const longDescription = sanitizeText(materialForm.longDescription);
    const shortDescription = sanitizeText(materialForm.shortDescription);
    const url = sanitizeText(materialForm.url);
    const type = sanitizeText(materialForm.type);
    const theme = sanitizeText(materialForm.newTheme || materialForm.theme);
    const courseIds = uniq(materialForm.courseIds.map((course) => sanitizeText(course)));
    const tags = sanitizeText(materialForm.tags)
      .split(',')
      .map((tag) => sanitizeText(tag))
      .filter(Boolean);

    if (!title) return pushToast('Validació', 'El títol és obligatori.', 'warning');
    if (!theme) return pushToast('Validació', 'El tema és obligatori.', 'warning');
    if (!url && type !== 'Projecte') return pushToast('Validació', 'L\'enllaç del recurs és obligatori.', 'warning');
    if (!courseIds.length) return pushToast('Validació', 'Selecciona com a mínim un curs.', 'warning');

    try {
      const payload = {
        title,
        shortDescription,
        longDescription: longDescription || shortDescription || title,
        url,
        theme,
        type,
        courseIds,
        tags,
        visible: Boolean(materialForm.visible),
        requireDelivery: Boolean(materialForm.requireDelivery),
        createdBy: currentUser?.uid || ADMIN_EMAIL,
        createdByEmail: currentUser?.email || ADMIN_EMAIL,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        commentsCount: 0,
        submissionCount: 0,
      };

      await addDoc(collection(db, 'materials'), payload);
      pushToast('Material publicat', 'El recurs s\'ha guardat correctament.', 'success');
      setMaterialForm({
        title: '',
        longDescription: '',
        shortDescription: '',
        url: '',
        theme: DEFAULT_THEMES[0],
        newTheme: '',
        type: 'Teoria',
        courseIds: [activeCourseForView],
        visible: true,
        tags: '',
        requireDelivery: false,
      });
    } catch (error) {
      console.error(error);
      pushToast('Material', error?.message || 'No s\'ha pogut crear el material.', 'error');
    }
  };

  const handleAnnouncementSubmit = async (event) => {
    event.preventDefault();
    if (!ensureAdmin()) return;

    const body = sanitizeText(announcementForm.body);
    const targetCourses = uniq(announcementForm.targetCourses.map((course) => sanitizeText(course)));

    if (!body) {
      pushToast('Validació', 'Escriu el contingut de l\'avís.', 'warning');
      return;
    }

    try {
      await addDoc(collection(db, 'avisos'), {
        body,
        targetCourses,
        author: currentUser?.email || ADMIN_EMAIL,
        createdAt: serverTimestamp(),
      });
      setAnnouncementForm({ body: '', targetCourses: [] });
      pushToast('Avís publicat', 'La notificació s\'ha enviat correctament.', 'success');
    } catch (error) {
      console.error(error);
      pushToast('Avisos', error?.message || 'No s\'ha pogut publicar l\'avís.', 'error');
    }
  };

  const handleDeleteMaterial = async (materialId) => {
    if (!ensureAdmin()) return;
    if (!window.confirm('Segur que vols eliminar aquest material?')) return;
    try {
      await deleteDoc(doc(db, 'materials', materialId));
      pushToast('Material eliminat', 'El recurs s\'ha suprimit.', 'success');
      if (selectedMaterialId === materialId) closeDetailView();
    } catch (error) {
      console.error(error);
      pushToast('Material', error?.message || 'No s\'ha pogut eliminar.', 'error');
    }
  };

  const handleDeleteAnnouncement = async (announcementId) => {
    if (!ensureAdmin()) return;
    try {
      await deleteDoc(doc(db, 'avisos', announcementId));
      pushToast('Avís eliminat', 'La notificació s\'ha suprimit.', 'success');
    } catch (error) {
      console.error(error);
      pushToast('Avís', error?.message || 'No s\'ha pogut eliminar.', 'error');
    }
  };

  const handleDeleteDelivery = async (deliveryId) => {
    if (!ensureAdmin()) return;
    if (!window.confirm('Eliminar aquesta entrega?')) return;
    try {
      await deleteDoc(doc(db, 'entregues', deliveryId));
      pushToast('Entrega eliminada', 'La entrega s\'ha suprimit.', 'success');
    } catch (error) {
      console.error(error);
      pushToast('Entregues', error?.message || 'No s\'ha pogut eliminar.', 'error');
    }
  };

  const handleSendComment = async (event) => {
    event.preventDefault();
    if (!ensureSignedIn()) return;
    if (!selectedMaterialId) {
      pushToast('Comentaris', 'Selecciona un material primer.', 'warning');
      return;
    }

    const text = sanitizeText(newComment);
    if (!text) {
      pushToast('Comentaris', 'El missatge no pot estar buit.', 'warning');
      return;
    }

    try {
      const commentsRef = collection(db, 'materials', selectedMaterialId, 'comments');
      await addDoc(commentsRef, {
        text,
        authorId: currentUser.uid,
        authorName: profile?.name || currentUser.displayName || 'Usuari',
        authorEmail: currentUser.email,
        authorPhotoURL: currentUser.photoURL || profile?.photoURL || '',
        createdAt: serverTimestamp(),
      });

      await updateDoc(doc(db, 'materials', selectedMaterialId), {
        commentsCount: increment(1),
        updatedAt: serverTimestamp(),
      });

      setNewComment('');
      pushToast('Comentari enviat', 'Missatge afegit al xat del material.', 'success');
    } catch (error) {
      console.error(error);
      pushToast('Comentaris', error?.message || 'No s\'ha pogut enviar el comentari.', 'error');
    }
  };

  const handleAdminCourseToggle = (courseId) => {
    setMaterialForm((prev) => {
      const exists = prev.courseIds.includes(courseId);
      return {
        ...prev,
        courseIds: exists ? prev.courseIds.filter((item) => item !== courseId) : [...prev.courseIds, courseId],
      };
    });
  };

  const handleAnnouncementCourseToggle = (courseId) => {
    setAnnouncementForm((prev) => {
      const exists = prev.targetCourses.includes(courseId);
      return {
        ...prev,
        targetCourses: exists ? prev.targetCourses.filter((item) => item !== courseId) : [...prev.targetCourses, courseId],
      };
    });
  };

  const handleSearchMaterialJump = (materialId) => {
    openMaterialDetail(materialId);
  };

  const renderAuthView = () => {
    if (authLoading) {
      return (
        <div className="auth-wrap">
          <div className="auth-card">
            <div className="auth-header">
              <img src={logoImg} alt={APP_NAME} className="auth-logo" />
              <div className="skeleton skeleton-line" style={{ width: '42%', height: 18 }} />
              <div className="skeleton skeleton-line" style={{ width: '70%', height: 14 }} />
            </div>
            <div className="stack">
              <div className="skeleton skeleton-box" />
              <div className="skeleton skeleton-line" />
              <div className="skeleton skeleton-line" style={{ width: '78%' }} />
            </div>
          </div>
        </div>
      );
    }

    if (currentUser) return null;

    return (
      <div className="auth-wrap">
        <div className="auth-card">
          <div className="auth-header">
            <img src={logoImg} alt={APP_NAME} className="auth-logo" />
            <div className="hero-eyebrow">Premium SaaS · Aula Virtual de Matemàtiques</div>
            <div>
              <h1 style={{ margin: '10px 0 4px', letterSpacing: '-0.05em', fontSize: '34px' }}>{APP_NAME}</h1>
              <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.6 }}>
                Accedeix al teu espai de treball, consulta recursos, entrega PDFs i participa al xat dels materials.
              </p>
            </div>
          </div>

          <div className="auth-tabs">
            <button className={`auth-tab ${authMode === 'login' ? 'is-active' : ''}`} onClick={() => setAuthMode('login')}>Inicia sessió</button>
            <button className={`auth-tab ${authMode === 'signup' ? 'is-active' : ''}`} onClick={() => setAuthMode('signup')}>Registra't</button>
            <button className={`auth-tab ${authMode === 'reset' ? 'is-active' : ''}`} onClick={() => setAuthMode('reset')}>Recupera clau</button>
          </div>

          <button className="button button-soft" onClick={handleGoogleLogin} style={{ width: '100%', marginBottom: 16 }}>
            <span>🔐</span> Entra amb Google
          </button>

          <div className="notice-bar" style={{ marginBottom: 16 }}>
            <strong>Administrador:</strong> {ADMIN_EMAIL}
          </div>

          <form className="stack" onSubmit={handleAuthSubmit}>
            {authMode === 'signup' && (
              <div>
                <label className="label">Nom i cognoms</label>
                <input
                  className="text-input"
                  placeholder="Nom i cognoms"
                  value={authForm.name}
                  onChange={(e) => setAuthForm((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
            )}

            <div>
              <label className="label">Correu electrònic</label>
              <input
                className="text-input"
                type="email"
                placeholder="alumne@centre.cat"
                value={authForm.email}
                onChange={(e) => setAuthForm((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            {authMode !== 'reset' && (
              <div>
                <label className="label">Contrasenya</label>
                <input
                  className="text-input"
                  type="password"
                  placeholder="••••••••"
                  value={authForm.password}
                  onChange={(e) => setAuthForm((prev) => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
            )}

            {authMode === 'signup' && (
              <div>
                <label className="label">Curs</label>
                <select
                  className="select-input"
                  value={authForm.courseId}
                  onChange={(e) => setAuthForm((prev) => ({ ...prev, courseId: e.target.value }))}
                >
                  {COURSE_OPTIONS.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            )}

            {authError && <div className="notice-bar warn">{authError}</div>}

            <button className="button button-primary" type="submit">
              {authMode === 'login' && 'Accedeix a l\'aula'}
              {authMode === 'signup' && 'Crea el compte'}
              {authMode === 'reset' && 'Envia el correu'}
            </button>
          </form>

          <div className="section-divider" />

          <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: 13, lineHeight: 1.7 }}>
            Si ets alumne, utilitza el correu del centre. Si ets professor, entra amb {ADMIN_EMAIL}.
          </p>
        </div>
      </div>
    );
  };

  const renderTopbar = () => {
    if (!currentUser) return null;

    return (
      <header className="app-topbar">
        <div className="topbar-inner">
          <a href="#" className="brand" onClick={(e) => { e.preventDefault(); setAppView('home'); setSelectedMaterialId(null); }}>
            <img src={logoImg} alt={APP_NAME} className="brand-logo" />
            <div className="brand-title">
              <strong>{APP_NAME}</strong>
              <span>Gestió d\'aula virtual de matemàtiques</span>
            </div>
          </a>

          <div className="topbar-actions">
            <span className="chip chip-muted">{roleLabel}</span>
            <span className="chip chip-primary">{activeCourseForView}</span>
            {isAdmin && (
              <button
                className={`button ${isAdminPreview ? 'button-emerald' : 'button-soft'} button-pill`}
                onClick={() => setIsAdminPreview((prev) => !prev)}
              >
                {isAdminPreview ? 'Vista alumne' : 'Vista alumne simulada'}
              </button>
            )}
            <button className="button button-soft button-pill" onClick={() => setAppView('home')}>Home</button>
            {isAdmin && <button className="button button-soft button-pill" onClick={() => setAppView('admin')}>Admin</button>}
            <button className="button button-danger button-pill" onClick={() => signOut(auth)}>Sortir</button>
          </div>
        </div>
      </header>
    );
  };

  const renderHero = () => {
    if (!currentUser) return null;
    return (
      <section className="hero-card">
        <div className="hero-copy">
          <div className="hero-eyebrow">📘 Matemàtiques · Recursos · Entregues · Comentaris</div>
          <h2 className="hero-title">Benvingut/da a la teva aula digital.</h2>
          <p className="hero-subtitle">
            Cerca materials per tema, obre el detall de cada recurs, entrega fitxers amb Cloudinary i mantén la conversa en temps real sobre cada material.
          </p>
          <div className="material-meta" style={{ marginTop: 16 }}>
            <span className="chip chip-primary">{totalMaterialsForCourse} materials</span>
            <span className="chip chip-emerald">{totalThemesForCourse} temes</span>
            <span className="chip">{totalAnnouncements} avisos</span>
            {isAdmin && <span className="chip">{totalUsers} usuaris</span>}
          </div>
        </div>

        <div className="hero-side">
          <div className="panel-card" style={{ background: 'rgba(255,255,255,0.8)' }}>
            <div className="label">Perfil actiu</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="material-icon" style={{ width: 62, height: 62 }}>
                {profile?.photoURL ? <img src={profile.photoURL} alt="avatar" style={{ width: '100%', height: '100%', borderRadius: 18, objectFit: 'cover' }} /> : '👩‍🎓'}
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: '-0.03em' }}>{profile?.name || currentUser.displayName || 'Usuari'}</div>
                <div style={{ color: 'var(--text-soft)', fontSize: 13 }}>{profile?.email || currentUser.email}</div>
              </div>
            </div>
          </div>

          <div className="panel-card" style={{ background: 'rgba(255,255,255,0.8)' }}>
            <div className="label">Curs actiu</div>
            <select className="select-input" value={activeCourseForView} onChange={(e) => updateProfileCourse(e.target.value)}>
              {COURSE_OPTIONS.map((course) => <option key={course} value={course}>{course}</option>)}
            </select>
          </div>
        </div>
      </section>
    );
  };

  const renderAnnouncementList = () => (
    <section className="panel-card">
      <h3 className="section-title"><span className="line" /> Avisos recents <small>Del teu curs i generals</small></h3>
      <div className="card-list">
        {filteredAnnouncements.length === 0 && (
          <div className="notice-bar success">No hi ha avisos nous. Tot al dia.</div>
        )}
        {filteredAnnouncements.map((announcement) => (
          <article key={announcement.id} className="material-card" style={{ cursor: 'default' }}>
            <div className="material-row">
              <div className="material-icon">📣</div>
              <div className="material-content">
                <div className="material-meta" style={{ marginTop: 0 }}>
                  <span className="chip chip-primary">{(announcement.targetCourses || []).length ? announcement.targetCourses.join(', ') : 'General'}</span>
                  <span className="chip">{formatDateTime(announcement.createdAt)}</span>
                </div>
                <p className="material-desc" style={{ marginTop: 12 }}>{announcement.body}</p>
              </div>
            </div>
            {isAdmin && (
              <div className="material-actions">
                <button className="button button-danger button-pill" onClick={() => handleDeleteAnnouncement(announcement.id)}>Eliminar avís</button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );

  const renderSubmissionBox = () => (
    <section className="panel-card">
      <h3 className="section-title"><span className="line" /> Lliurar tasca <small>Puja un PDF o imatge</small></h3>
      <div className="upload-dropzone">
        <div className="dropzone-icon">⬆️</div>
        <p style={{ margin: '0 0 8px', fontWeight: 900 }}>Arrossega o selecciona el fitxer</p>
        <p style={{ margin: '0 0 16px', color: 'var(--text-soft)', fontSize: 13 }}>
          PDF, JPG, PNG o WEBP. Límit recomanat: {MAX_FILE_SIZE_MB}MB.
        </p>
        <input ref={uploadInputRef} type="file" accept=".pdf,.png,.jpg,.jpeg,.webp" onChange={(e) => handleSubmissionUpload(e, 'home')} />
        <button className="button button-primary" type="button" onClick={() => uploadInputRef.current?.click()} disabled={isUploadingSubmission}>
          {isUploadingSubmission ? 'Pujant...' : 'Selecciona fitxer'}
        </button>
      </div>
      <div className="section-divider" />
      <div className="stack">
        <div>
          <label className="label">Títol opcional de la tasca</label>
          <input
            className="text-input"
            placeholder="Per exemple: Exercicis d\'equacions 2n ESO"
            value={submissionForm.title}
            onChange={(e) => setSubmissionForm((prev) => ({ ...prev, title: e.target.value }))}
          />
        </div>
        <div>
          <label className="label">Observacions</label>
          <textarea
            className="textarea-input"
            placeholder="Comentaris per al professor..."
            value={submissionForm.notes}
            onChange={(e) => setSubmissionForm((prev) => ({ ...prev, notes: e.target.value }))}
          />
        </div>
      </div>
    </section>
  );

  const renderCourseThemes = () => (
    <section className="stack">
      <div className="toolbar">
        <div>
          <h3 className="section-title" style={{ marginBottom: 6 }}><span className="line" /> Recursos i tasques <small>Separats per temari</small></h3>
          <div className="helper">Cerca per nom, descripció, etiquetes o tema. Fes clic per obrir el detall.</div>
        </div>
        <div className="search-wrap">
          <span className="search-icon">🔎</span>
          <input
            className="search-input"
            placeholder="Cerca un tema, material o paraula clau..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {themesForCurrentCourse.length === 0 ? (
        <div className="panel-card">
          <div className="notice-bar">Encara no hi ha materials publicats per a aquest curs.</div>
        </div>
      ) : (
        themesForCurrentCourse.map((theme) => {
          const list = materialsByTheme.get(theme) || [];
          return (
            <section key={theme} className="theme-block">
              <div className="theme-header">
                <h3>{theme}</h3>
                <div className="theme-line" />
                <small>{list.length} recursos</small>
              </div>
              <div className="card-list">
                {list.map((material) => (
                  <article key={material.id} className="material-card" onClick={() => handleSearchMaterialJump(material.id)}>
                    <div className="material-row">
                      <div className="material-icon">{getMaterialIcon(material.type)}</div>
                      <div className="material-content">
                        <h4 className="material-title">{material.title}</h4>
                        <div className="material-meta">
                          <span className="chip chip-primary">{material.type || 'Recurs'}</span>
                          {safeArray(material.courseIds).slice(0, 3).map((course) => (
                            <span key={course} className="chip">{course}</span>
                          ))}
                          {material.requireDelivery && <span className="chip chip-emerald">Entrega obligatòria</span>}
                          <span className="chip">{formatDateOnly(material.createdAt)}</span>
                        </div>
                        {material.shortDescription && <p className="material-desc">{material.shortDescription}</p>}
                        {!material.shortDescription && material.longDescription && <p className="material-desc">{material.longDescription.slice(0, 160)}...</p>}
                      </div>
                    </div>
                    <div className="material-actions">
                      <button className="button button-primary button-pill" type="button">Obrir detall</button>
                      {material.url && (
                        <button
                          className="button button-soft button-pill"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(material.url, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          Accedir al recurs
                        </button>
                      )}
                      {currentUser && (
                        <button
                          className="button button-emerald button-pill"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSubmissionMaterial(material);
                            setSelectedMaterialId(material.id);
                            setAppView('detail');
                            setTimeout(() => detailUploadRef.current?.click(), 120);
                          }}
                        >
                          Entregar aquí
                        </button>
                      )}
                      {isAdmin && <button className="button button-danger button-pill" type="button" onClick={(e) => { e.stopPropagation(); handleDeleteMaterial(material.id); }}>Eliminar</button>}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })
      )}
    </section>
  );

  const renderHomeView = () => (
    <main className="page">
      {renderHero()}
      <div className="metric-grid">
        <div className="metric-card">
          <div className="metric-label">Materials visibles</div>
          <div className="metric-value">{totalMaterialsForCourse}</div>
          <div className="metric-help">Materials filtrats per curs actiu.</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Temes actius</div>
          <div className="metric-value">{totalThemesForCourse}</div>
          <div className="metric-help">Organització per seccions de temari.</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Avisos</div>
          <div className="metric-value">{totalAnnouncements}</div>
          <div className="metric-help">Comunicacions del professorat.</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Rol</div>
          <div className="metric-value">{roleLabel}</div>
          <div className="metric-help">Accés condicionat per email.</div>
        </div>
      </div>

      <div className="grid-2" style={{ alignItems: 'start' }}>
        <div className="stack">
          {renderAnnouncementList()}
          {renderCourseThemes()}
        </div>
        <div className="stack">
          {renderSubmissionBox()}
          <section className="panel-card">
            <h3 className="section-title"><span className="line" /> Enllaços útils <small>Accés ràpid</small></h3>
            <div className="stack">
              <button className="button button-soft" onClick={() => setAppView('home')}>Torna al llistat principal</button>
              <button className="button button-soft" onClick={() => setSearchQuery('equacions')}>Veure materials d\'equacions</button>
              <button className="button button-soft" onClick={() => setSearchQuery('funcions')}>Veure materials de funcions</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );

  const renderDetailView = () => {
    if (!selectedMaterial) {
      return (
        <main className="page">
          <div className="panel-card">
            <div className="notice-bar warn">No s\'ha trobat el material seleccionat.</div>
            <button className="button button-primary button-pill" style={{ marginTop: 16 }} onClick={() => setAppView('home')}>Tornar</button>
          </div>
        </main>
      );
    }

    return (
      <main className="page">
        <button className="button button-ghost button-pill" onClick={closeDetailView} style={{ marginBottom: 18 }}>← Tornar al llistat</button>

        <div className="detail-layout">
          <section className="detail-card detail-hero">
            <div className="material-meta" style={{ marginTop: 0 }}>
              <span className="chip chip-primary">{selectedMaterial.type || 'Recurs'}</span>
              <span className="chip chip-emerald">{selectedMaterial.theme || 'Sense tema'}</span>
              <span className="chip">{safeArray(selectedMaterial.courseIds).join(', ')}</span>
              <span className="chip">{selectedMaterial.requireDelivery ? 'Amb entrega' : 'Sense entrega'}</span>
            </div>

            <h1 className="detail-title">{selectedMaterial.title}</h1>
            <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.7 }}>
              {selectedMaterial.shortDescription || 'Recurs publicat per l\'equip docent.'}
            </p>

            <div className="section-divider" />

            <div className="detail-longdesc">{selectedMaterial.longDescription || selectedMaterial.shortDescription || 'Sense descripció detallada.'}</div>

            <div className="material-actions">
              {selectedMaterial.url && (
                <button className="button button-primary button-pill" onClick={() => window.open(selectedMaterial.url, '_blank', 'noopener,noreferrer')}>
                  Accedir al recurs
                </button>
              )}
              {selectedMaterial.requireDelivery && (
                <button className="button button-emerald button-pill" onClick={() => detailUploadRef.current?.click()}>
                  Pujar entrega vinculada
                </button>
              )}
            </div>

            <div className="material-meta">
              <span className="chip">Creat: {formatDateTime(selectedMaterial.createdAt)}</span>
              <span className="chip">Comentaris: {selectedMaterial.commentsCount || comments.length}</span>
              <span className="chip">Entregues: {selectedMaterial.submissionCount || 0}</span>
            </div>
          </section>

          <aside className="detail-aside">
            <section className="panel-card comment-panel">
              <h3 className="section-title"><span className="line" /> Xat de comentaris <small>Temps real</small></h3>

              <div className="comment-list">
                {commentsLoading && <div className="notice-bar">Carregant comentaris...</div>}
                {commentsError && <div className="notice-bar warn">{commentsError}</div>}
                {!commentsLoading && comments.length === 0 && <div className="notice-bar">Encara no hi ha comentaris. Sigues el primer!</div>}
                {comments.map((comment) => (
                  <div key={comment.id} className="comment-item">
                    <div className="comment-head">
                      <div className="comment-author">{comment.authorName || 'Usuari'}</div>
                      <div className="comment-time">{formatDateTime(comment.createdAt)}</div>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                ))}
                <div ref={commentsEndRef} />
              </div>

              <form onSubmit={handleSendComment} className="stack">
                <div>
                  <label className="label">Escriu un comentari</label>
                  <textarea
                    className="textarea-input"
                    placeholder="Pregunta, dubte o aportació..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </div>
                <button className="button button-primary" type="submit">Enviar missatge</button>
              </form>
            </section>

            <section className="panel-card">
              <h3 className="section-title"><span className="line" /> Entrega ràpida <small>Cloudinary → Firestore</small></h3>
              <div className="upload-dropzone">
                <div className="dropzone-icon">📤</div>
                <p style={{ margin: '0 0 8px', fontWeight: 900 }}>Puja la teva entrega</p>
                <p style={{ margin: '0 0 16px', color: 'var(--text-soft)', fontSize: 13 }}>El fitxer es desa a Cloudinary i la referència queda a Firestore.</p>
                <input
                  ref={detailUploadRef}
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg,.webp"
                  onChange={(e) => handleSubmissionUpload(e, 'detail')}
                />
                <button className="button button-emerald" type="button" onClick={() => detailUploadRef.current?.click()} disabled={isUploadingDetailSubmission}>
                  {isUploadingDetailSubmission ? 'Pujant...' : 'Selecciona i entrega'}
                </button>
              </div>
            </section>

            <section className="panel-card">
              <h3 className="section-title"><span className="line" /> Dades del recurs <small>Resum</small></h3>
              <div className="stack">
                <div className="notice-bar">Tema: <strong>{selectedMaterial.theme || 'Sense tema'}</strong></div>
                <div className="notice-bar">Tipus: <strong>{selectedMaterial.type || 'Recurs'}</strong></div>
                <div className="notice-bar">Cursos: <strong>{safeArray(selectedMaterial.courseIds).join(', ')}</strong></div>
                <div className="notice-bar">Etiquetes: <strong>{safeArray(selectedMaterial.tags).join(', ') || 'Cap'}</strong></div>
              </div>
            </section>
          </aside>
        </div>
      </main>
    );
  };

  const renderAdminView = () => {
    if (!isAdmin) {
      return (
        <main className="page">
          <div className="panel-card">
            <div className="notice-bar warn">No tens permisos per veure el panell administratiu.</div>
          </div>
        </main>
      );
    }

    return (
      <main className="page">
        <section className="hero-card" style={{ marginBottom: 20 }}>
          <div className="hero-copy">
            <div className="hero-eyebrow">⚙️ Panell Admin robust</div>
            <h2 className="hero-title">Gestió completa de materials, avisos i entregues.</h2>
            <p className="hero-subtitle">
              Crea materials per a múltiples cursos, publica comunicats massius, revisa entregues i obre els fitxers directament des de la taula de control.
            </p>
          </div>
          <div className="hero-side">
            <div className="panel-card">
              <div className="label">Vista activa</div>
              <select className="select-input" value={adminPreviewCourse} onChange={(e) => setAdminPreviewCourse(e.target.value)}>
                {COURSE_OPTIONS.map((course) => <option key={course} value={course}>{course}</option>)}
              </select>
            </div>
            <div className="panel-card">
              <div className="label">Secció</div>
              <select className="select-input" value={selectedAdminTab} onChange={(e) => setSelectedAdminTab(e.target.value)}>
                <option value="materials">Materials</option>
                <option value="announcements">Avisos</option>
                <option value="deliveries">Entregues</option>
                <option value="users">Usuaris</option>
              </select>
            </div>
          </div>
        </section>

        <div className="metric-grid">
          <div className="metric-card"><div className="metric-label">Cursos a editar</div><div className="metric-value">{COURSE_OPTIONS.length}</div><div className="metric-help">Destinacions disponibles.</div></div>
          <div className="metric-card"><div className="metric-label">Materials totals</div><div className="metric-value">{materials.length}</div><div className="metric-help">Repositori complet.</div></div>
          <div className="metric-card"><div className="metric-label">Entregues</div><div className="metric-value">{deliveries.length}</div><div className="metric-help">Arxius pujats a Cloudinary.</div></div>
          <div className="metric-card"><div className="metric-label">Comentaris</div><div className="metric-value">{materials.reduce((acc, item) => acc + (item.commentsCount || 0), 0)}</div><div className="metric-help">Activitat dels materials.</div></div>
        </div>

        {selectedAdminTab === 'materials' && (
          <div className="grid-2">
            <section className="admin-card">
              <h3 className="section-title"><span className="line" /> Creació massiva de material <small>Múltiples cursos</small></h3>
              <form className="stack" onSubmit={handleMaterialSubmit}>
                <div>
                  <label className="label">Títol</label>
                  <input className="text-input" value={materialForm.title} onChange={(e) => setMaterialForm((prev) => ({ ...prev, title: e.target.value }))} placeholder="Nom del material" required />
                </div>
                <div>
                  <label className="label">Descripció curta</label>
                  <input className="text-input" value={materialForm.shortDescription} onChange={(e) => setMaterialForm((prev) => ({ ...prev, shortDescription: e.target.value }))} placeholder="Resum per a la targeta" />
                </div>
                <div>
                  <label className="label">Descripció llarga</label>
                  <textarea className="textarea-input" value={materialForm.longDescription} onChange={(e) => setMaterialForm((prev) => ({ ...prev, longDescription: e.target.value }))} placeholder="Descripció extensa que apareixerà al detall" />
                </div>
                <div>
                  <label className="label">URL del recurs</label>
                  <input className="text-input" value={materialForm.url} onChange={(e) => setMaterialForm((prev) => ({ ...prev, url: e.target.value }))} placeholder="https://..." />
                </div>
                <div className="grid-2">
                  <div>
                    <label className="label">Tipus</label>
                    <select className="select-input" value={materialForm.type} onChange={(e) => setMaterialForm((prev) => ({ ...prev, type: e.target.value }))}>
                      {MATERIAL_TYPES.map((type) => <option key={type.value} value={type.value}>{type.icon} {type.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label">Tema existent</label>
                    <select className="select-input" value={materialForm.theme} onChange={(e) => setMaterialForm((prev) => ({ ...prev, theme: e.target.value, newTheme: '' }))}>
                      {DEFAULT_THEMES.map((theme) => <option key={theme} value={theme}>{theme}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label">O crea un tema nou</label>
                  <input className="text-input" value={materialForm.newTheme} onChange={(e) => setMaterialForm((prev) => ({ ...prev, newTheme: e.target.value }))} placeholder="Nom del tema nou" />
                </div>
                <div>
                  <label className="label">Etiquetes separades per comes</label>
                  <input className="text-input" value={materialForm.tags} onChange={(e) => setMaterialForm((prev) => ({ ...prev, tags: e.target.value }))} placeholder="equacions, 2n ESO, repàs" />
                </div>

                <div>
                  <label className="label">Cursos destinataris</label>
                  <div className="grid-2">
                    {COURSE_OPTIONS.map((course) => (
                      <label key={course} className="chip" style={{ justifyContent: 'flex-start' }}>
                        <input type="checkbox" checked={materialForm.courseIds.includes(course)} onChange={() => handleAdminCourseToggle(course)} />
                        {course}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid-2">
                  <label className="chip" style={{ justifyContent: 'flex-start' }}>
                    <input type="checkbox" checked={materialForm.visible} onChange={(e) => setMaterialForm((prev) => ({ ...prev, visible: e.target.checked }))} />
                    Material visible
                  </label>
                  <label className="chip" style={{ justifyContent: 'flex-start' }}>
                    <input type="checkbox" checked={materialForm.requireDelivery} onChange={(e) => setMaterialForm((prev) => ({ ...prev, requireDelivery: e.target.checked }))} />
                    Requereix entrega
                  </label>
                </div>

                <button className="button button-primary" type="submit">Publicar a Firestore</button>
              </form>
            </section>

            <section className="admin-card">
              <h3 className="section-title"><span className="line" /> Vista de materials <small>CRUD ràpid</small></h3>
              <div className="search-wrap" style={{ marginBottom: 14 }}>
                <span className="search-icon">🔎</span>
                <input className="search-input" placeholder="Filtra materials..." value={detailSearchQuery} onChange={(e) => setDetailSearchQuery(e.target.value)} />
              </div>
              <div className="card-list" style={{ maxHeight: 780, overflow: 'auto', paddingRight: 4 }}>
                {materials.map((material) => (
                  <article key={material.id} className="material-card">
                    <div className="material-row">
                      <div className="material-icon">{getMaterialIcon(material.type)}</div>
                      <div className="material-content">
                        <h4 className="material-title">{material.title}</h4>
                        <div className="material-meta">
                          <span className="chip chip-primary">{material.theme || 'Sense tema'}</span>
                          <span className="chip">{safeArray(material.courseIds).join(', ')}</span>
                          <span className="chip">{formatDateOnly(material.createdAt)}</span>
                        </div>
                        <p className="material-desc">{material.shortDescription || material.longDescription || 'Sense descripció'}</p>
                      </div>
                    </div>
                    <div className="material-actions">
                      <button className="button button-primary button-pill" onClick={() => openMaterialDetail(material.id)}>Obrir</button>
                      {material.url && <button className="button button-soft button-pill" onClick={() => window.open(material.url, '_blank', 'noopener,noreferrer')}>Fitxer</button>}
                      <button className="button button-danger button-pill" onClick={() => handleDeleteMaterial(material.id)}>Eliminar</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {selectedAdminTab === 'announcements' && (
          <div className="grid-2">
            <section className="admin-card">
              <h3 className="section-title"><span className="line" /> Publicació massiva d\'avisos <small>Selecciona diversos cursos</small></h3>
              <form className="stack" onSubmit={handleAnnouncementSubmit}>
                <div>
                  <label className="label">Missatge</label>
                  <textarea className="textarea-input" value={announcementForm.body} onChange={(e) => setAnnouncementForm((prev) => ({ ...prev, body: e.target.value }))} placeholder="Escriu l\'avís per al grup o general" />
                </div>
                <div>
                  <label className="label">Cursos destinataris</label>
                  <div className="grid-2">
                    {COURSE_OPTIONS.map((course) => (
                      <label key={course} className="chip" style={{ justifyContent: 'flex-start' }}>
                        <input type="checkbox" checked={announcementForm.targetCourses.includes(course)} onChange={() => handleAnnouncementCourseToggle(course)} />
                        {course}
                      </label>
                    ))}
                  </div>
                </div>
                <button className="button button-emerald" type="submit">Publicar avís</button>
              </form>
            </section>

            <section className="admin-card">
              <h3 className="section-title"><span className="line" /> Avisos creats <small>Últims elements</small></h3>
              <div className="card-list" style={{ maxHeight: 760, overflow: 'auto', paddingRight: 4 }}>
                {announcements.map((announcement) => (
                  <article key={announcement.id} className="material-card">
                    <div className="material-row">
                      <div className="material-icon">📣</div>
                      <div className="material-content">
                        <h4 className="material-title">{announcement.body}</h4>
                        <div className="material-meta">
                          <span className="chip chip-primary">{safeArray(announcement.targetCourses).length ? safeArray(announcement.targetCourses).join(', ') : 'General'}</span>
                          <span className="chip">{formatDateTime(announcement.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="material-actions">
                      <button className="button button-danger button-pill" onClick={() => handleDeleteAnnouncement(announcement.id)}>Eliminar</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {selectedAdminTab === 'deliveries' && (
          <section className="admin-card">
            <div className="toolbar" style={{ marginTop: 0 }}>
              <div>
                <h3 className="section-title" style={{ marginBottom: 6 }}><span className="line" /> Taula de control d\'entregues <small>Vista de fitxers</small></h3>
                <div className="helper">Filtra i obre els fitxers directament des del panell.</div>
              </div>
              <div className="search-wrap" style={{ minWidth: 340 }}>
                <span className="search-icon">🔎</span>
                <input className="search-input" placeholder="Cerca alumne, curs o fitxer..." value={detailSearchQuery} onChange={(e) => setDetailSearchQuery(e.target.value)} />
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Alumne</th>
                    <th>Curs</th>
                    <th>Material</th>
                    <th>Fitxer</th>
                    <th>Data</th>
                    <th>Accions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleDeliveries.length === 0 && (
                    <tr><td colSpan="6">No hi ha entregues per mostrar.</td></tr>
                  )}
                  {visibleDeliveries.map((delivery) => (
                    <tr key={delivery.id}>
                      <td>
                        <strong>{delivery.studentName}</strong>
                        <div style={{ color: 'var(--text-soft)', fontSize: 12 }}>{delivery.studentEmail}</div>
                      </td>
                      <td>{delivery.courseId || delivery.curs || '—'}</td>
                      <td>{delivery.materialTitle || '—'}</td>
                      <td>{delivery.fileName}</td>
                      <td>{formatDateTime(delivery.createdAt)}</td>
                      <td>
                        <div className="material-actions" style={{ marginTop: 0 }}>
                          <button className="button button-primary button-pill" onClick={() => window.open(delivery.fileUrl, '_blank', 'noopener,noreferrer')}>Obrir fitxer</button>
                          <button className="button button-danger button-pill" onClick={() => handleDeleteDelivery(delivery.id)}>Eliminar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {selectedAdminTab === 'users' && (
          <section className="admin-card">
            <h3 className="section-title"><span className="line" /> Usuaris registrats <small>Perfil d\'alumnes i professors</small></h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Curs</th>
                    <th>Rol</th>
                    <th>Avatar</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((user) => (
                    <tr key={user.id || user.email}>
                      <td>{user.name || '—'}</td>
                      <td>{user.email || '—'}</td>
                      <td>{user.courseId || '—'}</td>
                      <td>{user.role || (user.email === ADMIN_EMAIL ? 'admin' : 'student')}</td>
                      <td>{user.photoURL ? <a href={user.photoURL} target="_blank" rel="noreferrer">Veure</a> : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    );
  };

  const renderCurrentView = () => {
    if (!currentUser) return renderAuthView();
    if (appView === 'detail') return renderDetailView();
    if (appView === 'admin') return renderAdminView();
    return renderHomeView();
  };

  const handleFooterLinkClick = (action) => {
    if (action === 'courses') setSearchQuery('');
    if (action === 'equacions') setSearchQuery('equacions');
    if (action === 'funcions') setSearchQuery('funcions');
    if (action === 'contact') window.open('mailto:' + ADMIN_EMAIL, '_blank');
  };

  return (
    <div className="app-shell">
      {renderTopbar()}
      {renderCurrentView()}

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={logoImg} alt={APP_NAME} />
            <div>
              <h3 style={{ margin: '0 0 6px', fontSize: 18, letterSpacing: '-0.04em' }}>{APP_NAME}</h3>
              <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.7 }}>
                Plataforma premium per a la gestió d\'una aula virtual de matemàtiques amb materials, comentaris, entregues i panell docent.
              </p>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navegació</h4>
            <button onClick={() => setAppView('home')}>Home</button>
            <button onClick={() => setAppView('detail')}>Detall de material</button>
            <button onClick={() => setAppView('admin')}>Panell admin</button>
          </div>
          <div className="footer-col">
            <h4>Accés ràpid</h4>
            <button onClick={() => handleFooterLinkClick('equacions')}>Materials d\'equacions</button>
            <button onClick={() => handleFooterLinkClick('funcions')}>Materials de funcions</button>
            <button onClick={() => handleFooterLinkClick('contact')}>Contacte</button>
          </div>
        </div>
        <div className="footer-copy">© 2026 {APP_NAME}. Tots els drets reservats.</div>
      </footer>

      <div className="toast-stack">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <div className="toast-title">{toast.title}</div>
            <p className="toast-text">{toast.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
