// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQ3H3MTpt6ifc8C-xRjrjAk0INjoakfeU",
    authDomain: "whats-app-clone-a991f.firebaseapp.com",
    projectId: "whats-app-clone-a991f",
    storageBucket: "whats-app-clone-a991f.appspot.com",
    messagingSenderId: "239234370072",
    appId: "1:239234370072:web:24b6e7c0608f02700c516d",
    measurementId: "G-5Q2VSEYJLY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;