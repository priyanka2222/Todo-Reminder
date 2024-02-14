// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCoERIkVeOlR2fbQRbSDTlkIjc2rIL9ZZ4",
    authDomain: "authentication-602db.firebaseapp.com",
    projectId: "authentication-602db",
    storageBucket: "authentication-602db.appspot.com",
    messagingSenderId: "434885943487",
    appId: "1:434885943487:web:20500849d7633fbde3a60a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;