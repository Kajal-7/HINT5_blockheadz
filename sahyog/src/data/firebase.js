// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDLdLSWi05xxzL6t-pkXAVkcNIy5Fsrnzo",
    authDomain: "sahyog-663c7.firebaseapp.com",
    projectId: "sahyog-663c7",
    storageBucket: "sahyog-663c7.appspot.com",
    messagingSenderId: "921911735208",
    appId: "1:921911735208:web:44977be8690cf6b230e39d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();