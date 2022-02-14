import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBLtA9gymWQ6w3uuN0ifMQhJLojZPBdDG8",
    authDomain: "challenge-93b0a.firebaseapp.com",
    projectId: "challenge-93b0a",
    storageBucket: "challenge-93b0a.appspot.com",
    messagingSenderId: "963356065020",
    appId: "1:963356065020:web:0097ab9f36d19e29a06b79",
    measurementId: "G-W048J3BN37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };