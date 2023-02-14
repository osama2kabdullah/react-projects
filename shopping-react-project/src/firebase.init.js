// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfSIhUbJYXjDR07HZrgaa5YVW99dE4DuI",
  authDomain: "ema-john-c6c7e.firebaseapp.com",
  projectId: "ema-john-c6c7e",
  storageBucket: "ema-john-c6c7e.appspot.com",
  messagingSenderId: "746744539055",
  appId: "1:746744539055:web:6b7540aca804228820715a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;