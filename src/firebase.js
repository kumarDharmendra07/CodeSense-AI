// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB18K_rbZMAh4a6qI2-BmfSCRGzXUpnSUI",
  authDomain: "codesense-ai-34d15.firebaseapp.com",
  projectId: "codesense-ai-34d15",
  storageBucket: "codesense-ai-34d15.firebasestorage.app",
  messagingSenderId: "476793534506",
  appId: "1:476793534506:web:154e9588504449d391eb53",
  measurementId: "G-WL7JQJP431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);