import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKt7ohI-0yt8Fsu-pKQytJYtIS_yL6ieo",
  authDomain: "instantchat-d740d.firebaseapp.com",
  projectId: "instantchat-d740d",
  storageBucket: "instantchat-d740d.appspot.com",
  messagingSenderId: "84504443",
  appId: "1:84504443:web:14cdf4420ccd3a9c8f57de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);