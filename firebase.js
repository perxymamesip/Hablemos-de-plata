import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Añade esta importación

const firebaseConfig = {
  apiKey: "AIzaSyDupvUMZoFgMyCyWj9FUgr1bCRPwKILeSM",
  authDomain: "hablemos-de-plata.firebaseapp.com",
  projectId: "hablemos-de-plata",
  storageBucket: "hablemos-de-plata.firebasestorage.app",
  messagingSenderId: "234623845592",
  appId: "1:234623845592:web:8567dd7fec1d5d084a03ad",
  measurementId: "G-P6XELK3JPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializa Firestore

export { db }; // Exporta la referencia a la base de datos