// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAML5aFAqu0XyP6w_EGjNHg4Vndu-A5oBM",
  authDomain: "aulasm25.firebaseapp.com",
  projectId: "aulasm25",
  storageBucket: "aulasm25.firebasestorage.app",
  messagingSenderId: "583827209336",
  appId: "1:583827209336:web:c23b8a4a233fa5c4ac018d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);