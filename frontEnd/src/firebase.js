// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b3e08.firebaseapp.com",
  projectId: "mern-auth-b3e08",
  storageBucket: "mern-auth-b3e08.firebasestorage.app",
  messagingSenderId: "154099347875",
  appId: "1:154099347875:web:8803422e64e7e26957aa16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);