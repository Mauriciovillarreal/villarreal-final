// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  
    authDomain: "maurinho-ln.firebaseapp.com",
  
    projectId: "maurinho-ln",
  
    storageBucket: "maurinho-ln.appspot.com",
  
    messagingSenderId: "783600972551",
  
    appId: "1:783600972551:web:1703117afea4611da58ba2"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);