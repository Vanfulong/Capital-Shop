// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNF2yEr-lP1NBj8nonY5k4pMgZd3CroCc",
  authDomain: "capitalshop-5045f.firebaseapp.com",
  projectId: "capitalshop-5045f",
  storageBucket: "capitalshop-5045f.appspot.com",
  messagingSenderId: "71325677217",
  appId: "1:71325677217:web:32d598f2eff06ccc1be2e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
