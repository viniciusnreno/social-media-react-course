// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN4BjtVjgFgqSxW49mtYN_zzNqEJt3FyA",
  authDomain: "social-media-b4276.firebaseapp.com",
  projectId: "social-media-b4276",
  storageBucket: "social-media-b4276.appspot.com",
  messagingSenderId: "38142100375",
  appId: "1:38142100375:web:150a247d907f28c00bfad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();