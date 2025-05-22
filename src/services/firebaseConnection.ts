import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX4wJjW7h3LigHPamDQbrJZTt3cZNJEuk",
  authDomain: "reactlinks-affcc.firebaseapp.com",
  projectId: "reactlinks-affcc",
  storageBucket: "reactlinks-affcc.firebasestorage.app",
  messagingSenderId: "692409758655",
  appId: "1:692409758655:web:e4bd7a1d4af3d5a0e7270a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
