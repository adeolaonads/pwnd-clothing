import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDVT3tel4fFzI9vVE7Gpmj353M-BHjx6Zo",
  authDomain: "pwnd-clothing-db.firebaseapp.com",
  projectId: "pwnd-clothing-db",
  storageBucket: "pwnd-clothing-db.appspot.com",
  messagingSenderId: "707614402101",
  appId: "1:707614402101:web:3cfb8d625a60ad5ab2337c",
  measurementId: "G-2MR74BT8CB",
};

const app = initializeApp(config);

// firebase.initializeApp(config);

const auth = getAuth();
const db = getFirestore();

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account '});
// const signInWithGoogle = () => auth.signInWithPopup(provider)

// export default firebase;
export {app, db, auth, provider}