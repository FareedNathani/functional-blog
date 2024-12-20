// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK-CcQTOJ-eW_mjH4pv7i7r9Dphjunbf0",
  authDomain: "functional-blog.firebaseapp.com",
  projectId: "functional-blog",
  storageBucket: "functional-blog.firebasestorage.app",
  messagingSenderId: "817486813862",
  appId: "1:817486813862:web:6b6a063069f3e6dc3ab267",
  measurementId: "G-Y8TG4Y7Y8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
