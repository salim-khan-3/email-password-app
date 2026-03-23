// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx3kA6tjqwJvUSvUcexBmzdaPzRVcfkwY",
  authDomain: "password-email-authentic-fb67f.firebaseapp.com",
  projectId: "password-email-authentic-fb67f",
  storageBucket: "password-email-authentic-fb67f.firebasestorage.app",
  messagingSenderId: "177638121803",
  appId: "1:177638121803:web:664019497d14a4385a48ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);