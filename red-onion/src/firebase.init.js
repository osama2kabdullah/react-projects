// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAejjO8TU6wYIiK0T5sEG1ryLqPrGQsxeM",
  authDomain: "red-onion-5cd41.firebaseapp.com",
  projectId: "red-onion-5cd41",
  storageBucket: "red-onion-5cd41.appspot.com",
  messagingSenderId: "599165172760",
  appId: "1:599165172760:web:05dbef77c65ce17d73976d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;