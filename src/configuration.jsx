// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZATqzf9iF-wH5ZSOPpHtsgDT5RcIwkG4",
  authDomain: "profil-khairiyah.firebaseapp.com",
  projectId: "profil-khairiyah",
  storageBucket: "profil-khairiyah.appspot.com",
  messagingSenderId: "259668615640",
  appId: "1:259668615640:web:0e7650aae503f7d52452ad",
  measurementId: "G-9P80YDJQQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);