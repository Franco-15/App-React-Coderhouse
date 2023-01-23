// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0yTwY1gkjw5ASzE9lvYmZxyaPjdypCX8",
  authDomain: "mdq-bebidas-react.firebaseapp.com",
  projectId: "mdq-bebidas-react",
  storageBucket: "mdq-bebidas-react.appspot.com",
  messagingSenderId: "659636376284",
  appId: "1:659636376284:web:92589588de9b6c2d559a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);