// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const key = import.meta.env.VITE_FIREBASE_API_KEY;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sophia-2a364.firebaseapp.com",
  projectId: "sophia-2a364",
  storageBucket: "sophia-2a364.firebasestorage.app",
  messagingSenderId: "108047513737",
  appId: "1:108047513737:web:fb62d026b7b3b6c95cae58",
  measurementId: "G-TVX76Z5GXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);