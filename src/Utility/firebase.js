// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Note: modern Firebase uses modular imports

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd1tdLsUJ2CNCrkVZI4exaXh-OqB1q65g",
  authDomain: "fir-f5f51.firebaseapp.com",
  projectId: "fir-f5f51",
  storageBucket: "fir-f5f51.appspot.com",  
  messagingSenderId: "285115115649",
  appId: "1:285115115649:web:1ab69580abb66ae42b8580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 