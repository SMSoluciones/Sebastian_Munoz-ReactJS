import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-iCwPXrzgQp2wsL34Vn7_yZWxIfVrRTs",
  authDomain: "angelo-ecommerce.firebaseapp.com",
  projectId: "angelo-ecommerce",
  storageBucket: "angelo-ecommerce.appspot.com",
  messagingSenderId: "1003909161373",
  appId: "1:1003909161373:web:f51e3940fed54b5c024f74",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
