import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-DfXxXu6FyhVnWJPDqRkdTRpvlnqZyxw",
  authDomain: "learn-lingo-9c026.firebaseapp.com",
  projectId: "learn-lingo-9c026",
  storageBucket: "learn-lingo-9c026.appspot.com",
  messagingSenderId: "737873017439",
  appId: "1:737873017439:web:ddf6a1b5eae91d51a6f9ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
