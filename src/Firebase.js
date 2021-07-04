import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDI8nzNIRwZAUzv1fuLJq3TPggIo6Kw0mA",
    authDomain: "institute-management-sys-3a1b0.firebaseapp.com",
    projectId: "institute-management-sys-3a1b0",
    storageBucket: "institute-management-sys-3a1b0.appspot.com",
    messagingSenderId: "730952599819",
    appId: "1:730952599819:web:f23e92d8509bf1e194fa0e",
    measurementId: "G-FC7HK6BG9K"
  });
const db=firebase.firestore();
export {db}