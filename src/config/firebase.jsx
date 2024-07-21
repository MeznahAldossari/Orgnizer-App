// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

// import storage from './firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKCouWZHLpz5sVecxA5Wud748DujbY30g",
  authDomain: "organizer-5c5b3.firebaseapp.com",
  projectId: "organizer-5c5b3",
  storageBucket: "organizer-5c5b3.appspot.com",
  messagingSenderId: "537030153048",
  appId: "1:537030153048:web:c677203826ec2a88670b2d",
  measurementId: "G-BCT2X5S0ME"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const storage = getStorage(app);

export default app