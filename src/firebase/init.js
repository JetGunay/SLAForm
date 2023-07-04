import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzDKe7-uPQxDCMuzLuJoOK1m4EKQcYX9w",
  authDomain: "wrikesla.firebaseapp.com",
  projectId: "wrikesla",
  storageBucket: "wrikesla.appspot.com",
  messagingSenderId: "626612114047",
  appId: "1:626612114047:web:7197a93aecdc1c93a4254a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { auth, timestamp };
export default firebaseApp.firestore();
