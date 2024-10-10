// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // Fixed getFireStore to getFirestore
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // GoogleAuthProvider is usually capitalized

 
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3zwvvyFPM8mcOyGgdCfJPRtNr85V5aRU",
  authDomain: "wavelink-app-46c1f.firebaseapp.com",
  projectId: "wavelink-app-46c1f",
  storageBucket: "wavelink-app-46c1f.appspot.com",
  messagingSenderId: "880638936510",
  appId: "1:880638936510:web:5e6debfa27a769f98825ef",
  measurementId: "G-QP5R91YDE1"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
//const analytics = getAnalytics(app);

export {db, auth, provider }