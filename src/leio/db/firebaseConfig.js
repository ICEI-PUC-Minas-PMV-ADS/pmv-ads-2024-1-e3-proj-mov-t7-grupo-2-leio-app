import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7bY3LOXNFzvM86jPSQyG5i6L3Nnf4X_0",
  authDomain: "leio-app.firebaseapp.com",
  projectId: "leio-app",
  storageBucket: "leio-app.appspot.com",
  messagingSenderId: "1077605673545",
  appId: "1:1077605673545:web:7552bb30f32699d325ed98",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
