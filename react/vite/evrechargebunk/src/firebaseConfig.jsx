import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByJ2u48Ftfyf9EIIORjxhp2ABq1O7Ng_A",
  authDomain: "ev-bunks-bf43c.firebaseapp.com",
  projectId: "ev-bunks-bf43c",
  storageBucket: "ev-bunks-bf43c.appspot.com", // ✅ fixed
  messagingSenderId: "409604103659",
  appId: "1:409604103659:web:7bf1e40f6a62aa08664dae",
  measurementId: "G-PEQJMNW91D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);