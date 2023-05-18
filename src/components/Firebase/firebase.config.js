// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5wj7vMEyQaiSBdXEeaUc6lKMeblPXRqs",
  authDomain: "sports-toyzone.firebaseapp.com",
  projectId: "sports-toyzone",
  storageBucket: "sports-toyzone.appspot.com",
  messagingSenderId: "110514601837",
  appId: "1:110514601837:web:78785e3d694f8186646464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;