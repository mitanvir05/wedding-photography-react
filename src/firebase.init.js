// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd3fVyWGs9pw7-iozWn9qA-eBVE0RgKbU",
  authDomain: "photography-43e85.firebaseapp.com",
  projectId: "photography-43e85",
  storageBucket: "photography-43e85.appspot.com",
  messagingSenderId: "237757764499",
  appId: "1:237757764499:web:49c49674d8c778f458ce66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
