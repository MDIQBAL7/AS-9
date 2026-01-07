// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVyWnWRaxehs2NQdlhuq0YDw7dJOeIct4",
  authDomain: "toytopia-d9340.firebaseapp.com",
  projectId: "toytopia-d9340",
  storageBucket: "toytopia-d9340.firebasestorage.app",
  messagingSenderId: "427458311078",
  appId: "1:427458311078:web:27ffdc1486a262e9021567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);