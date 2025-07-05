// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4IybSqm34ynXkjbQEciLhG_7-dM7A7B0",
  authDomain: "react-course-acc25.firebaseapp.com",
  projectId: "react-course-acc25",
  storageBucket: "react-course-acc25.firebasestorage.app",
  messagingSenderId: "511504391688",
  appId: "1:511504391688:web:26316209aedf2a889e3bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

