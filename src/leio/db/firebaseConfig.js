import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7bY3LOXNFzvM86jPSQyG5i6L3Nnf4X_0",
  authDomain: "leio-app.firebaseapp.com",
  projectId: "leio-app",
  storageBucket: "leio-app.appspot.com",
  messagingSenderId: "1077605673545",
  appId: "1:1077605673545:web:7552bb30f32699d325ed98",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };