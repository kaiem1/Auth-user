// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDipJnZwBSB7Bc37Iek2TF171BdqJTJs5o",
  authDomain: "user-email-password-auth-3e860.firebaseapp.com",
  projectId: "user-email-password-auth-3e860",
  storageBucket: "user-email-password-auth-3e860.firebasestorage.app",
  messagingSenderId: "786543209296",
  appId: "1:786543209296:web:3ec778e13a3019885d5a55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;