import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "adanahizlisatis",
  appId: "1:203264732382:web:b88552eafc132d1cc9664f",
  storageBucket: "adanahizlisatis.firebasestorage.app",
  apiKey: "AIzaSyBIDitQc86CVj7DFvv1lGyjZwiNmEOUhck",
  authDomain: "adanahizlisatis.firebaseapp.com",
  messagingSenderId: "203264732382",
  measurementId: "G-1YWL79NKCM"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export default app;
