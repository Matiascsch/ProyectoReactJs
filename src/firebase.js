import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz47EMsS5SAY1i_Ohlbu51J3yzhw002_s",
  authDomain: "explore-pf-mcs.firebaseapp.com",
  projectId: "explore-pf-mcs",
  storageBucket: "explore-pf-mcs.appspot.com",
  messagingSenderId: "1008925133341",
  appId: "1:1008925133341:web:e902a35ee5579e574294f4",
  measurementId: "G-W3HLY4F0TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);