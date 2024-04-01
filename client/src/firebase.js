// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-59c61.firebaseapp.com",
  projectId: "mern-blog-59c61",
  storageBucket: "mern-blog-59c61.appspot.com",
  messagingSenderId: "115042612041",
  appId: "1:115042612041:web:af56888e288bb7d093a098",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
