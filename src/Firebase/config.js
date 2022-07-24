import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyA1WrRmnWPPpyg5b7pl_JsRrIcUBnAqXvA",
    authDomain: "authbycodeacademy.firebaseapp.com",
    projectId: "authbycodeacademy",
    storageBucket: "authbycodeacademy.appspot.com",
    messagingSenderId: "230826084647",
    appId: "1:230826084647:web:5bd019ed81a0a046684102",
    measurementId: "G-E2JRK7SJNG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };