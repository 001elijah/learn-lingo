import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

//Firebase pagination
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
//Firebase pagination
firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
//Firebase pagination
export const db = firebase.firestore();
