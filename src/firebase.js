// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyAUMUagQRFpq_B-kfcowUWe0G4PJnjg_hM",
  authDomain: "todo-list-app-2.firebaseapp.com",
  projectId: "todo-list-app-2",
  storageBucket: "todo-list-app-2.appspot.com",
  messagingSenderId: "649022254728",
  appId: "1:649022254728:web:ed9f54e562587612df793d",
  measurementId: "G-YTWQQGB0DD"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;