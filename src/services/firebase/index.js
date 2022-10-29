
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8J8wT1PzGpa3CEH9LCWSA8xfxKB5DWQY",
    authDomain: "backend-incrostore.firebaseapp.com",
    projectId: "backend-incrostore",
    storageBucket: "backend-incrostore.appspot.com",
    messagingSenderId: "109446199199",
    appId: "1:109446199199:web:6d57e20deb74ab9cdcafaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)