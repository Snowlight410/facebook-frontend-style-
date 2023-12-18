// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHItBTVDkJtiPMtnmZUYjD5PdWoF85XNk",
  authDomain: "clone-16228.firebaseapp.com",
  projectId: "clone-16228",
  storageBucket: "clone-16228.appspot.com",
  messagingSenderId: "568953294094",
  appId: "1:568953294094:web:3e64a4c9737bd63fed9b5f",
  measurementId: "G-BJRPZKLB38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);



