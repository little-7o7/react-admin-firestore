import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQPKZrD6Pl-KlNZMM1_3HtMWdjVJXoqgw",
  authDomain: "react-admin-with-firebase.firebaseapp.com",
  databaseURL: "https://react-admin-with-firebase-default-rtdb.firebaseio.com",
  projectId: "react-admin-with-firebase",
  storageBucket: "react-admin-with-firebase.appspot.com",
  messagingSenderId: "874109331939",
  appId: "1:874109331939:web:dd1d57350ff704e2a618d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore()
