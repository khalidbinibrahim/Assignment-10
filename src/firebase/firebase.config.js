// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIcQKHTJYmv6Tnd_VtZnhNdN2imQJQteE",
  authDomain: "khalid-bin-ibrahim-a10.firebaseapp.com",
  projectId: "khalid-bin-ibrahim-a10",
  storageBucket: "khalid-bin-ibrahim-a10.appspot.com",
  messagingSenderId: "924871530570",
  appId: "1:924871530570:web:fee5fa8e9cd10a3f54aeb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);