// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bronflix-react.firebaseapp.com",
  projectId: "bronflix-react",
  storageBucket: "bronflix-react.firebasestorage.app",
  messagingSenderId: "991830572273",
  appId: "1:991830572273:web:b889e9d614d5f79564bd50",
  measurementId: "G-PXJWG11CXC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
