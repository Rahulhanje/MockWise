
import { initializeApp ,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAJmGxzFVMgaT2eYESIzNy327c0W_G7ArI",
  authDomain: "mockwise-b0f90.firebaseapp.com",
  projectId: "mockwise-b0f90",
  storageBucket: "mockwise-b0f90.firebasestorage.app",
  messagingSenderId: "831521516674",
  appId: "1:831521516674:web:e6833cc70c0e141d58989b",
  measurementId: "G-0SNN08FT3C"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth= getAuth(app);

export const db=getFirestore(app);