import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBP2cVuhOXdLnV2GI-iCrXcFTCBhsyWw7A",
    authDomain: "crwn-db-8dcbd.firebaseapp.com",
    projectId: "crwn-db-8dcbd",
    storageBucket: "crwn-db-8dcbd.appspot.com",
    messagingSenderId: "112683306650",
    appId: "1:112683306650:web:f52155d3fd4a7990dd9923",
    measurementId: "G-LZC341PY5S"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;