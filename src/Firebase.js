import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaYmKKDmz0BUehUvHHuimQ17cmYqm1BeE",
    authDomain: "react-277fd.firebaseapp.com",
    databaseURL: "https://react-277fd.firebaseio.com",
    projectId: "react-277fd",
    storageBucket: "react-277fd.appspot.com",
    messagingSenderId: "561050914518",
    appId: "1:561050914518:web:d48ebb716aac850d370377",
    measurementId: "G-7V1PLSSX8M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;