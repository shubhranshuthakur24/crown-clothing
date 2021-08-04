import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDVQ-OpbGoK-72jBA_6PpYO1h2qCvF1xYI",
  authDomain: "crown-db-e14ee.firebaseapp.com",
  projectId: "crown-db-e14ee",
  storageBucket: "crown-db-e14ee.appspot.com",
  messagingSenderId: "979203079456",
  appId: "1:979203079456:web:754cc88335e011f968ab45",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
