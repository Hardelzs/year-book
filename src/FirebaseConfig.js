// Import necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4xhkf9kYKzoNPze0ZJ8wMmZg6yqGAg6c",
  authDomain: "yearbookapp-dee34.firebaseapp.com",
  projectId: "yearbookapp-dee34",
  storageBucket: "yearbookapp-dee34.appspot.com", // ✅ Corrected
  messagingSenderId: "500568333954",
  appId: "1:500568333954:web:3bb1ae14c637b3a818de9b",
  measurementId: "G-NDY4ZJD4ML" // You can keep this if using Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
