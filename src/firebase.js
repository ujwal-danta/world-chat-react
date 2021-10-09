// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAP5LDiJo4XNCDTZH31rdrBI3RVclzj-dw",
  authDomain: "react-messenger-clone-eea1b.firebaseapp.com",
  projectId: "react-messenger-clone-eea1b",
  storageBucket: "react-messenger-clone-eea1b.appspot.com",
  messagingSenderId: "30143874264",
  appId: "1:30143874264:web:f4da3ac573a778ac39c3ad"
});

// Initialize Firebase
const db = firebaseApp.firestore();
export {db};