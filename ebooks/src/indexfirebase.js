// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArytHA5QLBBlANR9INKtvzqxbRupvncmY",
    authDomain: "free-book-reader3.firebaseapp.com",
    projectId: "free-book-reader3",
    storageBucket: "free-book-reader3.appspot.com",
    messagingSenderId: "721782687989",
    appId: "1:721782687989:web:195da30de8a38c787f5dbc",
    measurementId: "G-QGD40D8H1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);