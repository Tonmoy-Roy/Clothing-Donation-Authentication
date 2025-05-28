// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7f9ljCc4cww2f2TKkrooECcMoXFYyaF4",
  authDomain: "clothing-donation-fe0e7.firebaseapp.com",
  projectId: "clothing-donation-fe0e7",
  storageBucket: "clothing-donation-fe0e7.firebasestorage.app",
  messagingSenderId: "540727169397",
  appId: "1:540727169397:web:ec375809c1664da3cbc33c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
