// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxGfGilvnQgIweUaHAO0tqlidu5Pqmp3E",
  authDomain: "simonfruteria-a232a.firebaseapp.com",
  projectId: "simonfruteria-a232a",
  storageBucket: "simonfruteria-a232a.appspot.com",
  messagingSenderId: "892858664901",
  appId: "1:892858664901:web:7adedb4e9411621923adac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);