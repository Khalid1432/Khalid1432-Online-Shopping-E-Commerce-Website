import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqPqcyIrchw0JPauPrvC2euIftqZ6cNIU",
  authDomain: "e-commerce-58a2f.firebaseapp.com",
  projectId: "e-commerce-58a2f",
  storageBucket: "e-commerce-58a2f.firebasestorage.app",
  messagingSenderId: "427144317012",
  appId: "1:427144317012:web:0821aaa2150a77abf605c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireDB = getFirestore(app);
export const auth = getAuth(app);