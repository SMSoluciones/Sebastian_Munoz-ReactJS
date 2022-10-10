import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Esto me permitira inicializar el Firestore

const firebaseConfig = {
  //Credenciales de mi Firebase.
  apiKey: "AIzaSyA-iCwPXrzgQp2wsL34Vn7_yZWxIfVrRTs",
  authDomain: "angelo-ecommerce.firebaseapp.com",
  projectId: "angelo-ecommerce",
  storageBucket: "angelo-ecommerce.appspot.com",
  messagingSenderId: "1003909161373",
  appId: "1:1003909161373:web:f51e3940fed54b5c024f74",
};

const app = initializeApp(firebaseConfig); // Creacion de la App con la configuracion.
export const db = getFirestore(app); // Esto es lo unico que necesito actualmente para manejar la base de datos.
