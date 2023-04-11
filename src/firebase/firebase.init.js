// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCCsu09neu267oKDAhp4NUErd8hx4e6Kw",
  authDomain: "fire-authentication-tanni.firebaseapp.com",
  projectId: "fire-authentication-tanni",
  storageBucket: "fire-authentication-tanni.appspot.com",
  messagingSenderId: "575808365242",
  appId: "1:575808365242:web:16a518aa07bab5066b1883",
  measurementId: "G-PG16DMV33B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;