import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBAD278half-GuEtISot3N2mKcm9ezuir4",
    authDomain: "reminder-app-react-3f291.firebaseapp.com",
    databaseURL: "https://reminder-app-react-3f291.firebaseio.com",
    projectId: "reminder-app-react-3f291",
    storageBucket: "reminder-app-react-3f291.appspot.com",
    messagingSenderId: "927747916516",
    appId: "1:927747916516:web:3e6be19d247dc49301a2f1",
    measurementId: "G-4YG7KQHC8H"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = fire.firestore();
export {fire,db};