import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbvbgMgIwA8PTxAB6SqrtIKZ3DjN9BuxM",
  authDomain: "ev-auth-523db.firebaseapp.com",
  projectId: "ev-auth-523db",
  storageBucket: "ev-auth-523db.firebasestorage.app",
  messagingSenderId: "16921596730",
  appId: "1:16921596730:web:d78fe8a148ea5bd3e13603",
  measurementId: "G-YKM4K89E4C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};