// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0GegvNCPln1xL29rzT-EAtvApdftHno8",
    authDomain: "twitter-clone-c2b41.firebaseapp.com",
    projectId: "twitter-clone-c2b41",
    storageBucket: "twitter-clone-c2b41.appspot.com",
    messagingSenderId: "178658225324",
    appId: "1:178658225324:web:30559cc9ef6c1a0d504309",
    measurementId: "G-NTB7BML2LJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;