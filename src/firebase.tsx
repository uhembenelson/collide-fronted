// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT1Mab-F3sq0ck7qmEKPWMS023Q_easC0",
  authDomain: "collide-africa.firebaseapp.com",
  projectId: "collide-africa",
  storageBucket: "collide-africa.appspot.com",
  messagingSenderId: "756568319033",
  appId: "1:756568319033:web:19ba50207154d23e9f19e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()