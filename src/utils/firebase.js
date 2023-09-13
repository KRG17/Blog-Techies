// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-techies.firebaseapp.com",
  projectId: "blog-techies",
  storageBucket: "blog-techies.appspot.com",
  messagingSenderId: "961071771754",
  appId: "1:961071771754:web:840245f4cefc222a495a13",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
