// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-28ApvoSp0bDw-cbzq_MXNNmzFzxFTDk",
  authDomain: "volenteer-network-4706a.firebaseapp.com",
  projectId: "volenteer-network-4706a",
  storageBucket: "volenteer-network-4706a.appspot.com",
  messagingSenderId: "819416125200",
  appId: "1:819416125200:web:2886e0a2e198ee4ba79f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;