import firebase from "firebase";


 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALMm6ebo7bZPf3eiv0Az7Qmcvg9nYr_RI",
    authDomain: "react-contact-form-18e8c.firebaseapp.com",
    projectId: "react-contact-form-18e8c",
    storageBucket: "react-contact-form-18e8c.appspot.com",
    messagingSenderId: "474016029828",
    appId: "1:474016029828:web:138d625e04afd3f8b7f6d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();



export { db };