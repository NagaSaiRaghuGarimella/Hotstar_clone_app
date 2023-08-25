
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAey5s9H2eD8IOi9HGBwONiPELUkX985vY",
  authDomain: "disneyhotstar-clone-231c5.firebaseapp.com",
  projectId: "disneyhotstar-clone-231c5",
  storageBucket: "disneyhotstar-clone-231c5.appspot.com",
  messagingSenderId: "585128974390",
  appId: "1:585128974390:web:fef4b21683f1dc7543a097",
  measurementId: "G-93JBPNZWK3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
