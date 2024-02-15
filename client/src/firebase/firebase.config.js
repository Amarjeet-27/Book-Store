// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const a = process.env.VITE_REACT_APP_APIKEY;
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: "book-store-21e92.firebaseapp.com",
  projectId: "book-store-21e92",
  storageBucket: "book-store-21e92.appspot.com",
  messagingSenderId: "379175433532",
  appId: "1:379175433532:web:f440fba341ae407f565a39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
