// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOPVD5JfEI5JLxaL6Jw9PO1e5GoRfmfHA",
  authDomain: "authentication-a83e5.firebaseapp.com",
  projectId: "authentication-a83e5",
  storageBucket: "authentication-a83e5.appspot.com",
  messagingSenderId: "836295128996",
  appId: "1:836295128996:web:4c7090fed40d78fa1f7331",
  measurementId: "G-GWY5GPE8QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;