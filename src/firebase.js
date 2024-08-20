// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlLeGg2w4vwDEHlT5kHqJ3OJafkY3-jiE",
  authDomain: "rayhan-ba768.firebaseapp.com",
  projectId: "rayhan-ba768",
  storageBucket: "rayhan-ba768.appspot.com",
  messagingSenderId: "1054901339445",
  appId: "1:1054901339445:web:c081f71bb0bca32b9c787c",
  measurementId: "G-5EPY8KZBSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();