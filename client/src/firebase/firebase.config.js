// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvClrEpJd6J5M87knSMIurWrgZrv1ATWM",
  authDomain: "book-store-3863a.firebaseapp.com",
  projectId: "book-store-3863a",
  storageBucket: "book-store-3863a.appspot.com",
  messagingSenderId: "578895643176",
  appId: "1:578895643176:web:08d88a73f387c47ce32b1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;