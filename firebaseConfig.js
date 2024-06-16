// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd31cCwC8KEntKNI5sCxwT20GYSghS5Hc",
  authDomain: "nibm-test-app-7da6b.firebaseapp.com",
  projectId: "nibm-test-app-7da6b",
  storageBucket: "nibm-test-app-7da6b.appspot.com",
  messagingSenderId: "520409077608",
  appId: "1:520409077608:web:dcb23bda5c8bee901568dd",
  measurementId: "G-8ZQCL3J7LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);