// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLzwWUMU9a9qzHJLKd30gArwsMEwavCJQ",
  authDomain: "movie-portal-716dd.firebaseapp.com",
  projectId: "movie-portal-716dd",
  storageBucket: "movie-portal-716dd.firebasestorage.app",
  messagingSenderId: "142235484029",
  appId: "1:142235484029:web:3d7d262e9df2f79ba79614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);