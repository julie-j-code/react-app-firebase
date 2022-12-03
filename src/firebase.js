// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVeJjQm4aOMw34oolR3COY9z7PuddLmAU",
  authDomain: "chat-app-react-b81aa.firebaseapp.com",
  projectId: "chat-app-react-b81aa",
  storageBucket: "chat-app-react-b81aa.appspot.com",
  messagingSenderId: "245096791355",
  appId: "1:245096791355:web:0e02445f7a1e0771c74b1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);